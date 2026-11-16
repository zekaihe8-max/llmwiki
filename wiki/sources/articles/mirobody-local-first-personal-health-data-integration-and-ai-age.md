---
type: Source
title: "Mirobody：个人健康数据本地化整合与 AI 代理平台"
title_en: "Mirobody: Local-first Personal Health Data Integration and AI Agent Platform"
description: "Mirobody 是一个开源平台，将化验报告、可穿戴设备和基因数据整合到本地，并通过 AI 代理和 MCP 协议实现离线标准化与查询。"
description_en: "Mirobody is an open-source platform that integrates lab reports, wearables, and genetic data locally, enabling offline standardization and querying via AI agents and MCP."
resource: https://github.com/thetahealth/mirobody
tags: [health-data, ai-agent, local-ai, mcp, opensource]
sources:
  - id: thetahealth-mirobody
    resource: https://github.com/thetahealth/mirobody
    title: "Mirobody: Local-first Personal Health Data Integration and AI Agent Platform"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-16T20:42:35+08:00
---

# Mirobody：个人健康数据本地化整合与 AI 代理平台

*Mirobody: Local-first Personal Health Data Integration and AI Agent Platform*

「帖文称」Mirobody 是一个开源的个人健康数据平台，主张“一个标准，所有来源，一份完整的你”，让化验报告、可穿戴设备和基因文件汇聚到本地，并由 AI 代理通过 MCP 协议查询。该项目提供命令行解析器、GitHub Codespaces、Docker 本地部署和免 Docker 的原生安装方式，强调数据不离开用户机器，术语标准化使用随软件捆绑的词典，模型仅用于阅读文档和推理，不参与代码与单位的标准化。[^thetahealth-mirobody]

The post describes Mirobody as an open-source personal health data platform advocating “one standard, every source, one complete picture of you,” consolidating lab reports, wearables, and genetic files locally for querying by AI agents over MCP. It offers a command-line resolver, GitHub Codespaces, Docker local deployment, and native installation without Docker, emphasizing that data stays on the user’s machine, terminology standardization uses bundled vocabularies, and models are used only for document reading and reasoning, not for code and unit standardization.[^thetahealth-mirobody]

## 摘要 / Summary

- 支持通过 uvx 一命令运行离线术语解析器，无需克隆仓库、Docker、模型或 API 密钥；首次运行需联网下载。[^thetahealth-mirobody]
- Supports running an offline terminology resolver with one uvx command, no repository clone, Docker, model, or API key required; first run needs network to download.[^thetahealth-mirobody]
- 提供 GitHub Codespaces、Docker Compose（含 llama.cpp 本地模型）和 Debian/Ubuntu 原生安装三种部署方式，适用于不同隐私与硬件需求。[^thetahealth-mirobody]
- Offers GitHub Codespaces, Docker Compose (with local llama.cpp models), and Debian/Ubuntu native installation for different privacy and hardware needs.[^thetahealth-mirobody]
- 能够整合 PDF、手机照片、电子表格等 23 种文件类型，以及 Apple Health、Garmin、Oura 和 Whoop 等设备数据，每条读数都关联来源文件。[^thetahealth-mirobody]
- Integrates 23 file types including PDFs, phone photos, and spreadsheets, plus device data from Apple Health, Garmin, Oura, and Whoop; every reading links to its source file.[^thetahealth-mirobody]
- 使用 MCP 协议接入 Claude Code、Codex、Cursor 等 AI 代理，也可通过 Python 库离线使用，名称到代码的映射不依赖模型，而是使用捆绑词典。[^thetahealth-mirobody]
- Connects to AI agents such as Claude Code, Codex, and Cursor via MCP, and can be used offline via the Python library; name-to-code mapping relies on bundled vocabularies rather than models.[^thetahealth-mirobody]
- 明确声明不提供诊断或处方，答案不构成医疗建议；平台不上报使用数据，设备厂商仅在用户主动关联后才能看到数据。[^thetahealth-mirobody]
- Explicitly states it does not diagnose or prescribe, and answers are not medical advice; the platform does not report usage data, and device vendors see data only after the user actively links them.[^thetahealth-mirobody]

## 相关 / Related

- 原文：[链接](https://github.com/thetahealth/mirobody)。 / Original: [link](https://github.com/thetahealth/mirobody).
- Topic: [本地开放助手与机器人小模型 / Local open models for assistants and robots](../../topics/local-open-assistant-models.md)
- Topic: [智能体算力与治理 / Agent compute and governance](../../topics/agent-compute-and-governance.md)
- Topic: [跨 Agent 统一资源库 / Unified cross-agent resource library](../../topics/unified-agent-resource-library.md)
- Topic: [Agent Skills 开放标准 / Agent Skills open standard](../../topics/agent-skills-open-standard.md)

[^thetahealth-mirobody]: Mirobody: Local-first Personal Health Data Integration and AI Agent Platform
