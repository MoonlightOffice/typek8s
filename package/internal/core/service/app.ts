import { FileIOClient } from "internal/core/client/io.ts"
import { K8sClient } from "internal/core/client/k8s.ts"
import { apiVersionToFileName } from "internal/core/entity/k8s-util.ts"

export class AppService {
  constructor(
    private readonly fileIoClient: FileIOClient,
    private readonly k8sClient: K8sClient,
  ) {}

  /**
   * Generates
   * @param dir output directory
   * @param apiVersion
   * @param openApi
   */
  private async createTypeFilesFromOpenApi(dir: string, apiVersion: string, openApi: string) {
    const tsContent = await this.k8sClient.openApiToTypes(apiVersion, openApi)
    if (tsContent === "") {
      return
    }
    this.fileIoClient.write(dir, apiVersionToFileName(apiVersion), tsContent)
  }

  async runWithFile(outDir: string, apiVersion: string, openApiFilePath: string) {
    await this.createTypeFilesFromOpenApi(
      outDir,
      apiVersion,
      this.fileIoClient.read(openApiFilePath),
    )
  }

  async runWithServer(outDir: string) {
    const openApis = await this.k8sClient.getAllOpenApi()
    for (const { apiVersion, openApi } of openApis) {
      await this.createTypeFilesFromOpenApi(outDir, apiVersion, openApi)
    }
  }
}
