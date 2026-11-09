---
type: Source
title: "Claude Code 自动记忆堆积会让智能体越用越笨，Anthropic 发布“梦境”整理帖"
title_en: "Claude Code auto-memory bloat makes agents dumber over time; Anthropic publishes 'dreaming' cleanup post"
description: "帖文称 Anthropic 发布工程帖，介绍 Claude 如何通过“梦境”精简和纠正自身记忆，并提供可发给 Claude Code 的提示词来清理项目自动内存。"
description_en: "The post says Anthropic published an engineering post on how Claude slims and corrects its own memory via 'dreaming,' and provides a prompt to have Claude Code clean up a project's auto memory."
resource: https://x.com/Voxyz_ai/status/2119414635485130801
tags: [claude-code, agent-memory, anthropic, ai-coding]
sources:
  - id: voxyz-ai-claude-memory-cleanup
    resource: https://x.com/Voxyz_ai/status/2119414635485130801
    title: "Claude Code auto-memory bloat makes agents dumber over time; Anthropic publishes 'dreaming' cleanup post"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-09T08:15:21+08:00
---

# Claude Code 自动记忆堆积会让智能体越用越笨，Anthropic 发布“梦境”整理帖

*Claude Code auto-memory bloat makes agents dumber over time; Anthropic publishes 'dreaming' cleanup post*

帖文称，Anthropic 刚刚发布工程帖，介绍 Claude 如何“梦境”整理所学、纠正错误并更容易找到所需内容。Voxyz_ai 指出，Claude Code 的自动内存默认开启，项目用得越久，记忆里错误或过时的笔记越多，模型在写代码前就会先信赖这些垃圾，导致越用越笨。文中举例：Sonnet 3.7 玩《宝可梦》写了 413 个记忆文件只拿 1 个徽章，而 Fable 5 只写 10 个文件就拿了 4 个徽章。帖文还给出了一段可发给 Claude Code 的提示词，用于审查 MEMORY.md 及记忆文件夹，找出过时、未验证、重复或矛盾的条目，并列出建议删除的记忆及涉及安全权限的变更，但不直接修改文件。[^voxyz-ai-claude-memory-cleanup]

The post says Anthropic just published an engineering post describing how Claude uses 'dreaming' to organize what it has learned, correct mistakes, and retrieve information more easily. Voxyz_ai notes that Claude Code's auto memory is on by default, and the longer it is used on a project, the more wrong or stale notes accumulate, making the model feel dumber because it trusts that junk before writing code. The post cites an example where Sonnet 3.7 played Pokémon and wrote 413 memory files for one badge, while Fable 5 wrote only 10 files for four badges. It also provides a prompt to send to Claude Code to review MEMORY.md and memory-folder files against current code and git history, identify outdated, unverified, repetitive, or contradictory entries, and list recommended deletions and safety/permission changes without modifying files.[^voxyz-ai-claude-memory-cleanup]

## 摘要 / Summary

- Anthropic 发布工程帖，介绍 Claude 如何通过“梦境”组织所学、纠正错误并更易检索信息。 / Anthropic published an engineering post describing how Claude uses 'dreaming' to organize learned content, correct mistakes, and retrieve information more easily.[^voxyz-ai-claude-memory-cleanup]
- Claude Code 自动内存默认开启，项目使用时间越长，错误或过时笔记越多，模型写代码前会先信赖这些内容，导致越用越笨。 / Claude Code auto memory is on by default; the longer it is used on a project, the more wrong or stale notes accumulate, and the model trusts that junk before writing code, making it feel dumber over time.[^voxyz-ai-claude-memory-cleanup]
- 文中举例：Sonnet 3.7 玩《宝可梦》累积 413 个记忆文件仅获 1 个徽章，Fable 5 仅写 10 个文件即获 4 个徽章。 / The post cites an example: Sonnet 3.7 played Pokémon and accumulated 413 memory files for just 1 badge, while Fable 5 wrote only 10 files for 4 badges.[^voxyz-ai-claude-memory-cleanup]
- 帖文提供可发给 Claude Code 的提示词，要求其审查 MEMORY.md 与记忆文件夹，找出可直接从代码读取、过时、未验证、无结论的流水账以及重复或矛盾条目。 / The post provides a prompt to send to Claude Code to review MEMORY.md and memory-folder files, identifying entries readable straight from code, outdated notes, unverified guesses, play-by-play logs without conclusions, and repeating or contradictory entries.[^voxyz-ai-claude-memory-cleanup]
- 提示词要求只列出建议、不修改任何文件，并将待删除记忆与涉及安全或权限的变更单独列出供用户决定。 / The prompt asks for recommendations only, no file changes yet, and lists memories to delete plus safety or permission changes separately for the user to decide.[^voxyz-ai-claude-memory-cleanup]

## 相关 / Related

- 原文：[链接](https://x.com/Voxyz_ai/status/2119414635485130801)。 / Original: [link](https://x.com/Voxyz_ai/status/2119414635485130801).
- Topic: [Vibe Coding 的记忆悖论 / Vibe-coding memory paradox](../../topics/vibe-coding-memory-paradox.md)
- Topic: [Claude Code 作者与社区话筒 / Claude Code authorship and community voice](../../topics/claude-code-authorship-and-voice.md)
- Topic: [Agent 上下文工程 / Context engineering for agents](../../topics/context-engineering-for-agents.md)
- Topic: [项目指令与 Token 效率 / Project instructions and token efficiency](../../topics/agents-md-token-efficiency.md)

[^voxyz-ai-claude-memory-cleanup]: Claude Code auto-memory bloat makes agents dumber over time; Anthropic publishes 'dreaming' cleanup post
