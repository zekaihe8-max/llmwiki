---
type: Source
title: "国内 MCP/Skill 与美团实测"
title_en: "Domestic MCP/Skill and Meituan Field Test"
description: "Grok Bot 可接入瑞幸、美团、麦当劳、滴滴和高德等国内官方 MCP 与 Skill"
description_en: "Grok Bot can connect to domestic official MCP and Skill services from Luckin, Meituan, McDonald's, Didi, and Amap"
resource: https://x.com/xiaomovps/status/2116690552188260496
tags: [grok-bot, mcp, skill, china-ecosystem, ai-agent]
sources:
  - id: xiaomovps-grok-domestic-mcp-skill
    resource: https://x.com/xiaomovps/status/2116690552188260496
    title: "Domestic MCP/Skill and Meituan Field Test"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-01T20:04:51+08:00
---

# 国内 MCP/Skill 与美团实测

*Domestic MCP/Skill and Meituan Field Test*

「帖文称」Grok Bot 已能通过官方 MCP 和 Skill 打通瑞幸咖啡、美团、麦当劳中国、滴滴出行和高德地图等国内生活服务，用户可让 AI Agent 点咖啡、领外卖券、叫车或跑腿，但官方接口不等于原生集成，涉及支付仍建议人工确认。[^xiaomovps-grok-domestic-mcp-skill]

The post claims Grok Bot can now connect to domestic life services including Luckin Coffee, Meituan, McDonald's China, Didi, and Amap via official MCP and Skill, letting AI Agents order coffee, claim delivery coupons, hail rides, or run errands, though official interfaces do not equal native integration and payments should keep manual confirmation.[^xiaomovps-grok-domestic-mcp-skill]

## 摘要 / Summary

- 帖文列举 5 个国内官方 MCP/Skill：瑞幸咖啡、美团、麦当劳中国、滴滴出行、高德地图。 / The post lists five domestic official MCP/Skill services: Luckin Coffee, Meituan, McDonald's China, Didi Travel, and Amap.[^xiaomovps-grok-domestic-mcp-skill]
- 瑞幸提供 MCP + Skill + CLI 三种接入方式，支持查门店、选商品、匹配券并确认付款。 / Luckin offers MCP + Skill + CLI access, supporting store lookup, product selection, coupon matching, and payment confirmation.[^xiaomovps-grok-domestic-mcp-skill]
- 美团开放红包助手和跑腿 Skill，可领外卖券、查红包、叫骑手取快递或买商品。 / Meituan opens Red Packet Assistant and Errand Skills, allowing delivery coupon claims, red packet queries, and rider errands for packages or shopping.[^xiaomovps-grok-domestic-mcp-skill]
- 麦当劳中国 MCP 支持菜单查询、优惠领取、麦乐送、到店自取、订单查询及积分兑换，需自行申请 MCP Token。 / McDonald's China MCP supports menu queries, coupon claims, McDelivery, store pickup, order queries, and points redemption, requiring a self-applied MCP Token.[^xiaomovps-grok-domestic-mcp-skill]
- 滴滴普通版可跳转叫车，Pro 版支持直接创建和取消订单；高德 MCP 支持地点搜索、路线规划及生成专属地图。 / Didi's standard version redirects to ride-hailing, while Pro supports direct order creation and cancellation; Amap MCP supports location search, route planning, and generating exclusive maps.[^xiaomovps-grok-domestic-mcp-skill]
- 帖文提醒，官方接口不代表 Grok Bot 原生集成，涉及支付的操作最好保留人工确认。 / The post reminds that official interfaces do not mean native Grok Bot integration, and payment operations should retain manual confirmation.[^xiaomovps-grok-domestic-mcp-skill]

## 相关 / Related

- 原文：[链接](https://x.com/xiaomovps/status/2116690552188260496)。 / Original: [link](https://x.com/xiaomovps/status/2116690552188260496).
- Topic: [Agent Skill 编写 / Agent skill authoring](../../topics/agent-skill-authoring.md)
- Topic: [Agent Skills 开放标准 / Agent Skills open standard](../../topics/agent-skills-open-standard.md)
- Topic: [用 Grok Bot 内置额度桥接 Agent 查 X / Bridge agents to X via Grok Bot built-in quota](../../topics/grok-bot-x-api-substitute.md)
- Topic: [用 Skills 组合复刻原生感 App / Compose Skills to recreate native-feel apps](../../topics/skills-stack-native-app-recreation.md)

[^xiaomovps-grok-domestic-mcp-skill]: Domestic MCP/Skill and Meituan Field Test
