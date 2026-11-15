---
type: Source
title: "Antigravity 用不了的 5 个常见问题"
title_en: "5 Common Issues When Antigravity Does Not Work"
description: "帖文整理了 Google Antigravity 无法正常使用的 5 个常见问题与对应解决方法"
description_en: "The post summarizes 5 common issues and fixes for Google Antigravity not working properly"
resource: https://x.com/xiaomovps/status/2121798840605143353
tags: [antigravity, google-ai, troubleshooting, ai-subscription]
sources:
  - id: 1b94f5506b36300d
    resource: https://x.com/xiaomovps/status/2121798840605143353
    title: "5 Common Issues When Antigravity Does Not Work"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-15T20:02:58+08:00
---

# Antigravity 用不了的 5 个常见问题

*5 Common Issues When Antigravity Does Not Work*

「帖文称」近不少开通 Google AI Pro / Ultra 的用户发现 Antigravity（AGY）无法正常使用，并总结了地区不支持、账号验证、Claude 模型不可用、429/503 错误以及 403 服务停用等 5 个常见问题及解决方案。[^1b94f5506b36300d]

The post says that many users who subscribed to Google AI Pro / Ultra found Antigravity (AGY) not working properly, and summarizes five common issues and fixes: region not supported, account validation, Claude models unavailable, 429/503 errors, and 403 service disabled.[^1b94f5506b36300d]

## 摘要 / Summary

- 提示地区不支持或 Account not eligible 时，应先检查 Google 账号关联的国家或地区，如实际所在地被错误识别可通过官方表单申请更正。[^1b94f5506b36300d]
- When prompted with region not supported or Account not eligible, check the country/region linked to the Google account; if the actual location is misidentified, request correction via the official form.[^1b94f5506b36300d]
- 登录成功但一直要求验证（VALIDATION_REQUIRED）时，建议在浏览器完成 Google 账号验证，只保留一个 Google 账号登录，再重启 AGY 重新授权。[^1b94f5506b36300d]
- If login succeeds but validation is repeatedly required (VALIDATION_REQUIRED), complete Google account verification in the browser, keep only one Google account signed in, then restart AGY and re-authorize.[^1b94f5506b36300d]
- 开通 Ultra 却用不了 Claude 模型，需先确认会员权益是否生效，再检查 Opus、Sonnet 的独立额度及当前模型可用性，付费会员不代表所有模型都能无限使用。[^1b94f5506b36300d]
- If Ultra is subscribed but Claude models are unavailable, first confirm membership benefits are active, then check independent quotas for Opus and Sonnet and current model availability; paid membership does not mean unlimited use of all models.[^1b94f5506b36300d]
- 提示 429 通常与额度限制有关，可通过 /usage 检查剩余额度；503 多为服务端容量问题，可尝试切换模型、降低 Thinking 等级或稍后重试。[^1b94f5506b36300d]
- A 429 error usually relates to quota limits and remaining usage can be checked via /usage; a 503 is mostly a server-side capacity issue, so try switching models, lowering the Thinking level, or retrying later.[^1b94f5506b36300d]
- 明确显示账号服务已被停用（403 / Service has been disabled）并非普通网络问题，需通过 Google 官方渠道提交申诉，单纯更换网络或重装客户端通常无法解决。[^1b94f5506b36300d]
- If the account explicitly shows service has been disabled (403 / Service has been disabled), it is not a normal network issue and requires an appeal via official Google channels; simply changing networks or reinstalling the client usually cannot resolve it.[^1b94f5506b36300d]

## 相关 / Related

- 原文：[链接](https://x.com/xiaomovps/status/2121798840605143353)。 / Original: [link](https://x.com/xiaomovps/status/2121798840605143353).
- Topic: [Claude 订阅风控权重 / Claude subscription risk-control weights](../../topics/claude-subscription-risk-control-weights.md)
- Topic: [高端 AI 订阅价值 / Premium AI subscription value](../../topics/premium-ai-subscription-value.md)
- Topic: [用量上限 A/B 测试 / Usage limit A/B tests](../../topics/usage-limit-ab-tests.md)
- Topic: [Google Cloud 上的 Claude / Claude on Google Cloud](../../topics/claude-on-google-cloud.md)

[^1b94f5506b36300d]: 5 Common Issues When Antigravity Does Not Work
