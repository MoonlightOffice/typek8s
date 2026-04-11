# typek8s

Write Kubernetes manifests in TypeScript.

## Getting Started

Run the following command in your project to set up typek8s environment.

```shell
deno run -A npm:tiged https://github.com/MoonlightOffice/typek8s/template#stable <destination-directory>
```

Go to the directory, write manifests in TypeScript, and run `deno task synth` to generate Kubernetes manifests in Helm
chart format.

To generate Kubernetes api type files, run the following command inside the <destination-directory> and read the help
message for more information:

```shell
deno task cli
```
