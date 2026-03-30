import { "@std/assert" as stdAssert, "ts-util" as tsUtil, port } from "./deps.ts"
import { AdapterHelmPort } from "./adapter-helm-port.ts"

Deno.test("AdapterHelmPort.pullChart", { ignore: Deno.env.get("TESTMODE") !== "LONG" }, async (t) => {
  const credential: port.k8s.HelmPortCredential = {
    userName: "testuser",
    password: "testpassword",
  }

  type In = {
    params: {
      path: string
      credential?: port.k8s.HelmPortCredential
    }
    setup?: {
      host: string
      chart: string
    }
  }

  type Want = {
    err: tsUtil.Err | null
    filename: string | null
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
          path: "oci://localhost:5001/public-chart:0.1.0",
        },
        setup: {
          host: "oci://localhost:5001",
          chart: "./testutil/charts/public-chart-0.1.0.tgz",
        },
      },
      want: {
        err: null,
        filename: "public-chart-0.1.0.tgz",
      },
    },
    {
      name: "a private OCI chart exists and valid credentials are provided; the chart archive is returned",
      in: {
        params: {
          path: "oci://localhost:5002/private-chart:0.1.0",
          credential: credential,
        },
        setup: {
          host: "oci://localhost:5002",
          chart: "./testutil/charts/private-chart-0.1.0.tgz",
        },
      },
      want: {
        err: null,
        filename: "private-chart-0.1.0.tgz",
      },
    },
    {
      name: "the credentials are unauthorized; ErrUnauthorized is returned",
      in: {
        params: {
          path: "oci://localhost:5002/private-chart:0.1.0",
          credential: {
            userName: "alice",
            password: "wrong-password",
          },
        },
        setup: {
          host: "oci://localhost:5002",
          chart: "./testutil/charts/private-chart-0.1.0.tgz",
        },
      },
      want: {
        err: new tsUtil.Err("unauthorized"),
        filename: null,
      },
    },
    {
      name: "the requested chart does not exist; ErrNotFound is returned",
      in: {
        params: {
          path: "oci://localhost:5001/public-chart:0.1.0",
        },
      },
      want: {
        err: new tsUtil.Err("not found"),
        filename: null,
      },
    },
  ]

  // Test helpers

  function buf2Str(buf: Uint8Array<ArrayBuffer>): Promise<string> {
    return new Blob([buf]).text()
  }

  async function composeUp() {
    const cmd = new Deno.Command("nerdctl", {
      args: ["compose", "up", "-d"],
      cwd: "./testutil/",
    })
    const result = await cmd.output()
    if (result.code !== 0) {
      throw Error(await buf2Str(result.stderr))
    }
  }

  async function composeDown() {
    const cmd = new Deno.Command("nerdctl", {
      args: ["compose", "down"],
      cwd: "./testutil/",
    })
    const result = await cmd.output()
    if (result.code !== 0) {
      throw Error(await buf2Str(result.stderr))
    }
  }

  async function pushChart(host: string, chartPath: string) {
    const cmd = new Deno.Command("helm", {
      args: [
        "push",
        "--plain-http",
        `--username=${credential.userName}`,
        `--password=${credential.password}`,
        chartPath,
        host,
      ],
    })
    const result = await cmd.output()
    if (result.code !== 0) {
      throw Error(await buf2Str(result.stderr))
    }
  }

  for (const tt of tests) {
    await t.step(tt.name, async () => {
      try {
        // setup
        await composeUp()

        if (tt.in.setup) {
          await pushChart(tt.in.setup.host, tt.in.setup.chart)
        }

        // Run
        const adapter = new AdapterHelmPort()
        const res = await adapter.pullChart(tt.in.params, true)
        if (tt.want.err != null) {
          stdAssert.assertExists(res.err)
        } else {
          stdAssert.assertEquals(tt.want.filename, res.val.name)
        }
      } finally {
        await composeDown()
      }
    })
  }
})
