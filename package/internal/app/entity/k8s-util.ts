/**
 * Converts Kubernetes api version to TypeScript file name.
 * @param apiVersion Kubernetes api version. i.e.) apps/v1, storage.k8s.io/v1
 * @returns ts file name based on api version. i.e.) apps.v1.ts, storage.k8s.io.v1.ts
 */
export function apiVersionToFileName(apiVersion: string): string {
  return apiVersion.split("/").join(".") + ".ts"
}

/**
 * Converts TypeScript filename to camelCase export alias.
 * @param filename TypeScript file name. i.e.) v1.ts, admissionregistration.k8s.io.v1.ts
 * @returns camelCase alias. i.e.) v1, admissionregistrationK8sIoV1
 */
export function fileNameToExportAlias(filename: string): string {
  // Remove .ts extension
  const withoutExt = filename.replace(/\.ts$/, "")

  // Split by dots and convert to camelCase
  const segments = withoutExt.split(".")
  return segments.map((segment, index) => {
    if (index === 0) {
      return segment // First segment stays lowercase
    }
    // Capitalize first letter of subsequent segments
    return segment.charAt(0).toUpperCase() + segment.slice(1)
  }).join("")
}
