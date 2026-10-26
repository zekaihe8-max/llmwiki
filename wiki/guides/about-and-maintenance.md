---
type: Guide
title: 关于与维护
title_en: About and maintenance
description: 本站方法、来源边界、双语约定与维护入口。
description_en: Method, source boundaries, bilingual conventions, and maintainer entry points.
tags: [about, maintenance]
generated:
  by: cursor-agent/home-reading-url-extract
  at: 2026-10-25T14:50:00+08:00
---

# 关于与维护

*About and maintenance*

Hezekai Wiki 是一份编译型知识库：从每日简报与公开资料中整理 Source，再综合成 Topic。站点只渲染 `wiki/` 下的 Markdown；图谱由页面链接与引用在构建时生成。

Hezekai Wiki is a compiled knowledge base: Sources are filed from daily digests and public writing, then synthesized into Topics. The site renders Markdown under `wiki/` only; the graph is built from page links and citations at build time.

## 方法与边界 / Method and boundaries

- 人类筛选值得入库的材料；agent 按 `AGENTS.md` 写 Source / Topic、更新索引与日志。
- Humans curate what is worth filing; an agent writes Source / Topic pages and updates the index and log per `AGENTS.md`.
- 不把未抓取的原文装作已读；转述帖需尽量链回官方原文，并标明转述关系。
- Do not pretend an unfetched original was read; paraphrase posts should link the official original when possible and state the relay relationship.
- `raw/` 是不可变输入，不属于发布包；页面不得依赖 `raw/` 路径才能读懂。
- `raw/` is immutable input outside the published pack; pages must make sense without `raw/` paths.

## 双语约定 / Bilingual convention

Source 与 Topic 为**同文件双语**（ZH + EN）。

Sources and Topics are **same-file bilingual** (ZH + EN).

- 章节标题常用 `## 中文 / English`。阅读模式可只显示一侧标签。
- Section headings often use `## 中文 / English`. Reading mode may show one side’s label.
- 正文成对：中文段落后接英文对应段；列表项内亦可中英相邻。
- Body pairs: a Chinese paragraph followed by its English counterpart; list items may nest ZH then EN.
- 代码块、公式、脚注、裸 URL、Markdown 链接为共享节点，阅读模式不得隐藏。
- Code blocks, math, footnotes, bare URLs, and Markdown links are shared and must stay visible in reading mode.
- 结构含糊时，阅读模式回退为「对照」（全部显示），不静默删文。
- When structure is ambiguous, reading mode fails open to side-by-side (show all) and never silently drops content.

## 维护入口 / Maintainer entry points

- [概览 / Overview](../overview.md) — 内容组织与路径角色。 / organization and path roles.
- [编译页面 / Compiled pages](../concepts/compiled-pages.md) — Markdown 如何成为发布页。 / how Markdown becomes a published page.
- [添加页面 / Adding a page](./adding-a-page.md) — 新页放哪里。 / where new pages go.
- [日志 / Log](../log.md) — 创建与更新时间线。 / creation and update timeline.
- [X 简报 / X digests](../sources/x-digest/index.md) — 每日简报归档。 / daily digest archive.

本地常用命令：`npm run lint:okf`、`npm run lint:okf:bilingual`、`npm run build`、`npm run ingest:one`。

Common local commands: `npm run lint:okf`, `npm run lint:okf:bilingual`, `npm run build`, `npm run ingest:one`.

## 时间字段 / Time fields

- **原文发表日 / Original publish date**：Source 的 `date`（已知时）。
- **Wiki 更新时间 / Wiki update time**：`generated.at` 或日志条目——入库或修订本页的时间，**不是**原文发表日。
- Never present a new-ingest timestamp as the article’s publish date.
