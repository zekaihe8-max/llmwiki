---
type: Source
title: "把“赛博工伤”写进健康档案：Mirobody Agent 标准化三年体检单"
title_en: "Writing 'Cyber Occupational Injury' into Health Records: Mirobody Agent Standardizes Three Years of Checkup Reports"
description: "帖文称，用虚拟跨年度体检数据对比普通大模型与 Mirobody Agent，展示后者如何统一不同医院的指标名称与单位，并生成就医提问清单。"
description_en: "The post claims that, using virtual multi-year checkup data, Mirobody Agent outperforms ordinary LLMs by unifying indicator names and units across hospitals and generating a list of questions to ask doctors."
resource: https://x.com/0xlangeai/status/2123710705270480921
tags: [agents, health-data, mcp, local-deployment]
sources:
  - id: mirobody-agent-health-records
    resource: https://x.com/0xlangeai/status/2123710705270480921
    title: "Writing 'Cyber Occupational Injury' into Health Records: Mirobody Agent Standardizes Three Years of Checkup Reports"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-20T20:18:08+08:00
---

# 把“赛博工伤”写进健康档案：Mirobody Agent 标准化三年体检单

*Writing 'Cyber Occupational Injury' into Health Records: Mirobody Agent Standardizes Three Years of Checkup Reports*

帖文称，AI 圈频繁测新模型、维护账号容易导致「赛博工伤」，而更值得长期关注的是个人健康档案。作者用开源工具 mirobody-gen 生成 2024 至 2026 年虚拟体检报告，先后用普通大模型和接入 Mirobody MCP 的 Claude Code 对比血脂与尿酸趋势。帖文引用 Theta Health 的 ESL-Bench 研究称，非结构化健康文档直接检索准确率仅 30%–38%，标准化入库后由 Agent 查询可提升至 48%–58%。Mirobody 可把不同医院的同一指标映射到标准医学编码、统一单位并标注出处，还能生成就医问题清单而不越界做医疗诊断；项目支持 100% 本地部署，数据不离开本机。[^mirobody-agent-health-records]

The post claims that frequent AI model testing and account maintenance in the AI circle can cause 'cyber occupational injury,' but personal health records deserve more long-term attention. The author used the open-source tool mirobody-gen to generate virtual checkup reports from 2024 to 2026, then compared blood lipid and uric acid trends using an ordinary LLM versus Claude Code connected to Mirobody MCP. Citing Theta Health's ESL-Bench study, the post says direct retrieval of unstructured health documents has only 30%–38% accuracy, while standardizing into storage before Agent querying improves it to 48%–58%. Mirobody can map the same indicator from different hospitals to standard medical codes, unify units, and cite sources, while generating doctor-visit questions without making medical diagnoses; the project supports 100% local deployment so data never leaves the local machine.[^mirobody-agent-health-records]

## 摘要 / Summary

- Mirobody 是 Theta Health 开源的 AI 健康数据引擎，协议为 Apache-2.0，可接入 Claude Code、Codex、Cursor、Gemini CLI 等 Agent 工具。[^mirobody-agent-health-records]
- Mirobody is Theta Health's open-source AI health data engine under Apache-2.0 and can connect to Agent tools such as Claude Code, Codex, Cursor, and Gemini CLI.[^mirobody-agent-health-records]
- 帖文引用 ESL-Bench（arXiv 2604.02834）称，直接把非结构化健康文档丢给传统检索，准确率为 30%–38%；先标准化入库再由 Agent 查询，准确率可达 48%–58%。[^mirobody-agent-health-records]
- The post cites ESL-Bench (arXiv 2604.02834) as saying that directly feeding unstructured health documents to traditional retrieval yields 30%–38% accuracy, while standardizing into storage before Agent querying reaches 48%–58%.[^mirobody-agent-health-records]
- 接入 Mirobody MCP 后，系统可自动对齐不同医院的指标叫法（如「低密度脂蛋白胆固醇」与 LDL-C）并统一换算 μmol/L 与 mg/dL，每个数值都标明来自哪一年的哪份报告。[^mirobody-agent-health-records]
- After connecting Mirobody MCP, the system automatically aligns indicator names across hospitals (e.g., 'low-density lipoprotein cholesterol' vs LDL-C) and converts units such as μmol/L and mg/dL, with every value traced to its source report and year.[^mirobody-agent-health-records]
- 虚拟演示中，尿酸从 2024 年的 390 μmol/L 上升到 2026 年的 465 μmol/L，AI 生成了四条就医提问，但未给出医疗诊断。[^mirobody-agent-health-records]
- In the virtual demo, uric acid rose from 390 μmol/L in 2024 to 465 μmol/L in 2026, and the AI generated four questions to ask doctors without providing a medical diagnosis.[^mirobody-agent-health-records]
- Mirobody 支持 100% 本地部署，数据完全不离开自己电脑；通过云端工具接入时，对话记录会发给对应模型公司。[^mirobody-agent-health-records]
- Mirobody supports 100% local deployment with data never leaving the user's computer; when connecting via cloud tools, conversation records are sent to the corresponding model company.[^mirobody-agent-health-records]
- 开源版自带「家人档案」功能，可帮不怎么用手机的长辈统一管理历年体检单，查看和编辑权限由用户掌握。[^mirobody-agent-health-records]
- The open-source version includes a 'family archive' feature to help elderly relatives manage historical checkup reports, with view and edit permissions controlled by the user.[^mirobody-agent-health-records]

## 相关 / Related

- 原文：[链接](https://x.com/0xlangeai/status/2123710705270480921)。 / Original: [link](https://x.com/0xlangeai/status/2123710705270480921).
- Topic: [Agent 上下文工程 / Context engineering for agents](../../topics/context-engineering-for-agents.md)
- Topic: [发模型前本地脱敏 / Local desensitization before sending to models](../../topics/local-desensitization-before-models.md)
- Topic: [信任公开榜前先审质量 / Scrutinize public-benchmark quality before trusting](../../topics/public-benchmark-quality-scrutiny.md)
- Topic: [智能体自动模式 / Agent auto mode](../../topics/agent-auto-mode.md)

[^mirobody-agent-health-records]: Writing 'Cyber Occupational Injury' into Health Records: Mirobody Agent Standardizes Three Years of Checkup Reports
