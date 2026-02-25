import { "@std/path" as stdPath, "@std/yaml" as stdYaml, client } from "../deps.ts"

export class FileIOClientImpl implements client.FileIOClient {
  constructor() {}

  read(path: string): string {
    return Deno.readTextFileSync(path)
  }

  write(dir: string, fname: string, content: string): void {
    if (!Deno.statSync(dir)?.isDirectory) {
      Deno.mkdirSync(dir, { recursive: true })
    }

    const path = stdPath.join(dir, fname)
    Deno.writeTextFileSync(path, content)
  }

  listFiles(dir: string, pattern?: string): string[] {
    const files: string[] = []
    for (const entry of Deno.readDirSync(dir)) {
      if (entry.isFile) {
        if (!pattern || entry.name.endsWith(pattern.replace("*", ""))) {
          files.push(entry.name)
        }
      }
    }
    return files
  }

  mkdir(path: string): void {
    Deno.mkdirSync(path, { recursive: true })
  }

  remove(path: string): void {
    try {
      Deno.removeSync(path, { recursive: true })
    } catch (error) {
      if (error instanceof Deno.errors.NotFound) {
        return
      }
      throw error
    }
  }

  writeYaml(dir: string, fname: string, obj: unknown): void {
    const yamlContent = stdYaml.stringify(obj)
    this.write(dir, fname, yamlContent)
  }
}
