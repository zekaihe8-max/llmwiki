---
type: Source
title: "Pi 跟进了 Program Resume Protocol（OSC 7577）"
title_en: "Pi Adopts Program Resume Protocol (OSC 7577)"
description: "Pi 终端引入 OSC 7577 协议，支持会话中断后自动恢复"
description_en: "Pi terminal adopts OSC 7577 protocol to support automatic session recovery after interruption"
resource: https://x.com/xiaomovps/status/2125869563992797620
tags: [pi, terminal, osc-7577, session-resume, agents]
sources:
  - id: pi-program-resume-protocol-osc-7577
    resource: https://x.com/xiaomovps/status/2125869563992797620
    title: "Pi Adopts Program Resume Protocol (OSC 7577)"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-26T20:27:01+08:00
---

# Pi 跟进了 Program Resume Protocol（OSC 7577）

*Pi Adopts Program Resume Protocol (OSC 7577)*

「帖文称」Pi 已合入 Program Resume Protocol（OSC 7577），让程序主动向终端上报恢复命令与目录，以便在终端崩溃或系统重启后拉回会话；协议仅作为恢复提示，尚未进入 Pi 正式版本。[^pi-program-resume-protocol-osc-7577]

The post says Pi has merged the Program Resume Protocol (OSC 7577), allowing programs to actively report recovery commands and directories to terminals so sessions can be resumed after terminal crashes or system restarts; the protocol serves only as a recovery hint and has not yet reached Pi's official release.[^pi-program-resume-protocol-osc-7577]

## 摘要 / Summary

- 协议名为 Program Resume Protocol（OSC 7577），由 Mitchell Hashimoto 提出，Armin 一小时内合入 Pi 主线。[^pi-program-resume-protocol-osc-7577]
- The protocol is named Program Resume Protocol (OSC 7577), proposed by Mitchell Hashimoto and merged into Pi mainline by Armin within an hour.[^pi-program-resume-protocol-osc-7577]
- Pi 会在启动、恢复、分叉及新会话首条消息后上报类似 `pi --session <id>` 的恢复命令和目录；正常退出会清除，意外关闭或重启则保留。[^pi-program-resume-protocol-osc-7577]
- Pi reports recovery commands and directories such as `pi --session <id>` after startup, resume, fork, and the first message of a new session; normal exit clears them, while unexpected closure or restart retains them.[^pi-program-resume-protocol-osc-7577]
- 每个终端面板生成独立随机 Token 并做 SHA-256 校验，防止通过日志或 SSH 注入恶意命令；Pi 启动后会从环境变量中删除 OSC7577_TOKEN。[^pi-program-resume-protocol-osc-7577]
- Each terminal panel generates an independent random token with SHA-256 verification to prevent malicious command injection via logs or SSH; Pi removes OSC7577_TOKEN from environment variables after startup.[^pi-program-resume-protocol-osc-7577]
- 恢复仅为终端侧的提示而非保证，终端需支持并配置信任规则；Rex 已落地 Session Restore，但默认规则尚未放行 Pi。[^pi-program-resume-protocol-osc-7577]
- Recovery is only a hint on the terminal side, not a guarantee; terminals must support it and configure trust rules. Rex has implemented Session Restore, but default rules have not yet allowed Pi.[^pi-program-resume-protocol-osc-7577]
- 目前仅合入 Pi 主线并更新文档，最新正式版仍为 1.6.1，暂不可直接更新使用。[^pi-program-resume-protocol-osc-7577]
- Currently only merged into Pi mainline with docs updated; the latest official version remains 1.6.1 and is not yet available for direct update.[^pi-program-resume-protocol-osc-7577]

## 相关 / Related

- 原文：[链接](https://x.com/xiaomovps/status/2125869563992797620)。 / Original: [link](https://x.com/xiaomovps/status/2125869563992797620).
- Topic: [Computer Use / Computer Use](../../topics/computer-use.md)
- Topic: [UX、DX 与 AX / UX, DX, and AX](../../topics/ux-dx-and-ax.md)
- Topic: [智能体自动模式 / Agent auto mode](../../topics/agent-auto-mode.md)
- Topic: [技术滥用关切的连续性 / Continuity of technology-misuse concern](../../topics/tech-misuse-concern-continuity.md)

[^pi-program-resume-protocol-osc-7577]: Pi Adopts Program Resume Protocol (OSC 7577)
