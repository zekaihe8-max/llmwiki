---
type: Source
title: Vox 谈扫会话日志把烧额度习惯写成 AGENTS.md 规则
title_en: Vox on scanning session logs into AGENTS.md usage rules
description: Vox 给出可贴进 Claude Code 的提示：用近 7 天会话日志里的 token 计数找出烧额度最多的 3 个习惯并估占比，经确认后写入 CLAUDE.md（若无则 AGENTS.md）；Codex 则改扫 ~/.codex/sessions 且只写入 AGENTS.md。
description_en: Vox shares a paste-in Claude Code prompt that uses token counts from the last 7 days of session logs to find the three habits burning the most usage, estimate each share, and—after yes—write rules into CLAUDE.md if present else AGENTS.md; on Codex, swap the path to ~/.codex/sessions and write AGENTS.md only.
resource: https://x.com/Voxyz_ai/status/2114416707385073819
tags: [claude-code, codex, agents-md, claude-md, tokens, usage, habits, voxyz]
sources:
  - id: voxyz-usage-habits-to-agents-md
    resource: https://x.com/Voxyz_ai/status/2114416707385073819
    title: Vox on scanning session logs into AGENTS.md usage rules
    author: human:Voxyz_ai
generated:
  by: cursor-agent/composer
  at: 2026-10-26T08:53:08+08:00
date: 2026-10-25
---
<!-- Same-file bilingual (project extension): title + title_en, description + description_en, bilingual section headings, ZH then EN body pairs. Proper nouns / product names / APIs / resource URLs stay in their common form. Do not invent facts; translate existing claims faithfully. -->

# Vox 谈扫会话日志把烧额度习惯写成 AGENTS.md 规则

*Vox on scanning session logs into AGENTS.md usage rules*

[@Voxyz_ai](https://x.com/Voxyz_ai) 针对「老撞 Claude Code 用量上限」给出可贴进 Claude Code 的提示：先别改任何东西，写小脚本扫描 `~/.claude/projects` 近 7 天会话日志里记录的 token 计数（不要把原文读进上下文），找出烧额度最多的 3 个习惯（例如整文件通读、倾倒长测试/构建输出、拉起子 agent、单会话拖很久等），估算各自占比并写一条能堵住该习惯的规则；用户说 yes 后再写入本项目实际加载的指令文件——有 `CLAUDE.md` 就写它，否则写 `AGENTS.md`；且永不打印 secrets。Codex 侧把提示里的 Claude Code 换成 Codex、路径换成 `~/.codex/sessions`，规则只写入 `AGENTS.md`。[^voxyz-usage-habits-to-agents-md] 原文见 <https://x.com/Voxyz_ai/status/2114416707385073819>。

[@Voxyz_ai](https://x.com/Voxyz_ai) addresses “Keep hitting your Claude Code usage limit?” with a paste-in Claude Code prompt: change nothing until yes; write a small script to scan `~/.claude/projects` session logs from the last 7 days using recorded token counts (don’t read the raw files into context); find the 3 habits that burned the most usage (e.g. reading whole files, dumping long test or build output, spawning subagents, or keeping one session going for hours); estimate each share and write one rule that would stop it; on yes, add the rules to the instruction file the project actually loads—`CLAUDE.md` if there is one, otherwise `AGENTS.md`; never print secrets. On Codex, swap Claude Code for Codex in the prompt, use `~/.codex/sessions`, and put the rules in `AGENTS.md` only.[^voxyz-usage-habits-to-agents-md] The post is at <https://x.com/Voxyz_ai/status/2114416707385073819>.

## 摘要 / Summary

- 面向反复撞 Claude Code 用量上限的人：用会话日志里的 token 计数做诊断，而不是把原始日志塞进上下文。[^voxyz-usage-habits-to-agents-md]
- For people who keep hitting Claude Code usage limits: diagnose from token counts in session logs, instead of dumping raw logs into context.[^voxyz-usage-habits-to-agents-md]
- 扫描路径：Claude Code 用 `~/.claude/projects` 近 7 天；Codex 用 `~/.codex/sessions`。[^voxyz-usage-habits-to-agents-md]
- Scan paths: Claude Code uses `~/.claude/projects` for the last 7 days; Codex uses `~/.codex/sessions`.[^voxyz-usage-habits-to-agents-md]
- 目标是找出烧额度最多的 3 个习惯、估占比，并为每个习惯写一条可堵住它的规则；示例习惯含整文件通读、长测试/构建输出、拉子 agent、单会话拖很久等。[^voxyz-usage-habits-to-agents-md]
- The goal is the top 3 usage-burning habits, each one’s rough share, and one plugging rule per habit; example habits include reading whole files, long test/build dumps, spawning subagents, and multi-hour single sessions.[^voxyz-usage-habits-to-agents-md]
- 确认前不改文件；确认后 Claude Code 写入 `CLAUDE.md`（若无则 `AGENTS.md`），Codex 只写入 `AGENTS.md`；永不打印 secrets。[^voxyz-usage-habits-to-agents-md]
- Change nothing until yes; then Claude Code writes `CLAUDE.md` if present else `AGENTS.md`, Codex writes `AGENTS.md` only; never print secrets.[^voxyz-usage-habits-to-agents-md]

## 相关 / Related

- Topic: [项目指令与 Token 效率](../../topics/agents-md-token-efficiency.md)
- Topic: [编程 Agent 省 Token 工具与开销](../../topics/coding-agent-token-saving-tooling.md)

[^voxyz-usage-habits-to-agents-md]: Vox on scanning session logs into AGENTS.md usage rules
