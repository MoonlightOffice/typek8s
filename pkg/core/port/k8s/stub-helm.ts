import type { HelmPort, HelmPortCredential } from "./helm.ts"
import { "ts-util" as tsUtil, entity } from "./deps.ts"

export interface StubHelmPortPullChartRule {
  path: string
  credential?: HelmPortCredential
  result: tsUtil.Result<File>
}

export interface StubHelmPortParams {
  /** Exact-match rules for `pullChart`; add one entry per `(path, credential)` combination you want the stub to recognize in a test. */
  pullChartRules?: StubHelmPortPullChartRule[]
}

function isSameCredential(
  left?: HelmPortCredential,
  right?: HelmPortCredential,
): boolean {
  if (left == null || right == null) {
    return left === right
  }

  return left.userName === right.userName && left.password === right.password
}

/**
 * An input-mapped `HelmPort` stub for tests and example wiring.
 *
 * This stub treats chart paths and credentials as opaque inputs and returns
 * the first exact-match rule. When no rule matches, `entity.ErrInvalid` is returned.
 */
export class StubHelmPort implements HelmPort {
  #pullChartRules: StubHelmPortPullChartRule[]

  constructor(params: StubHelmPortParams = {}) {
    this.#pullChartRules = params.pullChartRules ?? []
  }

  pullChart(params: { path: string; credential?: HelmPortCredential }): Promise<tsUtil.Result<File>> {
    const rule = this.#pullChartRules.find((candidate) =>
      candidate.path === params.path && isSameCredential(candidate.credential, params.credential)
    )
    if (rule == null) {
      return Promise.resolve(tsUtil.result(false, entity.ErrInvalid))
    }

    return Promise.resolve(rule.result)
  }
}
