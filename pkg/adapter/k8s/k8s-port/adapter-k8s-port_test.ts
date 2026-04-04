import { "@std/assert" as stdAssert, port } from "./deps.ts"
import { AdapterK8sPort } from "./adapter-k8s-port.ts"

Deno.test("AdapterK8sPort.getAllOpenApi", { ignore: Deno.env.get("TESTMODE") !== "LONG" }, async (t) => {
  function readTestKubeconfig(): string {
    const path = Deno.env.get("TEST_KUBECONFIG_PATH")
    if (!path) {
      return ""
    }
    return Deno.readTextFileSync(path)
  }

  type In = {
    kubeconfigStr: string
  }

  type Want = {
    hasErr: boolean
    components: {
      apiVersion: string
      schemas: Set<string>
    }[]
  }

  const tests: Array<{
    name: string
    in: In
    want: Want
  }> = [
    {
      name: "a cluster exposes multiple api versions; at least specified schemas are included in the returned OpenAPI",
      in: {
        kubeconfigStr: readTestKubeconfig(),
      },
      want: {
        hasErr: false,
        components: [
          {
            apiVersion: "apps/v1",
            schemas: new Set<string>([
              "io.k8s.api.apps.v1.DaemonSet",
              "io.k8s.api.apps.v1.Deployment",
              "io.k8s.api.apps.v1.ReplicaSet",
            ]),
          },
          {
            apiVersion: "v1",
            schemas: new Set<string>([
              "io.k8s.api.core.v1.Affinity",
              "io.k8s.api.core.v1.ConfigMap",
              "io.k8s.api.core.v1.Container",
              "io.k8s.api.core.v1.Pod",
              "io.k8s.api.core.v1.Secret",
            ]),
          },
          {
            apiVersion: "storage.k8s.io/v1",
            schemas: new Set<string>([
              "io.k8s.api.storage.v1.StorageClass",
              "io.k8s.api.core.v1.VolumeNodeAffinity",
            ]),
          },
        ],
      },
    },
    {
      name: "the kubeconfig is invalid; An error is returned",
      in: {
        kubeconfigStr: "invalid-kubeconfig-str",
      },
      want: {
        hasErr: true,
        components: [],
      },
    },
  ]

  for (const tt of tests) {
    await t.step(tt.name, async () => {
      const adapter: port.k8s.K8sPort = new AdapterK8sPort()

      const res = await adapter.getAllOpenApi(tt.in.kubeconfigStr)
      if (tt.want.hasErr) {
        stdAssert.assertExists(res.err)
      } else {
        // Check if the returned OpenAPI contains the specified schemas
        tt.want.components.every((component) => {
          for (const api of res.val) {
            if (component.apiVersion !== api.apiVersion) {
              continue
            }

            const schemas = new Set(Object.keys(JSON.parse(api.openApi)["components"]["schemas"]))
            return component.schemas.isSubsetOf(schemas)
          }

          return false
        })
      }
    })
  }
})

Deno.test("AdapterK8sPort.openApiToTypes", async (t) => {
  type In = {
    apiVersion: string
    openapiStr: string
  }

  type Want = {
    valid: boolean
  }

  const tests: Array<{
    name: string
    in: In
    want: Want
  }> = [
    {
      name: "v1 OpenAPI json is provided; a TypeScript types with export statement is returned",
      in: {
        apiVersion: "v1",
        openapiStr: ((): string => {
          return Deno.readTextFileSync("./testutil/v1.json")
        })(),
      },
      want: {
        valid: true,
      },
    },
    {
      name: "an invalid OpenAPI is provided; an empty string is returned",
      in: {
        apiVersion: "v1",
        openapiStr: ((): string => {
          return "invalid openapi string"
        })(),
      },
      want: {
        valid: false,
      },
    },
  ]

  for (const tt of tests) {
    await t.step(tt.name, async () => {
      const adapter: port.k8s.K8sPort = new AdapterK8sPort()

      const output = await adapter.openApiToTypes(tt.in.apiVersion, tt.in.openapiStr)
      if (tt.want.valid) {
        stdAssert.assert(output.includes("export default api"))
        stdAssert.assert(output.includes("export interface api"))
      } else {
        stdAssert.assertEquals(output, "")
      }
    })
  }
})
