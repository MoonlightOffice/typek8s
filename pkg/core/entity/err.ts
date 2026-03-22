import { "ts-util" as tsUtil } from "./deps.ts"

/** Indicates that a record, file, or similar resource does not exist. */
export const ErrNotFound = new tsUtil.Err("not found")

/** Indicates that the process is invalid due to invalid client parameters. */
export const ErrInvalid = new tsUtil.Err("invalid")

/** Indicates that the process fails because it is unauthorized. */
export const ErrUnauthorized = new tsUtil.Err("invalid")
