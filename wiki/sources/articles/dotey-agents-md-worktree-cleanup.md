---
type: Source
title: 宝玉谈用 AGENTS.md 避免 worktree 残留
title_en: Dotey on AGENTS.md rules against leftover worktrees
description: 宝玉：避免 worktree 残留的最佳策略是在 AGENTS.md 写清「完成即删」，让 Agent 自己清理；并引用 baocut 规则（含合并/打 archive tag、删 cargo target、编排会话收尾子 worktree）。
description_en: Dotey says the best way to avoid leftover worktrees is an AGENTS.md rule that tasks must clean up, so the agent deletes them; he quotes baocut’s rule (merge or archive tag, drop cargo targets, orchestrator closes subagent worktrees).
resource: https://x.com/dotey/status/2115314783503196605
tags: [agents-md, worktree, git, cleanup, claude-code, codex, dotey]
sources:
  - id: dotey-agents-md-worktree-cleanup
    resource: https://x.com/dotey/status/2115314783503196605
    title: Dotey on AGENTS.md rules against leftover worktrees
    author: human:dotey
generated:
  by: cursor-agent/composer
  at: 2026-10-28T20:15:01+08:00
date: 2026-10-28
---

# 宝玉谈用 AGENTS.md 避免 worktree 残留

*Dotey on AGENTS.md rules against leftover worktrees*

[@dotey](https://x.com/dotey)（宝玉）主张：避免 worktree 残留的最佳策略，是在 `AGENTS.md` 里加规则要求 worktree 不遗留，让 Agent 自己去清理；并贴出 [JimLiu/baocut](https://github.com/JimLiu/baocut/blob/main/AGENTS.md) 中的「worktree 不遗留」条文。[^dotey-agents-md-worktree-cleanup] 帖子引用 [@marcoscamara01](https://x.com/marcoscamara01)：Claude Code / Codex / t3 code 等每次会话各自 worktree，常带独立 `node_modules` 与 `.next`，约 1–2GB/棵，任务结束后无人清理——他有 41 棵、约 45GB。[^dotey-agents-md-worktree-cleanup] 原帖见 <https://x.com/dotey/status/2115314783503196605>。

[@dotey](https://x.com/dotey) argues that the best way to avoid leftover worktrees is to add an `AGENTS.md` rule that worktrees must not be left behind, so the agent cleans them up itself; he quotes the “no leftover worktrees” block from [JimLiu/baocut](https://github.com/JimLiu/baocut/blob/main/AGENTS.md).[^dotey-agents-md-worktree-cleanup] The post quotes [@marcoscamara01](https://x.com/marcoscamara01): each Claude Code / Codex / t3 code chat gets its own git worktree, often with its own `node_modules` and `.next`, about 1–2GB each, and none cleaned after the task—41 worktrees, about 45GB in his case.[^dotey-agents-md-worktree-cleanup] Post: <https://x.com/dotey/status/2115314783503196605>.

## 摘要 / Summary

- 策略：把「worktree 不遗留」写成 `AGENTS.md` 规则，由 Agent 在任务完成时自清理，而不是人手扫盘。[^dotey-agents-md-worktree-cleanup]
- Strategy: encode “no leftover worktrees” in `AGENTS.md` so the agent cleans up when a task finishes, instead of humans sweeping disk by hand.[^dotey-agents-md-worktree-cleanup]
- 引用规则要点：在 worktree（含 subagent 的 `.claude/worktrees/agent-*`）做完须删该 worktree 与分支，并删专用 cargo target；删前二选一——合并进 main，或不合并则先提交未提交改动、打 `archive/<worktree 名>` tag，再 `git worktree remove` 与 `git branch -D`；编排 subagent 的会话负责收尾派生 worktree；确需保留的须在最终回复点名路径与原因，不得默默留下。[^dotey-agents-md-worktree-cleanup]
- Quoted rule highlights: work done in a worktree (including subagent `.claude/worktrees/agent-*`) must delete that worktree and branch, plus its dedicated cargo target; before delete, either merge into main, or—if not merging—commit uncommitted changes, tag `archive/<worktree name>`, then `git worktree remove` and `git branch -D`; the orchestrating session closes worktrees it spawned; keepers must be named with path and reason in the final reply, never left silently.[^dotey-agents-md-worktree-cleanup]
- 问题语境：多会话各一棵 worktree 且带依赖缓存时，残留可到数十 GB（引用例：41 棵 / ~45GB）。[^dotey-agents-md-worktree-cleanup]
- Problem context: when each chat gets a worktree with dependency caches, leftovers can reach tens of GB (cited case: 41 worktrees / ~45GB).[^dotey-agents-md-worktree-cleanup]

## 相关 / Related

- Topic: [AGENTS.md 要求 worktree 完成即删](../../topics/agent-worktree-cleanup.md)
- Topic: [项目指令与 Token 效率](../../topics/agents-md-token-efficiency.md)

[^dotey-agents-md-worktree-cleanup]: Dotey on AGENTS.md rules against leftover worktrees
