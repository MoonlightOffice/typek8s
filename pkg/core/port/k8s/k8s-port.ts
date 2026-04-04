import { "ts-util" as tsUtil } from "./deps.ts"

/** OpenAPI document fetched from a Kubernetes cluster for one API version. */
export interface getAllOpenApiResult {
  apiVersion: string
  openApi: string
}

/**
 * Port for Kubernetes-specific schema operations, including fetching OpenAPI
 * documents from a cluster and converting them into TypeScript types.
 */
export interface K8sPort {
  /**
   * Calls the Kubernetes OpenAPI endpoint and fetchs all API schemas available from the server in JSON format.
   * @param kubeconfig Kubeconfig YAML string, available by running the command: `kubectl config view --minify --raw`.
   * @returns All API schemas available from the server in JSON format.
   */
  getAllOpenApi(kubeconfigStr: string): Promise<tsUtil.Result<getAllOpenApiResult[]>>

  /**
   * Parse the provided Kubernetes OpenAPI JSON schema and generate TypeScript code.
   *
   * @param apiVersion If no resource matches the given `apiVersion` in the provided OpenAPI JSON, an empty string will be returned.
   * @param openapiStr Kubernetes api resource schemas in JSON format.`
   * @returns Kubernetes API resource schemas as TypeScript types. If there are no valid schemas, this returns an empty string.
   */
  openApiToTypes(apiVersion: string, openapiStr: string): Promise<string>

  /**
   * Create a `mod.ts` file that re-exports generated type objects from the provided file names.
   *
   * @param fileNames Generated TypeScript file names such as `storage.k8s.io.v1.ts`.
   * Input order is preserved in the generated `mod.ts`.
   * @returns A file named `mod.ts` whose content re-exports the generated types.
   */
  typeFilesToModFile(fileNames: string[]): Promise<File>
}
