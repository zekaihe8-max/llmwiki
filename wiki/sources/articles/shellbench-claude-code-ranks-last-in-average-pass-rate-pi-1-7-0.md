---
type: Source
title: "ShellBench 评测：Claude Code 平均通过率垫底，Pi 1.7.0 删遥测"
title_en: "ShellBench: Claude Code ranks last in average pass rate, Pi 1.7.0 removes telemetry"
description: "OpenClaw 联合 Hugging Face、UC Berkeley 发布 ShellBench，Claude Code 在 12 个模型中平均通过率排最后，Pi 1.7.0 删除安装升级遥测并发布 OSC 7577 会话恢复协议。"
description_en: "OpenClaw, Hugging Face and UC Berkeley release ShellBench; Claude Code ranks last among 12 models in average pass rate, while Pi 1.7.0 removes install/upgrade telemetry and ships the OSC 7577 session recovery protocol."
resource: https://x.com/xiaomovps/status/2126517557754830980
tags: [shellbench, claude-code, ai-benchmark, coding-agent]
sources:
  - id: shellbench-claude-code-last
    resource: https://x.com/xiaomovps/status/2126517557754830980
    title: "ShellBench: Claude Code ranks last in average pass rate, Pi 1.7.0 removes telemetry"
generated:
  by: openrouter/baidu/ernie-5.5-flash-preview:free
  at: 2026-11-28T20:01:17+08:00
---

# ShellBench 评测：Claude Code 平均通过率垫底，Pi 1.7.0 删遥测

*ShellBench: Claude Code ranks last in average pass rate, Pi 1.7.0 removes telemetry*

「帖文称」OpenClaw 联合 Hugging Face、UC Berkeley 发布 ShellBench，从上千万次真实交互中筛出 100 个脏仓库，让 12 个模型在 5 套 Harness 上跑了 5.3 万多次；平均通过率方面，Claude Code 仅 42.87% 排在最后，低于 OpenClaw、Pi、Hermes 和 Codex CLI。Pi 1.7.0 正式版同步发布，删除了安装和升级的遥测代码，并推出终端断点恢复协议 OSC 7577。[^shellbench-claude-code-last]

The post says OpenClaw, together with Hugging Face and UC Berkeley, released ShellBench, selecting 100 dirty repos from tens of millions of real interactions and having 12 models run over 53,000 times on 5 harnesses. Claude Code scored 42.87% average pass rate, ranking last. Pi 1.7.0 stable was also released, removing install/upgrade telemetry and introducing the OSC 7577 terminal breakpoint recovery protocol.[^shellbench-claude-code-last]

## 摘要 / Summary

- OpenClaw 联合 Hugging Face、UC Berkeley 发布 ShellBench，从千万级真实交互中筛出 100 个脏仓库，12 个模型在 5 套 Harness 上跑了 5.3 万多次。[^shellbench-claude-code-last]
- OpenClaw with Hugging Face and UC Berkeley released ShellBench, selecting 100 dirty repos from tens of millions of real interactions; 12 models ran over 53,000 times on 5 harnesses.[^shellbench-claude-code-last]
- 平均通过率：OpenClaw 45.23%、Pi 45.22%、Hermes 45.11%、Codex CLI 45.04%、Claude Code 42.87% 排在最后。[^shellbench-claude-code-last]
- Average pass rates: OpenClaw 45.23%, Pi 45.22%, Hermes 45.11%, Codex CLI 45.04%, Claude Code 42.87% in last place.[^shellbench-claude-code-last]
- 耗时对比：OpenClaw 中位数 2.86 分钟，Pi 仅 1.31 分钟，通过率近似但时间省了一半多。[^shellbench-claude-code-last]
- Time comparison: OpenClaw median 2.86 minutes, Pi only 1.31 minutes; similar pass rates but Pi takes more than half less time.[^shellbench-claude-code-last]
- Pi 1.7.0 正式版删除安装和升级的遥测代码，不保留环境变量和配置开关。[^shellbench-claude-code-last]
- Pi 1.7.0 stable removes install and upgrade telemetry code, leaving no environment variables or config switches.[^shellbench-claude-code-last]
- Pi 1.7.0 还发布终端断点恢复协议 OSC 7577，并修复切思考档位、Copilot 缓存等省钱细节。[^shellbench-claude-code-last]
- Pi 1.7.0 also releases the terminal breakpoint recovery protocol OSC 7577 and fixes cost-saving details such as switching thinking tiers and Copilot cache.[^shellbench-claude-code-last]

## 相关 / Related

- 原文：[链接](https://x.com/xiaomovps/status/2126517557754830980)。 / Original: [link](https://x.com/xiaomovps/status/2126517557754830980).
- Topic: [超越 token 数的 Harness 对比 / Harness comparison beyond tokens](../../topics/harness-comparison-beyond-tokens.md)
- Topic: [社区实测对抗刷分碰瓷 / Community evals vs score hype](../../topics/community-evals-vs-score-hype.md)
- Topic: [Agent 上下文工程 / Context engineering for agents](../../topics/context-engineering-for-agents.md)
- Topic: [编程 Agent 体验与额度 / Coding agent UX vs quota](../../topics/coding-agent-ux-vs-quota.md)

[^shellbench-claude-code-last]: ShellBench: Claude Code ranks last in average pass rate, Pi 1.7.0 removes telemetry
