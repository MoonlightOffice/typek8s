/** Intended to describe Helm chart dependencies. */
export interface Chart {
  name: string
  version: string
  /** Local path to a dependency chart archive, either relative or absolute. */
  chartPath: string
  /** Override the Helm chart values for this dependency here. */
  values: unknown
}
