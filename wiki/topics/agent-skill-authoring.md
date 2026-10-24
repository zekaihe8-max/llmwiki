---
type: Topic
title: Agent skill authoring
description: Durable Agent Skills come from real agent runs, lean pushy descriptions that decide activation, tight SKILL.md size limits with references on the side, hard-coded fragile steps, and an explicit gotchas list.
tags: [agent-skills, authoring, best-practices]
sources:
  - id: voxyz-agent-skills-writing-rules
    resource: https://x.com/Voxyz_ai/status/2113374840413421906
    title: Vox on Agent Skills writing rules
generated:
  by: auto/composer
  at: 2026-10-24T15:42:06+08:00
---

# Agent skill authoring

Skills worth sharing are distilled from tasks an agent already completed well, not invented from general knowledge. The description gates whether the skill is ever loaded; the body stays short, pushes detail into referenced files, hard-codes fragile commands, and records every correction as a gotcha.[^voxyz-agent-skills-writing-rules]

## Synthesis

[Vox on Agent Skills writing rules](../sources/articles/voxyz-agent-skills-writing-rules.md) pulls six rules from the official skill-creation guide after the standard moved under foundation governance: do the task with the agent first and keep only what worked; drop any line that would not change the outcome; write the description as "use this skill when..." under 1,024 characters; keep `SKILL.md` under 500 lines and 5,000 tokens with `references/` for detail; hard-code fragile commands and pick one default; treat the gotchas list as the highest-value section. The same post includes a Claude Code prompt to turn a just-finished repeated task into a skill with evals.[^voxyz-agent-skills-writing-rules]

## Contradictions

None yet.

## Related

- Source: [Vox on Agent Skills writing rules](../sources/articles/voxyz-agent-skills-writing-rules.md)
- Topic: [Agent Skills open standard](./agent-skills-open-standard.md)

[^voxyz-agent-skills-writing-rules]: Vox on Agent Skills writing rules
