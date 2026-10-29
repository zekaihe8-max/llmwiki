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
  - id: shao-meng-amp-team-company-of-future
    resource: https://x.com/shao__meng/status/2115647666160029715
    title: Meng Shao on how the Amp team works — The Company of the Future
  - id: heydengai-jd-ai-employee-p3-hc
    resource: https://x.com/heydengai/status/2115768106010182122
    title: Heydengai on JD assigning P3 grade and independent HC to AI employees
  - id: logicrw-devv-shutdown-multica-pivot
    resource: https://x.com/0xLogicrw/status/2115744209856799087
    title: Logicrw on Devv shutdown and Multica pivot
  - id: financeyf5-instinct-30b-valuation-fundraise
    resource: https://x.com/FinanceYF5/status/2115705271104176451
    title: AI Will on Instinct’s alleged ~$30B valuation fundraise
generated:
  by: cursor-agent/composer-2.5
  at: 2026-10-29T21:25:00+08:00
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

[邵萌谈 Amp 团队「未来公司」工作法](../sources/articles/shao-meng-amp-team-company-of-future.md) 给出另一套「小团队 + Agent 写大部分变更仍高吞吐」的组织样本：约 21 人从 Sourcegraph 拆出、无部门领地、周会一次、无季度口号硬套；直推 main、无强制 PR/人工评审，官网平均约 90 次/天、main 到全员约 7.7 分钟；质量靠 Agent 端到端证据（测试矩阵、数据流、录屏）与全员 dogfood + feature flag，而不是流程门禁。与 Cherny 线同向「保持人团队小、实现变便宜后拼产品/营收」；与 Boris 自动化 code review 不同——Amp 把评审换成「先证据、热路径才看人读代码」。播客反复强调前提：人少、彼此校准、共同营收动机；21 个磨合过的「联合创始人」是历史偶然，不是 2019 大编制 × AI 的模板。[^shao-meng-amp-team-company-of-future] 原帖 <https://x.com/shao__meng/status/2115647666160029715>。

[Meng Shao on how the Amp team works — The Company of the Future](../sources/articles/shao-meng-amp-team-company-of-future.md) is another “small team + agents write most changes, still high throughput” org specimen: ~21 people spun out of Sourcegraph, no departmental turf, one weekly meeting, no forced quarterly slogans; trunk to main with no mandatory PR/human review, ~90 marketing-site releases/day on average, ~7.7 minutes from main to everyone; quality from agent end-to-end evidence (test matrices, data flows, recordings) plus company-wide dogfood and feature flags—not process gates. Aligns with Cherny on staying small and winning on product/revenue once implementation is cheap; differs from Boris’s automate-code-review line—Amp replaces review with “evidence first, humans read code only on hot paths.” The podcast repeats prerequisites: small headcount, mutual calibration, shared revenue motives; twenty-one calibrated “co-founders” is historical accident, not a 2019 large-org × AI template.[^shao-meng-amp-team-company-of-future] Post: <https://x.com/shao__meng/status/2115647666160029715>.

[小邓同学谈京东给 AI 员工定 P3 与独立 HC](../sources/articles/heydengai-jd-ai-employee-p3-hc.md) 给出大型组织侧的**对照样本**（未确认爆料）：CFO 体系数字员工统一定 P3、配独立 HC，部分 Agent 在领导眼中甚至超过实习生——若属实，是把 Agent 写进既有职级与编制，而非 Amp/Cherny 线的「人少、去门禁、Agent 写码」。[^heydengai-jd-ai-employee-p3-hc] 原帖 <https://x.com/heydengai/status/2115768106010182122>。组织形态详述见 [大厂 AI 数字员工职级与编制](./enterprise-ai-digital-employee-headcount.md)。

[Heydengai on JD assigning P3 grade and independent HC to AI employees](../sources/articles/heydengai-jd-ai-employee-p3-hc.md) is a **foil** at large-org scale (unconfirmed leak): CFO-system digital employees uniformly P3 with independent HC, some agents reportedly beating interns in leadership’s eyes—if true, agents enter existing grade/headcount rails rather than the Amp/Cherny “stay small, drop gates, agents write code” line.[^heydengai-jd-ai-employee-p3-hc] Post: <https://x.com/heydengai/status/2115768106010182122>. Org-shape detail lives under [Enterprise AI digital employees—grades and headcount](./enterprise-ai-digital-employee-headcount.md).

[思维怪怪谈 Devv 停运转 Multica](../sources/articles/logicrw-devv-shutdown-multica-pivot.md) 用**产品迁徙**加固「实现变便宜 / 别堆垂类搜索或自研编程 Agent」：Devv 曾靠开发者索引 + AI 答问起量，却在 ChatGPT/Claude 联网与编程 Agent 自带检索写码跑测后失去差异化；团队放弃 DevCode 后押注 **Multica**——不做搜索、不自研编程 Agent，改做多 Agent 像团队一样协作，用户派活、Agent 执行汇报、人审结果。帖文 framing 为从「帮程序员找答案」到「让 AI 把活干完」。[^logicrw-devv-shutdown-multica-pivot] 原帖 <https://x.com/0xLogicrw/status/2115744209856799087>。编排角色与 [个人 Agent 当包工头调度编程 Agent](./personal-agent-foreman-over-coding-agents.md) 同族，但 Multica 是独立产品赌注而非 Grok+Codex 订阅栈；搜索侧退场见 [面向 Agent 的联网搜索重做](./agent-native-web-search.md)。

[Logicrw on Devv shutdown and Multica pivot](../sources/articles/logicrw-devv-shutdown-multica-pivot.md) hardens the **product migration** line of “implementation got cheap / stop stacking vertical search or in-house coding agents”: Devv scaled on dev index + AI answers, then lost edge once ChatGPT/Claude web search and coding agents fetch, code, and test on their own; after dropping DevCode the team bets on **Multica**—no search SKU, no in-house coding agent, multiple agents collaborate like a team while the user assigns work, agents execute and report, humans review. The post frames the shift from “help developers find answers” to “let AI finish the work.”[^logicrw-devv-shutdown-multica-pivot] Post: <https://x.com/0xLogicrw/status/2115744209856799087>. Orchestration roles neighbor [Personal agent as foreman over coding agents](./personal-agent-foreman-over-coding-agents.md), but Multica is a standalone product bet, not the Grok+Codex subscription stack; search sunset detail lives under [Agent-native web search rebuild](./agent-native-web-search.md).

[AI Will 谈 Instinct 约 300 亿美元估值融资](../sources/articles/financeyf5-instinct-30b-valuation-fundraise.md) 给出**资本定价侧**对照（传闻、未核实条款）：个人 AI Agent Instinct 上线不足一年、仍免费邀请制，帖文却称其正以约 300 亿美元估值融资，且年经手交易额近 10 亿美元——与 [宝玉谈搭 Agent 不值钱](../sources/articles/dotey-building-agents-not-valuable.md) 所据工程圈「搭 Agent 本身不值钱」可并存：本页收产能/价值排序主张，不替 VC 背书；张力记在「矛盾与变化」。[^financeyf5-instinct-30b-valuation-fundraise] 原帖 <https://x.com/FinanceYF5/status/2115705271104176451>。

[AI Will on Instinct’s alleged ~$30B valuation fundraise](../sources/articles/financeyf5-instinct-30b-valuation-fundraise.md) supplies a **capital-pricing** foil (rumor; terms unverified): personal AI agent Instinct, less than a year live and still free invite-only, is allegedly fundraising at about $30B with nearly $1B in annual transaction volume—coexists with the engineering line in [Dotey on building agents not being valuable](../sources/articles/dotey-building-agents-not-valuable.md) that assembling Agents is low-value; this page keeps throughput/value-ordering claims and does not endorse VC marks; tension is under Contradictions.[^financeyf5-instinct-30b-valuation-fundraise] Post: <https://x.com/FinanceYF5/status/2115705271104176451>.

## 矛盾与变化 / Contradictions

与「预定义工作流优先于开放式智能体」的张力，记在 [Workflows before agents](./workflows-before-agents.md)。

Tension with preferring predefined workflows over open-ended agents is recorded under [Workflows before agents](./workflows-before-agents.md).

与「默认把子 Agent 折进主循环」的张力，记在 [把子 Agent 折进主循环](./fold-subagents-into-main-loop.md)：本页据 Cherny 强调长时多智能体循环；[邵萌谈何时把子 Agent 折进主循环](../sources/articles/shao-meng-fold-subagents-main-loop.md) 所据 Claude 博文主张刚性按团队/问题类型拆子 Agent 常挡住更强模型，产品入口上应默认主循环 + Skills。[^shao-meng-fold-subagents-main-loop] 适用边界不同（产能 sparseness vs 编排默认），但「多 Agent 是否默认正确」上存在张力。

Tension with “fold sub-agents into the main loop by default” is recorded under [Fold sub-agents into the main loop](./fold-subagents-into-main-loop.md): this page, via Cherny, stresses long multi-agent loops; [Meng Shao on when to fold sub-agents into the main loop](../sources/articles/shao-meng-fold-subagents-main-loop.md) relays a Claude post that rigid per-team / per-problem-type sub-agents often block stronger models and that product entry points should default to a main loop plus Skills.[^shao-meng-fold-subagents-main-loop] Scope differs (throughput sparseness vs orchestration default), but they tension on whether multi-agent is the right default.

本页所据 Cherny 线把 **code review 自动化**当作 agent 写码后的下一瓶颈；[邵萌谈 Amp 团队「未来公司」工作法](../sources/articles/shao-meng-amp-team-company-of-future.md) 所据 Amp 则 **取消强制 PR/人工评审**，改以 Agent 端到端证据 + feature flag + 全员用产品守门，并仍保持 ~90 次/日发布——同是 ~20 人级高动团队，对「人审代码」赌注相反；Amp 侧把可复制性限在已校准小团队，勿读成普适 SDLC。[^shao-meng-amp-team-company-of-future]

This page’s Cherny line treats **automating code review** as the next bottleneck once agents write code; [Meng Shao on how the Amp team works](../sources/articles/shao-meng-amp-team-company-of-future.md) relays Amp **dropping mandatory PR/human review** for agent end-to-end evidence, feature flags, and company-wide product use, still at ~90 releases/day—similar ~20-person high-agency teams, opposite bet on human code review; Amp scopes replicability to calibrated small teams—do not read as universal SDLC.[^shao-meng-amp-team-company-of-future]

本页小团队 / 去门禁样本与 [小邓同学谈京东给 AI 员工定 P3 与独立 HC](../sources/articles/heydengai-jd-ai-employee-p3-hc.md) 所转述的大厂「职级 + 独立 HC」爆料（未确认）组织赌注相反：一边是压缩人传话与流程，一边是给数字员工占编制与级别；勿把任一侧面读成全行业模板。[^heydengai-jd-ai-employee-p3-hc]

This page’s small-team / drop-gates specimens tension with the big-firm “grade + independent HC” leak relayed in [Heydengai on JD assigning P3 grade and independent HC to AI employees](../sources/articles/heydengai-jd-ai-employee-p3-hc.md) (unconfirmed)—opposite org bets: shrink human messengers and process vs assign headcount and levels to digital employees; do not read either side as an industry-wide template.[^heydengai-jd-ai-employee-p3-hc]

本页所据 [宝玉谈搭 Agent 不值钱](../sources/articles/dotey-building-agents-not-valuable.md) 等工程价值排序主张——搭 Agent 本身不值钱、工具/工作流/业务熟知更值钱——与 [AI Will 谈 Instinct 约 300 亿美元估值融资](../sources/articles/financeyf5-instinct-30b-valuation-fundraise.md) 所转述的私募侧形成张力：个人 AI Agent 产品 Instinct（仍邀请制）据称以约 300 亿美元估值融资并伴随高交易额叙事；两边衡量不同（工程产出 vs 资本定价），帖文为传闻且未核实条款，勿把任一侧面读成对方已被推翻。[^dotey-building-agents-not-valuable][^financeyf5-instinct-30b-valuation-fundraise]

The engineering value-ordering on this page—especially [Dotey on building agents not being valuable](../sources/articles/dotey-building-agents-not-valuable.md), that assembling Agents is low-value next to tools, workflows, and domain knowledge—tensions with the private-market relay in [AI Will on Instinct’s alleged ~$30B valuation fundraise](../sources/articles/financeyf5-instinct-30b-valuation-fundraise.md): invite-only personal AI agent Instinct allegedly fundraising at about $30B with a high transaction-volume story; the measures differ (engineering throughput vs capital marks), the post is rumor without verified terms—do not read either side as disproving the other.[^dotey-building-agents-not-valuable][^financeyf5-instinct-30b-valuation-fundraise]

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
- 来源：[邵萌谈 Amp 团队「未来公司」工作法](../sources/articles/shao-meng-amp-team-company-of-future.md)
- 来源：[思维怪怪谈 Devv 停运转 Multica](../sources/articles/logicrw-devv-shutdown-multica-pivot.md)
- 来源：[AI Will 谈 Instinct 约 300 亿美元估值融资](../sources/articles/financeyf5-instinct-30b-valuation-fundraise.md)
- 主题：[给 AI 的全栈仓图](./ai-facing-fullstack-repo-map.md)
- 主题：[冲劲胜过资历](./hunger-beats-tenure.md)
- 主题：[多智能体四道基建题](./multiagent-infra-four-problems.md)
- 主题：[Workflows before agents](./workflows-before-agents.md)
- 主题：[Claude Code 作者与社区话筒](./claude-code-authorship-and-voice.md)
- 主题：[软件工厂](./software-factory.md)
- 主题：[把子 Agent 折进主循环](./fold-subagents-into-main-loop.md)
- 主题：[对抗评审与外部证据](./adversarial-review-external-evidence.md)
- 主题：[面向 Agent 的联网搜索重做](./agent-native-web-search.md)
- 主题：[大厂 AI 数字员工职级与编制](./enterprise-ai-digital-employee-headcount.md)

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
- Source: [Meng Shao on how the Amp team works — The Company of the Future](../sources/articles/shao-meng-amp-team-company-of-future.md)
- Topic: [AI-facing full-stack repo map](./ai-facing-fullstack-repo-map.md)
- Topic: [Hunger beats tenure](./hunger-beats-tenure.md)
- Topic: [Four infra gaps for large multiagent systems](./multiagent-infra-four-problems.md)
- Topic: [Workflows before agents](./workflows-before-agents.md)
- Topic: [Claude Code authorship and community voice](./claude-code-authorship-and-voice.md)
- Topic: [Software factory](./software-factory.md)
- Topic: [Fold sub-agents into the main loop](./fold-subagents-into-main-loop.md)
- Topic: [Adversarial review and external evidence](./adversarial-review-external-evidence.md)
- Topic: [Agent-native web search rebuild](./agent-native-web-search.md)
- Topic: [Enterprise AI digital employees—grades and headcount](./enterprise-ai-digital-employee-headcount.md)
- Source: [Logicrw on Devv shutdown and Multica pivot](../sources/articles/logicrw-devv-shutdown-multica-pivot.md)
- Source: [AI Will on Instinct’s alleged ~$30B valuation fundraise](../sources/articles/financeyf5-instinct-30b-valuation-fundraise.md)

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
[^shao-meng-amp-team-company-of-future]: Meng Shao on how the Amp team works — The Company of the Future
[^heydengai-jd-ai-employee-p3-hc]: Heydengai on JD assigning P3 grade and independent HC to AI employees
[^logicrw-devv-shutdown-multica-pivot]: Logicrw on Devv shutdown and Multica pivot
[^financeyf5-instinct-30b-valuation-fundraise]: AI Will on Instinct’s alleged ~$30B valuation fundraise
