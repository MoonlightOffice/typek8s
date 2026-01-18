import { "@std/yaml" as stdYaml, client, core } from "../deps.ts"

export class ManifestSerializerClientImpl implements client.ManifestSerializerClient {
  constructor() {}

  serializeManifests(manifests: core.Manifest[]): string {
    // Convert each manifest to YAML and join with separator
    const yamlParts = manifests.map((manifest) => stdYaml.stringify(manifest).trim())
    const combinedYaml = yamlParts.join("\n---\n")
    return combinedYaml + "\n"
  }
}
