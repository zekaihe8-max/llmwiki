---
type: Source
title: 邵萌谈 Google Research「SLEEP」离线巩固记忆
title_en: Meng Shao on Google Research SLEEP offline memory consolidation
description: 邵萌介绍 Google Research「SLEEP」：在固定架构下让 LLM 在清醒交互与睡眠巩固间周期切换，把短时上下文写入可扩展长时参数并在做梦阶段用合成数据自我改进，以减轻灾难性遗忘与知识截止日期；帖内概括 NREM 式巩固、REM 式自我改进及翻译/长上下文/事实注入/数学推理等结果要点。
description_en: Meng Shao introduces Google Research SLEEP—under fixed architecture, LLMs cycle between wake interaction and sleep consolidation, writing fragile short-term context into expandable long-term parameters and self-improving with synthetic data in a dream phase to mitigate catastrophic forgetting and knowledge cutoffs; the post summarizes NREM-like consolidation, REM-like self-improvement, and result highlights on translation, long context, fact injection, and math reasoning.
resource: https://x.com/shao__meng/status/2115633448702615604
tags: [google-research, sleep, continual-learning, catastrophic-forgetting, memory, moe, long-context, shao-meng]
sources:
  - id: shao-meng-google-research-sleep
    resource: https://x.com/shao__meng/status/2115633448702615604
    title: Meng Shao on Google Research SLEEP offline memory consolidation
    author: human:shao__meng
generated:
  by: cursor-agent/composer-2.5
  at: 2026-10-29T20:24:00+08:00
date: 2026-10-27
---
<!-- Same-file bilingual (project extension): title + title_en, description + description_en, bilingual section headings, ZH then EN body pairs. Proper nouns / product names / APIs / resource URLs stay in their common form. Do not invent facts; translate existing claims faithfully. -->

# 邵萌谈 Google Research「SLEEP」离线巩固记忆

*Meng Shao on Google Research SLEEP offline memory consolidation*

[@shao__meng](https://x.com/shao__meng) 介绍 Google Research 新发布的 **SLEEP**：给大模型加一段「离线巩固记忆」的周期，减轻灾难性遗忘。目标问题是部署后知识近似冻结——硬调参易灾难性遗忘，只靠上下文学习（ICL）则知识停在当前会话、窗口外即失。做法是在固定架构与既定训练规则下，让 LLM 在「清醒交互」与「睡眠巩固」之间周期切换：先把短时上下文里的脆弱信息写进可扩展的长时参数，再在「做梦」阶段用合成数据自我改进。[^shao-meng-google-research-sleep] 博文链见帖内 <https://t.co/VJ6VCRbpRK>（`research.google/blog/the-sleep…`）；原帖 <https://x.com/shao__meng/status/2115633448702615604>。

[@shao__meng](https://x.com/shao__meng) introduces Google Research’s new **SLEEP**: an offline memory-consolidation cycle for LLMs to reduce catastrophic forgetting. The problem framed is that post-deployment knowledge stays nearly frozen—continual weight updates often erase old skills, while ICL alone keeps knowledge in the current session and loses short-term information once the window ends. Under fixed architecture and training rules, the LLM alternates **wake interaction** and **sleep consolidation**: first write fragile short-term context into expandable long-term parameters, then self-improve in a **dream** phase with synthetic data.[^shao-meng-google-research-sleep] Blog link in post: <https://t.co/VJ6VCRbpRK> (`research.google/blog/the-sleep…`); post: <https://x.com/shao__meng/status/2115633448702615604>.

## 摘要 / Summary

- **背景**：预训练 + ICL 很强，但部署后仍近似静态、有知识截止日期；持续改参数常冲掉旧能力（灾难性遗忘）；只靠 ICL，短期信息随会话结束而消失。[^shao-meng-google-research-sleep]
- **Background**: Pretraining plus ICL is strong, but deployed models stay nearly static with knowledge cutoffs; continual parameter updates often wipe old capabilities (catastrophic forgetting); ICL alone leaves short-term information when the session ends.[^shao-meng-google-research-sleep]
- **清醒（Active / wake）**：正常接收与处理输入；临时信息放在快、短时的记忆组件里。[^shao-meng-google-research-sleep]
- **Wake (Active)**: Normal input handling; temporary information sits in fast, short-term memory components.[^shao-meng-google-research-sleep]
- **睡眠（Sleep）**：暂停新输入，算力转向记忆巩固与自我改进；离线阶段解锁预先留好的 MoE 记忆块，并用模型自己生成的练习样例更新权重。术语借自神经科学，实现仍是固定架构上的自动化后训练，不改核心代码与设计。[^shao-meng-google-research-sleep]
- **Sleep**: Pause new input and shift compute to consolidation and self-improvement; offline, unlock reserved MoE memory blocks and update weights with self-generated practice examples. Neuroscience-inspired naming, but still automated post-training on a fixed architecture without changing core code/design.[^shao-meng-google-research-sleep]
- **巩固（类比 NREM / 慢波睡眠）**：动态扩容；结合 MoE 与文中 **Hope** 架构，把新解锁的低秩专家写入更稳、更低频的记忆块，尽量少动旧参数；用 **广义知识蒸馏（GKD）** 与强化学习式模仿做「知识播种 / 向上蒸馏」（on-policy distillation 对自采样序列做逐 token 教师反馈，**Learning to Imitate（LTI）** 按语义与 Levenshtein 等相似度给前缀续写打分）；巩固后 **突触修剪**——重置高频临时参数，为下一轮清醒腾出容量。[^shao-meng-google-research-sleep]
- **Consolidation (NREM / slow-wave analogy)**: Dynamic expansion; with MoE and the **Hope** architecture in the post, newly unlocked low-rank experts write into stabler, lower-frequency memory blocks while touching old parameters as little as possible; **Generalized Knowledge Distillation (GKD)** plus RL-style imitation for “seeding / upward distillation” (on-policy distillation with per-token teacher feedback on self-sampled sequences; **Learning to Imitate (LTI)** scores prefix continuations by semantic and Levenshtein-like similarity); after consolidation, **synaptic pruning** resets high-frequency temporary parameters for the next wake cycle.[^shao-meng-google-research-sleep]
- **做梦式自我改进（类比 REM）**：合成数据时 MoE 路由随机激活非常规专家以促跨域混搭；梯度式数据筛选保留最可能提升整体能力的「梦境」样本；对优选样本监督微调并检查下游任务是否变好。[^shao-meng-google-research-sleep]
- **Dream-like self-improvement (REM analogy)**: When generating synthetic data, MoE routing randomly activates atypical experts for cross-domain mixing; gradient-based data selection keeps “dream” samples most likely to improve overall capability; SFT on selected samples plus checks that downstream tasks actually improve.[^shao-meng-google-research-sleep]
- **理论侧（帖述）**：巩固 ≈ 结构化低秩压缩——选出对齐 on-policy 行为又保留语义与任务奖励的方向；参数扩展给写入空间以减轻覆盖旧知识。做梦 ≈ 改善学习几何——随机专家拓宽梯度方向，梯度筛选强调有用更新。[^shao-meng-google-research-sleep]
- **Theory (as relayed)**: Consolidation as structured low-rank compression—pick directions aligned with on-policy behavior while preserving semantics and task rewards; expansion gives write space to reduce overwriting old knowledge. Dreaming as better learning geometry—random experts broaden gradient directions, gradient selection emphasizes useful updates.[^shao-meng-google-research-sleep]
- **结果要点（帖述，非独立复现）**：持续翻译（未见语言如满语、Kalamang 多阶段评测）SLEEP 近乎零掉点，ICL / Cartridges / SFT 等基线遗忘更重；长上下文 BABILong 称可近乎完美扩到约 **1000 万 token**，睡眠期把长文压进参数记忆（对比含 GPT-4、Titans 等）；事实注入 SQuAD / 持续预训练下单任务约 **48.9%**、CPT 约 **46.2%**，优于帖中列出的基座、SFT、SEAL 等表述；数学推理睡眠增强基座在 AIME 24/25、HMMT 25 上分别约 **79.2% / 69.0% / 46.1%**，优于帖中 SFT、GRPO、OPSD 等。[^shao-meng-google-research-sleep]
- **Result highlights (post relay, not independently verified here)**: Continual translation on unseen languages (e.g. Manchu, Kalamang)—SLEEP near zero drop vs heavier forgetting for ICL, Cartridges, SFT baselines; long context on BABILong—claims near-perfect scale to ~**10M tokens**, consolidating long text into parametric memory during sleep (vs GPT-4, Titans, etc. in the post); fact injection on SQuAD / CPT—~**48.9%** single-task and ~**46.2%** CPT, better than base, SFT, SEAL as stated; math reasoning—sleep-augmented base ~**79.2% / 69.0% / 46.1%** on AIME 24/25 and HMMT 25 vs SFT, GRPO, OPSD in the post.[^shao-meng-google-research-sleep]

## 相关 / Related

- Topic: [Agent 上下文工程](../../topics/context-engineering-for-agents.md)
- Topic: [长对话默认压缩低于模型窗口](../../topics/long-conversation-default-compression.md)

[^shao-meng-google-research-sleep]: Meng Shao on Google Research SLEEP offline memory consolidation
