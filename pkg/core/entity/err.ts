import { "ts-util" as tsUtil } from "./deps.ts"

/** Indicates that a record, file, or similar resource does not exist. */
export const ErrNotFound = new tsUtil.Err("not found")
