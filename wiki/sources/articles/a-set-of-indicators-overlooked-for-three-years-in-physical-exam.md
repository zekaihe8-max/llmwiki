---
type: Source
title: "三年体检单里一组没人提醒的指标，被模型拎出来了"
title_en: "A set of indicators overlooked for three years in physical exam reports, surfaced by a model"
description: "用户通过本地部署的健康Agent与模型分析三年体检报告，发现血脂指标持续异常却未被医生提醒。"
description_en: "A user analyzed three years of physical exam reports with a locally deployed health agent and model, finding consistently abnormal lipid indicators that doctors had not flagged."
resource: https://x.com/wquguru/status/2123718005624615379
tags: [agents, health, personal-ai, lipids]
sources:
  - id: wquguru-three-year-lipids-surfaced
    resource: https://x.com/wquguru/status/2123718005624615379
    title: "A set of indicators overlooked for three years in physical exam reports, surfaced by a model"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-20T20:20:28+08:00
---

# 三年体检单里一组没人提醒的指标，被模型拎出来了

*A set of indicators overlooked for three years in physical exam reports, surfaced by a model*

「帖文称」用户在胸骨下方和腹部相连处出现跳动后，用Apple Watch连测三次心电图均为窦性心律，随后将过去三年体检报告导入本地部署的健康Agent Mirobody，并配置DeepSeek模型询问需关注的问题；模型指出总胆固醇、LDL胆固醇、载脂蛋白B及脂蛋白(a)三年持续异常，且此前未有医生重点提示。[^wquguru-three-year-lipids-surfaced]

The post says that after feeling palpitations below the sternum and above the abdomen, the user took three Apple Watch ECGs, all showing sinus rhythm; they then imported three years of physical exam reports into a locally deployed health agent, Mirobody, configured with a DeepSeek model, which flagged total cholesterol, LDL cholesterol, ApoB, and lipoprotein(a) as consistently abnormal over three years despite no prior doctor warning.[^wquguru-three-year-lipids-surfaced]

## 摘要 / Summary

- 总胆固醇三年分别为 6.25、6.14、6.39 mmol/L，参考值 ≤5.2，三年均超标。[^wquguru-three-year-lipids-surfaced]
- Total cholesterol was 6.25, 6.14, and 6.39 mmol/L over three years, all above the reference limit of ≤5.2.[^wquguru-three-year-lipids-surfaced]
- LDL 胆固醇三年分别为 4.06、4.14、3.89 mmol/L，参考值 ≤3.64，三年均超标。[^wquguru-three-year-lipids-surfaced]
- LDL cholesterol was 4.06, 4.14, and 3.89 mmol/L over three years, all above the reference limit of ≤3.64.[^wquguru-three-year-lipids-surfaced]
- 脂蛋白(a)在2026年为 426 mg/L，处于欧洲共识的300–500 mg/L灰区，未到500 mg/L风险增强线。[^wquguru-three-year-lipids-surfaced]
- Lipoprotein(a) was 426 mg/L in 2026, in the 300–500 mg/L gray zone per European consensus, below the 500 mg/L risk threshold.[^wquguru-three-year-lipids-surfaced]
- Grok曾提示不排除房颤，但Apple Watch三次心电图结果均为窦性心律，未见异常。[^wquguru-three-year-lipids-surfaced]
- Grok suggested atrial fibrillation could not be ruled out, but three Apple Watch ECGs showed normal sinus rhythm.[^wquguru-three-year-lipids-surfaced]
- 用户使用本地部署的开源健康Agent Mirobody，并附GitHub项目链接。[^wquguru-three-year-lipids-surfaced]
- The user used a locally deployed open-source health agent called Mirobody and shared a GitHub project link.[^wquguru-three-year-lipids-surfaced]

## 相关 / Related

- 原文：[链接](https://x.com/wquguru/status/2123718005624615379)。 / Original: [link](https://x.com/wquguru/status/2123718005624615379).
- Topic: [哪些活已放心交给 AI / Tasks confidently handed over to AI](../../topics/tasks-confidently-handed-to-ai.md)
- Topic: [校准对 AI 的过度与不足引导 / Calibrating over- and under-guidance of AI](../../topics/calibrating-ai-guidance.md)
- Topic: [个人 Agent 云环境的备份、隔离与定时检查 / Personal-agent cloud env: backup, isolation, and schedule checks](../../topics/personal-agent-cloud-env-pitfalls.md)

[^wquguru-three-year-lipids-surfaced]: A set of indicators overlooked for three years in physical exam reports, surfaced by a model
