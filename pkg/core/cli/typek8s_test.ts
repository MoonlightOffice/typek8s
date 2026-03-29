import { "@std/assert" as stdAssert, "ts-util" as tsUtil, entity, port } from "./deps.ts"
import { DefaultTypek8sCli } from "./typek8s.ts"
import type { Typek8sCliOutput } from "./typek8s.ts"
import type { GenTypeFileService } from "../service/gen-type-file/mod.ts"

class RecordingGenTypeFileService implements GenTypeFileService {
  calls: Array<{ kubeconfigStr: string; outDir: string }> = []

  constructor(private readonly result: tsUtil.Result<void> = tsUtil.result(true, undefined)) {}

  generate(kubeconfigStr: string, outDir: string): Promise<tsUtil.Result<void>> {
    this.calls.push({ kubeconfigStr, outDir })
    return Promise.resolve(this.result)
  }
}

Deno.test("DefaultTypek8sCli.run", async (t) => {
  type In = {
    args: string[]
    files?: Record<string, string>
    serviceResult?: tsUtil.Result<void>
  }

  type Want = {
    exitCode: number
    stdout: string[]
    stderr: string[]
    serviceCalls: Array<{ kubeconfigStr: string; outDir: string }>
  }

  const tests: Array<{ name: string; in: In; want: Want }> = [
    {
      name: "-h prints help text and does not call the service",
      in: {
        args: ["-h"],
      },
      want: {
        exitCode: 0,
        stdout: [
          `Usage:
  typek8s -h
  typek8s --help
  typek8s generate --kubeconfig <path> [--out <dir>]

Options:
  -h, --help             Show this help text.
  --kubeconfig <path>    Path to the kubeconfig file.
  --out <dir>            Output directory. Defaults to ./out/.`,
        ],
        stderr: [],
        serviceCalls: [],
      },
    },
    {
      name: "--help prints help text and does not call the service",
      in: {
        args: ["--help"],
      },
      want: {
        exitCode: 0,
        stdout: [
          `Usage:
  typek8s -h
  typek8s --help
  typek8s generate --kubeconfig <path> [--out <dir>]

Options:
  -h, --help             Show this help text.
  --kubeconfig <path>    Path to the kubeconfig file.
  --out <dir>            Output directory. Defaults to ./out/.`,
        ],
        stderr: [],
        serviceCalls: [],
      },
    },
    {
      name: "generate with an explicit out dir reads the kubeconfig file and forwards its contents",
      in: {
        args: ["generate", "--kubeconfig", "configs/dev.yaml", "--out", "generated/types"],
        files: {
          "configs/dev.yaml": "cluster-alpha",
        },
      },
      want: {
        exitCode: 0,
        stdout: [],
        stderr: [],
        serviceCalls: [
          {
            kubeconfigStr: "cluster-alpha",
            outDir: "generated/types",
          },
        ],
      },
    },
    {
      name: "generate without out forwards the default ./out/ directory",
      in: {
        args: ["generate", "--kubeconfig", "configs/default.yaml"],
        files: {
          "configs/default.yaml": "cluster-bravo",
        },
      },
      want: {
        exitCode: 0,
        stdout: [],
        stderr: [],
        serviceCalls: [
          {
            kubeconfigStr: "cluster-bravo",
            outDir: "./out/",
          },
        ],
      },
    },
    {
      name: "--flag=value syntax works",
      in: {
        args: ["generate", "--kubeconfig=configs/value.yaml", "--out=build/types"],
        files: {
          "configs/value.yaml": "cluster-charlie",
        },
      },
      want: {
        exitCode: 0,
        stdout: [],
        stderr: [],
        serviceCalls: [
          {
            kubeconfigStr: "cluster-charlie",
            outDir: "build/types",
          },
        ],
      },
    },
    {
      name: "flags may appear before generate",
      in: {
        args: ["--kubeconfig", "configs/before.yaml", "--out", "dist/types", "generate"],
        files: {
          "configs/before.yaml": "cluster-delta",
        },
      },
      want: {
        exitCode: 0,
        stdout: [],
        stderr: [],
        serviceCalls: [
          {
            kubeconfigStr: "cluster-delta",
            outDir: "dist/types",
          },
        ],
      },
    },
    {
      name: "flags may appear after generate",
      in: {
        args: ["generate", "--kubeconfig", "configs/after.yaml", "--out", "out/types"],
        files: {
          "configs/after.yaml": "cluster-echo",
        },
      },
      want: {
        exitCode: 0,
        stdout: [],
        stderr: [],
        serviceCalls: [
          {
            kubeconfigStr: "cluster-echo",
            outDir: "out/types",
          },
        ],
      },
    },
    {
      name: "missing --kubeconfig is a usage failure",
      in: {
        args: ["generate"],
      },
      want: {
        exitCode: 1,
        stdout: [],
        stderr: [
          `missing required flag: --kubeconfig

Usage:
  typek8s -h
  typek8s --help
  typek8s generate --kubeconfig <path> [--out <dir>]

Options:
  -h, --help             Show this help text.
  --kubeconfig <path>    Path to the kubeconfig file.
  --out <dir>            Output directory. Defaults to ./out/.`,
        ],
        serviceCalls: [],
      },
    },
    {
      name: "unknown command is a usage failure",
      in: {
        args: ["synth", "--kubeconfig", "configs/dev.yaml"],
      },
      want: {
        exitCode: 1,
        stdout: [],
        stderr: [
          `unknown command: synth

Usage:
  typek8s -h
  typek8s --help
  typek8s generate --kubeconfig <path> [--out <dir>]

Options:
  -h, --help             Show this help text.
  --kubeconfig <path>    Path to the kubeconfig file.
  --out <dir>            Output directory. Defaults to ./out/.`,
        ],
        serviceCalls: [],
      },
    },
    {
      name: "extra positional args are a usage failure",
      in: {
        args: ["generate", "extra", "--kubeconfig", "configs/dev.yaml"],
      },
      want: {
        exitCode: 1,
        stdout: [],
        stderr: [
          `unexpected arguments: extra

Usage:
  typek8s -h
  typek8s --help
  typek8s generate --kubeconfig <path> [--out <dir>]

Options:
  -h, --help             Show this help text.
  --kubeconfig <path>    Path to the kubeconfig file.
  --out <dir>            Output directory. Defaults to ./out/.`,
        ],
        serviceCalls: [],
      },
    },
    {
      name: "unknown flags are a usage failure",
      in: {
        args: ["generate", "--kubeconfig", "configs/dev.yaml", "--verbose"],
      },
      want: {
        exitCode: 1,
        stdout: [],
        stderr: [
          `unknown flag: --verbose

Usage:
  typek8s -h
  typek8s --help
  typek8s generate --kubeconfig <path> [--out <dir>]

Options:
  -h, --help             Show this help text.
  --kubeconfig <path>    Path to the kubeconfig file.
  --out <dir>            Output directory. Defaults to ./out/.`,
        ],
        serviceCalls: [],
      },
    },
    {
      name: "a missing kubeconfig file is a runtime failure",
      in: {
        args: ["generate", "--kubeconfig", "configs/missing.yaml"],
      },
      want: {
        exitCode: 1,
        stdout: [],
        stderr: ["failed to read kubeconfig: file not found: configs/missing.yaml: not found"],
        serviceCalls: [],
      },
    },
    {
      name: "a service failure is surfaced as a runtime failure",
      in: {
        args: ["generate", "--kubeconfig", "configs/fail.yaml"],
        files: {
          "configs/fail.yaml": "cluster-foxtrot",
        },
        serviceResult: tsUtil.result(false, entity.ErrUnauthorized),
      },
      want: {
        exitCode: 1,
        stdout: [],
        stderr: ["failed to generate types: invalid"],
        serviceCalls: [
          {
            kubeconfigStr: "cluster-foxtrot",
            outDir: "./out/",
          },
        ],
      },
    },
  ]

  for (const tt of tests) {
    await t.step(tt.name, async () => {
      const stdout: string[] = []
      const stderr: string[] = []
      const output: Typek8sCliOutput = {
        stdout: (message) => stdout.push(message),
        stderr: (message) => stderr.push(message),
      }
      const service = new RecordingGenTypeFileService(tt.in.serviceResult)
      const fileIOPort = new port.fileIo.FakeFileIOPort(tt.in.files)
      const cli = new DefaultTypek8sCli(service, fileIOPort, output)

      const exitCode = await cli.run(tt.in.args)

      stdAssert.assertEquals(exitCode, tt.want.exitCode)
      stdAssert.assertEquals(stdout, tt.want.stdout)
      stdAssert.assertEquals(stderr, tt.want.stderr)
      stdAssert.assertEquals(service.calls, tt.want.serviceCalls)
    })
  }
})
