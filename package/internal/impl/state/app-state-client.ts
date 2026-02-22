import { client, entity } from "../deps.ts"
import { StateImpl } from "./state.ts"

/**
 * Implementation of AppStateClient
 * Manages application state
 */
export class AppStateClientImpl extends StateImpl<entity.App> implements client.AppStateClient {
  constructor(initialValue: entity.App) {
    super(initialValue)
  }
}
