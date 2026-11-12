---
type: Source
title: "清规则：用 Anthropic Fable 5.2 指南审查过时项目指令"
title_en: "Clear Rules: Review Outdated Project Instructions with Anthropic's Fable 5.2 Prompting Guide"
description: "Anthropic 发布 Fable 5.2 提示词指南，建议复审 CLAUDE.md、AGENTS.md 等旧指令，防止过时规则让新模型浪费 Token。"
description_en: "Anthropic released a Fable 5.2 prompting guide advising a review of outdated project instructions such as CLAUDE.md and AGENTS.md to prevent legacy rules from making the new model waste tokens."
resource: https://x.com/Voxyz_ai/status/2120501801313267818
tags: [agents, prompting, claude, token-efficiency]
sources:
  - id: anthropic-fable-5-2-prompting-guide
    resource: https://x.com/Voxyz_ai/status/2120501801313267818
    title: "Clear Rules: Review Outdated Project Instructions with Anthropic's Fable 5.2 Prompting Guide"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-12T08:14:21+08:00
---

# 清规则：用 Anthropic Fable 5.2 指南审查过时项目指令

*Clear Rules: Review Outdated Project Instructions with Anthropic's Fable 5.2 Prompting Guide*

「帖文称」Anthropic 刚为 Fable 5.2 发布提示词指南，并建议用它审查项目中的旧规则。指南自测显示，一条“从不重试”的旧笔记就把繁忙工具后的重试从几乎每次都发生降至约 10 次中 4 次；给旧模型硬编码的规则在新模型上可能适得其反并浪费 Token。帖文还提供了一段可发给 Fable 5.2 的提示词，用于审查 CLAUDE.md、AGENTS.md、技能文件、子代理文件和记忆文件，找出子代理委托、思考限制、风格上限、“从不”规则、堆积的旧笔记以及未明确覆盖动作的审批规则等问题，并要求先列出建议、不立即修改。[^anthropic-fable-5-2-prompting-guide]

The post says Anthropic just released a prompting guide for Fable 5.2 and suggests using it to review old rules in a project. In the guide's own test, a single “never retry” note cut retries after a busy tool from nearly every time to about 4 in 10; rules hard-coded for older models can now work against the new model and burn tokens. The post also provides a prompt to send to Fable 5.2 to review CLAUDE.md, AGENTS.md, skills, subagent files, and memory files, identifying issues such as subagent delegation, thinking-less instructions, style limits, “never” rules, accumulated old notes, and approval rules that do not name exact actions, with recommendations shown first and no modifications made yet.[^anthropic-fable-5-2-prompting-guide]

## 摘要 / Summary

- Anthropic 为 Fable 5.2 发布了官方提示词指南。[^anthropic-fable-5-2-prompting-guide]
- Anthropic published an official prompting guide for Fable 5.2.[^anthropic-fable-5-2-prompting-guide]
- 指南测试中，一条“从不重试”的旧笔记将繁忙工具后的重试从几乎每次都发生降至约 10 次中 4 次。[^anthropic-fable-5-2-prompting-guide]
- In the guide's test, one “never retry” note reduced retries after a busy tool from nearly every time to about 4 in 10.[^anthropic-fable-5-2-prompting-guide]
- 为旧模型硬编码的规则在新模型上可能适得其反并浪费 Token。[^anthropic-fable-5-2-prompting-guide]
- Rules hard-coded for older models can work against the new model and burn tokens.[^anthropic-fable-5-2-prompting-guide]
- 帖文提供了一段提示词，让 Fable 5.2 审查 CLAUDE.md、AGENTS.md、技能、子代理和记忆文件。[^anthropic-fable-5-2-prompting-guide]
- The post provides a prompt asking Fable 5.2 to review CLAUDE.md, AGENTS.md, skills, subagent files, and memory files.[^anthropic-fable-5-2-prompting-guide]
- 需找出子代理委托、少思考或直接作答、风格上限、“从不”规则、旧笔记堆积及未明确覆盖动作的审批规则等问题。[^anthropic-fable-5-2-prompting-guide]
- Issues to identify include subagent delegation, thinking-less or direct-answer instructions, style limits, “never” rules, accumulated old notes, and approval rules without exact covered actions.[^anthropic-fable-5-2-prompting-guide]
- 建议先列出建议，涉及安全、权限边界或减少验证的提案单独列出供用户决定，暂不修改任何内容。[^anthropic-fable-5-2-prompting-guide]
- Recommendations should be shown first; proposals involving safety, permission boundaries, or reduced verification should be listed separately for the user to decide, with nothing modified yet.[^anthropic-fable-5-2-prompting-guide]

## 相关 / Related

- 原文：[链接](https://x.com/Voxyz_ai/status/2120501801313267818)。 / Original: [link](https://x.com/Voxyz_ai/status/2120501801313267818).
- Topic: [项目指令与 Token 效率 / Project instructions and token efficiency](../../topics/agents-md-token-efficiency.md)
- Topic: [Agent 上下文工程 / Context engineering for agents](../../topics/context-engineering-for-agents.md)
- Topic: [校准对 AI 的过度与不足引导 / Calibrating over- and under-guidance of AI](../../topics/calibrating-ai-guidance.md)

[^anthropic-fable-5-2-prompting-guide]: Clear Rules: Review Outdated Project Instructions with Anthropic's Fable 5.2 Prompting Guide
