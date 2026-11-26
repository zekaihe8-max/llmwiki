---
type: Source
title: "远程 Skills 变更致 Claude 行为突变"
title_en: "Remote Skills changes cause sudden Claude behavior drift"
description: "Anthropic 宣布 MCP 支持远程分发 Skills，第三方服务可通过修改 SKILL.md 静默更新 Claude 操作指南，导致模型行为突变。"
description_en: "Anthropic announced MCP support for remote Skills distribution, allowing third-party services to silently update Claude operation guides via SKILL.md, causing sudden model behavior changes."
resource: https://x.com/heydengai/status/2125439551388963101
tags: [mcp, skills, agents, claude]
sources:
  - id: remote-skills-skill-md-drift
    resource: https://x.com/heydengai/status/2125439551388963101
    title: "Remote Skills changes cause sudden Claude behavior drift"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-26T08:43:50+08:00
---

# 远程 Skills 变更致 Claude 行为突变

*Remote Skills changes cause sudden Claude behavior drift*

「帖文称」Anthropic 刚刚宣布 MCP 支持远程分发 Skills，第三方服务可以直接向 Claude 提供并更新操作指南。模型没换、提示词没改、MCP 也没重新安装，结果昨天能干的活今天突然不会干了；排查半天后发现，是第三方服务器偷偷改了 SKILL.md。发帖人感叹，大模型时代的 Bug 真是越来越抽象了。[^remote-skills-skill-md-drift]

The post claims Anthropic just announced MCP support for remote distribution of Skills, letting third-party services directly provide and update operation guides to Claude. With the model, prompts, and MCP installation unchanged, tasks that worked yesterday suddenly stopped working today; after troubleshooting, the author found a third-party server had secretly changed SKILL.md. The author remarks that bugs in the LLM era are increasingly abstract.[^remote-skills-skill-md-drift]

## 摘要 / Summary

- Anthropic 刚刚宣布 MCP 支持远程分发 Skills。[^remote-skills-skill-md-drift]
- Anthropic just announced MCP support for remote distribution of Skills.[^remote-skills-skill-md-drift]
- 第三方服务可以直接向 Claude 提供并更新操作指南。[^remote-skills-skill-md-drift]
- Third-party services can directly provide and update operation guides to Claude.[^remote-skills-skill-md-drift]
- 模型没换、提示词没改、MCP 也没重新安装，昨天能干的活今天突然不会干了。[^remote-skills-skill-md-drift]
- The model was unchanged, prompts were unchanged, and MCP was not reinstalled, yet tasks that worked yesterday suddenly stopped working today.[^remote-skills-skill-md-drift]
- 排查后发现是第三方服务器偷偷改了 SKILL.md。[^remote-skills-skill-md-drift]
- Troubleshooting revealed that a third-party server had secretly changed SKILL.md.[^remote-skills-skill-md-drift]
- 发帖人称大模型时代的 Bug 真是越来越抽象了。[^remote-skills-skill-md-drift]
- The author remarks that LLM-era bugs are increasingly abstract.[^remote-skills-skill-md-drift]

## 相关 / Related

- 原文：[链接](https://x.com/heydengai/status/2125439551388963101)。 / Original: [link](https://x.com/heydengai/status/2125439551388963101).
- Topic: [Agent Skill 编写 / Agent skill authoring](../../topics/agent-skill-authoring.md)
- Topic: [Agent Skills 开放标准 / Agent Skills open standard](../../topics/agent-skills-open-standard.md)
- Topic: [项目指令与 Token 效率 / Project instructions and token efficiency](../../topics/agents-md-token-efficiency.md)
- Topic: [智能体自动模式 / Agent auto mode](../../topics/agent-auto-mode.md)

[^remote-skills-skill-md-drift]: Remote Skills changes cause sudden Claude behavior drift
