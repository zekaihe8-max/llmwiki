---
type: Source
title: "Vox · 删注释"
title_en: "Vox · Delete Comments"
description: "建议在 AI 代理使用的代码库中删除大部分注释，防止代理把过时注释和临时变通当作可复制模式。"
description_en: "Recommend deleting most comments in codebases used by AI agents to prevent them from copying stale comments and temporary workarounds as patterns."
resource: https://x.com/Voxyz_ai/status/2120984983330578472
tags: [agents, code-comments, codebase-hygiene]
sources:
  - id: vox-delete-comments
    resource: https://x.com/Voxyz_ai/status/2120984983330578472
    title: "Vox · Delete Comments"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-13T08:20:40+08:00
---

# Vox · 删注释

*Vox · Delete Comments*

帖文称，应在 AI 代理使用的代码库中删除大部分注释，因为代理倾向于复制已有注释，并可能把临时变通误读为可接受的做法，最终导致代码库充斥被复制的 hack 和过时注释。帖文建议将提示发送给 Claude Code 或 Codex，识别可删除的无用注释，保留如解释浏览器怪癖等应存在的注释，并给出哪些变通适合重构、哪些可直接删除的高层计划。[^vox-delete-comments]

The post recommends deleting most comments in codebases that AI agents work in, arguing that agents copy existing comments and may treat temporary workarounds as acceptable practice, eventually filling the codebase with copied hacks and stale comments. It suggests sending a prompt to Claude Code or Codex to identify prunable comments, keep ones that should exist such as those explaining browser quirks, and return a high-level plan of which workarounds are best solved by refactoring versus which can be deleted outright.[^vox-delete-comments]

## 摘要 / Summary

- 帖文作者为 Vox (@Voxyz_ai)，发布于 2026 年 11 月 12 日 21:00。[^vox-delete-comments]
- The post is by Vox (@Voxyz_ai), published at 9:00 PM on November 12, 2026.[^vox-delete-comments]
- 帖文建议在代理使用的代码库中删除大部分注释。[^vox-delete-comments]
- The post recommends deleting most comments in codebases used by agents.[^vox-delete-comments]
- 帖文称代理会复制代码库中已有注释，并可能把临时变通当作可接受模式。[^vox-delete-comments]
- The post says agents copy existing comments in the codebase and may treat temporary workarounds as acceptable patterns.[^vox-delete-comments]
- 帖文提供可发送给 Claude Code 或 Codex 的提示，用于识别可删除的无用注释。[^vox-delete-comments]
- The post provides a prompt to send to Claude Code or Codex to identify useless comments that can be pruned.[^vox-delete-comments]
- 帖文建议保留实际应存在的注释，例如解释浏览器怪癖的注释。[^vox-delete-comments]
- The post suggests keeping comments that should exist, such as those explaining browser quirks.[^vox-delete-comments]
- 帖文建议区分哪些变通方案适合重构、哪些可直接删除。[^vox-delete-comments]
- The post suggests distinguishing which workarounds are best solved by refactoring versus which can be deleted outright.[^vox-delete-comments]

## 相关 / Related

- 原文：[链接](https://x.com/Voxyz_ai/status/2120984983330578472)。 / Original: [link](https://x.com/Voxyz_ai/status/2120984983330578472).
- Topic: [智能体规模化工程 / Agent-scaled engineering](../../topics/agent-scaled-engineering.md)
- Topic: [Agent 上下文工程 / Context engineering for agents](../../topics/context-engineering-for-agents.md)
- Topic: [项目指令与 Token 效率 / Project instructions and token efficiency](../../topics/agents-md-token-efficiency.md)
- Topic: [AI 代码与屎山上线双标 / AI code vs messy-code shipping double standard](../../topics/ai-code-vs-messy-code-double-standard.md)

[^vox-delete-comments]: Vox · Delete Comments
