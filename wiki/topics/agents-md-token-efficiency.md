---
type: Topic
title: 项目指令与 Token 效率
title_en: Project instructions and token efficiency
description: Agent harness 可通过 AGENTS.md / CLAUDE.md 等项目指令约束执行方式以减少无效 Token：加载规则因产品而异（有的会双载，有的默认只读 CLAUDE.md 且 AGENTS.md 静默不加载），写执行规则而非人设（人设常限制通才），把重流程拆成按需 Skills；亦可扫会话日志的 token 计数找出个人烧额度习惯，经确认后再写入规则。
description_en: Agent harnesses can cut wasted tokens via project instructions such as AGENTS.md / CLAUDE.md—loading rules differ by product (some dual-load; some default to CLAUDE.md only with AGENTS.md silent), write execution rules not personas (personas often hobble generalists), and split heavy flows into on-demand Skills; they can also scan session-log token counts for personal usage-burning habits and, after confirmation, write plugging rules.
tags: [agents, agents-md, claude-md, tokens, harness, skills, usage, habits, claude-code]
sources:
  - id: xiaomovps-dsh-agents-md-tokens
    resource: https://x.com/xiaomovps/status/2113950309278167104
    title: 小墨 on DSH AGENTS.md / CLAUDE.md token tips
  - id: shao-meng-felix-not-2024-claude-usage
    resource: https://x.com/shao__meng/status/2113970197161988276
    title: Meng Shao relays Felix—stop using Claude the 2024 way
  - id: voxyz-usage-habits-to-agents-md
    resource: https://x.com/Voxyz_ai/status/2114416707385073819
    title: Vox on scanning session logs into AGENTS.md usage rules
  - id: shao-meng-langchain-content-studio
    resource: https://x.com/shao__meng/status/2115345069570212202
    title: Meng Shao on four months of LangChain Content Studio
  - id: 0xlangeai-claude-code-three-pitfalls
    resource: https://x.com/0xlangeai/status/2115300040701096272
    title: 蓝哥AI on three silent Claude Code pitfalls
generated:
  by: cursor-agent/composer
  at: 2026-10-28T22:45:00+08:00
---

# 项目指令与 Token 效率

*Project instructions and token efficiency*

Harness 不只靠默认系统提示：把项目级指令（如 `AGENTS.md`、`CLAUDE.md`）写成可执行的工作约束，并弄清该产品实际会加载哪些文件，就能少耗无效 Token 或避免规则静默失效；重流程应拆成按需 Skills，而不是每轮塞满说明。[^xiaomovps-dsh-agents-md-tokens][^0xlangeai-claude-code-three-pitfalls] 人设式角色扮演常限制通才模型；多数任务不设人设，把规则写成执行约束更贴模型用法。[^shao-meng-felix-not-2024-claude-usage] 规则也可来自个人用量证据：扫近几日会话日志里的 token 计数，找出烧额度最多的习惯，经确认后再写入本项目实际加载的指令文件。[^voxyz-usage-habits-to-agents-md]

A harness is not only its default system prompt: writing project-level instructions (such as `AGENTS.md` and `CLAUDE.md`) as executable work constraints—and learning which files that product actually loads—cuts wasted tokens or stops rules from silently missing; heavy flows belong in on-demand Skills, not in every-turn full instructions.[^xiaomovps-dsh-agents-md-tokens][^0xlangeai-claude-code-three-pitfalls] Persona role-play often limits generalist models; skipping personas on most tasks and writing rules as execution constraints fits how the models work.[^shao-meng-felix-not-2024-claude-usage] Rules can also come from personal usage evidence: scan recent session-log token counts, find the habits that burned the most usage, and—after confirmation—write into the instruction file the project actually loads.[^voxyz-usage-habits-to-agents-md]

## 综合分析 / Synthesis

[小墨谈 DSH 用 AGENTS.md / CLAUDE.md 省 token](../sources/articles/xiaomovps-dsh-agents-md-tokens.md) 以 DeepSeek Harness（DSH）为例：工具会读全局 `~/.dsh/AGENTS.md`、项目与子目录下的 `AGENTS.md` / `CLAUDE.md`；同目录两文件内容不同可能双载，相同才去重，故宜以 `AGENTS.md` 为主、`CLAUDE.md` 复用。规则应写「直接执行、少扫仓、控改动范围、验证即停、报错先分析」，而非堆角色设定；部署 / Review / 测试等复杂流程拆 Skills 按需加载，再配极简模式，可把 DSH 往 Pi 式简洁靠拢。[^xiaomovps-dsh-agents-md-tokens] 原文 <https://x.com/xiaomovps/status/2113950309278167104>。

[Xiaomo on saving tokens in DSH with AGENTS.md / CLAUDE.md](../sources/articles/xiaomovps-dsh-agents-md-tokens.md) uses DeepSeek Harness (DSH) as the case: the tool reads global `~/.dsh/AGENTS.md` plus project and subdirectory `AGENTS.md` / `CLAUDE.md`; differing same-dir files may both load and identical ones dedupe, so keep `AGENTS.md` primary and reuse it in `CLAUDE.md`. Rules should say execute directly, avoid empty repo scans, scope edits, stop when verified, and analyze errors before retry—not pile on personas; split deploy / Review / test into Skills loaded on demand, and with minimal mode push DSH toward Pi-like cleanliness.[^xiaomovps-dsh-agents-md-tokens] Original at <https://x.com/xiaomovps/status/2113950309278167104>.

[邵萌转述 Felix：别再用 2024 方式用 Claude](../sources/articles/shao-meng-felix-not-2024-claude-usage.md) 从通才模型侧加固「勿堆人设」：行业对 Agent 角色扮演过转；硬套「你是数据科学家」常限制用法，他多数任务不设人设。这与小墨「规则写执行约束而非人设」同向，并把理由从省 token 扩到「少限制通才」。[^shao-meng-felix-not-2024-claude-usage] 原帖 <https://x.com/shao__meng/status/2113970197161988276>。Skills 慎用与半衰期见 [Agent Skill 编写](./agent-skill-authoring.md)。

[Meng Shao relays Felix—stop using Claude the 2024 way](../sources/articles/shao-meng-felix-not-2024-claude-usage.md) hardens “don’t pile personas” from the generalist-model side: the industry over-rotated on Agent role-play; forcing “you are a data scientist” often limits use, and he skips personas on most tasks. That aligns with Xiaomo’s “execution constraints, not personas,” and widens the reason from saving tokens to “don’t hobble a generalist.”[^shao-meng-felix-not-2024-claude-usage] Post: <https://x.com/shao__meng/status/2113970197161988276>. For Skills caution and half-life see [Agent skill authoring](./agent-skill-authoring.md).

[Vox 谈扫会话日志把烧额度习惯写成 AGENTS.md 规则](../sources/articles/voxyz-usage-habits-to-agents-md.md) 把「往指令文件写执行约束」推到个人用量诊断：可贴进 Claude Code 的提示要求先写小脚本扫 `~/.claude/projects` 近 7 天会话日志里的 token 计数（勿把原文读进上下文），找出烧额度最多的 3 个习惯并估占比、各写一条堵住规则；用户说 yes 后再写入本项目实际加载的文件——有 `CLAUDE.md` 写它，否则写 `AGENTS.md`；永不打印 secrets。Codex 则改扫 `~/.codex/sessions` 且只写入 `AGENTS.md`。示例习惯含整文件通读、倾倒长测试/构建输出、拉起子 agent、单会话拖很久等。[^voxyz-usage-habits-to-agents-md] 原文 <https://x.com/Voxyz_ai/status/2114416707385073819>。与小墨的通用执行约束、Felix 的「勿人设」同属指令侧省 Token，但切面是「用本人会话证据定制规则」，并显式要求确认前不改文件。

[Vox on scanning session logs into AGENTS.md usage rules](../sources/articles/voxyz-usage-habits-to-agents-md.md) pushes “write execution constraints into the instruction file” into personal usage diagnosis: a paste-in Claude Code prompt asks for a small script over `~/.claude/projects` session-log token counts from the last 7 days (don’t read raw files into context), the top 3 usage-burning habits with rough shares, and one plugging rule each; on yes, write to the file the project actually loads—`CLAUDE.md` if present, else `AGENTS.md`; never print secrets. On Codex, scan `~/.codex/sessions` and write `AGENTS.md` only. Example habits include reading whole files, dumping long test/build output, spawning subagents, and multi-hour single sessions.[^voxyz-usage-habits-to-agents-md] Original at <https://x.com/Voxyz_ai/status/2114416707385073819>. Same instruction-side save-Tokens family as Xiaomo’s general constraints and Felix’s “no personas,” but the cut is customizing rules from one’s own session evidence, with an explicit change-nothing-until-yes gate.

同作者在 [超越 token 数的 Harness 对比](./harness-comparison-beyond-tokens.md) 里用轮次与缓存说明 DSH 可能因反复截图自检拉长跑法；本页是对应的指令侧补丁——用项目规则关掉那类无效循环，而不是只改对比指标。

The same author’s [Harness comparison beyond tokens](./harness-comparison-beyond-tokens.md) shows DSH runs can inflate via repeated screenshot self-checks; this page is the instruction-side patch—use project rules to kill that waste, not only change comparison metrics.

同作者另帖整理 Claude Code 外围省 Token 工具（过滤工具输出、压缩终端、跨 Session 记忆、LSP 检索、精简回复），并强调工具本身有开销、勿一次全装——见 [编程 Agent 省 Token 工具与开销](./coding-agent-token-saving-tooling.md)；与本页「改项目指令」互补，而非替代。Vox 示例习惯（整文件通读、长构建输出）与 Serena / RTK / context-mode 等工具所攻路径重叠，但 Vox 走的是先诊断再写规则，不是默认装外围栈。

The same author’s other post lists Claude Code peripheral token-saving tools (filter tool output, compress terminals, cross-Session memory, LSP retrieval, slimmer replies) and stresses tool overhead—don’t install everything at once—see [Coding-agent token-saving tooling and overhead](./coding-agent-token-saving-tooling.md); complementary to this page’s project-instruction cut, not a substitute. Vox’s example habits (whole-file reads, long build dumps) overlap paths that Serena / RTK / context-mode attack, but Vox’s path is diagnose-then-write-rules, not defaulting to a peripheral stack.

[邵萌谈 LangChain Content Studio 四个月实践](../sources/articles/shao-meng-langchain-content-studio.md) 给出公司 harness 侧的膨胀教训：记忆层用 `AGENTS.md` 做索引时曾膨胀到约 50 万 token，现约限 200 行；细节推到 Wiki（技能只链过去不复制）与按需 Skills，而不是把品牌/参考片拆解整库塞进索引——与小墨「重流程拆 Skills、指令写瘦」同向，证据从个人编程 harness 扩到营销 Design Agent。[^shao-meng-langchain-content-studio] 原帖 <https://x.com/shao__meng/status/2115345069570212202>。

[Meng Shao on four months of LangChain Content Studio](../sources/articles/shao-meng-langchain-content-studio.md) adds a company-harness bloat lesson: the memory-layer `AGENTS.md` index once grew to ~500k tokens and is now capped around 200 lines; detail stays in the Wiki (skills link, don’t copy) and on-demand Skills instead of stuffing brand/reference-film breakdowns into the index—same direction as Xiaomo’s “split heavy flows into Skills; keep instructions lean,” widening evidence from personal coding harnesses to a marketing Design Agent.[^shao-meng-langchain-content-studio] Post: <https://x.com/shao__meng/status/2115345069570212202>.

[蓝哥AI谈 Claude Code「变笨」三隐形坑](../sources/articles/0xlangeai-claude-code-three-pitfalls.md) 从 Claude Code 加载面补「实际加载哪份」：项目里同时放 `CLAUDE.md` 与 `AGENTS.md` 时默认只读前者，`AGENTS.md` 可全程未加载且不报错；改法是在 `CLAUDE.md` 加 `@AGENTS.md` 并用 `context` 确认。这与 Vox「有 `CLAUDE.md` 就写它、否则写 `AGENTS.md`」同向，并把失败模式从「写错文件」扩到「以为写了却从未进 Context」。[^0xlangeai-claude-code-three-pitfalls] 原帖 <https://x.com/0xlangeai/status/2115300040701096272>。Skill 描述预算与订阅凭据另见 [Agent Skill 编写](./agent-skill-authoring.md) 与 [高端 AI 订阅价值](./premium-ai-subscription-value.md)。

[0xlangeai on three silent Claude Code pitfalls](../sources/articles/0xlangeai-claude-code-three-pitfalls.md) adds the Claude Code loading cut of “which file actually loads”: with both `CLAUDE.md` and `AGENTS.md` present, only the former is read by default and `AGENTS.md` can stay unloaded end-to-end with no error; fix by adding `@AGENTS.md` in `CLAUDE.md` and confirming with `context`. That aligns with Vox’s “write `CLAUDE.md` if present, else `AGENTS.md`,” and widens the failure mode from “wrote the wrong file” to “thought it was written but it never entered Context.”[^0xlangeai-claude-code-three-pitfalls] Post: <https://x.com/0xlangeai/status/2115300040701096272>. Skill description budget and subscription credentials: [Agent skill authoring](./agent-skill-authoring.md) and [Premium AI subscription value](./premium-ai-subscription-value.md).

## 矛盾与变化 / Contradictions

[小墨谈 DSH](../sources/articles/xiaomovps-dsh-agents-md-tokens.md) 称 DeepSeek Harness 会读 `AGENTS.md` 与 `CLAUDE.md`，同目录内容不同可能双载，故宜以 `AGENTS.md` 为主、`CLAUDE.md` 复用以免重复入 Context；[蓝哥AI](../sources/articles/0xlangeai-claude-code-three-pitfalls.md) 称 Claude Code 同时放两文件时默认只读 `CLAUDE.md`，`AGENTS.md` 静默不加载——加载失败模式相反：一边怕双载浪费 Token，一边怕单载导致规则从未生效。二者针对不同 harness，不互相取消；跨产品时不能把「以 AGENTS.md 为主」或「只维护 CLAUDE.md」当成通用默认。[^xiaomovps-dsh-agents-md-tokens][^0xlangeai-claude-code-three-pitfalls]

[Xiaomo on DSH](../sources/articles/xiaomovps-dsh-agents-md-tokens.md) says DeepSeek Harness reads both `AGENTS.md` and `CLAUDE.md`, and differing same-dir copies may dual-load—so keep `AGENTS.md` primary and reuse it in `CLAUDE.md` to avoid double Context; [0xlangeai](../sources/articles/0xlangeai-claude-code-three-pitfalls.md) says Claude Code with both files present reads only `CLAUDE.md` by default and silently skips `AGENTS.md`—opposite load-failure modes: one fears dual-load Token waste, the other fears single-load so rules never apply. Different harnesses, so they do not cancel each other; across products, neither “AGENTS.md primary” nor “CLAUDE.md only” is a universal default.[^xiaomovps-dsh-agents-md-tokens][^0xlangeai-claude-code-three-pitfalls]

## 相关 / Related

- Source: [小墨谈 DSH 用 AGENTS.md / CLAUDE.md 省 token](../sources/articles/xiaomovps-dsh-agents-md-tokens.md)
- Source: [邵萌转述 Felix：别再用 2024 方式用 Claude](../sources/articles/shao-meng-felix-not-2024-claude-usage.md)
- Source: [Vox 谈扫会话日志把烧额度习惯写成 AGENTS.md 规则](../sources/articles/voxyz-usage-habits-to-agents-md.md)
- Source: [邵萌谈 LangChain Content Studio 四个月实践](../sources/articles/shao-meng-langchain-content-studio.md)
- Source: [蓝哥AI谈 Claude Code「变笨」三隐形坑](../sources/articles/0xlangeai-claude-code-three-pitfalls.md)
- Topic: [超越 token 数的 Harness 对比](./harness-comparison-beyond-tokens.md)
- Topic: [编程 Agent 省 Token 工具与开销](./coding-agent-token-saving-tooling.md)
- Topic: [Agent Skill 编写](./agent-skill-authoring.md)
- Topic: [高端 AI 订阅价值](./premium-ai-subscription-value.md)
- Topic: [UX, DX, and AX](./ux-dx-and-ax.md)
- Topic: [把子 Agent 折进主循环](./fold-subagents-into-main-loop.md)
- Topic: [公司级 Agent Harness 五原语](./company-agent-harness.md)

[^xiaomovps-dsh-agents-md-tokens]: 小墨 on DSH AGENTS.md / CLAUDE.md token tips
[^shao-meng-felix-not-2024-claude-usage]: Meng Shao relays Felix—stop using Claude the 2024 way
[^voxyz-usage-habits-to-agents-md]: Vox on scanning session logs into AGENTS.md usage rules
[^shao-meng-langchain-content-studio]: Meng Shao on four months of LangChain Content Studio
[^0xlangeai-claude-code-three-pitfalls]: 蓝哥AI on three silent Claude Code pitfalls
