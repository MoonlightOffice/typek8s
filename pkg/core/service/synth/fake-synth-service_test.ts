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
      name: "no fake params are provided; success is returned for blackbox upper-layer tests",
      in: {
        fakeParams: {},
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
      name: "defaultResult is provided; the default error is returned",
      in: {
        fakeParams: {
          defaultResult: tsUtil.result(false, entity.ErrUnauthorized),
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
        err: entity.ErrUnauthorized,
      },
    },
    {
      name: "results are queued; the first queued result is returned",
      in: {
        fakeParams: {
          results: [
            tsUtil.result(false, entity.ErrInvalid),
            tsUtil.result(true, undefined),
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
      },
    },
    {
      name: "a resultByName entry exists; the named result is returned without exact full-parameter matching",
      in: {
        fakeParams: {
          resultByName: {
            jobs: tsUtil.result(false, entity.ErrUnauthorized),
          },
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
      name: "no resultByName entry matches; the default success result is returned",
      in: {
        fakeParams: {
          resultByName: {
            platform: tsUtil.result(false, entity.ErrInvalid),
          },
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
        err: null,
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
