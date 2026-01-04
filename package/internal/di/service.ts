import { AppService } from "internal/core/service/app.ts"
import { client } from "./client.ts"

export interface Service {
  appService: AppService
}

export const service: Service = {
  appService: new AppService(client.fileIOClient, client.k8sClient),
}
