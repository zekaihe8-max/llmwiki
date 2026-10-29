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
  - id: shao-meng-amp-team-company-of-future
    resource: https://x.com/shao__meng/status/2115647666160029715
    title: Meng Shao on how the Amp team works — The Company of the Future
  - id: financeyf5-anthropic-analyst-agent-deference
    resource: https://x.com/FinanceYF5/status/2115698963919884666
    title: AI Will on Anthropic’s analyst–agent deference experiment
generated:
  by: cursor-agent/composer-2.5
  at: 2026-10-29T21:22:00+08:00
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

[邵萌谈 Amp 团队「未来公司」工作法](../sources/articles/shao-meng-amp-team-company-of-future.md) 把「可验证过程 > 看起来对」落到发布门禁：口头禅是先让 Agent 给出端到端不可辩驳的证据——测试矩阵、数据流、截图/录屏——再决定要不要人读代码；热路径才抠性能与结构。这不是 Felix 式多线程「证明你错了 + judge」，而是 **单一 Agent 产出可检验工件** 作为合并前默认；仍与「勿让产出会话自评过关」同向，因证据类型（测试、流量、录屏）意在独立于作者口头把握。修 bug 链仍有人确认再发。[^shao-meng-amp-team-company-of-future] 原帖 <https://x.com/shao__meng/status/2115647666160029715>；组织语境见 [智能体规模化工程](./agent-scaled-engineering.md)。

[Meng Shao on how the Amp team works — The Company of the Future](../sources/articles/shao-meng-amp-team-company-of-future.md) lands “process and verifiability over looks right” on the release gate: the mantra is agent-produced end-to-end irrefutable evidence—test matrices, data flows, screenshots/recordings—before deciding whether a human reads code; performance and structure only on hot paths. This is not Felix’s multi-thread “prove you wrong + judge,” but **one agent’s inspectable artifacts** as the default pre-merge bar; still aligned with distrusting same-session self-grade, because evidence types (tests, flows, recordings) aim to stand apart from the author’s verbal confidence. The bug-fix chain still has a human confirm before ship.[^shao-meng-amp-team-company-of-future] Post: <https://x.com/shao__meng/status/2115647666160029715>; org context under [Agent-scaled engineering](./agent-scaled-engineering.md).

[AI Will 转述 Anthropic 分析师随智能体倾向实验](../sources/articles/financeyf5-anthropic-analyst-agent-deference.md) 从**人类 judge 侧**补动机：专业分析师委托智能体后，约 86% 决策跟随智能体预设倾向且许多人未察觉——同一协作里「我觉得我在把关」不足以当外部证据；与 Felix 线「勿让产出会话自评」同向，实证详述见 [专家决策跟随智能体预设](./expert-decisions-follow-agent-presets.md)。[^financeyf5-anthropic-analyst-agent-deference] 原帖 <https://x.com/FinanceYF5/status/2115698963919884666>。

[AI Will on Anthropic’s analyst–agent deference experiment](../sources/articles/financeyf5-anthropic-analyst-agent-deference.md) adds **human-judge-side** motivation: after professionals delegate to agents, about 86% of decisions followed preset tendencies and many did not notice—“I feel I’m in charge” in the same collaboration is not external evidence; aligned with Felix’s distrust of same-session self-grade; empirical detail under [Expert decisions following agent presets](./expert-decisions-follow-agent-presets.md).[^financeyf5-anthropic-analyst-agent-deference] Post: <https://x.com/FinanceYF5/status/2115698963919884666>.

## 矛盾与变化 / Contradictions

暂无。 / None yet.

## 相关 / Related

- Source: [邵萌转述 Felix：别再用 2024 方式用 Claude](../sources/articles/shao-meng-felix-not-2024-claude-usage.md)
- Source: [邵萌谈 Amp 团队「未来公司」工作法](../sources/articles/shao-meng-amp-team-company-of-future.md)
- Source: [AI Will 转述 Anthropic 分析师随智能体倾向实验](../sources/articles/financeyf5-anthropic-analyst-agent-deference.md)
- Topic: [专家决策跟随智能体预设](./expert-decisions-follow-agent-presets.md)
- Topic: [把子 Agent 折进主循环](./fold-subagents-into-main-loop.md)
- Topic: [智能体规模化工程](./agent-scaled-engineering.md)
- Topic: [社区实测对抗刷分碰瓷](./community-evals-vs-score-hype.md)

[^shao-meng-felix-not-2024-claude-usage]: Meng Shao relays Felix—stop using Claude the 2024 way
[^shao-meng-amp-team-company-of-future]: Meng Shao on how the Amp team works — The Company of the Future
[^financeyf5-anthropic-analyst-agent-deference]: AI Will on Anthropic’s analyst–agent deference experiment
