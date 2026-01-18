export * as api from "./api/mod.ts"

import { core, di, service } from "./deps.ts"

export const TypeK8s = di.service.synthService
export type HelmChartInput = service.HelmChartInput
export type SynthOptions = service.SynthOptions
export type Manifest = core.Manifest
