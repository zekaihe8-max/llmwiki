---
type: Source
title: "Gemini API 推出工具检索功能"
title_en: "Introducing Tool Retrieval in the Gemini API"
description: "Gemini API 推出预览版工具检索，让代理按需加载工具参数架构，降低输入 Token 并提升大规模工具库的选择准确性。"
description_en: "Gemini API launches Tool Retrieval in preview, letting agents load tool parameter schemas on demand to cut input tokens and improve tool-selection accuracy at scale."
resource: https://blog.google/innovation-and-ai/technology/developers-tools/gemini-api-tool-retrieval
tags: [gemini-api, tool-retrieval, agents, token-efficiency]
sources:
  - id: 056cf0b58a3dbace
    resource: https://blog.google/innovation-and-ai/technology/developers-tools/gemini-api-tool-retrieval
    title: "Introducing Tool Retrieval in the Gemini API"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-20T08:16:31+08:00
---

# Gemini API 推出工具检索功能

*Introducing Tool Retrieval in the Gemini API*

「帖文称」Google 已在 Gemini API 的 Interactions API 中推出工具检索（Tool Retrieval）预览版，帮助代理更高效地管理大型工具库。开发者只需在请求中加入 tool_search 工具，并将希望延后的工具设为 defer_loading: true，即可仅在需要时加载参数架构，从而减少输入 Token 和延迟。该功能适用于 Gemini 3.6 及更高版本，不另行收费。[^056cf0b58a3dbace]

The post says Google has launched Tool Retrieval in preview in the Gemini API's Interactions API to help agents manage large tool libraries more efficiently. Developers add a tool_search tool to the request and set defer_loading: true on tools to defer, loading parameter schemas only when needed to reduce input tokens and latency. It applies to Gemini 3.6 and later models and carries no separate charge.[^056cf0b58a3dbace]

## 摘要 / Summary

- 工具检索允许代理保留完整工具库待命，仅在当前任务需要时加载参数架构，避免每次请求都发送全部架构。[^056cf0b58a3dbace]
- Tool Retrieval lets agents keep the full tool library on standby and load parameter schemas only when the current task needs them, avoiding sending all schemas on every request.[^056cf0b58a3dbace]
- 启用方式是在请求中添加 type 为 tool_search 的工具，并对希望延后的工具设置 defer_loading: true。[^056cf0b58a3dbace]
- To enable it, add a tool_search tool to the request and set defer_loading: true on the tools to defer.[^056cf0b58a3dbace]
- 模型仍能看到每个延后工具的名称和描述，需要时按名称请求，API 在同一次调用中加载完整架构并执行函数调用。[^056cf0b58a3dbace]
- The model still sees the name and description of each deferred tool, and when needed it requests the tool by name; the API loads the full schema and the model issues the function call within the same API call.[^056cf0b58a3dbace]
- 功能支持 Gemini 3.6 及更高模型（包括所有 Gemini 4 模型），也可与远程 MCP 服务器和前缀缓存配合使用。[^056cf0b58a3dbace]
- It supports Gemini 3.6 and later models, including all Gemini 4 models, and works with remote MCP servers and prefix caching.[^056cf0b58a3dbace]
- 工具检索不另行收费，按所调用模型的标准输入和输出 Token 费率计费。[^056cf0b58a3dbace]
- Tool Retrieval has no separate charge; input and output tokens are billed at the standard rates for the model called.[^056cf0b58a3dbace]

## 相关 / Related

- 原文：[链接](https://blog.google/innovation-and-ai/technology/developers-tools/gemini-api-tool-retrieval)。 / Original: [link](https://blog.google/innovation-and-ai/technology/developers-tools/gemini-api-tool-retrieval).
- Topic: [Agent 上下文工程 / Context engineering for agents](../../topics/context-engineering-for-agents.md)
- Topic: [智能体规模化工程 / Agent-scaled engineering](../../topics/agent-scaled-engineering.md)
- Topic: [编程 Agent 省 Token 工具与开销 / Coding-agent token-saving tooling and overhead](../../topics/coding-agent-token-saving-tooling.md)
- Topic: [项目指令与 Token 效率 / Project instructions and token efficiency](../../topics/agents-md-token-efficiency.md)

[^056cf0b58a3dbace]: Introducing Tool Retrieval in the Gemini API
