---
type: Source
title: "Claude Code 代码模式（Code Mode）"
title_en: "Claude Code Code Mode"
description: "Claude Code 的实验性 Code Mode 让 Claude 编写 JavaScript，在一步中发起多个工具调用。"
description_en: "Claude Code's experimental Code Mode lets Claude write JavaScript to make multiple tool calls in one step."
resource: https://code.claude.com/docs/en/code-mode
tags: [claude-code, code-mode, tool-calls, agent]
sources:
  - id: claude-code-code-mode
    resource: https://code.claude.com/docs/en/code-mode
    title: "Claude Code Code Mode"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-18T08:35:29+08:00
---

# Claude Code 代码模式（Code Mode）

*Claude Code Code Mode*

「帖文称」Claude Code 推出名为 Code Mode 的实验性功能，默认关闭，未来版本可能变更或移除。启用后，Claude 会编写 JavaScript 来一次性发起多个工具调用，支持并行执行、使用上一条结果作为下一条输入；对话中只显示工具调用结果，代码可在转录查看器中查看。[^claude-code-code-mode]

Claude Code introduces an experimental feature called Code Mode, off by default and subject to change or removal in future releases. Once enabled, Claude writes JavaScript to make multiple tool calls at once, supporting parallel execution and chaining results between calls; the conversation shows only tool call results, while the code can be viewed in the transcript viewer.[^claude-code-code-mode]

## 摘要 / Summary

- Code Mode 是实验性功能，默认关闭，未来版本可能变更或移除。[^claude-code-code-mode]
- Code Mode is experimental, off by default, and may change or be removed in any release.[^claude-code-code-mode]
- 需要 Claude Code v2.1.323 或更高版本，以及 Claude 订阅或 Console 账号；网关、Bedrock、Google Cloud Agent Platform 等不受支持。[^claude-code-code-mode]
- Requires Claude Code v2.1.323 or later and a Claude subscription or Console account; gateways, Bedrock, Google Cloud Agent Platform, and similar are not supported.[^claude-code-code-mode]
- 代码中的每个工具调用都会经过拒绝和询问权限规则以及 PreToolUse 钩子检查；Auto 模式下由分类器审查代码，而非每个工具调用。[^claude-code-code-mode]
- Each tool call in the code goes through deny and ask permission rules and PreToolUse hooks; in Auto mode, a classifier reviews the code rather than each tool call.[^claude-code-code-mode]
- 不可用功能包括远程控制、Claude 在 Chrome 中、计算机使用；会话不能移至桌面应用或转为后台会话，/fork 也无法启动后台副本。[^claude-code-code-mode]
- Remote Control, Claude in Chrome, and computer use are unavailable; sessions cannot be moved to the Desktop app or turned into background sessions, and /fork cannot start a background copy.[^claude-code-code-mode]

## 相关 / Related

- 原文：[链接](https://code.claude.com/docs/en/code-mode)。 / Original: [link](https://code.claude.com/docs/en/code-mode).
- Topic: [Claude Code 作者与社区话筒 / Claude Code authorship and community voice](../../topics/claude-code-authorship-and-voice.md)
- Topic: [智能体自动模式 / Agent auto mode](../../topics/agent-auto-mode.md)
- Topic: [编程 Agent 体验与额度 / Coding agent UX vs quota](../../topics/coding-agent-ux-vs-quota.md)
- Topic: [Computer Use / Computer Use](../../topics/computer-use.md)

[^claude-code-code-mode]: Claude Code Code Mode
