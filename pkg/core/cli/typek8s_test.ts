import { "@std/assert" as stdAssert, "ts-util" as tsUtil, entity, port, service } from "./deps.ts"
import { Typek8sCli } from "./typek8s.ts"

function createFile(name: string, text: string, type = "text/typescript"): File {
  return new File([text], name, { type })
}

Deno.test("Typek8sCli.run", async (t) => {
  type In = {
    args: string[]
    fileIOPort: port.fileIo.FakeFileIOPort
    k8sPort: port.k8s.StubK8sPort
  }

  type Want = {
    exitCode: number
    stdout: string[]
    stderr: string[]
    files: Record<string, string>
    outDir: string | null
  }

  const tests: Array<{
    name: string
    in: In
    want: Want
  }> = [
    {
      name: "--help is passed; the help text is written to stdout and the command succeeds",
      in: {
        args: ["--help"],
        fileIOPort: new port.fileIo.FakeFileIOPort(),
        k8sPort: new port.k8s.StubK8sPort(),
      },
      want: {
        exitCode: 0,
        stdout: [Typek8sCli.HELP_TEXT],
        stderr: [],
        files: {},
        outDir: null,
      },
    },
    {
      name: "the generate command is missing --kubeconfig; the parse error and help text are written to stderr",
      in: {
        args: ["generate"],
        fileIOPort: new port.fileIo.FakeFileIOPort(),
        k8sPort: new port.k8s.StubK8sPort(),
      },
      want: {
        exitCode: 1,
        stdout: [],
        stderr: [`missing required flag: --kubeconfig\n\n${Typek8sCli.HELP_TEXT}`],
        files: {},
        outDir: Typek8sCli.DEFAULT_OUT_DIR,
      },
    },
    {
      name: "the kubeconfig file does not exist; a read error is written to stderr and generation does not run",
      in: {
        args: ["generate", "--kubeconfig", "config/dev.yaml"],
        fileIOPort: new port.fileIo.FakeFileIOPort(),
        k8sPort: new port.k8s.StubK8sPort(),
      },
      want: {
        exitCode: 1,
        stdout: [],
        stderr: ["failed to read kubeconfig: file not found: config/dev.yaml: not found"],
        files: {},
        outDir: Typek8sCli.DEFAULT_OUT_DIR,
      },
    },
    {
      name:
        "the cluster lookup returns ErrUnauthorized; the generation error is written to stderr and no files are written",
      in: {
        args: ["generate", "--kubeconfig", "config/dev.yaml", "--out", "generated/types"],
        fileIOPort: new port.fileIo.FakeFileIOPort({
          "config/dev.yaml": "cluster-bravo",
        }),
        k8sPort: new port.k8s.StubK8sPort({
          getAllOpenApiRules: [
            {
              kubeconfigStr: "cluster-bravo",
              result: tsUtil.result(false, entity.ErrUnauthorized),
            },
          ],
        }),
      },
      want: {
        exitCode: 1,
        stdout: [],
        stderr: [`failed to generate types: ${String(entity.ErrUnauthorized)}`],
        files: {},
        outDir: Typek8sCli.DEFAULT_OUT_DIR,
      },
    },
    {
      name:
        "the kubeconfig can be read and the cluster returns OpenAPI documents; types are generated into the default output directory and the command succeeds",
      in: {
        args: ["generate", "--kubeconfig", "config/dev.yaml"],
        fileIOPort: new port.fileIo.FakeFileIOPort({
          "config/dev.yaml": "cluster-alpha",
        }),
        k8sPort: new port.k8s.StubK8sPort({
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
                {
                  apiVersion: "batch/v1",
                  openApi: '{"components":{"schemas":{"Job":{}}}}',
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
            {
              apiVersion: "batch/v1",
              openapiStr: '{"components":{"schemas":{"Job":{}}}}',
              result: "",
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
        }),
      },
      want: {
        exitCode: 0,
        stdout: [],
        stderr: [],
        files: {
          "out/v1.ts": "export interface ConfigMap {}",
          "out/apps.v1.ts": "export interface Deployment {}",
          "out/mod.ts": 'export type { api as v1 } from "./v1.ts"\nexport type { api as appsV1 } from "./apps.v1.ts"\n',
        },
        outDir: Typek8sCli.DEFAULT_OUT_DIR,
      },
    },
  ]

  for (const tt of tests) {
    await t.step(tt.name, async () => {
      const stdout: string[] = []
      const stderr: string[] = []
      const genTypeFileService = new service.genTypeFile.GenTypeFileService(tt.in.fileIOPort, tt.in.k8sPort)
      const cli = new Typek8sCli(genTypeFileService, tt.in.fileIOPort, {
        stdout: (message) => stdout.push(message),
        stderr: (message) => stderr.push(message),
      })

      const exitCode = await cli.run(tt.in.args)

      stdAssert.assertEquals(exitCode, tt.want.exitCode)
      stdAssert.assertEquals(stdout, tt.want.stdout)
      stdAssert.assertEquals(stderr, tt.want.stderr)

      for (const [path, content] of Object.entries(tt.want.files)) {
        const fileRes = tt.in.fileIOPort.read(path)
        stdAssert.assertEquals(fileRes.err, null)
        stdAssert.assertEquals(fileRes.val, content)
      }

      if (tt.want.outDir != null) {
        const expectedFileNames = Object.keys(tt.want.files)
          .map((path) => path.split("/").at(-1)!)
          .sort((left, right) => left.localeCompare(right))
        stdAssert.assertEquals(tt.in.fileIOPort.listFiles(tt.want.outDir), expectedFileNames)
      }
    })
  }
})
