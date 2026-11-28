---
type: Source
title: "花叔开源 Chrome 插件「反转X」"
title_en: "Alchain Open-Sources Chrome Extension 'Flip for X'"
description: "帖文称，花叔开源 Chrome 插件「反转X」，通过中英互转与辱骂隐藏帮助用户跳出 X 信息茧房。"
description_en: "According to the post, Alchain open-sourced a Chrome extension that translates posts between Chinese and English and hides abuse to help users escape X filter bubbles."
resource: https://x.com/AlchainHust/status/2126562464234176938
tags: [chrome-extension, x, translation, open-source, filter-bubble]
sources:
  - id: flip-for-x
    resource: https://x.com/AlchainHust/status/2126562464234176938
    title: "Alchain Open-Sources Chrome Extension 'Flip for X'"
generated:
  by: openrouter/baidu/ernie-5.5-flash-preview:free
  at: 2026-11-28T20:13:34+08:00
---

# 花叔开源 Chrome 插件「反转X」

*Alchain Open-Sources Chrome Extension 'Flip for X'*

帖文称，花叔开源了 Chrome 插件「反转X」：英文帖显示成中文，中文帖显示成英文，回复写中文会自动翻成英文再发出，明显辱骂会被隐藏。作者表示，该插件意在降低英文圈互动成本、增加中文圈阅读阻力，从而缓解 X 推荐算法带来的信息茧房。[^flip-for-x]

According to the post, Alchain open-sourced a Chrome extension called 'Flip for X' that renders English posts in Chinese, Chinese posts in English, auto-translates Chinese replies into English, and hides obvious abuse. The author says it aims to lower the cost of engaging with English content and add friction to Chinese content, countering algorithmic filter bubbles on X.[^flip-for-x]

## 摘要 / Summary

- 插件会把英文帖显示为中文、中文帖显示为英文，并保留原文切换入口。[^flip-for-x]
- The extension displays English posts in Chinese and Chinese posts in English, while keeping an option to view the original text.[^flip-for-x]
- 用户用中文写回复或发帖时，可自动翻成英文再发送；也可选择让某账号或某条帖子保持原文。[^flip-for-x]
- Users can write replies or posts in Chinese and have them automatically translated into English before sending; they can also keep selected accounts or posts in the original language.[^flip-for-x]
- 翻译主力使用大模型，Google 翻译作为兜底，并支持 Claude、GPT、Gemini、DeepSeek 或 OpenAI 兼容接口。[^flip-for-x]
- Translation primarily uses large models with Google Translate as fallback, and supports Claude, GPT, Gemini, DeepSeek, or OpenAI-compatible endpoints.[^flip-for-x]
- 插件没有自己的服务器，帖子文字只发送到用户选择的翻译服务，API key 和设置只存在用户浏览器里。[^flip-for-x]
- The extension has no server of its own; post text is sent only to the translation service chosen by the user, and API keys and settings are stored only in the user's browser.[^flip-for-x]
- 项目已开源，Chrome 应用商店版本仍在审核，作者建议把 GitHub 仓库地址交给 agent 辅助安装。[^flip-for-x]
- The project is open source; the Chrome Web Store version is still under review, and the author suggests giving the GitHub repository URL to an agent for installation help.[^flip-for-x]
- 帖文估算，用最贵的 Opus 5.5 快速模式约 0.5 美分一条帖子，一天 1000 条约 150 美元一个月；换国产模型可控制在每月 10 元以内。[^flip-for-x]
- The post estimates about $0.005 per post with the most expensive Opus 5.5 fast mode, roughly $150 per month at 1,000 posts per day, while domestic models could keep monthly API costs under 10 yuan.[^flip-for-x]

## 相关 / Related

- 原文：[链接](https://x.com/AlchainHust/status/2126562464234176938)。 / Original: [link](https://x.com/AlchainHust/status/2126562464234176938).
- Topic: [UX、DX 与 AX / UX, DX, and AX](../../topics/ux-dx-and-ax.md)
- Topic: [面向 Agent 的模型渠道取舍 / Model provider channel tradeoffs for agents](../../topics/agent-model-channel-tradeoffs.md)
- Topic: [高端 AI 订阅价值 / Premium AI subscription value](../../topics/premium-ai-subscription-value.md)

[^flip-for-x]: Alchain Open-Sources Chrome Extension 'Flip for X'
