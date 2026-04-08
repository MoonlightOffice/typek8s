import { "ts-util" as tsUtil } from "./deps.ts"

export interface FileIOPort {
  /**
   * Read raw bytes from the given path's file.
   *
   * @param path File path
   * @returns File content bytes. entity.ErrNotFound is returned if the file does not exist.
   */
  read(path: string): tsUtil.Result<Uint8Array<ArrayBuffer>>

  /**
   * Create a file in the given name and directory. When the file already exists,
   * the file will be updated in-place.
   *
   * @param dir Directory to put typescript files
   * @param fname Name for output file
   * @param content File content
   */
  write(dir: string, fname: string, content: Uint8Array<ArrayBuffer>): void

  /**
   * List all files in a directory.
   *
   * @param dir Directory path
   * @returns Array of file names (not full paths)
   */
  listFiles(dir: string): string[]

  /**
   * Create a directory if it doesn't exist.
   *
   * @param path Directory path to create
   */
  mkdir(path: string): void

  /**
   * Remove a file or directory recursively.
   *
   * @param path File or directory path to remove
   */
  remove(path: string): void
}
