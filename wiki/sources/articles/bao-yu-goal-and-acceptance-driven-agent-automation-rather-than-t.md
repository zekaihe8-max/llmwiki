---
type: Source
title: "宝玉：以目标与验收驱动 Agent 自动化，而非教 Agent 像人一样思考"
title_en: "Bao Yu: Goal-and-Acceptance-Driven Agent Automation Rather Than Teaching Agents to Think Like Humans"
description: "宝玉对比 Lauren Tan 的自动化方法，主张设定目标与验收标准，让 Agent 自主运行并沉淀 Skill，而非详细教 Agent 执行步骤。"
description_en: "Bao Yu contrasts Lauren Tan's automation approach, advocating goals and acceptance criteria so Agents run autonomously and accumulate Skills, rather than teaching Agents step-by-step execution."
resource: https://x.com/dotey/status/2123667995570413718
tags: [agents, automation, grok-bot, skill-authoring]
sources:
  - id: dotey-agent-goal-acceptance-automation
    resource: https://x.com/dotey/status/2123667995570413718
    title: "Bao Yu: Goal-and-Acceptance-Driven Agent Automation Rather Than Teaching Agents to Think Like Humans"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-20T19:52:56+08:00
---

# 宝玉：以目标与验收驱动 Agent 自动化，而非教 Agent 像人一样思考

*Bao Yu: Goal-and-Acceptance-Driven Agent Automation Rather Than Teaching Agents to Think Like Humans*

「帖文称」宝玉认为自己跟 Lauren Tan 的自动化方法不同：Lauren 把自身最佳实践教给 Grok Bot，让它像自己一样思考；而他认为 AI 比自己聪明，更强调目标和验收标准，不干涉中间步骤，形成“目标 → 验收 → 改进”的循环，并让 Agent 自身记录经验并沉淀为 Skill。[^dotey-agent-goal-acceptance-automation]

The post says Bao Yu differs from Lauren Tan's automation approach: Lauren teaches her best practices to Grok Bot so it thinks like her, while Bao Yu believes AI is smarter than him and emphasizes goals and acceptance criteria without interfering in intermediate steps, forming a "Goal → Acceptance → Improvement" loop and letting Agents record experience and sink it into Skills.[^dotey-agent-goal-acceptance-automation]

## 摘要 / Summary

- Lauren Tan 的方法是先讲清目标，再教 bot 怎么做，并把自己的最佳实践交给 Grok bot 让它像自己一样思考。[^dotey-agent-goal-acceptance-automation]
- Lauren Tan's approach is to clarify the goal first, then teach the bot how to do it, and hand her best practices to Grok Bot so it thinks like her.[^dotey-agent-goal-acceptance-automation]
- 宝玉的方法更强调目标和验收标准，对 Agent 中间执行步骤不太干涉，形成“目标 → 验收 → 改进”的循环。[^dotey-agent-goal-acceptance-automation]
- Bao Yu's approach emphasizes goals and acceptance criteria, interferes little with the Agent's intermediate execution steps, and forms a "Goal → Acceptance → Improvement" loop.[^dotey-agent-goal-acceptance-automation]
- 验收标准可配合截图、网络检索、代码运行等工具，例如新闻发布自动化要求动笔前先做事实核查。[^dotey-agent-goal-acceptance-automation]
- Acceptance criteria can be paired with tools such as screenshots, web search, and code execution; for example, news publishing automation requires fact-checking before writing.[^dotey-agent-goal-acceptance-automation]
- 他主张先让 Agent 跑一遍再调整，并把最佳实践沉淀成 Skill，还让 Agent 在 lessons.md 记录经验教训并自行优化 Skill。[^dotey-agent-goal-acceptance-automation]
- He advocates running the Agent once before adjusting, sinking best practices into Skills, and having the Agent record lessons in lessons.md and optimize Skills on its own.[^dotey-agent-goal-acceptance-automation]
- 技能会随时间臃肿，需要定期重构清理，重构后应重新跑以前的测试集和自动化测试。[^dotey-agent-goal-acceptance-automation]
- Skills become bloated over time and need regular refactoring; after refactoring, previous test suites and automated tests should be re-run.[^dotey-agent-goal-acceptance-automation]

## 相关 / Related

- 原文：[链接](https://x.com/dotey/status/2123667995570413718)。 / Original: [link](https://x.com/dotey/status/2123667995570413718).
- Topic: [智能体自动模式 / Agent auto mode](../../topics/agent-auto-mode.md)
- Topic: [Agent Skill 编写 / Agent skill authoring](../../topics/agent-skill-authoring.md)
- Topic: [工作流优先于智能体 / Workflows before agents](../../topics/workflows-before-agents.md)
- Topic: [校准对 AI 的过度与不足引导 / Calibrating over- and under-guidance of AI](../../topics/calibrating-ai-guidance.md)

[^dotey-agent-goal-acceptance-automation]: Bao Yu: Goal-and-Acceptance-Driven Agent Automation Rather Than Teaching Agents to Think Like Humans
