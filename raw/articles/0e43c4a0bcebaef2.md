[/xiaomovps](/xiaomovps)
[小墨同学](/xiaomovps)
[@xiaomovps](/xiaomovps)

Show translation
Pi 终于要官方接入谷歌 AI 会员了，谷歌这次是真听劝🔥

刚看到 Pi 官方维护者提了个草稿 PR，以后不用额外掏钱买 API，登录谷歌账号就能在 Pi 里用会员额度

翻了一下里面的代码和文档，重点就这 3 个：

1、正规白名单不封号：这次没碰私有接口，走的是谷歌单独批给 Pi 的 OAuth 客户端和个人配额通道，不允许分支或套壳项目共用

2、首发内置 4 个模型：包含最新的 Gemini 4 Neon、Hydrogen 和 Carbon，外加一个兜底的 3.5 Flash-Lite，前两个最高都能开到 xhigh 思考档

3、目前只写了 Ultra：文档暂时没提 20 刀的 Pro，结合前几天谷歌 Logan 预告 12 月 2 日迈出第一步，现在挂着草稿应该是在等下周三正式官宣

看来第三方 Agent 接谷歌订阅真的快来了，要是正式上线能把 Pro 会员也带上，配上 Pi 极简省 Token 的底子就真香了

PR 地址：[github.com/earendil-works…](https://t.co/T3TfabZr3Q)

[/xiaomovps/status/2126307058580607462/photo/1](/xiaomovps/status/2126307058580607462/photo/1)

[/xiaomovps/status/2126307058580607462/photo/2](/xiaomovps/status/2126307058580607462/photo/2)

[/xiaomovps/status/2126210665585254468](/xiaomovps/status/2126210665585254468)[/xiaomovps](/xiaomovps)[小墨同学](/xiaomovps)
[@xiaomovps](/xiaomovps)

[Nov 27](/xiaomovps/status/2126210665585254468)

Pi 1.6.1 配合 Cloudflare 这波更新，跑云端常驻 Agent 更省心了

前面写过几次把 Pi Durable 放到 Cloudflare 上跑长期任务，这两天两边刚好同步更新了一批很实在的功能

没有花哨的概念，全在解决算清暗处账单、等待时不空耗计费和少切网页后台这些具体问题，挑 4 个最实用的变化跟大家聊聊

1、Pi

[/xiaomovps/status/2126210665585254468/photo/1](/xiaomovps/status/2126210665585254468/photo/1)

[/xiaomovps/status/2126210665585254468/photo/2](/xiaomovps/status/2126210665585254468/photo/2)
