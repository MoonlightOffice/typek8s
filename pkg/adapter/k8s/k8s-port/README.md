## Test

Prepare a Kubernetes cluster, then run the following command to generate a kubeconfig file:

```shell
kubectl config view --minify --raw > kubeconfig.yaml
```

Place the kubeconfig file in this directory. Then run the long test for `AdapterK8sPort.getAllOpenApi`:

```shell
TEST_KUBECONFIG_PATH=./kubeconfig.yaml TESTMODE=LONG deno test -A --filter=AdapterK8sPort.getAllOpenApi
```
