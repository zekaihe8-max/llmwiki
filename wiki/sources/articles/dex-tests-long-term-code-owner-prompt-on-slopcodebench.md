---
type: Source
title: "dex：在 SlopCodeBench 上测试“长期代码主人”提示词"
title_en: "dex Tests \"Long-Term Code Owner\" Prompt on SlopCodeBench"
description: "帖文称在 SlopCodeBench 上加入“长期代码主人”提示词后，Token 用量翻倍，电路评测通过率提升，但每通过成本持平。"
description_en: "The post says adding the \"long-term code owner\" prompt on SlopCodeBench doubles token usage and improves circuit eval pass rate, while cost per pass stays flat."
resource: https://x.com/dexhorthy/status/2122136000067723334
tags: [dexhorthy, prompt-engineering, ai-eval, token-cost, slopcodebench]
sources:
  - id: 65af4650e633a0a2
    resource: https://x.com/dexhorthy/status/2122136000067723334
    title: "dex Tests \"Long-Term Code Owner\" Prompt on SlopCodeBench"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-17T08:28:27+08:00
---

# dex：在 SlopCodeBench 上测试“长期代码主人”提示词

*dex Tests "Long-Term Code Owner" Prompt on SlopCodeBench*

这是来自 X 用户 dexhorthy（@dexhorthy）于 2026 年 11 月 16 日发布的帖文。帖文称，其正在运行 fable 5.2 在 slopcodebench 上，进度约 10%，并对比了两种提示词：标准“直接解决”提示词，以及同款提示词加入 Anthropic 推荐的“你是这套代码的长期主人”补充。帖文称，后者使每任务 Token 数翻倍，在 circuit_eval 上从默认提示词的 50% 通过率提升至全通过；每任务成本大幅上升，但每通过成本在两者间大致相同。帖文还称，“你拥有这个提示词”会促使模型编写更多正式测试，而不加该提示词时模型过去更多使用临时脚本等方式进行测试。[^65af4650e633a0a2]

This is an X post by user dexhorthy (@dexhorthy) published on November 16, 2026. The post says the author is running fable 5.2 on slopcodebench, about 10% complete, and comparing two prompts: a standard "just solve" prompt and the same prompt with Anthropic's recommended "you are the long term owner of this codebase" addendum. The post says the latter doubles tokens per task, raising circuit_eval pass rate from 50% with the default prompt to a full pass; cost per task is much higher, but cost per pass is about the same across both. The post also says "you own this prompt" leads models to write more formal tests, while without it models have previously used more ad-hoc scripts for testing.[^65af4650e633a0a2]

## 摘要 / Summary

- 帖文称，运行 fable 5.2 在 slopcodebench 上仅完成约 10%。[^65af4650e633a0a2]
- The post says fable 5.2 on slopcodebench is only about 10% complete.[^65af4650e633a0a2]
- 对比两种提示词：标准“直接解决”提示词，与同款提示词加入 Anthropic 推荐的“你是这套代码的长期主人”补充。[^65af4650e633a0a2]
- Compares two prompts: standard "just solve" vs same prompt plus Anthropic's recommended "you are the long term owner of this codebase" addendum.[^65af4650e633a0a2]
- 帖文称，“长期主人”提示词使每任务 Token 数量翻倍，电路评测（circuit_eval）通过率从默认提示词的 50% 提升至全通过。[^65af4650e633a0a2]
- The post says the owner prompt doubles tokens per task and raises circuit_eval pass rate from 50% to full pass.[^65af4650e633a0a2]
- 每任务成本显著升高，但每通过成本（cost per pass）在两种提示词间大致相同。[^65af4650e633a0a2]
- Cost per task is much higher, but cost per pass is about the same across both prompts.[^65af4650e633a0a2]
- 帖文称，“你拥有这个提示词”会导致模型编写更多正式测试，而不使用时模型过去曾更多采用临时脚本等方式测试。[^65af4650e633a0a2]
- The post says "you own this prompt" leads to more formal tests, whereas without it models have used more ad-hoc scripts for testing.[^65af4650e633a0a2]

## 相关 / Related

- 原文：[链接](https://x.com/dexhorthy/status/2122136000067723334)。 / Original: [link](https://x.com/dexhorthy/status/2122136000067723334).
- Topic: [项目指令与 Token 效率 / Project instructions and token efficiency](../../topics/agents-md-token-efficiency.md)
- Topic: [AI 评测入口与干活记录 / AI-eval gateways and work-record streams](../../topics/ai-eval-work-record-gateway.md)
- Topic: [编程 Agent 省 Token 工具与开销 / Coding-agent token-saving tooling and overhead](../../topics/coding-agent-token-saving-tooling.md)
- Topic: [Agent 上下文工程 / Context engineering for agents](../../topics/context-engineering-for-agents.md)

[^65af4650e633a0a2]: dex Tests "Long-Term Code Owner" Prompt on SlopCodeBench
