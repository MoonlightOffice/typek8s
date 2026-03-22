/** Intended to describe Helm chart dependencies. */
export interface Chart {
  name: string
  version?: string
  /** Paths with `oci://` and `file://` are supported. */
  chartURL: string
  /** Override the Helm chart values for this dependency here. */
  values: {
    [key: string]: object
  }
}

/**
 * Intended to represent the path to the CRD YAML file for a Helm dependency chart. The path prefix must be `file://`.
 */
export type CRDPath = string
