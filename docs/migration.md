# Migration record

## Source history

The new private `jonathan-arteaga/website-examples` repository imports these original main revisions:

- Property Management: `4db297e782e12f1d974b3994f5091c0ceb59c79f`, retained as `imports/property-management`.
- Practice Studio: `7bdd465392816ae5a73a59f6e826ea82df9a401c`, retained as `imports/practice-studio` and merged without squashing under `apps/practice-studio`.

Both original commit graphs remain ancestors of the combined repository. Original repositories are retained; changes are published only to the new repository.

## New destination

- Vercel project: `website-examples`
- Project ID: `prj_GIExLIEp0EvYzd1bS56ei3FQc0j7`
- Team: `jon-art-projects` / `team_obR5XTVXtGo3jysYwPd3ymya`
- Canonical origin: `https://website-examples-alpha.vercel.app`

## Legacy targets discovered

| Legacy URL | Observed target | Migration state |
| --- | --- | --- |
| `hearthmere-residential.vercel.app` | Project `prj_1r1mfRORxy5ojTaeAIRZK43Pcusl`; old Git link `property-management-showcase`; reported ready production `dpl_7qrLNfn8nLuqRdbSG5ijhRyY8YVH` | Replaced by verified redirect-only deployment; Git pipeline disconnected |
| `practice-studio-beta.vercel.app` | Project not found in the documented `jon-art-projects` team | Returns DEPLOYMENT_NOT_FOUND; project and alias absent in documented team; left untouched |

The desired redirect retains each existing path and query string and prefixes it with `/examples/property-management` or `/examples/practice-studio`. Use redirect-only deployments if Vercel cannot transfer the legacy alias safely. Disconnect legacy build pipelines after verification; retain rollback targets and original source histories.

## Completed migration

- Public portfolio: https://website-examples-alpha.vercel.app/
- Production deployment: `dpl_6FyKuf838bUUpAX4uQPuULzArwNv` (Ready; anonymous browser smoke passed).
- Hearthmere redirect deployment: `dpl_HFPpE37VTLjMEktXnrTwW6hnAUNH` (Ready).
- Nested paths and query strings verified through HTTP 308 responses.
- Old Hearthmere Git connection disconnected; its small redirect deployment requires no rebuilds.
- Original Hearthmere settings are saved in `hearthmere-rollback.json`; original source repositories remain unchanged.
- GitHub's project IDs and canonical-origin variables are configured. The persistent CI credential is pending the explicit approval requested during implementation. Until configured, verification runs in full and deployment is explicitly skipped with a warning.

The old Gitleaks action computed an invalid parent-of-root range on the first push. The replacement downloads a pinned, checksum-verified binary and scans all imported history directly, avoiding the first-commit assumption and covering both source graphs.
