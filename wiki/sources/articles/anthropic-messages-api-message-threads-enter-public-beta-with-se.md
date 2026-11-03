---
type: Source
title: "Anthropic Messages API 消息线程公测，服务器缓存对话以加速响应"
title_en: "Anthropic Messages API message threads enter public beta with server-side conversation caching"
description: "Anthropic 的 Messages API 消息线程进入公测，服务器端缓存对话历史，仅发新消息和上一条消息 ID 即可让 Claude 更快回复。"
description_en: "Anthropic's Messages API message threads enter public beta, caching conversations server-side so sending only new messages and the previous message ID lets Claude respond sooner."
resource: https://x.com/ClaudeDevs/status/2117332449382510884
tags: [anthropic, messages-api, claude, api-caching, public-beta]
sources:
  - id: claude-devs-messages-api-threads-public-beta
    resource: https://x.com/ClaudeDevs/status/2117332449382510884
    title: "Anthropic Messages API message threads enter public beta with server-side conversation caching"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-03T08:03:28+08:00
---

# Anthropic Messages API 消息线程公测，服务器缓存对话以加速响应

*Anthropic Messages API message threads enter public beta with server-side conversation caching*

ClaudeDevs 在 X 上发帖称，Anthropic 的 Messages API 消息线程功能现已进入公开测试。该 API 在对话轮次之间于服务器端缓存对话，用户无需重新发送完整对话历史，只需发送新消息和之前的消息 ID，Claude 即可更快开始回复。[^claude-devs-messages-api-threads-public-beta]

ClaudeDevs posted on X that Anthropic's Messages API message threads are now in public beta. The API caches conversations on the server between turns, so users do not need to resend the full conversation history and can send only new messages and the previous message ID for Claude to start responding sooner.[^claude-devs-messages-api-threads-public-beta]

## 摘要 / Summary

- 消息线程功能现已在 Messages API 上进入公开测试。 / Message threads are now in public beta on the Messages API.[^claude-devs-messages-api-threads-public-beta]
- API 在对话轮次之间于服务器端缓存对话内容。 / The API caches your conversation on the server between turns.[^claude-devs-messages-api-threads-public-beta]
- 无需重新发送完整对话，只需发送新消息和上一条消息 ID。 / Instead of resending the full conversation, you send only new messages and the previous message ID.[^claude-devs-messages-api-threads-public-beta]
- Claude 能更快开始回复。 / Claude starts responding sooner.[^claude-devs-messages-api-threads-public-beta]
- 该帖发布于 2026 年 11 月 2 日下午 7:06，获得 323.8K 次浏览。 / The post was published at 7:06 PM on Nov 2, 2026 and received 323.8K views.[^claude-devs-messages-api-threads-public-beta]

## 相关 / Related

- 原文：[链接](https://x.com/ClaudeDevs/status/2117332449382510884)。 / Original: [link](https://x.com/ClaudeDevs/status/2117332449382510884).
- Topic: [Agent 上下文工程 / Context engineering for agents](../../topics/context-engineering-for-agents.md)
- Topic: [编程 Agent 省 Token 工具与开销 / Coding-agent token-saving tooling and overhead](../../topics/coding-agent-token-saving-tooling.md)
- Topic: [Claude Code 作者与社区话筒 / Claude Code authorship and community voice](../../topics/claude-code-authorship-and-voice.md)

[^claude-devs-messages-api-threads-public-beta]: Anthropic Messages API message threads enter public beta with server-side conversation caching
