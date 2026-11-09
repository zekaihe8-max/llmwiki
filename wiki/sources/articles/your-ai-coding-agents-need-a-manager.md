---
type: Source
title: "你的 AI 编程智能体需要一位经理"
title_en: "Your AI coding agents need a manager"
description: "将 AI 编程视为团队管理：通过明确任务范围、授权边界、验证循环和异步检查来编排多个并行智能体。"
description_en: "Treat AI coding as team management: orchestrate multiple parallel agents through clear scoping, delegation boundaries, verification loops, and async check-ins."
resource: https://addyosmani.com/blog/coding-agents-manager
tags: [ai-coding-agents, agent-management, orchestration, software-engineering]
sources:
  - id: addyosmani-coding-agents-manager
    resource: https://addyosmani.com/blog/coding-agents-manager
    title: "Your AI coding agents need a manager"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-09T08:05:55+08:00
---

# 你的 AI 编程智能体需要一位经理

*Your AI coding agents need a manager*

Addy Osmani 认为，当开发者并行运行多个 AI 编程智能体时，编码工作已从提示工程转向团队管理：需要像技术领导一样进行任务拆解、授权、验证和异步检查。帖文称 Boris Cherny 在本地和浏览器中同时运行多达十五个 Claude Code 会话，并可从手机发起新会话；Simon Willison 则指出，并行智能体的自然瓶颈在于审查代码而非生成代码。[^addyosmani-coding-agents-manager]

Addy Osmani argues that running multiple AI coding agents in parallel turns programming into team management, requiring task scoping, delegation, verification, and async checks like a tech lead. A post says Boris Cherny runs up to fifteen Claude Code sessions across local terminals, browser tabs, and mobile; Simon Willison believes the natural bottleneck of parallel agents is reviewing code, not generating it.[^addyosmani-coding-agents-manager]

## 摘要 / Summary

- 作者指出，AI 编程规模化后的瓶颈不再是“智能体能否写代码”，而是“是否应该构建”以及“能否有效管理多个并行智能体”。 / The author argues that once AI coding scales, the bottleneck is no longer whether agents can write code, but whether we should build something and whether we can manage multiple parallel agents effectively.[^addyosmani-coding-agents-manager]
- 文章建议将工作拆分为本地高触达会话（架构、棘手重构、产品细节）与云端/后台异步会话（明确边界的功能、迁移、测试生成、文档更新、小型 Bug 修复）。 / The article suggests splitting work into local high-touch sessions for architecture, tricky refactors, and product nuance, and cloud/background async sessions for bounded tasks such as features, migrations, test generation, docs updates, and small bugfixes.[^addyosmani-coding-agents-manager]
- 作者列出四项可迁移的管理技能：编写明确任务简报、决定授权与保留的工作边界、建立验证循环、以及对并行会话进行轻量异步检查。 / The author lists four transferable management skills: writing clear briefs, deciding delegation boundaries, building verification loops, and running lightweight async check-ins for parallel sessions.[^addyosmani-coding-agents-manager]
- 为减少并行智能体的合并冲突，作者推荐使用 Git worktree 将实例隔离到独立分支和目录，并遵循“一个智能体对应一个 PR”的边界规则。 / To reduce merge conflicts among parallel agents, the author recommends isolating instances with Git worktrees on separate branches and directories, and following a one-agent-one-PR boundary rule.[^addyosmani-coding-agents-manager]
- 帖文称 Boris Cherny 在本地终端标签页运行五个 Claude Code 会话，浏览器中再运行五到十个，并可从手机发起会话；Simon Willison 认为并行智能体的自然瓶颈在于审查代码。 / A post says Boris Cherny runs five Claude Code sessions locally in terminal tabs, plus five to ten more in the browser, and can start sessions from his phone; Simon Willison believes the natural bottleneck of parallel agents is reviewing code, not generating it.[^addyosmani-coding-agents-manager]

## 相关 / Related

- 原文：[链接](https://addyosmani.com/blog/coding-agents-manager)。 / Original: [link](https://addyosmani.com/blog/coding-agents-manager).
- Topic: [智能体规模化工程 / Agent-scaled engineering](../../topics/agent-scaled-engineering.md)
- Topic: [AGENTS.md 要求 worktree 完成即删 / AGENTS.md rules for no leftover worktrees](../../topics/agent-worktree-cleanup.md)
- Topic: [哪些活已放心交给 AI / Tasks confidently handed over to AI](../../topics/tasks-confidently-handed-to-ai.md)
- Topic: [智能体算力与治理 / Agent compute and governance](../../topics/agent-compute-and-governance.md)

[^addyosmani-coding-agents-manager]: Your AI coding agents need a manager
