---
type: Source
title: "Claude 更名后额度口径实测：Pro 五小时与周额度疑似缩水"
title_en: "Claude quota after rename: Pro 5-hour and weekly quotas tested, suspected shrinkage"
description: "用户实测 Claude Pro 在套餐更名后的五小时与周额度，推算 Ultra 周额度为 Pro 10 倍而非 20 倍。"
description_en: "User tests Claude Pro 5-hour and weekly quotas after plan rename, estimates Ultra weekly quota is 10x Pro, not 20x."
resource: https://x.com/xiaomovps/status/2116472498002825628
tags: [claude, subscription, quota, anthropic]
sources:
  - id: claude-quota-pro-rename-test
    resource: https://x.com/xiaomovps/status/2116472498002825628
    title: "Claude quota after rename: Pro 5-hour and weekly quotas tested, suspected shrinkage"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-10-31T20:20:32+08:00
---

# Claude 更名后额度口径实测：Pro 五小时与周额度疑似缩水

*Claude quota after rename: Pro 5-hour and weekly quotas tested, suspected shrinkage*

「帖文称」Anthropic 已将 Claude 原 Max 5x 改名为 Max、原 Max 20x 改名为 Ultra，并明确 Ultra 每周额度是 Pro 的 10 倍，而非此前普遍理解的 20 倍。博主结合自身 Claude Usage 页面与 ccusage Token 统计倒推，Pro 五小时满额约为 1000 万–1200 万 Token（API 等价约 8–10 美元），每周额度约为 2.8 亿–3.2 亿 Token（API 等价约 105–125 美元），相当于 12–13 个完整的五小时窗口；作者主观感觉 Pro 五小时额度消耗速度至少比以前快一倍，怀疑基础额度已缩水，但文中也承认 Claude 未公开准确换算公式，缓存、模型和任务类型都会影响结果。[^claude-quota-pro-rename-test]

The post claims Anthropic renamed Claude's Max 5x to Max and Max 20x to Ultra, and clarified that Ultra's weekly quota is 10x Pro's, not the previously understood 20x. The blogger, combining Claude Usage page data with ccusage token statistics, estimates Pro's full 5-hour quota at roughly 10–12 million tokens (API-equivalent $8–10) and weekly quota at roughly 280–320 million tokens (API-equivalent $105–125), equal to about 12–13 full 5-hour windows. The author subjectively feels Pro's 5-hour quota consumption is at least twice as fast as before and suspects the base quota has shrunk, while acknowledging Claude has not published an exact conversion formula and that caching, model, and task type affect results.[^claude-quota-pro-rename-test]

## 摘要 / Summary

- Anthropic 将 Claude 套餐更名：原 Max 5x 改为 Max，原 Max 20x 改为 Ultra；Ultra 官方每周额度为 Pro 的 10 倍，而非此前理解的 20 倍。[^claude-quota-pro-rename-test]
- Anthropic renamed Claude plans: Max 5x → Max, Max 20x → Ultra; Ultra weekly quota is officially 10x Pro, not the previously understood 20x.[^claude-quota-pro-rename-test]
- 帖文称，作者消耗约 61.4 万 Token 后，Claude Pro 五小时额度下降约 5%–6%，倒推五小时满额约 1000 万–1200 万 Token，API 等价成本约 8–10 美元。[^claude-quota-pro-rename-test]
- The post claims that after consuming ~614k tokens, the author's Claude Pro 5-hour quota dropped ~5%–6%, implying a full 5-hour quota of ~10–12 million tokens, API-equivalent ~$8–10.[^claude-quota-pro-rename-test]
- 本周累计消耗约 2257 万 Token 对应周额度下降 7%–8%，倒推 Pro 每周额度约 2.8 亿–3.2 亿 Token，API 等价成本约 105–125 美元。[^claude-quota-pro-rename-test]
- This week's cumulative ~25.77 million tokens correspond to a 7%–8% weekly quota drop, implying Pro weekly quota of ~280–320 million tokens, API-equivalent ~$105–125.[^claude-quota-pro-rename-test]
- 一周额度大约相当于 12–13 个完整的五小时窗口；每天 API 等价用量 8 美元左右尚算充裕，18–22 美元则约 5–6 天耗尽。[^claude-quota-pro-rename-test]
- One week's quota equals roughly 12–13 full 5-hour windows; ~$8/day API-equivalent is comfortable, while ~$18–22/day exhausts it in about 5–6 days.[^claude-quota-pro-rename-test]
- 作者怀疑 Pro 基础额度已下降，五小时额度消耗速度至少比以前快一倍，且此前 5x/20x 主要指五小时窗口倍数而非每周倍数。[^claude-quota-pro-rename-test]
- The author suspects the Pro base quota has decreased, with 5-hour quota consumption at least twice as fast as before, and the old 5x/20x referred to 5-hour window multipliers, not weekly multipliers.[^claude-quota-pro-rename-test]

## 相关 / Related

- 原文：[链接](https://x.com/xiaomovps/status/2116472498002825628)。 / Original: [link](https://x.com/xiaomovps/status/2116472498002825628).
- Topic: [Claude 订阅风控权重 / Claude subscription risk-control weights](../../topics/claude-subscription-risk-control-weights.md)
- Topic: [编程 Agent 体验与额度 / Coding agent UX vs quota](../../topics/coding-agent-ux-vs-quota.md)
- Topic: [用量上限 A/B 测试 / Usage limit A/B tests](../../topics/usage-limit-ab-tests.md)
- Topic: [高端 AI 订阅价值 / Premium AI subscription value](../../topics/premium-ai-subscription-value.md)

[^claude-quota-pro-rename-test]: Claude quota after rename: Pro 5-hour and weekly quotas tested, suspected shrinkage
