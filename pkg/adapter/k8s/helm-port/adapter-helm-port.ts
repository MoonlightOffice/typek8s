import { "ts-util" as tsUtil, port } from "./deps.ts"

export class AdapterHelmPort implements port.k8s.HelmPort {
  /**
   * Pull a Helm chart archive from an OCI registry, optionally using credentials.
   */
  pullChart(params: {
    path: string
    credential?: port.k8s.HelmPortCredential
  }): tsUtil.Result<Promise<File>> {
    void params

    // TODO: Implement Helm OCI chart pulling with optional registry authentication.
    throw new Error("TODO: AdapterHelmPort.pullChart is not implemented")
  }
}
