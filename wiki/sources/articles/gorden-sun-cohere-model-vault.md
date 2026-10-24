---
type: Source
title: Gorden Sun 谈 Cohere Model Vault 机密计算
title_en: Gorden Sun on Cohere Model Vault confidential computing
description: Gorden Sun：Cohere 专注 toB 很滋润，并推出机密计算版 Model Vault——联合 Azure 与 NVIDIA，企业可在云端跑 AI 且全程加密、隔离推理。
description_en: Gorden Sun says Cohere thrives on B2B and launched confidential-computing Model Vault with Azure and NVIDIA so enterprises can run cloud AI with end-to-end encryption and isolated inference.
resource: https://x.com/Gorden_Sun/status/2113865401851605399
tags: [cohere, model-vault, confidential-computing, azure, nvidia, enterprise, gorden-sun]
sources:
  - id: gorden-sun-cohere-model-vault
    resource: https://x.com/Gorden_Sun/status/2113865401851605399
    title: Gorden Sun on Cohere Model Vault confidential computing
    author: human:Gorden_Sun
generated:
  by: cursor-agent/composer
  at: 2026-10-24T21:36:53+08:00
date: 2026-10-24
---

# Gorden Sun 谈 Cohere Model Vault 机密计算

*Gorden Sun on Cohere Model Vault confidential computing*

[@Gorden_Sun](https://x.com/Gorden_Sun) 评论 [@cohere](https://x.com/cohere) 的 Model Vault 公开测试帖：Cohere 专注 toB「活的的太滋润了」；并说明机密计算版 Model Vault 让企业在云端调用 AI 时不用担心敏感数据泄露。[^gorden-sun-cohere-model-vault] 原帖见 <https://x.com/Gorden_Sun/status/2113865401851605399>。

[@Gorden_Sun](https://x.com/Gorden_Sun) comments on [@cohere](https://x.com/cohere)’s Model Vault public-beta post: Cohere focuses on B2B and “lives too comfortably”; he explains that confidential-computing Model Vault lets enterprises call cloud AI without fearing sensitive-data leaks.[^gorden-sun-cohere-model-vault] Post: <https://x.com/Gorden_Sun/status/2113865401851605399>.

## 摘要 / Summary

- 企业痛点：想用大厂云端 AI，又不敢上传财务报表、医疗记录、核心源代码等机密，怕服务商或黑客偷看。[^gorden-sun-cohere-model-vault]
- Enterprise pain: firms want big-vendor cloud AI but fear uploading financials, medical records, or core source code that a provider or attacker might read.[^gorden-sun-cohere-model-vault]
- Cohere 联合微软 Azure 与英伟达，基于带机密计算的 NVIDIA H100 搭建防护环境；发送前本地软件核验对方服务器软硬件是否安全合规，确认后再发加密内容。[^gorden-sun-cohere-model-vault]
- Cohere partners with Microsoft Azure and NVIDIA on confidential-computing H100s; local software attests the remote server’s hardware and software before encrypted payloads are sent.[^gorden-sun-cohere-model-vault]
- 数据离机即全程加密，到云端后在芯片划定的硬件隔离空间解密并推理；Cohere、微软运维与底层 OS 都无法偷看内存明文；结果同样加密回传。[^gorden-sun-cohere-model-vault]
- Data stays encrypted from the client, then decrypts and runs inference only inside a chip-bounded hardware enclave; Cohere, Microsoft ops, and the host OS cannot read plaintext in memory; results return encrypted.[^gorden-sun-cohere-model-vault]
- 被转引的官方帖称 Model Vault 已公开测试，借助 NVIDIA AI Confidential Computing 与 Azure GPU，任何人可在信息受保护的前提下跑 Cohere 模型。[^gorden-sun-cohere-model-vault]
- The quoted official post says Model Vault is in public beta: with NVIDIA AI Confidential Computing and Azure GPUs, anyone can run Cohere models while keeping information secure.[^gorden-sun-cohere-model-vault]

## 相关 / Related

- Topic: [机密计算与云端 AI](../../topics/confidential-computing-cloud-ai.md)

[^gorden-sun-cohere-model-vault]: Gorden Sun on Cohere Model Vault confidential computing
