# Upgrade the documentation runtime to a supported Next.js release

## Why

The production dependency audit for `master` reports critical and high
advisories in Next.js 14 and its bundled PostCSS version. The audit identifies
Next.js 16.3.8 as the supported remediation. Deploying the pulled content on
the vulnerable runtime would expose the public documentation host to known
request-handling and denial-of-service defects.

## What Changes

- Upgrade Next.js to 16.3.8.
- Replace the vulnerable ESLint dependency tree with Biome for repository
  linting.
- Upgrade Tailwind CSS to 4.3.3 and its dedicated PostCSS plugin, removing the
  vulnerable Tailwind 3 file-watching dependency tree.
- Keep the existing React 18 application contract and standalone deployment
  topology unchanged.

## Impact

The public pages and URLs are unchanged. The production build output remains a
standalone Node server on port 3011. Tailwind 4 targets modern browsers
(Safari 16.4+, Chrome 111+, and Firefox 128+). Rollback is the previous Git
revision plus its lock file and build artifact.
