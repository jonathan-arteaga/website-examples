# Verification record

Verified 2026-09-12 (America/Los_Angeles).

| Claim | Evidence | Result |
| --- | --- | --- |
| Both source histories are preserved | `git merge-base --is-ancestor imports/property-management HEAD` and the corresponding Practice Studio tag | Pass |
| Clean install and supported runtime | Frozen-lockfile installation and `pnpm verify` on Node 22.23.2 / pnpm 11.9.0 | Pass |
| Existing behavior survives the migration | 205 Playwright checks, including 197 inherited property tests and 8 portfolio/Practice Studio checks | Pass |
| Exported scripts match CSP | 22 contract/static-output/privacy tests, including exact inline script hashes | Pass |
| Sites packaging remains available | 4 Practice Studio worker and packaging tests | Pass |
| Source media remains intact and sanitized | Strict image audit: 87 generated photos, 18 distinct plans, no MIME or metadata violations | Pass |
| Source and imported history contain no detected secrets | Checksum-verified Gitleaks 8.24.3 with `--all --full-history` | Pass |
| Production dependency threshold | `pnpm audit --prod --audit-level=high` | No high or critical findings; one low esbuild development-server advisory remains |
| Deployment has no application server | Build Output API artifact: 92,939,802 bytes, 1,530 static files, 70 routes, zero functions | Pass |
| Live pages work anonymously | `pnpm smoke:production`: gallery, six demos, visible images, modal, internal navigation, headers, 404, and clean console | Pass |
| Old Hearthmere links retain context | HTTP 308 for `/alderwyck/schedule-tour?plan=a1&source=old-link`, preserving the path and both query parameters | Pass |

Production URL: https://website-examples-alpha.vercel.app/

Production deployment: `dpl_6FyKuf838bUUpAX4uQPuULzArwNv` (Ready).

The artifact size is a conservative uncompressed local total. The initial Vercel upload deduplicated files to approximately 50 MB. Requests and bandwidth still consume Hobby allowances.

## Known external limitations

The former Practice Studio URL returns Vercel `DEPLOYMENT_NOT_FOUND`. Neither its project nor its alias exists in the documented team. It was left untouched; the new Practice Studio demo works in the collection.

GitHub verification is independent of deployment credentials. The workflow reports a warning and skips deployment if `VERCEL_TOKEN` is absent. Persistent, project-restricted CI-token creation is awaiting explicit approval; the initial production deployment is already verified through the existing CLI login.
