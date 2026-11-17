---
type: Source
title: "已有 Claude Code 和 Codex，企业为何仍需自建 Agent Harness"
title_en: "With Claude Code and Codex, why do enterprises still build custom Agent Harness?"
description: "模型负责推理生成，Harness 负责把模型接入实际工作；企业应基于现成工具覆盖不了的具体约束决定是否定制，而非默认重写框架。"
description_en: "Models handle reasoning and generation while Harness connects them to real work; enterprises should decide whether to customize based on specific constraints existing tools cannot cover, rather than defaulting to rewriting frameworks."
resource: https://x.com/shao__meng/status/2122492485872308640
tags: [agents, harness, enterprise, claude-code]
sources:
  - id: shao-meng-agent-harness-enterprise
    resource: https://x.com/shao__meng/status/2122492485872308640
    title: "With Claude Code and Codex, why do enterprises still build custom Agent Harness?"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-17T20:01:05+08:00
---

# 已有 Claude Code 和 Codex，企业为何仍需自建 Agent Harness

*With Claude Code and Codex, why do enterprises still build custom Agent Harness?*

帖文称，Reddit 上有热门讨论质疑：既然已有 Claude Code 和 Codex，企业为何还要招聘 Harness Engineer、自建 Agent Harness，是否在重复造轮子。作者指出，模型负责推理和生成，而 Harness 负责把模型接进实际工作，管理上下文、执行工具、保存状态、处理失败与重试，并决定何时停止或需要人工批准。Claude Code 本身已包含面向编程的运行框架，并非裸模型。自建 Harness 未必是复制聊天界面或代码编辑器，也可能是为特定任务设计更合适的执行循环、工具接口和控制规则。[^shao-meng-agent-harness-enterprise]

The post cites a popular Reddit discussion questioning why enterprises still hire Harness Engineers or build custom Agent Harness when Claude Code and Codex already exist, asking if this is reinventing the wheel. The author argues that models handle reasoning and generation, while Harness connects models to actual work—managing context, executing tools, saving state, handling failures and retries, and deciding when to stop or require human approval. Claude Code itself includes a programming-oriented runtime framework and is not a 'naked model.' Building a custom Harness may not mean replicating a chat interface or code editor, but designing more suitable execution loops, tool interfaces, and control rules for specific tasks.[^shao-meng-agent-harness-enterprise]

## 摘要 / Summary

- Harness 管理上下文、提供并执行工具、保存运行状态、处理失败和重试，并决定何时停止或需要人工批准；Claude Code 本身已包含面向编程的运行框架。[^shao-meng-agent-harness-enterprise]
- Harness manages context, provides and executes tools, saves runtime state, handles failures and retries, and decides when to stop or require human approval; Claude Code itself already includes a programming-oriented runtime framework.[^shao-meng-agent-harness-enterprise]
- 把规则写进 CLAUDE.md 只是告诉模型应该怎么做，真正可靠的限制需要工具或权限系统拒绝未经批准的操作。[^shao-meng-agent-harness-enterprise]
- Writing rules into CLAUDE.md only tells the model what it should do; truly reliable restrictions require tools or permission systems to reject unauthorized operations.[^shao-meng-agent-harness-enterprise]
- 费用预算、数据访问范围和审计记录不能只依赖模型记住要求；Claude Code 自身也有权限控制，企业需判断现成机制是否覆盖自身要求。[^shao-meng-agent-harness-enterprise]
- Cost budgets, data access scope, and audit records cannot rely solely on the model remembering requirements; Claude Code itself also has permission controls, and enterprises must judge whether existing mechanisms cover their own needs.[^shao-meng-agent-harness-enterprise]
- 处理测试输出时可先截取与失败有关的信息，避免把整份冗长日志交给模型，从而减少上下文占用和费用。[^shao-meng-agent-harness-enterprise]
- When processing test output, only failure-related information can be extracted before sending it to the model, avoiding entire long logs and reducing context usage and cost.[^shao-meng-agent-harness-enterprise]
- 企业是否需要自建 Harness 应从现成工具覆盖不了的具体约束出发；能通过配置、扩展工具和接入内部流程解决就不必重写整套框架。[^shao-meng-agent-harness-enterprise]
- Whether an enterprise needs to build a custom Harness should start from specific constraints that existing tools cannot cover; if solvable via configuration, tool extensions, and internal process integration, there is no need to rewrite the entire framework.[^shao-meng-agent-harness-enterprise]

## 相关 / Related

- 原文：[链接](https://x.com/shao__meng/status/2122492485872308640)。 / Original: [link](https://x.com/shao__meng/status/2122492485872308640).
- Topic: [公司级 Agent Harness 五原语 / Company agent harness — five primitives](../../topics/company-agent-harness.md)
- Topic: [超越 token 数的 Harness 对比 / Harness comparison beyond tokens](../../topics/harness-comparison-beyond-tokens.md)
- Topic: [智能体算力与治理 / Agent compute and governance](../../topics/agent-compute-and-governance.md)
- Topic: [项目指令与 Token 效率 / Project instructions and token efficiency](../../topics/agents-md-token-efficiency.md)

[^shao-meng-agent-harness-enterprise]: With Claude Code and Codex, why do enterprises still build custom Agent Harness?
