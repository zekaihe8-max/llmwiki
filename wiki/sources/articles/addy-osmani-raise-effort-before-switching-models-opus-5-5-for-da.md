---
type: Source
title: "Addy Osmani：先加思考再换模型——Opus 5.5 日常够用，Fable 5.2 留给硬骨头"
title_en: "Addy Osmani: Raise Effort Before Switching Models — Opus 5.5 for Daily Coding, Fable 5.2 for Hard Tasks"
description: "Addy Osmani 建议以 Opus 5.5 medium 为编码日常主力，遇阻先调高 effort，仅在大型迁移、长时无人值守等真正困难任务上才上 Fable 5.2；Garry Tan 实测显示 Opus 解决率略高且单任务成本仅为 Fable 的 1/2.8。"
description_en: "Addy Osmani recommends Opus 5.5 at medium as the daily coding driver, raising effort before switching models, and reserving Fable 5.2 for genuinely hard tasks like big migrations; Garry Tan's benchmarks show Opus solves slightly more tasks at 1/2.8 the cost per solve."
resource: https://x.com/addyosmani/status/2121732470118965298
tags: [coding-agents, model-selection, claude, opus, fable, cost-efficiency]
sources:
  - id: addy-opus-fable-model-strategy
    resource: https://x.com/addyosmani/status/2121732470118965298
    title: "Addy Osmani: Raise Effort Before Switching Models — Opus 5.5 for Daily Coding, Fable 5.2 for Hard Tasks"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-16T08:49:47+08:00
---

# Addy Osmani：先加思考再换模型——Opus 5.5 日常够用，Fable 5.2 留给硬骨头

*Addy Osmani: Raise Effort Before Switching Models — Opus 5.5 for Daily Coding, Fable 5.2 for Hard Tasks*

帖文称，Addy Osmani 在 X 上分享其模型选择启发式：把 Opus 5.5（medium effort）作为 Claude Code 的编码默认模型；若受阻，先调高 effort 再考虑换模型；只有真正棘手的任务（大型迁移、长时无人值守运行）才切到 Fable 5.2。Garry Tan 引用内部 52 项编码任务实测：Opus 5.5 解决率 84.6%、Fable 5.2 为 82.7%，但 Fable 单解决任务成本是 Opus 的 2.8 倍。Addy 另附博文《Which Claude Model Should I Use?》供深度参考。[^addy-opus-fable-model-strategy]

Addy Osmani shares a model-selection heuristic on X: default to Opus 5.5 (medium effort) in Claude Code; if it struggles, raise effort before switching models; only reach for Fable 5.2 on genuinely hard tasks (big migrations, long unattended runs). Garry Tan cites internal benchmarks on 52 coding tasks: Opus 5.5 solves 84.6% vs Fable 5.2's 82.7%, yet Fable costs 2.8× more per solved task. Addy links to his blog post "Which Claude Model Should I Use?" for further guidance.[^addy-opus-fable-model-strategy]

## 摘要 / Summary

- Addy 推荐 Opus 5.5（medium effort）作为 Claude Code 编码的日常默认模型。[^addy-opus-fable-model-strategy]
- Addy recommends Opus 5.5 at medium effort as the daily default coding model in Claude Code.[^addy-opus-fable-model-strategy]
- 遇阻时应先提高 effort，而不是立即切换模型。[^addy-opus-fable-model-strategy]
- When stuck, raise effort first before switching models.[^addy-opus-fable-model-strategy]
- 仅在真正困难的任务（大型迁移、长时无人值守运行）上使用 Fable 5.2。[^addy-opus-fable-model-strategy]
- Reserve Fable 5.2 for genuinely hard tasks like big migrations and long unattended runs.[^addy-opus-fable-model-strategy]
- Garry Tan 实测 52 项编码任务：Opus 5.5 解决率 84.6%，Fable 5.2 为 82.7%。[^addy-opus-fable-model-strategy]
- Garry Tan's benchmark on 52 coding tasks: Opus 5.5 solves 84.6%, Fable 5.2 solves 82.7%.[^addy-opus-fable-model-strategy]
- Fable 5.2 单解决任务成本是 Opus 5.5 的 2.8 倍。[^addy-opus-fable-model-strategy]
- Fable 5.2 costs 2.8× more per solved task than Opus 5.5.[^addy-opus-fable-model-strategy]
- Addy 另撰博文《Which Claude Model Should I Use?》供深度参考。[^addy-opus-fable-model-strategy]
- Addy links to his blog post "Which Claude Model Should I Use?" for deeper guidance.[^addy-opus-fable-model-strategy]

## 相关 / Related

- 原文：[链接](https://x.com/addyosmani/status/2121732470118965298)。 / Original: [link](https://x.com/addyosmani/status/2121732470118965298).
- Topic: [Pro 与 Flash 模型策略 / Pro vs Flash model strategy](../../topics/pro-vs-flash-model-strategy.md)
- Topic: [面向 Agent 的模型渠道取舍 / Model provider channel tradeoffs for agents](../../topics/agent-model-channel-tradeoffs.md)
- Topic: [编程 Agent 体验与额度 / Coding agent UX vs quota](../../topics/coding-agent-ux-vs-quota.md)

[^addy-opus-fable-model-strategy]: Addy Osmani: Raise Effort Before Switching Models — Opus 5.5 for Daily Coding, Fable 5.2 for Hard Tasks
