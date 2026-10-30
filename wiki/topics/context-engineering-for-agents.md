---
type: Topic
title: Agent 上下文工程
title_en: Context engineering for agents
description: 复杂多步 Agent 的可靠与省 token 常靠上下文工程——在合适时机以合适格式放入真正相关信息，而不是只换更大窗口或改一句 prompt；长程运行会出现 Context Rot；实践常分 Agentic Search、剪枝/压缩/草稿本与跨会话记忆，并在自搭 harness 里用 trace 与 eval 量化改动。 检索替代摘要需同时评估恢复开销与细节召回。
description_en: Reliable, token-efficient multi-step agents often need context engineering—putting truly relevant information in at the right time and format, not only a bigger window or a one-line prompt rewrite; long runs suffer Context Rot; practice often splits into agentic search, pruning/compaction/scratchpads, and cross-session memory, with traces and evals in a custom harness to quantify changes. Replacing summaries with retrieval requires evaluating both recovery overhead and detail recall.
tags: [context-engineering, agents, context-rot, harness, eval, retrieval, memory, compaction]
sources:
  - id: shao-meng-deeplearning-context-engineering-course
    resource: https://x.com/shao__meng/status/2115627250515320947
    title: Meng Shao on the new DeepLearning.AI Context Engineering course
  - id: shao-meng-minimax-mcode-stack
    resource: https://x.com/shao__meng/status/2115428696672866729
    title: Meng Shao on MiniMax open-sourcing the MCode Stack
  - id: minimax-mcode-stack
    resource: https://github.com/MiniMax-AI/mcode-stack
    title: MiniMax MCode Stack open-source repository
  - id: shao-meng-google-research-sleep
    resource: https://x.com/shao__meng/status/2115633448702615604
    title: Meng Shao on Google Research SLEEP offline memory consolidation
  - id: heydengai-vibe-coding-memory-paradox
    resource: https://x.com/heydengai/status/2115756278190375243
    title: Heydengai on the vibe-coding memory paradox
  - id: dotey-claude-api-request-size-128mb
    resource: https://x.com/dotey/status/2115968852349567254
    title: Dotey on Claude API request size increasing to 128 MB
  - id: wquguru-everos-shisei-pose-library
    resource: https://x.com/wquguru/status/2115972037403713688
    title: WquGuru on EverOS and Shisei
  - id: heydengai-retrieval-instead-of-compaction
    resource: https://x.com/heydengai/status/2116019898422083808
    title: heydengai on retrieval instead of compaction
generated:
  by: codex/gpt-6
  at: 2026-10-30T20:49:16+08:00
---

# Agent 上下文工程

*Context engineering for agents*

复杂多步 Agent 要稳且省 token，帖子与课程叙事把 **上下文工程** 当成主线：管好看什么、怎么排、何时检索与记忆，而不是默认靠更大窗口或重写一句 prompt。[^shao-meng-deeplearning-context-engineering-course]

For steady, token-efficient multi-step agents, the post and course narrative treat **context engineering** as the main line—what the model sees, ordering, when to retrieve and remember—not defaulting to a bigger window or rewriting one prompt.[^shao-meng-deeplearning-context-engineering-course]

## 综合分析 / Synthesis

会话记忆的策略选择应区分“保存原始历史”与“给当前窗口选信息”。[小邓同学的检索主张](../sources/articles/heydengai-retrieval-instead-of-compaction.md)提出保留完整会话并按需恢复，以减少摘要丢细节；其转述的约 40 万 token 测试中，缓存失效压缩为 38 秒 / $1.99、缓存命中为 29 秒 / $0.17、检索恢复为 15 秒 / $0.10。这为检索替代摘要提供一个作者报告的成本案例，但缺少检索实现与恢复后质量对照，不能把全文留存等同于相关信息必然召回。策略比较应同时关注恢复开销与细节找回能力。[^heydengai-retrieval-instead-of-compaction]

Session-memory choices should distinguish preserving original history from selecting information for the current window. [heydengai’s retrieval proposal](../sources/articles/heydengai-retrieval-instead-of-compaction.md) retains full sessions for on-demand recovery to reduce summary detail loss; its relayed roughly 400,000-token test reports 38 seconds / $1.99 for cache-miss compaction, 29 seconds / $0.17 for cache-hit compaction, and 15 seconds / $0.10 for retrieval recovery. This supplies an author-reported cost case for replacing summaries with retrieval, but lacks retrieval implementation and subsequent quality comparisons; full-history retention does not guarantee relevant recall. Strategy comparisons should consider both recovery overhead and detail retrieval.[^heydengai-retrieval-instead-of-compaction]

跨应用交接还需要把可复用结论显式写入共享存储，再由新会话检索；这将记忆从单一 harness 扩展到独立工具间的协作。[Shisei 实战](../sources/articles/wquguru-everos-shisei-pose-library.md) 中，作者用同账号 EverOS MCP 在 Grok Bot、Muse 与 Claude Code 之间传递调研结论，结束后写回参数和流程并沉淀 skill。这为外部记忆的“写入—检索—经验回写”补充案例，但一分钟交接与 21 小时交付仅是作者报告，未隔离共享记忆对耗时或质量的贡献，也不等于工具自动共享全部会话历史。[^wquguru-everos-shisei-pose-library]

Cross-application handoffs also require explicitly saving reusable conclusions to shared storage for retrieval by a new session, extending memory beyond one harness to independent tools. In the [Shisei case](../sources/articles/wquguru-everos-shisei-pose-library.md), the author used EverOS MCP under one account to pass research findings between Grok Bot, Muse, and Claude Code, then saved parameters and workflows and distilled a skill. This supplies a case of writing, retrieving, and writing back lessons to external memory, but the minute-long handoff and 21-hour delivery are author reports that do not isolate shared memory’s contribution to time or quality, nor imply automatic sharing of complete conversation histories.[^wquguru-everos-shisei-pose-library]

上下文预算应分开核对 token 窗口与请求体字节大小：筛选、剪枝和压缩解决信息组织问题，传输额度则可能在截图或 PDF 密集请求中先耗尽。[宝玉解读 Claude API 128 MB](../sources/articles/dotey-claude-api-request-size-128mb.md) 报告官方 Messages / Token Counting 从 32 MB 提至 128 MB，说明更大请求体能缓解传输瓶颈，但不能据此推断 Context Rot 已解决、模型窗口扩大或跨会话记忆改善。[^dotey-claude-api-request-size-128mb]

Context budgets should track token windows separately from request-body bytes: selection, pruning, and compaction address information organization, while transport allowances may run out first in screenshot- or PDF-heavy requests. [Dotey on the Claude API 128 MB limit](../sources/articles/dotey-claude-api-request-size-128mb.md) reports the official Messages / Token Counting increase from 32 MB to 128 MB, showing relief for a transport bottleneck without establishing that Context Rot is solved, model windows have grown, or cross-session memory has improved.[^dotey-claude-api-request-size-128mb]

[邵萌谈 DeepLearning.AI Context Engineering 新课](../sources/articles/shao-meng-deeplearning-context-engineering-course.md) 据 DeepLearning.AI 新课页概括：Jeff Huber（Chroma / Replit）与 Drew Breunig（*Context Engineering Handbook*）主讲；Andrew Ng 与 Huber 在导论对谈。Agent 跑得越久，上下文越容易塞满重复、矛盾、过时信息，长上下文表现变差——Huber 与 Chroma 团队称 **Context Rot**；更大窗口与单纯改 prompt 都治不好，要修上下文本身。[^shao-meng-deeplearning-context-engineering-course] 原帖 <https://x.com/shao__meng/status/2115627250515320947>；课程链 <https://t.co/UKFzLhFAgb>。

[Meng Shao on the new DeepLearning.AI Context Engineering course](../sources/articles/shao-meng-deeplearning-context-engineering-course.md) summarizes the DeepLearning.AI course page: Jeff Huber (Chroma / Replit) and Drew Breunig (*Context Engineering Handbook*) lead; Andrew Ng and Huber converse in the intro. Longer runs fill context with duplicate, contradictory, stale information and hurt long-context performance—Huber and Chroma call this **Context Rot**; bigger windows and prompt tweaks alone do not fix it—you fix the context.[^shao-meng-deeplearning-context-engineering-course] Post: <https://x.com/shao__meng/status/2115627250515320947>; course link: <https://t.co/UKFzLhFAgb>.

课程把能力拆成三条并配四模块实验： **Agentic Search**（多工具多源、tool registry、trace 闭环改工具选择、精确率/召回率）； **Context Management**（pruning hooks、compaction 摘要、scratchpads 把全文与状态挪出窗口、开关对比与上下文 eval）； **Agentic Memory**（事实/规则/产物等跨会话记录、增改跳过决策、eval 是否减少用户重复交代）。整体用 Python 从零搭 harness，trace 与 eval 量化每次改动；预设中级 Python 与 LLM/工具/RAG 基础，建议先修 Agentic AI 与 RAG 短课。[^shao-meng-deeplearning-context-engineering-course]

The course splits skills into three tracks with four module labs: **Agentic Search** (multi-tool/source, tool registry, trace-driven tool-choice eval loop, precision/recall); **Context Management** (pruning hooks, compaction summaries, scratchpads moving full text and state out of the window, before/after toggles and context evals); **Agentic Memory** (cross-session facts/rules/artifacts, add/update/skip decisions, evals on repeated user explanations). Overall it builds a harness from scratch in Python and uses traces and evals to quantify each change; prerequisites are intermediate Python plus LLM/tools/RAG basics, with Agentic AI and RAG short courses as warm-up.[^shao-meng-deeplearning-context-engineering-course]

与 [把子 Agent 折进主循环](./fold-subagents-into-main-loop.md) 相邻：那边默认一个主循环，子 Agent 留给可测上下文膨胀或并行新鲜窗；本页是**在同一 harness 内**如何策展上下文（检索、剪枝、压缩、记忆），fresh 窗/子 Agent 是架构备选而非课程主线。与 [长对话默认压缩低于模型窗口](./long-conversation-default-compression.md) 也相邻：那边是会话产品默认压缩阈值错位；本页模块 3 教的是在自搭 Agent 里主动 pruning/compaction/scratchpad，不是改 magpie/DSH 预设。

Adjacent to [Fold sub-agents into the main loop](./fold-subagents-into-main-loop.md): that page defaults to one main loop and reserves sub-agents for measurable context bloat or parallel fresh windows; this page is **inside one harness**—curating context via retrieval, pruning, compaction, and memory—where fresh windows/sub-agents are an architectural option, not the course’s main thread. Adjacent to [Long-conversation default compression below model window](./long-conversation-default-compression.md): that page is product default compression misalignment; module 3 here teaches active pruning/compaction/scratchpads in a custom agent, not tuning magpie/DSH presets.

[邵萌谈 MiniMax 开源 MCode Stack](../sources/articles/shao-meng-minimax-mcode-stack.md) 从 MiniMax Code 产研侧把同一「策展上下文」落成**可安装 Skills**：`tool-budget-audit` / `context-tax-audit` 审计工具与每轮注入占多少上下文、对 prompt cache 的影响；`long-session-check`、`handoff-doc` 管长会话摘要/落盘/新开会话与交接文档；`long-command-check` 对长 shell/后台任务做十点审计。配套 **MCode Engineering Notes** 把 compaction vs memory、工具过多等写成专栏，与课程里的 pruning/compaction/scratchpad 同族，但是**一线 harness 清单**而非教学模块；仓库 <https://github.com/MiniMax-AI/mcode-stack>。[^shao-meng-minimax-mcode-stack] 原帖 <https://x.com/shao__meng/status/2115428696672866729>。

[Meng Shao on MiniMax open-sourcing the MCode Stack](../sources/articles/shao-meng-minimax-mcode-stack.md) lands the same “curate context” thread from MiniMax Code production as **installable Skills**: `tool-budget-audit` / `context-tax-audit` audit tool and per-turn injection cost plus prompt-cache effects; `long-session-check` and `handoff-doc` cover long-session summarize/persist/new session and handoff docs; `long-command-check` is a ten-point audit for long shell/background jobs. **MCode Engineering Notes** essay compaction vs memory, too many tools, and related topics—same family as the course’s pruning/compaction/scratchpads, but as a **frontline harness checklist**, not a syllabus module; repo <https://github.com/MiniMax-AI/mcode-stack>.[^shao-meng-minimax-mcode-stack] Post: <https://x.com/shao__meng/status/2115428696672866729>.

[MiniMax MCode Stack 开源仓库](../sources/articles/minimax-mcode-stack-repo.md) 从 README 把 Notes 与 skill 名钉死：`notes/02-tool-context.md` ↔ `tool-budget-audit`；`03-compaction-memory.md` ↔ `long-session-check`、`handoff-doc`；`04-bash-background.md` ↔ `long-command-check`；`06-context-tax.md`（标 upcoming）↔ `context-tax-audit`——并写明仓库目标是让专栏「可执行」，且 harness 清单会随实验持续改，不是一次性最佳实践包。[^minimax-mcode-stack]

[MiniMax MCode Stack open-source repository](../sources/articles/minimax-mcode-stack-repo.md) pins Notes to skill names in the README: `notes/02-tool-context.md` ↔ `tool-budget-audit`; `03-compaction-memory.md` ↔ `long-session-check`, `handoff-doc`; `04-bash-background.md` ↔ `long-command-check`; `06-context-tax.md` (marked upcoming) ↔ `context-tax-audit`—and states the repo makes the column runnable while the harness checklist **keeps changing** with experiments, not a one-shot best-practices bundle.[^minimax-mcode-stack]

[邵萌谈 Google Research「SLEEP」离线巩固记忆](../sources/articles/shao-meng-google-research-sleep.md) 给出**模型侧**持续学习线索：Google Research **SLEEP** 在固定架构上周期切换清醒交互与离线「睡眠」——把短时上下文经 MoE/Hope 扩容与 GKD/LTI 等写入长时参数，再在 REM 式做梦阶段用合成数据自我改进，以减轻灾难性遗忘与静态知识截止。与课程/MCode 的 **Agentic Memory**（外部记录、检索、增改跳过）同族「长期 Agent 别丢信息」，但切面是**权重巩固与后训练**，不是 harness 里 pruning/compaction/scratchpad 或 skill 清单；帖述 BABILong 约千万 token 级长文可在睡眠期压进参数记忆——与「把长历史留在窗口外或摘要里」是不同层，且为研究叙事与博客结果要点，非成品 Agent 默认可用能力。[^shao-meng-google-research-sleep] 原帖 <https://x.com/shao__meng/status/2115633448702615604>；博文 <https://t.co/VJ6VCRbpRK>。

[Meng Shao on Google Research SLEEP offline memory consolidation](../sources/articles/shao-meng-google-research-sleep.md) adds a **model-side** continual-learning thread: Google Research **SLEEP** cycles wake interaction and offline “sleep” on fixed architecture—writing short-term context into long-term parameters via MoE/Hope expansion and GKD/LTI-style consolidation, then REM-like dream phases with synthetic self-improvement to mitigate catastrophic forgetting and static cutoffs. Same “long-running agents must not lose information” family as the course/MCode **Agentic Memory** (external records, retrieve, add/update/skip), but the cut is **weight consolidation and post-training**, not harness pruning/compaction/scratchpads or skill checklists; the post claims BABILong-scale text (~10M tokens in the relay) can consolidate into parametric memory during sleep—a different layer from keeping long history outside the window or in summaries, and research/blog highlights, not a default capability in shipped agents.[^shao-meng-google-research-sleep] Post: <https://x.com/shao__meng/status/2115633448702615604>; blog: <https://t.co/VJ6VCRbpRK>.

[小邓同学谈 Vibe Coding 的记忆悖论](../sources/articles/heydengai-vibe-coding-memory-paradox.md) 从 **用户体感** 侧点出同一问题的反讽：发明 AI 本为让人少记，Vibe Coding 里人类却常把「帮 Agent 记住它干过什么」当成核心劳动——与模块 3 的 Agentic Memory、MCode **`handoff-doc`** / **`long-session-check`** 所要解决的「Agent 默认记不住长程史」同向，但 paradox 页收文化层观察，本页收 builder 原语与 eval；完整 paradox 叙事见 [Vibe Coding 的记忆悖论](./vibe-coding-memory-paradox.md)。[^heydengai-vibe-coding-memory-paradox] 原帖 <https://x.com/heydengai/status/2115756278190375243>。

[Heydengai on the vibe-coding memory paradox](../sources/articles/heydengai-vibe-coding-memory-paradox.md) names the same problem from **felt irony**: we built AI so humans remember less, yet vibe coding often makes “help the agent remember what it did” core human labor—aligned with module 3 Agentic Memory and MCode **`handoff-doc`** / **`long-session-check`** fixing agents’ default poor long-run memory, but the paradox Topic holds the cultural observation while this page holds builder primitives and evals; full paradox thread under [Vibe-coding memory paradox](./vibe-coding-memory-paradox.md).[^heydengai-vibe-coding-memory-paradox] Post: <https://x.com/heydengai/status/2115756278190375243>.

适用边界：证据来自一门短课 syllabus、邵萌帖与 MCode Stack README，不是跨产品基准；Chroma/Replit 与 handbook 作者有立场；实验时长与 eval 设计是教学标注，不在此发明完成率或商业结果；MCode Stack 是单团队开源清单与 Notes，未在此独立核验各 skill 的 eval 效果；SLEEP 证据来自邵萌对 Google Research 博文的转述与帖内数字，未在此独立复现实验或假定已进 API/Agent 产品。

Scope: evidence is one short-course syllabus, Meng Shao’s posts, and the MCode Stack README—not a cross-product benchmark; Chroma/Replit and the handbook author have stakes; lab duration and eval design are teaching labels—completion rates or business outcomes are not invented here; the MCode Stack is one team’s open checklist and Notes—individual skill eval outcomes are not independently verified here; SLEEP evidence is Meng Shao’s relay of the Google Research blog and in-post numbers—not independently reproduced here, and not assumed available in API/agent products.

## 矛盾与变化 / Contradictions

[DeepLearning.AI 课程与 MCode Stack](../sources/articles/minimax-mcode-stack-repo.md)把压缩、摘要与落盘列为可选治理手段；[小邓同学的检索帖](../sources/articles/heydengai-retrieval-instead-of-compaction.md)则质疑压缩路线、主张全文检索。两者对摘要的角色存在分歧，但后者的单次转述比较不足以否定所有 compaction；本页保留策略并列与按任务评估的结论。[^minimax-mcode-stack][^heydengai-retrieval-instead-of-compaction]

[The DeepLearning.AI course and MCode Stack](../sources/articles/minimax-mcode-stack-repo.md) treat compaction, summaries, and persistence as available management tools; [heydengai’s retrieval post](../sources/articles/heydengai-retrieval-instead-of-compaction.md) questions compaction and advocates full-history retrieval. They differ over summaries’ role, but the latter’s relayed individual comparison cannot invalidate all compaction; this page retains multiple strategies and task-specific evaluation.[^minimax-mcode-stack][^heydengai-retrieval-instead-of-compaction]

[邵萌谈 DeepLearning.AI Context Engineering 新课](../sources/articles/shao-meng-deeplearning-context-engineering-course.md) 与 [邵萌谈 Google Research「SLEEP」](../sources/articles/shao-meng-google-research-sleep.md) 不互相否定「长期 Agent 要管记忆」，但默认落点不同：课程/MCode 主张在 **harness 内**用外部记忆记录、检索与 compaction/scratchpad 策展上下文；SLEEP 主张在 **固定模型架构**上离线改权重、把脆弱上下文蒸馏进参数并在睡眠期自我改进。实务 builder 今天能落地的是前者；后者是研究线与博客结果，不能因 SLEEP 叙事就省略 harness 侧 memory/compaction，也不能因课程未教权重巩固就假定产品已内置 SLEEP。

[Meng Shao on the new DeepLearning.AI Context Engineering course](../sources/articles/shao-meng-deeplearning-context-engineering-course.md) and [Meng Shao on Google Research SLEEP](../sources/articles/shao-meng-google-research-sleep.md) do not cancel “long-run agents need memory,” but the default locus differs: the course/MCode push **external memory records, retrieval, and compaction/scratchpads inside the harness**; SLEEP pushes **offline weight updates on fixed architecture**, distilling fragile context into parameters and self-improving in sleep. Builders can ship the former today; the latter is a research/blog thread—you should not skip harness memory/compaction because of SLEEP, nor assume products embed SLEEP because the course does not teach weight consolidation.

## 相关 / Related

- [宝玉解读 Claude API 请求上限 / Dotey on Claude API request limits](../sources/articles/dotey-claude-api-request-size-128mb.md)

- Source: [邵萌谈 DeepLearning.AI Context Engineering 新课](../sources/articles/shao-meng-deeplearning-context-engineering-course.md)
- Source: [邵萌谈 MiniMax 开源 MCode Stack](../sources/articles/shao-meng-minimax-mcode-stack.md)
- Source: [MiniMax MCode Stack 开源仓库](../sources/articles/minimax-mcode-stack-repo.md)
- Source: [邵萌谈 Google Research「SLEEP」离线巩固记忆](../sources/articles/shao-meng-google-research-sleep.md)
- Source: [小邓同学谈 Vibe Coding 的记忆悖论](../sources/articles/heydengai-vibe-coding-memory-paradox.md)
- Topic: [Vibe Coding 的记忆悖论](./vibe-coding-memory-paradox.md)
- Topic: [把子 Agent 折进主循环](./fold-subagents-into-main-loop.md)
- Topic: [长对话默认压缩低于模型窗口](./long-conversation-default-compression.md)
- Topic: [公司级 Agent Harness 五原语](./company-agent-harness.md)
- Topic: [Agent Skill 编写](./agent-skill-authoring.md)

[^shao-meng-deeplearning-context-engineering-course]: Meng Shao on the new DeepLearning.AI Context Engineering course
[^shao-meng-minimax-mcode-stack]: Meng Shao on MiniMax open-sourcing the MCode Stack
[^minimax-mcode-stack]: MiniMax MCode Stack open-source repository
[^shao-meng-google-research-sleep]: Meng Shao on Google Research SLEEP offline memory consolidation
[^heydengai-vibe-coding-memory-paradox]: Heydengai on the vibe-coding memory paradox

[^dotey-claude-api-request-size-128mb]: Dotey on Claude API request size increasing to 128 MB

[^wquguru-everos-shisei-pose-library]: WquGuru on EverOS and Shisei

[^heydengai-retrieval-instead-of-compaction]: heydengai on retrieval instead of compaction
