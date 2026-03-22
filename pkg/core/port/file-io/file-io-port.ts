import { "ts-util" as tsUtil } from "./deps.ts"

export interface FileIOPort {
  /**
   * Read content of the given path's file. The file is expected to be utf8-encoded.
   *
   * @param path File path
   * @returns Content of the file. entity.ErrNotFound is returned if the file does not exist.
   */
  read(path: string): tsUtil.Result<string>

  /**
   * Create a file in the given name and directory. When the file already exists,
   * the file will be updated in-place.
   *
   * @param dir Directory to put typescript files
   * @param fname Name for output file
   * @param content File content
   */
  write(dir: string, fname: string, content: string): void

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
