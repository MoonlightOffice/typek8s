# typek8s

Write Kubernetes manifests in TypeScript.

## Getting Started

Run the following command in your project to set up typek8s environment.

```shell
deno run -A npm:tiged https://github.com/MoonlightOffice/typek8s/template#v0.6.2 <destination-directory>
```

Go to the directory, write manifests in TypeScript, and run `deno task synth` to generate Kubernetes manifests or Helm charts.

To generate Kubernetes api type files, run the following command:

```shell
deno run -A https://raw.githubusercontent.com/MoonlightOffice/typek8s/refs/tags/v0.6.2/package/cmd/cmd.ts
```
