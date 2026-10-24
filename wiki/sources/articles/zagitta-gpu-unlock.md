---
type: Source
title: Zagitta gpu-unlock：Ampere 消费卡 FP/BF16 吞吐解锁
title_en: Zagitta gpu-unlock — Ampere consumer FP/BF16 throughput unlock
description: Zagitta 的 Linux 内核模块 gpu-unlock 1.0.0 在原版 NVIDIA 驱动绑定前写速度选择器，把 GA102–GA106 上 FP/BF16→FP32 指令发射率对齐专业卡，并给出 3090 Ti 450W GEMM 前后对比。
description_en: Zagitta’s Linux kmod gpu-unlock 1.0.0 writes speed selectors before the stock NVIDIA driver binds, aligning FP/BF16→FP32 issue rates on GA102–GA106 with professional cards, with 3090 Ti 450W GEMM before/after numbers.
resource: https://github.com/Zagitta/gpu-unlock
tags: [gpu, nvidia, gpu-unlock, ampere, rtx-3090, linux-kmod, ai-compute]
sources:
  - id: zagitta-gpu-unlock
    resource: https://github.com/Zagitta/gpu-unlock
    title: GPU unlock 1.0.0
    author: human:Zagitta
generated:
  by: cursor-agent/composer
  at: 2026-10-24T21:58:26+08:00
date: 2026-10-24
---

# Zagitta gpu-unlock：Ampere 消费卡 FP/BF16 吞吐解锁

*Zagitta gpu-unlock — Ampere consumer FP/BF16 throughput unlock*

[Zagitta/gpu-unlock](https://github.com/Zagitta/gpu-unlock) 1.0.0 是一个 Linux 内核模块：把 CMP unlocker 的 V67/PLM 手法与 UEFI 方案的驱动前时机结合起来，在未修改的 NVIDIA 驱动绑定显卡之前完成解锁、写入速度选择器并做 FLR，从而把 Nvidia 30 系消费卡的 FP/BF16 指令发射率对齐到专业卡等价水平。[^zagitta-gpu-unlock]

[Zagitta/gpu-unlock](https://github.com/Zagitta/gpu-unlock) 1.0.0 is a Linux kernel module that combines the CMP unlocker’s V67/PLM technique with the pre-driver timing of the UEFI approach: it runs the unlock, writes the speed selectors, and performs FLR before the unmodified NVIDIA driver binds the card, aligning FP/BF16 instruction issue rates on Nvidia 3000-series consumer cards with their professional equivalents.[^zagitta-gpu-unlock]

## 摘要 / Summary

- 既不是 UEFI 应用，也不是打过补丁的 NVIDIA 驱动；早期 kmod 的好处是不必在每次新驱动版本上手动打补丁。[^zagitta-gpu-unlock]
- It is neither a UEFI application nor a patched NVIDIA driver; the early kmod’s benefit is that it does not require manual patching each time NVIDIA releases a new driver.[^zagitta-gpu-unlock]
- 效果是把 GA102、GA103、GA104、GA106 上 FP/BF16 FMA 并入 FP32 运算的指令发射速度翻倍；模块写入 SS0 `0x88888888`（满 BF16 速率）与 4-bit SS1 `0x8`（IMLA4）。[^zagitta-gpu-unlock]
- The effect doubles the instruction issuing speed of FP/BF16 FMA into FP32 ops on GA102, GA103, GA104, and GA106; the module writes SS0 `0x88888888` (full BF16 rate) and 4-bit SS1 `0x8` (IMLA4).[^zagitta-gpu-unlock]
- 仓库给出 3090 Ti、450 W、稠密 8192³ GEMM、FP32 累加、五样本中位数：FP16 87.46→118.39 TFLOPS，BF16 87.50→157.41 TFLOPS，TF32 42.58→82.61 TFLOPS。[^zagitta-gpu-unlock]
- The repo reports 3090 Ti dense 8192³ GEMM at 450 W, five-sample medians with FP32 accumulation: FP16 87.46→118.39 TFLOPS, BF16 87.50→157.41 TFLOPS, TF32 42.58→82.61 TFLOPS.[^zagitta-gpu-unlock]
- 包会把 `gpu_unlock` 放进 initramfs 并在 nvidia 绑定前加载；默认不做任何事，须在内核命令行显式设置 `gpu_unlock.targets=`（如 `all` 或 PCI 地址）才解锁。[^zagitta-gpu-unlock]
- Packages put `gpu_unlock` in the initramfs and load it before nvidia can bind; the module does nothing unless the kernel command line opts in with `gpu_unlock.targets=` (e.g. `all` or PCI addresses).[^zagitta-gpu-unlock]
- 内核模块与本地打包为 GPL-2.0-only；生成固件载荷派生自钉死的 CMP 参考，NVIDIA 固件仍按其自身条款。[^zagitta-gpu-unlock]
- The kernel module and local packaging are GPL-2.0-only; the generated payload derives from the pinned CMP reference, and NVIDIA firmware remains under its own terms.[^zagitta-gpu-unlock]

## 相关 / Related

- Topic: [消费级 GPU AI 算力解锁](../../topics/gpu-ai-compute-unlock.md)
- Source: [铁锤人谈 3090 解锁约 80% AI 算力](./lxfater-3090-gpu-unlock.md)

[^zagitta-gpu-unlock]: GPU unlock 1.0.0
