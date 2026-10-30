---
type: Topic
title: 精简核心与社区扩展
title_en: Minimal core and community extensions
description: Agent harness 可把核心保持精简，由社区以增强、工作流改造、小模型分流、Issue 自动化与移动端等方向分化；对照路径是宿主自组插件/模型/工具与运行体系（「万物皆插件」）——不全是传统 Fork，也能玩出不同路线；插件组合宿主侧还出现第三方依赖冲突拖垮启动、细节靠社区补而维护权外放不安全等稳定性代价。
description_en: An agent harness can keep a slim core while the community diverges via enrichment, workflow redesign, small-model offload, Issue automation, and mobile access; the foil path is a host that composes plugins, models, tools, and runtime (“everything as a plugin”)—not all traditional forks, yet still different paths; the plugin-composed host also shows stability costs such as third-party dependency conflicts blocking boot and detail gaps left to the community when handing maintenance away is unsafe.
tags: [agents, harness, pi, community, forks, ecosystem, dsh, plugins]
sources:
  - id: xiaomovps-pi-five-branch-projects
    resource: https://x.com/xiaomovps/status/2113912639571255525
    title: 小墨 on five Pi branch projects
  - id: xiaomovps-dsh-021-search-agent-plugins
    resource: https://x.com/xiaomovps/status/2115102099226935462
    title: 小墨 on DSH 0.2.1 search and Agent-authored plugins
  - id: xiaomovps-dsh-three-pitfalls
    resource: https://x.com/xiaomovps/status/2115270974811812111
    title: Xiaomo on three DeepSeek Harness desktop pitfalls
  - id: yetone-magpie-full-pluginization
    resource: https://x.com/yetone/status/2115407804047696373
    title: yetone on Magpie’s full pluginization
  - id: xiaomovps-dsh-claude-codex-subagent-plugins
    resource: https://x.com/xiaomovps/status/2115640890417168388
    title: Xiaomo on DSH official plugins dispatching Claude Code / Codex sub-agents
  - id: xiaomovps-pi-agent-six-hidden-settings
    resource: https://x.com/xiaomovps/status/2115658635183587414
    title: Xiaomo on six hidden Pi Agent settings
  - id: xiaomovps-cloudflare-ai-free-tier
    resource: https://x.com/xiaomovps/status/2115683808033001567
    title: Xiaomo on Cloudflare AI free tiers and usage
  - id: yetone-alma-ios-herdr-native-client
    resource: https://x.com/yetone/status/2115516478254624914
    title: yetone on Alma iOS integrating a native Herdr client
  - id: yetone-magpie-image-mcp-video
    resource: https://x.com/yetone/status/2115666512396906824
    title: yetone on magpie-image MCP supporting video generation
  - id: xiaomovps-pi-durable-performance
    resource: https://x.com/xiaomovps/status/2116116088236937361
    title: Xiaomo on Pi Durable persistence performance
  - id: cursor-extension-poisoning
    resource: https://x.com/0xLogicrw/status/2116093465591452001
    title: Logicrw on Cursor marketplace extension poisoning
generated:
  by: codex/gpt-6
  at: 2026-10-30T20:55:06+08:00
---
<!-- Same-file bilingual (project extension): title + title_en, description + description_en, bilingual section headings, ZH then EN body pairs. Proper nouns / product names / APIs / resource URLs stay in their common form. Do not invent facts; translate existing claims faithfully. -->

# 精简核心与社区扩展

*Minimal core and community extensions*

Agent harness 不必把能力全塞进主干：核心保持精简时，社区可用增强包、默认行为重设计、小模型分流、端到端 Issue 流水线与移动端远程 Session 等独立方向扩展，其中既有 Fork 也有基于核心的独立项目。[^xiaomovps-pi-five-branch-projects] 另一条产品路线则是宿主主动组合插件、模型、工具与运行体系——「万物皆插件」——与「主干精简、分化在周边」形成对照。[^xiaomovps-dsh-021-search-agent-plugins]

An agent harness need not pack every capability into the trunk: with a slim core, the community can extend along independent lines—enrichment packs, default-behavior redesign, small-model offload, end-to-end Issue pipelines, and mobile remote Sessions—mixing forks and independent projects built on the core.[^xiaomovps-pi-five-branch-projects] Another product path has the host itself compose plugins, models, tools, and runtime—“everything as a plugin”—as a foil to “slim trunk, divergence at the edges.”[^xiaomovps-dsh-021-search-agent-plugins]

## 综合分析 / Synthesis

[小墨谈 Pi 五个分支项目](../sources/articles/xiaomovps-pi-five-branch-projects.md) 以 Pi 为例列出五条社区路线：Oh My Pi 补 LSP/Debugger/Subagent/浏览器等 Coding 工作流能力；senpi 改造 System Prompt、权限、Context 压缩与并行工具执行；mu 用轻量 Judge 做任务分类与上下文保留等决策以省主模型；Orbi 把 Issue 推到实现、Review、PR 乃至发布；Pi Pocket 基于 Pi Durable 做移动访问、共享 Session 与后台恢复。[^xiaomovps-pi-five-branch-projects] 耐久主张不是某个仓库名单，而是架构选择——主干精简，分化发生在周边；且「分支」不必等于传统 Fork。[^xiaomovps-pi-five-branch-projects]

[Xiaomo on five Pi branch projects](../sources/articles/xiaomovps-pi-five-branch-projects.md) uses Pi to list five community paths: Oh My Pi adds LSP/Debugger/Subagent/browser for a fuller coding workflow; senpi reworks System Prompt, permissions, Context compression, and parallel tools; mu uses a lightweight Judge for task classification and context retention to spare the main model; Orbi drives Issues through implementation, Review, PR, and even release; Pi Pocket builds on Pi Durable for mobile access, shared Sessions, and background resume.[^xiaomovps-pi-five-branch-projects] The durable claim is not a fixed repo roster but an architectural choice—keep the trunk slim and let divergence happen at the edges—and “branch” need not mean a traditional fork.[^xiaomovps-pi-five-branch-projects]

同作者后续的 [小墨谈 DSH 0.2.1：自研搜索与 Agent 写插件](../sources/articles/xiaomovps-dsh-021-search-agent-plugins.md) 把对照从「Pi 周边分叉名单」扩到另一宿主策略：作者爱 Pi 足够简单、想要什么自己加；DeepSeek Harness（DSH）0.2.1 则不止扩展 Agent，还想把插件、模型、工具与运行体系组合起来——插件管理可让 Agent 直接开发插件（第三方源、依赖、热重载），并实验性兼容 Claude Code / Codex 插件机制。[^xiaomovps-dsh-021-search-agent-plugins] 原帖 <https://x.com/xiaomovps/status/2115102099226935462>。本页仍管架构选择（精简核心 vs 插件组合宿主），不收搜索 API 形态或单次跑法计量。

The same author’s later [Xiaomo on DSH 0.2.1 — first-party search and Agent-authored plugins](../sources/articles/xiaomovps-dsh-021-search-agent-plugins.md) widens the foil from “Pi edge-fork roster” to another host strategy: he likes Pi simple enough to add what you need yourself; DeepSeek Harness (DSH) 0.2.1 aims not only to extend the Agent but to compose plugins, models, tools, and runtime—plugin management lets Agents author plugins (third-party sources, deps, hot reload) and experimentally bridges Claude Code / Codex plugin mechanisms.[^xiaomovps-dsh-021-search-agent-plugins] Post: <https://x.com/xiaomovps/status/2115102099226935462>. This page still owns the architectural choice (slim core vs plugin-composed host), not search-API shape or single-run metering.

[小墨谈 DSH 官方插件调 Claude Code / Codex 子 Agent](../sources/articles/xiaomovps-dsh-claude-codex-subagent-plugins.md) 把 0.2.1 的「实验性兼容」落到可装可用的官方子 Agent 插件：插件页启用 Codex / Claude Code 智能体、登录 CLI 后 DSH 即可派活，不必自写对接；作者仍称实验性，Codex 新版模型有兼容失败，并希望官方再出 Pi Agent 插件——插件组合宿主在「官方补缺 vs 社区自桥」上又前进一步，但稳定性与跨版本兼容仍见 [小墨谈 DSH 桌面端三坑](../sources/articles/xiaomovps-dsh-three-pitfalls.md) 一类代价。[^xiaomovps-dsh-claude-codex-subagent-plugins] 原帖 <https://x.com/xiaomovps/status/2115640890417168388>。

[Xiaomo on DSH official plugins dispatching Claude Code / Codex sub-agents](../sources/articles/xiaomovps-dsh-claude-codex-subagent-plugins.md) lands 0.2.1’s “experimental compatibility” as installable official sub-agent plugins: enable Codex / Claude Code agents from the plugin page, log into the CLIs, then DSH dispatches without a custom bridge; he still calls it experimental, reports newer Codex model failures, and wants an official Pi Agent plugin next—the plugin-composed host advances on “official gap-fill vs community bridge,” while stability and cross-version friction still show up in costs like [Xiaomo on three DeepSeek Harness desktop pitfalls](../sources/articles/xiaomovps-dsh-three-pitfalls.md).[^xiaomovps-dsh-claude-codex-subagent-plugins] Post: <https://x.com/xiaomovps/status/2115640890417168388>.

同作者再后的 [小墨谈 DSH 桌面端三坑](../sources/articles/xiaomovps-dsh-three-pitfalls.md) 给「万物皆插件」补上稳定性与维护权代价：更新插件后第三方依赖冲突可使整机起不来，能进 APP 则逐个禁用排查，新版恢复窗口可禁用第三方插件、备份配置并重启（可能重置插件配置）；作者称插件化有意思但稳定性仍缺，社区在补细节，并希望官方下场——把维护权交给社区对大家也不安全。[^xiaomovps-dsh-three-pitfalls] 原帖 <https://x.com/xiaomovps/status/2115270974811812111>。本页收的是插件组合宿主的运维/治理边界，不收 OpenCode Session 400 或长会话 Compaction 参数——见 [面向 Agent 的模型渠道取舍](./agent-model-channel-tradeoffs.md) 与 [长对话默认压缩低于模型窗口](./long-conversation-default-compression.md)。

The same author’s later [Xiaomo on three DeepSeek Harness desktop pitfalls](../sources/articles/xiaomovps-dsh-three-pitfalls.md) adds stability and maintenance-ownership costs to “everything as a plugin”: after plugin updates, third-party dependency conflicts can keep the whole app from starting—disable one by one if the APP opens, or use the newer recovery window to disable third-party plugins, back up config, and restart (which may reset plugin config); he finds pluginization interesting but still short on stability, notes the community filling detail gaps, and wants the official team to own them—handing maintenance to the community alone is also unsafe for users.[^xiaomovps-dsh-three-pitfalls] Post: <https://x.com/xiaomovps/status/2115270974811812111>. This page keeps the ops/governance bound of a plugin-composed host, not OpenCode Session 400s or long-chat Compaction knobs—see [Model provider channel tradeoffs for agents](./agent-model-channel-tradeoffs.md) and [Long-conversation default compression below model window](./long-conversation-default-compression.md).

同作者的 [小墨谈 Pi 与 DeepSeek Harness 的轮次与成本](../sources/articles/xiaomovps-pi-vs-deepseek-harness.md) 在另一轴上谈 Pi：同模型下 harness 的轮次与费用对比，见 [超越 token 数的 Harness 对比](./harness-comparison-beyond-tokens.md)。本页谈的是生态如何围绕精简核心分叉、以及对照的插件组合宿主路线，而非如何度量一次跑法。

The same author’s [Xiaomo on Pi vs DeepSeek Harness rounds and cost](../sources/articles/xiaomovps-pi-vs-deepseek-harness.md) discusses Pi on another axis—rounds and cost under the same model—under [Harness comparison beyond tokens](./harness-comparison-beyond-tokens.md). This page is about how an ecosystem forks around a slim core, and the foil plugin-composed host path, not how to meter a single run.

另一产品线 [yetone 谈 Magpie 全面插件化](../sources/articles/yetone-magpie-full-pluginization.md) 给「插件组合宿主」补上 Magpie 作者侧主张：[@yetone](https://x.com/yetone) 称 Magpie 已「全面插件化」，之后「甚至可以在 Magpie 里这样」并附截图；抓取正文未展开图中 UI 或插件名。[^yetone-magpie-full-pluginization] 原帖 <https://x.com/yetone/status/2115407804047696373>。本页收的是跨产品的插件化宿主路线（Magpie 与 DSH 并列），不收 Magpie 资源库统一管 skills/MCP/hooks——见 [跨 Agent 统一资源库](./unified-agent-resource-library.md)。

Another product line, [yetone on Magpie’s full pluginization](../sources/articles/yetone-magpie-full-pluginization.md), adds a Magpie-author claim to the plugin-composed host path: [@yetone](https://x.com/yetone) says Magpie is already “fully pluginized,” after which “you can even do this in Magpie,” with a screenshot; the fetched body does not expand the UI or plugin names in the image.[^yetone-magpie-full-pluginization] Post: <https://x.com/yetone/status/2115407804047696373>. This page keeps the cross-product pluginized-host path (Magpie alongside DSH), not Magpie’s unified resource library for skills/MCP/hooks—see [Unified agent resource library](./unified-agent-resource-library.md).

[小墨谈 Pi Agent 六个隐藏设置](../sources/articles/xiaomovps-pi-agent-six-hidden-settings.md) 从「精简核心、不必事事插件」侧补证据：帖列六项 **Pi 自带**能力——缓存保温 **cacheWarming** / **PI_CACHE_RETENTION**、**showCacheMissNotices**、**compaction** 参数、**/tree** / **/fork** / **clone**、**shellCommandPrefix**、**modelThinkingLevels** 等，并称很多不必额外装插件；与 [小墨谈 Pi 五个分支项目](../sources/articles/xiaomovps-pi-five-branch-projects.md) 的「主干精简、社区在周边加能力」同向，但强调**官方内置配置**已覆盖省 Token 与会话治理的一大部分，插件/分支是加料而非唯一路径。长会话压缩/缓存旋钮的 Topic 边界在 [长对话默认压缩低于模型窗口](./long-conversation-default-compression.md)。[^xiaomovps-pi-agent-six-hidden-settings] 原帖 <https://x.com/xiaomovps/status/2115658635183587414>。

[Xiaomo on six hidden Pi Agent settings](../sources/articles/xiaomovps-pi-agent-six-hidden-settings.md) adds evidence on the “slim core, not everything via plugins” side: six **built-in** Pi capabilities—**cacheWarming** / **PI_CACHE_RETENTION**, **showCacheMissNotices**, **compaction** knobs, **/tree** / **/fork** / **/clone**, **shellCommandPrefix**, **modelThinkingLevels**, and more—many without extra plugins; aligned with [Xiaomo on five Pi branch projects](../sources/articles/xiaomovps-pi-five-branch-projects.md) (“slim trunk, community at the edges”) but stressing **first-party config** already covers much token and session governance; plugins/branches enrich rather than being the only path. Long-chat compression/cache knobs live under [Long-conversation default compression below model window](./long-conversation-default-compression.md).[^xiaomovps-pi-agent-six-hidden-settings] Post: <https://x.com/xiaomovps/status/2115658635183587414>.

[小墨谈 Cloudflare AI 免费额度与玩法](../sources/articles/xiaomovps-cloudflare-ai-free-tier.md) 把「Pi Durable 周边」补到**官方托管边缘**：Cloudflare 原生 **PiHarness**，Pi Durable 可跑在 **Durable Objects** 上，Workers 日 10 万免费请求与 DO / Workers AI 免费额度可搭配官方 Agents SDK 与免费模型，试**不必常驻 VPS** 的轻量云端 Agent——与 [小墨谈 Pi 五个分支项目](../sources/articles/xiaomovps-pi-five-branch-projects.md) 里 Pi Pocket 等社区在 Pi Durable 上扩展移动/共享 Session 同族，但这里是平台侧一等公民部署；作者明确**不是**本地 Pi CLI 原样迁移，完整 Linux 执行仍要额外资源。[^xiaomovps-cloudflare-ai-free-tier] 原帖 <https://x.com/xiaomovps/status/2115683808033001567>。

[Xiaomo on Cloudflare AI free tiers and usage](../sources/articles/xiaomovps-cloudflare-ai-free-tier.md) adds **vendor-hosted edge** for Pi Durable: native **PiHarness** on **Durable Objects**, **100k** free Worker requests/day plus DO and Workers AI free tiers, official Agents SDK samples with free models for a lightweight cloud agent **without an always-on VPS**—same family as Pi Pocket-style Pi Durable extensions in [Xiaomo on five Pi branch projects](../sources/articles/xiaomovps-pi-five-branch-projects.md), but as first-party platform deployment; he stresses it is **not** a one-to-one local Pi CLI port and full Linux execution still needs extra resources.[^xiaomovps-cloudflare-ai-free-tier] Post: <https://x.com/xiaomovps/status/2115683808033001567>.

[yetone 谈 Alma iOS 集成 Herdr 原生客户端](../sources/articles/yetone-alma-ios-herdr-native-client.md) 在移动端扩展轴上补 **Alma 作者侧一体化**：远程桌面控家里 Herdr 不够 mobile native，于是在 Alma iOS 内集成完整 Herdr 客户端（现仅 Claude Code）、复用 Alma 自带 E2E relay 并支持同 LAN 自动内网、附带远程桌面；计划开源 relay 供自建——与 Pi Pocket 等「社区在 Pi Durable 上做移动 Session」同族，但是 **Alma/Herdr 产品线内嵌** 而非 Pi 分叉名单一员。[^yetone-alma-ios-herdr-native-client] 原帖 <https://x.com/yetone/status/2115516478254624914>。

[yetone on Alma iOS integrating a native Herdr client](../sources/articles/yetone-alma-ios-herdr-native-client.md) adds an **Alma-author integrated mobile** path on the mobile-extension axis: remote-desktop control of home Herdr was not mobile native, so Alma iOS embeds a full Herdr client (Claude Code only for now), reuses Alma’s built-in E2E relay with LAN auto-switch, plus remote desktop; plans to open-source the relay for self-host—same family as Pi Pocket-style Pi Durable mobile Sessions, but **in-product Alma/Herdr** rather than a Pi branch roster entry.[^yetone-alma-ios-herdr-native-client] Post: <https://x.com/yetone/status/2115516478254624914>.

[yetone 谈 magpie-image MCP 可生成视频](../sources/articles/yetone-magpie-image-mcp-video.md) 在 Magpie 插件/MCP 能力面上补一个具名例子：[@yetone](https://x.com/yetone) 称给 Magpie 里的 Agent 安装 **magpie-image** MCP 后**也支持生成视频**，并说多数人可能不知道——与「全面插件化」后的能力扩张同向，但这里是点名 MCP、从命名上的「image」扩到视频；抓取正文未写工具清单、参数或附图细节。[^yetone-magpie-image-mcp-video] 原帖 <https://x.com/yetone/status/2115666512396906824>。MCP 的统一存放与按 agent 写出仍见 [跨 Agent 统一资源库](./unified-agent-resource-library.md)，本页不收安装 UI 或资源库导入流程。

[yetone on magpie-image MCP supporting video generation](../sources/articles/yetone-magpie-image-mcp-video.md) adds a named Magpie plugin/MCP capability case: [@yetone](https://x.com/yetone) says that after installing the **magpie-image** MCP on an Agent in Magpie it **also supports video generation**, and that many may not know—aligned with post–“full pluginization” capability expansion, but here a named MCP stretches from “image” in the name to video; the fetched body gives no tool list, parameters, or image detail.[^yetone-magpie-image-mcp-video] Post: <https://x.com/yetone/status/2115666512396906824>. Unified MCP storage and per-agent writes stay under [Unified cross-agent resource library](./unified-agent-resource-library.md); this page does not own install UI or library import flows.

Pi Pocket 等周边依赖的持久化底座也有独立的工程成本：[小墨谈 Pi Durable 持久化性能优化](../sources/articles/xiaomovps-pi-durable-performance.md) 表明，扩展后台恢复能力时，还需评估状态提交频率与并发资源消耗。帖述 32 路并行 SQLite 测试以更少事务降低磁盘写入和 CPU；流式输出在内存更新后批写，则把实时显示与落盘时间分开。这给精简核心周边扩展增加了适用边界：应区分已提交步骤的恢复与最近流式输出的保存，不能把可恢复理解为所有可见输出都已持久化；这些测试也不能直接推广为所有部署的收益，部分优化仍在开发分支。[^xiaomovps-pi-durable-performance]

The persistence layer supporting extensions such as Pi Pocket also has engineering costs: [Xiaomo on Pi Durable persistence performance](../sources/articles/xiaomovps-pi-durable-performance.md) shows that background recovery extensions require attention to state-commit frequency and concurrent resource use. The reported 32-way parallel SQLite test reduces disk writes and CPU through fewer transactions; batching streaming output after in-memory updates separates live display from persistence time. This adds a scope boundary to extensions around a slim core: recovery of committed steps differs from preservation of the latest streamed output, so recoverability does not imply that all visible output has been persisted. The test gains cannot be generalized to every deployment, and some optimizations remain on development branches.[^xiaomovps-pi-durable-performance]

插件治理还须区分维护质量与分发渠道完整性：即使扩展功能仍正常，加载时执行的代码也可能越过用户实际调用功能的边界。[Cursor 扩展投毒转述](../sources/articles/logicrw-cursor-claude-code-extension-poisoning.md) 描述了商店包被替换、SSH 密钥与自启脚本可能残留的情况。因此，从本案例可推得，治理边界应覆盖加载触发、系统权限与卸载后的持久化，而不能只看功能是否可用。开启 SSH 失败也不能等同于没有信息采集或残留；但这是单一渠道事件的转述，不能推断所有插件、Anthropic 官方包或社区扩展都被攻陷。[^cursor-extension-poisoning]

Plugin governance must distinguish maintenance quality from distribution-channel integrity: code executed on load can exceed the boundary of the feature a user actively invokes even while extension functionality appears normal. The [Cursor extension poisoning account](../sources/articles/logicrw-cursor-claude-code-extension-poisoning.md) describes a replaced marketplace package and possible persistence through SSH keys and startup scripts. The inference from this case is that governance should cover load triggers, system privileges, and persistence after uninstall, beyond functional availability. Failure to enable SSH does not establish an absence of collection or artifacts; however, this account of one channel does not imply compromise of all plugins, Anthropic’s official package, or community extensions.[^cursor-extension-poisoning]

## 矛盾与变化 / Contradictions

同作者先以 Pi 主张「主干精简、分化在周边」，后又写明 DSH「万物皆插件」、主动组合插件/模型/工具/运行体系——两条产品路线并置，不是互相取消；开放问题是插件组合能否在保持灵活时控制复杂度与 Token，归档在 [超越 token 数的 Harness 对比](./harness-comparison-beyond-tokens.md)。后续三坑帖又在同一插件宿主路线上补稳定性与「维护权不宜只交社区」——与 0.2.1 的能力扩张叙事并存，不是取消「万物皆插件」，而是给该路线加上运维代价。Magpie 作者侧「全面插件化」后「甚至可以在 Magpie 里这样」（附图），与小墨对 DSH 插件稳定性/维护权的代价叙事同属插件宿主路线、不同产品不同侧重——并置而非互相取消。 / The same author first argues via Pi for “slim trunk, divergence at the edges,” then states that DSH’s “everything as a plugin” actively composes plugins/models/tools/runtime—two product paths side by side, not a cancellation; whether plugin composition can keep flexibility while controlling complexity and Tokens lives under [Harness comparison beyond tokens](./harness-comparison-beyond-tokens.md). The later three-pitfalls post then adds stability and “don’t leave maintenance to the community alone” on the same plugin-host path—alongside, not canceling, the 0.2.1 capability-expansion narrative; it prices that path with ops cost. Magpie’s author-side “full pluginization” so “you can even do this in Magpie” (screenshot) sits on the same plugin-host path as Xiaomo’s DSH stability/maintenance-cost narrative—different products, different emphasis, side by side rather than canceling.[^xiaomovps-pi-five-branch-projects][^xiaomovps-dsh-021-search-agent-plugins][^xiaomovps-dsh-three-pitfalls][^yetone-magpie-full-pluginization]

此前[Pi 五个分支项目](../sources/articles/xiaomovps-pi-five-branch-projects.md) 强调 Pi Pocket 的后台恢复能力；[Pi Durable 优化帖](../sources/articles/xiaomovps-pi-durable-performance.md) 补充流式批写最多约一秒后落盘、崩溃可能丢失最近输出。这是恢复承诺的细化边界，而非否定已提交步骤可恢复。[^xiaomovps-pi-five-branch-projects][^xiaomovps-pi-durable-performance]

The earlier [five Pi branch projects](../sources/articles/xiaomovps-pi-five-branch-projects.md) highlights Pi Pocket’s background recovery; the [Pi Durable optimization post](../sources/articles/xiaomovps-pi-durable-performance.md) adds that batched streaming writes may persist up to about one second later, with recent output vulnerable to a crash. This refines the recovery boundary rather than denying recovery of committed steps.[^xiaomovps-pi-five-branch-projects][^xiaomovps-pi-durable-performance]

此前 DSH 三坑帖希望官方接手维护，Cursor 事件转述则补充：商店分发链路本身也可能出问题。两者不直接矛盾，但官方维护诉求不能被读成分发包安全保证；也不能把 Cursor 个案归因于 DSH 或 Magpie。[^xiaomovps-dsh-three-pitfalls][^cursor-extension-poisoning]

The earlier DSH pitfalls post calls for official maintenance ownership; the Cursor incident account adds that marketplace distribution itself can fail. These claims do not directly contradict each other, but official maintenance ownership cannot be read as a guarantee of package integrity, nor can this Cursor case be attributed to DSH or Magpie.[^xiaomovps-dsh-three-pitfalls][^cursor-extension-poisoning]

## 相关 / Related

- Source: [思维怪怪转述 Cursor 商店 Claude Code 扩展投毒事件 / Logicrw reports Claude Code extension poisoning in the Cursor marketplace](../sources/articles/logicrw-cursor-claude-code-extension-poisoning.md)

- Source: [小墨谈 Pi Durable 持久化性能优化 / Xiaomo on Pi Durable persistence performance](../sources/articles/xiaomovps-pi-durable-performance.md)

- Source: [小墨谈 Pi 五个分支项目](../sources/articles/xiaomovps-pi-five-branch-projects.md)
- Source: [小墨谈 DSH 0.2.1：自研搜索与 Agent 写插件](../sources/articles/xiaomovps-dsh-021-search-agent-plugins.md)
- Source: [小墨谈 DSH 官方插件调 Claude Code / Codex 子 Agent](../sources/articles/xiaomovps-dsh-claude-codex-subagent-plugins.md)
- Source: [小墨谈 DSH 桌面端三坑](../sources/articles/xiaomovps-dsh-three-pitfalls.md)
- Source: [yetone 谈 Magpie 全面插件化](../sources/articles/yetone-magpie-full-pluginization.md)
- Source: [小墨谈 Pi Agent 六个隐藏设置](../sources/articles/xiaomovps-pi-agent-six-hidden-settings.md)
- Source: [小墨谈 Cloudflare AI 免费额度与玩法](../sources/articles/xiaomovps-cloudflare-ai-free-tier.md)
- Source: [yetone 谈 Alma iOS 集成 Herdr 原生客户端](../sources/articles/yetone-alma-ios-herdr-native-client.md)
- Source: [yetone 谈 magpie-image MCP 可生成视频](../sources/articles/yetone-magpie-image-mcp-video.md)
- Topic: [超越 token 数的 Harness 对比](./harness-comparison-beyond-tokens.md)
- Topic: [面向 Agent 的模型渠道取舍](./agent-model-channel-tradeoffs.md)
- Topic: [长对话默认压缩低于模型窗口](./long-conversation-default-compression.md)
- Topic: [插件样式不一使 Harness 界面碎片化](./harness-plugin-style-fragmentation.md)
- Topic: [跨 Agent 统一资源库](./unified-agent-resource-library.md)

[^xiaomovps-pi-five-branch-projects]: 小墨 on five Pi branch projects
[^xiaomovps-dsh-021-search-agent-plugins]: 小墨 on DSH 0.2.1 search and Agent-authored plugins
[^xiaomovps-dsh-claude-codex-subagent-plugins]: Xiaomo on DSH official plugins dispatching Claude Code / Codex sub-agents
[^xiaomovps-dsh-three-pitfalls]: Xiaomo on three DeepSeek Harness desktop pitfalls
[^yetone-magpie-full-pluginization]: yetone on Magpie’s full pluginization
[^xiaomovps-pi-agent-six-hidden-settings]: Xiaomo on six hidden Pi Agent settings
[^xiaomovps-cloudflare-ai-free-tier]: Xiaomo on Cloudflare AI free tiers and usage
[^yetone-alma-ios-herdr-native-client]: yetone on Alma iOS integrating a native Herdr client
[^yetone-magpie-image-mcp-video]: yetone on magpie-image MCP supporting video generation

[^xiaomovps-pi-durable-performance]: Xiaomo on Pi Durable persistence performance

[^cursor-extension-poisoning]: Logicrw on Cursor marketplace extension poisoning
