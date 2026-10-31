---
type: Source
title: "Qwenputer：RISC-V CPU 写进 Qwen3.5-4B 权重"
title_en: "Qwenputer: RISC-V CPU Written into Qwen3.5-4B Weights"
description: "帖文称 Qwenputer 将确定性 RISC-V CPU 编译进 Qwen3.5-4B 额外权重，利用 Gated DeltaNet 层作寻址 RAM，在前向传播中直接运行 C 与 MicroPython，无需外部运行时。"
description_en: "The post claims Qwenputer compiles a deterministic RISC-V CPU into extra Qwen3.5-4B weights, uses Gated DeltaNet layers as addressable RAM, and runs C and MicroPython directly in the forward pass without an external runtime."
resource: https://x.com/shao__meng/status/2116328500936265843
tags: [qwenputer, risc-v, llm, weights, computer-use]
sources:
  - id: qwenputer-risc-v-qwen3-5-4b-weights
    resource: https://x.com/shao__meng/status/2116328500936265843
    title: "Qwenputer: RISC-V CPU Written into Qwen3.5-4B Weights"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-10-31T20:16:09+08:00
---

# Qwenputer：RISC-V CPU 写进 Qwen3.5-4B 权重

*Qwenputer: RISC-V CPU Written into Qwen3.5-4B Weights*

帖文称，Qwenputer 在 Qwen3.5-4B 上用编译器把一台确定性 RISC-V CPU（RV32IM，含 Zba 与小 bignum 单元）写进约 11 层额外权重，并把模型自带的 Gated DeltaNet 状态当可寻址 RAM，在前向里跑加减乘除、C 和 MicroPython，不调外部 runtime；大数运算接近基座加 Python 工具，并顺手塞进实验性「硬盘」。[^qwenputer-risc-v-qwen3-5-4b-weights]

The post claims Qwenputer compiles a deterministic RISC-V CPU (RV32IM with Zba and a small bignum unit) into about 11 extra layers of Qwen3.5-4B weights, uses the model's Gated DeltaNet state as addressable RAM, and runs arithmetic, C, and MicroPython in the forward pass without an external runtime; large-number arithmetic approaches base-plus-Python-tool performance, with an experimental "hard disk" added.[^qwenputer-risc-v-qwen3-5-4b-weights]

## 摘要 / Summary

- Qwenputer 在 Qwen3.5-4B 基座前加约 11 层「计算机」权重，CPU 为 32-bit RISC-V（RV32IM，加 Zba 和小 bignum 单元），官方 riscv-tests 通过，与 qemu 对齐。[^qwenputer-risc-v-qwen3-5-4b-weights]
- Qwenputer adds about 11 "computer" layers before the Qwen3.5-4B base; the CPU is 32-bit RISC-V (RV32IM plus Zba and a small bignum unit), official riscv-tests pass, aligned with QEMU.[^qwenputer-risc-v-qwen3-5-4b-weights]
- 每条指令会变成若干生成 token（地址、值、STEP），小驱动 RvChat 负责装固件，并把轨迹挡在 Qwen 本体层之外。[^qwenputer-risc-v-qwen3-5-4b-weights]
- Each instruction expands into several generated tokens (address, value, STEP); the small RvChat driver loads firmware and keeps execution traces outside the Qwen core layers.[^qwenputer-risc-v-qwen3-5-4b-weights]
- DeepMind 算术集：基座约 55–90%，基座 + Python 工具约 95–100%，Qwenputer 约 97.5–100%；NUPA 长整数：基座 48.6%，Qwenputer 100%。[^qwenputer-risc-v-qwen3-5-4b-weights]
- DeepMind arithmetic: base 55–90%, base + Python tool 95–100%, Qwenputer 97.5–100%; NUPA long integers: base 48.6%, Qwenputer 100%.[^qwenputer-risc-v-qwen3-5-4b-weights]
- 检查点约 18.8 GB（约两倍基座，多为零填充）；每条 CPU 指令要几个 decode token，大计算以秒计；L4 批处理约 3200 CPU token/秒。[^qwenputer-risc-v-qwen3-5-4b-weights]
- Checkpoint about 18.8 GB (roughly twice the base, mostly zero padding); each CPU instruction takes several decode tokens, large calculations take seconds; L4 batch processing about 3200 CPU tokens/second.[^qwenputer-risc-v-qwen3-5-4b-weights]
- 在 GDN 状态里做目录与链式存储（约 1024 槽、最多约 512 文件 / 5.3 万 token 文本），跨会话可存 state 再加载；另有 Filesystem 权重。[^qwenputer-risc-v-qwen3-5-4b-weights]
- Directory and chained storage are implemented in GDN state (about 1024 slots, up to about 512 files / 53k tokens of text), with state savable and loadable across sessions; there are also Filesystem weights.[^qwenputer-risc-v-qwen3-5-4b-weights]
- 作者指向两篇安全向 follow-up：混合模型把推理藏进 RNN 状态以逃避 CoT 监控，以及把编译进权重的监视器做成模型关不掉的内置工具。[^qwenputer-risc-v-qwen3-5-4b-weights]
- The author points to two safety-oriented follow-ups: hybrid models hiding reasoning in RNN states to evade CoT monitoring, and making weight-compiled monitors into built-in tools the model cannot turn off.[^qwenputer-risc-v-qwen3-5-4b-weights]

## 相关 / Related

- 原文：[链接](https://x.com/shao__meng/status/2116328500936265843)。 / Original: [link](https://x.com/shao__meng/status/2116328500936265843).
- Topic: [Computer Use / Computer Use](../../topics/computer-use.md)
- Topic: [面向 Agent 的编程语言 / Languages for agents](../../topics/languages-for-agents.md)
- Topic: [开放权重前沿模型 / Open-weight frontier models](../../topics/open-weight-frontier-models.md)
- Topic: [技术滥用关切的连续性 / Continuity of technology-misuse concern](../../topics/tech-misuse-concern-continuity.md)

[^qwenputer-risc-v-qwen3-5-4b-weights]: Qwenputer: RISC-V CPU Written into Qwen3.5-4B Weights
