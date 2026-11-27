---
type: Source
title: "Voxyz 帖文：Claude Code 技能描述被压缩为裸名称，建议审计并重写触发词"
title_en: "Voxyz Post: Claude Code Skill Descriptions Compressed to Bare Names, Suggests Audit and Trigger Rewriting"
description: "Voxyz 发帖称 Claude Code 加载技能后会将描述压缩为裸名称且不自动选用，并提供一段用于审计技能、调整 settings.json 并重写触发词的提示词。"
description_en: "Voxyz posts that Claude Code compresses loaded skill descriptions to bare names and does not select them automatically, and provides a prompt to audit skills, adjust settings.json, and rewrite triggers."
resource: https://x.com/Voxyz_ai/status/2125952719676756047
tags: [claude-code, agent-skills, prompt-engineering]
sources:
  - id: voxyz-claude-code-skills-audit
    resource: https://x.com/Voxyz_ai/status/2125952719676756047
    title: "Voxyz Post: Claude Code Skill Descriptions Compressed to Bare Names, Suggests Audit and Trigger Rewriting"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-27T08:35:13+08:00
---

# Voxyz 帖文：Claude Code 技能描述被压缩为裸名称，建议审计并重写触发词

*Voxyz Post: Claude Code Skill Descriptions Compressed to Bare Names, Suggests Audit and Trigger Rewriting*

「帖文称」Voxyz 在 X 上发布一条关于 Claude Code 的帖子，指出加载技能后系统会悄悄将技能描述压缩为裸名称，并且不会自动选用这些技能。帖文附带一段可粘贴到 Claude Code 的提示词，要求审计可见技能、标记仅显示名称的技能，打开 ~/.claude/settings.json 并设置 skillListingBudgetFraction 为 0.02 或 0.03，重写每个技能描述使触发词出现在第一行，列出从未使用的技能并在删除前询问，最后报告重启前后能看到的技能数量。[^voxyz-claude-code-skills-audit]

The post claims that when skills are loaded into Claude Code, their descriptions are quietly cut down to bare names and the model does not pick them on its own. It includes a prompt to paste into Claude Code to audit all visible skills, mark those where only the name is visible, open ~/.claude/settings.json and set skillListingBudgetFraction to 0.02 (or 0.03 on a 1M context model), rewrite every description so the trigger is in the first line, show unused skills and ask before deleting any, and report how many skills were seen before and after a restart.[^voxyz-claude-code-skills-audit]

## 摘要 / Summary

- 帖文由 X 用户 Voxyz_ai 于 2026 年 11 月 26 日下午 2:00 发布，获得 3,793 次浏览。[^voxyz-claude-code-skills-audit]
- The post was published by X user Voxyz_ai at 2:00 PM on November 26, 2026, and received 3,793 views.[^voxyz-claude-code-skills-audit]
- 帖文称 Claude Code 加载技能后会将描述压缩为裸名称，且不会自动选用。[^voxyz-claude-code-skills-audit]
- The post claims Claude Code compresses skill descriptions to bare names after loading and does not select them automatically.[^voxyz-claude-code-skills-audit]
- 建议将 ~/.claude/settings.json 中的 skillListingBudgetFraction 设为 0.02，1M 上下文模型可用 0.03。[^voxyz-claude-code-skills-audit]
- It recommends setting skillListingBudgetFraction to 0.02 in ~/.claude/settings.json, or 0.03 for a 1M context model.[^voxyz-claude-code-skills-audit]
- 提示词要求重写每个技能描述，使触发词出现在第一行。[^voxyz-claude-code-skills-audit]
- The prompt asks to rewrite every skill description so the trigger appears in the first line.[^voxyz-claude-code-skills-audit]
- 帖文还要求列出从未使用的技能，并在删除前询问，最后统计重启前后的技能数量。[^voxyz-claude-code-skills-audit]
- It also asks to list never-used skills, ask before deleting any, and report the skill count before and after restart.[^voxyz-claude-code-skills-audit]

## 相关 / Related

- 原文：[链接](https://x.com/Voxyz_ai/status/2125952719676756047)。 / Original: [link](https://x.com/Voxyz_ai/status/2125952719676756047).
- Topic: [Agent Skill 编写 / Agent skill authoring](../../topics/agent-skill-authoring.md)
- Topic: [Claude Code 作者与社区话筒 / Claude Code authorship and community voice](../../topics/claude-code-authorship-and-voice.md)
- Topic: [Agent 上下文工程 / Context engineering for agents](../../topics/context-engineering-for-agents.md)

[^voxyz-claude-code-skills-audit]: Voxyz Post: Claude Code Skill Descriptions Compressed to Bare Names, Suggests Audit and Trigger Rewriting
