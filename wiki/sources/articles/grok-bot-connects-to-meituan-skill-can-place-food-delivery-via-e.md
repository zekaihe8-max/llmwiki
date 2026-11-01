---
type: Source
title: "Grok Bot 接入美团 Skill，可通过跑腿代下外卖"
title_en: "Grok Bot Connects to Meituan Skill, Can Place Food Delivery via Errand Running"
description: "小墨同学演示 Grok Bot 安装美团 Skill 后，可通过美团跑腿代下蜜雪冰城订单，并指出国内服务正逐步开放 MCP 与 Skill。"
description_en: "Xiaomovps demonstrates Grok Bot installing a Meituan Skill to place Mixue Bingcheng orders via Meituan errand running, noting that domestic services are gradually opening MCP and Skill access."
resource: https://x.com/xiaomovps/status/2116738186168991921
tags: [grok-bot, meituan, ai-agent, skill, mcp, food-delivery]
sources:
  - id: grok-bot-meituan-skill-food-delivery
    resource: https://x.com/xiaomovps/status/2116738186168991921
    title: "Grok Bot Connects to Meituan Skill, Can Place Food Delivery via Errand Running"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-01T20:05:24+08:00
---

# Grok Bot 接入美团 Skill，可通过跑腿代下外卖

*Grok Bot Connects to Meituan Skill, Can Place Food Delivery via Errand Running*

帖文称，Grok Bot 已能通过安装美团 Skill 点外卖，用户只需发送 Skill 地址、扫码授权，即可让 AI 根据默认收货地址寻找附近商店并下单。博主以蜜雪冰城测试，发现实际走的是美团跑腿，会按距离计算跑腿费，且下单需手机号验证。帖文还提到美团、高德等国内服务开始为 Grok Bot 提供 Skill 和 MCP，生活服务正逐步交给 AI Agent 完成。[^grok-bot-meituan-skill-food-delivery]

The post claims Grok Bot can now order takeout by installing a Meituan Skill: users send the Skill address, scan to authorize, and the AI finds nearby stores based on the default delivery address. The blogger tested with Mixue Bingcheng and found the order is actually fulfilled via Meituan errand running, with distance-based errand fees and phone-number verification at checkout. The post also says Meituan, Gaode and other domestic services are beginning to offer Skills and MCP for Grok Bot, making daily tasks increasingly delegable to AI agents.[^grok-bot-meituan-skill-food-delivery]

## 摘要 / Summary

- 安装步骤：直接把美团 Skill 地址发给 Grok Bot，让它自己安装对应的 Skill。 / Installation: send the Meituan Skill address to Grok Bot and let it install the Skill itself.[^grok-bot-meituan-skill-food-delivery]
- 授权方式：安装完成后出现授权码，打开美团 APP 扫码授权。 / Authorization: after installation, an authorization code appears; open the Meituan App to scan and authorize.[^grok-bot-meituan-skill-food-delivery]
- 下单方式：授权完成后，让 Grok Bot 根据默认收货地址寻找附近商店并下单。 / Ordering: after authorization, ask Grok Bot to find nearby stores based on the default delivery address and place orders.[^grok-bot-meituan-skill-food-delivery]
- 测试商家：博主以蜜雪冰城测试，基本上没有什么问题。 / Test merchant: the blogger tested with Mixue Bingcheng, with basically no issues.[^grok-bot-meituan-skill-food-delivery]
- 实际渠道：并非正常的美团外卖下单，而是通过美团跑腿帮你买东西，按商家距离计算跑腿费用。 / Actual channel: not normal Meituan food delivery, but Meituan errand running to buy items, with errand fees calculated by merchant distance.[^grok-bot-meituan-skill-food-delivery]
- 额外要求：下单时还需要进行一次手机号码验证。 / Additional requirement: phone number verification is required when placing the order.[^grok-bot-meituan-skill-food-delivery]
- 生态扩展：美团、高德等国内服务也开始提供 Skill 和 MCP，可让 Grok Bot 调用。 / Ecosystem expansion: Meituan, Gaode and other domestic services are starting to provide Skills and MCP for Grok Bot to call.[^grok-bot-meituan-skill-food-delivery]

## 相关 / Related

- 原文：[链接](https://x.com/xiaomovps/status/2116738186168991921)。 / Original: [link](https://x.com/xiaomovps/status/2116738186168991921).
- Topic: [Agent Skills 开放标准 / Agent Skills open standard](../../topics/agent-skills-open-standard.md)
- Topic: [Agent Skill 编写 / Agent skill authoring](../../topics/agent-skill-authoring.md)
- Topic: [用 Grok Bot 内置额度桥接 Agent 查 X / Bridge agents to X via Grok Bot built-in quota](../../topics/grok-bot-x-api-substitute.md)
- Topic: [AI 助力本地小生意 / AI-assisted local businesses](../../topics/ai-assisted-local-businesses.md)

[^grok-bot-meituan-skill-food-delivery]: Grok Bot Connects to Meituan Skill, Can Place Food Delivery via Errand Running
