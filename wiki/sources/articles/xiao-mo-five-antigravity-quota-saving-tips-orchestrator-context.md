---
type: Source
title: "小墨：Antigravity 省额五技巧（Orchestrator、上下文压缩与规则减法）"
title_en: "Xiao Mo: Five Antigravity Quota-Saving Tips (Orchestrator, Context Compression, and Rule Reduction)"
description: "帖文称通过调整 Orchestrator 档位、使用 /compact 等命令、关闭 Turbo 与超额扣费、精简 Rules/Skills 以及分流至 Gemini 网页端，可延长 Google AI Pro 额度。"
description_en: "The post claims that adjusting Orchestrator tiers, using /compact and related commands, disabling Turbo and overage billing, trimming Rules/Skills, and diverting work to Gemini web can extend Google AI Pro quota."
resource: https://x.com/xiaomovps/status/2125972525108830317
tags: [antigravity, google-ai-pro, quota-saving, coding-agent, context-management]
sources:
  - id: d100c329f2157076
    resource: https://x.com/xiaomovps/status/2125972525108830317
    title: "Xiao Mo: Five Antigravity Quota-Saving Tips (Orchestrator, Context Compression, and Rule Reduction)"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-27T08:37:24+08:00
---

# 小墨：Antigravity 省额五技巧（Orchestrator、上下文压缩与规则减法）

*Xiao Mo: Five Antigravity Quota-Saving Tips (Orchestrator, Context Compression, and Rule Reduction)*

「帖文称」小墨同学在 X 上发布五条 Antigravity（AGY）省额技巧：默认开启 Orchestrator 并把日常思考档位设为 Low 或 Medium、只在明确小活上跑 Hydrogen；勤用 /compact、/new 和 /btw 控制上下文；关闭 Turbo 与 AI Credit Overages、少开 /swarm 和 /boost；给 AGENTS.md、GEMINI.md 与 Skills 做减法并配置 .antigravityignore；前期调研放 Gemini 网页端，杂活用 Google Cloud 10 美元赠金。帖文还提醒，周额度只看累计消耗，留一半 5 小时额度无法躲过周限额。[^d100c329f2157076]

The post says Xiao Mo (@xiaomovps) shares five Antigravity quota-saving tips: enable Orchestrator by default and keep daily thinking at Low or Medium, using Hydrogen only for clear small tasks; frequently use /compact, /new, and /btw to manage context; disable Turbo and AI Credit Overages, and avoid /swarm and /boost; trim AGENTS.md, GEMINI.md, and Skills, and configure .antigravityignore; shift early research to Gemini web and use the $10 Google Cloud credit for miscellaneous tasks. It also warns that weekly quota is based on cumulative consumption, and reserving half of the 5-hour quota does not bypass the weekly cap.[^d100c329f2157076]

## 摘要 / Summary

- 帖文称 Orchestrator（规划加 Hydrogen 执行）比单跑 Carbon 省 24% 额度，且速度快 19%。[^d100c329f2157076]
- The post claims Orchestrator (planning plus Hydrogen execution) saves 24% quota versus running Carbon alone and is 19% faster.[^d100c329f2157076]
- 长会话每多一轮都会重发历史，建议做完子任务立即用 /compact 压缩，换任务开 /new，旁支问题用只读分支 /btw。[^d100c329f2157076]
- Long conversations resend history every round; the post recommends compressing with /compact after subtasks, starting /new for new tasks, and using read-only /btw for side questions.[^d100c329f2157076]
- 应关闭 Turbo 与 AI Credit Overages（设为 Never），并避免日常开启 /swarm 和 /boost，以防多 Agent 并行或对抗循环烧光周额度。[^d100c329f2157076]
- Turbo and AI Credit Overages should be turned off (set to Never), and /swarm and /boost should be avoided for daily use to prevent multi-agent parallel or adversarial loops from burning the weekly quota.[^d100c329f2157076]
- AGENTS.md 和 GEMINI.md 每轮都会注入，只保留核心规范，其余放入 .agents/rules 按需触发；根目录加 .antigravityignore 排除 node_modules 和 dist。[^d100c329f2157076]
- AGENTS.md and GEMINI.md are injected every round, so keep only core norms and put the rest in .agents/rules for on-demand triggering; add .antigravityignore in the root to exclude node_modules and dist.[^d100c329f2157076]
- Gemini 网页端、NotebookLM 与 AGY 额度分开计算，前期调研可放网页端，写好 Markdown 后再丢给 AGY；Pro 每月送 10 美元 Google Cloud 赠金可绑定 AI Studio 配合免费版 Hydrogen 处理轻任务。[^d100c329f2157076]
- Gemini web, NotebookLM, and AGY have separate quotas, so early research can be done on the web before sending Markdown to AGY; the Pro plan includes $10 monthly Google Cloud credit, which can be bound to AI Studio with free Hydrogen for light tasks.[^d100c329f2157076]
- 帖文提醒，周上限只看累计消耗，别信留一半 5 小时额度能躲过周限额。[^d100c329f2157076]
- The post reminds that the weekly cap is based on cumulative consumption, and do not believe that reserving half of the 5-hour quota can bypass the weekly limit.[^d100c329f2157076]

## 相关 / Related

- 原文：[链接](https://x.com/xiaomovps/status/2125972525108830317)。 / Original: [link](https://x.com/xiaomovps/status/2125972525108830317).
- Topic: [编程 Agent 省 Token 工具与开销 / Coding-agent token-saving tooling and overhead](../../topics/coding-agent-token-saving-tooling.md)
- Topic: [编程 Agent 体验与额度 / Coding agent UX vs quota](../../topics/coding-agent-ux-vs-quota.md)
- Topic: [项目指令与 Token 效率 / Project instructions and token efficiency](../../topics/agents-md-token-efficiency.md)
- Topic: [Agent 上下文工程 / Context engineering for agents](../../topics/context-engineering-for-agents.md)

[^d100c329f2157076]: Xiao Mo: Five Antigravity Quota-Saving Tips (Orchestrator, Context Compression, and Rule Reduction)
