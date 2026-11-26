---
type: Source
title: "帖文称 agent-sim 在普通 Linux 服务器上跑通苹果 iOS 模拟器，云端 AI 可直接测试 iOS App"
title_en: "The post claims agent-sim runs Apple's iOS simulator on ordinary Linux servers, letting cloud AI directly test iOS apps"
description: "帖文介绍 agent-sim 与 x86Sim 如何在无 Mac 无显卡的 Linux 服务器上运行 iOS 模拟器，并让 AI 通过编号控件列表操作 App，同时列出三大局限。"
description_en: "The post introduces how agent-sim and x86Sim run the iOS simulator on Linux servers without Mac or GPU, and lets AI operate apps via numbered control lists, while listing three major limitations."
resource: https://x.com/lxfater/status/2125482125562351809
tags: [agents, ios-simulator, linux, computer-use, open-source]
sources:
  - id: agent-sim-linux-ios-simulator
    resource: https://x.com/lxfater/status/2125482125562351809
    title: "The post claims agent-sim runs Apple's iOS simulator on ordinary Linux servers, letting cloud AI directly test iOS apps"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-26T08:34:09+08:00
---

# 帖文称 agent-sim 在普通 Linux 服务器上跑通苹果 iOS 模拟器，云端 AI 可直接测试 iOS App

*The post claims agent-sim runs Apple's iOS simulator on ordinary Linux servers, letting cloud AI directly test iOS apps*

帖文称，开发者 Armaan Jain 开源了 agent-sim，配合底层开源项目 x86Sim，可在普通 Linux 云服务器上运行苹果 iOS 模拟器，无需 Mac 也无需显卡。agent-sim 在 x86Sim 上套 AI 控制层，支持命令行或 MCP 接入，让 Claude Code、Codex、Cursor 等 AI 通过带编号的屏幕控件列表直接安装 App、点按钮、打字和查日志。帖文同时指出三个坑：暂不支持苹果官方自动化测试和调试器、不帮助编译打包、以及配置门槛与苹果许可协议合规需自行权衡。[^agent-sim-linux-ios-simulator]

The post claims that developer Armaan Jain open-sourced agent-sim, which, together with the underlying open-source project x86Sim, can run Apple's iOS simulator on ordinary Linux cloud servers without a Mac or GPU. agent-sim adds an AI control layer on top of x86Sim, supporting command-line or MCP access so that Claude Code, Codex, Cursor and other AIs can directly install apps, click buttons, type, and check logs via a numbered list of screen controls. The post also notes three pitfalls: no support for Apple's official automation testing and debugger yet, no help with compiling or packaging, and configuration thresholds plus Apple license compliance need to be weighed independently.[^agent-sim-linux-ios-simulator]

## 摘要 / Summary

- x86Sim 不打包苹果文件，安装时直接从苹果官方下载约 8 GB 原版系统，并用三套开源翻译层将苹果接口和芯片指令转给 Linux 运行，画面由 CPU 渲染。[^agent-sim-linux-ios-simulator]
- x86Sim does not package Apple files; during installation it downloads about 8 GB of the original system directly from Apple's official servers, and uses three open-source translation layers to convert Apple interfaces and chip instructions for Linux, with the screen rendered by the CPU.[^agent-sim-linux-ios-simulator]
- agent-sim 可通过命令行或 MCP 接入，让 Claude Code、Codex、Cursor 等 AI 直接操作 iOS 模拟器界面。[^agent-sim-linux-ios-simulator]
- agent-sim can be accessed via command line or MCP, allowing AIs such as Claude Code, Codex, and Cursor to directly operate the iOS simulator interface.[^agent-sim-linux-ios-simulator]
- 以前 AI 测界面靠截图猜坐标，agent-sim 把屏幕按钮和文字直接读成带编号的清单，AI 可据此自行装 App、点按钮、打字和查日志。[^agent-sim-linux-ios-simulator]
- Previously AI tested interfaces by guessing coordinates from screenshots; agent-sim reads screen buttons and text directly into a numbered list, enabling AI to install apps, click buttons, type, and check logs on its own.[^agent-sim-linux-ios-simulator]
- 帖文列出三道坑：仅够模拟人手点界面，苹果官方自动化测试和调试器不支持且偶发卡死；不帮编译打包，需先喂未加密的开发包或模拟器包；建议 8 核 16G 内存、60G 硬盘，首次安装加翻译约半小时，商用需自行确认苹果许可合规。[^agent-sim-linux-ios-simulator]
- The post lists three pitfalls: it only simulates human-like UI tapping, with Apple's official automation testing and debugger unsupported and occasional freezes; it does not help compile or package, requiring unencrypted development or simulator packages first; recommended specs are 8-core CPU, 16 GB RAM, 60 GB disk, with first installation plus translation taking about half an hour, and commercial use requires self-checking Apple license compliance.[^agent-sim-linux-ios-simulator]
- 帖文称现在还顶替不了 Mac，但云端 AI 写完 iOS 代码后，总算能自己点开界面测一遍。[^agent-sim-linux-ios-simulator]
- The post claims it cannot replace Mac yet, but after cloud AI writes iOS code, it can finally click through the interface for a test by itself.[^agent-sim-linux-ios-simulator]

## 相关 / Related

- 原文：[链接](https://x.com/lxfater/status/2125482125562351809)。 / Original: [link](https://x.com/lxfater/status/2125482125562351809).
- Topic: [Computer Use / Computer Use](../../topics/computer-use.md)
- Topic: [AI 协助的系统破解移植风潮 / AI-assisted OS crack-and-port wave](../../topics/ai-assisted-os-port-wave.md)
- Topic: [手机端 Agent 全链路开发 / Mobile-first agent full-chain development](../../topics/mobile-agent-dev-full-chain.md)
- Topic: [智能体算力与治理 / Agent compute and governance](../../topics/agent-compute-and-governance.md)

[^agent-sim-linux-ios-simulator]: The post claims agent-sim runs Apple's iOS simulator on ordinary Linux servers, letting cloud AI directly test iOS apps
