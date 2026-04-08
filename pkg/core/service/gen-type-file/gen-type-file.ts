import { "ts-util" as tsUtil, port, util } from "./deps.ts"

/**
 * Service for generating TypeScript files from Kubernetes OpenAPI documents.
 */
export class GenTypeFileService {
  constructor(
    private readonly fileIOPort: port.fileIo.FileIOPort,
    private readonly k8sPort: port.k8s.K8sPort,
  ) {}

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
  async generate(kubeconfigStr: string, outDir: string): Promise<tsUtil.Result<void>> {
    const openApiRes = await this.k8sPort.getAllOpenApi(kubeconfigStr)
    if (openApiRes.err != null) {
      return tsUtil.result(false, openApiRes.err)
    }

    const typeFiles = await Promise.all(openApiRes.val.map(async ({ apiVersion, openApi }) => {
      const fileName = `${apiVersion.replaceAll("/", ".")}.ts`
      return {
        fileName,
        types: await this.k8sPort.openApiToTypes(apiVersion, openApi),
      }
    }))

    this.fileIOPort.mkdir(outDir)
    const writtenFileNames: string[] = []
    for (const { fileName, types } of typeFiles) {
      if (types.length === 0) {
        continue
      }
      this.fileIOPort.write(outDir, fileName, util.stringToBytes(types))
      writtenFileNames.push(fileName)
    }

    const modFile = await this.k8sPort.typeFilesToModFile(writtenFileNames)
    this.fileIOPort.write(outDir, modFile.name, util.stringToBytes(await modFile.text()))

    return tsUtil.result(true, undefined)
  }
}
