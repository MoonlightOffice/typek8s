import type { SynthParams, SynthService } from "./synth.ts"
import { "ts-util" as tsUtil } from "./deps.ts"

export interface StubSynthServiceParams {
  /** Default result returned when no queued result or name-specific result applies. Defaults to success. */
  defaultResult?: tsUtil.Result<void>
  /** FIFO results returned one per `synth` call before other configuration is consulted. */
  results?: tsUtil.Result<void>[]
  /** Results keyed by chart name for upper-layer tests that only care about coarse scenarios. */
  resultByName?: Record<string, tsUtil.Result<void>>
}

/**
 * A scenario-driven `SynthService` stub for tests and example wiring.
 *
 * This stub supports coarse blackbox scenarios only: queued results,
 * name-specific results, and a default result. It intentionally does not
 * model durable state or match full input params.
 */
export class StubSynthService implements SynthService {
  #defaultResult: tsUtil.Result<void>
  #results: tsUtil.Result<void>[]
  #resultByName: Record<string, tsUtil.Result<void>>

  constructor(params: StubSynthServiceParams = {}) {
    this.#defaultResult = params.defaultResult ?? tsUtil.result(true, undefined)
    this.#results = [...(params.results ?? [])]
    this.#resultByName = params.resultByName ?? {}
  }

  synth(params: SynthParams): Promise<tsUtil.Result<void>> {
    const queuedResult = this.#results.shift()
    if (queuedResult != null) {
      return Promise.resolve(queuedResult)
    }

    if (Object.hasOwn(this.#resultByName, params.name)) {
      return Promise.resolve(this.#resultByName[params.name]!)
    }

    return Promise.resolve(this.#defaultResult)
  }
}
