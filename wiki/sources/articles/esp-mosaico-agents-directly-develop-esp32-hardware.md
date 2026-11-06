---
type: Source
title: "ESP-Mosaico：Agent 直接开发 ESP32 硬件"
title_en: "ESP-Mosaico: Agents Directly Develop ESP32 Hardware"
description: "乐鑫开源 ESP-Mosaico，让编程 Agent 从写代码到烧录真机验证直接参与 ESP32 硬件开发。"
description_en: "Espressif open-sources ESP-Mosaico, letting coding agents directly participate in ESP32 hardware development from code to flashing and real-device verification."
resource: https://x.com/xiaomovps/status/2118596364250808706
tags: [esp32, agents, open-source, hardware-development]
sources:
  - id: esp-mosaico-agent-esp32
    resource: https://x.com/xiaomovps/status/2118596364250808706
    title: "ESP-Mosaico: Agents Directly Develop ESP32 Hardware"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-06T20:04:33+08:00
---

# ESP-Mosaico：Agent 直接开发 ESP32 硬件

*ESP-Mosaico: Agents Directly Develop ESP32 Hardware*

帖文称，乐鑫推出开源项目 ESP-Mosaico，内置 ESP-Claw，旨在让 Coding Agent 直接参与 ESP32 硬件开发全过程，包括代码生成、模拟调试、烧录与真机验证。项目采用 ESP32-S31 核心和 480×480 触摸屏，支持摄像头、传感器、摇杆、LED 等模块扩展及多设备拼接，固件、开发工具、BSP 和示例已开源。作者还表示，未来可能只需说话或通过 WiFi 即可完成烧录与设置，硬件开发门槛将进一步降低。[^esp-mosaico-agent-esp32]

The post says Espressif has launched the open-source project ESP-Mosaico, with built-in ESP-Claw, aiming to let coding agents directly participate in the full ESP32 hardware development process, including code generation, simulation debugging, flashing, and real-device verification. The project uses an ESP32-S31 core and a 480×480 touchscreen, supports camera, sensor, joystick, LED and other module extensions plus multi-device tiling; firmware, development tools, BSP and examples are open-sourced. The author also suggests that in the future, burning and setup might be done by voice or WiFi, further lowering hardware development thresholds.[^esp-mosaico-agent-esp32]

## 摘要 / Summary

- ESP-Mosaico 是乐鑫开源项目，内置 ESP-Claw，无需自行搭建完整开发环境。 / ESP-Mosaico is an Espressif open-source project with built-in ESP-Claw, requiring no self-built complete development environment.[^esp-mosaico-agent-esp32]
- Agent 可根据硬件配置生成代码、构建并部署到设备，例如制作俄罗斯方块游戏，并可继续对话修改功能。 / Agents can generate code, build and deploy to devices based on hardware configuration, such as making a Tetris game, and continue modifying features via conversation.[^esp-mosaico-agent-esp32]
- 项目把模拟器、编译部署和真机反馈接入 Agent 开发流程，支持根据实际运行结果修改代码。 / The project connects simulators, compile/deploy and real-device feedback into the Agent development flow, supporting code changes based on actual runtime results.[^esp-mosaico-agent-esp32]
- 核心采用 ESP32-S31，配备 480×480 触摸屏，支持摄像头、传感器、摇杆、LED 等模块扩展及多设备拼接。 / Core uses ESP32-S31 with a 480×480 touchscreen, supporting camera, sensor, joystick, LED and other module extensions plus multi-device tiling.[^esp-mosaico-agent-esp32]
- 固件、开发工具、BSP 和示例项目已开源，GitHub 为 github.com/esp-mosaico。 / Firmware, development tools, BSP and example projects are open-sourced; GitHub is github.com/esp-mosaico.[^esp-mosaico-agent-esp32]

## 相关 / Related

- 原文：[链接](https://x.com/xiaomovps/status/2118596364250808706)。 / Original: [link](https://x.com/xiaomovps/status/2118596364250808706).
- Topic: [智能体自动模式 / Agent auto mode](../../topics/agent-auto-mode.md)
- Topic: [Vibe Coding 的记忆悖论 / Vibe-coding memory paradox](../../topics/vibe-coding-memory-paradox.md)
- Topic: [芯片上的 Agent Runtime / On-chip Agent runtime](../../topics/on-chip-agent-runtime.md)
- Topic: [可编程边缘计算 / Programmable edge compute](../../topics/programmable-edge-compute.md)

[^esp-mosaico-agent-esp32]: ESP-Mosaico: Agents Directly Develop ESP32 Hardware
