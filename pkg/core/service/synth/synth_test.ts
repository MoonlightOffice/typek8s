import { "@std/path" as stdPath } from "./deps.ts"
import { SynthService } from "./synth.ts"
import type { SynthParams } from "./synth.ts"
import { "@std/assert" as stdAssert, "ts-util" as tsUtil, double, entity } from "./deps.ts"

function createChartFile(name: string, text: string, type = "application/gzip"): File {
  return new File([text], name, { type })
}

const absoluteChartPath = stdPath.resolve("charts/postgresql.tgz")

Deno.test("SynthService.synth", async (t) => {
  type In = {
    params: SynthParams
    fileIOPort: double.fileIo.FakeFileIOPort
    helmPort: double.k8s.StubHelmPort
  }

  type Want = {
    err: tsUtil.Err | null
    outputPath: string
    outputText: string | null
    missingPaths?: string[]
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
              chartURL: "charts/redis-20.1.7.tgz",
              values: {
                architecture: {
                  standalone: true,
                },
              },
            },
          ],
        },
        fileIOPort: new double.fileIo.FakeFileIOPort(),
        helmPort: new double.k8s.StubHelmPort({
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
                    chartURL: "charts/redis-20.1.7.tgz",
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
        fileIOPort: new double.fileIo.FakeFileIOPort(),
        helmPort: new double.k8s.StubHelmPort({
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
      name: "an existing output directory is removed before writing the synthesized chart archive",
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
        fileIOPort: new double.fileIo.FakeFileIOPort({
          "dist/charts/jobs.tgz": "stale-chart",
          "dist/charts/old.txt": "stale-file",
          "dist/keep.txt": "keep",
        }),
        helmPort: new double.k8s.StubHelmPort({
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
              result: tsUtil.result(true, createChartFile("different-name.tgz", "fresh-chart")),
            },
          ],
        }),
      },
      want: {
        err: null,
        outputPath: "dist/charts/jobs.tgz",
        outputText: "fresh-chart",
        missingPaths: ["dist/charts/old.txt"],
      },
    },
    {
      name: "a dependency chart uses an OCI URL; ErrInvalid is returned and no output archive is written",
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
        },
        fileIOPort: new double.fileIo.FakeFileIOPort(),
        helmPort: new double.k8s.StubHelmPort(),
      },
      want: {
        err: entity.ErrInvalid,
        outputPath: "out/platform.tgz",
        outputText: null,
      },
    },
    {
      name: "a dependency chart uses an absolute path; the synthesized chart archive is written",
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
              chartURL: absoluteChartPath,
              values: {},
            },
          ],
        },
        fileIOPort: new double.fileIo.FakeFileIOPort(),
        helmPort: new double.k8s.StubHelmPort({
          synthRules: [
            {
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
                    chartURL: absoluteChartPath,
                    values: {},
                  },
                ],
              },
              result: tsUtil.result(true, createChartFile("platform.tgz", "platform-chart-absolute-dep")),
            },
          ],
        }),
      },
      want: {
        err: null,
        outputPath: "out/platform.tgz",
        outputText: "platform-chart-absolute-dep",
      },
    },
    {
      name: "synth fails; the error is returned and the existing output directory is removed",
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
        fileIOPort: new double.fileIo.FakeFileIOPort({
          "generated/jobs.tgz": "stale-chart",
          "generated/old.txt": "stale-file",
        }),
        helmPort: new double.k8s.StubHelmPort({
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
        missingPaths: ["generated/old.txt"],
      },
    },
  ]

  for (const tt of tests) {
    await t.step(tt.name, async () => {
      const service = new SynthService(tt.in.fileIOPort, tt.in.helmPort)
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

      for (const missingPath of tt.want.missingPaths ?? []) {
        const missingFileRes = tt.in.fileIOPort.read(missingPath)
        stdAssert.assertEquals(missingFileRes.err!.is(entity.ErrNotFound), true)
      }
    })
  }
})
