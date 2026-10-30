---
type: Topic
title: 公司级 Agent Harness 五原语
title_en: Company agent harness — five primitives
description: 企业 Harness 的五原语还需要贯穿生产生命周期的验证与治理；身份、记忆和沙箱是组件基础，评估、成本归因与资产管理决定其如何持续运行。
description_en: The five enterprise harness primitives also need validation and governance across the production lifecycle; identity, memory, and sandboxes provide components, while evaluation, cost attribution, and asset management shape ongoing operation.
tags: [langchain, company-harness, harness, identity, memory, sandbox, ambient-agents, multiplayer]
sources:
  - id: hwchase17-company-harness
    resource: https://x.com/hwchase17/status/2114041443836903662
    title: Harrison Chase on the five components of a company harness
  - id: dotey-lesse-multiagent-four-infra
    resource: https://x.com/dotey/status/2115229306490126432
    title: Dotey relays Lesse—four infra gaps for thousand-agent systems
  - id: shao-meng-langchain-content-studio
    resource: https://x.com/shao__meng/status/2115345069570212202
    title: Meng Shao on four months of LangChain Content Studio
  - id: shao-meng-aliyun-ai-agent-handbook
    resource: https://x.com/shao__meng/status/2115975663148765204
    title: Meng Shao on Alibaba Cloud’s AI Agent Handbook
  - id: aliyun-ai-agent-handbook
    resource: https://github.com/aliyun/ai-agent-handbook
    title: AI Agent Handbook
generated:
  by: codex/gpt-6
  at: 2026-10-30T20:16:19+08:00
---

# 公司级 Agent Harness 五原语

*Company agent harness — five primitives*

公司内部可同时跑营销、销售、工程等多玩家 agent；要做对，往往不是再堆一个聊天机器人，而是收敛到同一组 harness 原语：人在哪工作就落哪、行动时分清 OBO 与自有身份、记忆分全局与用户、代码在沙箱里跑并可安全鉴权、很大比例运行由定时或事件触发而非有人点一下。[^hwchase17-company-harness]

A company can run multiplayer agents across marketing, sales, and engineering at once; getting that right is often not another chatbot, but converging on the same harness primitives—live where people already work, separate OBO from the agent’s own identity when acting, memory at global and user scope, code in a sandbox with safe auth, and a large share of runs kicked by schedules or events rather than an explicit click.[^hwchase17-company-harness]

## 综合分析 / Synthesis

Harness 的生命周期责任也需要明确完成判据与故障归因边界。直接的[手册 README](../sources/articles/aliyun-ai-agent-handbook.md) 将可中断恢复、可验证完成列为任务系统目标，并区分 Model 与 Harness 的责任；因此可以把五原语作为组件视图，再用任务推进、恢复与验证检查其协作是否闭环，而不能把执行失败一概归因于模型。这是设计目标与目录证据，尚不证明某种实现达到可靠性指标。[^aliyun-ai-agent-handbook]

Lifecycle responsibilities for a harness also need explicit completion criteria and boundaries for failure attribution. The direct [handbook README](../sources/articles/aliyun-ai-agent-handbook.md) makes interruption recovery and verifiable completion goals for task systems and distinguishes Model and Harness responsibilities. The five primitives can therefore serve as a component view, with progress, recovery, and verification used to check whether the components form a complete loop, rather than attributing every execution failure to the model. These are design goals and outline evidence, without proof that an implementation meets reliability targets.[^aliyun-ai-agent-handbook]

企业 Harness 的组件清单需要和生命周期责任一起设计：记忆与沙箱承接状态及执行，受控行动还要接身份鉴权、验证闭环和 HITL，持续运行则依赖可观测、成本归因、资产版本与上线前仿真。[邵萌介绍阿里云手册](../sources/articles/shao-meng-aliyun-ai-agent-handbook.md) 将这些环节围绕 Harness、Runtime 与治理分工组织，补充了 Chase 的五原语配方，而非增加第六条原语。帖子转述单 Agent、多 Agent 与 HITL 架构共存，支持把自主度当作可调参数；手册目录与调查转述不能证明这些环节已在所有企业成熟落地。[^shao-meng-aliyun-ai-agent-handbook]

Enterprise harness components need lifecycle responsibilities alongside them: memory and sandboxes support state and execution, controlled action also requires identity and authentication, validation loops, and HITL, and ongoing operation relies on observability, cost attribution, asset versioning, and pre-release simulation. [Meng Shao’s introduction to the Alibaba Cloud handbook](../sources/articles/shao-meng-aliyun-ai-agent-handbook.md) organizes these concerns around harness, runtime, and governance responsibilities, complementing Chase’s five-primitive recipe rather than adding a sixth primitive. The post’s report that single-agent, multiagent, and HITL architectures coexist supports treating autonomy as adjustable; a handbook outline and relayed survey do not establish mature implementation across enterprises.[^shao-meng-aliyun-ai-agent-handbook]

[Harrison Chase 谈公司级 Harness 五原语](../sources/articles/hwchase17-company-harness.md) 以 LangChain 内部 GTM Agent、OpenSWE、Content Studio 为据，给出「company harness」通例与五条原语，并点出身份是最棘手问题；体验上还有 Slack breakout 与积压场景的自定义 UI；基建落在 Managed Deep Agents（叠开源 Deep Agents）。[^hwchase17-company-harness] 原帖 <https://x.com/hwchase17/status/2114041443836903662>。

[Harrison Chase on the five components of a company harness](../sources/articles/hwchase17-company-harness.md) grounds a “company harness” recipe in LangChain’s internal GTM Agent, OpenSWE, and Content Studio, lists the five primitives, and flags identity as the thorniest problem; UX also covers Slack breakout and a custom UI for backlog cases; infra sits on Managed Deep Agents over open-source Deep Agents.[^hwchase17-company-harness] Post: <https://x.com/hwchase17/status/2114041443836903662>.

[宝玉转述 Lesse：上千 Agent 仍缺四道基建题](../sources/articles/dotey-lesse-multiagent-four-infra.md) 从 Anthropic 平台工程侧独立加固「身份与沙箱仍难」：上千智能体规模上，身份可借短时凭证，授权与互派信任基本空白；并主张每智能体严格沙箱以防提示注入经共享记忆传染——与本页 OBO/自有身份与沙箱执行原语同向，但不改本页「五原语配方」主线；调度、可观测急停等开放议程见 [多智能体四道基建题](./multiagent-infra-four-problems.md)。[^dotey-lesse-multiagent-four-infra] 原帖 <https://x.com/dotey/status/2115229306490126432>。

[Dotey relays Lesse—four infra gaps for thousand-agent systems](../sources/articles/dotey-lesse-multiagent-four-infra.md) independently hardens “identity and sandbox still hard” from Anthropic platform eng: at thousand-agent scale, identity can reuse short-lived credentials while authz and inter-agent trust stay largely blank; and each agent should run in a strict sandbox so prompt injection cannot spread via shared memory—aligned with this page’s OBO/own-identity and sandboxed-execution primitives, without changing the five-primitive recipe as the main thread; the open scheduling and observability/kill-switch agenda lives under [Four infra gaps for large multiagent systems](./multiagent-infra-four-problems.md).[^dotey-lesse-multiagent-four-infra] Post: <https://x.com/dotey/status/2115229306490126432>.

[邵萌谈 LangChain Content Studio 四个月实践](../sources/articles/shao-meng-langchain-content-studio.md) 把 Chase 点名的 Content Studio 从「营销 agent 通例」展开成可核对的四个月落地：落在 Slack；每线程一台常驻沙箱电脑；团队/个人双层记忆与 skills / wiki / gate；Managed Deep Agents 托管生产后自有代码约减 80%；并开源 `design-agent` 供 fork 挂品牌。这加固「工作面 + 沙箱 + 双层记忆 + Managed Deep Agents」原语，且给出成本与用量数字（单次中位约 $8→$0.50、3000+ 资产等），仍不改五原语清单本身；品味如何写入 skill、媒体规格流水线见 [Agent Skill 编写](./agent-skill-authoring.md) 与 [智能体视频剪辑](./agentic-video-editing.md)。[^shao-meng-langchain-content-studio] 原帖 <https://x.com/shao__meng/status/2115345069570212202>。

[Meng Shao on four months of LangChain Content Studio](../sources/articles/shao-meng-langchain-content-studio.md) expands Chase’s named Content Studio from a marketing-agent recipe into a checkable four-month landing: lives in Slack; one persistent sandbox computer per thread; team/personal memory plus skills / wiki / gate; about 80% less owned code after Managed Deep Agents; and open-sourced `design-agent` for branded forks. That hardens the live-where-people-work + sandbox + two-tier memory + Managed Deep Agents primitives and adds cost/usage figures (median ~$8→$0.50 per request, 3000+ assets, etc.) without rewriting the five-primitive list; how taste enters skills and the media-spec pipeline live under [Agent skill authoring](./agent-skill-authoring.md) and [Agentic video editing](./agentic-video-editing.md).[^shao-meng-langchain-content-studio] Post: <https://x.com/shao__meng/status/2115345069570212202>.

适用边界：这是一家公司的内部实践总结与产品通例主张，不是跨厂商基准或合规规范；未在帖中给出的失败率、成本或通用 SLA 不在此发明。记忆被作者标为「探索最少」——本页记下该边界，不把双层记忆写成已成熟标准。Lesse 证据只加强身份/沙箱仍开放，不把四道平台缺口并入五原语清单。Content Studio 长文给出的花费与曝光数字是该公司自述运营结果，不是对五原语的独立基准验证。

Scope: this is one company’s internal-practice summary and product-recipe claim, not a cross-vendor benchmark or compliance spec; failure rates, cost, or SLAs absent from the post are not invented here. Memory is labeled “least explored”—this page records that bound and does not cast two-tier memory as a mature standard. Lesse evidence only strengthens that identity/sandbox remain open; it does not fold the four platform gaps into the five-primitive list. Content Studio’s spend and impression figures are that firm’s self-reported ops results, not an independent benchmark of the five primitives.

相邻但不同线，故不机械并入既有 Topic：[Agent 身份与平台握钥](./agent-identity-platform-keys.md) 讲的是谁跑 Agent 谁收购身份公司、平台握钥的商业叙事，不是运行时 OBO vs 固定凭据的设计切面；[个人 Agent 云环境的备份、隔离与定时检查](./personal-agent-cloud-env-pitfalls.md) 讲个人助理侧定时漏跑与共机风险，不是把 ambient/cron 写成公司 harness 原语；[多 Harness 路由基建 ≠ 个人助手派活](./multi-harness-router-vs-personal-dispatch.md) 分的是「多底座同 API」与个人派活，不是单公司多玩家 harness 的五原语；[AI 原生公司](./ai-native-companies.md) 谈公司是否天生 AI-native，不展开 harness 组件。[智能体规模化工程](./agent-scaled-engineering.md) 谈 agent 写大部分代码时团队怎么赢，可与公司级工程 agent（如 OpenSWE）相邻，但本页主线是多玩家 harness 基建原语。[多智能体四道基建题](./multiagent-infra-four-problems.md) 是上千智能体平台仍缺的四道开放议程，与本页配方切面相邻。

Adjacent but different cuts, so not folded into existing Topics: [Agent identity and platform-held keys](./agent-identity-platform-keys.md) is the commercial “whoever runs the agent acquires identity firms / holds the keys” story, not runtime OBO vs fixed-credential design; [Personal-agent cloud env: backup, isolation, and schedule checks](./personal-agent-cloud-env-pitfalls.md) is personal-assistant schedule misses and shared-host risk, not ambient/cron as a company-harness primitive; [Multi-harness routing infra ≠ personal-assistant dispatch](./multi-harness-router-vs-personal-dispatch.md) separates many-bases-on-one-API from personal dispatch, not a single company’s multiplayer five primitives; [AI-native companies](./ai-native-companies.md) asks whether a firm is AI-native from founding, without spelling harness components. [Agent-scaled engineering](./agent-scaled-engineering.md) is how teams win when agents write most code—neighbor to a company engineering agent such as OpenSWE, but this page’s main thread is multiplayer harness infrastructure primitives. [Four infra gaps for large multiagent systems](./multiagent-infra-four-problems.md) is the open four-gap platform agenda at thousand-agent scale—adjacent to this recipe cut.

## 矛盾与变化 / Contradictions

暂无。 / None yet.

## 相关 / Related

- Source: [Harrison Chase 谈公司级 Harness 五原语](../sources/articles/hwchase17-company-harness.md)
- Source: [宝玉转述 Lesse：上千 Agent 仍缺四道基建题](../sources/articles/dotey-lesse-multiagent-four-infra.md)
- Source: [邵萌谈 LangChain Content Studio 四个月实践](../sources/articles/shao-meng-langchain-content-studio.md)
- Topic: [多智能体四道基建题](./multiagent-infra-four-problems.md)
- Topic: [Agent 身份与平台握钥](./agent-identity-platform-keys.md)
- Topic: [个人 Agent 云环境的备份、隔离与定时检查](./personal-agent-cloud-env-pitfalls.md)
- Topic: [多 Harness 路由基建 ≠ 个人助手派活](./multi-harness-router-vs-personal-dispatch.md)
- Topic: [智能体规模化工程](./agent-scaled-engineering.md)
- Topic: [AI 原生公司](./ai-native-companies.md)
- Topic: [Agent Skill 编写](./agent-skill-authoring.md)
- Topic: [智能体视频剪辑](./agentic-video-editing.md)

[^hwchase17-company-harness]: Harrison Chase on the five components of a company harness
[^dotey-lesse-multiagent-four-infra]: Dotey relays Lesse—four infra gaps for thousand-agent systems
[^shao-meng-langchain-content-studio]: Meng Shao on four months of LangChain Content Studio

[^shao-meng-aliyun-ai-agent-handbook]: Meng Shao on Alibaba Cloud’s AI Agent Handbook

[^aliyun-ai-agent-handbook]: AI Agent Handbook
