---
type: Source
title: "OpenAI dot 现支持同一账号连接多台本地电脑"
title_en: "OpenAI dot now supports connecting multiple local computers to one account"
description: "OpenAI 的 dot AI 助理现允许同一账号连接多台本地电脑，并为每个任务指定使用哪一台。"
description_en: "OpenAI's dot AI assistant now lets one account connect multiple local computers and assign a specific machine per task."
resource: https://x.com/dotey/status/2119898580131725439
tags: [openai-dot, multi-computer, ai-agent, computer-use]
sources:
  - id: openai-dot-multi-computer
    resource: https://x.com/dotey/status/2119898580131725439
    title: "OpenAI dot now supports connecting multiple local computers to one account"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-10T08:38:08+08:00
---

# OpenAI dot 现支持同一账号连接多台本地电脑

*OpenAI dot now supports connecting multiple local computers to one account*

帖文称，OpenAI 为常驻 AI 助理 dot 新增多台本地电脑连接功能，用户可在同一 dot 下为不同任务指定使用不同电脑，而无需占用当前正在使用的机器；功能正逐步向 ChatGPT Pro 及 Business Premium 用户开放，与 Codex、Work 的任务额度分开计算。[^openai-dot-multi-computer]

The post says OpenAI has added multi-local-computer connection to its persistent AI assistant dot, letting users assign different machines to different tasks under one dot without occupying their current computer; the feature is rolling out to ChatGPT Pro and Business Premium users, with Codex and Work task quotas calculated separately.[^openai-dot-multi-computer]

## 摘要 / Summary

- dot 此前只能连一台电脑，此次可连多台，每个线程一次只用一台电脑，多台并行需开多个线程。 / dot previously could connect only one computer; now it can connect multiple, with each thread using one computer at a time, and parallel work across machines requires separate threads.[^openai-dot-multi-computer]
- 连接后，电脑需保持联网且 ChatGPT 应用打开，dot 才能使用；彻底断开需点“Revoke access”。 / After connecting, the computer must stay online with the ChatGPT app open for dot to use it; full disconnection requires clicking “Revoke access.”[^openai-dot-multi-computer]
- 帖文称，跟 dot 聊天不占 ChatGPT 用量额度，派给 Codex、Work 的任务照常计入这两个产品的额度。 / The post says chatting with dot does not count against ChatGPT usage quotas, while tasks dispatched to Codex and Work still count toward those products’ quotas.[^openai-dot-multi-computer]
- 连接步骤：在目标电脑打开 ChatGPT 应用，进入 dot 资料页的“Computers”项，点“Allow”再点“Allow access”确认。 / Connection steps: open the ChatGPT app on the target computer, go to dot’s profile page under “Computers,” click “Allow,” then confirm with “Allow access.”[^openai-dot-multi-computer]
- 帖文将 dot 与 Anthropic Claude Duet、xAI Grok Bot 做对比，指出 Duet 官方介绍未提连接用户自己的电脑，Grok Bot 则允许在允许后在用户电脑上执行命令。 / The post compares dot with Anthropic’s Claude Duet and xAI’s Grok Bot, noting Duet’s official intro does not mention connecting to users’ own computers, while Grok Bot allows command execution on user computers after permission.[^openai-dot-multi-computer]

## 相关 / Related

- 原文：[链接](https://x.com/dotey/status/2119898580131725439)。 / Original: [link](https://x.com/dotey/status/2119898580131725439).
- Topic: [Computer Use / Computer Use](../../topics/computer-use.md)
- Topic: [多 Harness 路由基建 ≠ 个人助手派活 / Multi-harness routing infra ≠ personal-assistant dispatch](../../topics/multi-harness-router-vs-personal-dispatch.md)
- Topic: [个人 Agent 云环境的备份、隔离与定时检查 / Personal-agent cloud env: backup, isolation, and schedule checks](../../topics/personal-agent-cloud-env-pitfalls.md)
- Topic: [个人 Agent 当包工头调度编程 Agent / Personal agent as foreman over coding agents](../../topics/personal-agent-foreman-over-coding-agents.md)

[^openai-dot-multi-computer]: OpenAI dot now supports connecting multiple local computers to one account
