---
type: Source
title: 邵萌谈 MiniMax 开源 MCode Stack
title_en: Meng Shao on MiniMax open-sourcing the MCode Stack
description: 邵萌介绍 MiniMax Code 团队把日常 Agent 工作流与 Skills 开源为 MCode Stack——何时拆子 Agent、长命令等待、长会话不降级、每轮注入哪些 token 等写成可安装的 SKILL.md / 清单，并可作为插件进 MiniMax Code 与任意支持 Skills 的 Agent。
description_en: Meng Shao introduces the MiniMax Code team open-sourcing daily agent workflows and Skills as the MCode Stack—when to split sub-agents, long-command waits, keeping long sessions from degrading, and what tokens each turn injects—packaged as installable SKILL.md files and checklists for MiniMax Code and any Skills-capable agent.
resource: https://x.com/shao__meng/status/2115428696672866729
tags: [minimax, mcode-stack, agent-skills, context-engineering, subagents, shao-meng, open-source]
sources:
  - id: shao-meng-minimax-mcode-stack
    resource: https://x.com/shao__meng/status/2115428696672866729
    title: Meng Shao on MiniMax open-sourcing the MCode Stack
    author: human:shao__meng
generated:
  by: cursor-agent/composer-2.5
  at: 2026-10-29T20:20:00+08:00
date: 2026-10-28
---
<!-- Same-file bilingual (project extension): title + title_en, description + description_en, bilingual section headings, ZH then EN body pairs. Proper nouns / product names / APIs / resource URLs stay in their common form. Do not invent facts; translate existing claims faithfully. -->

# 邵萌谈 MiniMax 开源 MCode Stack

*Meng Shao on MiniMax open-sourcing the MCode Stack*

[@shao__meng](https://x.com/shao__meng) 介绍 MiniMax Code（[@MiniMax_Code](https://x.com/MiniMax_Code)）团队把**每天真正在用的** Agent 工作流与 Skills 开源：**MCode Stack** 写清何时拆子 Agent、长命令等多久、长会话怎么保证不降级、每轮上下文塞什么 token 等，并落成可安装的 `SKILL.md` / 清单，可作为插件进入 MiniMax Code 与任意支持 Skills 的 Agent。[^shao-meng-minimax-mcode-stack] 开源地址见帖内 <https://t.co/tU3L7LxLF1>（`github.com/MiniMax-AI/mcode-stack`）；原帖 <https://x.com/shao__meng/status/2115428696672866729>。帖中另引用 [@Ronny_MiniMax](https://x.com/Ronny_MiniMax) 宣布帖 <https://x.com/Ronny_MiniMax/status/2115413492941652299>。

[@shao__meng](https://x.com/shao__meng) introduces the MiniMax Code team ([@MiniMax_Code](https://x.com/MiniMax_Code)) open-sourcing the **agent workflows and Skills they actually use every day**: the **MCode Stack** documents when to split sub-agents, how long to wait on long commands, how to keep long sessions from degrading, what tokens each turn injects into context, and ships that as installable `SKILL.md` files and checklists—usable as plugins in MiniMax Code and any agent that supports Skills.[^shao-meng-minimax-mcode-stack] Repo link in post: <https://t.co/tU3L7LxLF1> (`github.com/MiniMax-AI/mcode-stack`); post: <https://x.com/shao__meng/status/2115428696672866729>. The thread also cites [@Ronny_MiniMax](https://x.com/Ronny_MiniMax)’s announcement: <https://x.com/Ronny_MiniMax/status/2115413492941652299>.

## 摘要 / Summary

- **仓库结构**：按人打包成 stack（每人一套插件）——`stacks/ronny/` 最完整（15 个 skill）、`stacks/jiachen/` 偏「跳出 Agent 循环、把笔记做成帖/视频」；`notes/` 为配套专栏 **MCode Engineering Notes**（文章讲道理，技能可执行）；`community/`、`templates/stack-template/` 欢迎外人贡献日常用法。[^shao-meng-minimax-mcode-stack]
- **Repo layout**: Per-person stacks (one plugin set each)—`stacks/ronny/` is the most complete (15 skills), `stacks/jiachen/` focuses on “step out of the agent loop, turn notes into posts/video”; `notes/` holds **MCode Engineering Notes** (essays explain, skills execute); `community/` and `templates/stack-template/` invite outside daily-use contributions.[^shao-meng-minimax-mcode-stack]
- **三类物件**：**Skill**（`/技能名` 或按描述自动加载）、**Checklist**（逐项过项目）、**Workflow**（`WORKFLOW.md` 描述日常怎么用）；Ronny 的 `WORKFLOW.md` 仍标 Coming soon，帖文称先以 skills 为准。[^shao-meng-minimax-mcode-stack]
- **Three artifact types**: **Skill** (invoke `/skill-name` or auto-load by description), **Checklist** (step through items), **Workflow** (`WORKFLOW.md` for daily use); Ronny’s `WORKFLOW.md` is still marked Coming soon—the post says to treat skills as authoritative for now.[^shao-meng-minimax-mcode-stack]
- **Ronny 的 15 个 Skills（分组）**：规划与拆分（`subagent-split-check`、`engineering-small-prs`、`engineering-change-descriptions`）；上下文与工具（`tool-budget-audit`、`context-tax-audit`）；长会话与长命令（`long-session-check`、`handoff-doc`、`long-command-check`）；评审（`independent-review`、`engineering-code-review` 等）；实验与热修复（`harness-experiment`、`trajectory-review`、`engineering-emergency-changes`）。[^shao-meng-minimax-mcode-stack]
- **Ronny’s 15 skills (grouped)**: Planning/splitting (`subagent-split-check`, `engineering-small-prs`, `engineering-change-descriptions`); context and tools (`tool-budget-audit`, `context-tax-audit`); long sessions and long commands (`long-session-check`, `handoff-doc`, `long-command-check`); review (`independent-review`, `engineering-code-review`, etc.); experiments and hotfixes (`harness-experiment`, `trajectory-review`, `engineering-emergency-changes`).[^shao-meng-minimax-mcode-stack]
- **许可**：六条 `engineering-*` 改编自 Google Engineering Practices，改编部分仍属 CC-BY 3.0（见 `stacks/ronny/NOTICE.md`）；其余 MIT。[^shao-meng-minimax-mcode-stack]
- **Licensing**: Six `engineering-*` skills adapt Google Engineering Practices; adapted portions remain CC-BY 3.0 (see `stacks/ronny/NOTICE.md`); the rest MIT.[^shao-meng-minimax-mcode-stack]
- **配套观点（以 Notes 01 为例）**：子 Agent 首先是**隔离上下文**的工具，不是按「工种/问题类型」开分身；默认主循环 + 按需加载技能，只有量到上下文才是瓶颈再拆；代码评审给独立干净上下文。同系列还谈工具过多吃上下文、compaction vs memory、bash 前台阻塞 vs 后台等（`06-context-tax` 标 upcoming）。[^shao-meng-minimax-mcode-stack]
- **Companion views (Notes 01 example)**: Sub-agents are first of all **context-isolation** tools, not clones by job type or problem class; default is main loop plus on-demand skills, splitting only once context is measured as the bottleneck; code review gets an independent clean context. The series also covers too many tools eating context, compaction vs memory, bash foreground blocking vs background, etc. (`06-context-tax` marked upcoming).[^shao-meng-minimax-mcode-stack]

## 相关 / Related

- Topic: [Agent 上下文工程](../../topics/context-engineering-for-agents.md)
- Topic: [把子 Agent 折进主循环](../../topics/fold-subagents-into-main-loop.md)
- Topic: [长对话默认压缩低于模型窗口](../../topics/long-conversation-default-compression.md)
- Topic: [Agent Skills 开放标准](../../topics/agent-skills-open-standard.md)
- Topic: [Agent Skill 编写](../../topics/agent-skill-authoring.md)

[^shao-meng-minimax-mcode-stack]: Meng Shao on MiniMax open-sourcing the MCode Stack
