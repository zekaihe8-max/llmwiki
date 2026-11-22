---
type: Source
title: "开源和本地工具可用 ChatGPT 套餐额度调用 GPT-6.1/6.2 Sol"
title_en: "Open-source and local tools can use ChatGPT plan quota to call GPT-6.1/6.2 Sol"
description: "OpenAI 发布面向开源和本地应用的「Sign in with ChatGPT」文档，允许免 API key 用现有 ChatGPT 订阅额度运行 GPT-6.1 Sol 和 GPT-6.2 Sol，功能仍处预览。"
description_en: "OpenAI published Sign in with ChatGPT docs for open-source and local apps, allowing GPT-6.1 Sol and GPT-6.2 Sol to run on existing ChatGPT subscription quota without an API key; the feature remains in preview."
resource: https://x.com/0xlangeai/status/2124408983830319232
tags: [openai, chatgpt, sign-in-with-chatgpt, local-deployment, api-quota, preview]
sources:
  - id: signin-with-chatgpt-local-quota
    resource: https://x.com/0xlangeai/status/2124408983830319232
    title: "Open-source and local tools can use ChatGPT plan quota to call GPT-6.1/6.2 Sol"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-22T20:42:08+08:00
---

# 开源和本地工具可用 ChatGPT 套餐额度调用 GPT-6.1/6.2 Sol

*Open-source and local tools can use ChatGPT plan quota to call GPT-6.1/6.2 Sol*

「帖文称」OpenAI 刚刚发布面向开源和本地应用的「Sign in with ChatGPT」文档；蓝哥AI引述 Tekon Burns 指出，开发者可用 OAuth 登录并走 Responses API，直接用现有 ChatGPT 套餐额度运行 GPT-6.1 Sol 和 GPT-6.2 Sol，无需另配 API key。文档仅覆盖开源和本地部署，付费或远程托管仍需另填意向表；应用无法读取 ChatGPT 历史对话，且需满足不存档、流式要求。ChatGPT 设置可给单个应用设周限额，Plus 用户的五小时额度在各应用间共用，Pro 没有该限制；功能仍处预览，不少接口能力暂未开放。[^signin-with-chatgpt-local-quota]

The post says OpenAI just released Sign in with ChatGPT documentation for open-source and local apps; citing Tekon Burns, 0xlangeai notes developers can log in via OAuth and use the Responses API to run GPT-6.1 Sol and GPT-6.2 Sol on their existing ChatGPT plan quota without a separate API key. The docs cover only open-source and local deployment; paid or remote hosting still requires an intent form. Apps cannot access ChatGPT history and must not archive while using streaming. Per-app weekly quotas can be set in ChatGPT settings; Plus users share a five-hour quota across apps while Pro has no such limit. The feature remains in preview, with many interface capabilities not yet open.[^signin-with-chatgpt-local-quota]

## 摘要 / Summary

- OpenAI 为开源和本地应用发布「Sign in with ChatGPT」文档，可直接用现有 ChatGPT 套餐额度，无需另配 API key。[^signin-with-chatgpt-local-quota]
- OpenAI published Sign in with ChatGPT docs for open-source and local apps, letting them use existing ChatGPT plan quota without a separate API key.[^signin-with-chatgpt-local-quota]
- 支持 GPT-6.1 Sol 和 GPT-6.2 Sol，登录走 OAuth，请求走 Responses API，要求流式且不存档，应用拿不到 ChatGPT 历史对话。[^signin-with-chatgpt-local-quota]
- Supports GPT-6.1 Sol and GPT-6.2 Sol via OAuth login and the Responses API; streaming is required, archiving is not allowed, and apps cannot access ChatGPT history.[^signin-with-chatgpt-local-quota]
- 也可接入 Codex app-server；付费或远程托管仍需另填意向表。[^signin-with-chatgpt-local-quota]
- Can also connect to Codex app-server; paid or remote hosting still requires filling out an intent form.[^signin-with-chatgpt-local-quota]
- ChatGPT 设置可给单个应用设周限额；Plus 的五小时额度是各应用共用的，Pro 没有这个五小时限制。[^signin-with-chatgpt-local-quota]
- ChatGPT settings allow setting a weekly quota per app; Plus users share a five-hour quota across apps, while Pro has no five-hour limit.[^signin-with-chatgpt-local-quota]
- 该功能仍在预览，不少接口能力暂时未开放。[^signin-with-chatgpt-local-quota]
- The feature is still in preview, and many interface capabilities are not yet open.[^signin-with-chatgpt-local-quota]

## 相关 / Related

- 原文：[链接](https://x.com/0xlangeai/status/2124408983830319232)。 / Original: [link](https://x.com/0xlangeai/status/2124408983830319232).
- Topic: [面向 Agent 的模型渠道取舍 / Model provider channel tradeoffs for agents](../../topics/agent-model-channel-tradeoffs.md)
- Topic: [编程 Agent 体验与额度 / Coding agent UX vs quota](../../topics/coding-agent-ux-vs-quota.md)
- Topic: [本地开放助手与机器人小模型 / Local open models for assistants and robots](../../topics/local-open-assistant-models.md)
- Topic: [高端 AI 订阅价值 / Premium AI subscription value](../../topics/premium-ai-subscription-value.md)

[^signin-with-chatgpt-local-quota]: Open-source and local tools can use ChatGPT plan quota to call GPT-6.1/6.2 Sol
