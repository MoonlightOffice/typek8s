import { "ts-util" as tsUtil, port } from "./deps.ts"

export class AdapterHelmPort implements port.k8s.HelmPort {
  constructor(
    private readonly fileIOPort: port.fileIo.FileIOPort,
  ) {}

  /**
   * Synthesize manifests, CRDs, and dependency charts into a Helm chart archive.
   */
  synth(params: port.k8s.SynthParams): Promise<tsUtil.Result<File>> {
    void params

    // TODO: Implement chart synthesis from manifests, CRDs, and dependency charts.
    return Promise.reject(new Error("TODO: AdapterHelmPort.synth is not implemented"))
  }
}
