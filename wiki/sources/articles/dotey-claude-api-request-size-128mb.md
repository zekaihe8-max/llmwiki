---
type: Source
title: 宝玉解读 Claude API 单次请求上限增至 128 MB
title_en: Dotey on Claude API request size increasing to 128 MB
description: 宝玉转述 Claude API 的 Messages 与 Token Counting 请求上限由 32 MB 增至 128 MB，并说明多图尺寸放宽及云渠道限制。
description_en: Dotey relays the Claude API Messages and Token Counting request limit increase from 32 MB to 128 MB, larger multi-image dimensions, and cloud-channel limits.
resource: https://x.com/dotey/status/2115968852349567254
tags: [claude, api, computer-use, context-engineering, images, pdf]
sources:
  - id: dotey-claude-api-request-size-128mb
    resource: https://x.com/dotey/status/2115968852349567254
    title: Dotey on Claude API request size increasing to 128 MB
    author: human:dotey
generated:
  by: codex/gpt-6
  at: 2026-10-30T20:06:36+08:00
---

# 宝玉解读 Claude API 单次请求上限增至 128 MB

*Dotey on Claude API request size increasing to 128 MB*

宝玉在[原帖](https://x.com/dotey/status/2115968852349567254)中转述 ClaudeDevs 公告：Anthropic 官方 Claude API 的 Messages 与 Token Counting 单次请求上限从 32 MB 增至 128 MB，缓解截图密集的 computer use 与大 PDF 在上下文窗口尚有余量时先碰到请求体上限的问题。[^dotey-claude-api-request-size-128mb]

In the [original post](https://x.com/dotey/status/2115968852349567254), Dotey relays a ClaudeDevs announcement: the Anthropic Claude API increases its per-request limit for Messages and Token Counting from 32 MB to 128 MB, easing request-body bottlenecks for screenshot-heavy computer use and large PDFs while context capacity remains available.[^dotey-claude-api-request-size-128mb]

## 摘要 / Summary

图片编码进请求后的字节大小与模型使用的 token 数不同；帖文解释，连续截图可能先耗尽请求体额度，这次增加约四倍空间，并非扩大模型上下文窗口或宣布 Claude App 聊天限制变化。[^dotey-claude-api-request-size-128mb]

Encoded image bytes in a request differ from the model's token usage; the post explains that successive screenshots can exhaust the request-body allowance first. The change provides roughly four times the space, rather than enlarging model context windows or announcing changes to Claude App chat limits.[^dotey-claude-api-request-size-128mb]

按帖文，超过 20 张图的请求中，每张图的长宽上限从 2000 提至 3000 像素；20 张以内不受该规则限制，单图最大仍为 8000×8000。帖文另称 Claude 4.7 及之后模型的可辨识长边为 2576 像素，因此上传尺寸上限与模型可利用的图像精度仍应区分。[^dotey-claude-api-request-size-128mb]

According to the post, requests with more than 20 images raise each image's width and height limit from 2000 to 3000 pixels; requests with at most 20 images are outside that rule, with a single-image maximum still at 8000×8000. It also reports a 2576-pixel discernible long edge for Claude 4.7 and later, so upload dimensions and usable model image detail remain distinct.[^dotey-claude-api-request-size-128mb]

128 MB 仅适用于 Anthropic 官方 API。帖文列出 Bedrock 为 20 MB、Google 托管 Claude 为 30 MB、Claude Platform on AWS、Google Cloud 上 Anthropic 托管版本及 Microsoft Foundry 为 32 MB；公告不含价格变化，费用仍按实际 token 用量计。[^dotey-claude-api-request-size-128mb]

The 128 MB limit applies only to Anthropic's own API. The post lists Bedrock at 20 MB, Google-managed Claude at 30 MB, and Claude Platform on AWS, Anthropic-managed Claude on Google Cloud, and Microsoft Foundry at 32 MB; it reports no announced price change, with billing still based on actual token usage.[^dotey-claude-api-request-size-128mb]

帖文还区分 Message Batches（256 MB）、Files API（500 MB）与 Sessions、Agents、Environments（32 MB），并称超限返回 413。以上是该帖的规格转述，不是本页独立核验的文档或任务完成率测试；请求体扩大本身不证明长任务更可靠。[^dotey-claude-api-request-size-128mb]

The post also distinguishes Message Batches (256 MB), Files API (500 MB), and Sessions, Agents, and Environments (32 MB), and says oversized requests return 413. These are specifications relayed by the post, rather than documentation independently verified here or task-completion tests; larger request bodies alone do not establish greater long-task reliability.[^dotey-claude-api-request-size-128mb]

## 相关 / Related

- [Computer Use](../../topics/computer-use.md)
- [Agent 上下文工程 / Context engineering for agents](../../topics/context-engineering-for-agents.md)
- [Google Cloud 上的 Claude / Claude on Google Cloud](../../topics/claude-on-google-cloud.md)

[^dotey-claude-api-request-size-128mb]: Dotey on Claude API request size increasing to 128 MB
