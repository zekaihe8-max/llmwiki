---
type: Source
title: "Semgrep CEO 斯坦福客座讲座：Agent 时代让攻击变得更贵"
title_en: "Semgrep CEO Stanford Guest Lecture: Make Attacks More Expensive in the Agent Era"
description: "Semgrep 联合创始人兼 CEO Isaac Evans 在斯坦福 CS146S 讲座中主张，在 Agent 先写代码的时代，漏洞修不完就让攻击变得更贵，并提出建立“安全工厂”。"
description_en: "Semgrep co-founder and CEO Isaac Evans argues in a Stanford CS146S lecture that in an agent-first coding era, since vulnerabilities cannot all be fixed, attacks should be made more expensive, proposing a “security factory.”"
resource: https://x.com/shao__meng/status/2121629344758169995
tags: [semgrep, stanford, agent-security, software-factory, vibe-coding, cybersecurity]
sources:
  - id: semgrep-ceo-stanford-cs146s
    resource: https://x.com/shao__meng/status/2121629344758169995
    title: "Semgrep CEO Stanford Guest Lecture: Make Attacks More Expensive in the Agent Era"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-15T19:57:38+08:00
---

# Semgrep CEO 斯坦福客座讲座：Agent 时代让攻击变得更贵

*Semgrep CEO Stanford Guest Lecture: Make Attacks More Expensive in the Agent Era*

帖文称，Semgrep 联合创始人兼 CEO Isaac Evans 上周做客斯坦福 CS146S「The Modern Software Developer」，发表题为「Secure coding in an agent-first world」的客座讲座，主张在 AI Agent 先写代码的时代，漏洞利用成本正在下降，防守方不应试图修完所有漏洞，而应把安全做成工厂、先管住 Agent 再检查其代码，并把 AI 效率红利投入新代码预防。[^semgrep-ceo-stanford-cs146s]

The post says Semgrep co-founder and CEO Isaac Evans recently guest-lectured at Stanford CS146S “The Modern Software Developer” on “Secure coding in an agent-first world,” arguing that in an AI agent-first coding era, exploit costs are falling, defenders should not try to fix every vulnerability but instead make security a factory, control agents before inspecting their code, and invest AI efficiency gains in preventing issues in new code.[^semgrep-ceo-stanford-cs146s]

## 摘要 / Summary

- Evans 2013 年 MIT 本科毕业，2015 年获硕士，研究 RISC-V 漏洞硬件缓解，后在美国国防部和 MIT 林肯实验室工作，创办 Semgrep 的目标是让利用软件漏洞变得更贵。[^semgrep-ceo-stanford-cs146s]
- Evans graduated from MIT in 2013, earned a master's in 2015 researching RISC-V hardware vulnerability mitigation, later worked at the US DoD and MIT Lincoln Laboratory, and founded Semgrep with the goal of making software vulnerability exploitation more expensive.[^semgrep-ceo-stanford-cs146s]
- 讲义列出 2025 年 Android 漏洞利用最高赏金超过 1000 万美元，并称 Claude Opus 4.6 等大模型已擅长找漏洞、写利用代码，开源权重模型落后约五个月。[^semgrep-ceo-stanford-cs146s]
- Slides list 2025 Android exploit bounties above $10 million, and say models such as Claude Opus 4.6 are already good at finding vulnerabilities and writing exploits, with open-weight models about five months behind.[^semgrep-ceo-stanford-cs146s]
- Evans 把静态分析分为四代，第四代从 2026 年开始是大模型加程序分析、面向 Agent，并不认同雇 Agent 全找漏洞，主张建“安全工厂”把业务风险变成安全能力。[^semgrep-ceo-stanford-cs146s]
- Evans divides static analysis into four generations, with the fourth starting in 2026 as LLMs plus program analysis for agents; he rejects hiring agents to find all bugs and proposes a “security factory” converting business risk into security capabilities.[^semgrep-ceo-stanford-cs146s]
- 第三部分提醒 AGENTS.md 规则不一定执行，真正能卡住 Agent 的是沙箱和流程中必须通过的确定性检查；Agent 风险包括行为失控和代码供应链、密钥泄漏等。[^semgrep-ceo-stanford-cs146s]
- Part three warns AGENTS.md rules are not guaranteed to be enforced; sandboxes and deterministic checks in the pipeline are what truly constrain agents, with risks including agent misbehavior and supply-chain, secret-leakage issues.[^semgrep-ceo-stanford-cs146s]
- 第四部分主张把 AI 效率红利花在新代码预防而非死磕历史遗留，成本示意从编码插件拦截约 0.01 美元到安全事件超过 10 万美元，并以 Nat Howard/Dan Geer 语句收尾：安全永远刚好差到系统还能运转。[^semgrep-ceo-stanford-cs146s]
- Part four urges spending AI efficiency gains on preventing issues in new code rather than obsessing over legacy, with an indicative cost ladder from ~$0.01 in-plugin interception to over $100,000 per security incident, closing with the Nat Howard/Dan Geer line that security is always just bad enough for the system to keep running.[^semgrep-ceo-stanford-cs146s]

## 相关 / Related

- 原文：[链接](https://x.com/shao__meng/status/2121629344758169995)。 / Original: [link](https://x.com/shao__meng/status/2121629344758169995).
- Topic: [软件工厂 / Software factory](../../topics/software-factory.md)
- Topic: [网防 Agent Swarm 品类 / Agent swarms for cyber defense](../../topics/agent-swarms-cyber-defense.md)
- Topic: [Vibe Coding 的记忆悖论 / Vibe-coding memory paradox](../../topics/vibe-coding-memory-paradox.md)
- Topic: [智能体算力与治理 / Agent compute and governance](../../topics/agent-compute-and-governance.md)

[^semgrep-ceo-stanford-cs146s]: Semgrep CEO Stanford Guest Lecture: Make Attacks More Expensive in the Agent Era
