[/shao__meng](/shao__meng)

[meng shao](/shao__meng)
[@shao__meng](/shao__meng)

Show translation
这个想法很疯狂！

Qwenputer 在 Qwen3.5-4B 上用编译器把一台确定性 RISC-V CPU 写进额外层与权重，并把模型自带的 Gated DeltaNet (GDN) 状态当可寻址 RAM，在前向里跑加减乘除、C 和 MicroPython，不调外部 runtime；大数运算接近「基座 + Python 工具」，还顺手塞进实验性「硬盘」。
[divagr.com/blog/qwenputer](https://t.co/3GEnraNsvt)

Qwenputer 到底是什么？
作者写得很清楚：不是插件、不是工具调用、不是沙箱。基座权重保持原样，前面加了约 11 层「计算机」权重（相对 Qwen 的 32 层）。CPU 是 32-bit RISC-V（RV32IM，加 Zba 和小 bignum 单元），官方 riscv-tests 通过，与 qemu 对齐；作者称自由跑了约 1800 万条指令无错。每条指令会变成若干生成 token（地址、值、STEP），这些 token 就是执行轨迹；小驱动 RvChat 负责装固件，并把轨迹挡在 Qwen 本体层之外，好让模型沿用已很熟的 tool-call 格式「对内」下指令、读回结果。

为什么 GDN 能当 RAM？
Qwen3.5 每 4 层里有 3 层是 Gated DeltaNet（线性 RNN）。把 gate 和写入强度（beta）都设为 1，再用 one-hot key 选行，就能精确覆盖、读回单个槽位；状态大小不随对话变长，比把普通注意力当内存便宜。这是 Schlag 等人「线性注意力 ≈ 快权重联想记忆」的实践版：做成生产模型里可寻址、足够跑整颗 CPU 的内存。

作者演示的内容
用户问 -2241842 × 8077。右侧格子可视化 GDN 状态：from Qwen 吃入字符，a/b 装操作数，寄存器与 memory 区在跳；左侧最终由模型写出答案 -18107357834。意思是：大数乘法不是「猜下一个 token」，而靠权重里的 CPU 在算。

测试数字
DeepMind 算术集：基座约 55–90%，基座 + Python 工具约 95–100%，Qwenputer 约 97.5–100%。NUPA 长整数：基座 48.6%，Qwenputer 100%，与 +Python 持平。约 23 万个 CPU 输出位置对照参考机，零失配；普通文本分布相对基座几乎不变（KL 约 6e-4）。代价：检查点约 18.8 GB（约两倍基座，多为零填充）；每条 CPU 指令要几个 decode token，大计算以秒计；还不能裸 generate()，要 RvChat。作者在 L4 上批处理约 3200 CPU token/秒。

「硬盘」与后续
在 GDN 状态里做目录与链式存储（约 1024 槽、最多约 512 文件 / 5.3 万 token 文本），跨会话可存 state 再加载；作者称改事实回忆约 90%，粘贴旧聊天约 30%。另有 Filesystem 权重。下一步想让 Qwen 写 Python、在权重内 MicroPython 上跑；并指向两篇安全向 follow-up：混合模型把推理藏进 RNN 状态以逃避 CoT 监控，以及把编译进权重的监视器做成模型关不掉的内置工具。

[/shao__meng/status/2116328500936265843/photo/1](/shao__meng/status/2116328500936265843/photo/1)

[/divagr1925/status/2115394340357116169](/divagr1925/status/2115394340357116169)[/divagr1925](/divagr1925)[div (fp32)](/divagr1925)
[@divagr1925](/divagr1925)
[Oct 28](/divagr1925/status/2115394340357116169)

1/4

Meet Qwenputer: Qwen3.5-4B with a full RISC-V CPU inside its weights, using the model's own Gated DeltaNet layers as RAM.

It runs C and MicroPython in its forward passes, no external runtime.

On DeepMind math: base 55–90%, base + Python tool 95–100%, Qwenputer 97.5–100%.

00:00
