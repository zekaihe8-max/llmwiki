---
type: Source
title: "OpenAI 内部工程模型"
title_en: "OpenAI Internal Engineering Model"
description: "OpenAI 曝光未发布内部模型，在 BenchCAD 2.0 工程设计评测中显著超越 GPT-6 Astra。"
description_en: "OpenAI exposed an unreleased internal model that significantly outperforms GPT-6 Astra on the BenchCAD 2.0 engineering design benchmark."
resource: https://x.com/0xLogicrw/status/2117925988764168428
tags: [openai, engineering-model, benchcad, cad, ai-eval]
sources:
  - id: openai-internal-engineering-model
    resource: https://x.com/0xLogicrw/status/2117925988764168428
    title: "OpenAI Internal Engineering Model"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-04T20:10:53+08:00
---

# OpenAI 内部工程模型

*OpenAI Internal Engineering Model*

「帖文称」OpenAI 曝光了一款尚未发布的内部模型，在 BenchCAD 2.0 工程设计评测中平均得分 0.875，明显超过 GPT-6 Astra 最高推理档的 0.594，相对提升约 47%；模型名称和发布时间尚未公布。[^openai-internal-engineering-model]

The post claims OpenAI exposed an unreleased internal model averaging 0.875 on BenchCAD 2.0 engineering design evaluation, significantly exceeding GPT-6 Astra's highest reasoning tier at 0.594, a relative improvement of about 47%; the model name and release time remain unannounced.[^openai-internal-engineering-model]

## 摘要 / Summary

- BenchCAD 2.0 主要考验 AI 能否根据图纸还原 3D 零件、组装机械结构，以及识别电路连接。 / BenchCAD 2.0 mainly tests whether AI can restore 3D parts from drawings, assemble mechanical structures, and identify circuit connections.[^openai-internal-engineering-model]
- 帖文称 Astra 此前在公开评测中排名第一，但曾把电路板上的 3.3V、5V 和地线识别成同一网络，实际电路设计中可能导致硬件故障。 / The post claims Astra previously ranked first in public evaluations but once identified 3.3V, 5V, and ground on a circuit board as the same network, which could cause hardware faults in actual circuit design.[^openai-internal-engineering-model]
- OpenAI 展示了 Astra 的造机实验：两名员工用不到一周设计出能通过语音与 Codex 交互的实体设备，完成外壳、内部结构、电路板和软件设计。 / OpenAI demonstrated Astra's machine-building experiment: two employees designed a physical device able to interact with Codex via voice in under a week, completing shell, internal structure, circuit board, and software design.[^openai-internal-engineering-model]
- 真正生产时仍需多轮人工审核和调整，代工厂花了将近一个月才做出首批样机。 / Actual production still requires multiple rounds of human review and adjustment, and the contract manufacturer took nearly a month to produce the first batch of samples.[^openai-internal-engineering-model]
- OpenAI 与 Chip Ganassi Racing 合作，将零件 3D 扫描转换为可编辑 CAD 模型和制造图纸；并与马自达合作，通过调整车头造型和模拟气流探索降低风阻。 / OpenAI is collaborating with Chip Ganassi Racing to convert 3D scans of parts into editable CAD models and manufacturing drawings, and with Mazda to adjust car front styling and simulate airflow to explore drag reduction.[^openai-internal-engineering-model]

## 相关 / Related

- 原文：[链接](https://x.com/0xLogicrw/status/2117925988764168428)。 / Original: [link](https://x.com/0xLogicrw/status/2117925988764168428).
- Topic: [AI 评测入口与干活记录 / AI-eval gateways and work-record streams](../../topics/ai-eval-work-record-gateway.md)
- Topic: [仿真就绪开放三维资产 / Simulation-ready open 3D assets](../../topics/simulation-ready-open-3d-assets.md)
- Topic: [信任公开榜前先审质量 / Scrutinize public-benchmark quality before trusting](../../topics/public-benchmark-quality-scrutiny.md)
- Topic: [设计↔代码与自带 Claude/Codex 订阅 / Design-to-code tools with bring-your-own Claude/Codex subscriptions](../../topics/design-to-code-byo-subscriptions.md)

[^openai-internal-engineering-model]: OpenAI Internal Engineering Model
