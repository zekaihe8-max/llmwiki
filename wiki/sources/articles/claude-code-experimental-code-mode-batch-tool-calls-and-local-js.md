---
type: Source
title: "Claude Code 实验功能 Code Mode：批量工具调用与本地 JS 编排"
title_en: "Claude Code Experimental Code Mode: Batch Tool Calls and Local JS Orchestration"
description: "Claude Code 推出默认关闭的实验功能 Code Mode，让 Claude 先写 JavaScript 批量调用多个工具，再在本地会话中执行。"
description_en: "Claude Code launches experimental Code Mode, off by default, letting Claude write JavaScript to batch-call multiple tools before executing them in a local session."
resource: https://x.com/shao__meng/status/2121899873083764877
tags: [claude-code, code-mode, ai-coding-agent, tool-use]
sources:
  - id: ef07cd32ee197957
    resource: https://x.com/shao__meng/status/2121899873083764877
    title: "Claude Code Experimental Code Mode: Batch Tool Calls and Local JS Orchestration"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-15T19:55:12+08:00
---

# Claude Code 实验功能 Code Mode：批量工具调用与本地 JS 编排

*Claude Code Experimental Code Mode: Batch Tool Calls and Local JS Orchestration*

「帖文称」Claude Code 推出实验功能 Code Mode，默认关闭，需手动开启；开启后 Claude 不再每次只调一个 Bash、Read 或 Edit 工具，而是先写一段 JavaScript 在本地会话里一次调用多个工具，再把结果交还模型查看。[^ef07cd32ee197957]

The post says Claude Code has launched an experimental feature called Code Mode, off by default and requiring manual activation; once enabled, Claude no longer calls one Bash, Read, or Edit tool at a time, but first writes JavaScript to call multiple tools in a local session before returning results to the model.[^ef07cd32ee197957]

## 摘要 / Summary

- Code Mode 默认关闭，需设置 CLAUDE_CODE_EXPERIMENTAL_CODE_MODE=1 启用，首次开启需确认，且写入项目 settings.json 不生效。[^ef07cd32ee197957]
- Code Mode is off by default; enable via CLAUDE_CODE_EXPERIMENTAL_CODE_MODE=1, with first-time confirmation required, and it does not take effect when written to project-level settings.json.[^ef07cd32ee197957]
- 开启后 Claude 先写 JavaScript 一次调用多个 Bash、Read 或 Edit 工具，由 Claude Code 在本地会话执行，替代之前每次只调一个工具的往返模式。[^ef07cd32ee197957]
- After enabling, Claude writes JavaScript to call multiple Bash, Read, or Edit tools at once, executed in a local Claude Code session, replacing the previous one-tool-per-round-trip pattern.[^ef07cd32ee197957]
- 官方称可并行运行独立命令、在代码中传递上一步结果并预筛输出，适合多文件同处改动、搜索过滤后读取及并行命令等场景。[^ef07cd32ee197957]
- Official claims include parallel independent commands, passing prior results in code without model involvement, and pre-filtering output, suited for multi-file edits, filtered search reads, and parallel commands.[^ef07cd32ee197957]
- 仅支持终端交互式会话，不支持 -p、Agent SDK、VS Code 面板、桌面端和云端会话；模型限于 Opus 5.5、Sonnet 5.5、Haiku 5.5 和 Fable 5.2。[^ef07cd32ee197957]
- Only interactive terminal sessions are supported; -p, Agent SDK, VS Code panel, desktop, and cloud sessions are excluded; models limited to Opus 5.5, Sonnet 5.5, Haiku 5.5, and Fable 5.2.[^ef07cd32ee197957]
- 每次工具调用仍经过 deny/ask 规则和 PreToolUse 钩子，auto 模式下分类器审查整段代码而非单次调用，且看不到运行时算出的值。[^ef07cd32ee197957]
- Every tool call still passes deny/ask rules and PreToolUse hooks; in auto mode the classifier reviews the whole code block rather than individual calls and cannot see runtime-computed values.[^ef07cd32ee197957]
- 前台会话最长 10 分钟，后台最长 2 小时且需 auto 或 bypassPermissions 模式；企业可在托管设置中将变量设为 0 全员禁用。[^ef07cd32ee197957]
- Foreground sessions limited to 10 minutes, background to 2 hours requiring auto or bypassPermissions mode; enterprises can set the variable to 0 in hosted settings to disable it for all users.[^ef07cd32ee197957]

## 相关 / Related

- 原文：[链接](https://x.com/shao__meng/status/2121899873083764877)。 / Original: [link](https://x.com/shao__meng/status/2121899873083764877).
- Topic: [Claude Code 作者与社区话筒 / Claude Code authorship and community voice](../../topics/claude-code-authorship-and-voice.md)
- Topic: [智能体自动模式 / Agent auto mode](../../topics/agent-auto-mode.md)
- Topic: [编程 Agent 体验与额度 / Coding agent UX vs quota](../../topics/coding-agent-ux-vs-quota.md)
- Topic: [编程 Agent 省 Token 工具与开销 / Coding-agent token-saving tooling and overhead](../../topics/coding-agent-token-saving-tooling.md)

[^ef07cd32ee197957]: Claude Code Experimental Code Mode: Batch Tool Calls and Local JS Orchestration
