---
type: Topic
title: 项目指令与 Token 效率
title_en: Project instructions and token efficiency
description: Agent harness 可通过 AGENTS.md / CLAUDE.md 等项目指令约束执行方式以减少无效 Token：避免双文件重复入 Context，写执行规则而非人设，并把重流程拆成按需 Skills。
description_en: Agent harnesses can cut wasted tokens via project instructions such as AGENTS.md / CLAUDE.md—avoid dual-file double-loading into Context, write execution rules not personas, and split heavy flows into on-demand Skills.
tags: [agents, agents-md, claude-md, tokens, harness, skills]
sources:
  - id: xiaomovps-dsh-agents-md-tokens
    resource: https://x.com/xiaomovps/status/2113950309278167104
    title: 小墨 on DSH AGENTS.md / CLAUDE.md token tips
generated:
  by: cursor-agent/composer
  at: 2026-10-24T21:15:00+08:00
---

# 项目指令与 Token 效率

*Project instructions and token efficiency*

Harness 不只靠默认系统提示：把项目级指令（如 `AGENTS.md`、`CLAUDE.md`）写成可执行的工作约束，并避免同一目录多份不同内容同时进 Context，就能少耗无效 Token；重流程应拆成按需 Skills，而不是每轮塞满说明。[^xiaomovps-dsh-agents-md-tokens]

A harness is not only its default system prompt: writing project-level instructions (such as `AGENTS.md` and `CLAUDE.md`) as executable work constraints—and avoiding multiple differing same-dir copies all entering Context—cuts wasted tokens; heavy flows belong in on-demand Skills, not in every-turn full instructions.[^xiaomovps-dsh-agents-md-tokens]

## 综合分析 / Synthesis

[小墨谈 DSH 用 AGENTS.md / CLAUDE.md 省 token](../sources/articles/xiaomovps-dsh-agents-md-tokens.md) 以 DeepSeek Harness（DSH）为例：工具会读全局 `~/.dsh/AGENTS.md`、项目与子目录下的 `AGENTS.md` / `CLAUDE.md`；同目录两文件内容不同可能双载，相同才去重，故宜以 `AGENTS.md` 为主、`CLAUDE.md` 复用。规则应写「直接执行、少扫仓、控改动范围、验证即停、报错先分析」，而非堆角色设定；部署 / Review / 测试等复杂流程拆 Skills 按需加载，再配极简模式，可把 DSH 往 Pi 式简洁靠拢。[^xiaomovps-dsh-agents-md-tokens] 原文 <https://x.com/xiaomovps/status/2113950309278167104>。

[Xiaomo on saving tokens in DSH with AGENTS.md / CLAUDE.md](../sources/articles/xiaomovps-dsh-agents-md-tokens.md) uses DeepSeek Harness (DSH) as the case: the tool reads global `~/.dsh/AGENTS.md` plus project and subdirectory `AGENTS.md` / `CLAUDE.md`; differing same-dir files may both load and identical ones dedupe, so keep `AGENTS.md` primary and reuse it in `CLAUDE.md`. Rules should say execute directly, avoid empty repo scans, scope edits, stop when verified, and analyze errors before retry—not pile on personas; split deploy / Review / test into Skills loaded on demand, and with minimal mode push DSH toward Pi-like cleanliness.[^xiaomovps-dsh-agents-md-tokens] Original at <https://x.com/xiaomovps/status/2113950309278167104>.

同作者在 [超越 token 数的 Harness 对比](./harness-comparison-beyond-tokens.md) 里用轮次与缓存说明 DSH 可能因反复截图自检拉长跑法；本页是对应的指令侧补丁——用项目规则关掉那类无效循环，而不是只改对比指标。

The same author’s [Harness comparison beyond tokens](./harness-comparison-beyond-tokens.md) shows DSH runs can inflate via repeated screenshot self-checks; this page is the instruction-side patch—use project rules to kill that waste, not only change comparison metrics.

## 矛盾与变化 / Contradictions

暂无。 / None yet.

## 相关 / Related

- Source: [小墨谈 DSH 用 AGENTS.md / CLAUDE.md 省 token](../sources/articles/xiaomovps-dsh-agents-md-tokens.md)
- Topic: [超越 token 数的 Harness 对比](./harness-comparison-beyond-tokens.md)
- Topic: [Agent Skill 编写](./agent-skill-authoring.md)
- Topic: [UX, DX, and AX](./ux-dx-and-ax.md)

[^xiaomovps-dsh-agents-md-tokens]: 小墨 on DSH AGENTS.md / CLAUDE.md token tips
