# raw/

Immutable inputs for the ingest pipeline. This directory is outside the OKF bundle (`wiki/`). Wiki pages must not link here.

`digests/` and `articles/` start empty aside from `.gitkeep`. The pipeline fills them when you run it. Nothing is fetched by adding this README.

## Immutability

- Files under `digests/` and `articles/` are write-once. After a file is written, do not edit, reformat, or delete it.
- The agent that maintains `wiki/` may read these files and must not change them.
- A second fetch with `--force` writes a new article file. The earlier file stays.
- `state/` is the only mutable area. It records processing status. It does not hold a second copy of an article body.
- A digest summary is never written as an article snapshot. A failed fetch writes no article file.

## Layout

| Path | Contents |
| --- | --- |
| `raw/digests/{name}.md` | One digest file, as received |
| `raw/articles/{slug}.md` | Frozen markdown snapshot of one fetched URL |
| `raw/state/{slug}.json` | Status record for that URL |
| `raw/state/urls.json` | Canonical URL → `{ hash, slug, first_seen, last_seen, digest, title }` |
| `raw/state/digests.json` | Digest filename → content hash, so a re-run can skip |

`{slug}` is the first 16 hex characters of SHA-256 of the canonical URL. The wiki Source slug is a separate human name chosen at compile time and stored on the record as `source_path`.

Canonical URLs are http(s), lower-case host, no fragment, no trailing slash on a non-root path, tracking parameters removed (`utm_*`, `fbclid`, `gclid`, and the same family).

## Status machine

```text
seen → fetched → sourced → filed
```

| Status | Meaning |
| --- | --- |
| `seen` | Named in a digest. No article file yet. |
| `fetched` | `raw/articles/{slug}.md` (or a later `--force` snapshot) is frozen. |
| `sourced` | A Source page whose `resource` is this URL exists, but index, log, or lint is not done. |
| `filed` | Lint passed. The Source, Topic pages, `wiki/index.md`, and `wiki/log.md` reflect this URL. Terminal. |
| `skipped` | Terminal. Snapshot kept. No Source page (`compile:article --skip`). |
| `failed` | The fetch produced no body. Terminal until `--retry-failed` returns the record to `seen`. |

| Edge | When |
| --- | --- |
| `seen` → `fetched` | The original page was fetched and the snapshot was written. |
| `seen` → `failed` | The fetch produced no body. |
| `failed` → `seen` | `--retry-failed` queues another fetch. The record keeps `attempts`. |
| `fetched` → `sourced` | The Agent wrote the Source page. |
| `sourced` → `filed` | OKF lint passed, including the index entry and a single log mention. |
| `fetched` → `skipped` | The body is kept and no Source page is warranted. |

Compile problems stay on `fetched` or `sourced` with `compile_error` set. The snapshot stays, and the next run resumes at compile. `failed` means the fetch itself produced no body.

A later article that changes a Topic does not move an earlier record backward. That later article is its own ingest.

## Commands

Copy a digest into `raw/digests/` (or pass any path). Upstream drops are files named `YYYY-MM-DD-frontier-ai.md` and `YYYY-MM-DD-cn-x.md`. The default directory is `raw/digests/`.

```bash
npm run ingest:digest -- path/to/2026-10-23-frontier-ai.md
npm run fetch:articles -- --url https://example.com/article
npm run compile:article -- --url https://example.com/article
npm run lint:okf
npm run graph
```

One article, end to end:

```bash
npm run ingest:one -- --digest raw/digests/2026-10-23-frontier-ai.md --url https://example.com/article
# or the Nth deduped URL in that file (1-based)
npm run ingest:one -- --digest raw/digests/2026-10-23-frontier-ai.md --pick 1
```

`ingest:one` registers every URL in the digest, fetches the selected one, shells out to an Agent CLI, lints, and rebuilds `graph-data.json`. Split steps are the same pipeline.

### Daily batch

`ingest:batch` registers every URL in one digest, fetches with concurrency 1 (raise it only if you accept rate limits), compiles each `fetched` or `sourced` article through the Agent CLI, then runs `lint:okf` once and `graph` once. It does not write wiki pages itself. `filed` URLs are skipped and are not logged again. `--limit` counts URLs that still need work, so a filed article does not use a slot.

```bash
# One digest batch
npm run ingest:batch -- --digest raw/digests/2026-10-23-frontier-ai.md

# Limit 3 trial
npm run ingest:batch -- --digest raw/digests/2026-10-23-frontier-ai.md --limit 3

# Resume after a partial failure (fetched and sourced continue at compile)
npm run ingest:batch -- --digest raw/digests/2026-10-23-frontier-ai.md

# Next three after a trial. Filed URLs do not count toward --limit.
npm run ingest:batch -- --digest raw/digests/2026-10-23-frontier-ai.md --limit 3
```

Exit 0 means this run's fetches and compiles succeeded, lint and graph succeeded, and no URL in the digest is `failed`. A `--limit` trial can exit 0 while later URLs are still `seen`, `fetched`, or `sourced`. Exit 1 is partial success: keep what was filed and re-run the same command. URLs left at `failed` keep the exit at 1 until `--retry-failed` fetches them. Exit 2 means the Agent CLI is missing. Snapshots already fetched stay at `fetched`.

Default `--agent` for the batch is Cursor Agent (`agent` on `PATH`, or `/home/box/.local/bin/agent` on the shared box). Pass `--agent codex` or `--agent auto` for the other choice. `--concurrency` applies to fetch only and defaults to 1. Compile runs one article at a time.

Both daily files, when they are already in `raw/digests/`. A missing file is skipped. If neither exists, the command fails. One digest still runs when the other fails.

```bash
npm run ingest:day -- --date 2026-10-23
npm run ingest:day -- 2026-10-23 --limit 3
```

### Compile CLI

Live compile has to run on the shared box. This script does not write wiki pages itself.

Codex (codex-cli 0.162.1, ChatGPT login at `/home/box/.local/bin/codex`):

```bash
codex exec --sandbox workspace-write "<prompt>"
```

Cursor Agent (`/home/box/.local/bin/agent`, `--trust` and `-f`):

```bash
agent -p --trust -f "<prompt>"
```

Choose one with `--agent codex` or `--agent cursor`. `ingest:one` and `compile:article` default to Codex when that binary is on `PATH` or at `/home/box/.local/bin/codex`, otherwise Cursor Agent. `ingest:batch` and `ingest:day` default to Cursor Agent. Exit code 2 means the chosen CLI is not installed here. Fetch state is kept. Re-run the same command on the box.

### Retry

```bash
# Fetch failed (status failed). Try the original URL again.
npm run fetch:articles -- --url https://example.com/article --retry-failed
npm run ingest:one -- --digest raw/digests/2026-10-23-frontier-ai.md --url https://example.com/article --retry-failed

# Fetch succeeded, compile or lint did not (status fetched or sourced).
npm run compile:article -- --url https://example.com/article
npm run ingest:one -- --digest raw/digests/2026-10-23-frontier-ai.md --url https://example.com/article

# The digest batch resumes those fetched and sourced articles on its own.
# Status failed stays put until --retry-failed.
npm run ingest:batch -- --digest raw/digests/2026-10-23-frontier-ai.md --retry-failed
npm run ingest:day -- --date 2026-10-23 --retry-failed
```

A filed article is a no-op: pages are not duplicated and the log is not appended. Resuming from `fetched` or `sourced` does not refetch. `--force` on fetch writes a new snapshot file and leaves the previous one in place.
