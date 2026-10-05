# Docs delivery delta

## ADDED Requirements

### Requirement: The documentation site SHALL use a supported runtime

The production dependency tree SHALL contain no known high or critical
advisories at deployment time.

#### Scenario: Production dependency audit

- **WHEN** the `master` dependency lock is installed
- **THEN** the production-only audit reports zero high and zero critical
  findings

### Requirement: The documentation site SHALL remain independently deployable

The production build SHALL produce a standalone Node server compatible with
the existing PM2 process and port 3011.

#### Scenario: Standalone build

- **WHEN** the production build completes
- **THEN** `.next/standalone/server.js` exists and serves the site on port 3011
