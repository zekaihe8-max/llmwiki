---
type: Source
title: "对抗对抗性模型蒸馏"
title_en: "Combatting adversarial distillation"
description: "OpenAI 介绍如何检测和干扰对抗性模型蒸馏，并加强对受保护推理痕迹的防护。"
description_en: "OpenAI describes how it detects and disrupts adversarial model distillation and strengthens protection of protected reasoning traces."
resource: https://openai.com/index/combatting-adversarial-distillation
tags: [adversarial-distillation, ai-safety, frontier-models, chain-of-thought, cybersecurity, model-protection]
sources:
  - id: combatting-adversarial-distillation
    resource: https://openai.com/index/combatting-adversarial-distillation
    title: "Combatting adversarial distillation"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-23T08:18:16+08:00
---

# 对抗对抗性模型蒸馏

*Combatting adversarial distillation*

「帖文称」OpenAI 正在分享如何检测和干扰对抗性蒸馏，如何加强对模型受保护推理（思维链）的防护，以及可供行业参考的经验教训。文中提到 GPT-6.2 Astra 与 GPT-6.2 Sol 的内部自适应红队评估显示，从早期请求中提取受保护推理的平均攻击成功率从 54.0% 下降至 0.2%；文章还涉及网络安全能力转移、国家安全影响，以及此前涉及 DeepSeek 与 Moonshot AI（Kimi 开发者）关联活动的披露。[^combatting-adversarial-distillation]

OpenAI shares how it detects and disrupts adversarial distillation, strengthens protections for models' protected reasoning (chain-of-thought), and distills lessons for the industry. Internal adaptive red-teaming on GPT-6.2 Astra shows the average attack success rate for extracting protected reasoning from an earlier request fell from 54.0% to 0.2%. The article also covers cyber capability transfer, national security implications, and prior disclosures involving DeepSeek and Moonshot AI (developer of Kimi).[^combatting-adversarial-distillation]

## 摘要 / Summary

- OpenAI 将对抗性蒸馏防御整合到对抗性测试、模型训练、分类器和 API 级防护中，并开展针对协调提取尝试的调查。[^combatting-adversarial-distillation]
- OpenAI integrates adversarial distillation defenses across adversarial testing, model training, classifiers, and API-level protections, alongside investigations into coordinated extraction attempts.[^combatting-adversarial-distillation]
- 在 GPT-6.2 Astra 的内部自适应红队评估中，从早期请求中提取受保护推理的平均攻击成功率从 54.0% 降至 0.2%。[^combatting-adversarial-distillation]
- In internal adaptive red-teaming of GPT-6.2 Astra, the average attack success rate for extracting protected reasoning from an earlier request fell from 54.0% to 0.2%.[^combatting-adversarial-distillation]
- 受保护推理（思维链）可包含最终答案未体现的信息，是另一模型学习前沿能力的高价值训练数据。[^combatting-adversarial-distillation]
- Protected reasoning traces can contain information omitted from final answers, making them high-value training data for another model.[^combatting-adversarial-distillation]
- 研究表明，在教师模型处理编程与防御性网络安全任务时，使用教师精确推理痕迹蒸馏的学生模型通常优于仅使用推理摘要的学生模型。[^combatting-adversarial-distillation]
- Studies show students distilled from teachers' exact reasoning traces generally outperform those trained on reasoning summaries for coding and defensive cybersecurity tasks.[^combatting-adversarial-distillation]
- OpenAI 曾在 2 月向国会简报 DeepSeek 试图蒸馏美国前沿模型的活动，并在 9 月报告干扰一起归因于 Moonshot AI 关联人员的提取活动。[^combatting-adversarial-distillation]
- OpenAI briefed Congress in February on activity indicating DeepSeek attempted to distill U.S. frontier models, and reported in September disrupting a campaign attributed in part to individuals associated with Moonshot AI.[^combatting-adversarial-distillation]
- API 级防护将模型的受保护推理绑定到生成它的对话历史，并在早期消息被重写时丢弃随后的推理，还禁止旧模型家族读取 GPT-6.2 Astra 和 Sol 的受保护推理。[^combatting-adversarial-distillation]
- API-level protections tie protected reasoning to the conversation history that produced it, drop reasoning after rewritten earlier messages, and prevent older model families from reading GPT-6.2 Astra and Sol's protected reasoning.[^combatting-adversarial-distillation]

## 相关 / Related

- 原文：[链接](https://openai.com/index/combatting-adversarial-distillation)。 / Original: [link](https://openai.com/index/combatting-adversarial-distillation).
- Topic: [前沿训练环境隔离 / Frontier training containment](../../topics/frontier-training-containment.md)
- Topic: [开放权重前沿模型 / Open-weight frontier models](../../topics/open-weight-frontier-models.md)
- Topic: [技术滥用关切的连续性 / Continuity of technology-misuse concern](../../topics/tech-misuse-concern-continuity.md)
- Topic: [网络能力测评越权事件的对齐评估 / Alignment assessment after cyber-eval incidents](../../topics/cyber-eval-incident-alignment.md)

[^combatting-adversarial-distillation]: Combatting adversarial distillation
