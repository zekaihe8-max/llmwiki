---
type: Source
title: "开源 AI 交易组合：Kronos + day-trader-skill"
title_en: "Open Source AI Trading Portfolio: Kronos + day-trader-skill"
description: "Kronos 负责 K 线行情预测，day-trader-skill 负责 Claude 日内交易执行，两者组成开源交易组合。"
description_en: "Kronos handles K-line market prediction while day-trader-skill handles Claude-based intraday trading execution, forming an open-source trading combo."
resource: https://x.com/Gorden_Sun/status/2117141523645235538
tags: [agents, trading, open-source, claude]
sources:
  - id: ad1566c09900dc99
    resource: https://x.com/Gorden_Sun/status/2117141523645235538
    title: "Open Source AI Trading Portfolio: Kronos + day-trader-skill"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-02T20:31:26+08:00
---

# 开源 AI 交易组合：Kronos + day-trader-skill

*Open Source AI Trading Portfolio: Kronos + day-trader-skill*

Gorden Sun 在 X 上发布中英文帖文，介绍开源 AI 交易组合 Kronos 与 day-trader-skill。「帖文称」Kronos 是专门用金融 K 线数据训练的基座模型，可输入历史价格与成交量来预测未来分钟级 K 线走势分布；day-trader-skill 是给 Claude 用的日内交易工具包，涵盖全市场扫盘、突发新闻抓取、盘中走势模拟、仓位计算、风控检查及券商下单。该帖还引用 carm1nee 的说法，称这两个 GitHub 仓库是当下交易领域「最破组合」，并对比了 Citadel 量化研究员的年薪区间。[^ad1566c09900dc99]

Gorden Sun posted on X in Chinese and English introducing an open-source AI trading portfolio combining Kronos and day-trader-skill. The post claims Kronos is a base model trained on financial K-line data that takes historical price and volume to predict future minute-level K-line distributions, while day-trader-skill is a Claude day-trading toolkit covering market scanning, news fetching, intraday simulation, position sizing, risk checks, and broker order placement. It also quotes carm1nee calling the two GitHub repos the "most BROKEN combo in trading right now" and compares them to Citadel quant researcher salaries.[^ad1566c09900dc99]

## 摘要 / Summary

- 帖文由 Gorden Sun 发布，主题为开源 AI 交易组合：Kronos + day-trader-skill。 / The post by Gorden Sun introduces an open-source AI trading portfolio: Kronos + day-trader-skill.[^ad1566c09900dc99]
- Kronos 负责行情预测，是一个用金融 K 线数据训练的基座模型，输入历史价格和成交量，预测未来一段时间的 K 线走势分布。 / Kronos handles market prediction as a base model trained on financial K-line data, taking historical price and volume to predict future K-line trend distributions.[^ad1566c09900dc99]
- day-trader-skill 负责交易执行，是一套给 Claude 用的日内交易工具包，包含全市场扫盘、抓取突发新闻、盘中走势模拟、仓位计算、风控检查以及券商下单。 / day-trader-skill handles trading execution as a Claude day-trading toolkit including full-market scanning, breaking-news fetching, intraday trend simulation, position calculation, risk-control checks, and broker order placement.[^ad1566c09900dc99]
- 使用流程为：先用 day-trader-skill 扫描市场并排查新闻筛选标的，再调用 Kronos 预测分钟级 K 线走势，预测理想则由 day-trader-skill 根据本金计算买入股数与止损位并生成待确认订单。 / The workflow is to first use day-trader-skill to scan markets and news to select targets, then call Kronos to predict minute-level K-line trends; if the prediction is ideal, day-trader-skill calculates share quantity and stop-loss based on capital and generates orders for confirmation.[^ad1566c09900dc99]
- 帖文引用 carm1nee 的话称这两个 GitHub 仓库是「交易领域当下最破组合」，并提及 Citadel 量化研究员年薪为 3.36 万至 6.42 万美元。 / The post quotes carm1nee calling the two GitHub repos the "most BROKEN combo in trading right now" and mentions Citadel quant researchers earn $336K to $642K per year.[^ad1566c09900dc99]

## 相关 / Related

- 原文：[链接](https://x.com/Gorden_Sun/status/2117141523645235538)。 / Original: [link](https://x.com/Gorden_Sun/status/2117141523645235538).
- Topic: [Agent Skill 编写 / Agent skill authoring](../../topics/agent-skill-authoring.md)
- Topic: [Agent Skills 开放标准 / Agent Skills open standard](../../topics/agent-skills-open-standard.md)
- Topic: [工作流优先于智能体 / Workflows before agents](../../topics/workflows-before-agents.md)
- Topic: [近实时决策 API / Near real-time decisions API](../../topics/near-real-time-decisions-api.md)

[^ad1566c09900dc99]: Open Source AI Trading Portfolio: Kronos + day-trader-skill
