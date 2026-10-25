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
| `wiki/` | OKF bundle root. Root `index.md` may set only `okf_version`. |
| `wiki/sources/articles/{slug}.md` | One Source page per article. |
| `wiki/sources/x-digest/` | Existing daily X briefs. Leave them in place. Do not add article sources here. Subdir `index.md` has no frontmatter. |
| `wiki/topics/{slug}.md` | One Topic page per durable idea. |
| `wiki/index.md` | Catalog. Update the entry when a page is created or its summary changes. |
| `wiki/log.md` | Chronological log. Append; do not rewrite older entries. |
| `templates/` | Copy-ready Source and Topic skeletons at the **repo root** (outside the OKF pack). Do not put templates under `wiki/`. |
| `raw/` | Outside the bundle. Not part of the published site. |

`index.md` and `log.md` are reserved OKF names. Do not use them as the filename of a Source or Topic.

Legitimate custom `type` values used in this pack besides `Source` / `Topic`: `Overview`, `Concept`, `Guide`, `Graph`, plus digest day types such as `frontier-ai` / `cn-x`.

## Naming

- Slugs are lowercase words separated by hyphens: `karpathy-llm-wiki`, `workflows-before-agents`.
- A Source slug names the work, not the day it was filed.
- A Topic slug names the idea. Prefer updating `wiki/topics/{slug}.md` over creating a second page for the same idea.
- Before creating a Topic, read `wiki/index.md` and `wiki/topics/` and reuse an existing page when the idea is already there.

## Language

Source and Topic pages are **same-file bilingual** (ZH + EN in one file). Do not create a second page tree or alternate slugs for translation.

Required project extensions (not OKF core fields):

- `title` — Chinese title
- `title_en` — English title
- `description` — one-sentence Chinese summary
- `description_en` — one-sentence English summary

Body pattern:

- One `#` heading matching `title`, then an italic English title line `*English Title*`
- Section headings: `## 摘要 / Summary`, `## 综合分析 / Synthesis` (topics), `## 矛盾与变化 / Contradictions` (topics), `## 相关 / Related`
- Paragraphs and bullets as ZH then EN pairs (or clearly interleaved). Shared `sources[].id` and footnotes across both languages.
- Keep proper nouns, product names, APIs, commands, and `resource` URLs in the form they are known.
- Direct quotes: keep the original and add a translation.
- Do not invent facts; translate existing claims faithfully.
- On re-ingest of unchanged content, never append a duplicate translation block.

**Reading-mode pairing (site UI):** The VitePress theme may show 中文 / English / 对照. It expects the convention above (bilingual `##` labels; ZH block then EN counterpart). Code fences, math, footnotes, bare URLs, and markdown links stay visible. Uneven pages fail open to 对照 — the toggle must not silently delete content. Documented for visitors on `wiki/guides/about-and-maintenance.md`.

`npm run lint:okf` checks OKF + project structure. Bilingual completeness is a separate project check: `npm run lint:okf -- --bilingual`.

## Page structure

Every Source and Topic is UTF-8 markdown. YAML frontmatter comes first, then a body whose single `#` heading matches `title`.

`type` is required. Use `Source` or `Topic`. Recommended fields: `title`, `title_en`, `description`, `description_en`, `tags`, and `resource` when the page is about a concrete asset. `resource` on a Source is the canonical URL of the article. A Topic that describes an idea may omit `resource`.

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

Copy `templates/source.md` or `templates/topic.md` and replace the placeholders.

## Citations and links

- Attribute a claim with a markdown footnote whose label equals `sources[].id`. The footnote text is a short title, not a path.
- Also link the original article URL, an in-wiki page, or both, with a normal markdown link.
- Wiki links are relative and keep the `.md` suffix, which is what this VitePress site and `scripts/build-graph.mjs` resolve. Example: `[LLM-maintained wiki](../../topics/llm-maintained-wiki.md)`.
- Do not link to `raw/`, and do not require a `raw/` file for a page to make sense.

## Contradictions

Every Topic has a `## 矛盾与变化 / Contradictions` section (English-only `## Contradictions` is accepted by structural lint during migration). If nothing disagrees, write `暂无。 / None yet.`

When sources disagree, or a later source changes an earlier claim, record both under that heading in both languages. Name the sources, say what each claims, and do not delete the older claim to hide the split. Link the Source pages. Put viewpoint changes in this same section.

## Incremental updates

On ingest of one article:

1. Write one Source page at `wiki/sources/articles/{slug}.md`. One article, one Source. Do not merge a second article into an existing Source. Use the bilingual template.
2. **Topic integration (required):** Before writing Topics, read `wiki/index.md` and `wiki/topics/`. Prefer reusing existing Topics. One article may update many Topics. Create a new Topic only when no current page can carry the concept. When updating: integrate evidence, conclusions, applicability boundaries, and contradictions — do **not** mechanically append a per-article summary. Leaving an existing Topic unchanged is allowed when you have a clear reason (record it). Keep both ZH and EN, including `## 矛盾与变化 / Contradictions` when the new claim conflicts with what is already there.
3. Set `generated.at` on every page whose body changed. Set `generated.by` to the agent that rewrote the content. Unchanged pages keep their previous `generated.*`.
4. Update the matching bullets in `wiki/index.md` so each bullet still carries bilingual titles/descriptions as appropriate.
5. Append `wiki/log.md` only when this Source filename is not already mentioned for a meaningful update (re-runs must not add duplicate noise). Do not edit older log days. A later version of the same Source may add a new log line.
6. Leave `wiki/sources/x-digest/` unchanged unless the task is specifically about those briefs.
7. After filing, the compile script writes a structured ingest record under `raw/state/ingest-records/` (outside the OKF pack / static site). Do not invent those files by hand unless asked.

Do not add pages under `templates/` except by editing the skeletons themselves. Do not put templates under `wiki/`.

## Index and log

`wiki/index.md` is the catalog. Root frontmatter may contain **only** `okf_version`. Put the site title in the body H1. Keep the existing sections. Add Source and Topic bullets under a heading that names what they are, each as a link plus bilingual one-sentence summaries when the page has both.

`wiki/log.md` has no frontmatter. Newest day first. Date headings are `## YYYY-MM-DD`. Under the day, use a bullet whose first words are a bold bilingual label: `创建 / Creation`, `更新 / Update`, or `废弃 / Deprecation`. Mention the pages touched and link them.

```markdown
## 2026-10-24

* **创建 / Creation**: Filed the [LLM Wiki](./sources/articles/karpathy-llm-wiki.md) source and updated [LLM-maintained wiki](./topics/llm-maintained-wiki.md).
```

## Out of scope

Scheduled routines, deploy, and graph-viewer changes are not part of this schema. One URL is `npm run ingest:one`. A whole digest is `npm run ingest:batch` (and `npm run ingest:day` for that day's files). See `raw/README.md`. The agent that files a page still follows this schema and does not edit `raw/`.
