import { client, entity } from "../deps.ts"

export class CrdLoaderClientImpl implements client.CrdLoaderClient {
  constructor(
    private readonly fileIOClient: client.FileIOClient,
    private readonly httpClient: client.HttpClient,
  ) {}

  async loadCrd(crd: entity.CRD): Promise<string> {
    if (crd.source === "file") {
      return this.fileIOClient.read(crd.path)
    } else if (crd.source === "http") {
      return await this.httpClient.fetch(crd.path)
    } else {
      throw new Error(`Unknown CRD source: ${crd.source}`)
    }
  }
}
