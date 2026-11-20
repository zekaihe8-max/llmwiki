---
type: Source
title: "一个小设置：阻止 Claude Code 清理旧会话"
title_en: "A small setting: stop Claude Code from deleting old sessions"
description: "在 ~/.claude/settings.json 中设置 cleanupPeriodDays 可防止 Claude Code 在 30 天后删除终端会话"
description_en: "Setting cleanupPeriodDays in ~/.claude/settings.json prevents Claude Code from deleting terminal sessions after 30 days"
resource: https://x.com/Voxyz_ai/status/2123431117634367675
tags: [claude-code, settings, sessions, cleanup]
sources:
  - id: claude-code-cleanup-period-days
    resource: https://x.com/Voxyz_ai/status/2123431117634367675
    title: "A small setting: stop Claude Code from deleting old sessions"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-20T08:26:07+08:00
---

# 一个小设置：阻止 Claude Code 清理旧会话

*A small setting: stop Claude Code from deleting old sessions*

「帖文称」Claude Code 默认会在终端会话使用 30 天后将其删除，导致 /resume 无法找回；用户可在 ~/.claude/settings.json 中添加 "cleanupPeriodDays": 36500 来延长保留期。[^claude-code-cleanup-period-days]

The post claims Claude Code deletes terminal sessions by default after 30 days, making /resume unable to recover them; users can add "cleanupPeriodDays": 36500 to ~/.claude/settings.json to extend retention.[^claude-code-cleanup-period-days]

## 摘要 / Summary

- 帖文建议在 ~/.claude/settings.json 中添加 "cleanupPeriodDays": 36500。[^claude-code-cleanup-period-days]
- The post recommends adding "cleanupPeriodDays": 36500 to ~/.claude/settings.json.[^claude-code-cleanup-period-days]
- 默认情况下，Claude Code 终端会话在 30 天后会被删除。[^claude-code-cleanup-period-days]
- By default, Claude Code terminal sessions are deleted once they are 30 days old.[^claude-code-cleanup-period-days]
- 会话被删除后，/resume 无法将其找回。[^claude-code-cleanup-period-days]
- After sessions are deleted, /resume cannot bring them back.[^claude-code-cleanup-period-days]
- 该帖子由 Voxyz_ai 于 2026 年 11 月 19 日发布。[^claude-code-cleanup-period-days]
- The post was published by Voxyz_ai on November 19, 2026.[^claude-code-cleanup-period-days]

## 相关 / Related

- 原文：[链接](https://x.com/Voxyz_ai/status/2123431117634367675)。 / Original: [link](https://x.com/Voxyz_ai/status/2123431117634367675).
- Topic: [Claude Code 作者与社区话筒 / Claude Code authorship and community voice](../../topics/claude-code-authorship-and-voice.md)
- Topic: [AGENTS.md 要求 worktree 完成即删 / AGENTS.md rules for no leftover worktrees](../../topics/agent-worktree-cleanup.md)
- Topic: [编程 Agent 体验与额度 / Coding agent UX vs quota](../../topics/coding-agent-ux-vs-quota.md)
- Topic: [个人 Agent 云环境的备份、隔离与定时检查 / Personal-agent cloud env: backup, isolation, and schedule checks](../../topics/personal-agent-cloud-env-pitfalls.md)

[^claude-code-cleanup-period-days]: A small setting: stop Claude Code from deleting old sessions
