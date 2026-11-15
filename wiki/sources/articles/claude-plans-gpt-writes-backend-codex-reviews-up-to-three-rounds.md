---
type: Source
title: "Claude 规划，GPT 写后端，Codex 审三轮：个人 Agent 派活工作流"
title_en: "Claude plans, GPT writes backend, Codex reviews up to three rounds: personal agent dispatch workflow"
description: "帖文称通过 Claude 做规划与前端、GPT 写后端与数据处理、Codex 最多三轮审查，构建 Agent 自动化开发的最优解。"
description_en: "The post claims that using Claude for planning and frontend, GPT for backend and data processing, and Codex for up to three review rounds forms an optimal solution for agent-based automated development."
resource: https://x.com/Khazix0918/status/2121602766976237610
tags: [agents, claude, codex, gpt, coding-agent, multi-model]
sources:
  - id: khazix0918-claude-gpt-codex-agent-workflow-21216
    resource: https://x.com/Khazix0918/status/2121602766976237610
    title: "Claude plans, GPT writes backend, Codex reviews up to three rounds: personal agent dispatch workflow"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-15T20:31:02+08:00
---

# Claude 规划，GPT 写后端，Codex 审三轮：个人 Agent 派活工作流

*Claude plans, GPT writes backend, Codex reviews up to three rounds: personal agent dispatch workflow*

「帖文称」跟 Claude 对话，由 Claude 做规划和前端，把成块的后端、算法、数据处理和性能活派给 GPT 写，再由 Claude 收尾，Codex 启动最多三轮审查，可能是目前 Agent 自动化开发的最优解。作者在 CLAUDE.md 中保留了一段派活说明，并介绍了自己编写的 codex-worker 脚本：只能写工作树和临时目录，不能提交、不能联网，交回后由人读 diff、跑测试并完成合并与推送。[^khazix0918-claude-gpt-codex-agent-workflow-21216]

The post claims that conversing with Claude for planning and frontend, delegating chunky backend, algorithm, data processing, and performance tasks to GPT, then having Claude wrap up while Codex runs up to three review rounds, may be the current optimal solution for agent-based automated development. The author keeps a dispatch passage in CLAUDE.md and shares a self-written codex-worker script that can only write to the worktree and temp directories, cannot commit or access the network; after Codex returns code, the human reads the diff, runs tests, and handles merging and pushing.[^khazix0918-claude-gpt-codex-agent-workflow-21216]

## 摘要 / Summary

- Claude 负责规划、前端、视觉、文案、拆解和验收，并派发后端、算法、数据处理和性能任务。[^khazix0918-claude-gpt-codex-agent-workflow-21216]
- Claude handles planning, frontend, visuals, copy, decomposition, and acceptance, and dispatches backend, algorithm, data processing, and performance tasks.[^khazix0918-claude-gpt-codex-agent-workflow-21216]
- 使用 `codex-worker <工作树> "任务"` 派活，支持 `--resume <会话ID>` 追加，会话 ID 在输出最后。[^khazix0918-claude-gpt-codex-agent-workflow-21216]
- Use `codex-worker <worktree> "task"` to dispatch, with `--resume <sessionID>` for appending; the session ID appears at the end of output.[^khazix0918-claude-gpt-codex-agent-workflow-21216]
- Codex 只能写工作树和临时目录，提交不了、联不了网，装依赖、联网测试、提交推送由人完成。[^khazix0918-claude-gpt-codex-agent-workflow-21216]
- Codex can only write to the worktree and temp directories; it cannot commit or access the network, so dependency installation, network testing, commits, and pushes are done by the human.[^khazix0918-claude-gpt-codex-agent-workflow-21216]
- Codex 交回后需人读 diff、自己跑测试，PR 里有 Codex 代码即为混合来源，交付不带 `--agent`。[^khazix0918-claude-gpt-codex-agent-workflow-21216]
- After Codex returns code, the human reads the diff and runs tests; PRs containing Codex code are mixed-source and delivered without `--agent`.[^khazix0918-claude-gpt-codex-agent-workflow-21216]
- 作者说明自己定义的 codex-worker 不是 Codex 官方插件，官方插件有点麻烦且问题较多。[^khazix0918-claude-gpt-codex-agent-workflow-21216]
- The author states that codex-worker is a self-defined script, not the official Codex plugin, which is somewhat troublesome and has multiple issues.[^khazix0918-claude-gpt-codex-agent-workflow-21216]

## 相关 / Related

- 原文：[链接](https://x.com/Khazix0918/status/2121602766976237610)。 / Original: [link](https://x.com/Khazix0918/status/2121602766976237610).
- Topic: [个人 Agent 当包工头调度编程 Agent / Personal agent as foreman over coding agents](../../topics/personal-agent-foreman-over-coding-agents.md)
- Topic: [智能体自动模式 / Agent auto mode](../../topics/agent-auto-mode.md)
- Topic: [智能体规模化工程 / Agent-scaled engineering](../../topics/agent-scaled-engineering.md)
- Topic: [项目指令与 Token 效率 / Project instructions and token efficiency](../../topics/agents-md-token-efficiency.md)

[^khazix0918-claude-gpt-codex-agent-workflow-21216]: Claude plans, GPT writes backend, Codex reviews up to three rounds: personal agent dispatch workflow
