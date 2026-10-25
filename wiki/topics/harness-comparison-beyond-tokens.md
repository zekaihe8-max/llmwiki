---
type: Topic
title: 超越 token 数的 Harness 对比
title_en: Harness comparison beyond tokens
description: 同模型比 harness 应看轮次、缓存命中、时延与质量，而不是只看累计 token；Token 接近也不等于成品一样，还要看 Harness 如何组织执行；DSH 标准模式常更啰嗦多轮，后续可用 AGENTS.md 约束关掉反复截图自检。
description_en: Compare agent harnesses on the same model by rounds, cache hits, latency, and output quality—not cumulative token totals alone; similar Token spend still need not mean equal quality—how the Harness organizes the run matters; DSH standard mode often runs more verbose multi-round loops, and later guidance uses AGENTS.md constraints to shut down repeated screenshot self-checks.
tags: [agents, harness, tokens, cache, evaluation]
sources:
  - id: xiaomovps-pi-vs-deepseek-harness
    resource: https://x.com/xiaomovps/status/2113283228467622362
    title: 小墨 on Pi vs DeepSeek Harness rounds and cost
  - id: xiaomovps-dsh-standard-mode-verbose
    resource: https://x.com/xiaomovps/status/2113852900673998855
    title: 小墨 on DSH standard mode verbosity
  - id: xiaomovps-dsh-agents-md-tokens
    resource: https://x.com/xiaomovps/status/2113950309278167104
    title: 小墨 on DSH AGENTS.md / CLAUDE.md token tips
  - id: xiaomovps-workbuddy-vs-dsh-quality
    resource: https://x.com/xiaomovps/status/2114312906703847698
    title: Xiaomo hands-on WorkBuddy vs DSH quality
  - id: oran-ge-pelican-bike-ai-game
    resource: https://x.com/oran_ge/status/2114003877813178562
    title: Orange AI on casually shipping a pelican-bike AI mini-game
generated:
  by: cursor-agent/composer
  at: 2026-10-25T21:06:44+08:00
---

# 超越 token 数的 Harness 对比

*Harness comparison beyond tokens*

同一模型、同一提示在不同 agent harness 下，轮次与累计输入 token 可差很多，而费用变动小得多——因为重复上下文常命中缓存。只凭 token 总量评判 harness，会误读费用与速度—质量权衡；即便两边累计 Token 接近、缓存命中都很高，成品质量仍可能拉开，还要看 Harness 如何组织执行、多花的 Token 有没有改善结果。[^xiaomovps-pi-vs-deepseek-harness][^xiaomovps-workbuddy-vs-dsh-quality]

The same model and prompt under different agent harnesses can produce very different round counts and cumulative input tokens while cost moves much less, because repeated context often hits cache. Judging harnesses by token totals alone misreads both expense and the speed-versus-quality tradeoff; even when both sides burn similar cumulative Tokens with high cache hits, final quality can still diverge—how the Harness organizes the run and whether extra Tokens improve the result still matter.[^xiaomovps-pi-vs-deepseek-harness][^xiaomovps-workbuddy-vs-dsh-quality]

## 综合分析 / Synthesis

[小墨 on Pi vs DeepSeek Harness rounds and cost](../sources/articles/xiaomovps-pi-vs-deepseek-harness.md) 报告一次受控的「自行车上的鹈鹕」HTML 跑法（DeepSeek V4 Flash）：初始上下文相近（首轮 Pi 略高），但 Pi 约三轮结束，DeepSeek Harness 约二十八轮并多次截图自检。累计输入约差 18×；计入 DeepSeek Harness 约 98.9% 缓存命中后，估计费用大约只差 2×。耐久主张是方法论——对比 harness 时要把轮次、缓存命中率、墙钟时间与最终质量放一起看——也是实践：可运行输出够用时优先快结束；UI 质量是目标且多付费用划算时，接受迭代式视觉自检。[^xiaomovps-pi-vs-deepseek-harness]

[小墨 on Pi vs DeepSeek Harness rounds and cost](../sources/articles/xiaomovps-pi-vs-deepseek-harness.md) reports a controlled pelican-on-a-bike HTML run on DeepSeek V4 Flash: initial context was similar (Pi slightly higher on the first round), but Pi finished in about three rounds while DeepSeek Harness ran about twenty-eight with many screenshot self-checks. Cumulative input was roughly 18× apart; estimated cost was only about 2× apart once DeepSeek Harness’s ~98.9% cache hit rate is counted. The durable claim is methodological—pair rounds, cache hit rate, wall time, and final quality when comparing harnesses—and practical: prefer a fast finish when runnable output is enough, and accept iterative visual self-check when UI quality is the goal and the extra cost is justified.[^xiaomovps-pi-vs-deepseek-harness]

同作者的 [小墨谈 DSH 标准模式偏啰嗦](../sources/articles/xiaomovps-dsh-standard-mode-verbose.md) 用长期使用体验补同一对照：Pi 上同模型同思考等级常两到三轮、约八十分；DSH 标准模式常十几二十轮、更慢更啰嗦，效果大约只多 4～5 分却不值 token 与时间，并怀疑 DSH 系统提示词过重——把「多轮浪费」从单次计量扩成默认模式感受。[^xiaomovps-dsh-standard-mode-verbose]

The same author’s [Xiaomo on DSH standard mode verbosity](../sources/articles/xiaomovps-dsh-standard-mode-verbose.md) adds long-run experience to the same contrast: on Pi the same model and thinking level often finishes in two or three rounds at about eighty points; DSH standard mode often runs ten to twenty rounds, slower and more verbose, for only about four to five extra quality points that are not worth the tokens or time, and suspects DSH’s system prompt is too heavy—extending “multi-round waste” from one measured run to the default-mode feel.[^xiaomovps-dsh-standard-mode-verbose]

同作者后续的 [小墨谈 DSH 用 AGENTS.md / CLAUDE.md 省 token](../sources/articles/xiaomovps-dsh-agents-md-tokens.md) 从指令侧回应同一浪费模式：用项目规则要求验证通过即停、勿反复截图自检，并配合极简模式与按需 Skills，试图把 DSH 做得更接近 Pi 的简洁——度量之外还有可写进 `AGENTS.md` / `CLAUDE.md` 的约束。详见 [项目指令与 Token 效率](./agents-md-token-efficiency.md)。[^xiaomovps-dsh-agents-md-tokens]

The same author’s later [Xiaomo on saving tokens in DSH with AGENTS.md / CLAUDE.md](../sources/articles/xiaomovps-dsh-agents-md-tokens.md) answers that waste from the instruction side: project rules to stop when verification passes and skip repeated screenshot self-checks, plus minimal mode and on-demand Skills, aiming to make DSH closer to Pi’s cleanliness—constraints you can write into `AGENTS.md` / `CLAUDE.md`, not only metrics. See [Project instructions and token efficiency](./agents-md-token-efficiency.md).[^xiaomovps-dsh-agents-md-tokens]

同作者再后的 [小墨实测 WorkBuddy 与 DeepSeek Harness 同题效果](../sources/articles/xiaomovps-workbuddy-vs-dsh-quality.md) 把对照从 Pi 换成同题 WorkBuddy：两边都约百万 Token、缓存约 99%（WorkBuddy 约 90～110 万、约 4 分多钟，积分计费故 Token 为估算；DSH 约 120 万），都能交 HTML，但他更认 DSH 的细节与色彩；方法论补强为——Token 接近也不等于质量一样，还要看 Harness 如何组织执行、多花的 Token 有没有改善结果；并声明仅为同提示词小范围测试。[^xiaomovps-workbuddy-vs-dsh-quality] 原帖 <https://x.com/xiaomovps/status/2114312906703847698>。

The same author’s later [Xiaomo hands-on: WorkBuddy vs DeepSeek Harness quality](../sources/articles/xiaomovps-workbuddy-vs-dsh-quality.md) swaps the foil from Pi to WorkBuddy on the same prompt: both sides about a million Tokens with ~99% cache (WorkBuddy ~0.9–1.1M in four-plus minutes—points billing so Tokens are estimates; DSH ~1.2M), both finish the HTML, but he prefers DSH on detail and color; the methodological add-on is that similar Token spend still need not mean equal quality—how the Harness organizes execution and whether extra Tokens improve results still matter—and he flags it as a small same-prompt test only.[^xiaomovps-workbuddy-vs-dsh-quality] Post: <https://x.com/xiaomovps/status/2114312906703847698>.

同题材的活演示早前见 [Orange AI 谈随手做成鹈鹕骑车 AI 小游戏](../sources/articles/oran-ge-pelican-bike-ai-game.md)：随手做成并公开 <https://orange2ai.github.io/pelican-bike/>，自称一次成功。[^oran-ge-pelican-bike-ai-game] 它说明「鹈鹕骑车」为何能成为社区同题提示词，但不替代本页对轮次、缓存与成品质感的计量主张；一次随手成功的地板叙事归档在 [随手 AI 小游戏一次成功](./casual-ai-minigame-first-try.md)。

An earlier live demo of the same motif is [Orange AI on casually shipping a pelican-bike AI mini-game](../sources/articles/oran-ge-pelican-bike-ai-game.md): a casual build published at <https://orange2ai.github.io/pelican-bike/>, claimed to work on the first try.[^oran-ge-pelican-bike-ai-game] It helps explain why pelican-bike became a community same-prompt foil, but does not replace this page’s measured claims on rounds, cache, and finished quality; the one-shot casual floor narrative lives under [Casual AI mini-games succeeding on first try](./casual-ai-minigame-first-try.md).

## 矛盾与变化 / Contradictions

[Orange AI 谈随手做成鹈鹕骑车 AI 小游戏](../sources/articles/oran-ge-pelican-bike-ai-game.md) 把同题材读成「随便一个模型都太强了」、一次随手成功；[^oran-ge-pelican-bike-ai-game] 本页小墨同题对照则显示：即便任务都能完成，Harness 仍可拉开轮次、费用与成品质感。切面不同——能力地板 vs 执行组织——不是互相取消。 / [Orange AI on casually shipping a pelican-bike AI mini-game](../sources/articles/oran-ge-pelican-bike-ai-game.md) reads the same motif as “any model is too strong” and a casual first-try win;[^oran-ge-pelican-bike-ai-game] Xiaomo’s same-prompt contrasts on this page show that even when the task completes, harnesses can still diverge on rounds, cost, and finished quality. Different cuts—capability floor vs execution organization—not a cancellation.

流传「在 DSH 上跑分更高」与作者体验冲突：标准模式下作者感到模型更笨更啰嗦，质量只略升却不值成本；早前受控对比则留下「截图循环或有助于 UI」的可能，体验帖则把多轮主要归咎于系统提示词过重。后续帖主张用项目指令关掉无效循环——是补救，不是否认测量或体验。WorkBuddy 同题实测则与「DSH 多轮相对 Pi 常不值」并置而非直接否定：相对另一同样烧约百万 Token 的 Harness，作者更认 DSH 成品质感，并强调 Token 接近仍可比出质量差——对照对象从轻量 Pi 换成重消耗 WorkBuddy 后，主张从「少轮更划算」扩成「同量 Token 也要看执行组织与成品」。 / Rumor that scores run higher on DSH conflicts with the author’s experience: under standard mode the model felt dumber and more verbose, with only a slight quality bump that was not worth the cost; the earlier controlled comparison left room that the screenshot loop might help UI work, while the experience post mainly blames a heavy system prompt. The later post urges project instructions to shut wasteful loops down—a remedy, not a denial of the measurement or the experience. The WorkBuddy same-prompt hands-on sits beside—not against—“DSH’s multi-rounds often not worth it vs Pi”: against another harness that also burns about a million Tokens, the author prefers DSH’s finished quality and stresses that similar Token totals can still diverge on quality—after the foil shifts from light Pi to heavy WorkBuddy, the claim widens from “fewer rounds pay better” to “even at similar Tokens, execution organization and the artifact still matter.”[^xiaomovps-pi-vs-deepseek-harness][^xiaomovps-dsh-standard-mode-verbose][^xiaomovps-dsh-agents-md-tokens][^xiaomovps-workbuddy-vs-dsh-quality]

## 相关 / Related

- Source: [小墨 on Pi vs DeepSeek Harness rounds and cost](../sources/articles/xiaomovps-pi-vs-deepseek-harness.md)
- Source: [小墨谈 DSH 标准模式偏啰嗦](../sources/articles/xiaomovps-dsh-standard-mode-verbose.md)
- Source: [小墨谈 DSH 用 AGENTS.md / CLAUDE.md 省 token](../sources/articles/xiaomovps-dsh-agents-md-tokens.md)
- Source: [小墨实测 WorkBuddy 与 DeepSeek Harness 同题效果](../sources/articles/xiaomovps-workbuddy-vs-dsh-quality.md)
- Source: [Orange AI 谈随手做成鹈鹕骑车 AI 小游戏](../sources/articles/oran-ge-pelican-bike-ai-game.md)
- Topic: [项目指令与 Token 效率](./agents-md-token-efficiency.md)
- Topic: [随手 AI 小游戏一次成功](./casual-ai-minigame-first-try.md)

[^xiaomovps-pi-vs-deepseek-harness]: 小墨 on Pi vs DeepSeek Harness rounds and cost
[^xiaomovps-dsh-standard-mode-verbose]: 小墨 on DSH standard mode verbosity
[^xiaomovps-dsh-agents-md-tokens]: 小墨 on DSH AGENTS.md / CLAUDE.md token tips
[^xiaomovps-workbuddy-vs-dsh-quality]: Xiaomo hands-on WorkBuddy vs DSH quality
[^oran-ge-pelican-bike-ai-game]: Orange AI on casually shipping a pelican-bike AI mini-game
