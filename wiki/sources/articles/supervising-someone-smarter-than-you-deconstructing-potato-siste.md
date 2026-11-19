---
type: Source
title: "监督一个比你聪明的人：拆解土豆姐的 Agent 与 Lint 工程哲学（长文慎点）"
title_en: "Supervising Someone Smarter Than You: Deconstructing Potato Sister's Agent and Lint Engineering Philosophy (Long Article, Caution)"
description: "土豆姐通过间接提示词、多模型架构竞技、Lint 铁律和自验证底座，实现每月高置信度合并 2000 个 PR 的 AI 编程工程哲学。"
description_en: "Potato Sister's AI programming engineering philosophy uses indirect prompts, multi-model architecture competition, lint iron laws, and self-verification infrastructure to achieve 2,000 high-confidence PR merges per month."
resource: https://x.com/wquguru/status/2123269893588152709
tags: [agents, lint, engineering, ai-coding]
sources:
  - id: e841a44042a0f8b4
    resource: https://x.com/wquguru/status/2123269893588152709
    title: "Supervising Someone Smarter Than You: Deconstructing Potato Sister's Agent and Lint Engineering Philosophy (Long Article, Caution)"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-19T20:11:06+08:00
---

# 监督一个比你聪明的人：拆解土豆姐的 Agent 与 Lint 工程哲学（长文慎点）

*Supervising Someone Smarter Than You: Deconstructing Potato Sister's Agent and Lint Engineering Philosophy (Long Article, Caution)*

「帖文称」土豆姐 (@poteto) 靠一己之力每月在生产环境高置信度合并 2,000 个 PR，相关方法论系列总浏览量超过 500 万。本文拆解她“监督一个比你聪明的人”的艺术，涵盖间接提示词、/teach 与 /why 认知建立、README 与原型驱动规划、多模型 /architect 竞技场、Lint 铁律与 /correct 防线，以及 Agent 专用 CLI 和 Feature Map 的自验证底座。[^e841a44042a0f8b4]

The post says Potato Sister (@poteto) single-handedly merges 2,000 PRs into production with high confidence every month, and her methodology series has over 5 million total views. This article deconstructs her art of "supervising someone smarter than you," covering indirect prompts, /teach and /why cognition building, README and prototype-driven planning, multi-model /architect arena, lint iron laws and /correct defenses, and Agent-specific CLI and Feature Map self-verification infrastructure.[^e841a44042a0f8b4]

## 摘要 / Summary

- 土豆姐 (@poteto) 每月在生产环境高置信度合并约 2,000 个 PR，其方法论系列总浏览量超过 500 万。[^e841a44042a0f8b4]
- Potato Sister (@poteto) merges about 2,000 PRs into production with high confidence every month; her methodology series has over 5 million total views.[^e841a44042a0f8b4]
- 她主张“间接提示词”：先让 Agent 用大白话复述问题，再动工，以降噪、及时纠偏并避免人类假设带偏模型。[^e841a44042a0f8b4]
- She advocates "indirect prompts": have the Agent restate the problem in plain language before working, to reduce noise, correct course early, and avoid human assumptions biasing the model.[^e841a44042a0f8b4]
- pstack 的 /architect 技能包含五步闭环：摸底、草图竞技场、异构交叉评审、按草图实现、设计错了就推翻重来。[^e841a44042a0f8b4]
- pstack's /architect skill includes a five-step loop: grounding, sketch arena, heterogeneous cross-judging, implementation against sketch, and scrapping wrong designs.[^e841a44042a0f8b4]
- 她的 lint 倒金字塔从顶层到底层依次是：代码库架构改进、静态分析与测试、散文式文字规则与注释、人工审查，并主张注释是 Agent 会滥用的拐杖。[^e841a44042a0f8b4]
- Her lint inverted pyramid ranks from top to bottom: codebase architecture improvement, static analysis and testing, prose text rules and comments, human review; she argues comments are a crutch Agents will misuse.[^e841a44042a0f8b4]
- 她构建 Agent 专用 CLI 和 Feature Map（功能地图）作为验证底座，让 Agent 自行验证代码，并把重复出现的错误转化为 lint 规则或类型系统约束。[^e841a44042a0f8b4]
- She builds Agent-specific CLI tools and Feature Maps as a verification base, letting Agents self-verify code and turning recurring errors into lint rules or type-system constraints.[^e841a44042a0f8b4]

## 相关 / Related

- 原文：[链接](https://x.com/wquguru/status/2123269893588152709)。 / Original: [link](https://x.com/wquguru/status/2123269893588152709).
- Topic: [智能体规模化工程 / Agent-scaled engineering](../../topics/agent-scaled-engineering.md)
- Topic: [Agent Skill 编写 / Agent skill authoring](../../topics/agent-skill-authoring.md)
- Topic: [Agent 上下文工程 / Context engineering for agents](../../topics/context-engineering-for-agents.md)
- Topic: [代码重于规格 / Code over the spec](../../topics/code-over-spec.md)

[^e841a44042a0f8b4]: Supervising Someone Smarter Than You: Deconstructing Potato Sister's Agent and Lint Engineering Philosophy (Long Article, Caution)
