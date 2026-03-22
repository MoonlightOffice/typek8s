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

- When adding a new `port`, add a fake for it so tests and example wiring can depend on a stable in-memory
  implementation.
- When adding a new `service`, add the supporting fakes needed to test it cleanly through its port dependencies.
- Keep fake APIs predictable and test-oriented, following the existing exact-match rule style used under `core/port/**`.

## Import and Export Conventions

- Manage module exporting and importing through `mod.ts` and `deps.ts` created for each layer or directory.
- Prefer re-exporting shared dependencies and local modules from those files instead of importing through long relative
  paths.
- Avoid imports like `../../../path/to/the/file.ts` when a local `mod.ts` or `deps.ts` can provide the dependency.
