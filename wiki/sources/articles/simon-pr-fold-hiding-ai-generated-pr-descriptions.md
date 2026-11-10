---
type: Source
title: "Simon · PR 折叠：隐藏 AI 生成的 PR 描述"
title_en: "Simon · PR Fold: Hiding AI-Generated PR Descriptions"
description: "Simon Willison 建议在 GitHub 中用 `<details><summary>` 折叠 AI 生成的 PR 描述，以降低阅读 AI 生成 PR 滥竽充数内容的疲劳感。"
description_en: "Simon Willison suggests collapsing AI-generated GitHub PR descriptions behind `<details><summary>` to reduce fatigue from reading PR slop."
resource: https://x.com/simonw/status/2119650353142747181
tags: [ai-pr, github, pr-slop, details-summary]
sources:
  - id: simon-pr-fold
    resource: https://x.com/simonw/status/2119650353142747181
    title: "Simon · PR Fold: Hiding AI-Generated PR Descriptions"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-10T08:29:03+08:00
---

# Simon · PR 折叠：隐藏 AI 生成的 PR 描述

*Simon · PR Fold: Hiding AI-Generated PR Descriptions*

Simon Willison 在 X 上发帖称，他最近开始把大部分 AI 生成的 GitHub PR 描述藏在 GitHub Markdown 支持的 `<details><summary>` 折叠标签后，认为这能让 PR 滥竽充数（slop）稍微不那么令人疲惫。帖文还提到，他项目中大部分变更现在以 Claude Code 或 Codex 开启的 PR 形式出现。[^simon-pr-fold]

Simon Willison posted on X that he recently started hiding most AI-generated GitHub PR descriptions behind collapsible `<details><summary>` HTML tags supported by GitHub Markdown, calling it a useful pattern to make PR slop less exhausting. The post also notes that most changes to his projects now arrive as PRs opened by Claude Code or Codex.[^simon-pr-fold]

## 摘要 / Summary

- 发帖人为 Simon Willison (@simonw)，发布于 X，帖文显示时间为 2026 年 11 月 9 日 4:36。 / Author is Simon Willison (@simonw), posted on X; the post shows a time of 4:36 AM on Nov 9, 2026.[^simon-pr-fold]
- 他将 AI 生成的 GitHub PR 描述放入 `<details><summary>` HTML 标签中折叠，GitHub Markdown 支持该写法。 / He places AI-generated GitHub PR descriptions inside collapsible `<details><summary>` HTML tags, which GitHub Markdown supports.[^simon-pr-fold]
- 帖文称这样做能让 PR slop（滥竽充数内容）稍微不那么令人疲惫。 / The post says this makes PR slop somewhat less exhausting.[^simon-pr-fold]
- 他提到的相关博客文章发布在 simonwillison.net，标题片段为 Hide your slop PR descriptions behind...。 / The linked blog post on simonwillison.net is titled Hide your slop PR descriptions behind...[^simon-pr-fold]
- 帖文称他项目中大部分变更以 Claude Code 或 Codex 为作者开启的 PR 形式出现。 / The post states that most changes to his projects now come as PRs opened by Claude Code or Codex.[^simon-pr-fold]
- 帖文显示约 129.5K 次浏览、382 条回复，以及 1.8K 和 1.2K 等互动数字。 / The post shows approximately 129.5K views, 382 replies, and interaction counts of 1.8K and 1.2K.[^simon-pr-fold]

## 相关 / Related

- 原文：[链接](https://x.com/simonw/status/2119650353142747181)。 / Original: [link](https://x.com/simonw/status/2119650353142747181).
- Topic: [AI 代码与屎山上线双标 / AI code vs messy-code shipping double standard](../../topics/ai-code-vs-messy-code-double-standard.md)
- Topic: [约束重构 PR 的确定性自动合入 / Deterministic automerge for constrained refactor PRs](../../topics/deterministic-refactor-automerge.md)
- Topic: [Claude Code 作者与社区话筒 / Claude Code authorship and community voice](../../topics/claude-code-authorship-and-voice.md)
- Topic: [UX、DX 与 AX / UX, DX, and AX](../../topics/ux-dx-and-ax.md)

[^simon-pr-fold]: Simon · PR Fold: Hiding AI-Generated PR Descriptions
