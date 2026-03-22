import type { getAllOpenApiResult, K8sPort } from "./k8s-port.ts"
import { "ts-util" as tsUtil, entity } from "./deps.ts"

export interface FakeK8sPortGetAllOpenApiRule {
  kubeconfigStr: string
  result: tsUtil.Result<Promise<getAllOpenApiResult[]>>
}

export interface FakeK8sPortOpenApiToTypesRule {
  apiVersion: string
  openapiStr: string
  result: string | Promise<string>
}

export interface FakeK8sPortParams {
  /** Exact-match rules for `getAllOpenApi`; add one entry per kubeconfig string you want the fake to recognize in a test. */
  getAllOpenApiRules?: FakeK8sPortGetAllOpenApiRule[]
  /** Exact-match rules for `openApiToTypes`; add one entry per `(apiVersion, openapiStr)` combination you want the fake to recognize in a test. */
  openApiToTypesRules?: FakeK8sPortOpenApiToTypesRule[]
}

/**
 * An input-mapped `K8sPort` fake for tests and example wiring.
 *
 * This fake treats `kubeconfigStr` and OpenAPI payloads as opaque inputs and
 * returns the first exact-match rule. When no rule matches, safe defaults are returned.
 */
export class FakeK8sPort implements K8sPort {
  #getAllOpenApiRules: FakeK8sPortGetAllOpenApiRule[]
  #openApiToTypesRules: FakeK8sPortOpenApiToTypesRule[]

  constructor(params: FakeK8sPortParams = {}) {
    this.#getAllOpenApiRules = params.getAllOpenApiRules ?? []
    this.#openApiToTypesRules = params.openApiToTypesRules ?? []
  }

  getAllOpenApi(kubeconfigStr: string): tsUtil.Result<Promise<getAllOpenApiResult[]>> {
    const rule = this.#getAllOpenApiRules.find((candidate) => candidate.kubeconfigStr === kubeconfigStr)
    if (rule == null) {
      return tsUtil.result(false, entity.ErrInvalid)
    }

    return rule.result
  }

  // deno-lint-ignore require-await
  async openApiToTypes(apiVersion: string, openapiStr: string): Promise<string> {
    const rule = this.#openApiToTypesRules.find((candidate) =>
      candidate.apiVersion === apiVersion && candidate.openapiStr === openapiStr
    )
    if (rule == null) {
      return ""
    }

    return rule.result
  }
}
