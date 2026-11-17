---
type: Source
title: "Together 用 Agent 测自家产品，失败的往往不是模型"
title_en: "Together Tests Its Own Products with Agents; Failure Is Often Not the Model"
description: "Together 团队利用 Agent 评测自家 SDK、CLI 和文档，发现文档与 Skills 问题常比模型更导致失败。"
description_en: "The Together team uses agents to evaluate its own SDK, CLI, and docs, finding documentation and Skills issues often cause failures more than the model."
resource: https://x.com/shao__meng/status/2122486376981795286
tags: [agents, ai-eval, agent-skills, product-documentation]
sources:
  - id: together-agent-evals-practice
    resource: https://x.com/shao__meng/status/2122486376981795286
    title: "Together Tests Its Own Products with Agents; Failure Is Often Not the Model"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-17T20:01:35+08:00
---

# Together 用 Agent 测自家产品，失败的往往不是模型

*Together Tests Its Own Products with Agents; Failure Is Often Not the Model*

「帖文称」Together 团队分享了用 Coding Agent 测试自家 SDK、命令行和文档的实践：把真实开发需求写成任务，在沙箱中运行并由模型裁判判断通过、未完成或失败。团队发现，失败往往不只来自模型，还来自文档和 Skills；合并 14 个 Skill 为统一入口最初反而导致通过率下降，优化说明与示例后通过率回升至约 97.2%。[^together-agent-evals-practice]

The post says the Together team shares its practice of using Coding Agents to test its own SDK, CLI, and documentation: real development needs are written as tasks, run in a sandbox, and judged by a model as passed, incomplete, or failed. The team found that failures often stem not only from models but also from documentation and Skills; merging 14 Skills into a unified entry initially lowered the pass rate, and after refining instructions and examples, the pass rate recovered to about 97.2%.[^together-agent-evals-practice]

## 摘要 / Summary

- 团队把查询 GPU 集群可用区、找最便宜机型并生成预订命令（禁止真实下单）写成任务，同一任务比较“只提示词”“接入文档 MCP”“提供 Skills”三种配置。[^together-agent-evals-practice]
- The team turned queries for GPU cluster availability, finding the cheapest instance, and generating booking commands (no real orders) into tasks, comparing three configurations: prompt-only, docs MCP, and Skills.[^together-agent-evals-practice]
- 早期 GPU 集群任务中，Sonnet 4.6 带 Skills 仅 15 次成功 4 次，Opus 4.8 同配置 14 次成功 13 次；补充两句话指向实时区域接口和价格表后，Skills 配置下所有测试模型全部通过。[^together-agent-evals-practice]
- In an early GPU cluster task, Sonnet 4.6 with Skills succeeded only 4 of 15 times, while Opus 4.8 under the same config succeeded 13 of 14 times; after adding two sentences pointing to the real-time region API and price table, all tested models passed under the Skills configuration.[^together-agent-evals-practice]
- 评测还发现错误信息指向不存在的接口，重试请求返回 404；只测最强模型可能掩盖这些产品问题。[^together-agent-evals-practice]
- The eval also found error messages pointing to nonexistent interfaces and retry requests returning 404; testing only the strongest model may mask these product issues.[^together-agent-evals-practice]
- 将 14 个分散 Skill 合并为统一入口后，首次 72 次运行仅通过 54 次，未完成从 7 次升至 18 次，单次费用翻倍；优化入口说明、更新模型并修复示例后，72 次运行通过 70 次（约 97.2%），平均耗时下降约 20%，费用回到原先水平。[^together-agent-evals-practice]
- After merging 14 dispersed Skills into a unified entry, the first 72 runs passed only 54 times, incompletes rose from 7 to 18, and per-run cost doubled; after optimizing entry descriptions, updating models, and fixing examples, 70 of 72 runs passed (about 97.2%), average time dropped about 20%, and cost returned to prior levels.[^together-agent-evals-practice]
- 团队不仅看失败记录，也复查成功轨迹：完成任务不代表文档清楚，Agent 可能只是反复绕路后碰巧成功。[^together-agent-evals-practice]
- The team reviews not only failure traces but also successful ones: completing a task does not mean the docs are clear; the Agent may have succeeded only after repeated detours.[^together-agent-evals-practice]

## 相关 / Related

- 原文：[链接](https://x.com/shao__meng/status/2122486376981795286)。 / Original: [link](https://x.com/shao__meng/status/2122486376981795286).
- Topic: [Agent Skill 编写 / Agent skill authoring](../../topics/agent-skill-authoring.md)
- Topic: [AI 评测入口与干活记录 / AI-eval gateways and work-record streams](../../topics/ai-eval-work-record-gateway.md)
- Topic: [智能体规模化工程 / Agent-scaled engineering](../../topics/agent-scaled-engineering.md)
- Topic: [UX、DX 与 AX / UX, DX, and AX](../../topics/ux-dx-and-ax.md)

[^together-agent-evals-practice]: Together Tests Its Own Products with Agents; Failure Is Often Not the Model
