---
type: Topic
title: 工作流优先于智能体
title_en: Workflows before agents
description: 对已知路径优先用预定义工作流；只有在该路径不够用时，再引入开放式智能体。
description_en: Prefer a predefined workflow for a known path, and add an open-ended agent only when that path is not enough.
tags: [agents, workflows]
sources:
  - id: building-effective-agents
    resource: https://www.anthropic.com/engineering/building-effective-agents
    title: Building effective agents
  - id: karpathy-llm-wiki
    resource: https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f
    title: LLM Wiki
  - id: mihail-eric-bcherny-stanford
    resource: https://x.com/mihail_eric/status/2113277483701395508
    title: Mihail Eric on Boris Cherny at Stanford
  - id: shao-meng-bcherny-stanford
    resource: https://x.com/shao__meng/status/2113291579750551931
    title: Meng Shao on Boris Cherny at Stanford
  - id: shao-meng-netflix-observability-ontology
    resource: https://x.com/shao__meng/status/2113925598443675835
    title: Meng Shao on Netflix observability ontology
  - id: shao-meng-fold-subagents-main-loop
    resource: https://x.com/shao__meng/status/2114164780986679331
    title: Meng Shao on when to fold sub-agents into the main loop
  - id: shao-meng-amp-team-company-of-future
    resource: https://x.com/shao__meng/status/2115647666160029715
    title: Meng Shao on how the Amp team works — The Company of the Future
  - id: xiaomovps-grok-bot-zero-to-one-guide
    resource: https://x.com/xiaomovps/status/2115738442181333337
    title: Xiaomo’s Grok Bot zero-to-one guide
  - id: xiaomovps-grok-bot-over-hermes-hot-take
    resource: https://x.com/xiaomovps/status/2115743740577157595
    title: Xiaomo’s hot take that Grok Bot supersedes Hermes Agent
  - id: 0xlangeai-qingshang-waigua-nvc-skill
    resource: https://x.com/0xlangeai/status/2115754265180574033
    title: 0xlangeai on Ayi’s Opus 5.5 open-source EQ plug-in from an NVC Skill
  - id: ayi-qingshang-waigua
    resource: https://github.com/ayi-ai/qingshang-waigua
    title: qingshang-waigua open-source repository
generated:
  by: cursor-agent/composer-2.5
  at: 2026-10-29T21:12:00+08:00
---

# 工作流优先于智能体

*Workflows before agents*

Anthropic 区分路径预定义的 workflows 与模型自行选路的 agents，并主张只有在更简单的系统不够用时才引入后者。[^building-effective-agents]

Anthropic distinguishes workflows, where the path is predefined, from agents, where the model chooses the path, and says to add the latter only when a simpler system falls short.[^building-effective-agents]

## 综合分析 / Synthesis

对本 wiki 而言，归档 Source 或 Topic 是一条工作流。读文章、写或更新一页 Source、更新已覆盖相关主张的 Topic、记录矛盾，再刷新 index 与 log。页面种类是固定的。某来源触及哪个既有 Topic，是在该清单内做的判断，不是发明新页面类型或改写不可变来源的许可。

For this wiki, filing a Source or a Topic is a workflow. Read the article, write or update one Source page, update the Topic pages that already cover the claims, record any contradiction, then refresh the index and the log. The kinds of page are fixed. Which existing Topic a source touches is a judgment made inside that checklist. It is not a license to invent new page types or to rewrite an immutable source.

本页依据的文章是 [Building effective agents](../sources/articles/anthropic-building-effective-agents.md) 与 [LLM Wiki](../sources/articles/karpathy-llm-wiki.md)。编译层如何组织见 [LLM-maintained wiki](./llm-maintained-wiki.md)。

The articles this page draws on are [Building effective agents](../sources/articles/anthropic-building-effective-agents.md) and [LLM Wiki](../sources/articles/karpathy-llm-wiki.md). How the compiled layer is organized is [LLM-maintained wiki](./llm-maintained-wiki.md).

## 矛盾与变化 / Contradictions

Anthropic 那页现在注明：它在 2024 年 12 月描述的许多工具已变，并指向 Claude Managed Agents 作为当前做法。[^building-effective-agents] 这是关于工具的观点变化。该页并未因此替换 workflow 与 agent 的区分，也未替换「从最简单方案起步」的建议；两者仍写在文中。

The Anthropic page now notes that much of the tooling it described in December 2024 has changed, and it points to Claude Managed Agents for the current approach.[^building-effective-agents] That is a viewpoint change about tools. On that page it does not replace the workflow-versus-agent distinction or the advice to start with the simplest solution. Both are still stated in the article.

Karpathy 的 gist 是另一处张力。他希望 LLM 拥有 wiki 维护，包括人类跟不上的簿记，并预期一个来源会触及许多页面。[^karpathy-llm-wiki] Anthropic 会把无界版本称作 agent，成本更高、错误会叠加，并会先问固定步骤是否够用。[^building-effective-agents] 本站 schema 是更窄的工作流：智能体可更新 wiki 页，不可改动不可变 raw 文件，也不可为已有 Topic 的想法再开第二页。

Karpathy's gist is the other tension. He wants the LLM to own wiki maintenance, including bookkeeping a human will not keep up with, and he expects one source to touch many pages.[^karpathy-llm-wiki] Anthropic would call an unbounded version of that an agent, with higher cost and compounding errors, and would ask first whether a fixed sequence of steps is enough.[^building-effective-agents] The schema for this site is the narrower workflow. The agent may update wiki pages, and it may not mutate immutable raw files or open a second Topic for an idea that already has one.

[Mihail Eric on Boris Cherny at Stanford](../sources/articles/mihail-eric-bcherny-stanford.md) 与 [Meng Shao on Boris Cherny at Stanford](../sources/articles/shao-meng-bcherny-stanford.md) 再加第三处张力：Cherny 描述可跑数天或数周、并衍生大量智能体的写作循环，手写代码正走向打孔卡的命运。[^mihail-eric-bcherny-stanford][^shao-meng-bcherny-stanford] 这是开放式智能体立场。Anthropic 的指引仍要求在加入这类循环前，先问预定义工作流是否够用。[^building-effective-agents] Cherny 在智能体已写代码时推荐的做法，归档在 [Agent-scaled engineering](./agent-scaled-engineering.md)。

[Mihail Eric on Boris Cherny at Stanford](../sources/articles/mihail-eric-bcherny-stanford.md) and [Meng Shao on Boris Cherny at Stanford](../sources/articles/shao-meng-bcherny-stanford.md) add a third tension: Cherny describes writing loops that run for days or weeks and spawn many agents, with hand-typed code heading where punch cards went.[^mihail-eric-bcherny-stanford][^shao-meng-bcherny-stanford] That is an open-ended agent stance. Anthropic's guidance still asks whether a predefined workflow is enough before adding that kind of loop.[^building-effective-agents] The practices Cherny recommends when agents already write the code are filed under [Agent-scaled engineering](./agent-scaled-engineering.md).

[邵萌谈 Netflix 可观测性本体](../sources/articles/shao-meng-netflix-observability-ontology.md) 从运维侧补强「先建模、再 Agent」：排障慢常因实体说法不一致，给 Agent 错上下文会幻觉；应先建本体与知识图谱，再喂 AutoRCA。[^shao-meng-netflix-observability-ontology] 主张归档在 [本体驱动的可观测性](./ontology-driven-observability.md)。

[Meng Shao on Netflix observability ontology](../sources/articles/shao-meng-netflix-observability-ontology.md) reinforces “model first, then Agents” from ops: slow triage often comes from inconsistent entity names, and wrong Agent context hallucinates; build an ontology and knowledge graph before feeding AutoRCA.[^shao-meng-netflix-observability-ontology] That claim is filed under [Ontology-driven observability](./ontology-driven-observability.md).

[邵萌谈何时把子 Agent 折进主循环](../sources/articles/shao-meng-fold-subagents-main-loop.md) 把同一「从最简可工作形态起步」推进到 Agent 内部：默认主循环 + Skills/工具渐进披露，而不是按组织架构堆子 Agent 与编排。[^shao-meng-fold-subagents-main-loop] 切面不同——本页问要不要开放式 Agent，那页问已有 Agent 时要不要按团队拆子 Agent——主张归档在 [把子 Agent 折进主循环](./fold-subagents-into-main-loop.md)。

[Meng Shao on when to fold sub-agents into the main loop](../sources/articles/shao-meng-fold-subagents-main-loop.md) pushes the same “start from the simplest working shape” into the Agent interior: default to a main loop plus Skills/tool progressive disclosure, not org-chart sub-agents and orchestrators.[^shao-meng-fold-subagents-main-loop] Different cut—this page asks whether to add an open-ended agent at all; that page asks whether, once you have an agent, to split by team into sub-agents—filed under [Fold sub-agents into the main loop](./fold-subagents-into-main-loop.md).

[邵萌谈 Amp 团队「未来公司」工作法](../sources/articles/shao-meng-amp-team-company-of-future.md) 呈现 **轻量社会性工作流**（周一目标会、四 Slack 频道、大改先写新闻稿、feature flag 试用）与 **极薄 SDLC 工作流**（无强制 PR、无季度口号、直推 main）并存：不是靠预定义编排图，而是靠信任 + Agent 证据 + 全员用产品同步。与 Anthropic「已知路径先 workflow」可并存——他们把「审代码/发版」从重流程换成 Agent 可检验输出；与 [智能体规模化工程](./agent-scaled-engineering.md) 里 Cherny **自动化 code review** 对照，Amp **跳过强制人审**——见该页 Contradictions。[^shao-meng-amp-team-company-of-future] 原帖 <https://x.com/shao__meng/status/2115647666160029715>。

[Meng Shao on how the Amp team works — The Company of the Future](../sources/articles/shao-meng-amp-team-company-of-future.md) shows **light social workflows** (Monday goal meeting, four Slack channels, press release before big changes, feature-flag trials) alongside **very thin SDLC workflow** (no mandatory PR, no quarterly slogans, trunk to main): not a predefined orchestration diagram, but trust + agent evidence + company-wide product use for sync. Compatible with Anthropic’s “workflow first on a known path”—they replace heavy review/release process with agent-inspectable outputs; contrast Cherny’s **automate code review** under [Agent-scaled engineering](./agent-scaled-engineering.md), where Amp **skips mandatory human review**—see that page’s Contradictions.[^shao-meng-amp-team-company-of-future] Post: <https://x.com/shao__meng/status/2115647666160029715>.

[小墨谈 Grok Bot 从 0 到 1 长文](../sources/articles/xiaomovps-grok-bot-zero-to-one-guide.md) 把个人 Agent  onboarding 收成固定三步工作流——只读验收、模板市场、定期记忆清理——再谈开放式运营场景；并主张具体流程写进 **Skill**、长期偏好放记忆、同一条规则勿两处维护。与 Anthropic「已知路径先 workflow」同向：先跑通可复制清单，再扩到长任务 Agent。[^xiaomovps-grok-bot-zero-to-one-guide] 原帖 <https://x.com/xiaomovps/status/2115738442181333337>。

[Xiaomo’s Grok Bot zero-to-one guide](../sources/articles/xiaomovps-grok-bot-zero-to-one-guide.md) frames personal-agent onboarding as a fixed three-step workflow—read-only acceptance, marketplace templates, periodic memory cleanup—before open-ended ops scenarios; it puts concrete flows in **Skills**, long-term prefs in memory, and one place per rule. Aligns with Anthropic’s “workflow first on a known path”: run a reproducible checklist, then expand to long-running agent work.[^xiaomovps-grok-bot-zero-to-one-guide] Post: <https://x.com/xiaomovps/status/2115738442181333337>.

[小墨暴论 Grok Bot 是 Hermes Agent 上位替代](../sources/articles/xiaomovps-grok-bot-over-hermes-hot-take.md) 从 **维护成本** 侧对照：Hermes 路径是开放式自维护 Agent 框架（记忆、压缩比例、模型调度都要自己补全与随版本重调），Grok Bot 路径更像先吃产品自带工作流与官方连接器（密码、手机等），把 Skill/MCP 接到 Linux 云机办事——与 Anthropic「已知路径不够再开 Agent」同向，但这里的「更简单系统」是 **托管个人 Agent 产品**，不是企业内固定编排图；作者仍要 Skill/MCP 接国内软件，但不愿再天天维护框架本身。[^xiaomovps-grok-bot-over-hermes-hot-take] 原帖 <https://x.com/xiaomovps/status/2115743740577157595>。

[Xiaomo’s hot take that Grok Bot supersedes Hermes Agent](../sources/articles/xiaomovps-grok-bot-over-hermes-hot-take.md) contrasts **maintenance cost**: Hermes is an open, self-maintained agent framework (memory, compression ratios, model scheduling all DIY and retuned on upgrades); Grok Bot leans on product workflows and official connectors (password, phone, etc.) with Skills/MCP on a Linux host to get work done—aligned with Anthropic’s “add the agent only when the simpler system falls short,” but here the “simpler system” is a **managed personal-agent product**, not an in-house orchestration diagram; he still wires domestic apps via Skill/MCP, but refuses daily framework upkeep.[^xiaomovps-grok-bot-over-hermes-hot-take] Post: <https://x.com/xiaomovps/status/2115743740577157595>.

[蓝哥AI谈 Ayi 用 Opus 5.5 开源「情商外挂」](../sources/articles/0xlangeai-qingshang-waigua-nvc-skill.md) 把「已知路径先 workflow」落到 **发消息前改稿**：标刺耳词 → 三档可选改写 → 直接可发文本，不是开放式 Agent 自行选策略；Opus 5.5 只用于 **两小时把 Skill 规则收成零依赖网页**，运行期是 localhost 固定流水线。团队共享用 UUMit 固定 HTTPS + 按人密钥，仍不买云、主机在线——与 Anthropic「更简单系统够用就别上 Agent」同向，且 Agent 只出现在 **构建** 阶段。[^0xlangeai-qingshang-waigua-nvc-skill] 原帖 <https://x.com/0xlangeai/status/2115754265180574033>。Skill 来源与写法见 [Agent Skill 编写](./agent-skill-authoring.md)。

[0xlangeai on Ayi’s Opus 5.5 open-source “EQ plug-in” from an NVC Skill](../sources/articles/0xlangeai-qingshang-waigua-nvc-skill.md) lands “workflow first on a known path” on **pre-send draft rewrite**: flag harsh words → pick among three rewrite tiers → send-ready text—not an open agent choosing strategy; Opus 5.5 was used for **about two hours to compile Skill rules into a zero-dependency web page**, while runtime is a fixed localhost pipeline. Team sharing uses UUMit fixed HTTPS and per-person keys—still no cloud purchase, host must stay online—aligned with Anthropic’s “don’t add an agent while the simpler system suffices,” with the agent only in **construction**.[^0xlangeai-qingshang-waigua-nvc-skill] Post: <https://x.com/0xlangeai/status/2115754265180574033>. Skill provenance and authoring: [Agent skill authoring](./agent-skill-authoring.md).

[情商外挂开源仓库](../sources/articles/ayi-qingshang-waigua.md) 从 README 细化 **运行期工作流**（非构建故事）：用户贴句 → 选七种对象之一与温和/坚定/直接 → 模型按固定提示标刺耳词并给可发文本；亦可「帮我回」别人消息；`MOCK=1` 走固定示例、不接 API。分享路径是 UUMit 识别本机运行实例并生成链接，README 强调分享后每次调用仍扣分享者配置的模型费用，并可用每分钟/每天次数上限节流——仍是 localhost 流水线 + 外部分享壳，不是开放式 Agent 编排。[^ayi-qingshang-waigua] 仓库 <https://github.com/ayi-ai/qingshang-waigua>。

[qingshang-waigua open-source repository](../sources/articles/ayi-qingshang-waigua.md) README details the **runtime workflow** (not the build story): paste text → pick one of seven audiences and gentle/firm/direct → the model flags harsh words and returns send-ready copy under fixed prompts; or “help me reply” to incoming text; `MOCK=1` serves a fixed sample with no API. Sharing is UUMit detecting the local process and minting a link—the README stresses each shared use still bills the sharer’s configured model and optional per-minute/daily caps throttle abuse—still a localhost pipeline plus share shell, not open-ended agent orchestration.[^ayi-qingshang-waigua] Repository: <https://github.com/ayi-ai/qingshang-waigua>.

## 相关 / Related

- 来源：[Building effective agents](../sources/articles/anthropic-building-effective-agents.md)
- 来源：[LLM Wiki](../sources/articles/karpathy-llm-wiki.md)
- 来源：[Mihail Eric on Boris Cherny at Stanford](../sources/articles/mihail-eric-bcherny-stanford.md)
- 来源：[Meng Shao on Boris Cherny at Stanford](../sources/articles/shao-meng-bcherny-stanford.md)
- 来源：[邵萌谈 Netflix 可观测性本体](../sources/articles/shao-meng-netflix-observability-ontology.md)
- 来源：[邵萌谈何时把子 Agent 折进主循环](../sources/articles/shao-meng-fold-subagents-main-loop.md)
- 来源：[邵萌谈 Amp 团队「未来公司」工作法](../sources/articles/shao-meng-amp-team-company-of-future.md)
- 来源：[小墨谈 Grok Bot 从 0 到 1 长文](../sources/articles/xiaomovps-grok-bot-zero-to-one-guide.md)
- 来源：[小墨暴论 Grok Bot 是 Hermes Agent 上位替代](../sources/articles/xiaomovps-grok-bot-over-hermes-hot-take.md)
- 来源：[蓝哥AI谈 Ayi 用 Opus 5.5 开源「情商外挂」](../sources/articles/0xlangeai-qingshang-waigua-nvc-skill.md)
- 来源：[情商外挂开源仓库](../sources/articles/ayi-qingshang-waigua.md)
- 主题：[LLM-maintained wiki](./llm-maintained-wiki.md)
- 主题：[Agent-scaled engineering](./agent-scaled-engineering.md)
- 主题：[本体驱动的可观测性](./ontology-driven-observability.md)
- 主题：[把子 Agent 折进主循环](./fold-subagents-into-main-loop.md)

- Source: [Building effective agents](../sources/articles/anthropic-building-effective-agents.md)
- Source: [LLM Wiki](../sources/articles/karpathy-llm-wiki.md)
- Source: [Mihail Eric on Boris Cherny at Stanford](../sources/articles/mihail-eric-bcherny-stanford.md)
- Source: [Meng Shao on Boris Cherny at Stanford](../sources/articles/shao-meng-bcherny-stanford.md)
- Source: [Meng Shao on Netflix observability ontology](../sources/articles/shao-meng-netflix-observability-ontology.md)
- Source: [Meng Shao on when to fold sub-agents into the main loop](../sources/articles/shao-meng-fold-subagents-main-loop.md)
- Source: [Meng Shao on how the Amp team works — The Company of the Future](../sources/articles/shao-meng-amp-team-company-of-future.md)
- Source: [小墨谈 Grok Bot 从 0 到 1 长文](../sources/articles/xiaomovps-grok-bot-zero-to-one-guide.md)
- Source: [小墨暴论 Grok Bot 是 Hermes Agent 上位替代](../sources/articles/xiaomovps-grok-bot-over-hermes-hot-take.md)
- Source: [0xlangeai on Ayi’s Opus 5.5 open-source “EQ plug-in” from an NVC Skill](../sources/articles/0xlangeai-qingshang-waigua-nvc-skill.md)
- Source: [qingshang-waigua open-source repository](../sources/articles/ayi-qingshang-waigua.md)
- Topic: [LLM-maintained wiki](./llm-maintained-wiki.md)
- Topic: [Agent-scaled engineering](./agent-scaled-engineering.md)
- Topic: [Ontology-driven observability](./ontology-driven-observability.md)
- Topic: [Fold sub-agents into the main loop](./fold-subagents-into-main-loop.md)

[^building-effective-agents]: Building effective agents
[^karpathy-llm-wiki]: LLM Wiki
[^mihail-eric-bcherny-stanford]: Mihail Eric on Boris Cherny at Stanford
[^shao-meng-bcherny-stanford]: Meng Shao on Boris Cherny at Stanford
[^shao-meng-netflix-observability-ontology]: Meng Shao on Netflix observability ontology
[^shao-meng-fold-subagents-main-loop]: Meng Shao on when to fold sub-agents into the main loop
[^shao-meng-amp-team-company-of-future]: Meng Shao on how the Amp team works — The Company of the Future
[^xiaomovps-grok-bot-zero-to-one-guide]: Xiaomo’s Grok Bot zero-to-one guide
[^xiaomovps-grok-bot-over-hermes-hot-take]: Xiaomo’s hot take that Grok Bot supersedes Hermes Agent
[^0xlangeai-qingshang-waigua-nvc-skill]: 0xlangeai on Ayi’s Opus 5.5 open-source EQ plug-in from an NVC Skill
[^ayi-qingshang-waigua]: qingshang-waigua open-source repository
