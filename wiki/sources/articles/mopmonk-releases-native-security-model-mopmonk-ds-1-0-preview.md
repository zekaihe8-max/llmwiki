---
type: Source
title: "扫地僧 MopMonk 发布原生安全模型 MopMonk-DS-1.0-Preview"
title_en: "MopMonk Releases Native Security Model MopMonk-DS-1.0-Preview"
description: "帖文称扫地僧 MopMonk 基于 DeepSeek V4.1 Flash 做深度后训练，在 ExploitGym 上将通过率从 15.3% 提升至 24.2%。"
description_en: "The post claims MopMonk's natively post-trained security model based on DeepSeek V4.1 Flash raises ExploitGym pass rate from 15.3% to 24.2%."
resource: https://x.com/lxfater/status/2126606469437215115
tags: [mopmonk, deepseek, exploitgym, native-security-model, ai-security]
sources:
  - id: d801f84ae2604beb
    resource: https://x.com/lxfater/status/2126606469437215115
    title: "MopMonk Releases Native Security Model MopMonk-DS-1.0-Preview"
generated:
  by: openrouter/baidu/ernie-5.5-flash-preview:free
  at: 2026-11-28T20:16:27+08:00
---

# 扫地僧 MopMonk 发布原生安全模型 MopMonk-DS-1.0-Preview

*MopMonk Releases Native Security Model MopMonk-DS-1.0-Preview*

「帖文称」扫地僧 MopMonk 发布了原生安全模型 MopMonk-DS-1.0-Preview，模型基于 DeepSeek V4.1 Flash 做深度后训练，在 869 个真实漏洞的 ExploitGym 榜单上，全程无人工干预，将通过率从 15.3% 提升到 24.2%，相对提升 58%，并在 869 道题中拿下 211 分，使国产安全模型进入 200+ 分段。文中还介绍了通过持续预训练、隔离环境试错微调和长对话历史压缩三步，将攻防实战能力内化到模型权重的做法。[^d801f84ae2604beb]

The post claims MopMonk released native security model MopMonk-DS-1.0-Preview, deeply post-trained on DeepSeek V4.1 Flash. On ExploitGym's 869 real vulnerabilities with no human intervention, pass rate rose from 15.3% to 24.2% (58% relative increase), scoring 211 on 869 questions and pushing domestic security models into the 200+ bracket. The article also describes internalizing offensive/defensive capabilities into model weights via continued pre-training, isolated-environment trial-and-error fine-tuning, and long-conversation history compression.[^d801f84ae2604beb]

## 摘要 / Summary

- 帖文称 MopMonk-DS-1.0-Preview 基于 DeepSeek V4.1 Flash 进行深度后训练，在 869 个真实漏洞的 ExploitGym 榜单上，无人工干预下将通过率从 15.3% 提升至 24.2%，相对提升 58%。[^d801f84ae2604beb]
- The post claims MopMonk-DS-1.0-Preview was deeply post-trained on DeepSeek V4.1 Flash, raising pass rate on ExploitGym's 869 real vulnerabilities from 15.3% to 24.2% without human intervention, a 58% relative increase.[^d801f84ae2604beb]
- 该模型在 869 道题中拿下 211 分，使国产安全模型进入 200+ 分段，而顶级通用旗舰模型在该套题上的表现低于 36%。[^d801f84ae2604beb]
- The model scored 211 on 869 questions, pushing domestic security models into the 200+ bracket, while top general flagship models score below 36% on the same set.[^d801f84ae2604beb]
- 训练分三步：240B+ 混合语料持续预训练、结构化指导下的隔离环境试错微调、以及长对话历史压缩与漏洞利用关键状态内化。[^d801f84ae2604beb]
- Training involves three steps: continued pre-training on 240B+ mixed tokens, structured-guidance trial-and-error fine-tuning in isolated environments, and internalizing long-conversation history compression and exploit-critical state.[^d801f84ae2604beb]
- 团队认为以前依赖外部 Agent Harness 在漏洞利用阶段不够灵活，因此将实战能力直接练进模型权重，而非仅做外部流程封装。[^d801f84ae2604beb]
- The team argues external Agent Harness is insufficiently flexible for exploitation, so they baked practical capabilities directly into model weights rather than only wrapping external flows.[^d801f84ae2604beb]
- 技术报告和项目主页通过 github.com/MopMonkAI/MopM… 链接分享。[^d801f84ae2604beb]
- Technical report and project homepage are shared via github.com/MopMonkAI/MopM…[^d801f84ae2604beb]

## 相关 / Related

- 原文：[链接](https://x.com/lxfater/status/2126606469437215115)。 / Original: [link](https://x.com/lxfater/status/2126606469437215115).
- Topic: [网安研究选型：少破甲的模型与 Harness / Cyber-research model picks that need little jailbreaking](../../topics/cyber-research-models-without-jailbreak.md)
- Topic: [开源模型与网络防御 / Open models and cyber defense](../../topics/open-models-cyber-defense.md)
- Topic: [社区实测对抗刷分碰瓷 / Community evals vs score hype](../../topics/community-evals-vs-score-hype.md)

[^d801f84ae2604beb]: MopMonk Releases Native Security Model MopMonk-DS-1.0-Preview
