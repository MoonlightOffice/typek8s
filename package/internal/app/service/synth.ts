import { "@std/path" as stdPath, client, core } from "./deps.ts"

/**
 * Options for synth operation
 */
export type SynthOptions =
  | { type: "manifest"; outputDir: string }
  | { type: "chart"; outputDir: string; chartName: string }

/**
 * Input for Helm chart generation
 */
export interface HelmChartInput {
  manifests: core.Manifest[]
  crds?: core.CRD[]
  charts?: core.Chart[]
}

export class SynthService {
  constructor(
    private readonly fileIOClient: client.FileIOClient,
    private readonly manifestSerializer: client.ManifestSerializerClient,
    private readonly helmBuilder: client.HelmBuilderClient,
    private readonly crdLoader: client.CrdLoaderClient,
  ) {}

  /**
   * Generate Kubernetes manifests or Helm chart
   */
  async synth(
    input: core.Manifest[] | HelmChartInput,
    options: SynthOptions,
  ): Promise<void> {
    if (options.type === "manifest") {
      const manifests = Array.isArray(input) ? input : input.manifests
      this.synthManifest(manifests, options.outputDir)
    } else {
      if (Array.isArray(input)) {
        throw new Error(
          "For chart type, input must be HelmChartInput with manifests, crds, and charts",
        )
      }
      await this.synthChart(input, options.outputDir, options.chartName)
    }
  }

  /**
   * Generate K8s manifest file with --- separators
   */
  private synthManifest(manifests: core.Manifest[], outputDir: string): void {
    if (manifests.length === 0) {
      throw new Error("Cannot generate manifest from empty manifests array")
    }

    // Ensure output directory exists
    this.fileIOClient.mkdir(outputDir)

    // Serialize manifests to YAML and write to file
    const yaml = this.manifestSerializer.serializeManifests(manifests)
    this.fileIOClient.write(outputDir, "manifest.yaml", yaml)
  }

  /**
   * Generate Helm chart directory structure
   */
  private async synthChart(
    input: HelmChartInput,
    outputDir: string,
    chartName: string,
  ): Promise<void> {
    if (input.manifests.length === 0) {
      throw new Error("Cannot generate chart from empty manifests array")
    }

    // Validate chart name (basic alphanumeric + hyphens)
    if (!/^[a-z0-9-]+$/.test(chartName)) {
      throw new Error(
        `Invalid chart name: "${chartName}". Must contain only lowercase letters, numbers, and hyphens`,
      )
    }

    // Create chart directory structure
    const chartDir = stdPath.join(outputDir, chartName)
    this.fileIOClient.mkdir(chartDir)

    // Generate and write Chart.yaml
    const dependencies = input.charts?.map((chart) => ({
      name: chart.name,
      version: chart.version,
      repository: chart.repository,
    }))
    const chartYamlContent = this.helmBuilder.buildChartYaml(chartName, dependencies)
    this.fileIOClient.writeYaml(chartDir, "Chart.yaml", chartYamlContent)

    // Generate and write values.yaml
    const valuesYamlContent = this.helmBuilder.mergeChartValues(input.charts || [])
    this.fileIOClient.writeYaml(chartDir, "values.yaml", valuesYamlContent)

    // Create templates directory and write manifests
    const templatesDir = stdPath.join(chartDir, "templates")
    this.fileIOClient.mkdir(templatesDir)
    this.synthManifest(input.manifests, templatesDir)

    // Handle CRDs if provided
    if (input.crds && input.crds.length > 0) {
      const crdsDir = stdPath.join(chartDir, "crds")
      this.fileIOClient.mkdir(crdsDir)

      for (const crd of input.crds) {
        const content = await this.crdLoader.loadCrd(crd)
        const filename = stdPath.basename(crd.path)
        this.fileIOClient.write(crdsDir, filename, content)
      }
    }

    // Create charts directory if chart dependencies exist
    if (input.charts && input.charts.length > 0) {
      const chartsDir = stdPath.join(chartDir, "charts")
      this.fileIOClient.mkdir(chartsDir)
    }
  }
}
