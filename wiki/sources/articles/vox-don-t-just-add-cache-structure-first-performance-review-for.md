---
type: Source
title: "Vox：别让 Claude Code 只会加缓存，性能评审要结构先行"
title_en: "Vox: Don't just add cache; structure-first performance review for Claude Code"
description: "Voxyz_ai 转发 Jarred Sumner 关于给 Claude Code 做性能优化的提示词，强调先分析剖析、再按结构对症下药，避免盲目加缓存。"
description_en: "Voxyz_ai reposts Jarred Sumner's prompt for performance optimization with Claude Code, emphasizing profiling first and structure-matched fixes over blindly adding caches."
resource: https://x.com/Voxyz_ai/status/2117342228767281487
tags: [claude-code, performance, coding-agent, data-oriented-design]
sources:
  - id: voxyz-ai-claude-code-perf-review
    resource: https://x.com/Voxyz_ai/status/2117342228767281487
    title: "Vox: Don't just add cache; structure-first performance review for Claude Code"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-03T08:09:18+08:00
---

# Vox：别让 Claude Code 只会加缓存，性能评审要结构先行

*Vox: Don't just add cache; structure-first performance review for Claude Code*

「帖文称」Voxyz_ai（@Voxyz_ai）转发了 Jarred Sumner 的观点：让 Claude Code 做性能评审时，不要默认“加缓存”，而应先运行性能剖析找出五个最慢的位置，再按是否命中缓存、哈希表热循环、字段访问模式、独立 await 等情况对应优化方案，最后输出报告而不立即改代码。[^voxyz-ai-claude-code-perf-review]

The post says Voxyz_ai (@Voxyz_ai) reposted Jarred Sumner's view: when asking Claude Code to do a performance review, don't default to "add cache"; instead, run a profiler first to find the five slowest spots, then match each to cases such as caching, hot hash-table loops, field-access patterns, or independent awaits, and deliver a report before changing any code.[^voxyz-ai-claude-code-perf-review]

## 摘要 / Summary

- Voxyz_ai 在 X 上发布帖文，转发了 Jarred Sumner 关于给 Claude Code 进行性能优化的提示词。 / Voxyz_ai posted on X, reposting Jarred Sumner's prompt for performance optimization with Claude Code.[^voxyz-ai-claude-code-perf-review]
- 建议先运行性能剖析，找出 5 个最慢位置及各自耗时，再逐一匹配优化情形。 / Advises running a profiler first to identify the five slowest spots and their time costs, then matching each to an optimization scenario.[^voxyz-ai-claude-code-perf-review]
- 提到“缓存是慢设计的掩饰”，不应盲目增加缓存，而应先审视现有缓存是否在掩盖设计问题。 / Mentions that "caching is cope for a slow design," and caches should not be added blindly; existing caches hiding slow design should be flagged.[^voxyz-ai-claude-code-perf-review]
- 列举了可替换哈希表为平面数组、AoS 转 SoA、并行运行独立 await、面向数据的设计重写等具体优化路径。 / Lists concrete optimization paths such as replacing hash tables with flat arrays, AoS to SoA, running independent awaits in parallel, and data-oriented rewrites.[^voxyz-ai-claude-code-perf-review]
- 要求先给出报告，包含当前耗时、匹配情形、文件行号和预期提速，不要立即修改代码。 / Requires a report first, including current time, matched scenario, file and lines, and expected speedup, without changing code immediately.[^voxyz-ai-claude-code-perf-review]

## 相关 / Related

- 原文：[链接](https://x.com/Voxyz_ai/status/2117342228767281487)。 / Original: [link](https://x.com/Voxyz_ai/status/2117342228767281487).
- Topic: [Claude Code 作者与社区话筒 / Claude Code authorship and community voice](../../topics/claude-code-authorship-and-voice.md)
- Topic: [项目指令与 Token 效率 / Project instructions and token efficiency](../../topics/agents-md-token-efficiency.md)
- Topic: [编程 Agent 省 Token 工具与开销 / Coding-agent token-saving tooling and overhead](../../topics/coding-agent-token-saving-tooling.md)
- Topic: [Agent 上下文工程 / Context engineering for agents](../../topics/context-engineering-for-agents.md)

[^voxyz-ai-claude-code-perf-review]: Vox: Don't just add cache; structure-first performance review for Claude Code
