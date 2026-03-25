import type { SynthParams, SynthService } from "./synth.ts"
import { "ts-util" as tsUtil, entity } from "./deps.ts"

export interface FakeSynthServiceSynthRule {
  params: SynthParams
  result: tsUtil.Result<void>
}

export interface FakeSynthServiceParams {
  /** Exact-match rules for `synth`; add one entry per `SynthParams` combination you want the fake to recognize in a test. */
  synthRules?: FakeSynthServiceSynthRule[]
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
    isSameOptionalValue(left.depCharts, right.depCharts) &&
    left.outDir === right.outDir &&
    isSameOptionalValue(left.helmCredential, right.helmCredential)
}

/**
 * An input-mapped `SynthService` fake for tests and example wiring.
 *
 * This fake treats synth inputs as opaque values and returns the first
 * exact-match rule. When no rule matches, `entity.ErrInvalid` is returned.
 */
export class FakeSynthService implements SynthService {
  #synthRules: FakeSynthServiceSynthRule[]

  constructor(params: FakeSynthServiceParams = {}) {
    this.#synthRules = params.synthRules ?? []
  }

  synth(params: SynthParams): Promise<tsUtil.Result<void>> {
    const rule = this.#synthRules.find((candidate) => isSameSynthParams(candidate.params, params))
    if (rule == null) {
      return Promise.resolve(tsUtil.result(false, entity.ErrInvalid))
    }

    return Promise.resolve(rule.result)
  }
}
