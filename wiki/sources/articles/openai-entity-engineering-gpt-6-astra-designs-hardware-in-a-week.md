---
type: Source
title: "OpenAI 实体工程：GPT-6 Astra 一周设计硬件，马自达与 Ganassi 赛车队试用"
title_en: "OpenAI Entity Engineering: GPT-6 Astra Designs Hardware in a Week, Mazda and Ganassi Racing Trial"
description: "帖文称 OpenAI 用 GPT-6 与 Astra 从零设计可与 Codex 对话的硬件设备，并与马自达、Chip Ganassi Racing 开展机械与电子设计合作，但尚未通过量产评审。"
description_en: "The post says OpenAI used GPT-6 and Astra to design a hardware device from scratch that can converse with Codex, and is collaborating with Mazda and Chip Ganassi Racing on mechanical and electronic design, but has not yet passed mass-production review."
resource: https://x.com/shao__meng/status/2117791043693551968
tags: [openai, agents, hardware-design, cad, pcb, simulation]
sources:
  - id: openai-gpt-6-astra-hardware-design
    resource: https://x.com/shao__meng/status/2117791043693551968
    title: "OpenAI Entity Engineering: GPT-6 Astra Designs Hardware in a Week, Mazda and Ganassi Racing Trial"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-04T20:06:30+08:00
---

# OpenAI 实体工程：GPT-6 Astra 一周设计硬件，马自达与 Ganassi 赛车队试用

*OpenAI Entity Engineering: GPT-6 Astra Designs Hardware in a Week, Mazda and Ganassi Racing Trial*

「帖文称」OpenAI 正在把模型能力从写代码扩展到机械、电子和系统设计，内部已跑通从外观、结构、电路板到固件的完整设计流程，但尚未通过「能否量产」关卡，因此面向行业招募合作方。帖文还提到，两名员工以副业身份在不到一周内完成一台能和 Codex 对话的小设备设计，合同制造商不到一个月做出小批样机；OpenAI 内部硬件团队自 2 月以来 token 用量增长 23 倍，并与 Chip Ganassi Racing、马自达分别开展零件扫描转 CAD 与车头空气动力学建模合作。[^openai-gpt-6-astra-hardware-design]

The post says OpenAI is extending model capabilities from coding to mechanical, electronic, and system design, with an internal end-to-end flow from appearance and structure to PCB and firmware, though it has not yet cleared the mass-production gate and is recruiting industry partners. Two employees reportedly designed a small device able to converse with Codex in under a week as a side project, and a contract manufacturer produced a small batch of samples in under a month. OpenAI's internal hardware teams have seen token usage grow 23-fold since February, and are collaborating with Chip Ganassi Racing on converting 3D scans to editable CAD and with Mazda on car-front aerodynamic modeling.[^openai-gpt-6-astra-hardware-design]

## 摘要 / Summary

- OpenAI 用 GPT-6 定义功能需求，由 Astra 完成外观、机械结构、PCB 布局走线及固件软件设计，目标是制作一台能和 Codex 对话的小设备。 / OpenAI used GPT-6 to define functional requirements, with Astra handling appearance, mechanical structure, PCB layout and routing, and firmware software, aiming to build a small device able to converse with Codex.[^openai-gpt-6-astra-hardware-design]
- 两名员工将该设计作为副业，不到一周完成设计，合同制造商不到一个月制作出小批样机，但 OpenAI 承认离量产仍需多轮评审和修改。 / Two employees treated the design as a side project, completing it in under a week, while a contract manufacturer produced a small batch of samples in under a month; OpenAI acknowledges it still needs multiple review and revision rounds before mass production.[^openai-gpt-6-astra-hardware-design]
- OpenAI 内部硬件团队使用 Codex 和 ChatGPT 建模、修改 CAD 模型、生成 2D 生产图纸、进行仿真与有限元分析，自 2 月以来 token 用量增长 23 倍。 / OpenAI's internal hardware teams use Codex and ChatGPT for modeling, CAD modification, 2D production drawing generation, simulation and finite element analysis, with token usage up 23-fold since February.[^openai-gpt-6-astra-hardware-design]
- BenchCAD 2.0 评测中，未发布的内部新模型平均得分 0.875，GPT-6 Astra 在最高推理档位下得分 0.594。 / In BenchCAD 2.0 evaluation, an unreleased internal new model averaged 0.875, while GPT-6 Astra at the highest reasoning tier scored 0.594.[^openai-gpt-6-astra-hardware-design]
- OpenAI 与 Chip Ganassi Racing 合作，将现有零件的 3D 扫描数据转为可编辑 CAD 模型和 2D 生产图纸；并与马自达空气动力学和碰撞安全团队合作，对新车头造型建模并模拟气流。 / OpenAI is working with Chip Ganassi Racing to convert 3D scan data of existing parts into editable CAD models and 2D production drawings, and with Mazda's aerodynamics and crash safety teams to model new car-front styling and simulate airflow.[^openai-gpt-6-astra-hardware-design]

## 相关 / Related

- 原文：[链接](https://x.com/shao__meng/status/2117791043693551968)。 / Original: [link](https://x.com/shao__meng/status/2117791043693551968).
- Topic: [智能体规模化工程 / Agent-scaled engineering](../../topics/agent-scaled-engineering.md)
- Topic: [设计↔代码与自带 Claude/Codex 订阅 / Design-to-code tools with bring-your-own Claude/Codex subscriptions](../../topics/design-to-code-byo-subscriptions.md)
- Topic: [发散任务先人审设计 / Human design gate for divergent tasks](../../topics/divergent-tasks-human-design-gate.md)

[^openai-gpt-6-astra-hardware-design]: OpenAI Entity Engineering: GPT-6 Astra Designs Hardware in a Week, Mazda and Ganassi Racing Trial
