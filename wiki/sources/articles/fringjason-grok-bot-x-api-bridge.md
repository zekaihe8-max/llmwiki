---
type: Source
title: 赵老师Jason谈用 Grok Bot 内置 X 检索替 Codex 省 X API
title_en: FringJason on using Grok Bot built-in X search to spare Codex X API cost
description: 赵老师Jason转述阿策：用 Grok Bot 每日内置 X 工具额度经 Webhook+CF Worker 或 Cursor BDK+MCP 桥给 Codex，替代约 $0.005/条的付费 X API 读帖。
description_en: FringJason relays Ace—bridge Grok Bot’s daily built-in X tool quota to Codex via Webhook+CF Worker or Cursor BDK+MCP, substituting paid X API post reads at about $0.005 each.
resource: https://x.com/FringJason/status/2114280837810458972
tags: [grok-bot, x-api, codex, bdk, mcp, cloudflare-workers, fringjason, bytec99]
sources:
  - id: fringjason-grok-bot-x-api-bridge
    resource: https://x.com/FringJason/status/2114280837810458972
    title: FringJason on Grok Bot X search bridging Codex off paid X API
    author: human:FringJason
generated:
  by: cursor-agent/composer
  at: 2026-10-25T21:09:00+08:00
date: 2026-10-25
---

# 赵老师Jason谈用 Grok Bot 内置 X 检索替 Codex 省 X API

*FringJason on using Grok Bot built-in X search to spare Codex X API cost*

[@FringJason](https://x.com/FringJason)（赵老师Jason）转述 [@Bytec99](https://x.com/Bytec99)（阿策）跑通的做法：让 Codex、Claude Code 或外部服务经 Grok Bot 检索 X，再把资料与原帖出处拿回原会话继续分析、写文章或产品调研，以减少单独调用付费 X API。普通帖子读取约 $0.005/条，读 1000 条约 $5；若每天替代 1000 条付费读取，约可少花 $150/月——账单按帖子读取量计，一次搜索返回条数、重复与用户资料都会影响实际费用。Grok Bot 自带公开 X 搜索与读取，每天约 1000 次内置工具调用、每分钟 30 次；也可经插件连自己的 X 账号查收藏、首页、私信与粉丝名单。连接有两路：Webhook + Cloudflare Worker + D1（任务提交/领取/回传/查询，含幂等、任务编号与失败重传），以及 Cursor BDK（`@cursor/bdk`）本地服务经 MCP 联系指定 Grok Bot；默认建议个人先用 BDK 跑通，再按需上 Webhook。示例与说明见 [github.com/bytec-ai/grok-x-bridge-example](https://github.com/bytec-ai/grok-x-bridge-example)。实测一次「最近 30 天 Opus 5.5 制作视频」中英文检索，从提交到结果入库约 162 秒，返回 6 条帖子，Bot 报告用了 3 次搜索。[^fringjason-grok-bot-x-api-bridge] 原帖见 <https://x.com/FringJason/status/2114280837810458972>。

[@FringJason](https://x.com/FringJason) (Zhao / Jason) relays [@Bytec99](https://x.com/Bytec99) (Ace)’s working path: let Codex, Claude Code, or external services search X through Grok Bot, then bring materials and original post citations back into the same session for analysis, writing, or product research—cutting standalone paid X API calls. Ordinary post reads are about $0.005 each (~$5 per 1000); replacing 1000 paid reads per day is framed as about $150/month saved—billing is by post-read volume, so search result counts, duplicates, and profile fetches affect the real bill. Grok Bot ships public X search and read with about 1000 built-in tool calls per day and 30 per minute; a plugin can also attach one’s own X account for bookmarks, home, DMs, and follower lists. Two bridges: Webhook + Cloudflare Worker + D1 (submit / claim / return / query, with idempotency, task IDs, and failure retry), and Cursor BDK (`@cursor/bdk`) as a local MCP service to a named Grok Bot; default advice is try BDK first for personal use, then add Webhook if needed. Code and notes: [github.com/bytec-ai/grok-x-bridge-example](https://github.com/bytec-ai/grok-x-bridge-example). One measured run—“Opus 5.5 video-making posts in the last 30 days,” CN+EN—took about 162 seconds from submit to store, returned 6 posts, and the Bot reported 3 searches.[^fringjason-grok-bot-x-api-bridge] Post: <https://x.com/FringJason/status/2114280837810458972>.

## 摘要 / Summary

- 动机：阿策原用 Codex 走 X API 做账号运营分析；Grok Bot 有每日约 1000 次 X 工具额度后，改为让 Codex 找 Grok Bot 查，省付费读帖；不整迁到 Grok Bot，因项目已深嵌 Codex，且 DraPub 产品也需要 X 检索链路。[^fringjason-grok-bot-x-api-bridge]
- Motive: Ace had used Codex with the X API for account-ops analysis; after seeing Grok Bot’s ~1000 daily X tool calls, he had Codex query via Grok Bot to spare paid reads; he did not move wholly into Grok Bot because projects already sit deep in Codex, and the DraPub product also needs an X-search path.[^fringjason-grok-bot-x-api-bridge]
- 成本账：普通读帖约 $0.005/条；日替 1000 条约省 $150/月；计费看读取量而非搜索次数。[^fringjason-grok-bot-x-api-bridge]
- Cost math: ordinary reads ~$0.005/post; replacing ~1000/day ≈ $150/month saved; billing follows read volume, not search count.[^fringjason-grok-bot-x-api-bridge]
- 方案一 Webhook：Wrangler 部署 Worker 与 D1，四接口（提交、领取、回传、查询），Python 回传脚本，先握手再真实搜索；含幂等键、失败重传与结果校验（帖子 ID 与 URL 一致、不重复、结论引用来源、不超数量）。[^fringjason-grok-bot-x-api-bridge]
- Path one Webhook: deploy Worker + D1 with Wrangler, four endpoints (submit, claim, return, query), a Python return script, handshake then real search; idempotency keys, failure retry, and result checks (post ID matches URL, no duplicates, cited sources, count caps).[^fringjason-grok-bot-x-api-bridge]
- 方案二 BDK：Node.js ≥22.13 装 BDK，登录拥有目标 Bot 的 Cursor 账号，改 `grokbot.ts` 中 Bot 全名，起本地服务并把 MCP 接到 Codex；Bot 沿用自有会话与工具，但 Codex 不能读 Bot 全部历史聊天。[^fringjason-grok-bot-x-api-bridge]
- Path two BDK: install BDK (Node.js ≥22.13), sign in with the Cursor account that owns the target Bot, set the full Bot name in `grokbot.ts`, run the local service and attach MCP to Codex; the Bot keeps its own session and tools, but Codex cannot read the Bot’s full chat history.[^fringjason-grok-bot-x-api-bridge]
- 怎么选：多数个人场景先 BDK；主要跑在 Worker、不想常驻进程、或希望 Bot 主动回传到业务接口时再选 Webhook；BDK 外层仍可加存储与调度。[^fringjason-grok-bot-x-api-bridge]
- How to choose: most personal cases start with BDK; prefer Webhook when the workload already sits on Workers, you do not want a standing process, or the Bot should push into a business API; storage and scheduling can still wrap BDK.[^fringjason-grok-bot-x-api-bridge]

## 相关 / Related

- Topic: [用 Grok Bot 内置额度桥接 Agent 查 X](../../topics/grok-bot-x-api-substitute.md)
- Topic: [面向 Agent 的联网搜索重做](../../topics/agent-native-web-search.md)
- Topic: [个人 Agent 热潮与 Coding Agent 熟悉度差](../../topics/personal-agent-hype-familiarity-gap.md)

[^fringjason-grok-bot-x-api-bridge]: FringJason on Grok Bot X search bridging Codex off paid X API
