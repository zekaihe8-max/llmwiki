---
type: Source
title: Vox on Agent Skills writing rules
description: Vox summarizes six Agent Skills authoring rules from the foundation guide—author from real runs, cut filler, lean pushy descriptions, size limits, hard-coded fragile steps, and a gotchas list—plus a Claude Code prompt to save a finished task as a skill.
resource: https://x.com/Voxyz_ai/status/2113374840413421906
tags: [agent-skills, authoring, aaif, best-practices]
sources:
  - id: voxyz-agent-skills-writing-rules
    resource: https://x.com/Voxyz_ai/status/2113374840413421906
    title: Vox on Agent Skills writing rules
    author: human:Voxyz_ai
generated:
  by: auto/composer
  at: 2026-10-24T15:42:06+08:00
date: 2026-10-23
---

# Vox on Agent Skills writing rules

[@Voxyz_ai](https://x.com/Voxyz_ai) notes that Anthropic donated the Agent Skills standard to the Linux Foundation (the same home as MCP), cites adoption of about one million published skills, nearly 280 million installs, and support on more than seventy platforms, and extracts six authoring rules from the official guide that moved with the donation.[^voxyz-agent-skills-writing-rules] The post is at <https://x.com/Voxyz_ai/status/2113374840413421906>.

## Summary

- Author a skill from a real agent run: keep the steps that worked, the corrections you made, the I/O formats, and the context you added; a model writing from general knowledge tends to produce filler.[^voxyz-agent-skills-writing-rules]
- Cut any line the agent would not get wrong without; at startup the agent reads only the name and description, so write the description as "use this skill when...", lean pushy, list cases users will not spell out, and stay under 1,024 characters.[^voxyz-agent-skills-writing-rules]
- Keep `SKILL.md` under 500 lines and 5,000 tokens, move detail into `references/` with notes on when to read each file, hard-code fragile commands, pick one default when several approaches exist, and keep a gotchas list of every correction you had to make.[^voxyz-agent-skills-writing-rules]
- After a repeated handoff, the post offers a Claude Code prompt to turn the just-finished task into a standard skill with evals, following [agentskills.io skill-creation best practices](https://agentskills.io/skill-creation/best-practices).[^voxyz-agent-skills-writing-rules]

## Related

- Topic: [Agent skill authoring](../../topics/agent-skill-authoring.md)
- Topic: [Agent Skills open standard](../../topics/agent-skills-open-standard.md)

[^voxyz-agent-skills-writing-rules]: Vox on Agent Skills writing rules
