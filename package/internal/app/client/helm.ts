import { entity } from "./deps.ts"

export interface HelmBuilderClient {
  /**
   * Build Chart.yaml metadata object.
   * Encapsulates Helm chart specification format.
   */
  buildChartYaml(
    chartName: string,
    dependencies?: Array<{ name: string; version: string; repository: string }>,
  ): Record<string, unknown>

  /**
   * Merge values from multiple charts into a single values object.
   */
  mergeChartValues(charts: entity.Chart[]): Record<string, unknown>
}
