---
type: Source
title: 构建有效的智能体
title_en: Building effective agents
description: Anthropic 2024 年 12 月工程笔记指出：成功的系统应保持简单，仅在工作流不够用时再引入开放式 agent。
description_en: Anthropic's December 2024 engineering note that successful systems stay simple and add open-ended agents only when a workflow is not enough.
resource: https://www.anthropic.com/engineering/building-effective-agents
tags: [agents, workflows]
sources:
  - id: building-effective-agents
    resource: https://www.anthropic.com/engineering/building-effective-agents
    title: Building effective agents
    author: team:anthropic-engineering
generated:
  by: cursor-agent/okf-bilingual
  at: 2026-10-24T20:30:00+08:00
date: 2024-12-19
---

# 构建有效的智能体

*Building effective agents*

Anthropic 的工程文章区分了预先定义的工作流，与自行选择下一步的 agent。[^building-effective-agents] 该文发表于 2024 年 12 月 19 日，署名 Erik S. 与 Barry Zhang，见 <https://www.anthropic.com/engineering/building-effective-agents>。

Anthropic's engineering post separates predefined workflows from agents that choose their own next step.[^building-effective-agents] The article, published 19 December 2024 and credited to Erik S. and Barry Zhang, is at <https://www.anthropic.com/engineering/building-effective-agents>.

## 摘要 / Summary

工作流按事先写好的路径编排模型与工具。Agent 则让模型主导流程与工具使用。Anthropic 将二者都视为 agentic systems，并以「谁选择下一步」划界。[^building-effective-agents]

Workflows orchestrate models and tools along paths written in advance. Agents let the model direct the process and the tool use. Anthropic treats both as agentic systems and draws the line at who picks the next step.[^building-effective-agents]

建议从能完成任务的最简方案入手。许多任务只需一次写好的调用。步骤已知时用工作流；步骤数不可预测、且可接受额外成本与错误时再用 agent。收尾原则是：简单、可见的规划，以及精心设计的工具接口。[^building-effective-agents]

The advice is to start with the simplest thing that works. Many tasks only need one well-written call. Use a workflow when the steps are known. Use an agent when the number of steps is not predictable and the extra cost and error are acceptable. The closing principles are simplicity, visible planning, and a carefully designed tool interface.[^building-effective-agents]

现行页面开头注明：文中描述的许多工具自 2024 年 12 月以来已有变化，并指向 Claude Managed Agents。同一页仍陈述工作流与 agent 的区分。本摘要不把该工具说明视为撤回这一区分。[^building-effective-agents]

The live page opens with a note that much of the tooling it describes has changed since December 2024, and it points readers to Claude Managed Agents. The workflow-versus-agent distinction is still stated on that same page. This summary does not treat the tooling note as a withdrawal of the distinction.[^building-effective-agents]

## 相关 / Related

- Topic: [Workflows before agents](../../topics/workflows-before-agents.md)
- Topic: [LLM-maintained wiki](../../topics/llm-maintained-wiki.md)
- Contrast: [LLM Wiki](./karpathy-llm-wiki.md)

[^building-effective-agents]: Building effective agents
