export interface K8sClient {
  /**
   * Calls Kubernetes OpenAPI path and fetch all API schemas available from the server.
   */
  getAllOpenApi(serverBaseUrl: string): Promise<{ apiVersion: string; openApi: string }[]>

  /**
   * Parse given Kubernetes OpenAPI JSON schema and generate TypeScript code.
   *
   * @param apiVersion If there's no resource matching given apiVersion in given openapi json, an empty string will be returned.
   * @param openapi TypeScript schema in json format. The location list of schema files are available in `http(s)://{KUBERNETES_SERVER_BASE_URL}/openapi/v3`
   * @returns Kubernetes API schema in TypeScript types format. If there are no valid schema, this will return an empty string.
   */
  openApiToTypes(apiVersion: string, openapi: string): Promise<string>
}
