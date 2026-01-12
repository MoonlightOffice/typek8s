import type { App } from "internal/app/entity/app.ts"
import type { AppStateClient } from "internal/app/client/state.ts"
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
