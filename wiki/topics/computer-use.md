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
  - id: xiaomovps-cloudflare-ai-free-tier
    resource: https://x.com/xiaomovps/status/2115683808033001567
    title: Xiaomo on Cloudflare AI free tiers and usage
  - id: 0xlangeai-workbuddy-browser-codex-pro
    resource: https://x.com/0xlangeai/status/2115764128375881791
    title: 0xlangeai on WorkBuddy browser ops and possibly using Codex less
  - id: cgnot996-grok-bot-v0781-shopping-vault-pages
    resource: https://x.com/cgnot996/status/2115752949276123606
    title: cgnot996 on Grok Bot v0.78.1 shopping cards, logistics, Pages, and Vault
  - id: logicrw-information-deepseek-kimi-astra-distillation
    resource: https://x.com/0xLogicrw/status/2115649642604191797
    title: Logicrw on The Information—DeepSeek Flash / Kimi K3.1 Pro alleged GPT-6 Astra distillation
  - id: logicrw-google-android-summit-claude-codex-cli
    resource: https://x.com/0xLogicrw/status/2115763543194902801
    title: Logicrw on Google Android summit—Claude Code / Codex official Android CLI plugins
  - id: dotey-claude-api-request-size-128mb
    resource: https://x.com/dotey/status/2115968852349567254
    title: Dotey on Claude API request size increasing to 128 MB
  - id: xiaomovps-dsh-android
    resource: https://x.com/xiaomovps/status/2116096229272637527
    title: Xiaomo introduces DSH-Android
  - id: 0xlangeai-grok-bot-v0755-v0781-highlights
    resource: https://x.com/0xlangeai/status/2116061395347493324
    title: Grok Bot 0.75.5 to 0.78.1 highlights
generated:
  by: codex/gpt-6
  at: 2026-10-30T20:43:19+08:00
---
<!-- Same-file bilingual (project extension): title + title_en, description + description_en, bilingual section headings, ZH then EN body pairs. Proper nouns / product names / APIs / resource URLs stay in their common form. Do not invent facts; translate existing claims faithfully. -->

# Computer Use

*Computer Use*

Computer Use 把「会想」与「会动手」拆开：模型负责看界面与决策，另一段程序执行点按，并在看、想、做、查的循环里推进；如何定位控件、能否后台运行、速度与乱点安全，是同一架构下的开放问题。同一路径也可落到手机：在 Codex / Claude Code 一类 harness 里驱动模型跨 App 逐条操作——既可以绕开官方付费批量导出做数据迁移，也可以清掉搁置已久的信用卡积分兑换等生活操作；还可落到个人 Agent 的云浏览器：登录电商账号、按地址筛订单并换开公司抬头报销发票。[^dotey-computer-use-principles][^turingou-phone-migrate-flighty][^turingou-claude-clear-credit-card-points][^cgnot996-grok-bot-jd-invoice-reissue]

Computer Use splits thinking from acting: the model sees the UI and decides, another program clicks, and work advances in a look–think–do–check loop; how to target controls, whether work can stay in the background, speed, and click safety are open questions under that same architecture. The same path can land on a phone: drive a model inside a harness like Codex or Claude Code to act across apps one by one—either skipping a paid official batch export for data migration, or clearing long-deferred life ops such as redeeming credit-card points; it can also land in a personal agent’s cloud browser—log into a shopping account, filter orders by address, and reissue company-letterhead reimbursement invoices.[^dotey-computer-use-principles][^turingou-phone-migrate-flighty][^turingou-claude-clear-credit-card-points][^cgnot996-grok-bot-jd-invoice-reissue]

## 摘要 / Summary

模型决策与工具执行分工可跨桌面、手机和云浏览器复用；后台能力与人工接管须按平台和实现判断。 / The split between model decisions and tool execution spans desktops, phones, and cloud browsers; background operation and human handoff depend on the platform and implementation.

## 综合分析 / Synthesis

浏览器代操作的安全边界应区分凭据填充、规则管理与交易批准。[蓝哥AI的版本概述](../sources/articles/0xlangeai-grok-bot-v0755-v0781-highlights.md) 将 1Password 的 App 内审批与 Bot 浏览器填充分开，称 Bot 看不到密码，并介绍 Settings 统一管规则、Bot 在聊天里提议改规则；其商品卡下单须批准的说法与已有购物卡来源一致。这补充了人工介入的具体位置，但未交代规则提议如何获批生效，也未验证凭据隔离实现，不能据此推断所有后续动作均已获授权。[^0xlangeai-grok-bot-v0755-v0781-highlights]

Browser-operation safety boundaries should distinguish credential filling, rule management, and transaction approval. [0xlangeai’s release summary](../sources/articles/0xlangeai-grok-bot-v0755-v0781-highlights.md) separates 1Password approval in the app from filling in the Bot browser, says the Bot cannot see passwords, and describes centralized rules in Settings with rule-change proposals in chat. Its requirement for product-card order approval agrees with the existing shopping-card source. This adds specific points of human involvement, but does not explain how rule proposals gain approval and take effect or verify credential isolation; it cannot establish authorization for all subsequent actions.[^0xlangeai-grok-bot-v0755-v0781-highlights]

执行位置、交互权限与模型位置应分别判断：[DSH-Android](../sources/articles/xiaomovps-dsh-android.md) 把 Node.js 24 与 DSH 引擎打包到 APK，以无障碍服务完成读屏与点按，说明手机本身也可承载执行循环。帖文称 Shizuku 提供后台屏幕操作，并在登录、验证码和付款时交还人工；这为后台与接管问题提供了一种 Android 实现路径，但未证明任务成功率或安全性，也不能从本机引擎推断模型本地推理。适用范围为 Android 10 及以上 ARM64，且第三方插件安装尚不具桌面版自由度。[^xiaomovps-dsh-android]

Execution location, interaction permissions, and model location need separate assessment: [DSH-Android](../sources/articles/xiaomovps-dsh-android.md) bundles Node.js 24 and the DSH engine in an APK and uses accessibility for screen reading and taps, showing that the phone can host the execution loop itself. The post reports background-screen operation through Shizuku and human handoff for login, verification codes, and payments. This supplies an Android implementation path for background work and handoff, without establishing task success rates or safety; a local engine also does not establish local model inference. Scope is ARM64 on Android 10 and above, with less freedom to install third-party plugins than on desktop.[^xiaomovps-dsh-android]

截图循环还受请求体字节额度约束：图片编码后的大小与视觉 token 用量不等价，因而窗口有余量时也可能无法继续发送历史截图。[宝玉解读 Claude API 128 MB](../sources/articles/dotey-claude-api-request-size-128mb.md) 将官方 Messages / Token Counting 从 32 MB 增至 128 MB 解释为缓解这一瓶颈；这为长会话提供传输空间，未提供完成率、速度或安全性改进的实测，且不适用于所有云渠道。[^dotey-claude-api-request-size-128mb]

Screenshot loops also face a request-body byte budget: encoded image size is not equivalent to visual token usage, so sending screenshot history can fail while context capacity remains. [Dotey on the Claude API 128 MB limit](../sources/articles/dotey-claude-api-request-size-128mb.md) explains the official Messages / Token Counting increase from 32 MB to 128 MB as relief for this bottleneck; it supplies transport capacity for long sessions, without measured completion-rate, speed, or safety gains, and does not apply to every cloud channel.[^dotey-claude-api-request-size-128mb]

[宝玉讲 Computer Use 原理](../sources/articles/dotey-computer-use-principles.md) 把 Computer Use 讲成可科普的分工：你对 AI 说一句话，它就能打开软件、点按钮，但 AI 没有手——模型只看和想，动手的是另一段程序的循环。[^dotey-computer-use-principles] 该帖列出四个待讲清的问题：截图 / 辅助功能 / 软件接口如何定位按钮；为何 Mac 可后台而 Windows 常占桌面；GPT-6 Astra 变快了多少及数字出处；乱点是否安全。[^dotey-computer-use-principles] 原帖 <https://x.com/dotey/status/2113694852281938162>。

[Dotey on Computer Use principles](../sources/articles/dotey-computer-use-principles.md) frames Computer Use as a teachable split of labor: one spoken request can open apps and click buttons, yet the AI has no hands—the model only sees and thinks, while another program loops to act.[^dotey-computer-use-principles] The post lists four questions to clear up: how screenshots, accessibility, and software APIs locate buttons; why Mac can work in the background while Windows often holds the desktop; how much faster GPT-6 Astra got and who those figures come from; and whether random clicking is safe.[^dotey-computer-use-principles] Post: <https://x.com/dotey/status/2113694852281938162>.

[郭宇在手机上把一年行程迁到 Flighty](../sources/articles/turingou-phone-migrate-flighty.md) 给出手机侧实例：[@turingou](https://x.com/turingou) 在 Codex 里让 DeepSeek 操作手机，把航旅纵横全部行程迁到 Flighty；拒绝开通会员批量导出后，改为一条条导入，约 20 分钟完成一年。[^turingou-phone-migrate-flighty] 原帖 <https://x.com/turingou/status/2113618137275154868>。帖文是成果自述，未说明点按实现、权限边界或失败重试细节。

[Turingou migrates a year of trips to Flighty on his phone](../sources/articles/turingou-phone-migrate-flighty.md) gives a phone-side case: [@turingou](https://x.com/turingou) had DeepSeek in Codex operate his phone to move every 航旅纵横 (Umetrip) trip into Flighty; after declining membership batch export, one-by-one import finished a year in about 20 minutes.[^turingou-phone-migrate-flighty] Post: <https://x.com/turingou/status/2113618137275154868>. The post is an outcome report and does not detail click mechanics, permission bounds, or retry behavior.

[郭宇用 Claude Code 清国内信用卡积分](../sources/articles/turingou-claude-clear-credit-card-points.md) 再给一例手机操作：交代 Claude Code 用连上线的常用手机，把国内早已不用的信用卡积分兑成航司里程、万豪积分或米面粮油与小家电送家人；作者称是 TODO 搁很久的小事。[^turingou-claude-clear-credit-card-points] 原帖 <https://x.com/turingou/status/2115388647805722809>。执行面仍是「Agent 操控手机」，价值主张另见 [Agent 清掉搁置的生活待办](./agent-clears-deferred-life-todos.md)。

[Turingou has Claude Code clear unused China credit-card points](../sources/articles/turingou-claude-clear-credit-card-points.md) adds another phone-ops case: he told Claude Code to use his online everyday phone and redeem long-unused domestic credit-card points into airline miles, Marriott points, or groceries and small appliances for family—a small task long stuck on his TODO.[^turingou-claude-clear-credit-card-points] Post: <https://x.com/turingou/status/2115388647805722809>. The execution surface is still “agent drives the phone”; the value claim lives on [Agents clear deferred life TODOs](./agent-clears-deferred-life-todos.md).

[铁柱AGI谈 Grok Bot 京东换开发票](../sources/articles/cgnot996-grok-bot-jd-invoice-reissue.md) 补云浏览器侧：[@cgnot996](https://x.com/cgnot996) 把京东登录到 Grok Bot 浏览器，让 Bot 按驻场园区地址筛订单、去掉 E 卡与外卖，把项目物料换开成公司抬头发票，用 Bot 邮箱收票后打包发回；并引用 Elon Musk「像雇了个很棒的员工」。[^cgnot996-grok-bot-jd-invoice-reissue] 原帖 <https://x.com/cgnot996/status/2115345115137053105>。执行面是个人 Agent 云浏览器而非手机 App；报销换开动机与「记下来但懒得做」的生活 TODO 不同，后者见 [Agent 清掉搁置的生活待办](./agent-clears-deferred-life-todos.md)。把购物站登录态放进 Bot 浏览器也触及 [个人 Agent 云环境的备份、隔离与定时检查](./personal-agent-cloud-env-pitfalls.md) 所说的共机/共享浏览器登录，但本页只收 GUI 操作证据，不展开云环境运维清单。

[cgnot996 on Grok Bot reissuing JD.com invoices](../sources/articles/cgnot996-grok-bot-jd-invoice-reissue.md) adds a cloud-browser side: [@cgnot996](https://x.com/cgnot996) logged JD.com into Grok Bot’s browser, had it filter residency-park orders, drop E-cards and food delivery, reissue project materials under company letterhead, receive invoices on the bot’s email, and package them back—quoting Elon Musk that it is like hiring an awesome employee.[^cgnot996-grok-bot-jd-invoice-reissue] Post: <https://x.com/cgnot996/status/2115345115137053105>. The surface is a personal-agent cloud browser, not phone apps; reimbursement reissue is a different motive from “noted but too lazy” life TODOs on [Agents clear deferred life TODOs](./agent-clears-deferred-life-todos.md). Putting a shopping-site login into the bot browser also touches shared-host / shared browser login on [Personal-agent cloud env: backup, isolation, and schedule checks](./personal-agent-cloud-env-pitfalls.md), but this page only takes the GUI-ops evidence and does not expand the cloud-env ops checklist.

[小墨谈 Cloudflare AI 免费额度与玩法](../sources/articles/xiaomovps-cloudflare-ai-free-tier.md) 再补**托管浏览器 API** 侧：免费 **Browser Run** 日 10 分钟、3 并发，经 API Token 给 Agent 做网页自动化、截图、转 PDF、抓取，无需自维护 Chromium——仍是「模型想、程序点」分工下的**云端浏览器执行面**，与 Grok Bot 内置云浏览器个案同族但产品是 Cloudflare 托管、按分钟/并发限额；与宝玉帖的桌面 Computer Use 原理互补，不解决 Mac/Windows 后台差异那一组开放问题。[^xiaomovps-cloudflare-ai-free-tier] 原帖 <https://x.com/xiaomovps/status/2115683808033001567>。

[Xiaomo on Cloudflare AI free tiers and usage](../sources/articles/xiaomovps-cloudflare-ai-free-tier.md) adds a **hosted browser API** lane: free **Browser Run**—10 minutes/day, three concurrent browsers via API token—for agent web automation, screenshots, PDF export, and scraping without self-hosted Chromium—still a cloud **browser execution surface** under the “model thinks, program clicks” split, kin to Grok Bot’s built-in cloud browser cases but as Cloudflare-managed capacity with minute/concurrency caps; complementary to Dotey’s desktop Computer Use principles, not answering Mac/Windows background differences.[^xiaomovps-cloudflare-ai-free-tier] Post: <https://x.com/xiaomovps/status/2115683808033001567>.

[蓝哥AI谈 WorkBuddy 浏览器操作后可能少用 Codex](../sources/articles/0xlangeai-workbuddy-browser-codex-pro.md) 补 **Magpie/WorkBuddy 桌面 Agent** 侧：[@0xlangeai](https://x.com/0xlangeai) 称 WorkBuddy **已支持浏览器操作**，并据此感觉以后用 Codex 的场景会更少——仍是「模型想、程序点」分工下的**内置浏览器执行面**扩张，但抓取正文**无** demo、点按实现或与 Codex 浏览器能力对照；订阅后果另见 [高端 AI 订阅价值](./premium-ai-subscription-value.md)。[^0xlangeai-workbuddy-browser-codex-pro] 原帖 <https://x.com/0xlangeai/status/2115764128375881791>。

[0xlangeai on WorkBuddy browser ops and possibly using Codex less](../sources/articles/0xlangeai-workbuddy-browser-codex-pro.md) adds the **Magpie/WorkBuddy desktop agent** lane: [@0xlangeai](https://x.com/0xlangeai) says WorkBuddy **already supports browser operations** and expects fewer Codex use cases—still an expanded **built-in browser execution surface** under “model thinks, program clicks,” but the fetched body has **no** demo, click mechanics, or contrast with Codex browser features; subscription fallout on [Premium AI subscription value](./premium-ai-subscription-value.md).[^0xlangeai-workbuddy-browser-codex-pro] Post: <https://x.com/0xlangeai/status/2115764128375881791>.

[铁柱AGI谈 Grok Bot v0.78.1 购物卡与 Vault](../sources/articles/cgnot996-grok-bot-v0781-shopping-vault-pages.md) 补 **产品内置购物与物流** 面：[@cgnot996](https://x.com/cgnot996) 称 **v0.78.1** 推出购物卡（商品带图、评分、价格、横滑浏览，**下单前须用户确认**）、买完自动跟快递并在发货/派送时通知——仍是个人 Agent 云浏览器里的 GUI/流程自动化，与 [京东换开发票](../sources/articles/cgnot996-grok-bot-jd-invoice-reissue.md) 的后台报销筛单不同轴，但同属「Bot 代操作电商」；抓取正文**未**写支持哪些站点、支付接法或失败回滚。[^cgnot996-grok-bot-v0781-shopping-vault-pages] 原帖 <https://x.com/cgnot996/status/2115752949276123606>。

[cgnot996 on Grok Bot v0.78.1 shopping cards, logistics, Pages, and Vault](../sources/articles/cgnot996-grok-bot-v0781-shopping-vault-pages.md) adds a **built-in shopping and logistics** lane: [@cgnot996](https://x.com/cgnot996) says **v0.78.1** ships shopping cards (images, scores, prices, horizontal browse, **mandatory user confirm before order**), post-purchase courier tracking, and ship/delivery notifications—still GUI/flow automation in the personal-agent cloud browser, a different axis from [JD invoice reissue](../sources/articles/cgnot996-grok-bot-jd-invoice-reissue.md) reimbursement filtering, but still “bot-operated commerce”; the fetched body does **not** name supported sites, payment wiring, or rollback on failure.[^cgnot996-grok-bot-v0781-shopping-vault-pages] Post: <https://x.com/cgnot996/status/2115752949276123606>.

[思维怪怪转 The Information：DeepSeek Flash / Kimi K3.1 Pro 疑蒸馏 GPT-6 Astra](../sources/articles/logicrw-information-deepseek-kimi-astra-distillation.md) 提供**浏览器操作能力榜**侧证（非架构科普）：帖文称 DeepSeek 新版在浏览器操作任务上尤其突出；**Browser Use** **180 项真实网页任务**上，DeepSeek 得分 **70.9→75.0**，接近 **GPT-6 Astra** **77.9**，每题模型调用成本约 **0.22 美元** 对 **10.77 美元**。[^logicrw-information-deepseek-kimi-astra-distillation] 原帖 <https://x.com/0xLogicrw/status/2115649642604191797>。这是**模型在网页 GUI 任务上的分数与成本**，不说明点按 harness 实现；与宝玉帖的 Mac/Windows 后台与安全四问互补。

[Logicrw on The Information—DeepSeek Flash / Kimi K3.1 Pro alleged GPT-6 Astra distillation](../sources/articles/logicrw-information-deepseek-kimi-astra-distillation.md) adds **browser-operation benchmark** evidence (not architecture explainer): DeepSeek’s new version stands out on browser tasks; on **Browser Use**’s **180 real web tasks**, DeepSeek **70.9→75.0**, near **GPT-6 Astra** **77.9**, per-task cost about **$0.22** vs **$10.77**.[^logicrw-information-deepseek-kimi-astra-distillation] Post: <https://x.com/0xLogicrw/status/2115649642604191797>. These are **model scores and costs on web GUI tasks**, not click-harness mechanics; complementary to Dotey’s Mac/Windows background and safety questions.

[思维怪怪谈 Google Android 峰会：Claude Code / Codex 官方 Android CLI 插件](../sources/articles/logicrw-google-android-summit-claude-codex-cli.md) 补 **官方 Android 开发 harness** 侧：[@0xLogicrw](https://x.com/0xLogicrw) 转述 Google 在 **10 月 28 日**峰会为 **Claude Code** / **Codex** 推出官方 **Android CLI** 插件——**编译**、**查界面**、**模拟点击**、**跑测试**，并可**远程**使用 Google 设备实验室真机（装 App、抓日志，无需自插手机或模拟器）；**Android Studio** 亦向 **40+** 编程 Agent 开放编译器/模拟器/调试器。仍是「模型想、工具链点/测」分工下的**第一方 IDE 执行面**，与郭宇帖的**非官方**手机跨 App 操作、铁柱帖的 Grok 云浏览器不同轴；抓取正文**无**插件命令面、权限弹窗或与 Desktop Computer Use 的对照。[^logicrw-google-android-summit-claude-codex-cli] 原帖 <https://x.com/0xLogicrw/status/2115763543194902801>。

[Logicrw on Google Android summit—Claude Code / Codex official Android CLI plugins](../sources/articles/logicrw-google-android-summit-claude-codex-cli.md) adds an **official Android dev harness** lane: [@0xLogicrw](https://x.com/0xLogicrw) relays Google’s **Oct 28** summit shipping official **Android CLI** plugins for **Claude Code** / **Codex**—**compile**, **UI inspect**, **simulated taps**, **tests**, plus **remote** phones in Google’s device lab (install, logs, no local phone/emulator); **Android Studio** also opens compiler/emulator/debugger to **40+** coding agents. Still a **first-party IDE execution surface** under “model thinks, toolchain acts/clicks/tests,” a different axis from Turingou’s **unofficial** cross-app phone ops or cgnot996’s Grok cloud browser; the fetched body has **no** plugin command surface, permission prompts, or contrast with desktop Computer Use.[^logicrw-google-android-summit-claude-codex-cli] Post: <https://x.com/0xLogicrw/status/2115763543194902801>.

## 矛盾与变化 / Contradictions

暂无。宝玉帖以桌面 Computer Use 原理与 Mac/Windows 后台差异为主；郭宇两帖是手机跨 App 迁移与积分兑换的个案；铁柱AGI帖是 Grok Bot 云浏览器电商换开个案；思维怪怪 Android 峰会帖是 **Android Studio 官方 CLI/设备实验室** 开发 harness——执行面不同，与原理帖互补而非对立。 / None yet. Dotey’s post centers desktop Computer Use principles and Mac/Windows background differences; Turingou’s two posts are phone cross-app migration and points-redemption cases; cgnot996’s post is a Grok Bot cloud-browser e-commerce invoice-reissue case; Logicrw’s Android summit post is the **official Android Studio CLI / device-lab** dev harness—different surfaces, complementary to the principles post, not opposed.

## 相关 / Related

- Source: [小墨介绍 DSH-Android 开源版 / Xiaomo introduces open-source DSH-Android](../sources/articles/xiaomovps-dsh-android.md)

- [宝玉解读 Claude API 请求上限 / Dotey on Claude API request limits](../sources/articles/dotey-claude-api-request-size-128mb.md)

- Source: [宝玉讲 Computer Use 原理](../sources/articles/dotey-computer-use-principles.md)
- Source: [郭宇在手机上把一年行程迁到 Flighty](../sources/articles/turingou-phone-migrate-flighty.md)
- Source: [郭宇用 Claude Code 清国内信用卡积分](../sources/articles/turingou-claude-clear-credit-card-points.md)
- Source: [铁柱AGI谈 Grok Bot 京东换开发票](../sources/articles/cgnot996-grok-bot-jd-invoice-reissue.md)
- Source: [小墨谈 Cloudflare AI 免费额度与玩法](../sources/articles/xiaomovps-cloudflare-ai-free-tier.md)
- Source: [蓝哥AI谈 WorkBuddy 浏览器操作后可能少用 Codex](../sources/articles/0xlangeai-workbuddy-browser-codex-pro.md)
- Source: [铁柱AGI谈 Grok Bot v0.78.1 购物卡与 Vault](../sources/articles/cgnot996-grok-bot-v0781-shopping-vault-pages.md)
- Source: [思维怪怪转 The Information：DeepSeek Flash / Kimi K3.1 Pro 疑蒸馏 GPT-6 Astra](../sources/articles/logicrw-information-deepseek-kimi-astra-distillation.md)
- Source: [思维怪怪谈 Google Android 峰会：Claude Code / Codex 官方 Android CLI 插件](../sources/articles/logicrw-google-android-summit-claude-codex-cli.md)
- Topic: [Agent 清掉搁置的生活待办](./agent-clears-deferred-life-todos.md)
- Topic: [个人 Agent 云环境的备份、隔离与定时检查](./personal-agent-cloud-env-pitfalls.md)

[^dotey-computer-use-principles]: Dotey on Computer Use principles
[^turingou-phone-migrate-flighty]: Turingou migrates a year of trips to Flighty on his phone
[^turingou-claude-clear-credit-card-points]: Turingou has Claude Code clear unused China credit-card points
[^cgnot996-grok-bot-jd-invoice-reissue]: cgnot996 on Grok Bot reissuing JD.com invoices
[^xiaomovps-cloudflare-ai-free-tier]: Xiaomo on Cloudflare AI free tiers and usage
[^0xlangeai-workbuddy-browser-codex-pro]: 0xlangeai on WorkBuddy browser ops and possibly using Codex less
[^cgnot996-grok-bot-v0781-shopping-vault-pages]: cgnot996 on Grok Bot v0.78.1 shopping cards, logistics, Pages, and Vault
[^logicrw-information-deepseek-kimi-astra-distillation]: Logicrw on The Information—DeepSeek Flash / Kimi K3.1 Pro alleged GPT-6 Astra distillation
[^logicrw-google-android-summit-claude-codex-cli]: Logicrw on Google Android summit—Claude Code / Codex official Android CLI plugins

[^dotey-claude-api-request-size-128mb]: Dotey on Claude API request size increasing to 128 MB

[^xiaomovps-dsh-android]: Xiaomo introduces DSH-Android

[^0xlangeai-grok-bot-v0755-v0781-highlights]: Grok Bot 0.75.5 to 0.78.1 highlights
