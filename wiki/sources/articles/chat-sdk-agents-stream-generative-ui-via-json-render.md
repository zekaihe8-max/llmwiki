---
type: Source
title: "Chat SDK Agent 可通过 json-render 流式渲染生成式 UI"
title_en: "Chat SDK Agents Stream Generative UI via json-render"
description: "Vercel Changelog 宣布，Chat SDK Agent 现在可使用 json-render 流式输出生成式 UI 卡片，并由各平台适配器以原生格式发布。"
description_en: "Vercel Changelog announces that Chat SDK agents can now stream generative UI cards via json-render, with platform adapters publishing them in native formats."
resource: https://vercel.com/changelog/json-render-and-chat-sdk-agents
tags: [agents, chat-sdk, json-render, streaming-ui]
sources:
  - id: vercel-json-render-chat-sdk-agents
    resource: https://vercel.com/changelog/json-render-and-chat-sdk-agents
    title: "Chat SDK Agents Stream Generative UI via json-render"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-09T08:07:17+08:00
---

# Chat SDK Agent 可通过 json-render 流式渲染生成式 UI

*Chat SDK Agents Stream Generative UI via json-render*

帖文称，开发者现在可以从 Chat SDK Agent 流式传输生成式 UI，使用 json-render 将 Agent 撰写的 JSON 规范转换为 Chat SDK 卡片。各适配器再将卡片以平台原生格式发布，例如 Slack 的 Block Kit 和 Teams 的 Adaptive Cards。目录涵盖表格、图表、按钮等组件，无需为每种消息形状单独构建和维护工具。[^vercel-json-render-chat-sdk-agents]

The post says developers can now stream generative UI from Chat SDK agents using json-render, which converts an agent-written JSON spec into a Chat SDK card. Each adapter then posts the card in its platform's native format, such as Block Kit on Slack and Adaptive Cards on Teams. The catalog covers tables, charts, buttons, and more, so there is no separate tool to build and maintain for each message shape.[^vercel-json-render-chat-sdk-agents]

## 摘要 / Summary

- streamCard 在根元素有内容后发布卡片，并随新元素流式更新，默认最多每 500 ms 编辑一次。 / streamCard posts the card once its root element has content and updates as new elements stream in, editing at most once every 500 ms by default.[^vercel-json-render-chat-sdk-agents]
- toCard 会将每个元素的 prop 与组件 schema 校验，规范无效时抛出 CardSpecError，并为每个问题生成可读 issue。 / toCard validates every element's props against its component schema and throws CardSpecError for invalid specs, producing a readable issue for each problem.[^vercel-json-render-chat-sdk-agents]
- Slack 适配器会将超出平台上限的第二个表格降级为代码块，开发者可传入限制以拒绝此类规范。 / The Slack adapter degrades a second table past platform caps into a code block; developers can pass limits to reject such specs.[^vercel-json-render-chat-sdk-agents]
- 示例代码使用 anthropic/claude-haiku-5.5 模型，并以 catalog.prompt 作为系统提示词调用 streamText。 / The example code uses the anthropic/claude-haiku-5.5 model and calls streamText with catalog.prompt as the system prompt.[^vercel-json-render-chat-sdk-agents]
- 官方提供文档与 json-render 聊天 SDK 演示 playground 供入门。 / Official documentation and a chat-sdk-demo.json-render.dev playground are available to get started.[^vercel-json-render-chat-sdk-agents]

## 相关 / Related

- 原文：[链接](https://vercel.com/changelog/json-render-and-chat-sdk-agents)。 / Original: [link](https://vercel.com/changelog/json-render-and-chat-sdk-agents).
- Topic: [Agent Skill 编写 / Agent skill authoring](../../topics/agent-skill-authoring.md)
- Topic: [Agent Skills 开放标准 / Agent Skills open standard](../../topics/agent-skills-open-standard.md)
- Topic: [Agent 对话内问题反馈 / In-conversation agent bug feedback](../../topics/agent-in-chat-bug-feedback.md)
- Topic: [设计↔代码与自带 Claude/Codex 订阅 / Design-to-code tools with bring-your-own Claude/Codex subscriptions](../../topics/design-to-code-byo-subscriptions.md)

[^vercel-json-render-chat-sdk-agents]: Chat SDK Agents Stream Generative UI via json-render
