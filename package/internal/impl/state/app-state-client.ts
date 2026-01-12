import { client, core } from "../deps.ts"
import { StateImpl } from "./state.ts"

/**
 * Implementation of AppStateClient
 * Manages application state
 */
export class AppStateClientImpl extends StateImpl<core.App> implements client.AppStateClient {
  constructor(initialValue: core.App) {
    super(initialValue)
  }
}
