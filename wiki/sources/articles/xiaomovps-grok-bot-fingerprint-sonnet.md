---
type: Source
title: 小墨用指纹检测器测 Grok Bot 为 Sonnet 5.5
title_en: Xiaomo fingerprint-detects Grok Bot as Sonnet 5.5
description: 小墨用 lm.ikale.io 的 Fingerprint Detector，以美国 IP 把三段提示词的回答回填后，检测结果为 Claude Sonnet 5.5、置信度 100%；并强调这是检测器置信度，不等于已确认真实底层模型。
description_en: Xiaomo ran Fingerprint Detector at lm.ikale.io on a U.S. IP—pasting Grok Bot’s answers to three prompts—and got Claude Sonnet 5.5 at 100% confidence, stressing that score is detector confidence, not confirmation of the real backend model.
resource: https://x.com/xiaomovps/status/2115336041574088906
tags: [grok-bot, fingerprint-detector, sonnet, claude, model-identity, xiaomovps]
sources:
  - id: xiaomovps-grok-bot-fingerprint-sonnet
    resource: https://x.com/xiaomovps/status/2115336041574088906
    title: Xiaomo fingerprint-detects Grok Bot as Sonnet 5.5
    author: human:xiaomovps
generated:
  by: cursor-agent/composer
  at: 2026-10-28T21:08:30+08:00
date: 2026-10-28
---
<!-- Same-file bilingual (project extension): title + title_en, description + description_en, bilingual section headings. Pair ZH then EN as adjacent paragraphs/bullets, or same-line `中文。 / English.`. Shared code/URLs/wiki links are not translations; product names alone do not count as English. Format check ≠ translation quality. -->

# 小墨用指纹检测器测 Grok Bot 为 Sonnet 5.5

*Xiaomo fingerprint-detects Grok Bot as Sonnet 5.5*

[@xiaomovps](https://x.com/xiaomovps)（小墨同学）好奇 Grok Bot 背后用什么模型，发现模型指纹检测工具后实测：打开 [lm.ikale.io](https://lm.ikale.io) 的 Fingerprint Detector，把网页给出的 3 段测试提示词分别交给 Grok Bot，再把 3 段回答复制回网页提交。他使用美国 IP，检测结果为 Claude Sonnet 5.5，置信度 100%。他指出该工具不是直接问 AI 是什么模型，而是通过回答特征判断底层模型；并强调 100% 是检测器给出的置信度，不代表已确认 Grok Bot 的真实模型，还邀请其他使用者复测对照。[^xiaomovps-grok-bot-fingerprint-sonnet] 原帖见 <https://x.com/xiaomovps/status/2115336041574088906>。

[@xiaomovps](https://x.com/xiaomovps) (Xiaomo) was curious what model backs Grok Bot and, after finding a model fingerprint tool, tested it: open Fingerprint Detector at [lm.ikale.io](https://lm.ikale.io), give Grok Bot the page’s three test prompts, and paste the three answers back for scoring. On a U.S. IP the result was Claude Sonnet 5.5 at 100% confidence. He notes the tool does not ask the AI what model it is—it judges the backend from answer features—and stresses that 100% is the detector’s confidence, not confirmation of Grok Bot’s real model, inviting other users to reproduce and compare.[^xiaomovps-grok-bot-fingerprint-sonnet] Post: <https://x.com/xiaomovps/status/2115336041574088906>.

## 摘要 / Summary

- 用 Fingerprint Detector（[lm.ikale.io](https://lm.ikale.io)）三步测：取三段提示词 → 让 Grok Bot 回答 → 回填提交。[^xiaomovps-grok-bot-fingerprint-sonnet]
- Three-step Fingerprint Detector ([lm.ikale.io](https://lm.ikale.io)) test: take three prompts → have Grok Bot answer → paste back and submit.[^xiaomovps-grok-bot-fingerprint-sonnet]
- 美国 IP 下结果为 Claude Sonnet 5.5，检测器置信度 100%。[^xiaomovps-grok-bot-fingerprint-sonnet]
- On a U.S. IP the result was Claude Sonnet 5.5 at 100% detector confidence.[^xiaomovps-grok-bot-fingerprint-sonnet]
- 工具靠回答特征判断，而非直接询问模型身份。[^xiaomovps-grok-bot-fingerprint-sonnet]
- The tool judges from answer features rather than asking the model its identity.[^xiaomovps-grok-bot-fingerprint-sonnet]
- 作者明确：检测器置信度 ≠ 已确认真实底层模型；欢迎他人复测。[^xiaomovps-grok-bot-fingerprint-sonnet]
- Author is clear: detector confidence ≠ confirmed real backend; others are invited to reproduce.[^xiaomovps-grok-bot-fingerprint-sonnet]

## 相关 / Related

- Topic: [行为指纹置信度 ≠ 确认底层模型](../../topics/model-fingerprint-confidence-not-confirmation.md)
- Topic: [社区实测对抗刷分碰瓷](../../topics/community-evals-vs-score-hype.md)
- Source: [小墨谈 Grok Bot 五个机制真相](./xiaomovps-grok-bot-five-mechanisms.md)

[^xiaomovps-grok-bot-fingerprint-sonnet]: Xiaomo fingerprint-detects Grok Bot as Sonnet 5.5
