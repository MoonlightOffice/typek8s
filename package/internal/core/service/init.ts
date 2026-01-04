import type { AppStateClient } from "internal/core/client/state.ts"
import type { ParameterClient } from "internal/core/client/io.ts"

export class InitService {
  constructor(
    private readonly appStateClient: AppStateClient,
    private readonly parameterClient: ParameterClient,
  ) {}

  /**
   * Initialize application state from configuration
   */
  init(command: string): void {
    const appState = this.parameterClient.readConfig(command)
    this.appStateClient.set(appState)
  }
}
