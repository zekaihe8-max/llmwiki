[/dotey](/dotey)

[宝玉](/dotey)
[@dotey](/dotey)

Show translation
月之暗面 10 月 23 日发布 Kimi K3.1 Pro，Kimi 网页版和 App、办公助手 Kimi Work、编程工具 Kimi Code 和 API 当天都能用。

官方说它是自家最强的开放权重模型，完整权重 11 月 4 日前放出。

K3.1 Pro 是在上一代 Kimi K3 基础上继续训练出来的，模型结构没换，多花了大量算力做强化学习，也就是让模型在几百个领域里反复做任务、按结果打分改进。

模型总共 2.8 万亿参数，处理每个 token 只动用其中约 1040 亿（token 是 AI 处理文字的单位，可以理解成文字碎片）。这种结构叫混合专家（MoE）：模型里有很多分工不同的“专家”小网络，每次只叫上一小部分干活，所以比同样大的普通模型算得快，但整个模型仍要全部装进内存。它一次能读 100 万 token，相当于一个中型代码仓库或几百页财报，也能看图和视频。

【和 Claude、GPT 比怎么样】

下面的成绩都来自月之暗面自己公布的对比表，对手是 Anthropic 的 Claude Opus 5.5、Claude Fable 5.1 和 OpenAI 的 GPT-6 Astra，所有模型开到最高推理强度。部分对手成绩是 Kimi 自己测的，内部测试外人无法复现。

写代码基本追平。

在命令行里完成真实开发任务的 Terminal-Bench 4.0，K3.1 Pro 65.7%，Opus 5.5 66.4%，GPT-6 Astra 58.2%；做大型软件项目的 SWE-Marathon，K3.1 Pro 51.7 分排第一，Opus 5.5 46.3。科学计算类的 Terminal-Bench Science 差距大，K3.1 Pro 38.1，GPT-6 Astra 68.1。

3D 建模稍逊。

K3.1 Pro 能直接写脚本操作 Blender、CAD 软件和 Unity、Unreal、Godot 游戏引擎，官方演示里做出了完整的 3D 游戏和能 3D 打印的台灯。在看几张渲染图、写 CAD 代码把零件还原出来的 BenchCAD 上，K3.1 Pro 92.7%，Opus 5.5 96.2%，GPT-6 Astra 95.9%。

金融是这次主打。

读真实财务文件、做多步计算的 OfficeQA Pro v2，K3.1 Pro 64.4 分排第一，Opus 5.5 62.2。Kimi 内部测试里，财务建模比 K3 高 7.2 分，写研究报告高 11.6 分。

推文说的“幻觉降低 65%”，来自 Kimi 内部一套专挑难题的事实核查测试：K3 说的每 100 个事实里有 23 个错的，K3.1 Pro 降到 8 个出头。同一测试里 Opus 5.5 是 15 个，GPT-6 Astra 是 5.5 个。官方注明这是压力测试，不代表日常使用的出错率。

【多少钱，能不能自己跑】

普通用户在 Kimi 网页版和 App 里就能用，免费用户能用多少官方没写。企业版默认关闭，要管理员手动开。

API 每百万 token 输入 2 美元、输出 10 美元，是 K3 价格的三分之二。Claude Opus 5.5 是输入 4 美元、输出 20 美元，贵一倍。快 2 到 3 倍的 Highspeed 版输入 4 美元、输出 20 美元，和 Opus 5.5 同价。API 账户要先充值至少 1 美元才能用。

开放权重是指模型文件公开，任何人都能下载，放在自己的服务器上运行、微调，数据不用经过月之暗面。但个人电脑跑不动：按 K3 采用的 4 位精度推算，光存放 2.8 万亿参数就要约 1.4TB 内存。许可证条款官方还没公布。

为了开放权重，月之暗面说训练时删掉了网络攻防相关的数据。同一套训练流程不删数据，内部漏洞利用测试能解 90.5% 的题，删了之后是 81.0%。官方称它的攻击能力仍落后于已经公开三个月以上的闭源顶级模型。

原文：[x.com/Kimi_Moonshot/…](https://x.com/Kimi_Moonshot/status/2113680701770068067)
官方博客：[kimi.ai/blog/kimi-k3-1…](https://kimi.ai/blog/kimi-k3-1-pro)
API 文档：[platform.kimi.ai/docs/guide/kim…](https://platform.kimi.ai/docs/guide/kimi-k3-1-pro-quickstart)
[/Kimi_Moonshot/status/2113680701770068067](/Kimi_Moonshot/status/2113680701770068067)[/Kimi_Moonshot](/Kimi_Moonshot)[Kimi.ai](/Kimi_Moonshot)
[@Kimi_Moonshot](/Kimi_Moonshot)
[19h](/Kimi_Moonshot/status/2113680701770068067)

Introducing Kimi K3.1 Pro: our most capable 3T-class open-weight model.

🔹 1M-token context, 2.8T total / 104B active params (MoE), Multimodal.
🔹 Full-project coding: games in Unreal, Unity & Godot.
🔹 Excels at parametric 3D modeling in Blender & CAD.
🔹 More reliable at

[/Kimi_Moonshot/status/2113680701770068067/photo/1](/Kimi_Moonshot/status/2113680701770068067/photo/1)
