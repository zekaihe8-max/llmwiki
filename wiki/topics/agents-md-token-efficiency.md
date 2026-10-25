---
type: Topic
title: 项目指令与 Token 效率
title_en: Project instructions and token efficiency
description: Agent harness 可通过 AGENTS.md / CLAUDE.md 等项目指令约束执行方式以减少无效 Token：避免双文件重复入 Context，写执行规则而非人设（人设常限制通才），并把重流程拆成按需 Skills。
description_en: Agent harnesses can cut wasted tokens via project instructions such as AGENTS.md / CLAUDE.md—avoid dual-file double-loading into Context, write execution rules not personas (personas often hobble generalists), and split heavy flows into on-demand Skills.
tags: [agents, agents-md, claude-md, tokens, harness, skills]
sources:
  - id: xiaomovps-dsh-agents-md-tokens
    resource: https://x.com/xiaomovps/status/2113950309278167104
    title: 小墨 on DSH AGENTS.md / CLAUDE.md token tips
  - id: shao-meng-felix-not-2024-claude-usage
    resource: https://x.com/shao__meng/status/2113970197161988276
    title: Meng Shao relays Felix—stop using Claude the 2024 way
generated:
  by: cursor-agent/composer
  at: 2026-10-25T20:28:00+08:00
---

# 项目指令与 Token 效率

*Project instructions and token efficiency*

Harness 不只靠默认系统提示：把项目级指令（如 `AGENTS.md`、`CLAUDE.md`）写成可执行的工作约束，并避免同一目录多份不同内容同时进 Context，就能少耗无效 Token；重流程应拆成按需 Skills，而不是每轮塞满说明。[^xiaomovps-dsh-agents-md-tokens] 人设式角色扮演常限制通才模型；多数任务不设人设，把规则写成执行约束更贴模型用法。[^shao-meng-felix-not-2024-claude-usage]

A harness is not only its default system prompt: writing project-level instructions (such as `AGENTS.md` and `CLAUDE.md`) as executable work constraints—and avoiding multiple differing same-dir copies all entering Context—cuts wasted tokens; heavy flows belong in on-demand Skills, not in every-turn full instructions.[^xiaomovps-dsh-agents-md-tokens] Persona role-play often limits generalist models; skipping personas on most tasks and writing rules as execution constraints fits how the models work.[^shao-meng-felix-not-2024-claude-usage]

## 综合分析 / Synthesis

[小墨谈 DSH 用 AGENTS.md / CLAUDE.md 省 token](../sources/articles/xiaomovps-dsh-agents-md-tokens.md) 以 DeepSeek Harness（DSH）为例：工具会读全局 `~/.dsh/AGENTS.md`、项目与子目录下的 `AGENTS.md` / `CLAUDE.md`；同目录两文件内容不同可能双载，相同才去重，故宜以 `AGENTS.md` 为主、`CLAUDE.md` 复用。规则应写「直接执行、少扫仓、控改动范围、验证即停、报错先分析」，而非堆角色设定；部署 / Review / 测试等复杂流程拆 Skills 按需加载，再配极简模式，可把 DSH 往 Pi 式简洁靠拢。[^xiaomovps-dsh-agents-md-tokens] 原文 <https://x.com/xiaomovps/status/2113950309278167104>。

[Xiaomo on saving tokens in DSH with AGENTS.md / CLAUDE.md](../sources/articles/xiaomovps-dsh-agents-md-tokens.md) uses DeepSeek Harness (DSH) as the case: the tool reads global `~/.dsh/AGENTS.md` plus project and subdirectory `AGENTS.md` / `CLAUDE.md`; differing same-dir files may both load and identical ones dedupe, so keep `AGENTS.md` primary and reuse it in `CLAUDE.md`. Rules should say execute directly, avoid empty repo scans, scope edits, stop when verified, and analyze errors before retry—not pile on personas; split deploy / Review / test into Skills loaded on demand, and with minimal mode push DSH toward Pi-like cleanliness.[^xiaomovps-dsh-agents-md-tokens] Original at <https://x.com/xiaomovps/status/2113950309278167104>.

[邵萌转述 Felix：别再用 2024 方式用 Claude](../sources/articles/shao-meng-felix-not-2024-claude-usage.md) 从通才模型侧加固「勿堆人设」：行业对 Agent 角色扮演过转；硬套「你是数据科学家」常限制用法，他多数任务不设人设。这与小墨「规则写执行约束而非人设」同向，并把理由从省 token 扩到「少限制通才」。[^shao-meng-felix-not-2024-claude-usage] 原帖 <https://x.com/shao__meng/status/2113970197161988276>。Skills 慎用与半衰期见 [Agent Skill 编写](./agent-skill-authoring.md)。

[Meng Shao relays Felix—stop using Claude the 2024 way](../sources/articles/shao-meng-felix-not-2024-claude-usage.md) hardens “don’t pile personas” from the generalist-model side: the industry over-rotated on Agent role-play; forcing “you are a data scientist” often limits use, and he skips personas on most tasks. That aligns with Xiaomo’s “execution constraints, not personas,” and widens the reason from saving tokens to “don’t hobble a generalist.”[^shao-meng-felix-not-2024-claude-usage] Post: <https://x.com/shao__meng/status/2113970197161988276>. For Skills caution and half-life see [Agent skill authoring](./agent-skill-authoring.md).

同作者在 [超越 token 数的 Harness 对比](./harness-comparison-beyond-tokens.md) 里用轮次与缓存说明 DSH 可能因反复截图自检拉长跑法；本页是对应的指令侧补丁——用项目规则关掉那类无效循环，而不是只改对比指标。

The same author’s [Harness comparison beyond tokens](./harness-comparison-beyond-tokens.md) shows DSH runs can inflate via repeated screenshot self-checks; this page is the instruction-side patch—use project rules to kill that waste, not only change comparison metrics.

同作者另帖整理 Claude Code 外围省 Token 工具（过滤工具输出、压缩终端、跨 Session 记忆、LSP 检索、精简回复），并强调工具本身有开销、勿一次全装——见 [编程 Agent 省 Token 工具与开销](./coding-agent-token-saving-tooling.md)；与本页「改项目指令」互补，而非替代。

The same author’s other post lists Claude Code peripheral token-saving tools (filter tool output, compress terminals, cross-Session memory, LSP retrieval, slimmer replies) and stresses tool overhead—don’t install everything at once—see [Coding-agent token-saving tooling and overhead](./coding-agent-token-saving-tooling.md); complementary to this page’s project-instruction cut, not a substitute.

## 矛盾与变化 / Contradictions

暂无。 / None yet.

## 相关 / Related

- Source: [小墨谈 DSH 用 AGENTS.md / CLAUDE.md 省 token](../sources/articles/xiaomovps-dsh-agents-md-tokens.md)
- Source: [邵萌转述 Felix：别再用 2024 方式用 Claude](../sources/articles/shao-meng-felix-not-2024-claude-usage.md)
- Topic: [超越 token 数的 Harness 对比](./harness-comparison-beyond-tokens.md)
- Topic: [编程 Agent 省 Token 工具与开销](./coding-agent-token-saving-tooling.md)
- Topic: [Agent Skill 编写](./agent-skill-authoring.md)
- Topic: [UX, DX, and AX](./ux-dx-and-ax.md)
- Topic: [把子 Agent 折进主循环](./fold-subagents-into-main-loop.md)

[^xiaomovps-dsh-agents-md-tokens]: 小墨 on DSH AGENTS.md / CLAUDE.md token tips
[^shao-meng-felix-not-2024-claude-usage]: Meng Shao relays Felix—stop using Claude the 2024 way
