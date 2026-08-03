# Specs — Source of Truth

This directory is the **source of truth** for what the docs.techcatalyst.ru site does today.

The project follows **Spec-Driven Development (SDD)** using the
[OpenSpec](https://github.com/Fission-AI/OpenSpec) convention:

| Directory | Answers | Mutability |
|-----------|---------|------------|
| `specs/` | "What does the system do **now**?" | Changes only when a proposal in `changes/` is deployed and archived |
| `changes/` | "What are we changing **next**, and why?" | Active working area |

A spec describes **deployed, verifiable behaviour**. If the code does not do it,
it does not belong in `specs/` — it belongs in `changes/` as a proposal.

## Capability index

No capability specs are written yet. Before the first material change, write the
spec for the capability it touches (format below) and add it to this index.

## Spec format

````markdown
# <Capability> Specification

## Purpose
One paragraph: what this capability is responsible for and where its boundary is.

## Requirements

### Requirement: The system SHALL <observable behaviour>
Prose detail, constraints, and the trust assumptions this requirement relies on.

#### Scenario: <short name>
- **WHEN** <trigger / precondition>
- **THEN** <observable, checkable outcome>
````

Rules:

1. Every requirement uses **SHALL** and describes behaviour observable from
   outside the code.
2. Every requirement has **at least one scenario**; a requirement without a
   scenario is not verifiable and will be rejected in review.
3. Scenarios are `WHEN`/`THEN`, optionally with `AND`. Implementation detail
   goes in `## Implementation`, not in scenarios.
4. Each capability ends with `## Implementation` (file:line pointers) and
   `## Verification` (test per requirement).
5. `## Known limits` records behaviour that is real but weaker than a reader
   would assume. Limits are not TODOs — a TODO is a proposal in `changes/`.

## Changing a spec

You do not edit `specs/` directly to add behaviour. You:

1. Create `changes/<verb-led-kebab-id>/` with `proposal.md`, `tasks.md`, and
   delta specs under `changes/<id>/specs/<capability>/spec.md`.
2. Get the proposal approved (Product Squad discovery precedes this for
   trigger-list initiatives — see `.product-squad-skill/SKILL.md`).
3. Implement it.
4. Only then fold the delta into `specs/` and move the change to
   `changes/archive/`.

See [`changes/README.md`](../changes/README.md) for the full workflow.
