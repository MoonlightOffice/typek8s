import { "ts-util" as tsUtil, port } from "./deps.ts"

/**
 * User-facing inputs for `SynthService.synth`.
 *
 * This extends the lower-level `port.synth.SynthParams` with service concerns:
 * output placement and optional credentials for OCI-backed dependency charts.
 * Before delegating to `SynthPort`, the service resolves any dependency chart
 * whose `chartURL` starts with `oci://` into a temporary local chart archive
 * and rewrites that dependency to point at the local archive path.
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

export class SynthService {
  constructor(
    private readonly fileIOPort: port.fileIo.FileIOPort,
    private readonly helmPort: port.k8s.HelmPort,
    private readonly synthPort: port.synth.SynthPort,
  ) {}

  /**
   * Synthesizes the requested chart and writes the resulting chart archive to
   * the output directory.
   *
   * @param params Synthesis inputs plus optional output-directory and Helm
   * credential settings.
   * @returns `tsUtil.result(true)` when synthesis succeeds, or an error when it fails.
   */
  async synth(params: SynthParams): Promise<tsUtil.Result<void>> {
    // TODO: implement me
    return tsUtil.result(false)
  }
}
