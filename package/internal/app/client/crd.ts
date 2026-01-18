import { core } from "./deps.ts"

export interface CrdLoaderClient {
  /**
   * Load CRD content from its source (file or http).
   */
  loadCrd(crd: core.CRD): Promise<string>
}
