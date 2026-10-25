---
type: Topic
title: 长对话默认压缩低于模型窗口
title_en: Long-conversation default compression below model window
description: Agent 包装层或 harness 可能默认在低于模型标称窗口的位置压缩长对话，以换首字延迟；表观「模型/Codex 上限」有时是产品默认，可用完整窗口或按模型改压缩点。
description_en: Agent wrappers or harnesses may default-compress long chats below the model’s nominal window to protect first-token latency; an apparent “model/Codex cap” can be a product default, with a full-window or per-model compression setting.
tags: [context, compression, magpie, workbuddy, latency, harness, long-conversation]
sources:
  - id: yetone-workbuddy-1m-magpie-272k
    resource: https://x.com/yetone/status/2114231150709547338
    title: yetone on WorkBuddy DeepSeek 1M vs magpie’s default 272K compression
generated:
  by: cursor-agent/composer
  at: 2026-10-25T20:38:17+08:00
---

# 长对话默认压缩低于模型窗口

*Long-conversation default compression below model window*

模型或渠道标称百万级上下文，并不等于会话工具默认把整窗交给模型：包装层可能在更低阈值主动压缩长对话，以换更稳的首字延迟；用户看到的「到顶」数字，有时是产品默认，而非底层 Codex/模型上限。[^yetone-workbuddy-1m-magpie-272k]

A model or channel advertising a million-token context does not mean the session tool always feeds the full window: a wrapper may proactively compress long conversations at a lower threshold to keep first-token latency stable; the “ceiling” users see can be a product default, not the underlying Codex or model limit.[^yetone-workbuddy-1m-magpie-272k]

## 综合分析 / Synthesis

[yetone 谈 WorkBuddy DeepSeek 1M 与 magpie 默认 272K 压缩](../sources/articles/yetone-workbuddy-1m-magpie-272k.md) 给出 Magpie 作者侧一例：[@yetone](https://x.com/yetone) 称不是 Codex 的问题——WorkBuddy 的 DeepSeek V4.1 实际是 1M；magpie 默认让 Codex 在 272K 处压缩长对话（Codex 显示约 258K），避免上下文太长时首字很慢；要用满 1M 走「设置 → 长对话 → 完整窗口」，或只给该模型单独设压缩位置。[^yetone-workbuddy-1m-magpie-272k] 原帖 <https://x.com/yetone/status/2114231150709547338>。证据覆盖归因（包装默认 vs Codex）、默认阈值与 UI 显示差、延迟动机，以及可改设置——未给出压缩算法细节或延迟测量。

[yetone on WorkBuddy DeepSeek 1M vs magpie’s default 272K compression](../sources/articles/yetone-workbuddy-1m-magpie-272k.md) is one Magpie-author case: [@yetone](https://x.com/yetone) says it is not a Codex problem—WorkBuddy’s DeepSeek V4.1 is actually 1M; magpie by default has Codex compress long chats at 272K (Codex shows ~258K) to avoid slow first tokens when context is too long; full 1M use goes through Settings → Long conversation → “完整窗口” (full window), or a per-model compression point.[^yetone-workbuddy-1m-magpie-272k] Post: <https://x.com/yetone/status/2114231150709547338>. Evidence covers attribution (wrapper default vs Codex), the default threshold vs UI display, the latency motive, and a changeable setting—not compression algorithm detail or latency measurements.

与 [超越 token 数的 Harness 对比](./harness-comparison-beyond-tokens.md) 中 WorkBuddy 同题实测相邻但不相同：那边比成品与执行组织，本页谈的是会话工具是否默认切短有效上下文。与 [项目指令与 Token 效率](./agents-md-token-efficiency.md)、[编程 Agent 省 Token 工具与开销](./coding-agent-token-saving-tooling.md) 同属「少塞或压缩上下文」，但切面是长对话产品默认阈值，而非 `AGENTS.md` 规则或外围过滤工具。

Adjacent to—but distinct from—the WorkBuddy same-prompt hands-on in [Harness comparison beyond tokens](./harness-comparison-beyond-tokens.md): that page compares finished quality and run organization; this page is whether the session tool default-shortens effective context. It shares a “less context / compress context” family with [Project instructions and token efficiency](./agents-md-token-efficiency.md) and [Coding-agent token-saving tooling and overhead](./coding-agent-token-saving-tooling.md), but the cut is a long-conversation product default threshold, not `AGENTS.md` rules or peripheral filter tools.

## 矛盾与变化 / Contradictions

暂无。 / None yet.

## 相关 / Related

- Source: [yetone 谈 WorkBuddy DeepSeek 1M 与 magpie 默认 272K 压缩](../sources/articles/yetone-workbuddy-1m-magpie-272k.md)
- Topic: [超越 token 数的 Harness 对比](./harness-comparison-beyond-tokens.md)
- Topic: [项目指令与 Token 效率](./agents-md-token-efficiency.md)
- Topic: [编程 Agent 省 Token 工具与开销](./coding-agent-token-saving-tooling.md)

[^yetone-workbuddy-1m-magpie-272k]: yetone on WorkBuddy DeepSeek 1M vs magpie’s default 272K compression
