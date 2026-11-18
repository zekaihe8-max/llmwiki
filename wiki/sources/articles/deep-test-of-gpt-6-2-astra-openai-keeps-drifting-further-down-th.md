---
type: Source
title: "深度实测GPT-6.2 Astra，OpenAI在偏科的道路上越走越远了"
title_en: "Deep Test of GPT-6.2 Astra: OpenAI Keeps Drifting Further Down the Path of Subject Bias"
description: "帖文对 GPT-6.2 Astra 与 Sol 的定价、能力评测及实测体验进行复盘，指出其在科研与代码审查上强势，但在沟通规划与审美生成上偏科。"
description_en: "The post reviews GPT-6.2 Astra and Sol pricing, capability benchmarks, and hands-on testing, noting strengths in research and code review but subject bias in communication, planning, and aesthetic generation."
resource: https://x.com/Khazix0918/status/2122858329248825669
tags: [gpt-6-2, openai, ai-model-review, benchmark, code-review, ai-aesthetics]
sources:
  - id: e161dfa08aa57d7f
    resource: https://x.com/Khazix0918/status/2122858329248825669
    title: "Deep Test of GPT-6.2 Astra: OpenAI Keeps Drifting Further Down the Path of Subject Bias"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-18T19:52:24+08:00
---

# 深度实测GPT-6.2 Astra，OpenAI在偏科的道路上越走越远了

*Deep Test of GPT-6.2 Astra: OpenAI Keeps Drifting Further Down the Path of Subject Bias*

「帖文称」OpenAI 于 2026 年 11 月 18 日发布 GPT-6.2 Astra 与 Sol 两款模型，Astra 定位前沿旗舰，知识截止日期为 2026 年 5 月 18 日，Sol 定位日常主力，知识截止日期为 2026 年 6 月 1 日。作者通过 Agents' Last Exam、Terminal-Bench-Science 等公开评测及自有代码审查集实测，发现 GPT-6.2 Astra 在单任务成本与代码缺陷发现率上表现突出，但在方案规划可读性、视频审美等非科研任务上不及 Claude 与 Gemini，结论是 OpenAI 模型越来越偏科，更适合精英与科研而非普通用户。[^e161dfa08aa57d7f]

The post states that OpenAI released GPT-6.2 Astra and Sol on November 18, 2026, with Astra positioned as a frontier flagship (knowledge cutoff May 18, 2026) and Sol as a daily workhorse (knowledge cutoff June 1, 2026). Through public benchmarks such as Agents' Last Exam and Terminal-Bench-Science, plus a private code-review test set, the author finds GPT-6.2 Astra strong in per-task cost and bug detection, but weaker than Claude and Gemini in plan readability, communication, and video aesthetics. The conclusion is that OpenAI's models are becoming increasingly subject-biased, better suited for elites and research than ordinary users.[^e161dfa08aa57d7f]

## 摘要 / Summary

- GPT-6.2 Astra 定价：输入 8 美元/百万 Token，输出 40 美元，缓存读取 0.4 美元，较上代缓存价格下降 60%；Sol 维持输入 2 美元、输出 10 美元、缓存 0.1 美元不变。[^e161dfa08aa57d7f]
- GPT-6.2 Astra pricing: $8 input per 1M tokens, $40 output, $0.4 cache read, a 60% cache price cut from the previous generation; Sol remains unchanged at $2 input, $10 output, $0.1 cache.[^e161dfa08aa57d7f]
- 在 Agents' Last Exam 评测中，GPT-6.2 Astra 得分约 78%，单任务成本约 3 美元，而 Claude Fable 5.2 得分约 73%，单任务成本约 60 美元。[^e161dfa08aa57d7f]
- On Agents' Last Exam, GPT-6.2 Astra scored about 78% at roughly $3 per task, while Claude Fable 5.2 scored about 73% at roughly $60 per task.[^e161dfa08aa57d7f]
- 作者自建代码审查评测集中，GPT-6.1 Sol 发现 65% 的问题，GPT-6.2 Sol 达到 84%，GPT-6.2 Astra 达到 96%，但 Astra 耗时约为 Sol 的一倍、费用约为 Sol 的四倍。[^e161dfa08aa57d7f]
- In the author's private code-review test set, GPT-6.1 Sol found 65% of issues, GPT-6.2 Sol reached 84%, and GPT-6.2 Astra reached 96%, though Astra took about twice as long and cost about four times as much as Sol.[^e161dfa08aa57d7f]
- 帖文称 GPT-6.2 Astra 在 3D 与空间视觉（如 Three.js 古希腊世界、第一人称跑酷游戏）表现明显增强，但在视频动效与整体审美上不及 Claude Fable 5.2 与 Gemini 4 Carbon。[^e161dfa08aa57d7f]
- The post states that GPT-6.2 Astra shows clear improvement in 3D and spatial vision (e.g., Three.js ancient Greece world, first-person parkour game), but lags behind Claude Fable 5.2 and Gemini 4 Carbon in video motion and overall aesthetics.[^e161dfa08aa57d7f]
- 作者建议以 Claude 或 Gemini 指挥 GPT 的组合使用方式，认为 GPT 系列更适合科研与算法等严谨任务，而非普通用户直接沟通。[^e161dfa08aa57d7f]
- The author recommends a combo where Claude or Gemini directs GPT, viewing the GPT series as better suited for rigorous research and algorithm tasks than for direct use by ordinary users.[^e161dfa08aa57d7f]

## 相关 / Related

- 原文：[链接](https://x.com/Khazix0918/status/2122858329248825669)。 / Original: [link](https://x.com/Khazix0918/status/2122858329248825669).
- Topic: [Pro 与 Flash 模型策略 / Pro vs Flash model strategy](../../topics/pro-vs-flash-model-strategy.md)
- Topic: [AI 评测入口与干活记录 / AI-eval gateways and work-record streams](../../topics/ai-eval-work-record-gateway.md)
- Topic: [信任公开榜前先审质量 / Scrutinize public-benchmark quality before trusting](../../topics/public-benchmark-quality-scrutiny.md)
- Topic: [高端 AI 订阅价值 / Premium AI subscription value](../../topics/premium-ai-subscription-value.md)

[^e161dfa08aa57d7f]: Deep Test of GPT-6.2 Astra: OpenAI Keeps Drifting Further Down the Path of Subject Bias
