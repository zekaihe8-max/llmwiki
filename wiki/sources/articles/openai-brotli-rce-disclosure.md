---
type: Source
title: OpenAI 红队发现 Brotli 未认证远程代码执行
title_en: OpenAI red team finds unauthenticated RCE in Brotli
description: OpenAI：同批红队在 Brotli 中发现未认证远程代码执行（Node.js/Bun/Envoy 等），恶意压缩数据可接管服务端或客户端；根因二月已修但未发版，现已披露 CVE 并推动下游补丁。
description_en: OpenAI says the same red-teaming exercise found unauthenticated RCE in Brotli (in Node.js, Bun, Envoy, and peers) via malicious compressed data; the root cause was fixed in February without a release, and they disclosed a CVE while pushing downstream patches.
resource: https://x.com/OpenAI/status/2113766354386084338
tags: [openai, brotli, rce, red-teaming, disclosure]
sources:
  - id: openai-brotli-rce-disclosure
    resource: https://x.com/OpenAI/status/2113766354386084338
    title: OpenAI red team finds unauthenticated RCE in Brotli
    author: org:OpenAI
generated:
  by: cursor-agent/composer
  at: 2026-10-26T08:01:05+08:00
date: 2026-10-23
---

# OpenAI 红队发现 Brotli 未认证远程代码执行

*OpenAI red team finds unauthenticated RCE in Brotli*

[@OpenAI](https://x.com/OpenAI) 称在同批红队演练中，还发现了 Brotli 中可导致未认证远程代码执行的漏洞；Brotli 是广泛部署的压缩库，内嵌于 Node.js、Bun、Envoy 等软件。[^openai-brotli-rce-disclosure] 帖文见 <https://x.com/OpenAI/status/2113766354386084338>；补丁与缓解见 <https://patchtheplanet.org/brotli>。

[@OpenAI](https://x.com/OpenAI) says that during the same red-teaming exercise it also found a vulnerability allowing unauthenticated remote code execution in Brotli, a widely deployed compression library included in software such as Node.js, Bun, and Envoy.[^openai-brotli-rce-disclosure] Post: <https://x.com/OpenAI/status/2113766354386084338>; patch and mitigations: <https://patchtheplanet.org/brotli>.

## 摘要 / Summary

- 攻击者可通过发送或回复恶意压缩数据在受影响系统上运行自有代码，无需创建用户账号：未打补丁且接受压缩输入的服务器可被恶意客户端接管；未打补丁且接受压缩输入的客户端（如 `curl --compressed`）可被恶意服务器接管。[^openai-brotli-rce-disclosure]
- An attacker could run their own code on affected systems by sending or replying with malicious compressed data, with no need to create a user account: an unpatched server that accepts compressed input could be taken over by a malicious client, and an unpatched client that accepts compressed input (such as `curl --compressed`) could be taken over by a malicious server.[^openai-brotli-rce-disclosure]

- 根因问题二月已在 Brotli 源码中修复，但当时未意识到会构成安全漏洞，且无更新的 Brotli 发行版；因库被内嵌，包含它的软件及其用户也需跟进更新。[^openai-brotli-rce-disclosure]
- The root-cause issue was fixed in the Brotli source in February, but it was not known then to be a security vulnerability and there was no more recent Brotli release; because Brotli is built into other software, those projects and their users must take the update too.[^openai-brotli-rce-disclosure]

- OpenAI 已向 Brotli 及 Node.js 等下游项目披露；下游已发布或正在发布安全更新，Brotli 已切出新版本并发布 CVE。[^openai-brotli-rce-disclosure]
- OpenAI disclosed the vulnerability to Brotli and downstream projects such as Node.js, which released or are releasing security updates, and Brotli cut new release versions and published a CVE.[^openai-brotli-rce-disclosure]

## 相关 / Related

- Topic: [前沿训练环境隔离](../../topics/frontier-training-containment.md)
- Source: [OpenAI 加固前沿模型训练环境](./openai-securing-frontier-training.md)

[^openai-brotli-rce-disclosure]: OpenAI red team finds unauthenticated RCE in Brotli
