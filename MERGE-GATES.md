# Wiki merge gates

## What is enforced (GitHub)

Ruleset **Wiki merge gates** (id `25806959`) targets `master`, enforcement **active**:

- Rule `pull_request`: must use a PR to update `master` (no direct push for non-bypass actors).
- Rule `required_status_checks`: required check name must match `.github/workflows/wiki.yml` job `name` exactly:

  `Format, bilingual, ingest tests, production build`

- `bypass_actors`: empty — configuring admin reported `current_user_can_bypass=never` for typical tokens.

This Ruleset was created by an admin (Joy). Do not recreate it.

## Path filters and required checks (**admin must apply**)

`pull_request` triggers for the Wiki workflow **must not** use `paths` filters. A required check that never starts stays **Pending** forever and blocks merge.

`push` to `master` may keep `paths` to save CI minutes.

**This PR’s OAuth token lacks `workflow` scope**, so `.github/workflows/wiki.yml` could not be pushed. An admin must apply one of:

```bash
# Option A — copy desired file (from this PR branch)
cp scripts/ci-patches/wiki.yml.desired .github/workflows/wiki.yml
git add .github/workflows/wiki.yml && git commit -m "fix(ci): always run wiki gates on pull_request" && git push

# Option B — apply patch
patch -p0 < scripts/ci-patches/wiki-yml-remove-pr-paths.patch
```

Desired `pull_request` block (no `paths`):

```yaml
  pull_request:
    branches: [master, dev]
```

## What CI does **not** block

- **Cloudflare Pages** still auto-deploys on `master` push. A red Wiki CI run does **not** automatically stop Cloudflare. Gate = block bad merges into `master`; once `master` advances, Pages deploys.
- Without Ruleset bypass, non-admins cannot direct-push `master`. An admin / Ruleset bypass actor can still circumvent PR + required checks.
- Classic “branch protection” API may still report unprotected while Rulesets are active — trust Rulesets over the legacy endpoint.

## Manual re-check (admin)

1. GitHub → Settings → Rules → Rulesets → **Wiki merge gates**
2. Confirm required check context is exactly: `Format, bilingual, ingest tests, production build`
3. After `wiki.yml` path-filter fix is on the PR branch: open a no-op PR that touches only an unrelated path (e.g. `README.md`) and confirm the Wiki check **runs** (not skipped/Pending).
