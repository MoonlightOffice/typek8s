import type { getAllOpenApiResult, K8sPort } from "../../core/port/k8s/mod.ts"
import { "ts-util" as tsUtil, entity } from "./deps.ts"

export interface StubK8sPortGetAllOpenApiRule {
  kubeconfigStr: string
  result: tsUtil.Result<getAllOpenApiResult[]>
}

export interface StubK8sPortOpenApiToTypesRule {
  apiVersion: string
  openapiStr: string
  result: string
}

export interface StubK8sPortTypeFilesToModFileRule {
  fileNames: string[]
  result: File
}

export interface StubK8sPortParams {
  /** Exact-match rules for `getAllOpenApi`; add one entry per kubeconfig string you want the stub to recognize in a test. */
  getAllOpenApiRules?: StubK8sPortGetAllOpenApiRule[]
  /** Exact-match rules for `openApiToTypes`; add one entry per `(apiVersion, openapiStr)` combination you want the stub to recognize in a test. */
  openApiToTypesRules?: StubK8sPortOpenApiToTypesRule[]
  /** Exact-match rules for `typeFilesToModFile`; add one entry per ordered file-name list you want the stub to recognize in a test. */
  typeFilesToModFileRules?: StubK8sPortTypeFilesToModFileRule[]
}

function isSameFileNames(left: string[], right: string[]): boolean {
  return left.length === right.length && left.every((value, index) => value === right[index])
}

/**
 * An input-mapped `K8sPort` stub for tests and example wiring.
 *
 * This stub treats `kubeconfigStr` and OpenAPI payloads as opaque inputs and
 * returns the first exact-match rule. When no rule matches, safe defaults are returned.
 */
export class StubK8sPort implements K8sPort {
  #getAllOpenApiRules: StubK8sPortGetAllOpenApiRule[]
  #openApiToTypesRules: StubK8sPortOpenApiToTypesRule[]
  #typeFilesToModFileRules: StubK8sPortTypeFilesToModFileRule[]

  constructor(params: StubK8sPortParams = {}) {
    this.#getAllOpenApiRules = params.getAllOpenApiRules ?? []
    this.#openApiToTypesRules = params.openApiToTypesRules ?? []
    this.#typeFilesToModFileRules = params.typeFilesToModFileRules ?? []
  }

  async getAllOpenApi(kubeconfigStr: string): Promise<tsUtil.Result<getAllOpenApiResult[]>> {
    const rule = this.#getAllOpenApiRules.find((candidate) => candidate.kubeconfigStr === kubeconfigStr)
    if (rule == null) {
      return tsUtil.result(false, entity.ErrInvalid)
    }

    return await rule.result
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

  async typeFilesToModFile(fileNames: string[]): Promise<File> {
    const rule = this.#typeFilesToModFileRules.find((candidate) => isSameFileNames(candidate.fileNames, fileNames))
    if (rule == null) {
      return new File([""], "mod.ts", { type: "text/typescript" })
    }

    return await rule.result
  }
}
