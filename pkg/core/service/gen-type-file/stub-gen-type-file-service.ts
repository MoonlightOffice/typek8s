import type { GenTypeFileService } from "./gen-type-file.ts"
import { "ts-util" as tsUtil } from "./deps.ts"

export interface StubGenTypeFileServiceParams {
  /** Default result returned when no queued result or output-directory-specific result applies. Defaults to success. */
  defaultResult?: tsUtil.Result<void>
  /** FIFO results returned one per `generate` call before other configuration is consulted. */
  results?: tsUtil.Result<void>[]
  /** Results keyed by output directory for upper-layer tests that only care about coarse scenarios. */
  resultByOutDir?: Record<string, tsUtil.Result<void>>
}

/**
 * A scenario-driven `GenTypeFileService` stub for tests and example wiring.
 *
 * This stub supports coarse blackbox scenarios only: queued results,
 * output-directory-specific results, and a default result. It intentionally
 * does not match full input params such as kubeconfig contents.
 */
export class StubGenTypeFileService implements GenTypeFileService {
  #defaultResult: tsUtil.Result<void>
  #results: tsUtil.Result<void>[]
  #resultByOutDir: Record<string, tsUtil.Result<void>>

  constructor(params: StubGenTypeFileServiceParams = {}) {
    this.#defaultResult = params.defaultResult ?? tsUtil.result(true, undefined)
    this.#results = [...(params.results ?? [])]
    this.#resultByOutDir = params.resultByOutDir ?? {}
  }

  generate(_kubeconfigStr: string, outDir: string): Promise<tsUtil.Result<void>> {
    const queuedResult = this.#results.shift()
    if (queuedResult != null) {
      return Promise.resolve(queuedResult)
    }

    if (Object.hasOwn(this.#resultByOutDir, outDir)) {
      return Promise.resolve(this.#resultByOutDir[outDir]!)
    }

    return Promise.resolve(this.#defaultResult)
  }
}
