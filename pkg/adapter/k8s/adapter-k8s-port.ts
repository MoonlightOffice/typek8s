import { "ts-util" as tsUtil, port } from "./deps.ts"

export class AdapterK8sPort implements port.k8s.K8sPort {
  /**
   * Fetch all Kubernetes OpenAPI documents exposed by the target cluster.
   */
  getAllOpenApi(kubeconfigStr: string): Promise<tsUtil.Result<port.k8s.getAllOpenApiResult[]>> {
    void kubeconfigStr

    // TODO: Implement Kubernetes OpenAPI discovery from kubeconfig input.
    return Promise.reject(new Error("TODO: AdapterK8sPort.getAllOpenApi is not implemented"))
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
