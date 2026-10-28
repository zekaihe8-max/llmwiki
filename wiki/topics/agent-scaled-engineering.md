---
type: Topic
title: 智能体规模化工程
title_en: Agent-scaled engineering
description: 当智能体写出大部分代码时，团队靠自动化新瓶颈、跑长时智能体循环、保持小团队，并为数月后的模型而构建取胜；搭 Agent 本身不值钱，工具、工作流与业务熟知更值钱；人少当传话筒，把全量数据与真结果交给模型；各阶段有 Agent 还不等于有边界的 L4 软件工厂。
description_en: When agents write most of the code, teams win by automating new bottlenecks, running long agent loops, staying small, and building for models months ahead; assembling Agents is low-value next to tools, workflows, and domain knowledge; humans should stop being messengers and hand full data plus real outcomes to the model; agents across the SDLC are not yet a bounded L4 software factory.
tags: [agents, engineering, claude-code, velocity, domain-knowledge]
sources:
  - id: mihail-eric-bcherny-stanford
    resource: https://x.com/mihail_eric/status/2113277483701395508
    title: Mihail Eric on Boris Cherny at Stanford
  - id: shao-meng-bcherny-stanford
    resource: https://x.com/shao__meng/status/2113291579750551931
    title: Meng Shao on Boris Cherny at Stanford
  - id: dotey-building-agents-not-valuable
    resource: https://x.com/dotey/status/2113637983333093855
    title: Dotey on building agents not being valuable
  - id: op7418-thariq-left-anthropic
    resource: https://x.com/op7418/status/2113815343173116124
    title: 歸藏 relays Thariq departure leak
  - id: op7418-boris-cherny-clarification
    resource: https://x.com/op7418/status/2113845519110078669
    title: 歸藏 clarifies Boris is the Claude Code author
  - id: shao-meng-agentic-sdlc-not-factory
    resource: https://x.com/shao__meng/status/2113923043936612792
    title: Meng Shao on Agentic SDLC ≠ software factory
  - id: shao-meng-fold-subagents-main-loop
    resource: https://x.com/shao__meng/status/2114164780986679331
    title: Meng Shao on when to fold sub-agents into the main loop
  - id: shao-meng-felix-not-2024-claude-usage
    resource: https://x.com/shao__meng/status/2113970197161988276
    title: Meng Shao relays Felix—stop using Claude the 2024 way
  - id: oran-ge-ai-traffic-search-rebuild
    resource: https://x.com/oran_ge/status/2114212241188991318
    title: Orange AI on rebuilding search after AI traffic surpasses humans
  - id: dotey-felix-hunger-beats-tenure
    resource: https://x.com/dotey/status/2115218749888634988
    title: Dotey relays Felix—hunger beats tenure
  - id: dotey-lesse-multiagent-four-infra
    resource: https://x.com/dotey/status/2115229306490126432
    title: Dotey relays Lesse—four infra gaps for thousand-agent systems
  - id: shao-meng-manus-mono
    resource: https://x.com/shao__meng/status/2115048792483660088
    title: Meng Shao on Manus Mono — a full-stack map for AI
generated:
  by: cursor-agent/composer
  at: 2026-10-28T20:45:00+08:00
---

# 智能体规模化工程

*Agent-scaled engineering*

一旦编码智能体产出团队的大部分乃至全部产出，稀缺工作转向打通速度：自动化评审与审批、跑长时多智能体循环、保持人团队精简、把产品对准下一版模型，并让领域专家拥有构建者。[^mihail-eric-bcherny-stanford][^shao-meng-bcherny-stanford] 搭 Agent 本身不值钱；给 Agent 做工具、用 Agent 重构工作流，以及对具体业务的熟知，更值钱。[^dotey-building-agents-not-valuable] 人也不应再当传话筒：把全量数据、业务工具与电脑交给模型，让它自己挑问题；个人层少做「润色邮件」，多把真正想要的结果交给模型直到撞上当前天花板，才吃得到下一代模型红利。[^shao-meng-felix-not-2024-claude-usage]

Once coding agents produce most or all of a team's output, the scarce work shifts to unblocking velocity: automate review and approvals, run long multi-agent loops, keep the human team small, aim products at the next model release, and let domain experts own the builders.[^mihail-eric-bcherny-stanford][^shao-meng-bcherny-stanford] Assembling Agents itself is low-value; building tools for Agents, using Agents to restructure workflows, and knowing the concrete domain matter more.[^dotey-building-agents-not-valuable] Humans should also stop being messengers: hand the model full data, business tools, and a computer so it picks problems itself; at the personal layer, skip “polish this email” and hand it the outcome you actually want until you hit today’s ceiling—that is how you capture the next model’s upside.[^shao-meng-felix-not-2024-claude-usage]

## 综合分析 / Synthesis

[Mihail Eric on Boris Cherny at Stanford](../sources/articles/mihail-eric-bcherny-stanford.md) 与 [Meng Shao on Boris Cherny at Stanford](../sources/articles/shao-meng-bcherny-stanford.md) 都转述 Cherny 在 The Modern Software Developer 上的要点。[^mihail-eric-bcherny-stanford][^shao-meng-bcherny-stanford] 自约十一月起 Claude 几乎写完其团队全部代码，人均产出约 10 倍，于是他们自动化了 code review（下一步是审批）；Claude Code 早期收入平坦，直到更强模型（Opus 4）解锁增长，因此他通过阅读失败模式的 transcript，为六个月后的模型构建；一两人的小团队可胜过大得多的团队；他跑数天或数周的智能体循环；当代码变便宜，对问题的深刻认知成为剩余 alpha。Shao 的中文摘要框出同一五条原则，并记 Cherny 回答说他在跑数千个 Claude 智能体。[^shao-meng-bcherny-stanford]

[Mihail Eric on Boris Cherny at Stanford](../sources/articles/mihail-eric-bcherny-stanford.md) and [Meng Shao on Boris Cherny at Stanford](../sources/articles/shao-meng-bcherny-stanford.md) both relay Cherny's takeaways from The Modern Software Developer.[^mihail-eric-bcherny-stanford][^shao-meng-bcherny-stanford] Claude writing nearly all of his team's code since about November, with roughly 10x output per engineer, led them to automate code review (and eye approvals next); early Claude Code revenue stayed flat until a smarter model (Opus 4) unlocked growth, so he builds for the model six months out by reading transcripts for failure modes; small teams of one or two can outship much larger ones; he runs agent loops for days or weeks; and when code is cheap, deep problem knowledge is the remaining alpha. Shao's Chinese summary frames the same five principles and notes Cherny answering that he was running thousands of Claude agents.[^shao-meng-bcherny-stanford]

[宝玉谈搭 Agent 不值钱](../sources/articles/dotey-building-agents-not-valuable.md) 从价值排序补强同一方向：搭 Agent 像搭系统、装软件、写代码一样，本身不值钱；给 Agent 做工具、用 Agent 重构工作流、用代码解决业务问题才值钱。[^dotey-building-agents-not-valuable] 他所回应的帖文还称，在 Agent+ 场景里会搭 Agent 最不重要，对具体场景业务的熟知更重要——与 Cherny「领域专属构建者」主张同向。[^dotey-building-agents-not-valuable]

[Dotey on building agents not being valuable](../sources/articles/dotey-building-agents-not-valuable.md) reinforces the same direction on value: assembling Agents, like assembling systems, installing software, or writing code, is not where the value sits; building tools for Agents, using Agents to restructure workflows, and solving business problems with code are.[^dotey-building-agents-not-valuable] The post he replies to adds that in Agent+ settings, knowing how to assemble an Agent matters least and knowing the concrete domain matters more—aligned with Cherny's domain-specific builders claim.[^dotey-building-agents-not-valuable]

[Orange AI 谈 AI 流量超人类后搜索要重做](../sources/articles/oran-ge-ai-traffic-search-rebuild.md) 给出「给 Agent 做工具」的基建实例：联网搜索从给人点链、变成给模型与 Agent 塞上下文，需要正文直出、权威信源门槛与压低多轮延迟；腾讯「元宝搜索」一类接口把平均搜索调用从约 8 降到约 5，正是工具层提效而非再堆一层 Agent。[^oran-ge-ai-traffic-search-rebuild] 搜索接口形态的主张归档在 [面向 Agent 的联网搜索重做](./agent-native-web-search.md)。

[Orange AI on rebuilding search after AI traffic surpasses humans](../sources/articles/oran-ge-ai-traffic-search-rebuild.md) is a concrete “tools for Agents” infra case: web search moves from human link-clicking to stuffing context for models and Agents, needing full body, authoritative-source gates, and lower multi-round latency; APIs like Tencent Yuanbao Search cutting average search calls from ~8 to ~5 are tool-layer gains, not another Agent stack.[^oran-ge-ai-traffic-search-rebuild] Search-API shape claims live under [Agent-native web search rebuild](./agent-native-web-search.md).

[邵萌谈 Agentic SDLC 不等于软件工厂](../sources/articles/shao-meng-agentic-sdlc-not-factory.md) 把同一「实现变便宜」判断推到系统层：各阶段有 Agent 还不等于软件工厂；口号是 System > Agents > LLMs；务实目标是有边界的 L4——授权生命周期、可检验证据与安全兜底，团队须自建并拥有边界而非堆模型。[^shao-meng-agentic-sdlc-not-factory] 详见 [软件工厂](./software-factory.md)。

[Meng Shao on Agentic SDLC ≠ software factory](../sources/articles/shao-meng-agentic-sdlc-not-factory.md) pushes the same “implementation got cheap” judgment to the system layer: agents across the SDLC are not yet a software factory; the slogan is System > Agents > LLMs; the practical goal is bounded L4—authorized lifecycles, inspectable evidence, and safe containment, with teams building and owning boundaries rather than stacking models.[^shao-meng-agentic-sdlc-not-factory] See [Software factory](./software-factory.md).

[邵萌转述 Felix：别再用 2024 方式用 Claude](../sources/articles/shao-meng-felix-not-2024-claude-usage.md) 把「工具与工作流 > 堆 Agent」说到 Claude 工程日常：自动化砍烦人贵活经济价值最清楚，但他更在意增强——改工作流与定义好坏，让人做成以前做不到的事；一人/两人团队做大公司更可行，秘诀仍是共情与真价值；能力过剩（capability overhang）要求把真正想要的结果交给模型，而不是停在浅层润色。工程师价值看用户是否愿为结果付钱，不是背完整 React API。[^shao-meng-felix-not-2024-claude-usage] 原帖 <https://x.com/shao__meng/status/2113970197161988276>。产出侧约束见 [对抗评审与外部证据](./adversarial-review-external-evidence.md)；忌堆角色 Agent 见 [把子 Agent 折进主循环](./fold-subagents-into-main-loop.md)。

[Meng Shao relays Felix—stop using Claude the 2024 way](../sources/articles/shao-meng-felix-not-2024-claude-usage.md) takes “tools and workflows > stacking Agents” into Claude engineering practice: automation of annoying expensive work has the clearest near-term value, but he cares more about augmentation—changing workflows and definitions of quality so people do what they could not before; one- or two-person teams doing large-company work is more feasible, with empathy and real value still the secret; capability overhang means handing the model the outcome you actually want, not stopping at shallow polish. Engineer value is whether users pay for outcomes, not memorizing the full React API.[^shao-meng-felix-not-2024-claude-usage] Post: <https://x.com/shao__meng/status/2113970197161988276>. Output-side constraints: [Adversarial review and external evidence](./adversarial-review-external-evidence.md); against stacking role Agents: [Fold sub-agents into the main loop](./fold-subagents-into-main-loop.md).

[宝玉转述 Felix：取消编程面试与冲劲胜过资历](../sources/articles/dotey-felix-hunger-beats-tenure.md) 用同一作者的产品实例加固「小团队 / 实现变便宜」：Claude Code 桌面 GUI 由两位入职不久的工程师周末做出可跑原型，约八天后首个公开版上线；并主张个人成果更少取决于框架资历。招聘侧去掉传统编程题、冲劲与原型路径见专页 [冲劲胜过资历](./hunger-beats-tenure.md)，本页只收「新人小团队能出产品面」的产能证据。[^dotey-felix-hunger-beats-tenure] 原帖 <https://x.com/dotey/status/2115218749888634988>。

[Dotey relays Felix—dropping coding interviews and hunger beats tenure](../sources/articles/dotey-felix-hunger-beats-tenure.md) hardens the same author’s “small team / implementation got cheap” line with a product case: Claude Code’s desktop GUI began as a weekend-runnable prototype by two recent hires, with a first public release about eight days later; individual shipping also depends less on framework tenure. Hiring-side drop of classic coding puzzles and the hunger/prototype path live on [Hunger beats tenure](./hunger-beats-tenure.md); this page only takes the throughput evidence that a junior pair can ship product surface.[^dotey-felix-hunger-beats-tenure] Post: <https://x.com/dotey/status/2115218749888634988>.

[宝玉转述 Lesse：上千 Agent 仍缺四道基建题](../sources/articles/dotey-lesse-multiagent-four-infra.md) 从平台工程侧加固「工程师仍有事做」：许多人因 AI 会写代码而焦虑手艺贬值，Anthropic 平台工程负责人 Katelyn Lesse 主张相反——解锁上千智能体系统，仍缺调度、身份授权、隔离与可观测急停，得先靠程序员解决；现在是当工程师最有意思的时候之一。本页只收「稀缺工作可落在多智能体平台基建」的工程师价值证据；四道缺口清单见 [多智能体四道基建题](./multiagent-infra-four-problems.md)。[^dotey-lesse-multiagent-four-infra] 原帖 <https://x.com/dotey/status/2115229306490126432>。

[Dotey relays Lesse—four infra gaps for thousand-agent systems](../sources/articles/dotey-lesse-multiagent-four-infra.md) hardens “engineers still have work” from the platform-eng side: many fear AI coding devalues craft; Anthropic platform eng lead Katelyn Lesse argues the opposite—unlocking thousand-agent systems still needs programmers on scheduling, identity/authz, isolation, and observability/kill switches, and now is one of the most interesting times to be an engineer. This page only takes the engineer-value evidence that scarce work can land on multiagent platform infra; the four-gap checklist lives under [Four infra gaps for large multiagent systems](./multiagent-infra-four-problems.md).[^dotey-lesse-multiagent-four-infra] Post: <https://x.com/dotey/status/2115229306490126432>.

[邵萌谈 Manus Mono：给 AI 一张全栈地图](../sources/articles/shao-meng-manus-mono.md) 给出「工具与工作流 > 堆角色 Agent、小团队吃多端」的产研落地：瓶颈在联调人对齐而非写码；用统一入口 + 给 AI 的仓说明书（非揉大仓）让约 1 名构建者 + 1 个共享上下文智能体走完前后端移动，对比约 5 人 + 5 个独立上下文智能体再人工交接；本地验证与发布操作逐步补齐，审批仍在人。仓图模式本身见 [给 AI 的全栈仓图](./ai-facing-fullstack-repo-map.md)；本页只收产能与价值排序证据。[^shao-meng-manus-mono] 原帖 <https://x.com/shao__meng/status/2115048792483660088>。

[Meng Shao on Manus Mono — a full-stack map for AI](../sources/articles/shao-meng-manus-mono.md) supplies a product/eng landing of “tools and workflows > stacking role Agents, small teams covering many surfaces”: the bottleneck was integration alignment, not coding; a unified entry plus AI-facing repo docs (not a mega-repo merge) lets about one builder plus one shared-context agent finish frontend, backend, and mobile, versus about five people plus five separate-context agents then human handoff; local verify and release ops land step by step with approvals still human. The repo-map pattern itself lives under [AI-facing full-stack repo map](./ai-facing-fullstack-repo-map.md); this page only takes the throughput and value-ordering evidence.[^shao-meng-manus-mono] Post: <https://x.com/shao__meng/status/2115048792483660088>.

## 矛盾与变化 / Contradictions

与「预定义工作流优先于开放式智能体」的张力，记在 [Workflows before agents](./workflows-before-agents.md)。

Tension with preferring predefined workflows over open-ended agents is recorded under [Workflows before agents](./workflows-before-agents.md).

与「默认把子 Agent 折进主循环」的张力，记在 [把子 Agent 折进主循环](./fold-subagents-into-main-loop.md)：本页据 Cherny 强调长时多智能体循环；[邵萌谈何时把子 Agent 折进主循环](../sources/articles/shao-meng-fold-subagents-main-loop.md) 所据 Claude 博文主张刚性按团队/问题类型拆子 Agent 常挡住更强模型，产品入口上应默认主循环 + Skills。[^shao-meng-fold-subagents-main-loop] 适用边界不同（产能 sparseness vs 编排默认），但「多 Agent 是否默认正确」上存在张力。

Tension with “fold sub-agents into the main loop by default” is recorded under [Fold sub-agents into the main loop](./fold-subagents-into-main-loop.md): this page, via Cherny, stresses long multi-agent loops; [Meng Shao on when to fold sub-agents into the main loop](../sources/articles/shao-meng-fold-subagents-main-loop.md) relays a Claude post that rigid per-team / per-problem-type sub-agents often block stronger models and that product entry points should default to a main loop plus Skills.[^shao-meng-fold-subagents-main-loop] Scope differs (throughput sparseness vs orchestration default), but they tension on whether multi-agent is the right default.

- 本页所据 [Mihail Eric](../sources/articles/mihail-eric-bcherny-stanford.md) / [Meng Shao](../sources/articles/shao-meng-bcherny-stanford.md) 将 Boris Cherny 称为 Claude Code 创作者；[歸藏转述 Thariq 离职爆料](../sources/articles/op7418-thariq-left-anthropic.md) 曾称 Thariq 为 Claude Code 作者；随后 [歸藏澄清](../sources/articles/op7418-boris-cherny-clarification.md) 改称 Boris 才是作者与产品线负责人。[^mihail-eric-bcherny-stanford][^op7418-thariq-left-anthropic][^op7418-boris-cherny-clarification] 角色与归属变化详见 [Claude Code 作者与社区话筒](./claude-code-authorship-and-voice.md)。
- Sources on this page ([Mihail Eric](../sources/articles/mihail-eric-bcherny-stanford.md) / [Meng Shao](../sources/articles/shao-meng-bcherny-stanford.md)) call Boris Cherny the creator of Claude Code; [歸藏 relays Thariq departure leak](../sources/articles/op7418-thariq-left-anthropic.md) first called Thariq the Claude Code author; then [歸藏's clarification](../sources/articles/op7418-boris-cherny-clarification.md) names Boris as the author and product-line lead.[^mihail-eric-bcherny-stanford][^op7418-thariq-left-anthropic][^op7418-boris-cherny-clarification] Role and authorship changes are tracked under [Claude Code authorship and community voice](./claude-code-authorship-and-voice.md).

## 相关 / Related

- 来源：[Mihail Eric on Boris Cherny at Stanford](../sources/articles/mihail-eric-bcherny-stanford.md)
- 来源：[Meng Shao on Boris Cherny at Stanford](../sources/articles/shao-meng-bcherny-stanford.md)
- 来源：[宝玉谈搭 Agent 不值钱](../sources/articles/dotey-building-agents-not-valuable.md)
- 来源：[歸藏转述 Thariq 离职爆料](../sources/articles/op7418-thariq-left-anthropic.md)
- 来源：[歸藏澄清 Boris 才是 Claude Code 作者](../sources/articles/op7418-boris-cherny-clarification.md)
- 来源：[邵萌谈 Agentic SDLC 不等于软件工厂](../sources/articles/shao-meng-agentic-sdlc-not-factory.md)
- 来源：[邵萌谈何时把子 Agent 折进主循环](../sources/articles/shao-meng-fold-subagents-main-loop.md)
- 来源：[邵萌转述 Felix：别再用 2024 方式用 Claude](../sources/articles/shao-meng-felix-not-2024-claude-usage.md)
- 来源：[Orange AI 谈 AI 流量超人类后搜索要重做](../sources/articles/oran-ge-ai-traffic-search-rebuild.md)
- 来源：[宝玉转述 Felix：取消编程面试与冲劲胜过资历](../sources/articles/dotey-felix-hunger-beats-tenure.md)
- 来源：[宝玉转述 Lesse：上千 Agent 仍缺四道基建题](../sources/articles/dotey-lesse-multiagent-four-infra.md)
- 来源：[邵萌谈 Manus Mono：给 AI 一张全栈地图](../sources/articles/shao-meng-manus-mono.md)
- 主题：[给 AI 的全栈仓图](./ai-facing-fullstack-repo-map.md)
- 主题：[冲劲胜过资历](./hunger-beats-tenure.md)
- 主题：[多智能体四道基建题](./multiagent-infra-four-problems.md)
- 主题：[Workflows before agents](./workflows-before-agents.md)
- 主题：[Claude Code 作者与社区话筒](./claude-code-authorship-and-voice.md)
- 主题：[软件工厂](./software-factory.md)
- 主题：[把子 Agent 折进主循环](./fold-subagents-into-main-loop.md)
- 主题：[对抗评审与外部证据](./adversarial-review-external-evidence.md)
- 主题：[面向 Agent 的联网搜索重做](./agent-native-web-search.md)

- Source: [Mihail Eric on Boris Cherny at Stanford](../sources/articles/mihail-eric-bcherny-stanford.md)
- Source: [Meng Shao on Boris Cherny at Stanford](../sources/articles/shao-meng-bcherny-stanford.md)
- Source: [Dotey on building agents not being valuable](../sources/articles/dotey-building-agents-not-valuable.md)
- Source: [歸藏 relays Thariq departure leak](../sources/articles/op7418-thariq-left-anthropic.md)
- Source: [歸藏 clarifies Boris is the Claude Code author](../sources/articles/op7418-boris-cherny-clarification.md)
- Source: [Meng Shao on Agentic SDLC ≠ software factory](../sources/articles/shao-meng-agentic-sdlc-not-factory.md)
- Source: [Meng Shao on when to fold sub-agents into the main loop](../sources/articles/shao-meng-fold-subagents-main-loop.md)
- Source: [Meng Shao relays Felix—stop using Claude the 2024 way](../sources/articles/shao-meng-felix-not-2024-claude-usage.md)
- Source: [Orange AI on rebuilding search after AI traffic surpasses humans](../sources/articles/oran-ge-ai-traffic-search-rebuild.md)
- Source: [Dotey relays Felix—hunger beats tenure](../sources/articles/dotey-felix-hunger-beats-tenure.md)
- Source: [Dotey relays Lesse—four infra gaps for thousand-agent systems](../sources/articles/dotey-lesse-multiagent-four-infra.md)
- Source: [Meng Shao on Manus Mono — a full-stack map for AI](../sources/articles/shao-meng-manus-mono.md)
- Topic: [AI-facing full-stack repo map](./ai-facing-fullstack-repo-map.md)
- Topic: [Hunger beats tenure](./hunger-beats-tenure.md)
- Topic: [Four infra gaps for large multiagent systems](./multiagent-infra-four-problems.md)
- Topic: [Workflows before agents](./workflows-before-agents.md)
- Topic: [Claude Code authorship and community voice](./claude-code-authorship-and-voice.md)
- Topic: [Software factory](./software-factory.md)
- Topic: [Fold sub-agents into the main loop](./fold-subagents-into-main-loop.md)
- Topic: [Adversarial review and external evidence](./adversarial-review-external-evidence.md)
- Topic: [Agent-native web search rebuild](./agent-native-web-search.md)

[^mihail-eric-bcherny-stanford]: Mihail Eric on Boris Cherny at Stanford
[^shao-meng-bcherny-stanford]: Meng Shao on Boris Cherny at Stanford
[^dotey-building-agents-not-valuable]: Dotey on building agents not being valuable
[^op7418-thariq-left-anthropic]: 歸藏 relays Thariq departure leak
[^op7418-boris-cherny-clarification]: 歸藏 clarifies Boris is the Claude Code author
[^shao-meng-agentic-sdlc-not-factory]: Meng Shao on Agentic SDLC ≠ software factory
[^shao-meng-fold-subagents-main-loop]: Meng Shao on when to fold sub-agents into the main loop
[^shao-meng-felix-not-2024-claude-usage]: Meng Shao relays Felix—stop using Claude the 2024 way
[^oran-ge-ai-traffic-search-rebuild]: Orange AI on rebuilding search after AI traffic surpasses humans
[^dotey-felix-hunger-beats-tenure]: Dotey relays Felix—hunger beats tenure
[^dotey-lesse-multiagent-four-infra]: Dotey relays Lesse—four infra gaps for thousand-agent systems
[^shao-meng-manus-mono]: Meng Shao on Manus Mono — a full-stack map for AI
