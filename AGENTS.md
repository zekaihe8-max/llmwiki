# Wiki schema (Source and Topic)

This file is the schema for agents that maintain the Hezekai wiki. It lives at the repo root, **outside** the OKF bundle. The bundle is `wiki/`. Page shape follows [Open Knowledge Format v0.2](https://github.com/GoogleCloudPlatform/open-knowledge-format/blob/main/SPEC.md).

MVP scope is Source pages and Topic pages only. Do not fetch digests, crawl articles, add routines, or deploy from this schema.

## Who writes what

- The agent writes and updates `wiki/`. Humans curate what is worth filing.
- `raw/` is immutable input for a future pipeline. The agent may read it and must not edit, reformat, or delete files under `raw/digests/` or `raw/articles/`. Status notes, when they exist, belong in `raw/state/` only. See `raw/README.md`.
- Do not cite `raw/` from a wiki page. The bundle has to stand on its own.

## Layout

| Path | Role |
| --- | --- |
| `wiki/` | OKF bundle root. `index.md` may set `okf_version`. |
| `wiki/sources/articles/{slug}.md` | One Source page per article. |
| `wiki/sources/x-digest/` | Existing daily X briefs. Leave them in place. Do not add article sources here. |
| `wiki/topics/{slug}.md` | One Topic page per durable idea. |
| `wiki/index.md` | Catalog. Update the entry when a page is created or its summary changes. |
| `wiki/log.md` | Chronological log. Append; do not rewrite older entries. |
| `wiki/_templates/` | Copy-ready Source and Topic skeletons. Names starting with `_` are excluded from the VitePress build and the sidebar. |
| `raw/` | Outside the bundle. Not part of the published site. |

`index.md` and `log.md` are reserved OKF names. Do not use them as the filename of a Source or Topic.

## Naming

- Slugs are lowercase words separated by hyphens: `karpathy-llm-wiki`, `workflows-before-agents`.
- A Source slug names the work, not the day it was filed.
- A Topic slug names the idea. Prefer updating `wiki/topics/{slug}.md` over creating a second page for the same idea.
- Before creating a Topic, read `wiki/index.md` and `wiki/topics/` and reuse an existing page when the idea is already there.

## Language

Source and Topic pages **default to Chinese** for `title`, `description`, and body sections (Summary, Synthesis, and the rest).

- Keep proper nouns, product names, APIs, and `resource` URLs in English when that is how they are known.
- Use whole-page English or mixed EN/ZH **only when** the material is highly technical and Chinese would clearly hurt meaning. Do not default to full-English pages.

## Page structure

Every Source and Topic is UTF-8 markdown. YAML frontmatter comes first, then a body whose single `#` heading matches `title`.

`type` is required. Use `Source` or `Topic`. Recommended fields: `title`, `description` (one sentence), `tags`, and `resource` when the page is about a concrete asset. `resource` on a Source is the canonical URL of the article. A Topic that describes an idea may omit `resource`.

`generated` is a mapping, never a bare string or a lone date:

```yaml
generated:
  by: example-agent/scaffold
  at: 2026-10-24T10:49:00+08:00
```

- `generated.by` is required when `generated` is present. Use `name/model` for an agent, `human:<name>` for a person, or `process:<name>` for a job.
- `generated.at` is an ISO 8601 datetime with an explicit UTC offset (`Z` or `+08:00`). Set it to the last meaningful content change.
- `date` (optional, `YYYY-MM-DD`) is a local extension for filtering. On a Source it is the publication date when that date is known. It does not replace `generated.at`.

`sources` is provenance. Each entry needs `resource`. Use an absolute `https` URL, or a bundle-relative path that stays inside `wiki/` (for example `/sources/articles/karpathy-llm-wiki.md`). Do not put a `raw/` path, an absolute filesystem path, or any other out-of-pack location in `resource`. Add `id` when the body cites that entry. `id` is a stable token (`[a-z0-9-]+`), not a list index.

Copy `wiki/_templates/source.md` or `wiki/_templates/topic.md` and replace the placeholders.

## Citations and links

- Attribute a claim with a markdown footnote whose label equals `sources[].id`. The footnote text is a short title, not a path.
- Also link the original article URL, an in-wiki page, or both, with a normal markdown link.
- Wiki links are relative and keep the `.md` suffix, which is what this VitePress site and `scripts/build-graph.mjs` resolve. Example: `[LLM-maintained wiki](../../topics/llm-maintained-wiki.md)`.
- Do not link to `raw/`, and do not require a `raw/` file for a page to make sense.

## Contradictions

Every Topic has a `## Contradictions` section. If nothing disagrees, write `None yet.`

When sources disagree, or a later source changes an earlier claim, record both under that heading. Name the sources, say what each claims, and do not delete the older claim to hide the split. Link the Source pages. Put viewpoint changes in this same section.

## Incremental updates

On ingest of one article:

1. Write one Source page at `wiki/sources/articles/{slug}.md`. One article, one Source. Do not merge a second article into an existing Source.
2. Update each Topic the article bears on. Extend the existing page, including `## Contradictions` when the new claim conflicts with what is already there. Create a Topic only when no current page owns the idea.
3. Set `generated.at` on every page whose body changed.
4. Update the matching bullets in `wiki/index.md` so each bullet still carries the page's `description`.
5. Append `wiki/log.md` (see below). Do not edit older log days.
6. Leave `wiki/sources/x-digest/` unchanged unless the task is specifically about those briefs.

Do not add pages under `wiki/_templates/`. Those files are skeletons.

## Index and log

`wiki/index.md` is the catalog. Keep the existing sections. Add Source and Topic bullets under a heading that names what they are, each as a link plus the page's one-sentence `description`. The root index may keep the VitePress `title` field next to `okf_version`; the sidebar reads `title`.

`wiki/log.md` has no frontmatter. Newest day first. Date headings are `## YYYY-MM-DD`. Under the day, use a bullet whose first words are a bold label: `Creation`, `Update`, or `Deprecation`. Mention the pages touched and link them.

```markdown
## 2026-10-24

* **Creation**: Filed the [LLM Wiki](./sources/articles/karpathy-llm-wiki.md) source and updated [LLM-maintained wiki](./topics/llm-maintained-wiki.md).
```

## Out of scope

Scheduled routines, deploy, and graph-viewer changes are not part of this schema. One URL is `npm run ingest:one`. A whole digest is `npm run ingest:batch` (and `npm run ingest:day` for that day's files). See `raw/README.md`. The agent that files a page still follows this schema and does not edit `raw/`.
