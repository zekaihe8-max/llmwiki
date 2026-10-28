[/xiaomovps](/xiaomovps)

[小墨同学](/xiaomovps)
[@xiaomovps](/xiaomovps)

Show translation
ESP32 + AI Agent，最近又发现 3 个非常有意思的开源项目🔥

前段时间我一直在折腾 ESP32，从最开始刷小智，到后面把 Pi 接进去，做了一个带屏幕和触摸审批的 AI 小助手

最近我发现社区的玩法又往前走了一步，开始让 Agent 真正参与硬件控制，甚至直接运行在芯片里面

1、Tiny Engineer：给 Claude Code 装一个身体

用 ESP32-C3、5 个舵机和 3D 打印外壳，做了一个桌面小机器人

Claude Code 读文件时它会东张西望，写代码时会跟着打字，任务完成还会敲铃铛，Codex、Cursor 也可以接入

项目：[github.com/jamro/tiny-eng…](https://github.com/jamro/tiny-engineer)

2、ESP-Claw：乐鑫官方把 Agent 装进 ESP32

这个更有意思，直接把 Agent Runtime 放到 ESP32 芯片上

支持 MCP、动态加载 Lua，还可以通过聊天定义硬件行为，让传感器事件触发 Agent 执行任务，复杂模型推理依然可以调用云端 API

项目：[github.com/espressif/esp-…](https://github.com/espressif/esp-claw)

3、MimiClaw：5 美元芯片也能运行个人 Agent

不需要 Linux、Node.js 或 VPS，直接用 C 实现 Agent 循环

支持 Telegram、定时任务、Heartbeat 和本地记忆，重启之后记忆还在，模型通过 Claude 或 GPT API 调用

项目：[github.com/memovai/mimicl…](https://github.com/memovai/mimiclaw)

我觉得 AI + 硬件这个方向还是很值得继续研究的

尤其是 ESP-Claw 和 MimiClaw 这类项目，虽然现在 ESP32 的算力还远远跑不了通用大模型

但是把 Agent 的执行逻辑放到芯片里，本身就是一个非常有意思的方向

GIF

[10:50 AM · Oct 28, 2026](/xiaomovps/status/2115395887887479279)·[467 Views](/xiaomovps/status/2115395887887479279)

[5](/compose/post?in_reply_to=2115395887887479279)

3
