[/lxfater](/lxfater)
[铁锤人](/lxfater)
[@lxfater](/lxfater)

Show translation
同样用 Gemini 4 Neon，为什么有人夸它是神，有人骂它爱瞎编？

这两天查了一下，锅多半在 Antigravity 桌面端上下文自动压缩阈值太低
对话稍微一长就触发压缩，前面看过的代码和改过的文件直接被压丢了
模型的上下文没了，只好瞎编

但切到命令行就能自己管，Antigravity CLI 今晨连发 6 版更到 v1.5.18
这波塞了 34 项改进和 65 个修复，最实用的是把几个核心配置放开了（见图 1）

升级完 CLI，哪 3 个配置最值得立刻调好？

1. 自定义自动压缩阈值，别让它聊几轮就丢上下文
把环境变量 AGY_CLI_AUTO_COMPACT_OVERRIDE 设成 80% 或 800K，就能手动拉高阈值
所有支持的模型现在都能用，敲 /context 就能看到你设的阈值生没生效

2. 自己挑编排模型，嫌啰嗦直接单模型跑
普通订阅进 /model 的 Orchestrator，能分别挑做计划和干活的模型，也能调思考强度
两边选成一样的，它就会跳过两步编排，直接单模型一口气干完！

3. 边干活边看思考和额度，不用再干等
以前模型干活像闷葫芦，现在敲 /thinking 就能实时看到它在想什么
长任务跑超一分钟，/usage 会定时刷额度和恢复倒计时，不用等结束才知道烧了多少

之前觉得 Neon 幻觉大或者干活磨蹭的，切到新版 CLI 把这 3 个配置调好再试

[/lxfater/status/2126529577371504703/photo/1](/lxfater/status/2126529577371504703/photo/1)
read image descriptionALT

[/erintwalsh_/status/2126411148584968475](/erintwalsh_/status/2126411148584968475)[/erintwalsh_](/erintwalsh_)[Erin Walsh](/erintwalsh_)[/antigravity](/antigravity)
[@erintwalsh_](/erintwalsh_)

[15h](/erintwalsh_/status/2126411148584968475)

Check out the latest Antigravity CLI v1.5.13 - v1.5.18 releases!

[Article Antigravity CLI Releases: v1.5.13 - v1.5.18 TLDR: Antigravity CLI v1.5.13 through v1.5.18 ships 34 improvements and 65 bug fixes across 6 releases for local terminal, Remote Control, and ACP workflows. Highlights include Gemini 4 Neon via ADC](/erintwalsh_/status/2126411148584968475)
