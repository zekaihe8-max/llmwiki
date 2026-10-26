---
type: Topic
title: 公司级 Agent Harness 五原语
title_en: Company agent harness — five primitives
description: 多玩家公司级 agent harness 常收敛到五条原语：落在已有工作面、OBO/自有身份、全局与用户记忆、沙箱执行与鉴权代理、大量定时或 ambient 跑；身份被点成最难的一题。
description_en: Multiplayer company agent harnesses often converge on five primitives—live where people already work, OBO vs own identity, global and user memory, sandboxed execution with auth proxy, and a large share of scheduled or ambient runs—with identity called the hardest problem.
tags: [langchain, company-harness, harness, identity, memory, sandbox, ambient-agents, multiplayer]
sources:
  - id: hwchase17-company-harness
    resource: https://x.com/hwchase17/status/2114041443836903662
    title: Harrison Chase on the five components of a company harness
generated:
  by: cursor-agent/composer
  at: 2026-10-26T08:16:30+08:00
---

# 公司级 Agent Harness 五原语

*Company agent harness — five primitives*

公司内部可同时跑营销、销售、工程等多玩家 agent；要做对，往往不是再堆一个聊天机器人，而是收敛到同一组 harness 原语：人在哪工作就落哪、行动时分清 OBO 与自有身份、记忆分全局与用户、代码在沙箱里跑并可安全鉴权、很大比例运行由定时或事件触发而非有人点一下。[^hwchase17-company-harness]

A company can run multiplayer agents across marketing, sales, and engineering at once; getting that right is often not another chatbot, but converging on the same harness primitives—live where people already work, separate OBO from the agent’s own identity when acting, memory at global and user scope, code in a sandbox with safe auth, and a large share of runs kicked by schedules or events rather than an explicit click.[^hwchase17-company-harness]

## 综合分析 / Synthesis

[Harrison Chase 谈公司级 Harness 五原语](../sources/articles/hwchase17-company-harness.md) 以 LangChain 内部 GTM Agent、OpenSWE、Content Studio 为据，给出「company harness」通例与五条原语，并点出身份是最棘手问题；体验上还有 Slack breakout 与积压场景的自定义 UI；基建落在 Managed Deep Agents（叠开源 Deep Agents）。[^hwchase17-company-harness] 原帖 <https://x.com/hwchase17/status/2114041443836903662>。

[Harrison Chase on the five components of a company harness](../sources/articles/hwchase17-company-harness.md) grounds a “company harness” recipe in LangChain’s internal GTM Agent, OpenSWE, and Content Studio, lists the five primitives, and flags identity as the thorniest problem; UX also covers Slack breakout and a custom UI for backlog cases; infra sits on Managed Deep Agents over open-source Deep Agents.[^hwchase17-company-harness] Post: <https://x.com/hwchase17/status/2114041443836903662>.

适用边界：这是一家公司的内部实践总结与产品通例主张，不是跨厂商基准或合规规范；未在帖中给出的失败率、成本或通用 SLA 不在此发明。记忆被作者标为「探索最少」——本页记下该边界，不把双层记忆写成已成熟标准。

Scope: this is one company’s internal-practice summary and product-recipe claim, not a cross-vendor benchmark or compliance spec; failure rates, cost, or SLAs absent from the post are not invented here. Memory is labeled “least explored”—this page records that bound and does not cast two-tier memory as a mature standard.

相邻但不同线，故不机械并入既有 Topic：[Agent 身份与平台握钥](./agent-identity-platform-keys.md) 讲的是谁跑 Agent 谁收购身份公司、平台握钥的商业叙事，不是运行时 OBO vs 固定凭据的设计切面；[个人 Agent 云环境的备份、隔离与定时检查](./personal-agent-cloud-env-pitfalls.md) 讲个人助理侧定时漏跑与共机风险，不是把 ambient/cron 写成公司 harness 原语；[多 Harness 路由基建 ≠ 个人助手派活](./multi-harness-router-vs-personal-dispatch.md) 分的是「多底座同 API」与个人派活，不是单公司多玩家 harness 的五原语；[AI 原生公司](./ai-native-companies.md) 谈公司是否天生 AI-native，不展开 harness 组件。[智能体规模化工程](./agent-scaled-engineering.md) 谈 agent 写大部分代码时团队怎么赢，可与公司级工程 agent（如 OpenSWE）相邻，但本页主线是多玩家 harness 基建原语。

Adjacent but different cuts, so not folded into existing Topics: [Agent identity and platform-held keys](./agent-identity-platform-keys.md) is the commercial “whoever runs the agent acquires identity firms / holds the keys” story, not runtime OBO vs fixed-credential design; [Personal-agent cloud env: backup, isolation, and schedule checks](./personal-agent-cloud-env-pitfalls.md) is personal-assistant schedule misses and shared-host risk, not ambient/cron as a company-harness primitive; [Multi-harness routing infra ≠ personal-assistant dispatch](./multi-harness-router-vs-personal-dispatch.md) separates many-bases-on-one-API from personal dispatch, not a single company’s multiplayer five primitives; [AI-native companies](./ai-native-companies.md) asks whether a firm is AI-native from founding, without spelling harness components. [Agent-scaled engineering](./agent-scaled-engineering.md) is how teams win when agents write most code—neighbor to a company engineering agent such as OpenSWE, but this page’s main thread is multiplayer harness infrastructure primitives.

## 矛盾与变化 / Contradictions

暂无。 / None yet.

## 相关 / Related

- Source: [Harrison Chase 谈公司级 Harness 五原语](../sources/articles/hwchase17-company-harness.md)
- Topic: [Agent 身份与平台握钥](./agent-identity-platform-keys.md)
- Topic: [个人 Agent 云环境的备份、隔离与定时检查](./personal-agent-cloud-env-pitfalls.md)
- Topic: [多 Harness 路由基建 ≠ 个人助手派活](./multi-harness-router-vs-personal-dispatch.md)
- Topic: [智能体规模化工程](./agent-scaled-engineering.md)
- Topic: [AI 原生公司](./ai-native-companies.md)

[^hwchase17-company-harness]: Harrison Chase on the five components of a company harness
