import { "@std/path" as stdPath, "ts-util" as tsUtil, entity, port, util } from "./deps.ts"

export class AdapterFileIOPort implements port.fileIo.FileIOPort {
  read(path: string): tsUtil.Result<string> {
    try {
      const bytes = Deno.readFileSync(path)
      return tsUtil.result(true, util.bytesToString(bytes))
    } catch (err) {
      if (err instanceof Deno.errors.NotFound || err instanceof Deno.errors.IsADirectory) {
        return tsUtil.result(false, new tsUtil.Err(`file not found: ${path}`).add(entity.ErrNotFound))
      }

      return tsUtil.result(false, new tsUtil.Err(String(err)))
    }
  }

  write(dir: string, fname: string, content: string): void {
    Deno.mkdirSync(dir, { recursive: true })
    Deno.writeFileSync(stdPath.join(dir, fname), util.stringToBytes(content))
  }

  listFiles(dir: string): string[] {
    try {
      return Array.from(Deno.readDirSync(dir))
        .filter((entry) => entry.isFile)
        .map((entry) => entry.name)
        .sort((left, right) => left.localeCompare(right))
    } catch (err) {
      if (err instanceof Deno.errors.NotFound || err instanceof Deno.errors.NotADirectory) {
        return []
      }

      throw err
    }
  }

  mkdir(path: string): void {
    Deno.mkdirSync(path, { recursive: true })
  }

  remove(path: string): void {
    try {
      Deno.removeSync(path, { recursive: true })
    } catch (err) {
      if (err instanceof Deno.errors.NotFound) {
        return
      }

      throw err
    }
  }
}
