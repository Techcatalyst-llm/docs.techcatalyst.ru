# Project Context

## What this is

Public documentation site for Techcatalyst products (`docs.techcatalyst.ru`).
Next.js (App Router) with Tailwind; content assembled in `content.tsx` and
`app/`; PM2 process management (`ecosystem.config.js`).

The site documents products whose behaviour is specced elsewhere
(`techcatalyst_takt/specs/`, `techcatalyst_guard/specs/`). Documentation here
must track those specs — when a capability spec changes, the corresponding docs
page is updated in the same change.

## Stack — do not change without an ADR

| Layer | Technology |
|-------|-----------|
| Framework | Next.js (App Router) |
| Styling | Tailwind (`tailwind.config.ts`) |
| Process management | PM2 (`ecosystem.config.js`) |

## Verification commands

```bash
npm install
npm run dev      # local development
npm run build    # production build (must stay green)
```

## Non-negotiable properties

1. Docs content does not make claims beyond the product specs.
2. Russian is the primary content language unless a page states otherwise.
