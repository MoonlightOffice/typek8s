import { StubSynthPort } from "./stub-synth-port.ts"
import type { StubSynthPortParams } from "./stub-synth-port.ts"
import type { SynthParams } from "../../core/port/synth/mod.ts"
import { "@std/assert" as stdAssert, "ts-util" as tsUtil, entity } from "./deps.ts"

function createChartFile(name: string, text: string, type = "application/gzip"): File {
  return new File([text], name, { type })
}

Deno.test("StubSynthPort.synth", async (t) => {
  type In = {
    params: StubSynthPortParams
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
      name: "a matching synth rule exists; the matching chart archive is returned",
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
                    metadata: { name: "platform-api", namespace: "default" },
                  },
                  {
                    apiVersion: "v1",
                    kind: "Service",
                    metadata: { name: "platform-api", namespace: "default" },
                  },
                ],
                crds: [
                  "crds/widgets.yaml",
                ],
                depCharts: [
                  {
                    name: "postgresql",
                    version: "15.5.31",
                    chartURL: "oci://registry.example.com/charts/postgresql",
                    values: {
                      primary: {
                        persistence: {
                          enabled: true,
                        },
                      },
                    },
                  },
                ],
              },
              result: tsUtil.result(true, createChartFile("platform.tgz", "platform-chart")),
            },
          ],
        },
        synthParams: {
          name: "platform",
          manifests: [
            {
              apiVersion: "apps/v1",
              kind: "Deployment",
              metadata: { name: "platform-api", namespace: "default" },
            },
            {
              apiVersion: "v1",
              kind: "Service",
              metadata: { name: "platform-api", namespace: "default" },
            },
          ],
          crds: [
            "crds/widgets.yaml",
          ],
          depCharts: [
            {
              name: "postgresql",
              version: "15.5.31",
              chartURL: "oci://registry.example.com/charts/postgresql",
              values: {
                primary: {
                  persistence: {
                    enabled: true,
                  },
                },
              },
            },
          ],
        },
      },
      want: {
        err: null,
        file: {
          name: "platform.tgz",
          type: "application/gzip",
          text: "platform-chart",
        },
      },
    },
    {
      name: "a matching synth rule returns a promise; the resolved chart archive is returned",
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
              },
              result: tsUtil.result(true, Promise.resolve(createChartFile("jobs.tgz", "jobs-chart"))),
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
        },
      },
      want: {
        err: null,
        file: {
          name: "jobs.tgz",
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
                name: "platform",
                manifests: [
                  {
                    apiVersion: "apps/v1",
                    kind: "Deployment",
                    metadata: { name: "platform-api" },
                  },
                ],
              },
              result: tsUtil.result(false, entity.ErrInvalid),
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
                crds: [
                  "crds/widgets.yaml",
                ],
                depCharts: [
                  {
                    name: "redis",
                    chartURL: "oci://registry.example.com/charts/redis",
                    values: {},
                  },
                ],
              },
              result: tsUtil.result(true, createChartFile("platform.tgz", "platform-chart")),
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
          crds: [
            "crds/widgets.yaml",
          ],
          depCharts: [
            {
              name: "postgresql",
              chartURL: "oci://registry.example.com/charts/postgresql",
              values: {},
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
      const port = new StubSynthPort(tt.in.params)
      const res = await port.synth(tt.in.synthParams)

      if (tt.want.err != null) {
        stdAssert.assertEquals(res.err!.is(tt.want.err), true)
      } else {
        stdAssert.assertEquals(res.err, null)
        stdAssert.assertEquals(res.val.name, tt.want.file!.name)
        stdAssert.assertEquals(res.val.type, tt.want.file!.type)
        stdAssert.assertEquals(await res.val.text(), tt.want.file!.text)
      }
    })
  }
})
