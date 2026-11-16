---
type: Source
title: "Antigravity 额度掉得有点怪"
title_en: "Antigravity Quota Dropping Strangely"
description: "Google Antigravity 用户反馈额度异常掉落，作者建议通过监控插件排查并向 Google 反馈。"
description_en: "Google Antigravity users report abnormal quota drops; the author suggests using monitoring plugins to investigate and report to Google."
resource: https://x.com/xiaomovps/status/2122219169907413379
tags: [agents, antigravity, quota, google-ai]
sources:
  - id: antigravity-quota-drop-strange
    resource: https://x.com/xiaomovps/status/2122219169907413379
    title: "Antigravity Quota Dropping Strangely"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-16T20:14:41+08:00
---

# Antigravity 额度掉得有点怪

*Antigravity Quota Dropping Strangely*

「帖文称」Google Antigravity（AGY）近期出现额度异常消耗，许多 Pro、Ultra 用户明明未大量使用，额度却突然掉了一大截，甚至关闭客户端后仍在继续扣减。作者目前不确定是 Google 额度统计问题还是上下文缓存计算异常，并推荐 AG Usage 与 Antigravity Panel 两款监控插件，建议检查后台 Agent 状态、减少 Orchestrator 切换并定期记录额度变化向 Google 反馈。[^antigravity-quota-drop-strange]

The post claims Google Antigravity (AGY) recently experienced abnormal quota consumption, with many Pro and Ultra users seeing sudden large drops despite little usage, and continued deduction even after closing the client. The author is unsure whether it is a Google quota statistics issue or a context cache calculation anomaly, and recommends AG Usage and Antigravity Panel monitoring plugins, advising checks on background Agent status, reduced Orchestrator switching, and regular quota change records for feedback to Google.[^antigravity-quota-drop-strange]

## 摘要 / Summary

- 「帖文称」Google Antigravity（AGY）近期出现额度异常消耗，部分 Pro、Ultra 用户在未大量使用的情况下额度突然大幅下降，甚至关闭客户端后仍在继续扣减。[^antigravity-quota-drop-strange]
- The post claims Google Antigravity (AGY) recently showed abnormal quota consumption, with some Pro and Ultra users experiencing sudden large drops without heavy use, and continued deduction even after closing the client.[^antigravity-quota-drop-strange]
- 作者目前无法确定是 Google 额度统计问题还是上下文缓存计算异常。[^antigravity-quota-drop-strange]
- The author cannot currently determine whether it is a Google quota statistics issue or a context cache calculation anomaly.[^antigravity-quota-drop-strange]
- 作者推荐两款额度监控插件：AG Usage（VS Code 状态栏查看模型剩余额度、5 小时和每周限制并记录历史）以及开源的 Antigravity Panel（可查看 Gemini、Claude、GPT 额度、消耗趋势和上下文状态）。[^antigravity-quota-drop-strange]
- The author recommends two quota monitoring plugins: AG Usage (view model remaining quota, 5-hour and weekly limits in VS Code status bar and record history) and open-source Antigravity Panel (view Gemini, Claude, GPT quotas, consumption trends, and context status).[^antigravity-quota-drop-strange]
- 建议缓解措施包括检查并停止卡在 Working 状态的后台 Agent、减少频繁切换 Orchestrator 和使用 /btw、定期截图记录额度变化并带日志向 Google 反馈。[^antigravity-quota-drop-strange]
- Suggested mitigations include checking and stopping background Agents stuck in Working status, reducing frequent Orchestrator switching and /btw usage, regularly screenshotting quota changes, and providing logs to Google for feedback.[^antigravity-quota-drop-strange]
- Google 尚未给出所有额度异常的统一解决方案，且不建议通过清理本地缓存来尝试恢复额度。[^antigravity-quota-drop-strange]
- Google has not provided a unified solution for all quota anomalies and does not recommend clearing local cache to attempt quota recovery.[^antigravity-quota-drop-strange]

## 相关 / Related

- 原文：[链接](https://x.com/xiaomovps/status/2122219169907413379)。 / Original: [link](https://x.com/xiaomovps/status/2122219169907413379).
- Topic: [编程 Agent 体验与额度 / Coding agent UX vs quota](../../topics/coding-agent-ux-vs-quota.md)
- Topic: [编程 Agent 省 Token 工具与开销 / Coding-agent token-saving tooling and overhead](../../topics/coding-agent-token-saving-tooling.md)
- Topic: [Agent 上下文工程 / Context engineering for agents](../../topics/context-engineering-for-agents.md)
- Topic: [用量上限 A/B 测试 / Usage limit A/B tests](../../topics/usage-limit-ab-tests.md)

[^antigravity-quota-drop-strange]: Antigravity Quota Dropping Strangely
