---
type: Source
title: "普里默项目：将教师专长转化为 AI 生成的教育模拟"
title_en: "The Primer Project: Turning Teacher Expertise into AI-Generated Educational Simulations"
description: "宾大沃顿商学院生成式 AI 实验室开源的面向教育者的多智能体模拟创作系统。"
description_en: "Wharton GAIL's open-source multi-agent system that lets educators author and run adaptive AI educational simulations."
resource: https://gail.wharton.upenn.edu/primer
tags: [agents, education, simulation, open-source, multi-agent]
sources:
  - id: primer-project-65f85056
    resource: https://gail.wharton.upenn.edu/primer
    title: "The Primer Project: Turning Teacher Expertise into AI-Generated Educational Simulations"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-13T08:16:40+08:00
---

# 普里默项目：将教师专长转化为 AI 生成的教育模拟

*The Primer Project: Turning Teacher Expertise into AI-Generated Educational Simulations*

帖文称，普里默（Primer）是宾夕法尼亚大学沃顿商学院生成式 AI 实验室推出的开源系统，帮助教育者无需编码，通过结构化访谈与多智能体协作，创建可审阅、教师批准后才生成的个性化自适应教育模拟。[^primer-project-65f85056]

The post says Primer is an open-source system from Wharton's Generative AI Labs that helps educators create personalized, adaptive AI educational simulations through structured interviews and multi-agent orchestration, with nothing built until the educator approves the design.[^primer-project-65f85056]

## 摘要 / Summary

- Primer 分为创作与运行两个阶段，教育者先通过结构化访谈定义目标并审阅设计文档，批准后下游智能体才构建模拟。[^primer-project-65f85056]
- Primer operates in two phases: authoring, where educators define goals and approve a design document through a structured interview, and runtime, where students play through the simulation.[^primer-project-65f85056]
- 运行时包含导师、练习和反馈三类面向学生的智能体，支持角色扮演（Roleplay）与教回（Teachback）两种模式。[^primer-project-65f85056]
- At runtime, mentor, practice, and feedback agents guide learners through preparation, practice, and feedback, supporting Roleplay and Teachback modes.[^primer-project-65f85056]
- 系统开源且与模型无关（LLM-agnostic），可在本地或开源模型上运行，以满足不同隐私与治理要求。[^primer-project-65f85056]
- Primer is open source and LLM-agnostic, able to run with local or open-source models under varied privacy and governance requirements.[^primer-project-65f85056]
- 项目明确称其为实验性原型，并非经过课堂评估的成品，机构自行负责 FERPA、COPPA 等合规审查。[^primer-project-65f85056]
- The project describes Primer as an experimental prototype, not a vetted classroom product, and says institutions are responsible for compliance reviews such as FERPA and COPPA.[^primer-project-65f85056]
- 提示词、模板、编排模式与代码在 GitHub 上公开，教育者、开发者与研究者可检查并扩展。[^primer-project-65f85056]
- Prompts, templates, orchestration patterns, and code are available on GitHub for educators, developers, and researchers to inspect and extend.[^primer-project-65f85056]
- 创作阶段的智能体包括摄入代理、设计代理、选角导演、图像生成代理与体验构建器。[^primer-project-65f85056]
- Authoring agents include the Intake Agent, Design Agent, Casting Director, Image Generation Agent, and Experience Builder.[^primer-project-65f85056]

## 相关 / Related

- 原文：[链接](https://gail.wharton.upenn.edu/primer)。 / Original: [link](https://gail.wharton.upenn.edu/primer).
- Topic: [多智能体四道基建题 / Four infra gaps for large multiagent systems](../../topics/multiagent-infra-four-problems.md)
- Topic: [智能体规模化工程 / Agent-scaled engineering](../../topics/agent-scaled-engineering.md)
- Topic: [工作流优先于智能体 / Workflows before agents](../../topics/workflows-before-agents.md)
- Topic: [智能体算力与治理 / Agent compute and governance](../../topics/agent-compute-and-governance.md)

[^primer-project-65f85056]: The Primer Project: Turning Teacher Expertise into AI-Generated Educational Simulations
