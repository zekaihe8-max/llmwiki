---
type: Topic
title: Agent Skill 编写
title_en: Agent skill authoring
description: 可复用的 Agent Skills 来自真实跑通的任务：精炼、偏「何时启用」的描述，严格的 SKILL.md 体量上限并把细节放到 references，硬编码脆弱步骤，以及显式的 gotchas 列表。
description_en: Durable Agent Skills come from real agent runs, lean pushy descriptions that decide activation, tight SKILL.md size limits with references on the side, hard-coded fragile steps, and an explicit gotchas list.
tags: [agent-skills, authoring, best-practices]
sources:
  - id: voxyz-agent-skills-writing-rules
    resource: https://x.com/Voxyz_ai/status/2113374840413421906
    title: Vox on Agent Skills writing rules
generated:
  by: cursor-agent/okf-bilingual
  at: 2026-10-24T20:30:00+08:00
---

# Agent Skill 编写

*Agent skill authoring*

值得分享的 Skills，是从智能体已经跑通的任务里提炼出来的，而不是凭通用知识空想。描述决定技能会不会被加载；正文保持短小，把细节推到引用文件，硬编码脆弱命令，并把每次纠正记成 gotcha。[^voxyz-agent-skills-writing-rules]

Skills worth sharing are distilled from tasks an agent already completed well, not invented from general knowledge. The description gates whether the skill is ever loaded; the body stays short, pushes detail into referenced files, hard-codes fragile commands, and records every correction as a gotcha.[^voxyz-agent-skills-writing-rules]

## 综合分析 / Synthesis

[Vox on Agent Skills writing rules](../sources/articles/voxyz-agent-skills-writing-rules.md) 在标准转入基金会治理之后，从官方技能创建指南抽出六条规则：先和智能体一起做完任务，只留下真正奏效的部分；删掉任何不改变结果的行；把描述写成「在……时使用此技能」且不超过 1,024 字符；`SKILL.md` 控制在 500 行、5,000 tokens 以内，细节放 `references/`；硬编码脆弱命令并选定一个默认值；把 gotchas 列表当作最高价值段落。同帖还附带一个 Claude Code 提示，把刚完成的重复任务做成带评估的技能。[^voxyz-agent-skills-writing-rules]

[Vox on Agent Skills writing rules](../sources/articles/voxyz-agent-skills-writing-rules.md) pulls six rules from the official skill-creation guide after the standard moved under foundation governance: do the task with the agent first and keep only what worked; drop any line that would not change the outcome; write the description as "use this skill when..." under 1,024 characters; keep `SKILL.md` under 500 lines and 5,000 tokens with `references/` for detail; hard-code fragile commands and pick one default; treat the gotchas list as the highest-value section. The same post includes a Claude Code prompt to turn a just-finished repeated task into a skill with evals.[^voxyz-agent-skills-writing-rules]

## 矛盾与变化 / Contradictions

暂无。 / None yet.

## 相关 / Related

- 来源 / Source: [Vox on Agent Skills writing rules](../sources/articles/voxyz-agent-skills-writing-rules.md)
- 主题 / Topic: [Agent Skills open standard](./agent-skills-open-standard.md)

[^voxyz-agent-skills-writing-rules]: Vox on Agent Skills writing rules
