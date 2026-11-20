---
type: Source
title: "LangChain 开源设计智能体 Content Studio"
title_en: "LangChain Open-Sources Design Agent Content Studio"
description: "LangChain 开源其内部运营的设计智能体 Content Studio，基于 Managed Deep Agents 在 Slack 中生成品牌资产。"
description_en: "LangChain open-sources its internal design agent Content Studio, built on Managed Deep Agents to generate brand assets in Slack."
resource: https://github.com/langchain-ai/design-agent
tags: [langchain, design-agent, deep-agents, slack, managed-deep-agents]
sources:
  - id: langchain-design-agent
    resource: https://github.com/langchain-ai/design-agent
    title: "LangChain Open-Sources Design Agent Content Studio"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-20T20:15:01+08:00
---

# LangChain 开源设计智能体 Content Studio

*LangChain Open-Sources Design Agent Content Studio*

「帖文称」LangChain 开源其内部运营的设计智能体 Content Studio，用户可在 Slack 中提交设计请求并获得品牌广告、发布片等资产。文章称，自八月以来它已交付超 3,000 个资产，相关作品在 X 上获得约 450 万次浏览，且四分之三的请求来自市场团队之外。[^langchain-design-agent]

LangChain has open-sourced Content Studio, the design agent it runs internally, letting users submit design requests in Slack and receive brand assets such as ads and launch films. The article says it has shipped over 3,000 assets since August, its posts drew about 4.5M views on X, and three in four requests come from outside marketing.[^langchain-design-agent]

## 摘要 / Summary

- Content Studio 是部署在 Managed Deep Agents 上的 Deep Agents 智能体，MDA 负责 Slack、沙箱、内存、日程与追踪等基础设施。[^langchain-design-agent]
- Content Studio is a Deep Agents agent deployed on Managed Deep Agents, with MDA handling Slack, sandboxes, memory, schedules and tracing.[^langchain-design-agent]
- 每个 Slack 线程都获得独立的 Linux 沙箱，内置 Chrome、FFmpeg、HyperFrames、D2 和字体，由固定配方构建。[^langchain-design-agent]
- Each Slack thread gets its own Linux sandbox with Chrome, FFmpeg, HyperFrames, D2 and fonts, built from a pinned recipe.[^langchain-design-agent]
- 智能体先读取路由技能，从 35 个技能中选定工作流，并参考设计 wiki 与品牌包。[^langchain-design-agent]
- The agent reads a router skill to pick a workflow from 35 skills, and uses a design wiki and brand pack for context.[^langchain-design-agent]
- 大任务会拆分为后台子智能体，且支持团队与个人两层记忆。[^langchain-design-agent]
- Big jobs are split into background subagents, and memory supports team and personal layers.[^langchain-design-agent]
- 快速入门需要 LangSmith 账号与模型密钥，随后通过安装脚本、uv、沙箱发布和 mda deploy 完成部署。[^langchain-design-agent]
- Quickstart requires a LangSmith account and model key, then installs via curl, uv, sandbox publish and mda deploy.[^langchain-design-agent]

## 相关 / Related

- 原文：[链接](https://github.com/langchain-ai/design-agent)。 / Original: [link](https://github.com/langchain-ai/design-agent).
- Topic: [公司级 Agent Harness 五原语 / Company agent harness — five primitives](../../topics/company-agent-harness.md)
- Topic: [Agent 上下文工程 / Context engineering for agents](../../topics/context-engineering-for-agents.md)
- Topic: [Agent Skill 编写 / Agent skill authoring](../../topics/agent-skill-authoring.md)
- Topic: [多智能体四道基建题 / Four infra gaps for large multiagent systems](../../topics/multiagent-infra-four-problems.md)

[^langchain-design-agent]: LangChain Open-Sources Design Agent Content Studio
