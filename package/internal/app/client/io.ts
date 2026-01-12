import { core } from "./deps.ts"

export interface FileIOClient {
  /**
   * Read content of the given path's file. The file is expected to be utf8-encoded.
   *
   * @param path file path
   * @returns content of the file
   */
  read(path: string): string

  /**
   * Create a file in the given name and directory. When the file already exists,
   * the file will be updated in-place.
   *
   * @param dir Directory to put typescript files
   * @param fname name for output file
   * @param content TypeScript code generated from OpenAPI spec
   */
  write(dir: string, fname: string, content: string): void

  /**
   * List all files in a directory matching the given pattern.
   *
   * @param dir Directory path
   * @param pattern Optional glob pattern (e.g., "*.ts")
   * @returns Array of file names (not full paths)
   */
  listFiles(dir: string, pattern?: string): string[]
}

/** Application's overall parameter */
export interface AppParameter {
  /** Feed OpenAPI from a given file */
  openApiFrom: "file" | "server"

  // common

  /** specify directory path where output typescript files should be generated */
  outputDirectory: string

  // file-only

  /** Specify Kubernetes' apiVersion for the OpenAPI file. This name will be the name for auto-generated TypeScript file */
  apiVersion: string

  openApiFilePath: string

  // server-only

  /** Base url of Kubernetes server. i.e.) `http://localhost:8001` */
  serverBaseUrl: string
}

export interface ParameterClient {
  /**
   * Load app configuration from typek8s.yaml based on the given command
   * @param command - The CLI command ("synth" or "generate")
   */
  readConfig(command: string): core.App
}
