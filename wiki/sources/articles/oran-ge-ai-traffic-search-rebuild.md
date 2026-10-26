---
type: Source
title: Orange AI 谈 AI 流量超人类后搜索要重做
title_en: Orange AI on rebuilding search after AI traffic surpasses humans
description: Orange AI 以 Cloudflare 自动化流量 57.5% 已超人类为引，说明搜索用户从人到模型再到 Agent 的三次变化，并实测腾讯「元宝搜索」的权威、时效与全文能力及 Skill/MCP/API 接入。
description_en: Orange AI cites Cloudflare’s 57.5% automated traffic surpassing humans, frames search’s shift from people to models to Agents, and hands-on tests Tencent Yuanbao Search on authority, freshness, full text, plus Skill/MCP/API access.
resource: https://x.com/oran_ge/status/2114212241188991318
tags: [search, agents, yuanbao, cloudflare, oran-ge, web-search]
sources:
  - id: oran-ge-ai-traffic-search-rebuild
    resource: https://x.com/oran_ge/status/2114212241188991318
    title: Orange AI on rebuilding search after AI traffic surpasses humans
    author: human:oran_ge
generated:
  by: cursor-agent/composer
  at: 2026-10-25T21:02:22+08:00
date: 2026-10-25
---

# Orange AI 谈 AI 流量超人类后搜索要重做

*Orange AI on rebuilding search after AI traffic surpasses humans*

[@oran_ge](https://x.com/oran_ge)（Orange AI）长文称：Cloudflare 网页流量里自动化请求已占 57.5%、人类 42.5%，是互联网历史上第一次 AI 流量超过人；联网搜索几乎是任何 AI 工具的基本功能，DeepSeek 已发搜索 API，腾讯也向全行业开放「元宝搜索」。他主张搜索用户已从「给人用」变为「给模型总结」再到「给 Agent 拆子问题串查」，并实测元宝搜索在权威、时效、全文等维度的表现与接入方式。[^oran-ge-ai-traffic-search-rebuild] 帖文见 <https://x.com/oran_ge/status/2114212241188991318>。

[@oran_ge](https://x.com/oran_ge) (Orange AI) writes that Cloudflare’s web traffic is now 57.5% automated vs 42.5% human—the first time AI traffic has surpassed humans on the internet—and that web search is nearly table stakes for AI tools, with DeepSeek shipping a search API and Tencent opening Yuanbao Search industry-wide. He argues search users moved from people, to models that summarize results, to Agents that split questions and chain lookups, then hands-on tests Yuanbao Search on authority, freshness, full text, and access paths.[^oran-ge-ai-traffic-search-rebuild] Post: <https://x.com/oran_ge/status/2114212241188991318>.

## 摘要 / Summary

- 流量拐点：Cloudflare 自动化请求 57.5% > 人类 42.5%，作者称是史上首次 AI 流量超人类。[^oran-ge-ai-traffic-search-rebuild]
- Traffic flip: Cloudflare automated requests at 57.5% vs humans 42.5%—author calls it the first time AI traffic exceeds humans.[^oran-ge-ai-traffic-search-rebuild]
- 用户三次变化：人点十条链接自判 → 模型读结果出总结 → Agent 拆子问题串查；模型缺少人的可信度筛选，营销号也会进上下文当事实。[^oran-ge-ai-traffic-search-rebuild]
- Three user shifts: people open ten links and judge → models summarize results → Agents split sub-questions and chain search; models lack human credibility filtering, so marketing pages can enter context as fact.[^oran-ge-ai-traffic-search-rebuild]
- Agent 三卡点：要正文（摘要不够、再抓取慢且易失败）、要可信信源（SEO/营销/过期页与官方无别）、要够快（多轮串搜放大单次延迟）。[^oran-ge-ai-traffic-search-rebuild]
- Three Agent bottlenecks: need full body (snippets force another fetch—slow, flaky, anti-bot), need trustworthy sources (SEO farms / marketing / stale pages look like official to models), need speed (chained rounds amplify per-call latency).[^oran-ge-ai-traffic-search-rebuild]
- 元宝搜索优化：直接给正文；接入 13 个行业 157 个权威信源；建索引时把网页压成约 100 token 并复用 KV Cache，推理开销不随文档变长；腾讯内部产品换搜后平均搜索调用从约 8 次降到约 5 次。[^oran-ge-ai-traffic-search-rebuild]
- Yuanbao Search optimizations: return full body; gate 13 industries / 157 authoritative sources; compress pages to ~100 tokens at index time and reuse KV Cache so inference cost does not grow with doc length; Tencent internal products cut average search calls from ~8 to ~5 after switching.[^oran-ge-ai-traffic-search-rebuild]
- 实测（标准版，9 品类 31 条 query）：金融/权威/百科/复杂问句等强；健康信源质量不一；视频需设 Site；空泛时事问句弱、宜 Agent 层改写；生活服务欠结构化宜垂类 API；学术论文权重偏低。总评强项为权威性、时效性、完整正文。[^oran-ge-ai-traffic-search-rebuild]
- Hands-on (standard tier, 9 categories / 31 queries): strong on finance, authority, encyclopedia, complex queries; mixed health-source quality; video needs Site set; vague “today’s news” weak—rewrite at Agent layer; lifestyle needs vertical APIs; academic papers underweighted. Overall strengths: authority, freshness, full body.[^oran-ge-ai-traffic-search-rebuild]
- 接入与价格：Skill（提示词、不改代码）/ MCP / API；极速版 14、标准版 20、旗舰版 26 元每千次（旗舰需企业申请）；默认每月送 2000 次，活动期邀请码可到 6000。[^oran-ge-ai-traffic-search-rebuild]
- Access and price: Skill (prompt-only, no code) / MCP / API; ¥14 / ¥20 / ¥26 per thousand calls for fast / standard / flagship (flagship needs enterprise apply); default 2000 free calls/month, promo invite up to 6000.[^oran-ge-ai-traffic-search-rebuild]

## 相关 / Related

- Topic: [面向 Agent 的联网搜索重做](../../topics/agent-native-web-search.md)
- Topic: [智能体规模化工程](../../topics/agent-scaled-engineering.md)

[^oran-ge-ai-traffic-search-rebuild]: Orange AI on rebuilding search after AI traffic surpasses humans
