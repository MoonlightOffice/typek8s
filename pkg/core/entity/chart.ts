/** Intended to describe Helm chart dependencies. */
export interface Chart {
  name: string
  version?: string
  /** Supports `oci://` registry URLs and local chart archive paths. */
  chartURL: string
  /** Override the Helm chart values for this dependency here. */
  values: {
    [key: string]: object
  }
}

/**
 * Intended to represent the path to a CRD YAML file for a Helm dependency chart.
 * Use a plain path string, either relative or absolute.
 */
export type CRDPath = string
