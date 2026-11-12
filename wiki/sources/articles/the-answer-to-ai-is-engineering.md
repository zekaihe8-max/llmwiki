---
type: Source
title: "AI 的答案是工程"
title_en: "The answer to AI is engineering"
description: "Geoffrey Huntley 在 AI DevCon New York 的演讲称，面对安全接管新常态，答案不是更多 AI，而是工程；他主张用 Nix Overlay 建立单一事实来源，对 Git 等软件打猴子补丁，并减少对开源库依赖。"
description_en: "Geoffrey Huntley's AI DevCon New York talk argues that security take-off is the new normal and the answer to AI is engineering, not more AI; he advocates Nix overlays as a single source of truth to monkey-patch tools like Git and reduce reliance on open-source libraries."
resource: https://ghuntley.com/answer
tags: [ai, engineering, nix, security, agents]
sources:
  - id: ghuntley-answer-to-ai-is-engineering
    resource: https://ghuntley.com/answer
    title: "The answer to AI is engineering"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-12T08:16:21+08:00
---

# AI 的答案是工程

*The answer to AI is engineering*

「帖文称」Geoffrey Huntley 在 AI DevCon New York 的演讲中提出，安全接管已成为新常态，面对 AI 时代的安全威胁，答案不是更多 AI，而是工程；他主张通过 Nix Overlay 建立单一事实来源，对 Git 等软件进行猴子补丁，并减少对开源库的依赖。[^ghuntley-answer-to-ai-is-engineering]

Geoffrey Huntley's AI DevCon New York talk argues that security take-off is the new normal and the answer to AI is engineering, not more AI; he advocates using Nix overlays as a single source of truth to monkey-patch tools like Git and reduce reliance on open-source libraries.[^ghuntley-answer-to-ai-is-engineering]

## 摘要 / Summary

- 帖文称，OpenCode 曾遭泄露，日本首相曾在推特上敦促大家更新 PHP，某 HTTP 栈漏洞可让任何人远程关闭运行中的服务器，且一个存在 12 年的 GitLab 漏洞导致自托管服务器远程代码执行。[^ghuntley-answer-to-ai-is-engineering]
- The post says OpenCode was breached, Japan's Prime Minister tweeted urging everyone to update PHP, an HTTP stack vulnerability let anyone remotely shut down a running server, and a 12-year-old GitLab flaw led to remote code execution on self-managed servers.[^ghuntley-answer-to-ai-is-engineering]
- 某证书颁发机构的密钥仅为数字 4，任何人只要猜中就能为任意网站伪造 HTTPS 证书。[^ghuntley-answer-to-ai-is-engineering]
- A certificate authority's key was just the number 4, so anyone who guessed it could forge HTTPS certificates for any website.[^ghuntley-answer-to-ai-is-engineering]
- Huntley 表示，他已不再使用大部分高层开源代码，而是提示代理生成面向自身用例的首方代码，或将开源软件 vendored 进仓库供代理修改扩展。[^ghuntley-answer-to-ai-is-engineering]
- Huntley says he no longer uses much higher-level open-source code, instead prompting agents to generate first-party code built for his use case, or vendoring open-source software into his repo so agents can modify and extend it.[^ghuntley-answer-to-ai-is-engineering]
- 他使用 Nix Overlay 与 devenv，在一个文件中定义包与服务，从而生成开发者笔记本、CI/CD、代理沙箱和生产 Docker 镜像。[^ghuntley-answer-to-ai-is-engineering]
- He uses a Nix overlay and devenv to define packages and services in one file, generating developer laptops, CI/CD, agent sandboxes, and production Docker images.[^ghuntley-answer-to-ai-is-engineering]
- 他在各环境中对 Git 进行猴子补丁，移除了 force push 功能，并认为阻止模型做某事的最佳方式是移除其底层能力。[^ghuntley-answer-to-ai-is-engineering]
- He monkey-patched Git across his environments to remove force push, arguing that the best way to stop a model from doing something is to remove its ability to do it.[^ghuntley-answer-to-ai-is-engineering]
- 安全事件后，他会在 AGENTS.md 中设置提醒，在七天后自动移除临时猴子补丁和锁定的依赖。[^ghuntley-answer-to-ai-is-engineering]
- After security incidents, he adds a reminder in AGENTS.md to automatically remove temporary monkey patches and pinned dependencies after seven days.[^ghuntley-answer-to-ai-is-engineering]

## 相关 / Related

- 原文：[链接](https://ghuntley.com/answer)。 / Original: [link](https://ghuntley.com/answer).
- Topic: [智能体规模化工程 / Agent-scaled engineering](../../topics/agent-scaled-engineering.md)
- Topic: [智能体算力与治理 / Agent compute and governance](../../topics/agent-compute-and-governance.md)
- Topic: [账号与资产安全卫生 / Account and asset security hygiene](../../topics/account-and-asset-security-hygiene.md)
- Topic: [软件工厂 / Software factory](../../topics/software-factory.md)

[^ghuntley-answer-to-ai-is-engineering]: The answer to AI is engineering
