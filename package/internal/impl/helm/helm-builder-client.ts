import { client, entity } from "../deps.ts"

export class HelmBuilderClientImpl implements client.HelmBuilderClient {
  constructor() {}

  buildChartYaml(
    chartName: string,
    dependencies?: Array<{ name: string; version: string; repository: string }>,
  ): Record<string, unknown> {
    const chartYaml: Record<string, unknown> = {
      apiVersion: "v2",
      name: chartName,
      version: "0.0.0",
      type: "application",
    }

    // Add dependencies if charts are provided
    if (dependencies && dependencies.length > 0) {
      chartYaml.dependencies = dependencies
    }

    return chartYaml
  }

  mergeChartValues(charts: entity.Chart[]): Record<string, unknown> {
    if (charts.length === 0) {
      return {}
    }

    // Merge all chart values into a single object
    const mergedValues: Record<string, unknown> = {}
    for (const chart of charts) {
      Object.assign(mergedValues, chart.values)
    }

    return mergedValues
  }
}
