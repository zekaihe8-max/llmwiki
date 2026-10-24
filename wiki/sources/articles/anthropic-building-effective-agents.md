---
type: Source
title: Building effective agents
description: Anthropic's December 2024 engineering note that successful systems stay simple and add open-ended agents only when a workflow is not enough.
resource: https://www.anthropic.com/engineering/building-effective-agents
tags: [agents, workflows]
sources:
  - id: building-effective-agents
    resource: https://www.anthropic.com/engineering/building-effective-agents
    title: Building effective agents
    author: team:anthropic-engineering
generated:
  by: example-agent/scaffold
  at: 2026-10-24T10:49:00+08:00
date: 2024-12-19
---

# Building effective agents

Anthropic's engineering post separates predefined workflows from agents that choose their own next step.[^building-effective-agents] The article, published 19 December 2024 and credited to Erik S. and Barry Zhang, is at <https://www.anthropic.com/engineering/building-effective-agents>.

## Summary

Workflows orchestrate models and tools along paths written in advance. Agents let the model direct the process and the tool use. Anthropic treats both as agentic systems and draws the line at who picks the next step.[^building-effective-agents]

The advice is to start with the simplest thing that works. Many tasks only need one well-written call. Use a workflow when the steps are known. Use an agent when the number of steps is not predictable and the extra cost and error are acceptable. The closing principles are simplicity, visible planning, and a carefully designed tool interface.[^building-effective-agents]

The live page opens with a note that much of the tooling it describes has changed since December 2024, and it points readers to Claude Managed Agents. The workflow-versus-agent distinction is still stated on that same page. This summary does not treat the tooling note as a withdrawal of the distinction.[^building-effective-agents]

## Related

- Topic: [Workflows before agents](../../topics/workflows-before-agents.md)
- Topic: [LLM-maintained wiki](../../topics/llm-maintained-wiki.md)
- Contrast: [LLM Wiki](./karpathy-llm-wiki.md)

[^building-effective-agents]: Building effective agents
