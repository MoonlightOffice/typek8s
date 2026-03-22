import { "ts-util" as tsUtil } from "./deps.ts"

/** Credentials used by `helm login` when pulling charts from a private registry. */
export interface HelmPortCredential {
  userName: string
  password: string
}

/** Port for Helm operations. */
export interface HelmPort {
  /**
   * Pull an OCI Helm chart image.
   *
   * @param params.path Path to the OCI Helm chart image.
   * @param params.credential Helm credentials for accessing a private registry.
   * @returns Chart archive content as File. entity.ErrUnauthorized is returned if the credential
   * is unauthorized. entity.ErrNotFound is returned if the path is invalid.
   */
  pullChart(params: { path: string; credentai?: HelmPortCredential }): tsUtil.Result<Promise<File>>
}
