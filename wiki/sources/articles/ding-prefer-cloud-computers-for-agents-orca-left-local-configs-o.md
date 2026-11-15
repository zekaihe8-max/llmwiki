---
type: Source
title: "Ding：尽量让 Agent 跑在云电脑，Orca 卸载后未清理本地 11 个编程 Agent 配置"
title_en: "Ding: Prefer Cloud Computers for Agents; Orca Left Local Configs of 11 Coding Agents Uncleaned After Uninstall"
description: "Ding 在 X 上称尽量将所有 Agent 放在云电脑运行，并在排查 Antigravity 卡顿时发现 Orca 污染了本地多个编程 Agent 的全局配置且卸载不清理。"
description_en: "Ding says on X that he tries to run all agents on cloud computers, and while troubleshooting Antigravity lag found that Orca polluted global configs of multiple local coding agents and did not clean them after uninstall."
resource: https://x.com/dingyi/status/2121857611385753742
tags: [agents, cloud-computing, coding-agents, config-pollution]
sources:
  - id: dingyi-2121857611385753742
    resource: https://x.com/dingyi/status/2121857611385753742
    title: "Ding: Prefer Cloud Computers for Agents; Orca Left Local Configs of 11 Coding Agents Uncleaned After Uninstall"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-15T20:28:12+08:00
---

# Ding：尽量让 Agent 跑在云电脑，Orca 卸载后未清理本地 11 个编程 Agent 配置

*Ding: Prefer Cloud Computers for Agents; Orca Left Local Configs of 11 Coding Agents Uncleaned After Uninstall*

「帖文称」Ding 很早之前就发现了相关问题，现在尽量所有 agent 都在云电脑运行，不到万不得已不使用本地电脑干活。他在排查 Antigravity 网络卡顿时，顺藤摸瓜发现 Orca 把电脑上 11 个 coding agent（包括 Antigravity、Codex、Gemini、Qwen、Kimi、OpenCode 等）的全局配置塞满了同步 hooks，且卸载 App 后完全不清理。[^dingyi-2121857611385753742]

According to the post, Ding discovered this issue a long time ago and now tries to run all agents on cloud computers, avoiding local computers unless absolutely necessary. While troubleshooting Antigravity network lag, he found that Orca filled the global configurations of 11 coding agents on his computer—including Antigravity, Codex, Gemini, Qwen, Kimi, and OpenCode—with sync hooks, and uninstalling the app left them completely uncleaned.[^dingyi-2121857611385753742]

## 摘要 / Summary

- Ding 表示尽量所有 agent 都在云电脑运行，不到万不得已不使用本地电脑干活。[^dingyi-2121857611385753742]
- Ding says he tries to run all agents on cloud computers and avoids using local computers for work unless absolutely necessary.[^dingyi-2121857611385753742]
- Orca 被安装后又卸载，但未清理本地电脑上 11 个 coding agent 的全局配置。[^dingyi-2121857611385753742]
- After Orca was installed and then uninstalled, it did not clean up the global configurations of 11 coding agents on the local computer.[^dingyi-2121857611385753742]
- 受影响的 coding agent 包括 Antigravity、Codex、Gemini、Qwen、Kimi、OpenCode 等。[^dingyi-2121857611385753742]
- Affected coding agents include Antigravity, Codex, Gemini, Qwen, Kimi, OpenCode, etc.[^dingyi-2121857611385753742]
- 问题在排查 Antigravity 网络卡顿时被顺藤摸瓜发现。[^dingyi-2121857611385753742]
- The issue was discovered while tracing Antigravity network lag.[^dingyi-2121857611385753742]
- Orca 将同步 hooks 塞满了这些 agent 的全局配置。[^dingyi-2121857611385753742]
- Orca filled these agents' global configurations with sync hooks.[^dingyi-2121857611385753742]

## 相关 / Related

- 原文：[链接](https://x.com/dingyi/status/2121857611385753742)。 / Original: [link](https://x.com/dingyi/status/2121857611385753742).
- Topic: [个人 Agent 云环境的备份、隔离与定时检查 / Personal-agent cloud env: backup, isolation, and schedule checks](../../topics/personal-agent-cloud-env-pitfalls.md)
- Topic: [远程 AI Coding 时笔记本只需轻与续航 / Laptops need only lightness and battery when AI coding is remote](../../topics/laptop-light-battery-remote-ai-coding.md)
- Topic: [个人 Agent 当包工头调度编程 Agent / Personal agent as foreman over coding agents](../../topics/personal-agent-foreman-over-coding-agents.md)

[^dingyi-2121857611385753742]: Ding: Prefer Cloud Computers for Agents; Orca Left Local Configs of 11 Coding Agents Uncleaned After Uninstall
