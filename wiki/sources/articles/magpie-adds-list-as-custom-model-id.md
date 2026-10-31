---
type: Source
title: "Magpie 新增「列为」模型自定义 ID"
title_en: "Magpie Adds 'List As' Custom Model ID"
description: "Magpie v0.1.2345 让用户在供应商编辑页为模型自定义 ID（列为），路由与分组使用自定义 ID，转发请求仍保留原 ID。"
description_en: "Magpie v0.1.2345 lets users assign a custom 'List As' ID to each model on the supplier edit page; routing and grouping use the custom ID while relayed requests keep the original ID."
resource: https://x.com/yetone/status/2116439277395726836
tags: [magpie, model-alias, model-routing, llm]
sources:
  - id: yetone-magpie-model-alias-v0-1-2345
    resource: https://x.com/yetone/status/2116439277395726836
    title: "Magpie Adds 'List As' Custom Model ID"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-10-31T20:21:12+08:00
---

# Magpie 新增「列为」模型自定义 ID

*Magpie Adds 'List As' Custom Model ID*

帖文称，yetone 于 2026 年 10 月 31 日发布 Magpie v0.1.2345，在供应商编辑页的「名称与级别」中为每个模型增加「列为」字段，用户可填写自定义 ID（例如把 grok-4.6@500k 列为 grok-4.6）。此后 Magpie 的模型列表、路由、分组均采用自定义 ID，发给中转的请求仍使用原 ID；命令行同样支持 `magpie model id <供应商/模型> <你的 id>`。[^yetone-magpie-model-alias-v0-1-2345]

The post says yetone released Magpie v0.1.2345 on October 31, 2026, adding a 'List As' field to each model under the supplier edit page's 'Name and Level,' allowing users to set a custom ID (e.g., listing grok-4.6@500k as grok-4.6). Magpie's model list, routing, and grouping then use the custom ID, while requests sent to the relay still use the original ID; the CLI command `magpie model id <supplier/model> <your id>` is also supported.[^yetone-magpie-model-alias-v0-1-2345]

## 摘要 / Summary

- v0.1.2345 在供应商编辑页 › 名称与级别 里每个模型新增「列为」字段。[^yetone-magpie-model-alias-v0-1-2345]
- v0.1.2345 adds a 'List As' field to every model on the supplier edit page > Name and Level.[^yetone-magpie-model-alias-v0-1-2345]
- 用户可填自己的 id，例如把 grok-4.6@500k 列为 grok-4.6。[^yetone-magpie-model-alias-v0-1-2345]
- Users can enter their own ID, such as listing grok-4.6@500k as grok-4.6.[^yetone-magpie-model-alias-v0-1-2345]
- 设置后，magpie 的模型列表、路由、分组都使用自定义 id。[^yetone-magpie-model-alias-v0-1-2345]
- After setting, Magpie's model list, routing, and grouping use the custom ID.[^yetone-magpie-model-alias-v0-1-2345]
- 发给中转的请求仍是原 id。[^yetone-magpie-model-alias-v0-1-2345]
- Requests sent to the relay/proxy still use the original ID.[^yetone-magpie-model-alias-v0-1-2345]
- 命令行可用：`magpie model id <供应商/模型> <你的id>`。[^yetone-magpie-model-alias-v0-1-2345]
- CLI is also available: `magpie model id <supplier/model> <your id>`.[^yetone-magpie-model-alias-v0-1-2345]

## 相关 / Related

- 原文：[链接](https://x.com/yetone/status/2116439277395726836)。 / Original: [link](https://x.com/yetone/status/2116439277395726836).
- Topic: [面向 Agent 的模型渠道取舍 / Model provider channel tradeoffs for agents](../../topics/agent-model-channel-tradeoffs.md)
- Topic: [云平台 Auto 跨模型编排 / Cloud Auto cross-model routing](../../topics/cloud-auto-model-routing.md)
- Topic: [多 Harness 路由基建 ≠ 个人助手派活 / Multi-harness routing infra ≠ personal-assistant dispatch](../../topics/multi-harness-router-vs-personal-dispatch.md)

[^yetone-magpie-model-alias-v0-1-2345]: Magpie Adds 'List As' Custom Model ID
