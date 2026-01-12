import { AppService } from "internal/app/service/app.ts"
import { InitService } from "internal/app/service/init.ts"
import { client } from "./client.ts"

export interface Service {
  appService: AppService
  initService: InitService
}

export const service: Service = {
  appService: new AppService(client.fileIOClient, client.k8sClient),
  initService: new InitService(client.appStateClient, client.parameterClient),
}
