---
type: Topic
title: 本地开放助手与机器人小模型
title_en: Local open models for assistants and robots
description: 实验室可发布约数 GB 的小体积开放模型，面向本地助手、互动角色与可对话并用工具办事的机器人，并在 Jetson 一类边缘板上与视觉模型同机本地跑通演示。
description_en: Labs can ship few-GB small open models for local assistants, interactive characters, and robots that converse and use tools, and demo them locally on edge boards such as Jetson alongside a vision model.
tags: [local, open-model, edge, assistant, robot, nemotron, jetson]
sources:
  - id: nvidia-ai-nemotron-bolt-e4b
    resource: https://x.com/NVIDIAAI/status/2113657112408785153
    title: NVIDIA AI announces Nemotron 3.5 Bolt E4B
generated:
  by: cursor-agent/composer
  at: 2026-10-26T08:07:50+08:00
---
<!-- Same-file bilingual (project extension): title + title_en, description + description_en, bilingual section headings, ZH then EN body pairs. Proper nouns / product names / APIs / resource URLs stay in their common form. Do not invent facts; translate existing claims faithfully. -->

# 本地开放助手与机器人小模型

*Local open models for assistants and robots*

厂商可把「小体积开放模型」做成可下载的本地栈：面向本地助手、互动角色与机器人，强调持续对话与工具调用，并在消费级边缘算力（如 Jetson Orin Nano 8GB）上与专用视觉模型同机演示，而不必默认走云端大模型 API。[^nvidia-ai-nemotron-bolt-e4b]

Vendors can ship “small open models” as a downloadable local stack: aimed at local assistants, interactive characters, and robots, stressing ongoing conversation plus tool use, and demoed on consumer-class edge compute (e.g. Jetson Orin Nano 8GB) alongside a dedicated vision model—without defaulting to a cloud frontier API.[^nvidia-ai-nemotron-bolt-e4b]

## 综合分析 / Synthesis

[NVIDIA AI 发布 Nemotron 3.5 Bolt E4B](../sources/articles/nvidia-ai-nemotron-bolt-e4b.md) 给出官方发布侧一例：NVIDIA Nemotron 3.5 Bolt E4B 4GB「现已可用」，自称最新小体积开放模型；场景写明本地助手、互动角色，以及能对话并用工具办事的机器人；Reachy Mini 演示中 Bolt 管对话、NVIDIA Cosmos 管视觉，二者均在 Jetson Orin Nano 8GB 本地运行，并链到 Nemotron 研究页。[^nvidia-ai-nemotron-bolt-e4b] 原帖 <https://x.com/NVIDIAAI/status/2113657112408785153>；研究页 <https://research.nvidia.com/labs/nemotron/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB/>。证据停在产品定位与演示硬件声明，未给基准分数或与云端旗舰的对比表。

[NVIDIA AI announces Nemotron 3.5 Bolt E4B](../sources/articles/nvidia-ai-nemotron-bolt-e4b.md) is one official launch case: NVIDIA Nemotron 3.5 Bolt E4B 4GB “available now,” framed as the newest small open model; use cases are local assistants, interactive characters, and robots that converse and use tools; in a Reachy Mini demo Bolt handles conversation and NVIDIA Cosmos vision, both local on Jetson Orin Nano 8GB, with a Nemotron research link.[^nvidia-ai-nemotron-bolt-e4b] Post: <https://x.com/NVIDIAAI/status/2113657112408785153>; research: <https://research.nvidia.com/labs/nemotron/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB/>. Evidence is product positioning and demo hardware claims—not benchmarks or a cloud-flagship comparison table.

适用边界：本页讲「可本地跑的小开放模型 + 对话/工具/机器人场景」，不是万亿级开放权重旗舰，也不是 Pro/Flash 云端档位争论。与 [开放权重前沿模型](./open-weight-frontier-models.md) 同属开放权重叙事，但那页是接近闭源前沿的 MoE、长上下文与「本地硬件门槛高」；本页是约 4GB、面向边缘板与机器人的小模型栈。与 [Pro 与 Flash 模型策略](./pro-vs-flash-model-strategy.md) 同属「不追最大旗舰」的邻域，但那页是 API/订阅档位与社区刷分体感；本页是本地开放权重产品形态。与 [Agent 经家居平台直控设备](./agent-home-platform-control.md) 同属「模型进物理世界」，但那页是经 Apple Home 等平台直控家电；本页是板上本地模型驱动对话与视觉的机器人演示。

Scope: this page is “small open models runnable locally + conversation/tool/robot framing,” not trillion-scale open-weight flagships, nor Pro/Flash cloud-tier debates. It shares open-weight narrative with [Open-weight frontier models](./open-weight-frontier-models.md), but that page is near-closed-frontier MoE, long context, and high local hardware bars; this page is ~4GB edge/robot stacks. It neighbors [Pro vs Flash model strategy](./pro-vs-flash-model-strategy.md) on “not chasing the biggest flagship,” but that page is API/subscription tiers and community score-hype feel; this page is local open-weight product shape. It shares “models into the physical world” with [Agents control devices via home platforms](./agent-home-platform-control.md), but that page is Home-platform appliance control; this page is on-board local models driving conversation and vision in a robot demo.

## 矛盾与变化 / Contradictions

暂无。 / None yet.

## 相关 / Related

- Source: [NVIDIA AI 发布 Nemotron 3.5 Bolt E4B](../sources/articles/nvidia-ai-nemotron-bolt-e4b.md)
- Topic: [开放权重前沿模型](./open-weight-frontier-models.md)
- Topic: [Pro 与 Flash 模型策略](./pro-vs-flash-model-strategy.md)
- Topic: [Agent 经家居平台直控设备](./agent-home-platform-control.md)

[^nvidia-ai-nemotron-bolt-e4b]: NVIDIA AI announces Nemotron 3.5 Bolt E4B
