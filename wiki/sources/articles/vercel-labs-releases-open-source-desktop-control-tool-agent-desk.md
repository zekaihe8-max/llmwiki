---
type: Source
title: "Vercel Labs 推出开源桌面操作工具 agent-desktop"
title_en: "Vercel Labs releases open-source desktop control tool agent-desktop"
description: "Vercel Labs 的开源工具 agent-desktop 让 AI Agent 可通过系统无障碍接口直接操作 macOS、Windows、Linux 上的桌面应用。"
description_en: "Vercel Labs' open-source tool agent-desktop lets AI agents directly control desktop applications on macOS, Windows, and Linux via system accessibility interfaces."
resource: https://x.com/0xLogicrw/status/2117222953574351154
tags: [agents, computer-use, open-source, vercel]
sources:
  - id: 01356852c5dc08de
    resource: https://x.com/0xLogicrw/status/2117222953574351154
    title: "Vercel Labs releases open-source desktop control tool agent-desktop"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-02T20:25:40+08:00
---

# Vercel Labs 推出开源桌面操作工具 agent-desktop

*Vercel Labs releases open-source desktop control tool agent-desktop*

「帖文称」Vercel Labs 推出了开源工具 agent-desktop，让 Claude Code、Codex 等 AI Agent 能直接操作 macOS、Windows 和 Linux 上的桌面应用；演示中多个 Agent 分头在备忘录写清单、添加提醒事项、操作计算器，部分操作可在后台完成而不影响用户鼠标。该工具通过操作系统无障碍接口读取应用界面结构、识别控件并执行点击、输入，相较于依赖截图和坐标定位的传统方案，可更准确定位目标并减少视觉分析 Token 开销；Agent 每次操作后会重新检查界面，目标变化或无法确认时拒绝盲目点击，复杂窗口可先读取整体结构再深入局部。帖文还指出，视频中同时移动的彩色光标只是可视化效果，实际桌面操作仍需依次执行，双击、拖拽依赖真实鼠标输入并可能打断用户；项目最早由独立开发者 Lahfir 创建、最初仅支持 macOS，作者现已加入 Vercel Labs，项目亦随之归入 Vercel Labs。[^01356852c5dc08de]

The post says Vercel Labs has released the open-source tool agent-desktop, enabling AI agents such as Claude Code and Codex to directly operate desktop applications on macOS, Windows, and Linux. In the demo, multiple agents split tasks across Notes, reminders, and Calculator, with some operations running in the background without affecting the user's mouse. It reads application UI structure through OS accessibility interfaces, identifies buttons and input fields, and performs clicks and inputs; compared with traditional screenshot-and-coordinate methods, it locates targets more accurately and reduces visual-analysis token overhead. After each operation the agent re-checks the interface and refuses blind clicks if the target changed or cannot be confirmed, and for complex windows it can read the overall structure before drilling into local areas. The post also notes that the simultaneously moving colored cursors in the video are visualization only, actual desktop operations still execute sequentially, and double-click/drag rely on real mouse input and may interrupt the user. The project was originally created by independent developer Lahfir, initially supported only macOS, and after the author joined Vercel Labs it moved under Vercel Labs.[^01356852c5dc08de]

## 摘要 / Summary

- agent-desktop 是 Vercel Labs 推出的开源工具，支持 Claude Code、Codex 等 AI Agent 在 macOS、Windows 和 Linux 上直接操作桌面应用。 / agent-desktop is an open-source tool from Vercel Labs that lets AI agents such as Claude Code and Codex directly control desktop applications on macOS, Windows, and Linux.[^01356852c5dc08de]
- 它通过操作系统无障碍接口读取界面结构并执行点击、输入，相比截图与坐标定位方案可降低视觉分析 Token 开销。 / It reads UI structure via OS accessibility interfaces and performs clicks and inputs, reducing visual-analysis token overhead compared with screenshot-and-coordinate approaches.[^01356852c5dc08de]
- Agent 每次操作后会重新检查界面，目标变化或无法确认时拒绝盲目点击；复杂窗口可先读取整体结构再深入局部。 / After each operation the agent re-checks the interface and refuses blind clicks if the target changed or cannot be confirmed; complex windows can be scanned at the overall level before drilling into local areas.[^01356852c5dc08de]
- 演示中的多个彩色光标仅为可视化效果，实际桌面操作仍需依次执行，双击和拖拽会调用真实鼠标输入并可能打断用户。 / The multiple colored cursors in the demo are visualization only; actual desktop operations still run sequentially, and double-click or drag actions use real mouse input and may interrupt the user.[^01356852c5dc08de]
- 项目最初由独立开发者 Lahfir 创建且仅支持 macOS，作者后来加入 Vercel Labs，项目随之归入 Vercel Labs。 / The project was originally created by independent developer Lahfir with macOS-only support; after the author joined Vercel Labs, the project moved to Vercel Labs.[^01356852c5dc08de]

## 相关 / Related

- 原文：[链接](https://x.com/0xLogicrw/status/2117222953574351154)。 / Original: [link](https://x.com/0xLogicrw/status/2117222953574351154).
- Topic: [Computer Use / Computer Use](../../topics/computer-use.md)
- Topic: [编程 Agent 省 Token 工具与开销 / Coding-agent token-saving tooling and overhead](../../topics/coding-agent-token-saving-tooling.md)
- Topic: [智能体自动模式 / Agent auto mode](../../topics/agent-auto-mode.md)
- Topic: [多智能体四道基建题 / Four infra gaps for large multiagent systems](../../topics/multiagent-infra-four-problems.md)

[^01356852c5dc08de]: Vercel Labs releases open-source desktop control tool agent-desktop
