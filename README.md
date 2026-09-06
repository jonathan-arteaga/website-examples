# Hearthmere Residential Portfolio Showcase

This is a public-facing fictional property-management showcase with a private source
repository. It demonstrates a multi-site Next.js system for one management brand and four
community concepts. Every name, address, phone number, price, point of interest, image,
and operating detail is invented for the showcase.

The sites are not live leasing properties. Forms, applications, tour requests, resident
tools, availability, prices, mobility scores, and neighborhood distances are demonstration
experiences only. Local fallback URLs use the reserved `.example` domain.

## Portfolio

| Site | Fictional location | Phone | Homes |
| --- | --- | --- | ---: |
| Hearthmere Residential | 100 Portfolio Way, Suite 400, Example City, TX 00000 | (214) 555-0100 | 544 across 4 communities |
| Alderwyck Apartments | 1420 Lantern Walk, Example City, TX 00000 | (682) 555-0111 | 148 |
| Norvale Commons | 2875 Juniper Loop, Sample City, TN 00000 | (615) 555-0122 | 112 |
| Larkmere Gardens | 3640 Garden Terrace, Demo City, KS 00000 | (785) 555-0133 | 128 |
| Caldridge Townhomes | 4812 Foundry Row, Example Heights, TN 00000 | (423) 555-0144 | 156 |

## Local development

Requirements:

- Node.js 22 or newer
- pnpm 11.9.0

```bash
pnpm install
pnpm dev
```

Run the consolidated showcase directly:

```bash
pnpm dev:hearthmere-residential
```

Validate the workspace with:

```bash
pnpm install --frozen-lockfile
pnpm images:audit --strict
pnpm verify
pnpm audit --audit-level=high --prod
```

`pnpm verify` runs lint, type-check, the consolidated production build, strict media and privacy
gates, Node contract tests, and the 197-case Playwright suite. Install its browser once
with `pnpm exec playwright install chromium`.

## Production environment

One Vercel project serves all five showcase experiences:

| Experience | Public path |
| --- | --- |
| Hearthmere Residential | `/` |
| Alderwyck Apartments | `/alderwyck` |
| Norvale Commons | `/norvale` |
| Larkmere Gardens | `/larkmere` |
| Caldridge Townhomes | `/caldridge` |

Configure the `hearthmere-residential` project with
`NEXT_PUBLIC_SITE_URL=https://hearthmere-residential.vercel.app`. The single Next.js
build uses separate root layouts to preserve each site design while sharing one origin,
asset pipeline, image optimizer, CSP, robots policy, and Vercel deployment.

## Repository use

This repository is private and is not distributed under an open-source license. No rights
are granted to copy, publish, sublicense, or redistribute the code or showcase assets.
