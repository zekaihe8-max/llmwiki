---
type: Source
title: "31年经验开发者看GTA 6移植直播，质疑Claude提示方式：有人只说「水还是什么东西坏了」"
title_en: "31-year veteran watches GTA 6 port livestream, questions Claude prompting: someone just said \"the water or something is broken\""
description: "Reddit r/ClaudeCode 高帖展示资深开发者对 AI 编程提示风格的分歧，从口语化随意指令到结构化工单均有支持者。"
description_en: "A top Reddit r/ClaudeCode post shows senior developers divided over AI coding prompt styles, from casual spoken instructions to structured tickets."
resource: https://x.com/shao__meng/status/2126158574565155132
tags: [claude-code, prompting, ai-coding, reddit]
sources:
  - id: gta-6-port-claude-prompting
    resource: https://x.com/shao__meng/status/2126158574565155132
    title: "31-year veteran watches GTA 6 port livestream, questions Claude prompting: someone just said \"the water or something is broken\""
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-27T20:11:13+08:00
---

# 31年经验开发者看GTA 6移植直播，质疑Claude提示方式：有人只说「水还是什么东西坏了」

*31-year veteran watches GTA 6 port livestream, questions Claude prompting: someone just said "the water or something is broken"*

帖文称，Reddit r/ClaudeCode 有 31 年软件经验的用户 DinnerMilk 发布《GTA 6》PC 移植直播截图，看到有人用「水还是什么东西坏了」这类口语提示 Claude，便发问「你们就是这样提示 Claude 的吗」。高赞评论认为模型已不为老派优化，关键在于多轮口语迭代；也有人主张信息密集、结构化的提示更有效，并列出 CLAUDE.md、HANDOFF.md、STATE.md 等文件。帖文还提到，含糊口语有时能避免模型过早锁定原因，但复杂项目仍需懂行的人把关。[^gta-6-port-claude-prompting]

The post says a Reddit r/ClaudeCode user with 31 years of software experience, DinnerMilk, shared a GTA 6 PC port livestream screenshot and asked whether people really prompt Claude with casual phrases like "the water or something is broken." Top comments argue models are no longer optimized for old-school approaches and that iterative spoken prompting matters; others insist on information-dense, structured prompts with files such as CLAUDE.md, HANDOFF.md, and STATE.md. The post also notes vague speech can prevent premature root-cause lock-in, but complex projects still need experienced human oversight.[^gta-6-port-claude-prompting]

## 摘要 / Summary

- Reddit r/ClaudeCode 用户 DinnerMilk 自称有 31 年软件经验，发布《GTA 6》PC 移植直播截图，质疑口语化提示方式。[^gta-6-port-claude-prompting]
- Reddit r/ClaudeCode user DinnerMilk, claiming 31 years of software experience, shared a GTA 6 PC port livestream screenshot and questioned casual prompting.[^gta-6-port-claude-prompting]
- 有人给 Claude 的提示仅为「水还是什么东西坏了」，高赞评论者 ChemicalTerrapin 自称 26 年经验，表示现在提示常只是「还不够好」或「界面再性感一点」。[^gta-6-port-claude-prompting]
- Someone prompted Claude with only "the water or something is broken"; top commenter ChemicalTerrapin, claiming 26 years of experience, said his prompts are now often just "not good enough" or "make the UI sexier."[^gta-6-port-claude-prompting]
- 获 118 个赞的 f-ben 指出，两天做出的东西即使没有 AI，资深开发者也未必能用十倍力气做成，这类项目不在乎意大利面代码。[^gta-6-port-claude-prompting]
- f-ben, with 118 likes, said what two days produced might not be achievable by veteran developers even with ten times the effort without AI, and such projects do not care about spaghetti code.[^gta-6-port-claude-prompting]
- 部分评论者认为含糊口语更有用，如指定「水的碰撞坏了」可能让模型只盯碰撞，而真正问题可能是任务脚本缺失；先能玩再拆开改更现实。[^gta-6-port-claude-prompting]
- Some commenters said vague speech can be more useful, as specifying "water collision is broken" may lock the model onto collision while the real issue could be a missing quest script; making it playable first, then refactoring, is more realistic.[^gta-6-port-claude-prompting]
- 另一方主张提示要信息密集、具体、有礼貌，会把 Jira 看板和工单派给统筹 Claude 会话，再由它拉起并行小会话开发并提交 PR 审查。[^gta-6-port-claude-prompting]
- Others argue prompts should be information-dense, specific, and polite, assigning Jira boards and tickets to an orchestrating Claude session that spawns parallel sub-sessions for development and PR review.[^gta-6-port-claude-prompting]
- 发帖人自己会让 Claude 写提示、交 GPT 审视，再用 Opus 5.5 和 Fable 5.2 审计计划，并准备 CLAUDE.md、HANDOFF.md、STATE.md，但承认对前沿模型可能过头。[^gta-6-port-claude-prompting]
- The original poster has Claude write prompts, GPT review them, and Opus 5.5 and Fable 5.2 audit plans, while preparing CLAUDE.md, HANDOFF.md, and STATE.md, though he admits this may be excessive for frontier models.[^gta-6-port-claude-prompting]

## 相关 / Related

- 原文：[链接](https://x.com/shao__meng/status/2126158574565155132)。 / Original: [link](https://x.com/shao__meng/status/2126158574565155132).
- Topic: [Claude Code 作者与社区话筒 / Claude Code authorship and community voice](../../topics/claude-code-authorship-and-voice.md)
- Topic: [Vibe Coding 的记忆悖论 / Vibe-coding memory paradox](../../topics/vibe-coding-memory-paradox.md)
- Topic: [校准对 AI 的过度与不足引导 / Calibrating over- and under-guidance of AI](../../topics/calibrating-ai-guidance.md)
- Topic: [AI 代码与屎山上线双标 / AI code vs messy-code shipping double standard](../../topics/ai-code-vs-messy-code-double-standard.md)

[^gta-6-port-claude-prompting]: 31-year veteran watches GTA 6 port livestream, questions Claude prompting: someone just said "the water or something is broken"
