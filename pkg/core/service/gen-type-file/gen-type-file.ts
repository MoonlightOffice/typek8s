import { "ts-util" as tsUtil, port } from "./deps.ts"

export interface GenTypeFileService {
  /**
   * Connect to the Kubernetes cluster described by the given kubeconfig, fetch all API
   * resources, and save them as TypeScript files in the specified directory.
   *
   * Generated files are written directly under `outDir` without nested directories.
   * Each file name is derived from its API version by replacing `/` with `.`, such as
   * `apps.v1.ts`, `metrics.k8s.io.v1beta1.ts`, or `storage.k8s.io.v1.ts`.
   *
   * @param kubeconfigStr Kubeconfig file string.
   * @param outDir Output directory.
   */
  generate(kubeconfigStr: string, outDir: string): Promise<tsUtil.Result<void>>
}

export class DefaultGenTypeFileService implements GenTypeFileService {
  constructor(
    private readonly fileIOPort: port.fileIo.FileIOPort,
    private readonly k8sPort: port.k8s.K8sPort,
  ) {}

  async generate(kubeconfigStr: string, outDir: string): Promise<tsUtil.Result<void>> {
    const openApiRes = await this.k8sPort.getAllOpenApi(kubeconfigStr)
    if (openApiRes.err != null) {
      return tsUtil.result(false, openApiRes.err)
    }

    const typeFiles = await Promise.all(openApiRes.val.map(async ({ apiVersion, openApi }) => ({
      apiVersion,
      types: await this.k8sPort.openApiToTypes(apiVersion, openApi),
    })))

    this.fileIOPort.mkdir(outDir)
    for (const { apiVersion, types } of typeFiles) {
      if (types.length === 0) {
        continue
      }
      this.fileIOPort.write(outDir, `${apiVersion.replaceAll("/", ".")}.ts`, types)
    }

    return tsUtil.result(true, undefined)
  }
}
