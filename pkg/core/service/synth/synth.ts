import { "@std/path" as stdPath, "ts-util" as tsUtil, port } from "./deps.ts"

/**
 * User-facing inputs for `SynthService.synth`.
 *
 * This extends the lower-level `port.synth.SynthParams` with service concerns:
 * output placement and optional credentials for OCI-backed dependency charts.
 * Before delegating to `SynthPort`, the service resolves any dependency chart
 * whose `chartURL` starts with `oci://` into a temporary local chart archive
 * and rewrites that dependency to point at the temporary local archive path.
 */
export interface SynthParams extends port.synth.SynthParams {
  /** Output directory for the synthesized chart archive. When omitted, `./out/` is used. */
  outDir?: string

  /**
   * Optional Helm credential used when a dependency chart uses an `oci://`
   * URL, including private registries that require authentication.
   */
  helmCredential?: port.k8s.HelmPortCredential
}

/**
 * Service for synthesizing chart archives from manifests and dependency charts.
 */
export class SynthService {
  constructor(
    private readonly fileIOPort: port.fileIo.FileIOPort,
    private readonly helmPort: port.k8s.HelmPort,
    private readonly synthPort: port.synth.SynthPort,
  ) {}

  private buildTempChartFileName(chartName: string, pulledFileName: string, index: number): string {
    const baseName = pulledFileName.trim().length > 0 ? pulledFileName : `${chartName}.tgz`

    return `${index}-${baseName}`
  }

  /**
   * Synthesizes the requested chart and writes the resulting chart archive to
   * the output directory.
   *
   * @param params Synthesis inputs plus optional output-directory and Helm
   * credential settings.
   * @returns `tsUtil.result(true)` when synthesis succeeds, or an error when it fails.
   */
  async synth(params: SynthParams): Promise<tsUtil.Result<void>> {
    const outDir = params.outDir ?? "out"
    using stack = new DisposableStack()
    const depCharts = params.depCharts
    const hasOCIChart = depCharts?.some((depChart) => depChart.chartURL.startsWith("oci://")) ?? false
    const tempDirPath = hasOCIChart ? stdPath.join(".tmp", `typek8s-synth-${crypto.randomUUID()}`) : null
    if (tempDirPath != null) {
      this.fileIOPort.mkdir(tempDirPath)
      // Remove the shared temp directory after all async rewrite work completes.
      stack.defer(() => this.fileIOPort.remove(tempDirPath))
    }

    const rewrittenDepChartResList: Array<tsUtil.Result<NonNullable<port.synth.SynthParams["depCharts"]>[number]>> =
      await Promise.all((depCharts ?? []).map(async (depChart, index) => {
        if (!depChart.chartURL.startsWith("oci://")) {
          return tsUtil.result(true, depChart)
        }

        // Pull OCI charts concurrently, but materialize each one to a unique temp archive path.
        const pullRes = this.helmPort.pullChart({
          path: depChart.chartURL,
          credential: params.helmCredential,
        })
        if (pullRes.err != null) {
          return tsUtil.result(false, pullRes.err)
        }

        const pulledChart = await pullRes.val
        const tempFileName = this.buildTempChartFileName(depChart.name, pulledChart.name, index)
        const tempFilePath = stdPath.join(tempDirPath!, tempFileName)

        this.fileIOPort.write(tempDirPath!, tempFileName, await pulledChart.text())

        return tsUtil.result(true, {
          ...depChart,
          chartURL: tempFilePath,
        })
      }))

    // `Promise.all` preserves input order, so the rewritten dependency list still matches the original chart order.
    const depChartErrRes = rewrittenDepChartResList.find((rewrittenDepChartRes) => rewrittenDepChartRes.err != null)
    if (depChartErrRes?.err != null) {
      return tsUtil.result(false, depChartErrRes.err)
    }

    const rewrittenDepCharts = rewrittenDepChartResList.map((rewrittenDepChartRes) => rewrittenDepChartRes.val)

    const synthRes = await this.synthPort.synth({
      name: params.name,
      manifests: params.manifests,
      crds: params.crds,
      depCharts: rewrittenDepCharts.length === 0 ? undefined : rewrittenDepCharts,
    })
    if (synthRes.err != null) {
      return tsUtil.result(false, synthRes.err)
    }

    this.fileIOPort.mkdir(outDir)
    this.fileIOPort.write(outDir, `${params.name}.tgz`, await synthRes.val.text())

    return tsUtil.result(true, undefined)
  }
}
