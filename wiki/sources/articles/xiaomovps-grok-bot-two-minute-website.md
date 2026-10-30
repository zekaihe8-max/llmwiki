---
type: Source
title: 小墨用 Grok Bot 两分钟上线网站
title_en: Xiaomo launches a website with Grok Bot in two minutes
description: 小墨分享 Grok Bot 整理帖子、开发网站并发布到 Cloudflare Workers 的个案，GitHub 可选用于版本恢复，R2 超额可能收费。
description_en: Xiaomo shares a Grok Bot workflow for turning posts into a website on Cloudflare Workers, with optional GitHub version recovery and possible R2 overage charges.
resource: https://x.com/xiaomovps/status/2116055718424097085
tags: [grok-bot, personal-agents, website, cloudflare, workers, github, mobile]
sources:
  - id: xiaomovps-grok-bot-two-minute-website
    resource: https://x.com/xiaomovps/status/2116055718424097085
    title: Xiaomo launches a website with Grok Bot in two minutes
    author: human:xiaomovps
generated:
  by: codex/gpt-6
  at: 2026-10-30T20:23:00+08:00
---

# 小墨用 Grok Bot 两分钟上线网站

*Xiaomo launches a website with Grok Bot in two minutes*

## 摘要 / Summary

小墨称自己用 Grok Bot 将此前的高赞帖子整理成网站，从开发到上线全程只花两分钟；文章描述的是作者的操作个案，没有提供可复现的计时条件、测试结果或生产可靠性验证。作者也称可换用其他 Personal Agent，但未展示替代产品的操作结果。[^xiaomovps-grok-bot-two-minute-website]

Xiaomo reports using Grok Bot to turn earlier popular posts into a website, taking only two minutes from development to launch. This is the author's workflow account, without reproducible timing conditions, test results, or production reliability verification. The author says other personal agents could substitute, but does not demonstrate their results.[^xiaomovps-grok-bot-two-minute-website]

- 先在 Grok Bot 的应用中授权 Cloudflare 和可选的 GitHub：前者用于部署，后者用于代码管理。让 Bot 整理内容、创建项目并开发网站；如需代码持久化与版本恢复，再把代码放到 GitHub。[^xiaomovps-grok-bot-two-minute-website]
- First authorize Cloudflare and optionally GitHub in Grok Bot's apps: the former handles deployment and the latter code management. Ask the bot to organize content, create a project, and build the site; store code on GitHub if persistence and version recovery are wanted.[^xiaomovps-grok-bot-two-minute-website]

- 作者让 Bot 通过 Cloudflare Workers 发布网站，称免费套餐足够基础部署、邮箱即可注册账号；图片或视频可选用 R2，但开通需绑定信用卡，超出免费额度可能收费。这是文章的套餐描述，不是对当前价格或无限免费使用的核验。[^xiaomovps-grok-bot-two-minute-website]
- The author has the bot publish through Cloudflare Workers, saying the free plan covers basic deployment and an email is sufficient for account registration. R2 is optional for images or video, requires a credit card to enable, and may incur overage charges. These are the article's plan descriptions, not verification of current prices or unlimited free use.[^xiaomovps-grok-bot-two-minute-website]

- Cloudflare 会分配默认域名；如需自定义域名，作者建议购买后让 Bot 配置绑定。作者还将 GitHub 管理 Bot 与网站开发 Bot 拆开并分发任务，认为手机上也能完成上线；正文未给出这种分工相对单 Bot 的速度收益。[^xiaomovps-grok-bot-two-minute-website]
- Cloudflare provides a default domain; for a custom domain, the author suggests purchasing one and having the bot bind it. The author also separates GitHub management and website development into different bots and dispatches tasks, saying deployment can be completed from a phone; the body does not establish a speed advantage over a single bot.[^xiaomovps-grok-bot-two-minute-website]

## 相关 / Related

- 原文：[Grok Bot 上线一个网站有多简单？](https://x.com/xiaomovps/status/2116055718424097085)。 / Original: [How easy is launching a website with Grok Bot?](https://x.com/xiaomovps/status/2116055718424097085).
- Topic: [手机端 Agent 全链路开发 / Mobile-first agent full-chain development](../../topics/mobile-agent-dev-full-chain.md)

[^xiaomovps-grok-bot-two-minute-website]: Xiaomo on launching a website with Grok Bot in two minutes
