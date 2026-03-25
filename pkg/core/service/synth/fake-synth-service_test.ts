import { FakeSynthService } from "./fake-synth-service.ts"
import type { FakeSynthServiceParams } from "./fake-synth-service.ts"
import type { SynthParams } from "./synth.ts"
import { "@std/assert" as stdAssert, "ts-util" as tsUtil, entity } from "./deps.ts"

Deno.test("FakeSynthService.synth", async (t) => {
  type In = {
    fakeParams: FakeSynthServiceParams
    synthParams: SynthParams
  }

  type Want = {
    err: tsUtil.Err | null
  }

  const tests: Array<{
    name: string
    in: In
    want: Want
  }> = [
    {
      name: "a matching minimal synth rule exists; success is returned",
      in: {
        fakeParams: {
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
              result: tsUtil.result(true, undefined),
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
      },
    },
    {
      name: "a matching rule with service-only params exists; the configured error is returned",
      in: {
        fakeParams: {
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
                outDir: "dist/charts",
                helmCredential: {
                  userName: "alice",
                  password: "secret",
                },
                depCharts: [
                  {
                    name: "postgresql",
                    chartURL: "oci://registry.example.com/charts/postgresql",
                    values: {},
                  },
                ],
              },
              result: tsUtil.result(false, entity.ErrUnauthorized),
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
          outDir: "dist/charts",
          helmCredential: {
            userName: "alice",
            password: "secret",
          },
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
        err: entity.ErrUnauthorized,
      },
    },
    {
      name: "no synth rule matches the params; ErrInvalid is returned",
      in: {
        fakeParams: {
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
              result: tsUtil.result(true, undefined),
            },
          ],
        },
        synthParams: {
          name: "other",
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
      },
    },
  ]

  for (const tt of tests) {
    await t.step(tt.name, async () => {
      const service = new FakeSynthService(tt.in.fakeParams)
      const res = await service.synth(tt.in.synthParams)

      if (tt.want.err != null) {
        stdAssert.assertEquals(res.err!.is(tt.want.err), true)
      } else {
        stdAssert.assertEquals(res.err, null)
      }
    })
  }
})
