import { StubK8sPort } from "./stub-k8s-port.ts"
import type { StubK8sPortParams } from "./stub-k8s-port.ts"
import type { getAllOpenApiResult } from "../../core/port/k8s/mod.ts"
import { "@std/assert" as stdAssert, "ts-util" as tsUtil, entity } from "./deps.ts"

function createFile(name: string, text: string, type = "text/typescript"): File {
  return new File([text], name, { type })
}

Deno.test("StubK8sPort.getAllOpenApi", async (t) => {
  type In = {
    params: StubK8sPortParams
    kubeconfigStr: string
  }

  type Want = {
    err: tsUtil.Err | null
    docs: getAllOpenApiResult[]
  }

  const tests: Array<{
    name: string
    in: In
    want: Want
  }> = [
    {
      name: "a matching getAllOpenApi rule exists; the matching documents are returned",
      in: {
        params: {
          getAllOpenApiRules: [
            {
              kubeconfigStr: "cluster-alpha",
              result: tsUtil.result(true, [
                {
                  apiVersion: "apps/v1",
                  openApi: '{"components":{"schemas":{"Deployment":{}}}}',
                },
                {
                  apiVersion: "batch/v1",
                  openApi: '{"components":{"schemas":{"Job":{}}}}',
                },
              ]),
            },
          ],
        },
        kubeconfigStr: "cluster-alpha",
      },
      want: {
        err: null,
        docs: [
          {
            apiVersion: "apps/v1",
            openApi: '{"components":{"schemas":{"Deployment":{}}}}',
          },
          {
            apiVersion: "batch/v1",
            openApi: '{"components":{"schemas":{"Job":{}}}}',
          },
        ],
      },
    },
    {
      name: "a matching getAllOpenApi rule returns a promise; the resolved documents are returned",
      in: {
        params: {
          getAllOpenApiRules: [
            {
              kubeconfigStr: "cluster-async",
              result: tsUtil.result(true, [{
                apiVersion: "networking.k8s.io/v1",
                openApi: '{"components":{"schemas":{"Ingress":{}}}}',
              }]),
            },
          ],
        },
        kubeconfigStr: "cluster-async",
      },
      want: {
        err: null,
        docs: [
          {
            apiVersion: "networking.k8s.io/v1",
            openApi: '{"components":{"schemas":{"Ingress":{}}}}',
          },
        ],
      },
    },
    {
      name: "a matching getAllOpenApi rule returns ErrUnauthorized; the same error is returned",
      in: {
        params: {
          getAllOpenApiRules: [
            {
              kubeconfigStr: "cluster-bravo",
              result: tsUtil.result(false, entity.ErrUnauthorized),
            },
          ],
        },
        kubeconfigStr: "cluster-bravo",
      },
      want: {
        err: entity.ErrUnauthorized,
        docs: [],
      },
    },
    {
      name: "a matching getAllOpenApi rule returns ErrInvalid; the same error is returned",
      in: {
        params: {
          getAllOpenApiRules: [
            {
              kubeconfigStr: "cluster-charlie",
              result: tsUtil.result(false, entity.ErrInvalid),
            },
          ],
        },
        kubeconfigStr: "cluster-charlie",
      },
      want: {
        err: entity.ErrInvalid,
        docs: [],
      },
    },
    {
      name: "no getAllOpenApi rule matches the kubeconfig string; ErrInvalid is returned",
      in: {
        params: {
          getAllOpenApiRules: [
            {
              kubeconfigStr: "cluster-alpha",
              result: tsUtil.result(true, [
                {
                  apiVersion: "apps/v1",
                  openApi: '{"components":{"schemas":{"Deployment":{}}}}',
                },
              ]),
            },
          ],
        },
        kubeconfigStr: "cluster-missing",
      },
      want: {
        err: entity.ErrInvalid,
        docs: [],
      },
    },
  ]

  for (const tt of tests) {
    await t.step(tt.name, async () => {
      const port = new StubK8sPort(tt.in.params)
      const res = await port.getAllOpenApi(tt.in.kubeconfigStr)

      if (tt.want.err != null) {
        stdAssert.assertEquals(res.err!.is(tt.want.err), true)
      } else {
        stdAssert.assertEquals(res.val, tt.want.docs)
      }
    })
  }
})

Deno.test("StubK8sPort.typeFilesToModFile", async (t) => {
  type In = {
    params: StubK8sPortParams
    fileNames: string[]
  }

  type Want = {
    name: string
    text: string
  }

  const tests: Array<{
    name: string
    in: In
    want: Want
  }> = [
    {
      name: "a matching typeFilesToModFile rule exists; the configured mod.ts file is returned",
      in: {
        params: {
          typeFilesToModFileRules: [
            {
              fileNames: ["apps.v1.ts", "v1.ts"],
              result: createFile(
                "mod.ts",
                'export type { api as appsV1 } from "./apps.v1.ts"\nexport type { api as v1 } from "./v1.ts"\n',
              ),
            },
          ],
        },
        fileNames: ["apps.v1.ts", "v1.ts"],
      },
      want: {
        name: "mod.ts",
        text: 'export type { api as appsV1 } from "./apps.v1.ts"\nexport type { api as v1 } from "./v1.ts"\n',
      },
    },
    {
      name: "a matching typeFilesToModFile rule returns a promise; the resolved mod.ts file is returned",
      in: {
        params: {
          typeFilesToModFileRules: [
            {
              fileNames: ["storage.k8s.io.v1.ts"],
              result: createFile("mod.ts", 'export type { api as storageK8sIoV1 } from "./storage.k8s.io.v1.ts"\n'),
            },
          ],
        },
        fileNames: ["storage.k8s.io.v1.ts"],
      },
      want: {
        name: "mod.ts",
        text: 'export type { api as storageK8sIoV1 } from "./storage.k8s.io.v1.ts"\n',
      },
    },
    {
      name: "the same file names are provided in a different order; the default empty mod.ts file is returned",
      in: {
        params: {
          typeFilesToModFileRules: [
            {
              fileNames: ["apps.v1.ts", "v1.ts"],
              result: createFile("mod.ts", 'export type { api as appsV1 } from "./apps.v1.ts"\n'),
            },
          ],
        },
        fileNames: ["v1.ts", "apps.v1.ts"],
      },
      want: {
        name: "mod.ts",
        text: "",
      },
    },
    {
      name: "no typeFilesToModFile rule matches the input; the default empty mod.ts file is returned",
      in: {
        params: {
          typeFilesToModFileRules: [
            {
              fileNames: ["apps.v1.ts"],
              result: createFile("mod.ts", 'export type { api as appsV1 } from "./apps.v1.ts"\n'),
            },
          ],
        },
        fileNames: [],
      },
      want: {
        name: "mod.ts",
        text: "",
      },
    },
  ]

  for (const tt of tests) {
    await t.step(tt.name, async () => {
      const port = new StubK8sPort(tt.in.params)
      const res = await port.typeFilesToModFile(tt.in.fileNames)

      stdAssert.assertEquals(res.name, tt.want.name)
      stdAssert.assertEquals(await res.text(), tt.want.text)
    })
  }
})

Deno.test("StubK8sPort.openApiToTypes", async (t) => {
  type In = {
    params: StubK8sPortParams
    apiVersion: string
    openapiStr: string
  }

  type Want = {
    res: string
  }

  const tests: Array<{
    name: string
    in: In
    want: Want
  }> = [
    {
      name: "a matching openApiToTypes rule exists; the generated types are returned",
      in: {
        params: {
          openApiToTypesRules: [
            {
              apiVersion: "apps/v1",
              openapiStr: '{"components":{"schemas":{"Deployment":{}}}}',
              result: "export interface Deployment {}",
            },
          ],
        },
        apiVersion: "apps/v1",
        openapiStr: '{"components":{"schemas":{"Deployment":{}}}}',
      },
      want: {
        res: "export interface Deployment {}",
      },
    },
    {
      name: "a matching openApiToTypes rule returns a promise; the resolved generated types are returned",
      in: {
        params: {
          openApiToTypesRules: [
            {
              apiVersion: "batch/v1",
              openapiStr: '{"components":{"schemas":{"Job":{}}}}',
              result: "export interface Job {}",
            },
          ],
        },
        apiVersion: "batch/v1",
        openapiStr: '{"components":{"schemas":{"Job":{}}}}',
      },
      want: {
        res: "export interface Job {}",
      },
    },
    {
      name: "no openApiToTypes rule matches the inputs; an empty string is returned",
      in: {
        params: {
          openApiToTypesRules: [
            {
              apiVersion: "apps/v1",
              openapiStr: '{"components":{"schemas":{"Deployment":{}}}}',
              result: "export interface Deployment {}",
            },
          ],
        },
        apiVersion: "batch/v1",
        openapiStr: '{"components":{"schemas":{"Job":{}}}}',
      },
      want: {
        res: "",
      },
    },
  ]

  for (const tt of tests) {
    await t.step(tt.name, async () => {
      const port = new StubK8sPort(tt.in.params)
      const res = await port.openApiToTypes(tt.in.apiVersion, tt.in.openapiStr)

      stdAssert.assertEquals(res, tt.want.res)
    })
  }
})
