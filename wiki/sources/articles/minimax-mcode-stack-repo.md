---
type: Source
title: MiniMax MCode Stack 开源仓库
title_en: MiniMax MCode Stack open-source repository
description: MiniMax Code 团队开源的日常 Agent 工作流与 Skills 仓库——非 prompt 合集，而是可安装的 SKILL.md、Checklist 与 WORKFLOW，覆盖子 Agent 拆分、工具/每轮上下文、长会话与长命令、评审与热修等 harness 习惯，并配套 MCode Engineering Notes。
description_en: MiniMax Code’s open repository of daily agent workflows and Skills—not a prompt dump but installable SKILL.md files, checklists, and workflows for sub-agent splits, tool and per-turn context, long sessions and commands, review, and hotfixes, plus MCode Engineering Notes.
resource: https://github.com/MiniMax-AI/mcode-stack
tags: [minimax, mcode-stack, agent-skills, context-engineering, subagents, open-source, harness]
sources:
  - id: minimax-mcode-stack
    resource: https://github.com/MiniMax-AI/mcode-stack
    title: MiniMax MCode Stack open-source repository
    author: process:MiniMax-Code
generated:
  by: cursor-agent/composer-2.5
  at: 2026-10-29T21:30:00+08:00
date: 2026-10-28
---

# MiniMax MCode Stack 开源仓库

*MiniMax MCode Stack open-source repository*

**MCode Stack** 是 MiniMax Code 团队用来构建 [MiniMax Code](https://github.com/MiniMax-AI/minimax-code) 的工作流与 Skills，开源可安装使用。[^minimax-mcode-stack] 仓库 <https://github.com/MiniMax-AI/mcode-stack>；README 明确这不是 prompt 合集或「最佳实践」清单，而是团队**每天真正在用**的内容：如何让 AI 写码保持高 bar、任务是否交给子 Agent、长命令等多久、长会话如何不降级、每轮上下文塞什么等——每项落成 `SKILL.md` 技能或 Checklist，可直接装进 MiniMax Code；本仓库**不含** MiniMax Code 源码（源码在 `MiniMax-AI/minimax-code`）。

**MCode Stack** is the MiniMax Code team’s workflows and Skills for building [MiniMax Code](https://github.com/MiniMax-AI/minimax-code), open-sourced for install and use.[^minimax-mcode-stack] Repository: <https://github.com/MiniMax-AI/mcode-stack>; the README states this is not a prompt collection or a list of “best practices,” but what the team **actually uses every day**: keeping AI-written code at a high bar, whether work goes to a subagent, how long to wait on long commands, keeping long sessions sharp, what goes into context each turn—each piece is a `SKILL.md` skill or checklist installable into MiniMax Code; this repo holds **no** MiniMax Code source (that lives in `MiniMax-AI/minimax-code`).

## 摘要 / Summary

- **定位与演进**：仓库自述称这不是 prompt 合集或「最佳实践」清单，而是团队每天真正在用的工程习惯——何时自检、谁评审、状态放哪、什么算真实验；习惯难只靠文章遵守，故做成可安装技能与清单，并与 **MCode Engineering Notes** 专栏配对（文章讲理，仓库可执行）。团队把 harness 工程视为靠实验推进的手艺，会持续改动；欢迎取用并改，建议通过 issue 讨论。[^minimax-mcode-stack]
- **Positioning and evolution**: The README says this is not a prompt collection or a list of “best practices,” but engineering habits the team **actually uses every day**—when to self-check, who reviews, where state lives, what counts as a real experiment; habits are hard to follow from articles alone, so they became installable skills and checklists, paired with the **MCode Engineering Notes** column (essays explain, the repo runs). The team treats harness engineering as a craft that moves forward by experiment and **will keep changing**; take it, change it, and discuss via issues.[^minimax-mcode-stack]
- **Stack 与物件**：按人打包 stack（Ronny 为 MiniMax Code R&D 负责人、stack 最完整；Jiachen stack 另含 **`lifting-loops`**、**`making-content`**），含 `notes/`、`community/` 与 stack 模板；每 stack 也是 MiniMax Code 插件包。物件分 Skill（`SKILL.md`）、Checklist（同样是 skill、逐项过项目）与 Workflow（`WORKFLOW.md` 供阅读）。[^minimax-mcode-stack]
- **Stacks and artifacts**: Per-person stacks (Ronny leads MiniMax Code R&D and has the most complete stack; Jiachen’s adds **`lifting-loops`** and **`making-content`**), plus `notes/`, `community/`, and stack templates; each stack is also a MiniMax Code plugin package. Artifacts are Skills (`SKILL.md`), Checklists (also skills—walk items), and Workflows (`WORKFLOW.md` to read).[^minimax-mcode-stack]
- **Ronny 技能与 Notes**：README 技能表按规划拆分、上下文与工具、长会话与长命令、评审、实验与热修分组列出 Ronny stack 的具体 skill 名（含 **`trajectory-review`**：看 Agent 如何得到结果而不只看是否通过；**`harness-experiment`**：小 eval、一次一改、重复跑）；`tool-budget-audit` 写明可 trim、tool search 或 programmatic tool calling。Engineering Notes 01–04 与 upcoming **06-context-tax** 在 `notes/` 映射到可运行 skill（编号跳过 05）。[^minimax-mcode-stack]
- **Ronny skills and Notes**: The README skill table groups Ronny’s stack by plan/split, context/tools, long sessions/commands, review, and experiments/hotfixes with concrete names (including **`trajectory-review`**—how the agent got its result, not only pass/fail; **`harness-experiment`**—small evals, one change at a time, repeated runs); `tool-budget-audit` lists trim, tool search, or programmatic tool calling. Engineering Notes 01–04 and upcoming **06-context-tax** in `notes/` map essays to runnable skills (note numbering skips 05).[^minimax-mcode-stack]
- **安装与许可**：支持 Claude Code / Codex marketplace（如 `claude plugin install ronny --marketplace MiniMax-AI/mcode-stack`）、克隆后 `scripts/install.sh`、复制单 skill 到 `~/.agents/skills/` 或项目内 `.minimax/skills/` 等路径；README 称 **`mcode plugin add` 仅从官方目录安装**，不接受 GitHub URL 或本地路径；MiniMax Code 桌面「Add marketplace」可能逐步 rollout。通用 `SKILL.md` 格式下多数 skill 亦适用于其他 Agent。仓库 MIT；六条 `engineering-*` 改编部分 CC-BY 3.0；`validate.yml` 等工作流校验；代码/stack PR 暂限协作者，外人 stack 走 `community/` 模板并跑 `scripts/check.mjs`。[^minimax-mcode-stack]
- **Install and license**: Claude Code / Codex marketplace (e.g. `claude plugin install ronny --marketplace MiniMax-AI/mcode-stack`), clone plus `scripts/install.sh`, copy single skills to `~/.agents/skills/` or project `.minimax/skills/` paths; README says **`mcode plugin add` installs from the official catalog only**, not a GitHub URL or local path; MiniMax Code desktop “Add marketplace” may roll out gradually. Most skills work in other agents under the common `SKILL.md` format. MIT repo; six `engineering-*` adapted portions CC-BY 3.0; workflows such as `validate.yml`; code/stack PRs collaborator-only for now, outside stacks via `community/` template and `scripts/check.mjs`.[^minimax-mcode-stack]

## 相关 / Related

- Source: [邵萌谈 MiniMax 开源 MCode Stack](./shao-meng-minimax-mcode-stack.md)
- Topic: [Agent 上下文工程](../../topics/context-engineering-for-agents.md)
- Topic: [把子 Agent 折进主循环](../../topics/fold-subagents-into-main-loop.md)
- Topic: [长对话默认压缩低于模型窗口](../../topics/long-conversation-default-compression.md)
- Topic: [Agent Skills 开放标准](../../topics/agent-skills-open-standard.md)
- Topic: [Agent Skill 编写](../../topics/agent-skill-authoring.md)

[^minimax-mcode-stack]: MiniMax MCode Stack open-source repository
