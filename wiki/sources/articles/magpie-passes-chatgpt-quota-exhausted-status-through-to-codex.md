---
type: Source
title: "magpie 将额度用尽原样透传给 Codex"
title_en: "magpie passes ChatGPT quota-exhausted status through to Codex"
description: "帖文称 magpie v0.1.3160 已修复多个 ChatGPT 账号额度用尽时的处理，不再将官方“额度用尽”改写为普通 429，而是原样透给 Codex 以显示额度和重置时间。"
description_en: "The post says magpie v0.1.3160 now passes the official “quota exhausted” status through to Codex instead of rewriting it as a generic 429, so Codex shows quota and reset time."
resource: https://x.com/yetone/status/2118666503361057159
tags: [magpie, codex, quota, rate-limit]
sources:
  - id: yetone-magpie-quota-pass-through
    resource: https://x.com/yetone/status/2118666503361057159
    title: "magpie passes ChatGPT quota-exhausted status through to Codex"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-06T20:52:51+08:00
---

# magpie 将额度用尽原样透传给 Codex

*magpie passes ChatGPT quota-exhausted status through to Codex*

帖文称，与 magpie 相关的 v0.1.3160 版本修复了一部分问题：当多个 ChatGPT 账号全部用完额度时，magpie 此前会把官方的「额度用尽」改成普通 429，导致 Codex 不断重试并最终报错；现在会原样转给 Codex，使其能正常显示额度和重置时间。作者还提到闪屏页面可能是另一个问题，若升级后仍出现，请提供 magpie 版本及 %LOCALAPPDATA%\Codex\Logs 中带 fatal_error_broadcasted 的行以便继续排查。[^yetone-magpie-quota-pass-through]

The post says magpie v0.1.3160 fixes part of an issue: when multiple ChatGPT accounts run out of quota, magpie previously rewrote the official “quota exhausted” as a generic 429, causing Codex to keep retrying and then error; now it passes the original through to Codex so it can display quota and reset time normally. The author adds that the splash screen may be a separate issue and asks users to report magpie version and fatal_error_broadcasted log lines if it persists after upgrade.[^yetone-magpie-quota-pass-through]

## 摘要 / Summary

- 帖文称 magpie v0.1.3160 修复了多个 ChatGPT 账号额度用尽时的处理。 / The post says magpie v0.1.3160 fixed handling when multiple ChatGPT accounts exhaust quota.[^yetone-magpie-quota-pass-through]
- 此前 magpie 会把官方「额度用尽」改成普通 429，导致 Codex 一直重试然后报错。 / Previously magpie rewrote the official “quota exhausted” as a generic 429, causing Codex to keep retrying and then error.[^yetone-magpie-quota-pass-through]
- 现在原样转给 Codex，它会正常显示额度和重置时间。 / Now it passes the original through to Codex, which displays quota and reset time normally.[^yetone-magpie-quota-pass-through]
- 闪屏页可能是另一个问题，升级后若仍出现需发 magpie 版本和带 fatal_error_broadcasted 的日志行。 / The splash screen may be a separate issue; if it persists after upgrade, users should send magpie version and log lines containing fatal_error_broadcasted.[^yetone-magpie-quota-pass-through]
- 相关日志路径为 %LOCALAPPDATA%\Codex\Logs。 / The relevant log path is %LOCALAPPDATA%\Codex\Logs.[^yetone-magpie-quota-pass-through]

## 相关 / Related

- 原文：[链接](https://x.com/yetone/status/2118666503361057159)。 / Original: [link](https://x.com/yetone/status/2118666503361057159).
- Topic: [编程 Agent 体验与额度 / Coding agent UX vs quota](../../topics/coding-agent-ux-vs-quota.md)
- Topic: [用量上限 A/B 测试 / Usage limit A/B tests](../../topics/usage-limit-ab-tests.md)
- Topic: [Agent 对话内问题反馈 / In-conversation agent bug feedback](../../topics/agent-in-chat-bug-feedback.md)

[^yetone-magpie-quota-pass-through]: magpie passes ChatGPT quota-exhausted status through to Codex
