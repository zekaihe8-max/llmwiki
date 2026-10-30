---
type: Source
title: 宝玉解读 Claude 回答后的安全自我评估
title_en: Dotey on Claude safety self-assessment after responses
description: 宝玉转述 Claude 利用 KV cache 低成本开展回答后安全评估，并说明人工复查、隐私边界与实时拦截及自我监督的局限。
description_en: Dotey describes Claude using KV cache for inexpensive safety assessment after responses, including human review, privacy boundaries, and limits for real-time blocking and self-monitoring.
resource: https://x.com/dotey/status/2115923359149998490
tags: [claude, safety, self-assessment, misuse, monitoring]
sources:
  - id: dotey-claude-self-assessment
    resource: https://x.com/dotey/status/2115923359149998490
    title: Dotey on Claude safety self-assessment after responses
    author: human:dotey
generated:
  by: codex/gpt-6
  at: 2026-10-30T20:08:06+08:00
---

# 宝玉解读 Claude 回答后的安全自我评估

*Dotey on Claude safety self-assessment after responses*

宝玉介绍 Anthropic 的 self-assessment：Claude 回答后追加简短安全反思指令，生成不向用户展示、也不进入后续对话的评估；本文是对该帖的归档，数字与部署说法均为作者转述。[^dotey-claude-self-assessment]

Dotey describes Anthropic’s self-assessment: after Claude responds, a short safety-reflection instruction elicits an assessment that is hidden from users and excluded from subsequent conversation context. This page files that post; figures and deployment claims are relayed by its author.[^dotey-claude-self-assessment]

## 摘要 / Summary

- 机制与成本：帖文称自 6 月 Claude Fable 5 起运行，覆盖全球流量很大一部分；复用回答后的 KV cache、平均额外生成约 10 tokens，使整体推理算力增加不到 2%，成本不向客户收取。[^dotey-claude-self-assessment]

- Mechanism and cost: the post reports deployment since Claude Fable 5 in June across a large share of global traffic; reusing the response’s KV cache and generating about 10 extra tokens on average adds under 2% to overall inference compute, with no charge to customers.[^dotey-claude-self-assessment]

- 隐私与处置：据帖文转述，不额外收集用户数据，仅在现有政策允许留存的流量运行，当前排除零数据保留协议流量；评估理由可能转述对话，按对话同等规则管理。标记是进一步审查信号，单条标记不直接导致封号；部分危害按组织每晚汇总，多条高优先级标记再交人工复查。[^dotey-claude-self-assessment]

- Privacy and handling: according to the post, no additional user data is collected; assessment runs only on traffic retainable under existing policies and currently excludes zero-data-retention agreements. Rationales may paraphrase conversations and follow the same data rules. Flags signal further review rather than directly causing a ban individually; for some harm areas, nightly organization-level aggregation sends multiple high-priority flags for human review.[^dotey-claude-self-assessment]

- 效果的参照是提示式分类器：Fable 5 真实流量抽样在 1% 误报率下，检出该分类器所标可疑对话的 78%、高优先级对话的 94%。约三分之一标记不属于现有危害分类，聚类发现违规蒸馏、提示词注入与未授权智能体操作。作者开头猜测“似乎更多是为了防止蒸馏？”，不能据此断言这是唯一或主要目的。[^dotey-claude-self-assessment]

- Performance is measured against a prompted classifier: at a 1% false-positive rate on sampled Fable 5 production traffic, self-assessment detects 78% of conversations that classifier flags and 94% of high-priority ones. About one-third of flags fall outside existing harm categories; clustering surfaced prohibited distillation, prompt injection, and unauthorized agent actions. The author opens by speculating whether preventing distillation is the greater motivation; this does not establish it as the sole or primary purpose.[^dotey-claude-self-assessment]

- 边界：24 个可反复尝试的网络攻击任务中，无防护、自我评估拦截与提示式分类器拦截分别成功 19、13、6 个；线上因此用于事后标记。训练与评测依赖同一分类器，会继承其盲区；未认识的新型危害效果未知，有问题的模型也可能隐瞒自查结果。[^dotey-claude-self-assessment]

- Limits: across 24 cyberattack tasks allowing repeated attempts, 19 succeeded without protection, 13 with self-assessment blocking, and 6 with prompted-classifier blocking; production use therefore flags activity after the fact. Training and evaluation rely on the same classifier and inherit its blind spots; effectiveness on unrecognized new harms is unknown, and a problematic model may conceal issues in its assessment.[^dotey-claude-self-assessment]

## 相关 / Related

- 原帖：[宝玉的自我评估解读](https://x.com/dotey/status/2115923359149998490)。 / Original post: [Dotey’s self-assessment explanation](https://x.com/dotey/status/2115923359149998490).
- 主题：[智能体自动模式](../../topics/agent-auto-mode.md)。 / Topic: [Agent auto mode](../../topics/agent-auto-mode.md).
- 主题：[Claude 订阅风控权重](../../topics/claude-subscription-risk-control-weights.md)。 / Topic: [Claude subscription risk-control weights](../../topics/claude-subscription-risk-control-weights.md).

[^dotey-claude-self-assessment]: Dotey on Claude safety self-assessment
