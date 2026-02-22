/**
 * Parameters for overall typek8s application
 */
export interface App {
  synth: {
    type: "chart" | "manifest"
    out: string
  }

  generate: {
    out: string
    source: "server" | "file"
    serverBaseUrl: string
    apiVersion: string
    openApiFilePath: string
  }
}
