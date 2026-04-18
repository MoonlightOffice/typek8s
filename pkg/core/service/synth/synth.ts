import { "ts-util" as tsUtil, entity, port } from "./deps.ts"

/**
 * User-facing inputs for `SynthService.synth`.
 *
 * This extends the lower-level `port.k8s.SynthParams` with service concerns:
 * output placement.
 */
export interface SynthParams extends port.k8s.SynthParams {
  /** Output directory for the synthesized chart archive. When omitted, `./dist/` is used. */
  outDir?: string
}

/**
 * Service for synthesizing chart archives from manifests and dependency charts.
 */
export class SynthService {
  constructor(
    private readonly fileIOPort: port.fileIo.FileIOPort,
    private readonly helmPort: port.k8s.HelmPort,
  ) {}

  private isLocalChartPath(path: string): boolean {
    return path.trim().length > 0 &&
      !/^[A-Za-z][A-Za-z\d+.-]*:/.test(path)
  }

  /**
   * Synthesizes the requested chart and writes the resulting chart archive to
   * the output directory.
   *
   * @param params Synthesis inputs plus optional output-directory settings.
   * @returns `tsUtil.result(true)` when synthesis succeeds, or an error when it fails.
   */
  async synth(params: SynthParams): Promise<tsUtil.Result<void>> {
    const outDir = params.outDir ?? "dist"
    this.fileIOPort.remove(outDir)

    const invalidDepChart = params.depCharts?.find((depChart) => !this.isLocalChartPath(depChart.chartPath))
    if (invalidDepChart != null) {
      return tsUtil.result(
        false,
        new tsUtil.Err(`dependency chart must use a local path: ${invalidDepChart.chartPath}`).add(
          entity.ErrInvalid,
        ),
      )
    }

    const synthRes = await this.helmPort.synth({
      name: params.name,
      manifests: params.manifests,
      crdPaths: params.crdPaths,
      depCharts: params.depCharts?.length === 0 ? undefined : params.depCharts,
    })
    if (synthRes.err != null) {
      return tsUtil.result(false, synthRes.err)
    }

    this.fileIOPort.mkdir(outDir)
    this.fileIOPort.write(outDir, `${params.name}.tgz`, new Uint8Array(await synthRes.val.arrayBuffer()))

    return tsUtil.result(true, undefined)
  }
}
