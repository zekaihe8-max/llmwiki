---
type: Source
title: "Mitchell · Superlogical 怎么协作"
title_en: "Mitchell · How Superlogical Collaborates"
description: "Superlogical 团队基于互信推行无 PR 直推 main、全员可切 release 及快速修复而非事前同步的协作模式。"
description_en: "Superlogical's team runs on mutual trust: direct pushes to main with limited PRs, anyone can cut releases with a 15-minute gate, and fast remediation replaces upfront synchronization."
resource: https://x.com/mitchellh/status/2120221244478083249
tags: [superlogical, collaboration, trust, software-engineering]
sources:
  - id: dc688493cf954320
    resource: https://x.com/mitchellh/status/2120221244478083249
    title: "Mitchell · How Superlogical Collaborates"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-11T08:19:34+08:00
---

# Mitchell · Superlogical 怎么协作

*Mitchell · How Superlogical Collaborates*

「帖文称」Superlogical 团队仍很小，但成员都被信任直接推送到 main，推送前进行机器辅助代码审查，推送后进行人工加机器辅助审查，PR 有限甚至没有；任何人都可触发完全自动化的发布，启动后会有 Slack 通知和 15 分钟倒计时，期间任何人可暂停，倒计时结束后无法覆盖；团队通过快速修复而非事前规划避免同步，并用事后人工审查和 AI 辅助发现跨平台功能差异，通常在 24 到 48 小时内实现对齐。所有这些仅建立在互信之上。[^dc688493cf954320]

The post says Superlogical is still small, but everyone is trusted to push directly to main, with machine-aided code review pre-push and human plus machine-aided review post-push; PRs are limited to none; anyone can trigger a fully automated release, which sends a Slack notification and starts a 15-minute countdown during which anyone can pause, after which it cannot be overridden; the team avoids synchronization through fast remediation rather than planning, using post-hoc human review and AI assistance to identify cross-platform feature mismatches, typically achieving parity within 24 to 48 hours. All of this rests solely on mutual trust.[^dc688493cf954320]

## 摘要 / Summary

- 所有人被信任直接推送到 main，推送前进行机器辅助代码审查，推送后进行人工加机器辅助审查，PR 有限甚至没有。[^dc688493cf954320]
- Everyone is trusted to push directly to main, with machine-aided code review pre-push and human plus machine-aided review post-push; PRs are limited to none.[^dc688493cf954320]
- 任何人都可触发发布，流程完全自动化，启动后会发送 Slack 通知并开启 15 分钟倒计时，期间任何人可暂停发布，倒计时结束后无法覆盖（除暂停外）。[^dc688493cf954320]
- Anyone can cut a release; the process is fully automated, triggering a Slack notification and a 15-minute countdown during which anyone can pause the rollout, after which it cannot be overridden except to pause.[^dc688493cf954320]
- 团队通过快速修复而非事前规划来避免同步，利用事后人工审查和 AI 辅助发现跨平台功能差异，通常在 24 到 48 小时内实现功能对齐。[^dc688493cf954320]
- The team avoids synchronization through fast remediation rather than planning, using post-hoc human review and AI assistance to spot cross-platform feature mismatches, typically achieving parity within 24 to 48 hours.[^dc688493cf954320]
- 所有协作仅建立在互信之上，包括直推 main 需要修复自己的问题或由他人快速修复、任何人可在合适时间切 release、跨团队快速整合彼此工作。[^dc688493cf954320]
- All collaboration rests solely on mutual trust, including fixing one's own main pushes or relying on others to do so, cutting releases at the right time, and quickly integrating teammates' work across teams.[^dc688493cf954320]

## 相关 / Related

- 原文：[链接](https://x.com/mitchellh/status/2120221244478083249)。 / Original: [link](https://x.com/mitchellh/status/2120221244478083249).
- Topic: [代码重于规格 / Code over the spec](../../topics/code-over-spec.md)
- Topic: [软件工厂 / Software factory](../../topics/software-factory.md)
- Topic: [AI 原生公司 / AI-native companies](../../topics/ai-native-companies.md)

[^dc688493cf954320]: Mitchell · How Superlogical Collaborates
