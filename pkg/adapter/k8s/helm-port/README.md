Required binaries to run the long test in this directory:

- `nerdctl`
- `helm`

Command to prepare registry authentication

```shell
nerdctl run --rm --entrypoint htpasswd docker.io/library/httpd:2 -Bbn testuser testpassword > auth/htpasswd
```

Run the long test for `AdapterHelmPort` in this directory:

```shell
TESTMODE=LONG deno test -A
```
