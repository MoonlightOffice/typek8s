import { client } from "internal/di/client.ts"
import { service } from "internal/di/service.ts"

async function run() {
  const param = client.parameterClient.readAppParameter()

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
