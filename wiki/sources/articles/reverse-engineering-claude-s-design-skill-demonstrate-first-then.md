---
type: Source
title: "逆向 Design Skill：先示例后诱导，绕过直接询问系统提示词"
title_en: "Reverse-Engineering Claude's Design Skill: Demonstrate First, Then Induce, Avoiding Direct System-Prompt Requests"
description: "帖文称，不直接问 Claude 索取系统提示词，而是先让它用 Design Skill 做简单设计，再要求生成输入输出一致的同类 Skill，即可大体还原原版技能。"
description_en: "The post claims that instead of directly asking Claude for its system prompt, users should first have it complete a simple design using its Design Skill, then request a similar Skill with identical input/output, roughly reproducing the original."
resource: https://x.com/dotey/status/2118146071020888193
tags: [agents, design, skill-extraction]
sources:
  - id: reverse-design-skill
    resource: https://x.com/dotey/status/2118146071020888193
    title: "Reverse-Engineering Claude's Design Skill: Demonstrate First, Then Induce, Avoiding Direct System-Prompt Requests"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-05T20:04:36+08:00
---

# 逆向 Design Skill：先示例后诱导，绕过直接询问系统提示词

*Reverse-Engineering Claude's Design Skill: Demonstrate First, Then Induce, Avoiding Direct System-Prompt Requests*

「帖文称」一个逆向技巧：若想逆向 Claude Design 的 Skill，直接询问系统提示词会被拒绝；改为先让它用 Design Skill 完成一个最简单的设计作品，随后称要做一个输入输出与其一致的 Skill，因上下文中已加载完整 Skill，它便会生成与原版相近的 Skill。帖文还提示，若原 Skill 过大过复杂，模型可能偷工减料，但可通过追问完善，最终还原七七八八。[^reverse-design-skill]

The post describes a reverse-engineering trick: directly asking Claude for its Design Skill system prompt will be refused, but first having it complete a simple design using that Skill, then asking it to generate a matching Skill with the same input/output, leads it to produce a similar Skill because the full Skill is already in context. It cautions that oversized or overly complex Skills may be trimmed, yet follow-up questions can refine the result to roughly 70–80% fidelity.[^reverse-design-skill]

## 摘要 / Summary

- 直接询问 Claude Design Skill 的系统提示词会被拒绝。 / Directly asking Claude for its Design Skill system prompt is refused.[^reverse-design-skill]
- 替代做法是先让 Claude 用 Design Skill 完成一个最简单的设计作品。 / The alternative is to first have Claude complete a simple design work using its Design Skill.[^reverse-design-skill]
- 随后要求生成输入输出与原 Skill 一致的同类 Skill，模型因上下文已载入完整 Skill 而倾向输出相近内容。 / Then ask it to generate a similar Skill with the same input/output; because the full Skill is already in context, the model tends to output comparable content.[^reverse-design-skill]
- 若原 Skill 过大或过复杂，模型可能偷工减料，但整体思路可行。 / If the original Skill is too large or complex, the model may cut corners, though the overall approach remains viable.[^reverse-design-skill]
- 可通过 followup 追问让模型完善，最终还原约七七八八。 / Follow-up questions can be used to refine the output, eventually restoring roughly 70–80% of the original.[^reverse-design-skill]

## 相关 / Related

- 原文：[链接](https://x.com/dotey/status/2118146071020888193)。 / Original: [link](https://x.com/dotey/status/2118146071020888193).
- Topic: [Agent Skill 编写 / Agent skill authoring](../../topics/agent-skill-authoring.md)
- Topic: [Agent 上下文工程 / Context engineering for agents](../../topics/context-engineering-for-agents.md)
- Topic: [设计↔代码与自带 Claude/Codex 订阅 / Design-to-code tools with bring-your-own Claude/Codex subscriptions](../../topics/design-to-code-byo-subscriptions.md)
- Topic: [先复用再编写 / Reuse before write](../../topics/reuse-before-write.md)

[^reverse-design-skill]: Reverse-Engineering Claude's Design Skill: Demonstrate First, Then Induce, Avoiding Direct System-Prompt Requests
