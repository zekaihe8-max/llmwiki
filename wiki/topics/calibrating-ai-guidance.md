---
type: Topic
title: 校准对 AI 的过度与不足引导
title_en: Calibrating over- and under-guidance of AI
description: 用人与 AI 协作时，过度约束（模型其实更懂）与引导不足（跑偏、偏见、缺上下文）都会出错；管好这颗松紧旋钮可被当成招人时的首要技能信号。
description_en: When working with AI, both over-constraining (the model may know better) and under-guiding (off-track, wrong biases, missing context) fail; managing that dial can be treated as a top hiring-skill signal.
tags: [ai, guidance, hiring, skill, collaboration]
sources:
  - id: rauchg-over-under-guide-ai
    resource: https://x.com/rauchg/status/2114085432749347086
    title: Rauch on over- and under-guiding AI
  - id: shao-meng-langchain-content-studio
    resource: https://x.com/shao__meng/status/2115345069570212202
    title: Meng Shao on four months of LangChain Content Studio
  - id: dotey-openai-swe-interview-flow
    resource: https://x.com/dotey/status/2115556902876991894
    title: Dotey relays an OpenAI SWE interview walkthrough
  - id: financeyf5-anthropic-analyst-agent-deference
    resource: https://x.com/FinanceYF5/status/2115698963919884666
    title: AI Will on Anthropic’s analyst–agent deference experiment
  - id: shao-meng-addy-opus-overprompting
    resource: https://x.com/shao__meng/status/2115986116482613486
    title: "Meng Shao relays Addy on overprompting in the Opus 5.5 era"
  - id: heydengai-less-prompting-more-acceptance
    resource: https://x.com/heydengai/status/2116029608818815439
    title: "heydengai on AI coding: less prompting, more acceptance review"
generated:
  by: codex/gpt-6
  at: 2026-10-30T20:50:32+08:00
---
<!-- Same-file bilingual (project extension): title + title_en, description + description_en, bilingual section headings, ZH then EN body pairs. Proper nouns / product names / APIs / resource URLs stay in their common form. Do not invent facts; translate existing claims faithfully. -->

# 校准对 AI 的过度与不足引导

*Calibrating over- and under-guidance of AI*

与 AI 协作不是「越细越好」或「越放手越好」：有时人会过度引导——模型其实比人更懂、更聪明；有时又引导不足——模型会跑偏、带错误偏见或错过上下文。管好这颗松紧旋钮，可被当成招人时看的首要（#0）技能信号。[^rauchg-over-under-guide-ai]

Working with AI is not “more detail always wins” or “more autonomy always wins”: people sometimes over-guide—when the model knows better and is more intelligent—and sometimes under-guide—when it goes off-track, carries wrong biases, or misses context. Managing that dial can be treated as the #0 skill signal in hiring.[^rauchg-over-under-guide-ai]

## 综合分析 / Synthesis

[Rauch 谈过度与不足引导 AI](../sources/articles/rauchg-over-under-guide-ai.md) 把失败模式写成一对：过度引导与引导不足，并把「管好这颗超能力」直接升格为招人 #0 技能，而非某次提示词技巧清单。[^rauchg-over-under-guide-ai] 原帖 <https://x.com/rauchg/status/2114085432749347086>。

[Rauch on over- and under-guiding AI](../sources/articles/rauchg-over-under-guide-ai.md) frames the failure modes as a pair—over-guidance and under-guidance—and elevates “managing this superpower” to a #0 hiring skill, not a one-off prompt checklist.[^rauchg-over-under-guide-ai] Post: <https://x.com/rauchg/status/2114085432749347086>.

[邵萌谈 LangChain Content Studio 四个月实践](../sources/articles/shao-meng-langchain-content-studio.md) 把同一旋钮落到设计 Agent：引导不足时模型「分布收敛」成 zombie UI / AI 俗套，须写入原则、护栏与反馈推理；过度引导时早期约 115 个硬编码组件细则让品牌稳但版式重复，模型跃升后删补丁、留原则，多样性反而上来——补偿短板的细则会过期，长寿的是环境与中途干预。这是产品 harness 上的松紧校准，不是招人 #0 信号本身；Skill 删留见 [Agent Skill 编写](./agent-skill-authoring.md)。[^shao-meng-langchain-content-studio] 原帖 <https://x.com/shao__meng/status/2115345069570212202>。

[Meng Shao on four months of LangChain Content Studio](../sources/articles/shao-meng-langchain-content-studio.md) lands the same dial on a design agent: under-guidance yields distributional convergence into zombie UI / AI slop, so principles, rails, and feedback reasoning must be written in; over-guidance via ~115 early hard-coded component rules kept brand stable but layouts repetitive, and deleting patches for principles after the model leap raised diversity—gap-patching rules go stale; the durable layer is environment and mid-flight intervention. That is product-harness calibration of the dial, not the #0 hiring signal itself; keep/drop of Skills lives under [Agent skill authoring](./agent-skill-authoring.md).[^shao-meng-langchain-content-studio] Post: <https://x.com/shao__meng/status/2115345069570212202>.

[宝玉译介 OpenAI 软件工程师面试全流程](../sources/articles/dotey-openai-swe-interview-flow.md) 把同一旋钮落到**招聘环**：OpenAI 官网写明有的面试允许 AI、有的考独立解题；部分 SWE 候选人另遇实验轮——在既有代码库上用 Codex / Claude Code 等智能体啃手写做不完的大题（评分未公开）。这与 Rauch 的招人 #0「松紧旋钮」同向：雇人时要看能否在「不许用 AI 的轮次」与「专门测带模型干活」之间切换，而非只会一侧。[^dotey-openai-swe-interview-flow] 原帖 <https://x.com/dotey/status/2115556902876991894>。

[Dotey relays an OpenAI SWE interview walkthrough](../sources/articles/dotey-openai-swe-interview-flow.md) lands the same dial on **interview loops**: OpenAI’s public guide says some interviews allow AI tools and others test independent solving; some SWE candidates also hit a pilot round—use Codex / Claude Code–style agents on an oversized problem atop an existing repo (grading undisclosed). That aligns with Rauch’s hiring #0 tight/loose dial: hiring should probe switching between “no-AI rounds” and “show how you run models,” not excellence on only one side.[^dotey-openai-swe-interview-flow] Post: <https://x.com/dotey/status/2115556902876991894>.

[AI Will 转述 Anthropic 分析师随智能体倾向实验](../sources/articles/financeyf5-anthropic-analyst-agent-deference.md) 补第三种失败面：专家把分析工作交给智能体后，约 86% 决策仍跟随智能体**预设倾向**，且许多人未察觉——这不是「对人引导模型」松紧拧错，而是**人自以为在拍板、实际对齐 Agent 默认**；完整主张与边界见 [专家决策跟随智能体预设](./expert-decisions-follow-agent-presets.md)。[^financeyf5-anthropic-analyst-agent-deference] 原帖 <https://x.com/FinanceYF5/status/2115698963919884666>。

[AI Will on Anthropic’s analyst–agent deference experiment](../sources/articles/financeyf5-anthropic-analyst-agent-deference.md) adds a third failure surface: after experts delegate analytic work to agents, about 86% of decisions still followed the agent’s **preset tendency**, and many did not notice—not mis-tuning the human→model guidance dial, but **believing you decide while aligning with agent defaults**; full claim and scope under [Expert decisions following agent presets](./expert-decisions-follow-agent-presets.md).[^financeyf5-anthropic-analyst-agent-deference] Post: <https://x.com/FinanceYF5/status/2115698963919884666>.

与 [发散任务先人审设计](./divergent-tasks-human-design-gate.md) 同属「人何时收紧、何时放手」，但切面不同：那页按任务发散强弱切换介入点（设计稿门禁 vs 单提示词 + 结果审）；本页是把过度/不足引导本身当成可校准的元技能与招人信号。与 [一次只问一个问题](./one-question-at-a-time.md) 同向「欠规格时先收束方向」，但那页是顺序式澄清手法，不是双边松紧旋钮。与 [智能体规模化工程](./agent-scaled-engineering.md) 中「少当传话筒、交全量数据与真结果」可同读为反对某一侧过度过滤，但那页主张的是团队产能与工作流价值排序，不是本页的招人 #0 校准技能。

It shares “when to tighten vs loosen” with [Human design gate for divergent tasks](./divergent-tasks-human-design-gate.md), but different cuts: that page shifts checkpoints by task divergence (design-draft gate vs single prompt + result review); this page treats over-/under-guidance itself as a calibratable meta-skill and hiring signal. It aligns with [One question at a time](./one-question-at-a-time.md) on narrowing direction when underspecified, but that page is a sequential clarification move, not a bilateral tight/loose dial. It can be read alongside [Agent-scaled engineering](./agent-scaled-engineering.md)’s “stop being a messenger; hand full data and real outcomes” as resistance to one form of over-filtering, but that page owns team throughput and workflow value ranking, not this page’s #0 hiring calibration skill.

模型升级后，校准引导可按“目标与验收明确、实现步骤放手”执行：先用澄清形成规格，再到新会话实现；旧指令先删后按实际遗漏恢复。这为 Content Studio 的删补丁经验增加操作方法，但文中系统提示删八成的评测说法缺少数据，不能推广成所有任务都应少写提示。 见[邵萌转述 Addy](../sources/articles/shao-meng-addy-opus-overprompting.md)。[^shao-meng-addy-opus-overprompting]

After a model upgrade, guidance can be calibrated by making goals and verification explicit while leaving implementation steps open: clarify a specification, implement in a fresh session, and remove old instructions before restoring observed omissions. This operationalizes Content Studio’s patch-removal experience, but the reported evaluation claim about removing 80% of a system prompt lacks data and does not establish that every task needs less prompting. See [Meng Shao relaying Addy](../sources/articles/shao-meng-addy-opus-overprompting.md).[^shao-meng-addy-opus-overprompting]

目标与验收明确后，减少过程提示还需要保留责任分工：[小邓的概括](../sources/articles/heydengai-less-prompting-more-acceptance.md)将其写为人定目标与检查标准、AI 自主执行并自审、最后由人验收。这与邵萌转述 Addy 的目标导向建议同向，补充的是自审先于人审的顺序；它仍保留人定义成功与最终检查的职责，不能把“少说话”理解为省去验收。原帖没有提供自审机制或效率比较。[^heydengai-less-prompting-more-acceptance]

Once goals and acceptance criteria are clear, reducing implementation prompts still requires a division of responsibility: [heydengai’s summary](../sources/articles/heydengai-less-prompting-more-acceptance.md) assigns goals and checks to humans, execution and initial self-review to AI, and final acceptance review to humans. It aligns with Meng Shao’s account of Addy’s goal-oriented advice and adds an explicit self-review-before-human-review sequence. Humans still define success and inspect results; less talking does not remove acceptance review. The post supplies neither a self-review mechanism nor an efficiency comparison.[^heydengai-less-prompting-more-acceptance]

## 矛盾与变化 / Contradictions

[Rauch 谈过度与不足引导 AI](../sources/articles/rauchg-over-under-guide-ai.md) 把协作失败收成「人对模型引导过紧或过松」，并把管好旋钮当作可训练的 #0 技能。[^rauchg-over-under-guide-ai] [AI Will 转述 Anthropic 分析师随智能体倾向实验](../sources/articles/financeyf5-anthropic-analyst-agent-deference.md) 则显示专家委托智能体后，决策可大量跟随智能体预设倾向而本人未察觉——问题不只在「有没有拧对松紧」，还在**自觉主导与实测对齐之间的裂缝**；后者详述见 [专家决策跟随智能体预设](./expert-decisions-follow-agent-presets.md)。[^financeyf5-anthropic-analyst-agent-deference] 两来源可并存：旋钮技能仍重要，但不能替代对委托后主导权的测量与外部核验。

[Rauch on over- and under-guiding AI](../sources/articles/rauchg-over-under-guide-ai.md) folds collaboration failure into “humans guide the model too tight or too loose” and treats dial management as a trainable #0 skill.[^rauchg-over-under-guide-ai] [AI Will on Anthropic’s analyst–agent deference experiment](../sources/articles/financeyf5-anthropic-analyst-agent-deference.md) reports that after delegation, decisions can largely follow agent preset tendencies without awareness—a gap between **felt leadership and measured alignment**, not only mis-tuned guidance; detail under [Expert decisions following agent presets](./expert-decisions-follow-agent-presets.md).[^financeyf5-anthropic-analyst-agent-deference] Both can stand: dial skill still matters, but does not replace measuring leadership after delegation and external checks.

[小邓](../sources/articles/heydengai-less-prompting-more-acceptance.md)笼统主张执行、自审后再由人看结果；[WquGuru](../sources/articles/wquguru-divergent-tasks-human-design-gate.md)则对界面设计等强发散任务要求先人审设计稿。两者在人介入时点上有张力：前者未区分任务类型，后者给出事前门禁的适用边界；不能据前者取消强发散任务的设计把关。小邓未说明自审是否独立，因此其建议也未解决[对抗评审与外部证据](./adversarial-review-external-evidence.md)所强调的同会话自评风险。[^heydengai-less-prompting-more-acceptance]

[heydengai](../sources/articles/heydengai-less-prompting-more-acceptance.md) broadly recommends human inspection after execution and self-review, while [WquGuru](../sources/articles/wquguru-divergent-tasks-human-design-gate.md) calls for human approval of design drafts before highly divergent work such as UI implementation. Their human checkpoints are in tension: the former does not distinguish task types, while the latter defines a scope for earlier gates. The former does not justify removing design approval for divergent tasks. Since heydengai does not specify independent self-review, the advice also leaves unresolved the same-session self-evaluation risk emphasized in [Adversarial review and external evidence](./adversarial-review-external-evidence.md).[^heydengai-less-prompting-more-acceptance]

## 相关 / Related

- [小邓谈少说话多验收 / heydengai on less prompting and more acceptance review](../sources/articles/heydengai-less-prompting-more-acceptance.md)

- [邵萌转述 Addy / Meng Shao relays Addy](../sources/articles/shao-meng-addy-opus-overprompting.md)

- Source: [Rauch 谈过度与不足引导 AI](../sources/articles/rauchg-over-under-guide-ai.md)
- Source: [邵萌谈 LangChain Content Studio 四个月实践](../sources/articles/shao-meng-langchain-content-studio.md)
- Source: [宝玉译介 OpenAI 软件工程师面试全流程](../sources/articles/dotey-openai-swe-interview-flow.md)
- Source: [AI Will 转述 Anthropic 分析师随智能体倾向实验](../sources/articles/financeyf5-anthropic-analyst-agent-deference.md)
- Topic: [专家决策跟随智能体预设](./expert-decisions-follow-agent-presets.md)
- Topic: [冲劲胜过资历](./hunger-beats-tenure.md)
- Topic: [发散任务先人审设计](./divergent-tasks-human-design-gate.md)
- Topic: [一次只问一个问题](./one-question-at-a-time.md)
- Topic: [智能体规模化工程](./agent-scaled-engineering.md)
- Topic: [Agent Skill 编写](./agent-skill-authoring.md)

[^rauchg-over-under-guide-ai]: Rauch on over- and under-guiding AI
[^shao-meng-langchain-content-studio]: Meng Shao on four months of LangChain Content Studio
[^dotey-openai-swe-interview-flow]: Dotey relays an OpenAI SWE interview walkthrough
[^financeyf5-anthropic-analyst-agent-deference]: AI Will on Anthropic’s analyst–agent deference experiment

[^shao-meng-addy-opus-overprompting]: Meng Shao relays Addy on overprompting in the Opus 5.5 era

[^heydengai-less-prompting-more-acceptance]: heydengai on less prompting and more acceptance review
