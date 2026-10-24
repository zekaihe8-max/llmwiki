---
type: Source
title: Vox 谈 Ponytail 5
title_en: Vox on Ponytail 5
description: Vox 转述 Ponytail 5：重写后的 skill 会先追问是否需要写代码，以及仓库、标准库、浏览器、操作系统或依赖是否已覆盖——作者基准显示代码更少、更快更省，且有更多带测试的风险逻辑。
description_en: Vox relays Ponytail 5, a rewrite that makes the agent ask whether code is needed and whether the repo, stdlib, browser, OS, or a dependency already covers it before writing—maker-benchmarked as less code, time, and cost with more tested risky logic.
resource: https://x.com/Voxyz_ai/status/2113344640959250912
tags: [agents, skills, ponytail, reuse, minimal-code, claude-code]
sources:
  - id: voxyz-ponytail-5
    resource: https://x.com/Voxyz_ai/status/2113344640959250912
    title: Vox on Ponytail 5
    author: human:Voxyz_ai
generated:
  by: cursor-agent/okf-bilingual
  at: 2026-10-24T20:30:00+08:00
date: 2026-10-22
---

# Vox 谈 Ponytail 5

*Vox on Ponytail 5*

[@Voxyz_ai](https://x.com/Voxyz_ai) 转述 Ponytail 5——对该 skill 的彻底重写：同一句「给前端加一个日期选择器」，不用它写了 335 行，用了只写 10 行，复用仓库的 Input 组件与浏览器日历；在作者的 39 项 Claude Code Opus 5.5 基准中，少写 53% 代码、少花 41% 时间、少花 26% 费用，且 98% 的风险逻辑带测试（不用该 skill 时为 68%）。[^voxyz-ponytail-5] 原文见 <https://x.com/Voxyz_ai/status/2113344640959250912>。

[@Voxyz_ai](https://x.com/Voxyz_ai) relays Ponytail 5, a complete rewrite of the skill: on the same "add a date picker to the frontend" request the agent wrote 335 lines without it and 10 with it, reusing the repo's Input component and the browser calendar, and in the maker's 39-task Claude Code Opus 5.5 benchmark it wrote 53% less code, took 41% less time, cost 26% less, and shipped tests with 98% of risky logic versus 68% without.[^voxyz-ponytail-5] The post is at <https://x.com/Voxyz_ai/status/2113344640959250912>.

## 摘要 / Summary

- 动手写之前，agent 先读改动触及的部分，再按顺序自问并在第一条成立时停下：必须写吗；仓库里是否已有；标准库是否够用；浏览器或操作系统是否已有；已装依赖能否覆盖；能否写成一行；否则写能跑的最小版本，有逻辑则加一个小测试——且不砍输入校验、错误处理、安全或无障碍。[^voxyz-ponytail-5]
- Before writing, the agent reads the parts the change touches, then asks in order and stops at the first that holds: must this be written; is it already in the repo; is the standard library enough; does the browser or OS already have it; can an installed dependency cover it; can it be one line; otherwise write the smallest version that runs, plus one small test if it has logic—without cutting input validation, error handling, security, or accessibility.[^voxyz-ponytail-5]
- `/ponytail-review` 现在也会读改动触及的代码，因此能抓住 diff 之外因重命名而坏掉的文件；在作者测试中它找到了全部 out-of-diff 问题，不用该 skill 时为 78%。`/ponytail-audit` 对整个仓库跑同样检查并排出优先修复项。[^voxyz-ponytail-5]
- `/ponytail-review` now also reads code the change touches, so a rename that breaks a file outside the diff is caught; in the maker's tests it found every out-of-diff problem versus 78% without the skill. `/ponytail-audit` runs the same checks across the repo and ranks what to fix first.[^voxyz-ponytail-5]
- 5.3 在 Claude Code 提示上方增加一条栏，显示任务费用、tokens、耗时、复用了多少已有代码，以及测试是否通过（需 Claude Code 2.1.290 或更高）。[^voxyz-ponytail-5]
- 5.3 adds a bar above the Claude Code prompt for task cost, tokens, duration, how much existing code was reused, and whether tests passed (needs Claude Code 2.1.290 or later).[^voxyz-ponytail-5]
- MIT 许可；通过 Claude Code 或 Codex 中的 DietrichGebert/ponytail marketplace 插件安装，信任其 hooks 后开新线程即可。[^voxyz-ponytail-5]
- MIT licensed; install via the DietrichGebert/ponytail marketplace plugin in Claude Code or Codex, then trust its hooks and start a new thread.[^voxyz-ponytail-5]

## 相关 / Related

- Topic: [Reuse before write](../../topics/reuse-before-write.md)

[^voxyz-ponytail-5]: Vox on Ponytail 5
