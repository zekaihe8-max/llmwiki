---
type: Source
title: "meng shao：OpenAI 给 GPT-6.2 Codex 的提示建议"
title_en: "meng shao: OpenAI prompt suggestions for GPT-6.2 Codex"
description: "帖文转发 OpenAI 关于 GPT-6.2 Codex 提示的指南，涉及验收标准、推理强度、子 Agent 并行与 AGENTS.md。"
description_en: "The post forwards OpenAI's guide on prompting GPT-6.2 Codex, covering acceptance criteria, reasoning intensity, sub-agent parallelism, and AGENTS.md."
resource: https://x.com/shao__meng/status/2122959211487515033
tags: [codex, prompt-engineering, ai-agents, openai]
sources:
  - id: meng-shao-codex-prompt-guide
    resource: https://x.com/shao__meng/status/2122959211487515033
    title: "meng shao: OpenAI prompt suggestions for GPT-6.2 Codex"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-19T08:37:34+08:00
---

# meng shao：OpenAI 给 GPT-6.2 Codex 的提示建议

*meng shao: OpenAI prompt suggestions for GPT-6.2 Codex*

帖文称 OpenAI 在 GPT-6.2 指南中建议先说明验收标准，再按任务选推理强度；把可并行的工作交给子 agent，并可将规则写入 skill 或 AGENTS.md；验收视觉成果要按实际尺寸检查，AGENTS.md 只记录无法从代码推断的约定。[^meng-shao-codex-prompt-guide]

The post says OpenAI's GPT-6.2 guide recommends stating acceptance criteria first, then choosing reasoning intensity by task; delegating parallel work to sub-agents and writing rules into a skill or AGENTS.md; checking visuals at actual display size; and keeping AGENTS.md to conventions not inferable from code.[^meng-shao-codex-prompt-guide]

## 摘要 / Summary

- 帖文称 OpenAI 建议先说验收标准，再按任务选推理强度，例如图标在 24 像素工具栏里仍能辨认就直接写明。[^meng-shao-codex-prompt-guide]
- The post says OpenAI recommends stating acceptance criteria first, then selecting reasoning intensity by task, such as requiring icons remain recognizable in a 24-pixel toolbar.[^meng-shao-codex-prompt-guide]
- 推理强度分为 Medium、High、Extra High，分别适用于快速浏览、追查可能原因、以及多原因相互影响的逐一交代。[^meng-shao-codex-prompt-guide]
- Reasoning intensity levels are Medium, High, and Extra High, suited to quick scans, tracing possible causes, and explaining multiple interacting causes one by one.[^meng-shao-codex-prompt-guide]
- 文中建议让并行工作成为可授权的默认选择，可将适用场景写入对应 skill 或 AGENTS.md。[^meng-shao-codex-prompt-guide]
- The post suggests making parallel work an authorized default and writing applicable scenarios into a skill or AGENTS.md.[^meng-shao-codex-prompt-guide]
- Ultra 模式会自己决定要不要引入子 agent，适合能干净拆开、又足够深入的任务，如开放式研究里每一问单独深挖。[^meng-shao-codex-prompt-guide]
- Ultra mode decides whether to introduce sub-agents and fits cleanly separable, deep tasks such as separately investigating each question in open-ended research.[^meng-shao-codex-prompt-guide]
- 验收时要按人们实际看到的尺寸来看，可交互的结果还要亲自试一遍应当支持的操作。[^meng-shao-codex-prompt-guide]
- Acceptance should use the actual sizes people see, and interactive results should be personally tried for supported operations.[^meng-shao-codex-prompt-guide]
- AGENTS.md 只写项目要求和约定，尤其是 Codex 无法从代码、测试或文档推断出来的部分，日常执行细节交给 Codex。[^meng-shao-codex-prompt-guide]
- AGENTS.md should only record project requirements and conventions, especially what Codex cannot infer from code, tests, or docs, leaving daily execution details to Codex.[^meng-shao-codex-prompt-guide]

## 相关 / Related

- 原文：[链接](https://x.com/shao__meng/status/2122959211487515033)。 / Original: [link](https://x.com/shao__meng/status/2122959211487515033).
- Topic: [Agent 上下文工程 / Context engineering for agents](../../topics/context-engineering-for-agents.md)
- Topic: [项目指令与 Token 效率 / Project instructions and token efficiency](../../topics/agents-md-token-efficiency.md)
- Topic: [把子 Agent 折进主循环 / Fold sub-agents into the main loop](../../topics/fold-subagents-into-main-loop.md)
- Topic: [Agent Skill 编写 / Agent skill authoring](../../topics/agent-skill-authoring.md)

[^meng-shao-codex-prompt-guide]: meng shao: OpenAI prompt suggestions for GPT-6.2 Codex
