---
type: Source
title: "腾讯混元 Hyra 2.0：让 AI 从解题走向自主造工具"
title_en: "Tencent Hunyuan Hyra 2.0: Letting AI Move from Problem-Solving to Autonomous Tool-Building"
description: "帖文称腾讯混元发布三层架构的科研 Agent Hyra 2.0，支持 AI 持续开展数天至数周研究，并沉淀可复用 Skill。"
description_en: "The post says Tencent Hunyuan released Hyra 2.0, a three-layer research Agent supporting AI research spanning days to weeks and accumulating reusable Skills."
resource: https://x.com/0xLogicrw/status/2117207306085826585
tags: [agents, tencent-hunyuan, ai-research, open-weights]
sources:
  - id: tencent-hunyuan-hyra-2-0
    resource: https://x.com/0xLogicrw/status/2117207306085826585
    title: "Tencent Hunyuan Hyra 2.0: Letting AI Move from Problem-Solving to Autonomous Tool-Building"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-02T20:26:08+08:00
---

# 腾讯混元 Hyra 2.0：让 AI 从解题走向自主造工具

*Tencent Hunyuan Hyra 2.0: Letting AI Move from Problem-Solving to Autonomous Tool-Building*

帖文称，腾讯混元发布科研 Agent Hyra 2.0，试图让 AI 从反复攻克单一难题转向自主研发科学模型、算法和工具，并将一次研究的成果复用到更多问题上。Hyra 2.0 以 Overall、Mission、Worker 三层 Agent 分工协作，任务可持久化并跨研究推进，结论需附代码、日志等证据，有效经验沉淀为 Skill。文中还提到其已训练 HyInv 与 HyPLM-Flash 两款蛋白质模型、优化香山 RISC-V 处理器并设计旋梯手，且正参与下一代混元模型的预训练、后训练与推理系统优化。[^tencent-hunyuan-hyra-2-0]

The post says Tencent Hunyuan released research Agent Hyra 2.0, attempting to shift AI from repeatedly solving individual problems to autonomously developing scientific models, algorithms, and tools, and reusing one research outcome across more problems. Hyra 2.0 divides work among Overall, Mission, and Worker Agents; tasks can be persisted and advanced across research efforts, conclusions must carry code, logs, and other evidence, and effective experience is沉淀ed into Skills. The post also notes it has trained protein models HyInv and HyPLM-Flash, optimized the Xiangshan RISC-V processor, designed a rotating-ladder hand, and is participating in pretraining, post-training, and inference-system optimization for the next-generation Hunyuan model.[^tencent-hunyuan-hyra-2-0]

## 摘要 / Summary

- Hyra 2.0 采用 Overall、Mission、Worker 三层 Agent，分别负责资源协调、研究规划和实验执行，任务持久化保存，等待训练结果时也能推进其他研究。 / Hyra 2.0 uses a three-layer Agent architecture—Overall, Mission, and Worker—for resource coordination, research planning, and experiment execution, with tasks persistently saved so other research can proceed while waiting for training results.[^tencent-hunyuan-hyra-2-0]
- 系统已从头训练出蛋白质模型 HyInv（196 万参数）和 HyPLM-Flash（6.5 亿参数、7260 亿训练 token），权重、推理代码和技术报告均已公开。 / The system has trained protein models HyInv (1.96M parameters) and HyPLM-Flash (650M parameters, 726B training tokens) from scratch, with weights, inference code, and technical reports released.[^tencent-hunyuan-hyra-2-0]
- HyInv 生成蛋白质序列速度比 ProteinMPNN 快 57 倍；单张 H20 GPU 预热测试中，生成 128 条约 400 个残基的序列只需约 50 毫秒。 / HyInv generates protein sequences 57 times faster than ProteinMPNN; on a single H20 GPU warmup test, producing 128 sequences of about 400 residues takes about 50 ms.[^tencent-hunyuan-hyra-2-0]
- Hyra 2.0 参与优化开源 RISC-V 处理器「香山」，使 SPEC CPU2006 每 GHz 性能提高 5.79%，芯片面积仅增加 0.3%。 / Hyra 2.0 helped optimize the open-source RISC-V processor Xiangshan, improving SPEC CPU2006 performance per GHz by 5.79% with only 0.3% area increase.[^tencent-hunyuan-hyra-2-0]
- 有效经验会沉淀成 Skill 供后续任务使用；每项结论需要附上代码、日志等证据，必要时交给独立 Agent 复核。 / Effective experience is沉淀ed into Skills for reuse by later tasks; each conclusion must include code, logs, and other evidence and may be reviewed by an independent Agent.[^tencent-hunyuan-hyra-2-0]

## 相关 / Related

- 原文：[链接](https://x.com/0xLogicrw/status/2117207306085826585)。 / Original: [link](https://x.com/0xLogicrw/status/2117207306085826585).
- Topic: [智能体自动模式 / Agent auto mode](../../topics/agent-auto-mode.md)
- Topic: [智能体规模化工程 / Agent-scaled engineering](../../topics/agent-scaled-engineering.md)
- Topic: [Agent Skill 编写 / Agent skill authoring](../../topics/agent-skill-authoring.md)
- Topic: [AI 任务时界增长 / AI task horizon growth](../../topics/ai-task-horizon-growth.md)

[^tencent-hunyuan-hyra-2-0]: Tencent Hunyuan Hyra 2.0: Letting AI Move from Problem-Solving to Autonomous Tool-Building
