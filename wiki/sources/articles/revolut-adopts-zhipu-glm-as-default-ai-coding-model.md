---
type: Source
title: "Revolut 默认智谱 GLM 作为 AI 编程模型"
title_en: "Revolut adopts Zhipu GLM as default AI coding model"
description: "Revolut 将智谱 GLM 设为约 2000 名工程师的默认 AI 编程模型，Claude Code 与 Codex 退居备选，自建推理成本降至此前约十分之一。"
description_en: "Revolut sets Zhipu GLM as the default AI coding model for about 2,000 engineers, demoting Claude Code and Codex to exception-only use while cutting inference cost to about one-tenth of prior Anthropic/OpenAI spend."
resource: https://x.com/0xLogicrw/status/2117566699461345708
tags: [revolut, zhipu, glm, ai-coding, self-hosted, inference-cost]
sources:
  - id: revolut-zhipu-glm-default-ai-coding
    resource: https://x.com/0xLogicrw/status/2117566699461345708
    title: "Revolut adopts Zhipu GLM as default AI coding model"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-03T20:17:20+08:00
---

# Revolut 默认智谱 GLM 作为 AI 编程模型

*Revolut adopts Zhipu GLM as default AI coding model*

「帖文称」欧洲估值最高的金融科技独角兽 Revolut 已把智谱 GLM 设为约 2000 名工程师的默认 AI 编程模型，Claude Code、Codex 等工具退居备选，主要留给复杂任务；公司自行部署 GLM 并开放不限量 Token，以 56 张英伟达 B200 运行 GLM 5.3，每百万 Token 综合成本约 0.30 美元，仅为之前使用 Anthropic、OpenAI 账单的十分之一，内部统计显示编码用时改善约 60%、任务交付周期改善约 70%。[^revolut-zhipu-glm-default-ai-coding]

The post says Revolut, Europe's most highly valued fintech unicorn, has set Zhipu GLM as the default AI coding model for roughly 2,000 engineers, with Claude Code and Codex relegated to fallback tools for complex tasks. Revolut self-hosts GLM on about 56 NVIDIA B200s with unlimited tokens for engineers, at roughly $0.30 per million tokens—about one-tenth of its prior Anthropic/OpenAI spend—and claims internal coding time improved by about 60% and task-to-delivery cycle time by about 70%.[^revolut-zhipu-glm-default-ai-coding]

## 摘要 / Summary

- Revolut 将智谱 GLM 设为约 2000 名工程师的默认 AI 编程模型，Claude Code、Codex 退居备选。 / Revolut sets Zhipu GLM as the default AI coding model for ~2,000 engineers; Claude Code and Codex moved to the exception list.[^revolut-zhipu-glm-default-ai-coding]
- 此前 Claude Code 每人每月 300 美元额度，效率帮助有限；4 月起自行部署 GLM 并开放不限量 Token。 / Previously a $300/person/month Claude Code quota with limited efficiency gains; since April, self-deployed GLM with unlimited tokens.[^revolut-zhipu-glm-default-ai-coding]
- 使用约 56 张英伟达 B200 运行 GLM 5.3，每百万 Token 综合成本约 0.30 美元，约为 Anthropic、OpenAI 账单的十分之一。 / ~56 NVIDIA B200s run GLM 5.3 at ~$0.30 per million tokens, about one-tenth of prior Anthropic/OpenAI bills.[^revolut-zhipu-glm-default-ai-coding]
- 工程师编码用时指标改善约 60%，接手任务到交付周期改善约 70%。 / Engineering coding time metrics improved ~60%, task intake-to-delivery cycle ~70%.[^revolut-zhipu-glm-default-ai-coding]
- Token 不限后，工程师大量使用 AI 搜索内部文档、处理 Jira 工单、查找 Slack 需求说明。 / With unlimited tokens, engineers widely use AI to search internal docs, handle Jira tickets, and find Slack requirements.[^revolut-zhipu-glm-default-ai-coding]

## 相关 / Related

- 原文：[链接](https://x.com/0xLogicrw/status/2117566699461345708)。 / Original: [link](https://x.com/0xLogicrw/status/2117566699461345708).
- Topic: [大厂推理成本效率被低估 / Big-lab inference cost efficiency is underestimated](../../topics/lab-inference-serving-cost-efficiency.md)
- Topic: [编程 Agent 体验与额度 / Coding agent UX vs quota](../../topics/coding-agent-ux-vs-quota.md)
- Topic: [智能体规模化工程 / Agent-scaled engineering](../../topics/agent-scaled-engineering.md)

[^revolut-zhipu-glm-default-ai-coding]: Revolut adopts Zhipu GLM as default AI coding model
