# AGENTS.md

## Purpose

This repository is a layered Deno package. Keep changes aligned with the dependency direction, local module conventions,
and the required verification steps.

## Verification

- Run `deno task tidy` after implementation. This repository defines it as `deno fmt && deno check && deno lint`, so it
  is the required compile, format, and lint verification step.
- Run `deno task test` to test the entire codebase.

## Architecture Rules

Allowed dependency direction:

- `di -> adapter -> core`

Inside `core`:

- `service -> port -> entity`

The reverse direction is not allowed.

## Layer Responsibilities

- `adapter` mainly implements the interfaces defined in `port`.
- `di` is responsible for dependency injection and wiring.
- `service` uses `entity` and `port` to implement business logic.
- `entity` contains the domain types and errors used by upper layers.

## Ports, Services, and Fakes

- When adding a new `port`, add the appropriate test double for it so tests and example wiring can depend on a stable
  in-memory implementation or a predictable stub.
- When adding a new `service`, add the supporting fakes needed to test it cleanly through its port dependencies.
- Choose the test double style based on the seam and the shape of the interface.
- Prefer blackbox-friendly, stateful or scenario-driven fakes when the dependency exposes a meaningful world to model,
  such as files, directories, stored documents, or other durable domain state.
- Service fakes should stay coarse and scenario-driven. Prefer queued results, name-specific results, and default
  results over exact full-parameter matching.
- Use exact-match rule doubles for function-like, query-like, or translation-style dependencies whose APIs are mostly
  request-to-result transforms over opaque inputs. Existing classes may still be named `Fake...`, but semantically these
  behave like stubs.
- Keep upper-layer tests blackbox at the level they are written. A `ui` test should usually fake a `service`, and a
  `service` test should usually stub a function-like `port` or fake a stateful one.
- Do not force upper-layer tests to encode internal request shaping, temporary paths, generated IDs, or other
  implementation details unless that interaction is itself the contract being tested.
- Prefer coarse scenario configuration for service fakes, such as default success or failure and small domain-specific
  selectors, over exact full-parameter matching.
- Avoid ad hoc call-recording or spy helpers unless the task explicitly requires them and the interaction itself is the
  behavior under test.

## Import and Export Conventions

- Manage module exporting and importing through `mod.ts` and `deps.ts` created for each layer or directory.
- Prefer re-exporting shared dependencies and local modules from those files instead of importing through long relative
  paths.
- Avoid imports like `../../../path/to/the/file.ts` when a local `mod.ts` or `deps.ts` can provide the dependency.
