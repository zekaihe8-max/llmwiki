---
type: Topic
title: 消费级 GPU AI 算力解锁
title_en: Consumer GPU AI compute unlock
description: 社区可用驱动前软件路径改写速度选择器，在相同功耗上限下解开消费级 NVIDIA Ampere 卡对 FP/BF16→FP32 AI 运算的吞吐限制。
description_en: Community projects can rewrite speed selectors on a pre-driver software path, unlocking FP/BF16→FP32 AI throughput caps on consumer NVIDIA Ampere GPUs at the same power limit.
tags: [gpu, nvidia, ai-compute, gpu-unlock, firmware]
sources:
  - id: lxfater-3090-gpu-unlock
    resource: https://x.com/lxfater/status/2113891680000901380
    title: lxfater on unlocking ~80% more 3090 AI compute
  - id: zagitta-gpu-unlock
    resource: https://github.com/Zagitta/gpu-unlock
    title: GPU unlock 1.0.0
generated:
  by: cursor-agent/composer
  at: 2026-10-24T21:58:26+08:00
---

# 消费级 GPU AI 算力解锁

*Consumer GPU AI compute unlock*

消费级 NVIDIA GPU 上，部分 AI 相关吞吐可被软件刀法限制；社区项目可在官方驱动绑定前改写速度选择器等受保护状态，在功耗上限不变时显著抬高测得 TFLOPS，而不是靠传统超频拉高功耗。[^lxfater-3090-gpu-unlock][^zagitta-gpu-unlock]

On consumer NVIDIA GPUs, some AI-related throughput can be software-capped; community projects can rewrite speed selectors and other protected state before the stock driver binds and raise measured TFLOPS at the same power limit—unlike classic power-raising overclocks.[^lxfater-3090-gpu-unlock][^zagitta-gpu-unlock]

## 综合分析 / Synthesis

[铁锤人谈 3090 解锁约 80% AI 算力](../sources/articles/lxfater-3090-gpu-unlock.md) 介绍 [gpu-unlock](https://github.com/Zagitta/gpu-unlock)：在 NVIDIA 驱动加载前取得写入权限，把控制运算速度的寄存器改成全速，再交给原版驱动；主要松的是 FP16／BF16 输入、FP32 累加一类限制。[^lxfater-3090-gpu-unlock] 帖中称 3090 在 360W 限制下 PyTorch 从约 75 TFLOPS 到约 135 TFLOPS（约 +80%），4090 分支同类指令吞吐从约 165 到约 331 TFLOPS（接近翻倍），并担心二手/市场价可能因此上扬。[^lxfater-3090-gpu-unlock] 原帖 <https://x.com/lxfater/status/2113891680000901380>。

[lxfater on unlocking ~80% more 3090 AI compute](../sources/articles/lxfater-3090-gpu-unlock.md) covers [gpu-unlock](https://github.com/Zagitta/gpu-unlock): gaining write access before the NVIDIA driver loads, setting compute-speed registers to full speed, then handing off to the stock driver—mainly lifting FP16/BF16-in, FP32-accumulate limits.[^lxfater-3090-gpu-unlock] The post reports 3090 PyTorch from about 75 to 135 TFLOPS at 360W (~80%), a 4090 branch from about 165 to 331 TFLOPS on similar instruction throughput (nearly double), and worry that market prices may rise.[^lxfater-3090-gpu-unlock] Post: <https://x.com/lxfater/status/2113891680000901380>.

官方仓库 Source [Zagitta gpu-unlock：Ampere 消费卡 FP/BF16 吞吐解锁](../sources/articles/zagitta-gpu-unlock.md) 将实现钉死为早期 Linux 内核模块（CMP unlocker 的 V67/PLM 与 UEFI 方案的驱动前时机），既非 UEFI 应用也非打补丁驱动，从而避免每次新驱动版本手动打补丁。[^zagitta-gpu-unlock] 宣称作用范围是 GA102／GA103／GA104／GA106，把 FP/BF16 FMA→FP32 的指令发射速度翻倍，并给出 3090 Ti、450 W、稠密 8192³ GEMM（FP32 累加、五样本中位数）：FP16 87.46→118.39、BF16 87.50→157.41、TF32 42.58→82.61 TFLOPS。[^zagitta-gpu-unlock] 解锁须内核命令行 `gpu_unlock.targets=` 显式 opt-in。原文 <https://github.com/Zagitta/gpu-unlock>。

The official repo Source [Zagitta gpu-unlock — Ampere consumer FP/BF16 throughput unlock](../sources/articles/zagitta-gpu-unlock.md) pins the implementation as an early Linux kmod (CMP unlocker V67/PLM plus UEFI-style pre-driver timing)—neither a UEFI app nor a patched driver—so each new NVIDIA driver need not be hand-patched.[^zagitta-gpu-unlock] It claims scope on GA102/GA103/GA104/GA106, doubling FP/BF16 FMA→FP32 issue speed, and reports 3090 Ti dense 8192³ GEMM at 450 W (FP32 accumulate, five-sample medians): FP16 87.46→118.39, BF16 87.50→157.41, TF32 42.58→82.61 TFLOPS.[^zagitta-gpu-unlock] Unlock requires explicit kernel-cmdline `gpu_unlock.targets=` opt-in. Original: <https://github.com/Zagitta/gpu-unlock>.

## 矛盾与变化 / Contradictions

- **机制表述**：铁锤人帖强调「启动固件漏洞」；官方 README 强调早期 kmod + 驱动前时机，并明确不是 UEFI 应用、也不是打补丁驱动。[^lxfater-3090-gpu-unlock][^zagitta-gpu-unlock]
- **Mechanism framing**: lxfater stresses a boot-firmware vulnerability; the official README stresses an early kmod with pre-driver timing and states it is neither a UEFI application nor a patched NVIDIA driver.[^lxfater-3090-gpu-unlock][^zagitta-gpu-unlock]
- **基准数字与卡型**：铁锤人称 3090、360W、PyTorch 约 75→135 TFLOPS（约 +80%），并提到 4090 分支约 165→331；官方给出 3090 Ti、450W、稠密 GEMM 的 FP16／BF16／TF32 前后表，且本仓库声明范围仅为 Ampere GA102–GA106，未覆盖 4090。[^lxfater-3090-gpu-unlock][^zagitta-gpu-unlock]
- **Benchmark numbers and SKUs**: lxfater cites 3090 at 360W PyTorch ~75→135 TFLOPS (~80%) and a 4090 branch ~165→331; the official table is 3090 Ti at 450W dense GEMM for FP16/BF16/TF32, and this repo’s stated scope is Ampere GA102–GA106 only—not 4090.[^lxfater-3090-gpu-unlock][^zagitta-gpu-unlock]

## 相关 / Related

- Source: [铁锤人谈 3090 解锁约 80% AI 算力](../sources/articles/lxfater-3090-gpu-unlock.md)
- Source: [Zagitta gpu-unlock：Ampere 消费卡 FP/BF16 吞吐解锁](../sources/articles/zagitta-gpu-unlock.md)

[^lxfater-3090-gpu-unlock]: lxfater on unlocking ~80% more 3090 AI compute
[^zagitta-gpu-unlock]: GPU unlock 1.0.0
