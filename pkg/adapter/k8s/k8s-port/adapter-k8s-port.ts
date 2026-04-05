import { "@std/yaml" as stdYaml, "openapi-typescript" as openapiTypescript, "ts-util" as tsUtil, port } from "./deps.ts"

interface KubeConfig {
  clusters: {
    name: string
    cluster: {
      "certificate-authority-data": string
      server: string
    }
  }[]

  contexts: {
    name: string
    context: {
      cluster: string
      user: string
    }
  }[]

  "current-context": string

  users: {
    name: string
    user: {
      "client-certificate-data": string
      "client-key-data": string
    }
  }[]
}

interface parseKubeconfigResult {
  server: string
  caCert: string
  cert: string
  key: string
}

interface XK8sGroupVersionKind {
  group: string
  version: string
  kind: string
}

function parseKubeconfig(kubeconfigStr: string): tsUtil.Result<parseKubeconfigResult> {
  try {
    const cfg = stdYaml.parse(kubeconfigStr) as KubeConfig

    const currentContextName = cfg["current-context"]
    const context = cfg.contexts.find((context) => context.name === currentContextName)?.context
    if (!context) return tsUtil.result(false, `parseKubeconfig: context not found: ${currentContextName}`)

    const cluster = cfg.clusters.find((cluster) => cluster.name === context.cluster)?.cluster
    if (!cluster?.server) return tsUtil.result(false, "parseKubeconfig: cluster server not found")
    const user = cfg.users.find((user) => user.name === context.user)?.user
    if (!user) return tsUtil.result(false, "parseKubeconfig: user not found")

    return tsUtil.result(true, {
      server: cluster.server,
      caCert: atob(cluster["certificate-authority-data"]),
      cert: atob(user["client-certificate-data"]),
      key: atob(user["client-key-data"]),
    })
  } catch {
    return tsUtil.result(false, "parseKubeconfig: invalid kubeconfig")
  }
}

export class AdapterK8sPort implements port.k8s.K8sPort {
  /**
   * Fetch all Kubernetes OpenAPI documents exposed by the target cluster.
   */
  async getAllOpenApi(kubeconfigStr: string): Promise<tsUtil.Result<port.k8s.getAllOpenApiResult[]>> {
    using stack = new DisposableStack()

    const parseKubeconfigResult = parseKubeconfig(kubeconfigStr)
    if (parseKubeconfigResult.err !== null) {
      return tsUtil.result(false, parseKubeconfigResult.err)
    }

    const client = Deno.createHttpClient({
      caCerts: [parseKubeconfigResult.val.caCert],
      cert: parseKubeconfigResult.val.cert,
      key: parseKubeconfigResult.val.key,
    })
    stack.defer(() => {
      client.close()
    })

    const resp = await fetch(`${parseKubeconfigResult.val.server}/openapi/v3`, {
      client,
      headers: { accept: "application/json" },
    })
    if (resp.status !== 200) {
      return tsUtil.result(false, `getAllOpenApi: failed to fetch the list of OpenAPI`)
    }

    // Create a map of apiVersion and url for each api resources

    interface Paths {
      [path: string]: {
        serverRelativeURL: string
      }
    }

    const paths: Paths = (await resp.json())["paths"]
    const versionAndPathMap: { apiVersion: string; serverRelativeURL: string }[] = []

    for (const path of Object.keys(paths)) {
      const pathSplitted = path.split("/")
      if (pathSplitted.length <= 1) {
        continue
      }
      if (pathSplitted[0] !== "api" && pathSplitted[0] !== "apis") {
        continue
      }

      const apiVersion = pathSplitted.slice(1).join("/")
      const serverRelativeURL = paths[path].serverRelativeURL

      versionAndPathMap.push({ apiVersion, serverRelativeURL })
    }

    // Retrieve OpenAPI yaml
    const output: port.k8s.getAllOpenApiResult[] = []

    const retrieveOutputItem = async (path: {
      apiVersion: string
      serverRelativeURL: string
    }) => {
      const url = new URL(path.serverRelativeURL, parseKubeconfigResult.val.server)
      const resp = await fetch(url, {
        client,
        headers: { accept: "application/json" },
      })
      if (resp.status !== 200) {
        throw Error(`status: ${resp.status}, body: ${await resp.text()}`)
      }

      output.push({ apiVersion: path.apiVersion, openApi: await resp.text() })
    }

    const promises: Promise<void>[] = []
    for (const path of versionAndPathMap) {
      promises.push(retrieveOutputItem(path))
    }

    await Promise.all(promises)

    return tsUtil.result(true, output)
  }

  /**
   * Retrieve supported schema names.
   *
   * @param apiVersion apiVersion you're interested in
   * @param openapi Kubernetes OpenAPI in JSON format
   * @returns schema and resource names supported by given apiVersion
   */
  private getSupportedSchemaNames(
    apiVersion: string,
    openapi: string,
  ): Array<{ resourceName: string; schemaName: string }> {
    const schemas = JSON.parse(openapi)?.components?.schemas
    if (schemas === undefined || typeof schemas !== "object" || schemas === null) {
      return []
    }

    const output = new Map<string, { resourceName: string; schemaName: string }>()

    for (const schemaName of Object.keys(schemas)) {
      const schema = schemas[schemaName]
      if (schema === undefined || typeof schema !== "object" || schema === null) {
        continue
      }
      if (!Object.hasOwn(schema, "x-kubernetes-group-version-kind")) {
        continue
      }

      const xK8sGroupVersionKinds = schema["x-kubernetes-group-version-kind"]
      if (!Array.isArray(xK8sGroupVersionKinds)) {
        continue
      }

      for (const xK8sGroupVersionKind of xK8sGroupVersionKinds as XK8sGroupVersionKind[]) {
        const xApiVersion = xK8sGroupVersionKind.group === ""
          ? xK8sGroupVersionKind.version
          : `${xK8sGroupVersionKind.group}/${xK8sGroupVersionKind.version}`

        if (xApiVersion !== apiVersion) {
          continue
        }

        output.set(`${xK8sGroupVersionKind.kind}\0${schemaName}`, {
          schemaName,
          resourceName: xK8sGroupVersionKind.kind,
        })
      }
    }

    return Array.from(output.values())
  }

  /**
   * Convert a Kubernetes OpenAPI document into TypeScript type declarations.
   */
  async openApiToTypes(apiVersion: string, openapiStr: string): Promise<string> {
    let openapiJson: Parameters<typeof openapiTypescript.default>[0]
    try {
      openapiJson = JSON.parse(openapiStr) as Parameters<typeof openapiTypescript.default>[0]
    } catch {
      return ""
    }

    let schemaAndResourceNames: Array<{ resourceName: string; schemaName: string }>
    try {
      schemaAndResourceNames = this.getSupportedSchemaNames(apiVersion, openapiStr)
    } catch {
      return ""
    }
    if (schemaAndResourceNames.length === 0) {
      return ""
    }

    try {
      const ts = openapiTypescript.astToString(await openapiTypescript.default(openapiJson))

      const template = `
type Resource<T, U> = Omit<T, "status"> & { apiVersion: "${apiVersion}"; kind: U }

export interface api {
  ${
        schemaAndResourceNames
          .map((schemaAndResourceName) =>
            `${schemaAndResourceName.resourceName}: Resource<components["schemas"]["${schemaAndResourceName.schemaName}"], "${schemaAndResourceName.resourceName}">`
          )
          .join("\n  ")
      }
}

export default api
`

      return `${ts}${template}`
    } catch {
      return ""
    }
  }

  /**
   * Build a mod.ts file that re-exports generated type modules in input order.
   */
  typeFilesToModFile(fileNames: string[]): Promise<File> {
    const lines = fileNames
      .filter((fileName) => fileName !== "mod.ts")
      .map((fileName) => {
        const baseName = fileName.endsWith(".ts") ? fileName.slice(0, -3) : fileName
        const parts = baseName.split(".")
        const alias = parts[0] +
          parts.slice(1).map((part) => `${part[0]?.toUpperCase() ?? ""}${part.slice(1)}`).join("")

        return `export type { api as ${alias} } from "./${fileName}"`
      })

    const content = lines.length === 0 ? "" : `${lines.join("\n")}\n`

    return Promise.resolve(new File([content], "mod.ts", { type: "text/typescript" }))
  }
}
