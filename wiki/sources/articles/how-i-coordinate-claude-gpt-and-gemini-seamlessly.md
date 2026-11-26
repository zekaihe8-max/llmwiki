---
type: Source
title: "毫无保留地分享，我是如何让Claude、GPT和Gemini完美协同的"
title_en: "How I Coordinate Claude, GPT, and Gemini Seamlessly"
description: "一篇关于如何调度Claude、GPT、Gemini三大模型协同工作的实践分享。"
description_en: "A practical sharing on coordinating Claude, GPT, and Gemini models to work together."
resource: https://x.com/Khazix0918/status/2124680457623425334
tags: [ai-agents, multi-model-orchestration, claude-code, workflow]
sources:
  - id: khazix0918-claude-gpt-gemini-collaboration
    resource: https://x.com/Khazix0918/status/2124680457623425334
    title: "How I Coordinate Claude, GPT, and Gemini Seamlessly"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-26T08:22:00+08:00
---

# 毫无保留地分享，我是如何让Claude、GPT和Gemini完美协同的

*How I Coordinate Claude, GPT, and Gemini Seamlessly*

「帖文称」数字生命卡兹克(@Khazix0918)分享了其让Claude、GPT、Gemini三大模型协同工作的方法，文章将三模型比作团队成员，提出由Claude担任中间调度者、Gemini当军师、GPT负责严谨后端与代码审查的分工体系，并公开了其CLAUDE.md规则模板。[^khazix0918-claude-gpt-gemini-collaboration]

The post by @Khazix0918 shares a method for coordinating Claude, GPT, and Gemini, comparing the models to team members and proposing a division of labor where Claude serves as the central dispatcher, Gemini as strategist, and GPT handles rigorous backend work and code review, with a public CLAUDE.md template.[^khazix0918-claude-gpt-gemini-collaboration]

## 摘要 / Summary

- Gemini 4 Neon 可沟通性最强，适合创意、文案与交互顾问，但幻觉严重且 Harness 体验差。[^khazix0918-claude-gpt-gemini-collaboration]
- Gemini 4 Neon has the strongest communicability and suits creativity, copy, and interaction consulting, but suffers from severe hallucinations and a poor Harness experience.[^khazix0918-claude-gpt-gemini-collaboration]
- Claude 审美最佳、Harness 最强，适合担任任务拆解与验收的中间调度者，但可用性受限且严谨性一般。[^khazix0918-claude-gpt-gemini-collaboration]
- Claude offers the best aesthetics and strongest Harness, suiting it as the central task dispatcher and reviewer, though availability is limited and rigor is moderate.[^khazix0918-claude-gpt-gemini-collaboration]
- GPT-6.2 Astra 极其严谨，适合后端、算法、Bug 修复与代码审查，但难以沟通且审美较差。[^khazix0918-claude-gpt-gemini-collaboration]
- GPT-6.2 Astra is extremely rigorous, suiting backend, algorithms, bug fixes, and code review, but is hard to communicate with and has poor aesthetics.[^khazix0918-claude-gpt-gemini-collaboration]
- 作者通过 CLAUDE.md 让 Claude 独立调用 Gemini 出方案、请 Gemini 改文案交互、将独立模块交给 Codex(GPT) 编写，最后由 Claude 合并验收并过 GPT 审查关。[^khazix0918-claude-gpt-gemini-collaboration]
- Via CLAUDE.md, the author has Claude independently solicit Gemini proposals, ask Gemini to revise copy and interaction, assign independent modules to Codex (GPT) for writing, then merge and verify via Claude and pass a GPT review gate.[^khazix0918-claude-gpt-gemini-collaboration]
- 代码审查分两级：涉及钱、数据、越权、发错消息等严重问题才挡上线，其余仅作建议，最多审两轮。[^khazix0918-claude-gpt-gemini-collaboration]
- Code review is two-tiered: only serious issues involving money, data, privilege escalation, or wrong messages block release; others are suggestions, with at most two review rounds.[^khazix0918-claude-gpt-gemini-collaboration]

## 相关 / Related

- 原文：[链接](https://x.com/Khazix0918/status/2124680457623425334)。 / Original: [link](https://x.com/Khazix0918/status/2124680457623425334).
- Topic: [个人 Agent 当包工头调度编程 Agent / Personal agent as foreman over coding agents](../../topics/personal-agent-foreman-over-coding-agents.md)
- Topic: [云平台 Auto 跨模型编排 / Cloud Auto cross-model routing](../../topics/cloud-auto-model-routing.md)
- Topic: [项目指令与 Token 效率 / Project instructions and token efficiency](../../topics/agents-md-token-efficiency.md)

[^khazix0918-claude-gpt-gemini-collaboration]: How I Coordinate Claude, GPT, and Gemini Seamlessly
