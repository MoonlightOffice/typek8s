/**
 * Converts Kubernetes api version to TypeScript file name.
 * @param apiVersion Kubernetes api version. i.e.) apps/v1, storage.k8s.io/v1
 * @returns ts file name based on api version. i.e.) apps.v1.ts, storage.k8s.io.v1.ts
 */
export function apiVersionToFileName(apiVersion: string): string {
  return apiVersion.split("/").join(".") + ".ts"
}
