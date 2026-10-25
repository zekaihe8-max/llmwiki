---
type: Overview
title: 概览
title_en: Overview
description: Hezekai wiki 的组织方式与页面角色。
description_en: How the Hezekai wiki is organized and what each path is for.
---

# 概览

*Overview*

Hezekai wiki 是一份编译型知识库。`wiki/` 下的 Markdown 文件是唯一真相来源；发布站点只渲染这些文件，不再另存一份正文。

The Hezekai wiki is a compiled knowledge base. The Markdown files in `wiki/` are the source of truth. The published site renders those files; it does not keep a separate copy of the pages.

## 组织方式 / How it is organized

| Path | 角色 / Role |
| --- | --- |
| `wiki/index.md` | 首页 / Home page |
| `wiki/overview.md` | 本概览 / This overview |
| `wiki/log.md` | 更新时间线 / Chronological record of wiki updates |
| `wiki/concepts/` | 定义与耐久概念 / Definitions and durable ideas |
| `wiki/guides/` | 短操作说明 / Short procedures for working in the wiki |
| `wiki/sources/articles/` | 按文章归档的 Source / Per-article Source pages |
| `wiki/sources/x-digest/` | 来自 X 的每日简报 / Curated daily digests from X |
| `wiki/topics/` | 综合 Source 的 Topic / Topic pages that synthesize those sources |

一个文件夹对应侧栏一节；一个 `.md` 文件对应一页。`index.md` 与 `overview.md` 固定靠前，其余按文件夹再按字母排列。名称以 `_` 开头的文件与文件夹不进站点。

A folder becomes a sidebar section. A `.md` file becomes a page. `index.md` and `overview.md` stay at the top; other pages are grouped by folder and then listed alphabetically. Files and folders whose names start with `_` stay out of the site.

## 写什么 / What belongs here

想法需要单独可读时再成页：概念、决策、步骤，或日后会回查的笔记。用普通 Markdown 链接互指其他 `.md` 文件。

Write a page when the idea should stay readable on its own: a concept, a decision, a procedure, or a note you expect to look up later. Cross-link with ordinary Markdown links to other `.md` files.

路径如何变成 URL 见 [编译页面](./concepts/compiled-pages.md)；如何新增一页见 [添加页面](./guides/adding-a-page.md)。每日 X 简报在 [X 简报](./sources/x-digest/index.md)。方法与维护说明见 [关于与维护](./guides/about-and-maintenance.md)；[日志](./log.md) 记录入库时间。Source / Topic 目录在 [首页完整目录](./index.md)、[主题](./topics/index.md) 与 [文章](./sources/articles/index.md)。

See [Compiled pages](./concepts/compiled-pages.md) for how paths map to URLs, and [Adding a page](./guides/adding-a-page.md) for the file to create. Daily X briefs are in [X digests](./sources/x-digest/index.md). Example Source and Topic pages are cataloged on the [home page](./index.md), and the [log](./log.md) records when they were filed.
