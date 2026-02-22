import { client } from "./deps.ts"

export class InitService {
  constructor(
    private readonly appStateClient: client.AppStateClient,
    private readonly parameterClient: client.ParameterClient,
  ) {}

  /**
   * Initialize application state from configuration
   */
  init(command: string): void {
    const appState = this.parameterClient.readConfig(command)
    this.appStateClient.set(appState)
  }
}
