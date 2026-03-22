/** General format for Kubernetes manifests. */
export interface Manifest {
  apiVersion: string
  kind: string
  metadata: object
}
