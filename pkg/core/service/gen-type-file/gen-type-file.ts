import { "ts-util" as tsUtil } from "./deps.ts"

export interface GenTypeFileService {
  /**
   * Connect to the Kubernetes cluster described by the given kubeconfig, fetch all API
   * resources, and save them as TypeScript files in the specified directory.
   *
   * @param kubeconfigStr Kubeconfig file string.
   * @param outDir Output directory.
   */
  generate(kubeconfigStr: string, outDir: string): tsUtil.Result<void>
}
