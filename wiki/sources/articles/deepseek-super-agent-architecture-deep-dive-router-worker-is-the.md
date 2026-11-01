---
type: Source
title: "DeepSeek Super-agent 架构拆解：Router/Worker 才是研究原型主菜"
title_en: "DeepSeek Super-agent Architecture Deep Dive: Router/Worker Is the Main Course of the Research Prototype"
description: "DeepSeek 发布非正式产品、非新模型的研究原型，主打 Router 调度与 Worker 执行的双层架构。"
description_en: "DeepSeek releases an unofficial product, non-new-model research prototype featuring a two-layer Router scheduling and Worker execution architecture."
resource: https://x.com/heydengai/status/2116796865433985385
tags: [agents, design, deepseek, router-worker, research-prototype]
sources:
  - id: deepseek-super-agent-router-worker
    resource: https://x.com/heydengai/status/2116796865433985385
    title: "DeepSeek Super-agent Architecture Deep Dive: Router/Worker Is the Main Course of the Research Prototype"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-01T20:09:01+08:00
---

# DeepSeek Super-agent 架构拆解：Router/Worker 才是研究原型主菜

*DeepSeek Super-agent Architecture Deep Dive: Router/Worker Is the Main Course of the Research Prototype*

帖文称，DeepSeek Harness 团队于 2026-10-31 放出 dsh-superagent-prototype，README 开篇即标注为研究原型，非正式产品，也非新模型；全文主菜是把 OS 思路搬进 Agent，以 Router 调度、Worker 干活的双层架构托住连续、高效、主动、持久四大特征。[^deepseek-super-agent-router-worker]

The post states that the DeepSeek Harness team released dsh-superagent-prototype on 2026-10-31, with the README labeling it a research prototype, not an official product or new model; the main course is bringing OS thinking into Agent systems via a two-layer Router scheduling and Worker execution architecture supporting Continuity, Efficiency, Proactivity, and Persistence.[^deepseek-super-agent-router-worker]

## 摘要 / Summary

- DeepSeek Harness 团队于 2026-10-31 发布 dsh-superagent-prototype，MIT 许可，README 明确标注为研究原型，非正式产品，也非新模型。 / The DeepSeek Harness team released dsh-superagent-prototype on 2026-10-31 under MIT license; the README explicitly labels it a research prototype, not an official product or new model.[^deepseek-super-agent-router-worker]
- 架构采用双层设计：Router 负责人机交互、任务间协调与全局记忆，Worker 在隔离上下文中执行具体任务，对外由 Router 统一出口。 / The architecture uses a two-layer design: Router handles human interaction, inter-task coordination, and global memory; Worker executes specific tasks in isolated context; Router is the single external outlet.[^deepseek-super-agent-router-worker]
- 系统引入 Trigger 事件驱动、Fast/Slow Path 过滤、Thread 订阅直通，以及 Watchdog 外部控制回路，以支撑四大特征。 / The system introduces Trigger event-driven flow, Fast/Slow Path filtering, Thread subscription pass-through, and an external Watchdog control loop to support the four features.[^deepseek-super-agent-router-worker]
- 合成负载实验显示 Super-agent p50 12.4 分钟、p95 15.7 分钟完成；去掉订阅直通后 Router 决策数增加约 30%，cache-read 从 23.23M 升至 31.77M。 / Synthetic load experiments show Super-agent p50 12.4 min and p95 15.7 min completion; removing subscription pass-through increased Router decisions by ~30% and cache-read from 23.23M to 31.77M.[^deepseek-super-agent-router-worker]
- §8 列出开放问题，包括双层扩展分片、人机协作形态、A2A 边界，以及云端 Loop 与端侧 daemon 的凭据注入等安全与隐私风险。 / Section 8 lists open issues including Router sharding, human-machine collaboration forms, A2A boundaries, and security/privacy risks such as credential injection in the cloud Loop plus edge daemon model.[^deepseek-super-agent-router-worker]
- 社区部分将其类比为「开源版 Dots」，但文章强调这不是 DeepSeek 正式消费级产品，也未与 Grok Bot、OpenAI Dots、Meta Muse 等建立官方等价关系。 / Some community members compare it to an "open-source Dots," but the article stresses it is not a formal DeepSeek consumer product and has no official equivalence with Grok Bot, OpenAI Dots, or Meta Muse.[^deepseek-super-agent-router-worker]

## 相关 / Related

- 原文：[链接](https://x.com/heydengai/status/2116796865433985385)。 / Original: [link](https://x.com/heydengai/status/2116796865433985385).
- Topic: [公司级 Agent Harness 五原语 / Company agent harness — five primitives](../../topics/company-agent-harness.md)
- Topic: [多智能体四道基建题 / Four infra gaps for large multiagent systems](../../topics/multiagent-infra-four-problems.md)
- Topic: [Agent 上下文工程 / Context engineering for agents](../../topics/context-engineering-for-agents.md)
- Topic: [个人 Agent 当包工头调度编程 Agent / Personal agent as foreman over coding agents](../../topics/personal-agent-foreman-over-coding-agents.md)

[^deepseek-super-agent-router-worker]: DeepSeek Super-agent Architecture Deep Dive: Router/Worker Is the Main Course of the Research Prototype
