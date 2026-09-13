# Deployment

The deployment consists only of `.vercel/output/static` and Vercel Build Output API v3 configuration. `scripts/build-portfolio.mjs` generates exact HTML routes, per-document CSP script hashes, demo noindex headers, and a 404 fallback. Responsive property images are generated before the Next.js export. Uploaded output must remain below 100 MiB and 2,048 routes.

## Automated delivery

`.github/workflows/ci.yml` verifies PRs and main pushes on Node 22. A successful main push deploys the same verified output using `vercel deploy --prebuilt --prod`; a manually requested workflow can deploy a preview. Vercel's separate Git-triggered deployments are disabled in `vercel.json` to prevent duplicate builds.

GitHub Actions requires:

- Secret `VERCEL_TOKEN`, preferably restricted to this project.
- Variables `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`, and `PORTFOLIO_ORIGIN`.

Credentials stay in GitHub Actions secrets. Do not commit `.vercel/`, environment files, or token values. The local Vercel CLI login can deploy interactively, but its OAuth app cannot create persistent CI tokens. See the migration record for configuration status.

## Manual verified deployment

Run `pnpm verify`, then `pnpm exec vercel deploy --prebuilt --prod --yes --scope jon-art-projects`. A linked local project or the Vercel project environment variables are required. The canonical origin defaults to `https://website-examples-alpha.vercel.app`; set `PORTFOLIO_ORIGIN` before building if that changes.

## Recovery

Record the production deployment ID before switching production. Redeploy a previously verified source revision and artifact to recover the collection. For legacy aliases, restore their recorded previous deployment until the new redirect is verified. Never remove a legacy project just to free its URL before confirming the URL can be retained.

## Resource behavior

Visitors consume static requests and bandwidth. There is no server-rendering CPU, image-transformation service, database, paid analytics, or background job. Automatic route prefetching is disabled in the property app to avoid downloading unvisited pages. The gallery loads actual screenshots, not live embedded sites.

Cache immutable, content-hashed framework assets aggressively; HTML revalidates, and source-named image variants use bounded caching. Recheck Vercel Hobby limits before expanding the artifact budget. Static hosting does not make request or bandwidth allowances unlimited.

Run `pnpm smoke:production` for anonymous browser verification of the live gallery, all six demos, navigation, roadmap dialog, assets, headers, and 404 handling.

Run `pnpm build` once before starting property-app development to prepare responsive image variants. For a standalone Sites handoff, build Practice Studio without `PORTFOLIO_BASE_PATH`: `pnpm --filter practice-studio build`. Its standalone output uses `/`, rather than the collection prefix.
