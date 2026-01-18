import { core } from "./deps.ts"

export interface ManifestSerializerClient {
  /**
   * Serialize manifests to multi-document YAML format.
   * Handles document separators (---) and formatting.
   */
  serializeManifests(manifests: core.Manifest[]): string
}
