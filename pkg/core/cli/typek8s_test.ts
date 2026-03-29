import { "@std/assert" as stdAssert, "ts-util" as tsUtil, entity, port } from "./deps.ts"
import { Typek8sCli } from "./typek8s.ts"
import type { Typek8sCliOutput } from "./typek8s.ts"
import { GenTypeFileService } from "../service/gen-type-file/mod.ts"

function createFile(name: string, text: string, type = "text/typescript"): File {
  return new File([text], name, { type })
}

function createCliHarness(params: {
  files?: Record<string, string>
  k8sPortParams?: port.k8s.StubK8sPortParams
}) {
  const stdout: string[] = []
  const stderr: string[] = []
  const output: Typek8sCliOutput = {
    stdout: (message) => stdout.push(message),
    stderr: (message) => stderr.push(message),
  }
  const fileIOPort = new port.fileIo.FakeFileIOPort(params.files)
  const k8sPort = new port.k8s.StubK8sPort(params.k8sPortParams)
  const genTypeFileService = new GenTypeFileService(fileIOPort, k8sPort)
  const cli = new Typek8sCli(genTypeFileService, fileIOPort, output)

  return {
    cli,
    fileIOPort,
    stdout,
    stderr,
  }
}

Deno.test("Typek8sCli.run CLI-only behavior", async (t) => {
  type In = {
    args: string[]
  }

  type Want = {
    exitCode: number
    stdout: string[]
    stderr: string[]
  }

  const tests: Array<{ name: string; in: In; want: Want }> = [
    {
      name: "-h prints help text",
      in: {
        args: ["-h"],
      },
      want: {
        exitCode: 0,
        stdout: [Typek8sCli.HELP_TEXT],
        stderr: [],
      },
    },
    {
      name: "--help prints help text",
      in: {
        args: ["--help"],
      },
      want: {
        exitCode: 0,
        stdout: [Typek8sCli.HELP_TEXT],
        stderr: [],
      },
    },
    {
      name: "missing command is a usage failure",
      in: {
        args: [],
      },
      want: {
        exitCode: 1,
        stdout: [],
        stderr: [`missing command\n\n${Typek8sCli.HELP_TEXT}`],
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
        stderr: [`missing required flag: --kubeconfig\n\n${Typek8sCli.HELP_TEXT}`],
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
        stderr: [`unknown command: synth\n\n${Typek8sCli.HELP_TEXT}`],
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
        stderr: [`unexpected arguments: extra\n\n${Typek8sCli.HELP_TEXT}`],
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
        stderr: [`unknown flag: --verbose\n\n${Typek8sCli.HELP_TEXT}`],
      },
    },
  ]

  for (const tt of tests) {
    await t.step(tt.name, async () => {
      const { cli, fileIOPort, stderr, stdout } = createCliHarness({})

      const exitCode = await cli.run(tt.in.args)

      stdAssert.assertEquals(exitCode, tt.want.exitCode)
      stdAssert.assertEquals(stdout, tt.want.stdout)
      stdAssert.assertEquals(stderr, tt.want.stderr)
      stdAssert.assertEquals(fileIOPort.listFiles("./out/"), [])
    })
  }
})

Deno.test("Typek8sCli.run generate blackbox behavior", async (t) => {
  type In = {
    args: string[]
    files?: Record<string, string>
    k8sPortParams?: port.k8s.StubK8sPortParams
  }

  type Want = {
    exitCode: number
    stdout: string[]
    stderr: string[]
    files: Record<string, string>
    outDir: string
    outDirFileNames: string[]
  }

  const tests: Array<{ name: string; in: In; want: Want }> = [
    {
      name: "generate with an explicit out dir writes generated files under that directory",
      in: {
        args: ["generate", "--kubeconfig", "configs/dev.yaml", "--out", "generated/types"],
        files: {
          "configs/dev.yaml": "cluster-alpha",
        },
        k8sPortParams: {
          getAllOpenApiRules: [
            {
              kubeconfigStr: "cluster-alpha",
              result: tsUtil.result(true, [
                {
                  apiVersion: "v1",
                  openApi: '{"components":{"schemas":{"ConfigMap":{}}}}',
                },
                {
                  apiVersion: "apps/v1",
                  openApi: '{"components":{"schemas":{"Deployment":{}}}}',
                },
              ]),
            },
          ],
          openApiToTypesRules: [
            {
              apiVersion: "v1",
              openapiStr: '{"components":{"schemas":{"ConfigMap":{}}}}',
              result: "export interface ConfigMap {}",
            },
            {
              apiVersion: "apps/v1",
              openapiStr: '{"components":{"schemas":{"Deployment":{}}}}',
              result: "export interface Deployment {}",
            },
          ],
          typeFilesToModFileRules: [
            {
              fileNames: ["v1.ts", "apps.v1.ts"],
              result: createFile(
                "mod.ts",
                'export type { api as v1 } from "./v1.ts"\nexport type { api as appsV1 } from "./apps.v1.ts"\n',
              ),
            },
          ],
        },
      },
      want: {
        exitCode: 0,
        stdout: [],
        stderr: [],
        outDir: "generated/types",
        outDirFileNames: ["apps.v1.ts", "mod.ts", "v1.ts"],
        files: {
          "generated/types/v1.ts": "export interface ConfigMap {}",
          "generated/types/apps.v1.ts": "export interface Deployment {}",
          "generated/types/mod.ts":
            'export type { api as v1 } from "./v1.ts"\nexport type { api as appsV1 } from "./apps.v1.ts"\n',
        },
      },
    },
    {
      name: "generate without out writes under ./out/ and uses kubeconfig contents instead of the path string",
      in: {
        args: ["generate", "--kubeconfig", "configs/default.yaml"],
        files: {
          "configs/default.yaml": "cluster-bravo",
        },
        k8sPortParams: {
          getAllOpenApiRules: [
            {
              kubeconfigStr: "cluster-bravo",
              result: tsUtil.result(true, [
                {
                  apiVersion: "v1",
                  openApi: '{"components":{"schemas":{"Secret":{}}}}',
                },
              ]),
            },
          ],
          openApiToTypesRules: [
            {
              apiVersion: "v1",
              openapiStr: '{"components":{"schemas":{"Secret":{}}}}',
              result: "export interface Secret {}",
            },
          ],
          typeFilesToModFileRules: [
            {
              fileNames: ["v1.ts"],
              result: createFile("mod.ts", 'export type { api as v1 } from "./v1.ts"\n'),
            },
          ],
        },
      },
      want: {
        exitCode: 0,
        stdout: [],
        stderr: [],
        outDir: "./out/",
        outDirFileNames: ["mod.ts", "v1.ts"],
        files: {
          "./out/v1.ts": "export interface Secret {}",
          "./out/mod.ts": 'export type { api as v1 } from "./v1.ts"\n',
        },
      },
    },
    {
      name: "--flag=value syntax works",
      in: {
        args: ["generate", "--kubeconfig=configs/value.yaml", "--out=build/types"],
        files: {
          "configs/value.yaml": "cluster-charlie",
        },
        k8sPortParams: {
          getAllOpenApiRules: [
            {
              kubeconfigStr: "cluster-charlie",
              result: tsUtil.result(true, [
                {
                  apiVersion: "storage.k8s.io/v1",
                  openApi: '{"components":{"schemas":{"StorageClass":{}}}}',
                },
              ]),
            },
          ],
          openApiToTypesRules: [
            {
              apiVersion: "storage.k8s.io/v1",
              openapiStr: '{"components":{"schemas":{"StorageClass":{}}}}',
              result: "export interface StorageClass {}",
            },
          ],
          typeFilesToModFileRules: [
            {
              fileNames: ["storage.k8s.io.v1.ts"],
              result: createFile("mod.ts", 'export type { api as storageK8sIoV1 } from "./storage.k8s.io.v1.ts"\n'),
            },
          ],
        },
      },
      want: {
        exitCode: 0,
        stdout: [],
        stderr: [],
        outDir: "build/types",
        outDirFileNames: ["mod.ts", "storage.k8s.io.v1.ts"],
        files: {
          "build/types/storage.k8s.io.v1.ts": "export interface StorageClass {}",
          "build/types/mod.ts": 'export type { api as storageK8sIoV1 } from "./storage.k8s.io.v1.ts"\n',
        },
      },
    },
    {
      name: "flags may appear before generate",
      in: {
        args: ["--kubeconfig", "configs/before.yaml", "--out", "dist/types", "generate"],
        files: {
          "configs/before.yaml": "cluster-delta",
        },
        k8sPortParams: {
          getAllOpenApiRules: [
            {
              kubeconfigStr: "cluster-delta",
              result: tsUtil.result(true, [
                {
                  apiVersion: "batch/v1",
                  openApi: '{"components":{"schemas":{"Job":{}}}}',
                },
              ]),
            },
          ],
          openApiToTypesRules: [
            {
              apiVersion: "batch/v1",
              openapiStr: '{"components":{"schemas":{"Job":{}}}}',
              result: "export interface Job {}",
            },
          ],
          typeFilesToModFileRules: [
            {
              fileNames: ["batch.v1.ts"],
              result: createFile("mod.ts", 'export type { api as batchV1 } from "./batch.v1.ts"\n'),
            },
          ],
        },
      },
      want: {
        exitCode: 0,
        stdout: [],
        stderr: [],
        outDir: "dist/types",
        outDirFileNames: ["batch.v1.ts", "mod.ts"],
        files: {
          "dist/types/batch.v1.ts": "export interface Job {}",
          "dist/types/mod.ts": 'export type { api as batchV1 } from "./batch.v1.ts"\n',
        },
      },
    },
    {
      name: "flags may appear after generate",
      in: {
        args: ["generate", "--kubeconfig", "configs/after.yaml", "--out", "out/types"],
        files: {
          "configs/after.yaml": "cluster-echo",
        },
        k8sPortParams: {
          getAllOpenApiRules: [
            {
              kubeconfigStr: "cluster-echo",
              result: tsUtil.result(true, [
                {
                  apiVersion: "networking.k8s.io/v1",
                  openApi: '{"components":{"schemas":{"Ingress":{}}}}',
                },
              ]),
            },
          ],
          openApiToTypesRules: [
            {
              apiVersion: "networking.k8s.io/v1",
              openapiStr: '{"components":{"schemas":{"Ingress":{}}}}',
              result: "export interface Ingress {}",
            },
          ],
          typeFilesToModFileRules: [
            {
              fileNames: ["networking.k8s.io.v1.ts"],
              result: createFile(
                "mod.ts",
                'export type { api as networkingK8sIoV1 } from "./networking.k8s.io.v1.ts"\n',
              ),
            },
          ],
        },
      },
      want: {
        exitCode: 0,
        stdout: [],
        stderr: [],
        outDir: "out/types",
        outDirFileNames: ["mod.ts", "networking.k8s.io.v1.ts"],
        files: {
          "out/types/networking.k8s.io.v1.ts": "export interface Ingress {}",
          "out/types/mod.ts": 'export type { api as networkingK8sIoV1 } from "./networking.k8s.io.v1.ts"\n',
        },
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
        outDir: "./out/",
        outDirFileNames: [],
        files: {},
      },
    },
    {
      name: "a service failure from the k8s port is surfaced as a runtime failure",
      in: {
        args: ["generate", "--kubeconfig", "configs/fail.yaml"],
        files: {
          "configs/fail.yaml": "cluster-foxtrot",
        },
        k8sPortParams: {
          getAllOpenApiRules: [
            {
              kubeconfigStr: "cluster-foxtrot",
              result: tsUtil.result(false, entity.ErrUnauthorized),
            },
          ],
        },
      },
      want: {
        exitCode: 1,
        stdout: [],
        stderr: ["failed to generate types: invalid"],
        outDir: "./out/",
        outDirFileNames: [],
        files: {},
      },
    },
  ]

  for (const tt of tests) {
    await t.step(tt.name, async () => {
      const { cli, fileIOPort, stderr, stdout } = createCliHarness({
        files: tt.in.files,
        k8sPortParams: tt.in.k8sPortParams,
      })

      const exitCode = await cli.run(tt.in.args)

      stdAssert.assertEquals(exitCode, tt.want.exitCode)
      stdAssert.assertEquals(stdout, tt.want.stdout)
      stdAssert.assertEquals(stderr, tt.want.stderr)

      for (const [path, content] of Object.entries(tt.want.files)) {
        const fileRes = fileIOPort.read(path)
        stdAssert.assertEquals(fileRes.err, null)
        stdAssert.assertEquals(fileRes.val, content)
      }

      stdAssert.assertEquals(fileIOPort.listFiles(tt.want.outDir), tt.want.outDirFileNames)
    })
  }
})
