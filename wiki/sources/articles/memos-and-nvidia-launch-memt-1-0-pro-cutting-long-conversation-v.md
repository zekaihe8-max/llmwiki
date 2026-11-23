---
type: Source
title: "MemOS 联合英伟达发布 MemT 1.0 Pro，长对话显存占用压至常数级"
title_en: "MemOS and NVIDIA launch MemT 1.0 Pro, cutting long-conversation VRAM usage to constant level"
description: "MemOS 与英伟达合作发布基于 Nemotron 3 Ultra 的记忆原生模型 MemT 1.0 Pro，帖文称 100 万 Token 对话仅占用 48 MiB 显存。"
description_en: "MemOS and NVIDIA launch memory-native model MemT 1.0 Pro based on Nemotron 3 Ultra; the post claims 1 million tokens of conversation uses only 48 MiB VRAM."
resource: https://x.com/servasyy_ai/status/2124821574931136919
tags: [memt, memos, nvidia, long-context, memory-native]
sources:
  - id: memt-1-0-pro-memos-nvidia
    resource: https://x.com/servasyy_ai/status/2124821574931136919
    title: "MemOS and NVIDIA launch MemT 1.0 Pro, cutting long-conversation VRAM usage to constant level"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-23T20:53:06+08:00
---

# MemOS 联合英伟达发布 MemT 1.0 Pro，长对话显存占用压至常数级

*MemOS and NVIDIA launch MemT 1.0 Pro, cutting long-conversation VRAM usage to constant level*

帖文称，MemOS 联合英伟达发布记忆原生模型 MemT 1.0 Pro，底层基于 NVIDIA Nemotron 3 Ultra，并使用 NVIDIA Megatron-Core 与 Megatron Bridge 进行分布式训练。该帖声称，在 100 万 Token 的长对话中，记忆占用的显存仅为 48 MiB，通过多轮对话动态压缩并逐层沉淀进模型内部记忆矩阵，将显存开销压至常数级，适合 Agent 和长记忆场景。[^memt-1-0-pro-memos-nvidia]

The post says MemOS has launched MemT 1.0 Pro, a memory-native model developed with NVIDIA and built on NVIDIA Nemotron 3 Ultra, with distributed training via NVIDIA Megatron-Core and Megatron Bridge. It claims that a 1 million-token conversation uses only 48 MiB of VRAM by dynamically compressing multi-turn dialogue and absorbing it into the model’s internal memory matrix, keeping memory overhead constant for agents and long-memory use cases.[^memt-1-0-pro-memos-nvidia]

## 摘要 / Summary

- 帖文称 MemOS 与 NVIDIA 合作发布 MemT 1.0 Pro，基于 NVIDIA Nemotron 3 Ultra。[^memt-1-0-pro-memos-nvidia]
- MemOS and NVIDIA released MemT 1.0 Pro, built on NVIDIA Nemotron 3 Ultra.[^memt-1-0-pro-memos-nvidia]
- 分布式训练使用 NVIDIA Megatron-Core 和 Megatron Bridge。[^memt-1-0-pro-memos-nvidia]
- Distributed training uses NVIDIA Megatron-Core and Megatron Bridge.[^memt-1-0-pro-memos-nvidia]
- 帖文称 100 万 Token 对话的记忆显存占用仅 48 MiB。[^memt-1-0-pro-memos-nvidia]
- The post claims memory VRAM usage for a 1 million-token conversation is only 48 MiB.[^memt-1-0-pro-memos-nvidia]
- 通过多轮对话动态压缩、逐层吸收，沉淀进模型内部记忆矩阵，显存开销为常数级。[^memt-1-0-pro-memos-nvidia]
- Multi-turn dialogue is dynamically compressed and absorbed layer by layer into the model’s internal memory matrix, keeping VRAM overhead constant.[^memt-1-0-pro-memos-nvidia]
- 该帖还提到，与 MemT-1.0-Flash 对比，MemT-1.0-Pro 为 554B 模型。[^memt-1-0-pro-memos-nvidia]
- Compared with MemT-1.0-Flash, MemT-1.0-Pro is a 554B model.[^memt-1-0-pro-memos-nvidia]

## 相关 / Related

- 原文：[链接](https://x.com/servasyy_ai/status/2124821574931136919)。 / Original: [link](https://x.com/servasyy_ai/status/2124821574931136919).
- Topic: [长对话默认压缩低于模型窗口 / Long-conversation default compression below model window](../../topics/long-conversation-default-compression.md)
- Topic: [Agent 上下文工程 / Context engineering for agents](../../topics/context-engineering-for-agents.md)
- Topic: [本地开放助手与机器人小模型 / Local open models for assistants and robots](../../topics/local-open-assistant-models.md)

[^memt-1-0-pro-memos-nvidia]: MemOS and NVIDIA launch MemT 1.0 Pro, cutting long-conversation VRAM usage to constant level
