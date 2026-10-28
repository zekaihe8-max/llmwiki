---
type: Source
title: 小墨谈 ESP32 上跑 Agent 的三个开源项目
title_en: Xiaomo on three open-source Agent-on-ESP32 projects
description: 小墨整理 Tiny Engineer、ESP-Claw 与 MimiClaw 三个 ESP32 相关开源项目：给编程 Agent 加实体躯体、把 Agent Runtime 装进芯片、以及在约五美元芯片上用 C 跑个人 Agent 循环；主张值得继续研究 AI+硬件，重点是把执行逻辑放进芯片而非在芯片上跑通用大模型。
description_en: Xiaomo surveys three ESP32-related open-source projects—Tiny Engineer, ESP-Claw, and MimiClaw—giving coding agents a physical body, putting an Agent Runtime on-chip, and running a personal Agent loop in C on ~$5 silicon; he argues AI+hardware is worth pursuing, with the interesting move being execution logic on-chip rather than general LLMs on the MCU.
resource: https://x.com/xiaomovps/status/2115395887887479279
tags: [esp32, agent-runtime, tiny-engineer, esp-claw, mimiclaw, hardware, mcu, xiaomovps]
sources:
  - id: xiaomovps-esp32-agent-three-projects
    resource: https://x.com/xiaomovps/status/2115395887887479279
    title: Xiaomo on three open-source Agent-on-ESP32 projects
    author: human:xiaomovps
generated:
  by: cursor-agent/composer
  at: 2026-10-28T21:15:00+08:00
date: 2026-10-28
---
<!-- Same-file bilingual (project extension): title + title_en, description + description_en, bilingual section headings. Pair ZH then EN as adjacent paragraphs/bullets, or same-line `中文。 / English.`. Shared code/URLs/wiki links are not translations; product names alone do not count as English. Format check ≠ translation quality. -->

# 小墨谈 ESP32 上跑 Agent 的三个开源项目

*Xiaomo on three open-source Agent-on-ESP32 projects*

[@xiaomovps](https://x.com/xiaomovps)（小墨同学）称近期又发现三个有意思的 ESP32 + AI Agent 开源项目。他此前折腾过 ESP32：从刷小智，到把 Pi 接进去，做成带屏幕与触摸审批的 AI 小助手；并观察社区已进一步让 Agent 真正参与硬件控制，甚至直接运行在芯片里。[^xiaomovps-esp32-agent-three-projects] 原帖见 <https://x.com/xiaomovps/status/2115395887887479279>。

[@xiaomovps](https://x.com/xiaomovps) (Xiaomo) says he recently found three interesting ESP32 + AI Agent open-source projects. He had already been tinkering with ESP32—from flashing 小智 to wiring Pi in for a screen-and-touch-approval AI assistant—and observes the community moving further so Agents truly join hardware control or even run on the chip.[^xiaomovps-esp32-agent-three-projects] Post: <https://x.com/xiaomovps/status/2115395887887479279>.

## 摘要 / Summary

- Tiny Engineer：用 ESP32-C3、五个舵机与 3D 打印外壳做桌面小机器人，给 Claude Code「装身体」——读文件时东张西望、写代码时跟着打字、完成任务敲铃铛；也可接入 Codex、Cursor。项目：<https://github.com/jamro/tiny-engineer>。[^xiaomovps-esp32-agent-three-projects]
- Tiny Engineer: an ESP32-C3 desktop robot with five servos and a 3D-printed shell that gives Claude Code a “body”—looking around while reading files, typing along while writing code, ringing a bell when done; Codex and Cursor can also connect. Project: <https://github.com/jamro/tiny-engineer>.[^xiaomovps-esp32-agent-three-projects]
- ESP-Claw：乐鑫官方把 Agent Runtime 放到 ESP32 上，支持 MCP、动态加载 Lua，可通过聊天定义硬件行为，让传感器事件触发 Agent 执行任务；复杂模型推理仍可调云端 API。项目：<https://github.com/espressif/esp-claw>。[^xiaomovps-esp32-agent-three-projects]
- ESP-Claw: Espressif’s official project puts an Agent Runtime on ESP32 with MCP and dynamic Lua loading; chat can define hardware behavior, and sensor events can trigger Agent tasks, while heavy model inference can still call cloud APIs. Project: <https://github.com/espressif/esp-claw>.[^xiaomovps-esp32-agent-three-projects]
- MimiClaw：约五美元芯片即可跑个人 Agent——无需 Linux、Node.js 或 VPS，用 C 实现 Agent 循环；支持 Telegram、定时任务、Heartbeat 与本地记忆（重启后仍在），模型经 Claude 或 GPT API 调用。项目：<https://github.com/memovai/mimiclaw>。[^xiaomovps-esp32-agent-three-projects]
- MimiClaw: a personal Agent on ~$5 silicon—no Linux, Node.js, or VPS—implementing the Agent loop in C; supports Telegram, cron-like tasks, Heartbeat, and local memory that survives reboot, with models via Claude or GPT APIs. Project: <https://github.com/memovai/mimiclaw>.[^xiaomovps-esp32-agent-three-projects]
- 作者主张：AI + 硬件仍值得研究；尤其 ESP-Claw 与 MimiClaw——ESP32 算力远跑不了通用大模型，但把 Agent 执行逻辑放进芯片本身很有意思。[^xiaomovps-esp32-agent-three-projects]
- Author’s claim: AI + hardware remains worth studying; especially ESP-Claw and MimiClaw—ESP32 cannot run general LLMs, but putting Agent execution logic on-chip is itself an interesting direction.[^xiaomovps-esp32-agent-three-projects]

## 相关 / Related

- Topic: [芯片上的 Agent Runtime](../../topics/on-chip-agent-runtime.md)
- Topic: [本地开放助手与机器人小模型](../../topics/local-open-assistant-models.md)
- Topic: [Agent 经家居平台直控设备](../../topics/agent-home-platform-control.md)
- Topic: [可编程边缘计算](../../topics/programmable-edge-compute.md)

[^xiaomovps-esp32-agent-three-projects]: Xiaomo on three open-source Agent-on-ESP32 projects
