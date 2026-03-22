/**
 * Port for Kubernetes-specific schema operations, including fetching OpenAPI
 * documents from a cluster and converting them into TypeScript types.
 */
export interface K8sPort {
  /**
   * Calls the Kubernetes OpenAPI endpoint and fetchs all API schemas available from the server in JSON format.
   * @param kubeconfig Kubeconfig YAML string, available by running the command: `kubectl config view --minify --raw`.
   */
  getAllOpenApi(kubeconfigStr: string): Promise<{ apiVersion: string; openApi: string }[]>

  /**
   * Parse the provided Kubernetes OpenAPI JSON schema and generate TypeScript code.
   *
   * @param apiVersion If no resource matches the given `apiVersion` in the provided OpenAPI JSON, an empty string will be returned.
   * @param openapiStr Kubernetes api resource schemas in JSON format.`
   * @returns Kubernetes API resource schemas as TypeScript types. If there are no valid schemas, this returns an empty string.
   */
  openApiToTypes(apiVersion: string, openapiStr: string): Promise<string>
}
