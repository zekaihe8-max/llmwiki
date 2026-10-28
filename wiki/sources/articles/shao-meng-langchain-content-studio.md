---
type: Source
title: 邵萌谈 LangChain Content Studio 四个月实践
title_en: Meng Shao on four months of LangChain Content Studio
description: 邵萌转述 LangChain：GTM 与设计团队用四个月把 Slack 里的 Content Studio（Design Agent）从千篇一律 AI 稿做到可量产——品味写入 skills / wiki / 代码门禁，沙箱跨轮改项目，异步子 Agent 撑几小时任务；整套 harness 开源。
description_en: Meng Shao relays LangChain—over four months the GTM and design teams took Slack Content Studio (a Design Agent) from generic AI slop to production scale by encoding taste in skills / wiki / code gates, a cross-turn sandbox, and async sub-agents for multi-hour jobs; the full harness is open-sourced.
resource: https://x.com/shao__meng/status/2115345069570212202
tags: [langchain, content-studio, design-agent, harness, skills, taste, sandbox, deep-agents]
sources:
  - id: shao-meng-langchain-content-studio
    resource: https://x.com/shao__meng/status/2115345069570212202
    title: Meng Shao on four months of LangChain Content Studio
    author: human:meng shao
generated:
  by: cursor-agent/composer
  at: 2026-10-28T20:40:00+08:00
date: 2026-10-28
---

# 邵萌谈 LangChain Content Studio 四个月实践

*Meng Shao on four months of LangChain Content Studio*

[@shao__meng](https://x.com/shao__meng)（meng shao）转述 LangChain 开源 Content Studio 实践：内部 GTM 工程与设计团队用约四个月，把 Slack 里的 Design Agent 从「丑、像千篇一律 AI 稿」做到可量产——把设计师判断写入 skills / wiki / 代码门禁，给模型一台能跨轮次改项目的沙箱电脑，再用异步子 Agent 与多人对线程的协作 UX 撑住几小时任务；并开源整套 harness（`design-agent`），可 fork 后挂上自家品牌，经 Managed Deep Agents 部署到团队 Slack。[^shao-meng-langchain-content-studio] 原帖 <https://x.com/shao__meng/status/2115345069570212202>；开源仓库 <https://github.com/langchain-ai/design-agent>。

[@shao__meng](https://x.com/shao__meng) (meng shao) relays LangChain’s open-sourced Content Studio practice: over about four months the internal GTM engineering and design teams took a Slack Design Agent from “ugly, generic AI slop” to production scale—encoding designer judgment in skills / wiki / code gates, giving the model a sandbox computer that keeps projects across turns, and using async sub-agents plus multi-person thread UX for multi-hour jobs; the full harness (`design-agent`) is open-sourced so teams can fork, attach their brand, and deploy to Slack via Managed Deep Agents.[^shao-meng-langchain-content-studio] Post: <https://x.com/shao__meng/status/2115345069570212202>; repo: <https://github.com/langchain-ai/design-agent>.

## 摘要 / Summary

- 背景与结果：公司节奏快，设计人力被重复物料占满；Content Studio 在 Slack 描述需求、挂 brief/素材，拿回合规成片。文称自 8 月起交付 3000+ 资产（含 80+ PPT）；带其素材的帖在 X 约 450 万曝光；官号上这类帖相对其他帖约 2× 点赞、3.7× 收藏；约 3/4 请求来自营销外团队，75% 用户每周回访。单次请求模型花费中位数约从 9 月中的 $8 降到约 $0.50；迁到 Managed Deep Agents 后自有代码量约减 80%。[^shao-meng-langchain-content-studio]
- Background and outcomes: launch and campaign demand overcrowded design capacity; Content Studio takes Slack briefs/assets and returns on-brand deliverables. The piece claims 3000+ assets since August (including 80+ decks); posts with its assets ~4.5M X impressions; on the official account those posts got ~2× likes and ~3.7× bookmarks vs other posts; ~3/4 of requests came from outside marketing, with 75% of users returning weekly. Median model spend per request fell from about $8 in mid-September to about $0.50; after moving to Managed Deep Agents, owned code dropped about 80%.[^shao-meng-langchain-content-studio]

- 教品味：模型已能写 HTML/CSS、图表规范与动画时间线，缺的是立场与上下文，易「分布收敛」成好看但千人一面的稿（引 Anthropic，以及 Stripe 设计负责人 Katie Dill 的「zombie UI」）。基础含色板、字重、间距、对齐；更关键是设计原则、反 AI 俗套护栏，以及每次反馈背后的推理。可度量项用代码门禁；主观判断由设计师拍板后写入 skill。设计师角色更像创意总监：定方向、审稿，而不是每张手搓。[^shao-meng-langchain-content-studio]
- Teaching taste: models already write HTML/CSS, chart specs, and animation timelines; what they lack is stance and context, so outputs converge into pretty but generic work (citing Anthropic and Stripe design lead Katie Dill’s “zombie UI”). Basics include palette, weight, spacing, and alignment; more critical are design principles, anti–AI-slop guardrails, and the reasoning behind each piece of feedback. Measurable rules become code gates; subjective calls are designer-owned then written into skills. Designers act more like creative directors—direction and review—than hand-making every asset.[^shao-meng-langchain-content-studio]

- 媒体 harness：底层 Deep Agents（规划、文件、子 Agent、上下文）；Managed Deep Agents 负责生产（Slack、LangSmith Sandbox、工具、记忆、调度）。每条 Slack 线程一台沙箱（独立 Linux + 文件系统，项目跨轮常驻）；产出尽量是代码（幻灯片 HTML、动画时间线），改时间点可重渲。工具含 HyperFrames（片子当网页 + GSAP）与自研 motion-studio。知识四层：Skills（文称约 48 个、近千文件；README 写约 35，以仓库为准）、Wiki（品牌/语调/产品/约 70 部参考片拆解，技能只链过去）、Gate、Memory（团队 + 个人；`AGENTS.md` 索引曾膨胀到约 50 万 token，现约限 200 行）。规格驱动：故事板 → 分镜/animatic → 量产，顺序由代码强制。[^shao-meng-langchain-content-studio]
- Media harness: Deep Agents underneath (planning, files, sub-agents, context); Managed Deep Agents for production (Slack, LangSmith Sandbox, tools, memory, scheduling). Each Slack thread gets one sandbox (Linux + filesystem; projects persist across turns); outputs prefer code (deck HTML, animation timelines) so time-point edits re-render. Tools include HyperFrames (video as web + GSAP) and in-house motion-studio. Four knowledge layers: Skills (~48 / ~1000 files in the piece; README ~35—trust the repo), Wiki (brand, tone, product, ~70 reference-film breakdowns—skills link, don’t copy), Gate, and Memory (team + personal; `AGENTS.md` index once bloated to ~500k tokens, now ~200-line capped). Spec-driven order—storyboard → animatic → production—is code-enforced.[^shao-meng-langchain-content-studio]

- 主 Agent 统筹与异步子任务：长任务里多人会边做边改 brief；同步子 Agent 会堵住主线程，故子任务异步——主 Agent 拆工、派角色、选模型与力度，用 `start_task` / `check_tasks` / `cancel_task` / `resume_task` / `report_progress` / `schedule_wakeup` 协调；人消息可插入下一轮模型调用前。例子：隔夜改肤 52 页 PPT，主 Agent 约跑 1 小时，子 Agent 合计超过 6 小时，不堵对话。[^shao-meng-langchain-content-studio]
- Main-agent orchestration and async subtasks: long jobs see briefs change mid-flight; sync sub-agents block the main thread, so work is async—the main agent splits work, assigns roles, picks model and intensity, and coordinates via `start_task` / `check_tasks` / `cancel_task` / `resume_task` / `report_progress` / `schedule_wakeup`; human messages can insert before the next model call. Example: overnight reskin of a 52-page deck—main agent ~1 hour, sub-agents >6 hours total, without blocking the thread.[^shao-meng-langchain-content-studio]

- Bitter Lesson 与自改进：早期给弱模型堆约 115 个可复用 UI/动效组件和细则，品牌稳了但版式重复；模型（文中写 Opus 5.5）跃升后删掉大部分硬编码补丁，只留原则与高层指引，多样性反而上来——补偿模型短板的规则会过期，更长寿的是环境（工具、上下文、人如何中途干预）。快环当场写入记忆；慢环 `learn_from_job` 抽最多 5 条有证据教训挂到 skill，后续打分，每周后台合入 skill/wiki。[^shao-meng-langchain-content-studio]
- Bitter Lesson and self-improvement: early on they stacked ~115 reusable UI/motion components and rules for weaker models—brand-stable but repetitive layouts; after the model leap (Opus 5.5 in the piece) they deleted most hard-coded patches, kept principles and high-level guidance, and diversity rose—rules that patch model gaps go stale; the longer-lived layer is the environment (tools, context, mid-flight human intervention). Fast loop writes rules into memory on the spot; slow loop `learn_from_job` extracts up to five evidenced lessons onto skills, scores later jobs, and merges into skill/wiki weekly in the background.[^shao-meng-langchain-content-studio]

## 相关 / Related

- Topic: [公司级 Agent Harness 五原语](../../topics/company-agent-harness.md)
- Topic: [Agent Skill 编写](../../topics/agent-skill-authoring.md)
- Topic: [智能体视频剪辑](../../topics/agentic-video-editing.md)
- Topic: [项目指令与 Token 效率](../../topics/agents-md-token-efficiency.md)
- Topic: [把子 Agent 折进主循环](../../topics/fold-subagents-into-main-loop.md)
- Topic: [校准对 AI 的过度与不足引导](../../topics/calibrating-ai-guidance.md)
- Source: [Harrison Chase 谈公司级 Harness 五原语](./hwchase17-company-harness.md)

[^shao-meng-langchain-content-studio]: Meng Shao on four months of LangChain Content Studio
