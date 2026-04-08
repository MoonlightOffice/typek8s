# AGENTS.md

## Purpose

This repository is a layered Deno package. Keep changes aligned with the dependency direction, local module conventions,
and the required verification steps.

## Verification

- Run `deno task tidy` after implementation. This repository defines it as `deno fmt && deno check && deno lint`, so it
  is the required compile, format, and lint verification step.
- Run `deno task test` to test the entire codebase.

## Architecture Rules

Allowed dependency direction for production code:

- `di -> adapter -> core -> util`

Inside `core`:

- `cli -> service -> port -> entity`

The reverse direction is not allowed.

`util` is a shared lowest-level layer. `core`, `adapter`, `di`, and `double` may depend on it, but `util` must not
depend on those layers.

Test support and test files may additionally use:

- `double -> core/port`
- `service/*_test.ts -> double`

## Layer Responsibilities

- `adapter` mainly implements the interfaces defined in `port`.
- `di` is responsible for dependency injection and wiring.
- `double` implements `core/port` interfaces for tests and example wiring. Production code in `core`, `adapter`, and
  `di` must not depend on `double`.
- `cli` handles command-line transport concerns such as argument parsing, help text, stdout/stderr output, and exit
  codes, then delegates business behavior to `service`.
- `service` uses `entity` and `port` to implement business logic.
- `entity` contains the domain types and errors used by upper layers.
- `util` contains generic cross-layer helpers with no domain or business logic. It must not import from `core`,
  `adapter`, `di`, or `double`.

## Ports, Services, and Test Doubles

- When adding a new `port`, add the appropriate test double for it under `double` so tests and example wiring can depend
  on a stable in-memory implementation or a predictable stub.
- When adding a new `service`, add the supporting test doubles needed to test it cleanly through its port dependencies.
- Keep the port interface itself under `core/port`; put fake and stub implementations under `double`.
- Choose the test double style based on the seam and the shape of the interface.
- If both a fake and a stub are equally implementable for the same test seam, prefer the fake.
- Prefer blackbox-friendly, stateful fakes when the dependency exposes a meaningful world to model, such as files,
  directories, stored documents, or other durable domain state.
- Prefer scenario-driven stubs when the dependency is still coarse and blackbox-friendly but does not model durable
  state. Service stubs should prefer queued results, name-specific results, and default results over exact
  full-parameter matching.
- Use exact-match rule stubs for function-like, query-like, or translation-style dependencies whose APIs are mostly
  request-to-result transforms over opaque inputs.
- Keep upper-layer tests blackbox at the level they are written. A `cli` or `ui` test should usually stub or fake a
  `service` based on whether it models state, and a `service` test should usually stub a function-like `port` or fake a
  stateful one.
- When a `cli` test needs to verify path-to-content translation or other stateful filesystem behavior before calling a
  service, prefer a `FileIOPort` fake plus a small recording service double over expanding a coarse service stub.
- Do not force upper-layer tests to encode internal request shaping, temporary paths, generated IDs, or other
  implementation details unless that interaction is itself the contract being tested.
- Prefer coarse scenario configuration for service stubs, such as default success or failure and small domain-specific
  selectors, over exact full-parameter matching.
- Avoid ad hoc call-recording or spy helpers unless the task explicitly requires them and the interaction itself is the
  behavior under test.

## Import and Export Conventions

- Manage module exporting and importing through `mod.ts` and `deps.ts` created for each layer or directory.
- Prefer re-exporting shared dependencies and local modules from those files instead of importing through long relative
  paths.
- Avoid imports like `../../../path/to/the/file.ts` when a local `mod.ts` or `deps.ts` can provide the dependency.
