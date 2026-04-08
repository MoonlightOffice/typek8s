import { entity } from "./deps.ts"
import { "ts-util" as tsUtil } from "./deps.ts"

export interface SynthParams {
  /** The name of the output chart. */
  name: string
  /** Kubernetes manifests to include in the chart. */
  manifests: entity.Manifest[]
  /** Local YAML file paths for custom resource definitions to apply to the cluster. */
  crdPaths?: string[]
  /** Helm charts to include as dependencies. */
  depCharts?: entity.Chart[]
}

/** Port for Helm operations. */
export interface HelmPort {
  /**
   * Synthesizes the provided Kubernetes manifests, CRDs, and dependency charts
   * into a chart with the given name.
   * @param params Parameters for synthesis.
   * @return A result containing the synthesized Helm chart archive tarball (`.tgz`).
   */
  synth(params: SynthParams): Promise<tsUtil.Result<File>>
}
