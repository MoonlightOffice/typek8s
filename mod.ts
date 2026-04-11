import { di, service } from "./pkg/deps.ts"

export type SynthParams = service.synth.SynthParams
export const SynthService = di.createSynthService()
