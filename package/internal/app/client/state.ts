import { entity } from "./deps.ts"

/**
 * Manage global state
 */
export interface State<T> {
  get(): T
  set(value: T): void
  update(updater: (prev: T) => T): void
}

export interface AppStateClient extends State<entity.App> {}
