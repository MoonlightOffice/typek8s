import { StubHelmPort } from "./stub-helm.ts"
import type { StubHelmPortParams } from "./stub-helm.ts"
import type { SynthParams } from "../../core/port/k8s/mod.ts"
import { "@std/assert" as stdAssert, "ts-util" as tsUtil, entity } from "./deps.ts"

function createChartFile(name: string, text: string, type = "application/gzip"): File {
  return new File([text], name, { type })
}

Deno.test("StubHelmPort.synth", async (t) => {
  type In = {
    params: StubHelmPortParams
    synthParams: SynthParams
  }

  type Want = {
    err: tsUtil.Err | null
    file: {
      name: string
      type: string
      text: string
    } | null
  }

  const tests: Array<{
    name: string
    in: In
    want: Want
  }> = [
    {
      name: "a matching synth rule exists; the matching chart file is returned",
      in: {
        params: {
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
              },
              result: tsUtil.result(
                true,
                createChartFile("platform-1.2.3.tgz", "chart-content"),
              ),
            },
          ],
        },
        synthParams: {
          name: "platform",
          manifests: [
            {
              apiVersion: "apps/v1",
              kind: "Deployment",
              metadata: { name: "platform-api" },
            },
          ],
        },
      },
      want: {
        err: null,
        file: {
          name: "platform-1.2.3.tgz",
          type: "application/gzip",
          text: "chart-content",
        },
      },
    },
    {
      name: "a matching synth rule returns a promise; the resolved chart file is returned",
      in: {
        params: {
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
                depCharts: [
                  {
                    name: "redis",
                    version: "0.1.0",
                    chartPath: "charts/redis.tgz",
                    values: {},
                  },
                ],
              },
              result: tsUtil.result(
                true,
                Promise.resolve(createChartFile("jobs-0.1.0.tgz", "jobs-chart")),
              ),
            },
          ],
        },
        synthParams: {
          name: "jobs",
          manifests: [
            {
              apiVersion: "batch/v1",
              kind: "CronJob",
              metadata: { name: "cleanup" },
            },
          ],
          depCharts: [
            {
              name: "redis",
              version: "0.1.0",
              chartPath: "charts/redis.tgz",
              values: {},
            },
          ],
        },
      },
      want: {
        err: null,
        file: {
          name: "jobs-0.1.0.tgz",
          type: "application/gzip",
          text: "jobs-chart",
        },
      },
    },
    {
      name: "a matching synth rule returns ErrInvalid; the same error is returned",
      in: {
        params: {
          synthRules: [
            {
              params: {
                name: "broken",
                manifests: [],
              },
              result: tsUtil.result(false, entity.ErrInvalid),
            },
          ],
        },
        synthParams: {
          name: "broken",
          manifests: [],
        },
      },
      want: {
        err: entity.ErrInvalid,
        file: null,
      },
    },
    {
      name: "no synth rule matches the synth params; ErrInvalid is returned",
      in: {
        params: {
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
              },
              result: tsUtil.result(
                true,
                createChartFile("platform-1.2.3.tgz", "chart-content"),
              ),
            },
          ],
        },
        synthParams: {
          name: "different-platform",
          manifests: [
            {
              apiVersion: "apps/v1",
              kind: "Deployment",
              metadata: { name: "platform-api" },
            },
          ],
        },
      },
      want: {
        err: entity.ErrInvalid,
        file: null,
      },
    },
  ]

  for (const tt of tests) {
    await t.step(tt.name, async () => {
      const port = new StubHelmPort(tt.in.params)
      const res = await port.synth(tt.in.synthParams)

      if (tt.want.err != null) {
        stdAssert.assertEquals(res.err!.is(tt.want.err), true)
      } else {
        const file = res.val
        stdAssert.assertEquals(file.name, tt.want.file!.name)
        stdAssert.assertEquals(file.type, tt.want.file!.type)
        stdAssert.assertEquals(await file.text(), tt.want.file!.text)
      }
    })
  }
})
