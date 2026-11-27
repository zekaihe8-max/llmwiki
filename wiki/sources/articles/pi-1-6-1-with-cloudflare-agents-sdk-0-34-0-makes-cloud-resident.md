---
type: Source
title: "Pi 1.6.1 加 Cloudflare Agents SDK 0.34.0：云端常驻 Agent 更省心"
title_en: "Pi 1.6.1 with Cloudflare Agents SDK 0.34.0 makes cloud-resident agents easier to run"
description: "Pi 1.6.1 与 Cloudflare Agents SDK 0.34.0 同步更新，通过细化计费提醒、Agent 休眠唤醒、域名 Agent 搜索及终端开通付费等功能，降低云端常驻 Agent 的运维成本。"
description_en: "Pi 1.6.1 and Cloudflare Agents SDK 0.34.0 sync updates to reduce cloud-resident agent ops costs via itemized billing alerts, agent sleep/wake, domain agent search, and terminal paid-service activation."
resource: https://x.com/xiaomovps/status/2126210665585254468
tags: [agents, cloudflare, pi, billing, durable-objects, edge-compute]
sources:
  - id: pi-1-6-1-cloudflare-agents-sdk-0-34-0
    resource: https://x.com/xiaomovps/status/2126210665585254468
    title: "Pi 1.6.1 with Cloudflare Agents SDK 0.34.0 makes cloud-resident agents easier to run"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-27T20:16:54+08:00
---

# Pi 1.6.1 加 Cloudflare Agents SDK 0.34.0：云端常驻 Agent 更省心

*Pi 1.6.1 with Cloudflare Agents SDK 0.34.0 makes cloud-resident agents easier to run*

「帖文称」Pi 1.6.1 配合 Cloudflare Agents SDK 0.34.0 的更新，让跑云端常驻 Agent 更省心，重点在于拆分缓存未命中、保温、上下文压缩和推理丢弃四项独立消耗提醒，让等待中的云端 Agent 通过 Durable Object SQLite 休眠不占后台时长，并在域名后台一键开通返回 Markdown 原文的 Agent 专属搜索，同时支持在命令行或 MCP 中直接查看价格并开通 Workers Paid、R2 或 Zero Trust；文中还提醒，Pi 1.6 会话存储格式升级后，Pi 1.5 无法读取，切勿直接回滚 Worker。[^pi-1-6-1-cloudflare-agents-sdk-0-34-0]

The post says Pi 1.6.1 with Cloudflare Agents SDK 0.34.0 makes running cloud-resident agents easier, highlighting four independent consumption alerts for cache miss, cache warming, context compression, and inference discard; letting waiting cloud agents sleep via Durable Object SQLite without occupying background runtime; enabling agent-specific search returning clean Markdown via /.well-known/search from the domain dashboard; and allowing price confirmation and paid Workers/R2/Zero Trust activation directly in the terminal or MCP. It also warns that Pi 1.6 session storage format upgrades are not readable by Pi 1.5, so Workers should not be rolled back directly.[^pi-1-6-1-cloudflare-agents-sdk-0-34-0]

## 摘要 / Summary

- Pi 1.6.1 在 /settings Notices 下拆分出缓存未命中、缓存保温费用、上下文压缩成本和推理内容丢弃四个独立开关，且 Codemode models.classify() 走 OpenRouter 时可获取真实扣费。[^pi-1-6-1-cloudflare-agents-sdk-0-34-0]
- Pi 1.6.1 splits four independent toggles under /settings Notices—cache miss, cache warming cost, context compression cost, and inference content discard—and Codemode models.classify() via OpenRouter can show actual charges instead of estimates.[^pi-1-6-1-cloudflare-agents-sdk-0-34-0]
- Cloudflare Agents SDK 0.34.0 引入 ToolPark 机制，云端 Agent 等待用户确认、定时任务或子 Agent 返回时，将状态写入 Durable Object SQLite 后直接休眠，不占后台运行时长，再用 harness.signal() 唤醒。[^pi-1-6-1-cloudflare-agents-sdk-0-34-0]
- Cloudflare Agents SDK 0.34.0 adds a ToolPark mechanism so cloud agents awaiting user confirmation, scheduled tasks, or sub-agent results write state to Durable Object SQLite and sleep without occupying background runtime, then resume via harness.signal().[^pi-1-6-1-cloudflare-agents-sdk-0-34-0]
- Cloudflare 域名后台 Overview 可一键开启 Search for Agents，自动建立索引并暴露 /.well-known/search 接口，返回干净 Markdown 原文而非 AI 总结，用量按 AI Search 套餐额度计费。[^pi-1-6-1-cloudflare-agents-sdk-0-34-0]
- Cloudflare domain dashboard Overview offers one-click Search for Agents, auto-building an index and exposing a /.well-known/search endpoint that returns clean Markdown source text rather than AI summaries, billed under the AI Search plan quota.[^pi-1-6-1-cloudflare-agents-sdk-0-34-0]
- 升级 cf 命令行到 1.0.0-rc.5 以上或接入支持新协议的 MCP 客户端后，可在终端直接查看价格并确认开通 Workers Paid、R2 或 Zero Trust，前提是账号已绑定付款方式。[^pi-1-6-1-cloudflare-agents-sdk-0-34-0]
- After upgrading cf CLI to 1.0.0-rc.5+ or connecting an MCP client supporting the new protocol, users can view prices and confirm Workers Paid, R2, or Zero Trust activation directly in the terminal, provided a payment method is already bound.[^pi-1-6-1-cloudflare-agents-sdk-0-34-0]
- Pi 1.6 会话一旦跑过，底层存储格式会升级，Pi 1.5 无法读取，升级后若遇部署问题只能改代码往前修，不可直接将 Worker 回滚到 1.5 版本。[^pi-1-6-1-cloudflare-agents-sdk-0-34-0]
- Once a session runs on Pi 1.6, the underlying storage format upgrades and Pi 1.5 cannot read it; if deployment issues arise after upgrading, code must be changed forward rather than rolling the Worker back to Pi 1.5.[^pi-1-6-1-cloudflare-agents-sdk-0-34-0]

## 相关 / Related

- 原文：[链接](https://x.com/xiaomovps/status/2126210665585254468)。 / Original: [link](https://x.com/xiaomovps/status/2126210665585254468).
- Topic: [智能体算力与治理 / Agent compute and governance](../../topics/agent-compute-and-governance.md)
- Topic: [Agent 上下文工程 / Context engineering for agents](../../topics/context-engineering-for-agents.md)
- Topic: [面向 Agent 的联网搜索重做 / Agent-native web search rebuild](../../topics/agent-native-web-search.md)
- Topic: [编程 Agent 体验与额度 / Coding agent UX vs quota](../../topics/coding-agent-ux-vs-quota.md)

[^pi-1-6-1-cloudflare-agents-sdk-0-34-0]: Pi 1.6.1 with Cloudflare Agents SDK 0.34.0 makes cloud-resident agents easier to run
