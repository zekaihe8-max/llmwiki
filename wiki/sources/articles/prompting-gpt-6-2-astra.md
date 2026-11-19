---
type: Source
title: "GPT-6.2 Astra 提示词指南"
title_en: "Prompting GPT-6.2 Astra"
description: "介绍 GPT-6.2 Astra 与 Codex 的提示词技巧，包括推理努力、子代理、视觉参考与 AGENTS.md 使用。"
description_en: "Introduces prompting techniques for GPT-6.2 Astra and Codex, covering reasoning effort, subagents, visual references, and AGENTS.md usage."
resource: https://learn.chatgpt.com/guides/prompting-gpt-6-2-astra
tags: [agents, design, prompting, codex]
sources:
  - id: gpt-6-2-astra-prompting
    resource: https://learn.chatgpt.com/guides/prompting-gpt-6-2-astra
    title: "Prompting GPT-6.2 Astra"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-19T08:37:00+08:00
---

# GPT-6.2 Astra 提示词指南

*Prompting GPT-6.2 Astra*

「帖文称」GPT-6.2 Astra 相较 GPT-6 Astra 通常能给出更接近可直接使用的初稿，代码更易阅读与审阅，写作更直截了当，视觉作品也更丰富。这些提示词技巧适用于 GPT-6.2 模型家族，包括 GPT-6.2 Astra 与 GPT-6.2 Sol，并涉及推理努力选型、子代理并行、视觉参考迭代以及精简 AGENTS.md 等做法。[^gpt-6-2-astra-prompting]

The post says GPT-6.2 Astra often produces a first pass closer to something usable than GPT-6 Astra, with more readable code, more direct writing, and richer visual work. The prompting techniques apply across the GPT-6.2 family, including Astra and Sol, and cover matching reasoning effort to tasks, using subagents for parallel work, providing visual references, and keeping AGENTS.md lean.[^gpt-6-2-astra-prompting]

## 摘要 / Summary

- GPT-6.2 Astra 的代码更易读审阅，写作更直截了当；幻灯片布局会突出关键比较，3D 场景的材质与光照更有质感。[^gpt-6-2-astra-prompting]
- GPT-6.2 Astra code is easier to read and review, writing gets to the point sooner, slide layouts highlight the comparison that matters, and 3D scenes have more character through texture and lighting.[^gpt-6-2-astra-prompting]
- 推理努力应按调查深度选用：快速调查可用 Medium，跨系统追踪单一可疑原因可用 High，多原因交互则考虑 Extra High。[^gpt-6-2-astra-prompting]
- Match reasoning effort to depth: Medium for a quick survey, High for tracing one suspected cause across several systems, Extra High when several causes may interact.[^gpt-6-2-astra-prompting]
- 对可独立并行的任务部分，可指示 Codex 按需使用子代理；Ultra 模式会自行决定何时引入子代理。[^gpt-6-2-astra-prompting]
- For independently parallel parts, tell Codex to use subagents as needed; Ultra decides on its own when to bring in subagents.[^gpt-6-2-astra-prompting]
- 有特定外观时可提供参考图，或让 Codex 用 GPT Image 生成，随后按实际展示尺寸与交互动作审视结果。[^gpt-6-2-astra-prompting]
- Share a reference image or ask Codex to create one with GPT Image, then review the result at the actual size and try the actions it is meant to support.[^gpt-6-2-astra-prompting]
- AGENTS.md 只应记录 Codex 无法从代码、测试或文档推断的项目要求与惯例，并留出工作流；Codex Cloud 每个任务独占虚拟机，结束时应停止后台作业并删除临时文件。[^gpt-6-2-astra-prompting]
- AGENTS.md should include only project requirements and conventions Codex cannot infer, plus workflows when needed; each Codex Cloud task has its own VM, and agents should stop background jobs and remove temporary files when done.[^gpt-6-2-astra-prompting]

## 相关 / Related

- 原文：[链接](https://learn.chatgpt.com/guides/prompting-gpt-6-2-astra)。 / Original: [link](https://learn.chatgpt.com/guides/prompting-gpt-6-2-astra).
- Topic: [Agent Skill 编写 / Agent skill authoring](../../topics/agent-skill-authoring.md)
- Topic: [项目指令与 Token 效率 / Project instructions and token efficiency](../../topics/agents-md-token-efficiency.md)
- Topic: [把子 Agent 折进主循环 / Fold sub-agents into the main loop](../../topics/fold-subagents-into-main-loop.md)
- Topic: [AGENTS.md 要求 worktree 完成即删 / AGENTS.md rules for no leftover worktrees](../../topics/agent-worktree-cleanup.md)

[^gpt-6-2-astra-prompting]: Prompting GPT-6.2 Astra
