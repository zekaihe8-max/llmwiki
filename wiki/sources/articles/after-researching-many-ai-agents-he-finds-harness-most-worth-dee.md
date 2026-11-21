---
type: Source
title: "研究这么多 AI Agent，他越来越觉得 Harness 才最值得深入研究"
title_en: "After researching many AI Agents, he finds Harness most worth deep research"
description: "作者对比 Pi Agent、DeepSeek Harness、Claude Code、Codex 与 Hermes Agent，认为上下文管理、长任务恢复与结果验证是判断 Harness 成熟度的关键"
description_en: "Comparing Pi Agent, DeepSeek Harness, Claude Code, Codex and Hermes Agent, the author sees context management, long-task recovery and result verification as key to judging Harness maturity"
resource: https://x.com/xiaomovps/status/2123807628161916952
tags: [ai-agents, harness, context-management, long-tasks, result-verification]
sources:
  - id: xiaomovps-agent-harness-research
    resource: https://x.com/xiaomovps/status/2123807628161916952
    title: "After researching many AI Agents, he finds Harness most worth deep research"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-21T19:58:13+08:00
---

# 研究这么多 AI Agent，他越来越觉得 Harness 才最值得深入研究

*After researching many AI Agents, he finds Harness most worth deep research*

「帖文称」作者研究并使用过 Pi Agent、DeepSeek Harness、Claude Code、Codex 与 Hermes Agent 等多个 AI Agent，越来越觉得 Harness 是最值得深入研究的方向；文中从上下文管理、长任务执行与异常恢复、结果验证三个方面总结了 Harness 的设计考量，并推荐阅读 Anthropic 关于长任务 Agent 的文章。[^xiaomovps-agent-harness-research]

The post says the author has researched and used Pi Agent, DeepSeek Harness, Claude Code, Codex and Hermes Agent, and increasingly considers Harness the most worth studying direction; it summarizes Harness design considerations across context management, long-task execution and exception recovery, and result verification, and recommends an Anthropic article on long-task Agents.[^xiaomovps-agent-harness-research]

## 摘要 / Summary

- 作者提到研究过的 Agent 包括 Pi Agent、DeepSeek Harness、Claude Code、Codex 和 Hermes Agent。[^xiaomovps-agent-harness-research]
- The author mentions researching Pi Agent, DeepSeek Harness, Claude Code, Codex and Hermes Agent.[^xiaomovps-agent-harness-research]
- Harness 成熟度首先体现在上下文管理：保留重要信息、压缩无用内容、上下文切换后继续理解任务。[^xiaomovps-agent-harness-research]
- Harness maturity first shows in context management: retaining key info, compressing useless content, resuming task understanding after context switches.[^xiaomovps-agent-harness-research]
- 长任务执行需要考虑任务状态、异常恢复及从中断位置继续执行，避免运行几十分钟后卡死只能重启。[^xiaomovps-agent-harness-research]
- Long-task execution needs task state, exception recovery and resuming from interruption points, avoiding crashes after tens of minutes requiring restart.[^xiaomovps-agent-harness-research]
- 结果验证容易被忽略，Agent 声称完成不代表实际符合预期，缺乏验证机制难以保证复杂任务质量。[^xiaomovps-agent-harness-research]
- Result verification is easily overlooked; an Agent claiming completion does not mean actual results meet expectations, and without verification mechanisms quality of complex tasks is hard to guarantee.[^xiaomovps-agent-harness-research]
- 作者希望国产 Harness（如 DeepSeek Harness、WorkBuddy）改进，强调强力模型搭配强力 Harness 才是唯一出路。[^xiaomovps-agent-harness-research]
- The author hopes domestic Harness such as DeepSeek Harness and WorkBuddy improve, stressing that strong models paired with strong Harness is the only way forward.[^xiaomovps-agent-harness-research]

## 相关 / Related

- 原文：[链接](https://x.com/xiaomovps/status/2123807628161916952)。 / Original: [link](https://x.com/xiaomovps/status/2123807628161916952).
- Topic: [公司级 Agent Harness 五原语 / Company agent harness — five primitives](../../topics/company-agent-harness.md)
- Topic: [超越 token 数的 Harness 对比 / Harness comparison beyond tokens](../../topics/harness-comparison-beyond-tokens.md)
- Topic: [Agent 上下文工程 / Context engineering for agents](../../topics/context-engineering-for-agents.md)
- Topic: [AI 任务时界增长 / AI task horizon growth](../../topics/ai-task-horizon-growth.md)

[^xiaomovps-agent-harness-research]: After researching many AI Agents, he finds Harness most worth deep research
