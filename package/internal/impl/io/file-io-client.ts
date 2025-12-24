import type { FileIOClient } from "internal/core/client/io.ts"
import { join } from "@std/path"

export class FileIOClientImpl implements FileIOClient {
  constructor() {}

  read(path: string): string {
    return Deno.readTextFileSync(path)
  }

  write(dir: string, fname: string, content: string): void {
    if (!Deno.statSync(dir)?.isDirectory) {
      Deno.mkdirSync(dir, { recursive: true })
    }

    const path = join(dir, fname)
    Deno.writeTextFileSync(path, content)
  }
}
