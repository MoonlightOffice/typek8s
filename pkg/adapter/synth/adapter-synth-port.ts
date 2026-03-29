import { "ts-util" as tsUtil, port } from "./deps.ts"

export class AdapterSynthPort implements port.synth.SynthPort {
  /**
   * Synthesize manifests, CRDs, and dependency charts into a Helm chart archive.
   */
  synth(params: port.synth.SynthParams): Promise<tsUtil.Result<File>> {
    void params

    // TODO: Implement chart synthesis from manifests, CRDs, and dependency charts.
    return Promise.reject(new Error("TODO: AdapterSynthPort.synth is not implemented"))
  }
}
