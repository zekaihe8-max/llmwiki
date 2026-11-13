---
type: Source
title: "Vox · 提前压缩上下文"
title_en: "Vox · Early Context Compression"
description: "在 Claude Code 长对话中提前设置自动压缩点，可降低 Token 使用量。"
description_en: "Set an earlier auto-compact point in Claude Code long conversations to reduce token usage."
resource: https://x.com/Voxyz_ai/status/2120924596178190707
tags: [claude-code, context-compression, token-saving, agents]
sources:
  - id: vox-early-context-compression
    resource: https://x.com/Voxyz_ai/status/2120924596178190707
    title: "Vox · Early Context Compression"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-13T08:23:07+08:00
---

# Vox · 提前压缩上下文

*Vox · Early Context Compression*

「帖文称」Claude Code 如果让一个会话全天打开，每次提问都会重发整段对话，造成用量浪费；以 Fable 5.2、Opus 5.5 等 1M 上下文模型为例，默认约在 967K Token 自动压缩，建议将压缩点设为 400K，使用 /autocompact 400k，设置按模型保存并对后续会话生效，恢复默认则运行 /autocompact auto。[^vox-early-context-compression]

The post says keeping one Claude Code session open all day re-sends the entire conversation with every question, wasting usage; for 1M-context models such as Fable 5.2 and Opus 5.5, auto-compaction defaults to about 967K tokens, so setting the compact point to 400K via /autocompact 400k can noticeably reduce usage. The setting is saved per model and applies to every later session; /autocompact auto restores the default.[^vox-early-context-compression]

## 摘要 / Summary

- 保持一个 Claude Code 会话全天打开，每次提问都会重传整段对话，导致用量浪费。[^vox-early-context-compression]
- Keeping one Claude Code session open all day re-sends the entire conversation with each question, wasting usage.[^vox-early-context-compression]
- Fable 5.2、Opus 5.5 等 1M 上下文模型默认在约 967K Token 时自动压缩。[^vox-early-context-compression]
- 1M-context models such as Fable 5.2 and Opus 5.5 auto-compact at about 967K tokens by default.[^vox-early-context-compression]
- 将压缩点设为 400K（/autocompact 400k）可显著降低用量。[^vox-early-context-compression]
- Setting the compact point to 400K via /autocompact 400k noticeably reduces usage.[^vox-early-context-compression]
- 设置按模型保存，并在之后的每个会话生效；运行 /autocompact auto 可恢复默认。[^vox-early-context-compression]
- The setting is saved per model and applies to every subsequent session; run /autocompact auto to restore the default.[^vox-early-context-compression]

## 相关 / Related

- 原文：[链接](https://x.com/Voxyz_ai/status/2120924596178190707)。 / Original: [link](https://x.com/Voxyz_ai/status/2120924596178190707).
- Topic: [Claude Code 作者与社区话筒 / Claude Code authorship and community voice](../../topics/claude-code-authorship-and-voice.md)
- Topic: [编程 Agent 省 Token 工具与开销 / Coding-agent token-saving tooling and overhead](../../topics/coding-agent-token-saving-tooling.md)
- Topic: [长对话默认压缩低于模型窗口 / Long-conversation default compression below model window](../../topics/long-conversation-default-compression.md)

[^vox-early-context-compression]: Vox · Early Context Compression
