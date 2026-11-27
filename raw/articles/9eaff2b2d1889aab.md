[/xiaomovps](/xiaomovps)
[小墨同学](/xiaomovps)
[@xiaomovps](/xiaomovps)

Show translation
Pi 1.6.1 配合 Cloudflare 这波更新，跑云端常驻 Agent 更省心了

前面写过几次把 Pi Durable 放到 Cloudflare 上跑长期任务，这两天两边刚好同步更新了一批很实在的功能

没有花哨的概念，全在解决算清暗处账单、等待时不空耗计费和少切网页后台这些具体问题，挑 4 个最实用的变化跟大家聊聊

1、Pi 1.6.1 把容易忽略的消耗拆成了 4 个独立提醒

以前开缓存提示基本是一锅炖，这次在 /settings 的 Notices 下面直接拆成了缓存未命中、缓存保温费用、上下文压缩成本和推理内容丢弃 4 个独立开关

比如模型在压缩后丢掉了部分推理片段，或者空闲保温花了多少钱

现在都能分开盯住，另外 Codemode 里的 models.classify() 走 OpenRouter 时也能直接拿到真实扣费而不是估算价了，扩展弹窗还补上了 blockedKind 方便终端区分当前是卡在等权限审批还是等登录

2、Cloudflare 上的 Pi 等人回复时能彻底休眠了

Cloudflare Agents SDK 升到 0.34.0 跟进了 Pi 1.6，最实用的就是加上了 ToolPark 机制

简单说，当你的云端 Agent 跑到一半需要等你点确认、等定时任务到点，或者等另一个子 Agent 返回结果时，它会把等待状态写进 Durable Object 自带的 SQLite 里然后直接休眠，不占后台运行时长

等你通过 harness.signal() 把结果递进去再自动唤醒接着跑，顺带还支持在创建会话时直接把别的平台导出的历史聊天记录写进去

3、域名后台一键给网站加上 Agent 专属搜索

在 Cloudflare 域名后台的 Overview 页面点一下开启 Search for Agents，它就会自动帮你建好索引，并在你的域名下暴露一个 /.well-known/search 接口

外部 Agent 过来查资料时，这个接口不会瞎编总结，而是直接返回干净的 Markdown 原文喂给你的模型，自己做文档站或者知识库接入非常省事，但是搜索用量还是按 AI Search 的套餐额度来算

4、不用切回网页后台，直接在命令行或 MCP 里开服务

以前在终端里让 Agent 部署项目，一旦撞上免费额度上限，还得专门打开浏览器去后台绑套餐

现在把 cf 命令行升到 1.0.0-rc.5 以上重新登录授权，或者接好支持新版协议的 MCP 客户端，就能直接在终端弹窗看清价格并确认开通 Workers Paid、R2 或 Zero Trust，但是前提是账号里已经提前绑好过付款方式

最后提醒一个升级前必须留心的坑：会话一旦在 Pi 1.6 上跑过，底层的存储格式就会升级，旧版 Pi 1.5 是读不了的

所以在 Cloudflare 上升完级如果遇到部署小问题，只能改代码往前修，千万别直接把 Worker 回滚到 1.5 版本

[/xiaomovps/status/2126210665585254468/photo/1](/xiaomovps/status/2126210665585254468/photo/1)

[/xiaomovps/status/2126210665585254468/photo/2](/xiaomovps/status/2126210665585254468/photo/2)

[/xiaomovps/status/2125869563992797620](/xiaomovps/status/2125869563992797620)[/xiaomovps](/xiaomovps)[小墨同学](/xiaomovps)
[@xiaomovps](/xiaomovps)

[Nov 26](/xiaomovps/status/2125869563992797620)

Pi 又跟进了个实用协议，再也不用怕工作被打断了

以前终端一更新崩溃，或者电脑重启，开着的 Agent 会话就没了，让人用着很苦恼

就算套一层 tmux 遇到系统重启照样断，也只能翻历史手动敲命令接着聊

今天早上 Mitchell Hashimoto 推了个新协议，一个小时后 Armin 就说已经合进 Pi 了

[/xiaomovps/status/2125869563992797620/photo/1](/xiaomovps/status/2125869563992797620/photo/1)

[/xiaomovps/status/2125869563992797620/photo/2](/xiaomovps/status/2125869563992797620/photo/2)
