---
type: Source
title: "Alma 远程控 Herdr"
title_en: "Alma Remote Controls Herdr"
description: "帖文称 Alma 0.4.486 修复了因 herdr 技能中的 HERDR_ENV=1 判断导致的操作中断，并支持打开空工作区。"
description_en: "The post says Alma 0.4.486 fixes operation interruption caused by the HERDR_ENV=1 check in herdr's skill, and supports opening an empty workspace."
resource: https://x.com/yetone/status/2119027948053574099
tags: [alma, herdr, agent-skill, bug-fix]
sources:
  - id: alma-herdr-remote-control
    resource: https://x.com/yetone/status/2119027948053574099
    title: "Alma Remote Controls Herdr"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-07T20:45:00+08:00
---

# Alma 远程控 Herdr

*Alma Remote Controls Herdr*

「帖文称」用户 yetone 在 X 上发帖说明，问题已找到：herdr 自带的 skill 写着「没有 HERDR_ENV=1 就停止」，Alma 读到后误以为自己不能操作 herdr。在 0.4.486 版本中，Alma 只走 alma herdr，不再被该 skill 带偏，并且支持直接开启一个不带任务的空工作区；该修复正在构建，稍后可更新。[^alma-herdr-remote-control]

The post says user yetone reported on X that the issue was found: herdr's built-in skill states "stop without HERDR_ENV=1", and Alma read it and mistakenly thought it could not operate herdr. In version 0.4.486, Alma only runs alma herdr and is no longer misled by it, and also supports directly opening an empty workspace without tasks; the fix is being built and will be available later.[^alma-herdr-remote-control]

## 摘要 / Summary

- 帖文称 herdr 自带 skill 写着「没有 HERDR_ENV=1 就停止」。 / The post says herdr's built-in skill states "stop without HERDR_ENV=1".[^alma-herdr-remote-control]
- 帖文称 Alma 读到该 skill 后误以为自己不能操作 herdr。 / The post says Alma read the skill and mistakenly thought it could not operate herdr.[^alma-herdr-remote-control]
- 帖文称 0.4.486 里 Alma 只走 alma herdr，不再被它带偏。 / The post says in 0.4.486 Alma only runs alma herdr and is no longer misled by it.[^alma-herdr-remote-control]
- 帖文称 0.4.486 支持直接开一个空 workspace，不带任务。 / The post says 0.4.486 supports directly opening an empty workspace without tasks.[^alma-herdr-remote-control]
- 帖文称修复正在构建，稍后可更新。 / The post says the fix is being built and will be available later.[^alma-herdr-remote-control]

## 相关 / Related

- 原文：[链接](https://x.com/yetone/status/2119027948053574099)。 / Original: [link](https://x.com/yetone/status/2119027948053574099).
- Topic: [Agent Skill 编写 / Agent skill authoring](../../topics/agent-skill-authoring.md)
- Topic: [智能体自动模式 / Agent auto mode](../../topics/agent-auto-mode.md)
- Topic: [个人 Agent 当包工头调度编程 Agent / Personal agent as foreman over coding agents](../../topics/personal-agent-foreman-over-coding-agents.md)
- Topic: [Agent 对话内问题反馈 / In-conversation agent bug feedback](../../topics/agent-in-chat-bug-feedback.md)

[^alma-herdr-remote-control]: Alma Remote Controls Herdr
