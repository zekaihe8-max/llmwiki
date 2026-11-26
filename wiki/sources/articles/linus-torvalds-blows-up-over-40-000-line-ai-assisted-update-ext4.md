---
type: Source
title: "Linus 因 4 万多行 AI 更新发飙，ext4 维护者 Ted 遭公开斥责"
title_en: "Linus Torvalds blows up over 40,000+ line AI-assisted update, ext4 maintainer Ted publicly scolded"
description: "Linus 因临近 Linux 7.4 发版前合入大量 AI 生成的 ext4 代码与测试而怒斥维护者，强调修 bug 不得引入新 bug。"
description_en: "Linus Torvalds blasted an ext4 maintainer for merging 40,000+ lines of AI-assisted changes and tests near the Linux 7.4 release, warning that bug fixes must not introduce new bugs."
resource: https://x.com/lxfater/status/2125799520080433497
tags: [linux-kernel, ai-code, code-review, ext4]
sources:
  - id: linus-ai-update-ext4
    resource: https://x.com/lxfater/status/2125799520080433497
    title: "Linus Torvalds blows up over 40,000+ line AI-assisted update, ext4 maintainer Ted publicly scolded"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-26T20:13:42+08:00
---

# Linus 因 4 万多行 AI 更新发飙，ext4 维护者 Ted 遭公开斥责

*Linus Torvalds blows up over 40,000+ line AI-assisted update, ext4 maintainer Ted publicly scolded*

帖文称，Linux 之父 Linus 因 ext4 资深维护者 Ted 在 Linux 7.4 临近发版前一次性提交 41197 行新增代码而发飙，这些代码包含大批 AI 撰写的 bug 修复以及 3 万多行验证用测试代码。Linus 在邮件中全大写开喷，直言不要以为人类或 AI 修 bug 就不会引入新 bug，并认为为修长期未被发现的冷门 bug 动核心代码反而更容易埋雷。他本来想直接撤回，此次勉强合入，并警告下次再这样会直接无视，要求大改动和测试放单独分支、等下个版本再合。[^linus-ai-update-ext4]

The post says Linus Torvalds blew up after senior ext4 maintainer Ted submitted 41,197 new lines of code near the Linux 7.4 release, including many AI-written bug fixes and over 30,000 lines of test code. Linus wrote in all caps, warning that neither humans nor AI should be assumed to fix bugs without introducing new ones, and argued that touching core code for long-undiscovered obscure bugs is more likely to bury risks. He originally wanted to revert the merge but reluctantly accepted this time, warning that next time he will ignore such submissions outright, and asking that large changes and tests go to separate branches for the next version.[^linus-ai-update-ext4]

## 摘要 / Summary

- 帖文称，Linux 7.4 临近发版时，ext4 资深维护者 Ted 一次性提交 41197 行新增代码，其中包含大量 AI 撰写的 bug 修复和 3 万多行测试代码。[^linus-ai-update-ext4]
- The post says that near the Linux 7.4 release, senior ext4 maintainer Ted submitted 41,197 new lines of code at once, including many AI-written bug fixes and over 30,000 lines of test code.[^linus-ai-update-ext4]
- Linus 在邮件中全大写开喷，直言不要以为人类或 AI 修 bug 就不会引入新 bug。[^linus-ai-update-ext4]
- Linus wrote in all caps in the email, stating plainly that neither humans nor AI should be assumed to fix bugs without introducing new ones.[^linus-ai-update-ext4]
- Linus 认为这些长期未被发现的 bug 属于偏冷门问题，为修它们而动核心代码，新补丁反而更容易埋雷。[^linus-ai-update-ext4]
- Linus argued that these long-undiscovered bugs are obscure corner cases, and touching core code to fix them makes new patches more likely to bury risks.[^linus-ai-update-ext4]
- Linus 本来想直接撤回该合入，此次勉强接受，并警告下次再这样会直接无视，要求大改动和测试放单独分支、下个版本再合。[^linus-ai-update-ext4]
- Linus originally wanted to revert the merge but reluctantly accepted this time, warning that next time he will ignore such submissions outright, and asking that large changes and tests go to separate branches for the next version.[^linus-ai-update-ext4]

## 相关 / Related

- 原文：[链接](https://x.com/lxfater/status/2125799520080433497)。 / Original: [link](https://x.com/lxfater/status/2125799520080433497).
- Topic: [AI 代码与屎山上线双标 / AI code vs messy-code shipping double standard](../../topics/ai-code-vs-messy-code-double-standard.md)
- Topic: [智能体规模化工程 / Agent-scaled engineering](../../topics/agent-scaled-engineering.md)
- Topic: [Vibe Coding 的记忆悖论 / Vibe-coding memory paradox](../../topics/vibe-coding-memory-paradox.md)
- Topic: [LLM 形式化验证 / LLM formal verification](../../topics/llm-formal-verification.md)

[^linus-ai-update-ext4]: Linus Torvalds blows up over 40,000+ line AI-assisted update, ext4 maintainer Ted publicly scolded
