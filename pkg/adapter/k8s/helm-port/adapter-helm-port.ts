import { "ts-util" as tsUtil, port } from "./deps.ts"

export class AdapterHelmPort implements port.k8s.HelmPort {
  /**
   * Pull a Helm chart archive from an OCI registry, optionally using credentials.
   *
   * @param params Read the description for port.k8s.HelmPortCredential.
   * @param _insecure Test use only.
   */
  pullChart(params: {
    path: string
    credential?: port.k8s.HelmPortCredential
  }, _insecure: boolean = false): Promise<tsUtil.Result<File>> {
    void params

    // TODO: Implement Helm OCI chart pulling with optional registry authentication.
    throw new Error("TODO: AdapterHelmPort.pullChart is not implemented")
  }
}
