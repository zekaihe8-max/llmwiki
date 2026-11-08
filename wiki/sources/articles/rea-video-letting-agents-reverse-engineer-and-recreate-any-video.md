---
type: Source
title: "rea-video：让 Agent 逆向拆解与复刻任意视频"
title_en: "rea-video: Letting Agents Reverse-Engineer and Recreate Any Video"
description: "开源项目 rea-video 结合本地规则、多模态模型与 Agent 复核，实现对任意视频的逆向拆解与复刻。"
description_en: "Open-source project rea-video combines local rules, multimodal models and Agent review to reverse-engineer and recreate any video."
resource: https://x.com/shao__meng/status/2119311344260583683
tags: [agents, video-editing, open-source, reverse-engineering]
sources:
  - id: rea-video-agent-reverse-video
    resource: https://x.com/shao__meng/status/2119311344260583683
    title: "rea-video: Letting Agents Reverse-Engineer and Recreate Any Video"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-08T20:08:02+08:00
---

# rea-video：让 Agent 逆向拆解与复刻任意视频

*rea-video: Letting Agents Reverse-Engineer and Recreate Any Video*

帖文称，开源分享项目 rea-video 可让 Agent 逆向、拆解和复刻任意视频，作者为 @yao_june12106。其流程分三步：先用本地工具逐帧检测颜色、像素、亮度变化，识别切镜头并分析运动、噪声、重复帧、文字和音频，此阶段不消耗大模型 token；再由多模态模型按镜头解释，发送低分辨率片段、首尾帧和中间帧拼图及本地特征摘要，输出画面描述、制作方式及复刻提示词，并单独分析带音频的整片；最后由 Claude 或 Codex 复核分类、补充依据并生成报告，最终结论来自“本地测量＋模型分析＋Agent 复核”，而不直接恢复原始工程。[^rea-video-agent-reverse-video]

The post says open-source project rea-video by @yao_june12106 lets Agents reverse, disassemble and recreate any video. It works in three steps: local tools first detect frame-by-frame color, pixel and brightness changes, identify shot cuts and analyze motion, noise, repeated frames, text and audio without consuming LLM tokens; a multimodal model then interprets by shot using low-resolution clips, first/last and middle-frame collages plus local feature summaries to output descriptions, production methods and replication prompts, with a separate whole-video audio analysis; finally Claude or Codex reviews classification and evidence and generates a report, with the final conclusion coming from “local measurement + model analysis + Agent review” rather than directly restoring the original project.[^rea-video-agent-reverse-video]

## 摘要 / Summary

- rea-video 是开源分享项目，作者 @yao_june12106，旨在让 Agent 逆向、拆解和复刻任意视频。 / rea-video is an open-source sharing project by @yao_june12106 that lets Agents reverse, disassemble and recreate any video.[^rea-video-agent-reverse-video]
- 第一步使用本地工具逐帧检测颜色、像素、亮度变化，识别切镜头，并分析运动、噪声、重复帧、文字和音频，不消耗大模型 token。 / The first step uses local tools to detect frame-by-frame color, pixel and brightness changes, identify shot cuts, and analyze motion, noise, repeated frames, text and audio, without consuming LLM tokens.[^rea-video-agent-reverse-video]
- 第二步让多模态模型按镜头解释，发送低分辨率片段、首尾帧和中间帧拼图及本地特征摘要，输出画面描述、制作方式及复刻提示词，并单独分析带音频的整片。 / The second step asks a multimodal model to interpret by shot, sending low-resolution clips, first/last and middle-frame collages plus local feature summaries to output descriptions, production methods and replication prompts, with a separate whole-video audio analysis.[^rea-video-agent-reverse-video]
- 第三步由 Claude 或 Codex 复核分类与依据并生成报告，最终结论来自“本地测量＋模型分析＋Agent 复核”，不直接恢复原始工程。 / The third step has Claude or Codex review classification and evidence and generate a report; the final conclusion comes from “local measurement + model analysis + Agent review” rather than directly restoring the original project.[^rea-video-agent-reverse-video]

## 相关 / Related

- 原文：[链接](https://x.com/shao__meng/status/2119311344260583683)。 / Original: [link](https://x.com/shao__meng/status/2119311344260583683).
- Topic: [智能体视频剪辑 / Agentic video editing](../../topics/agentic-video-editing.md)
- Topic: [AI 辅助剪藏与媒体笔记 / AI-assisted clipping and media notes](../../topics/ai-assisted-clipping-and-notes.md)
- Topic: [编程 Agent 省 Token 工具与开销 / Coding-agent token-saving tooling and overhead](../../topics/coding-agent-token-saving-tooling.md)
- Topic: [Agent 上下文工程 / Context engineering for agents](../../topics/context-engineering-for-agents.md)

[^rea-video-agent-reverse-video]: rea-video: Letting Agents Reverse-Engineer and Recreate Any Video
