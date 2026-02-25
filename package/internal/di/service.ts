import client from "./client.ts"
import { service } from "./deps.ts"

export interface Service {
  appService: service.AppService
  synthService: service.SynthService
}

export default {
  appService: new service.AppService(client.fileIOClient, client.k8sClient),
  synthService: new service.SynthService(
    client.fileIOClient,
    client.manifestSerializerClient,
    client.helmBuilderClient,
    client.crdLoaderClient,
  ),
} satisfies Service
