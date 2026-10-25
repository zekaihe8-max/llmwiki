---
type: Source
title: yetone 谈 WorkBuddy DeepSeek 1M 与 magpie 默认 272K 压缩
title_en: yetone on WorkBuddy DeepSeek 1M vs magpie’s default 272K compression
description: yetone 澄清不是 Codex 的问题：WorkBuddy 的 DeepSeek V4.1 实际是 1M；magpie 默认在约 272K 压缩长对话以免首字过慢，可用「完整窗口」或按模型单独设压缩位置。
description_en: yetone clarifies it is not a Codex issue—WorkBuddy’s DeepSeek V4.1 is actually 1M; magpie by default compresses long chats around 272K to avoid slow first tokens, with a “full window” setting or per-model compression points.
resource: https://x.com/yetone/status/2114231150709547338
tags: [magpie, workbuddy, deepseek, context, compression, yetone, codex]
sources:
  - id: yetone-workbuddy-1m-magpie-272k
    resource: https://x.com/yetone/status/2114231150709547338
    title: yetone on WorkBuddy DeepSeek 1M vs magpie’s default 272K compression
    author: human:yetone
generated:
  by: cursor-agent/composer
  at: 2026-10-25T20:38:17+08:00
date: 2026-10-25
---

# yetone 谈 WorkBuddy DeepSeek 1M 与 magpie 默认 272K 压缩

*yetone on WorkBuddy DeepSeek 1M vs magpie’s default 272K compression*

[@yetone](https://x.com/yetone) 澄清：「不是 Codex 的问题：WorkBuddy 的 DeepSeek V4.1 实际是 1M。magpie 默认让 Codex 在 272K 处压缩长对话（Codex 显示约 258K），避免上下文太长时首字很慢。想用满 1M：设置 → 长对话 → 选「完整窗口」，也可以只给这个模型单独设压缩位置。」[^yetone-workbuddy-1m-magpie-272k] 原帖见 <https://x.com/yetone/status/2114231150709547338>。

[@yetone](https://x.com/yetone) clarifies: “It’s not a Codex problem: WorkBuddy’s DeepSeek V4.1 is actually 1M. magpie by default has Codex compress long conversations at 272K (Codex shows about 258K) to avoid very slow first tokens when context gets too long. To use the full 1M: Settings → Long conversation → choose ‘完整窗口’ (full window); you can also set the compression point for this model alone.”[^yetone-workbuddy-1m-magpie-272k] Post: <https://x.com/yetone/status/2114231150709547338>.

## 摘要 / Summary

- 归因澄清：表观限制不是 Codex，WorkBuddy 侧 DeepSeek V4.1 实际窗口为 1M。[^yetone-workbuddy-1m-magpie-272k]
- Attribution: the apparent limit is not Codex; WorkBuddy’s DeepSeek V4.1 is actually a 1M window.[^yetone-workbuddy-1m-magpie-272k]
- magpie 默认在约 272K 压缩长对话（Codex UI 约显示 258K），动机是避免上下文过长时首字延迟变差。[^yetone-workbuddy-1m-magpie-272k]
- magpie defaults to compressing long conversations around 272K (Codex UI shows ~258K), to avoid bad first-token latency when context grows too long.[^yetone-workbuddy-1m-magpie-272k]
- 要用满 1M：设置 → 长对话 →「完整窗口」；也可只给该模型单独设压缩位置。[^yetone-workbuddy-1m-magpie-272k]
- To use the full 1M: Settings → Long conversation → “完整窗口” (full window); or set the compression point for that model alone.[^yetone-workbuddy-1m-magpie-272k]

## 相关 / Related

- Topic: [长对话默认压缩低于模型窗口](../../topics/long-conversation-default-compression.md)
- Source: [小墨实测 WorkBuddy 与 DeepSeek Harness 同题效果](./xiaomovps-workbuddy-vs-dsh-quality.md)
- Source: [yetone 谈 Magpie 本地脱敏与近期安全事件](./yetone-magpie-local-desensitization.md)

[^yetone-workbuddy-1m-magpie-272k]: yetone on WorkBuddy DeepSeek 1M vs magpie’s default 272K compression
