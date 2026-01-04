import { client } from "internal/di/client.ts"
import { service } from "internal/di/service.ts"

async function run() {
  const command = Deno.args[0]

  if (!command || !["synth", "generate"].includes(command)) {
    console.error("Usage: typek8s <synth|generate>")
    Deno.exit(1)
  }

  const app = client.parameterClient.readConfig(command)

  // At this point, command is "generate" (synth would have thrown)
  const generate = app.generate

  switch (generate.source) {
    case "file":
      await service.appService.runWithFile(
        generate.out,
        generate.apiVersion,
        generate.openApiFilePath,
      )
      break
    case "server":
      await service.appService.runWithServer(generate.out)
      break
  }
}

await run()
