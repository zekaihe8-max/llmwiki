---
type: Source
title: "谷歌 Antigravity 重置 Gemini 额度，付费用户因两个后台扣费 Bug 炸锅"
title_en: "Google Antigravity Resets Gemini Quotas, Paid Users Outraged Over Two Background Quota-Leak Bugs"
description: "谷歌 Antigravity 为全员重置 Gemini 额度，但付费用户发现自定义助手与后台安检两个 Bug 导致额度异常快速消耗，官方尚未修复。"
description_en: "Google reset Gemini quotas for all Antigravity users, but paid users found two background bugs—custom assistant mode and security-check model cascading—causing rapid quota burn, with no official fix yet."
resource: https://x.com/lxfater/status/2126145248036356206
tags: [antigravity, gemini, quota, bug, ai-coding]
sources:
  - id: 079670cdfddbe972
    resource: https://x.com/lxfater/status/2126145248036356206
    title: "Google Antigravity Resets Gemini Quotas, Paid Users Outraged Over Two Background Quota-Leak Bugs"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-27T20:01:36+08:00
---

# 谷歌 Antigravity 重置 Gemini 额度，付费用户因两个后台扣费 Bug 炸锅

*Google Antigravity Resets Gemini Quotas, Paid Users Outraged Over Two Background Quota-Leak Bugs*

帖文称，谷歌编程工具 Antigravity 昨天为全员重置 Gemini 额度，但付费用户随即在官方论坛吐槽额度烧得过快：有 AI Pro 账号仅聊 12 次就消耗 45% 周额度。开发者在 GitHub 排查日志后指出，并非全员砍额度，而是两个后台 Bug 在偷跑额度——自定义助手模式下扣费暴涨四倍，且后台安检小模型触顶后会将请求转给大模型反复复审整段聊天记录，全部计入用户套餐。由于此前已取消独立旧池，所有模型共用总额度，重置后两小时内部分用户即被复审 49 次、白吃四分之一额度。两个 Bug 目前仍未修复，官方亦未回应。[^079670cdfddbe972]

The post says Google's coding tool Antigravity reset Gemini quotas for all users yesterday, but paid users immediately complained on the official forum that quotas were burning too fast—one AI Pro account consumed 45% of its weekly quota after only 12 chats. After checking logs on GitHub, developers said quotas were not cut across the board; two background bugs were leaking quota: custom assistant mode burned four times the normal fee for the same work, and background security checks, once the small model hit its limit, routed requests to a large model that repeatedly re-read the entire chat history, all charged to the user's plan. Since independent legacy pools were previously cancelled and all models now draw from one total quota, some users were re-reviewed 49 times within two hours after the reset, wasting about a quarter of their quota. Both bugs remain unfixed on GitHub and Google has not responded.[^079670cdfddbe972]

## 摘要 / Summary

- Antigravity 为全员重置 Gemini 额度，付费用户称 AI Pro 账号聊 12 次即烧掉 45% 周额度。[^079670cdfddbe972]
- Antigravity reset Gemini quotas for all users; paid users said an AI Pro account burned 45% of its weekly quota after 12 chats.[^079670cdfddbe972]
- 自定义助手模式下，1.5.17 客户端扣费比默认模式暴涨 4 倍。[^079670cdfddbe972]
- In custom assistant mode, the 1.5.17 client charged four times the default mode for the same work.[^079670cdfddbe972]
- 后台安检小模型触顶后，请求转给大模型复审，每次复审重读整段聊天记录并计入用户套餐。[^079670cdfddbe972]
- After the background security-check small model hit its limit, requests were routed to a large model for re-review; each re-review re-read the full chat history and counted against the user's plan.[^079670cdfddbe972]
- 有用户在重置后两小时内被复审 49 次，白吃约四分之一额度。[^079670cdfddbe972]
- One user was re-reviewed 49 times within two hours after the reset, wasting about a quarter of their quota.[^079670cdfddbe972]
- 谷歌此前取消独立旧池，所有模型从同一总额度扣费；两个 GitHub Bug 目前未修，官方未回应。[^079670cdfddbe972]
- Google previously cancelled independent legacy pools so all models draw from one total quota; the two GitHub bugs remain unfixed and Google has not responded.[^079670cdfddbe972]

## 相关 / Related

- 原文：[链接](https://x.com/lxfater/status/2126145248036356206)。 / Original: [link](https://x.com/lxfater/status/2126145248036356206).
- Topic: [编程 Agent 体验与额度 / Coding agent UX vs quota](../../topics/coding-agent-ux-vs-quota.md)
- Topic: [云平台 Auto 跨模型编排 / Cloud Auto cross-model routing](../../topics/cloud-auto-model-routing.md)
- Topic: [高端 AI 订阅价值 / Premium AI subscription value](../../topics/premium-ai-subscription-value.md)
- Topic: [用量上限 A/B 测试 / Usage limit A/B tests](../../topics/usage-limit-ab-tests.md)

[^079670cdfddbe972]: Google Antigravity Resets Gemini Quotas, Paid Users Outraged Over Two Background Quota-Leak Bugs
