import { client } from "../deps.ts"

/**
 * Generic implementation of the State<T> interface
 * Manages state with get, set, and update operations
 */
export class StateImpl<T> implements client.State<T> {
  private value: T

  constructor(initialValue: T) {
    this.value = initialValue
  }

  get(): T {
    return this.value
  }

  set(value: T): void {
    this.value = value
  }

  update(updater: (prev: T) => T): void {
    this.value = updater(this.value)
  }
}
