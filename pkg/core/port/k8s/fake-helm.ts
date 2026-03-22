import type { HelmPort, HelmPortCredential } from "./helm.ts"
import { "ts-util" as tsUtil, entity } from "./deps.ts"

export interface FakeHelmPortPullChartRule {
  path: string
  credential?: HelmPortCredential
  result: tsUtil.Result<Promise<File>>
}

export interface FakeHelmPortParams {
  /** Exact-match rules for `pullChart`; add one entry per `(path, credential)` combination you want the fake to recognize in a test. */
  pullChartRules?: FakeHelmPortPullChartRule[]
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
 * An input-mapped `HelmPort` fake for tests and example wiring.
 *
 * This fake treats chart paths and credentials as opaque inputs and returns
 * the first exact-match rule. When no rule matches, `entity.ErrInvalid` is returned.
 */
export class FakeHelmPort implements HelmPort {
  #pullChartRules: FakeHelmPortPullChartRule[]

  constructor(params: FakeHelmPortParams = {}) {
    this.#pullChartRules = params.pullChartRules ?? []
  }

  pullChart(params: { path: string; credential?: HelmPortCredential }): tsUtil.Result<Promise<File>> {
    const rule = this.#pullChartRules.find((candidate) =>
      candidate.path === params.path && isSameCredential(candidate.credential, params.credential)
    )
    if (rule == null) {
      return tsUtil.result(false, entity.ErrInvalid)
    }

    return rule.result
  }
}
