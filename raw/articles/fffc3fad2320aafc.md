[/xiaomovps](/xiaomovps)

[小墨同学](/xiaomovps)
[@xiaomovps](/xiaomovps)

Show translation
Pi Agent 的插件到底是装得越多越好，还是越少越好？

最近其实我一直在思考这个问题，但是我自己收集下来的情况的话 还没有确切的答案

但是最近我在逛 Reddit 的时候，看到了上面有关于这个问题的讨论，一部分人认为 Pi 应该通过插件补齐功能，另一部分人却觉得插件太多，反而失去了极简的优势

正好前面我看到了 Orbi 作者最近测试了 20 个 Pi 插件，发现有的会修改原有配置，有的无法在后台正常运行，甚至还有权限插件会阻止 Agent 执行普通命令

我觉得这也反映出 Pi 生态正在面临的一个问题

Pi 官方主要维护核心，大量扩展能力交给社区开发者自行维护，随着生态越来越大，我们更应该关注插件的兼容性和稳定性，而不是盲目升级

对于普通使用者，我的建议是插件不在多，而贵在精

真正有使用需求的时候再考虑安装，平时用不到的插件，可以先关闭或者直接删除，需要的时候再装回来

尤其是长期运行的 Personal Agent，最好固定一套经过验证的插件组合，更新前先测试，避免一个插件影响整个工作流

我一直觉得 Pi 最大的优势就是自由，但是自由不代表什么功能都要装进去

比起插件数量，我更在意自己的 Harness 能不能稳定、持续地完成任务

如果对文章感兴趣 可以看一下原文：[orbi.build/blog/best-pi-e…](https://t.co/gBhCk7COaW)

[/xiaomovps/status/2122621363521253706/photo/1](/xiaomovps/status/2122621363521253706/photo/1)

[/xiaomovps/status/2122621363521253706/photo/2](/xiaomovps/status/2122621363521253706/photo/2)

[/xiaomovps/status/2122489611863883797](/xiaomovps/status/2122489611863883797)[/xiaomovps](/xiaomovps)[小墨同学](/xiaomovps)
[@xiaomovps](/xiaomovps)
[11h](/xiaomovps/status/2122489611863883797)

分享一套 Pi Agent 操作电脑的玩法，

我的思路是把桌面和浏览器操作分开处理，单独搭配 Ego-lite 浏览器一起使用会更好

桌面操作交给 pi-computer-use，负责识别窗口、点击按钮、输入文字等操作

浏览器部分则交给 Ego-lite，通过 ego-browser Skill

00:00
