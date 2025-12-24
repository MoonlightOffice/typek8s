import type { FileIOClient, ParameterClient } from "internal/core/client/io.ts"
import type { K8sClient } from "internal/core/client/k8s.ts"
import { FileIOClientImpl } from "internal/impl/io/file-io-client.ts"
import { ParameterClientImpl } from "internal/impl/io/parameter-client.ts"
import { K8sClientImpl } from "internal/impl/k8s/k8s.ts"

export interface Client {
  fileIOClient: FileIOClient
  parameterClient: ParameterClient
  k8sClient: K8sClient
}

export const client: Client = {
  fileIOClient: new FileIOClientImpl(),
  parameterClient: new ParameterClientImpl(),
  k8sClient: new K8sClientImpl(""),
}
