import { AppService } from "internal/core/service/app.ts"
import { client } from "./client.ts"

export interface Service {
  appService: AppService
}

export function newService(serverBaseUrl: string): Service {
  client.k8sClient.setBaseURL(serverBaseUrl)
  return {
    appService: new AppService(client.fileIOClient, client.k8sClient),
  }
}
