import { di } from "./deps.ts"
const { service } = di

const DEFAULT_SERVER_BASE_URL = "http://localhost:8001"
const DEFAULT_OUTPUT_DIRECTORY = "./api/"

function usage(): string {
  return [
    "Usage:",
    "  typek8s generate",
    `  typek8s generate --server="${DEFAULT_SERVER_BASE_URL}" --out="./api/"`,
  ].join("\n")
}

function parseGenerateArgs(args: string[]) {
  let serverBaseUrl = DEFAULT_SERVER_BASE_URL
  let out = DEFAULT_OUTPUT_DIRECTORY

  for (let i = 0; i < args.length; i++) {
    const rawArg = args[i]
    if (!rawArg.startsWith("--")) {
      throw new Error(`Unknown argument: ${rawArg}`)
    }

    const [flag, inlineValue] = rawArg.split("=", 2)

    const readValue = () => {
      if (inlineValue !== undefined) {
        return inlineValue
      }
      const nextArg = args[i + 1]
      if (nextArg === undefined || nextArg.startsWith("--")) {
        throw new Error(`Missing value for ${flag}`)
      }
      i++
      return nextArg
    }

    switch (flag) {
      case "--server":
        serverBaseUrl = readValue()
        break
      case "--out":
        out = readValue()
        break
      default:
        throw new Error(`Unknown flag: ${flag}`)
    }
  }

  return { serverBaseUrl, out }
}

async function run() {
  const [command, ...args] = Deno.args

  if (command !== "generate") {
    console.error(usage())
    Deno.exit(1)
  }

  let options: { serverBaseUrl: string; out: string }
  try {
    options = parseGenerateArgs(args)
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error)
    console.error(message)
    console.error("")
    console.error(usage())
    Deno.exit(1)
  }

  await service.appService.generate(options)
}

await run()
