---
type: Source
title: "GLM-5.4 查漏洞细，但比 Neon 慢约 4 倍"
title_en: "GLM-5.4 Finds Vulnerabilities Thoroughly but Is About 4x Slower Than Neon"
description: "智谱 GLM-5.4 在代码漏洞检测上表现细致，但因过度思考导致步数和耗时远高于 Gemini Neon，适合作为多模型评审中的把关模型而非日常主力。"
description_en: "Zhipu's GLM-5.4 detects code vulnerabilities thoroughly, but excessive thinking makes it far slower and more step-heavy than Gemini Neon, suiting it as a gatekeeper in multi-model review rather than a daily driver."
resource: https://x.com/lxfater/status/2124805211835236796
tags: [glm-5-4, coding-agent, model-selection, vulnerability-detection]
sources:
  - id: glm-5-4-vulnerability-detection-4x-slower-than-n
    resource: https://x.com/lxfater/status/2124805211835236796
    title: "GLM-5.4 Finds Vulnerabilities Thoroughly but Is About 4x Slower Than Neon"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-23T20:02:17+08:00
---

# GLM-5.4 查漏洞细，但比 Neon 慢约 4 倍

*GLM-5.4 Finds Vulnerabilities Thoroughly but Is About 4x Slower Than Neon*

帖文称，智谱新上线的 GLM-5.4 在海外实测中查漏洞比 Claude 更细，在 6 道复杂编程大题中最高档拿 33.2 分排第 7、国产模型第一，并挖出 Claude Fable 5.2 未发现的漏洞；但完成同一套活比谷歌 Gemini Neon 慢约 4 倍，并非因吐字慢，而是单步更快却步数远多（1128 步对 244 步），思考 token 烧掉 104 万，单题比 Neon 多 9 到 14 倍。博主建议日常用高档（High），最高档（Max）易钻牛角尖且易超时，模型目前仅在智谱 Coding Plan 订阅中提供，公开接口和开源文件尚未放出。[^glm-5-4-vulnerability-detection-4x-slower-than-n]

The post claims Zhipu's newly launched GLM-5.4 detects vulnerabilities more finely than Claude in overseas testing, scoring 33.2 points at the highest tier on 6 complex programming problems to rank 7th and first among Chinese models, while uncovering vulnerabilities missed by Claude Fable 5.2; however, it completes the same work about 4x slower than Google Gemini Neon, not due to slow token output but because it takes far more steps (1128 vs 244) and burns 1.04M thinking tokens, 9 to 14x more per problem than Neon. The blogger recommends the High tier for daily use, noting Max tends to overthink and time out; the model is currently only available via Zhipu's Coding Plan subscription, with public API and open-source files not yet released.[^glm-5-4-vulnerability-detection-4x-slower-than-n]

## 摘要 / Summary

- GLM-5.4 最高档在 6 道复杂编程大题中得 33.2 分，排第 7，位列国产模型第一，前面全是闭源旗舰。[^glm-5-4-vulnerability-detection-4x-slower-than-n]
- GLM-5.4's highest tier scored 33.2 on 6 complex programming problems, ranking 7th overall and first among Chinese models, with only closed-source flagship models ahead.[^glm-5-4-vulnerability-detection-4x-slower-than-n]
- 它跑完 6 道题耗时 431 分钟，而 Neon 仅需 109 分钟，慢约 4 倍；但单步耗时 GLM-5.4 平均 22.9 秒，比 Neon 的 26.7 秒更快。[^glm-5-4-vulnerability-detection-4x-slower-than-n]
- It took 431 minutes to complete 6 problems versus Neon's 109 minutes, about 4x slower; yet average single-step time was 22.9 seconds for GLM-5.4 versus 26.7 seconds for Neon.[^glm-5-4-vulnerability-detection-4x-slower-than-n]
- GLM-5.4 走了 1128 步，Neon 只走 244 步；思考 token 烧掉 104 万，单题比 Neon 多 9 到 14 倍。[^glm-5-4-vulnerability-detection-4x-slower-than-n]
- GLM-5.4 took 1128 steps versus Neon's 244 steps, burning 1.04M thinking tokens, 9 to 14x more per problem than Neon.[^glm-5-4-vulnerability-detection-4x-slower-than-n]
- 高档和最高档在安全小任务中因想太久撞上 180 秒超时，中低档反而通过；博主建议日常用高档，最高档易钻牛角尖。[^glm-5-4-vulnerability-detection-4x-slower-than-n]
- High and Max tiers hit 180-second timeouts on security micro-tasks due to overthinking, while mid/low tiers passed; the blogger recommends High for daily use, noting Max easily gets stuck in rabbit holes.[^glm-5-4-vulnerability-detection-4x-slower-than-n]
- 模型目前仅在智谱 Coding Plan 订阅中提供，改模型名 glm-5.4 即可试用；公开接口和开源文件尚未放出，数据来自博主内测。[^glm-5-4-vulnerability-detection-4x-slower-than-n]
- The model is currently only available via Zhipu's Coding Plan subscription by using model name glm-5.4; public API and open-source files are not yet released, and the data comes from the blogger's internal testing.[^glm-5-4-vulnerability-detection-4x-slower-than-n]

## 相关 / Related

- 原文：[链接](https://x.com/lxfater/status/2124805211835236796)。 / Original: [link](https://x.com/lxfater/status/2124805211835236796).
- Topic: [面向 Agent 的模型渠道取舍 / Model provider channel tradeoffs for agents](../../topics/agent-model-channel-tradeoffs.md)
- Topic: [编程 Agent 体验与额度 / Coding agent UX vs quota](../../topics/coding-agent-ux-vs-quota.md)
- Topic: [社区实测对抗刷分碰瓷 / Community evals vs score hype](../../topics/community-evals-vs-score-hype.md)
- Topic: [Pro 与 Flash 模型策略 / Pro vs Flash model strategy](../../topics/pro-vs-flash-model-strategy.md)

[^glm-5-4-vulnerability-detection-4x-slower-than-n]: GLM-5.4 Finds Vulnerabilities Thoroughly but Is About 4x Slower Than Neon
