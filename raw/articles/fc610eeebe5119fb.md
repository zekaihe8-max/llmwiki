[/0xlangeai](/0xlangeai)

[蓝哥AI](/0xlangeai)
[@0xlangeai](/0xlangeai)

Show translation
Grok Bot 和 WorkBuddy 两个这么火🔥🔥🔥的产品,  怎么打通 ?

我用一条微信聊天记录例子把整个流程串起来了, 在电脑上把这条消息转给 WorkBuddy，让 Grok Bot 去找官推原文，再通过飞书 CLI 把结论和链接送回 WorkBuddy; 具体流程和焚诀都在文章里 👇
[/0xlangeai/article/2117582319473102854/media/2117577842850725888](/0xlangeai/article/2117582319473102854/media/2117577842850725888)

# Grok Bot 和 WorkBuddy 双向打通保姆级教程: 实操微信聊天记录案例

6 min read

微信里有人丢来一张 AI 发布截图，问：「这句话是真的吗？能不能找一下原文？」

在电脑上，我把选中的微信聊天记录分享给 WorkBuddy，由它叫 Grok Bot 去查。查完以后，回到 WorkBuddy 看结论和链接。

两个 AI 用一篇私有飞书文档交接：WorkBuddy 派单，Grok Bot 把查到的东西写进去，WorkBuddy 再按编号读回来。微信聊天记录的选择和分享，都从电脑端开始。

这次用一条真实的微信图片消息做了测试。WorkBuddy 把问题交给 Grok Bot，最后在同一个 WorkBuddy 对话里读回了结论和官方链接。下面按设置、派单、看结果三步走。

### 1. 先建一篇只有你能管理的交接文档

[/0xlangeai/article/2117582319473102854/media/2117575026451103745](/0xlangeai/article/2117582319473102854/media/2117575026451103745)

在飞书新建一篇文档，叫「Grok Bot 查证回传」。标题下面空着就行。复制链接，留着给两个工具用。文档保持私有，只给要用的飞书身份授权：Grok Bot 能追加，WorkBuddy 能读。如果 Grok Bot 的云电脑还没有装好飞书 CLI，先按[飞书官方入口](https://open.feishu.cn/m/)安装并完成文档权限授权。

先不要接微信，也不用管 Webhook。先让两个工具对上同一个编号。

焚决①｜发给 Grok Bot，写一行测试

> 使用你云电脑上已授权的飞书 CLI，向下面这篇测试文档末尾追加一行：WB-TEST-01：回传测试通过。保留原文，不要开启公开分享。写完把文档链接给我；如果写不了，告诉我缺飞书登录还是文档编辑权限。

> 文档：〔粘贴飞书文档链接〕

然后在电脑打开 WorkBuddy 桌面端。把同一个文档链接发给它，让它用电脑上已授权的飞书 CLI 读出 WB-TEST-01 后面那句话。

看到 WorkBuddy 自己读出「回传测试通过」，这一步就过了。如果飞书里看得到、WorkBuddy 读不到，先检查这台电脑上的飞书 CLI 是否已登录，以及它有没有这篇文档的读取权限。Grok Bot 写得进去，和 WorkBuddy 读得出来，是两次验证。

### 2. 给 Grok Bot 一个接单地址

[/0xlangeai/article/2117582319473102854/media/2117575038148968448](/0xlangeai/article/2117582319473102854/media/2117575038148968448)

现在只差一件事：让 WorkBuddy 把查证任务送过去，不用你再打开 Grok Bot 发一遍。

在 Grok Bot 里，用同一个测试 Bot 发这段话。

焚决②｜发给 Grok Bot，建接单入口

> 给我建一个叫「微信查证」的例行任务，只在收到 Webhook 请求时运行，不设定时。每次收到任务编号和问题，只查公开资料，优先找官推原帖和官网。完成后用已授权的飞书 CLI，把任务编号作为标题，在下面写几句结论、官方链接和未确认的地方，追加到这篇文档末尾。不要覆盖其他任务；同一编号已经写过就不要重复。建好后告诉我在哪里找接单地址和钥匙，不要在聊天里贴钥匙。

> 文档：〔粘贴飞书文档链接〕

建好后，在 Grok Bot 桌面端点 Bot 头像，打开 详情 → Routines（例行任务）→ 微信查证 → Webhook。那里有 POST to（地址） 和 key（钥匙）。[Grok Bot 官方说明](https://docs.x.ai/grok-bot/skills-routines-and-automations)

你可以把 Webhook 想成 Grok Bot 的接单口：WorkBuddy 把编号和问题送到这个地址，Grok Bot 就开始查。 官方文档里说的 HTTP 200，意思是「接单了」。查没查完，要去飞书看这个编号有没有出现。

把地址和钥匙填进 WorkBuddy 桌面端要调用的派单工具里。接下来先拿一个公开的测试问题派一单。看到 Grok Bot 开始查，再从 WorkBuddy 读回带同一个新编号的结果，这一步才过。具体请求怎么发，可以看文末。

### 3. 把微信里的一个问题交给它

[/0xlangeai/article/2117582319473102854/media/2117578811638513664](/0xlangeai/article/2117582319473102854/media/2117578811638513664)

比如这条 Claude 消息，截图只看得到套餐改名，用量那句话没显示完。我们只想查原帖全文和官方说明，拿到一段能核对的答案。

在电脑版微信选中要核查的消息，打开聊天记录的转发窗口，点 其他应用 → 腾讯 WorkBuddy。本文用的是电脑端的分享入口，手机端不能用这个入口导出聊天记录。[WorkBuddy 桌面端聊天记录转发说明](https://www.workbuddy.cn/docs/workbuddy/From-Beginner-to-Expert-Guide/Function-Description/Task-Bar)

[/0xlangeai/article/2117582319473102854/media/2117575060659822593](/0xlangeai/article/2117582319473102854/media/2117575060659822593)

回到 WorkBuddy 的「新建任务」。看到输入框里多了一张 「转发内容」 卡片，就说明记录已经带过来了。下图收到的是 1 条图片消息。这时还没发送任务；接下来才是贴指令、点发送。

[/0xlangeai/article/2117582319473102854/media/2117575073586655232](/0xlangeai/article/2117582319473102854/media/2117575073586655232)

焚决③｜发给 WorkBuddy，查这几条微信消息

> 看我给你的微信内容，只提炼一个公开问题。给它一个新的任务编号，用已配置的 Grok Bot 接单工具发出去。只发送编号和问题，别转发微信原文。去这篇飞书文档找本次编号，找到后在这里给我三样东西：一句结论、官方链接、没查到的地方。若这次没等到，不要拿别的任务结果顶上，也不要重发；把任务编号留给我，之后我可以再让你查一次。

> 文档：〔粘贴飞书文档链接〕

点发送后，WorkBuddy 读了这张图片，只把公开问题和任务编号 WB-WX-1103-01 交给 Grok Bot。Grok Bot 查完[官推原帖](https://x.com/claudeai/status/2116220869479428500)和[官方帮助中心](https://support.claude.com/en/articles/17728952-what-is-the-ultra-plan)，把结论和链接写进交接文档。

最后回到原来的 WorkBuddy 对话，看任务编号对不对、链接能不能点开。这一单读回的结论是：已验证的 Ultra 账户会逐步取消 5 小时限制，周限额仍在。

第一次自动取回时，只读了编号后面的几行，漏掉了链接。WorkBuddy 用 CLI 补读后，在原对话里拿到了完整结果。同一个编号只派了一次。如果你遇到类似情况，让它按编号读完整一节即可。

[/0xlangeai/article/2117582319473102854/media/2117576692156022786](/0xlangeai/article/2117582319473102854/media/2117576692156022786)

### 附：想知道两个工具具体做了什么

如果你跟着提示词能跑通，这段可以跳过。

- 派单： 向 Grok Bot 的 Webhook 地址发送一个 POST，用 Authorization: Bearer <key> 验证身份。请求里只放任务编号和公开问题，例如 {"jobId":"WB-20261103-01","question":"核对 Claude Ultra 用量规则的官方出处"}。号码每单换一个。
- 写回： Grok Bot 在它自己的云电脑上运行飞书 CLI。已经授权时，用 docs +update 的 append 将结果追加到同一篇飞书文档；不要覆盖全文。
- 取回： WorkBuddy 桌面端用这台电脑上已授权的飞书 CLI，按编号读回对应段落。飞书只保存结果；WorkBuddy 要自己去读。隔一会儿回来取也可以。

下面是两端用到的命令。两边各用自己已授权的飞书身份：

bash

```
<span style="--shiki-dark:#737373;--shiki-light:#8a8a8a"># Grok Bot：把本单结果追加到交接文档
</span><span style="--shiki-dark:#08c0ef;--shiki-light:#009fff">lark-cli </span>docs +update --as user --doc <span style="--shiki-dark:#5ecc71;--shiki-light:#199f43">"<私有文档链接>" </span>\
  <span style="--shiki-dark:#08c0ef;--shiki-light:#009fff">--command </span>append --doc-format markdown --content - <span style="--shiki-dark:#a3a3a3;--shiki-light:#575757"><<</span><span style="--shiki-dark:#5ecc71;--shiki-light:#199f43">'RESULT'
</span><span style="--shiki-dark:#737373;--shiki-light:#8a8a8a">## WB-20261103-01
</span><span style="--shiki-dark:#08c0ef;--shiki-light:#009fff">结论：填入本次查证的简短结果。
来源：填入实际打开的官方链接。
未确认：填入没找到的部分。
RESULT

</span><span style="--shiki-dark:#737373;--shiki-light:#8a8a8a"># WorkBuddy：先按编号找到标题，记下标题块的 ID
</span><span style="--shiki-dark:#08c0ef;--shiki-light:#009fff">lark-cli </span>docs +fetch --as user --doc <span style="--shiki-dark:#5ecc71;--shiki-light:#199f43">"<私有文档链接>" </span>\
  <span style="--shiki-dark:#08c0ef;--shiki-light:#009fff">--scope </span>keyword --keyword <span style="--shiki-dark:#5ecc71;--shiki-light:#199f43">"WB-20261103-01" </span>--detail with-ids \
  <span style="--shiki-dark:#08c0ef;--shiki-light:#009fff">--doc-format </span>markdown

<span style="--shiki-dark:#737373;--shiki-light:#8a8a8a"># 再从该标题读取整节，结论和链接都能取回
</span><span style="--shiki-dark:#08c0ef;--shiki-light:#009fff">lark-cli </span>docs +fetch --as user --doc <span style="--shiki-dark:#5ecc71;--shiki-light:#199f43">"<私有文档链接>" </span>\
  <span style="--shiki-dark:#08c0ef;--shiki-light:#009fff">--scope </span>section --start-block-id <span style="--shiki-dark:#5ecc71;--shiki-light:#199f43">"<标题块 ID>" </span>\
  <span style="--shiki-dark:#08c0ef;--shiki-light:#009fff">--doc-format </span>markdown
```

### 📙 历史文章

### [Grok Bot 怎么用才顺手？拆解 poteto 的使用指南](https://x.com/0xlangeai/status/2117197419779866647?a=Xbz6zUQBMX0aJHkL3UM&s=20)

[Grok Bot Pages 新手保姆级教程：报告、备忘录、仪表盘实操](https://x.com/0xlangeai/status/2113561892505763850)

[X 上 Grok Bot 必读文章合集：9 个分类，24 篇文章](https://x.com/0xlangeai/status/2111396742264742034)

[揭秘 REA 爆火的背后，为何十天从几百到二十万 + Star](https://x.com/0xlangeai/status/2110322100569579714?s=20)

[REA 保姆级上手教程: Codex 实操官方案例](https://x.com/0xlangeai/status/2109544824135467312)

[把自己的推文做成个人画像网站](https://x.com/0xlangeai/status/2109115005069341175?s=20)

[Muse 上手保姆级教程：从登录到完成第一个任务](https://x.com/0xlangeai/status/2103300004966478284)

[为什么是 Muse：Meta 想接手的，不只是你的待办事项](https://x.com/0xlangeai/status/2105226142668251153)

[别再急着买API, 用 CLIProxyAPI 盘活你的 AI 订阅](https://x.com/0xlangeai/status/2106213413928194301)

[新版 Codex 桌面端：值得关注的五个重点](https://x.com/0xlangeai/status/2108017762337755604?s=20)

[我把 JEV、GrokBot、X 玩到了一起](https://x.com/0xlangeai/status/2101555600618602625)

[深度调研 Grok Bot 自带云电脑：配置怎么样，能做什么，能当服务器用吗？](https://x.com/0xlangeai/status/2100411223410110578?s=20)

[Cursor + Grok Bot + pstack，真正的 AI 软件工厂开始出现了](https://x.com/0xlangeai/status/2097839261039153381?s=20)

[用 SSH 连上 Grok Bot 服务器, 保姆级教程](https://x.com/0xlangeai/status/2093192039051489662)

如果这篇教程对你有点帮助，欢迎 关注 + 收藏 + 转发

持续分享 AI 工具使用经验和心得,  ⏩ 关注[@0xlangeai](https://x.com/@0xlangeai)

[/0xlangeai](/0xlangeai)[蓝哥AI](/0xlangeai)

🚀 连续创业者 | 前独角兽架构师
🏗️ Grok Bot 、Muse 、Hermes 重度用户 | AI 工具测评
✍️ 写写 AI编程、 AI企服、AI出海 内容
Grok Bot Template Hub: [grok-bot.app](https://t.co/xo4Lw6dY7D)
199 付费答疑群 +V: langeai666
[More Articles](/0xlangeai/articles)
Join 11.7K followers

[11:39 AM · Nov 3, 2026](/0xlangeai/status/2117582319473102854)·[452 Views](/0xlangeai/status/2117582319473102854)

[10](/compose/post?in_reply_to=2117582319473102854)
2
16
6
