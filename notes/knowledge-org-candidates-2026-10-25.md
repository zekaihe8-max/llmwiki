# Knowledge organization candidates (2026-10-25)

Report only — **no mass rewrite**, no unbounded recursive fetch. Single-source Topics are **not** automatically invalid.

Scan basis: 82 Topics under `wiki/topics/` (plus browse `index.md`). ~54 Topics currently cite a single Source; that is expected for fresh digest filing.

## Merge / coarsen upward (candidates)

| Cluster | Pages | Why |
| --- | --- | --- |
| Personal-agent product surface | `personal-agent-cloud-env-pitfalls`, `personal-agent-share-and-interbot-chat`, `agent-in-chat-bug-feedback`, `agent-home-platform-control`, `agent-output-to-notion-reading` | Many are single-source product features of the same Grok Bot / Muse class. Could sit as subsections under a broader “personal agent product surface” Topic, keeping the foreman/dispatch Topics separate. |
| iPhone Duo adaptation | `ai-app-iphone-duo-adaptation`, `reading-app-iphone-duo-adaptation`, `iphone-duo-user-vs-developer-reception` | Same device-news wave; reception vs app adaptation could be one Topic with two facets. |
| Subscription / quota | `premium-ai-subscription-value`, `coding-agent-ux-vs-quota`, `claude-subscription-risk-control-weights`, `usage-limit-ab-tests` | Overlapping “what you pay / what you get / risk controls” — already cross-linked; optional umbrella “frontier subscription economics” if navigation gets noisy. |
| Harness token tooling | `agents-md-token-efficiency`, `coding-agent-token-saving-tooling` | Adjacent to `harness-comparison-beyond-tokens`; tooling vs project-instruction angles could merge if evidence stays thin. |

**Do not merge without human curation:** `multi-harness-router-vs-personal-dispatch` vs `personal-agent-foreman-over-coding-agents` — the digest deliberately contrasts infrastructure routers with personal “foreman” assistants; collapsing would hide that contradiction.

## Fine-grained but keep (for now)

- `menubar-management-tool-gap`, `casual-ai-minigame-first-try`, `china-special-edition-preinstalls` — anecdote-scale, but they name distinct claims; leave until a second source arrives or a human parks them.
- Cloudflare edge trio (`programmable-edge-compute` already synthesizes Workers / KV / DO Sources) — keep as the upward merge target; do not split further.

## Paraphrase / incomplete source chains

Pattern: X posts that **relay** an official blog or another author’s claim. Filing the relay as Source is fine **if** the page states the relay and, when possible, links the original.

Watch list (examples — verify on read, do not auto-fetch):

- `dotey-*` relays (SemiAnalysis usage limits, Kimi breakdowns, Computer Use explainers) — confirm whether the official SemiAnalysis / vendor URL is in `sources[]` or only the X post.
- `op7418-thariq-*` / authorship clarification chain — good contradiction handling on `claude-code-authorship-and-voice`; keep the chain, avoid treating rumor posts as primary for employment facts once an official statement exists.
- `shao-meng-*` relays (Netflix ontology, Nathan Lambert, Felix/Claude usage) — prefer linking the underlying talk/post when a stable URL exists; until fetched, Topic prose must not claim the agent read the original.

## Unfetched originals

Do **not** pretend read. If a Source `resource` is an X status summarizing an external article and `raw/articles/` has no body (or fetch failed), Topic synthesis should attribute the **X claim** only. Remediation is selective `ingest:one` / fetch — not a crawl of every outbound link.

## Suggested next human passes (bounded)

1. Pick one cluster (personal-agent surface **or** Duo) and decide merge vs keep.
2. Spot-check five `dotey-` / `shao-meng-` Sources for missing official `sources[]` entries.
3. Leave single-source Topics alone unless a duplicate title/slug already exists.
