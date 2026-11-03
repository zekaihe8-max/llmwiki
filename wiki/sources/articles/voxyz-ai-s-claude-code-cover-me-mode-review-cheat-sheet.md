---
type: Source
title: "Voxyz_ai 的 Claude Code “cover-me mode” 评审速查表"
title_en: "Voxyz_ai's Claude Code “cover-me mode” review cheat sheet"
description: "帖文介绍了一种 Claude Code 输出风格，在发货前生成包含五部分的代码变更评审速查表。"
description_en: "The post introduces a Claude Code output style that generates a five-part code-change review cheat sheet before shipping."
resource: https://x.com/Voxyz_ai/status/2117230188282966392
tags: [claude-code, output-style, code-review, ai-coding]
sources:
  - id: voxyz-cover-me-mode
    resource: https://x.com/Voxyz_ai/status/2117230188282966392
    title: "Voxyz_ai's Claude Code “cover-me mode” review cheat sheet"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-03T08:10:36+08:00
---

# Voxyz_ai 的 Claude Code “cover-me mode” 评审速查表

*Voxyz_ai's Claude Code “cover-me mode” review cheat sheet*

「帖文称」Voxyz_ai 在 X 上发布了一种名为 cover-me mode 的 Claude Code 输出风格：平时编码时保持关闭，发货前切换到该风格并要求模型“walk me through this change”，即可在用户面前生成评审速查表，完成后用 /output-style default 切回默认；该风格需保存为 ~/.claude/output-styles/cover-me.md 并重启一次后生效。[^voxyz-cover-me-mode]

「The post says」Voxyz_ai posted on X a Claude Code output style called cover-me mode: it stays off while coding, and before shipping he switches to it and asks the model to “walk me through this change,” producing a review cheat sheet; after finishing, /output-style default switches it back. The style must be saved as ~/.claude/output-styles/cover-me.md and takes effect after one restart.[^voxyz-cover-me-mode]

## 摘要 / Summary

- 「帖文称」发货前输入 /output-style cover-me，并问“walk me through this change”，即可得到用于评审的速查表。 / 「The post says」typing /output-style cover-me before shipping and asking “walk me through this change” yields a review cheat sheet.[^voxyz-cover-me-mode]
- 该风格文件需保存为 ~/.claude/output-styles/cover-me.md，重启一次后生效，再用 /output-style default 切回默认。 / The style file is saved as ~/.claude/output-styles/cover-me.md, takes effect after one restart, and /output-style default switches it back.[^voxyz-cover-me-mode]
- 速查表要求五部分，按顺序为：Flow（最多八框 ASCII 图）、Changes（每文件一句 ASD-STE100 简化技术英语）、Risk、Not tested、Review question。 / The cheat sheet requires five parts in order: Flow (max eight-box ASCII diagram), Changes (one ASD-STE100 simplified technical English sentence per file), Risk, Not tested, Review question.[^voxyz-cover-me-mode]
- 帖文还提到 /output-style learning 可用于练习编码，会保留关键代码行供用户自行编写。 / The post also mentions /output-style learning for coding practice, leaving key lines for the user to write.[^voxyz-cover-me-mode]
- 该帖发布于 2026 年 11 月 2 日 12:19，显示获得 4,061 次浏览、19 条回复、2 次转发、62 次点赞、67 次收藏。 / The post was published on Nov 2, 2026 at 12:19 and shows 4,061 views, 19 replies, 2 reposts, 62 likes, and 67 bookmarks.[^voxyz-cover-me-mode]

## 相关 / Related

- 原文：[链接](https://x.com/Voxyz_ai/status/2117230188282966392)。 / Original: [link](https://x.com/Voxyz_ai/status/2117230188282966392).
- Topic: [Claude Code 作者与社区话筒 / Claude Code authorship and community voice](../../topics/claude-code-authorship-and-voice.md)
- Topic: [Agent Skill 编写 / Agent skill authoring](../../topics/agent-skill-authoring.md)
- Topic: [约束重构 PR 的确定性自动合入 / Deterministic automerge for constrained refactor PRs](../../topics/deterministic-refactor-automerge.md)
- Topic: [智能体自动模式 / Agent auto mode](../../topics/agent-auto-mode.md)

[^voxyz-cover-me-mode]: Voxyz_ai's Claude Code “cover-me mode” review cheat sheet
