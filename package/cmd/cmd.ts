import { di } from "./deps.ts"
const { service } = di

async function run() {
  const command = Deno.args[0]

  if (!command || !["synth", "generate"].includes(command)) {
    console.error("Usage: typek8s <synth|generate>")
    Deno.exit(1)
  }

  // Initialize app state from configuration
  service.initService.init(command)

  // Run the appropriate command
  if (command === "generate") {
    await service.appService.run()
  }
}

await run()
