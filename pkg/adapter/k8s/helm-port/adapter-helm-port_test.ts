import { "@std/assert" as stdAssert, "@std/tar" as stdTar, "@std/yaml" as stdYaml, double, port, util } from "./deps.ts"
import { AdapterHelmPort } from "./adapter-helm-port.ts"

async function tar2Map(f: File): Promise<Map<string, Uint8Array<ArrayBuffer>>> {
  const resultMap = new Map<string, Uint8Array<ArrayBuffer>>()

  for await (
    const entry of (f.stream()
      .pipeThrough(new DecompressionStream("gzip"))
      .pipeThrough(new stdTar.UntarStream()))
  ) {
    const content = new Uint8Array(await new Response(entry.readable).arrayBuffer())
    if (content.length === 0) {
      continue
    }

    resultMap.set(
      entry.path,
      content,
    )
  }

  return resultMap
}

Deno.test("AdapterHelmPort.synth", { ignore: Deno.env.get("TESTMODE") !== "LONG" }, async (t) => {
  type In = {
    params: port.k8s.SynthParams
    initialFiles?: Record<string, Uint8Array<ArrayBuffer>>
  }

  type Want = {
    hasErr: boolean
    filename: string
    entryPaths?: string[]

    manifest?: {
      path: string
      /** The number of Kubernetes resources described in yaml */
      manifestSections: number
    }

    crds?: Array<{
      path: string
      content: string
    }>

    charts?: Array<{
      path: string
      content: Uint8Array<ArrayBuffer>
    }>

    values: {
      path: string
      content: unknown
    }
  }

  const publicChartFixturePath = "./testutil/charts/public-chart-0.1.0.tgz"
  const privateChartFixturePath = "./testutil/charts/private-chart-0.1.0.tgz"
  const crdFixturePaths = [
    "./testutil/crds/example-crd-1.yaml",
    "./testutil/crds/example-crd-2.yaml",
  ]

  const publicChartFixtureBytes = await Deno.readFile(publicChartFixturePath)
  const privateChartFixtureBytes = await Deno.readFile(privateChartFixturePath)
  const crdFixtureTexts = await Promise.all(crdFixturePaths.map((path) => Deno.readTextFile(path)))
  const publicChartEntries = await tar2Map(new File([publicChartFixtureBytes], "public-chart-0.1.0.tgz"))
  const privateChartEntries = await tar2Map(new File([privateChartFixtureBytes], "private-chart-0.1.0.tgz"))
  const publicChartValues = stdYaml.parse(util.bytesToString(publicChartEntries.get("public-chart/values.yaml")!))
  const privateChartValues = stdYaml.parse(util.bytesToString(privateChartEntries.get("private-chart/values.yaml")!))

  const manifests: port.k8s.SynthParams["manifests"] = [
    {
      apiVersion: "v1",
      kind: "ConfigMap",
      metadata: { name: "platform-config", namespace: "default" },
      data: {
        LOG_LEVEL: "debug",
      },
    },
    {
      apiVersion: "apps/v1",
      kind: "Deployment",
      metadata: { name: "platform-api", namespace: "default" },
      spec: {
        replicas: 2,
      },
    },
  ]

  const tests: Array<{
    name: string
    in: In
    want: Want
  }> = [{
    name: "manifests only; only chart metadata, values, and a single manifests file are generated",
    in: {
      params: {
        name: "platform",
        manifests,
      },
    },
    want: {
      hasErr: false,
      filename: "platform.tgz",
      entryPaths: [
        "platform/Chart.yaml",
        "platform/templates/manifests.yaml",
        "platform/values.yaml",
      ],
      manifest: {
        path: "platform/templates/manifests.yaml",
        manifestSections: manifests.length,
      },
      values: {
        path: "platform/values.yaml",
        content: {},
      },
    },
  }, {
    name: "manifests and crds; numbered crd files are generated and charts are omitted",
    in: {
      params: {
        name: "platform",
        manifests,
        crdPaths: [...crdFixturePaths],
      },
      initialFiles: {
        [crdFixturePaths[0]]: util.stringToBytes(crdFixtureTexts[0]),
        [crdFixturePaths[1]]: util.stringToBytes(crdFixtureTexts[1]),
      },
    },
    want: {
      hasErr: false,
      filename: "platform.tgz",
      entryPaths: [
        "platform/Chart.yaml",
        "platform/crds/1.yaml",
        "platform/crds/2.yaml",
        "platform/templates/manifests.yaml",
        "platform/values.yaml",
      ],
      manifest: {
        path: "platform/templates/manifests.yaml",
        manifestSections: manifests.length,
      },
      crds: [
        {
          path: "platform/crds/1.yaml",
          content: crdFixtureTexts[0],
        },
        {
          path: "platform/crds/2.yaml",
          content: crdFixtureTexts[1],
        },
      ],
      values: {
        path: "platform/values.yaml",
        content: {},
      },
    },
  }, {
    name: "manifests and dependency charts; versioned chart files and named values entries are generated",
    in: {
      params: {
        name: "platform",
        manifests,
        depCharts: [
          {
            name: "public-chart",
            version: "0.1.0",
            chartPath: publicChartFixturePath,
            values: publicChartValues as Record<string, unknown>,
          },
          {
            name: "private-chart",
            version: "0.1.0",
            chartPath: privateChartFixturePath,
            values: privateChartValues as Record<string, unknown>,
          },
        ],
      },
      initialFiles: {
        [publicChartFixturePath]: publicChartFixtureBytes,
        [privateChartFixturePath]: privateChartFixtureBytes,
      },
    },
    want: {
      hasErr: false,
      filename: "platform.tgz",
      entryPaths: [
        "platform/Chart.yaml",
        "platform/charts/private-chart-0.1.0.tgz",
        "platform/charts/public-chart-0.1.0.tgz",
        "platform/templates/manifests.yaml",
        "platform/values.yaml",
      ],
      manifest: {
        path: "platform/templates/manifests.yaml",
        manifestSections: manifests.length,
      },
      charts: [
        {
          path: "platform/charts/public-chart-0.1.0.tgz",
          content: publicChartFixtureBytes,
        },
        {
          path: "platform/charts/private-chart-0.1.0.tgz",
          content: privateChartFixtureBytes,
        },
      ],
      values: {
        path: "platform/values.yaml",
        content: {
          "public-chart": publicChartValues,
          "private-chart": privateChartValues,
        },
      },
    },
  }, {
    name: "manifests, crds, and dependency charts; the archive contains the full expected file set and contents",
    in: {
      params: {
        name: "platform",
        manifests,
        crdPaths: [...crdFixturePaths],
        depCharts: [
          {
            name: "public-chart",
            version: "0.1.0",
            chartPath: publicChartFixturePath,
            values: publicChartValues as Record<string, unknown>,
          },
          {
            name: "private-chart",
            version: "0.1.0",
            chartPath: privateChartFixturePath,
            values: privateChartValues as Record<string, unknown>,
          },
        ],
      },
      initialFiles: {
        [crdFixturePaths[0]]: util.stringToBytes(crdFixtureTexts[0]),
        [crdFixturePaths[1]]: util.stringToBytes(crdFixtureTexts[1]),
        [publicChartFixturePath]: publicChartFixtureBytes,
        [privateChartFixturePath]: privateChartFixtureBytes,
      },
    },
    want: {
      hasErr: false,
      filename: "platform.tgz",
      entryPaths: [
        "platform/Chart.yaml",
        "platform/charts/private-chart-0.1.0.tgz",
        "platform/charts/public-chart-0.1.0.tgz",
        "platform/crds/1.yaml",
        "platform/crds/2.yaml",
        "platform/templates/manifests.yaml",
        "platform/values.yaml",
      ],
      manifest: {
        path: "platform/templates/manifests.yaml",
        manifestSections: manifests.length,
      },
      crds: [
        {
          path: "platform/crds/1.yaml",
          content: crdFixtureTexts[0],
        },
        {
          path: "platform/crds/2.yaml",
          content: crdFixtureTexts[1],
        },
      ],
      charts: [
        {
          path: "platform/charts/public-chart-0.1.0.tgz",
          content: publicChartFixtureBytes,
        },
        {
          path: "platform/charts/private-chart-0.1.0.tgz",
          content: privateChartFixtureBytes,
        },
      ],
      values: {
        path: "platform/values.yaml",
        content: {
          "public-chart": publicChartValues,
          "private-chart": privateChartValues,
        },
      },
    },
  }]

  for (const tt of tests) {
    await t.step(tt.name, async () => {
      const fileIO = new double.fileIo.FakeFileIOPort(tt.in.initialFiles)
      const adapter: port.k8s.HelmPort = new AdapterHelmPort(fileIO)
      const res = await adapter.synth(tt.in.params)

      stdAssert.assertEquals(res.err != null, tt.want.hasErr)
      if (tt.want.hasErr) {
        return
      }

      stdAssert.assertEquals(res.val.name, tt.want.filename)

      const contentMap = await tar2Map(res.val)
      stdAssert.assertEquals(Array.from(contentMap.keys()).sort(), tt.want.entryPaths)

      if (tt.want.manifest != null) {
        const manifestBytes = contentMap.get(tt.want.manifest.path)
        stdAssert.assertExists(manifestBytes)
        stdAssert.assertEquals(
          (stdYaml.parseAll(util.bytesToString(manifestBytes)) as Array<unknown>).length,
          tt.want.manifest.manifestSections,
        )
      }

      for (const crd of tt.want.crds ?? []) {
        const crdBytes = contentMap.get(crd.path)
        stdAssert.assertExists(crdBytes)
        stdAssert.assertEquals(util.bytesToString(crdBytes), crd.content)
      }

      for (const chart of tt.want.charts ?? []) {
        stdAssert.assertEquals(contentMap.get(chart.path), chart.content)
      }

      const valuesBytes = contentMap.get(tt.want.values.path)
      stdAssert.assertExists(valuesBytes)
      stdAssert.assertEquals(stdYaml.parse(util.bytesToString(valuesBytes)), tt.want.values.content)
    })
  }
})
