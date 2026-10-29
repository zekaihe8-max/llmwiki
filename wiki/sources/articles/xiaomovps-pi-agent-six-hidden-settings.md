---
type: Source
title: 小墨谈 Pi Agent 六个隐藏设置
title_en: Xiaomo on six hidden Pi Agent settings
description: 小墨整理 Pi 内置的六项实用配置：缓存保温 cacheWarming 与 PI_CACHE_RETENTION、showCacheMissNotices 观察缓存损耗、compaction 的 reserveTokens/keepRecentTokens/modelOverrides、/tree /fork /clone 会话分支、shellCommandPrefix 加载别名、modelThinkingLevels 与 /scoped-models；并提醒缓存保温有调用费用、长期用 API 宜优先研究缓存与压缩。
description_en: Xiaomo lists six built-in Pi settings—cache warming via cacheWarming and PI_CACHE_RETENTION, showCacheMissNotices for cache miss visibility, compaction knobs reserveTokens/keepRecentTokens/modelOverrides, session branching /tree /fork /clone, shellCommandPrefix for shell aliases, and modelThinkingLevels with /scoped-models—and notes cache warming still costs API calls, so long API users should prioritize cache and compression tuning.
resource: https://x.com/xiaomovps/status/2115658635183587414
tags: [agents, pi, harness, cache, compaction, tokens, xiaomovps]
sources:
  - id: xiaomovps-pi-agent-six-hidden-settings
    resource: https://x.com/xiaomovps/status/2115658635183587414
    title: Xiaomo on six hidden Pi Agent settings
    author: human:xiaomovps
generated:
  by: cursor-agent/composer-2.5
  at: 2026-10-29T20:36:00+08:00
date: 2026-10-29
---

# 小墨谈 Pi Agent 六个隐藏设置

*Xiaomo on six hidden Pi Agent settings*

[@xiaomovps](https://x.com/xiaomovps)（小墨同学）称 Pi 用久了会发现不少能力已内置，只是平时少有人关注，有些甚至不必额外装插件。他尤其建议研究缓存、上下文压缩与会话管理——合理配置后可进一步优化 Token 成本与使用体验，并整理六项技巧：把 **cacheWarming** 默认的 streaming 改成 **idle**，两次任务之间也可保持提示缓存，再配 **PI_CACHE_RETENTION=long** 延长支持模型的缓存时间；**showCacheMissNotices** 设为 true 时，缓存大面积失效、预热成功以及压缩消耗都会提示，便于观察 Token 成本；**compaction** 可用 **reserveTokens** 控制自动压缩触发时机、**keepRecentTokens** 控制保留多少近期上下文，**modelOverrides** 还可给不同模型单独配置；会话分支用 **/tree** 在同一会话内切换分支、**/fork** 从历史消息建新会话、**/clone** 复制当前分支，空输入连按两次 Esc 也能打开会话树；Pi 默认非交互 Shell 别名不生效，可用 **shellCommandPrefix** 加载 `~/.bash_aliases` 后 **/reload**，即可用 `!ll` 一类命令；**modelThinkingLevels** 可为不同模型设默认思考档位，配 **/scoped-models** 还可限制快捷切换的模型范围。帖中还提到 **/export**、**/share**、**/hotkeys** 与 **PI_OFFLINE** 关闭自动联网等自带能力。作者更推荐优先研究缓存与压缩，长期用 API 时更好控制上下文与缓存成本；但缓存保温本身也会产生调用费用，并非开得越久越省钱，宜结合模型与使用频率调整。Pi 的优势不只是核心精简，而是很多需求可按配置满足，不必什么都依赖插件。[^xiaomovps-pi-agent-six-hidden-settings] 原帖 <https://x.com/xiaomovps/status/2115658635183587414>。

[@xiaomovps](https://x.com/xiaomovps) (Xiaomo) says long Pi use reveals many built-in capabilities people rarely tune, some without extra plugins. He especially recommends cache, context compression, and session management—sensible config can further optimize Token cost and UX—and lists six tips: change **cacheWarming** from default streaming to **idle** so prompt cache can stay warm between tasks, plus **PI_CACHE_RETENTION=long** on supported models; set **showCacheMissNotices** to true to surface large cache invalidations, successful warm-ups, and compaction spend for Token observability; tune **compaction** with **reserveTokens** for when auto-compaction fires, **keepRecentTokens** for how much recent context to keep, and **modelOverrides** for per-model settings; branch sessions with **/tree** inside one chat, **/fork** from history into a new session, **/clone** for the current branch, or double Esc on empty input for the session tree; Pi’s default non-interactive shell skips aliases—**shellCommandPrefix** can load `~/.bash_aliases` then **/reload** for commands like `!ll`; **modelThinkingLevels** sets default thinking tiers per model, and **/scoped-models** can limit quick-switch models. The post also mentions built-ins such as **/export**, **/share**, **/hotkeys**, and **PI_OFFLINE** to disable auto web access. He recommends prioritizing cache and compression for long API use to control context and cache cost; cache warming still incurs call charges—not longer always means cheaper—so tune to model and frequency. Pi’s edge is not only a slim core but configurability without reaching for plugins for everything.[^xiaomovps-pi-agent-six-hidden-settings] Post: <https://x.com/xiaomovps/status/2115658635183587414>.

## 摘要 / Summary

- **cacheWarming**：默认 streaming 改 **idle** 可在任务间隔保持提示缓存；配 **PI_CACHE_RETENTION=long** 延长支持模型的缓存保留。[^xiaomovps-pi-agent-six-hidden-settings]
- **cacheWarming**: default streaming → **idle** keeps prompt cache between tasks; **PI_CACHE_RETENTION=long** extends retention on supported models.[^xiaomovps-pi-agent-six-hidden-settings]
- **showCacheMissNotices=true**：缓存大面积失效、预热成功与压缩消耗会提示，便于观察 Token 成本。[^xiaomovps-pi-agent-six-hidden-settings]
- **showCacheMissNotices=true**: surfaces large cache misses, successful warm-ups, and compaction spend for Token visibility.[^xiaomovps-pi-agent-six-hidden-settings]
- **compaction**：**reserveTokens** / **keepRecentTokens** / **modelOverrides** 控制自动压缩时机、近期保留与分模型配置。[^xiaomovps-pi-agent-six-hidden-settings]
- **compaction**: **reserveTokens**, **keepRecentTokens**, and **modelOverrides** control auto-compaction timing, recent retention, and per-model overrides.[^xiaomovps-pi-agent-six-hidden-settings]
- 会话：**/tree**、**/fork**、**/clone**；空输入连按两次 Esc 打开会话树。[^xiaomovps-pi-agent-six-hidden-settings]
- Sessions: **/tree**, **/fork**, **/clone**; double Esc on empty input opens the session tree.[^xiaomovps-pi-agent-six-hidden-settings]
- **shellCommandPrefix** 加载 `~/.bash_aliases` 后 **/reload** 使 `!` 别名在非交互 Shell 下可用；**modelThinkingLevels** 与 **/scoped-models** 管默认思考档与快捷模型范围。[^xiaomovps-pi-agent-six-hidden-settings]
- **shellCommandPrefix** loads `~/.bash_aliases` then **/reload** so `!` aliases work under non-interactive shell; **modelThinkingLevels** and **/scoped-models** set default thinking tiers and quick-switch model scope.[^xiaomovps-pi-agent-six-hidden-settings]
- 缓存保温有调用费用，并非越久越省；长期 API 使用宜优先调缓存与压缩；上述均为 Pi 自带，无需额外插件。[^xiaomovps-pi-agent-six-hidden-settings]
- Cache warming still costs calls—not always cheaper when left on longer; long API users should prioritize cache and compression; all of the above are built into Pi without extra plugins.[^xiaomovps-pi-agent-six-hidden-settings]

## 相关 / Related

- Topic: [长对话默认压缩低于模型窗口](../../topics/long-conversation-default-compression.md)
- Topic: [精简核心与社区扩展](../../topics/minimal-core-community-extensions.md)
- Topic: [编程 Agent 省 Token 工具与开销](../../topics/coding-agent-token-saving-tooling.md)
- Source: [小墨谈 Pi 五个分支项目](./xiaomovps-pi-five-branch-projects.md)
- Source: [小墨 on Pi vs DeepSeek Harness rounds and cost](./xiaomovps-pi-vs-deepseek-harness.md)
- Source: [小墨谈 DSH 桌面端三坑](./xiaomovps-dsh-three-pitfalls.md)

[^xiaomovps-pi-agent-six-hidden-settings]: Xiaomo on six hidden Pi Agent settings
