---
type: Source
title: "Claude Code 团队如何思考验证"
title_en: "How the Claude Code team thinks about verification"
description: "Claude Code 团队通过端到端、属性和差分测试构建验证循环，让编程 Agent 用证据自查代码质量。"
description_en: "The Claude Code team builds verification loops with end-to-end, property, and differential tests so coding agents can check their work with evidence."
resource: https://claude.dev/blog/how-the-claude-code-team-thinks-about-verification
tags: [claude-code, verification, agents, testing]
sources:
  - id: claude-code-verification
    resource: https://claude.dev/blog/how-the-claude-code-team-thinks-about-verification
    title: "How the Claude Code team thinks about verification"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-17T08:25:15+08:00
---

# Claude Code 团队如何思考验证

*How the Claude Code team thinks about verification*

「帖文称」Claude Code 团队约 90% 的代码由 Claude 编写并审核，因此通过端到端、属性和差分测试建立验证循环，让 Agent 用证据核查自身工作，成为团队大规模并行运行数十甚至数百个 Agent 的关键。[^claude-code-verification]

The post says the Claude Code team writes and reviews about 90% of its code with Claude, so building verification loops with end-to-end, property, and differential tests lets agents check their own work with evidence, which is key to running dozens or hundreds of agents in parallel.[^claude-code-verification]

## 摘要 / Summary

- 团队主张三类值得投入的测试：端到端测试、属性测试和差分测试，其中端到端测试最难被欺骗，能明确指出功能是否完整可用。[^claude-code-verification]
- The team highlights three test types worth investing in: end-to-end, property, and differential tests, with end-to-end tests hardest to fool and able to show concretely whether a whole feature works.[^claude-code-verification]
- 属性测试通过编写“永远不会失败”的陈述，再用 fast-check、Hypothesis 或 proptest 等库生成成千上万个输入来尝试反证，适合检查往返编码、不变量、幂等性和等价性等属性。[^claude-code-verification]
- Property tests start from a statement believed to never fail, then use libraries such as fast-check, Hypothesis, or proptest to generate thousands of inputs trying to disprove it, suiting round-trip encoding, invariants, idempotency, and equivalence.[^claude-code-verification]
- 差分测试用旧系统作为预言机，对新旧系统输入相同数据并比较输出，适用于功能应保持不变的大规模迁移场景。[^claude-code-verification]
- Differential tests treat the old system as the oracle, feeding the same inputs to old and new systems and flagging differing outputs, fitting large-scale migrations where behavior should stay the same.[^claude-code-verification]
- Claude Code 团队要求变更不能修改自身检查，审阅规则从基准或默认分支读取，永不从拉取请求的更改中读取，并把提交标记为已验证或未验证。[^claude-code-verification]
- The team ensures changes cannot modify the checks that judge them, reads REVIEW.md from the base or default branch rather than the pull request, and stamps each commit with how it was verified, including “none.”[^claude-code-verification]
- 若检查在三轮后仍失败，Claude 会停止并请人介入；代码所有者编写并细化自己的检查，直到检查能标出所有者会关注的问题。[^claude-code-verification]
- If a check still fails after three rounds, Claude stops and brings in a human; code owners write and refine their own checks until they flag what the owner would flag.[^claude-code-verification]
- 团队把提交门禁设为观察、强制等模式，观察模式只记录本会被拦截的提交，强制模式会阻止提交，且连续两次被拦截后下一次会放行以避免 Agent 卡住。[^claude-code-verification]
- The commit gate runs in off, observe, and enforce modes; observe logs what would be blocked, enforce blocks the commit, and after two blocks in a session the next commit is allowed so Claude does not get stuck.[^claude-code-verification]

## 相关 / Related

- 原文：[链接](https://claude.dev/blog/how-the-claude-code-team-thinks-about-verification)。 / Original: [link](https://claude.dev/blog/how-the-claude-code-team-thinks-about-verification).
- Topic: [智能体规模化工程 / Agent-scaled engineering](../../topics/agent-scaled-engineering.md)
- Topic: [Agent Skill 编写 / Agent skill authoring](../../topics/agent-skill-authoring.md)
- Topic: [LLM 形式化验证 / LLM formal verification](../../topics/llm-formal-verification.md)
- Topic: [AI 评测入口与干活记录 / AI-eval gateways and work-record streams](../../topics/ai-eval-work-record-gateway.md)

[^claude-code-verification]: How the Claude Code team thinks about verification
