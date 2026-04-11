import { service } from "./deps.ts"
import { createFileIOPort, createHelmPort, createK8sPort } from "./port.ts"

export function createGenTypeFileService(): service.genTypeFile.GenTypeFileService {
  return new service.genTypeFile.GenTypeFileService(
    createFileIOPort(),
    createK8sPort(),
  )
}

export function createSynthService(): service.synth.SynthService {
  return new service.synth.SynthService(
    createFileIOPort(),
    createHelmPort(),
  )
}
