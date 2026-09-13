# Prototype Instructions

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

## Approved homepage direction

- Use the selected hybrid visual at `../output/design/practice-studio-homepage-hybrid.png` as the homepage source of truth.
- Preserve Option 1's clear structure and guided roadmap with Option 3's dark editorial hero and stronger personality.
- Use an editorial serif for major headlines, a clean sans-serif for body copy, warm ivory sections, midnight navy, muted clay and olive, and a restrained warm-ochre accent.
- Keep AI secondary and practical. Do not make clinical, legal, compliance, credentialing, timeline, revenue, or patient-outcome guarantees.
- Keep lead capture limited to business-level information and explicitly exclude patient information.

## Repository and deployment

- Treat this directory as the repository root. The canonical repository is the private GitHub repository `jonathan-arteaga/practice-studio` at `https://github.com/jonathan-arteaga/practice-studio`.
- Keep the GitHub repository private unless the user explicitly approves changing its visibility.
- The production site is public at `https://practice-studio-beta.vercel.app/`.
- The linked Vercel project is `jon-art-projects/practice-studio`. Its production branch is `main`, and pushes to `main` trigger production deployments automatically.
- Preserve `vercel.json`. Vercel must run `npm run build` and serve `dist/client`; the remaining `dist` outputs support the separate Sites-ready build.
- Keep `.vercel/`, `.env.local`, and other environment files local. Never commit Vercel tokens, environment values, or other credentials.
- Before pushing `main`, run `npm run build`, `npm run test:sites`, and `git diff --check`.
- After a production deployment, confirm Vercel reports the deployment as Ready, verify the public URL without authentication, load a built asset, and test the primary roadmap CTA in a rendered browser.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.

## Portfolio monorepo (supersedes standalone deployment notes)
The canonical source is now the private website-examples repository. Use pnpm from the workspace root. Production is a combined static deployment at /examples/practice-studio/. Keep standalone Sites packaging intact; old deployment pipelines will be retired after verified redirects.
