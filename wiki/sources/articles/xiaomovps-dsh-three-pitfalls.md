---
type: Source
title: 小墨谈 DSH 桌面端三坑
title_en: Xiaomo on three DeepSeek Harness desktop pitfalls
description: 小墨整理 DeepSeek Harness 桌面 APP 三坑与免命令修复：OpenCode Go 接入 400（MissingSessionID）改工作区权限或装 dsh-opencode-session；更新插件后起不来则禁用第三方插件排查；长会话压缩失败用 /compact 并按小窗口模型调 Compaction。插件化有趣但稳定性仍缺，细节不宜只靠社区。
description_en: Xiaomo lists three DeepSeek Harness desktop-APP pitfalls with mostly no-CLI fixes—OpenCode Go 400 (MissingSessionID) via workspace permission or dsh-opencode-session; post-update boot failure by disabling third-party plugins; long-chat compression failure via /compact and Compaction tweaks for small-window models—and says pluginization is interesting but still short on stability, so details should not rest on the community alone.
resource: https://x.com/xiaomovps/status/2115270974811812111
tags: [agents, harness, deepseek, dsh, plugins, opencode, compact, desktop, xiaomovps]
sources:
  - id: xiaomovps-dsh-three-pitfalls
    resource: https://x.com/xiaomovps/status/2115270974811812111
    title: Xiaomo on three DeepSeek Harness desktop pitfalls
    author: human:xiaomovps
generated:
  by: cursor-agent/composer
  at: 2026-10-28T21:05:00+08:00
date: 2026-10-28
---

# 小墨谈 DSH 桌面端三坑

*Xiaomo on three DeepSeek Harness desktop pitfalls*

[@xiaomovps](https://x.com/xiaomovps)（小墨同学）整理 DeepSeek Harness（DSH）研究中较典型的三坑，并给出偏桌面 APP、基本不敲命令的修复：OpenCode Go 接入后 400——开自动审查权限时报 `MissingSessionID` 时，把对话框左下角权限切成「工作区内修改」；旧版普通对话也报错可在左侧插件里搜装 `dsh-opencode-session` 后完全重启。更新插件后整机起不来——先查第三方插件依赖冲突，能进 APP 则在插件列表逐个禁用；启动已报错时新版桌面会弹恢复窗口，可禁用第三方插件、备份配置并重启（可能重置原插件配置）。长会话 Token 越积越多、压缩失败——对话框输入 `/compact` 手动压缩；96K、128K 一类小窗口模型上，社区还发现默认压缩预留空间可能过大，需再调 Agent 预设里的 Compaction 参数。作者称插件化设计有意思，但稳定性仍有提升空间，怀疑维护精力未落在细节上，社区插件在补缺，并希望官方下场完善，因把维护权交给社区对大家也不安全。[^xiaomovps-dsh-three-pitfalls] 原帖见 <https://x.com/xiaomovps/status/2115270974811812111>。

[@xiaomovps](https://x.com/xiaomovps) (Xiaomo) collects three typical DeepSeek Harness (DSH) pitfalls from his research, with desktop-APP fixes that mostly need no CLI: after OpenCode Go, a 400—when auto-review permission is on and `MissingSessionID` appears, switch the chat’s lower-left permission to workspace-scoped edits; older builds that also fail in ordinary chat can install the `dsh-opencode-session` plugin from the left panel and fully restart. After a plugin update the whole app may not start—check third-party plugin dependency conflicts, and if the APP opens disable plugins one by one; if boot already errors, newer desktop builds show a recovery window to disable third-party plugins, back up config, and restart (which may reset prior plugin config). When long-session Tokens keep growing and compression fails—type `/compact` in chat to compact manually; on small-window models such as 96K/128K the community also finds the default compaction reserve may be too large, so further tune Compaction in the Agent preset. He finds the plugin design interesting but still short on stability, suspects detail polish is under-attended, notes community plugins filling gaps, and hopes the official team owns those details—handing maintenance to the community alone is not very safe for users.[^xiaomovps-dsh-three-pitfalls] Post: <https://x.com/xiaomovps/status/2115270974811812111>.

## 摘要 / Summary

- OpenCode Go 接入后 400：自动审查开着时报 `MissingSessionID`，把权限切成工作区内修改；旧版普通对话也错，可装 `dsh-opencode-session` 后完全重启。[^xiaomovps-dsh-three-pitfalls]
- OpenCode Go then 400: with auto-review on, `MissingSessionID` is fixed by switching permission to workspace-scoped edits; older builds that also fail in ordinary chat can install `dsh-opencode-session` and fully restart.[^xiaomovps-dsh-three-pitfalls]
- 更新插件后 DSH 起不来：查第三方依赖冲突，能进则逐个禁用；启动报错时新版恢复窗口可禁用第三方插件、备份配置并重启（可能重置插件配置）。[^xiaomovps-dsh-three-pitfalls]
- After plugin updates DSH may not start: check third-party dependency conflicts and disable one by one if the APP opens; on boot error, newer recovery can disable third-party plugins, back up config, and restart (may reset plugin config).[^xiaomovps-dsh-three-pitfalls]
- 长会话压缩失败：先 `/compact`；小窗口模型（如 96K、128K）上默认压缩预留可能过大，需调 Agent 预设 Compaction。[^xiaomovps-dsh-three-pitfalls]
- Long-chat compression failure: try `/compact` first; on small-window models (e.g. 96K/128K) the default compaction reserve may be too large—tune Compaction in the Agent preset.[^xiaomovps-dsh-three-pitfalls]
- 插件化有趣但稳定性不足；社区在补细节，作者希望官方下场，因维护权交社区也不安全。[^xiaomovps-dsh-three-pitfalls]
- Pluginization is interesting but still short on stability; the community patches details, and the author wants the official team to own them—community-only maintenance is also unsafe for users.[^xiaomovps-dsh-three-pitfalls]

## 相关 / Related

- Topic: [面向 Agent 的模型渠道取舍](../../topics/agent-model-channel-tradeoffs.md)
- Topic: [精简核心与社区扩展](../../topics/minimal-core-community-extensions.md)
- Topic: [长对话默认压缩低于模型窗口](../../topics/long-conversation-default-compression.md)
- Topic: [插件样式不一使 Harness 界面碎片化](../../topics/harness-plugin-style-fragmentation.md)
- Source: [小墨谈 DSH 0.2.1：自研搜索与 Agent 写插件](./xiaomovps-dsh-021-search-agent-plugins.md)
- Source: [小墨谈 DSH 可用的 DeepSeek 渠道比价](./xiaomovps-dsh-deepseek-channels.md)

[^xiaomovps-dsh-three-pitfalls]: Xiaomo on three DeepSeek Harness desktop pitfalls
