import type { FileIOClient, ParameterClient } from "internal/app/client/io.ts"
import type { App } from "internal/app/core/app.ts"
import { parse } from "@std/yaml"

interface YamlConfig {
  typek8s: {
    synth: {
      out: string
    }
    generate: {
      out: string
      source: "server" | "file"
      serverBaseUrl?: string
      apiVersion?: string
      openApiFilePath?: string
    }
  }
}

export class ParameterClientImpl implements ParameterClient {
  constructor(private fileIOClient: FileIOClient) {}

  readConfig(command: string): App {
    // Validate command
    if (command !== "synth" && command !== "generate") {
      throw new Error(`Invalid command: "${command}". Expected "synth" or "generate"`)
    }

    // Read YAML file as text
    const content = this.fileIOClient.read("./typek8s.yaml")

    // Parse YAML
    const yamlConfig = parse(content) as YamlConfig

    // Validate YAML structure
    if (!yamlConfig?.typek8s) {
      throw new Error("Invalid typek8s.yaml: missing 'typek8s' root key")
    }

    // Handle synth command
    if (command === "synth") {
      throw new Error("synth command is not implemented yet")
    }

    // Handle generate command
    const generate = yamlConfig.typek8s.generate

    if (!generate) {
      throw new Error("Invalid typek8s.yaml: missing 'typek8s.generate' configuration")
    }

    if (!generate.source) {
      throw new Error("Invalid typek8s.yaml: missing 'typek8s.generate.source'")
    }

    if (generate.source !== "server" && generate.source !== "file") {
      throw new Error(`Invalid source: "${generate.source}". Expected "server" or "file"`)
    }

    // Validate server mode
    if (generate.source === "server") {
      if (!generate.serverBaseUrl) {
        throw new Error("serverBaseUrl is required when source is 'server'")
      }
    }

    // Validate file mode
    if (generate.source === "file") {
      if (!generate.apiVersion) {
        throw new Error("apiVersion is required when source is 'file'")
      }
      if (!generate.openApiFilePath) {
        throw new Error("openApiFilePath is required when source is 'file'")
      }
    }

    // Construct App entity with proper defaults
    const app: App = {
      synth: yamlConfig.typek8s.synth,
      generate: {
        out: generate.out,
        source: generate.source,
        serverBaseUrl: generate.serverBaseUrl ?? "",
        apiVersion: generate.apiVersion ?? "",
        openApiFilePath: generate.openApiFilePath ?? "",
      },
    }

    return app
  }
}
