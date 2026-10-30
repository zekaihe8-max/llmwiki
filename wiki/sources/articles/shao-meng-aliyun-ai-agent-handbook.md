---
type: Source
title: 邵萌谈阿里云《AI Agent Handbook》
title_en: Meng Shao on Alibaba Cloud’s AI Agent Handbook
description: 邵萌介绍阿里云开源 AI Agent Handbook，以 Harness 串联企业 Agent 的构建、运行、治理与调优，并转述生产部署与评估缺口。
description_en: Meng Shao introduces Alibaba Cloud’s open-source AI Agent Handbook, connecting enterprise agent building, operation, governance, and optimization through the harness and relaying gaps in production deployment and evaluation.
resource: https://x.com/shao__meng/status/2115975663148765204
tags: [agents, harness, enterprise, governance, evaluation, aliyun]
sources:
  - id: shao-meng-aliyun-ai-agent-handbook
    resource: https://x.com/shao__meng/status/2115975663148765204
    title: Meng Shao on Alibaba Cloud’s AI Agent Handbook
    author: human:meng-shao
generated:
  by: codex/gpt-6
  at: 2026-10-30T20:15:03+08:00
date: 2026-10-30
---

# 邵萌谈阿里云《AI Agent Handbook》

*Meng Shao on Alibaba Cloud’s AI Agent Handbook*

## 摘要 / Summary

邵萌介绍阿里云开源《AI Agent Handbook》，将企业 Agent 从试点走向可治理生产的任务组织为架构、构建、运行、治理、调优与实践。帖子强调统一 Harness、Runtime、Agent、Workflow 等术语，并兼顾可靠性、稳定性、安全、性能、成本与核心业务接入。[^shao-meng-aliyun-ai-agent-handbook]

Meng Shao introduces Alibaba Cloud’s open-source AI Agent Handbook, organizing the move from pilots to governable production into architecture, building, operation, governance, optimization, and practice. The post emphasizes consistent terminology for Harness, Runtime, Agent, and Workflow, alongside reliability, stability, security, performance, cost, and integration into core business processes.[^shao-meng-aliyun-ai-agent-handbook]

帖子转述的 2026 年调研称，已开发完成或开发中的比例合计约 46%，真正部署生产约 18%；单 Agent、多 Agent 与以 HITL 为主的架构分别约 40%、42%、15%。其结论是自主度可调，多种形态共存。[^shao-meng-aliyun-ai-agent-handbook]

The post relays a 2026 survey reporting about 46% with development completed or underway and about 18% actually deployed to production; single-agent, multiagent, and primarily HITL architectures account for roughly 40%, 42%, and 15%. Its conclusion is that autonomy is adjustable and multiple forms coexist.[^shao-meng-aliyun-ai-agent-handbook]

构建后的缺口包括上下文/记忆需求约 90%、多模型路由与成本治理约 63%；人工抽查评估约 55%，基于轨迹的自动评估不足约 8%，约 16% 未量化成功率。帖子称有评估体系的团队中高成功率占比更高，但此关联不能据此写成因果效果。MCP 关注或落地合计约 37%，企业私有部署约 9%，帖子把短板归为注册、身份鉴权、版本灰度、审计与网关。[^shao-meng-aliyun-ai-agent-handbook]

Post-build gaps include context/memory needs at about 90% and multimodel routing and cost governance at about 63%; manual spot-check evaluation is about 55%, trajectory-based automated evaluation below about 8%, and about 16% have not quantified success rates. The post says teams with evaluation systems have a higher share of high success rates, but this association does not establish causation. MCP interest or adoption totals about 37%, with private enterprise deployments at about 9%; the post locates gaps in registries, identity and authentication, staged version rollouts, audit, and gateways.[^shao-meng-aliyun-ai-agent-handbook]

手册以 Harness 管编排、上下文、状态与受控行动；Runtime、沙箱、状态存储、AI 网关与异步运行承接执行；治理覆盖可观测、成本归因、安全、资产管理与上线前仿真；调优连接模型训练与 Trace→Trajectory、黄金数据集、Badcase、受控自进化。成熟度从 L1 辅助生成、L2 受控自动化走向 L3 Agentic Execution、L4 Managed & Optimizing。[^shao-meng-aliyun-ai-agent-handbook]

The handbook uses the harness for orchestration, context, state, and controlled action; runtime, sandboxes, state storage, AI gateways, and asynchronous operation support execution. Governance covers observability, cost attribution, security, asset management, and pre-release simulation; optimization connects model training with Trace→Trajectory, golden datasets, bad cases, and controlled self-evolution. Maturity moves from L1 assisted generation and L2 controlled automation to L3 Agentic Execution and L4 Managed & Optimizing.[^shao-meng-aliyun-ai-agent-handbook]

证据边界：本页归档的是帖子对手册的介绍，未独立核验完整手册或调研；所给正文没有样本量、抽样方法或完整问卷，数字仅作帖内转述，不视为企业总体普及率。开源链接在正文中为短链。[^shao-meng-aliyun-ai-agent-handbook]

Evidence boundary: this page files the post’s introduction to the handbook, without independently verifying the full handbook or survey. The supplied body gives no sample size, sampling method, or full questionnaire, so figures remain attributed reports rather than population-wide enterprise adoption estimates. The body provides the open-source link as a short URL.[^shao-meng-aliyun-ai-agent-handbook]

## 相关 / Related

- 原帖 / Original post: [AI Agent Handbook](https://x.com/shao__meng/status/2115975663148765204)
- 开源入口（帖内短链） / Open-source entry (short link in the post): <https://t.co/CzC395KiJq>
- [公司级 Agent Harness 五原语 / Company agent harness — five primitives](../../topics/company-agent-harness.md)
- [智能体算力与治理 / Agent compute and governance](../../topics/agent-compute-and-governance.md)

[^shao-meng-aliyun-ai-agent-handbook]: Meng Shao on Alibaba Cloud’s AI Agent Handbook
