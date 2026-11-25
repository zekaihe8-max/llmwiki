---
type: Source
title: "pstack 新增 /reframe 技能，先补齐专业概念再重写需求"
title_en: "pstack Adds /reframe Skill to Clarify Concepts Before Rewriting Requirements"
description: "Lauren Tan 为面向编程 Agent 的开源技能集 pstack 新增 /reframe，通过补齐 8—12 个专业术语并核验引用，帮助用户把模糊想法改写为清晰需求。"
description_en: "Lauren Tan adds the /reframe skill to the open-source pstack skill set for coding agents, helping users rewrite vague ideas into clear requirements by filling in 8–12 key terms and verifying citations."
resource: https://x.com/shao__meng/status/2125057434221945298
tags: [agents, coding-agent, skill, requirements]
sources:
  - id: d04f252135dfd0c5
    resource: https://x.com/shao__meng/status/2125057434221945298
    title: "pstack Adds /reframe Skill to Clarify Concepts Before Rewriting Requirements"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-24T20:26:16+08:00
---

# pstack 新增 /reframe 技能，先补齐专业概念再重写需求

*pstack Adds /reframe Skill to Clarify Concepts Before Rewriting Requirements*

帖文称，Grok Bot 成员 Lauren Tan（@poteto）给自己的开源 Skills 集合 pstack 加入了 /reframe 技能，针对开发者心里清楚大概想做什么却缺少准确表达需求的专业概念的情况。/reframe 要求模型直接读取原始文件、代码和描述，列出 8—12 个按“对最终成品影响程度”从高到低排序的关键术语，并借用相邻领域经验补全约束、重写需求；规则还要求逐条打开链接核对，查不实的引用直接删除。该技能与 /sharpen 分工：前者补齐概念和表达，后者深化任务要求和验收标准，两者均为手动触发。帖文同时指出，术语筛选和引用核查目前仍由模型完成，公开材料中没有效果评测数据。[^d04f252135dfd0c5]

The post says Grok Bot member Lauren Tan (@poteto) added the /reframe skill to her open-source Skills collection pstack, targeting developers who know roughly what they want but lack the professional concepts to express requirements accurately. /reframe requires the model to read raw files, code, and descriptions directly, list 8–12 key terms sorted by impact on the final product, borrow adjacent-field experience to complete constraints and rewrite requirements, and verify every link while deleting unverifiable citations. It is divided from /sharpen: the former fills in concepts and expression, the latter deepens task requirements and acceptance criteria; both are manually triggered. The post also notes that term selection and citation verification are still model-performed, with no public effectiveness evaluation data.[^d04f252135dfd0c5]

## 摘要 / Summary

- Lauren Tan（@poteto）是 Grok Bot 成员，向开源技能集 pstack 新增了 /reframe 技能。[^d04f252135dfd0c5]
- Lauren Tan (@poteto) is a Grok Bot member who added the /reframe skill to the open-source skill set pstack.[^d04f252135dfd0c5]
- /reframe 列出 8—12 个按“对最终成品影响程度”从高到低排序的关键术语。[^d04f252135dfd0c5]
- /reframe lists 8–12 key terms sorted by how much they change the final product.[^d04f252135dfd0c5]
- /reframe 要求逐条打开链接核对用法，查不实的引用直接删掉。[^d04f252135dfd0c5]
- /reframe requires opening every link and deleting citations that cannot be verified.[^d04f252135dfd0c5]
- /reframe 负责补齐概念和表达，/sharpen 负责把任务要求做深并敲定验收标准。[^d04f252135dfd0c5]
- /reframe handles concept and expression clarification, while /sharpen deepens task requirements and acceptance criteria.[^d04f252135dfd0c5]
- 两个 Skill 都设为手动触发，适合先用 /reframe 厘清概念，再用 /sharpen 敲定做法和验收标准。[^d04f252135dfd0c5]
- Both skills are manually triggered and designed to be used in sequence: /reframe first, then /sharpen.[^d04f252135dfd0c5]
- 帖文指出公开材料里没有效果评测数据，实际价值还得看重写后的需求能否真正减少歧义和返工。[^d04f252135dfd0c5]
- The post notes no public evaluation data exists yet; actual value depends on whether rewritten requirements truly reduce ambiguity and rework.[^d04f252135dfd0c5]

## 相关 / Related

- 原文：[链接](https://x.com/shao__meng/status/2125057434221945298)。 / Original: [link](https://x.com/shao__meng/status/2125057434221945298).
- Topic: [Agent Skill 编写 / Agent skill authoring](../../topics/agent-skill-authoring.md)
- Topic: [Agent Skills 开放标准 / Agent Skills open standard](../../topics/agent-skills-open-standard.md)
- Topic: [Agent 上下文工程 / Context engineering for agents](../../topics/context-engineering-for-agents.md)
- Topic: [智能体规模化工程 / Agent-scaled engineering](../../topics/agent-scaled-engineering.md)

[^d04f252135dfd0c5]: pstack Adds /reframe Skill to Clarify Concepts Before Rewriting Requirements
