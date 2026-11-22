---
type: Source
title: "MBZUAI 与 UCL 拆解 Claude Code：主循环、权限与五层上下文压缩"
title_en: "MBZUAI and UCL Dissect Claude Code: Main Loop, Permissions, and Five-Layer Context Compression"
description: "MBZUAI VILA Lab 与 UCL 团队发布技术报告，拆解 Claude Code v2.1.88 的主循环、权限模型与上下文压缩机制。"
description_en: "MBZUAI VILA Lab and UCL team release a technical report dissecting Claude Code v2.1.88's main loop, permission model, and context compression mechanisms."
resource: https://x.com/shao__meng/status/2124369057805926670
tags: [claude-code, agents, context-compression, permissions]
sources:
  - id: mbzuai-ucl-claude-code-source-dissection
    resource: https://x.com/shao__meng/status/2124369057805926670
    title: "MBZUAI and UCL Dissect Claude Code: Main Loop, Permissions, and Five-Layer Context Compression"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-22T20:13:25+08:00
---

# MBZUAI 与 UCL 拆解 Claude Code：主循环、权限与五层上下文压缩

*MBZUAI and UCL Dissect Claude Code: Main Loop, Permissions, and Five-Layer Context Compression*

帖文称，MBZUAI VILA Lab 与伦敦大学学院（UCL）团队发布技术报告「Dive into Claude Code」，拆解了 Claude Code v2.1.88 的 1884 个文件、51.2 万行 TypeScript，围绕 queryLoop() 主循环分析权限控制、五层上下文压缩与子 Agent 委派。[^mbzuai-ucl-claude-code-source-dissection]

The post says MBZUAI VILA Lab and UCL released "Dive into Claude Code," dissecting Claude Code v2.1.88's 1,884 files and 512k lines of TypeScript, analyzing permission control, five-layer context compression, and sub-agent delegation around the queryLoop() main loop.[^mbzuai-ucl-claude-code-source-dissection]

## 摘要 / Summary

- 核心 queryLoop() 反复组装上下文、调用模型、接收工具请求、检查权限、执行工具并返回结果，交互终端、无头命令行、Agent SDK 和 IDE 共用这条主路径。[^mbzuai-ucl-claude-code-source-dissection]
- The core queryLoop() repeatedly assembles context, calls the model, receives tool requests, checks permissions, executes tools, and returns results; interactive terminal, headless CLI, Agent SDK, and IDE share this main path.[^mbzuai-ucl-claude-code-source-dissection]
- 报告梳理了七种权限模式，包括规划、默认、自动接受编辑、受功能开关控制的自动审核以及子 Agent 内部模式；拒绝规则优先于允许规则。[^mbzuai-ucl-claude-code-source-dissection]
- The report outlines seven permission modes, including planning, default, auto-accept edits, feature-flag-controlled auto-audit, and internal sub-agent mode; deny rules take precedence over allow rules.[^mbzuai-ucl-claude-code-source-dissection]
- 上下文经五层逐步收缩：预算削减、片段裁剪（snip）、微压缩（microcompact）、上下文折叠（context collapse）和自动压缩（auto-compact），先用低成本方法减少内容，再在需要时语义摘要。[^mbzuai-ucl-claude-code-source-dissection]
- Context is progressively shrunk through five layers: budget cutting, snip, microcompact, context collapse, and auto-compact, using lower-cost methods first and semantic summarization only when needed.[^mbzuai-ucl-claude-code-source-dissection]
- CLAUDE.md 按托管、用户、项目和本地层级加载，向模型提供指导，但文字指导不保证遵守，阻止动作仍需权限机制约束。[^mbzuai-ucl-claude-code-source-dissection]
- CLAUDE.md is loaded at hosted, user, project, and local levels to guide the model, but textual guidance does not guarantee compliance; blocking actions still requires permission mechanisms.[^mbzuai-ucl-claude-code-source-dissection]
- Explore、Plan 和通用子 Agent 在各自上下文中运行，可借助 Git worktree 隔离工作目录，最后将结果交回父循环；会话以追加写入的 JSONL 保存，临时权限放行不会随记录恢复到新进程。[^mbzuai-ucl-claude-code-source-dissection]
- Explore, Plan, and general sub-agents run in isolated contexts, optionally using Git worktrees, then return results to the parent loop; sessions are saved as append-only JSONL, and temporary permission grants do not restore authorization state in new processes.[^mbzuai-ucl-claude-code-source-dissection]

## 相关 / Related

- 原文：[链接](https://x.com/shao__meng/status/2124369057805926670)。 / Original: [link](https://x.com/shao__meng/status/2124369057805926670).
- Topic: [Agent 上下文工程 / Context engineering for agents](../../topics/context-engineering-for-agents.md)
- Topic: [项目指令与 Token 效率 / Project instructions and token efficiency](../../topics/agents-md-token-efficiency.md)
- Topic: [智能体自动模式 / Agent auto mode](../../topics/agent-auto-mode.md)
- Topic: [把子 Agent 折进主循环 / Fold sub-agents into the main loop](../../topics/fold-subagents-into-main-loop.md)

[^mbzuai-ucl-claude-code-source-dissection]: MBZUAI and UCL Dissect Claude Code: Main Loop, Permissions, and Five-Layer Context Compression
