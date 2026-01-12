import { client, core } from "./deps.ts"

export class AppService {
  constructor(
    private readonly fileIoClient: client.FileIOClient,
    private readonly k8sClient: client.K8sClient,
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
    this.fileIoClient.write(dir, core.apiVersionToFileName(apiVersion), tsContent)
  }

  /**
   * Create mod.ts files in the specified directory that contains all files in the same directory.
   * @param dir output directory
   */
  private createModFile(dir: string) {
    const files = this.fileIoClient.listFiles(dir, "*.ts")
    const tsFiles = files.filter((f) => f !== "mod.ts") // Exclude mod.ts itself

    const exportStatements = tsFiles
      .sort() // Sort alphabetically
      .map((filename) => {
        const alias = core.fileNameToExportAlias(filename)
        return `export type { api as ${alias} } from "./${filename}"`
      })
      .join("\n")

    this.fileIoClient.write(dir, "mod.ts", exportStatements + "\n")
  }

  async runWithFile(outDir: string, apiVersion: string, openApiFilePath: string) {
    await this.createTypeFilesFromOpenApi(
      outDir,
      apiVersion,
      this.fileIoClient.read(openApiFilePath),
    )

    this.createModFile(outDir)
  }

  async runWithServer(outDir: string) {
    const openApis = await this.k8sClient.getAllOpenApi()
    for (const { apiVersion, openApi } of openApis) {
      await this.createTypeFilesFromOpenApi(outDir, apiVersion, openApi)
    }

    this.createModFile(outDir)
  }
}
