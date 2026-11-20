---
type: Source
title: "Gemini API 推出 Tool Retrieval，按需加载工具参数 schema"
title_en: "Introducing Tool Retrieval in the Gemini API"
description: "Gemini API 在 Interactions API 中推出预览版 Tool Retrieval，让 Agent 按需加载工具参数 schema，以降低输入 Token 并保持大规模工具库的选型准确率。"
description_en: "Gemini API introduces Tool Retrieval in preview in the Interactions API, letting agents load tool parameter schemas on demand to reduce input tokens and maintain accurate tool selection at scale."
resource: https://x.com/GoogleAIStudio/status/2123489911684866251
tags: [gemini-api, tool-retrieval, function-calling, agents, token-optimization]
sources:
  - id: gemini-tool-retrieval
    resource: https://x.com/GoogleAIStudio/status/2123489911684866251
    title: "Introducing Tool Retrieval in the Gemini API"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-20T08:16:02+08:00
---

# Gemini API 推出 Tool Retrieval，按需加载工具参数 schema

*Introducing Tool Retrieval in the Gemini API*

Google AI Studio 发帖称，Gemini API 现已在 Interactions API 中推出预览版 Tool Retrieval，允许代理将完整工具库置于待命状态，仅在当前任务需要时加载参数 schema，以减少输入 Token 并提升大规模工具选型的准确性。[^gemini-tool-retrieval]

Google AI Studio announces that Tool Retrieval is now in preview in the Gemini Interactions API, letting agents keep a full tool library on standby and load parameter schemas only when needed to reduce input tokens and improve tool-selection accuracy at scale.[^gemini-tool-retrieval]

## 摘要 / Summary

- Tool Retrieval 目前在 Gemini Interactions API 中处于预览阶段；开发者通过添加 tool_search 工具，并对希望延后加载的工具设置 defer_loading: true 来启用。[^gemini-tool-retrieval]
- Tool Retrieval is in preview in the Gemini Interactions API; developers enable it by adding a tool_search tool and setting defer_loading: true on tools to defer.[^gemini-tool-retrieval]
- 模型仍能看到每个延后工具的名称与描述，但参数 schema 会保留在上下文之外，直到模型按名称请求该工具。[^gemini-tool-retrieval]
- The model sees the name and description of every deferred tool, but parameter schemas stay out of context until the model requests a specific tool by name.[^gemini-tool-retrieval]
- Schema 检索与函数调用在单次 API 请求内完成，tool_search_call、tool_search_result 与 function_call 等步骤会记录在 interaction.steps 中。[^gemini-tool-retrieval]
- Schema lookup and function calling occur within a single API request, with tool_search_call, tool_search_result, and function_call steps recorded in interaction.steps.[^gemini-tool-retrieval]
- 无需构建或托管索引，检索由 Gemini 在服务器端完成；功能还支持前缀缓存以及 Gemini API 中的远程 MCP 服务器。[^gemini-tool-retrieval]
- No index needs to be built or hosted; Gemini performs server-side search, and the feature also supports prefix caching and remote MCP servers in the Gemini API.[^gemini-tool-retrieval]
- 客户端检索同样受支持，通过将 tool_search 声明为 execution: "client" 即可让应用自行执行查找，并在对话中途暴露新工具。[^gemini-tool-retrieval]
- Client-side retrieval is supported by declaring tool_search with execution: "client", allowing apps to run their own lookup and expose new tools mid-conversation.[^gemini-tool-retrieval]

## 相关 / Related

- 原文：[链接](https://x.com/GoogleAIStudio/status/2123489911684866251)。 / Original: [link](https://x.com/GoogleAIStudio/status/2123489911684866251).
- Topic: [Agent 上下文工程 / Context engineering for agents](../../topics/context-engineering-for-agents.md)
- Topic: [智能体规模化工程 / Agent-scaled engineering](../../topics/agent-scaled-engineering.md)
- Topic: [编程 Agent 省 Token 工具与开销 / Coding-agent token-saving tooling and overhead](../../topics/coding-agent-token-saving-tooling.md)

[^gemini-tool-retrieval]: Introducing Tool Retrieval in the Gemini API
