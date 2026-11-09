---
type: Source
title: "billion-context：编程 Agent 的上下文压缩插件，支持十亿级 Token 长会话"
title_en: "billion-context: Context Compression Plugin for Coding Agents Enabling Billion-Token Sessions"
description: "一个可插拔的上下文压缩代理，让编程 Agent 在小窗口下跑出月级、十亿 Token 级的单会话。"
description_en: "A pluggable context-compression proxy that lets coding agents run month-long, billion-token sessions within small context windows."
resource: https://github.com/ranxianglei/billion-context
tags: [coding-agents, context-compression, token-efficiency, long-context, developer-tools]
sources:
  - id: billion-context-compression-plugin
    resource: https://github.com/ranxianglei/billion-context
    title: "billion-context: Context Compression Plugin for Coding Agents Enabling Billion-Token Sessions"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-09T20:23:20+08:00
---

# billion-context：编程 Agent 的上下文压缩插件，支持十亿级 Token 长会话

*billion-context: Context Compression Plugin for Coding Agents Enabling Billion-Token Sessions*

帖文称 billion-context 是一个位于 Agent 与模型 API 之间的压缩代理，通过增量分层摘要将已消耗的对话折叠为高保真摘要，使单会话可在 100K 窗口内持续数月、处理数十亿 Token。它向对话注入四个上下文管理工具，由模型自主决定何时压缩、解压、搜索与查看状态，且对前缀缓存友好。作者报告在 4.5 个月、三宿主、17.4 万次模型调用、187.6 亿累计输入 Token 的生产级纵向研究中，204.8K 窗口模型零窗口违规；第三方 1500 项跨基准测试显示其在 ContextBench 排名第一、LongMemEval-S 超越最佳 RAG 16.6%、MemoryAgentBench TTL 100% 存活。[^billion-context-compression-plugin]

The post describes billion-context as a compression proxy sitting between any agent and its model API, using incremental hierarchical summarization to fold consumed conversation into high-fidelity summaries so a single session can run for months—billions of tokens—within a 100K window. It injects four context-management tools (compress, decompress, search_context, acp_status) that the model calls autonomously, and is prefix-cache friendly. The author reports a 4.5-month, three-host, 174K-call, 18.76B-token production study with zero window violations on 204.8K models; independent 1,500-item benchmarks show #1 on ContextBench, +16.6% over best RAG on LongMemEval-S, and 100% survival on MemoryAgentBench TTL.[^billion-context-compression-plugin]

## 摘要 / Summary

- 支持 20+ 编程 Agent（Claude Code、Codex、OpenCode、Gemini CLI、Kimi、Qwen 等）通过原生插件、启动器或 /bili/ 前缀三种方式接入。 / Supports 20+ coding agents (Claude Code, Codex, OpenCode, Gemini CLI, Kimi, Qwen, etc.) via native plugin, launcher, or /bili/ prefix.[^billion-context-compression-plugin]
- 压缩开销 ≤2%，健康会话前缀缓存命中率 95–97%，增量可逆摘要保持缓存前缀完整。 / Compression overhead ≤2%; healthy sessions maintain 95–97% prefix-cache hit rate; incremental reversible summaries keep cache prefix intact.[^billion-context-compression-plugin]
- 生产级纵向研究：4.5 个月、三宿主、174,327 次调用、187.6 亿累计输入 Token，204.8K 窗口零违规。 / Production longitudinal study: 4.5 months, three hosts, 174,327 calls, 18.76B cumulative input tokens, zero window violations on 204.8K models.[^billion-context-compression-plugin]
- 第三方 1,500 项基准：ContextBench Utilized F1 0.3097 排名第一（成本 -58.3%），LongMemEval-S 79.20% 超最佳 RAG 16.6%，MemoryAgentBench TTL 100% 存活。 / Independent 1,500-item benchmarks: #1 on ContextBench (0.3097 Utilized F1, -58.3% cost), +16.6% over best RAG on LongMemEval-S (79.20% vs 62.60%), 100% survival on MemoryAgentBench TTL.[^billion-context-compression-plugin]
- 通过 npm 安装：`npm install -g billion-context --prefix=~/.local`，bili 命令落在 ~/.local/bin。 / Installs via npm: `npm install -g billion-context --prefix=~/.local`; bili command lands in ~/.local/bin.[^billion-context-compression-plugin]
- 原生插件与独立扩展互斥，安装器会替换旧条目并快照配置到 .bili-bak，运行时设置 BILLION_CONTEXT_NATIVE 标记防双重压缩。 / Native plugins and standalone extensions are mutually exclusive; installer replaces legacy entries, snapshots config to .bili-bak, and sets BILLION_CONTEXT_NATIVE at runtime to prevent double compression.[^billion-context-compression-plugin]

## 相关 / Related

- 原文：[链接](https://github.com/ranxianglei/billion-context)。 / Original: [link](https://github.com/ranxianglei/billion-context).
- Topic: [编程 Agent 省 Token 工具与开销 / Coding-agent token-saving tooling and overhead](../../topics/coding-agent-token-saving-tooling.md)
- Topic: [长对话默认压缩低于模型窗口 / Long-conversation default compression below model window](../../topics/long-conversation-default-compression.md)
- Topic: [Agent 上下文工程 / Context engineering for agents](../../topics/context-engineering-for-agents.md)
- Topic: [智能体规模化工程 / Agent-scaled engineering](../../topics/agent-scaled-engineering.md)

[^billion-context-compression-plugin]: billion-context: Context Compression Plugin for Coding Agents Enabling Billion-Token Sessions
