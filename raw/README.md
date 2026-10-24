# raw/

Immutable inputs for a future ingest pipeline. This directory is outside the OKF bundle (`wiki/`). Wiki pages must not link here.

Nothing has been fetched. `digests/`, `articles/`, and `state/` exist so a later pipeline has a place to write. They are empty aside from `.gitkeep`.

## Immutability

- Files under `digests/` and `articles/` are write-once. After a file is written, do not edit, reformat, or delete it.
- The agent that maintains `wiki/` may read these files and must not change them.
- A correction or a second fetch is a new file. The earlier file stays as it was written.
- `state/` is the only mutable area. It records processing status for the pipeline. It does not hold a second copy of an article body.

## Layout

| Path | Contents |
| --- | --- |
| `raw/digests/` | One file per digest drop, as received |
| `raw/articles/` | One file per fetched article, as received |
| `raw/state/` | One status record per article slug |

## Status machine

A future pipeline keeps one record at `raw/state/{slug}.json`. This scaffold does not write those records. Status moves only along these edges:

```text
seen → fetched → sourced → filed
```

Side exits:

| Edge | When |
| --- | --- |
| `seen` → `failed` | The fetch produced no body. |
| `fetched` → `failed` | A body exists, but it could not be summarized. The article file stays. |
| `fetched` → `skipped` | The body is kept and no Source page is warranted. |
| `failed` → `seen` | A retry is queued. The record keeps the failed attempt. A later success writes a new article file and does not edit the previous one. |

| Status | Meaning |
| --- | --- |
| `seen` | Named in a digest or queue. No article file yet. |
| `fetched` | `raw/articles/{slug}` has been written and is frozen. |
| `sourced` | `wiki/sources/articles/{slug}.md` exists. |
| `filed` | The Topic pages, `wiki/index.md`, and `wiki/log.md` reflect this source. Terminal for this ingest. |
| `skipped` | Terminal. Raw body kept. No Source page. |
| `failed` | Terminal until a retry returns the record to `seen`. |

A later article that changes a Topic does not move an earlier record backward. That later article is its own ingest.
