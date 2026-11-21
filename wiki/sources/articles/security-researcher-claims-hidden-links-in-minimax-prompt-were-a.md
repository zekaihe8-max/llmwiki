---
type: Source
title: "有安全研究员称在 MiniMax 提示词埋私有链接，第三方后续访问"
title_en: "Security researcher claims hidden links in MiniMax prompt were accessed by third party"
description: "安全研究员称向 MiniMax 提示词植入仅自己知晓的链接，40–130 小时后出现第三方访问，OpenRouter 撤销其零数据保留标签。"
description_en: "A security researcher claims to have planted privately known links in MiniMax's prompt; third-party access appeared 40–130 hours later, and OpenRouter removed its zero-data-retention label."
resource: https://x.com/heydengai/status/2124060264517804244
tags: [ai-safety, llm-privacy, prompt-security, model-aggregators, minimax]
sources:
  - id: minimax-prompt-hidden-links
    resource: https://x.com/heydengai/status/2124060264517804244
    title: "Security researcher claims hidden links in MiniMax prompt were accessed by third party"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-21T20:10:37+08:00
---

# 有安全研究员称在 MiniMax 提示词埋私有链接，第三方后续访问

*Security researcher claims hidden links in MiniMax prompt were accessed by third party*

「帖文称」一名安全研究员偷偷向 MiniMax 的提示词中埋入了几个只有自己知道的链接，40 至 130 小时后，居然有第三方访问了这些链接；同样的测试在其他模型上基本未出现此事，且 OpenRouter 已撤销 MiniMax 的「零数据保留」标签，引发对用户代码与商业机密泄露的担忧。[^minimax-prompt-hidden-links]

The post claims a security researcher secretly embedded several links known only to them into MiniMax's prompt, and that a third party accessed those links 40 to 130 hours later; the same test on other models reportedly did not produce this result, and OpenRouter has removed MiniMax's "zero data retention" label, raising concerns about user code and business secret leakage.[^minimax-prompt-hidden-links]

## 摘要 / Summary

- 帖文称安全研究员在 MiniMax 提示词中埋入了几个只有自己知道的链接。[^minimax-prompt-hidden-links]
- The post claims a security researcher embedded several privately known links in MiniMax's prompt.[^minimax-prompt-hidden-links]
- 40～130 小时后，第三方据称访问了这些链接。[^minimax-prompt-hidden-links]
- According to the post, a third party accessed those links 40 to 130 hours later.[^minimax-prompt-hidden-links]
- 同样的测试放到其他模型上，基本都没有出现此事。[^minimax-prompt-hidden-links]
- The same test on other models reportedly did not show this behavior.[^minimax-prompt-hidden-links]
- OpenRouter 已撤销 MiniMax 的「零数据保留」标签。[^minimax-prompt-hidden-links]
- OpenRouter has removed MiniMax's "zero data retention" label.[^minimax-prompt-hidden-links]
- 帖文警告，若用户数据（如代码和商业机密）泄露，用户将不敢再将其交给模型。[^minimax-prompt-hidden-links]
- The post warns that if user data such as code and business secrets leaks, users will no longer trust the model with them.[^minimax-prompt-hidden-links]

## 相关 / Related

- 原文：[链接](https://x.com/heydengai/status/2124060264517804244)。 / Original: [link](https://x.com/heydengai/status/2124060264517804244).
- Topic: [AI 聊天机器人安全的消费者保护诉讼 / Consumer-protection suits over AI chatbot safety](../../topics/ai-chatbot-safety-consumer-suits.md)
- Topic: [发模型前本地脱敏 / Local desensitization before sending to models](../../topics/local-desensitization-before-models.md)
- Topic: [DeepSeek 自营推理相对聚合平台 / DeepSeek first-party inference vs aggregators](../../topics/deepseek-inference-vs-aggregators.md)
- Topic: [机密计算与云端 AI / Confidential computing for cloud AI](../../topics/confidential-computing-cloud-ai.md)

[^minimax-prompt-hidden-links]: Security researcher claims hidden links in MiniMax prompt were accessed by third party
