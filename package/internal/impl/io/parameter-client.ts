import { type AppParameter, ParameterClient } from "internal/core/client/io.ts"
import { parseArgs } from "@std/cli/parse-args"

export class ParameterClientImpl implements ParameterClient {
  constructor() {}

  readAppParameter(): AppParameter {
    const flags = parseArgs(Deno.args, {
      string: [
        "openapi-from",
        "output-directory",
        "api-version",
        "server-base-url",
        "openapi-file-path",
      ],
      default: {
        "output-directory": "./api/",
      },
    })

    switch (flags["openapi-from"]) {
      case "file":
        if (flags["api-version"] === undefined || flags["api-version"] === "") {
          throw Error("expected api version for --api-version")
        }
        if (flags["openapi-file-path"] === undefined || flags["openapi-file-path"] === "") {
          throw Error("expected path to OpenAPI file for --openapi-file-path")
        }
        break
      case "server":
        if (flags["server-base-url"] === undefined || flags["server-base-url"] === "") {
          throw Error("expected Kubernetes base url for --server-base-url")
        }
        break
      default:
        throw Error(`expected "server" or "file" for --openapi-from`)
    }

    return {
      openApiFrom: flags["openapi-from"] as AppParameter["openApiFrom"],
      outputDirectory: flags["output-directory"],
      apiVersion: flags["api-version"] ?? "",
      openApiFilePath: flags["openapi-file-path"] ?? "",
      serverBaseUrl: flags["server-base-url"] ?? "",
    }
  }
}
