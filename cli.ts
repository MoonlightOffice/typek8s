import { di } from "./pkg/deps.ts"

const cli = di.createTypek8sCli()
cli.run(Deno.args)
