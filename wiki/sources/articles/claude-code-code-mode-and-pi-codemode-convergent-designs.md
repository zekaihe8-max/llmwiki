---
type: Source
title: "Claude Code Code Mode 与 Pi Codemode 的异同"
title_en: "Claude Code Code Mode and Pi Codemode: Convergent Designs"
description: "对比 Claude Code 与 Pi Agent 的代码模式，探讨通过 JavaScript 批量工具调用降低 Token 消耗的设计思路"
description_en: "Comparing Claude Code and Pi Agent code modes, discussing the design of batching tool calls via JavaScript to reduce token consumption"
resource: https://x.com/xiaomovps/status/2122964434276786268
tags: [agents, coding-agent, claude-code, pi-agent, javascript, token-saving]
sources:
  - id: xiaomovps-claude-code-pi-codemode
    resource: https://x.com/xiaomovps/status/2122964434276786268
    title: "Claude Code Code Mode and Pi Codemode: Convergent Designs"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-18T20:03:31+08:00
---

# Claude Code Code Mode 与 Pi Codemode 的异同

*Claude Code Code Mode and Pi Codemode: Convergent Designs*

「帖文称」Claude Code 推出实验性 Code Mode，与 Pi Agent 此前内置的 Codemode 设计思路相近，均通过 JavaScript 一次完成多个工具调用，以减少往返模型的 Token 消耗；Pi 基于 QuickJS 沙箱、支持自由模型与 MCP/扩展组合，并提醒脚本隔离不等于系统级操作沙箱。[^xiaomovps-claude-code-pi-codemode]

The post says Claude Code's experimental Code Mode resembles Pi Agent's built-in Codemode in letting JavaScript execute multiple tool calls in one go to cut token round-trips; Pi uses a QuickJS sandbox, allows free model selection and MCP/extension composition, and cautions that script isolation is not system-level sandboxing for file or database operations.[^xiaomovps-claude-code-pi-codemode]

## 摘要 / Summary

- Claude Code Code Mode 是实验性功能，绑定自身编程工具与权限系统，仅限指定 Claude 模型使用。[^xiaomovps-claude-code-pi-codemode]
- Claude Code's Code Mode is experimental, tied to its own programming tools and permission system, and limited to specified Claude models.[^xiaomovps-claude-code-pi-codemode]
- Pi 使用 QuickJS 沙箱运行 JavaScript，可组合 Extension、MCP 等工具，模型可自由选择，甚至可调用分类模型处理简单判断。[^xiaomovps-claude-code-pi-codemode]
- Pi runs JavaScript in a QuickJS sandbox, can compose Extension, MCP and other tools, allows free model selection, and can invoke dedicated classification models for simple judgments.[^xiaomovps-claude-code-pi-codemode]
- Pi 提供 on 与 only 两种 Codemode 启用方式，新手建议先用 on，可同时使用普通工具与 Codemode。[^xiaomovps-claude-code-pi-codemode]
- Pi offers on and only Codemode modes; beginners are advised to start with on, which allows ordinary tools and Codemode together.[^xiaomovps-claude-code-pi-codemode]
- 适合将重复性任务交给 Codemode，如并行检查文件、过滤测试日志，只返回错误和关键结果，避免将大量原始输出塞入上下文。[^xiaomovps-claude-code-pi-codemode]
- Repetitive tasks such as parallel file checks and test-log filtering are suitable for Codemode, returning only errors and key results instead of stuffing large raw outputs into context.[^xiaomovps-claude-code-pi-codemode]
- QuickJS 仅隔离脚本执行环境，不代表删除文件、修改数据库等工具操作有系统级沙箱保护，仍需做好权限控制。[^xiaomovps-claude-code-pi-codemode]
- QuickJS only isolates script execution and does not imply system-level sandbox protection for operations like file deletion or database modification; permission control is still required.[^xiaomovps-claude-code-pi-codemode]

## 相关 / Related

- 原文：[链接](https://x.com/xiaomovps/status/2122964434276786268)。 / Original: [link](https://x.com/xiaomovps/status/2122964434276786268).
- Topic: [编程 Agent 省 Token 工具与开销 / Coding-agent token-saving tooling and overhead](../../topics/coding-agent-token-saving-tooling.md)
- Topic: [智能体自动模式 / Agent auto mode](../../topics/agent-auto-mode.md)
- Topic: [Agent 上下文工程 / Context engineering for agents](../../topics/context-engineering-for-agents.md)
- Topic: [面向 Agent 的编程语言 / Languages for agents](../../topics/languages-for-agents.md)

[^xiaomovps-claude-code-pi-codemode]: Claude Code Code Mode and Pi Codemode: Convergent Designs
