---
type: Topic
title: 面向 Agent 的联网搜索重做
title_en: Agent-native web search rebuild
description: 当搜索主用户从人变为 Agent，接口需直接给正文、抬高权威信源门槛并压低多轮延迟；通用 SERP 摘要不够用，垂类场景仍常要改写问句或接专用 API。
description_en: As Agents become the primary search user, APIs must return full body text, raise authoritative-source gates, and cut multi-round latency; classic SERP snippets are not enough, and vertical cases still often need query rewrite or dedicated APIs.
tags: [search, agents, web-search, yuanbao, tools]
sources:
  - id: oran-ge-ai-traffic-search-rebuild
    resource: https://x.com/oran_ge/status/2114212241188991318
    title: Orange AI on rebuilding search after AI traffic surpasses humans
generated:
  by: cursor-agent/composer
  at: 2026-10-25T21:02:22+08:00
---

# 面向 Agent 的联网搜索重做

*Agent-native web search rebuild*

搜索的主用户正在从「点链接自判的人」变成「把结果整段塞进上下文的模型与 Agent」。给人用的十条摘要不够；Agent 需要可直接入上下文的正文、更高置信度的信源，以及撑得多轮串查的速度——否则会多抓取、信假源、把单秒延迟放大成数秒等待。[^oran-ge-ai-traffic-search-rebuild]

Search’s primary user is shifting from people who open links and judge, to models and Agents that dump results into context. Ten human-facing snippets are not enough; Agents need full body text ready for context, higher-confidence sources, and speed that survives chained rounds—or they refetch, trust junk, and turn one-second delays into multi-second waits.[^oran-ge-ai-traffic-search-rebuild]

## 综合分析 / Synthesis

[Orange AI 谈 AI 流量超人类后搜索要重做](../sources/articles/oran-ge-ai-traffic-search-rebuild.md) 把流量拐点与产品需求绑在一起：Cloudflare 自动化流量已超人类；DeepSeek 搜索 API 与腾讯「元宝搜索」对全行业开放，说明联网搜索已成为 Agent 基建。文中把用户变迁写成三阶段——关键词十条链、模型总结答案、Agent 拆子问题串查——并指出人与模型的关键差在「判断」：人会划走营销号，模型会把排前结果当事实引用。[^oran-ge-ai-traffic-search-rebuild] 原帖 <https://x.com/oran_ge/status/2114212241188991318>。

[Orange AI on rebuilding search after AI traffic surpasses humans](../sources/articles/oran-ge-ai-traffic-search-rebuild.md) ties the traffic flip to product requirements: Cloudflare automated traffic already exceeds humans; DeepSeek’s search API and Tencent’s industry-open Yuanbao Search mark web search as Agent infrastructure. It frames three user stages—ten keyword links, model-summarized answers, Agent sub-question chains—and pins the human/model gap on judgment: people dismiss marketing pages; models cite top-ranked rows as fact.[^oran-ge-ai-traffic-search-rebuild] Post: <https://x.com/oran_ge/status/2114212241188991318>.

同一来源用元宝搜索作案例：正文直出、13 行业 157 权威信源、索引期约 100 token 压缩并复用 KV Cache，腾讯内部产品平均搜索调用从约 8 降到约 5；作者标准版实测九品类，强在权威/时效/全文，弱在空泛时事、生活服务结构化与学术论文权重，并建议参数开放给 Agent、弱场景接垂类 API。接入面覆盖 Skill / MCP / API 与按量价目。[^oran-ge-ai-traffic-search-rebuild] 这与 [智能体规模化工程](./agent-scaled-engineering.md)「给 Agent 做工具更值钱」同向，但切面落在**搜索接口形态**，而非团队产能或搭 Agent 本身。

The same source uses Yuanbao Search as the case: full body out of the box, 13 industries / 157 authoritative sources, ~100-token compression at index time with KV Cache reuse, and Tencent internal products cutting average search calls from ~8 to ~5; the author’s standard-tier nine-category test is strong on authority / freshness / full text and weak on vague news, structured lifestyle, and academic-paper weight, with advice to expose parameters to Agents and plug vertical APIs for weak scenes. Access spans Skill / MCP / API plus usage pricing.[^oran-ge-ai-traffic-search-rebuild] That aligns with [Agent-scaled engineering](./agent-scaled-engineering.md)’s “tools for Agents matter more,” but the cut here is **search API shape**, not team throughput or assembling Agents.

## 矛盾与变化 / Contradictions

暂无。 / None yet.

## 相关 / Related

- Source: [Orange AI 谈 AI 流量超人类后搜索要重做](../sources/articles/oran-ge-ai-traffic-search-rebuild.md)
- Topic: [智能体规模化工程](./agent-scaled-engineering.md)
- Topic: [Agent Skills open standard](./agent-skills-open-standard.md)

[^oran-ge-ai-traffic-search-rebuild]: Orange AI on rebuilding search after AI traffic surpasses humans
