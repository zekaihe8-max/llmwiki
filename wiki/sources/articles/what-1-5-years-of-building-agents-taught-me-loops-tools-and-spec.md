---
type: Source
title: "构建 Agent 一年半的感悟：一切都是 while 循环"
title_en: "What 1.5 Years of Building Agents Taught Me: Loops, Tools, and Specs"
description: "Agent 工程的核心是不断迭代的 while 循环与工具调用，真正的难点在于后端基础与规格。"
description_en: "The core of agent engineering is an iterating while loop and tool calls; the real difficulty lies in backend fundamentals and specs."
resource: https://parthshr370.github.io/blogs/its-all-a-while-loop
tags: [agents, agent-engineering, backend-engineering, llm-specs]
sources:
  - id: agent-1-5-years-loops-tools-specs
    resource: https://parthshr370.github.io/blogs/its-all-a-while-loop
    title: "What 1.5 Years of Building Agents Taught Me: Loops, Tools, and Specs"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-22T20:21:52+08:00
---

# 构建 Agent 一年半的感悟：一切都是 while 循环

*What 1.5 Years of Building Agents Taught Me: Loops, Tools, and Specs*

「帖文称」Parth Sharma 在其博客中总结，1.5 年构建 Agent 的经验表明，所有智能体本质上都是围绕 LLM 的 while 循环，工具调用是连接组织，子 Agent 只是主循环中的一次工具调用，而构建 Agent 终究还是后端工程，学习应回归 SSE、JSON-RPC 2.0 等老规格与系统基础。[^agent-1-5-years-loops-tools-specs]

The post says Parth Sharma summarizes 1.5 years of building agents: all agents are essentially while loops around an LLM, tool calls are the connective tissue, subagents are just tool calls in the main loop, building agents is still backend engineering, and learning should return to old specs like SSE and JSON-RPC 2.0 plus system fundamentals.[^agent-1-5-years-loops-tools-specs]

## 摘要 / Summary

- Agent 核心运行逻辑是 while 循环：调用 LLM、把回复加入历史、若有工具调用则执行工具并将结果追加，直到模型不再调用工具。[^agent-1-5-years-loops-tools-specs]
- The core agent loop calls an LLM, appends replies to history, executes tool calls when present, and repeats until the model stops calling tools.[^agent-1-5-years-loops-tools-specs]
- 子 Agent 本质上是主 Agent 发起的一次工具调用，在隔离会话中运行并仅返回最终答案。[^agent-1-5-years-loops-tools-specs]
- Subagents are essentially tool calls made by the main agent, running in isolated sessions and returning only the final answer.[^agent-1-5-years-loops-tools-specs]
- 构建 Agent 仍是后端工程：需处理长会话与流、SSE 心跳、断连重连、错误回传、取消超时与幂等性，并防止大载荷冲击上下文窗口。[^agent-1-5-years-loops-tools-specs]
- Building agents is still backend engineering: long sessions and streams, SSE heartbeats, disconnect/reconnect, error feedback, cancellation/timeouts/idempotency, and protection from unbounded payloads.[^agent-1-5-years-loops-tools-specs]
- 工具应尽量精简：少上下文膨胀、输出以引用而非原文返回、更好的文件哈希与行内编辑，以降低 Token 成本并提升效果。[^agent-1-5-years-loops-tools-specs]
- Tools should be minimal: less context bloat, outputs referenced rather than dumped, better file hashes and inline edits, to reduce token cost and improve effectiveness.[^agent-1-5-years-loops-tools-specs]
- 学习 Agent 应回归规格与基础：SSE、JSON-RPC 2.0、Linux 命名空间与 cgroups 等旧规范是 MCP、A2A、ACP 等新协议的底层架构。[^agent-1-5-years-loops-tools-specs]
- Learning agents means returning to specs and fundamentals: SSE, JSON-RPC 2.0, Linux namespaces, and cgroups underlie newer protocols like MCP, A2A, and ACP.[^agent-1-5-years-loops-tools-specs]

## 相关 / Related

- 原文：[链接](https://parthshr370.github.io/blogs/its-all-a-while-loop)。 / Original: [link](https://parthshr370.github.io/blogs/its-all-a-while-loop).
- Topic: [把子 Agent 折进主循环 / Fold sub-agents into the main loop](../../topics/fold-subagents-into-main-loop.md)
- Topic: [智能体规模化工程 / Agent-scaled engineering](../../topics/agent-scaled-engineering.md)
- Topic: [Agent 上下文工程 / Context engineering for agents](../../topics/context-engineering-for-agents.md)
- Topic: [公司级 Agent Harness 五原语 / Company agent harness — five primitives](../../topics/company-agent-harness.md)

[^agent-1-5-years-loops-tools-specs]: What 1.5 Years of Building Agents Taught Me: Loops, Tools, and Specs
