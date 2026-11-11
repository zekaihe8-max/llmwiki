---
type: Source
title: "Pi 1.5.2 修复项目目录丢失后的会话恢复"
title_en: "Pi 1.5.2 fixes session recovery after project directory is missing"
description: "Pi 1.5.2 新增 Fork 与 Cancel 选项，解决项目目录被改名、移动或删除后无法继续历史会话的问题。"
description_en: "Pi 1.5.2 adds Fork and Cancel options to fix continuing historical sessions after the project directory is renamed, moved, or deleted."
resource: https://x.com/xiaomovps/status/2120308361396949251
tags: [pi, coding-agent, cli, session-resume]
sources:
  - id: pi-1-5-2-session-resume
    resource: https://x.com/xiaomovps/status/2120308361396949251
    title: "Pi 1.5.2 fixes session recovery after project directory is missing"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-11T20:06:46+08:00
---

# Pi 1.5.2 修复项目目录丢失后的会话恢复

*Pi 1.5.2 fixes session recovery after project directory is missing*

「帖文称」Pi 1.5.2 发布，主要解决项目文件夹被改名、移动或删除后，重新打开旧 Session 时工作目录不存在的问题。新版本增加 Fork 和 Cancel 两个选择，选择 Fork 会把原来的会话复制到当前目录、生成新的 Session ID，并完整保留之前的会话；该行为适用于启动时的 --resume、--session，也适用于会话里的 /resume、/import。此外，此次还修复了 Anthropic OAuth 提示 Claude Code 版本过旧，以及导入失败时留下重复会话文件的问题。[^pi-1-5-2-session-resume]

The post says Pi 1.5.2 was released, mainly solving the problem where reopening an old Session fails because the project folder was renamed, moved, or deleted. The new version adds Fork and Cancel options; choosing Fork copies the original session to the current directory, generates a new Session ID, and retains the previous session intact. This applies to --resume and --session at startup, as well as /resume and /import within sessions. It also fixes Anthropic OAuth prompting that Claude Code version is too old, and duplicate session files left after failed imports.[^pi-1-5-2-session-resume]

## 摘要 / Summary

- Pi 1.5.2 针对项目文件夹被改名、移动或删除后，重新打开旧 Session 发现工作目录不存在的问题进行了修复。[^pi-1-5-2-session-resume]
- Pi 1.5.2 fixes the issue where reopening an old Session finds the working directory missing after the project folder was renamed, moved, or deleted.[^pi-1-5-2-session-resume]
- 新增 Fork 与 Cancel 两个选择，Fork 会把原会话复制到当前目录并生成新 Session ID，原会话完整保留。[^pi-1-5-2-session-resume]
- Adds Fork and Cancel options; Fork copies the original session to the current directory, generates a new Session ID, and keeps the original session intact.[^pi-1-5-2-session-resume]
- 支持启动时的 --resume、--session，以及会话内的 /resume、/import 等操作。[^pi-1-5-2-session-resume]
- Supports --resume and --session at startup, and /resume and /import within sessions.[^pi-1-5-2-session-resume]
- 还修复了 Anthropic OAuth 提示 Claude Code 版本过旧，以及导入失败时留下重复会话文件的问题。[^pi-1-5-2-session-resume]
- Also fixes Anthropic OAuth prompting that Claude Code version is too old, and duplicate session files left after failed imports.[^pi-1-5-2-session-resume]

## 相关 / Related

- 原文：[链接](https://x.com/xiaomovps/status/2120308361396949251)。 / Original: [link](https://x.com/xiaomovps/status/2120308361396949251).
- Topic: [编程 Agent 体验与额度 / Coding agent UX vs quota](../../topics/coding-agent-ux-vs-quota.md)
- Topic: [UX、DX 与 AX / UX, DX, and AX](../../topics/ux-dx-and-ax.md)
- Topic: [Agent 上下文工程 / Context engineering for agents](../../topics/context-engineering-for-agents.md)
- Topic: [个人 Agent 云环境的备份、隔离与定时检查 / Personal-agent cloud env: backup, isolation, and schedule checks](../../topics/personal-agent-cloud-env-pitfalls.md)

[^pi-1-5-2-session-resume]: Pi 1.5.2 fixes session recovery after project directory is missing
