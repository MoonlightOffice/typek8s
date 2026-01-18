import { client, impl } from "./deps.ts"

export interface Client {
  fileIOClient: client.FileIOClient
  httpClient: client.HttpClient
  parameterClient: client.ParameterClient
  k8sClient: client.K8sClient
  appStateClient: client.AppStateClient
  manifestSerializerClient: client.ManifestSerializerClient
  helmBuilderClient: client.HelmBuilderClient
  crdLoaderClient: client.CrdLoaderClient
}

const fileIOClient = new impl.io.FileIOClientImpl()
const httpClient = new impl.io.HttpClientImpl()
const appStateClient = new impl.state.AppStateClientImpl({
  synth: { type: "chart", out: "./chart/" },
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
const manifestSerializerClient = new impl.io.ManifestSerializerClientImpl()
const helmBuilderClient = new impl.helm.HelmBuilderClientImpl()
const crdLoaderClient = new impl.io.CrdLoaderClientImpl(fileIOClient, httpClient)

export default {
  appStateClient: appStateClient,
  fileIOClient: fileIOClient,
  httpClient: httpClient,
  parameterClient: parameterClient,
  k8sClient: k8sClient,
  manifestSerializerClient: manifestSerializerClient,
  helmBuilderClient: helmBuilderClient,
  crdLoaderClient: crdLoaderClient,
} satisfies Client
