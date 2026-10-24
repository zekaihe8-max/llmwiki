---
type: Source
title: 小墨谈 DSH 标准模式偏啰嗦
title_en: Xiaomo on DSH standard mode verbosity
description: 小墨：同一 DeepSeek 在 Pi 上两三轮结束、约八十分；换 DeepSeek Harness 标准模式常跑十几二十轮，更慢更啰嗦，效果只多几分但时间和 token 不值，怀疑 DSH 系统提示词过重。
description_en: Xiaomo says the same DeepSeek finishes in two or three rounds on Pi at about eighty points, while DeepSeek Harness standard mode often runs ten to twenty rounds—slower and more verbose—for only a few extra points that are not worth the time and tokens, and suspects DSH’s system prompt is too heavy.
resource: https://x.com/xiaomovps/status/2113852900673998855
tags: [agents, harness, deepseek, pi, dsh, tokens, evaluation]
sources:
  - id: xiaomovps-dsh-standard-mode-verbose
    resource: https://x.com/xiaomovps/status/2113852900673998855
    title: 小墨 on DSH standard mode verbosity
    author: human:xiaomovps
generated:
  by: cursor-agent/composer
  at: 2026-10-24T21:15:00+08:00
date: 2026-10-24
---

# 小墨谈 DSH 标准模式偏啰嗦

*Xiaomo on DSH standard mode verbosity*

[@xiaomovps](https://x.com/xiaomovps) 长期在 Pi agent 上用 DeepSeek，感觉又快又准、API 消耗可控；换上自家 DeepSeek Harness（DSH）标准模式后，同模型同思考等级常莫名多跑十几二十轮，变得很啰嗦很慢，整体效果大约只多 4～5 分，但 token 与时间完全不值，怀疑是 DSH 系统提示词的问题，并问是否有人同感。[^xiaomovps-dsh-standard-mode-verbose] 原文见 <https://x.com/xiaomovps/status/2113852900673998855>。

[@xiaomovps](https://x.com/xiaomovps) has long used DeepSeek on a Pi agent and found it fast, accurate, and cost-controllable; after switching to DeepSeek Harness (DSH) standard mode, the same model and thinking level often runs ten to twenty rounds for no clear reason, becoming very verbose and slow, with overall quality only about four to five points higher—not worth the tokens or time—and the author suspects DSH’s system prompt and asks whether others see the same.[^xiaomovps-dsh-standard-mode-verbose] The post is at <https://x.com/xiaomovps/status/2113852900673998855>.

## 摘要 / Summary

- 在 Pi 上同一 DeepSeek、同思考等级，干活基本不怎么啰嗦，常两到三轮结束，成果约八十分，虽不及 Claude，但对非重度 coding 或复杂任务用户可胜任，成本可控。[^xiaomovps-dsh-standard-mode-verbose]
- On Pi, the same DeepSeek at the same thinking level is rarely verbose, often finishes in two or three rounds at about eighty points—short of Claude but capable for non-heavy coding or complex-task users—with controllable cost.[^xiaomovps-dsh-standard-mode-verbose]
- 作者本期待 DSH 对自家模型有加成（流传 DSH 上跑分更高），高强度使用后却感觉标准模式让模型「又笨又啰嗦」，有时像在用「GPT-6」：轮次拉长、速度变慢。[^xiaomovps-dsh-standard-mode-verbose]
- The author expected DSH to boost its own model (rumors that scores run higher on DSH), but after heavy use finds standard mode makes the model “dumber and more verbose,” sometimes feeling like “GPT-6”: more rounds and slower pace.[^xiaomovps-dsh-standard-mode-verbose]
- 多轮复测结果一致：效果大约只加 4～5 分，相对额外 token 与时间不值；作者怀疑 DSH 系统提示词有问题，并征求他人是否同感。[^xiaomovps-dsh-standard-mode-verbose]
- Repeated tests matched: quality rose only about four to five points, not worth the extra tokens and time; the author suspects DSH’s system prompt and asks whether others share the experience.[^xiaomovps-dsh-standard-mode-verbose]

## 相关 / Related

- Topic: [超越 token 数的 Harness 对比](../../topics/harness-comparison-beyond-tokens.md)
- Source: [小墨谈 Pi 与 DeepSeek Harness 的轮次与成本](./xiaomovps-pi-vs-deepseek-harness.md)
- Source: [小墨谈 DSH 用 AGENTS.md / CLAUDE.md 省 token](./xiaomovps-dsh-agents-md-tokens.md)

[^xiaomovps-dsh-standard-mode-verbose]: 小墨 on DSH standard mode verbosity
