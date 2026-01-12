/**
 * Parameters for overall typek8s application
 */
export interface App {
  synth: {
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
