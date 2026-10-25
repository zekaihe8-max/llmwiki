---
type: Source
title: 邵萌谈何时把子 Agent 折进主循环
title_en: Meng Shao on when to fold sub-agents into the main loop
description: 邵萌精读 Claude 博客：企业「每团队一子 Agent + 编排」常复制组织架构，带来上下文损耗、延迟与 Frankenprompt；主循环 + Skills 渐进披露多项对比更好，子 Agent 只留给并行、上下文膨胀与工具/指令冲突。
description_en: meng shao reads Claude’s post—enterprise “one sub-agent per team plus orchestrator” often copies org charts and brings context loss, latency, and Frankenprompts; a main loop plus Skills progressive disclosure often wins internal comparisons, reserving sub-agents for parallelism, context bloat, and tool/instruction conflicts.
resource: https://x.com/shao__meng/status/2114164780986679331
tags: [agents, subagents, skills, main-loop, claude, anthropic, shao-meng]
sources:
  - id: shao-meng-fold-subagents-main-loop
    resource: https://x.com/shao__meng/status/2114164780986679331
    title: Meng Shao on when to fold sub-agents into the main loop
    author: human:shao__meng
generated:
  by: cursor-agent/composer
  at: 2026-10-25T20:05:09+08:00
date: 2026-10-25
---
<!-- Same-file bilingual (project extension): title + title_en, description + description_en, bilingual section headings, ZH then EN body pairs. Proper nouns / product names / APIs / resource URLs stay in their common form. Do not invent facts; translate existing claims faithfully. -->

# 邵萌谈何时把子 Agent 折进主循环

*Meng Shao on when to fold sub-agents into the main loop*

[@shao__meng](https://x.com/shao__meng) 精读 Claude 博客《Building agents: when to fold subagents into your main agent loop》：企业里「每团队一个子 Agent + 总编排」常复制组织架构，带来上下文损耗、延迟与 Frankenprompt；在 Claude Platform 上，一个主循环 + 按需加载的 Skills/工具，在多项内部对比里质量常更好，成本与延迟更低；子 Agent 只留给并行、上下文膨胀或工具/指令冲突等确有必要的场景。[^shao-meng-fold-subagents-main-loop] 帖文见 <https://x.com/shao__meng/status/2114164780986679331>；原文 <https://claude.com/resources/articles/building-agents-when-to-fold-subagents-into-your-main-agent-loop>。

[@shao__meng](https://x.com/shao__meng) closely reads Claude’s post “Building agents: when to fold subagents into your main agent loop”: enterprise “one sub-agent per team plus orchestrator” often copies the org chart and brings context loss, latency, and Frankenprompts; on the Claude Platform, one main loop plus on-demand Skills/tools often wins internal comparisons on quality with lower cost and latency; keep sub-agents for parallelism, context bloat, or tool/instruction conflicts when truly needed.[^shao-meng-fold-subagents-main-loop] Post: <https://x.com/shao__meng/status/2114164780986679331>; original: <https://claude.com/resources/articles/building-agents-when-to-fold-subagents-into-your-main-agent-loop>.

## 摘要 / Summary

- 典型失败：多家产品能力进同一顾客入口时，各队自建 Agent 再盖编排层（orchestrator–subagent，或把子 Agent 当 MCP 工具），立刻碰到跨 Agent 丢细节、子 Agent 膨胀无 owner、人人往系统提示加一句的 Frankenprompt、各优局部 eval 无人守端到端，以及一家客户对比多 Agent harness 与单循环时后者约 2× 更快。另常见路径——意图分类 → 固定多步 → 用户分群 → 分叉推荐 → 再盖编排——反馈是模型已不需要这么多脚手架：一条清晰系统提示 + 四五个瘦数据工具 + 硬输出护栏常盖住大半场景。[^shao-meng-fold-subagents-main-loop]
- Typical failure: when many product capabilities share one customer entry, teams each build an Agent then add an orchestration layer (orchestrator–subagent, or sub-agents as MCP tools), and immediately hit cross-agent detail loss, bloated ownerless sub-agents, Frankenprompts from everyone adding a line to the system prompt, local evals with no end-to-end owner, and one customer comparison where a single loop was about 2× faster than a multi-agent harness. Another common path—intent classify → fixed multi-step → user buckets → forked recommendations → more orchestration—often gets the feedback that the model no longer needs that scaffolding: one clear system prompt, four or five thin data tools, and hard output guardrails often cover most cases.[^shao-meng-fold-subagents-main-loop]
- 何时仍要子 Agent：单循环因上下文膨胀出现可测性能下降；多任务需并行、用完即丢的新鲜上下文窗；单 Agent 选不好工具，或系统提示里指令互相打架。Frontier 研究、核验、模块化权限等仍适用；Anthropic 自家多 Agent 研究系统也在用。但「每个问题类型/每个团队一个子 Agent」往往是 Conway 定律，不是能力上限。[^shao-meng-fold-subagents-main-loop]
- When sub-agents still help: measurable performance drop from context bloat in a single loop; parallel tasks that need fresh throwaway context windows; a single Agent choosing tools poorly, or conflicting instructions in the system prompt. Frontier research, verification, and modular permissions still fit; Anthropic’s own multi-agent research system uses them. But “one sub-agent per problem type / per team” is often Conway’s law, not a capability ceiling.[^shao-meng-fold-subagents-main-loop]
- 更优默认：用 Skills 渐进披露上下文、用 tool search 渐进披露工具——先见短描述，需要再全量加载。理由包括：共享上下文更利于长程串答；不必把一切塞进超长系统提示（Claude Code 对更强模型把系统提示砍了 80%+，含 Skills/工具渐进披露相关裁剪）；自 Opus 4.5 起单循环能扛的远超多数团队预期，刚性多 Agent 结构常挡住新模型多干活。目标形态是一个模型、一个上下文窗、开放式工具循环；写计划的模型也是执行的模型；排序与领域流程进 Skills，校验/审批/记忆查找等硬限制进工具。[^shao-meng-fold-subagents-main-loop]
- Better default: progressive disclosure of context via Skills and of tools via tool search—short descriptions first, full load on need. Reasons include: shared context stitches long-horizon answers better; you need not stuff everything into a huge system prompt (Claude Code cut system prompts 80%+ for stronger models, including Skills/tool progressive-disclosure cuts); since Opus 4.5 a single loop carries far more than most teams expect, and rigid multi-agent structure often blocks newer models from doing more. Target shape: one model, one context window, an open tool loop; the model that writes the plan also executes it; domain flow into Skills, hard limits (validation, approval, memory lookup) into tools.[^shao-meng-fold-subagents-main-loop]
- 迁移与共养：先建端到端任务完成度 eval（哪怕先 10 条黄金例）；优先合并链式产出、同数据、常连调的领域 Agent；过渡期可把子 Agent 当工具回结构化结论；再一次折一个成 Skills + MCP 工具并对比有无子 Agent（看翻盘任务，不只总分）。多团队所有权从「各养一个 Agent」转为「养 Skills/工具」，中央小团队守系统提示与端到端质量；MCP 工具按用户意图组（勿一 API 一工具；约 30–50 工具定义后选型易劣化），Skills 装「团队怎么干活」，知识库放偶尔才要的政策/规格。Migration kit 原则：度量 → 一次改一件 → 留得住的才留。[^shao-meng-fold-subagents-main-loop]
- Migration and shared ownership: start with end-to-end task-completion evals (even ten golden examples); merge domain Agents that chain outputs, share data, and are often co-debugged first; as a bridge, treat sub-agents as tools returning structured conclusions; then fold one at a time into Skills + MCP tools and A/B with/without the sub-agent (watch flipped tasks, not only totals). Multi-team ownership shifts from “each team owns an Agent” to “own Skills/tools,” with a small central team guarding the system prompt and end-to-end quality; group MCP tools by user intent (not one tool per API; selection degrades after roughly 30–50 tool definitions), put “how the team works” in Skills, and park rare policy/specs in searchable knowledge. Migration kit rule: measure → change one thing → keep only what holds.[^shao-meng-fold-subagents-main-loop]

## 相关 / Related

- Topic: [把子 Agent 折进主循环](../../topics/fold-subagents-into-main-loop.md)
- Topic: [工作流优先于智能体](../../topics/workflows-before-agents.md)
- Topic: [项目指令与 Token 效率](../../topics/agents-md-token-efficiency.md)
- Topic: [Agent Skill 编写](../../topics/agent-skill-authoring.md)

[^shao-meng-fold-subagents-main-loop]: Meng Shao on when to fold sub-agents into the main loop
