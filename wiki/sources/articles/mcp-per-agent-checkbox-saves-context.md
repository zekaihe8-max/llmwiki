---
type: Source
title: "MCP 按 Agent 勾选省上下文"
title_en: "MCP Per-Agent Checkbox Saves Context"
description: "Magpie 仅将勾选的 MCP 服务器下发给对应 Agent，避免每次请求携带全部工具定义，从而节省上下文。"
description_en: "Magpie sends only the MCP servers checked for each Agent, avoiding full tool definitions on every request and saving context."
resource: https://x.com/yetone/status/2117943945259069746
tags: [mcp, agents, context-saving, token-efficiency]
sources:
  - id: mcp-per-agent-context-saving
    resource: https://x.com/yetone/status/2117943945259069746
    title: "MCP Per-Agent Checkbox Saves Context"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-04T19:56:26+08:00
---

# MCP 按 Agent 勾选省上下文

*MCP Per-Agent Checkbox Saves Context*

「帖文称」Claude Code 会按需加载工具，而其他 Agent 大多在每次请求中都带上全部工具定义；Magpie 则只把在「资源库 → MCP」中为该 Agent 勾选的 MCP 服务器交给它，因此只勾选需要的服务器即可节省大量上下文。[^mcp-per-agent-context-saving]

The post claims that Claude Code loads tools on demand, while most other Agents carry all tool definitions on every request; Magpie only passes the MCP servers checked for that Agent in "Resource Library → MCP", so checking only the needed ones saves substantial context.[^mcp-per-agent-context-saving]

## 摘要 / Summary

- Claude Code 会按需加载工具。 / Claude Code loads tools on demand.[^mcp-per-agent-context-saving]
- 其他 Agent 大多每次请求都带上全部工具定义。 / Most other Agents bring all tool definitions on every request.[^mcp-per-agent-context-saving]
- Magpie 只把勾选的 MCP 服务器交给对应 Agent。 / Magpie only gives the Agent the MCP servers checked for it.[^mcp-per-agent-context-saving]
- 在「资源库 → MCP」里每个 Agent 只勾需要的那几个。 / In "Resource Library → MCP", check only the few needed MCP servers for each Agent.[^mcp-per-agent-context-saving]
- 这样能省下不少上下文。 / This saves a substantial amount of context.[^mcp-per-agent-context-saving]

## 相关 / Related

- 原文：[链接](https://x.com/yetone/status/2117943945259069746)。 / Original: [link](https://x.com/yetone/status/2117943945259069746).
- Topic: [Agent 上下文工程 / Context engineering for agents](../../topics/context-engineering-for-agents.md)
- Topic: [编程 Agent 省 Token 工具与开销 / Coding-agent token-saving tooling and overhead](../../topics/coding-agent-token-saving-tooling.md)
- Topic: [跨 Agent 统一资源库 / Unified cross-agent resource library](../../topics/unified-agent-resource-library.md)
- Topic: [Claude Code 作者与社区话筒 / Claude Code authorship and community voice](../../topics/claude-code-authorship-and-voice.md)

[^mcp-per-agent-context-saving]: MCP Per-Agent Checkbox Saves Context
