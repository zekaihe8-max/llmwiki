---
type: Source
title: "每天三万次合并：Anthropic 靠「可验证证据」而非更多人工读 diff"
title_en: "30,000 daily merges: Anthropic relies on verifiable evidence, not more human diff reading"
description: "Anthropic 通过 Claude 首轮审查加端到端证据包，将日合并量从约 2500 提升至约 30000，人审证据而非逐行 diff。"
description_en: "Anthropic scaled daily merges from about 2,500 to roughly 30,000 by pairing Claude first-round review with end-to-end evidence packages, while humans review evidence rather than line-by-line diffs."
resource: https://x.com/shao__meng/status/2116887381001248970
tags: [agents, ci-cd, code-review, software-factory, verification]
sources:
  - id: x-shao-meng-2116887381001248970
    resource: https://x.com/shao__meng/status/2116887381001248970
    title: "30,000 daily merges: Anthropic relies on verifiable evidence, not more human diff reading"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-02T08:04:04+08:00
---

# 每天三万次合并：Anthropic 靠「可验证证据」而非更多人工读 diff

*30,000 daily merges: Anthropic relies on verifiable evidence, not more human diff reading*

帖文称，Anthropic 日合并量已从五月的约 2500 次提升至约 30000 次，核心做法是让 Claude 进行首轮代码审查，但必须附带端到端、浏览器、lint、测试、截图或视频等可验证证据；人工审核的是证据包，而非逐行阅读全部 diff。文中还提及 CircleCI 合并尝试约三成仍失败，以及“亮灯工厂”与“黑灯工厂”在软件交付中的光谱定位。[^x-shao-meng-2116887381001248970]

The post claims Anthropic's daily merge volume rose from about 2,500 in May to roughly 30,000, with Claude performing first-round code review only when accompanied by verifiable evidence such as end-to-end checks, browser tests, lint, tests, screenshots, or video; humans review the evidence package rather than reading every diff line. It also notes about 30% of CircleCI merge attempts still fail, and positions teams along a spectrum between "lights-on" and "lights-out" software factories.[^x-shao-meng-2116887381001248970]

## 摘要 / Summary

- Anthropic 日合并量从约 2500 提升到约 30000。 / Anthropic daily merges rose from about 2,500 to about 30,000.[^x-shao-meng-2116887381001248970]
- Claude 首轮审查需附带端到端、浏览器、lint、测试、截图/视频等证据。 / Claude first-round review must include end-to-end, browser, lint, test, screenshot, or video evidence.[^x-shao-meng-2116887381001248970]
- 人审核证据包，而非逐行看完所有 diff。 / Humans review evidence packages, not line-by-line diffs.[^x-shao-meng-2116887381001248970]
- CircleCI 约三成合并尝试仍失败。 / About 30% of CircleCI merge attempts still fail.[^x-shao-meng-2116887381001248970]
- 责任仍在发起人：kick 了 Claude 跑完，出事还是你修。 / Responsibility remains with the initiator: if you kicked off Claude, you fix issues.[^x-shao-meng-2116887381001248970]
- 2027 年底多数团队偏“亮灯 + 若干暗角”，不太可能全体暗灯。 / By end of 2027 most teams lean "lights-on + some dark corners," unlikely all lights-out.[^x-shao-meng-2116887381001248970]

## 相关 / Related

- 原文：[链接](https://x.com/shao__meng/status/2116887381001248970)。 / Original: [link](https://x.com/shao__meng/status/2116887381001248970).
- Topic: [智能体规模化工程 / Agent-scaled engineering](../../topics/agent-scaled-engineering.md)
- Topic: [软件工厂 / Software factory](../../topics/software-factory.md)
- Topic: [对抗评审与外部证据 / Adversarial review and external evidence](../../topics/adversarial-review-external-evidence.md)
- Topic: [智能体自动模式 / Agent auto mode](../../topics/agent-auto-mode.md)

[^x-shao-meng-2116887381001248970]: 30,000 daily merges: Anthropic relies on verifiable evidence, not more human diff reading
