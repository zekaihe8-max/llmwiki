---
type: Source
title: "LangChain 谈主动式 Agent：超七成运行靠日程，关键是记忆与人的注意力"
title_en: "LangChain on Proactive Agents: Over 70% of Runs Schedule-Driven, Key Is Memory and Human Attention"
description: "LangChain 团队总结主动式 Agent 经验：超七成运行由日程触发，核心在于用记忆提升判断质量、用交互设计降低人工评审负担。"
description_en: "LangChain team summarizes proactive agent experience: over 70% of runs are schedule-triggered, with memory improving judgment quality and interaction design reducing human review burden."
resource: https://x.com/shao__meng/status/2122995228689010872
tags: [agents, proactive-agents, memory, human-in-the-loop, ux-design]
sources:
  - id: bd20a793f36d625c
    resource: https://x.com/shao__meng/status/2122995228689010872
    title: "LangChain on Proactive Agents: Over 70% of Runs Schedule-Driven, Key Is Memory and Human Attention"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-18T20:01:01+08:00
---

# LangChain 谈主动式 Agent：超七成运行靠日程，关键是记忆与人的注意力

*LangChain on Proactive Agents: Over 70% of Runs Schedule-Driven, Key Is Memory and Human Attention*

「帖文称」LangChain 团队总结了构建主动式 Agent 的经验：当 Agent 在后台推进持续数天、数周的目标时，瓶颈不再是模型能否完成任务，而是人有没有时间处理不断送来的问题和结果。以内部销售 Agent 和工程 Agent Robin 为例，团队提出用记忆提高判断质量、用交互设计减少人的评审负担，并指出超过 70% 的运行由日程触发而非人工提示。[^bd20a793f36d625c]

The post says the LangChain team summarized its experience building proactive agents: when agents advance multi-day or multi-week goals in the background, the bottleneck is no longer whether the model can complete tasks, but whether people have time to handle the constant stream of questions and results. Citing its internal sales agent and engineering agent Robin, the team proposes using memory to improve judgment quality and interaction design to reduce human review burden, noting over 70% of runs are schedule-triggered rather than prompted by humans.[^bd20a793f36d625c]

## 摘要 / Summary

- 主动式 Agent 有三类触发来源：现实事件（如新邮件、新 PR）、开发者设定的日程，以及 Agent 自行创建的日程。[^bd20a793f36d625c]
- Proactive agents have three trigger sources: real-world events (e.g., new emails, new PRs), developer-set schedules, and agent-created schedules.[^bd20a793f36d625c]
- LangChain 表示，GTM Agent 和 Robin 超过 70% 的运行由日程触发，而不是人临时输入提示。[^bd20a793f36d625c]
- LangChain says over 70% of runs for its GTM Agent and Robin are schedule-triggered rather than initiated by human prompts.[^bd20a793f36d625c]
- 记忆来源分为已有资料、当下反馈和行动结果三类；难点在于持续维护哪些值得记住、哪些已过期。[^bd20a793f36d625c]
- Memory sources include existing materials, current feedback, and action results; the difficulty lies in continuously maintaining what is worth remembering versus what has expired.[^bd20a793f36d625c]
- 团队通过「dreaming」后台任务定期回看近期执行记录，整理并更新记忆。[^bd20a793f36d625c]
- The team uses background "dreaming" tasks to periodically review recent execution records and organize/update memory.[^bd20a793f36d625c]
- 人工评审设计包括只呈现值得关注的信息、让结果容易评审、以及留在已有工作流（如 Slack）中。[^bd20a793f36d625c]
- Human-review design includes presenting only information worth attention, making results easy to review, and staying within existing workflows such as Slack.[^bd20a793f36d625c]
- 作者认为「主动」拆为两项能力：无新提示时仍能继续工作，并在继续工作时少占用人的注意力。[^bd20a793f36d625c]
- The author splits "proactive" into two capabilities: continuing to work without new prompts, and doing so while occupying less human attention.[^bd20a793f36d625c]

## 相关 / Related

- 原文：[链接](https://x.com/shao__meng/status/2122995228689010872)。 / Original: [link](https://x.com/shao__meng/status/2122995228689010872).
- Topic: [智能体自动模式 / Agent auto mode](../../topics/agent-auto-mode.md)
- Topic: [Agent 上下文工程 / Context engineering for agents](../../topics/context-engineering-for-agents.md)
- Topic: [UX、DX 与 AX / UX, DX, and AX](../../topics/ux-dx-and-ax.md)
- Topic: [发散任务先人审设计 / Human design gate for divergent tasks](../../topics/divergent-tasks-human-design-gate.md)

[^bd20a793f36d625c]: LangChain on Proactive Agents: Over 70% of Runs Schedule-Driven, Key Is Memory and Human Attention
