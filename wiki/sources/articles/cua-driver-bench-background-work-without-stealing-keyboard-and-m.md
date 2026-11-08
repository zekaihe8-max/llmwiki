---
type: Source
title: "Cua Driver Bench：后台干活别抢键鼠"
title_en: "Cua Driver Bench: Background Work Without Stealing Keyboard and Mouse"
description: "Cua 联合 Scale AI 推出后台电脑操作评测 Cua Driver Bench，衡量 AI Agent 在不抢占鼠标键盘、不弹窗打断的前提下完成任务的能力。"
description_en: "Cua and Scale AI launch Cua Driver Bench, a background computer-use benchmark measuring AI agents' ability to complete tasks without stealing mouse/keyboard focus or interrupting with popups."
resource: https://x.com/0xLogicrw/status/2119077068923429005
tags: [agents, computer-use, benchmark, macos]
sources:
  - id: 2c48044f90b0c05d
    resource: https://x.com/0xLogicrw/status/2119077068923429005
    title: "Cua Driver Bench: Background Work Without Stealing Keyboard and Mouse"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-08T20:06:18+08:00
---

# Cua Driver Bench：后台干活别抢键鼠

*Cua Driver Bench: Background Work Without Stealing Keyboard and Mouse*

帖文称，Cua 联合 Scale AI 推出 Cua Driver Bench，要求 AI Agent 在后台操作软件，同时不抢走用户鼠标、键盘，也不弹出窗口打断工作。在 macOS 测试中，Cua Driver 完整通过率达 58%，高于 Codex Computer Use 的 33%、Vercel agent-desktop 的 20% 和 browser-use 的 3%。帖文还称 Cua 利用 macOS 辅助功能接口直接操作后台窗口，无需将目标窗口切到前台。[^2c48044f90b0c05d]

The post says Cua, together with Scale AI, launched Cua Driver Bench, requiring AI agents to operate software in the background without taking over the user's mouse, keyboard, or interrupting with popups. In macOS tests, Cua Driver achieved a 58% full pass rate, higher than Codex Computer Use at 33%, Vercel agent-desktop at 20%, and browser-use at 3%. The post also claims Cua uses macOS accessibility interfaces to directly operate background windows without bringing target windows to the foreground.[^2c48044f90b0c05d]

## 摘要 / Summary

- Cua Driver 完整通过率 58%，Codex Computer Use 33%，Vercel agent-desktop 20%，browser-use 3%。 / Cua Driver full pass rate 58%, Codex Computer Use 33%, Vercel agent-desktop 20%, browser-use 3%.[^2c48044f90b0c05d]
- browser-use 在 40 次测试中完成 32 次任务，但 31 次干扰用户，仅 1 次完全通过。 / browser-use completed 32 of 40 tasks but disturbed the user in 31 cases, with only 1 full pass.[^2c48044f90b0c05d]
- Cua 完成 25 次任务，23 次不打扰用户，且测试中一次也没有抢走键盘焦点。 / Cua completed 25 tasks, 23 without disturbing the user, and never stole keyboard focus during testing.[^2c48044f90b0c05d]
- 所有工具均使用 Claude Sonnet 5.5，比较的是电脑操作工具，而非模型本身。 / All tools used Claude Sonnet 5.5; the comparison is of computer-use tools, not the models themselves.[^2c48044f90b0c05d]
- 测试覆盖浏览器、邮件、日历、表格等任务，每项需要在用户持续打字的情况下完成。 / Tests cover browser, email, calendar, spreadsheet and other tasks, each to be completed while the user keeps typing.[^2c48044f90b0c05d]
- Cua 利用 macOS 辅助功能接口直接定位后台应用按钮和输入框，并可单独截取窗口画面。 / Cua uses macOS accessibility interfaces to directly locate background app buttons and input fields, and can capture window screenshots separately.[^2c48044f90b0c05d]

## 相关 / Related

- 原文：[链接](https://x.com/0xLogicrw/status/2119077068923429005)。 / Original: [link](https://x.com/0xLogicrw/status/2119077068923429005).
- Topic: [Computer Use / Computer Use](../../topics/computer-use.md)
- Topic: [AI 评测入口与干活记录 / AI-eval gateways and work-record streams](../../topics/ai-eval-work-record-gateway.md)
- Topic: [社区实测对抗刷分碰瓷 / Community evals vs score hype](../../topics/community-evals-vs-score-hype.md)

[^2c48044f90b0c05d]: Cua Driver Bench: Background Work Without Stealing Keyboard and Mouse
