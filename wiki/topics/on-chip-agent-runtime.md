---
type: Topic
title: 芯片上的 Agent Runtime
title_en: On-chip Agent runtime
description: 廉价 MCU（如 ESP32）已能承载 Agent Runtime 或执行循环——含 MCP/脚本、传感器触发、本地记忆与云端模型调用——耐久点是把执行逻辑放进芯片，而不是在芯片上跑通用大模型，也不等于云边缘 Workers 或板上本地小模型。
description_en: Cheap MCUs such as ESP32 can already host an Agent Runtime or execution loop—MCP/scripts, sensor triggers, local memory, cloud model calls—the durable point is putting execution logic on-chip, not running general LLMs on the MCU, and not the same as cloud edge Workers or on-board local small models.
tags: [esp32, mcu, agent-runtime, on-chip, hardware, mcp, mimiclaw, esp-claw]
sources:
  - id: xiaomovps-esp32-agent-three-projects
    resource: https://x.com/xiaomovps/status/2115395887887479279
    title: Xiaomo on three open-source Agent-on-ESP32 projects
generated:
  by: cursor-agent/composer
  at: 2026-10-28T21:15:00+08:00
---
<!-- Same-file bilingual (project extension): title + title_en, description + description_en, bilingual section headings. Pair ZH then EN as adjacent paragraphs/bullets, or same-line `中文。 / English.`. Shared code/URLs/wiki links are not translations; product names alone do not count as English. Format check ≠ translation quality. -->

# 芯片上的 Agent Runtime

*On-chip Agent runtime*

社区正把 Agent 从「控硬件 / 傍主机」推进到「执行逻辑住在 MCU 里」：廉价芯片可跑 Agent Runtime 或循环（MCP、脚本、传感器事件、本地记忆），复杂推理仍可走云端 API；耐久主张是**芯片承载执行循环**，明确承认通用大模型尚跑不进这类算力，也不同于给编程 Agent 加桌面躯体的外设形态。[^xiaomovps-esp32-agent-three-projects]

Communities are moving Agents from “control hardware / sit beside a host” toward “execution logic lives on the MCU”: cheap chips can run an Agent Runtime or loop (MCP, scripts, sensor events, local memory) while heavy inference still calls cloud APIs; the durable claim is **the chip hosts the execution loop**, with explicit admission that general LLMs do not fit this class of compute yet—and distinct from peripherals that only give a coding agent a desktop body.[^xiaomovps-esp32-agent-three-projects]

## 综合分析 / Synthesis

[小墨谈 ESP32 上跑 Agent 的三个开源项目](../sources/articles/xiaomovps-esp32-agent-three-projects.md) 给出一线盘点：Tiny Engineer 用 ESP32-C3 桌面机器人给 Claude Code（及 Codex、Cursor）加实体反馈；ESP-Claw 由乐鑫把 Agent Runtime 放进 ESP32，支持 MCP 与动态 Lua，聊天可定义硬件行为、传感器可触发任务，复杂推理仍调云端；MimiClaw 在约五美元芯片上用 C 实现 Agent 循环，无需 Linux / Node / VPS，带 Telegram、定时、Heartbeat 与重启仍在的本地记忆，模型走 Claude 或 GPT API。作者结论：AI+硬件值得继续研究；尤其后两者——算力跑不了通用大模型，但把执行逻辑放进芯片很有意思。[^xiaomovps-esp32-agent-three-projects] 原帖 <https://x.com/xiaomovps/status/2115395887887479279>。本页收「on-chip Runtime / 循环 + 云端推理分工」的耐久层；Tiny Engineer 作对照外设躯体，不单独扩张为桌面换装伴侣或 Computer Use。

[Xiaomo on three open-source Agent-on-ESP32 projects](../sources/articles/xiaomovps-esp32-agent-three-projects.md) is a frontline survey: Tiny Engineer gives Claude Code (and Codex/Cursor) physical feedback via an ESP32-C3 desk robot; ESP-Claw (Espressif) puts an Agent Runtime on ESP32 with MCP and dynamic Lua—chat defines hardware behavior, sensors trigger tasks, heavy inference still hits the cloud; MimiClaw runs an Agent loop in C on ~$5 silicon without Linux/Node/VPS, with Telegram, schedules, Heartbeat, and reboot-surviving local memory, models via Claude or GPT APIs. Author’s close: AI+hardware remains worth studying; especially the latter two—compute cannot run general LLMs, but on-chip execution logic is interesting.[^xiaomovps-esp32-agent-three-projects] Post: <https://x.com/xiaomovps/status/2115395887887479279>. This page keeps the durable “on-chip Runtime/loop + cloud inference split”; Tiny Engineer is a foil peripheral body, not expanded into desktop outfit companions or Computer Use.

适用边界：本页讲 MCU/ESP32 级 **Agent 执行面**，不是在板上本地跑数 GB 开放小模型，也不是 Cloudflare Workers 一类可编程网络边缘，更不是经 Apple Home 等家居平台由云端个人 Agent 直控家电。

Scope: this page is the MCU/ESP32-class **Agent execution plane**—not few-GB open models running locally on a board, not programmable network-edge Workers, and not cloud personal agents controlling appliances via Apple Home–style platforms.

与 [本地开放助手与机器人小模型](./local-open-assistant-models.md) 同属「模型/Agent 进物理或边缘硬件」，但那页管的是 **板上本地小开放模型 + 对话/工具/机器人演示**；本页管的是 **芯片上的 Runtime/循环，推理可仍在云端**。与 [Agent 经家居平台直控设备](./agent-home-platform-control.md) 同属「Agent 碰硬件」，但那页是 **家居平台菜单直控**；本页是 **MCU 自托管执行逻辑**。与 [可编程边缘计算](./programmable-edge-compute.md) 都谈「边缘可编程」，但那页是 **全球 CDN 边缘的 JS/Workers/KV/DO/D1**；本页是 **单片机上的 Agent 循环**。与 [桌面换装角色伴侣](./desktop-outfit-character-companions.md) 都可能落到桌面物件，但那页是 **换装角色陪伴欲**；Tiny Engineer 一类只作本页外设对照。与 [个人 Agent 云环境的备份、隔离与定时检查](./personal-agent-cloud-env-pitfalls.md) 对照：MimiClaw 声称可摆脱 Linux/VPS，但本页不展开云电脑运维卫生。

Shares “models/Agents into physical or edge hardware” with [Local open models for assistants and robots](./local-open-assistant-models.md), but that page owns **on-board local small open models + conversation/tool/robot demos**; this page owns **on-chip Runtime/loop with inference optionally still in the cloud**. Shares “Agents touch hardware” with [Agents control devices via home platforms](./agent-home-platform-control.md), but that page is **Home-platform menu control**; this page is **MCU-hosted execution logic**. Shares “edge programmability” wording with [Programmable edge compute](./programmable-edge-compute.md), but that page is **global CDN-edge JS/Workers/KV/DO/D1**; this page is **Agent loops on a microcontroller**. May share desk objects with [Desktop outfit-changing character companions](./desktop-outfit-character-companions.md), but that page owns **outfit-character companionship desire**; Tiny Engineer–class gear is only a peripheral foil here. Against [Personal-agent cloud env: backup, isolation, and schedule checks](./personal-agent-cloud-env-pitfalls.md): MimiClaw claims to skip Linux/VPS, but this page does not expand cloud-PC ops hygiene.

## 矛盾与变化 / Contradictions

暂无。 / None yet.

## 相关 / Related

- Source: [小墨谈 ESP32 上跑 Agent 的三个开源项目](../sources/articles/xiaomovps-esp32-agent-three-projects.md)
- Topic: [本地开放助手与机器人小模型](./local-open-assistant-models.md)
- Topic: [Agent 经家居平台直控设备](./agent-home-platform-control.md)
- Topic: [可编程边缘计算](./programmable-edge-compute.md)
- Topic: [桌面换装角色伴侣](./desktop-outfit-character-companions.md)
- Topic: [个人 Agent 云环境的备份、隔离与定时检查](./personal-agent-cloud-env-pitfalls.md)

[^xiaomovps-esp32-agent-three-projects]: Xiaomo on three open-source Agent-on-ESP32 projects
