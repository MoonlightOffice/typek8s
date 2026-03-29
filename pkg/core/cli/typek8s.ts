import { "@std/cli" as stdCli, port, service } from "./deps.ts"

export interface Typek8sCliOutput {
  stdout(message: string): void
  stderr(message: string): void
}

type ParsedArgs = {
  _: string[]
  help?: boolean
  h?: boolean
  kubeconfig?: string
  out?: string
  [key: string]: unknown
}

export class Typek8sCli {
  static readonly HELP_TEXT: string = `Usage:
  typek8s -h
  typek8s --help
  typek8s generate --kubeconfig <path> [--out <dir>]

Options:
  -h, --help             Show this help text.
  --kubeconfig <path>    Path to the kubeconfig file.
  --out <dir>            Output directory. Defaults to ./out/.`

  static readonly DEFAULT_OUT_DIR: string = "./out/"

  constructor(
    private readonly genTypeFileService: service.genTypeFile.GenTypeFileService,
    private readonly fileIOPort: port.fileIo.FileIOPort,
    private readonly output: Typek8sCliOutput = {
      stdout: (message) => console.log(message),
      stderr: (message) => console.error(message),
    },
  ) {}

  private validateParsedArgs(parsedArgs: ParsedArgs): string | null {
    const allowedKeys = new Set(["_", "help", "h", "kubeconfig", "out"])
    const unexpectedFlags = Object.keys(parsedArgs)
      .filter((key) => !allowedKeys.has(key))
      .map((key) => (key.length === 1 ? `-${key}` : `--${key}`))
      .sort((left, right) => left.localeCompare(right))
    if (unexpectedFlags.length > 0) {
      return `unknown flag: ${unexpectedFlags.join(", ")}`
    }

    if (parsedArgs.help) {
      return null
    }

    if (parsedArgs._.length === 0) {
      return "missing command"
    }

    if (parsedArgs._[0] !== "generate") {
      return `unknown command: ${parsedArgs._[0]}`
    }

    if (parsedArgs._.length > 1) {
      return `unexpected arguments: ${parsedArgs._.slice(1).join(" ")}`
    }

    if (typeof parsedArgs.kubeconfig !== "string" || parsedArgs.kubeconfig.length === 0) {
      return "missing required flag: --kubeconfig"
    }

    if (typeof parsedArgs.out !== "string" || parsedArgs.out.length === 0) {
      return "invalid value for --out"
    }

    return null
  }

  async run(args: string[] = Deno.args): Promise<number> {
    const parsedArgs = stdCli.parseArgs(args, {
      boolean: ["help"],
      string: ["kubeconfig", "out"],
      alias: {
        help: ["h"],
      },
      default: {
        out: Typek8sCli.DEFAULT_OUT_DIR,
      },
    }) as ParsedArgs

    const parseError = this.validateParsedArgs(parsedArgs)
    if (parseError != null) {
      this.output.stderr(`${parseError}\n\n${Typek8sCli.HELP_TEXT}`)
      return 1
    }

    if (parsedArgs.help) {
      this.output.stdout(Typek8sCli.HELP_TEXT)
      return 0
    }

    const kubeconfigPath = parsedArgs.kubeconfig!
    const kubeconfigRes = this.fileIOPort.read(kubeconfigPath)
    if (kubeconfigRes.err != null) {
      this.output.stderr(`failed to read kubeconfig: ${String(kubeconfigRes.err)}`)
      return 1
    }

    const generateRes = await this.genTypeFileService.generate(kubeconfigRes.val, parsedArgs.out!)
    if (generateRes.err != null) {
      this.output.stderr(`failed to generate types: ${String(generateRes.err)}`)
      return 1
    }

    return 0
  }
}
