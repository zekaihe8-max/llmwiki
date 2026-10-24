---
type: Source
title: 小墨谈 DSH 用 AGENTS.md / CLAUDE.md 省 token
title_en: Xiaomo on saving tokens in DSH with AGENTS.md / CLAUDE.md
description: 小墨：DeepSeek Harness 会加载 AGENTS.md 与 CLAUDE.md；同目录内容不同会双载，宜以 AGENTS.md 为主并复用到 CLAUDE.md；规则写执行约束而非人设，复杂流程拆 Skills 按需加载，再配极简模式可逼近 Pi 的简洁。
description_en: Xiaomo says DeepSeek Harness loads AGENTS.md and CLAUDE.md; different same-dir copies both enter context, so keep AGENTS.md primary and reuse it in CLAUDE.md; write execution constraints not personas, split heavy flows into on-demand Skills, and with minimal mode DSH can approach Pi’s cleanliness.
resource: https://x.com/xiaomovps/status/2113950309278167104
tags: [agents, harness, deepseek, agents-md, claude-md, tokens, skills]
sources:
  - id: xiaomovps-dsh-agents-md-tokens
    resource: https://x.com/xiaomovps/status/2113950309278167104
    title: 小墨 on DSH AGENTS.md / CLAUDE.md token tips
    author: human:xiaomovps
generated:
  by: cursor-agent/composer
  at: 2026-10-24T21:15:00+08:00
date: 2026-10-24
---

# 小墨谈 DSH 用 AGENTS.md / CLAUDE.md 省 token

*Xiaomo on saving tokens in DSH with AGENTS.md / CLAUDE.md*

[@xiaomovps](https://x.com/xiaomovps) 分享 DeepSeek Harness（DSH）优化：从 `AGENTS.md` 与 `CLAUDE.md` 入手用项目指令约束 Agent，减少无效 Token；弄清全局 / 项目 / 子目录加载与双文件去重，把规则写成执行约束而非角色设定，复杂部署、Review、测试拆成 Skills 按需加载，再配合极简模式可把 DSH 做得像 Pi agent 一样简洁。[^xiaomovps-dsh-agents-md-tokens] 原文见 <https://x.com/xiaomovps/status/2113950309278167104>。

[@xiaomovps](https://x.com/xiaomovps) shares DeepSeek Harness (DSH) tips: start from `AGENTS.md` and `CLAUDE.md` so project instructions constrain the Agent and cut wasted tokens; learn global / project / subdirectory loading and dual-file dedupe; write execution constraints rather than personas; split complex deploy, Review, and test flows into Skills loaded on demand; with minimal mode, DSH can feel as clean as a Pi agent.[^xiaomovps-dsh-agents-md-tokens] The post is at <https://x.com/xiaomovps/status/2113950309278167104>.

## 摘要 / Summary

- DSH 默认自动读取 `AGENTS.md` 与 `CLAUDE.md` 并加入 Context：全局 `~/.dsh/AGENTS.md`、项目目录下的 `AGENTS.md` 或 `CLAUDE.md`，以及可按目录作用范围加载的子目录规则。[^xiaomovps-dsh-agents-md-tokens]
- DSH auto-reads `AGENTS.md` and `CLAUDE.md` into Context: global `~/.dsh/AGENTS.md`, project-dir `AGENTS.md` or `CLAUDE.md`, plus subdirectory rules scoped by directory.[^xiaomovps-dsh-agents-md-tokens]
- 同目录两文件内容不同可能同时加载，内容相同才会去重；建议以 `AGENTS.md` 为主要规则来源，`CLAUDE.md` 尽量复用同一份，不要写两套规范。[^xiaomovps-dsh-agents-md-tokens]
- If the two same-dir files differ, both may load; identical content is deduped—so prefer `AGENTS.md` as the primary source and reuse that content in `CLAUDE.md` instead of maintaining two rule sets.[^xiaomovps-dsh-agents-md-tokens]
- 优化重点是执行规则而非角色设定：明确任务后直接执行、少空扫仓库、改动控范围、验证通过即停（勿反复截图/自检）、工具报错先分析再重试。[^xiaomovps-dsh-agents-md-tokens]
- Optimize execution rules, not personas: execute once the task is clear, avoid useless full-repo scans, keep edits scoped, stop when verification passes (no repeated screenshots/self-checks), and analyze tool errors before retrying the same parameters.[^xiaomovps-dsh-agents-md-tokens]
- 复杂部署、Review、测试可拆成独立 Skills，需要时再加载，不必每轮都带完整说明；再配极简模式，作者想把 DSH 打造成接近 Pi agent 的简洁度，并考虑把 Pi 的默认系统提示词搬到 DSH 上试。[^xiaomovps-dsh-agents-md-tokens]
- Complex deploy, Review, and test flows can be separate Skills loaded when needed so every turn need not carry full instructions; with minimal mode, the author aims for Pi-like cleanliness and considers trying Pi’s default system prompt on DSH.[^xiaomovps-dsh-agents-md-tokens]

## 相关 / Related

- Topic: [项目指令与 Token 效率](../../topics/agents-md-token-efficiency.md)
- Topic: [超越 token 数的 Harness 对比](../../topics/harness-comparison-beyond-tokens.md)
- Topic: [Agent Skill 编写](../../topics/agent-skill-authoring.md)

[^xiaomovps-dsh-agents-md-tokens]: 小墨 on DSH AGENTS.md / CLAUDE.md token tips
