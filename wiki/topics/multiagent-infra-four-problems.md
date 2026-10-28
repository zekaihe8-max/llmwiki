---
type: Topic
title: 多智能体四道基建题
title_en: Four infra gaps for large multiagent systems
description: 上千智能体连续跑时，调度（异质有状态 vs 同质副本）、身份与授权、沙箱隔离防传染、不可篡改可观测与急停仍大多缺现成答案；解锁可信多智能体先靠工程师把这四道题做对。
description_en: At thousand-agent continuous scale, scheduling (heterogeneous stateful vs identical replicas), identity and authz, sandbox isolation against contagion, and tamper-evident observability plus a kill switch still mostly lack ready answers—unlocking trustworthy multiagent systems starts with engineers getting these four right.
tags: [multiagent, infrastructure, scheduling, identity, authorization, sandbox, observability, kill-switch, agent-substrate]
sources:
  - id: dotey-lesse-multiagent-four-infra
    resource: https://x.com/dotey/status/2115229306490126432
    title: Dotey relays Lesse—four infra gaps for thousand-agent systems
generated:
  by: cursor-agent/composer
  at: 2026-10-28T20:15:00+08:00
---
<!-- Same-file bilingual (project extension): title + title_en, description + description_en, bilingual section headings. Pair ZH then EN as adjacent paragraphs/bullets, or same-line `中文。 / English.`. Shared code/URLs/wiki links are not translations; product names alone do not count as English. Format check ≠ translation quality. -->

# 多智能体四道基建题

*Four infra gaps for large multiagent systems*

当智能体从单聊框长成云端多智能体、甚至成千上万个连续跑科研与设计时，可信结果先卡在平台基建而非再堆模型：如何调度异质、有状态、时闲时暴的智能体；如何分清人与 AI、划清授权并处理智能体互信；如何用沙箱挡住提示注入与共享记忆传染；如何留下不可篡改审计并在跑偏时一键急停。这些领域大多还没有现成答案。[^dotey-lesse-multiagent-four-infra]

Once agents grow from single chat into cloud multiagent systems—and even thousands of continuous agents for research and design—trustworthy results hitch first on platform infrastructure, not more model stacking: how to schedule heterogeneous, stateful agents that idle then burst; how to separate human from AI action, pre-state authorization, and agent-to-agent trust; how to sandbox against prompt injection and shared-memory contagion; how to keep tamper-evident audit logs and stop the whole system when it drifts. Most of these areas still lack ready answers.[^dotey-lesse-multiagent-four-infra]

## 综合分析 / Synthesis

[宝玉转述 Lesse：上千 Agent 仍缺四道基建题](../sources/articles/dotey-lesse-multiagent-four-infra.md) 译介 Anthropic 平台工程负责人 Katelyn Lesse：她把「程序员身份危机」看反——解锁强大多智能体，要靠工程师解决一批新问题。四题分别是：(1) 调度——Kubernetes 同质副本模型与智能体独一份状态、不确定空闲、突发扩容相悖，Google Agent Substrate 以休眠/约半秒唤醒作局部回应，整体仍未解；(2) 身份与授权——短时凭证可借，长程授权与互派信任基本空白；(3) 隔离——核心依赖漏洞叠加不明代码/网页，多智能体可把恶意指令写入共享记忆；(4) 可观测与急停——不可篡改记录加总闸，但「跑偏」难判。原文 <https://www.katelynlesse.com/blog/new-problems-for-engineers-to-solve>；原帖 <https://x.com/dotey/status/2115229306490126432>。[^dotey-lesse-multiagent-four-infra]

[Dotey relays Lesse—four infra gaps for thousand-agent systems](../sources/articles/dotey-lesse-multiagent-four-infra.md) relays Anthropic platform eng lead Katelyn Lesse: she flips the “engineer identity crisis”—unlocking powerful multiagent systems needs engineers solving a new problem set. The four: (1) scheduling—Kubernetes identical-replica model clashes with unique agent state, uncertain idle, and burst scale; Google Agent Substrate’s sleep/~0.5s wake is a partial answer, much still open; (2) identity and authz—short-lived credentials help, weeks-ahead authz and inter-agent trust remain largely blank; (3) isolation—core-dependency vulns plus opaque code/web, with multiagent contagion via shared memory; (4) observability and kill switch—tamper-evident logs plus a master stop, while judging “drift” stays hard. Blog: <https://www.katelynlesse.com/blog/new-problems-for-engineers-to-solve>; post: <https://x.com/dotey/status/2115229306490126432>.[^dotey-lesse-multiagent-four-infra]

适用边界：这是 Anthropic 平台工程负责人的问题议程与工程判断，不是已落地产品规格或跨厂商基准；未给出的失败率、成本或 SLA 不在此发明。Agent Substrate 仅作调度题上的公开局部进展，不代表四题已解。

Scope: this is an Anthropic platform-eng lead’s problem agenda and engineering judgment, not a shipped product spec or cross-vendor benchmark; failure rates, cost, or SLAs absent from the source are not invented here. Agent Substrate is cited only as a public partial move on scheduling—not as solving all four.

相邻但不同线：[公司级 Agent Harness 五原语](./company-agent-harness.md) 是一家公司内部多玩家 harness 的组件通例（工作面、OBO/身份、记忆、沙箱鉴权、ambient），与本页「上千智能体平台仍缺哪四道开放题」同属基建，但切面是配方 vs 未解议程；[智能体算力与治理](./agent-compute-and-governance.md) 讲云厂商把专用算力与治理控件成对推出，不展开四题清单；[Agent 身份与平台握钥](./agent-identity-platform-keys.md) 是平台收购身份公司握钥的商业叙事，不是运行时授权空白；[软件工厂](./software-factory.md) 定义有边界 L4 交付生产系统，与急停/证据相邻但主线是 SDLC 工厂形态而非多智能体平台四缺口；[智能体规模化工程](./agent-scaled-engineering.md) 谈 agent 写大部分代码时团队怎么赢，可与「工程师仍有新题」同读，但不承载四道基建清单。

Adjacent but different cuts: [Company agent harness — five primitives](./company-agent-harness.md) is one firm’s multiplayer harness recipe (surface, OBO/identity, memory, sandboxed auth, ambient)—same infra family as this page’s “four still-open platform gaps at thousand-agent scale,” but recipe vs open agenda; [Agent compute and governance](./agent-compute-and-governance.md) pairs cloud dedicated compute with governance controls without the four-gap list; [Agent identity and platform-held keys](./agent-identity-platform-keys.md) is the commercial “platforms acquire identity firms / hold keys” story, not runtime authz blankness; [Software factory](./software-factory.md) defines bounded L4 delivery production systems—neighbor to kill-switch/evidence, but SDLC factory shape rather than multiagent platform gaps; [Agent-scaled engineering](./agent-scaled-engineering.md) is how teams win when agents write most code—readable with “engineers still have new problems,” without carrying the four-gap checklist.

## 矛盾与变化 / Contradictions

暂无。 / None yet.

## 相关 / Related

- Source: [宝玉转述 Lesse：上千 Agent 仍缺四道基建题](../sources/articles/dotey-lesse-multiagent-four-infra.md)
- Topic: [公司级 Agent Harness 五原语](./company-agent-harness.md)
- Topic: [智能体算力与治理](./agent-compute-and-governance.md)
- Topic: [Agent 身份与平台握钥](./agent-identity-platform-keys.md)
- Topic: [软件工厂](./software-factory.md)
- Topic: [智能体规模化工程](./agent-scaled-engineering.md)

[^dotey-lesse-multiagent-four-infra]: Dotey relays Lesse—four infra gaps for thousand-agent systems
