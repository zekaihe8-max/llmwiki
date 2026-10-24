---
type: Source
title: Vox 谈 Agent Skills 写作规则
title_en: Vox on Agent Skills writing rules
description: Vox 从基金会指南提炼六条 Agent Skills 编写规则——从真实运行中写、删掉废话、描述偏强硬、控制体量、硬编码易碎步骤、维护踩坑清单——并附一份把已完成任务存为 skill 的 Claude Code 提示。
description_en: Vox summarizes six Agent Skills authoring rules from the foundation guide—author from real runs, cut filler, lean pushy descriptions, size limits, hard-coded fragile steps, and a gotchas list—plus a Claude Code prompt to save a finished task as a skill.
resource: https://x.com/Voxyz_ai/status/2113374840413421906
tags: [agent-skills, authoring, aaif, best-practices]
sources:
  - id: voxyz-agent-skills-writing-rules
    resource: https://x.com/Voxyz_ai/status/2113374840413421906
    title: Vox on Agent Skills writing rules
    author: human:Voxyz_ai
generated:
  by: cursor-agent/okf-bilingual
  at: 2026-10-24T20:30:00+08:00
date: 2026-10-23
---

# Vox 谈 Agent Skills 写作规则

*Vox on Agent Skills writing rules*

[@Voxyz_ai](https://x.com/Voxyz_ai) 指出 Anthropic 已将 Agent Skills 标准捐给 Linux Foundation（与 MCP 同属一处），并引用约一百万已发布 skills、近 2.8 亿次安装、七十多个平台支持等数据，从随捐赠一并迁移的官方指南中提炼出六条编写规则。[^voxyz-agent-skills-writing-rules] 原文见 <https://x.com/Voxyz_ai/status/2113374840413421906>。

[@Voxyz_ai](https://x.com/Voxyz_ai) notes that Anthropic donated the Agent Skills standard to the Linux Foundation (the same home as MCP), cites adoption of about one million published skills, nearly 280 million installs, and support on more than seventy platforms, and extracts six authoring rules from the official guide that moved with the donation.[^voxyz-agent-skills-writing-rules] The post is at <https://x.com/Voxyz_ai/status/2113374840413421906>.

## 摘要 / Summary

- 从一次真实的 agent 运行编写 skill：保留奏效的步骤、你做的纠正、I/O 格式，以及你补上的上下文；模型仅凭通识写出来的内容往往是废话。[^voxyz-agent-skills-writing-rules]
- Author a skill from a real agent run: keep the steps that worked, the corrections you made, the I/O formats, and the context you added; a model writing from general knowledge tends to produce filler.[^voxyz-agent-skills-writing-rules]
- 删掉 agent 本来就不会搞错的任何一行；启动时 agent 只读名称与描述，因此描述写成「在……时使用本 skill」、偏强硬、列出用户不会明说的场景，并控制在 1,024 字符以内。[^voxyz-agent-skills-writing-rules]
- Cut any line the agent would not get wrong without; at startup the agent reads only the name and description, so write the description as "use this skill when...", lean pushy, list cases users will not spell out, and stay under 1,024 characters.[^voxyz-agent-skills-writing-rules]
- 将 `SKILL.md` 控制在 500 行、5,000 tokens 以内，细节放到 `references/` 并注明何时读每个文件，硬编码易碎命令，多种做法并存时选定一个默认，并维护一份你曾纠正过的踩坑清单。[^voxyz-agent-skills-writing-rules]
- Keep `SKILL.md` under 500 lines and 5,000 tokens, move detail into `references/` with notes on when to read each file, hard-code fragile commands, pick one default when several approaches exist, and keep a gotchas list of every correction you had to make.[^voxyz-agent-skills-writing-rules]
- 在反复交接之后，帖子给出一份 Claude Code 提示，把刚完成的任务按 [agentskills.io skill-creation best practices](https://agentskills.io/skill-creation/best-practices) 做成带 evals 的标准 skill。[^voxyz-agent-skills-writing-rules]
- After a repeated handoff, the post offers a Claude Code prompt to turn the just-finished task into a standard skill with evals, following [agentskills.io skill-creation best practices](https://agentskills.io/skill-creation/best-practices).[^voxyz-agent-skills-writing-rules]

## 相关 / Related

- Topic: [Agent skill authoring](../../topics/agent-skill-authoring.md)
- Topic: [Agent Skills open standard](../../topics/agent-skills-open-standard.md)

[^voxyz-agent-skills-writing-rules]: Vox on Agent Skills writing rules
