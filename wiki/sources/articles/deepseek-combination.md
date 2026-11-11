---
type: Source
title: "DeepSeek 组合"
title_en: "DeepSeek Combination"
description: "小墨同学分享以 Pi Agent 搭配 DeepSeek 等模型的 AI Agent 使用清单与成本取舍。"
description_en: "Xiaomovps shares an AI Agent usage list and cost tradeoffs pairing Pi Agent with DeepSeek and other models."
resource: https://x.com/xiaomovps/status/2120444951477829692
tags: [agents, deepseek, ai-agent, cost-efficiency]
sources:
  - id: deepseek-pi-agent-combo
    resource: https://x.com/xiaomovps/status/2120444951477829692
    title: "DeepSeek Combination"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-11T20:04:03+08:00
---

# DeepSeek 组合

*DeepSeek Combination*

「帖文称」国产模型搭配 Pi Agent，速度快、Token 消耗低、任务完成率高，可能是目前性价比不错的 AI Agent 组合；FrontierHarness 测试中 Pi 在 21 组 Agent Harness 横评中暂居第二，搭配 DeepSeek 的任务通过率达到 80.3%，完成任务成本比 DSH Minimal 低。作者日常以 Pi Agent 为主力工具，辅以 Claude Code 进行编程开发。[^deepseek-pi-agent-combo]

The post claims that domestic models paired with Pi Agent offer fast speed, low token consumption, and high task completion rates, potentially a cost-effective AI Agent combination; FrontierHarness testing reportedly ranks Pi second among 21 Agent Harness groups, with DeepSeek achieving an 80.3% task pass rate at lower cost than DSH Minimal. The author uses Pi Agent as a primary tool and Claude Code for programming.[^deepseek-pi-agent-combo]

## 摘要 / Summary

- FrontierHarness 测试显示，Pi 在 21 组 Agent Harness 横评中暂居第二，搭配 DeepSeek 的任务通过率达到 80.3%。[^deepseek-pi-agent-combo]
- FrontierHarness testing shows Pi temporarily ranks second among 21 Agent Harness groups, with DeepSeek achieving an 80.3% task pass rate.[^deepseek-pi-agent-combo]
- 完成任务的成本比 DSH Minimal 低不少，且 Pi 搭配国产模型 Token 消耗相对较低。[^deepseek-pi-agent-combo]
- Task completion costs are significantly lower than DSH Minimal, and Pi paired with domestic models has relatively low token consumption.[^deepseek-pi-agent-combo]
- Pi Agent 是作者使用最多的主力工具，模型主要在 GPT 和 DeepSeek 之间切换，也会通过 OpenCode 或 CommandCode 套餐分摊 API 成本。[^deepseek-pi-agent-combo]
- Pi Agent is the author's most-used primary tool, switching mainly between GPT and DeepSeek models, and using OpenCode or CommandCode packages to share API costs.[^deepseek-pi-agent-combo]
- Claude Code 是第二常用工具，一般搭配 Claude 模型用于编程开发，作者不使用第三方反代以避免封号风险。[^deepseek-pi-agent-combo]
- Claude Code is the second most-used tool, generally paired with Claude models for programming development; the author avoids third-party proxies to prevent ban risks.[^deepseek-pi-agent-combo]
- Pi 自由度高，可开发自己的 Extension，也可与 Hermes Agent 等 Harness 组合，折腾不同的 Agent 工作流。[^deepseek-pi-agent-combo]
- Pi has high freedom, allowing custom Extensions and combination with Harness such as Hermes Agent for different Agent workflows.[^deepseek-pi-agent-combo]

## 相关 / Related

- 原文：[链接](https://x.com/xiaomovps/status/2120444951477829692)。 / Original: [link](https://x.com/xiaomovps/status/2120444951477829692).
- Topic: [面向 Agent 的模型渠道取舍 / Model provider channel tradeoffs for agents](../../topics/agent-model-channel-tradeoffs.md)
- Topic: [超越 token 数的 Harness 对比 / Harness comparison beyond tokens](../../topics/harness-comparison-beyond-tokens.md)
- Topic: [Claude Code 作者与社区话筒 / Claude Code authorship and community voice](../../topics/claude-code-authorship-and-voice.md)
- Topic: [精简核心与社区扩展 / Minimal core and community extensions](../../topics/minimal-core-community-extensions.md)

[^deepseek-pi-agent-combo]: DeepSeek Combination
