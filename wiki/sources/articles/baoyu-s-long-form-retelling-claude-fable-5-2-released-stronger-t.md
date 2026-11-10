---
type: Source
title: "宝玉长文转述：Claude Fable 5.2 发布，比 Opus 5.5 强一档，API 降价两成"
title_en: "Baoyu's long-form retelling: Claude Fable 5.2 released, stronger than Opus 5.5, API prices cut 20%"
description: "帖文转述 Anthropic 发布 Claude Fable 5.2 和 Mythos 5.2，涉及定价、订阅额度、护栏差异及多项评测与应用案例。"
description_en: "Retelling of Anthropic's release of Claude Fable 5.2 and Mythos 5.2, covering pricing, subscription quotas, guardrail differences, and multiple benchmarks and use cases."
resource: https://x.com/dotey/status/2119872207241543744
tags: [anthropic, claude, fable-5-2, ai-model, subscription]
sources:
  - id: claude-fable-5-2-release
    resource: https://x.com/dotey/status/2119872207241543744
    title: "Baoyu's long-form retelling: Claude Fable 5.2 released, stronger than Opus 5.5, API prices cut 20%"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-10T08:08:32+08:00
---

# 宝玉长文转述：Claude Fable 5.2 发布，比 Opus 5.5 强一档，API 降价两成

*Baoyu's long-form retelling: Claude Fable 5.2 released, stronger than Opus 5.5, API prices cut 20%*

帖文称，Anthropic 于 11 月 9 日发布 Claude Fable 5.2 和 Claude Mythos 5.2，官方宣称在几乎所有能力上均强于 Opus 5.5，API 价格从每百万输入/输出 Token 10/50 美元降至 8/40 美元。Max、Ultra 与 Team 高级席位的 Fable 额度包含在套餐中并额外送 1 至 3 次重置；Pro 与 Team 标准席位在 11 月 9 日至 16 日临时从套餐额度扣除，不另收费，1 次重置需在 16 日前使用。Fable 加有网络安全和生物护栏，Mythos 仅面向通过审核的机构。文中还列举了 FrontierCode、Chartography、AutomationBench 等评测，以及费马大定理 Lean 形式化、病毒衣壳结构预测、机器人控制和漏洞挖掘等案例，并注明以上数字均来自 Anthropic 自身发布文章，尚未第三方复现。[^claude-fable-5-2-release]

The post retells that Anthropic released Claude Fable 5.2 and Claude Mythos 5.2 on November 9, claiming the new models outperform Opus 5.5 on nearly all capabilities, with API prices cut from $10/$50 to $8/$40 per million input/output tokens. Max, Ultra, and Team advanced seats include Fable in the subscription plus 1–3 quota resets; Pro and Team standard seats temporarily draw from subscription quotas between Nov 9–16 with no extra charge, and one reset must be used by Nov 16. Fable has cybersecurity and biology guardrails, while Mythos is restricted to vetted institutions. The post also cites benchmarks such as FrontierCode, Chartography, and AutomationBench, and cases including Lean formalization of Fermat's Last Theorem, virus capsid structure prediction, robot control, and vulnerability discovery, noting all figures come from Anthropic's own release and have not been independently replicated.[^claude-fable-5-2-release]

## 摘要 / Summary

- 定价与订阅：帖文称 API 输入/输出价格降至每百万 Token 8/40 美元，比此前 10/50 美元低两成；Max/Ultra/Team 高级席位每周最多用一半额度用于 Fable，并按订阅时长送 1–3 次额度重置，2027 年 3 月 8 日前用完。 / Pricing and subscription: the post claims API input/output prices drop to $8/$40 per million tokens, 20% lower than the previous $10/$50; Max/Ultra/Team advanced seats may use at most half of weekly quota for Fable and receive 1–3 quota resets based on subscription length, to be used before March 8, 2027.[^claude-fable-5-2-release]
- Pro/Team 临时政策：帖文称 11 月 9 日至 16 日，Pro 与 Team 标准席位可从套餐额度中最多扣一半用于 Fable，不另收费，并送 1 次重置，需在 16 日前使用；17 日起恢复按量付费。 / Pro/Team temporary policy: the post says from Nov 9–16, Pro and Team standard seats may draw up to half of subscription quota for Fable at no extra charge, with one reset to be used by Nov 16; pay-per-use resumes on the 17th.[^claude-fable-5-2-release]
- 护栏与可用性：帖文称 Fable 加了网络安全和生物护栏，对所有付费用户开放，误拦比 5.1 少约 55%；Mythos 无此限制，仅给通过审核的机构，普通用户只能用 Fable。 / Guardrails and availability: the post says Fable adds cybersecurity and biology guardrails, open to all paying users with about 55% fewer false blocks than 5.1; Mythos has no such restriction and is only for vetted institutions, while ordinary users can only access Fable.[^claude-fable-5-2-release]
- 评测表现：帖文称在 FrontierCode 2.0 上，Fable 5.2 High 档得 45.3%，与 Opus 5.5 Max 档的 45.5% 持平但花费约一半；Xhigh 档 49.1% 为已发布模型最高；在 Chartography 上，Fable 5.2 默认 Medium 档超越 Opus 5.5 Max 档，每个任务花费不到后者十分之一。 / Benchmark performance: the post says on FrontierCode 2.0, Fable 5.2 High scores 45.3%, comparable to Opus 5.5 Max's 45.5% at about half the cost; Xhigh reaches 49.1%, the highest among released models. On Chartography, Fable 5.2 default Medium exceeds Opus 5.5 Max at less than one-tenth the per-task cost.[^claude-fable-5-2-release]
- 应用案例：帖文称 1000 个 Fable 5.2 agent 用 30 小时把费马大定理改写为 Lean 代码，Token 用量是上次的三分之一、证明短七倍；Mythos 5.2 在 34 个衣壳中有 28 个误差在 3 埃以内；RoboDojo 上 Fable 5.2 得 64.9%，高于 Opus 5.5 的 39.4%。 / Application cases: the post says 1,000 Fable 5.2 agents rewrote Fermat's Last Theorem into Lean code in 30 hours, using one-third the tokens and producing proofs seven times shorter; Mythos 5.2 achieved errors within 3 angstroms for 28 of 34 capsids; on RoboDojo, Fable 5.2 scored 64.9%, higher than Opus 5.5's 39.4%.[^claude-fable-5-2-release]
- 声明局限：帖文称以上评测数字均来自 Anthropic 自己的发布文章，第三方还没复现；Anthropic 还训练时压住了优化芯片底层计算代码、改进大模型架构等能直接加速 AI 研发的能力。 / Stated limitations: the post says all benchmark figures come from Anthropic's own release article and have not been replicated by third parties; Anthropic also trained the model to hold back capabilities that could directly accelerate AI R&D, such as optimizing low-level chip compute code and improving model architectures.[^claude-fable-5-2-release]

## 相关 / Related

- 原文：[链接](https://x.com/dotey/status/2119872207241543744)。 / Original: [link](https://x.com/dotey/status/2119872207241543744).
- Topic: [Claude 订阅风控权重 / Claude subscription risk-control weights](../../topics/claude-subscription-risk-control-weights.md)
- Topic: [面向 Agent 的模型渠道取舍 / Model provider channel tradeoffs for agents](../../topics/agent-model-channel-tradeoffs.md)
- Topic: [高端 AI 订阅价值 / Premium AI subscription value](../../topics/premium-ai-subscription-value.md)
- Topic: [LLM 形式化验证 / LLM formal verification](../../topics/llm-formal-verification.md)

[^claude-fable-5-2-release]: Baoyu's long-form retelling: Claude Fable 5.2 released, stronger than Opus 5.5, API prices cut 20%
