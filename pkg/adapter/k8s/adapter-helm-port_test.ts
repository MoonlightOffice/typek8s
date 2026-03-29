import { "@std/assert" as stdAssert, "ts-util" as tsUtil, entity, port } from "./deps.ts"
import { AdapterHelmPort } from "./adapter-helm-port.ts"

function createChartFile(name: string, text: string, type = "application/gzip"): File {
  return new File([text], name, { type })
}

Deno.test("AdapterHelmPort.pullChart", { ignore: true }, async (t) => {
  type In = {
    params: {
      path: string
      credential?: port.k8s.HelmPortCredential
    }
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
      name: "a public OCI chart exists; the chart archive is returned",
      in: {
        params: {
          path: "oci://ghcr.io/example/chart",
        },
      },
      want: {
        err: null,
        file: createChartFile("chart-1.2.3.tgz", "chart-content"),
      },
    },
    {
      name: "a private OCI chart exists and valid credentials are provided; the chart archive is returned",
      in: {
        params: {
          path: "oci://ghcr.io/example/private-chart",
          credential: {
            userName: "alice",
            password: "secret",
          },
        },
      },
      want: {
        err: null,
        file: createChartFile("private-chart-0.1.0.tgz", "private-chart"),
      },
    },
    {
      name: "the credentials are unauthorized; ErrUnauthorized is returned",
      in: {
        params: {
          path: "oci://ghcr.io/example/private-chart",
          credential: {
            userName: "alice",
            password: "wrong-password",
          },
        },
      },
      want: {
        err: entity.ErrUnauthorized,
        file: null,
      },
    },
    {
      name: "the requested chart does not exist; ErrNotFound is returned",
      in: {
        params: {
          path: "oci://ghcr.io/example/missing-chart",
        },
      },
      want: {
        err: entity.ErrNotFound,
        file: null,
      },
    },
  ]

  for (const tt of tests) {
    await t.step(tt.name, () => {
      const adapter: port.k8s.HelmPort = new AdapterHelmPort()

      void adapter
      void tt.in
      void tt.want

      // TODO: Call pullChart and assert the blackbox result matches tt.want.
      stdAssert.assertEquals(true, true)
    })
  }
})
