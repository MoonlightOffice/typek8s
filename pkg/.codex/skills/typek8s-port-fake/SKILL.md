---
name: typek8s-port-fake
description: Implement or update test fakes for this typek8s codebase, especially ports under core/port, following local conventions for exact-match rules, readable APIs, and table tests.
---

# Typek8s Port Fake

Use this skill when adding or updating a fake for a port in this repo, or when writing tests for that fake.

## References

Read only the files you need:

- `core/port/file-io/fake-file-io-port.ts`
- `core/port/file-io/fake-file-io-port_test.ts`
- `core/port/k8s/fake-k8s-port.ts`
- `core/port/k8s/fake-k8s-port_test.ts`
- `core/port/k8s/fake-helm.ts`
- `core/port/k8s/fake-helm_test.ts`

## Implementation Rules

- Match the real port interface first. If the interface has an obvious typo or contract bug, fix the port and the fake
  together rather than baking the mistake into the fake.
- Prefer input-mapped fakes over sequential stubs. Use exact-match rules keyed by the method inputs that matter for
  tests.
- Keep the fake readable. Do not add call-recording, spy helpers, or debug accessors unless the task explicitly requires
  them.
- Treat complex inputs as opaque values. Match them by exact string or exact object field equality unless the
  surrounding codebase already uses a richer matching rule.
- Put rule configuration into `*Params` and `*Rule` types.
- Add a short code comment on each rules field so users know how to seed the fake.
- Keep unmatched behavior explicit and deterministic.
- Follow the nearest existing fake for fallback behavior:
  - return `entity.ErrInvalid` when an unconfigured call should be considered invalid input
  - return an empty value only when that behavior is already established for the same style of port fake
- Export new fakes from the nearest `mod.ts`.

## Test Rules

- Write fake tests in table-test style, matching `core/port/file-io/fake-file-io-port_test.ts`.
- Use local `In` and `Want` types.
- Structure tests as `const tests = [...]` plus `for (const tt of tests) await t.step(tt.name, ...)`.
- Write case names in `<condition or input>; <outcome or output>` format.
- For `tsUtil.Result`, compare errors with `res.err!.is(expectedErr)` and compare success values directly.
- For async success values like `Promise<File>`, await the resolved value and assert only stable fields such as text,
  name, and type.
- Cover both configured matches and unmatched fallback behavior.
- Include error cases for the domain errors documented by the port.

## Workflow

1. Read the target port and the nearest existing fake in the same area.
2. Decide the minimal exact-match rule shape needed for service-layer tests.
3. Implement the fake with a small constructor, private rule storage, and one rule lookup per method.
4. Add or update the export barrel.
5. Write table tests covering success, documented errors, and unmatched fallback.
6. Run `deno fmt` on touched files.
7. Run focused `deno test --allow-env ...` for the new fake test file.

## Notes

- Optimize for service-layer testability, not adapter realism.
- Default to ASCII.
- Keep comments short and only where they reduce ambiguity.
