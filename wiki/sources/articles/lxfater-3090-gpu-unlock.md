---
type: Source
title: 铁锤人谈 3090 解锁约 80% AI 算力
title_en: lxfater on unlocking ~80% more 3090 AI compute
description: 铁锤人介绍 gpu-unlock：利用启动固件漏洞在驱动加载前改寄存器，360W 不变下 3090 PyTorch 从约 75 提到 135 TFLOPS（约 +80%），4090 分支同类吞吐接近翻倍。
description_en: 铁锤人 covers gpu-unlock—a boot-firmware exploit that rewrites protected registers before the driver loads, lifting 3090 PyTorch from about 75 to 135 TFLOPS (~80%) at the same 360W, with a 4090 branch nearly doubling similar throughput.
resource: https://x.com/lxfater/status/2113891680000901380
tags: [gpu, nvidia, rtx-3090, rtx-4090, gpu-unlock, ai-compute]
sources:
  - id: lxfater-3090-gpu-unlock
    resource: https://x.com/lxfater/status/2113891680000901380
    title: lxfater on unlocking ~80% more 3090 AI compute
    author: human:lxfater
generated:
  by: cursor-agent/composer
  at: 2026-10-24T21:58:26+08:00
date: 2026-10-24
---

# 铁锤人谈 3090 解锁约 80% AI 算力

*lxfater on unlocking ~80% more 3090 AI compute*

[@lxfater](https://x.com/lxfater)（铁锤人）称有人破解了 NVIDIA 对消费级卡的算力刀法：在功耗仍限 360W 时，通过 [gpu-unlock](https://github.com/Zagitta/gpu-unlock) 项目把 RTX 3090 的 PyTorch 测得算力从约 75 TFLOPS 提到约 135 TFLOPS，提升约 80%，并据此担心 3090 可能涨价。[^lxfater-3090-gpu-unlock] 原帖见 <https://x.com/lxfater/status/2113891680000901380>。

[@lxfater](https://x.com/lxfater) says NVIDIA's consumer-GPU compute segmentation was cracked: at the same 360W cap, the [gpu-unlock](https://github.com/Zagitta/gpu-unlock) project lifts RTX 3090 PyTorch measured throughput from about 75 TFLOPS to about 135 TFLOPS (~80%), and he worries 3090 prices may rise.[^lxfater-3090-gpu-unlock] Post: <https://x.com/lxfater/status/2113891680000901380>.

## 摘要 / Summary

- 不是靠拉高功耗超频，而是改显卡里控制运算速度、平时有权限保护的寄存器。[^lxfater-3090-gpu-unlock]
- Not power-raising overclocking: it changes permission-protected registers that control compute speed on the card.[^lxfater-3090-gpu-unlock]
- 利用 GPU 启动固件漏洞，在 NVIDIA 驱动加载前取得写入权限，把相关运算改成全速，再交给原版驱动使用。[^lxfater-3090-gpu-unlock]
- It uses a GPU boot-firmware vulnerability to gain write access before the NVIDIA driver loads, sets the relevant compute paths to full speed, then hands control to the stock driver.[^lxfater-3090-gpu-unlock]
- 主要解开的是 FP16／BF16 输入、FP32 累加一类 AI 运算的速度限制；测试算力多了约 80%。[^lxfater-3090-gpu-unlock]
- The unlock mainly lifts speed limits on AI ops with FP16/BF16 inputs and FP32 accumulate; measured compute rose about 80%.[^lxfater-3090-gpu-unlock]
- 4090 也有分支项目：同类运算指令吞吐从约 165 TFLOPS 提到约 331 TFLOPS，接近翻倍。[^lxfater-3090-gpu-unlock]
- A 4090 branch project lifts similar instruction throughput from about 165 TFLOPS to about 331 TFLOPS—nearly double.[^lxfater-3090-gpu-unlock]

## 相关 / Related

- Topic: [消费级 GPU AI 算力解锁](../../topics/gpu-ai-compute-unlock.md)
- Source: [Zagitta gpu-unlock：Ampere 消费卡 FP/BF16 吞吐解锁](./zagitta-gpu-unlock.md)

[^lxfater-3090-gpu-unlock]: lxfater on unlocking ~80% more 3090 AI compute
