export interface Chart {
  values: {
    [key: string]: object
  }
}

export interface Construct {
  apiResources: object[]
  crds: object[]
  helmCharts: Chart
}
