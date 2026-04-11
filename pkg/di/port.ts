import { fileIo, k8s, port } from "./deps.ts"

export function createFileIOPort(): port.fileIo.FileIOPort {
  return new fileIo.AdapterFileIOPort()
}

export function createK8sPort(): port.k8s.K8sPort {
  return new k8s.AdapterK8sPort()
}

export function createHelmPort(): port.k8s.HelmPort {
  return new k8s.AdapterHelmPort(createFileIOPort())
}
