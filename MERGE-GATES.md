# Wiki merge gates

## What is enforced (GitHub)

Ruleset **Wiki merge gates** (id `25806959`) targets `master`, enforcement **active**:

- Pull request required (no direct merge of a non-PR commit via the UI merge button path that Rulesets cover).
- Required status check name (must match `.github/workflows/wiki.yml` job `name` exactly):

  `Format, bilingual, ingest tests, production build`

- `bypass_actors`: empty — the configuring admin reported `current_user_can_bypass=never` for typical tokens.

This Ruleset was created by an admin (Joy). Do not recreate it from application code.

## Path filters and required checks

`pull_request` triggers for the Wiki workflow **must not** use `paths` filters. A required check that never starts stays **Pending** forever and blocks merge.

`push` to `master` may keep `paths` to save CI minutes; that does not affect the required-check Pending problem on PRs.

## What CI does **not** block

- **Cloudflare Pages** (`wiki-hezekai` → wiki.hezekai.com) still auto-deploys on `master` push. A red Wiki CI run does **not** automatically stop Cloudflare. Gate = block bad merges into `master`; once `master` advances, Pages deploys.
- An admin / Ruleset bypass actor can still circumvent PR + required checks.
- Classic “branch protection” API may still report unprotected while Rulesets are active — trust Rulesets over the legacy endpoint.

## Manual re-check (admin)

1. GitHub → Settings → Rules → Rulesets → **Wiki merge gates**
2. Confirm required check context is exactly: `Format, bilingual, ingest tests, production build`
3. Open a no-op PR that touches only an unrelated path (e.g. `README.md`) and confirm the Wiki check **runs** (not skipped/Pending).
