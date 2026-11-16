---
type: Source
title: "Vox · 过夜任务别卡死在一步"
title_en: "Vox · Don't let overnight tasks get stuck on one step"
description: "用 Herdr 让 Claude Opus 与 GPT-6.1 Sol 互审，通过 CLAUDE.md 分步验证实现过夜自动编程"
description_en: "Use Herdr to let Claude Opus and GPT-6.1 Sol review each other, achieving overnight automatic programming through step-by-step verification in CLAUDE.md"
resource: https://x.com/Voxyz_ai/status/2122072146411438294
tags: [agents, coding-agent, overnight-automation, multi-agent-review]
sources:
  - id: b4fc19298b89a0ff
    resource: https://x.com/Voxyz_ai/status/2122072146411438294
    title: "Vox · Don't let overnight tasks get stuck on one step"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-16T08:53:10+08:00
---

# Vox · 过夜任务别卡死在一步

*Vox · Don't let overnight tasks get stuck on one step*

「帖文称」Voxyz_ai 发布了一套过夜编程方案：安装 Herdr 并为 Claude Code 添加 Herdr 技能，在两个窗格中分别运行 Claude Opus 5.5 与 GPT-6.1 Sol，通过 CLAUDE.md 规定“计划—构建—验证—修复”流程，每步最多尝试三次并保存进度，Opus 将差分发给 Sol 经 Herdr 审核后方可视为完成，最后设定目标并脱离后让任务过夜运行。[^b4fc19298b89a0ff]

The post claims that Voxyz_ai published an overnight programming scheme: install Herdr and add the Herdr skill to Claude Code, run Claude Opus 5.5 and GPT-6.1 Sol in two panes, use CLAUDE.md to mandate a "plan-build-verify-fix" flow with at most three attempts per step and progress saved after each pass, have Opus send diffs to Sol via Herdr for sign-off before a step is done, then set a goal and detach to let the task run overnight.[^b4fc19298b89a0ff]

## 摘要 / Summary

- 帖文作者为 Voxyz_ai（显示名 Vox），发布于 2026 年 11 月 15 日 21:00。[^b4fc19298b89a0ff]
- The post author is Voxyz_ai (display name Vox), published at 21:00 on November 15, 2026.[^b4fc19298b89a0ff]
- 方案使用 Herdr（brew install herdr），并通过 npx skills add herdrdev/herdr --skill herdr -g 为 Claude Code 添加 Herdr 技能。[^b4fc19298b89a0ff]
- The scheme uses Herdr (brew install herdr) and adds the Herdr skill to Claude Code via npx skills add herdrdev/herdr --skill herdr -g.[^b4fc19298b89a0ff]
- 两个窗格分别运行 claude --model claude-opus-5-5 与 codex -m gpt-6.1-sol。[^b4fc19298b89a0ff]
- Two panes run claude --model claude-opus-5-5 and codex -m gpt-6.1-sol respectively.[^b4fc19298b89a0ff]
- CLAUDE.md 要求每步执行“计划、构建、验证、修复”，最多 3 次尝试，每次具体改动，通过后保存进度，失败则记录错误、标记阻塞并转向下一个独立步骤。[^b4fc19298b89a0ff]
- CLAUDE.md requires each step to execute "plan, build, verify, fix", with at most 3 attempts and specific changes each time; save progress after passing, and if failed record the error, mark it blocked, and move to the next independent step.[^b4fc19298b89a0ff]
- Opus 通过 Herdr 将差分发给 Sol 作为审阅者，步骤在 Sol 签字确认前不算完成。[^b4fc19298b89a0ff]
- Opus sends the diff to Sol via Herdr as reviewer, and a step is not considered done until Sol signs off.[^b4fc19298b89a0ff]
- 在 Opus 窗格输入 /goal 并说明当晚“完成”标准，使用 ctrl+b q 脱离，保持电脑盖开后即可睡觉。[^b4fc19298b89a0ff]
- Enter /goal in the Opus pane and explain the "done" standard for the night, use ctrl+b q to detach, keep the lid open, and go to sleep.[^b4fc19298b89a0ff]

## 相关 / Related

- 原文：[链接](https://x.com/Voxyz_ai/status/2122072146411438294)。 / Original: [link](https://x.com/Voxyz_ai/status/2122072146411438294).
- Topic: [个人 Agent 当包工头调度编程 Agent / Personal agent as foreman over coding agents](../../topics/personal-agent-foreman-over-coding-agents.md)
- Topic: [智能体自动模式 / Agent auto mode](../../topics/agent-auto-mode.md)
- Topic: [项目指令与 Token 效率 / Project instructions and token efficiency](../../topics/agents-md-token-efficiency.md)
- Topic: [Agent Skill 编写 / Agent skill authoring](../../topics/agent-skill-authoring.md)

[^b4fc19298b89a0ff]: Vox · Don't let overnight tasks get stuck on one step
