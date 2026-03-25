import { DefaultSynthService } from "./synth.ts"
import type { SynthParams } from "./synth.ts"
import { "@std/assert" as stdAssert, "ts-util" as tsUtil, entity, port } from "./deps.ts"

function createChartFile(name: string, text: string, type = "application/gzip"): File {
  return new File([text], name, { type })
}

Deno.test("DefaultSynthService.synth", async (t) => {
  type In = {
    params: SynthParams
    fileIOPort: port.fileIo.FakeFileIOPort
    helmPort: port.k8s.StubHelmPort
    synthPort: port.synth.StubSynthPort
  }

  type Want = {
    err: tsUtil.Err | null
    outputPath: string
    outputText: string | null
  }

  const tests: Array<{
    name: string
    in: In
    want: Want
  }> = [
    {
      name:
        "outDir is omitted; the synthesized chart archive is written to the default output directory with the requested chart name",
      in: {
        params: {
          name: "platform",
          manifests: [
            {
              apiVersion: "apps/v1",
              kind: "Deployment",
              metadata: { name: "platform-api", namespace: "default" },
            },
          ],
          depCharts: [
            {
              name: "redis",
              version: "20.1.7",
              chartURL: "file://charts/redis-20.1.7.tgz",
              values: {
                architecture: {
                  standalone: true,
                },
              },
            },
          ],
        },
        fileIOPort: new port.fileIo.FakeFileIOPort(),
        helmPort: new port.k8s.StubHelmPort(),
        synthPort: new port.synth.StubSynthPort({
          synthRules: [
            {
              params: {
                name: "platform",
                manifests: [
                  {
                    apiVersion: "apps/v1",
                    kind: "Deployment",
                    metadata: { name: "platform-api", namespace: "default" },
                  },
                ],
                depCharts: [
                  {
                    name: "redis",
                    version: "20.1.7",
                    chartURL: "file://charts/redis-20.1.7.tgz",
                    values: {
                      architecture: {
                        standalone: true,
                      },
                    },
                  },
                ],
              },
              result: tsUtil.result(true, createChartFile("ignored-output-name.tgz", "platform-chart")),
            },
          ],
        }),
      },
      want: {
        err: null,
        outputPath: "out/platform.tgz",
        outputText: "platform-chart",
      },
    },
    {
      name:
        "outDir is provided; the synthesized chart archive is written to the requested directory with the requested chart name",
      in: {
        params: {
          name: "jobs",
          manifests: [
            {
              apiVersion: "batch/v1",
              kind: "CronJob",
              metadata: { name: "cleanup" },
            },
          ],
          outDir: "dist/charts",
        },
        fileIOPort: new port.fileIo.FakeFileIOPort(),
        helmPort: new port.k8s.StubHelmPort(),
        synthPort: new port.synth.StubSynthPort({
          synthRules: [
            {
              params: {
                name: "jobs",
                manifests: [
                  {
                    apiVersion: "batch/v1",
                    kind: "CronJob",
                    metadata: { name: "cleanup" },
                  },
                ],
              },
              result: tsUtil.result(true, createChartFile("different-name.tgz", "jobs-chart")),
            },
          ],
        }),
      },
      want: {
        err: null,
        outputPath: "dist/charts/jobs.tgz",
        outputText: "jobs-chart",
      },
    },
    {
      name: "pulling an OCI dependency chart fails; the pull error is returned and no output archive is written",
      in: {
        params: {
          name: "platform",
          manifests: [
            {
              apiVersion: "apps/v1",
              kind: "Deployment",
              metadata: { name: "platform-api" },
            },
          ],
          depCharts: [
            {
              name: "postgresql",
              chartURL: "oci://registry.example.com/charts/postgresql",
              values: {},
            },
          ],
          helmCredential: {
            userName: "alice",
            password: "wrong-password",
          },
        },
        fileIOPort: new port.fileIo.FakeFileIOPort(),
        helmPort: new port.k8s.StubHelmPort({
          pullChartRules: [
            {
              path: "oci://registry.example.com/charts/postgresql",
              credential: {
                userName: "alice",
                password: "wrong-password",
              },
              result: tsUtil.result(false, entity.ErrUnauthorized),
            },
          ],
        }),
        synthPort: new port.synth.StubSynthPort(),
      },
      want: {
        err: entity.ErrUnauthorized,
        outputPath: "out/platform.tgz",
        outputText: null,
      },
    },
    {
      name: "synth fails; the error is returned and no output archive is written",
      in: {
        params: {
          name: "jobs",
          manifests: [
            {
              apiVersion: "batch/v1",
              kind: "CronJob",
              metadata: { name: "cleanup" },
            },
          ],
          outDir: "generated",
        },
        fileIOPort: new port.fileIo.FakeFileIOPort(),
        helmPort: new port.k8s.StubHelmPort(),
        synthPort: new port.synth.StubSynthPort({
          synthRules: [
            {
              params: {
                name: "jobs",
                manifests: [
                  {
                    apiVersion: "batch/v1",
                    kind: "CronJob",
                    metadata: { name: "cleanup" },
                  },
                ],
              },
              result: tsUtil.result(false, entity.ErrInvalid),
            },
          ],
        }),
      },
      want: {
        err: entity.ErrInvalid,
        outputPath: "generated/jobs.tgz",
        outputText: null,
      },
    },
  ]

  for (const tt of tests) {
    await t.step(tt.name, async () => {
      const service = new DefaultSynthService(tt.in.fileIOPort, tt.in.helmPort, tt.in.synthPort)
      const res = await service.synth(tt.in.params)

      if (tt.want.err != null) {
        stdAssert.assertEquals(res.err!.is(tt.want.err), true)
      } else {
        stdAssert.assertEquals(res.err, null)
      }

      const fileRes = tt.in.fileIOPort.read(tt.want.outputPath)
      if (tt.want.outputText == null) {
        stdAssert.assertEquals(fileRes.err!.is(entity.ErrNotFound), true)
      } else {
        stdAssert.assertEquals(fileRes.err, null)
        stdAssert.assertEquals(fileRes.val, tt.want.outputText)
      }
    })
  }
})
