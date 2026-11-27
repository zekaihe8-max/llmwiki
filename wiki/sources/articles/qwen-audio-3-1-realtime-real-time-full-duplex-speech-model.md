---
type: Source
title: "Qwen-Audio-3.1-Realtime 实时全双工语音模型"
title_en: "Qwen-Audio-3.1-Realtime Real-Time Full-Duplex Speech Model"
description: "阿里云通义千问推出的支持文音输入输出、全双工实时对话的多模态语音模型。"
description_en: "Alibaba Cloud Qwen's multimodal speech model supporting text-audio input/output and real-time full-duplex conversation."
resource: https://www.qwencloud.com/models/qwen-audio-3.1-realtime-flash
tags: [qwen, audio, realtime, speech, full-duplex, api]
sources:
  - id: 551ac919f5b49bc4
    resource: https://www.qwencloud.com/models/qwen-audio-3.1-realtime-flash
    title: "Qwen-Audio-3.1-Realtime Real-Time Full-Duplex Speech Model"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-27T08:29:53+08:00
---

# Qwen-Audio-3.1-Realtime 实时全双工语音模型

*Qwen-Audio-3.1-Realtime Real-Time Full-Duplex Speech Model*

「帖文称」Qwen-Audio-3.1-Realtime 是一款下一代实时全双工语音模型，具备增强的口语推理、多轮指令遵循、共情沟通与角色扮演能力，支持多语言对话与智能工具调用，可用于客服、职场协作及语音陪伴等场景。[^551ac919f5b49bc4]

The post claims Qwen-Audio-3.1-Realtime is a next-generation real-time full-duplex speech model with enhanced spoken-language reasoning, multi-turn instruction following, empathetic communication, and role-playing capabilities, supporting multilingual conversations and intelligent tool use for customer service, workplace collaboration, and voice companionship.[^551ac919f5b49bc4]

## 摘要 / Summary

- 输入模态为文本与音频，输出模态同样为文本与音频。[^551ac919f5b49bc4]
- Input modalities are text and audio; output modalities are text and audio.[^551ac919f5b49bc4]
- 定价方面，输入音频 0.93 美元/百万 token，输入文本 0.23 美元/百万 token，输出文本 0.7 美元/百万 token，输出文本与音频 1.87 美元/百万 token。[^551ac919f5b49bc4]
- Pricing: input audio $0.93 per 1M tokens, input text $0.23 per 1M tokens, output text $0.7 per 1M tokens, output text and audio $1.87 per 1M tokens.[^551ac919f5b49bc4]
- 限制为最大输入 240K token、最大输出 16K token、上下文 256K token，TPM 100,000，RPM 60。[^551ac919f5b49bc4]
- Limits: max input 240K tokens, max output 16K tokens, context 256K tokens, TPM 100,000, RPM 60.[^551ac919f5b49bc4]
- 提供前缀补全、函数调用、上下文缓存、结构化输出、批处理、网页搜索和微调等功能。[^551ac919f5b49bc4]
- Features include prefix completion, function calling, context cache, structured outputs, batches, web search, and fine-tuning.[^551ac919f5b49bc4]
- 示例代码使用 WebSocket 连接 wss://ap-southeast-1.maas.qwencloudapi.com/api-ws/v1/realtime?model=qwen-audio-3.1-realtime-flash，并配置服务端 VAD 阈值 0.5、静默时长 500 毫秒。[^551ac919f5b49bc4]
- Example code connects via WebSocket to wss://ap-southeast-1.maas.qwencloudapi.com/api-ws/v1/realtime?model=qwen-audio-3.1-realtime-flash with server VAD threshold 0.5 and silence duration 500 ms.[^551ac919f5b49bc4]

## 相关 / Related

- 原文：[链接](https://www.qwencloud.com/models/qwen-audio-3.1-realtime-flash)。 / Original: [link](https://www.qwencloud.com/models/qwen-audio-3.1-realtime-flash).
- Topic: [纯语音全双工与情绪可听 / Pure-speech full-duplex and audible emotion](../../topics/pure-speech-full-duplex.md)
- Topic: [语音输入的口头转述与文书整理 / Oral transcript vs document polish in voice input](../../topics/voice-input-oral-vs-document-for-agents.md)
- Topic: [近实时决策 API / Near real-time decisions API](../../topics/near-real-time-decisions-api.md)

[^551ac919f5b49bc4]: Qwen-Audio-3.1-Realtime Real-Time Full-Duplex Speech Model
