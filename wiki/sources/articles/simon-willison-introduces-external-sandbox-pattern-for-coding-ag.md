---
type: Source
title: "西蒙·威利森介绍编程 Agent 的外部沙箱模式"
title_en: "Simon Willison Introduces External Sandbox Pattern for Coding Agents"
description: "帖文称，代理可在 Mac 上运行，但将代码执行置于 WebAssembly、QEMU 或 Apple 容器沙箱中。"
description_en: "The post says agents can run on a Mac while executing code in WebAssembly, QEMU, or Apple Container sandboxes."
resource: https://x.com/simonw/status/2122500307557265651
tags: [agents, sandbox, coding-agents, security]
sources:
  - id: simonw-external-sandbox-pattern
    resource: https://x.com/simonw/status/2122500307557265651
    title: "Simon Willison Introduces External Sandbox Pattern for Coding Agents"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-18T08:37:07+08:00
---

# 西蒙·威利森介绍编程 Agent 的外部沙箱模式

*Simon Willison Introduces External Sandbox Pattern for Coding Agents*

「帖文称」西蒙·威利森（Simon Willison）正在探索为编程 Agent 编写的代码提供新的沙箱方式，即外部沙箱模式：Agent 在用户 Mac 上运行，但代码执行放置在 WebAssembly、QEMU 或 Apple 容器沙箱中，并为 Claude Code、Codex 和 Pi 提供了演示。[^simonw-external-sandbox-pattern]

The post says Simon Willison is exploring new ways to sandbox code written by coding agents: the external sandbox pattern, where agents run on your Mac but execute code in WebAssembly, QEMU, or Apple Container sandboxes, with demos for Claude Code, Codex, and Pi.[^simonw-external-sandbox-pattern]

## 摘要 / Summary

- 作者为 Simon Willison (@simonw)，发布于 X，时间为 2026 年 11 月 17 日凌晨 1:21。[^simonw-external-sandbox-pattern]
- Author is Simon Willison (@simonw), posted on X at 1:21 AM on Nov 17, 2026.[^simonw-external-sandbox-pattern]
- 模式名为外部沙箱模式（external sandbox pattern）。[^simonw-external-sandbox-pattern]
- The pattern is called the external sandbox pattern.[^simonw-external-sandbox-pattern]
- 代码执行环境包括 WebAssembly、QEMU 或 Apple 容器沙箱。[^simonw-external-sandbox-pattern]
- Code execution environments include WebAssembly, QEMU, or Apple Container sandbox.[^simonw-external-sandbox-pattern]
- Agent 在用户 Mac 上运行，代码在沙箱中执行。[^simonw-external-sandbox-pattern]
- Agents run on the user's Mac while code executes in the sandbox.[^simonw-external-sandbox-pattern]
- 演示覆盖 Claude Code、Codex 和 Pi。[^simonw-external-sandbox-pattern]
- Demos cover Claude Code, Codex, and Pi.[^simonw-external-sandbox-pattern]
- 帖文获得约 64.4 万次浏览、348 条回复、156 条转发、1.1 千个喜欢和 1.1 千个收藏。[^simonw-external-sandbox-pattern]
- The post received about 64.4K views, 348 replies, 156 reposts, 1.1K likes, and 1.1K bookmarks.[^simonw-external-sandbox-pattern]

## 相关 / Related

- 原文：[链接](https://x.com/simonw/status/2122500307557265651)。 / Original: [link](https://x.com/simonw/status/2122500307557265651).
- Topic: [前沿训练环境隔离 / Frontier training containment](../../topics/frontier-training-containment.md)
- Topic: [Computer Use / Computer Use](../../topics/computer-use.md)
- Topic: [个人 Agent 云环境的备份、隔离与定时检查 / Personal-agent cloud env: backup, isolation, and schedule checks](../../topics/personal-agent-cloud-env-pitfalls.md)

[^simonw-external-sandbox-pattern]: Simon Willison Introduces External Sandbox Pattern for Coding Agents
