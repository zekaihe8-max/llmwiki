---
type: Topic
title: 长对话默认压缩低于模型窗口
title_en: Long-conversation default compression below model window
description: Agent 包装层或 harness 的长对话压缩默认值常与模型标称窗口错位——可在低于窗口处提前压以换首字延迟，也可在小窗口模型上预留过大导致压缩失败；表观「上限」或「压不动」有时是产品默认，可改完整窗口、按模型压缩点，或调 Compaction / 手动 /compact。 提前压缩也可出于额度控制，但社区估算的节省比例不构成普遍保证。 全文检索提出替代路线，但与提前压缩的主张尚未得到同任务质量验证。
description_en: Agent wrappers or harnesses often misalign long-chat compression defaults with the model’s nominal window—compressing early below the window for first-token latency, or reserving too much headroom on small-window models so compression fails; an apparent “cap” or “won’t compact” can be a product default, fixable via full-window or per-model compression points, Compaction tuning, or manual /compact. Earlier compaction may also target quota control, but community saving estimates are not general guarantees. Full-history retrieval proposes an alternative, but it and earlier compaction lack matched task-quality validation.
tags: [context, compression, magpie, workbuddy, latency, harness, long-conversation, dsh, compact]
sources:
  - id: yetone-workbuddy-1m-magpie-272k
    resource: https://x.com/yetone/status/2114231150709547338
    title: yetone on WorkBuddy DeepSeek 1M vs magpie’s default 272K compression
  - id: xiaomovps-dsh-three-pitfalls
    resource: https://x.com/xiaomovps/status/2115270974811812111
    title: Xiaomo on three DeepSeek Harness desktop pitfalls
  - id: shao-meng-deeplearning-context-engineering-course
    resource: https://x.com/shao__meng/status/2115627250515320947
    title: Meng Shao on the new DeepLearning.AI Context Engineering course
  - id: shao-meng-minimax-mcode-stack
    resource: https://x.com/shao__meng/status/2115428696672866729
    title: Meng Shao on MiniMax open-sourcing the MCode Stack
  - id: minimax-mcode-stack
    resource: https://github.com/MiniMax-AI/mcode-stack
    title: MiniMax MCode Stack open-source repository
  - id: shao-meng-google-research-sleep
    resource: https://x.com/shao__meng/status/2115633448702615604
    title: Meng Shao on Google Research SLEEP offline memory consolidation
  - id: xiaomovps-pi-agent-six-hidden-settings
    resource: https://x.com/xiaomovps/status/2115658635183587414
    title: Xiaomo on six hidden Pi Agent settings
  - id: heydengai-autocompact-400k-weekly-quota
    resource: https://x.com/heydengai/status/2116121434326261778
    title: heydengai on earlier compaction and weekly quota
  - id: heydengai-retrieval-instead-of-compaction
    resource: https://x.com/heydengai/status/2116019898422083808
    title: heydengai on retrieval instead of compaction
generated:
  by: codex/gpt-6
  at: 2026-10-30T20:49:16+08:00
---

# 长对话默认压缩低于模型窗口

*Long-conversation default compression below model window*

模型或渠道标称上下文，并不等于会话工具默认把整窗交给模型或总能压得动：包装层可能在更低阈值主动压缩长对话以换更稳的首字延迟，也可能在小窗口模型上把压缩预留设得过大而导致压缩失败；用户看到的「到顶」或「压不动」，有时是产品默认，而非底层模型硬限。[^yetone-workbuddy-1m-magpie-272k][^xiaomovps-dsh-three-pitfalls]

A model or channel’s nominal context does not mean the session tool always feeds the full window or that compression always succeeds: a wrapper may proactively compress long chats at a lower threshold to keep first-token latency stable, or set too large a compaction reserve on small-window models so compression fails; the “ceiling” or “won’t compact” users see can be a product default, not a hard model limit.[^yetone-workbuddy-1m-magpie-272k][^xiaomovps-dsh-three-pitfalls]

## 综合分析 / Synthesis

调压缩阈值之前，还需判断是否必须用摘要恢复会话。[小邓同学的检索帖](../sources/articles/heydengai-retrieval-instead-of-compaction.md)提出保留完整历史、按需检索；其转述测试区分缓存命中与失效，说明压缩成本比较不能忽略缓存状态。不过该文未给出产品设置或完整方法，不能据此声称现有 harness 已支持替代路线；其架构层意义见[上下文工程](./context-engineering-for-agents.md)。[^heydengai-retrieval-instead-of-compaction]

Before tuning a compaction threshold, consider whether session recovery must use summaries. [heydengai’s retrieval post](../sources/articles/heydengai-retrieval-instead-of-compaction.md) proposes retaining full history for on-demand retrieval; its relayed test distinguishes cache hits from misses, showing why compaction cost comparisons must account for cache state. It provides no product setting or full methodology, so it does not establish that existing harnesses support this alternative; see [context engineering](./context-engineering-for-agents.md) for the architectural implications.[^heydengai-retrieval-instead-of-compaction]

压缩点还应按优化目标判断：除了保留完整窗口、改善首字延迟与保证压缩可执行，长历史的重复读取开销也是调低阈值的理由。[小邓同学的 Claude Code 帖文](../sources/articles/heydengai-autocompact-400k-weekly-quota.md)称 1M 默认接近 970K 才压缩，建议 `/autocompact 400k`；但其转述的 29% 周额度节省仅为估算，未附版本、测试设计或质量对照，故证据支持的是成本动机与待验证的调参假设，不能推出统一最佳阈值或普遍节省比例。[^heydengai-autocompact-400k-weekly-quota]

Compression points also depend on the optimization goal: alongside preserving the full window, improving first-token latency, and keeping compaction feasible, repeated reading of long histories is another reason to lower the threshold. [heydengai’s Claude Code post](../sources/articles/heydengai-autocompact-400k-weekly-quota.md) claims a 1M default compacts near 970K and suggests `/autocompact 400k`; its relayed 29% weekly-quota saving is only an estimate without versions, test design, or quality comparisons, so the evidence supports a cost motivation and a tuning hypothesis to test, rather than a universal optimal threshold or saving percentage.[^heydengai-autocompact-400k-weekly-quota]

[yetone 谈 WorkBuddy DeepSeek 1M 与 magpie 默认 272K 压缩](../sources/articles/yetone-workbuddy-1m-magpie-272k.md) 给出 Magpie 作者侧一例：[@yetone](https://x.com/yetone) 称不是 Codex 的问题——WorkBuddy 的 DeepSeek V4.1 实际是 1M；magpie 默认让 Codex 在 272K 处压缩长对话（Codex 显示约 258K），避免上下文太长时首字很慢；要用满 1M 走「设置 → 长对话 → 完整窗口」，或只给该模型单独设压缩位置。[^yetone-workbuddy-1m-magpie-272k] 原帖 <https://x.com/yetone/status/2114231150709547338>。证据覆盖归因（包装默认 vs Codex）、默认阈值与 UI 显示差、延迟动机，以及可改设置——未给出压缩算法细节或延迟测量。

[yetone on WorkBuddy DeepSeek 1M vs magpie’s default 272K compression](../sources/articles/yetone-workbuddy-1m-magpie-272k.md) is one Magpie-author case: [@yetone](https://x.com/yetone) says it is not a Codex problem—WorkBuddy’s DeepSeek V4.1 is actually 1M; magpie by default has Codex compress long chats at 272K (Codex shows ~258K) to avoid slow first tokens when context is too long; full 1M use goes through Settings → Long conversation → “完整窗口” (full window), or a per-model compression point.[^yetone-workbuddy-1m-magpie-272k] Post: <https://x.com/yetone/status/2114231150709547338>. Evidence covers attribution (wrapper default vs Codex), the default threshold vs UI display, the latency motive, and a changeable setting—not compression algorithm detail or latency measurements.

[小墨谈 DSH 桌面端三坑](../sources/articles/xiaomovps-dsh-three-pitfalls.md) 给出 DeepSeek Harness（DSH）桌面侧对侧一例：长会话 Token 越积越多、压缩失败时，最简单是对话框输入 `/compact` 手动触发；社区还发现 96K、128K 一类小窗口模型上，默认压缩预留空间可能过大，需再调 Agent 预设里的 Compaction 参数。[^xiaomovps-dsh-three-pitfalls] 原帖 <https://x.com/xiaomovps/status/2115270974811812111>。与 magpie「大窗被默认切短」同属产品默认与模型窗口错位，方向相反——小窗上预留过大导致压不动。本页不收 OpenCode Session 或第三方插件启动冲突。

[Xiaomo on three DeepSeek Harness desktop pitfalls](../sources/articles/xiaomovps-dsh-three-pitfalls.md) is a DeepSeek Harness (DSH) desktop foil: when long-session Tokens keep growing and compression fails, the simplest fix is typing `/compact` in chat; the community also finds that on small-window models such as 96K/128K the default compaction reserve may be too large, so further tune Compaction in the Agent preset.[^xiaomovps-dsh-three-pitfalls] Post: <https://x.com/xiaomovps/status/2115270974811812111>. Same family as magpie’s “large window default-shortened,” opposite direction—too much reserve on a small window so compaction fails. This page does not own OpenCode Session or third-party plugin boot conflicts.

与 [超越 token 数的 Harness 对比](./harness-comparison-beyond-tokens.md) 中 WorkBuddy 同题实测相邻但不相同：那边比成品与执行组织，本页谈的是会话工具压缩默认是否与模型窗口错位。与 [项目指令与 Token 效率](./agents-md-token-efficiency.md)、[编程 Agent 省 Token 工具与开销](./coding-agent-token-saving-tooling.md) 同属「少塞或压缩上下文」，但切面是长对话产品默认阈值/预留，而非 `AGENTS.md` 规则或外围过滤工具。

Adjacent to—but distinct from—the WorkBuddy same-prompt hands-on in [Harness comparison beyond tokens](./harness-comparison-beyond-tokens.md): that page compares finished quality and run organization; this page is whether session-tool compression defaults misalign with the model window. It shares a “less context / compress context” family with [Project instructions and token efficiency](./agents-md-token-efficiency.md) and [Coding-agent token-saving tooling and overhead](./coding-agent-token-saving-tooling.md), but the cut is a long-conversation product default threshold/reserve, not `AGENTS.md` rules or peripheral filter tools.

[邵萌谈 DeepLearning.AI Context Engineering 新课](../sources/articles/shao-meng-deeplearning-context-engineering-course.md) 从 builder 侧教 **compaction**（把长历史压成结构化摘要）与 **pruning**、**scratchpads**，并在自搭研究类 Agent 里对比开关前后跑次、做上下文管理 eval——与 magpie/DSH 的「产品默认压缩阈值/预留错位」同族不同切面：那边是成品 harness 默认值，这边是课程里主动设计的上下文管理原语；完整脉络见 [Agent 上下文工程](./context-engineering-for-agents.md)。[^shao-meng-deeplearning-context-engineering-course] 原帖 <https://x.com/shao__meng/status/2115627250515320947>。

[Meng Shao on the new DeepLearning.AI Context Engineering course](../sources/articles/shao-meng-deeplearning-context-engineering-course.md) teaches builder-side **compaction** (structured summaries of long history), **pruning**, and **scratchpads**, with before/after toggles and context-management evals in a hand-built research agent—same “compress/curate context” family as magpie/DSH default misalignment, different cut: product preset thresholds here vs intentional context-management primitives in the course; full thread under [Context engineering for agents](./context-engineering-for-agents.md).[^shao-meng-deeplearning-context-engineering-course] Post: <https://x.com/shao__meng/status/2115627250515320947>.

[邵萌谈 MiniMax 开源 MCode Stack](../sources/articles/shao-meng-minimax-mcode-stack.md) 给出产研侧 **`long-session-check`** / **`handoff-doc`**：长会话用摘要/落盘/新开会话与交接文档避免「越聊越糊」，Notes 还列 compaction vs memory——与本页 magpie/DSH **产品默认压缩阈值**错位不同切面：MCode 是 builder 主动会话治理 skill，不是改 harness 预设或 `/compact`；与课程 compaction 同族但打包成可安装清单。[^shao-meng-minimax-mcode-stack] 原帖 <https://x.com/shao__meng/status/2115428696672866729>。

[Meng Shao on MiniMax open-sourcing the MCode Stack](../sources/articles/shao-meng-minimax-mcode-stack.md) adds production **`long-session-check`** / **`handoff-doc`**: summarize/persist/start fresh and handoff docs so long chats do not degrade; Notes also list compaction vs memory—same “keep long work usable” family as this page’s magpie/DSH **product default** misalignment, different cut: MCode ships builder-side session-governance skills, not tuning harness presets or `/compact`; kin to course compaction but as installable checklists.[^shao-meng-minimax-mcode-stack] Post: <https://x.com/shao__meng/status/2115428696672866729>.

[MiniMax MCode Stack 开源仓库](../sources/articles/minimax-mcode-stack-repo.md) 把 **`long-session-check`** 描述为丢弃、摘要、落盘、压缩或新开会话与记忆范围划分，并与 Notes **03-compaction-memory** 绑定 **`handoff-doc`** 作交接——README 侧强调 builder 主动选策略，而非改 MiniMax Code、Claude、DSH 类产品的默认压缩阈值。[^minimax-mcode-stack]

[MiniMax MCode Stack open-source repository](../sources/articles/minimax-mcode-stack-repo.md) describes **`long-session-check`** as drop, summarize, or write to file; compact or start fresh; memory scoping, paired in Notes **03-compaction-memory** with **`handoff-doc`** for handoffs—README-side emphasis on builder-chosen strategies, not retuning default compression thresholds in products such as MiniMax Code, Claude, or DSH.[^minimax-mcode-stack]

[邵萌谈 Google Research「SLEEP」离线巩固记忆](../sources/articles/shao-meng-google-research-sleep.md) 描述另一条**研究层**长上下文处理：帖述 SLEEP 在 BABILong 上称可扩到约千万 token，并在睡眠巩固期把长文**压进参数记忆**（对比 GPT-4、Titans 等），动机是持续学习而非会话工具默认阈值——与 magpie/DSH「包装层何时 compact」、MCode **`long-session-check`** 的 builder 主动摘要/落盘**不同切面**；未在此假定 API Agent 已具备 SLEEP 式离线巩固。[^shao-meng-google-research-sleep] 原帖 <https://x.com/shao__meng/status/2115633448702615604>。

[Meng Shao on Google Research SLEEP offline memory consolidation](../sources/articles/shao-meng-google-research-sleep.md) describes a **research-layer** long-context path: the post claims SLEEP scales toward ~10M tokens on BABILong and **packs long text into parametric memory** during sleep consolidation (vs GPT-4, Titans, etc.) for continual learning—not session-wrapper default thresholds; a different cut from magpie/DSH “when the wrapper compacts” or MCode **`long-session-check`** builder-side summarize/persist; SLEEP-style offline consolidation is not assumed in API agents here.[^shao-meng-google-research-sleep] Post: <https://x.com/shao__meng/status/2115633448702615604>.

[小墨谈 Pi Agent 六个隐藏设置](../sources/articles/xiaomovps-pi-agent-six-hidden-settings.md) 给出 **Pi** 成品 harness 侧另一组可调旋钮（非 DSH Agent 预设或 magpie 长对话菜单）：**compaction** 的 **reserveTokens**、**keepRecentTokens**、**modelOverrides** 控制自动压缩时机、近期保留与分模型覆盖；**showCacheMissNotices** 把缓存失效、预热与压缩消耗显式提示，便于对照 Token；**cacheWarming** 从 streaming 改 **idle** 并配 **PI_CACHE_RETENTION=long** 可在任务间隔保温提示缓存——作者同时提醒保温本身有调用费用，并非越久越省。与本页 DSH「小窗预留过大压不动」、magpie「大窗默认提前压」同属**产品内压缩/缓存默认与观测**，宿主是 Pi 而非 DSH/WorkBuddy；会话分支 **/tree**、**/fork**、**/clone** 属会话治理，不单列成新 Topic。[^xiaomovps-pi-agent-six-hidden-settings] 原帖 <https://x.com/xiaomovps/status/2115658635183587414>。

[Xiaomo on six hidden Pi Agent settings](../sources/articles/xiaomovps-pi-agent-six-hidden-settings.md) adds **Pi** product-harness knobs (not DSH Agent presets or magpie long-chat menus): **compaction** **reserveTokens**, **keepRecentTokens**, and **modelOverrides** for auto-compaction timing, recent retention, and per-model overrides; **showCacheMissNotices** surfaces cache invalidation, warm-ups, and compaction spend for Token observability; **cacheWarming** streaming→**idle** plus **PI_CACHE_RETENTION=long** can keep prompt cache warm between tasks—the author also warns warming still bills API calls, so longer is not always cheaper. Same family as this page’s DSH “small-window reserve too large” and magpie “large-window early compress”—**in-product compression/cache defaults and visibility**, on Pi not DSH/WorkBuddy; session **/tree**, **/fork**, **/clone** are session governance, not a separate Topic here.[^xiaomovps-pi-agent-six-hidden-settings] Post: <https://x.com/xiaomovps/status/2115658635183587414>.

## 矛盾与变化 / Contradictions

小邓同学在[检索帖](../sources/articles/heydengai-retrieval-instead-of-compaction.md)质疑压缩方向，在[提前压缩帖](../sources/articles/heydengai-autocompact-400k-weekly-quota.md)又建议用 `/autocompact 400k` 节省额度：前者要替换摘要恢复路线，后者在既有压缩流程内调阈值，策略取向存在张力。正文未解释两者关系，不能推断作者撤回了哪一观点；两帖也都未提供同任务质量对照来裁定路线优劣。[^heydengai-retrieval-instead-of-compaction][^heydengai-autocompact-400k-weekly-quota]

heydengai questions compaction in the [retrieval post](../sources/articles/heydengai-retrieval-instead-of-compaction.md), yet recommends `/autocompact 400k` to save quota in the [earlier-compaction post](../sources/articles/heydengai-autocompact-400k-weekly-quota.md): the former would replace summary-based recovery, while the latter tunes a threshold within an existing compaction workflow. These strategies are in tension. Neither text explains their relationship, so no retraction can be inferred; neither supplies matched task-quality comparisons to settle which approach is better.[^heydengai-retrieval-instead-of-compaction][^heydengai-autocompact-400k-weekly-quota]

[yetone 的 magpie 说明](../sources/articles/yetone-workbuddy-1m-magpie-272k.md)提供用满 1M 的选项；[小邓同学](../sources/articles/heydengai-autocompact-400k-weekly-quota.md)则为节省额度主张从接近 970K 提前到 400K 压缩。两者产品与目标不同，体现窗口保留与消耗控制的取舍；后者没有推翻前者，也未证明提前压缩不影响任务质量。[^yetone-workbuddy-1m-magpie-272k][^heydengai-autocompact-400k-weekly-quota]

[yetone’s magpie explanation](../sources/articles/yetone-workbuddy-1m-magpie-272k.md) offers a full-1M option; [heydengai](../sources/articles/heydengai-autocompact-400k-weekly-quota.md) instead advocates moving compaction from near 970K to 400K to save quota. Different products and goals reveal a trade-off between window retention and consumption control; the latter neither overturns the former nor proves that earlier compaction preserves task quality.[^yetone-workbuddy-1m-magpie-272k][^heydengai-autocompact-400k-weekly-quota]

[yetone 谈 WorkBuddy DeepSeek 1M 与 magpie 默认 272K 压缩](../sources/articles/yetone-workbuddy-1m-magpie-272k.md) 描述大窗模型被包装默认在远低于标称窗口处提前压缩（换首字延迟）。[^yetone-workbuddy-1m-magpie-272k] [小墨谈 DSH 桌面端三坑](../sources/articles/xiaomovps-dsh-three-pitfalls.md) 则描述小窗口模型上默认压缩预留可能过大，导致长会话压缩失败，需 `/compact` 或调 Compaction。[^xiaomovps-dsh-three-pitfalls] 两边不互相否定「产品默认可错位」，但错位方向相反：一个是压得太早/太短，一个是预留太大压不动。实务上应按模型核对压缩阈值与预留，而非假定「默认＝窗口」或「默认总能压」。

[yetone on WorkBuddy DeepSeek 1M vs magpie’s default 272K compression](../sources/articles/yetone-workbuddy-1m-magpie-272k.md) describes a large-window model default-compressed by the wrapper far below the nominal window (for first-token latency).[^yetone-workbuddy-1m-magpie-272k] [Xiaomo on three DeepSeek Harness desktop pitfalls](../sources/articles/xiaomovps-dsh-three-pitfalls.md) describes small-window models where the default compaction reserve may be too large, so long-chat compression fails until `/compact` or Compaction tuning.[^xiaomovps-dsh-three-pitfalls] Neither cancels “product defaults can misalign,” but the directions oppose: one compresses too early/short; the other reserves so much that compaction fails. In practice check per-model compression thresholds and reserves—do not assume “default = window” or “default always compacts.”

[小墨谈 Pi Agent 六个隐藏设置](../sources/articles/xiaomovps-pi-agent-six-hidden-settings.md) 在同一「调压缩/缓存以控成本」族里补**反向提醒**：主动开 **cacheWarming**（idle + **PI_CACHE_RETENTION=long**）保温提示缓存，但作者称保温本身也会产生调用费用，并非开得越久越省钱——与「高缓存命中率≈更省」的直觉（如 [小墨 on Pi vs DeepSeek Harness rounds and cost](../sources/articles/xiaomovps-pi-vs-deepseek-harness.md) 里缓存命中叙事）并置：既要调 **reserveTokens** / **keepRecentTokens**，也要按模型与频率权衡保温，而非默认长开。[^xiaomovps-pi-agent-six-hidden-settings] 原帖 <https://x.com/xiaomovps/status/2115658635183587414>。

[Xiaomo on six hidden Pi Agent settings](../sources/articles/xiaomovps-pi-agent-six-hidden-settings.md) adds a **counter-reminder** in the same “tune compression/cache for cost” family: **cacheWarming** (idle + **PI_CACHE_RETENTION=long**) keeps prompt cache warm, but the author says warming still incurs call charges—not always cheaper when left on longer—beside the intuition that high cache hit rate saves money (as in [Xiaomo on Pi vs DeepSeek Harness rounds and cost](../sources/articles/xiaomovps-pi-vs-deepseek-harness.md)). Tune **reserveTokens** / **keepRecentTokens**, but also weigh warming to model and frequency—not default always-on.[^xiaomovps-pi-agent-six-hidden-settings] Post: <https://x.com/xiaomovps/status/2115658635183587414>.

## 相关 / Related

- [小邓同学谈提前压缩 Claude Code 上下文以省周额度 / heydengai on earlier Claude Code compaction to save weekly quota](../sources/articles/heydengai-autocompact-400k-weekly-quota.md)
- Source: [yetone 谈 WorkBuddy DeepSeek 1M 与 magpie 默认 272K 压缩](../sources/articles/yetone-workbuddy-1m-magpie-272k.md)
- Source: [小墨谈 DSH 桌面端三坑](../sources/articles/xiaomovps-dsh-three-pitfalls.md)
- Topic: [超越 token 数的 Harness 对比](./harness-comparison-beyond-tokens.md)
- Topic: [项目指令与 Token 效率](./agents-md-token-efficiency.md)
- Topic: [编程 Agent 省 Token 工具与开销](./coding-agent-token-saving-tooling.md)
- Topic: [精简核心与社区扩展](./minimal-core-community-extensions.md)
- Topic: [Agent 上下文工程](./context-engineering-for-agents.md)
- Source: [邵萌谈 DeepLearning.AI Context Engineering 新课](../sources/articles/shao-meng-deeplearning-context-engineering-course.md)
- Source: [邵萌谈 MiniMax 开源 MCode Stack](../sources/articles/shao-meng-minimax-mcode-stack.md)
- Source: [MiniMax MCode Stack 开源仓库](../sources/articles/minimax-mcode-stack-repo.md)
- Source: [邵萌谈 Google Research「SLEEP」离线巩固记忆](../sources/articles/shao-meng-google-research-sleep.md)
- Source: [小墨谈 Pi Agent 六个隐藏设置](../sources/articles/xiaomovps-pi-agent-six-hidden-settings.md)

[^yetone-workbuddy-1m-magpie-272k]: yetone on WorkBuddy DeepSeek 1M vs magpie’s default 272K compression
[^xiaomovps-dsh-three-pitfalls]: Xiaomo on three DeepSeek Harness desktop pitfalls
[^shao-meng-deeplearning-context-engineering-course]: Meng Shao on the new DeepLearning.AI Context Engineering course
[^shao-meng-minimax-mcode-stack]: Meng Shao on MiniMax open-sourcing the MCode Stack
[^minimax-mcode-stack]: MiniMax MCode Stack open-source repository
[^shao-meng-google-research-sleep]: Meng Shao on Google Research SLEEP offline memory consolidation
[^xiaomovps-pi-agent-six-hidden-settings]: Xiaomo on six hidden Pi Agent settings

[^heydengai-autocompact-400k-weekly-quota]: heydengai on earlier compaction and weekly quota

[^heydengai-retrieval-instead-of-compaction]: heydengai on retrieval instead of compaction
