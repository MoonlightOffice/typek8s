import type { App } from "internal/core/entity/app.ts"

export interface State<T> {
  get(): T
  set(value: T): void
  update(updater: (prev: T) => T): void
}

export interface AppStateClient extends State<App> {}
