---
type: Source
title: "Claude Code 配置：Opus 5.5 主会话与三子 Agent 分工"
title_en: "Claude Code Configuration: Opus 5.5 Main Session with Three Subagent Split"
description: "帖文称将 Claude Code 主会话设为 Opus 5.5 高努力，三子 Agent 中等努力分别读代码、改代码跑测试、查文档，Fable 5.2 充当顾问，并先展示改动再编辑文件。"
description_en: "The post proposes setting Claude Code's main session to Opus 5.5 high effort, with three medium-effort subagents for reading code, editing/testing, and docs lookup, Fable 5.2 as advisor, and showing changes before editing files."
resource: https://x.com/Voxyz_ai/status/2123534531366154356
tags: [claude-code, configuration, subagents, advisor]
sources:
  - id: voxyz-ai-claude-code-configuration
    resource: https://x.com/Voxyz_ai/status/2123534531366154356
    title: "Claude Code Configuration: Opus 5.5 Main Session with Three Subagent Split"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-20T08:23:49+08:00
---

# Claude Code 配置：Opus 5.5 主会话与三子 Agent 分工

*Claude Code Configuration: Opus 5.5 Main Session with Three Subagent Split*

「帖文称」在用 Claude Code 构建时，应把主会话模型设为 Opus 5.5、努力度设高，并启用 Fable 5.2 作为顾问；同时部署三个中等努力的子 Agent，分别负责读代码、改代码并运行测试、查阅文档。配置步骤包括复用或新建子 Agent、在 ~/.claude/settings.json 中设置主会话默认努力度、检查会关闭顾问的环境变量，以及在 ~/.claude/CLAUDE.md 增加一条在重大计划、重复报错或长任务结束前先咨询顾问的规则；发文强调先展示改动，暂不编辑任何文件。[^voxyz-ai-claude-code-configuration]

The post claims that when building with Claude Code, users should set the main session model to Opus 5.5 with high effort and enable Fable 5.2 as an advisor, while deploying three medium-effort subagents to read code, edit and run tests, and look up documentation. Steps include reusing or creating subagents, setting the main session default effort in ~/.claude/settings.json, checking environment variables that disable the advisor, and adding a rule to ~/.claude/CLAUDE.md to consult the advisor before big plans, repeated errors, or finishing long tasks; the post says to show changes first and not edit files yet.[^voxyz-ai-claude-code-configuration]

## 摘要 / Summary

- 主会话使用 Opus 5.5，努力度设为 high，默认努力度需在 ~/.claude/settings.json 中通过 effortLevel 配置。[^voxyz-ai-claude-code-configuration]
- The main session uses Opus 5.5 with high effort; default effort is configured via effortLevel in ~/.claude/settings.json.[^voxyz-ai-claude-code-configuration]
- 三个子 Agent 以 medium 努力和 opus 模型运行，分别读代码、改代码并跑测试、查文档；已有且设置了不同模型的子 Agent 保持不变并列出。[^voxyz-ai-claude-code-configuration]
- Three subagents run at medium effort with the opus model, handling code reading, editing/testing, and docs lookup; existing subagents with different models are left alone and listed.[^voxyz-ai-claude-code-configuration]
- Fable 5.2 待命作为顾问（advisor），不参与主会话执行。[^voxyz-ai-claude-code-configuration]
- Fable 5.2 waits on the sidelines as advisor and does not take part in main session execution.[^voxyz-ai-claude-code-configuration]
- 需检查 CLAUDE_CODE_DISABLE_ADVISOR_TOOL、DISABLE_TELEMETRY 等会关闭顾问的环境变量，以及会覆盖所有子 Agent 努力度的 CLAUDE_CODE_EFFORT_LEVEL；发现后报告，不做更改。[^voxyz-ai-claude-code-configuration]
- Check environment variables that disable the advisor, such as CLAUDE_CODE_DISABLE_ADVISOR_TOOL and DISABLE_TELEMETRY, and CLAUDE_CODE_EFFORT_LEVEL which overrides subagent effort; report them without changing.[^voxyz-ai-claude-code-configuration]
- 在 ~/.claude/CLAUDE.md 增加一条规则：重大计划前、同一错误出现第二次时、长任务结束前，先询问顾问。[^voxyz-ai-claude-code-configuration]
- Add a rule to ~/.claude/CLAUDE.md: ask the advisor before big plans, when the same error recurs, and before marking long tasks done.[^voxyz-ai-claude-code-configuration]
- 发文要求先展示改动，不立即编辑任何文件。[^voxyz-ai-claude-code-configuration]
- The post asks to show changes first and not edit any files yet.[^voxyz-ai-claude-code-configuration]

## 相关 / Related

- 原文：[链接](https://x.com/Voxyz_ai/status/2123534531366154356)。 / Original: [link](https://x.com/Voxyz_ai/status/2123534531366154356).
- Topic: [Claude Code 作者与社区话筒 / Claude Code authorship and community voice](../../topics/claude-code-authorship-and-voice.md)
- Topic: [把子 Agent 折进主循环 / Fold sub-agents into the main loop](../../topics/fold-subagents-into-main-loop.md)
- Topic: [个人 Agent 当包工头调度编程 Agent / Personal agent as foreman over coding agents](../../topics/personal-agent-foreman-over-coding-agents.md)
- Topic: [面向 Agent 的联网搜索重做 / Agent-native web search rebuild](../../topics/agent-native-web-search.md)

[^voxyz-ai-claude-code-configuration]: Claude Code Configuration: Opus 5.5 Main Session with Three Subagent Split
