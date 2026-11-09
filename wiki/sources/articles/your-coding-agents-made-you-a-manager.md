---
type: Source
title: "你的编程 Agent 让你当上了经理"
title_en: "Your coding agents made you a manager"
description: "把编程 Agent 当团队来管理：验证、上下文、复用纠错与判断留人。"
description_en: "Treat coding agents like a team: validate work, set context, compound corrections, and keep judgment human."
resource: https://x.com/addyosmani/status/2119332146485891501
tags: [agents, management, claude-code, coding-agent]
sources:
  - id: addy-osmani-coding-agents-manager
    resource: https://x.com/addyosmani/status/2119332146485891501
    title: "Your coding agents made you a manager"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-09T08:05:22+08:00
---

# 你的编程 Agent 让你当上了经理

*Your coding agents made you a manager*

Addy Osmani 在 X 上发文称，整天与编程 Agent 协作本质上就是在管理：选定任务、写指令、委派、跟进、评估结果并决定什么可以发布。他指出，善用 Agent 的工程师不一定是提示词工程最强的，而是学会了如何管理的人；这里的“管理”指通过支持他人工作来产出好结果，而非变成日程满满的传统经理。[^addy-osmani-coding-agents-manager]

Addy Osmani writes on X that spending all day with a coding agent is managing: selecting tasks, writing instructions, delegating, following up, evaluating results, and deciding what ships. The engineers who get the most from agents are not necessarily the best at prompt engineering, but those who learned to manage—defined as producing good outcomes by enabling others' work.[^addy-osmani-coding-agents-manager]

## 摘要 / Summary

- 文章将管理 Agent 比作管理团队，建议提供测试套件、构建或截图等验证机制，让 Agent 自行验证并展示结果，而非把人当成测试套件。 / The article compares managing agents to managing teams and recommends giving agents a validation mechanism—tests, builds, or screenshots—so they can verify their own work instead of making the human the test suite.[^addy-osmani-coding-agents-manager]
- 明确上下文应包括目标、重要性、约束、范围外事项和成功标准，避免只发一句模糊任务。 / Clear context should include the objective, why it matters, constraints, out-of-scope items, and success criteria, avoiding vague one-line tasks.[^addy-osmani-coding-agents-manager]
- 同一问题被纠正超过一次时，应写入 CLAUDE.md 或转化为共享 Skill，使经验复合积累。 / When the same correction is needed more than once, document it in CLAUDE.md or turn it into a shared skill so lessons compound.[^addy-osmani-coding-agents-manager]
- 让 Agent 默认自行决策，仅对不可让步的事项（如“永不编辑生成客户端”）使用钩子或拒绝规则等硬强制。 / Let agents decide by default and use hard enforcement only for non-negotiable items such as never editing generated clients.[^addy-osmani-coding-agents-manager]
- 在 Agent 开始编码前先达成计划，并把大任务拆成不重叠的并行工作，避免多个 Agent 处理重叠任务导致合并冲突。 / Agree on a plan before coding and partition large tasks into non-overlapping parallel work to avoid merge conflicts from multiple agents.[^addy-osmani-coding-agents-manager]
- 纠正 Agent 两次无效后应重置会话并改写提示，而不是反复尝试；产品决策、安全边界和发布判断仍需人类保留。 / After two failed correction attempts, reset the session and rewrite the prompt instead of retrying; product calls, security boundaries, and shipping decisions remain human.[^addy-osmani-coding-agents-manager]

## 相关 / Related

- 原文：[链接](https://x.com/addyosmani/status/2119332146485891501)。 / Original: [link](https://x.com/addyosmani/status/2119332146485891501).
- Topic: [个人 Agent 当包工头调度编程 Agent / Personal agent as foreman over coding agents](../../topics/personal-agent-foreman-over-coding-agents.md)
- Topic: [Agent 上下文工程 / Context engineering for agents](../../topics/context-engineering-for-agents.md)
- Topic: [校准对 AI 的过度与不足引导 / Calibrating over- and under-guidance of AI](../../topics/calibrating-ai-guidance.md)
- Topic: [项目指令与 Token 效率 / Project instructions and token efficiency](../../topics/agents-md-token-efficiency.md)

[^addy-osmani-coding-agents-manager]: Your coding agents made you a manager
