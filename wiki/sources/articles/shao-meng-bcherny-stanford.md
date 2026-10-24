---
type: Source
title: 邵萌谈 Boris Cherny 斯坦福演讲
title_en: Meng Shao on Boris Cherny at Stanford
description: 邵萌转述 Boris Cherny 斯坦福演讲的五条原则——自动化瓶颈、为下一版模型而建、保持小团队、用循环思考、领域专家胜出——并提到近乎全由 Claude 写代码、每位工程师产出约 10 倍。
description_en: meng shao relays Boris Cherny's five Stanford talk principles—automate bottlenecks, build for the next model, stay small, think in loops, and domain experts win—with near-full Claude-written code and about 10x output per engineer.
resource: https://x.com/shao__meng/status/2113291579750551931
tags: [claude-code, agents, engineering, boris-cherny, stanford, shao-meng]
sources:
  - id: shao-meng-bcherny-stanford
    resource: https://x.com/shao__meng/status/2113291579750551931
    title: Meng Shao on Boris Cherny at Stanford
    author: human:shao__meng
generated:
  by: cursor-agent/okf-bilingual
  at: 2026-10-24T20:30:00+08:00
date: 2026-10-22
---

# 邵萌谈 Boris Cherny 斯坦福演讲

*Meng Shao on Boris Cherny at Stanford*

[@shao__meng](https://x.com/shao__meng) 概括 Boris Cherny 在 Mihail Eric 斯坦福课程 The Modern Software Developer 的演讲：同时跑着成千上万个 Claude agent，以及五条实践原则，而非「用 AI 多写代码」。[^shao-meng-bcherny-stanford] 帖文见 <https://x.com/shao__meng/status/2113291579750551931>。

[@shao__meng](https://x.com/shao__meng) summarizes Boris Cherny's talk in Mihail Eric's Stanford course The Modern Software Developer: thousands of Claude agents running at once, and five practice principles rather than "use AI to write more code."[^shao-meng-bcherny-stanford] The post is at <https://x.com/shao__meng/status/2113291579750551931>.

## 摘要 / Summary

- 自动化你的瓶颈：AI 代码量很大之后，人们只略读 diff，于是团队自动化了代码审查，下一步盯审批——找出拖慢交付的环节并为这些步骤建系统，而非一刀切采用 AI。[^shao-meng-bcherny-stanford]
- Automate your bottleneck: after heavy AI code volume, people only skim diffs, so the team automated code review and eyes approvals next—find what slows delivery and build systems for those steps, not blanket AI adoption.[^shao-meng-bcherny-stanford]
- 为六个月后的模型而建：Claude Code 早期收入近乎持平数月，直到 Opus 4；读 agent 转录找模型失败处，那里往往是下一版会改进的地方。[^shao-meng-bcherny-stanford]
- Build for the model six months out: early Claude Code revenue was nearly flat for months until Opus 4; read agent transcripts for where the model fails, which is often where the next release will improve.[^shao-meng-bcherny-stanford]
- 小团队更快：Claude Code 有几个月基本只有一人；有了 AI，一两个人可以胜过百倍规模的团队。[^shao-meng-bcherny-stanford]
- Small teams go faster: Claude Code was basically one person for months; with AI, one or two people can outship a team a hundred times larger.[^shao-meng-bcherny-stanford]
- 用循环思考：Cherny 编写可运行数天或数周、并派生许多 agent 的循环，并预期手写代码会像打孔卡一样过时。[^shao-meng-bcherny-stanford]
- Think in loops: Cherny writes loops that run days or weeks and spawn many agents, and expects hand-typed code to become as outdated as punch cards.[^shao-meng-bcherny-stanford]
- 领域专家胜出：当写代码廉价时，对问题的深刻理解才是护城河——他预期 2027 年最好的会计软件会由会计师打造。[^shao-meng-bcherny-stanford]
- Domain experts win: when writing code is cheap, deep problem understanding is the moat—he expects the best accounting software of 2027 to be built by an accountant.[^shao-meng-bcherny-stanford]
- 大约自去年 11 月起，其团队几乎全部代码由 Claude 编写，每位工程师产出约 10 倍；Cherny 告诉 Mihail Eric 他在跑「几千个」Claude agent。[^shao-meng-bcherny-stanford]
- Since about November last year nearly all of his team's code has been written by Claude, with roughly 10x output per engineer; Cherny told Mihail Eric he was running "a few thousand" Claude agents.[^shao-meng-bcherny-stanford]

## 相关 / Related

- Topic: [Agent-scaled engineering](../../topics/agent-scaled-engineering.md)
- Topic: [Workflows before agents](../../topics/workflows-before-agents.md)
- Source: [Mihail Eric on Boris Cherny at Stanford](./mihail-eric-bcherny-stanford.md)

[^shao-meng-bcherny-stanford]: Meng Shao on Boris Cherny at Stanford
