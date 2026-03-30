import { "@std/assert" as stdAssert, "ts-util" as tsUtil, entity, port } from "./deps.ts"
import { AdapterK8sPort } from "./adapter-k8s-port.ts"

function createFile(name: string, text: string, type = "text/typescript"): File {
  return new File([text], name, { type })
}

Deno.test("AdapterK8sPort.getAllOpenApi", { ignore: true }, async (t) => {
  type In = {
    kubeconfigStr: string
  }

  type Want = {
    err: tsUtil.Err | null
    docs: port.k8s.getAllOpenApiResult[]
  }

  const tests: Array<{
    name: string
    in: In
    want: Want
  }> = [
    {
      name: "a cluster exposes multiple api versions; all OpenAPI documents are returned",
      in: {
        kubeconfigStr: "cluster-alpha",
      },
      want: {
        err: null,
        docs: [
          { apiVersion: "v1", openApi: '{"components":{"schemas":{"ConfigMap":{}}}}' },
          { apiVersion: "apps/v1", openApi: '{"components":{"schemas":{"Deployment":{}}}}' },
        ],
      },
    },
    {
      name: "the kubeconfig is unauthorized; ErrUnauthorized is returned",
      in: {
        kubeconfigStr: "cluster-unauthorized",
      },
      want: {
        err: entity.ErrUnauthorized,
        docs: [],
      },
    },
    {
      name: "the kubeconfig points to an invalid server; ErrInvalid is returned",
      in: {
        kubeconfigStr: "cluster-invalid",
      },
      want: {
        err: entity.ErrInvalid,
        docs: [],
      },
    },
  ]

  for (const tt of tests) {
    await t.step(tt.name, () => {
      const adapter: port.k8s.K8sPort = new AdapterK8sPort()

      void adapter
      void tt.in
      void tt.want

      // TODO: Call getAllOpenApi and assert the blackbox result matches tt.want.
      stdAssert.assertEquals(true, true)
    })
  }
})

Deno.test("AdapterK8sPort.openApiToTypes", { ignore: true }, async (t) => {
  type In = {
    apiVersion: string
    openapiStr: string
  }

  type Want = {
    types: string
  }

  const tests: Array<{
    name: string
    in: In
    want: Want
  }> = [
    {
      name: "a supported Kubernetes OpenAPI document is converted into types",
      in: {
        apiVersion: "apps/v1",
        openapiStr: '{"components":{"schemas":{"Deployment":{}}}}',
      },
      want: {
        types: "export interface Deployment {}",
      },
    },
    {
      name: "no supported schemas exist for the apiVersion; an empty string is returned",
      in: {
        apiVersion: "batch/v1",
        openapiStr: '{"components":{"schemas":{}}}',
      },
      want: {
        types: "",
      },
    },
  ]

  for (const tt of tests) {
    await t.step(tt.name, () => {
      const adapter: port.k8s.K8sPort = new AdapterK8sPort()

      void adapter
      void tt.in
      void tt.want

      // TODO: Call openApiToTypes and assert the generated output matches tt.want.types.
      stdAssert.assertEquals(true, true)
    })
  }
})

Deno.test("AdapterK8sPort.typeFilesToModFile", { ignore: true }, async (t) => {
  type In = {
    fileNames: string[]
  }

  type Want = {
    file: File
  }

  const tests: Array<{
    name: string
    in: In
    want: Want
  }> = [
    {
      name: "generated type files are re-exported in input order",
      in: {
        fileNames: ["apps.v1.ts", "v1.ts"],
      },
      want: {
        file: createFile(
          "mod.ts",
          'export type { api as appsV1 } from "./apps.v1.ts"\nexport type { api as v1 } from "./v1.ts"\n',
        ),
      },
    },
    {
      name: "no generated type files exist; an empty mod.ts file is returned",
      in: {
        fileNames: [],
      },
      want: {
        file: createFile("mod.ts", ""),
      },
    },
  ]

  for (const tt of tests) {
    await t.step(tt.name, () => {
      const adapter: port.k8s.K8sPort = new AdapterK8sPort()

      void adapter
      void tt.in
      void tt.want

      // TODO: Call typeFilesToModFile and assert the resulting file matches tt.want.file.
      stdAssert.assertEquals(true, true)
    })
  }
})
