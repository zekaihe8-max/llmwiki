---
type: Source
title: "Meta 的 JiTTests：不靠更快审代码，而是生成会失败的测试"
title_en: "Meta's JiTTests: Not Faster Code Review, But Generating Failing Tests"
description: "Meta 通过 LLM 生成专门在新代码上失败、旧代码上通过的测试，在代码合入前捕获缺陷。"
description_en: "Meta uses LLMs to generate tests that fail on new code but pass on old code, catching defects before merge."
resource: https://x.com/shao__meng/status/2119978619196084717
tags: [meta, jit-tests, ai-testing, code-review]
sources:
  - id: dacf5aefc0725611
    resource: https://x.com/shao__meng/status/2119978619196084717
    title: "Meta's JiTTests: Not Faster Code Review, But Generating Failing Tests"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-10T20:51:42+08:00
---

# Meta 的 JiTTests：不靠更快审代码，而是生成会失败的测试

*Meta's JiTTests: Not Faster Code Review, But Generating Failing Tests*

帖文称，Meta 的 JiTTests 系统针对尚未合入的代码变更，自动生成可执行测试，故意让其在新版本上失败、在父版本上通过，以在合入前暴露行为差异；系统夜间利用空闲算力运行，并按类似 Diff Risk Score 的机制优先处理高风险变更，随后由工程师把关确认行为变化是否符合预期。[^dacf5aefc0725611]

The post says Meta's JiTTests system automatically generates executable tests for unmerged code changes, deliberately making them fail on the new version but pass on the parent version to expose behavioral differences before merge; it runs at night on idle compute and prioritizes high-risk changes using a Diff Risk Score-like mechanism, with engineers acting as gatekeepers to confirm whether behavioral changes are expected.[^dacf5aefc0725611]

## 摘要 / Summary

- 两条工作流并行：一条把每次改动当作变异生成区分新旧行为的测试，不推断作者意图；另一条根据代码、标题和摘要推断意图与风险，再构造变异生成测试。 / Two workflows run in parallel: one treats every change as a mutation to generate tests distinguishing new and old behavior without inferring author intent; the other infers intent and risk from code, title, and summary, then constructs mutations and generates tests.[^dacf5aefc0725611]
- 论文称在约 22,126 个生成测试上，感知变更的方法弱捕获量大约是传统测试加固的 4 倍、偶然失败测试的 20 倍。 / The paper says that on about 22,126 generated tests, the change-aware approach achieved weak captures about 4 times traditional test hardening and 20 times accidentally failing tests.[^dacf5aefc0725611]
- 系统用 RubFake 规则工具和多个大模型组成的评判团排序，在 600 个出现弱捕获的变更上，评判团大约把人工审阅负担降了 70%。 / The system uses RubFake rule tools and a panel of multiple large models to rank results; on 600 changes with weak captures, the judge panel reportedly reduced human review burden by about 70%.[^dacf5aefc0725611]
- 早期触达 41 个候选，8 个被确认为真阳性（约 19.5%），其中 4 个若未拦截可能导致严重故障；2026 年上半年系统在合入前帮助捕获 74 起严重隐私事故，并使同期这类事故总体发生率下降约 20%。 / Early outreach covered 41 candidates, 8 confirmed as true positives (about 19.5%), 4 of which could have caused severe outages if not blocked; in the first half of 2026, the system helped catch 74 serious privacy incidents before merge and reduced the overall rate of such incidents by about 20% during the same period.[^dacf5aefc0725611]
- 帖文指出，60% 真阳性率来自已参与者的反馈，20% 是公司自己的对比口径，文中没有给出可独立核对的对照实验。 / The post notes that the 60% true positive rate comes from participant feedback, 20% is the company's own comparison metric, and the article provides no independently verifiable control experiment.[^dacf5aefc0725611]

## 相关 / Related

- 原文：[链接](https://x.com/shao__meng/status/2119978619196084717)。 / Original: [link](https://x.com/shao__meng/status/2119978619196084717).
- Topic: [LLM 形式化验证 / LLM formal verification](../../topics/llm-formal-verification.md)
- Topic: [软件工厂 / Software factory](../../topics/software-factory.md)
- Topic: [约束重构 PR 的确定性自动合入 / Deterministic automerge for constrained refactor PRs](../../topics/deterministic-refactor-automerge.md)

[^dacf5aefc0725611]: Meta's JiTTests: Not Faster Code Review, But Generating Failing Tests
