import { "@std/yaml" as stdYaml, "ts-util" as tsUtil, port } from "./deps.ts"

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
   * Convert a Kubernetes OpenAPI document into TypeScript type declarations.
   */
  openApiToTypes(apiVersion: string, openapiStr: string): Promise<string> {
    void apiVersion
    void openapiStr

    // TODO: Implement Kubernetes OpenAPI to TypeScript generation.
    return Promise.reject(new Error("TODO: AdapterK8sPort.openApiToTypes is not implemented"))
  }

  /**
   * Build a mod.ts file that re-exports generated type modules in input order.
   */
  typeFilesToModFile(fileNames: string[]): Promise<File> {
    void fileNames

    // TODO: Implement mod.ts generation for generated Kubernetes type files.
    return Promise.reject(new Error("TODO: AdapterK8sPort.typeFilesToModFile is not implemented"))
  }
}
