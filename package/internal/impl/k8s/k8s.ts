import { K8sClient } from "internal/core/client/k8s.ts"
import openapiTS, { astToString } from "openapi-typescript"

interface XK8sGroupVersionKind {
  group: string
  kind: string
  version: string
}

export class K8sClientImpl implements K8sClient {
  constructor(private serverBaseUrl: string) {}

  setBaseURL(baseurl: string): void {
    this.serverBaseUrl = baseurl
  }

  /**
   * Paths that doesn't start with api/ or apis/ are ignored.
   *
   * @returns List of map of apiVersion and serverRelativeURL
   */
  private async getVersionAndPathMap(): Promise<{ apiVersion: string; serverRelativeURL: string }[]> {
    // Call Kubernetes OpenAPI endpoint to retrieve the list of api resources' OpenAPI endpoints

    const url = new URL("/openapi/v3", this.serverBaseUrl)

    const resp = await fetch(url)
    if (resp.status !== 200) {
      throw Error(`status: ${resp.status}, body: ${await resp.text()}`)
    }

    // Create a map of apiVersion and url for each api resources

    interface Paths {
      [path: string]: {
        serverRelativeURL: string
      }
    }

    const paths: Paths = (await resp.json())["paths"]
    const output: { apiVersion: string; serverRelativeURL: string }[] = []

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

      output.push({ apiVersion, serverRelativeURL })
    }

    return output
  }

  /**
   * @returns List of apiVersion and OpenAPI JSON string
   */
  async getAllOpenApi(): Promise<{ apiVersion: string; openApi: string }[]> {
    const output: { apiVersion: string; openApi: string }[] = []

    const retrieveOutputItem = async (path: {
      apiVersion: string
      serverRelativeURL: string
    }) => {
      const url = new URL(path.serverRelativeURL, this.serverBaseUrl)
      const resp = await fetch(url)
      if (resp.status !== 200) {
        throw Error(`status: ${resp.status}, body: ${await resp.text()}`)
      }

      output.push({ apiVersion: path.apiVersion, openApi: await resp.text() })
    }

    const openApiMap = await this.getVersionAndPathMap()
    const promises: Promise<void>[] = []
    for (const path of openApiMap) {
      promises.push(retrieveOutputItem(path))
    }

    await Promise.all(promises)

    return output
  }

  /**
   * Retrieve supported schema names.
   *
   * @param apiVersion apiVersion you're interested in
   * @param openapi Kubernetes OpenAPI in JSON format
   * @returns schema and resource names supported by given apiVersion
   */
  private getSupportedSchemaNames(apiVersion: string, openapi: string): Set<{
    resourceName: string
    schemaName: string
  }> {
    const schemas = JSON.parse(openapi)["components"]["schemas"]
    if (schemas === undefined) {
      return new Set()
    }

    const output = new Set<{
      resourceName: string
      schemaName: string
    }>()

    for (const schemaName of Object.keys(schemas)) {
      if (!Object.hasOwn(schemas[schemaName], "x-kubernetes-group-version-kind")) {
        continue
      }

      const xK8sGroupVersionKinds: XK8sGroupVersionKind[] = schemas[schemaName]["x-kubernetes-group-version-kind"]
      xK8sGroupVersionKinds.map((xK8sGroupVersionKind) => {
        const xApiVersion = ((): string => {
          if (xK8sGroupVersionKind.group === "") {
            return xK8sGroupVersionKind.version
          }
          return `${xK8sGroupVersionKind.group}/${xK8sGroupVersionKind.version}`
        })()

        if (xApiVersion !== apiVersion) {
          return
        }

        output.add({
          schemaName: schemaName,
          resourceName: xK8sGroupVersionKind.kind,
        })
      })
    }

    return output
  }

  /**
   * Returns TypeScript file created from given OpenAPI. If there are no resources with given apiVersion, an empty string
   * will be returned.
   * @param apiVersion Kubernetes apiVersion. i.e.) apps/v1, storage.k8s.io/v1
   * @param openapi OpenAPI for Kubernetes api resources
   * @returns TypeScript file content
   */
  async openApiToTypes(apiVersion: string, openapi: string): Promise<string> {
    const schemaAndResourceNames = this.getSupportedSchemaNames(apiVersion, openapi)
    if (schemaAndResourceNames.size === 0) {
      return ""
    }

    const ts = astToString(await openapiTS(JSON.parse(openapi)))

    // Create resource types for default export
    const template = `
type Resource<T, U> = Omit<T, "status"> & { apiVersion: "${apiVersion}", kind: U}

export interface api {
  ${
      Array
        .from(schemaAndResourceNames)
        .map((s) => {
          return `${s.resourceName}: Resource<components["schemas"]["${s.schemaName}"], "${s.resourceName}">`
        })
        .join("\n  ")
    }
}

export default api
`

    return ts + template
  }
}
