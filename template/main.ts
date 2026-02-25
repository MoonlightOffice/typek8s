import { TypeK8s } from "typek8s"
import { deployments } from "~/lib/deploy.ts"

TypeK8s.synth({
  manifests: [
    ...deployments,
  ],
}, {
  type: "chart",
  chartName: "sample-app",
  outputDir: "./dist/",
})
