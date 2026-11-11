[/xiaomovps](/xiaomovps)

[小墨同学](/xiaomovps)
[@xiaomovps](/xiaomovps)

Show translation
Pi 1.5.2 发布了，这次解决了一个挺实用的问题：项目目录没了，之前的会话怎么继续🔥

平时使用 Pi，如果项目文件夹被改名、移动或者删除，重新打开之前的 Session，就会发现原来的工作目录已经不存在了

以前只能选择 Continue，在当前目录继续会话，但下次打开还是会遇到同样的提示

现在 Pi 1.5.2 增加了 Fork 和 Cancel 两个选择

我觉得最实用的就是 Fork

选择之后，Pi 会把原来的会话复制到当前目录，生成一个新的 Session ID，之前的会话也会完整保留

这样既能继续之前的工作，也不会因为原来的项目目录不存在，每次打开都要重新选择

这个功能不仅支持启动时的 --resume、--session，也支持会话里的 /resume、/import 等操作

另外，这次还修复了 Anthropic OAuth 提示 Claude Code 版本过旧的问题，以及导入失败时留下重复会话文件的问题

整体更新不大，但对于经常移动项目、整理文件夹，或者需要恢复历史会话的 Pi 用户来说，还是挺实用的

[/xiaomovps/status/2120308361396949251/photo/1](/xiaomovps/status/2120308361396949251/photo/1)

[/xiaomovps/status/2120051114200711252](/xiaomovps/status/2120051114200711252)[/xiaomovps](/xiaomovps)[小墨同学](/xiaomovps)
[@xiaomovps](/xiaomovps)
[Nov 10](/xiaomovps/status/2120051114200711252)

Pi 1.5.1 更新之后，有 4 个使用技巧值得了解，部分操作和旧版本区别挺大！🔥

这次更新有一个很容易被忽略的变化：即使你没有继续和 Pi 对话，它也可能在后台刷新 Prompt Cache，产生一定的费用

除了缓存，我还整理了几个和旧版本操作不同的地方，尤其是经常使用 Pi 的开发者，可以看一下

00:00
