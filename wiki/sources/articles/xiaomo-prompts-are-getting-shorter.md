---
type: Source
title: "小墨 · 提示词在变短"
title_en: "Xiaomo · Prompts Are Getting Shorter"
description: "帖文称 Claude Code 为新一代 Claude 模型砍掉超 80% 系统提示词且评测未明显下降，输入 Token 从峰值降约 48%，极简 Pi Agent 更具优势。"
description_en: "The post claims Claude Code cut over 80% of system prompts for new Claude models without significant eval decline, input tokens fell about 48% from peak, and minimalist Pi Agent is more advantageous."
resource: https://x.com/xiaomovps/status/2120127993561612746
tags: [agents, prompt-engineering, token-efficiency, minimalist-design]
sources:
  - id: xiaomovps-claude-code-pi-minimal-prompts
    resource: https://x.com/xiaomovps/status/2120127993561612746
    title: "Xiaomo · Prompts Are Getting Shorter"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-11T08:25:23+08:00
---

# 小墨 · 提示词在变短

*Xiaomo · Prompts Are Getting Shorter*

「帖文称」Anthropic 为新一代 Claude 模型将 Claude Code 的系统提示词精简超过 80%，内部编程评测表现并未明显下降；TokenSave 统计显示 Claude Code 初始输入 Token 从 2026 年 5 月峰值 36,309 降至 2026 年 10 月的 18,841，减少约 48%。作者认为模型能力增强后无需大量硬编码规则，Pi Agent 仅保留 read、bash、edit、write 四个基础工具并把功能交给 Extension、Skill 与开发者，未来可能不再需要复杂 Harness。[^xiaomovps-claude-code-pi-minimal-prompts]

The post claims Anthropic reduced Claude Code's system prompts by over 80% for new Claude models without significant decline in internal programming evals; TokenSave stats show initial input tokens dropped from a May 2026 peak of 36,309 to 18,841 in October 2026, about 48%. The author argues that as models grow stronger, hardcoded rules are unnecessary; Pi Agent keeps only read, bash, edit, and write tools, delegating functions to Extensions, Skills, and developers, and future agents may not need complex Harnesses.[^xiaomovps-claude-code-pi-minimal-prompts]

## 摘要 / Summary

- Claude Code 系统提示词被精简超过 80%，内部编程评测表现未明显下降。[^xiaomovps-claude-code-pi-minimal-prompts]
- Claude Code's system prompts were cut by over 80%, with no significant decline in internal programming eval performance.[^xiaomovps-claude-code-pi-minimal-prompts]
- Claude Code 初始输入 Token 从 2025 年 7 月的 19,498 升至 2026 年 5 月的 36,309，再降至 2026 年 10 月的 18,841，从峰值下降约 48%。[^xiaomovps-claude-code-pi-minimal-prompts]
- Claude Code initial input tokens rose from 19,498 in July 2025 to 36,309 in May 2026, then fell to 18,841 in October 2026, down about 48% from the peak.[^xiaomovps-claude-code-pi-minimal-prompts]
- Pi Agent 默认仅提供 read、bash、edit、write 四个基础工具，内置提示词非常精简，其余功能交给 Extension、Skill 和开发者。[^xiaomovps-claude-code-pi-minimal-prompts]
- Pi Agent defaults to only four basic tools—read, bash, edit, write—with very concise built-in prompts, leaving other functions to Extensions, Skills, and developers.[^xiaomovps-claude-code-pi-minimal-prompts]
- 作者认为模型越来越聪明，许多事无需再写死规则，质疑为何还需要越来越复杂的 Harness 来告诉模型该怎么做。[^xiaomovps-claude-code-pi-minimal-prompts]
- The author argues models are getting smarter and many things no longer need hardcoded rules, questioning why increasingly complex Harnesses are still needed to tell models what to do.[^xiaomovps-claude-code-pi-minimal-prompts]
- 文章提到 Hacker News 上《Goodbye Claude, Hello Pi》引发数百条评论，作者将主力 Coding Agent 从 Claude Code 换成 Pi。[^xiaomovps-claude-code-pi-minimal-prompts]
- The article mentions "Goodbye Claude, Hello Pi" on Hacker News drew hundreds of comments, with the author switching their primary Coding Agent from Claude Code to Pi.[^xiaomovps-claude-code-pi-minimal-prompts]

## 相关 / Related

- 原文：[链接](https://x.com/xiaomovps/status/2120127993561612746)。 / Original: [link](https://x.com/xiaomovps/status/2120127993561612746).
- Topic: [精简核心与社区扩展 / Minimal core and community extensions](../../topics/minimal-core-community-extensions.md)
- Topic: [项目指令与 Token 效率 / Project instructions and token efficiency](../../topics/agents-md-token-efficiency.md)
- Topic: [超越 token 数的 Harness 对比 / Harness comparison beyond tokens](../../topics/harness-comparison-beyond-tokens.md)
- Topic: [Agent 上下文工程 / Context engineering for agents](../../topics/context-engineering-for-agents.md)

[^xiaomovps-claude-code-pi-minimal-prompts]: Xiaomo · Prompts Are Getting Shorter
