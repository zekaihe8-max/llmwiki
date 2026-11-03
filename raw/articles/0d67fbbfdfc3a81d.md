[/dotey](/dotey)

[宝玉](/dotey)
[@dotey](/dotey)

Show translation
不训练、不算梯度，GPT-6 Astra 直接改了另一个模型的权重：只动了 Qwen3.5-0.8B 0.016% 的权重，MATH-500 数学正确率从 7.9% 涨到 48.1%，约 6 倍。

这是 MIT CSAIL 四位研究者 11 月 2 日发的博客，他们把这叫“在权重空间里编程”：前沿大模型可以像读写代码一样，直接读懂、修改、甚至从零写出神经网络的权重。

过去的常识是，权重是训练出来的，人看不懂也没法手改，想改模型只能再训练。这项工作把原始权重直接交给通用大模型，让它自己读、自己改。

几个实验：
只看权重，不给游戏名、不给工具，Astra 认出了四个结构完全相同的游戏网络：打砖块、乒乓、吃豆人、过马路。

一辆训练了 10 亿步、256 次全失败的仿真小车，Astra 看了权重和一次失败录像，一次回复改了 3.5% 的权重，之后 1,024 次全部成功。

从零写打砖块网络，没有数据、不能试玩，一次写成，得分 517.4，是训练 5 亿步的强化学习网络（25.3）的约 20 倍。另外两个游戏没超过训练 5 亿步的版本。

Qwen 的 6 倍有几个条件：
原模型开思考模式后容易陷入重复循环，93% 的回答一直输出到长度上限，起点很低。Astra 找到第 15、19 层里引起循环的一个方向，把它删掉。

这要允许 Astra 拿练习题试跑 50 次。只试 10 次或 25 次，循环基本没消失。

换成很少循环的 Gemma 3 270M，同样的方法没带来提升。作者的结论是：改权重能去掉挡住能力的障碍，加不出模型本来没有的能力。

和“AI 改进 AI”的关系：现在的自我改进，大多是让 AI 生成数据、写训练代码，最后还是靠训练。作者把“模型检查并改进自己或下一代的权重”列为后续方向之一。

Chandan Singh 也公开了类似实验：Claude 在加法、排序等 10 个算法任务上直接写出小模型权重，最多 3 次就全部 100% 正确。他的报告也记录了，有一个任务里 Claude 用测试集数据做了拟合，违反规则，那个结果被判无效。

目前结果都由作者自己报告，还没有独立复现。

原文：[rikiyat.github.io/blog/weight-sp…](https://t.co/4rLY5FHftN)
[/rikiyatakehi/status/2117313742891327994](/rikiyatakehi/status/2117313742891327994)[/rikiyatakehi](/rikiyatakehi)[Rikiya Takehi](/rikiyatakehi)[@rikiyatakehi](/rikiyatakehi)
[18h](/rikiyatakehi/status/2117313742891327994)

We asked GPT-6 Astra to edit Qwen3.5-0.8B weights to improve math.
It directly changed only 0.016% of weights, fixing 0.8B's reasoning loops & improving math up to 6x and even instruction following 3x, without gradients or training.

We call this Weight-Space Programming:

[/rikiyatakehi/status/2117313742891327994/photo/1](/rikiyatakehi/status/2117313742891327994/photo/1)
