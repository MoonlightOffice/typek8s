import type { AppStateClient } from "internal/core/client/state.ts"
import type { ParameterClient } from "internal/core/client/io.ts"
import type { App } from "internal/core/entity/app.ts"

export class InitService {
  constructor(
    private readonly appStateClient: AppStateClient,
    private readonly parameterClient: ParameterClient,
  ) {}

  /**
   * Initialize application state from CLI parameters
   */
  init(): void {
    const params = this.parameterClient.readAppParameter()

    const appState: App = {
      synth: {
        out: params.outputDirectory,
      },
      generate: {
        out: params.outputDirectory,
        source: params.openApiFrom,
        serverBaseUrl: params.serverBaseUrl,
        apiVersion: params.apiVersion,
        openApiFilePath: params.openApiFilePath,
      },
    }

    this.appStateClient.set(appState)
  }
}
