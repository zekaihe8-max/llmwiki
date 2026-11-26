---
type: Source
title: "Cognition 发布 SWE-2.1 编程与网安模型"
title_en: "Cognition Introduces SWE-2.1 Coding and Cybersecurity Model"
description: "Cognition 基于 Kimi K3 用纯强化学习训练 SWE-2.1，在代码与网安基准上大幅领先前代，并推出防御者版与超快推理版。"
description_en: "Cognition trains SWE-2.1 on Kimi K3 with pure reinforcement learning, achieving large gains over SWE-2 on coding and cybersecurity benchmarks, and releases defender and ultrafast variants."
resource: https://cognition.com/blog/swe-2-1
tags: [cognition, swe-2-1, reinforcement-learning, coding-agent, cybersecurity]
sources:
  - id: cognition-swe-2-1
    resource: https://cognition.com/blog/swe-2-1
    title: "Cognition Introduces SWE-2.1 Coding and Cybersecurity Model"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-26T09:26:11+08:00
---

# Cognition 发布 SWE-2.1 编程与网安模型

*Cognition Introduces SWE-2.1 Coding and Cybersecurity Model*

「帖文称」Cognition 发布 SWE-2.1，该模型在 Kimi K3 上经纯强化学习训练，相较 SWE-2 在 FrontierCode 2.0、Terminal-Bench 4.1 及 ExploitGym 等基准上取得显著提升，尤其在网络安全漏洞发现与利用方面表现突出；文中还介绍了沙箱红队、安全监控与 SWE-2.1 Cyber 等防护措施，以及与 Cerebras 合作的 10 倍速 SWE-2.1 Ultrafast。[^cognition-swe-2-1]

Cognition announces SWE-2.1, a pure reinforcement-learning upgrade over SWE-2 trained on Kimi K3, with large gains across FrontierCode 2.0, Terminal-Bench 4.1, and cybersecurity benchmarks such as ExploitBench and ExploitGym; the post also describes sandbox red-teaming, safety monitoring, defender-focused SWE-2.1 Cyber, and a 10× faster Ultrafast variant via Cerebras.[^cognition-swe-2-1]

## 摘要 / Summary

- SWE-2.1 在 FrontierCode 2.0 得分 41.3，高于 SWE-2 的 24.1 与 Kimi K3.1 的 19.9。[^cognition-swe-2-1]
- SWE-2.1 scores 41.3 on FrontierCode 2.0, above SWE-2 at 24.1 and Kimi K3.1 at 19.9.[^cognition-swe-2-1]
- 官方自测显示，在 Terminal-Bench 4.1 上，SWE-2.1 得分 50.0，SWE-2 为 24.2，Kimi K3.1 为 59.7。[^cognition-swe-2-1]
- On Terminal-Bench 4.1, SWE-2.1 scores 50.0, SWE-2 24.2, and Kimi K3.1 59.7.[^cognition-swe-2-1]
- SWE-2.1 在 ExploitBench 达到 80.0%，在 ExploitGym 旗帜捕获率为 27.3%。[^cognition-swe-2-1]
- SWE-2.1 reaches 80.0% on ExploitBench and a 27.3% flag capture rate on ExploitGym.[^cognition-swe-2-1]
- 训练中通过沙箱红队与连续安全监控，金丝雀评测四次发现沙箱新漏洞并及时告知研究人员。[^cognition-swe-2-1]
- Training used sandbox red-teaming and continuous safety monitoring, with the canary eval detecting new sandbox vulnerabilities four times and alerting researchers each time.[^cognition-swe-2-1]
- SWE-2.1 Cyber 为防御者提供更宽松的防护，并将接入 Devin Security 的扫描。[^cognition-swe-2-1]
- SWE-2.1 Cyber offers more permissive safeguards for defenders and will power scans in Devin Security.[^cognition-swe-2-1]
- SWE-2.1 Ultrafast 通过 Cerebras 合作实现 10 倍推理速度，生成速度可达 600 tok/s，而 SWE-2.1 为 60 tok/s。[^cognition-swe-2-1]
- SWE-2.1 Ultrafast, via a Cerebras partnership, provides 10× inference speed at up to 600 tok/s versus 60 tok/s for SWE-2.1.[^cognition-swe-2-1]

## 相关 / Related

- 原文：[链接](https://cognition.com/blog/swe-2-1)。 / Original: [link](https://cognition.com/blog/swe-2-1).
- Topic: [前沿训练环境隔离 / Frontier training containment](../../topics/frontier-training-containment.md)
- Topic: [网络能力测评越权事件的对齐评估 / Alignment assessment after cyber-eval incidents](../../topics/cyber-eval-incident-alignment.md)
- Topic: [AI 任务时界增长 / AI task horizon growth](../../topics/ai-task-horizon-growth.md)
- Topic: [网防 Agent Swarm 品类 / Agent swarms for cyber defense](../../topics/agent-swarms-cyber-defense.md)

[^cognition-swe-2-1]: Cognition Introduces SWE-2.1 Coding and Cybersecurity Model
