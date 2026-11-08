---
type: Source
title: "sand3d：面向 LLM 的 Python 3D 建模库"
title_en: "sand3d: Python 3D Modeling Library Built for LLMs"
description: "一个让 LLM 用几百 token 写出可导出 GLB/URDF/USD 的 3D 组装程序的 Python 库。"
description_en: "A Python library letting LLMs write 3D assembly programs in a few hundred tokens, exportable to GLB, URDF, USD."
resource: https://github.com/Sandflow-ai/sand3d
tags: [llm, 3d-modeling, python, simulation, dataset]
sources:
  - id: sand3d-llm-3d-modeling
    resource: https://github.com/Sandflow-ai/sand3d
    title: "sand3d: Python 3D Modeling Library Built for LLMs"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-08T20:45:12+08:00
---

# sand3d：面向 LLM 的 Python 3D 建模库

*sand3d: Python 3D Modeling Library Built for LLMs*

帖文介绍 sand3d，一个构建在 Blender bpy 之上的 Python 库，专为 LLM 编写 3D 模型而设计。其核心理念是用简短、可读的程序描述形状的构造过程——轮廓、实体、编辑、坐标系、关节与组装——整个 API 仅约 3,600 token，可放入系统提示词。程序按名称而非坐标引用零件，构建结果逐比特确定。支持一键导出 GLB、URDF、USD、OBJ、STL，并提供五个 Hugging Face 数据集（Objaverse、CAD、Articraft、SimReady、AutoMate），均以 CC BY 4.0 发布。[^sand3d-llm-3d-modeling]

The post introduces sand3d, a Python library built on Blender's bpy, designed for LLMs to write 3D models. Its core idea: describe shape construction with short, readable programs—profiles, solids, edits, frames, joints, assemblies—the entire API fits in ~3,600 tokens for a system prompt. Programs reference parts by name, not coordinates, and builds are bit-for-bit deterministic. One-call export to GLB, URDF, USD, OBJ, STL; five Hugging Face datasets (Objaverse, CAD, Articraft, SimReady, AutoMate) released under CC BY 4.0.[^sand3d-llm-3d-modeling]

## 摘要 / Summary

- 整个 API 约 3,600 token，可直接放入 LLM 系统提示词。 / The full API is ~3,600 tokens, small enough for an LLM system prompt.[^sand3d-llm-3d-modeling]
- 按名称引用零件/边/面，避免手算坐标；同一程序逐比特复现网格。 / Parts, edges, faces referenced by name, not hand-computed coordinates; same program reproduces mesh bit-for-bit.[^sand3d-llm-3d-modeling]
- 一行导出 GLB/URDF/USD/OBJ/STL，长度单位为米。 / Single-call export to GLB, URDF, USD, OBJ, STL; lengths in metres.[^sand3d-llm-3d-modeling]
- 提供五大 Hugging Face 数据集（Objaverse、CAD、Articraft、SimReady、AutoMate），CC BY 4.0。 / Five Hugging Face datasets (Objaverse, CAD, Articraft, SimReady, AutoMate) under CC BY 4.0.[^sand3d-llm-3d-modeling]
- 支持关节类型：连续、棱柱、铰链，可导出 URDF 供 ROS/PyBullet/MuJoCo 使用。 / Joint types: continuous, prismatic, hinge; URDF export for ROS, PyBullet, MuJoCo.[^sand3d-llm-3d-modeling]
- 需 Python 3.11 或 3.13（bpy 5.2 LTS 随 3.13 提供），Intel Mac 仅支持 3.11。 / Requires Python 3.11 or 3.13 (bpy 5.2 LTS with 3.13); Intel Macs only on 3.11.[^sand3d-llm-3d-modeling]

## 相关 / Related

- 原文：[链接](https://github.com/Sandflow-ai/sand3d)。 / Original: [link](https://github.com/Sandflow-ai/sand3d).
- Topic: [面向 Agent 的编程语言 / Languages for agents](../../topics/languages-for-agents.md)
- Topic: [项目指令与 Token 效率 / Project instructions and token efficiency](../../topics/agents-md-token-efficiency.md)
- Topic: [仿真就绪开放三维资产 / Simulation-ready open 3D assets](../../topics/simulation-ready-open-3d-assets.md)
- Topic: [给 AI 的全栈仓图 / AI-facing full-stack repo map](../../topics/ai-facing-fullstack-repo-map.md)

[^sand3d-llm-3d-modeling]: sand3d: Python 3D Modeling Library Built for LLMs
