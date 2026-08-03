# Changes — Active Proposals

This directory holds **what we are changing and why**, before it is built.
`specs/` holds what the system already does. The two never overlap: a behaviour
lives in exactly one of them at any moment.

Convention: [OpenSpec](https://github.com/Fission-AI/OpenSpec).

## The four phases

```
  1. EXPLORE          2. PROPOSE           3. APPLY            4. ARCHIVE
  ──────────          ──────────           ─────────           ──────────
  frame the problem   write the change     implement by        fold delta into
  gather evidence     proposal + delta     tasks, verify       specs/, move to
  compare options     specs + tasks        each one            changes/archive/
  recommend one
       └── gate: is this ─┘   └── gate: approved ─┘   └── gate: deployed ─┘
           worth doing?           to build?               and verified?
```

Product rule: before phase 1 of any initiative matching the trigger list (new
feature, workflow change, automation effort, agent capability, enterprise
requirement, significant UI/backend task), Product Squad runs the Mandatory SDD
Opportunity Research Subcycle (`.product-squad-skill/templates/sdd-opportunity-research.md`).
No "operational tooling" exception.

### 1. Explore
Output: `changes/<change-id>/explore.md` (Problem / Context / Options /
Recommendation / Open questions). May legitimately end in "not worth doing" —
that outcome is archived too. Skip only for mechanical corrections with a single
sensible implementation.

### 2. Propose
Output: `proposal.md`, `tasks.md`, delta specs, and `design.md` when there is a
real technical decision to record. **Gate: a human approves the proposal.** No
code before this.

### 3. Apply
Work `tasks.md` in order; the delta spec is the acceptance criteria.
**Gate: deployed and every delta scenario verified.**

### 4. Archive
Fold deltas into `specs/<capability>/spec.md` (`ADDED` appends, `MODIFIED`
replaces by verbatim header, `REMOVED` deletes by verbatim header), update
`## Implementation` / `## Verification` / `## Known limits`, move the directory
to `changes/archive/<change-id>/`.

## Change IDs

Verb-led kebab-case: `add-*`, `fix-*`, `harden-*`, `update-*`, `remove-*`.
Bad: `sprint-12`, `improvements`, `refactor`.

## Directory structure

```
changes/
  README.md
  change_example_id/               <- canonical skeleton; copy it to start
  <change-id>/
    explore.md                     <- phase 1 (optional for mechanical fixes)
    proposal.md                    <- phase 2, required
    tasks.md                       <- phase 2, required
    design.md                      <- phase 2, only when there is a decision
    specs/<capability>/spec.md     <- phase 2, delta specs, required
  archive/<change-id>/             <- phase 4, same structure, frozen
```

## Required file formats

`proposal.md`: `## Why` (evidence: file:line, failing test, measurement, or
business requirement reference), `## What Changes` (observable differences),
`## Impact` (capabilities, code, migration/rollback, cost of doing nothing).

`tasks.md`: ordered checklist, each item independently verifiable; last item is
always "fold delta into `specs/`, archive this change".

Delta specs: only changed requirements under `## ADDED Requirements`,
`## MODIFIED Requirements`, `## REMOVED Requirements`, or
`## RENAMED Requirements`; `MODIFIED`/`REMOVED` headers must match the current
spec verbatim.

## Review checklist (propose gate)

- [ ] `## Why` cites evidence, not opinion
- [ ] Product Squad opportunity research exists for trigger-list initiatives
- [ ] Every added/modified requirement has at least one scenario
- [ ] Scenarios are observable from outside the code
- [ ] Rollback stated, or declared unnecessary with a reason

## Review checklist (archive gate)

- [ ] Every task checked off
- [ ] Every delta scenario verified by a named test or acceptance run
- [ ] `## Known limits` updated in affected capability specs

## Current proposals

| Change | Severity | Capability | Phase |
|--------|:--------:|-----------|-------|
| — | — | — | none active |

## Backlog — identified, not yet proposed

| Candidate ID | Severity | Evidence |
|--------------|:--------:|----------|
| — | — | — |
