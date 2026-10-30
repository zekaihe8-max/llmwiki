---
type: Topic
title: 把子 Agent 折进主循环
title_en: Fold sub-agents into the main loop
description: 构建 Agent 时默认用一个主循环 + Skills/工具渐进披露，而不是按组织架构或角色人设堆子 Agent；给全景数据与文档清楚的工具，子 Agent 只留给可测的上下文膨胀、并行新鲜窗或工具/指令冲突；同会话叠 Skills 约五步通常够用，需技能叠加或大量同时活跃时再换新鲜窗/子 Agent。
description_en: Prefer one main agent loop plus Skills/tool progressive disclosure over org-chart or persona-stacked sub-agents; give a panoramic data view and well-documented tools, reserving sub-agents for measurable context bloat, parallel fresh windows, or tool/instruction conflicts; stacking ~five skills in one session is usually fine—fresh windows/subagents when skills must stack or many stay active at once.
tags: [agents, subagents, skills, main-loop, progressive-disclosure, architecture]
sources:
  - id: shao-meng-fold-subagents-main-loop
    resource: https://x.com/shao__meng/status/2114164780986679331
    title: Meng Shao on when to fold sub-agents into the main loop
  - id: shao-meng-felix-not-2024-claude-usage
    resource: https://x.com/shao__meng/status/2113970197161988276
    title: Meng Shao relays Felix—stop using Claude the 2024 way
  - id: dexhorthy-subagent-overuse
    resource: https://x.com/dexhorthy/status/2114117782111752262
    title: Dex Horthy on subagent overuse and context management
  - id: dexhorthy-skills-session-context
    resource: https://x.com/dexhorthy/status/2114408588991222156
    title: Dex Horthy on stacking skills in one session and context dirtying
  - id: shao-meng-langchain-content-studio
    resource: https://x.com/shao__meng/status/2115345069570212202
    title: Meng Shao on four months of LangChain Content Studio
  - id: shao-meng-manus-mono
    resource: https://x.com/shao__meng/status/2115048792483660088
    title: Meng Shao on Manus Mono — a full-stack map for AI
  - id: shao-meng-deeplearning-context-engineering-course
    resource: https://x.com/shao__meng/status/2115627250515320947
    title: Meng Shao on the new DeepLearning.AI Context Engineering course
  - id: shao-meng-minimax-mcode-stack
    resource: https://x.com/shao__meng/status/2115428696672866729
    title: Meng Shao on MiniMax open-sourcing the MCode Stack
  - id: minimax-mcode-stack
    resource: https://github.com/MiniMax-AI/mcode-stack
    title: MiniMax MCode Stack open-source repository
  - id: xiaomovps-dsh-claude-codex-subagent-plugins
    resource: https://x.com/xiaomovps/status/2115640890417168388
    title: Xiaomo on DSH official plugins dispatching Claude Code / Codex sub-agents
  - id: shao-meng-addy-opus-overprompting
    resource: https://x.com/shao__meng/status/2115986116482613486
    title: "Meng Shao relays Addy on overprompting in the Opus 5.5 era"
generated:
  by: codex/gpt-6
  at: 2026-10-30T20:17:41+08:00
---
<!-- Same-file bilingual (project extension): title + title_en, description + description_en, bilingual section headings, ZH then EN body pairs. Proper nouns / product names / APIs / resource URLs stay in their common form. Do not invent facts; translate existing claims faithfully. -->

# 把子 Agent 折进主循环

*Fold sub-agents into the main loop*

企业把「每团队一个子 Agent + 总编排」当成默认，常复制 Conway 定律，换来上下文损耗、延迟与 Frankenprompt；更稳的默认是一个模型、一个上下文窗、开放式工具循环，用 Skills 与 tool search 渐进披露能力，只在可测需要时再拆子 Agent。[^shao-meng-fold-subagents-main-loop] 使用侧同样忌「堆角色 Agent」：通才模型配全景数据与文档清楚的工具，往往优于按人设切分。[^shao-meng-felix-not-2024-claude-usage] 一线观察还把「滥用」标到 2025 年中起：子 Agent 可以很高杠杆，但炒作把平均用户推向更多并行，而不是审慎的上下文管理。[^dexhorthy-subagent-overuse]

Treating “one sub-agent per team plus an orchestrator” as the default often copies Conway’s law and buys context loss, latency, and Frankenprompts; a steadier default is one model, one context window, and an open tool loop, with Skills and tool search for progressive disclosure, splitting sub-agents only when need is measurable.[^shao-meng-fold-subagents-main-loop] On the usage side, stacking role-play Agents is the same trap: a generalist model with a panoramic data view and well-documented tools usually beats persona slices.[^shao-meng-felix-not-2024-claude-usage] Frontline observation also dates “abuse” to since mid-2025: sub-agents can be high leverage, but hype pushed average users toward more parallelism instead of thoughtful context management.[^dexhorthy-subagent-overuse]

## 综合分析 / Synthesis

[邵萌谈何时把子 Agent 折进主循环](../sources/articles/shao-meng-fold-subagents-main-loop.md) 精读 Claude Platform 博文：多项内部对比里，主循环 + 按需 Skills/工具常比多专家编排质量更好、成本与延迟更低；一家客户对比多 Agent harness 与单循环时后者约 2× 更快。失败模式含跨 Agent 丢细节、子 Agent 膨胀无 owner、局部 eval 无人守端到端，以及意图分类与固定多步脚手架在模型已够强时变成多余。[^shao-meng-fold-subagents-main-loop] 原帖 <https://x.com/shao__meng/status/2114164780986679331>；原文 <https://claude.com/resources/articles/building-agents-when-to-fold-subagents-into-your-main-agent-loop>。

[Meng Shao on when to fold sub-agents into the main loop](../sources/articles/shao-meng-fold-subagents-main-loop.md) closely reads the Claude Platform post: in several internal comparisons, a main loop plus on-demand Skills/tools often beat multi-expert orchestration on quality with lower cost and latency; one customer saw a single loop about 2× faster than a multi-agent harness. Failure modes include cross-agent detail loss, bloated ownerless sub-agents, local evals with no end-to-end owner, and intent-classify / fixed multi-step scaffolding that becomes surplus once models are strong enough.[^shao-meng-fold-subagents-main-loop] Post: <https://x.com/shao__meng/status/2114164780986679331>; original: <https://claude.com/resources/articles/building-agents-when-to-fold-subagents-into-your-main-agent-loop>.

仍适用子 Agent 的边界写得很窄：可测的上下文膨胀、需并行的新鲜上下文窗、工具选型失败或系统提示指令冲突；Frontier 研究、核验、模块化权限与 Anthropic 自家多 Agent 研究系统仍可用。迁移路径强调端到端 eval、先合链式领域 Agent、过渡期子 Agent 当工具、再一次折成 Skills + MCP；多团队从「各养 Agent」改为「养 Skills/工具」，中央守系统提示与端到端质量。[^shao-meng-fold-subagents-main-loop]

The remaining sub-agent cases are narrow: measurable context bloat, parallel fresh context windows, bad tool choice or conflicting system-prompt instructions; frontier research, verification, modular permissions, and Anthropic’s own multi-agent research system still fit. The migration path stresses end-to-end evals, merging chained domain Agents first, treating sub-agents as tools in a bridge phase, then folding one at a time into Skills + MCP; multi-team ownership shifts from “each owns an Agent” to “own Skills/tools,” with a center guarding the system prompt and end-to-end quality.[^shao-meng-fold-subagents-main-loop]

[邵萌转述 Felix：别再用 2024 方式用 Claude](../sources/articles/shao-meng-felix-not-2024-claude-usage.md) 从 Claude 工程负责人侧补强同一忌讳：行业对「Agent 角色扮演」过转；硬套「你是数据科学家」常限制通才用法；与其给每个 agent 切一小片数据，不如给全景业务视图 + 文档清楚的工具，需要时再调业务工具，不必整库灌进上下文。人也应从「传话筒 / 传送带」升级为让模型自己摸全量崩溃数据、自己挑修什么。[^shao-meng-felix-not-2024-claude-usage] 原帖 <https://x.com/shao__meng/status/2113970197161988276>。

[Meng Shao relays Felix—stop using Claude the 2024 way](../sources/articles/shao-meng-felix-not-2024-claude-usage.md) reinforces the same caution from Claude’s engineering lead: the industry over-rotated on Agent role-play; forcing “you are a data scientist” often limits generalist use; prefer a panoramic business view plus well-documented tools over a small data shard per agent, calling business tools on need instead of dumping whole databases into context. Humans should also stop being messengers / conveyor belts and let the model see all crash data and choose what to fix.[^shao-meng-felix-not-2024-claude-usage] Post: <https://x.com/shao__meng/status/2113970197161988276>.

[Dex Horthy 谈子 Agent 滥用与上下文管理](../sources/articles/dexhorthy-subagent-overuse.md) 从从业者侧给时间线与用户侧失败模式：滥用自 2025 年中起偏多；子 Agent「有时间、有场合」且可以很高杠杆，但 vibeslop 与 Twitter 炒作把平均用户推向更多并行，而不是审慎的上下文管理。帖中引用 Tak：Anthropic 建议企业去掉不必要的子 Agent，配备 skills 的单一 agent 常胜过复杂多 agent 系统——与本页主循环默认同向，但不展开客户 2× 或迁移清单（那些仍见邵萌精读）。[^dexhorthy-subagent-overuse] 原帖 <https://x.com/dexhorthy/status/2114117782111752262>。

[Dex Horthy on subagent overuse and context management](../sources/articles/dexhorthy-subagent-overuse.md) adds a practitioner timeline and user-side failure mode: overuse since mid-2025; sub-agents have a time and place and can be high leverage, but vibeslop and Twitter hype pushed average users toward more parallelism instead of thoughtful context management. The post quotes Tak that Anthropic recommends removing unnecessary subagents and that a single agent with skills often beats complex multi-agent systems—aligned with this page’s main-loop default, without the customer 2× or migration checklist (those remain in Meng Shao’s close read).[^dexhorthy-subagent-overuse] Post: <https://x.com/dexhorthy/status/2114117782111752262>.

同作者另一帖 [Dex Horthy 谈同会话叠 Skills 与上下文污染](../sources/articles/dexhorthy-skills-session-context.md) 把「何时要新鲜窗 / 子 Agent」落到 Skills 加载：约五步同会话通常够用；后续 skill 会分走对先前 skill 的注意力；只有当 skills 必须**叠加**（早先指令在后期步骤仍须生效），或约 200 个独立 skills 须同会话同时活跃时，才换新鲜上下文、子 Agent，或把多份 skill 预合并进一条用户消息——与本页「子 Agent 留给可测上下文膨胀 / 并行新鲜窗」同向，是操作侧的尺度，不是改默认回多 Agent 编排。写法与勿塞权重见 [Agent Skill 编写](./agent-skill-authoring.md)。[^dexhorthy-skills-session-context] 原帖 <https://x.com/dexhorthy/status/2114408588991222156>。

The same author’s other post [Dex Horthy on stacking skills in one session and context dirtying](../sources/articles/dexhorthy-skills-session-context.md) lands “when to want a fresh window / subagent” on Skills loading: about five steps in one session are usually fine; successive skills take attention from earlier ones; only when skills must **stack** (earlier instructions still hold in later steps), or ~200 separate skills must stay active in one session, do you want fresh context, subagents, or to precombine many skill contents into one user message—aligned with this page’s “reserve sub-agents for measurable context bloat / parallel fresh windows,” as an operational scale rather than reverting the default to multi-agent orchestration. For authoring and “don’t stuff the weights,” see [Agent skill authoring](./agent-skill-authoring.md).[^dexhorthy-skills-session-context] Post: <https://x.com/dexhorthy/status/2114408588991222156>.

这与 [工作流优先于智能体](./workflows-before-agents.md) 同属「从最简可工作形态起步」，但切面不同：那边问要不要开放式 Agent，这边问 Agent 内部要不要按组织架构拆子 Agent。Skills 侧与 [Agent Skill 编写](./agent-skill-authoring.md)、[项目指令与 Token 效率](./agents-md-token-efficiency.md) 相接——渐进披露与按需加载不只是省 token，而是替代编排层的默认架构。产出约束侧见 [对抗评审与外部证据](./adversarial-review-external-evidence.md)。

This sits with [Workflows before agents](./workflows-before-agents.md) in the “start from the simplest working shape” family, on a different cut: that page asks whether to add an open-ended agent at all; this page asks whether, inside an agent, to split by org chart into sub-agents. On the Skills side it meets [Agent skill authoring](./agent-skill-authoring.md) and [Project instructions and token efficiency](./agents-md-token-efficiency.md)—progressive disclosure and on-demand load are not only token hygiene, but the default architecture that replaces an orchestration layer. For output constraints see [Adversarial review and external evidence](./adversarial-review-external-evidence.md).

[邵萌谈 LangChain Content Studio 四个月实践](../sources/articles/shao-meng-langchain-content-studio.md) 给出「可测并行 / 不堵主线程」的媒体量产例：主 Agent 统筹派活，子任务异步（`start_task` / `check_tasks` 等），因同步子 Agent 会堵住 Slack 主线程；隔夜改肤 52 页 PPT 时主 Agent 约 1 小时、子 Agent 合计逾 6 小时仍不堵对话。这落在本页保留的「需并行的新鲜窗 / 可测长任务」边界，而不是把「每角色常驻专家 Agent」写成默认；派角色与选模型力度是编排操作，主入口仍是单线程主 Agent + Skills/wiki。[^shao-meng-langchain-content-studio] 原帖 <https://x.com/shao__meng/status/2115345069570212202>。

[Meng Shao on four months of LangChain Content Studio](../sources/articles/shao-meng-langchain-content-studio.md) supplies a media-production case of “measurable parallelism / don’t block the main thread”: a main agent orchestrates while subtasks run async (`start_task` / `check_tasks`, etc.) because sync sub-agents would block the Slack main thread; an overnight 52-page deck reskin kept the main agent ~1 hour and sub-agents >6 hours total without clogging chat. That lands inside this page’s reserved “parallel fresh windows / measurable long jobs” bound, not as a default of standing expert Agents per role; role assignment and model intensity are orchestration ops, with the entry still one main-thread agent plus Skills/wiki.[^shao-meng-langchain-content-studio] Post: <https://x.com/shao__meng/status/2115345069570212202>.

[邵萌谈 Manus Mono：给 AI 一张全栈地图](../sources/articles/shao-meng-manus-mono.md) 从产研组织侧加固「忌按角色各开独立上下文」：不用 Mono 时约产/设/前/后/移动各带一个智能体、上下文互不共享再靠人工交接；用 Mono 后约 1 名构建者 + 1 个共享上下文智能体走完各端。这与本页「一个上下文窗」默认同向，但手段是跨仓说明书与统一入口，不是 Skills/tool search 渐进披露；仓图模式见 [给 AI 的全栈仓图](./ai-facing-fullstack-repo-map.md)。[^shao-meng-manus-mono] 原帖 <https://x.com/shao__meng/status/2115048792483660088>。

[Meng Shao on Manus Mono — a full-stack map for AI](../sources/articles/shao-meng-manus-mono.md) hardens “don’t open a separate context per role” from product/eng org practice: without Mono, product/design/frontend/backend/mobile each roughly had an agent with non-shared context then human handoff; with Mono, about one builder plus one shared-context agent finishes every surface. That aligns with this page’s one-context-window default, but the means are cross-repo docs and a unified entry—not Skills/tool-search progressive disclosure; the repo-map pattern lives under [AI-facing full-stack repo map](./ai-facing-fullstack-repo-map.md).[^shao-meng-manus-mono] Post: <https://x.com/shao__meng/status/2115048792483660088>.

[邵萌谈 DeepLearning.AI Context Engineering 新课](../sources/articles/shao-meng-deeplearning-context-engineering-course.md) 从课程侧命名长程 **Context Rot**（重复、矛盾、过时信息塞满窗口、长上下文表现变差），并主张更大窗口与改一句 prompt 都不够——要在 harness 里策展上下文（检索、剪枝、压缩、草稿本、记忆）。这与本页「可测上下文膨胀」同族：并行新鲜窗/子 Agent 仍是架构备选，但课程主线是在主 harness 内修上下文并用 trace/eval 量化，而不是先拆更多 Agent；完整模块清单见 [Agent 上下文工程](./context-engineering-for-agents.md)。[^shao-meng-deeplearning-context-engineering-course] 原帖 <https://x.com/shao__meng/status/2115627250515320947>。

[Meng Shao on the new DeepLearning.AI Context Engineering course](../sources/articles/shao-meng-deeplearning-context-engineering-course.md) names long-run **Context Rot** (duplicate, contradictory, stale fill; worse long-context performance) and argues bigger windows and one-line prompt edits are insufficient—you curate context inside the harness (retrieval, pruning, compaction, scratchpads, memory). That shares this page’s “measurable context bloat” family: parallel fresh windows/sub-agents remain an architecture option, but the course’s main thread is fixing context in the main harness with traces/evals, not splitting more agents first; full module cut lives under [Context engineering for agents](./context-engineering-for-agents.md).[^shao-meng-deeplearning-context-engineering-course] Post: <https://x.com/shao__meng/status/2115627250515320947>.

[邵萌谈 MiniMax 开源 MCode Stack](../sources/articles/shao-meng-minimax-mcode-stack.md) 用 MiniMax Code 开源清单把「何时拆」写成可安装 skill **`subagent-split-check`**，并在 **MCode Engineering Notes 01** 明确：子 Agent 首先是**隔离上下文**的工具，不是按工种/问题类型开分身；默认主循环 + 按需加载技能，**量到**上下文才是瓶颈再拆——与本页主循环默认及「可测上下文膨胀」边界同向，且把 `independent-review` 等评审 skill 绑到「干净上下文只看 diff+需求+测试」。[^shao-meng-minimax-mcode-stack] 原帖 <https://x.com/shao__meng/status/2115428696672866729>；仓库 <https://github.com/MiniMax-AI/mcode-stack>。

[Meng Shao on MiniMax open-sourcing the MCode Stack](../sources/articles/shao-meng-minimax-mcode-stack.md) packages “when to split” as the installable **`subagent-split-check`** skill and **MCode Engineering Notes 01**: sub-agents are first **context-isolation** tools, not clones by job type; default main loop plus on-demand skills, split only once context is **measured** as the bottleneck—aligned with this page’s main-loop default and the “measurable context bloat” bound, with review skills such as `independent-review` tied to a clean context that sees only diff, requirements, and tests.[^shao-meng-minimax-mcode-stack] Post: <https://x.com/shao__meng/status/2115428696672866729>; repo: <https://github.com/MiniMax-AI/mcode-stack>.

[MiniMax MCode Stack 开源仓库](../sources/articles/minimax-mcode-stack-repo.md) 在 README 的 Notes 表把 **01-subagent** 的 companion skills 写全为 `independent-review`、`subagent-split-check`、`harness-experiment`，并把 `independent-review` 定义为在**干净上下文**里只看 diff、需求与测试结果——与本页「子 Agent 留给可测隔离 / 评审用 fresh 窗」的操作边界一致，且 stack 按人打包（`stacks/ronny/` 等）而非按工种常驻分身。[^minimax-mcode-stack]

[MiniMax MCode Stack open-source repository](../sources/articles/minimax-mcode-stack-repo.md) README Notes table lists **01-subagent** companions as `independent-review`, `subagent-split-check`, and `harness-experiment`, and defines `independent-review` as reviewing from a **clean context** with only diff, requirements, and test results—aligned with this page’s “sub-agents for measurable isolation / review fresh windows,” with stacks bundled per person (`stacks/ronny/`, etc.) rather than standing clones by job type.[^minimax-mcode-stack]

[小墨谈 DSH 官方插件调 Claude Code / Codex 子 Agent](../sources/articles/xiaomovps-dsh-claude-codex-subagent-plugins.md) 给出 harness 内「把别的 Coding Agent 当子 Agent 派活」的一线产品形态：DSH 实验性官方插件安装启用后，事先登录 Claude Code / Codex CLI，即可把任务交给它们执行，不必自写对接——落在本页「工具/能力冲突或需专用 fresh 执行窗时拆子 Agent」的窄边界，而不是默认按工种常驻多 Agent 编排；作者仍称实验性且 Codex 新版模型有兼容失败。[^xiaomovps-dsh-claude-codex-subagent-plugins] 原帖 <https://x.com/xiaomovps/status/2115640890417168388>。

[Xiaomo on DSH official plugins dispatching Claude Code / Codex sub-agents](../sources/articles/xiaomovps-dsh-claude-codex-subagent-plugins.md) shows a product-line shape for “dispatch another coding agent as sub-agent” inside a harness: after enabling DSH’s experimental first-party plugins and logging into the Claude Code / Codex CLIs, DSH can hand tasks to them without a custom bridge—inside this page’s narrow bound of splitting when tools/capabilities conflict or a dedicated fresh execution window is needed, not a default org-chart of standing agents; the author still calls it experimental with Codex newer-model compatibility failures.[^xiaomovps-dsh-claude-codex-subagent-plugins] Post: <https://x.com/xiaomovps/status/2115640890417168388>.

拆分的判断还应包含任务粒度与自主完成能力：大体量、可独立的长审计或迁移可以主动请求并行，琐碎活拆分则增加成本与延迟；先让单会话能独立跑完，再扩展到多会话。干净上下文中的 diff 评审属于核验隔离，与默认主循环一致；子 Agent 的并行与第二意见不自动意味着更高质量。 见[邵萌转述 Addy](../sources/articles/shao-meng-addy-opus-overprompting.md)。[^shao-meng-addy-opus-overprompting]

Splitting decisions should also consider task size and autonomous completion: large independent audits or migrations can justify explicitly requested parallelism, while trivial splits add cost and latency; establish that one session can finish independently before expanding to multiple sessions. Diff review in a clean context provides verification isolation consistent with the main-loop default; parallelism and second opinions do not automatically improve quality. See [Meng Shao relaying Addy](../sources/articles/shao-meng-addy-opus-overprompting.md).[^shao-meng-addy-opus-overprompting]

## 矛盾与变化 / Contradictions

[智能体规模化工程](./agent-scaled-engineering.md) 据 Cherny 斯坦福分享强调可跑长时、衍生大量智能体的循环；本页所据 Claude 博文则主张刚性「每问题类型/每团队一子 Agent」常挡住更强模型，默认应折回主循环。两者不互相取消：前者谈速度与组织 sparseness 下的多智能体产能，后者谈产品入口上的编排默认与迁移；适用边界不同，但「多 Agent 是否默认正确」上存在张力。[^shao-meng-fold-subagents-main-loop]

[Agent-scaled engineering](./agent-scaled-engineering.md), from Cherny’s Stanford talk, stresses long-running loops that spawn many agents; this page’s Claude post argues rigid “one sub-agent per problem type / per team” often blocks stronger models and should default to folding back into the main loop. They do not cancel each other: the former is about multi-agent throughput under velocity and organizational sparseness; the latter is about orchestration defaults and migration at a product entry point. Scope differs, but they tension on whether multi-agent is the right default.[^shao-meng-fold-subagents-main-loop]

[Content Studio](../sources/articles/shao-meng-langchain-content-studio.md) 的异步子任务若被误读成「默认多 Agent 编排」会与本页主循环默认打架；按文意它是为几小时媒体子活与多人改 brief 而保留并行，主 Agent 仍是统筹入口——与「子 Agent 有时间有场合」同向，不是把组织图复制成常驻专家层。若把派角色固化成每职能一个长期子 Agent 默认，则会滑回本页所反对的形态。[^shao-meng-langchain-content-studio]

[Content Studio](../sources/articles/shao-meng-langchain-content-studio.md)’s async subtasks would clash with this page’s main-loop default if misread as “multi-agent orchestration by default”; in the piece they keep parallelism for multi-hour media subwork and mid-flight brief changes, with the main agent still the orchestration entry—aligned with “sub-agents have a time and place,” not copying an org chart into standing experts. Hardening role dispatch into a default long-lived sub-agent per function would slide back into the shape this page rejects.[^shao-meng-langchain-content-studio]

Felix 访谈中的对抗评审多线程，是**产出核验**上的多会话分工，不是按组织架构堆长期角色子 Agent；与本页「默认主循环」不冲突，但若把「证明你错了」线程固化成常驻专家 Agent 编排，又会滑回本页所反对的默认。详见 [对抗评审与外部证据](./adversarial-review-external-evidence.md)。[^shao-meng-felix-not-2024-claude-usage]

Felix’s interview multi-thread adversarial review is a **verification** split across sessions, not long-lived role sub-agents by org chart; it does not conflict with this page’s main-loop default, but hardening “prove you wrong” threads into standing expert-Agent orchestration would slide back into the default this page rejects. See [Adversarial review and external evidence](./adversarial-review-external-evidence.md).[^shao-meng-felix-not-2024-claude-usage]

## 相关 / Related

- [邵萌转述 Addy / Meng Shao relays Addy](../sources/articles/shao-meng-addy-opus-overprompting.md)

- Source: [邵萌谈何时把子 Agent 折进主循环](../sources/articles/shao-meng-fold-subagents-main-loop.md)
- Source: [邵萌转述 Felix：别再用 2024 方式用 Claude](../sources/articles/shao-meng-felix-not-2024-claude-usage.md)
- Source: [Dex Horthy 谈子 Agent 滥用与上下文管理](../sources/articles/dexhorthy-subagent-overuse.md)
- Source: [Dex Horthy 谈同会话叠 Skills 与上下文污染](../sources/articles/dexhorthy-skills-session-context.md)
- Source: [邵萌谈 LangChain Content Studio 四个月实践](../sources/articles/shao-meng-langchain-content-studio.md)
- Source: [邵萌谈 Manus Mono：给 AI 一张全栈地图](../sources/articles/shao-meng-manus-mono.md)
- Topic: [给 AI 的全栈仓图](./ai-facing-fullstack-repo-map.md)
- Topic: [工作流优先于智能体](./workflows-before-agents.md)
- Topic: [智能体规模化工程](./agent-scaled-engineering.md)
- Topic: [Agent Skill 编写](./agent-skill-authoring.md)
- Topic: [项目指令与 Token 效率](./agents-md-token-efficiency.md)
- Topic: [对抗评审与外部证据](./adversarial-review-external-evidence.md)
- Topic: [公司级 Agent Harness 五原语](./company-agent-harness.md)
- Topic: [Agent 上下文工程](./context-engineering-for-agents.md)
- Source: [邵萌谈 DeepLearning.AI Context Engineering 新课](../sources/articles/shao-meng-deeplearning-context-engineering-course.md)
- Source: [邵萌谈 MiniMax 开源 MCode Stack](../sources/articles/shao-meng-minimax-mcode-stack.md)
- Source: [MiniMax MCode Stack 开源仓库](../sources/articles/minimax-mcode-stack-repo.md)
- Source: [小墨谈 DSH 官方插件调 Claude Code / Codex 子 Agent](../sources/articles/xiaomovps-dsh-claude-codex-subagent-plugins.md)

[^shao-meng-fold-subagents-main-loop]: Meng Shao on when to fold sub-agents into the main loop
[^shao-meng-felix-not-2024-claude-usage]: Meng Shao relays Felix—stop using Claude the 2024 way
[^dexhorthy-subagent-overuse]: Dex Horthy on subagent overuse and context management
[^dexhorthy-skills-session-context]: Dex Horthy on stacking skills in one session and context dirtying
[^shao-meng-langchain-content-studio]: Meng Shao on four months of LangChain Content Studio
[^shao-meng-manus-mono]: Meng Shao on Manus Mono — a full-stack map for AI
[^shao-meng-deeplearning-context-engineering-course]: Meng Shao on the new DeepLearning.AI Context Engineering course
[^shao-meng-minimax-mcode-stack]: Meng Shao on MiniMax open-sourcing the MCode Stack
[^minimax-mcode-stack]: MiniMax MCode Stack open-source repository
[^xiaomovps-dsh-claude-codex-subagent-plugins]: Xiaomo on DSH official plugins dispatching Claude Code / Codex sub-agents

[^shao-meng-addy-opus-overprompting]: Meng Shao relays Addy on overprompting in the Opus 5.5 era
