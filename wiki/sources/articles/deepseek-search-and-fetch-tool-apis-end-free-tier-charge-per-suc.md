---
type: Source
title: "DeepSeek Search/Fetch 工具 API 结束免费，按成功请求计费"
title_en: "DeepSeek Search and Fetch tool APIs end free tier, charge per successful request"
description: "DeepSeek 宣布 Search 与 Fetch 独立网页工具 API 从北京时间 2026-11-01 零点起结束免费，改为每千次成功请求 $0.75，11-02 起开始计费。"
description_en: "DeepSeek announces its Search and Fetch independent web tool APIs ended the free tier at 00:00 Beijing time on 2026-11-01 and now charge $0.75 per 1,000 successful requests starting Nov 2, 2026."
resource: https://x.com/shao__meng/status/2117249746234466370
tags: [deepseek, search-api, fetch-api, pricing, agents]
sources:
  - id: 87605fcbd7b9becb
    resource: https://x.com/shao__meng/status/2117249746234466370
    title: "DeepSeek Search and Fetch tool APIs end free tier, charge per successful request"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-03T08:08:44+08:00
---

# DeepSeek Search/Fetch 工具 API 结束免费，按成功请求计费

*DeepSeek Search and Fetch tool APIs end free tier, charge per successful request*

帖文称，DeepSeek Search 与 Fetch 两个独立网页工具 API 经 DeepSeek Harness、Claude Code、Codex 等打出去的服务端工具调用，从北京时间 2026-11-01 零点起结束免费，改为按成功请求次数计费，单价均为每千次 $0.75；今日已为 11-02，相当于模型账单之外又多了一笔工具账单。[^87605fcbd7b9becb]

The post states that DeepSeek's Search and Fetch independent web tool APIs, invoked server-side via DeepSeek Harness, Claude Code, Codex and similar products, ended their free period at 00:00 Beijing time on 2026-11-01 and now charge per successful request at $0.75 per 1,000 requests; since today is 11-02, this amounts to an additional tool bill on top of model token bills.[^87605fcbd7b9becb]

## 摘要 / Summary

- Search 接口 POST /v1/tools/search：给 query 返回结果列表，默认最多 10 条、上限 50，每条含标题、URL、短摘要、长摘要、可选全文、站点名/图标、日期、权威度 0–4 及 0–3 重排分；支持 site:、-site:、精确短语、lang:、after:/before: 等操作符。 / Search POST /v1/tools/search: takes a query and returns a result list, default up to 10 and max 50 items; each item includes title, URL, short snippet, long summary, optional full content, site name/icon, date, authority 0–4, and rerank score 0–3; supports operators such as site:, -site:, exact phrases, lang:, after:/before:.[^87605fcbd7b9becb]
- Fetch 接口 POST /v1/tools/fetch：给 HTTP(S) URL，返回标题 + Markdown 正文；受目标站可用性与安全策略约束，被拒返回 403，抽不出内容返回 404。 / Fetch POST /v1/tools/fetch: takes an HTTP(S) URL and returns title plus Markdown body; subject to target site availability and access policy, security blocks return 403, and unusable content returns 404.[^87605fcbd7b9becb]
- 计费规则：费用 = 成功次数 × 单价，与返回条数、token 或是否开 need_content 无关；必须 HTTP 200 且 Search 结果非空、Fetch 真正拿到页面内容才计费，失败、空搜、超时不计费；扣费优先用赠送金，再扣充值余额，余额不足返回 402。 / Billing: cost = successful requests × unit price, independent of result count, tokens, or need_content; billing requires HTTP 200 with non-empty Search results or genuinely fetched Fetch content, while failures, empty searches, and timeouts are not charged; payment draws on gifted balance first, then top-up balance, with insufficient balance returning 402.[^87605fcbd7b9becb]
- 限流：按账号而非 API Key 计算，Search 100 QPS、Fetch 25 QPS，两者互不挤额度；Fetch 另有按域名 QPS 上限，超限同样返回 429；408/429/5xx 可重试，其他 4xx 应修改请求而非盲重试。 / Rate limits are per account, not per API key: Search 100 QPS and Fetch 25 QPS, with separate quotas; Fetch also has per-domain QPS limits returning 429 when exceeded; 408/429/5xx may be retried, while other 4xx errors should be fixed rather than blindly retried.[^87605fcbd7b9becb]
- 与 Harness/Claude Code/Codex 关系：文档明确走这些产品时，服务端工具调用本来就会打到 Search、Fetch，规则相同；免费期截止北京时间 2026-11-01 零点。 / Relationship to Harness/Claude Code/Codex: documentation states that calls made through these products hit Search and Fetch server-side with the same rules; the free period ended at 00:00 Beijing time on 2026-11-01.[^87605fcbd7b9becb]

## 相关 / Related

- 原文：[链接](https://x.com/shao__meng/status/2117249746234466370)。 / Original: [link](https://x.com/shao__meng/status/2117249746234466370).
- Topic: [面向 Agent 的联网搜索重做 / Agent-native web search rebuild](../../topics/agent-native-web-search.md)
- Topic: [超越 token 数的 Harness 对比 / Harness comparison beyond tokens](../../topics/harness-comparison-beyond-tokens.md)
- Topic: [编程 Agent 省 Token 工具与开销 / Coding-agent token-saving tooling and overhead](../../topics/coding-agent-token-saving-tooling.md)

[^87605fcbd7b9becb]: DeepSeek Search and Fetch tool APIs end free tier, charge per successful request
