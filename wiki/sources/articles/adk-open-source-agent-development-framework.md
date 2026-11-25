---
type: Source
title: "ADK 开源智能体开发框架"
title_en: "ADK Open-Source Agent Development Framework"
description: "ADK 是 Google 开源的多语言智能体开发框架，用于构建、调试和部署生产级 AI 智能体。"
description_en: "ADK is Google's open-source multi-language agent development framework for building, debugging, and deploying production AI agents."
resource: https://adk.dev/
tags: [agents, adk, ai-framework, multi-language, enterprise-ai]
sources:
  - id: adk
    resource: https://adk.dev/
    title: "ADK Open-Source Agent Development Framework"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-24T20:28:59+08:00
---

# ADK 开源智能体开发框架

*ADK Open-Source Agent Development Framework*

「帖文称」ADK 是面向生产环境的开源智能体开发框架，提供 Python、TypeScript、Go、Java 和 Kotlin 语言版本，支持开发者构建、调试与部署可靠的 AI 智能体。[^adk]

ADK is an open-source agent development framework for production environments, offering Python, TypeScript, Go, Java, and Kotlin SDKs to build, debug, and deploy reliable AI agents.[^adk]

## 摘要 / Summary

- ADK 提供 Python、TypeScript、Go、Java 和 Kotlin 五种官方语言 SDK。[^adk]
- ADK provides official SDKs in Python, TypeScript, Go, Java, and Kotlin.[^adk]
- 框架内置 Agents CLI，并新增 ADK 2.0 图工作流，支持确定性代码与自适应 AI 推理的编排。[^adk]
- The framework includes Agents CLI and ADK 2.0 graph workflows for orchestrating deterministic code with adaptive AI reasoning.[^adk]
- ADK 可接入 Gemini 及其他生成式 AI 模型，并支持部署到 Google Cloud（Agent Runtime、Cloud Run、GKE）或自有基础设施。[^adk]
- ADK can connect to Gemini and other generative AI models, and deploy to Google Cloud (Agent Runtime, Cloud Run, GKE) or self-managed infrastructure.[^adk]
- ADK 将会话、记忆、工具输出和工件作为结构化上下文管理，支持过滤无关事件、总结历史轮次和延迟加载工件。[^adk]
- ADK manages sessions, memory, tool outputs, and artifacts as structured context, filtering irrelevant events, summarizing older turns, and lazy-loading artifacts.[^adk]
- ADK 主张先构建智能体、再按需扩展功能，适合从原型迭代到企业级可靠部署的全流程。[^adk]
- ADK emphasizes building agents first and extending functionality as needed, suiting the full lifecycle from prototyping to enterprise-grade deployment.[^adk]

## 相关 / Related

- 原文：[链接](https://adk.dev/)。 / Original: [link](https://adk.dev/).
- Topic: [智能体规模化工程 / Agent-scaled engineering](../../topics/agent-scaled-engineering.md)
- Topic: [Agent 上下文工程 / Context engineering for agents](../../topics/context-engineering-for-agents.md)
- Topic: [多智能体四道基建题 / Four infra gaps for large multiagent systems](../../topics/multiagent-infra-four-problems.md)
- Topic: [工作流优先于智能体 / Workflows before agents](../../topics/workflows-before-agents.md)

[^adk]: ADK Open-Source Agent Development Framework
