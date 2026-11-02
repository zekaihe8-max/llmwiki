---
type: Source
title: "OpenRouter 可验证 AI 代码审查"
title_en: "OpenRouter Verifiable AI Code Review"
description: "OpenRouter 发布基于 Responses API 的可验证 AI 代码审查脚本，通过沙箱复现与补丁验证将审查发现标记为 confirmed 或 unconfirmed。"
description_en: "OpenRouter releases a verifiable AI code review script based on the Responses API, marking findings confirmed or unconfirmed via sandbox reproduction and patch verification."
resource: https://x.com/shao__meng/status/2117071027784056947
tags: [openrouter, ai-code-review, agents, sandbox, verified-review]
sources:
  - id: openrouter-verifiable-code-review
    resource: https://x.com/shao__meng/status/2117071027784056947
    title: "OpenRouter Verifiable AI Code Review"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-02T20:17:21+08:00
---

# OpenRouter 可验证 AI 代码审查

*OpenRouter Verifiable AI Code Review*

帖文称，OpenRouter 提供一份 233 行、仅使用标准库的 Python 脚本 review.py：上传变更文件、测试与 diff，在托管 Linux 沙箱中复现问题，再以 V4A patch 提交修复；每条 finding 标记为 confirmed（附命令与输出）或 unconfirmed。五个 bug 样例上，审查约需 1–4 分钟、约 $0.015–$0.045，可接入 pre-push 或 GitHub Actions，--block-at 默认 high，不达标则 exit 1 拦截推送。[^openrouter-verifiable-code-review]

The post says OpenRouter provides a 233-line Python script, review.py, using only the standard library: it uploads changed files, tests, and diffs, reproduces issues in a hosted Linux sandbox, then submits fixes via V4A patch; each finding is marked confirmed (with commands and output) or unconfirmed. On five bug samples, review takes about 1–4 minutes and costs roughly $0.015–$0.045; it can hook into pre-push or GitHub Actions, with --block-at defaulting to high and exiting 1 to block pushes when thresholds are not met.[^openrouter-verifiable-code-review]

## 摘要 / Summary

- 脚本调用 Files API 上传完整变更文件与上下文，避免仅看 hunk 导致 import/类型推断错误。 / The script calls the Files API to upload full changed files and context, avoiding import/type guesswork from hunks alone.[^openrouter-verifiable-code-review]
- 使用 openrouter:shell 将文件拷入容器家目录并运行 Python/SQLite，再用 openrouter:apply_patch 打补丁，平台先校验 diff 语法。 / It uses openrouter:shell to copy files into a container home directory and run Python/SQLite, then openrouter:apply_patch to apply patches, with the platform validating diff syntax first.[^openrouter-verifiable-code-review]
- 模型在沙箱中检查原代码，补丁先打在本机临时副本，--apply 才写回工作树，之后仍需人工跑测试。 / The model inspects original code in the sandbox; patches are first applied to a local temporary copy, and --apply writes back to the working tree, after which tests still need to be run manually.[^openrouter-verifiable-code-review]
- 三次复跑中，Sonnet 5.5 五 bug 全中且三次补丁均过自测，约 $0.0447 / 60s；Haiku 5.5 约 $0.0153 / 125s，召回高但仅一次修全五 bug。 / Across three reruns, Sonnet 5.5 caught all five bugs and passed self-tests with all three patches at about $0.0447 per 60s; Haiku 5.5 cost about $0.0153 per 125s, had high recall but fixed all five bugs in only one of three runs.[^openrouter-verifiable-code-review]
- 账单包含模型 token 与沙箱费 $0.0001/秒，相对只塞 diff 的 Chat Completions 贵约 10–40 倍，但可提供可复现证据；沙箱默认无外网，单次最多约 20 个文件 ID，工具仍为 beta 且仅全球端点。 / Billing includes model tokens plus sandbox fees at $0.0001 per second, roughly 10–40x more than Chat Completions that only send diffs, in exchange for reproducible evidence; sandboxes default to no external network, up to about 20 file IDs per run, and the tools remain beta on the global endpoint only.[^openrouter-verifiable-code-review]

## 相关 / Related

- 原文：[链接](https://x.com/shao__meng/status/2117071027784056947)。 / Original: [link](https://x.com/shao__meng/status/2117071027784056947).
- Topic: [智能体自动模式 / Agent auto mode](../../topics/agent-auto-mode.md)
- Topic: [编程 Agent 省 Token 工具与开销 / Coding-agent token-saving tooling and overhead](../../topics/coding-agent-token-saving-tooling.md)
- Topic: [智能体规模化工程 / Agent-scaled engineering](../../topics/agent-scaled-engineering.md)
- Topic: [智能体算力与治理 / Agent compute and governance](../../topics/agent-compute-and-governance.md)

[^openrouter-verifiable-code-review]: OpenRouter Verifiable AI Code Review
