---
type: Source
title: "Lovable 创始人复盘：从 GPT Engineer 到 7000 万个项目，架构推倒重来"
title_en: "Lovable Founder Retrospective: From GPT Engineer to 70 Million Projects, Architecture Rebuilt Multiple Times"
description: "Lovable 创始人复盘如何多次推倒重构架构，从自主 Agent 转向可预测工具调用、知识文件与运行中机器的分支合并。"
description_en: "Lovable founder retrospects on repeatedly rebuilding architecture, shifting from autonomous agents to predictable tool calls, knowledge files, and branching/merging running machines."
resource: https://x.com/shao__meng/status/2118169771049111671
tags: [lovable, ai-coding, agent-architecture, software-platform]
sources:
  - id: lovable-architecture-rebuild
    resource: https://x.com/shao__meng/status/2118169771049111671
    title: "Lovable Founder Retrospective: From GPT Engineer to 70 Million Projects, Architecture Rebuilt Multiple Times"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-05T20:08:07+08:00
---

# Lovable 创始人复盘：从 GPT Engineer 到 7000 万个项目，架构推倒重来

*Lovable Founder Retrospective: From GPT Engineer to 70 Million Projects, Architecture Rebuilt Multiple Times*

帖文称，Lovable 创始人 Anton Osika 复盘了从 2023 年 GPT Engineer 到如今平台超 7000 万个项目、代码库合并超 10 万个 PR 的演变，产品目标基本不变，但实现方式经历多次架构推倒重来。[^lovable-architecture-rebuild]

The post says Lovable founder Anton Osika retrospects the evolution from GPT Engineer in 2023 to over 70 million projects and 100,000+ merged PRs today, with the product goal largely unchanged but implementation rebuilt multiple times.[^lovable-architecture-rebuild]

## 摘要 / Summary

- Lovable 2023 年定下的目标是让不会写代码的人通过聊天做软件、部署并立即看到结果；至今用户在平台上创建超过 7000 万个项目，代码库合并超过 10 万个 PR。 / Lovable's 2023 goal was to let non-coders build, deploy, and instantly see results via chat; users have created over 70 million projects and the codebase has merged over 100,000 PRs.[^lovable-architecture-rebuild]
- 团队删掉几乎所有 Agent 代码，改回一次用户请求对应一串可预测的工具调用，输出为聊天回复加实时预览，到 2024 年底主要编辑流程是一次回复包含所有需修改文件。 / The team deleted nearly all Agent code and returned to one user request mapping to a predictable chain of tool calls, outputting chat replies plus real-time previews; by end of 2024 the main editing flow included all modified files in a single reply.[^lovable-architecture-rebuild]
- 2024 年他们改用知识文件代替微调模型，将反复出现的错误和避免方法写成简短说明检索进上下文，例如「只使用 lucide-react 里存在的图标」。 / In 2024 they replaced model fine-tuning with knowledge files, retrieving short descriptions of recurring errors and fixes into context, such as "only use icons that exist in lucide-react."[^lovable-architecture-rebuild]
- 他们为每个项目准备常驻沙箱，保留文件并让开发服务器一直运行，并跑增量 TypeScript 检查，发现错误后交给 Agent 在运行时修复。 / They provisioned persistent sandboxes per project, kept files and dev servers running, and ran incremental TypeScript checks, handing errors to the Agent for runtime fixes.[^lovable-architecture-rebuild]
- Camille 框架可对整个应用连同运行环境和数据库做快照、分支与合并，Agent 过几天回来也能在几秒内回到同一工作环境。 / The Camille framework can snapshot, branch, and merge entire applications together with runtime environments and databases, letting an Agent return days later to the same work environment within seconds.[^lovable-architecture-rebuild]
- Osika 表示目标不是做「AI 软件工程师」，而是做人们可以在上面经营整个生意的平台，已涉及 Slack 接入、数据导入、支付、增长分析甚至公司注册。 / Osika said the goal is not an "AI software engineer" but a platform where people can run entire businesses, already covering Slack integration, data import, payments, growth analytics, and even company registration.[^lovable-architecture-rebuild]

## 相关 / Related

- 原文：[链接](https://x.com/shao__meng/status/2118169771049111671)。 / Original: [link](https://x.com/shao__meng/status/2118169771049111671).
- Topic: [智能体规模化工程 / Agent-scaled engineering](../../topics/agent-scaled-engineering.md)
- Topic: [Agent 上下文工程 / Context engineering for agents](../../topics/context-engineering-for-agents.md)
- Topic: [把子 Agent 折进主循环 / Fold sub-agents into the main loop](../../topics/fold-subagents-into-main-loop.md)
- Topic: [软件工厂 / Software factory](../../topics/software-factory.md)

[^lovable-architecture-rebuild]: Lovable Founder Retrospective: From GPT Engineer to 70 Million Projects, Architecture Rebuilt Multiple Times
