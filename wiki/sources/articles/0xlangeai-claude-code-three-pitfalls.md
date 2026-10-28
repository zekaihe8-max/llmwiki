---
type: Source
title: 蓝哥AI谈 Claude Code「变笨」三隐形坑
title_en: 0xlangeai on three silent Claude Code pitfalls that look like “dumbing down”
description: 蓝哥AI：Claude Code「变笨」常是不报错的配置坑与用法——同时放 CLAUDE.md 与 AGENTS.md 时默认只读前者；Skill 装太多时描述预算仅约占上下文 1%、超限会删低频触发描述只留名字；环境变量留着 ANTHROPIC_API_KEY 会按量扣费而非走订阅。
description_en: 0xlangeai says Claude Code “getting dumb” is often silent config and habit—with both CLAUDE.md and AGENTS.md present only the former loads by default; too many Skills hit a ~1% context description budget that strips low-frequency trigger text to names; and a leftover ANTHROPIC_API_KEY bills pay-as-you-go instead of the subscription.
resource: https://x.com/0xlangeai/status/2115300040701096272
tags: [claude-code, agents-md, claude-md, skills, subscription, api-key, pitfalls]
sources:
  - id: 0xlangeai-claude-code-three-pitfalls
    resource: https://x.com/0xlangeai/status/2115300040701096272
    title: 蓝哥AI on three silent Claude Code pitfalls
    author: human:0xlangeai
generated:
  by: cursor-agent/composer
  at: 2026-10-28T22:45:00+08:00
date: 2026-10-28
---

# 蓝哥AI谈 Claude Code「变笨」三隐形坑

*0xlangeai on three silent Claude Code pitfalls that look like “dumbing down”*

[@0xlangeai](https://x.com/0xlangeai)（蓝哥AI）称很多人觉得 Claude Code 变笨，其实一半是不报错的配置坑，一半是用法习惯拖后腿；并列出三个最易中招的隐形坑：双指令文件只加载 `CLAUDE.md`、Skill 过多触发描述被砍、环境变量里的 `ANTHROPIC_API_KEY` 让人误以为在用订阅。[^0xlangeai-claude-code-three-pitfalls] 原帖 <https://x.com/0xlangeai/status/2115300040701096272>。

[@0xlangeai](https://x.com/0xlangeai) (蓝哥AI) says many people think Claude Code got dumb when half the pain is silent config pitfalls and half is usage habits; he lists three easy silent traps—dual instruction files loading only `CLAUDE.md`, too many Skills with trigger descriptions cut, and an env `ANTHROPIC_API_KEY` that makes people think they are on the subscription.[^0xlangeai-claude-code-three-pitfalls] Post: <https://x.com/0xlangeai/status/2115300040701096272>.

## 摘要 / Summary

- 项目里同时放 `CLAUDE.md` 与 `AGENTS.md` 时，默认只读前者；`AGENTS.md` 从头到尾没被加载也不报错。改法是在 `CLAUDE.md` 里加一行 `@AGENTS.md`，并跑 `context` 确认。[^0xlangeai-claude-code-three-pitfalls]
- With both `CLAUDE.md` and `AGENTS.md` in a project, only the former is read by default; `AGENTS.md` can go unloaded end-to-end with no error. Fix by adding `@AGENTS.md` in `CLAUDE.md` and running `context` to confirm.[^0xlangeai-claude-code-three-pitfalls]
- Skill 装太多反而「失忆」：描述预算只占上下文约 1%；超了会自动把低频 Skill 的触发描述删掉、只留名字。治本是跑 `skill-doctor` 关掉不用的 Skill。[^0xlangeai-claude-code-three-pitfalls]
- Installing too many Skills can look like amnesia: the description budget is only about 1% of context; over budget, low-frequency Skills lose their trigger descriptions and keep only names. The real fix is running `skill-doctor` to disable unused Skills.[^0xlangeai-claude-code-three-pitfalls]
- 环境变量里留着 `ANTHROPIC_API_KEY`，以为在用订阅，实际一直在按量扣费；跑 `status` 查凭据。[^0xlangeai-claude-code-three-pitfalls]
- Leaving `ANTHROPIC_API_KEY` in the environment while believing you are on the subscription can keep you on pay-as-you-go billing; run `status` to check credentials.[^0xlangeai-claude-code-three-pitfalls]

## 相关 / Related

- Topic: [项目指令与 Token 效率](../../topics/agents-md-token-efficiency.md)
- Topic: [Agent Skill 编写](../../topics/agent-skill-authoring.md)
- Topic: [高端 AI 订阅价值](../../topics/premium-ai-subscription-value.md)

[^0xlangeai-claude-code-three-pitfalls]: 蓝哥AI on three silent Claude Code pitfalls
