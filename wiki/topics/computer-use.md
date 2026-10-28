---
type: Topic
title: Computer Use
title_en: Computer Use
description: AI 操控电脑或手机时，模型只负责看和想，真正点按由另一段「看、想、做、查」程序执行；定位、系统后台差异与安全边界是这条链路的关键问题；也可在手机上跨 App 逐条迁移数据、清掉搁置的信用卡积分兑换，或在个人 Agent 云浏览器里登录电商账号筛订单并换开报销发票。
description_en: When AI operates a computer or phone, the model only sees and thinks while a separate see-think-act-check program clicks; button targeting, OS background differences, and safety bounds are key questions on that path; the same path can migrate data across phone apps one by one, clear deferred life ops such as redeeming credit-card points, or—in a personal-agent cloud browser—log into a shopping account, filter orders, and reissue reimbursement invoices.
tags: [computer-use, agents, gui, accessibility, safety, phone, browser, grok-bot, invoice]
sources:
  - id: dotey-computer-use-principles
    resource: https://x.com/dotey/status/2113694852281938162
    title: Dotey on Computer Use principles
  - id: turingou-phone-migrate-flighty
    resource: https://x.com/turingou/status/2113618137275154868
    title: Turingou migrates a year of trips to Flighty on his phone
  - id: turingou-claude-clear-credit-card-points
    resource: https://x.com/turingou/status/2115388647805722809
    title: Turingou has Claude Code clear unused China credit-card points
  - id: cgnot996-grok-bot-jd-invoice-reissue
    resource: https://x.com/cgnot996/status/2115345115137053105
    title: cgnot996 on Grok Bot reissuing JD.com invoices
generated:
  by: cursor-agent/composer
  at: 2026-10-28T22:54:22+08:00
---
<!-- Same-file bilingual (project extension): title + title_en, description + description_en, bilingual section headings, ZH then EN body pairs. Proper nouns / product names / APIs / resource URLs stay in their common form. Do not invent facts; translate existing claims faithfully. -->

# Computer Use

*Computer Use*

Computer Use 把「会想」与「会动手」拆开：模型负责看界面与决策，另一段程序执行点按，并在看、想、做、查的循环里推进；如何定位控件、能否后台运行、速度与乱点安全，是同一架构下的开放问题。同一路径也可落到手机：在 Codex / Claude Code 一类 harness 里驱动模型跨 App 逐条操作——既可以绕开官方付费批量导出做数据迁移，也可以清掉搁置已久的信用卡积分兑换等生活操作；还可落到个人 Agent 的云浏览器：登录电商账号、按地址筛订单并换开公司抬头报销发票。[^dotey-computer-use-principles][^turingou-phone-migrate-flighty][^turingou-claude-clear-credit-card-points][^cgnot996-grok-bot-jd-invoice-reissue]

Computer Use splits thinking from acting: the model sees the UI and decides, another program clicks, and work advances in a look–think–do–check loop; how to target controls, whether work can stay in the background, speed, and click safety are open questions under that same architecture. The same path can land on a phone: drive a model inside a harness like Codex or Claude Code to act across apps one by one—either skipping a paid official batch export for data migration, or clearing long-deferred life ops such as redeeming credit-card points; it can also land in a personal agent’s cloud browser—log into a shopping account, filter orders by address, and reissue company-letterhead reimbursement invoices.[^dotey-computer-use-principles][^turingou-phone-migrate-flighty][^turingou-claude-clear-credit-card-points][^cgnot996-grok-bot-jd-invoice-reissue]

## 综合分析 / Synthesis

[宝玉讲 Computer Use 原理](../sources/articles/dotey-computer-use-principles.md) 把 Computer Use 讲成可科普的分工：你对 AI 说一句话，它就能打开软件、点按钮，但 AI 没有手——模型只看和想，动手的是另一段程序的循环。[^dotey-computer-use-principles] 该帖列出四个待讲清的问题：截图 / 辅助功能 / 软件接口如何定位按钮；为何 Mac 可后台而 Windows 常占桌面；GPT-6 Astra 变快了多少及数字出处；乱点是否安全。[^dotey-computer-use-principles] 原帖 <https://x.com/dotey/status/2113694852281938162>。

[Dotey on Computer Use principles](../sources/articles/dotey-computer-use-principles.md) frames Computer Use as a teachable split of labor: one spoken request can open apps and click buttons, yet the AI has no hands—the model only sees and thinks, while another program loops to act.[^dotey-computer-use-principles] The post lists four questions to clear up: how screenshots, accessibility, and software APIs locate buttons; why Mac can work in the background while Windows often holds the desktop; how much faster GPT-6 Astra got and who those figures come from; and whether random clicking is safe.[^dotey-computer-use-principles] Post: <https://x.com/dotey/status/2113694852281938162>.

[郭宇在手机上把一年行程迁到 Flighty](../sources/articles/turingou-phone-migrate-flighty.md) 给出手机侧实例：[@turingou](https://x.com/turingou) 在 Codex 里让 DeepSeek 操作手机，把航旅纵横全部行程迁到 Flighty；拒绝开通会员批量导出后，改为一条条导入，约 20 分钟完成一年。[^turingou-phone-migrate-flighty] 原帖 <https://x.com/turingou/status/2113618137275154868>。帖文是成果自述，未说明点按实现、权限边界或失败重试细节。

[Turingou migrates a year of trips to Flighty on his phone](../sources/articles/turingou-phone-migrate-flighty.md) gives a phone-side case: [@turingou](https://x.com/turingou) had DeepSeek in Codex operate his phone to move every 航旅纵横 (Umetrip) trip into Flighty; after declining membership batch export, one-by-one import finished a year in about 20 minutes.[^turingou-phone-migrate-flighty] Post: <https://x.com/turingou/status/2113618137275154868>. The post is an outcome report and does not detail click mechanics, permission bounds, or retry behavior.

[郭宇用 Claude Code 清国内信用卡积分](../sources/articles/turingou-claude-clear-credit-card-points.md) 再给一例手机操作：交代 Claude Code 用连上线的常用手机，把国内早已不用的信用卡积分兑成航司里程、万豪积分或米面粮油与小家电送家人；作者称是 TODO 搁很久的小事。[^turingou-claude-clear-credit-card-points] 原帖 <https://x.com/turingou/status/2115388647805722809>。执行面仍是「Agent 操控手机」，价值主张另见 [Agent 清掉搁置的生活待办](./agent-clears-deferred-life-todos.md)。

[Turingou has Claude Code clear unused China credit-card points](../sources/articles/turingou-claude-clear-credit-card-points.md) adds another phone-ops case: he told Claude Code to use his online everyday phone and redeem long-unused domestic credit-card points into airline miles, Marriott points, or groceries and small appliances for family—a small task long stuck on his TODO.[^turingou-claude-clear-credit-card-points] Post: <https://x.com/turingou/status/2115388647805722809>. The execution surface is still “agent drives the phone”; the value claim lives on [Agents clear deferred life TODOs](./agent-clears-deferred-life-todos.md).

[铁柱AGI谈 Grok Bot 京东换开发票](../sources/articles/cgnot996-grok-bot-jd-invoice-reissue.md) 补云浏览器侧：[@cgnot996](https://x.com/cgnot996) 把京东登录到 Grok Bot 浏览器，让 Bot 按驻场园区地址筛订单、去掉 E 卡与外卖，把项目物料换开成公司抬头发票，用 Bot 邮箱收票后打包发回；并引用 Elon Musk「像雇了个很棒的员工」。[^cgnot996-grok-bot-jd-invoice-reissue] 原帖 <https://x.com/cgnot996/status/2115345115137053105>。执行面是个人 Agent 云浏览器而非手机 App；报销换开动机与「记下来但懒得做」的生活 TODO 不同，后者见 [Agent 清掉搁置的生活待办](./agent-clears-deferred-life-todos.md)。把购物站登录态放进 Bot 浏览器也触及 [个人 Agent 云环境的备份、隔离与定时检查](./personal-agent-cloud-env-pitfalls.md) 所说的共机/共享浏览器登录，但本页只收 GUI 操作证据，不展开云环境运维清单。

[cgnot996 on Grok Bot reissuing JD.com invoices](../sources/articles/cgnot996-grok-bot-jd-invoice-reissue.md) adds a cloud-browser side: [@cgnot996](https://x.com/cgnot996) logged JD.com into Grok Bot’s browser, had it filter residency-park orders, drop E-cards and food delivery, reissue project materials under company letterhead, receive invoices on the bot’s email, and package them back—quoting Elon Musk that it is like hiring an awesome employee.[^cgnot996-grok-bot-jd-invoice-reissue] Post: <https://x.com/cgnot996/status/2115345115137053105>. The surface is a personal-agent cloud browser, not phone apps; reimbursement reissue is a different motive from “noted but too lazy” life TODOs on [Agents clear deferred life TODOs](./agent-clears-deferred-life-todos.md). Putting a shopping-site login into the bot browser also touches shared-host / shared browser login on [Personal-agent cloud env: backup, isolation, and schedule checks](./personal-agent-cloud-env-pitfalls.md), but this page only takes the GUI-ops evidence and does not expand the cloud-env ops checklist.

## 矛盾与变化 / Contradictions

暂无。宝玉帖以桌面 Computer Use 原理与 Mac/Windows 后台差异为主；郭宇两帖是手机跨 App 迁移与积分兑换的个案；铁柱AGI帖是 Grok Bot 云浏览器电商换开个案——执行面不同，与原理帖互补而非对立。 / None yet. Dotey’s post centers desktop Computer Use principles and Mac/Windows background differences; Turingou’s two posts are phone cross-app migration and points-redemption cases; cgnot996’s post is a Grok Bot cloud-browser e-commerce invoice-reissue case—different surfaces, complementary to the principles post, not opposed.

## 相关 / Related

- Source: [宝玉讲 Computer Use 原理](../sources/articles/dotey-computer-use-principles.md)
- Source: [郭宇在手机上把一年行程迁到 Flighty](../sources/articles/turingou-phone-migrate-flighty.md)
- Source: [郭宇用 Claude Code 清国内信用卡积分](../sources/articles/turingou-claude-clear-credit-card-points.md)
- Source: [铁柱AGI谈 Grok Bot 京东换开发票](../sources/articles/cgnot996-grok-bot-jd-invoice-reissue.md)
- Topic: [Agent 清掉搁置的生活待办](./agent-clears-deferred-life-todos.md)
- Topic: [个人 Agent 云环境的备份、隔离与定时检查](./personal-agent-cloud-env-pitfalls.md)

[^dotey-computer-use-principles]: Dotey on Computer Use principles
[^turingou-phone-migrate-flighty]: Turingou migrates a year of trips to Flighty on his phone
[^turingou-claude-clear-credit-card-points]: Turingou has Claude Code clear unused China credit-card points
[^cgnot996-grok-bot-jd-invoice-reissue]: cgnot996 on Grok Bot reissuing JD.com invoices
