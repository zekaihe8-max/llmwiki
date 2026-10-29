---
type: Source
title: 铁柱AGI谈闲鱼 Gemini Pro 赠金跑 Argon
title_en: cgnot996 on Xianyu Gemini Pro credits for Gemini 4 Argon on Pi Agent
description: 铁柱AGI（@cgnot996）称闲鱼约 5 块买的 Gemini AI Pro 也能在命令行走 Gemini 4 Argon：Google 开发者计划每月约 10 美元赠金、闲鱼号同样有；需 AI Studio 付费层、Cloud Prepay 预付余额大于 0 与付费项目 API Key，再用 Grok Bot 把 Argon 配到 Pi Agent（agy 继续用 Gemini 3.8 Flash）。
description_en: cgnot996 (@cgnot996) says ~$5 Xianyu Gemini AI Pro subs can run Gemini 4 Argon from the CLI too—Google Developer Program about $10/month credits apply to resale subs as well; requires AI Studio paid tier, Cloud Prepay balance above zero, and a paid-project API key, then Grok Bot to wire Argon on Pi Agent while agy keeps Gemini 3.8 Flash.
resource: https://x.com/cgnot996/status/2115647822087544957
tags: [gemini, google-ai-studio, developer-program, credits, pi-agent, grok-bot, cgnot996, argon, subscription]
sources:
  - id: cgnot996-gemini-pro-developer-credits-argon
    resource: https://x.com/cgnot996/status/2115647822087544957
    title: cgnot996 on Xianyu Gemini Pro credits for Gemini 4 Argon on Pi Agent
    author: human:cgnot996
generated:
  by: cursor-agent/composer-2.5
  at: 2026-10-29T21:10:00+08:00
date: 2026-10-29
---
<!-- Same-file bilingual (project extension): title + title_en, description + description_en, bilingual section headings. Pair ZH then EN as adjacent paragraphs/bullets, or same-line `中文。 / English.`. Shared code/URLs/wiki links are not translations; product names alone do not count as English. Format check ≠ translation quality. -->

# 铁柱AGI谈闲鱼 Gemini Pro 赠金跑 Argon

*cgnot996 on Xianyu Gemini Pro credits for Gemini 4 Argon on Pi Agent*

[@cgnot996](https://x.com/cgnot996)（铁柱AGI）称找到了让闲鱼约 **5 块**买的 **Gemini AI Pro** 也能在命令行用 **Gemini 4 Argon** 的办法：**Gemini AI Pro 每月约 $10 赠金**，闲鱼买的也有；可在 [me.developers.google.com/benefits](https://me.developers.google.com/benefits) 查看赠金额度。他从 3 月起已攒 **$70** 赠金（约港币 468），有过期时间、此前一直没用上。帖文给出六步：AI Studio 结算页确认 **付费层**（`aistudio.google.com/billing`，Free 则 Upgrade 绑卡）；同一 Billing 页开 **Cloud Prepay** 并充 **$5**（预付余额为 **$0** 时符合条件的赠金停用、API **402**；有余额后先扣赠金再扣预付，赠金用完前一般不动预付本金）；在 Billing 确认 **Credits / 符合条件的 GCP 赠金**（他侧约 HK$468、多笔 Google Developer Program monthly、状态可用；**Free Trial 过期的那笔不能给 Gemini API 用**）；用挂在付费结算账号上的项目 Key（`aistudio.google.com/api-keys`，**不要**仍挂在 Free 的项目）；Google 账号配置完成后让 **Grok Bot** 把 Argon 配到 **Pi Agent**（**不要**直接配在 agy 上，以免影响 agy 继续用 **Gemini 3.8 Flash**）——提示词示例：提供 Google AI Studio Key，帮配到 pi agent、没有则下载、测试 argon 是否可用。作者用 Argon 跑了「鹈鹕骑自行车」测试，称效果不错。[^cgnot996-gemini-pro-developer-credits-argon] 原帖见 <https://x.com/cgnot996/status/2115647822087544957>。

[@cgnot996](https://x.com/cgnot996) says he found a way for **~$5 Xianyu** **Gemini AI Pro** subs to use **Gemini 4 Argon** from the command line too: **about $10/month** in credits on Gemini AI Pro, resale subs included; check balances at [me.developers.google.com/benefits](https://me.developers.google.com/benefits). Since March he has accumulated **$70** in credits (~HK$468) with expiry—unused until then. The post lists six steps: confirm **paid tier** on AI Studio billing (`aistudio.google.com/billing`; if Free, Upgrade with a card); on the same Billing page enable **Cloud Prepay** and top up **$5** (**$0** prepay balance disables eligible credits and yields API **402**; with balance, credits spend first then prepay, and prepay principal usually stays untouched until credits run out); confirm **Credits / eligible GCP credits** in Billing (his ~HK$468 across Google Developer Program monthly entries, available; **expired Free Trial credit cannot pay Gemini API**); use a project key on the paid billing account (`aistudio.google.com/api-keys`, **not** a project still on Free); after Google-side setup, have **Grok Bot** wire Argon on **Pi Agent** (**not** directly on agy, so agy can keep **Gemini 3.8 Flash**)—example prompt: supply the Google AI Studio key, configure pi agent (install if missing), test argon. He ran a “pelican riding a bicycle” test with Argon and says results were good.[^cgnot996-gemini-pro-developer-credits-argon] Post: <https://x.com/cgnot996/status/2115647822087544957>.

## 摘要 / Summary

- 主张：闲鱼低价 Gemini AI Pro 与正价一样有 **Google 开发者计划 monthly 赠金**（约 $10/月），应用 CLI/API 前先查 [benefits](https://me.developers.google.com/benefits)，别浪费过期赠金。[^cgnot996-gemini-pro-developer-credits-argon]
- Claim: low-price Xianyu Gemini AI Pro still gets **Google Developer Program monthly credits** (~$10/month); check [benefits](https://me.developers.google.com/benefits) before CLI/API use and do not let expiring credits sit idle.[^cgnot996-gemini-pro-developer-credits-argon]
- 计费门槛：AI Studio **付费层** + Cloud Prepay **余额 > 0**（帖中充 $5）；赠金先消耗，Free 项目 Key 走不到这套；过期 Free Trial 赠金不能用于 Gemini API。[^cgnot996-gemini-pro-developer-credits-argon]
- Billing gates: AI Studio **paid tier** plus Cloud Prepay **balance > 0** ($5 top-up in the post); credits spend first; Free-project keys miss this path; expired Free Trial credit cannot fund Gemini API.[^cgnot996-gemini-pro-developer-credits-argon]
- 编排：用 Grok Bot 把 **Argon** 配到 **Pi Agent**，agy 继续 **Gemini 3.8 Flash**；作者自测 Argon 生成（鹈鹕骑自行车）。[^cgnot996-gemini-pro-developer-credits-argon]
- Orchestration: Grok Bot wires **Argon** on **Pi Agent** while agy keeps **Gemini 3.8 Flash**; author self-tested Argon generation (pelican on a bicycle).[^cgnot996-gemini-pro-developer-credits-argon]

## 相关 / Related

- Topic: [高端 AI 订阅价值](../../topics/premium-ai-subscription-value.md)
- Topic: [面向 Agent 的模型渠道取舍](../../topics/agent-model-channel-tradeoffs.md)
- Topic: [个人 Agent 当包工头调度编程 Agent](../../topics/personal-agent-foreman-over-coding-agents.md)
- Source: [铁柱AGI谈任意 Agent 可指挥 Grok Bot](./cgnot996-any-agent-command-grok-bot.md)

[^cgnot996-gemini-pro-developer-credits-argon]: cgnot996 on Xianyu Gemini Pro credits for Gemini 4 Argon on Pi Agent
