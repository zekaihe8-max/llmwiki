---
type: Topic
title: 长对话默认压缩低于模型窗口
title_en: Long-conversation default compression below model window
description: Agent 包装层或 harness 的长对话压缩默认值常与模型标称窗口错位——可在低于窗口处提前压以换首字延迟，也可在小窗口模型上预留过大导致压缩失败；表观「上限」或「压不动」有时是产品默认，可改完整窗口、按模型压缩点，或调 Compaction / 手动 /compact。
description_en: Agent wrappers or harnesses often misalign long-chat compression defaults with the model’s nominal window—compressing early below the window for first-token latency, or reserving too much headroom on small-window models so compression fails; an apparent “cap” or “won’t compact” can be a product default, fixable via full-window or per-model compression points, Compaction tuning, or manual /compact.
tags: [context, compression, magpie, workbuddy, latency, harness, long-conversation, dsh, compact]
sources:
  - id: yetone-workbuddy-1m-magpie-272k
    resource: https://x.com/yetone/status/2114231150709547338
    title: yetone on WorkBuddy DeepSeek 1M vs magpie’s default 272K compression
  - id: xiaomovps-dsh-three-pitfalls
    resource: https://x.com/xiaomovps/status/2115270974811812111
    title: Xiaomo on three DeepSeek Harness desktop pitfalls
generated:
  by: cursor-agent/composer
  at: 2026-10-28T21:05:00+08:00
---

# 长对话默认压缩低于模型窗口

*Long-conversation default compression below model window*

模型或渠道标称上下文，并不等于会话工具默认把整窗交给模型或总能压得动：包装层可能在更低阈值主动压缩长对话以换更稳的首字延迟，也可能在小窗口模型上把压缩预留设得过大而导致压缩失败；用户看到的「到顶」或「压不动」，有时是产品默认，而非底层模型硬限。[^yetone-workbuddy-1m-magpie-272k][^xiaomovps-dsh-three-pitfalls]

A model or channel’s nominal context does not mean the session tool always feeds the full window or that compression always succeeds: a wrapper may proactively compress long chats at a lower threshold to keep first-token latency stable, or set too large a compaction reserve on small-window models so compression fails; the “ceiling” or “won’t compact” users see can be a product default, not a hard model limit.[^yetone-workbuddy-1m-magpie-272k][^xiaomovps-dsh-three-pitfalls]

## 综合分析 / Synthesis

[yetone 谈 WorkBuddy DeepSeek 1M 与 magpie 默认 272K 压缩](../sources/articles/yetone-workbuddy-1m-magpie-272k.md) 给出 Magpie 作者侧一例：[@yetone](https://x.com/yetone) 称不是 Codex 的问题——WorkBuddy 的 DeepSeek V4.1 实际是 1M；magpie 默认让 Codex 在 272K 处压缩长对话（Codex 显示约 258K），避免上下文太长时首字很慢；要用满 1M 走「设置 → 长对话 → 完整窗口」，或只给该模型单独设压缩位置。[^yetone-workbuddy-1m-magpie-272k] 原帖 <https://x.com/yetone/status/2114231150709547338>。证据覆盖归因（包装默认 vs Codex）、默认阈值与 UI 显示差、延迟动机，以及可改设置——未给出压缩算法细节或延迟测量。

[yetone on WorkBuddy DeepSeek 1M vs magpie’s default 272K compression](../sources/articles/yetone-workbuddy-1m-magpie-272k.md) is one Magpie-author case: [@yetone](https://x.com/yetone) says it is not a Codex problem—WorkBuddy’s DeepSeek V4.1 is actually 1M; magpie by default has Codex compress long chats at 272K (Codex shows ~258K) to avoid slow first tokens when context is too long; full 1M use goes through Settings → Long conversation → “完整窗口” (full window), or a per-model compression point.[^yetone-workbuddy-1m-magpie-272k] Post: <https://x.com/yetone/status/2114231150709547338>. Evidence covers attribution (wrapper default vs Codex), the default threshold vs UI display, the latency motive, and a changeable setting—not compression algorithm detail or latency measurements.

[小墨谈 DSH 桌面端三坑](../sources/articles/xiaomovps-dsh-three-pitfalls.md) 给出 DeepSeek Harness（DSH）桌面侧对侧一例：长会话 Token 越积越多、压缩失败时，最简单是对话框输入 `/compact` 手动触发；社区还发现 96K、128K 一类小窗口模型上，默认压缩预留空间可能过大，需再调 Agent 预设里的 Compaction 参数。[^xiaomovps-dsh-three-pitfalls] 原帖 <https://x.com/xiaomovps/status/2115270974811812111>。与 magpie「大窗被默认切短」同属产品默认与模型窗口错位，方向相反——小窗上预留过大导致压不动。本页不收 OpenCode Session 或第三方插件启动冲突。

[Xiaomo on three DeepSeek Harness desktop pitfalls](../sources/articles/xiaomovps-dsh-three-pitfalls.md) is a DeepSeek Harness (DSH) desktop foil: when long-session Tokens keep growing and compression fails, the simplest fix is typing `/compact` in chat; the community also finds that on small-window models such as 96K/128K the default compaction reserve may be too large, so further tune Compaction in the Agent preset.[^xiaomovps-dsh-three-pitfalls] Post: <https://x.com/xiaomovps/status/2115270974811812111>. Same family as magpie’s “large window default-shortened,” opposite direction—too much reserve on a small window so compaction fails. This page does not own OpenCode Session or third-party plugin boot conflicts.

与 [超越 token 数的 Harness 对比](./harness-comparison-beyond-tokens.md) 中 WorkBuddy 同题实测相邻但不相同：那边比成品与执行组织，本页谈的是会话工具压缩默认是否与模型窗口错位。与 [项目指令与 Token 效率](./agents-md-token-efficiency.md)、[编程 Agent 省 Token 工具与开销](./coding-agent-token-saving-tooling.md) 同属「少塞或压缩上下文」，但切面是长对话产品默认阈值/预留，而非 `AGENTS.md` 规则或外围过滤工具。

Adjacent to—but distinct from—the WorkBuddy same-prompt hands-on in [Harness comparison beyond tokens](./harness-comparison-beyond-tokens.md): that page compares finished quality and run organization; this page is whether session-tool compression defaults misalign with the model window. It shares a “less context / compress context” family with [Project instructions and token efficiency](./agents-md-token-efficiency.md) and [Coding-agent token-saving tooling and overhead](./coding-agent-token-saving-tooling.md), but the cut is a long-conversation product default threshold/reserve, not `AGENTS.md` rules or peripheral filter tools.

## 矛盾与变化 / Contradictions

[yetone 谈 WorkBuddy DeepSeek 1M 与 magpie 默认 272K 压缩](../sources/articles/yetone-workbuddy-1m-magpie-272k.md) 描述大窗模型被包装默认在远低于标称窗口处提前压缩（换首字延迟）。[^yetone-workbuddy-1m-magpie-272k] [小墨谈 DSH 桌面端三坑](../sources/articles/xiaomovps-dsh-three-pitfalls.md) 则描述小窗口模型上默认压缩预留可能过大，导致长会话压缩失败，需 `/compact` 或调 Compaction。[^xiaomovps-dsh-three-pitfalls] 两边不互相否定「产品默认可错位」，但错位方向相反：一个是压得太早/太短，一个是预留太大压不动。实务上应按模型核对压缩阈值与预留，而非假定「默认＝窗口」或「默认总能压」。

[yetone on WorkBuddy DeepSeek 1M vs magpie’s default 272K compression](../sources/articles/yetone-workbuddy-1m-magpie-272k.md) describes a large-window model default-compressed by the wrapper far below the nominal window (for first-token latency).[^yetone-workbuddy-1m-magpie-272k] [Xiaomo on three DeepSeek Harness desktop pitfalls](../sources/articles/xiaomovps-dsh-three-pitfalls.md) describes small-window models where the default compaction reserve may be too large, so long-chat compression fails until `/compact` or Compaction tuning.[^xiaomovps-dsh-three-pitfalls] Neither cancels “product defaults can misalign,” but the directions oppose: one compresses too early/short; the other reserves so much that compaction fails. In practice check per-model compression thresholds and reserves—do not assume “default = window” or “default always compacts.”

## 相关 / Related

- Source: [yetone 谈 WorkBuddy DeepSeek 1M 与 magpie 默认 272K 压缩](../sources/articles/yetone-workbuddy-1m-magpie-272k.md)
- Source: [小墨谈 DSH 桌面端三坑](../sources/articles/xiaomovps-dsh-three-pitfalls.md)
- Topic: [超越 token 数的 Harness 对比](./harness-comparison-beyond-tokens.md)
- Topic: [项目指令与 Token 效率](./agents-md-token-efficiency.md)
- Topic: [编程 Agent 省 Token 工具与开销](./coding-agent-token-saving-tooling.md)
- Topic: [精简核心与社区扩展](./minimal-core-community-extensions.md)

[^yetone-workbuddy-1m-magpie-272k]: yetone on WorkBuddy DeepSeek 1M vs magpie’s default 272K compression
[^xiaomovps-dsh-three-pitfalls]: Xiaomo on three DeepSeek Harness desktop pitfalls
