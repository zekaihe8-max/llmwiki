---
type: Topic
title: 对抗评审与外部证据
title_en: Adversarial review and external evidence
description: 约束模型产出时，用专攻「证明你错了」的对抗线程加独立 judge，并优先外部信号；勿让同一会话当自己工作的法官。
description_en: Constrain model outputs with critique threads whose job is “prove you wrong,” plus an independent judge, and prefer external signals—do not let the same session judge its own work.
tags: [adversarial-review, hallucination, evaluation, agents, external-evidence]
sources:
  - id: shao-meng-felix-not-2024-claude-usage
    resource: https://x.com/shao__meng/status/2113970197161988276
    title: Meng Shao relays Felix—stop using Claude the 2024 way
generated:
  by: cursor-agent/composer
  at: 2026-10-25T20:10:00+08:00
---
<!-- Same-file bilingual (project extension): title + title_en, description + description_en, bilingual section headings, ZH then EN body pairs. Proper nouns / product names / APIs / resource URLs stay in their common form. Do not invent facts; translate existing claims faithfully. -->

# 对抗评审与外部证据

*Adversarial review and external evidence*

防幻觉与质量控制的实用默认，不是让产出会话自评，而是另开对抗线程专攻找错，再用独立 judge 筛哪些批评成立，并把外部信号（另一会话、真实指标、一手来源）置于同会话法官之上。[^shao-meng-felix-not-2024-claude-usage]

A practical default for anti-hallucination and quality control is not same-session self-grading, but separate adversarial threads that hunt for errors, an independent judge that keeps only valid critiques, and external signals (another session, real metrics, primary sources) over the producing session as judge.[^shao-meng-felix-not-2024-claude-usage]

## 综合分析 / Synthesis

[邵萌转述 Felix：别再用 2024 方式用 Claude](../sources/articles/shao-meng-felix-not-2024-claude-usage.md) 转述 Felix Rieseberg：对同一产出（文章、PPT）开多条线程专攻「证明你错了」——事实、逻辑、误解——再开一条做 judge，筛哪些批评成立；成立的反馈可回原会话，原会话也可判断是否采纳。找茬往往比创造容易，对抗侧有时可用略弱模型。[^shao-meng-felix-not-2024-claude-usage] 原帖 <https://x.com/shao__meng/status/2113970197161988276>。

[Meng Shao relays Felix—stop using Claude the 2024 way](../sources/articles/shao-meng-felix-not-2024-claude-usage.md) relays Felix Rieseberg: for one artifact (article, deck), open threads whose job is “prove you wrong”—facts, logic, misunderstanding—then a judge thread that keeps only valid critiques; feed those back to the original session, which may still decide whether to adopt them. Critique is often easier than creation, so the adversarial side can use a slightly weaker model.[^shao-meng-felix-not-2024-claude-usage] Post: <https://x.com/shao__meng/status/2113970197161988276>.

信任边界写得很清楚：更不信同一个会话自评；当前会话当自己工作的法官仍很不靠谱，应尽量找外部信号。事实核查一类他敢信单线程——找一手来源、验来源质量。任务类型也分：自己完全不懂好坏 → 多砸 token/多轮 AI；自己能当「甲方」判断观感 → 观感即可。反馈闭环还可在 Slack/GitHub 等处给工具权限，让模型自己汇集反馈 → 压成原则 → 再挖「你以为信、实际未必信」的原则，用于后续评审。[^shao-meng-felix-not-2024-claude-usage]

The trust boundary is clear: distrust same-session self-evaluation; the producing session as judge of its own work is still unreliable—prefer external signals. For fact-checking he trusts a single thread that finds primary sources and checks source quality. Task types also split: when you cannot judge quality at all → more tokens / more AI rounds; when you can act as the client on feel → feel is enough. Feedback loops can also grant tool access in Slack/GitHub so the model gathers feedback → compresses principles → digs for principles you think you believe but may not, for later review.[^shao-meng-felix-not-2024-claude-usage]

这与「评好要看过程与可验证性、而非看起来对」同向：瞎猜天气碰巧对不及格；差半度但定位、信源、路径靠谱更好。写作侧则是放大论点、找最强反驳，而不是只让模型润色段落。[^shao-meng-felix-not-2024-claude-usage]

This aligns with judging “good” by process and verifiability, not “looks right”: a lucky weather guess fails; being half a degree off with sound location, sources, and path is better. On writing, amplify the thesis and find the strongest rebuttal rather than only asking the model to polish a paragraph.[^shao-meng-felix-not-2024-claude-usage]

## 矛盾与变化 / Contradictions

暂无。 / None yet.

## 相关 / Related

- Source: [邵萌转述 Felix：别再用 2024 方式用 Claude](../sources/articles/shao-meng-felix-not-2024-claude-usage.md)
- Topic: [把子 Agent 折进主循环](./fold-subagents-into-main-loop.md)
- Topic: [智能体规模化工程](./agent-scaled-engineering.md)
- Topic: [社区实测对抗刷分碰瓷](./community-evals-vs-score-hype.md)

[^shao-meng-felix-not-2024-claude-usage]: Meng Shao relays Felix—stop using Claude the 2024 way
