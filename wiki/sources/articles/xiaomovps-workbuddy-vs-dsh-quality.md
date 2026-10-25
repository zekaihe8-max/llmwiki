---
type: Source
title: "小墨实测 WorkBuddy 与 DeepSeek Harness 同题效果"
title_en: "Xiaomo hands-on: WorkBuddy vs DeepSeek Harness quality"
description: "小墨用同一「鹈鹕骑自行车」HTML 提示词对比 WorkBuddy 与 DeepSeek Harness：两边都约百万 Token、缓存约 99%，他更认 DSH 成品质感，并主张比 Agent 还要看 Harness 怎么组织执行、多花的 Token 有没有改善结果。"
description_en: "Xiaomo compares WorkBuddy and DeepSeek Harness on the same pelican-on-a-bike HTML prompt—both about a million Tokens with ~99% cache hits—prefers DSH’s final quality, and argues Agent comparisons should weigh how the Harness organizes execution and whether extra Tokens actually improve results."
resource: https://x.com/xiaomovps/status/2114312906703847698
tags: [agents, harness, workbuddy, deepseek, dsh, tokens, cache, evaluation, xiaomovps]
sources:
  - id: xiaomovps-workbuddy-vs-dsh-quality
    resource: https://x.com/xiaomovps/status/2114312906703847698
    title: Xiaomo hands-on WorkBuddy vs DSH quality
    author: human:xiaomovps
generated:
  by: cursor-agent/composer
  at: 2026-10-25T20:31:03+08:00
date: 2026-10-25
---

# 小墨实测 WorkBuddy 与 DeepSeek Harness 同题效果

*Xiaomo hands-on: WorkBuddy vs DeepSeek Harness quality*

[@xiaomovps](https://x.com/xiaomovps)（小墨同学）听评论区建议，用此前测 Pi / DSH 时同一「鹈鹕骑自行车」HTML 提示词实测 WorkBuddy：两边都消耗上百万 Token、缓存命中率接近 99%，累计消耗差不多，但他更认 DeepSeek Harness（DSH）的画面细节与色彩；并主张对比 Agent 不能只看模型能否完成任务，还要看 Harness 怎么组织执行、多花的 Token 有没有真正改善结果——同时声明这是同提示词小范围测试，不代表 DSH 在所有任务上都更好。[^xiaomovps-workbuddy-vs-dsh-quality] 原帖见 <https://x.com/xiaomovps/status/2114312906703847698>。

[@xiaomovps](https://x.com/xiaomovps) (Xiaomo), following comment suggestions, hands-on tests WorkBuddy with the same pelican-on-a-bike HTML prompt used for Pi / DSH: both sides burn about a million Tokens with cache hit rates near 99% and similar cumulative use, but he prefers DeepSeek Harness (DSH) on visual detail and color; he argues Agent comparisons must look past whether the model finishes the task to how the Harness organizes execution and whether extra Tokens actually improve results—and notes this is a small same-prompt test, not a claim that DSH wins on every task.[^xiaomovps-workbuddy-vs-dsh-quality] Post: <https://x.com/xiaomovps/status/2114312906703847698>.

## 摘要 / Summary

- WorkBuddy：约 90～110 万 Token，缓存命中率 99%，总共运行约 4 分多钟；因积分计费，Token 只能按使用情况估算，可能有误差，不能直接当准确 API 成本。[^xiaomovps-workbuddy-vs-dsh-quality]
- WorkBuddy: about 0.9–1.1M Tokens, 99% cache hit rate, roughly four-plus minutes total; billing is points-based, so Tokens are usage estimates that may err and should not be treated as exact API cost.[^xiaomovps-workbuddy-vs-dsh-quality]
- DeepSeek Harness：约 120 万 Token，缓存命中率同样接近 99%；两边累计 Token 消耗其实差不多，且都大量复用缓存。[^xiaomovps-workbuddy-vs-dsh-quality]
- DeepSeek Harness: about 1.2M Tokens, cache hit rate likewise near 99%; cumulative Token use is similar on both sides, with heavy cache reuse.[^xiaomovps-workbuddy-vs-dsh-quality]
- 两边都完成鹈鹕骑自行车的 HTML，但作者对比成品后更认 DSH——尤其画面细节与整体色彩更符合预期；WorkBuddy 也能完成任务，细节上作者觉得还差一点。[^xiaomovps-workbuddy-vs-dsh-quality]
- Both finished the pelican-on-a-bike HTML, but after comparing outputs the author prefers DSH—especially detail and overall color matching expectations; WorkBuddy also completes the task, just a bit short on those details in his view.[^xiaomovps-workbuddy-vs-dsh-quality]
- 接近 99% 的缓存命中说明大量输入在复用已有 Context；Token 消耗接近不代表最终生成质量一样。[^xiaomovps-workbuddy-vs-dsh-quality]
- Near-99% cache hits mean much input reuses existing Context; similar Token spend does not mean equal final quality.[^xiaomovps-workbuddy-vs-dsh-quality]
- 对比 Agent 不能只看模型能否完成任务，还要看 Harness 怎么组织执行流程，以及多花的 Token 有没有真正改善结果；本帖仅为同提示词小范围测试，作者计划继续用不同任务检验差距是否持续。[^xiaomovps-workbuddy-vs-dsh-quality]
- Comparing Agents should look past task completion to how the Harness organizes the run and whether extra Tokens truly improve results; this post is only a small same-prompt test, and the author plans further tasks to see whether the gap holds.[^xiaomovps-workbuddy-vs-dsh-quality]

## 相关 / Related

- Topic: [超越 token 数的 Harness 对比](../../topics/harness-comparison-beyond-tokens.md)
- Source: [小墨谈 Pi 与 DeepSeek Harness 的轮次与成本](./xiaomovps-pi-vs-deepseek-harness.md)
- Source: [小墨谈 DSH 标准模式偏啰嗦](./xiaomovps-dsh-standard-mode-verbose.md)

[^xiaomovps-workbuddy-vs-dsh-quality]: Xiaomo hands-on WorkBuddy vs DSH quality
