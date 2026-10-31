---
type: Source
title: "小米开源 Xiaomi-OCR-0 文档理解模型"
title_en: "Xiaomi Open-Sources Xiaomi-OCR-0 Document Understanding Model"
description: "小米开源仅 8 亿参数的 Xiaomi-OCR-0，支持文档解析、关键信息抽取和 OCR 导向的视觉问答。"
description_en: "Xiaomi open-sources Xiaomi-OCR-0, an 800-million-parameter model for document parsing, key information extraction, and OCR-oriented visual question answering."
resource: https://x.com/0xLogicrw/status/2116351187226329301
tags: [xiaomi, ocr, open-source, document-understanding, small-model]
sources:
  - id: 9f51ee9086d00675
    resource: https://x.com/0xLogicrw/status/2116351187226329301
    title: "Xiaomi Open-Sources Xiaomi-OCR-0 Document Understanding Model"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-10-31T20:41:50+08:00
---

# 小米开源 Xiaomi-OCR-0 文档理解模型

*Xiaomi Open-Sources Xiaomi-OCR-0 Document Understanding Model*

帖文称，小米开源了仅 8 亿参数的 Xiaomi-OCR-0，可将文档中的文字、复杂表格和数学公式转为可编辑内容，从发票、收据和证件中提取字段并输出 JSON，还能基于文档和图表回答问题。该模型在阿里 Qwen3.5-0.8B 基础上继续训练，使用约 1.7 亿条 OCR 与文档理解样本，并开源了模型权重、推理代码、MCP 服务和 Agent Skill。[^9f51ee9086d00675]

The post says Xiaomi has open-sourced Xiaomi-OCR-0, an 800-million-parameter model that converts document text, complex tables, and math formulas into editable content, extracts fields from invoices, receipts, and IDs into JSON, and answers questions based on documents and charts. It is further trained on Alibaba's Qwen3.5-0.8B using about 170 million OCR and document understanding samples, with model weights, inference code, MCP service, and Agent Skill open-sourced.[^9f51ee9086d00675]

## 摘要 / Summary

- Xiaomi-OCR-0 只有 8 亿参数，基于阿里 Qwen3.5-0.8B 继续训练。[^9f51ee9086d00675]
- Xiaomi-OCR-0 has only 800 million parameters and is further trained on Alibaba's Qwen3.5-0.8B.[^9f51ee9086d00675]
- 模型使用约 1.7 亿条 OCR 与文档理解样本训练，并通过多个 OCR 模型交叉核对提升数据质量。[^9f51ee9086d00675]
- The model is trained on about 170 million OCR and document understanding samples, with data quality improved via cross-checking among multiple OCR models.[^9f51ee9086d00675]
- 在五项 OCR 视觉问答测试中平均得分 83.2，超过参数量为其 2.5 倍的 Qwen3.5-2B（80.9），接近 4B 模型的 84.9。[^9f51ee9086d00675]
- It averages 83.2 on five OCR visual question answering tests, surpassing Qwen3.5-2B (80.9) with 2.5 times the parameters, and approaching the 4B model's 84.9.[^9f51ee9086d00675]
- 在 Real5 文档解析测试中，搭配外部版面检测器取得 95.24 分。[^9f51ee9086d00675]
- On the Real5 document parsing test, it scored 95.24 with an external layout detector.[^9f51ee9086d00675]
- 模型权重、推理代码、MCP 服务和 Agent Skill 均已开源，可接入 AI Agent 处理截图、PDF 和票据。[^9f51ee9086d00675]
- Model weights, inference code, MCP service, and Agent Skill are all open-sourced, allowing integration into AI Agents to process screenshots, PDFs, and receipts.[^9f51ee9086d00675]

## 相关 / Related

- 原文：[链接](https://x.com/0xLogicrw/status/2116351187226329301)。 / Original: [link](https://x.com/0xLogicrw/status/2116351187226329301).
- Topic: [本地开放助手与机器人小模型 / Local open models for assistants and robots](../../topics/local-open-assistant-models.md)
- Topic: [开放权重前沿模型 / Open-weight frontier models](../../topics/open-weight-frontier-models.md)
- Topic: [Agent Skill 编写 / Agent skill authoring](../../topics/agent-skill-authoring.md)
- Topic: [工具产品自建模型抢话语权 / Tool products building own models for discourse power](../../topics/tools-building-own-models.md)

[^9f51ee9086d00675]: Xiaomi Open-Sources Xiaomi-OCR-0 Document Understanding Model
