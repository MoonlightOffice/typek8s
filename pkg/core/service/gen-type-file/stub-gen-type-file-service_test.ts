import { StubGenTypeFileService } from "./stub-gen-type-file-service.ts"
import type { StubGenTypeFileServiceParams } from "./stub-gen-type-file-service.ts"
import { "@std/assert" as stdAssert, "ts-util" as tsUtil, entity } from "./deps.ts"

Deno.test("StubGenTypeFileService.generate", async (t) => {
  type In = {
    stubParams: StubGenTypeFileServiceParams
    kubeconfigStr: string
    outDir: string
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
      name: "no stub params are provided; success is returned for blackbox upper-layer tests",
      in: {
        stubParams: {},
        kubeconfigStr: "cluster-alpha",
        outDir: "generated/types",
      },
      want: {
        err: null,
      },
    },
    {
      name: "defaultResult is provided; the default error is returned",
      in: {
        stubParams: {
          defaultResult: tsUtil.result(false, entity.ErrUnauthorized),
        },
        kubeconfigStr: "cluster-bravo",
        outDir: "generated/types",
      },
      want: {
        err: entity.ErrUnauthorized,
      },
    },
    {
      name: "results are queued; the first queued result is returned",
      in: {
        stubParams: {
          results: [
            tsUtil.result(false, entity.ErrInvalid),
            tsUtil.result(true, undefined),
          ],
        },
        kubeconfigStr: "cluster-charlie",
        outDir: "generated/types",
      },
      want: {
        err: entity.ErrInvalid,
      },
    },
    {
      name:
        "a resultByOutDir entry exists; the output-directory-specific result is returned without matching full kubeconfig contents",
      in: {
        stubParams: {
          resultByOutDir: {
            "generated/beta": tsUtil.result(false, entity.ErrUnauthorized),
          },
        },
        kubeconfigStr: "apiVersion: v1\nclusters:\n- name: prod\n",
        outDir: "generated/beta",
      },
      want: {
        err: entity.ErrUnauthorized,
      },
    },
    {
      name: "no resultByOutDir entry matches; the default success result is returned",
      in: {
        stubParams: {
          resultByOutDir: {
            "generated/alpha": tsUtil.result(false, entity.ErrInvalid),
          },
        },
        kubeconfigStr: "cluster-delta",
        outDir: "generated/other",
      },
      want: {
        err: null,
      },
    },
  ]

  for (const tt of tests) {
    await t.step(tt.name, async () => {
      const service = new StubGenTypeFileService(tt.in.stubParams)
      const res = await service.generate(tt.in.kubeconfigStr, tt.in.outDir)

      if (tt.want.err != null) {
        stdAssert.assertEquals(res.err!.is(tt.want.err), true)
      } else {
        stdAssert.assertEquals(res.err, null)
      }
    })
  }
})
