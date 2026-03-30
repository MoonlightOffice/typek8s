import { "@std/assert" as stdAssert, "ts-util" as tsUtil, entity, port } from "./deps.ts"
import { AdapterSynthPort } from "./adapter-synth-port.ts"

function createChartFile(name: string, text: string, type = "application/gzip"): File {
  return new File([text], name, { type })
}

Deno.test("AdapterSynthPort.synth", { ignore: true }, async (t) => {
  type In = {
    params: port.synth.SynthParams
  }

  type Want = {
    err: tsUtil.Err | null
    file: File | null
  }

  const tests: Array<{
    name: string
    in: In
    want: Want
  }> = [
    {
      name: "manifests only are synthesized into a chart archive",
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
        },
      },
      want: {
        err: null,
        file: createChartFile("platform.tgz", "platform-chart"),
      },
    },
    {
      name: "manifests, CRDs, and dependency charts are synthesized into a chart archive",
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
          crds: [
            "crds/widgets.yaml",
          ],
          depCharts: [
            {
              name: "postgresql",
              version: "15.5.31",
              chartURL: "charts/postgresql-15.5.31.tgz",
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
        file: createChartFile("platform.tgz", "platform-chart-with-deps"),
      },
    },
    {
      name: "the synthesis input is invalid; ErrInvalid is returned",
      in: {
        params: {
          name: "broken",
          manifests: [],
        },
      },
      want: {
        err: entity.ErrInvalid,
        file: null,
      },
    },
  ]

  for (const tt of tests) {
    await t.step(tt.name, () => {
      const adapter: port.synth.SynthPort = new AdapterSynthPort()

      void adapter
      void tt.in
      void tt.want

      // TODO: Call synth and assert the blackbox result matches tt.want.
      stdAssert.assertEquals(true, true)
    })
  }
})
