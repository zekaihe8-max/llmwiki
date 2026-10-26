---
type: Source
title: 小墨谈 Claude Code 省 Token 五项目
title_en: Xiaomo on five Claude Code token-saving projects
description: "小墨列出 context-mode、RTK、claude-mem、Serena、caveman 五个面向 Claude Code 省 Token 的项目，并建议新手先看前三者中的 context-mode、RTK 与 Serena，且勿一次全装——工具本身有开销，最终省不省钱要看完整任务消耗与费用。"
description_en: "Xiaomo lists five Claude Code token-saving projects—context-mode, RTK, claude-mem, Serena, and caveman—and recommends beginners start with context-mode, RTK, and Serena, without installing everything at once: tools themselves add overhead, and whether you save money depends on full-task token use and actual cost."
resource: https://x.com/xiaomovps/status/2114285431324057857
tags: [claude-code, tokens, context, mcp, lsp, tooling, xiaomovps]
sources:
  - id: xiaomovps-claude-code-token-five-projects
    resource: https://x.com/xiaomovps/status/2114285431324057857
    title: 小墨 on five Claude Code token-saving projects
    author: human:xiaomovps
generated:
  by: cursor-agent/composer
  at: 2026-10-25T20:28:00+08:00
date: 2026-10-25
---
<!-- Same-file bilingual (project extension): title + title_en, description + description_en, bilingual section headings, ZH then EN body pairs. Proper nouns / product names / APIs / resource URLs stay in their common form. Do not invent facts; translate existing claims faithfully. -->

# 小墨谈 Claude Code 省 Token 五项目

*Xiaomo on five Claude Code token-saving projects*

[@xiaomovps](https://x.com/xiaomovps)（小墨同学）整理想用 Claude Code 省 Token 时须知的五个项目：context-mode（MCP + Hooks 过滤冗长工具输出、减 Context 污染）、RTK（压缩 git / 测试 / 构建等终端输出并可统计压缩效果）、claude-mem（跨 Session 记录操作、决策与项目上下文以便检索、少重复解释背景）、Serena（经 LSP 做符号级检索，定位函数、类与引用，少反复读整文件）、caveman（精简 Agent 回复冗余与 Token 消耗）。起步更推荐先研究 context-mode、RTK 与 Serena；勿一次性全部装上——工具本身也有额外开销，最终省不省钱还得看完整任务的 Token 消耗和实际费用。[^xiaomovps-claude-code-token-five-projects] 原帖见 <https://x.com/xiaomovps/status/2114285431324057857>。

[@xiaomovps](https://x.com/xiaomovps) (Xiaomo) lists five projects to know when saving Tokens with Claude Code: context-mode (MCP + Hooks filter verbose tool output and cut Context pollution), RTK (compresses git / test / build terminal output and can report compression stats), claude-mem (records operations, decisions, and project context across Sessions for retrieval so you re-explain less), Serena (LSP symbol-level retrieval for functions, classes, and references, avoiding repeated full-file reads), and caveman (trims Agent reply redundancy and Token use). For starters he prefers context-mode, RTK, and Serena first; do not install everything at once—tools themselves add overhead, and whether you save money still depends on full-task Token use and actual cost.[^xiaomovps-claude-code-token-five-projects] Post: <https://x.com/xiaomovps/status/2114285431324057857>.

## 摘要 / Summary

- context-mode｜减少 Context 污染：经 MCP + Hooks 过滤冗长工具输出，只把需要的结果交给 Claude；仓库见 <https://github.com/mksglu/context-mode>。[^xiaomovps-claude-code-token-five-projects]
- context-mode｜less Context pollution: MCP + Hooks filter verbose tool output and pass Claude only what is needed; repo at <https://github.com/mksglu/context-mode>.[^xiaomovps-claude-code-token-five-projects]
- RTK｜压缩终端输出：优化 git、测试、构建等命令输出，减少无效日志占用的 Token，并可统计压缩效果；仓库见 <https://github.com/rtk-ai/rtk>。[^xiaomovps-claude-code-token-five-projects]
- RTK｜compress terminal output: tunes git, test, and build command output to cut Tokens wasted on noise logs, and can report compression effect; repo at <https://github.com/rtk-ai/rtk>.[^xiaomovps-claude-code-token-five-projects]
- claude-mem｜跨 Session 记忆：自动记录 Agent 的操作、决策和项目上下文，下次 Session 可检索历史，减少重复解释项目背景；仓库见 <https://github.com/thedotmack/claude-mem>。[^xiaomovps-claude-code-token-five-projects]
- claude-mem｜cross-Session memory: auto-records Agent operations, decisions, and project context so the next Session can retrieve history and re-explain less background; repo at <https://github.com/thedotmack/claude-mem>.[^xiaomovps-claude-code-token-five-projects]
- Serena｜精准检索代码：经 LSP 做符号级检索，直接定位函数、类和引用关系，减少反复读取整个文件的 Token 消耗；仓库见 <https://github.com/oraios/serena>。[^xiaomovps-claude-code-token-five-projects]
- Serena｜precise code retrieval: LSP symbol-level search locates functions, classes, and references directly, cutting Tokens from repeatedly reading whole files; repo at <https://github.com/oraios/serena>.[^xiaomovps-claude-code-token-five-projects]
- caveman｜精简 Agent 输出：优化 Agent 回复冗余与 Token 消耗，减少不必要的解释，面向想进一步压缩 Claude Code 使用成本的人；仓库见 <https://github.com/JuliusBrussee/caveman>。[^xiaomovps-claude-code-token-five-projects]
- caveman｜slim Agent output: trims Agent reply redundancy and Token use, cutting unnecessary explanation—for people who want to further compress Claude Code cost; repo at <https://github.com/JuliusBrussee/caveman>.[^xiaomovps-claude-code-token-five-projects]
- 刚开始折腾更推荐先研究 context-mode、RTK 和 Serena；别一次性全部装上，工具本身也有额外开销，最终省不省钱还得看完整任务的 Token 消耗和实际费用。[^xiaomovps-claude-code-token-five-projects]
- For beginners he prefers studying context-mode, RTK, and Serena first; do not install everything at once—tools themselves add overhead, and whether you save money still depends on full-task Token use and actual cost.[^xiaomovps-claude-code-token-five-projects]

## 相关 / Related

- Topic: [编程 Agent 省 Token 工具与开销](../../topics/coding-agent-token-saving-tooling.md)
- Topic: [项目指令与 Token 效率](../../topics/agents-md-token-efficiency.md)

[^xiaomovps-claude-code-token-five-projects]: 小墨 on five Claude Code token-saving projects
