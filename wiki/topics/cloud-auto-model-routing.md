---
type: Topic
title: 云平台 Auto 跨模型编排
title_en: Cloud Auto cross-model routing
description: 按任务把作业/请求路由到更合适模型的 Auto 路径，既可出现在云平台模型选择器（如 Gemini 编排 Gemini 与 Claude），也可出现在可安装的第三方路由产品（如 AutoRouter），公开目标常是兼顾质量与成本。
description_en: Auto paths that route each job or request to a better-fit model by task show up both in cloud model pickers (e.g. Gemini orchestrating Gemini and Claude) and in installable third-party routers (e.g. AutoRouter); stated goals are often quality plus lower cost.
tags: [google-cloud, gemini, claude, auto, model-routing, multi-model, autorouter]
sources:
  - id: google-cloud-auto-model-picker
    resource: https://x.com/googlecloud/status/2114431803394048151
    title: Google Cloud model picker Auto
  - id: dingyi-autorouter
    resource: https://x.com/dingyi/status/2115095929892348219
    title: Ding on AutoRouter routing models by task
generated:
  by: cursor-agent/composer
  at: 2026-10-28T22:04:00+08:00
---

# 云平台 Auto 跨模型编排

*Cloud Auto cross-model routing*

「Auto」可按任务把作业或每一轮请求编排到更合适的模型，以兼顾质量与成本：云平台可在模型选择器提供 Auto（如由 Gemini 跨 Gemini、Claude 及未来私有/开源模型编排）；也可出现在可安装的第三方路由产品（如 AutoRouter「装一次、账单减半」）。用户不必手选单一模型，但交付面（云选择器 vs 独立安装产品）与编排方不同。[^google-cloud-auto-model-picker][^dingyi-autorouter]

“Auto” can route each job or request round to a better-fit model by task for quality and cost: cloud platforms may offer Auto in the model picker (e.g. Gemini orchestrating across Gemini, Claude, and later private or open models); the same pitch also shows up in installable third-party routers (e.g. AutoRouter’s “install once, cut your AI bill in half”). Users need not hand-pick one model, but the delivery surface (cloud picker vs standalone install) and who orchestrates differ.[^google-cloud-auto-model-picker][^dingyi-autorouter]

## 综合分析 / Synthesis

[Google Cloud 模型选择器 Auto](../sources/articles/google-cloud-auto-model-picker.md) 称：选 Auto 后，Gemini 按任务编排到最合适的模型，覆盖 Gemini 与 Claude，并预告以后接更多领先私有与开源模型，以交付最优质量并降低成本。[^google-cloud-auto-model-picker] 原帖 <https://x.com/googlecloud/status/2114431803394048151>。

[Google Cloud model picker Auto](../sources/articles/google-cloud-auto-model-picker.md) says selecting Auto lets Gemini run each job on the best-fit model, orchestrating across Gemini and Claude and, later, other leading private and open models, for optimal quality and lower cost.[^google-cloud-auto-model-picker] Post: <https://x.com/googlecloud/status/2114431803394048151>.

[Ding 谈 AutoRouter 按任务路由模型](../sources/articles/dingyi-autorouter.md) 给出云选择器之外的一例：AutoRouter 按任务把每一轮请求路由到更合适的模型，宣传「装一次、AI 账单减半」，Ding 另夸页内小动画；帖文未给出路由细节或实测账单。[^dingyi-autorouter] 原帖 <https://x.com/dingyi/status/2115095929892348219>。本页收的是「按任务 Auto 换模型 + 成本/质量话术」的观察层；动画喜好只是旁注，不展开产品评测。

[Ding on AutoRouter routing models by task](../sources/articles/dingyi-autorouter.md) is a case outside the cloud picker: AutoRouter routes each request round to a better-fit model by task, pitches “install once, cut your AI bill in half,” and Ding also likes the in-page animations; the post gives no routing detail or measured bills.[^dingyi-autorouter] Post: <https://x.com/dingyi/status/2115095929892348219>. This page keeps the observation layer—**task Auto model swap + cost/quality pitch**; animation liking is an aside, not a product review.

与 [Google Cloud 上的 Claude](./claude-on-google-cloud.md) 相邻：彼页谈 Claude 在 GCP 上的托管可用与 IAM/计费对接；本页谈平台把 Claude（及其他模型）收进 Auto 编排路径，以及同类按任务路由在第三方产品上的出现。与 [多 Harness 路由基建 ≠ 个人助手派活](./multi-harness-router-vs-personal-dispatch.md) 不同轴：彼页是多个 harness 挂同一 API；本页是按任务换**模型**（云选择器或独立路由产品）。与 [面向 Agent 的模型渠道取舍](./agent-model-channel-tradeoffs.md) 也不同：彼页是同一模型族下换供应商/套餐；本页是代选跨模型（或跨厂商模型）。勿与 [智能体自动模式](./agent-auto-mode.md) 混淆——那是权限自动检查，不是模型选择器 / Auto 路由。

Adjacent to [Claude on Google Cloud](./claude-on-google-cloud.md): that page is Claude’s managed availability and IAM/billing on GCP; this page is the platform folding Claude (and peers) into an Auto routing path, plus the same per-task routing pitch on third-party products. A different axis from [Multi-harness routing infra ≠ personal-assistant dispatch](./multi-harness-router-vs-personal-dispatch.md): that page hangs many harnesses on one API; this page swaps **models** by task (cloud picker or standalone router). Also distinct from [Model provider channel tradeoffs for agents](./agent-model-channel-tradeoffs.md): that page swaps providers/packages under one model family; this page is chosen cross-model (or cross-vendor) routing. Do not confuse with [Agent auto mode](./agent-auto-mode.md)—that is permission auto-checks, not model-picker / Auto routing.

## 矛盾与变化 / Contradictions

Google Cloud 的 Auto 嵌在云模型选择器、由平台侧（Gemini）编排；Ding 所链 AutoRouter 以可安装第三方产品自述「装一次、账单减半」——同属按任务换模型的成本/质量话术，但交付面与编排方不同，并非互相否定。 / Google Cloud’s Auto sits in a cloud model picker with platform-side (Gemini) orchestration; Ding’s linked AutoRouter self-describes as an installable third-party that “cuts the bill in half”—same per-task model-swap cost/quality pitch, different delivery surface and orchestrator, not a mutual negation.

## 相关 / Related

- Source: [Google Cloud 模型选择器 Auto](../sources/articles/google-cloud-auto-model-picker.md)
- Source: [Ding 谈 AutoRouter 按任务路由模型](../sources/articles/dingyi-autorouter.md)
- Topic: [Google Cloud 上的 Claude](./claude-on-google-cloud.md)
- Topic: [多 Harness 路由基建 ≠ 个人助手派活](./multi-harness-router-vs-personal-dispatch.md)
- Topic: [面向 Agent 的模型渠道取舍](./agent-model-channel-tradeoffs.md)
- Topic: [智能体自动模式](./agent-auto-mode.md)

[^google-cloud-auto-model-picker]: Google Cloud model picker Auto
[^dingyi-autorouter]: Ding on AutoRouter routing models by task
