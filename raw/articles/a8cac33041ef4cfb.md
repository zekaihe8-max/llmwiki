[/0xLogicrw](/0xLogicrw)
[思维怪怪](/0xLogicrw)
[@0xLogicrw](/0xLogicrw)

Show translation
Hy4 Flash 还内置了一个约 8.5 亿参数的草稿模型 DFly2，专门负责加快生成速度。

腾讯今天正式发布 DFly2 的完整开源方案，包括模型权重、训练代码和技术论文，让开发者能够为采用类似稀疏注意力架构的大模型训练专属草稿模型。

之前的 DFlash、DSpark 等草稿模型，在处理长上下文时各有局限。DFlash 需要额外保存完整的上下文缓存，显存开销较大；DSpark 的草稿模型主要关注最近一段内容，又可能遗漏主模型正在参考的远处信息。

DFly2 则直接复用主模型已有的 KV 缓存，以及主模型从全文中选出的最多 2048 个关键位置。这样既不用单独维护一份缓存，也能获取远处的重要信息，而且草稿模型的注意力计算量不会随上下文长度增加。

腾讯在相同训练条件下进行了对比测试。在 Hy4 Flash 的四项智能体任务中，DFly2 相比普通逐 Token 生成平均提速约 3.2 倍，最高达到原来的 4.2 倍，平均加速比比 DSpark 高约 25%。在 128K 长上下文测试中，主模型每轮接受的草稿 Token 数量也比 DSpark 高约 18%。

腾讯还公布了适配 DeepSeek-V4.1-Flash 和 GLM-5.3-Flash 的 DFly2 模型，相关训练代码已集成至 AngelSpec 开源框架。

[/0xLogicrw/status/2125875584584827154/photo/1](/0xLogicrw/status/2125875584584827154/photo/1)

[/0xLogicrw/status/2125544334011572561](/0xLogicrw/status/2125544334011572561)[/0xLogicrw](/0xLogicrw)[思维怪怪](/0xLogicrw)
[@0xLogicrw](/0xLogicrw)

[Nov 25](/0xLogicrw/status/2125544334011572561)

腾讯通过模型压缩工具 AngelSlim，让总参数量达 2240 亿的 Hy4 Flash 在个人电脑上运行，连只有 64GB 内存的 Mac mini 也能跑。

Hy4 Flash 原始模型约占 440GB。腾讯将其压缩至最小约 135GB，体积减少 69%。压缩后的模型仍然超过了 Mac mini 的内存容量，因此腾讯又优化了推理程序
