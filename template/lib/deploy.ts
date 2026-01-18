// Define your apps whatever you like. You can delete all this file.

import { api } from "typek8s"

function defaultMetadata(name: string): api.v1["Pod"]["metadata"] {
  return {
    name: name,
    labels: {
      "app.kubernetes.io/name": name,
    },
  }
}

function defaultResources(): api.v1["Pod"]["spec"]["containers"][number]["resources"] {
  return {
    requests: {
      "memory": "100Mi",
      "cpu": 0.1,
    },
    limits: {
      "memory": "100Mi",
      "cpu": 0.1,
    },
  }
}

function defaultDeploy(name: string, image: string): api.appsV1["Deployment"] {
  return {
    apiVersion: "apps/v1",
    kind: "Deployment",
    metadata: defaultMetadata(name),
    spec: {
      strategy: {
        type: "RollingUpdate",
        rollingUpdate: {
          maxSurge: "25%",
          maxUnavailable: "25%",
        },
      },
      replicas: 3,
      selector: {
        matchLabels: {
          "deploy": name,
        },
      },
      template: {
        metadata: {
          labels: {
            "deploy": name,
          },
        },
        spec: {
          containers: [
            {
              name: name,
              image: image,
              imagePullPolicy: "IfNotPresent",
              resources: defaultResources(),
            },
          ],
        },
      },
    },
  }
}

export const deployments: api.appsV1["Deployment"][] = [
  defaultDeploy("file-server", "caddy:latest"),
]
