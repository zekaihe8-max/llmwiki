---
type: Source
title: 小邓同学谈以检索代替上下文压缩
title_en: heydengai on retrieval instead of context compaction
description: 小邓同学主张保留完整会话并按需检索，转述约 40 万 token 会话的恢复耗时与费用比较，但抓取正文未提供完整测试方法。
description_en: heydengai advocates retaining full sessions for on-demand retrieval and relays recovery-time and cost comparisons for roughly 400,000 tokens, without full test methodology in the fetched text.
resource: https://x.com/heydengai/status/2116019898422083808
tags: [context-engineering, retrieval, compaction, memory]
sources:
  - id: heydengai-retrieval-instead-of-compaction
    resource: https://x.com/heydengai/status/2116019898422083808
    title: heydengai on retrieval instead of compaction
    author: human:heydengai
generated:
  by: codex/gpt-6
  at: 2026-10-30T20:49:16+08:00
---

# 小邓同学谈以检索代替上下文压缩

*heydengai on retrieval instead of context compaction*

## 摘要 / Summary

小邓同学质疑 Claude Code 与 Codex 的上下文压缩方向，提出保留完整会话、需要时再检索，而不是依赖摘要恢复记忆。该帖引用 Alexander Yue 的帖文；抓取中的英文片段只展示了重新读取会话、生成摘要、从摘要开启新会话的压缩流程，随后在约 40 万 token 的测试介绍处截断。[^heydengai-retrieval-instead-of-compaction]

heydengai questions context compaction in Claude Code and Codex, proposing retention of full sessions for on-demand retrieval rather than relying on summaries to restore memory. The post quotes Alexander Yue; the fetched English fragment describes rereading the session, generating a summary, and starting a new session from it, then cuts off while introducing a roughly 400,000-token test.[^heydengai-retrieval-instead-of-compaction]

中文正文将测试标为 Opus 5.5、40 万 token 会话：缓存失效压缩为 38 秒 / $1.99，缓存命中压缩为 29 秒 / $0.17，按需检索恢复为 15 秒 / $0.10。作者据此主张检索更快、更便宜，并能避免摘要丢失关键细节。[^heydengai-retrieval-instead-of-compaction]

The Chinese text labels the test as an Opus 5.5 session of 400,000 tokens: compaction with a cache miss took 38 seconds / $1.99, compaction with a cache hit took 29 seconds / $0.17, and on-demand retrieval recovery took 15 seconds / $0.10. The author argues that retrieval is faster and cheaper and avoids losing key details in summaries.[^heydengai-retrieval-instead-of-compaction]

证据边界：上述数字是帖文转述；抓取正文未给出完整测试方法、检索实现、重复次数或恢复后任务质量对照。保存全文与成功找回相关细节仍需区分，这组数字不能证明检索在所有任务中优于压缩，也不能确立当前产品行为。[^heydengai-retrieval-instead-of-compaction]

Evidence limits: these numbers are relayed by the post; the fetched text supplies no full methodology, retrieval implementation, repetition count, or comparison of subsequent task quality. Retaining full text must be distinguished from successfully retrieving relevant details; these figures do not establish retrieval’s superiority for every task or current product behavior.[^heydengai-retrieval-instead-of-compaction]

## 相关 / Related

- [原帖 / Original post](https://x.com/heydengai/status/2116019898422083808)
- [Agent 上下文工程 / Context engineering for agents](../../topics/context-engineering-for-agents.md)
- [长对话默认压缩低于模型窗口 / Long-conversation default compression below model window](../../topics/long-conversation-default-compression.md)

[^heydengai-retrieval-instead-of-compaction]: heydengai on retrieval instead of compaction
