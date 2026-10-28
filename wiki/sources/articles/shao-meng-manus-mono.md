---
type: Source
title: 邵萌谈 Manus Mono：给 AI 一张全栈地图
title_en: Meng Shao on Manus Mono — a full-stack map for AI
description: 邵萌系列首篇解读 Manus 联创张涛：Manus-mono 不是揉大仓，而是统一入口 + 给 AI 的说明书，让一人带着同一智能体上下文走完前后端与移动端；本地验证从等环境数分钟到几秒，审批仍在人。
description_en: Meng Shao’s series opener on Manus co-founder Zhang Tao—Manus-mono is not a mega-repo merge but a unified entry plus AI-facing docs so one person with one shared agent context can ship frontend, backend, and mobile; local verify drops from minutes waiting on env to seconds, with approvals still human.
resource: https://x.com/shao__meng/status/2115048792483660088
tags: [manus, mono, fullstack, agents, ai-native, shared-context, harness]
sources:
  - id: shao-meng-manus-mono
    resource: https://x.com/shao__meng/status/2115048792483660088
    title: Meng Shao on Manus Mono — a full-stack map for AI
    author: human:meng shao
generated:
  by: cursor-agent/composer
  at: 2026-10-28T20:45:00+08:00
date: 2026-10-26
---

# 邵萌谈 Manus Mono：给 AI 一张全栈地图

*Meng Shao on Manus Mono — a full-stack map for AI*

[@shao__meng](https://x.com/shao__meng)（meng shao）系列解读 Manus 联创张涛 [@hidecloud](https://x.com/hidecloud)「用 Manus 改造 Manus，AI Native 组织改造的实践和思考」之研发篇：传统产研最大损耗常在前后端联调里人对不齐，而非写代码本身；Manus-mono 没有把多仓揉成一个大仓，而是做统一入口 + 给 AI 看的说明书（各仓职责、配合方式、研发规范），让一个人带着同一个智能体上下文，把前端、后端、移动端一路做完，审批仍留在人手上。[^shao-meng-manus-mono] 原帖 <https://x.com/shao__meng/status/2115048792483660088>。

[@shao__meng](https://x.com/shao__meng) (meng shao) opens a series on Manus co-founder Zhang Tao ([@hidecloud](https://x.com/hidecloud))’s “remake Manus with Manus” AI-native org piece—R&D chapter: traditional product/eng waste often sits in frontend–backend handoff misalignment, not in writing code; Manus-mono does not mash multi-repos into one mega-repo, but a unified entry plus AI-facing docs (repo duties, how they fit, engineering norms) so one person with one shared agent context can finish frontend, backend, and mobile, with approvals still human.[^shao-meng-manus-mono] Post: <https://x.com/shao__meng/status/2115048792483660088>.

## 摘要 / Summary

- 以前卡在哪：需求评审 → 前后端分头写 → 联调 → 测试上线；损耗最大的是联调——两边各自理解需求、再约接口，理解一偏就反复改。Manus 想模糊分工（一人吃透需求再推各端），但代码散在多仓，AI 仍看不到全貌。[^shao-meng-manus-mono]
- Where it stuck: requirements review → separate frontend/backend work → integration → test/ship; the biggest waste was integration—each side interpreting the requirement and negotiating APIs, then rework when understanding drifted. Manus wanted to blur role splits (one person owns the requirement then pushes each surface), but code lived in many repos and AI still could not see the whole picture.[^shao-meng-manus-mono]

- Mono 是什么、怎么长出来：统一入口；说明书写清各仓职责、怎么配合、研发规范；要改哪块就拉对应仓。文中强调它是一步步长出来的，每步解上一步瓶颈：（1）看见全局——补业务知识、跨仓协作，Git worktree 支持并行；（2）本地验证——完整 Manus 可跑本机，验证从等测环境 5–10 分钟变成几秒；（3）查线上——权限内读日志、配置、异常；（4）走发布——补齐易卡环节的操作能力，审批权仍在人；（5）端到端验证——测试账号走真实流程，在浏览器与手机模拟器里看结果。用的人越多知识越多；运维嫌老被叫去发版就把发版流程写进 Mono。共识变成：一个需求，一个人可以写完所有端。例子：移动端 7 人撑 2 个产品、4 个 App，进度和网页版基本同步。[^shao-meng-manus-mono]
- What Mono is and how it grew: a unified entry; docs that spell repo duties, how they cooperate, and engineering norms; pull the matching repo for the slice you change. The piece stresses it grew step by step, each step unblocking the last: (1) see the whole—add business knowledge and cross-repo work, with Git worktrees for parallelism; (2) local verify—full Manus runnable locally, verification from waiting 5–10 minutes on a test env to seconds; (3) read production—logs, config, exceptions within permission; (4) ship path—operations for choke points, approvals still human; (5) end-to-end verify—test accounts through real flows in browser and phone simulators. More users meant more knowledge; ops tired of being paged for releases wrote the release flow into Mono. Consensus became: one requirement, one person can write every surface. Example: seven mobile engineers covering two products and four apps, roughly in sync with web.[^shao-meng-manus-mono]

- 效果对比：不用 Mono 时，每个需求约 5 人 + 5 个智能体（产、设、前、后、移动各带独立上下文），产出再靠跨团队人工交接，流程是需求→设计→开发→集成→测试→运维发布。使用 Mono：每个需求约 1 名构建者 + 1 个共享上下文的智能体；Mono 竖条列出仓库地图、开发规范、界面规范、发布流程、线上调试，并注明「由全团队编写和使用」；流程压成提需求 → 全栈构建 → 本地验证 → 审批后上线。[^shao-meng-manus-mono]
- Effect contrast: without Mono, each requirement was about five people plus five agents (product, design, frontend, backend, mobile each with separate context), then human cross-team handoff—requirements → design → develop → integrate → test → ops release. With Mono: about one builder plus one shared-context agent per requirement; Mono’s strip lists repo map, dev norms, UI norms, release flow, and online debug, noted as “written and used by the whole team”; the path compresses to request → full-stack build → local verify → approve then ship.[^shao-meng-manus-mono]

- 为什么在 Manus 推得动：张涛归为三点——本来就在探 AI 边界；受不了重复活和 AI 已能办的事仍人工做；组织够扁，上下决策都能很快铺开。[^shao-meng-manus-mono]
- Why it stuck at Manus: Zhang Tao names three—they were already probing AI boundaries; they would not tolerate repetitive work and tasks AI could already do still done by hand; the org was flat enough that decisions up and down could spread fast.[^shao-meng-manus-mono]

## 相关 / Related

- Topic: [给 AI 的全栈仓图](../../topics/ai-facing-fullstack-repo-map.md)
- Topic: [智能体规模化工程](../../topics/agent-scaled-engineering.md)
- Topic: [把子 Agent 折进主循环](../../topics/fold-subagents-into-main-loop.md)
- Topic: [软件工厂](../../topics/software-factory.md)
- Topic: [公司级 Agent Harness 五原语](../../topics/company-agent-harness.md)
- Topic: [AI 原生公司](../../topics/ai-native-companies.md)

[^shao-meng-manus-mono]: Meng Shao on Manus Mono — a full-stack map for AI
