export interface Chart {
  name: string
  version: string
  repository: string
  values: {
    [key: string]: object
  }
}
