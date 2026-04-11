import { cli } from "./deps.ts"
import { createFileIOPort } from "./port.ts"
import { createGenTypeFileService } from "./service.ts"

export function createTypek8sCli(): cli.Typek8sCli {
  return new cli.Typek8sCli(
    createGenTypeFileService(),
    createFileIOPort(),
  )
}
