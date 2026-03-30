import { "@std/path" as stdPath, "ts-util" as tsUtil, port } from "./deps.ts"

type ParsedOCIChartRef = {
  host: string
  chartRef: string
  version?: string
}

export class AdapterHelmPort implements port.k8s.HelmPort {
  #textDecoder = new TextDecoder()

  #buf2Str(buf: Uint8Array<ArrayBuffer>): string {
    return this.#textDecoder.decode(buf)
  }

  #parseOCIChartRef(path: string): tsUtil.Result<ParsedOCIChartRef> {
    const prefix = "oci://"
    if (!path.startsWith(prefix)) {
      return tsUtil.result(false, new tsUtil.Err(`invalid OCI chart reference: ${path}`))
    }

    const withoutPrefix = path.slice(prefix.length)
    const firstSlashIndex = withoutPrefix.indexOf("/")
    if (firstSlashIndex <= 0 || firstSlashIndex === withoutPrefix.length - 1) {
      return tsUtil.result(false, new tsUtil.Err(`invalid OCI chart reference: ${path}`))
    }

    const host = withoutPrefix.slice(0, firstSlashIndex)
    const repoAndChart = withoutPrefix.slice(firstSlashIndex + 1)
    const lastSlashIndex = repoAndChart.lastIndexOf("/")
    const lastColonIndex = repoAndChart.lastIndexOf(":")
    const hasVersion = lastColonIndex > lastSlashIndex
    const chartPath = hasVersion ? repoAndChart.slice(0, lastColonIndex) : repoAndChart
    const version = hasVersion ? repoAndChart.slice(lastColonIndex + 1) : undefined
    if (chartPath.length === 0 || version === "") {
      return tsUtil.result(false, new tsUtil.Err(`invalid OCI chart reference: ${path}`))
    }

    return tsUtil.result(true, {
      host: host,
      chartRef: `${prefix}${host}/${chartPath}`,
      version: version,
    })
  }

  async #runHelm(args: string[]): Promise<tsUtil.Result<void>> {
    const result = await new Deno.Command("helm", {
      args: args,
    }).output()
    if (result.code === 0) {
      return tsUtil.result(true, undefined)
    }

    const stderr = this.#buf2Str(result.stderr).trim()
    const stdout = this.#buf2Str(result.stdout).trim()
    const errText = stderr.length > 0 ? stderr : stdout.length > 0 ? stdout : "helm command failed"

    return tsUtil.result(false, new tsUtil.Err(errText))
  }

  async #readPulledChart(pullDirPath: string): Promise<tsUtil.Result<File>> {
    const archiveNames: string[] = []
    for await (const entry of Deno.readDir(pullDirPath)) {
      if (entry.isFile && entry.name.endsWith(".tgz")) {
        archiveNames.push(entry.name)
      }
    }

    if (archiveNames.length !== 1) {
      return tsUtil.result(false, new tsUtil.Err("helm pull did not produce exactly one chart archive"))
    }

    const archiveName = archiveNames[0]
    const archivePath = stdPath.join(pullDirPath, archiveName)
    const archiveBytes = await Deno.readFile(archivePath)

    return tsUtil.result(true, new File([archiveBytes], archiveName, { type: "application/gzip" }))
  }

  /**
   * Pull a Helm chart archive from an OCI registry, optionally using credentials.
   *
   * @param params Read the description for port.k8s.HelmPortCredential.
   * @param _insecure Test use only.
   */
  async pullChart(params: {
    path: string
    credential?: port.k8s.HelmPortCredential
  }, _insecure: boolean = false): Promise<tsUtil.Result<File>> {
    const parsedRefRes = this.#parseOCIChartRef(params.path)
    if (parsedRefRes.err != null) {
      return tsUtil.result(false, parsedRefRes.err)
    }

    const tempRootPath = await Deno.makeTempDir({ prefix: "typek8s-helm-" })
    try {
      const pullDirPath = stdPath.join(tempRootPath, "pull")

      await Deno.mkdir(pullDirPath, { recursive: true })

      const parsedRef = parsedRefRes.val
      const pullArgs = [
        "pull",
        "--destination",
        pullDirPath,
        parsedRef.chartRef,
      ]
      if (params.credential != null) {
        pullArgs.push(
          "--username",
          params.credential.userName,
          "--password",
          params.credential.password,
        )
      }
      if (parsedRef.version != null) {
        pullArgs.push("--version", parsedRef.version)
      }
      if (_insecure) {
        pullArgs.push("--plain-http")
      }

      const pullRes = await this.#runHelm(pullArgs)
      if (pullRes.err != null) {
        return tsUtil.result(false, pullRes.err)
      }

      return await this.#readPulledChart(pullDirPath)
    } finally {
      await Deno.remove(tempRootPath, { recursive: true }).catch(() => undefined)
    }
  }
}
