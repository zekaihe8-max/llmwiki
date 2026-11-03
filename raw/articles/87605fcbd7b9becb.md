[/shao__meng](/shao__meng)

[meng shao](/shao__meng)
[@shao__meng](/shao__meng)

Show translation
DeepSeek Search / Fetch 这两个独立的网页工具 API 经 DeepSeek Harness、Claude Code、Codex 等打出去的服务端工具调用，从今天起都结束免费，开始按成功请求次数计费，单价同为每千次 $0.75

# 各自干什么

Search POST /v1/tools/search：给 query，返回结果列表；默认可要 10 条，最多 50。每条有标题、URL、短 snippet（给人看）、长 summary（给模型读）、可选全文 content、站点名/图标、日期、权威度 0–4，以及 0–3 的 rerank_score（文中说 ≥1.5 算高质量）。支持 site:、-site:、精确短语、lang:、after: / before: 等操作符；还可传用户原问、IP 本地化、need_content。

Fetch POST /v1/tools/fetch：给一个 HTTP(S) URL，回标题 + Markdown 正文。受目标站可用性与访问策略约束；被安全策略拒是 403，抽不出可用内容是 404。

[api-docs.deepseek.com/quick_start/pr…](https://t.co/KTvGSEbiTs)

# 怎么算钱、什么算「成功」

费用 = 成功次数 × 单价，与返回条数、token、是否开 need_content 无关，count 只调结果条数，不加价。可计费条件写得很明确：必须 HTTP 200，且 Search 要非空 results、Fetch 要真正拿到页面内容。失败、空搜、超时不计费。扣费优先用赠送金，再扣充值余额；余额不足会 402。

换算方法：千次 Search 或千次 Fetch 各 $0.75；一天若 Agent 循环打 1 万次成功 Search，大约 $7.5，不含模型 token。

# 限流（与模型并发分开算）

按账号计，不按 API Key：Search 100 QPS，Fetch 25 QPS；互不挤对方额度。Fetch 另有按域名的 QPS 上限，超了同样 429。408 / 429 / 5xx 可等了重试；其他 4xx 改请求再打，别盲重试。

# 和 Harness / Claude Code / Codex 的关系

文档中明确：走这些产品时，服务端工具调用本来就会打到 Search、Fetch。免费期到北京时间 2026-11-01 零点截止；今天已是 11-02，等价于「模型账单之外又多了一笔工具账单」。自己直接调这两接口，规则相同。

[/shao__meng/status/2117249746234466370/photo/1](/shao__meng/status/2117249746234466370/photo/1)

[1:37 PM · Nov 2, 2026](/shao__meng/status/2117249746234466370)·[1,215 Views](/shao__meng/status/2117249746234466370)

[10](/compose/post?in_reply_to=2117249746234466370)

9
4
