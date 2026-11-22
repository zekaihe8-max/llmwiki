---
type: Source
title: "官方给 GPT-6.2 发了提示词补丁"
title_en: "Official prompt patch issued for GPT-6.2"
description: "OpenAI 为 GPT-6.2 发布系统提示词模板，建议删除“尽量简短”等旧规则并限制模型中途反问"
description_en: "OpenAI releases system prompt templates for GPT-6.2, advising removal of old rules such as \"be concise\" and restricting mid-task questions"
resource: https://x.com/lxfater/status/2124465462406721801
tags: [gpt-6-2, prompt-engineering, openai, system-instructions]
sources:
  - id: c8e9c841cc5b42ee
    resource: https://x.com/lxfater/status/2124465462406721801
    title: "Official prompt patch issued for GPT-6.2"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-22T20:03:32+08:00
---

# 官方给 GPT-6.2 发了提示词补丁

*Official prompt patch issued for GPT-6.2*

「帖文称」OpenAI 官方为 GPT-6.2 发布提示词补丁，在文档里放了几段可直接复制的系统提示词，并提醒从老模型切过来的用户不要把旧固定规则直接套用。帖文指出，GPT-6.2 默认更简短、更直白，若保留“回答尽量简短”等旧要求，会叠加导致回答敷衍；针对模型干到一半停下来反问，官方给出了限制中途交计划或问琐事的固定规则，并还列出了三条编码规矩。作者也说明这些模板刚放出，尚未实测，实际效果有待验证。[^c8e9c841cc5b42ee]

The post says OpenAI officially released a prompt patch for GPT-6.2, placing copyable system prompt templates in its documentation and reminding users switching from older models not to directly reuse old fixed rules. It notes that GPT-6.2 defaults to being shorter and more direct, so keeping old rules like "be concise" can stack and make replies curt; for models stopping mid-task to ask questions, official fixed rules restrict handing over plans or asking trivial matters, and three coding rules are also listed. The author adds that the templates just came out and have not been tested yet, so actual effectiveness remains to be verified.[^c8e9c841cc5b42ee]

## 摘要 / Summary

- 「帖文称」OpenAI 官方在文档里提供了可直接复制的 GPT-6.2 系统提示词模板。[^c8e9c841cc5b42ee]
- The post says OpenAI provided copyable GPT-6.2 system prompt templates in its documentation.[^c8e9c841cc5b42ee]
- 官方建议从旧模型切换时删除“回答尽量简短”等旧固定规则，避免与 GPT-6.2 默认简短叠加导致回答敷衍。[^c8e9c841cc5b42ee]
- Official advice is to delete old fixed rules such as "be concise" when switching from older models, to avoid compounding GPT-6.2's default brevity into curt replies.[^c8e9c841cc5b42ee]
- 防反问规则要求：活未完且在授权范围内不得停下来交计划或问琐事；仅在真卡死、任务大改或涉及不可撤销危险操作时才可询问。[^c8e9c841cc5b42ee]
- The anti-interruption rule requires not stopping to hand over plans or ask trivial questions if work is unfinished and within authority; ask only when truly stuck, the task changes greatly, or an irreversible dangerous operation is involved.[^c8e9c841cc5b42ee]
- 三条编码规则包括：复用现有代码而不多造辅助函数；未要求时不自行新增测试；不要用少写几行或乱缩写变量名来充当简洁。[^c8e9c841cc5b42ee]
- The three coding rules include: reuse existing code instead of adding unnecessary helper functions; do not add tests unless required; do not confuse brevity with fewer lines or garbled variable names.[^c8e9c841cc5b42ee]
- 帖文称这些模板刚发布，作者尚未实测，实际效果有待验证。[^c8e9c841cc5b42ee]
- The post says the templates were just released and the author has not tested them yet, so actual effectiveness remains to be verified.[^c8e9c841cc5b42ee]

## 相关 / Related

- 原文：[链接](https://x.com/lxfater/status/2124465462406721801)。 / Original: [link](https://x.com/lxfater/status/2124465462406721801).
- Topic: [校准对 AI 的过度与不足引导 / Calibrating over- and under-guidance of AI](../../topics/calibrating-ai-guidance.md)
- Topic: [Agent 上下文工程 / Context engineering for agents](../../topics/context-engineering-for-agents.md)
- Topic: [先复用再编写 / Reuse before write](../../topics/reuse-before-write.md)
- Topic: [项目指令与 Token 效率 / Project instructions and token efficiency](../../topics/agents-md-token-efficiency.md)

[^c8e9c841cc5b42ee]: Official prompt patch issued for GPT-6.2
