import { client, impl } from "./deps.ts"

export interface Client {
  fileIOClient: client.FileIOClient
  httpClient: client.HttpClient
  k8sClient: client.K8sClient
  manifestSerializerClient: client.ManifestSerializerClient
  helmBuilderClient: client.HelmBuilderClient
  crdLoaderClient: client.CrdLoaderClient
}

const fileIOClient = new impl.io.FileIOClientImpl()
const httpClient = new impl.io.HttpClientImpl()
const k8sClient = new impl.k8s.K8sClientImpl()
const manifestSerializerClient = new impl.io.ManifestSerializerClientImpl()
const helmBuilderClient = new impl.helm.HelmBuilderClientImpl()
const crdLoaderClient = new impl.io.CrdLoaderClientImpl(fileIOClient, httpClient)

export default {
  fileIOClient: fileIOClient,
  httpClient: httpClient,
  k8sClient: k8sClient,
  manifestSerializerClient: manifestSerializerClient,
  helmBuilderClient: helmBuilderClient,
  crdLoaderClient: crdLoaderClient,
} satisfies Client
