---
type: Topic
title: AI 审稿与科研实践适配
title_en: AI peer review and adapting science practice
description: AI 科研适配既涉及同行审稿质量与流程，也涉及自动化发现的发布及研究者角色；审稿比较、播客转述与未公开成果须分开评估。
description_en: Adapting science to AI concerns peer-review quality and workflows as well as releasing automated discoveries and researchers’ roles; review comparisons, podcast accounts, and unpublished results require separate assessment.
tags: [ai, peer-review, academia, science, evaluation]
sources:
  - id: emollick-ai-peer-review-science
    resource: https://x.com/emollick/status/2113483068174692831
    title: Ethan Mollick on Opus 4.8 beating human experts as peer reviewers
  - id: gorden-sun-altman-science-plural-ai
    resource: https://x.com/Gorden_Sun/status/2115827663223050504
    title: Gorden Sun on Sam Altman’s podcast remarks
generated:
  by: codex/gpt-6
  at: 2026-10-30T21:02:19+08:00
---
<!-- Same-file bilingual (project extension): title + title_en, description + description_en, bilingual section headings, ZH then EN body pairs. Proper nouns / product names / APIs / resource URLs stay in their common form. Do not invent facts; translate existing claims faithfully. -->

# AI 审稿与科研实践适配

*AI peer review and adapting science practice*

当模型在真实学术论文样本上、按多项指标胜过人类专家同行审稿时，问题不只是「AI 能不能帮忙改稿」，而是科研的审稿与实践流程如何尽快适配 AI。[^emollick-ai-peer-review-science]

When a model beats human expert peer reviewers by multiple measures on a real academic-paper sample, the issue is not only whether AI can help edit drafts, but how the peer-review and broader practice of science should adapt to AI, fast.[^emollick-ai-peer-review-science]

## 综合分析 / Synthesis

[Ethan Mollick 谈 Opus 4.8 审稿胜过人类专家](../sources/articles/emollick-ai-peer-review-science.md) 给出一条可核验的主张：在 124 篇哈佛社科论文研究中，方法范围从统计分析到形式模型再到质性工作，按各项指标 Opus 4.8 作为同行审稿人胜过人类专家；并据此呼吁学者尽快弄清如何让科学实践适配 AI。[^emollick-ai-peer-review-science] 原帖 <https://x.com/emollick/status/2113483068174692831>。帖文未给出研究机构名单、评分量表、统计检验细节或「胜过」的操作定义——本页不发明。

[Ethan Mollick on Opus 4.8 beating human experts as peer reviewers](../sources/articles/emollick-ai-peer-review-science.md) states a verifiable claim: in a study of 124 Harvard social science papers ranging from statistical analyses to formal models to qualitative work, Opus 4.8 beats human experts as peer reviewers by every measure; academics therefore need to figure out how to adapt the practice of science to AI, fast.[^emollick-ai-peer-review-science] Post: <https://x.com/emollick/status/2113483068174692831>. The post gives no lab roster, scoring rubric, statistical-test detail, or operational definition of “beats”—none are invented here.

适用边界：证据落在**学术同行审稿**（社科论文、人类专家对照、模型 Opus 4.8），不是软件形式化验证，也不是 Agent 产出侧的对抗评审会话设计。与 [对抗评审与外部证据](./adversarial-review-external-evidence.md) 同属「模型可做批评/审阅」方向，但那页是约束 Agent 产出的多线程找错与独立 judge；本页是正式学术审稿角色上的人机对比与科研流程适配。与 [LLM 形式化验证](./llm-formal-verification.md) 都谈模型审核专家级工作，但那页是开源库安全属性证明，不是论文同行审稿。与 [AI 任务时界增长](./ai-task-horizon-growth.md) 都谈能力抬升，但那页是给定成功率下人类工作时长曲线，不是审稿质量对比。

Scope: evidence is **academic peer review** (social-science papers, human-expert baseline, model Opus 4.8)—not formal software verification, and not adversarial multi-thread design for Agent outputs. It shares “models can critique/review” with [Adversarial review and external evidence](./adversarial-review-external-evidence.md), but that page is multi-thread error-hunting and an independent judge for Agent artifacts; this page is human–model comparison in the formal academic peer-review role and adapting science practice. It shares expert-level checking with [LLM formal verification](./llm-formal-verification.md), but that page is proving security properties on open-source libraries, not paper peer review. It shares capability rise with [AI task horizon growth](./ai-task-horizon-growth.md), but that page is a human-work-duration curve at a stated success rate, not peer-review quality comparison.

未改 [对抗评审与外部证据](./adversarial-review-external-evidence.md)、[LLM 形式化验证](./llm-formal-verification.md)、[AI 任务时界增长](./ai-task-horizon-growth.md)：它们已各自拥有 Agent 产出核验、代码形式化证明与时界度量；本帖可核验证据落在学术审稿人机对比与科研实践适配，宜开本 Topic，仅交叉链接。

Left [Adversarial review and external evidence](./adversarial-review-external-evidence.md), [LLM formal verification](./llm-formal-verification.md), and [AI task horizon growth](./ai-task-horizon-growth.md) unchanged: each already owns Agent-output verification, code formal proof, or task-horizon measurement; verifiable evidence here belongs on academic peer-review comparison and science-practice adaptation, so open this Topic with cross-links only.

科研实践的适配还包含成果发布与研究者角色，而不只是审稿质量。[Gorden Sun 转述 Altman](../sources/articles/gorden-sun-altman-science-plural-ai.md) 将基础科学应惠及世界与对科研自动化所致失落的尊重并列，提示应分别讨论成果的可获取性与科学共同体的角色变化。该帖同时转述未公开发现和约 1,000 万美元的单次数学证明成本，但未附证明、成本方法或完整逐字稿；它可作为适配议题的观点材料，不能验证成果有效性，也不能外推上文审稿比较的结论。[^gorden-sun-altman-science-plural-ai]

Adapting scientific practice also includes releasing results and researchers’ roles, beyond review quality. [Gorden Sun’s account of Altman](../sources/articles/gorden-sun-altman-science-plural-ai.md) places the world’s access to basic science alongside respect for the sense of loss caused by research automation, suggesting that access to findings and changing roles in the scientific community should be discussed separately. The post also reports unpublished discoveries and about $10 million per mathematical proof, but supplies no proof, costing method, or full transcript. It provides viewpoints on adaptation, without validating discoveries or extending the peer-review comparison above.[^gorden-sun-altman-science-plural-ai]

## 矛盾与变化 / Contradictions

暂无。 / None yet.

## 相关 / Related

- 来源 / Source: [Gorden Sun 转述 Altman 的科研观点 / Gorden Sun relays Altman on science](../sources/articles/gorden-sun-altman-science-plural-ai.md)

- Source: [Ethan Mollick 谈 Opus 4.8 审稿胜过人类专家](../sources/articles/emollick-ai-peer-review-science.md)
- Topic: [对抗评审与外部证据](./adversarial-review-external-evidence.md)
- Topic: [LLM 形式化验证](./llm-formal-verification.md)
- Topic: [AI 任务时界增长](./ai-task-horizon-growth.md)

[^emollick-ai-peer-review-science]: Ethan Mollick on Opus 4.8 beating human experts as peer reviewers

[^gorden-sun-altman-science-plural-ai]: Gorden Sun on Sam Altman’s podcast remarks
