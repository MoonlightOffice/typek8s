import { "@std/tar" as stdTar, "@std/yaml" as stdYaml, "ts-util" as tsUtil, port, util } from "./deps.ts"

export class AdapterHelmPort implements port.k8s.HelmPort {
  constructor(
    private readonly fileIOPort: port.fileIo.FileIOPort,
  ) {}

  /**
   * Synthesize manifests, CRDs, and dependency charts into a Helm chart archive.
   */
  async synth(params: port.k8s.SynthParams): Promise<tsUtil.Result<File>> {
    try {
      const contentByPath = new Map<string, Uint8Array<ArrayBuffer>>([
        [
          `${params.name}/Chart.yaml`,
          util.stringToBytes(stdYaml.stringify({
            apiVersion: "v2",
            name: params.name,
            version: "0.1.0",
            type: "application",
          })),
        ],
        [
          `${params.name}/values.yaml`,
          util.stringToBytes(stdYaml.stringify(Object.fromEntries(
            (params.depCharts ?? []).map((depChart) => [depChart.name, depChart.values]),
          ))),
        ],
        [
          `${params.name}/manifests.yaml`,
          util.stringToBytes(params.manifests.map((manifest) => stdYaml.stringify(manifest)).join("\n---\n")),
        ],
      ])

      for (const [index, crdPath] of (params.crdPaths ?? []).entries()) {
        const crdRes = this.fileIOPort.read(crdPath)
        if (crdRes.err != null) {
          return tsUtil.result(false, crdRes.err)
        }

        contentByPath.set(`${params.name}/crds/${index + 1}.yaml`, crdRes.val)
      }

      for (const depChart of params.depCharts ?? []) {
        const depChartRes = this.fileIOPort.read(depChart.chartPath)
        if (depChartRes.err != null) {
          return tsUtil.result(false, depChartRes.err)
        }

        contentByPath.set(
          `${params.name}/charts/${depChart.name}-${depChart.version}.tgz`,
          depChartRes.val,
        )
      }

      const archiveStream = ReadableStream.from(
        Array.from(contentByPath.entries()).map(([path, content]) => ({
          type: "file" as const,
          path,
          size: content.length,
          readable: new Blob([content]).stream(),
        })),
      )
        .pipeThrough(new stdTar.TarStream())
        .pipeThrough(new CompressionStream("gzip"))

      return tsUtil.result(
        true,
        new File([await new Response(archiveStream).arrayBuffer()], `${params.name}.tgz`, { type: "application/gzip" }),
      )
    } catch (err) {
      return tsUtil.result(false, new tsUtil.Err(String(err)))
    }
  }
}
