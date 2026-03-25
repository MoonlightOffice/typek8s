---
name: typek8s-port-fake
description: Implement or update test doubles for this typek8s codebase, especially fakes and stubs under core/port, following local conventions for readable APIs and table tests.
---

# Typek8s Port Double

Use this skill when adding or updating a fake or stub for a port in this repo, or when writing tests for that double.

## References

Read only the files you need:

- `core/port/file-io/fake-file-io-port.ts`
- `core/port/file-io/fake-file-io-port_test.ts`
- `core/port/k8s/stub-k8s-port.ts`
- `core/port/k8s/stub-k8s-port_test.ts`
- `core/port/k8s/stub-helm.ts`
- `core/port/k8s/stub-helm_test.ts`

## Implementation Rules

- Match the real port interface first. If the interface has an obvious typo or contract bug, fix the port and the fake
  together rather than baking the mistake into the fake.
- First decide whether the dependency should be modeled as a true fake or as a stub-like rule double.
- Prefer true fakes when the dependency exposes meaningful durable state that upper layers should observe indirectly,
  such as files, directories, stored resources, or other domain state.
- For service fakes, prefer coarse scenario controls such as queued results, small domain-specific selectors, and a
  default result. Do not add exact full-parameter matching to a service fake.
- Prefer input-mapped exact-match rule doubles when the port is mostly a request-to-result transform over opaque inputs.
  Existing classes may still be named `Fake...`, but semantically these act like stubs.
- Keep upper-layer tests blackbox at their own seam. Do not choose an exact-match rule shape that forces callers to
  encode hidden implementation details from a lower layer.
- Keep the double readable. Do not add call-recording, spy helpers, or debug accessors unless the task explicitly
  requires them.
- Treat complex inputs as opaque values. Match them by exact string or exact object field equality unless the
  surrounding codebase already uses a richer matching rule.
- Put rule configuration into `*Params` and `*Rule` types.
- Add a short code comment on each configuration field so users know how to seed the double.
- Keep unmatched behavior explicit and deterministic.
- Follow the nearest existing fake for fallback behavior:
  - return `entity.ErrInvalid` when an unconfigured call should be considered invalid input
  - return an empty value only when that behavior is already established for the same style of port fake
- Export new doubles from the nearest `mod.ts`.

## Test Rules

- Write double tests in table-test style, matching `core/port/file-io/fake-file-io-port_test.ts`.
- Use local `In` and `Want` types.
- Structure tests as `const tests = [...]` plus `for (const tt of tests) await t.step(tt.name, ...)`.
- Write case names in `<condition or input>; <outcome or output>` format.
- Keep tests blackbox at the level they are written. Do not assert internal temporary paths, generated IDs, rewritten
  downstream params, or cleanup details from a service test unless that behavior is part of the user-visible contract.
- If a case only becomes expressible by matching rewritten downstream params or inspecting internal calls, move the case
  to a lower seam instead of widening the higher-level fake.
- For `tsUtil.Result`, compare errors with `res.err!.is(expectedErr)` and compare success values directly.
- For async success values like `Promise<File>`, await the resolved value and assert only stable fields such as text,
  name, and type.
- Cover both configured matches and unmatched fallback behavior.
- Include error cases for the domain errors documented by the port.
- Do not add ad hoc recording doubles, spy fields, or test-only inspection hooks just to observe internal calls when an
  existing fake can express the case cleanly. If the only way to assert a case is to inspect internals, the case likely
  belongs at a different test seam.
- Do not thread implementation details such as `randomUUID`, temp file names, or internal directory layouts through test
  input just to make exact-match assertions possible.

## Workflow

1. Read the target port and the nearest existing double in the same area.
2. Decide whether the dependency needs a true fake or a stub-like exact-match rule double.
3. For true fakes, model only the smallest stable state that upper layers need to observe.
4. For exact-match rule doubles, decide the minimal rule shape needed for the intended seam.
5. Implement the double with a small constructor and predictable unmatched behavior.
6. Add or update the export barrel.
7. Write table tests covering success, documented errors, and unmatched fallback.
8. Run `deno fmt` on touched files.
9. Run focused `deno test --allow-env ...` for the new fake test file.

## Notes

- Optimize for service-layer testability, not adapter realism.
- Default to ASCII.
- Keep comments short and only where they reduce ambiguity.
- A fake or stub is only blackbox or whitebox relative to the test seam. The same double can support blackbox tests at
  one seam and whitebox tests at another.
- Exact-match rule stubs are for stable contract inputs, not for exposing hidden implementation details to higher-level
  tests.
