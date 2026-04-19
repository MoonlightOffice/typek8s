import { di, entity, service } from "./pkg/deps.ts"

export type SynthParams = service.synth.SynthParams
export const SynthService = di.createSynthService()

export type Chart = entity.Chart
export type anifest = entity.Manifest
