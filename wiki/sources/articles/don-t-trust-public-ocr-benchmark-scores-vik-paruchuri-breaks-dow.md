---
type: Source
title: "别轻信公开 OCR 基准分数：Vik Paruchuri 解析榜单缺陷与模型选型建议"
title_en: "Don't trust public OCR benchmark scores: Vik Paruchuri breaks down leaderboard flaws and model selection advice"
description: "帖文引用 Vik Paruchuri 的演讲，列举 ParseBench、olmOCR-bench 与 OmniDocBench 的具体缺陷，警示不应仅凭公开基准分数选模型。"
description_en: "The post cites Vik Paruchuri's talk, listing specific flaws in ParseBench, olmOCR-bench, and OmniDocBench, warning against choosing models based solely on public benchmark scores."
resource: https://x.com/HamelHusain/status/2117384307593646230
tags: [ocr, benchmarks, model-evaluation, public-leaderboards]
sources:
  - id: hamel-husain-ocr-benchmark-flaws
    resource: https://x.com/HamelHusain/status/2117384307593646230
    title: "Don't trust public OCR benchmark scores: Vik Paruchuri breaks down leaderboard flaws and model selection advice"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-03T08:11:09+08:00
---

# 别轻信公开 OCR 基准分数：Vik Paruchuri 解析榜单缺陷与模型选型建议

*Don't trust public OCR benchmark scores: Vik Paruchuri breaks down leaderboard flaws and model selection advice*

帖文称，Vik Paruchuri 在演讲中主张不应依赖公开基准分数选模型，并以 ParseBench、olmOCR-bench、OmniDocBench 等 OCR 基准为例，指出分数可被格式、大小写、后处理等非内容因素扭曲，整体排名可能掩盖模型在内容与表格等具体能力上的差异。[^hamel-husain-ocr-benchmark-flaws]

The post says Vik Paruchuri argues in a talk that public benchmark scores should not be relied on when choosing models, using ParseBench, olmOCR-bench, and OmniDocBench as examples to show that scores can be distorted by formatting, capitalization, postprocessing, and other non-content factors, while overall rankings may hide differences in specific capabilities such as content and tables.[^hamel-husain-ocr-benchmark-flaws]

## 摘要 / Summary

- ParseBench 测试期望太阳能板容量为 310 吉瓦，而正确值为 303 吉瓦；73% 的图表测试要求图表上未印出的数值。 / ParseBench expects 310 gigawatts of solar capacity when the correct value is 303, and 73% of its chart tests ask for values not printed on the chart.[^hamel-husain-ocr-benchmark-flaws]
- olmOCR-bench 会因文档中的“Republican party”被模型按原文大小写复写而判错，也会因正确保留换行而扣分。 / olmOCR-bench penalizes a model for correctly preserving a line break and for copying "Republican party" capitalization when the test expects "Republican Party".[^hamel-husain-ocr-benchmark-flaws]
- OmniDocBench 使用编辑距离，正确的 HTML 表格可能比错误的 Markdown 数字受更重惩罚，即格式比答案更重要。 / OmniDocBench uses edit distance, so a correct table in HTML can be penalized more heavily than a wrong number in Markdown, making format matter more than the answer.[^hamel-husain-ocr-benchmark-flaws]
- dots.mocr 在六款模型中排名最后，却在内容和表格上击败排名第一的模型，说明总分可掩盖具体能力差异。 / dots.mocr ranks last among six models despite beating the first-ranked model on content and tables, showing overall scores can hide capability differences.[^hamel-husain-ocr-benchmark-flaws]
- 一个 700 行的后处理器可为模型输出增加 1 到 2 分，其提升幅度超过许多模型间的分差。 / A 700-line postprocessor that rewrites model output adds 1 to 2 points, more than many gaps between models.[^hamel-husain-ocr-benchmark-flaws]
- 演讲章节涵盖基准分数虚高、指标设计缺陷、后处理与排名误导、按任务切片检查偏差、构建公平测试及自有文档测试 OCR 等内容。 / The talk's chapters cover inflated benchmark scores, metric design flaws, postprocessing and misleading rankings, slicing benchmarks by task to check bias, building fair tests, and testing OCR models on your own documents.[^hamel-husain-ocr-benchmark-flaws]

## 相关 / Related

- 原文：[链接](https://x.com/HamelHusain/status/2117384307593646230)。 / Original: [link](https://x.com/HamelHusain/status/2117384307593646230).
- Topic: [信任公开榜前先审质量 / Scrutinize public-benchmark quality before trusting](../../topics/public-benchmark-quality-scrutiny.md)
- Topic: [社区实测对抗刷分碰瓷 / Community evals vs score hype](../../topics/community-evals-vs-score-hype.md)
- Topic: [AI 评测入口与干活记录 / AI-eval gateways and work-record streams](../../topics/ai-eval-work-record-gateway.md)
- Topic: [智能作为人类中心主义指标 / Intelligence as an anthropocentric benchmark](../../topics/intelligence-as-anthropocentric-benchmark.md)

[^hamel-husain-ocr-benchmark-flaws]: Don't trust public OCR benchmark scores: Vik Paruchuri breaks down leaderboard flaws and model selection advice
