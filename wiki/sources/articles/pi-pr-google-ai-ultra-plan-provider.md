---
type: Source
title: "Pi 拟接入 Google AI Ultra 计划提供商"
title_en: "Pi PR: Google AI Ultra Plan Provider"
description: "该草稿 PR 为 Pi 编程智能体新增 Google AI Ultra 计划提供商，经 Google OAuth 与 Interactions API 使用 Gemini 模型额度。"
description_en: "This draft PR adds a Google AI Ultra plan provider to the Pi coding agent, using Google OAuth and the Interactions API to access Gemini model quota."
resource: https://github.com/earendil-works/pi/pull/12614
tags: [coding-agent, google-ai, subscription-quota, oauth, gemini]
sources:
  - id: google-ai-plan-provider
    resource: https://github.com/earendil-works/pi/pull/12614
    title: "Pi PR: Google AI Ultra Plan Provider"
generated:
  by: openrouter/baidu/ernie-5.5-flash-preview:free
  at: 2026-11-28T20:00:50+08:00
---

# Pi 拟接入 Google AI Ultra 计划提供商

*Pi PR: Google AI Ultra Plan Provider*

GitHub 上的 PR #12614 显示，davidbrai 提交草稿，拟将 13 个提交从 google-ai-plan 分支合入 pi 的 main，新增 Google AI Ultra 计划提供商。帖文称该提供商通过带 PKCE 和 DPoP 绑定刷新令牌的 Google 循环回 OAuth 登录，并经 Interactions API 的 createPerUserQuota 端点使用计划中的 Gemini 模型；评论区还称这是 Pi 的官方 Google 端点且 Google 仅批准 Pi。[^google-ai-plan-provider]

GitHub PR #12614 shows a draft by davidbrai to merge 13 commits from the google-ai-plan branch into pi's main, adding a Google AI Ultra plan provider. The post says the provider signs in with Google via loopback OAuth with PKCE and DPoP-bound refresh tokens and uses the plan's Gemini models through the Interactions API createPerUserQuota endpoint; comments also claim it is the official Google endpoint for Pi and approved by Google for Pi only.[^google-ai-plan-provider]

## 摘要 / Summary

- PR #12614 是 davidbrai 提交的草稿，拟将 13 个提交从 google-ai-plan 分支合入 earendil-works/pi 的 main。[^google-ai-plan-provider]
- PR #12614 is a draft by davidbrai to merge 13 commits from the google-ai-plan branch into earendil-works/pi's main.[^google-ai-plan-provider]
- 新增的 google-ai-plan 提供商使用带 PKCE 和 DPoP 绑定刷新令牌的 Google 循环回 OAuth 登录，并通过 Interactions API 的 createPerUserQuota 端点使用计划中的 Gemini 模型。[^google-ai-plan-provider]
- The new google-ai-plan provider uses Google loopback OAuth with PKCE and DPoP-bound refresh tokens and accesses the plan's Gemini models through the Interactions API createPerUserQuota endpoint.[^google-ai-plan-provider]
- 该提供商支持流式输出、带签名 thought replay 的思考、工具调用和用量统计，并处理每日限额、模型不在计划中、登录、资格和 kill switch 等计划错误。[^google-ai-plan-provider]
- The provider supports streaming, thinking with signed thought replay, tool calls, and usage, and handles plan errors such as daily limit, model not on plan, sign-in, eligibility, and kill switch.[^google-ai-plan-provider]
- pi-ai 不附带 Google 客户端；coding-agent 将 pi 自己的客户端传给 googleAiPlanProvider()，其他应用或分叉必须注册自己的 Google OAuth 客户端，默认模型为 gemini-4-hydrogen。[^google-ai-plan-provider]
- pi-ai ships no Google client; coding-agent passes pi's own client to googleAiPlanProvider(), while other apps or forks must register their own Google OAuth client, and the default model is gemini-4-hydrogen.[^google-ai-plan-provider]
- 后续提交修复了 google-interactions 超时只覆盖等待响应头、在 ErrorInfo 缺失时按消息识别 Google scope 错误、登录不再存储账户邮箱、每日限额重置时间显示等问题，并补充测试与文档。[^google-ai-plan-provider]
- Later commits fix google-interactions timeout to cover only the wait for response headers, recognize Google scope errors by message when ErrorInfo is missing, stop storing the account email at sign-in, fix daily-limit reset time display, and add tests and docs.[^google-ai-plan-provider]
- 评论区称这是 Pi 的官方 Google 端点且 Google 仅批准 Pi；同时有分叉或其他项目提及、移植该 PR。[^google-ai-plan-provider]
- Comments claim this is the official Google endpoint for Pi and that Google approved it for Pi only; forks and other projects also mention or port the PR.[^google-ai-plan-provider]

## 相关 / Related

- 原文：[链接](https://github.com/earendil-works/pi/pull/12614)。 / Original: [link](https://github.com/earendil-works/pi/pull/12614).
- Topic: [编程 Agent 体验与额度 / Coding agent UX vs quota](../../topics/coding-agent-ux-vs-quota.md)
- Topic: [面向 Agent 的模型渠道取舍 / Model provider channel tradeoffs for agents](../../topics/agent-model-channel-tradeoffs.md)
- Topic: [应用内模型合作伙伴 / In-app model partnerships](../../topics/in-app-model-partnerships.md)

[^google-ai-plan-provider]: Pi PR: Google AI Ultra Plan Provider
