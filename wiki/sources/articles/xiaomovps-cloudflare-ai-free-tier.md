---
type: Source
title: 小墨谈 Cloudflare AI 免费额度与玩法
title_en: Xiaomo on Cloudflare AI free tiers and usage
description: 小墨整理 Cloudflare 免费账户可用的 AI 能力：Browser Run（日 10 分钟、3 并发）、AI Search（月 500 万索引 Token 等）、Workers AI 日 1 万 Neurons、免费 AI Gateway 分析/缓存/限流，以及 PiHarness 把 Pi Durable 跑在 Durable Objects 上；并提醒 11 月 1 日起 AI Search 超额计费、Gateway 不免背后 GPT/Claude 费用、云端 Pi 非完整 Linux CLI 原样迁移。
description_en: Xiaomo catalogs AI capabilities on a free Cloudflare account—Browser Run (10 minutes/day, three concurrent browsers), AI Search (5M indexing tokens/month among other quotas), Workers AI (10,000 Neurons/day), free AI Gateway analytics/cache/rate limits, and PiHarness running Pi Durable on Durable Objects—and warns AI Search overage billing from November 1, Gateway does not make GPT/Claude calls free, and cloud Pi is not a full local Pi CLI lift-and-shift.
resource: https://x.com/xiaomovps/status/2115683808033001567
tags: [cloudflare, agents, pi, browser-run, workers-ai, ai-search, free-tier, xiaomovps]
sources:
  - id: xiaomovps-cloudflare-ai-free-tier
    resource: https://x.com/xiaomovps/status/2115683808033001567
    title: Xiaomo on Cloudflare AI free tiers and usage
    author: human:xiaomovps
generated:
  by: cursor-agent/composer-2.5
  at: 2026-10-29T20:38:00+08:00
date: 2026-10-29
---

# 小墨谈 Cloudflare AI 免费额度与玩法

*Xiaomo on Cloudflare AI free tiers and usage*

[@xiaomovps](https://x.com/xiaomovps)（小墨同学）称 Cloudflare 又有一批 AI 相关「羊毛」可薅：在以往免费玩法基础上，官方 AI 能力近期更新不少，他花时间整理了**普通免费账户**可用的功能与额度，认为其中几项对个人开发者折腾小项目很实用。[^xiaomovps-cloudflare-ai-free-tier] 原帖 <https://x.com/xiaomovps/status/2115683808033001567>。

[@xiaomovps](https://x.com/xiaomovps) (Xiaomo) says Cloudflare has another batch of AI-related free-tier wins: on top of prior free patterns, official AI features recently expanded, and he compiled what a **standard free account** can use—several items he finds practical for indie developers tinkering on small projects.[^xiaomovps-cloudflare-ai-free-tier] Post: <https://x.com/xiaomovps/status/2115683808033001567>.

## 摘要 / Summary

- **Browser Run**：免费账户每天 **10 分钟**浏览器运行、最多 **3** 个并发；可用于 Agent 网页自动化、截图、网页转 PDF、抓取内容，无需自维护 Chromium；用法是登录 Cloudflare、创建带 Browser Run 权限的 API Token 后通过 API 调用。[^xiaomovps-cloudflare-ai-free-tier]
- **Browser Run**: free accounts get **10 minutes/day** of browser runtime, up to **three** concurrent browsers—for agent web automation, screenshots, page-to-PDF, and scraping without self-hosting Chromium; create a Cloudflare API Token with Browser Run permission and call via API.[^xiaomovps-cloudflare-ai-free-tier]
- **AI Search**：每月免费 **500 万 Token**文档索引、**10GB** 存储、**1000** 次语义搜索与 **1000** 次全文搜索；创建实例、在 Items 上传文档、索引完成后在 Playground 测试；作者认为适合整理个人技术资料，并可通过 **MCP** 接入 Agent。[^xiaomovps-cloudflare-ai-free-tier]
- **AI Search**: monthly free **5M tokens** of document indexing, **10GB** storage, **1000** semantic and **1000** full-text searches; create an instance, upload items, test in Playground after indexing; he finds it good for personal tech notes and **MCP** hookup to agents.[^xiaomovps-cloudflare-ai-free-tier]
- **Workers AI**：每天免费 **10,000 Neurons**，可调用部分开源模型；控制台或 API 接入项目，但**并非所有模型都免费**——部分 DeepSeek、GLM、Kimi 新模型需付费权限。[^xiaomovps-cloudflare-ai-free-tier]
- **Workers AI**: **10,000 Neurons/day** free on select open models via dashboard or API—not **all** models; some newer DeepSeek, GLM, and Kimi models need paid access.[^xiaomovps-cloudflare-ai-free-tier]
- **AI Gateway**：免费提供 API 调用分析、缓存与限流；可把自有模型 API 接入统一看用量——**Gateway 本身免费不代表背后 GPT、Claude 等调用免费**。[^xiaomovps-cloudflare-ai-free-tier]
- **AI Gateway**: free analytics, caching, and rate limits for your model APIs—**a free gateway does not make GPT/Claude calls free**.[^xiaomovps-cloudflare-ai-free-tier]
- **Pi on Cloudflare**：Cloudflare 原生支持 **PiHarness**，Pi Durable 可跑在 **Durable Objects** 上；Workers 日免费 **10 万**请求，Durable Objects 与 Workers AI 另有免费额度；可用官方 Agents SDK 示例搭配免费模型试**无需常驻 VPS** 的轻量云端 Agent——但**不是**把本地 Pi CLI 原样搬上去，完整 Linux 执行环境仍需额外资源。[^xiaomovps-cloudflare-ai-free-tier]
- **Pi on Cloudflare**: native **PiHarness** lets Pi Durable run on **Durable Objects**; **100k** free Worker requests/day plus separate DO and Workers AI free tiers; official Agents SDK samples with free models can try a lightweight cloud agent **without an always-on VPS**—yet **not** a one-to-one local Pi CLI port; full Linux execution still needs extra resources.[^xiaomovps-cloudflare-ai-free-tier]
- **计费提醒**：**AI Search** 自 **11 月 1 日**起对超出免费额度的用量计费；AI 生成回答与外部模型也可能单独收费。作者仍推荐免费账户重点试 **AI Search** 与 **Browser Run**。[^xiaomovps-cloudflare-ai-free-tier]
- **Billing note**: **AI Search** bills overage **from November 1**; AI-generated answers and external models may charge separately. He still recommends free accounts lean into **AI Search** and **Browser Run**.[^xiaomovps-cloudflare-ai-free-tier]

## 相关 / Related

- Topic: [精简核心与社区扩展](../../topics/minimal-core-community-extensions.md)
- Topic: [个人 Agent 云环境的备份、隔离与定时检查](../../topics/personal-agent-cloud-env-pitfalls.md)
- Topic: [Computer Use](../../topics/computer-use.md)
- Topic: [可编程边缘计算](../../topics/programmable-edge-compute.md)
- Source: [小墨谈 Pi 五个分支项目](./xiaomovps-pi-five-branch-projects.md)
- Source: [小墨谈 Pi Agent 六个隐藏设置](./xiaomovps-pi-agent-six-hidden-settings.md)

[^xiaomovps-cloudflare-ai-free-tier]: Xiaomo on Cloudflare AI free tiers and usage
