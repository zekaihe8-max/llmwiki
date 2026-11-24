---
type: Source
title: "OpenAI 与 Cisco 发布 Shirudo 开源 Linux 运行时"
title_en: "OpenAI and Cisco introduce Shirudo"
description: "OpenAI 与 Cisco 联合推出开源运行时 Shirudo，利用 eBPF 在无需重启的情况下为运行中的 Linux 系统提供临时安全防护。"
description_en: "OpenAI and Cisco launch open-source runtime Shirudo, using eBPF to provide temporary security protection for running Linux systems without restarting."
resource: https://openai.com/index/introducing-shirudo
tags: [openai, cisco, shirudo, ebpf, linux-security, open-source]
sources:
  - id: openai-cisco-introduce-shirudo
    resource: https://openai.com/index/introducing-shirudo
    title: "OpenAI and Cisco introduce Shirudo"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-24T08:21:55+08:00
---

# OpenAI 与 Cisco 发布 Shirudo 开源 Linux 运行时

*OpenAI and Cisco introduce Shirudo*

「帖文称」OpenAI 与 Cisco 于 2026 年 11 月 23 日联合推出 Shirudo，这是一个开源运行时，旨在帮助团队在滚动补丁期间保护运行中的 Linux 系统，无需等待补丁或重启。Shirudo 基于 eBPF 技术，可在不中断服务的情况下拦截易受攻击的代码路径，并通过加密签名、eBPF 验证器及 TPM 硬件背书实现可验证部署。[^openai-cisco-introduce-shirudo]

OpenAI and Cisco jointly introduced Shirudo on November 23, 2026, an open-source runtime designed to help teams protect running Linux systems while rolling out patches, without waiting for patches or restarts. Shirudo is based on eBPF technology and can intercept vulnerable code paths without interrupting services, achieving verifiable deployment through cryptographic signatures, the eBPF verifier, and TPM hardware attestation.[^openai-cisco-introduce-shirudo]

## 摘要 / Summary

- OpenAI 与 Cisco 联合推出 Shirudo，项目以 BSD 2-Clause 开源，BPF 程序同时采用 BSD 与 GPL 双重许可。[^openai-cisco-introduce-shirudo]
- OpenAI and Cisco jointly launched Shirudo, open-sourced under BSD 2-Clause, with BPF programs dual-licensed under BSD and GPL.[^openai-cisco-introduce-shirudo]
- Shirudo 基于 Linux eBPF，可在系统运行时观察可疑活动并应用针对性安全防护，无需重启服务。[^openai-cisco-introduce-shirudo]
- Shirudo is based on Linux eBPF, able to observe suspicious activity and apply targeted security protections while the system is running, without restarting services.[^openai-cisco-introduce-shirudo]
- 在受控测试中，由 OpenAI Codex 生成的防护盾拦截了针对运行中 Elasticsearch 服务的 Java4Shell 漏洞利用尝试，服务未中断。[^openai-cisco-introduce-shirudo]
- In a controlled test, a Codex-generated shield blocked a Java4Shell exploit attempt against a running Elasticsearch service without interrupting the service.[^openai-cisco-introduce-shirudo]
- 防护盾在加载前需经过加密签名验证，并由 Linux eBPF 验证器检查，TPM 用于记录防护加载或移除的可验证凭据。[^openai-cisco-introduce-shirudo]
- Shields must be cryptographically signed and verified before loading, checked by the Linux eBPF verifier, and TPM is used to record verifiable evidence of protection loading or removal.[^openai-cisco-introduce-shirudo]
- 项目提供 VM 快速入门、Isovalent 自助实验室及 12 月 15 日网络研讨会，欢迎开发者与安全研究人员贡献代码与新防护盾。[^openai-cisco-introduce-shirudo]
- The project offers a VM quickstart, Isovalent self-guided lab, and a December 15 webinar, welcoming developers and security researchers to contribute code and new shields.[^openai-cisco-introduce-shirudo]

## 相关 / Related

- 原文：[链接](https://openai.com/index/introducing-shirudo)。 / Original: [link](https://openai.com/index/introducing-shirudo).
- Topic: [开源模型与网络防御 / Open models and cyber defense](../../topics/open-models-cyber-defense.md)
- Topic: [账号与资产安全卫生 / Account and asset security hygiene](../../topics/account-and-asset-security-hygiene.md)
- Topic: [LLM 形式化验证 / LLM formal verification](../../topics/llm-formal-verification.md)

[^openai-cisco-introduce-shirudo]: OpenAI and Cisco introduce Shirudo
