---
type: Source
title: "Virtual-Flow：用少量真麦克风生成虚拟麦克风阵列，实现低延迟语音增强"
title_en: "Virtual-Flow: Virtual Microphone Array Speech Enhancement with Few Real Microphones"
description: "Meta 与 KAIST 的 Virtual-Flow 用 4 个真麦克风通过流匹配生成 12 个虚拟麦克风信号，在 16 毫秒延迟下逼近 16 麦克风阵列的降噪效果。"
description_en: "Meta and KAIST's Virtual-Flow uses 4 real microphones with flow matching to generate 12 virtual microphone signals, approaching 16-microphone array noise reduction at 16 ms latency."
resource: https://x.com/Gorden_Sun/status/2122587251016442041
tags: [speech-enhancement, virtual-microphone, ai-audio, flow-matching]
sources:
  - id: virtual-flow-virtual-microphone-speech-enhanceme
    resource: https://x.com/Gorden_Sun/status/2122587251016442041
    title: "Virtual-Flow: Virtual Microphone Array Speech Enhancement with Few Real Microphones"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-17T20:10:30+08:00
---

# Virtual-Flow：用少量真麦克风生成虚拟麦克风阵列，实现低延迟语音增强

*Virtual-Flow: Virtual Microphone Array Speech Enhancement with Few Real Microphones*

帖文称，Meta Reality Labs 与韩国科学技术院联合研发 Virtual-Flow，基于流匹配生成技术，从 4 个真实麦克风录音直接生成 12 个虚拟麦克风音频信号，并通过 Reflow 蒸馏将生成压缩为单步计算。该方法声称在仅有 4 个物理麦克风的穿戴设备上，收音与降噪表现可接近 16 个真实麦克风的大型阵列，且在多干扰人声与背景杂音环境中能提取前方说话者声音，延迟低至 16 毫秒，适配蓝牙耳机、AR 眼镜和助听器。[^virtual-flow-virtual-microphone-speech-enhanceme]

The post says Meta Reality Labs and KAIST jointly developed Virtual-Flow, based on flow matching generation technology, directly generating 12 virtual microphone audio signals from 4 real microphone recordings, and compressing generation to single-step computation via Reflow distillation. The method claims that on wearable devices with only 4 physical microphones, recording and noise reduction performance can approach a large array of 16 real microphones, extract the front speaker's voice in environments with multiple interfering voices and background noise, with latency as low as 16 ms, suitable for Bluetooth headsets, AR glasses, and hearing aids.[^virtual-flow-virtual-microphone-speech-enhanceme]

## 摘要 / Summary

- 帖文称 Virtual-Flow 由 Meta Reality Labs 与韩国科学技术院研发，基于流匹配生成技术，用 4 个真实麦克风录音生成 12 个虚拟麦克风信号。[^virtual-flow-virtual-microphone-speech-enhanceme]
- The post says Virtual-Flow was developed by Meta Reality Labs and KAIST, based on flow matching generation technology, using 4 real microphone recordings to generate 12 virtual microphone signals.[^virtual-flow-virtual-microphone-speech-enhanceme]
- 团队用真实录音的时间延迟叠加构造训练目标，并结合 Reflow 蒸馏把音频生成压缩到单步计算。[^virtual-flow-virtual-microphone-speech-enhanceme]
- The team constructed training targets from time-delay superposition of real recordings and combined Reflow distillation to compress audio generation into single-step computation.[^virtual-flow-virtual-microphone-speech-enhanceme]
- 仅 4 个真实麦克风的设备，实际收音和降噪表现能接近装有 16 个真实麦克风的大型阵列，可在多干扰人声和背景杂音房间中提取前方说话者声音。[^virtual-flow-virtual-microphone-speech-enhanceme]
- Devices with only 4 real microphones can achieve recording and noise reduction performance close to a large array with 16 real microphones, extracting the front speaker's voice in rooms with multiple interfering voices and background noise.[^virtual-flow-virtual-microphone-speech-enhanceme]
- 方案计算开销远低于同类生成式语音模型，适配 2 到 3 个麦克风的眼镜或耳机，在 16 毫秒超低延迟下满足实时通话需求。[^virtual-flow-virtual-microphone-speech-enhanceme]
- The solution has much lower computational overhead than comparable generative speech models, adapts to glasses or headsets with 2 to 3 microphones, and meets real-time call needs at 16 ms ultra-low latency.[^virtual-flow-virtual-microphone-speech-enhanceme]
- 帖文附 arxiv 论文链接，标题涉及“基于虚拟麦克风的语音增强”（Virtual Microphone-based Speech Enhancement）。[^virtual-flow-virtual-microphone-speech-enhanceme]
- The post attaches an arxiv paper link titled Virtual Microphone-based Speech Enhancement.[^virtual-flow-virtual-microphone-speech-enhanceme]

## 相关 / Related

- 原文：[链接](https://x.com/Gorden_Sun/status/2122587251016442041)。 / Original: [link](https://x.com/Gorden_Sun/status/2122587251016442041).
- Topic: [纯语音全双工与情绪可听 / Pure-speech full-duplex and audible emotion](../../topics/pure-speech-full-duplex.md)
- Topic: [语音输入的口头转述与文书整理 / Oral transcript vs document polish in voice input](../../topics/voice-input-oral-vs-document-for-agents.md)
- Topic: [消费级 GPU AI 算力解锁 / Consumer GPU AI compute unlock](../../topics/gpu-ai-compute-unlock.md)
- Topic: [AI 媒体内容回灌训练语料 / AI media content looping into training corpora](../../topics/ai-media-training-corpus-loop.md)

[^virtual-flow-virtual-microphone-speech-enhanceme]: Virtual-Flow: Virtual Microphone Array Speech Enhancement with Few Real Microphones
