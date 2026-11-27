---
type: Source
title: "DeepSeek 正式公开工具延迟加载机制"
title_en: "DeepSeek Officially Publishes Deferred Tool Loading Mechanism"
description: "DeepSeek API 面向 deepseek-flash 模型的 Anthropic Messages 和 OpenAI Responses 接口开放工具延迟加载，支持按需检索工具并将定义追加到对话末尾，以节省 Token 并保留缓存前缀。"
description_en: "DeepSeek API opens deferred tool loading for deepseek-flash on Anthropic Messages and OpenAI Responses interfaces, supporting on-demand tool retrieval and appending definitions to save tokens while preserving cache prefixes."
resource: https://x.com/0xLogicrw/status/2126264363635953768
tags: [deepseek, api, agents, context-engineering, deferred-tool-loading, mcp]
sources:
  - id: deepseek-deferred-tool-loading
    resource: https://x.com/0xLogicrw/status/2126264363635953768
    title: "DeepSeek Officially Publishes Deferred Tool Loading Mechanism"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-27T20:14:20+08:00
---

# DeepSeek 正式公开工具延迟加载机制

*DeepSeek Officially Publishes Deferred Tool Loading Mechanism*

「帖文称」DeepSeek 今日更新官方 API 文档，正式公开工具延迟加载（Deferred Tool Loading）机制，允许客户端按需检索工具并将新增工具定义追加到对话末尾，以减少无关工具对上下文的 Token 占用，同时不破坏已有缓存前缀。该能力目前仅在 deepseek-flash 模型的 Anthropic Messages 和 OpenAI Responses 接口中提供；Anthropic 与 OpenAI 均已支持类似机制。帖文还称，相关实现早在今年 9 月的 DeepSeek Harness 代码中出现，10 月已有开发者实测验证。[^deepseek-deferred-tool-loading]

The post says DeepSeek updated its official API documentation today to officially publish the Deferred Tool Loading mechanism, allowing clients to retrieve tools on demand and append new tool definitions to the end of the conversation, reducing irrelevant tool context token usage without breaking existing cache prefixes. The capability is currently available only in the deepseek-flash model's Anthropic Messages and OpenAI Responses interfaces; Anthropic and OpenAI already support similar mechanisms. The post also says the related implementation appeared in DeepSeek Harness code as early as September this year, with developers verifying it in October.[^deepseek-deferred-tool-loading]

## 摘要 / Summary

- DeepSeek 更新官方 API 文档，正式公开工具延迟加载（Deferred Tool Loading）机制。[^deepseek-deferred-tool-loading]
- DeepSeek updated its official API documentation to officially publish the Deferred Tool Loading mechanism.[^deepseek-deferred-tool-loading]
- 客户端可按需检索工具，并将新增工具定义追加到对话末尾，减少无关工具占用且不破坏缓存前缀。[^deepseek-deferred-tool-loading]
- Clients can retrieve tools on demand and append new tool definitions to the end of the conversation, reducing irrelevant tool context usage without breaking existing cache prefixes.[^deepseek-deferred-tool-loading]
- 该能力目前仅在 deepseek-flash 模型的 Anthropic Messages 和 OpenAI Responses 接口中提供。[^deepseek-deferred-tool-loading]
- The capability is currently available only in the deepseek-flash model's Anthropic Messages and OpenAI Responses interfaces.[^deepseek-deferred-tool-loading]
- Anthropic 和 OpenAI 均已支持类似机制。[^deepseek-deferred-tool-loading]
- Anthropic and OpenAI already support similar mechanisms.[^deepseek-deferred-tool-loading]
- 帖文称，相关实现早在今年 9 月的 DeepSeek Harness 代码中出现，10 月已有开发者实测验证。[^deepseek-deferred-tool-loading]
- The post says the related implementation appeared in DeepSeek Harness code as early as September this year, with developers verifying it in October.[^deepseek-deferred-tool-loading]

## 相关 / Related

- 原文：[链接](https://x.com/0xLogicrw/status/2126264363635953768)。 / Original: [link](https://x.com/0xLogicrw/status/2126264363635953768).
- Topic: [Agent 上下文工程 / Context engineering for agents](../../topics/context-engineering-for-agents.md)
- Topic: [编程 Agent 省 Token 工具与开销 / Coding-agent token-saving tooling and overhead](../../topics/coding-agent-token-saving-tooling.md)
- Topic: [公司级 Agent Harness 五原语 / Company agent harness — five primitives](../../topics/company-agent-harness.md)

[^deepseek-deferred-tool-loading]: DeepSeek Officially Publishes Deferred Tool Loading Mechanism
