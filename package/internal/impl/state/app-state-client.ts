import type { App } from "internal/core/entity/app.ts"
import type { AppStateClient } from "internal/core/client/state.ts"
import { StateImpl } from "internal/impl/state/state.ts"

/**
 * Implementation of AppStateClient
 * Manages application state
 */
export class AppStateClientImpl extends StateImpl<App> implements AppStateClient {
  constructor(initialValue: App) {
    super(initialValue)
  }
}
