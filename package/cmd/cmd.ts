import { client } from "internal/di/client.ts"
import { newService } from "internal/di/service.ts"

async function run() {
  const param = client.parameterClient.readAppParameter()

  const service = newService(param.serverBaseUrl!)

  switch (param.openApiFrom) {
    case "file":
      await service.appService.runWithFile(param.outputDirectory, param.apiVersion!, param.openApiFilePath!)
      break
    case "server":
      await service.appService.runWithServer(param.outputDirectory)
      break
  }
}

await run()
