---
type: Source
title: "Claude Code 子代理默认跑主模型，建议强制切 Haiku 省 Opus 额度"
title_en: "Claude Code subagents default to main model; force Haiku to save Opus quota"
description: "帖文称 Claude Code 的 Explore 与 Plan 子代理默认使用主模型，需设置 FORCE=1 才能全部切换到 Haiku，避免烧掉 Opus 额度。"
description_en: "The post says Claude Code's Explore and Plan subagents run on the main model by default, and FORCE=1 is needed to switch all subagents to Haiku to avoid burning Opus quota."
resource: https://x.com/Voxyz_ai/status/2117718457621926236
tags: [claude-code, coding-agent, token-quota, model-routing]
sources:
  - id: claude-code-subagent-haiku-quota
    resource: https://x.com/Voxyz_ai/status/2117718457621926236
    title: "Claude Code subagents default to main model; force Haiku to save Opus quota"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-04T08:09:03+08:00
---

# Claude Code 子代理默认跑主模型，建议强制切 Haiku 省 Opus 额度

*Claude Code subagents default to main model; force Haiku to save Opus quota*

Voxyz_ai 在 X 上发帖称，Claude Code 内置的 Explore 和 Plan 子代理默认在主模型上运行，若主模型是 Opus，文件挖掘和代码搜索会消耗 Opus 额度。该帖建议让 Sonnet 负责编写、Haiku 负责搜索、Opus 负责审查，并通过 CLAUDE_CODE_SUBAGENT_MODEL=haiku CLAUDE_CODE_SUBAGENT_MODEL_FORCE=1 claude --model sonnet --advisor opus 启动；仅设置 CLAUDE_CODE_SUBAGENT_MODEL=haiku 不会影响 Explore 和 Plan，必须加 FORCE=1，且 --subagents haiku 标志不存在。子代理运行中输入 /tasks 可查看各行所用模型。[^claude-code-subagent-haiku-quota]

Voxyz_ai posted on X that Claude Code's built-in Explore and Plan subagents run on the main model by default, so if the main model is Opus, file digging and code searching burn Opus quota. The post recommends Sonnet for writing, Haiku for search, and Opus for review, launched with CLAUDE_CODE_SUBAGENT_MODEL=haiku CLAUDE_CODE_SUBAGENT_MODEL_FORCE=1 claude --model sonnet --advisor opus; setting only CLAUDE_CODE_SUBAGENT_MODEL=haiku does not touch Explore and Plan, FORCE=1 is required, and the --subagents haiku flag does not exist. Typing /tasks while subagents run shows the model for each row.[^claude-code-subagent-haiku-quota]

## 摘要 / Summary

- 帖文称 Claude Code 的 Explore 和 Plan 子代理默认运行在主模型上。 / The post says Claude Code's Explore and Plan subagents run on the main model by default.[^claude-code-subagent-haiku-quota]
- 若主模型为 Opus，子代理的文件挖掘和代码搜索会消耗 Opus 额度。 / If the main model is Opus, subagent file digging and code searching consume Opus quota.[^claude-code-subagent-haiku-quota]
- 建议组合为 Sonnet 编写、Haiku 搜索、Opus 审查。 / The suggested combination is Sonnet for writing, Haiku for search, and Opus for review.[^claude-code-subagent-haiku-quota]
- 需同时设置 CLAUDE_CODE_SUBAGENT_MODEL=haiku 和 CLAUDE_CODE_SUBAGENT_MODEL_FORCE=1 才能切换全部子代理。 / Both CLAUDE_CODE_SUBAGENT_MODEL=haiku and CLAUDE_CODE_SUBAGENT_MODEL_FORCE=1 must be set to switch every subagent.[^claude-code-subagent-haiku-quota]
- --subagents haiku 标志不存在，使用会导致 Claude Code 报“unknown option”并退出。 / The --subagents haiku flag does not exist and causes Claude Code to exit with “unknown option”.[^claude-code-subagent-haiku-quota]
- 子代理运行时输入 /tasks，每行显示该任务所用的模型。 / While subagents run, typing /tasks shows the model used for each row.[^claude-code-subagent-haiku-quota]

## 相关 / Related

- 原文：[链接](https://x.com/Voxyz_ai/status/2117718457621926236)。 / Original: [link](https://x.com/Voxyz_ai/status/2117718457621926236).
- Topic: [Claude Code 作者与社区话筒 / Claude Code authorship and community voice](../../topics/claude-code-authorship-and-voice.md)
- Topic: [编程 Agent 省 Token 工具与开销 / Coding-agent token-saving tooling and overhead](../../topics/coding-agent-token-saving-tooling.md)
- Topic: [编程 Agent 体验与额度 / Coding agent UX vs quota](../../topics/coding-agent-ux-vs-quota.md)
- Topic: [面向 Agent 的模型渠道取舍 / Model provider channel tradeoffs for agents](../../topics/agent-model-channel-tradeoffs.md)

[^claude-code-subagent-haiku-quota]: Claude Code subagents default to main model; force Haiku to save Opus quota
