---
type: Topic
title: AGENTS.md 要求 worktree 完成即删
title_en: AGENTS.md rules for no leftover worktrees
description: 编程 Agent 常为每会话建独立 git worktree（可带 node_modules / .next 等，达 GB 级）；把「完成即删 worktree 与分支」写入 AGENTS.md，由 Agent 自清理，优于事后人手扫盘。
description_en: Coding agents often give each chat its own git worktree (with node_modules / .next and peers at GB scale); writing “delete the worktree and branch when done” into AGENTS.md so the agent cleans up beats sweeping disk by hand later.
tags: [agents-md, worktree, git, cleanup, coding-agents, disk]
sources:
  - id: dotey-agents-md-worktree-cleanup
    resource: https://x.com/dotey/status/2115314783503196605
    title: Dotey on AGENTS.md rules against leftover worktrees
generated:
  by: cursor-agent/composer
  at: 2026-10-28T20:15:01+08:00
---

# AGENTS.md 要求 worktree 完成即删

*AGENTS.md rules for no leftover worktrees*

当 Claude Code、Codex、t3 code 一类工具为每次会话开独立 git worktree，并常自带 `node_modules`、`.next` 等依赖缓存时，任务结束后若无人清理，残留可到数十棵、数十 GB。把「worktree 不遗留」写成 `AGENTS.md` 执行规则，让 Agent 在完成时删除 worktree 与分支（并处理专用构建目录、编排会话对子 worktree 的收尾），比事后人手扫盘更稳。[^dotey-agents-md-worktree-cleanup]

When tools such as Claude Code, Codex, or t3 code give each chat its own git worktree—often with `node_modules`, `.next`, and similar caches—unremoved trees after tasks can reach dozens of worktrees and tens of GB. Encoding “no leftover worktrees” as an `AGENTS.md` execution rule so the agent deletes the worktree and branch on completion (plus dedicated build dirs, with the orchestrating session closing spawned worktrees) is steadier than sweeping disk by hand afterward.[^dotey-agents-md-worktree-cleanup]

## 综合分析 / Synthesis

[宝玉谈用 AGENTS.md 避免 worktree 残留](../sources/articles/dotey-agents-md-worktree-cleanup.md) 以 Marcos Cámara 的体感（41 棵 / ~45GB，每棵约 1–2GB）为问题，给出策略：在 `AGENTS.md` 要求 worktree 不遗留，由 Agent 自清理；并引用 [baocut AGENTS.md](https://github.com/JimLiu/baocut/blob/main/AGENTS.md) 条文——含 subagent 的 `.claude/worktrees/agent-*`、删前合并或 `archive/<name>` tag 存档、删 cargo target、编排会话收尾派生 worktree，以及确需保留须点名路径与原因。[^dotey-agents-md-worktree-cleanup] 原帖 <https://x.com/dotey/status/2115314783503196605>。

[Dotey on AGENTS.md rules against leftover worktrees](../sources/articles/dotey-agents-md-worktree-cleanup.md) takes Marcos Cámara’s report (41 trees / ~45GB, about 1–2GB each) as the problem and answers with strategy: require no leftover worktrees in `AGENTS.md` so the agent cleans up; it quotes the [baocut AGENTS.md](https://github.com/JimLiu/baocut/blob/main/AGENTS.md) block—covering subagent `.claude/worktrees/agent-*`, merge-or-`archive/<name>` tag before remove, dropping cargo targets, orchestrator cleanup of spawned worktrees, and naming path plus reason when a keep is needed.[^dotey-agents-md-worktree-cleanup] Post: <https://x.com/dotey/status/2115314783503196605>.

与 [项目指令与 Token 效率](./agents-md-token-efficiency.md) 同属「往 `AGENTS.md` 写执行约束」，但那页切 Token / 人设 / 用量习惯；本页切磁盘与 git worktree 生命周期。与 [UX、DX 与 AX](./ux-dx-and-ax.md)、[代码重于规格](./code-over-spec.md) 同样用项目指令改 Agent 行为，但分别管交付体验与文档–代码冲突，不覆盖 worktree 收尾。

It shares “write execution constraints into `AGENTS.md`” with [Project instructions and token efficiency](./agents-md-token-efficiency.md), but that page cuts Tokens / personas / usage habits; this page cuts disk and git worktree lifecycle. [UX, DX, and AX](./ux-dx-and-ax.md) and [Code over the spec](./code-over-spec.md) likewise change agent behavior via project instructions, for delivery experience and doc–code conflict—not worktree teardown.

## 矛盾与变化 / Contradictions

暂无。 / None yet.

## 相关 / Related

- Source: [宝玉谈用 AGENTS.md 避免 worktree 残留](../sources/articles/dotey-agents-md-worktree-cleanup.md)
- Topic: [项目指令与 Token 效率](./agents-md-token-efficiency.md)
- Topic: [UX、DX 与 AX](./ux-dx-and-ax.md)
- Topic: [代码重于规格](./code-over-spec.md)

[^dotey-agents-md-worktree-cleanup]: Dotey on AGENTS.md rules against leftover worktrees
