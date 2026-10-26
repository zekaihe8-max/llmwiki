---
type: Source
title: Harrison Chase 谈公司级 Harness 五原语
title_en: Harrison Chase on the five components of a company harness
description: Harrison Chase 总结 LangChain 内部多玩家公司级 harness 的五条原语：落在已有工作面、身份（OBO 与自有身份）、双层记忆、沙箱执行与鉴权代理、大量定时/ambient 跑。
description_en: Harrison Chase summarizes five primitives of LangChain’s internal multiplayer company harness—live where people already work, identity (OBO and own identity), two-tier memory, sandboxed code with auth proxy, and a large share of scheduled/ambient runs.
resource: https://x.com/hwchase17/status/2114041443836903662
tags: [langchain, harness, company-harness, identity, memory, sandbox, ambient-agents, managed-deep-agents]
sources:
  - id: hwchase17-company-harness
    resource: https://x.com/hwchase17/status/2114041443836903662
    title: Harrison Chase on the five components of a company harness
    author: human:Harrison Chase
generated:
  by: cursor-agent/composer
  at: 2026-10-26T08:16:30+08:00
date: 2026-10-24
---

# Harrison Chase 谈公司级 Harness 五原语

*Harrison Chase on the five components of a company harness*

[@hwchase17](https://x.com/hwchase17)（Harrison Chase / LangChain）长文问如何搭「company harness」：LangChain 在营销、销售与工程上的内部 agent 改变了团队工作方式，但多玩家 harness 难做对；各团队最终落到同一组核心原语。[^hwchase17-company-harness] 帖文见 <https://x.com/hwchase17/status/2114041443836903662>。

[@hwchase17](https://x.com/hwchase17) (Harrison Chase / LangChain) asks how to build a “company harness”: internal agents across marketing, sales, and engineering changed how those teams work, but a multiplayer harness was hard to get right; every team landed on the same core primitives.[^hwchase17-company-harness] Post: <https://x.com/hwchase17/status/2114041443836903662>.

## 摘要 / Summary

- 五条原语：（1）落在人已在工作的地方（对他们是 Slack）；（2）知道谁在问，部分服务 OBO 该用户、部分用 agent 自有身份；（3）有全局与/或用户级记忆；（4）代码在沙箱跑，并可经鉴权访问需登录的服务；（5）很大比例的运行是定时或事件触发，而非有人显式唤起（ambient agents）。[^hwchase17-company-harness]
- Five primitives: (1) it lives where people already work (for them, Slack); (2) it knows who is asking and acts OBO that person for some services and with its own identity for others; (3) it has memory scoped globally and/or per user; (4) code runs in a sandbox and can request authenticated services; (5) a large percent of runs are scheduled or event-triggered rather than explicitly invoked (ambient agents).[^hwchase17-company-harness]

- 落地三例：GTM Agent（主动、常开，监邮件与合格线索、发日简报、答账户、可跑 outbound）；OpenSWE（工程 agent，可写/起草 PR，并对全部 PR 做 code review）；Content Studio（营销 agent，按风格与定位起草博客、图、PPT、视频）。作者称三者同一套搭法，可作公司级 harness 通例。[^hwchase17-company-harness]
- Three grounded agents: GTM Agent (proactive, always-on—monitors email and qualified leads, daily briefs, account Q&A, outbound); OpenSWE (engineering—drafts PRs and reviews all PRs); Content Studio (marketing—drafts blogs, images, PowerPoints, videos in style and positioning). The author says all three are built the same way—a general recipe for company harnesses.[^hwchase17-company-harness]

- 体验：各 agent 有独立 Slack app，可 DM 或频道 @；频道协作让别人看见用法；加了「breakout」——把 agent 拉出人类线程以免污染对话；积压类审核（如大量待发邮件）则另做自定义 UI，因纯 Slack 消息不好跟踪。[^hwchase17-company-harness]
- UX: each agent has its own Slack app, DM or channel-taggable; channel use lets others see how people use it; a “breakout” moves the agent out of the human thread so it does not pollute conversation; backlog review (e.g. many emails to send) got a custom UI because tracking from Slack messages alone is a poor experience.[^hwchase17-company-harness]

- 身份（作者称最棘手）：业界常见 OBO 与固定凭据/服务账号；OpenSWE 对话时 OBO 开 PR、后台审查用自有 GitHub app 身份；GTM 对 Salesforce 等用固定身份、对邮件等 OBO 且仅 DM 可用；Content Studio 对 Notion 等 OBO、对公司 Twitter 用固定凭据且白名单才能发帖。[^hwchase17-company-harness]
- Identity (called the thorniest problem): industry patterns are on-behalf-of vs fixed credentials/service accounts; OpenSWE acts OBO when messaged (PRs under your handle) and with its own GitHub-app identity for background review; GTM uses fixed identity for some tools (e.g. Salesforce) and OBO for others (e.g. email) available only in DMs; Content Studio OBO for some tools (e.g. Notion) and fixed credentials for company Twitter, with a whitelist for certain ops such as posting.[^hwchase17-company-harness]

- 记忆两档：全局记忆与用户记忆，由 agent 决定事实写入哪一层；作者称这是目前探索最少的一块。代码执行：agent 在沙箱外编排、在沙箱内跑码，镜像依赖略有不同，OpenSWE 会按频道/用户选 base image，并经 LangSmith Sandboxes 的 secret proxy 安全连需鉴权服务。定时跑：开发者可挂事件（如 OpenSWE 听新 PR 做审查），用户也可让 agent 自建 cron（如每日简报）。全套建在 Managed Deep Agents（叠开源 Deep Agents harness）上，覆盖 channels、crons、sandboxes、memory、identity。[^hwchase17-company-harness]
- Two memory tiers—global and user—with the agent choosing which facts go where; the author calls this the least explored area so far. Code execution: agents orchestrate outside the sandbox and run code inside, with slightly different base images; OpenSWE picks base image by channel/user and uses the LangSmith Sandboxes secret proxy to reach authenticated services safely. Scheduled runs: developers can wire events (e.g. OpenSWE reviewing new PRs); users can ask the agent to create its own cron (e.g. a daily brief). All of this sits on Managed Deep Agents over the open-source Deep Agents harness, covering channels, crons, sandboxes, memory, and identity.[^hwchase17-company-harness]

## 相关 / Related

- Topic: [公司级 Agent Harness 五原语](../../topics/company-agent-harness.md)

[^hwchase17-company-harness]: Harrison Chase on the five components of a company harness
