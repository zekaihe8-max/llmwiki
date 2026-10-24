[/xiaomovps](/xiaomovps)

[小墨同学](/xiaomovps)
[@xiaomovps](/xiaomovps)

Show translation
同样的模型，Pi 只跑了 3 轮，DeepSeek Harness 却跑了 28 轮🔥

上一篇鹈鹕骑自行车的实测发出去后，评论区不少人在问，为什么两边的 Context 和 Token 消耗能差这么多？

我又想起来有人在评论区问我 PI 和 DeepSeek Harness他们之间上下文差距有多大，我就完全把两个 harness 之间的上下文全部扒开，做一个完整的分析

1、初始 Context 其实差不多

两边使用的都是 DeepSeek V4 Flash，思考强度 High，提示词也一样

Pi 第一轮输入约 11.5K Token，DSH 只有 9K，甚至比 Pi 还少

包括工具定义也是，DSH 虽然暴露了更多工具，但占用的 Token 反而更少

所以不能简单认为，DSH 功能多，初始 Context 就一定更大

2、真正拉开差距的是执行过程

Pi 只用了 3 轮就把 HTML 写完了，而 DSH 跑了整整 28 轮，其中有 10 次截图自检

相当于 Pi 选择快速完成任务，DSH 则不断截图、检查效果、修改代码，再重新验证

最后 Pi 累计输入 6.4 万 Token，DSH 达到 114.7 万，整整差了 18 倍

不过这里要注意，114 万是多轮累计的输入量，不代表单次请求就占用了这么大的 Context

3、Token 差了 18 倍，费用却只差了约一倍

这才是我觉得最有意思的地方

Pi 的缓存命中率为 58%，实际费用 $0.0266

DSH 缓存命中率高达 98.9%，按相同单价估算约 $0.057

虽然 DSH 调用了更多轮模型，但绝大部分重复上下文都命中了缓存，所以实际费用没有跟着 Token 数量同比例增长

当然，缓存不是免费，只是命中后的输入成本更低

这次测试其实让我重新思考了一个问题：Agent 到底应该追求速度，还是结果质量？

如果只是快速生成一个能运行的 HTML，Pi 这种执行方式明显更直接

但是如果是前端 UI、交互效果这些需要反复检查的任务，DSH 的截图自检可能也有价值，只是多花的 Token 和时间，到底换来了多少质量提升，还得看最终成品

所以我觉得以后对比 Harness，不能只盯着 Token 数量，还得把执行轮数、缓存命中、任务耗时和最终效果放在一起看

到了最后我就可以回答，为什么两个之间消耗的 token 差这么多？他们的上下文构成其实一开始是差不多的，只是因为 harness 的系统提示词不一样

DeepSeek harness 经过了十几次的调整，而 PI 只通过了一次的调整

从速度和节省 token 的方向来说无疑是 PI 占优的，但是如果从整体的效果来说，还是 DeepSeek harness 跑出来的更好，所以有的时候真的要去分析细节 才能知道他们之间的差距为什么会如此之大

00:00

[/xiaomovps/status/2113257563831804057](/xiaomovps/status/2113257563831804057)[/xiaomovps](/xiaomovps)[小墨同学](/xiaomovps)
[@xiaomovps](/xiaomovps)
[Oct 22](/xiaomovps/status/2113257563831804057)

同样的模型，换个 Harness，Token 消耗居然差了 46 倍？🔥

最近很多人问我 DeepSeek harness 对比 PI agent 高本消耗到底怎么样？

我不多废话 直接上实操，跑了一个鹈鹕骑自行车的小测试，结果还挺意外的

测试条件完全一样：

模型：DeepSeek V4 Flash
思考强度：High
提示词：用 HTML

00:00
