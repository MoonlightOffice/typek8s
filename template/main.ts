import { SynthService } from "typek8s"
import { deployments } from "~/lib/deploy.ts"

SynthService.synth({
  name: "sample",
  manifests: [
    ...deployments,
  ],
})
