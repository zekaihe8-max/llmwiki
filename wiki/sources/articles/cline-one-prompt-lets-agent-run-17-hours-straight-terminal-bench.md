---
type: Source
title: "Cline 一条提示词让 agent 连跑 17 小时，Terminal-Bench 从 77.5% 到 88.8%"
title_en: "Cline: One Prompt Lets Agent Run 17 Hours Straight, Terminal-Bench from 77.5% to 88.8%"
description: "Cline 创始工程师 Ara Khan 让 GPT-5.6 Sol 作为元智能体，用一条递归自我改进提示词自主优化 Cline harness，Terminal-Bench 2.1 分数从 77.5% 提升至 88.8%，成本从 79 美元降至 49.8 美元。"
description_en: "Cline founding engineer Ara Khan used GPT-5.6 Sol as a meta-agent with a recursive self-improvement prompt to autonomously optimize the Cline harness, lifting Terminal-Bench 2.1 from 77.5% to 88.8% while cutting cost from $79 to $49.8."
resource: https://x.com/FinanceYF5/status/2121777748582773212
tags: [cline, agent-harness, recursive-self-improvement, terminal-bench, coding-agent]
sources:
  - id: financeyf5-cline-agent-17-hours-terminal-bench
    resource: https://x.com/FinanceYF5/status/2121777748582773212
    title: "Cline: One Prompt Lets Agent Run 17 Hours Straight, Terminal-Bench from 77.5% to 88.8%"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-15T20:20:25+08:00
---

# Cline 一条提示词让 agent 连跑 17 小时，Terminal-Bench 从 77.5% 到 88.8%

*Cline: One Prompt Lets Agent Run 17 Hours Straight, Terminal-Bench from 77.5% to 88.8%*

帖文称，Cline 创始工程师 Ara Khan 在 AIE CODE 2026 直播中披露，他让 GPT-5.6 Sol 当主 agent，用一条递归自我改进提示词自主改写 Cline 的评测 harness，Kimi K3 在 89 个并行沙箱中跑 Terminal-Bench 2.1，循环连续运行 17 小时，分数从基线 77.5%（69/89）爬升至最好 79/89（88.8%），单次评测花费从 79 美元降至 49.8 美元；人工仅每隔几小时查看一次，最终 PR 由人逐行审阅合并。[^financeyf5-cline-agent-17-hours-terminal-bench]

The post says Cline founding engineer Ara Khan revealed at AIE CODE 2026 that he let GPT-5.6 Sol act as the main agent, using a recursive self-improvement prompt to autonomously rewrite Cline's evaluation harness, with Kimi K3 running Terminal-Bench 2.1 across 89 parallel sandboxes; the loop ran continuously for 17 hours, with scores climbing from baseline 77.5% (69/89) to best 79/89 (88.8%), and single-evaluation cost dropping from $79 to $49.8; humans checked in only every few hours, and the final PR was reviewed line by line before merging.[^financeyf5-cline-agent-17-hours-terminal-bench]

## 摘要 / Summary

- Ara Khan 是 Cline 创始工程师，在 AIE CODE 2026 直播中介绍，GPT-5.6 Sol 作为元智能体，用一条递归自我改进提示词自主优化 Cline harness，Terminal-Bench 2.1 分数从基线 77.5%（69/89）提升至最好 79/89（88.8%），单次评测成本从 79 美元降至 49.8 美元。[^financeyf5-cline-agent-17-hours-terminal-bench]
- Ara Khan, founding engineer of Cline, introduced at AIE CODE 2026 that GPT-5.6 Sol acted as a meta-agent using a recursive self-improvement prompt to autonomously optimize the Cline harness, lifting Terminal-Bench 2.1 from baseline 77.5% (69/89) to best 79/89 (88.8%), while single-evaluation cost dropped from $79 to $49.8.[^financeyf5-cline-agent-17-hours-terminal-bench]
- 该自主循环在云端虚拟机上连续运行 17 小时，人工仅每隔几小时查看一次，Kimi K3 在 89 个并行沙箱中作为被测模型作答。[^financeyf5-cline-agent-17-hours-terminal-bench]
- The autonomous loop ran continuously for 17 hours on a cloud VM, with humans checking only every few hours, while Kimi K3 answered in 89 parallel sandboxes as the tested model.[^financeyf5-cline-agent-17-hours-terminal-bench]
- Agent 修复的具体问题包括：OpenRouter 429 限流加重试使 5 道题翻盘、循环检测误杀改为看输出变化使 2 道题翻盘、@ 片段触发的文件索引挂在异步线程导致 7.6 秒退出、pkill 按名误杀自身 harness 改为按进程号清理使 2 道题翻盘。[^financeyf5-cline-agent-17-hours-terminal-bench]
- Specific fixes included: adding retries for OpenRouter 429 rate limits rescued 5 questions; changing loop detection to watch output changes instead of repeated commands rescued 2 questions; fixing a file-index lookup hanging on an async thread resolved a 7.6-second exit; changing pkill from name-based to PID-based cleanup rescued 2 questions.[^financeyf5-cline-agent-17-hours-terminal-bench]
- 整个实验约使用 10 亿 token（约 4 亿给编码 agent，约 6 亿给反复评测），总花费约 680 美元；最终 PR（#12465）由人逐行审阅后合并，提示词禁止修改评分程序、按题名识别或延长超时。[^financeyf5-cline-agent-17-hours-terminal-bench]
- The experiment used roughly 1 billion tokens (about 400M for the coding agent, 600M for repeated evaluations), costing about $680 total; final PR #12465 was reviewed line by line by humans before merging, and the prompt forbade modifying scoring programs, identifying by question name, or extending timeouts.[^financeyf5-cline-agent-17-hours-terminal-bench]
- Ara 还把同样的方法用于一块送女朋友的小芯片，让 agent 一夜之间自动调优固件、工具调用、推理模型和语音转文字模型，降低端到端延迟。[^financeyf5-cline-agent-17-hours-terminal-bench]
- Ara also applied the same method to a small chip gift for his girlfriend, letting the agent automatically tune firmware, tool calls, inference models, and speech-to-text models overnight to reduce end-to-end latency.[^financeyf5-cline-agent-17-hours-terminal-bench]

## 相关 / Related

- 原文：[链接](https://x.com/FinanceYF5/status/2121777748582773212)。 / Original: [link](https://x.com/FinanceYF5/status/2121777748582773212).
- Topic: [公司级 Agent Harness 五原语 / Company agent harness — five primitives](../../topics/company-agent-harness.md)
- Topic: [智能体自动模式 / Agent auto mode](../../topics/agent-auto-mode.md)
- Topic: [智能体规模化工程 / Agent-scaled engineering](../../topics/agent-scaled-engineering.md)
- Topic: [AI 评测入口与干活记录 / AI-eval gateways and work-record streams](../../topics/ai-eval-work-record-gateway.md)

[^financeyf5-cline-agent-17-hours-terminal-bench]: Cline: One Prompt Lets Agent Run 17 Hours Straight, Terminal-Bench from 77.5% to 88.8%
