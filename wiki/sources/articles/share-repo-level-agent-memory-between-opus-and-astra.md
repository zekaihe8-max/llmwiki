---
type: Source
title: "让 Opus 与 Astra 共享仓库级 Agent 记忆"
title_en: "Share repo-level Agent memory between Opus and Astra"
description: "将 Claude Code 自动记忆从 ~/.claude/projects/ 迁移到仓库内 .agents/memory，使不同 Agent 与云端会话共享同一份规则记忆。"
description_en: "Move Claude Code auto-memory from ~/.claude/projects/ to a repo-level .agents/memory directory so different Agents and cloud sessions share the same rule memory."
resource: https://x.com/Voxyz_ai/status/2118448272742486490
tags: [agents, memory, claude-code, cross-session]
sources:
  - id: voxyz-ai-shared-agent-memory
    resource: https://x.com/Voxyz_ai/status/2118448272742486490
    title: "Share repo-level Agent memory between Opus and Astra"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-06T08:04:48+08:00
---

# 让 Opus 与 Astra 共享仓库级 Agent 记忆

*Share repo-level Agent memory between Opus and Astra*

帖文称，用户用 Opus 5.5 写代码、Codex Astra 审代码，但记忆被锁在单一 Agent 管线且仅本地存储，换机或开云端会话时需重复说明规则。作者给出一条 Claude Code 指令，把仓库自动记忆从 ~/.claude/projects/ 迁移到 .agents/memory/，先列出并排除令牌、密钥、邮箱等敏感信息，并在 AGENTS.md（及 CLAUDE.md）中写入读取与保存 .agents/memory/MEMORY.md 的要求；再在 .claude/settings.local.json 添加 autoMemoryDirectory，使新规则直接写入仓库。[^voxyz-ai-shared-agent-memory]

The post says the user writes code with Opus 5.5 and reviews it with Codex Astra, but memory is locked inside one agent harness and stored locally only, requiring repeated explanations when switching machines or opening cloud sessions. The author provides a Claude Code instruction to move the repo's auto memory from ~/.claude/projects/ to .agents/memory/, first listing and excluding tokens, keys, emails and similar secrets, and to add a line to AGENTS.md (and CLAUDE.md if present) requiring reads and writes to .agents/memory/MEMORY.md; then add autoMemoryDirectory to .claude/settings.local.json so new rules go straight into the repo.[^voxyz-ai-shared-agent-memory]

## 摘要 / Summary

- 帖文称用户用 Opus 5.5 写代码，用 Codex Astra 审代码，但记忆锁在单一 Agent 管线且仅本地存储。 / The post says the user writes code with Opus 5.5 and reviews it with Codex Astra, but memory is locked inside one agent harness and stored locally only.[^voxyz-ai-shared-agent-memory]
- 切换电脑或打开云端会话时，Astra 不知道 Opus 上已纠正的规则，需要重复说明。 / When switching computers or opening a cloud session, Astra does not know rules corrected on Opus, so the user must explain them again.[^voxyz-ai-shared-agent-memory]
- 帖文给出一条发给 Claude Code 的指令：将仓库自动记忆从 ~/.claude/projects/ 迁移到 .agents/memory/，先列出并排除令牌、密钥、邮箱等敏感信息。 / The post provides a Claude Code instruction to move the repo's auto memory from ~/.claude/projects/ to .agents/memory/, listing and excluding tokens, keys, emails and similar secrets first.[^voxyz-ai-shared-agent-memory]
- 指令要求在 AGENTS.md（以及存在的 CLAUDE.md）中添加行：开始工作前先读 .agents/memory/MEMORY.md，将新内容也保存到这里，并随代码一起提交。 / The instruction adds a line to AGENTS.md (and CLAUDE.md if present): before starting work, read .agents/memory/MEMORY.md, save anything new there too, and commit it with the code.[^voxyz-ai-shared-agent-memory]
- 需在 .claude/settings.local.json 添加 "autoMemoryDirectory" 指向仓库内 .agents/memory 的绝对路径，之后新规则直接写入仓库。 / Add "autoMemoryDirectory" pointing to the repo's .agents/memory absolute path in .claude/settings.local.json; afterward new rules go straight into the repo.[^voxyz-ai-shared-agent-memory]

## 相关 / Related

- 原文：[链接](https://x.com/Voxyz_ai/status/2118448272742486490)。 / Original: [link](https://x.com/Voxyz_ai/status/2118448272742486490).
- Topic: [智能体自动模式 / Agent auto mode](../../topics/agent-auto-mode.md)
- Topic: [项目指令与 Token 效率 / Project instructions and token efficiency](../../topics/agents-md-token-efficiency.md)
- Topic: [Agent 上下文工程 / Context engineering for agents](../../topics/context-engineering-for-agents.md)
- Topic: [个人 Agent 云环境的备份、隔离与定时检查 / Personal-agent cloud env: backup, isolation, and schedule checks](../../topics/personal-agent-cloud-env-pitfalls.md)

[^voxyz-ai-shared-agent-memory]: Share repo-level Agent memory between Opus and Astra
