import type { FileIOPort } from "./file-io-port.ts"
import { "ts-util" as tsUtil, entity } from "./deps.ts"

function isDescendant(path: string, parent: string): boolean {
  if (parent === "." || parent === "/") {
    return path !== parent
  }

  return path.startsWith(`${parent}/`)
}

function normalizePath(path: string): string {
  if (path === "/") {
    return "/"
  }

  const normalized = path
    .replaceAll("\\", "/")
    .split("/")
    .filter((part) => part.length > 0 && part !== ".")
    .join("/")

  if (path.startsWith("/")) {
    return normalized.length === 0 ? "/" : `/${normalized}`
  }

  return normalized.length === 0 ? "." : normalized
}

function dirname(path: string): string {
  if (path === "/" || path === ".") {
    return path
  }

  const normalizedPath = normalizePath(path)
  const lastSlashIndex = normalizedPath.lastIndexOf("/")

  if (lastSlashIndex === -1) {
    return "."
  }
  if (lastSlashIndex === 0) {
    return "/"
  }

  return normalizedPath.slice(0, lastSlashIndex)
}

function basename(path: string): string {
  const normalizedPath = normalizePath(path)
  const lastSlashIndex = normalizedPath.lastIndexOf("/")

  return lastSlashIndex === -1 ? normalizedPath : normalizedPath.slice(lastSlashIndex + 1)
}

function joinPath(dir: string, fname: string): string {
  const normalizedDir = normalizePath(dir)
  const normalizedFileName = fname.replaceAll("\\", "/").split("/").filter(Boolean).join("/")

  if (normalizedDir === "/") {
    return `/${normalizedFileName}`
  }
  if (normalizedDir === ".") {
    return normalizedFileName
  }

  return `${normalizedDir}/${normalizedFileName}`
}

function parentDirs(path: string): string[] {
  const parents: string[] = []
  let current = dirname(path)

  while (!parents.includes(current)) {
    parents.push(current)
    if (current === "." || current === "/") {
      return parents
    }
    current = dirname(current)
  }

  return parents
}

/** An in-memory `FileIOPort` fake for tests and example wiring.  */
export class FakeFileIOPort implements FileIOPort {
  #files = new Map<string, string>()
  #dirs = new Set<string>([".", "/"])

  /**
   * Seed the fake filesystem with initial file contents and directories.
   * @param initialFiles Map of file paths to file contents.
   * @param initialDirs Directory paths to pre-create.
   */
  constructor(initialFiles: Record<string, string> = {}, initialDirs: string[] = []) {
    for (const dir of initialDirs) {
      this.mkdir(dir)
    }

    for (const [path, content] of Object.entries(initialFiles)) {
      const normalizedPath = normalizePath(path)
      this.#dirs.add(dirname(normalizedPath))
      for (const parent of parentDirs(normalizedPath)) {
        this.#dirs.add(parent)
      }
      this.#files.set(normalizedPath, content)
    }
  }

  read(path: string): tsUtil.Result<string> {
    const normalizedPath = normalizePath(path)
    const content = this.#files.get(normalizedPath)
    if (content === undefined) {
      return tsUtil.result(false, new tsUtil.Err(`file not found: ${normalizedPath}`).add(entity.ErrNotFound))
    }

    return tsUtil.result(true, content)
  }

  write(dir: string, fname: string, content: string): void {
    const normalizedDir = normalizePath(dir)
    const path = joinPath(normalizedDir, fname)

    for (const parent of parentDirs(path)) {
      this.#dirs.add(parent)
    }
    this.#files.set(path, content)
  }

  listFiles(dir: string): string[] {
    const normalizedDir = normalizePath(dir)
    const fileNames = Array.from(this.#files.keys())
      .filter((path) => dirname(path) === normalizedDir)
      .map((path) => basename(path))
      .sort((left, right) => left.localeCompare(right))

    return fileNames
  }

  mkdir(path: string): void {
    const normalizedPath = normalizePath(path)
    for (const parent of parentDirs(normalizedPath)) {
      this.#dirs.add(parent)
    }
    this.#dirs.add(normalizedPath)
  }

  remove(path: string): void {
    const normalizedPath = normalizePath(path)

    this.#files.delete(normalizedPath)
    this.#dirs.delete(normalizedPath)

    for (const filePath of this.#files.keys()) {
      if (isDescendant(filePath, normalizedPath)) {
        this.#files.delete(filePath)
      }
    }

    for (const dirPath of this.#dirs.keys()) {
      if (isDescendant(dirPath, normalizedPath)) {
        this.#dirs.delete(dirPath)
      }
    }
  }
}
