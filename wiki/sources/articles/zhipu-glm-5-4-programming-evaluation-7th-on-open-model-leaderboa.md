---
type: Source
title: "智谱 GLM-5.4 编程评测：开源模型榜第七，但过度思考拖慢速度"
title_en: "Zhipu GLM-5.4 Programming Evaluation: 7th on Open Model Leaderboard, But Overthinking Slows It Down"
description: "AICodeKing 对智谱 GLM-5.4 的 KingBench 4 编程评测显示其为最高分开源模型，但 Max 档位因过度思考耗时极长。"
description_en: "AICodeKing's KingBench 4 programming evaluation of Zhipu GLM-5.4 shows it is the highest-scoring open model, but the Max tier is extremely slow due to overthinking."
resource: https://x.com/0xLogicrw/status/2124761174508290086
tags: [glm-5-4, kingbench-4, ai-evaluation, open-weight-model, coding-agent]
sources:
  - id: glm-5-4-kingbench-4-eval
    resource: https://x.com/0xLogicrw/status/2124761174508290086
    title: "Zhipu GLM-5.4 Programming Evaluation: 7th on Open Model Leaderboard, But Overthinking Slows It Down"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-23T20:38:02+08:00
---

# 智谱 GLM-5.4 编程评测：开源模型榜第七，但过度思考拖慢速度

*Zhipu GLM-5.4 Programming Evaluation: 7th on Open Model Leaderboard, But Overthinking Slows It Down*

帖文称，智谱 GLM-5.4 在 AICodeKing 自建的 KingBench 4 编程榜单中以 55.3% 得分排在第 7 位，也是榜单中成绩最高的开源模型；评测者称其为「用过最谨慎的模型」，能发现其他模型未找到的 Bug 和安全漏洞，但 Max 推理档位完成测试耗时 431 分钟，推理消耗达 104 万 Token，建议将其用作代码审查员或复杂工程规划工具。[^glm-5-4-kingbench-4-eval]

The post claims Zhipu GLM-5.4 scored 55.3% on AICodeKing's self-built KingBench 4 programming leaderboard, ranking 7th and topping open-source models; the evaluator calls it the most cautious model used, able to find bugs and security vulnerabilities missed by other models, but the Max reasoning tier took 431 minutes and consumed 1.04M reasoning tokens, suggesting it be used as a code reviewer or for complex engineering planning.[^glm-5-4-kingbench-4-eval]

## 摘要 / Summary

- 在 AICodeKing 的 KingBench 4 编程榜单中，GLM-5.4 得分 55.3%，位列 19 款模型第 7 位，也是榜单中成绩最高的开源模型。[^glm-5-4-kingbench-4-eval]
- On AICodeKing's KingBench 4 programming leaderboard, GLM-5.4 scored 55.3%, ranking 7th out of 19 models and topping the open-source models.[^glm-5-4-kingbench-4-eval]
- KingBench 4 要求 AI 独立完成 6 个复杂编程项目，包括游戏模拟器、Docker 替代工具、3D 室内设计器和桌面应用，成绩由博主根据作品完成情况打分。[^glm-5-4-kingbench-4-eval]
- KingBench 4 requires AI to independently complete 6 complex programming projects, including a game emulator, Docker alternative tool, 3D interior designer, and desktop app, with scores given by the blogger based on completion.[^glm-5-4-kingbench-4-eval]
- AICodeKing 称 GLM-5.4 是「用过最谨慎的模型」，能发现其他模型甚至 Fable 未找出的 Bug 和安全漏洞，对复杂项目整体架构把握不错。[^glm-5-4-kingbench-4-eval]
- AICodeKing calls GLM-5.4 the most cautious model used, saying it can find bugs and security vulnerabilities other models including Fable missed, with a good grasp of complex project architecture.[^glm-5-4-kingbench-4-eval]
- Max 推理档位下 GLM-5.4 完成测试耗时 431 分钟，而 Gemini 4 Neon 仅用 109 分钟；GLM-5.4 平均每步 22.9 秒反而更快，但执行了 1128 个步骤（Neon 的 4.6 倍），推理消耗达 104 万 Token（接近 Neon 的 15 倍）。[^glm-5-4-kingbench-4-eval]
- Under the Max reasoning tier, GLM-5.4 took 431 minutes versus 109 minutes for Gemini 4 Neon; although its average step time of 22.9 seconds is faster than Neon's 26.7 seconds, it executed 1128 steps (4.6x Neon) and consumed 1.04M reasoning tokens (nearly 15x Neon).[^glm-5-4-kingbench-4-eval]
- 在另一项安全测试中，High 和 Max 档位因思考过久触发 180 秒超时，Medium 档位则在 95 秒内完成任务。[^glm-5-4-kingbench-4-eval]
- In another safety test, High and Max tiers triggered 180-second timeouts due to overthinking, while Medium completed the task in 95 seconds.[^glm-5-4-kingbench-4-eval]
- AICodeKing 建议将 GLM-5.4 作为代码审查员或用于复杂工程规划，High 档位是能力和速度兼具的选择；模型采用循环 Transformer 架构，参数量约 7000 亿。[^glm-5-4-kingbench-4-eval]
- AICodeKing suggests using GLM-5.4 as a code reviewer or for complex engineering planning, with High as the best balance of capability and speed; the model uses a cyclic Transformer architecture with about 700 billion parameters.[^glm-5-4-kingbench-4-eval]

## 相关 / Related

- 原文：[链接](https://x.com/0xLogicrw/status/2124761174508290086)。 / Original: [link](https://x.com/0xLogicrw/status/2124761174508290086).
- Topic: [社区实测对抗刷分碰瓷 / Community evals vs score hype](../../topics/community-evals-vs-score-hype.md)
- Topic: [信任公开榜前先审质量 / Scrutinize public-benchmark quality before trusting](../../topics/public-benchmark-quality-scrutiny.md)
- Topic: [AI 评测入口与干活记录 / AI-eval gateways and work-record streams](../../topics/ai-eval-work-record-gateway.md)
- Topic: [编程 Agent 省 Token 工具与开销 / Coding-agent token-saving tooling and overhead](../../topics/coding-agent-token-saving-tooling.md)

[^glm-5-4-kingbench-4-eval]: Zhipu GLM-5.4 Programming Evaluation: 7th on Open Model Leaderboard, But Overthinking Slows It Down
