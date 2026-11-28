---
type: Source
title: "Philipp Schmid：为何对 2027 年 MCP 更有信心"
title_en: "Philipp Schmid: Why I'm Bullish on MCP for 2027"
description: "帖文称 Philipp Schmid 通过 Code Mode、原生 Skills 与事件扩展，让 MCP 从技能与命令行的反弹中回归，并预判 2027 年最佳 Agent Harness 应自身成为 MCP 服务器。"
description_en: "The post says Philipp Schmid sees Code Mode, native Skills, and event extensions bringing MCP back from the Skills/CLI backlash, and predicts the best 2027 Agent Harness should itself be an MCP server."
resource: https://x.com/shao__meng/status/2126304895930454467
tags: [mcp, agents, agent-harness, skills]
sources:
  - id: philipp-schmid-mcp-2027
    resource: https://x.com/shao__meng/status/2126304895930454467
    title: "Philipp Schmid: Why I'm Bullish on MCP for 2027"
generated:
  by: openrouter/baidu/ernie-5.5-flash-preview:free
  at: 2026-11-28T20:08:44+08:00
---

# Philipp Schmid：为何对 2027 年 MCP 更有信心

*Philipp Schmid: Why I'm Bullish on MCP for 2027*

帖文称，Google DeepMind 负责 Agents 与 Gemini API 的 Philipp Schmid 撰文《Why I'm Bullish on MCP for 2027》，回顾过去约 18 个月 MCP 经历热捧与因上下文膨胀引发的反弹。他指出，Code Mode、内置 Skills 和事件推送正在把 MCP 拉回来，并认为进入 2027 年对 MCP 更有信心。[^philipp-schmid-mcp-2027]

The post says Philipp Schmid, who works on Agents and Gemini API at Google DeepMind, wrote “Why I'm Bullish on MCP for 2027,” reviewing roughly 18 months of MCP hype followed by backlash over context bloat. He argues that Code Mode, built-in Skills, and event pushing are bringing MCP back, and that he is more bullish on MCP entering 2027.[^philipp-schmid-mcp-2027]

## 摘要 / Summary

- 谷歌 DeepMind 负责 Agents 与 Gemini API 的 Philipp Schmid 撰文《Why I'm Bullish on MCP for 2027》。 / Philipp Schmid works at Google DeepMind on Agents and Gemini API and wrote “Why I'm Bullish on MCP for 2027.”[^philipp-schmid-mcp-2027]
- 在 Linear 与 Notion 中，Agent 已创建约一半的 issue 和页面，Notion 的 MCP 流量增长了 60 倍；Atlassian 每个工作日超过 500 万次 MCP 工具调用，其中 44% 使用者不在软件团队。 / In Linear and Notion, agents have created about half of issues and pages; Notion MCP traffic grew 60x; Atlassian sees over 5 million MCP tool calls per workday, with 44% of users outside software teams.[^philipp-schmid-mcp-2027]
- 代码模式让模型在沙箱中把 MCP 工具当作可调用函数，通过 inputSchema/outputSchema 与 structuredContent 连续调用，只把摘要送回上下文。 / Code Mode lets models call MCP tools as functions in a sandbox, using inputSchema/outputSchema and structuredContent for continuous calls, sending only summaries back to context.[^philipp-schmid-mcp-2027]
- 技能扩展把技能放入 MCP，使用 skill:// 地址、YAML 头信息及 SHA-256 摘要，客户端可按摘要自动拉取更新。 / The Skills extension places skills into MCP with skill:// addresses, parsed YAML frontmatter, and SHA-256 manifests, letting clients auto-fetch updates by digest.[^philipp-schmid-mcp-2027]
- 仍处于测试阶段的事件扩展支持 Webhook、推送与轮询三种送达方式，客户端按 eventId 去重并跟踪游标。 / The Events extension in testing supports webhook, push, and poll delivery; clients track cursors and deduplicate by eventId.[^philipp-schmid-mcp-2027]
- 作者预判 2027 年最佳 Agent Harness 会赢在 MCP 集成，且 Harness 自身也应是 MCP 服务器，子 agent 可做成 MCP Tasks。 / Schmid predicts the best Agent Harness in 2027 will win on MCP integration and should itself be an MCP server, with sub-agents as MCP Tasks.[^philipp-schmid-mcp-2027]

## 相关 / Related

- 原文：[链接](https://x.com/shao__meng/status/2126304895930454467)。 / Original: [link](https://x.com/shao__meng/status/2126304895930454467).
- Topic: [Agent Skills 开放标准 / Agent Skills open standard](../../topics/agent-skills-open-standard.md)
- Topic: [公司级 Agent Harness 五原语 / Company agent harness — five primitives](../../topics/company-agent-harness.md)
- Topic: [Agent 上下文工程 / Context engineering for agents](../../topics/context-engineering-for-agents.md)
- Topic: [把子 Agent 折进主循环 / Fold sub-agents into the main loop](../../topics/fold-subagents-into-main-loop.md)

[^philipp-schmid-mcp-2027]: Philipp Schmid: Why I'm Bullish on MCP for 2027
