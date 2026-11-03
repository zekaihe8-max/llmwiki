---
type: Source
title: "无状态沙箱不是正确基准：Agent 需随身携带工作空间"
title_en: "Stateless sandboxes are the wrong benchmark; agents need their workspace with them"
description: "Vercel 联合创始人称无状态沙箱不是 Agent 的正确基准，强调工作空间应随身携带，并发布带 Drives 的沙箱启动更快。"
description_en: "Vercel's co-founder says stateless sandboxes are the wrong benchmark for agents, emphasizing that workspaces should travel with agents, and announces faster sandbox creation with Drives."
resource: https://x.com/rauchg/status/2117338179535810957
tags: [agents, vercel, sandboxes, cloud-infrastructure]
sources:
  - id: rauchg-stateless-sandboxes-wrong-benchmark
    resource: https://x.com/rauchg/status/2117338179535810957
    title: "Stateless sandboxes are the wrong benchmark; agents need their workspace with them"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-03T08:04:58+08:00
---

# 无状态沙箱不是正确基准：Agent 需随身携带工作空间

*Stateless sandboxes are the wrong benchmark; agents need their workspace with them*

「帖文称」无状态沙箱是错误的基准，Agent 只有随身携带工作空间（身份、技能、仓库、记忆等）才有用；Vercel 沙箱团队在延迟、吞吐、可靠性与安全方面交付了 SLO，并在 19 个全球区域部署集群，每周新增功能并保持双位数百分比增长；带 Drives 的 Vercel 沙箱启动快 2.4 倍，中位数创建时间从 1.7 秒降至 0.7 秒，p95 从 2.2 秒降至 1.6 秒，无需 SDK 升级或配置变更。[^rauchg-stateless-sandboxes-wrong-benchmark]

The post states that stateless sandboxes are the wrong benchmark and agents are only useful if they carry their workspace with them (identity, skills, repos, memories). Vercel's Sandbox team has met latency and throughput SLOs while prioritizing reliability and security, shipping clusters in 19 global regions with weekly features and double-digit weekly customer demand growth. Vercel Sandboxes with Drives start 2.4x faster, with median creation dropping from 1.7s to 0.7s and p95 from 2.2s to 1.6s, requiring no SDK upgrade or config changes.[^rauchg-stateless-sandboxes-wrong-benchmark]

## 摘要 / Summary

- 「帖文称」无状态沙箱是错误的基准，Agent 需随身携带身份、技能、仓库与记忆等工作空间。 / Stateless sandboxes are called the wrong benchmark; agents need their workspace with them (identity, skills, repos, memories).[^rauchg-stateless-sandboxes-wrong-benchmark]
- Vercel 沙箱团队在延迟与吞吐 SLO 上交付，并优先保障可靠性与安全。 / Vercel Sandbox team delivers latency and throughput SLOs while prioritizing reliability and security.[^rauchg-stateless-sandboxes-wrong-benchmark]
- 集群已部署至 19 个全球区域，每周发布新功能，客户需求每周双位数百分比增长。 / Clusters ship in 19 global regions, with new features weekly and double-digit weekly customer demand growth.[^rauchg-stateless-sandboxes-wrong-benchmark]
- 带 Drives 的 Vercel 沙箱启动快 2.4 倍，中位数创建时间从 1.7 秒降至 0.7 秒。 / Vercel Sandboxes with Drives start 2.4x faster; median creation drops from 1.7s to 0.7s.[^rauchg-stateless-sandboxes-wrong-benchmark]
- p95 创建时间从 2.2 秒降至 1.6 秒，无需 SDK 升级或配置变更。 / p95 creation drops from 2.2s to 1.6s; no SDK upgrade or config changes needed.[^rauchg-stateless-sandboxes-wrong-benchmark]

## 相关 / Related

- 原文：[链接](https://x.com/rauchg/status/2117338179535810957)。 / Original: [link](https://x.com/rauchg/status/2117338179535810957).
- Topic: [智能体算力与治理 / Agent compute and governance](../../topics/agent-compute-and-governance.md)
- Topic: [Agent 身份与平台握钥 / Agent identity and platform-held keys](../../topics/agent-identity-platform-keys.md)
- Topic: [个人 Agent 云环境的备份、隔离与定时检查 / Personal-agent cloud env: backup, isolation, and schedule checks](../../topics/personal-agent-cloud-env-pitfalls.md)
- Topic: [多智能体四道基建题 / Four infra gaps for large multiagent systems](../../topics/multiagent-infra-four-problems.md)

[^rauchg-stateless-sandboxes-wrong-benchmark]: Stateless sandboxes are the wrong benchmark; agents need their workspace with them
