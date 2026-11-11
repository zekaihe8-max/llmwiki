---
type: Source
title: "分工：昂贵模型规划，子 Agent 执行"
title_en: "Division of Labor: Expensive Model Plans, Subagents Execute"
description: "帖文称，用提示词让昂贵的 Fable 5.2 只在规划与洞察上烧 Token，将实现分派给 Opus 5.5 子 Agent 或 Codex，并以红队审查挑战计划。"
description_en: "The post claims a prompt keeps costly Fable 5.2 burning tokens only on planning and insight, dispatching implementation to Opus 5.5 subagents or Codex, with red-team review to challenge the plan."
resource: https://x.com/Voxyz_ai/status/2120260216046727370
tags: [agents, prompt-engineering, token-efficiency, division-of-labor, red-team]
sources:
  - id: 91170a916d97f428
    resource: https://x.com/Voxyz_ai/status/2120260216046727370
    title: "Division of Labor: Expensive Model Plans, Subagents Execute"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-11T08:23:41+08:00
---

# 分工：昂贵模型规划，子 Agent 执行

*Division of Labor: Expensive Model Plans, Subagents Execute*

帖文称，Fable 5.2 烧 Token 很快，但一段提示词可让其只在最擅长的地方烧 Token：主会话保留规划、洞察与理解，实现阶段写出清晰规格后分派给 Opus 5.5 子 Agent（中等努力）或闲置的 Codex 额度执行，最难部分可留在主会话。另一段提示词要求模型先当红队，完整复述计划后再攻击，假设半年后失败并倒推三大可能原因，给出触发点、成本和可早期证伪的最小实验，最后给出“交付 / 先跑实验再交付 / 推翻”的裁决。[^91170a916d97f428]

The post claims Fable 5.2 burns tokens quickly, but a prompt can keep it burning tokens only where strongest: the main session handles planning, insight, and understanding, while implementation is dispatched after a clear spec to an Opus 5.5 subagent (medium effort) or unused Codex quota, with the hardest parts optionally kept in the main session. A second prompt asks the model to act as a red team, replay the plan fully, then attack it by assuming failure six months out and working backward to three likely causes, each with trigger, cost, and one minimal falsifying experiment, ending with a verdict: ship / run experiment first then ship / tear it down.[^91170a916d97f428]

## 摘要 / Summary

- 帖文由 Voxyz_ai 于 2026 年 11 月 10 日 21:00 发布，显示 9,577 次浏览。[^91170a916d97f428]
- The post by Voxyz_ai was published at 9:00 PM on Nov 10, 2026, showing 9,577 views.[^91170a916d97f428]
- 第一段提示词建议让昂贵的 Fable 5.2 主会话专注规划与洞察，把实现分派给 Opus 5.5 子 Agent 或 Codex。[^91170a916d97f428]
- The first prompt suggests keeping the costly Fable 5.2 main session focused on planning and insight, dispatching implementation to an Opus 5.5 subagent or Codex.[^91170a916d97f428]
- 第二段提示词要求模型先完整复述计划，再以红队身份攻击，列出半年后失败的三大可能原因及触发点、成本和可早期证伪的最小实验。[^91170a916d97f428]
- The second prompt asks the model to replay the plan fully, then red-team it by listing three likely causes of failure six months later, with triggers, costs, and minimal early falsification experiments.[^91170a916d97f428]
- 帖文称该提示词“多次将我从错误方向拉回”。[^91170a916d97f428]
- The post claims the prompt pulled the author back from the wrong direction more than once.[^91170a916d97f428]
- 帖文底部显示四组互动数字：6、2、122、225，以及 9,577 次浏览。[^91170a916d97f428]
- The post footer shows four engagement counts: 6, 2, 122, 225, and 9,577 views.[^91170a916d97f428]

## 相关 / Related

- 原文：[链接](https://x.com/Voxyz_ai/status/2120260216046727370)。 / Original: [link](https://x.com/Voxyz_ai/status/2120260216046727370).
- Topic: [个人 Agent 当包工头调度编程 Agent / Personal agent as foreman over coding agents](../../topics/personal-agent-foreman-over-coding-agents.md)
- Topic: [面向 Agent 的模型渠道取舍 / Model provider channel tradeoffs for agents](../../topics/agent-model-channel-tradeoffs.md)
- Topic: [项目指令与 Token 效率 / Project instructions and token efficiency](../../topics/agents-md-token-efficiency.md)
- Topic: [对抗评审与外部证据 / Adversarial review and external evidence](../../topics/adversarial-review-external-evidence.md)

[^91170a916d97f428]: Division of Labor: Expensive Model Plans, Subagents Execute
