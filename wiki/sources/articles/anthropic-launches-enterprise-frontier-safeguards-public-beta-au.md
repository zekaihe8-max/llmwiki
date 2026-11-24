---
type: Source
title: "Anthropic 推出企业前沿防护公测：零数据留存下的自动化安全监控"
title_en: "Anthropic Launches Enterprise Frontier Safeguards Public Beta: Automated Safety Monitoring with Zero Data Retention"
description: "Anthropic 面向企业推出 EFS 公测，在客户自管存储上运行跨请求的自动化安全监控，实现零数据留存且不训练模型。"
description_en: "Anthropic releases EFS public beta for enterprises, running cross-request automated safety monitoring on customer-controlled storage to achieve zero data retention without model training."
resource: https://claude.com/resources/articles/zero-data-retention-with-enterprise-frontier-safeguards
tags: [anthropic, enterprise-ai, zero-data-retention, safety-monitoring, claude-platform]
sources:
  - id: anthropic-efs-zdr-public-beta-2026-11-23
    resource: https://claude.com/resources/articles/zero-data-retention-with-enterprise-frontier-safeguards
    title: "Anthropic Launches Enterprise Frontier Safeguards Public Beta: Automated Safety Monitoring with Zero Data Retention"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-24T08:20:24+08:00
---

# Anthropic 推出企业前沿防护公测：零数据留存下的自动化安全监控

*Anthropic Launches Enterprise Frontier Safeguards Public Beta: Automated Safety Monitoring with Zero Data Retention*

帖文称 Anthropic 于 2026 年 11 月 23 日面向企业客户开放 Enterprise Frontier Safeguards（EFS）公测。EFS 在保持零数据留存（ZDR）前提下，增加了跨多轮请求的自动化安全监控层，能识别单次请求难以发现的复杂滥用模式（如分布式网络攻击）。监控完全运行在客户自有云存储（S3 / GCS）上，Anthropic 与云厂商均不保留、不访问、不训练客户数据；风险以“安全案例”形式输出，不含输入输出内容。已有超 100 家客户（含四分之一 Fortune 100）参与私测，Bridgewater、Salesforce、Stripe、Cisco、Wells、KPMG 等高管背书。支持 Claude Platform、AWS、Bedrock、Google Cloud，Microsoft Foundry 即将支持。[^anthropic-efs-zdr-public-beta-2026-11-23]

Anthropic announced the public beta of Enterprise Frontier Safeguards (EFS) on November 23, 2026. EFS adds a cross-request automated safety monitoring layer while preserving zero data retention (ZDR), detecting sophisticated multi-step misuse patterns (e.g., distributed cyber operations) that single-request classifiers miss. Monitoring runs entirely on customer-owned cloud storage (S3/GCS); neither Anthropic nor cloud providers retain, access, or train on customer data. Risks surface as “Safety Cases” without inputs/outputs. Over 100 customers (including a quarter of the Fortune 100) participated in private beta, with endorsements from Bridgewater, Salesforce, Stripe, Cisco, Wells, and KPMG executives. Available on Claude Platform, AWS, Bedrock, Google Cloud; Microsoft Foundry support coming soon.[^anthropic-efs-zdr-public-beta-2026-11-23]

## 摘要 / Summary

- 官方称，该机制在零数据留存基础上新增跨请求自动化安全监控，能捕捉单次请求无法识别的复杂滥用（如并行 Agent 分布式攻击）。[^anthropic-efs-zdr-public-beta-2026-11-23]
- EFS adds cross-request automated safety monitoring on top of ZDR, catching sophisticated multi-step misuse (e.g., parallel-agent distributed attacks) invisible to single-request classifiers.[^anthropic-efs-zdr-public-beta-2026-11-23]
- 监控数据全程留在客户自管存储（Amazon S3 / Google Cloud Storage），Anthropic 与云厂商均不保留、不人工访问、不用于训练。[^anthropic-efs-zdr-public-beta-2026-11-23]
- Monitoring data stays entirely in customer-controlled storage (Amazon S3 / Google Cloud Storage); neither Anthropic nor cloud providers retain, human-access, or train on it.[^anthropic-efs-zdr-public-beta-2026-11-23]
- 风险以“安全案例”形式输出，可通过云存储或 API 读取、接入 SIEM，且不包含对话输入输出内容。[^anthropic-efs-zdr-public-beta-2026-11-23]
- Risks are surfaced as Safety Cases readable from cloud storage or API, integrable with SIEM, and exclude conversation inputs/outputs.[^anthropic-efs-zdr-public-beta-2026-11-23]
- 私测阶段已有超 100 家企业参与，含四分之一 Fortune 100 及医疗、金融、法律等强合规行业。[^anthropic-efs-zdr-public-beta-2026-11-23]
- Private beta involved 100+ enterprises, including a quarter of the Fortune 100 and regulated sectors like healthcare, finance, and law.[^anthropic-efs-zdr-public-beta-2026-11-23]
- 该方案已经支持 Claude Platform、Claude Platform on AWS、Amazon Bedrock、Claude on Google Cloud，Microsoft Foundry 即将支持。[^anthropic-efs-zdr-public-beta-2026-11-23]
- Supported on Claude Platform, Claude Platform on AWS, Amazon Bedrock, and Claude on Google Cloud; Microsoft Foundry support coming soon.[^anthropic-efs-zdr-public-beta-2026-11-23]
- 文中写道，Bridgewater、Salesforce、Stripe、Cisco、Wells、KPMG 等企业高管公开背书，强调数据自管与前沿安全并重的平衡。[^anthropic-efs-zdr-public-beta-2026-11-23]
- Executives from Bridgewater, Salesforce, Stripe, Cisco, Wells, and KPMG publicly endorsed EFS, highlighting the balance of data sovereignty and frontier-model safety.[^anthropic-efs-zdr-public-beta-2026-11-23]

## 相关 / Related

- 原文：[链接](https://claude.com/resources/articles/zero-data-retention-with-enterprise-frontier-safeguards)。 / Original: [link](https://claude.com/resources/articles/zero-data-retention-with-enterprise-frontier-safeguards).
- Topic: [机密计算与云端 AI / Confidential computing for cloud AI](../../topics/confidential-computing-cloud-ai.md)
- Topic: [技术滥用关切的连续性 / Continuity of technology-misuse concern](../../topics/tech-misuse-concern-continuity.md)
- Topic: [发模型前本地脱敏 / Local desensitization before sending to models](../../topics/local-desensitization-before-models.md)
- Topic: [网防 Agent Swarm 品类 / Agent swarms for cyber defense](../../topics/agent-swarms-cyber-defense.md)

[^anthropic-efs-zdr-public-beta-2026-11-23]: Anthropic Launches Enterprise Frontier Safeguards Public Beta: Automated Safety Monitoring with Zero Data Retention
