import { StubHelmPort } from "./stub-helm.ts"
import type { StubHelmPortParams } from "./stub-helm.ts"
import { "@std/assert" as stdAssert, "ts-util" as tsUtil, entity } from "./deps.ts"

function createChartFile(name: string, text: string, type = "application/gzip"): File {
  return new File([text], name, { type })
}

Deno.test("StubHelmPort.pullChart", async (t) => {
  type In = {
    params: StubHelmPortParams
    pullChartParams: {
      path: string
      credential?: {
        userName: string
        password: string
      }
    }
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
      name: "a matching path-only rule exists; the matching chart file is returned",
      in: {
        params: {
          pullChartRules: [
            {
              path: "oci://ghcr.io/example/chart",
              result: tsUtil.result(
                true,
                createChartFile("chart-1.2.3.tgz", "chart-content"),
              ),
            },
          ],
        },
        pullChartParams: {
          path: "oci://ghcr.io/example/chart",
        },
      },
      want: {
        err: null,
        file: {
          name: "chart-1.2.3.tgz",
          type: "application/gzip",
          text: "chart-content",
        },
      },
    },
    {
      name: "a matching path and credential rule exists; the matching chart file is returned",
      in: {
        params: {
          pullChartRules: [
            {
              path: "oci://ghcr.io/example/private-chart",
              credential: {
                userName: "alice",
                password: "secret",
              },
              result: tsUtil.result(
                true,
                createChartFile("private-chart-0.1.0.tgz", "private-chart"),
              ),
            },
          ],
        },
        pullChartParams: {
          path: "oci://ghcr.io/example/private-chart",
          credential: {
            userName: "alice",
            password: "secret",
          },
        },
      },
      want: {
        err: null,
        file: {
          name: "private-chart-0.1.0.tgz",
          type: "application/gzip",
          text: "private-chart",
        },
      },
    },
    {
      name: "a matching rule returns ErrUnauthorized; the same error is returned",
      in: {
        params: {
          pullChartRules: [
            {
              path: "oci://ghcr.io/example/private-chart",
              credential: {
                userName: "alice",
                password: "wrong-password",
              },
              result: tsUtil.result(false, entity.ErrUnauthorized),
            },
          ],
        },
        pullChartParams: {
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
      name: "a matching rule returns ErrNotFound; the same error is returned",
      in: {
        params: {
          pullChartRules: [
            {
              path: "oci://ghcr.io/example/missing-chart",
              result: tsUtil.result(false, entity.ErrNotFound),
            },
          ],
        },
        pullChartParams: {
          path: "oci://ghcr.io/example/missing-chart",
        },
      },
      want: {
        err: entity.ErrNotFound,
        file: null,
      },
    },
    {
      name: "no pullChart rule matches the path; ErrInvalid is returned",
      in: {
        params: {
          pullChartRules: [
            {
              path: "oci://ghcr.io/example/chart",
              result: tsUtil.result(
                true,
                createChartFile("chart-1.2.3.tgz", "chart-content"),
              ),
            },
          ],
        },
        pullChartParams: {
          path: "oci://ghcr.io/example/other-chart",
        },
      },
      want: {
        err: entity.ErrInvalid,
        file: null,
      },
    },
    {
      name: "the path matches but the credential differs; ErrInvalid is returned",
      in: {
        params: {
          pullChartRules: [
            {
              path: "oci://ghcr.io/example/private-chart",
              credential: {
                userName: "alice",
                password: "secret",
              },
              result: tsUtil.result(
                true,
                createChartFile("private-chart-0.1.0.tgz", "private-chart"),
              ),
            },
          ],
        },
        pullChartParams: {
          path: "oci://ghcr.io/example/private-chart",
          credential: {
            userName: "alice",
            password: "different-secret",
          },
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
      const res = await port.pullChart(tt.in.pullChartParams)

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
