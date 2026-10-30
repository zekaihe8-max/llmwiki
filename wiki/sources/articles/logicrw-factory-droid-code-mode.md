---
type: Source
title: 思维怪怪谈 Factory Droid 1.0 Code Mode
title_en: Logicrw on Factory Droid 1.0 Code Mode
description: 思维怪怪转述 Droid 1.0 默认采用程序化工具调用、减少模型往返及输入 Token，并报告成本与耗时的不同方向变化，数字未独立核验。
description_en: Logicrw reports Droid 1.0 defaulting to programmatic tool calling to reduce model round trips and input tokens, with cost and elapsed time moving in different directions; the figures are not independently verified.
resource: https://x.com/0xLogicrw/status/2116080352435577057
tags: [agents, harness, code-mode, tokens, evaluation]
sources:
  - id: logicrw-droid-code-mode
    resource: https://x.com/0xLogicrw/status/2116080352435577057
    title: Logicrw on Droid 1.0 Code Mode
    author: human:0xLogicrw
generated:
  by: codex/gpt-6
  at: 2026-10-30T20:56:33+08:00
---

# 思维怪怪谈 Factory Droid 1.0 Code Mode

*Logicrw on Factory Droid 1.0 Code Mode*

## 摘要 / Summary

思维怪怪（@0xLogicrw）称 Factory 的 Coding Agent 运行框架 Droid 1.0 将 Code Mode 设为默认执行方式：模型先编写 JavaScript，再由脚本连续调用数百次工具，以减少中途重新请求模型的次数和 Token 消耗。[^logicrw-droid-code-mode]

Logicrw (@0xLogicrw) reports that Factory’s coding-agent harness Droid 1.0 makes Code Mode the default: the model writes JavaScript that calls hundreds of tools in sequence, reducing intervening model requests and token use.[^logicrw-droid-code-mode]

作者以迁移并核查 151 条 Linear 工单为例：传统方式预计需 36 次模型请求、310 万输入 Token；Code Mode 实际为 2 次请求、约 6.1 万输入 Token，降幅约 98%。作者另转述更广泛测试中 Claude Opus 5.5 任务成本下降约 15%。传统路径是估计值，单例输入 Token 降幅不能当作普遍费用降幅。[^logicrw-droid-code-mode]

For migrating and checking 151 Linear tickets, the author gives an estimated conventional baseline of 36 model requests and 3.1 million input tokens, versus an actual Code Mode run of two requests and about 61,000 input tokens, a roughly 98% reduction. The author also relays about 15% lower task cost with Claude Opus 5.5 in broader testing. The conventional path is an estimate, and the single example’s input-token reduction is not a general cost reduction.[^logicrw-droid-code-mode]

作者称 Factory 还调整了模型专属工具策略、缓存与执行机制；其转述的 Terminal-Bench 4 官方自测在相同 GPT-6.1 Sol 模型下，Droid 比 Codex 高 3.5 分、成功任务成本低 12%，但耗时增加 10%。这些是转述的厂商自测结果，正文未给出完整方法或独立复现；不能单独归因于 Code Mode。[^logicrw-droid-code-mode]

The author says Factory also adjusted model-specific tool strategies, caching, and execution. In the relayed vendor self-test on Terminal-Bench 4 using the same GPT-6.1 Sol model, Droid scores 3.5 points above Codex, costs 12% less per successful task, and takes 10% longer. These are relayed vendor results without full methodology or independent reproduction in the text and cannot be attributed solely to Code Mode.[^logicrw-droid-code-mode]

作者将 Code Mode 描述为已有路线，称 Cloudflare 于 2025 年 9 月提出、Anthropic 随后采用类似机制，DeepSeek Harness、Pi 与 OpenCode 2.0 也陆续支持。此处保留为作者的技术沿革转述。嵌入的 Factory 发布文案宣称更准确、更高效、更快，未在抓取正文中补充上述测试方法。[^logicrw-droid-code-mode]

The author describes Code Mode as an existing approach, saying Cloudflare proposed it in September 2025, Anthropic later used a similar mechanism, and DeepSeek Harness, Pi, and OpenCode 2.0 subsequently added support. This is retained as the author’s account of its history. The embedded Factory announcement claims greater accuracy, efficiency, and speed without supplying the test methodology above in the fetched text.[^logicrw-droid-code-mode]

## 相关 / Related

- 原文：[思维怪怪谈 Droid Code Mode](https://x.com/0xLogicrw/status/2116080352435577057)。 / Original: [Logicrw on Droid Code Mode](https://x.com/0xLogicrw/status/2116080352435577057).
- [超越 token 数的 Harness 对比 / Harness comparison beyond tokens](../../topics/harness-comparison-beyond-tokens.md)
- [Ding 赞赏 Factory Droid 1.0 页面 / Ding praises the Factory Droid 1.0 page](./dingyi-droid-one-page-praise.md)

[^logicrw-droid-code-mode]: Logicrw on Droid 1.0 Code Mode
