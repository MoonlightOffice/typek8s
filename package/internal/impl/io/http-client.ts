import { client } from "../deps.ts"

export class HttpClientImpl implements client.HttpClient {
  constructor() {}

  async fetch(url: string): Promise<string> {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(
        `Failed to fetch from ${url}: HTTP ${response.status} ${response.statusText}`,
      )
    }
    return await response.text()
  }
}
