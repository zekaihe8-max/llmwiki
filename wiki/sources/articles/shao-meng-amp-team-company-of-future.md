---
type: Source
title: 邵萌谈 Amp 团队「未来公司」工作法
title_en: Meng Shao on how the Amp team works — The Company of the Future
description: 邵萌据 sqs 与 Thorsten Ball 播客整理 Amp：约 21 人、周会一次、无季度口号、无强制 PR、直推 main、日均约百次发布；用 Slack 频道与特性开关同步，质量靠 Agent 端到端证据与全员用产品，并强调人少、彼此校准与共同营收动机才是前提。
description_en: Meng Shao summarizes sqs and Thorsten Ball’s podcast on Amp—about 21 people, one weekly meeting, no quarterly slogans, no mandatory PRs, trunk to main, roughly a hundred releases a day; Slack channels and feature flags for sync, quality from agent end-to-end evidence and company-wide product use, with small size, mutual calibration, and shared revenue motives as repeated prerequisites.
resource: https://x.com/shao__meng/status/2115647666160029715
tags: [amp, org-design, agents, shipping, code-review, sourcegraph, shao-meng, podcast]
sources:
  - id: shao-meng-amp-team-company-of-future
    resource: https://x.com/shao__meng/status/2115647666160029715
    title: Meng Shao on how the Amp team works — The Company of the Future
    author: human:shao__meng
generated:
  by: cursor-agent/composer-2.5
  at: 2026-10-29T20:22:00+08:00
date: 2026-10-29
---
<!-- Same-file bilingual (project extension): title + title_en, description + description_en, bilingual section headings, ZH then EN body pairs. Proper nouns / product names / APIs / resource URLs stay in their common form. Do not invent facts; translate existing claims faithfully. -->

# 邵萌谈 Amp 团队「未来公司」工作法

*Meng Shao on how the Amp team works — The Company of the Future*

[@shao__meng](https://x.com/shao__meng) 据 [@sqs](https://x.com/sqs) 与 [@thorstenball](https://x.com/thorstenball) 播客「The Company of the Future」整理 [@AmpCode](https://x.com/AmpCode) 团队如何工作：约 21 人、一周一次会、无季度目标、几乎无头衔、无 PR、无强制代码评审、直推 main、一天约百次发布、分钟级修 bug——靠信任与 Agent，而不是靠流程堆叠。[^shao-meng-amp-team-company-of-future] 他们把 Amp 本身当成工作方式的一部分；前提反复强调人少、彼此校准过、以营收与产品共同成功为动机——**不是**把 2019 年 250 人组织乘上 AI 就能复制的模板。音频 <https://t.co/ZPGkDbWP0Z>；视频 <https://t.co/TPYWgjiy5U>；原帖 <https://x.com/shao__meng/status/2115647666160029715>。

[@shao__meng](https://x.com/shao__meng) summarizes [@sqs](https://x.com/sqs) and [@thorstenball](https://x.com/thorstenball) on the podcast “The Company of the Future”—how the [@AmpCode](https://x.com/AmpCode) team works: about 21 people, one meeting a week, no quarterly goals, almost no titles, no pull requests, no mandatory code review, push to main, on the order of a hundred releases a day, bugs fixed in minutes—trust and Agents, not stacked process.[^shao-meng-amp-team-company-of-future] They treat Amp itself as part of how they work; prerequisites repeated throughout are small headcount, mutual calibration, and motives aligned on revenue and shared product success—**not** a template you get by multiplying a 2019 two-hundred-fifty-person org by AI. Audio: <https://t.co/ZPGkDbWP0Z>; video: <https://t.co/TPYWgjiy5U>; post: <https://x.com/shao__meng/status/2115647666160029715>.

## 摘要 / Summary

- **团队画像**：约 21 人、这种形态大约一年；二月招过 Hamish 后基本不再招人（纽约想招 FDE）。无部门、无多层高管，「人人几乎什么都能做」；有所有权但没有领地。自称人均营收不错，对手编制大很多倍也能打到相近体量。Quinn 曾任 Sourcegraph CEO，Thorsten 跟过约 19→300 人扩张；Amp 从 Sourcegraph 拆出是为保持这种规模与速度。[^shao-meng-amp-team-company-of-future]
- **Team profile**: About 21 people in this shape for roughly a year; after hiring Hamish in February they largely stopped hiring (want an FDE in New York). No departments or executive layers—“everyone can do almost everything”; ownership without turf. They claim strong revenue per capita versus rivals many times their size. Quinn was Sourcegraph CEO; Thorsten saw growth from ~19 to ~300; Amp spun out of Sourcegraph to keep this scale and speed.[^shao-meng-amp-team-company-of-future]
- **一周节奏**：周末修 bug、听反馈；Thorsten 常写 Sunday post（约一年二十多篇），Alex 发周数据。周一同一场会对两遍（欧洲早上与旧金山场）；除 Quinn/Thorsten 两边都参加外，其他人每周固定会议只有这一场。约一小时：自由讨论优先级（无脚本化部门汇报），末尾在 Google Doc 静默写本周目标并念标题；会追问新闻稿与打算哪天发。无季度主题硬套；分工靠「做什么给你能量」自然落下。[^shao-meng-amp-team-company-of-future]
- **Weekly cadence**: Weekends for bugs and feedback; Thorsten’s Sunday posts (~20+ in a year), Alex’s weekly metrics. One meeting run twice on Monday (Europe morning and San Francisco); aside from Quinn and Thorsten in both, that is the only fixed weekly meeting for everyone else. ~One hour: open priority discussion (no scripted department reports), then silent weekly goals in a Google Doc and read titles aloud; press releases and ship dates get challenged. No quarterly themes forced; work lands where it energizes people.[^shao-meng-amp-team-company-of-future]
- **协作频道**：work in progress、shipped、orb good / orb bad（坏反馈要直说）。大改动常要求先写对外新闻稿；功能多先 feature flag，全员试用，再全量/改/删——删也会在 shipped 里庆祝。全员看客户反馈；基建同学也直接读客户频道。Thorsten 曾因刷 bug 太多被「踢出 bug 频道」，改由 Nicolay 分派。[^shao-meng-amp-team-company-of-future]
- **Collaboration channels**: work in progress, shipped, orb good / orb bad (bad feedback stated plainly). Large changes often need an external press release first; features usually go behind flags, whole team tries them, then ship/change/kill—kills are celebrated in shipped. Everyone reads customer feedback; infra folks read customer channels directly. Thorsten was “kicked out” of the bug channel for flooding it; Nicolay triages instead.[^shao-meng-amp-team-company-of-future]
- **审与发**：口头禅——先让 Agent 给「端到端不可辩驳的证据」（测试矩阵、数据流、截图/录屏），再决定要不要看代码；热路径才抠性能与结构。用 Amp 多人 Thread 拉同事改方案。无强制 PR/人工评审；可自看或请人帮忙。主干开发：推 main，CI 绿即自动部署，官网服务几乎每次绿就发，平均约 90 次/天；main 到全员可用约 7.7 分钟。小步提交 + 特性开关 + 先埋日志再改实现降风险；Agent 可读生产日志（OIDC/限时授权），部分只读库进 BigQuery。修 bug：Slack 一键开 Thread → 诊断包与日志 → 人确认再发 → Agent 等滚动完成再给用户发「已修好 + 积分」邮件。[^shao-meng-amp-team-company-of-future]
- **Review and release**: Mantra—have the Agent produce “end-to-end irrefutable evidence” (test matrix, data flows, screenshots/recordings) before deciding whether to read code; performance and structure only on hot paths. Pull colleagues into Amp multi-person Threads to revise plans. No mandatory PR/human review; self-review or ask for help. Trunk: push main, green CI auto-deploys, marketing site ships on nearly every green, ~90/day average; main to everyone usable ~7.7 minutes. Small commits + flags + log-first then change implementation; Agents read prod logs (OIDC/time-bound auth), some read-only DB to BigQuery. Bugs: one-click Slack Thread → diagnostics and logs → human confirms ship → Agent waits for rollout then emails user “fixed + credits.”[^shao-meng-amp-team-company-of-future]
- **更大公司与可复制性**：Agent 拉宽工程师「翅膀」后，2019 式职能地盘会互撞；不是每个职能都该 ×10。对卡在私密吐槽群的人：关掉闲话、直接跟愿意改的 CEO 说。两人承认 21 个已磨合的「联合创始人」是历史偶然；从两人冷启动或从 300 人压到高能动密度，路径仍不清楚。[^shao-meng-amp-team-company-of-future]
- **Larger companies and replicability**: Agents widen engineers’ “wings,” so 2019-style functional turf collides; not every function should scale ×10. For people stuck in private complaint channels: stop the side chat, talk directly to a CEO who will change things. Both admit twenty-one calibrated “co-founders” is historical accident; path from two-person cold start or from three hundred down to high-agency density is still unclear.[^shao-meng-amp-team-company-of-future]

## 相关 / Related

- Topic: [智能体规模化工程](../../topics/agent-scaled-engineering.md)
- Topic: [对抗评审与外部证据](../../topics/adversarial-review-external-evidence.md)
- Topic: [工作流优先于智能体](../../topics/workflows-before-agents.md)

[^shao-meng-amp-team-company-of-future]: Meng Shao on how the Amp team works — The Company of the Future
