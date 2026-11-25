---
type: Source
title: "Antigravity 配额与自学习估算器"
title_en: "Antigravity Quota & Self-Learning Estimator"
description: "一款零依赖的 MCP 服务器与 Antigravity 2.0 插件，用于查询 5 小时与 7 天配额并通过 /quota 指令预估任务消耗。"
description_en: "A zero-dependency MCP server and Antigravity 2.0 plugin for querying 5-hour and 7-day quotas and estimating task consumption via /quota."
resource: https://github.com/NyboTV/antigravity-quota
tags: [antigravity, mcp, quota, agent-skill]
sources:
  - id: antigravity-quota
    resource: https://github.com/NyboTV/antigravity-quota
    title: "Antigravity Quota & Self-Learning Estimator"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-24T19:57:46+08:00
---

# Antigravity 配额与自学习估算器

*Antigravity Quota & Self-Learning Estimator*

「帖文称」NyboTV 的 antigravity-quota 是一个零依赖的 Model Context Protocol（MCP）服务器兼 Antigravity 2.0 插件，可直连本地 Google Antigravity 2.0 语言服务器，通过 ConnectRPC/gRPC-Web over HTTPS 查询实时 5 小时与 7 天配额，并提供 /quota 指令来预估复杂计划的配额消耗。该工具内置 quota_learnings.json 自学习校准引擎，记录任务前估算与任务后实际配额下降，按模型和类别生成校准倍数；同时扫描本地 transcript.jsonl 日志，识别并隔离并行对话产生的配额噪声，输出归因后的真实消耗。文章还列出了 get_antigravity_quota_summary、start_quota_tracking、finish_quota_tracking 等 MCP 工具，并给出了 ~/.gemini/config 插件与 MCP Streamable HTTP 服务器的注册方式。[^antigravity-quota]

NyboTV's antigravity-quota is a zero-dependency Model Context Protocol (MCP) server and Antigravity 2.0 plugin that connects directly to the local Google Antigravity 2.0 Language Server via ConnectRPC/gRPC-Web over HTTPS. It lets AI agents query live 5-hour and 7-day quota limits and forecast consumption via the /quota slash command. A self-learning calibration engine in quota_learnings.json records pre-task estimates and post-task quota drops, producing per-model and per-category calibration multipliers. It also scans transcript.jsonl logs across active chats to isolate parallel-chat noise and attribute true task consumption. The article lists MCP tools such as get_antigravity_quota_summary, start_quota_tracking, and finish_quota_tracking, and provides installation steps for the ~/.gemini/config plugin and MCP Streamable HTTP server.[^antigravity-quota]

## 摘要 / Summary

- 零外部依赖，纯 Node.js 标准库（https、child_process、readline、fs）构建，无需 node_modules。[^antigravity-quota]
- Zero external dependencies, built with pure Node.js standard libraries (https, child_process, readline, fs), no node_modules required.[^antigravity-quota]
- 原生 /quota 斜杠指令支持实时 5 小时与每周配额状态查询，以及深度计划消耗预估。[^antigravity-quota]
- Native /quota slash command supports live 5-hour and weekly quota status checks and deep plan consumption forecasts.[^antigravity-quota]
- 基于 quota_learnings.json 的自学习校准引擎，按模型与类别生成校准倍数，随任务增多提升预测准确度。[^antigravity-quota]
- Self-learning calibration engine based on quota_learnings.json generates per-model and per-category calibration multipliers, improving accuracy over time.[^antigravity-quota]
- 通过扫描所有活跃对话的 transcript.jsonl，按令牌占比隔离并行聊天噪声，得出归因后的真实任务配额消耗。[^antigravity-quota]
- Scans transcript.jsonl across all active conversations and isolates parallel-chat noise by token share to derive attributed true task quota consumption.[^antigravity-quota]
- 该仓库还提供 get_antigravity_quota_summary、get_antigravity_model_quotas、get_antigravity_user_status、start_quota_tracking、finish_quota_tracking、get_quota_learnings 等 MCP 工具。[^antigravity-quota]
- Provides MCP tools including get_antigravity_quota_summary, get_antigravity_model_quotas, get_antigravity_user_status, start_quota_tracking, finish_quota_tracking, and get_quota_learnings.[^antigravity-quota]
- 采用 MIT 许可证，版权 2026 NyboTV。[^antigravity-quota]
- Licensed under MIT, copyright 2026 NyboTV.[^antigravity-quota]

## 相关 / Related

- 原文：[链接](https://github.com/NyboTV/antigravity-quota)。 / Original: [link](https://github.com/NyboTV/antigravity-quota).
- Topic: [编程 Agent 体验与额度 / Coding agent UX vs quota](../../topics/coding-agent-ux-vs-quota.md)
- Topic: [Agent Skill 编写 / Agent skill authoring](../../topics/agent-skill-authoring.md)
- Topic: [智能体算力与治理 / Agent compute and governance](../../topics/agent-compute-and-governance.md)

[^antigravity-quota]: Antigravity Quota & Self-Learning Estimator
