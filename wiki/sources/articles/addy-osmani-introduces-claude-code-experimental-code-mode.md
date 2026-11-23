---
type: Source
title: "Addy Osmani 介绍 Claude Code 实验性「代码模式」"
title_en: "Addy Osmani Introduces Claude Code Experimental Code Mode"
description: "Addy Osmani 介绍 Claude Code 的实验性 Code Mode，通过 JavaScript 脚本并行执行多步工具调用，提升速度并节省上下文。"
description_en: "Addy Osmani introduces Claude Code's experimental Code Mode, using JavaScript scripts to run multi-step tool calls in parallel to improve speed and save context."
resource: https://x.com/addyosmani/status/2124229492248019362
tags: [claude-code, code-mode, ai-coding-agents, context-efficiency]
sources:
  - id: addy-osmani-claude-code-code-mode
    resource: https://x.com/addyosmani/status/2124229492248019362
    title: "Addy Osmani Introduces Claude Code Experimental Code Mode"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-23T08:21:53+08:00
---

# Addy Osmani 介绍 Claude Code 实验性「代码模式」

*Addy Osmani Introduces Claude Code Experimental Code Mode*

「帖文称」，Claude Code 推出实验性 Code Mode，让 Claude 能够编写并运行 JavaScript 脚本，一次性编排多步工具调用，从而提升速度并降低上下文开销；用户可通过环境变量 CLAUDE_CODE_EXPERIMENTAL_CODE_MODE=1 开启，后台脚本最长可运行两小时，并通过 /tasks 命令管理。[^addy-osmani-claude-code-code-mode]

The post says Claude Code has launched an experimental Code Mode that lets Claude write and run JavaScript scripts to orchestrate multi-step tool calls in a single pass, improving speed and reducing context overhead; users can enable it with CLAUDE_CODE_EXPERIMENTAL_CODE_MODE=1, run background scripts for up to two hours, and manage them via the /tasks command.[^addy-osmani-claude-code-code-mode]

## 摘要 / Summary

- Code Mode 让 Claude 编写 JavaScript 脚本，在单次传递中运行多个命令并行，而非逐个调用工具并等待结果。[^addy-osmani-claude-code-code-mode]
- Code Mode lets Claude write JavaScript scripts to run multiple commands in parallel in a single pass, rather than calling tools one at a time and waiting for results.[^addy-osmani-claude-code-code-mode]
- 该模式可将大量原始搜索数据或跨数十个文件的重构等任务以编程方式编排，降低上下文占用。[^addy-osmani-claude-code-code-mode]
- It programmatically orchestrates tasks such as large raw search data or refactoring across dozens of files, reducing context usage.[^addy-osmani-claude-code-code-mode]
- 用户仍可用自然语言提示与 Claude 交互，并可按 Ctrl+O 在转录查看器中展开折叠的代码行。[^addy-osmani-claude-code-code-mode]
- Users can still interact with Claude via natural prompts and press Ctrl+O to expand collapsed code rows in the transcript viewer.[^addy-osmani-claude-code-code-mode]
- 长时间运行的操作（如测试套件或复杂构建）可作为后台进程运行，最长两小时，并通过 /tasks 命令实现透明度与控制。[^addy-osmani-claude-code-code-mode]
- Long-running operations such as test suites or complex builds can run as background processes for up to two hours, with transparency and control via the /tasks command.[^addy-osmani-claude-code-code-mode]
- 脚本内的每次工具调用仍受当前拒绝/询问权限策略、沙箱约束和 PreToolUse 钩子约束，钩子甚至可检查 REPL 生成的 JavaScript 或 redact 敏感令牌。[^addy-osmani-claude-code-code-mode]
- Every tool call inside a script remains governed by deny/ask permission policies, sandbox constraints, and PreToolUse hooks, which can inspect REPL-generated JavaScript or redact sensitive tokens.[^addy-osmani-claude-code-code-mode]
- 开启方式是在会话前设置 CLAUDE_CODE_EXPERIMENTAL_CODE_MODE=1，或将其写入 ~/.claude/settings.json；该功能为实验性，团队正在迭代。[^addy-osmani-claude-code-code-mode]
- Enable it by setting CLAUDE_CODE_EXPERIMENTAL_CODE_MODE=1 before a session or adding it to ~/.claude/settings.json; the feature is experimental and the team is actively iterating.[^addy-osmani-claude-code-code-mode]

## 相关 / Related

- 原文：[链接](https://x.com/addyosmani/status/2124229492248019362)。 / Original: [link](https://x.com/addyosmani/status/2124229492248019362).
- Topic: [Claude Code 作者与社区话筒 / Claude Code authorship and community voice](../../topics/claude-code-authorship-and-voice.md)
- Topic: [编程 Agent 省 Token 工具与开销 / Coding-agent token-saving tooling and overhead](../../topics/coding-agent-token-saving-tooling.md)
- Topic: [Agent 上下文工程 / Context engineering for agents](../../topics/context-engineering-for-agents.md)
- Topic: [智能体规模化工程 / Agent-scaled engineering](../../topics/agent-scaled-engineering.md)

[^addy-osmani-claude-code-code-mode]: Addy Osmani Introduces Claude Code Experimental Code Mode
