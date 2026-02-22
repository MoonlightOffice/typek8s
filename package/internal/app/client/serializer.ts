import { entity } from "./deps.ts"

export interface ManifestSerializerClient {
  /**
   * Serialize manifests to multi-document YAML format.
   * Handles document separators (---) and formatting.
   */
  serializeManifests(manifests: entity.Manifest[]): string
}
