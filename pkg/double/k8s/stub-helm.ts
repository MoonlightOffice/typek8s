import type { HelmPort, SynthParams } from "../../core/port/k8s/mod.ts"
import { "ts-util" as tsUtil, entity } from "./deps.ts"

export interface StubHelmPortSynthRule {
  /** Exact-match synth params this stub should recognize. */
  params: SynthParams
  /** Result returned when the synth params match this rule. */
  result: tsUtil.Result<File | Promise<File>>
}

export interface StubHelmPortParams {
  /** Exact-match rules for `synth`; add one entry per `SynthParams` combination you want the stub to recognize in a test. */
  synthRules?: StubHelmPortSynthRule[]
}

function isSameOptionalValue(left: unknown, right: unknown): boolean {
  if (left == null || right == null) {
    return left === right
  }

  return JSON.stringify(left) === JSON.stringify(right)
}

function isSameSynthParams(left: SynthParams, right: SynthParams): boolean {
  return left.name === right.name &&
    JSON.stringify(left.manifests) === JSON.stringify(right.manifests) &&
    isSameOptionalValue(left.crds, right.crds) &&
    isSameOptionalValue(left.depCharts, right.depCharts)
}

/**
 * An input-mapped `HelmPort` stub for tests and example wiring.
 *
 * This stub treats synth inputs as opaque values and returns
 * the first exact-match rule. When no rule matches, `entity.ErrInvalid` is returned.
 */
export class StubHelmPort implements HelmPort {
  #synthRules: StubHelmPortSynthRule[]

  constructor(params: StubHelmPortParams = {}) {
    this.#synthRules = params.synthRules ?? []
  }

  async synth(params: SynthParams): Promise<tsUtil.Result<File>> {
    const rule = this.#synthRules.find((candidate) => isSameSynthParams(candidate.params, params))
    if (rule == null) {
      return tsUtil.result(false, entity.ErrInvalid)
    }

    if (rule.result.err != null) {
      return tsUtil.result(false, rule.result.err)
    }

    return tsUtil.result(true, await rule.result.val)
  }
}
