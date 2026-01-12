import { client, impl } from "./deps.ts"

export interface Client {
  fileIOClient: client.FileIOClient
  parameterClient: client.ParameterClient
  k8sClient: client.K8sClient
  appStateClient: client.AppStateClient
}

const fileIOClient = new impl.io.FileIOClientImpl()
const appStateClient = new impl.state.AppStateClientImpl({
  synth: { out: "./chart/" },
  generate: {
    out: "./api/",
    source: "server",
    serverBaseUrl: "http://localhost:8001",
    apiVersion: "example.com/v1",
    openApiFilePath: "./path/to/openapi.yaml",
  },
})
const parameterClient = new impl.io.ParameterClientImpl(fileIOClient)
const k8sClient = new impl.k8s.K8sClientImpl(appStateClient)

export default {
  appStateClient: appStateClient,
  fileIOClient: fileIOClient,
  parameterClient: parameterClient,
  k8sClient: k8sClient,
} satisfies Client
