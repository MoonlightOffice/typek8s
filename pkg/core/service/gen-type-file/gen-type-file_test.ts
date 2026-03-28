import { "@std/assert" as stdAssert, "ts-util" as tsUtil, entity, port } from "./deps.ts"
import { DefaultGenTypeFileService } from "./gen-type-file.ts"

Deno.test("DefaultGenTypeFileService.generate", async (t) => {
  type In = {
    kubeconfigStr: string
    outDir: string
    fileIOPort: port.fileIo.FakeFileIOPort
    k8sPort: port.k8s.StubK8sPort
  }

  type Want = {
    err: tsUtil.Err | null
    files: Record<string, string>
  }

  const tests: Array<{
    name: string
    in: In
    want: Want
  }> = [
    {
      name:
        "the cluster returns multiple OpenAPI documents; one TypeScript file is written per non-empty generated result under the requested output directory",
      in: {
        kubeconfigStr: "cluster-alpha",
        outDir: "generated/types",
        fileIOPort: new port.fileIo.FakeFileIOPort(),
        k8sPort: new port.k8s.StubK8sPort({
          getAllOpenApiRules: [
            {
              kubeconfigStr: "cluster-alpha",
              result: tsUtil.result(
                true,
                Promise.resolve([
                  {
                    apiVersion: "v1",
                    openApi: '{"components":{"schemas":{"ConfigMap":{}}}}',
                  },
                  {
                    apiVersion: "apps/v1",
                    openApi: '{"components":{"schemas":{"Deployment":{}}}}',
                  },
                  {
                    apiVersion: "batch/v1",
                    openApi: '{"components":{"schemas":{"Job":{}}}}',
                  },
                ]),
              ),
            },
          ],
          openApiToTypesRules: [
            {
              apiVersion: "v1",
              openapiStr: '{"components":{"schemas":{"ConfigMap":{}}}}',
              result: "export interface ConfigMap {}",
            },
            {
              apiVersion: "apps/v1",
              openapiStr: '{"components":{"schemas":{"Deployment":{}}}}',
              result: "export interface Deployment {}",
            },
            {
              apiVersion: "batch/v1",
              openapiStr: '{"components":{"schemas":{"Job":{}}}}',
              result: "",
            },
          ],
        }),
      },
      want: {
        err: null,
        files: {
          "generated/types/v1.ts": "export interface ConfigMap {}",
          "generated/types/apps.v1.ts": "export interface Deployment {}",
        },
      },
    },
    {
      name: "getAllOpenApi returns ErrUnauthorized; the same error is returned and no files are written",
      in: {
        kubeconfigStr: "cluster-bravo",
        outDir: "generated/types",
        fileIOPort: new port.fileIo.FakeFileIOPort(),
        k8sPort: new port.k8s.StubK8sPort({
          getAllOpenApiRules: [
            {
              kubeconfigStr: "cluster-bravo",
              result: tsUtil.result(false, entity.ErrUnauthorized),
            },
          ],
        }),
      },
      want: {
        err: entity.ErrUnauthorized,
        files: {},
      },
    },
    {
      name: "getAllOpenApi returns ErrInvalid; the same error is returned and no files are written",
      in: {
        kubeconfigStr: "cluster-charlie",
        outDir: "generated/types",
        fileIOPort: new port.fileIo.FakeFileIOPort(),
        k8sPort: new port.k8s.StubK8sPort({
          getAllOpenApiRules: [
            {
              kubeconfigStr: "cluster-charlie",
              result: tsUtil.result(false, entity.ErrInvalid),
            },
          ],
        }),
      },
      want: {
        err: entity.ErrInvalid,
        files: {},
      },
    },
    {
      name: "all generated type outputs are empty; the call succeeds without writing files",
      in: {
        kubeconfigStr: "cluster-delta",
        outDir: "generated/types",
        fileIOPort: new port.fileIo.FakeFileIOPort(),
        k8sPort: new port.k8s.StubK8sPort({
          getAllOpenApiRules: [
            {
              kubeconfigStr: "cluster-delta",
              result: tsUtil.result(
                true,
                Promise.resolve([
                  {
                    apiVersion: "networking.k8s.io/v1",
                    openApi: '{"components":{"schemas":{"Ingress":{}}}}',
                  },
                ]),
              ),
            },
          ],
          openApiToTypesRules: [
            {
              apiVersion: "networking.k8s.io/v1",
              openapiStr: '{"components":{"schemas":{"Ingress":{}}}}',
              result: "",
            },
          ],
        }),
      },
      want: {
        err: null,
        files: {},
      },
    },
  ]

  for (const tt of tests) {
    await t.step(tt.name, async () => {
      const service = new DefaultGenTypeFileService(tt.in.fileIOPort, tt.in.k8sPort)

      const res = await service.generate(tt.in.kubeconfigStr, tt.in.outDir)

      if (tt.want.err != null) {
        stdAssert.assertExists(res.err)
        stdAssert.assertEquals(res.err.is(tt.want.err), true)
      } else {
        stdAssert.assertEquals(res.err, null)
      }

      for (const [path, content] of Object.entries(tt.want.files)) {
        const fileRes = tt.in.fileIOPort.read(path)
        stdAssert.assertEquals(fileRes.err, null)
        stdAssert.assertEquals(fileRes.val, content)
      }

      // Derive the expected direct children of `outDir` from the asserted output files
      // so the test also fails when the service writes extra files.
      const expectedFileNames = Object.keys(tt.want.files)
        .filter((path) => path.startsWith(`${tt.in.outDir}/`))
        .map((path) => path.slice(tt.in.outDir.length + 1))
        .sort((left, right) => left.localeCompare(right))
      stdAssert.assertEquals(tt.in.fileIOPort.listFiles(tt.in.outDir), expectedFileNames)
    })
  }
})
