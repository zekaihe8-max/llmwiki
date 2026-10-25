---
type: Source
title: 马天翼谈 Sub2API 按周重置调度多 Claude 号
title_en: fkysly on Sub2API weekly-reset scheduling for multiple Claude accounts
description: 马天翼打算给 Sub2API 加按周重置时间综合调度多个 Claude 账号的能力，优先消耗周限额快要到的号；不确定官方是否已有，没有则考虑让 Claude Code 打补丁。
description_en: 马天翼 plans to add Sub2API scheduling across multiple Claude accounts by weekly reset time, preferring accounts whose weekly limit is about to hit; unsure whether official support exists, and may have Claude Code patch it if not.
resource: https://x.com/fkysly/status/2114217071043395588
tags: [sub2api, claude, claude-code, quota, weekly-reset, scheduling, fkysly]
sources:
  - id: fkysly-sub2api-weekly-claude-schedule
    resource: https://x.com/fkysly/status/2114217071043395588
    title: fkysly on Sub2API weekly-reset scheduling for multiple Claude accounts
    author: human:fkysly
generated:
  by: cursor-agent/composer
  at: 2026-10-25T20:35:00+08:00
date: 2026-10-25
---
<!-- Same-file bilingual (project extension): title + title_en, description + description_en, bilingual section headings, ZH then EN body pairs. Proper nouns / product names / APIs / resource URLs stay in their common form. Do not invent facts; translate existing claims faithfully. -->

# 马天翼谈 Sub2API 按周重置调度多 Claude 号

*fkysly on Sub2API weekly-reset scheduling for multiple Claude accounts*

[@fkysly](https://x.com/fkysly)（马天翼）称准备给 Sub2API 加按周重置时间综合调度 Claude 账号的能力：例如有 4 个 Claude 订阅账号、各自重置时间不同，希望优先消耗周限额快要到的账号；不确定官方是否已有该能力，没有的话打算让 Claude Code 自己加补丁支持。[^fkysly-sub2api-weekly-claude-schedule] 原帖见 <https://x.com/fkysly/status/2114217071043395588>。

[@fkysly](https://x.com/fkysly) (马天翼) says he plans to add Sub2API scheduling of Claude accounts by weekly reset time: e.g. four Claude subscription accounts with different reset times, preferring to spend the account whose weekly limit is about to hit; he is unsure whether official support already exists, and if not intends to have Claude Code add a patch.[^fkysly-sub2api-weekly-claude-schedule] Post: <https://x.com/fkysly/status/2114217071043395588>.

## 摘要 / Summary

- 目标产品：Sub2API；调度对象是多个 Claude 订阅账号。[^fkysly-sub2api-weekly-claude-schedule]
- Target product: Sub2API; the scheduling target is multiple Claude subscription accounts.[^fkysly-sub2api-weekly-claude-schedule]
- 策略：按各账号周重置时间综合调度，优先消耗「周限额快要到」的号。[^fkysly-sub2api-weekly-claude-schedule]
- Strategy: schedule by each account’s weekly reset time, preferring accounts whose weekly limit is about to hit.[^fkysly-sub2api-weekly-claude-schedule]
- 示例规模：自称有 4 个 Claude 订阅账号，重置时间各不相同。[^fkysly-sub2api-weekly-claude-schedule]
- Example scale: claims four Claude subscription accounts with different reset times.[^fkysly-sub2api-weekly-claude-schedule]
- 落地路径未定：不确定官方是否已有；若无，考虑让 Claude Code 打补丁。[^fkysly-sub2api-weekly-claude-schedule]
- Delivery path open: unsure whether official support exists; if not, may have Claude Code patch it.[^fkysly-sub2api-weekly-claude-schedule]
- 帖文是计划与意图，未声称功能已上线或给出实现细节。[^fkysly-sub2api-weekly-claude-schedule]
- The post is plan and intent; it does not claim the feature shipped or give implementation detail.[^fkysly-sub2api-weekly-claude-schedule]

## 相关 / Related

- Topic: [编程 Agent 体验与额度](../../topics/coding-agent-ux-vs-quota.md)

[^fkysly-sub2api-weekly-claude-schedule]: fkysly on Sub2API weekly-reset scheduling for multiple Claude accounts
