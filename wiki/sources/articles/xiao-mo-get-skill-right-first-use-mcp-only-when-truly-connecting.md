---
type: Source
title: "小墨 · 先把 Skill 做好，MCP 只在真要接外部系统时再用"
title_en: "Xiao Mo: Get Skill Right First, Use MCP Only When Truly Connecting External Systems"
description: "小墨认为在 Agent 构建中应优先完善 Skill，仅在需要对接外部系统时再引入 MCP，以避免上下文膨胀与维护负担。"
description_en: "Xiao Mo argues that Agent building should prioritize Skills and introduce MCP only when external system integration is truly needed, to avoid context bloat and maintenance burden."
resource: https://x.com/xiaomovps/status/2124510881468064157
tags: [agents, skill, mcp, context-engineering]
sources:
  - id: xiao-mo-skill-before-mcp
    resource: https://x.com/xiaomovps/status/2124510881468064157
    title: "Xiao Mo: Get Skill Right First, Use MCP Only When Truly Connecting External Systems"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-23T08:22:12+08:00
---

# 小墨 · 先把 Skill 做好，MCP 只在真要接外部系统时再用

*Xiao Mo: Get Skill Right First, Use MCP Only When Truly Connecting External Systems*

「帖文称」小墨同学在 X 上发文指出，折腾过多 MCP 后越来越觉得 Skill 才是更值得优先研究的方向。他列举了三个问题：MCP 接入后无论是否用到都会占用大量上下文；许多人把用途搞反，日常工作更需要按需加载的 Skill 配合本地命令；MCP 过多还会导致模型调用困难、环境报错和服务连不上，维护成本过高。他主张真正需要接外部系统时再用 MCP，其余工作流和规范尽量用 Skill 解决，并希望开源工具与国产 Harness 把 Skill 生态做得更好用。[^xiao-mo-skill-before-mcp]

In the post, Xiao Mo says that after experimenting with many MCPs, he believes Skills are a more worthwhile direction to prioritize. He lists three issues: MCP consumes large context even when unused; people often misuse MCP, while daily work needs step-by-step Skills with local commands; too many MCPs cause tool-selection confusion, environment errors, and connection failures. He advocates using MCP only when truly connecting external systems, handling other workflows with Skills, and hopes open-source tools and domestic Harnesses improve the Skill ecosystem.[^xiao-mo-skill-before-mcp]

## 摘要 / Summary

- MCP 接入后无论本次任务是否用到，工具说明都会塞进上下文，先消耗大量 Token。[^xiao-mo-skill-before-mcp]
- MCP tools dump their descriptions into context regardless of whether the current task uses them, consuming many tokens upfront.[^xiao-mo-skill-before-mcp]
- Skill 是按需加载的，平时几乎不占地方，用到时再读 SKILL.md，对上下文更友好。[^xiao-mo-skill-before-mcp]
- Skills are loaded on demand, occupying almost no space normally and reading SKILL.md only when used, friendlier to context.[^xiao-mo-skill-before-mcp]
- MCP 更适合接外部数据和接口，如查库或调线上服务；日常干活缺的往往是具体步骤，直接写 Skill 配合本地命令更顺手。[^xiao-mo-skill-before-mcp]
- MCP suits external data and interfaces such as database queries or online service calls; daily work often lacks concrete steps, so writing Skills with local commands is more convenient.[^xiao-mo-skill-before-mcp]
- MCP 装得太多会让模型不知道该调哪个工具，还会出现环境报错或服务连不上，修工具时间可能超过干正事。[^xiao-mo-skill-before-mcp]
- Too many MCPs can make the model unsure which tool to call, and cause environment errors or connection failures, with tool-fixing time exceeding actual work.[^xiao-mo-skill-before-mcp]
- 作者现在越用越简单，真需要接外部系统时才上 MCP，剩下的工作流和规范全部尽量用 Skill 解决。[^xiao-mo-skill-before-mcp]
- The author now keeps things simple, using MCP only when truly connecting external systems, and handling remaining workflows and norms with Skills as much as possible.[^xiao-mo-skill-before-mcp]

## 相关 / Related

- 原文：[链接](https://x.com/xiaomovps/status/2124510881468064157)。 / Original: [link](https://x.com/xiaomovps/status/2124510881468064157).
- Topic: [Agent Skill 编写 / Agent skill authoring](../../topics/agent-skill-authoring.md)
- Topic: [Agent Skills 开放标准 / Agent Skills open standard](../../topics/agent-skills-open-standard.md)
- Topic: [Agent 上下文工程 / Context engineering for agents](../../topics/context-engineering-for-agents.md)
- Topic: [工作流优先于智能体 / Workflows before agents](../../topics/workflows-before-agents.md)

[^xiao-mo-skill-before-mcp]: Xiao Mo: Get Skill Right First, Use MCP Only When Truly Connecting External Systems
