---
type: Source
title: "Uber 企业级 Agent Skills 治理实战：从 1 个到 5000 多个的规模化与质量管控"
title_en: "Uber Enterprise Agent Skills Governance: Scaling to 5,000+ Skills and Quality Control"
description: "Uber 工程团队披露企业级 Agent Skills 治理实践，涵盖分层分发、减法评测与 Code Mode 降本。"
description_en: "Uber Engineering shares enterprise Agent Skills governance practices covering layered distribution, subtraction-based evaluation, and Code Mode cost reduction."
resource: https://x.com/shao__meng/status/2125052253749092674
tags: [agents, enterprise, governance, skills]
sources:
  - id: d26a1ada86ff4784
    resource: https://x.com/shao__meng/status/2125052253749092674
    title: "Uber Enterprise Agent Skills Governance: Scaling to 5,000+ Skills and Quality Control"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-24T20:29:51+08:00
---

# Uber 企业级 Agent Skills 治理实战：从 1 个到 5000 多个的规模化与质量管控

*Uber Enterprise Agent Skills Governance: Scaling to 5,000+ Skills and Quality Control*

「帖文称」Uber Engineering 披露企业级 Agent Skills 治理实践：共享 Skills 市场一年内从 1 个增长至 5000 多个，单月调用超 100 万次；规模化后重点转向质量，通过 Git 统一管理版本与审核、将 Skills 分为团队专用、核心推荐和默认启用三层，并用 aifx 命令行工具抹平 Claude Code、Codex、OpenCode 等智能体安装差异。[^d26a1ada86ff4784]

The post cites Uber Engineering's enterprise Agent Skills governance practice: the shared Skills market grew from 1 to over 5,000 in one year with over 1 million monthly invocations; after scaling, the focus shifted to quality, using Git for unified version and review management, dividing Skills into team-specific, core recommended, and default-enabled layers, and using the aifx CLI to smooth installation differences across Claude Code, Codex, and OpenCode.[^d26a1ada86ff4784]

## 摘要 / Summary

- 评测集构成约为 5% 固定输入输出样例、80% 真实提示词和 15% 作者判分案例，真实提示词重点检查执行轨迹、技能选用、工具调用顺序及错误恢复。[^d26a1ada86ff4784]
- The evaluation set consists of roughly 5% fixed input-output examples, 80% real prompts, and 15% author-scored cases, with real prompts focusing on execution trajectory, skill selection, tool call order, and error recovery.[^d26a1ada86ff4784]
- 在数仓查询 Skills 实验中，不带 Skills 时工具调用多出 13%、工具错误高达 6 倍、耗时多出 31%，带 Skills 的答案赢得 87% 的盲评比较；该结果仅适用于单个 Skill，不能推广为全平台收益。[^d26a1ada86ff4784]
- In a data warehouse query Skills experiment, running without Skills led to 13% more tool calls, up to 6x tool errors, and 31% longer duration, while Skills-assisted answers won 87% of blind comparisons; this single-Skill result cannot be generalized to platform-wide benefits.[^d26a1ada86ff4784]
- 默认预加载下，100 多个工具定义在首条提示前即占用 5 万至 7 万 token；Uber 借鉴 Cloudflare Code Mode，由 Skill 脚本通过命令行和网关调用工具，将大块结果存为文件，模型仅读取所需部分。[^d26a1ada86ff4784]
- Under default preloading, over 100 tool definitions consumed 50,000 to 70,000 tokens before the first prompt; following Cloudflare's Code Mode, Uber has Skill scripts call tools via CLI and gateway, store large results as files, and let the model read only needed parts.[^d26a1ada86ff4784]
- 线上异常会生成结构化故障报告回流给对应负责人排查、修复并补充评测，发布后检查回归；人工代码评审中反复卡住的拉取请求会沉淀为新测试用例。[^d26a1ada86ff4784]
- Online exceptions generate structured failure reports routed to the corresponding owner for investigation, fixes, and added evaluations, with regression checks after release; pull requests repeatedly stuck in human code review become new test cases.[^d26a1ada86ff4784]

## 相关 / Related

- 原文：[链接](https://x.com/shao__meng/status/2125052253749092674)。 / Original: [link](https://x.com/shao__meng/status/2125052253749092674).
- Topic: [智能体规模化工程 / Agent-scaled engineering](../../topics/agent-scaled-engineering.md)
- Topic: [Agent Skill 编写 / Agent skill authoring](../../topics/agent-skill-authoring.md)
- Topic: [Agent 上下文工程 / Context engineering for agents](../../topics/context-engineering-for-agents.md)
- Topic: [编程 Agent 省 Token 工具与开销 / Coding-agent token-saving tooling and overhead](../../topics/coding-agent-token-saving-tooling.md)

[^d26a1ada86ff4784]: Uber Enterprise Agent Skills Governance: Scaling to 5,000+ Skills and Quality Control
