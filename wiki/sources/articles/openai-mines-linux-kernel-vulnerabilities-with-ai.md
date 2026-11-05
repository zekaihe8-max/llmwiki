---
type: Source
title: "OpenAI 挖 Linux 内核漏洞"
title_en: "OpenAI Mines Linux Kernel Vulnerabilities with AI"
description: "OpenAI 利用未发布模型自动发现 Linux 内核提权漏洞、编写攻击程序并生成补丁，单次实验验证 948 个漏洞，API 费用约 121 万美元。"
description_en: "OpenAI used an unreleased model to automatically discover Linux kernel privilege-escalation vulnerabilities, write exploits, and generate patches, validating 948 vulnerabilities in one run at about $1.21 million in API costs."
resource: https://x.com/0xLogicrw/status/2118300122375499922
tags: [openai, ai, linux, kernel, cybersecurity, agents, vulnerability-research]
sources:
  - id: openai-linux-kernel-vulnerabilities
    resource: https://x.com/0xLogicrw/status/2118300122375499922
    title: "OpenAI Mines Linux Kernel Vulnerabilities with AI"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-05T20:12:15+08:00
---

# OpenAI 挖 Linux 内核漏洞

*OpenAI Mines Linux Kernel Vulnerabilities with AI*

「帖文称」OpenAI 利用尚未发布的新模型，让 AI 从超 4000 万行 Linux 内核代码中筛选约 280 万行重点区间，自动寻找漏洞、编写攻击程序并生成修复补丁；一次实验验证 948 个不同的本地提权漏洞，API 总费用约 121 万美元，平均每个漏洞约 1279 美元。研究人员抽查发现 AI 至少发明了 10 种此前未见的漏洞利用技术，并经外部内核安全专家核实属实。[^openai-linux-kernel-vulnerabilities]

The post claims OpenAI used an unreleased model to scan over 40 million lines of Linux kernel code, narrowing to about 2.8 million lines for focused review, then automatically finding vulnerabilities, writing exploits, and generating patches; one run validated 948 distinct local privilege-escalation vulnerabilities at roughly $1.21 million in total API cost, about $1,279 per vulnerability. Researchers found AI had invented at least 10 previously unseen exploit techniques, confirmed by external kernel security experts.[^openai-linux-kernel-vulnerabilities]

## 摘要 / Summary

- 单次实验验证 948 个 Linux 内核本地提权漏洞，API 总费用约 121 万美元，平均每个漏洞约 1279 美元。 / One run validated 948 Linux kernel local privilege-escalation vulnerabilities, with total API cost about $1.21 million and roughly $1,279 per vulnerability.[^openai-linux-kernel-vulnerabilities]
- AI 从超 4000 万行代码中筛选约 280 万行重点检查，得出 2308 个疑似漏洞，在虚拟机中复现 1724 个，编写 1169 个提权攻击程序，去重后对应 948 个。 / AI screened about 2.8 million lines from over 40 million lines of code, yielding 2308 suspected vulnerabilities, reproducing 1724 in virtual machines and writing 1169 privilege-escalation exploits, corresponding to 948 after deduplication.[^openai-linux-kernel-vulnerabilities]
- 抽查 166 个攻击程序发现至少 10 种此前未见的漏洞利用技术，外部内核安全专家认为这些方法很新颖。 / Sampling 166 exploits revealed at least 10 previously unseen exploit techniques, which external kernel security experts considered novel.[^openai-linux-kernel-vulnerabilities]
- 7 月 GPT-5.6 Sol 在同一项目中挖出 166 个可利用提权漏洞，花费约 51 万美元；10 月新模型找到 948 个，数量约为前者 5.7 倍，单个漏洞 API 成本从约 3095 美元降至 1279 美元。 / In July, GPT-5.6 Sol found 166 exploitable privilege-escalation vulnerabilities in the same project at about $510,000; the October model found 948, about 5.7 times as many, with per-vulnerability API cost falling from roughly $3,095 to $1,279.[^openai-linux-kernel-vulnerabilities]
- OpenAI 还花约 3.3 万美元 API 费用，在 Google 强化版 Linux 安全测试环境中开发出 21 个可用提权攻击程序，按公开悬赏标准估算理论奖金约 150 万美元，是 API 成本 45 倍。 / OpenAI also spent about $33,000 in API fees to develop 21 usable privilege-escalation exploits in Google's hardened Linux security test environment; estimated bounties total about $1.5 million, 45 times the API cost.[^openai-linux-kernel-vulnerabilities]

## 相关 / Related

- 原文：[链接](https://x.com/0xLogicrw/status/2118300122375499922)。 / Original: [link](https://x.com/0xLogicrw/status/2118300122375499922).
- Topic: [网络能力测评越权事件的对齐评估 / Alignment assessment after cyber-eval incidents](../../topics/cyber-eval-incident-alignment.md)
- Topic: [网安研究选型：少破甲的模型与 Harness / Cyber-research model picks that need little jailbreaking](../../topics/cyber-research-models-without-jailbreak.md)
- Topic: [智能体自动模式 / Agent auto mode](../../topics/agent-auto-mode.md)
- Topic: [技术滥用关切的连续性 / Continuity of technology-misuse concern](../../topics/tech-misuse-concern-continuity.md)

[^openai-linux-kernel-vulnerabilities]: OpenAI Mines Linux Kernel Vulnerabilities with AI
