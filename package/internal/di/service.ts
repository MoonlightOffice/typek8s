import client from "./client.ts"
import { service } from "./deps.ts"

export interface Service {
  appService: service.AppService
  initService: service.InitService
  synthService: service.SynthService
}

export default {
  appService: new service.AppService(client.fileIOClient, client.k8sClient, client.appStateClient),
  initService: new service.InitService(client.appStateClient, client.parameterClient),
  synthService: new service.SynthService(client.fileIOClient, client.httpClient),
} satisfies Service
