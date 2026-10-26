---
type: Source
title: Dex Horthy 谈同会话叠 Skills 与上下文污染
title_en: Dex Horthy on stacking skills in one session and context dirtying
description: Dex Horthy 回应「同会话多 Skills 是否污染上下文」：约五步流程通常可同会话；需技能叠加以致早先指令仍须生效、或大量 Skills 同时活跃时，宜换新鲜上下文、子 Agent，或把多份 skill 预合并进一条用户消息；内容以流程步骤宜串开、以信息宜可合并、行为规则宜重复或用 hooks；并恳求勿把权重里已有的东西写进 Skills。
description_en: Dex Horthy answers whether consuming more skills in one session dirties context—about five process steps are usually fine in one session; when skills must stack so earlier instructions still hold, or many skills stay active at once, prefer fresh context, subagents, or precombining skill contents into one user message; process steps should be strung out, information can often merge, and behavior rules may need repetition or hooks; he begs people to stop putting weight-already-known material into Skills.
resource: https://x.com/dexhorthy/status/2114408588991222156
tags: [agents, skills, context, subagents, attention, dexhorthy]
sources:
  - id: dexhorthy-skills-session-context
    resource: https://x.com/dexhorthy/status/2114408588991222156
    title: Dex Horthy on stacking skills in one session and context dirtying
    author: human:dexhorthy
generated:
  by: cursor-agent/composer
  at: 2026-10-26T08:50:00+08:00
date: 2026-10-25
---
<!-- Same-file bilingual (project extension): title + title_en, description + description_en, bilingual section headings, ZH then EN body pairs. Proper nouns / product names / APIs / resource URLs stay in their common form. Do not invent facts; translate existing claims faithfully. -->

# Dex Horthy 谈同会话叠 Skills 与上下文污染

*Dex Horthy on stacking skills in one session and context dirtying*

[@dexhorthy](https://x.com/dexhorthy)（Dex Horthy）回应 TL 提问：同会话多吃 Skills 是否会不必要地污染上下文——五步工作里每步一个 skill，可选单会话、按相关 skills 拆子 Agent，或每步 compact / 新开聊天。他的直觉是约五步通常没问题；后续 skill 会分走对先前 skill 的注意力；若流程很长且 skills 必须**叠加**（skill 2 的指令在 skill 6 执行时仍须被遵守），或约 200 个独立 skills 需在同会话同时活跃，则宜要新鲜上下文、子 Agent，或把多份 skill 内容合成式预合并进一条用户消息（但会失去对流程第 6 步指令的注意力近因优势）。[^dexhorthy-skills-session-context] 帖文见 <https://x.com/dexhorthy/status/2114408588991222156>。

[@dexhorthy](https://x.com/dexhorthy) (Dex Horthy) answers a TL question on whether consuming more skills in the same session unnecessarily dirties the context—for five-step work with a skill per step, options are one session, subagents with relevant skills, or compact / new chat per step. His intuition is that about five steps in a process are fine; each successive skill takes a share of attention from previous skills; for a very long process where skills must **stack** (instructions from skill 2 still honored while skill 6 executes), or many (e.g. 200) separate skills that all need to stay active in a session, you want fresh context, subagents, or to synthetically precombine many skill contents into a single user message (though that loses attention recency bias for instructions in step 6 of the process).[^dexhorthy-skills-session-context] Post: <https://x.com/dexhorthy/status/2114408588991222156>.

## 摘要 / Summary

- 默认尺度：约五步流程同会话叠 Skills 通常可以；后续 skill 会分走对先前 skill 的注意力。[^dexhorthy-skills-session-context]
- Default scale: about five process steps with skills in one session are usually fine; each successive skill takes attention share from earlier ones.[^dexhorthy-skills-session-context]
- 何时换窗：需 skills **叠加**（早先指令在后期步骤仍须生效），或大量（如约 200）独立 skills 须同会话同时活跃（作者举例把 agent memory snippets 做成 skills，并称在当今 harness 里多半是反模式）时，用新鲜上下文、子 Agent，或把多份 skill 预合并进一条用户消息。[^dexhorthy-skills-session-context]
- When to change windows: when skills must **stack** (earlier instructions still hold in later steps), or many (e.g. ~200) separate skills must stay active in one session (he cites agent memory snippets as skills—probably an antipattern in today’s harnesses), use fresh context, subagents, or synthetically precombine many skill contents into one user message.[^dexhorthy-skills-session-context]
- 内容类型决定切分：好的 skills 常混合「权重里没有的信息」「不在权重里的流程步骤」「一般转向/行为」；偏流程步骤宜串开；偏信息大概可安全合并进一条用户消息；行为看情况——长会话里遵从会衰减，重要规则应在各步骤重复，或用 hooks 一类更确定的机制。[^dexhorthy-skills-session-context]
- Content type steers the cut: good skills often mix information not in the weights, process steps not in the weights, and general steering/behavior; more instructions/process steps → string them out; mostly information → probably safe to combine into one user message; behavior depends—adherence can decay over a long session, so important rules want repetition across process steps or something more deterministic like hooks.[^dexhorthy-skills-session-context]
- 恳求：请停止把权重里已有的东西放进 Skills——浪费时间，并锁死一种可能次优的具体行为。[^dexhorthy-skills-session-context]
- Plea: please stop putting stuff that is already in the weights into your skills—you waste time and lock in a specific, potentially suboptimal behavior.[^dexhorthy-skills-session-context]

## 相关 / Related

- Topic: [Agent Skill 编写](../../topics/agent-skill-authoring.md)
- Topic: [把子 Agent 折进主循环](../../topics/fold-subagents-into-main-loop.md)

[^dexhorthy-skills-session-context]: Dex Horthy on stacking skills in one session and context dirtying
