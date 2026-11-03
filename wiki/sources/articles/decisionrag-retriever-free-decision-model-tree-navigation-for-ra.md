---
type: Source
title: "DecisionRAG：无检索器的决策模型树式导航"
title_en: "DecisionRAG: Retriever-free decision-model tree navigation for RAG"
description: "决策模型 Jev 在文档主题树上逐层做二元判断，无需检索器或预建向量索引即可定位证据段落。"
description_en: "Decision model Jev makes layer-by-layer binary judgments on a document topic tree to locate evidence passages without a retriever or prebuilt vector index."
resource: https://x.com/shao__meng/status/2117415296931901893
tags: [rag, decision-model, retrieval, agents, cornell]
sources:
  - id: decisionrag-jev
    resource: https://x.com/shao__meng/status/2117415296931901893
    title: "DecisionRAG: Retriever-free decision-model tree navigation for RAG"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-03T20:11:45+08:00
---

# DecisionRAG：无检索器的决策模型树式导航

*DecisionRAG: Retriever-free decision-model tree navigation for RAG*

帖文称，康奈尔大学论文提出 DecisionRAG，使用决策模型 Jev 在语料自带的主题→文档→段落树上逐层判断“该不该往下挖”，一次前向、不吐 token，候选放在同一上下文里一起比，不依赖第一阶段检索器，查询时也不靠预建向量索引；在 MultiDoc2Dial 上 R@1 高于稠密检索 + 8B 重排 13.8 点，Natural Questions 上 Hit@1 高 17.4 点，单次约 0.7–1.8 秒、0.2–2.3 美分。[^decisionrag-jev]

The post says a Cornell paper proposes DecisionRAG, using decision model Jev to make layer-by-layer “dig deeper or not” judgments on a corpus-native topic→document→paragraph tree, in one forward pass without emitting tokens, comparing candidates in the same shared context; it relies on neither a first-stage retriever nor a prebuilt query-time vector index, and reportedly beats dense retrieval plus an 8B reranker by 13.8 R@1 on MultiDoc2Dial and by 17.4 Hit@1 on Natural Questions, at roughly 0.7–1.8 seconds and 0.2–2.3 US cents per query.[^decisionrag-jev]

## 摘要 / Summary

- 树式导航与不可逆剪枝：把语料组织成主题→文档→段落树，每层并行二元判断并保留 top-k，其余整支剪掉；落到段落后再二元打分取 top-r，可选再用多项选择对短名单排稳。 / Tree navigation with irreversible pruning: organize corpus into topic→document→paragraph tree; each layer makes parallel binary judgments and keeps top-k, pruning the rest; after reaching passages, binary-score and take top-r, optionally rerank a shortlist via multiple-choice.[^decisionrag-jev]
- 无检索器与无向量索引：不依赖 BM25 或固定向量近邻，查询时也不构建预建向量索引；没有现成层级时可离线用标题+首句 embedding 聚成约 1000 簇，再由小模型写簇描述。 / No retriever and no vector index: does not depend on BM25 or fixed-vector nearest neighbors, and builds no prebuilt vector index at query time; when no hierarchy exists, offline cluster titles + first sentences with embeddings into about 1,000 clusters, then have a small model write cluster descriptions.[^decisionrag-jev]
- 成本与延迟优势：相对“稠密检索 + 8B 重排”，MultiDoc2Dial R@1 高 13.8 点，NQ（268 万段落）Hit@1 高 17.4 点；单次约 0.7–1.8 秒、0.2–2.3 美分；同树同预算下用 GPT-5 生成导航决策，精度差不多却慢约 34–145 倍、贵约 21–25 倍。 / Cost and latency advantage: versus “dense retrieval + 8B reranking,” MultiDoc2Dial R@1 is 13.8 points higher and NQ (2.68M passages) Hit@1 is 17.4 points higher; about 0.7–1.8 seconds and 0.2–2.3 US cents per query; using GPT-5 for navigation decisions under the same tree and budget gives similar accuracy but is roughly 34–145× slower and 21–25× more expensive.[^decisionrag-jev]
- 共享上下文与训练效果：共享上下文一起判比各自单独判使 MultiDoc2Dial R@1 提升约 7.7 点；用 Qwen3-8B 训成检索用决策模型后，MultiDoc2Dial R@1 达 60.7，比文中对照的已发表任务训练检索器再高约 5.7 点。 / Shared context and training effects: judging together in shared context improves MultiDoc2Dial R@1 by about 7.7 points versus judging separately; training Qwen3-8B as a retrieval decision model brings MultiDoc2Dial R@1 to 60.7, about 5.7 points higher than the published task-trained retrievers compared in the paper.[^decisionrag-jev]
- 基准与下游：四个基准为 MultiDoc2Dial、ConditionalQA、MTRAG（IBM Cloud）、NQ-DAPR；下游用 Qwen3.5-27B 吃 top-5 段时，MTRAG 上加稠密候选后判定正确率约 47.3%，相对重排基线约 39%。 / Benchmarks and downstream: four benchmarks are MultiDoc2Dial, ConditionalQA, MTRAG (IBM Cloud), and NQ-DAPR; downstream, feeding top-5 passages to Qwen3.5-27B yields about 47.3% correctness on MTRAG after adding dense candidates, versus about 39% for the reranking baseline.[^decisionrag-jev]

## 相关 / Related

- 原文：[链接](https://x.com/shao__meng/status/2117415296931901893)。 / Original: [link](https://x.com/shao__meng/status/2117415296931901893).
- Topic: [面向 Agent 的联网搜索重做 / Agent-native web search rebuild](../../topics/agent-native-web-search.md)
- Topic: [Agent 上下文工程 / Context engineering for agents](../../topics/context-engineering-for-agents.md)
- Topic: [智能体自动模式 / Agent auto mode](../../topics/agent-auto-mode.md)
- Topic: [面向 Agent 的模型渠道取舍 / Model provider channel tradeoffs for agents](../../topics/agent-model-channel-tradeoffs.md)

[^decisionrag-jev]: DecisionRAG: Retriever-free decision-model tree navigation for RAG
