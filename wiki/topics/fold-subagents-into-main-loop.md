---
type: Topic
title: 把子 Agent 折进主循环
title_en: Fold sub-agents into the main loop
description: 构建 Agent 时默认用一个主循环 + Skills/工具渐进披露，而不是按组织架构或角色人设堆子 Agent；给全景数据与文档清楚的工具，子 Agent 只留给可测的上下文膨胀、并行新鲜窗或工具/指令冲突。
description_en: Prefer one main agent loop plus Skills/tool progressive disclosure over org-chart or persona-stacked sub-agents; give a panoramic data view and well-documented tools, reserving sub-agents for measurable context bloat, parallel fresh windows, or tool/instruction conflicts.
tags: [agents, subagents, skills, main-loop, progressive-disclosure, architecture]
sources:
  - id: shao-meng-fold-subagents-main-loop
    resource: https://x.com/shao__meng/status/2114164780986679331
    title: Meng Shao on when to fold sub-agents into the main loop
  - id: shao-meng-felix-not-2024-claude-usage
    resource: https://x.com/shao__meng/status/2113970197161988276
    title: Meng Shao relays Felix—stop using Claude the 2024 way
generated:
  by: cursor-agent/composer
  at: 2026-10-25T20:10:00+08:00
---
<!-- Same-file bilingual (project extension): title + title_en, description + description_en, bilingual section headings, ZH then EN body pairs. Proper nouns / product names / APIs / resource URLs stay in their common form. Do not invent facts; translate existing claims faithfully. -->

# 把子 Agent 折进主循环

*Fold sub-agents into the main loop*

企业把「每团队一个子 Agent + 总编排」当成默认，常复制 Conway 定律，换来上下文损耗、延迟与 Frankenprompt；更稳的默认是一个模型、一个上下文窗、开放式工具循环，用 Skills 与 tool search 渐进披露能力，只在可测需要时再拆子 Agent。[^shao-meng-fold-subagents-main-loop] 使用侧同样忌「堆角色 Agent」：通才模型配全景数据与文档清楚的工具，往往优于按人设切分。[^shao-meng-felix-not-2024-claude-usage]

Treating “one sub-agent per team plus an orchestrator” as the default often copies Conway’s law and buys context loss, latency, and Frankenprompts; a steadier default is one model, one context window, and an open tool loop, with Skills and tool search for progressive disclosure, splitting sub-agents only when need is measurable.[^shao-meng-fold-subagents-main-loop] On the usage side, stacking role-play Agents is the same trap: a generalist model with a panoramic data view and well-documented tools usually beats persona slices.[^shao-meng-felix-not-2024-claude-usage]

## 综合分析 / Synthesis

[邵萌谈何时把子 Agent 折进主循环](../sources/articles/shao-meng-fold-subagents-main-loop.md) 精读 Claude Platform 博文：多项内部对比里，主循环 + 按需 Skills/工具常比多专家编排质量更好、成本与延迟更低；一家客户对比多 Agent harness 与单循环时后者约 2× 更快。失败模式含跨 Agent 丢细节、子 Agent 膨胀无 owner、局部 eval 无人守端到端，以及意图分类与固定多步脚手架在模型已够强时变成多余。[^shao-meng-fold-subagents-main-loop] 原帖 <https://x.com/shao__meng/status/2114164780986679331>；原文 <https://claude.com/resources/articles/building-agents-when-to-fold-subagents-into-your-main-agent-loop>。

[Meng Shao on when to fold sub-agents into the main loop](../sources/articles/shao-meng-fold-subagents-main-loop.md) closely reads the Claude Platform post: in several internal comparisons, a main loop plus on-demand Skills/tools often beat multi-expert orchestration on quality with lower cost and latency; one customer saw a single loop about 2× faster than a multi-agent harness. Failure modes include cross-agent detail loss, bloated ownerless sub-agents, local evals with no end-to-end owner, and intent-classify / fixed multi-step scaffolding that becomes surplus once models are strong enough.[^shao-meng-fold-subagents-main-loop] Post: <https://x.com/shao__meng/status/2114164780986679331>; original: <https://claude.com/resources/articles/building-agents-when-to-fold-subagents-into-your-main-agent-loop>.

仍适用子 Agent 的边界写得很窄：可测的上下文膨胀、需并行的新鲜上下文窗、工具选型失败或系统提示指令冲突；Frontier 研究、核验、模块化权限与 Anthropic 自家多 Agent 研究系统仍可用。迁移路径强调端到端 eval、先合链式领域 Agent、过渡期子 Agent 当工具、再一次折成 Skills + MCP；多团队从「各养 Agent」改为「养 Skills/工具」，中央守系统提示与端到端质量。[^shao-meng-fold-subagents-main-loop]

The remaining sub-agent cases are narrow: measurable context bloat, parallel fresh context windows, bad tool choice or conflicting system-prompt instructions; frontier research, verification, modular permissions, and Anthropic’s own multi-agent research system still fit. The migration path stresses end-to-end evals, merging chained domain Agents first, treating sub-agents as tools in a bridge phase, then folding one at a time into Skills + MCP; multi-team ownership shifts from “each owns an Agent” to “own Skills/tools,” with a center guarding the system prompt and end-to-end quality.[^shao-meng-fold-subagents-main-loop]

[邵萌转述 Felix：别再用 2024 方式用 Claude](../sources/articles/shao-meng-felix-not-2024-claude-usage.md) 从 Claude 工程负责人侧补强同一忌讳：行业对「Agent 角色扮演」过转；硬套「你是数据科学家」常限制通才用法；与其给每个 agent 切一小片数据，不如给全景业务视图 + 文档清楚的工具，需要时再调业务工具，不必整库灌进上下文。人也应从「传话筒 / 传送带」升级为让模型自己摸全量崩溃数据、自己挑修什么。[^shao-meng-felix-not-2024-claude-usage] 原帖 <https://x.com/shao__meng/status/2113970197161988276>。

[Meng Shao relays Felix—stop using Claude the 2024 way](../sources/articles/shao-meng-felix-not-2024-claude-usage.md) reinforces the same caution from Claude’s engineering lead: the industry over-rotated on Agent role-play; forcing “you are a data scientist” often limits generalist use; prefer a panoramic business view plus well-documented tools over a small data shard per agent, calling business tools on need instead of dumping whole databases into context. Humans should also stop being messengers / conveyor belts and let the model see all crash data and choose what to fix.[^shao-meng-felix-not-2024-claude-usage] Post: <https://x.com/shao__meng/status/2113970197161988276>.

这与 [工作流优先于智能体](./workflows-before-agents.md) 同属「从最简可工作形态起步」，但切面不同：那边问要不要开放式 Agent，这边问 Agent 内部要不要按组织架构拆子 Agent。Skills 侧与 [Agent Skill 编写](./agent-skill-authoring.md)、[项目指令与 Token 效率](./agents-md-token-efficiency.md) 相接——渐进披露与按需加载不只是省 token，而是替代编排层的默认架构。产出约束侧见 [对抗评审与外部证据](./adversarial-review-external-evidence.md)。

This sits with [Workflows before agents](./workflows-before-agents.md) in the “start from the simplest working shape” family, on a different cut: that page asks whether to add an open-ended agent at all; this page asks whether, inside an agent, to split by org chart into sub-agents. On the Skills side it meets [Agent skill authoring](./agent-skill-authoring.md) and [Project instructions and token efficiency](./agents-md-token-efficiency.md)—progressive disclosure and on-demand load are not only token hygiene, but the default architecture that replaces an orchestration layer. For output constraints see [Adversarial review and external evidence](./adversarial-review-external-evidence.md).

## 矛盾与变化 / Contradictions

[智能体规模化工程](./agent-scaled-engineering.md) 据 Cherny 斯坦福分享强调可跑长时、衍生大量智能体的循环；本页所据 Claude 博文则主张刚性「每问题类型/每团队一子 Agent」常挡住更强模型，默认应折回主循环。两者不互相取消：前者谈速度与组织 sparseness 下的多智能体产能，后者谈产品入口上的编排默认与迁移；适用边界不同，但「多 Agent 是否默认正确」上存在张力。[^shao-meng-fold-subagents-main-loop]

[Agent-scaled engineering](./agent-scaled-engineering.md), from Cherny’s Stanford talk, stresses long-running loops that spawn many agents; this page’s Claude post argues rigid “one sub-agent per problem type / per team” often blocks stronger models and should default to folding back into the main loop. They do not cancel each other: the former is about multi-agent throughput under velocity and organizational sparseness; the latter is about orchestration defaults and migration at a product entry point. Scope differs, but they tension on whether multi-agent is the right default.[^shao-meng-fold-subagents-main-loop]

Felix 访谈中的对抗评审多线程，是**产出核验**上的多会话分工，不是按组织架构堆长期角色子 Agent；与本页「默认主循环」不冲突，但若把「证明你错了」线程固化成常驻专家 Agent 编排，又会滑回本页所反对的默认。详见 [对抗评审与外部证据](./adversarial-review-external-evidence.md)。[^shao-meng-felix-not-2024-claude-usage]

Felix’s interview multi-thread adversarial review is a **verification** split across sessions, not long-lived role sub-agents by org chart; it does not conflict with this page’s main-loop default, but hardening “prove you wrong” threads into standing expert-Agent orchestration would slide back into the default this page rejects. See [Adversarial review and external evidence](./adversarial-review-external-evidence.md).[^shao-meng-felix-not-2024-claude-usage]

## 相关 / Related

- Source: [邵萌谈何时把子 Agent 折进主循环](../sources/articles/shao-meng-fold-subagents-main-loop.md)
- Source: [邵萌转述 Felix：别再用 2024 方式用 Claude](../sources/articles/shao-meng-felix-not-2024-claude-usage.md)
- Topic: [工作流优先于智能体](./workflows-before-agents.md)
- Topic: [智能体规模化工程](./agent-scaled-engineering.md)
- Topic: [Agent Skill 编写](./agent-skill-authoring.md)
- Topic: [项目指令与 Token 效率](./agents-md-token-efficiency.md)
- Topic: [对抗评审与外部证据](./adversarial-review-external-evidence.md)

[^shao-meng-fold-subagents-main-loop]: Meng Shao on when to fold sub-agents into the main loop
[^shao-meng-felix-not-2024-claude-usage]: Meng Shao relays Felix—stop using Claude the 2024 way
