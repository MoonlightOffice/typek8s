import type { FileIOClient, ParameterClient } from "internal/core/client/io.ts"
import type { K8sClient } from "internal/core/client/k8s.ts"
import type { AppStateClient } from "internal/core/client/state.ts"
import { FileIOClientImpl } from "internal/impl/io/file-io-client.ts"
import { ParameterClientImpl } from "internal/impl/io/parameter-client.ts"
import { K8sClientImpl } from "internal/impl/k8s/k8s.ts"
import { AppStateClientImpl } from "internal/impl/state/app-state-client.ts"

export interface Client {
  fileIOClient: FileIOClient
  parameterClient: ParameterClient
  k8sClient: K8sClient
  appStateClient: AppStateClient
}

const fileIOClient = new FileIOClientImpl()
const appStateClient = new AppStateClientImpl({
  synth: { out: "./chart/" },
  generate: {
    out: "./api/",
    source: "server",
    serverBaseUrl: "http://localhost:8001",
    apiVersion: "example.com/v1",
    openApiFilePath: "./path/to/openapi.yaml",
  },
})
const parameterClient = new ParameterClientImpl()
const k8sClient = new K8sClientImpl(appStateClient)

export const client: Client = {
  appStateClient: appStateClient,
  fileIOClient: fileIOClient,
  parameterClient: parameterClient,
  k8sClient: k8sClient,
}
