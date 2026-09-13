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
| `hearthmere-residential.vercel.app` | Project `prj_1r1mfRORxy5ojTaeAIRZK43Pcusl`; old Git link `property-management-showcase`; reported ready production `dpl_7qrLNfn8nLuqRdbSG5ijhRyY8YVH` | Keep intact until new production passes |
| `practice-studio-beta.vercel.app` | Project not found in the documented `jon-art-projects` team | Resolve ownership before changing this URL |

The desired redirect retains each existing path and query string and prefixes it with `/examples/property-management` or `/examples/practice-studio`. Use redirect-only deployments if Vercel cannot transfer the legacy alias safely. Disconnect legacy build pipelines after verification; retain rollback targets and original source histories.

CI credential setup and final deployment/redirect results are recorded here after verification.
