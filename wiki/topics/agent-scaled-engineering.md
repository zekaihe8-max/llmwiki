---
type: Topic
title: 智能体规模化工程
title_en: Agent-scaled engineering
description: 当智能体写出大部分代码时，团队靠自动化新瓶颈、跑长时智能体循环、保持小团队，并为数月后的模型而构建取胜；搭 Agent 本身不值钱，工具、工作流与业务熟知更值钱；各阶段有 Agent 还不等于有边界的 L4 软件工厂。
description_en: When agents write most of the code, teams win by automating new bottlenecks, running long agent loops, staying small, and building for models months ahead; assembling Agents is low-value next to tools, workflows, and domain knowledge; agents across the SDLC are not yet a bounded L4 software factory.
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
generated:
  by: cursor-agent/composer
  at: 2026-10-24T20:58:48+08:00
---

# 智能体规模化工程

*Agent-scaled engineering*

一旦编码智能体产出团队的大部分乃至全部产出，稀缺工作转向打通速度：自动化评审与审批、跑长时多智能体循环、保持人团队精简、把产品对准下一版模型，并让领域专家拥有构建者。[^mihail-eric-bcherny-stanford][^shao-meng-bcherny-stanford] 搭 Agent 本身不值钱；给 Agent 做工具、用 Agent 重构工作流，以及对具体业务的熟知，更值钱。[^dotey-building-agents-not-valuable]

Once coding agents produce most or all of a team's output, the scarce work shifts to unblocking velocity: automate review and approvals, run long multi-agent loops, keep the human team small, aim products at the next model release, and let domain experts own the builders.[^mihail-eric-bcherny-stanford][^shao-meng-bcherny-stanford] Assembling Agents itself is low-value; building tools for Agents, using Agents to restructure workflows, and knowing the concrete domain matter more.[^dotey-building-agents-not-valuable]

## 综合分析 / Synthesis

[Mihail Eric on Boris Cherny at Stanford](../sources/articles/mihail-eric-bcherny-stanford.md) 与 [Meng Shao on Boris Cherny at Stanford](../sources/articles/shao-meng-bcherny-stanford.md) 都转述 Cherny 在 The Modern Software Developer 上的要点。[^mihail-eric-bcherny-stanford][^shao-meng-bcherny-stanford] 自约十一月起 Claude 几乎写完其团队全部代码，人均产出约 10 倍，于是他们自动化了 code review（下一步是审批）；Claude Code 早期收入平坦，直到更强模型（Opus 4）解锁增长，因此他通过阅读失败模式的 transcript，为六个月后的模型构建；一两人的小团队可胜过大得多的团队；他跑数天或数周的智能体循环；当代码变便宜，对问题的深刻认知成为剩余 alpha。Shao 的中文摘要框出同一五条原则，并记 Cherny 回答说他在跑数千个 Claude 智能体。[^shao-meng-bcherny-stanford]

[Mihail Eric on Boris Cherny at Stanford](../sources/articles/mihail-eric-bcherny-stanford.md) and [Meng Shao on Boris Cherny at Stanford](../sources/articles/shao-meng-bcherny-stanford.md) both relay Cherny's takeaways from The Modern Software Developer.[^mihail-eric-bcherny-stanford][^shao-meng-bcherny-stanford] Claude writing nearly all of his team's code since about November, with roughly 10x output per engineer, led them to automate code review (and eye approvals next); early Claude Code revenue stayed flat until a smarter model (Opus 4) unlocked growth, so he builds for the model six months out by reading transcripts for failure modes; small teams of one or two can outship much larger ones; he runs agent loops for days or weeks; and when code is cheap, deep problem knowledge is the remaining alpha. Shao's Chinese summary frames the same five principles and notes Cherny answering that he was running thousands of Claude agents.[^shao-meng-bcherny-stanford]

[宝玉谈搭 Agent 不值钱](../sources/articles/dotey-building-agents-not-valuable.md) 从价值排序补强同一方向：搭 Agent 像搭系统、装软件、写代码一样，本身不值钱；给 Agent 做工具、用 Agent 重构工作流、用代码解决业务问题才值钱。[^dotey-building-agents-not-valuable] 他所回应的帖文还称，在 Agent+ 场景里会搭 Agent 最不重要，对具体场景业务的熟知更重要——与 Cherny「领域专属构建者」主张同向。[^dotey-building-agents-not-valuable]

[Dotey on building agents not being valuable](../sources/articles/dotey-building-agents-not-valuable.md) reinforces the same direction on value: assembling Agents, like assembling systems, installing software, or writing code, is not where the value sits; building tools for Agents, using Agents to restructure workflows, and solving business problems with code are.[^dotey-building-agents-not-valuable] The post he replies to adds that in Agent+ settings, knowing how to assemble an Agent matters least and knowing the concrete domain matters more—aligned with Cherny's domain-specific builders claim.[^dotey-building-agents-not-valuable]

[邵萌谈 Agentic SDLC 不等于软件工厂](../sources/articles/shao-meng-agentic-sdlc-not-factory.md) 把同一「实现变便宜」判断推到系统层：各阶段有 Agent 还不等于软件工厂；口号是 System > Agents > LLMs；务实目标是有边界的 L4——授权生命周期、可检验证据与安全兜底，团队须自建并拥有边界而非堆模型。[^shao-meng-agentic-sdlc-not-factory] 详见 [软件工厂](./software-factory.md)。

[Meng Shao on Agentic SDLC ≠ software factory](../sources/articles/shao-meng-agentic-sdlc-not-factory.md) pushes the same “implementation got cheap” judgment to the system layer: agents across the SDLC are not yet a software factory; the slogan is System > Agents > LLMs; the practical goal is bounded L4—authorized lifecycles, inspectable evidence, and safe containment, with teams building and owning boundaries rather than stacking models.[^shao-meng-agentic-sdlc-not-factory] See [Software factory](./software-factory.md).

## 矛盾与变化 / Contradictions

与「预定义工作流优先于开放式智能体」的张力，记在 [Workflows before agents](./workflows-before-agents.md)。

Tension with preferring predefined workflows over open-ended agents is recorded under [Workflows before agents](./workflows-before-agents.md).

- 本页所据 [Mihail Eric](../sources/articles/mihail-eric-bcherny-stanford.md) / [Meng Shao](../sources/articles/shao-meng-bcherny-stanford.md) 将 Boris Cherny 称为 Claude Code 创作者；[歸藏转述 Thariq 离职爆料](../sources/articles/op7418-thariq-left-anthropic.md) 曾称 Thariq 为 Claude Code 作者；随后 [歸藏澄清](../sources/articles/op7418-boris-cherny-clarification.md) 改称 Boris 才是作者与产品线负责人。[^mihail-eric-bcherny-stanford][^op7418-thariq-left-anthropic][^op7418-boris-cherny-clarification] 角色与归属变化详见 [Claude Code 作者与社区话筒](./claude-code-authorship-and-voice.md)。
- Sources on this page ([Mihail Eric](../sources/articles/mihail-eric-bcherny-stanford.md) / [Meng Shao](../sources/articles/shao-meng-bcherny-stanford.md)) call Boris Cherny the creator of Claude Code; [歸藏 relays Thariq departure leak](../sources/articles/op7418-thariq-left-anthropic.md) first called Thariq the Claude Code author; then [歸藏's clarification](../sources/articles/op7418-boris-cherny-clarification.md) names Boris as the author and product-line lead.[^mihail-eric-bcherny-stanford][^op7418-thariq-left-anthropic][^op7418-boris-cherny-clarification] Role and authorship changes are tracked under [Claude Code authorship and community voice](./claude-code-authorship-and-voice.md).

## 相关 / Related

- 来源：[Mihail Eric on Boris Cherny at Stanford](../sources/articles/mihail-eric-bcherny-stanford.md)
- 来源：[Meng Shao on Boris Cherny at Stanford](../sources/articles/shao-meng-bcherny-stanford.md)
- 来源：[宝玉谈搭 Agent 不值钱](../sources/articles/dotey-building-agents-not-valuable.md)
- 来源：[歸藏转述 Thariq 离职爆料](../sources/articles/op7418-thariq-left-anthropic.md)
- 来源：[歸藏澄清 Boris 才是 Claude Code 作者](../sources/articles/op7418-boris-cherny-clarification.md)
- 来源：[邵萌谈 Agentic SDLC 不等于软件工厂](../sources/articles/shao-meng-agentic-sdlc-not-factory.md)
- 主题：[Workflows before agents](./workflows-before-agents.md)
- 主题：[Claude Code 作者与社区话筒](./claude-code-authorship-and-voice.md)
- 主题：[软件工厂](./software-factory.md)

- Source: [Mihail Eric on Boris Cherny at Stanford](../sources/articles/mihail-eric-bcherny-stanford.md)
- Source: [Meng Shao on Boris Cherny at Stanford](../sources/articles/shao-meng-bcherny-stanford.md)
- Source: [Dotey on building agents not being valuable](../sources/articles/dotey-building-agents-not-valuable.md)
- Source: [歸藏 relays Thariq departure leak](../sources/articles/op7418-thariq-left-anthropic.md)
- Source: [歸藏 clarifies Boris is the Claude Code author](../sources/articles/op7418-boris-cherny-clarification.md)
- Source: [Meng Shao on Agentic SDLC ≠ software factory](../sources/articles/shao-meng-agentic-sdlc-not-factory.md)
- Topic: [Workflows before agents](./workflows-before-agents.md)
- Topic: [Claude Code authorship and community voice](./claude-code-authorship-and-voice.md)
- Topic: [Software factory](./software-factory.md)

[^mihail-eric-bcherny-stanford]: Mihail Eric on Boris Cherny at Stanford
[^shao-meng-bcherny-stanford]: Meng Shao on Boris Cherny at Stanford
[^dotey-building-agents-not-valuable]: Dotey on building agents not being valuable
[^op7418-thariq-left-anthropic]: 歸藏 relays Thariq departure leak
[^op7418-boris-cherny-clarification]: 歸藏 clarifies Boris is the Claude Code author
[^shao-meng-agentic-sdlc-not-factory]: Meng Shao on Agentic SDLC ≠ software factory
