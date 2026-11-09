---
type: Source
title: "Pinky：让 AI Agent 在电脑上操控真实 iPhone 或 Android 手机"
title_en: "Pinky: Let any AI agent use your real iPhone or Android phone from your computer"
description: "Pinky 通过 MCP 让 Claude Code 等 AI Agent 操作真实手机，人类在环节中审批风险步骤并保留全部运行记录。"
description_en: "Pinky lets AI agents such as Claude Code operate real iPhones and Androids over MCP, with human approval for risky steps and full local run records."
resource: https://github.com/DIYgod/pinky
tags: [agents, mobile-control, mcp, human-in-the-loop, open-source]
sources:
  - id: d071452cc136d7f8
    resource: https://github.com/DIYgod/pinky
    title: "Pinky: Let any AI agent use your real iPhone or Android phone from your computer"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-09T20:04:27+08:00
---

# Pinky：让 AI Agent 在电脑上操控真实 iPhone 或 Android 手机

*Pinky: Let any AI agent use your real iPhone or Android phone from your computer*

帖文称，Pinky 是一款免费开源（Apache-2.0）桌面应用，支持 macOS、Windows 和 Linux，可让 Claude Code、Claude Desktop、Codex、Cursor 等任何兼容 MCP 的 Agent 操作真实 iPhone 或 Android 手机。所有风险步骤由 Pinky 的网关强制人工审批，运行过程在本地录屏并可导出 HTML 报告，手机端无需预装复杂组件（iOS 仅需 USB 设置，Android 需开启 USB 调试）。[^d071452cc136d7f8]

Pinky is a free, open-source (Apache-2.0) desktop app for macOS, Windows and Linux that lets any MCP-compatible agent such as Claude Code, Claude Desktop, Codex or Cursor operate a real iPhone or Android phone. Risky steps require human approval through Pinky's gateway, runs are recorded locally and exportable as HTML reports, and the phone needs little or no pre-installed software.[^d071452cc136d7f8]

## 摘要 / Summary

- 支持 macOS（Apple Silicon 和 Intel）、Windows 10/11 以及 Linux，程序体积 16–22 MB，空闲约占用 70 MB 内存和 0% CPU。 / Supports macOS (Apple silicon and Intel), Windows 10/11 and Linux; 16–22 MB download, idling at about 70 MB memory and 0% CPU on a Mac.[^d071452cc136d7f8]
- 通过 MCP 连接 Claude Code、Claude Desktop、Codex、Cursor 等 Agent，也支持 HTTP 连接，同一台电脑或远程均可使用。 / Connects agents such as Claude Code, Claude Desktop, Codex and Cursor via MCP, and works with any MCP server over stdio or HTTP, locally or remotely.[^d071452cc136d7f8]
- 付款、交易、转账、删除、拨打电话、安装应用、离开应用的链接和设置变更等风险步骤默认或可设为等待用户点击审批，Agent 无法自行批准。 / Risky steps such as payments, trades, transfers, deletions, calls, installs, outgoing links and settings changes wait for user approval by default or optionally; the agent cannot approve itself.[^d071452cc136d7f8]
- 银行、钱包和密码管理器应用对 Agent 默认不可见，密码和一次性验证码字段不可输入，新 Agent 需用户授权并只获得给定范围。 / Banking, wallet and password-manager apps are invisible to agents by default, password and OTP fields cannot be typed into, and each new agent needs user approval with only the granted scope.[^d071452cc136d7f8]
- Android 13 及以上可在隐藏的第二屏幕运行，保持手机主屏可用；每一步都有截图与分步标记的录屏，可导出 HTML 报告，全部数据留在本地电脑。 / On Android 13 and later agents work on a hidden second screen so the phone's own screen stays usable; every step is captured with screenshots and a step-marked recording, exportable as an HTML report, all stored locally.[^d071452cc136d7f8]

## 相关 / Related

- 原文：[链接](https://github.com/DIYgod/pinky)。 / Original: [link](https://github.com/DIYgod/pinky).
- Topic: [Computer Use / Computer Use](../../topics/computer-use.md)
- Topic: [手机端 Agent 全链路开发 / Mobile-first agent full-chain development](../../topics/mobile-agent-dev-full-chain.md)
- Topic: [智能体自动模式 / Agent auto mode](../../topics/agent-auto-mode.md)

[^d071452cc136d7f8]: Pinky: Let any AI agent use your real iPhone or Android phone from your computer
