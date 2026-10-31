[/dotey](/dotey)

[宝玉](/dotey)
[@dotey](/dotey)

Show translation
疑似造假：有人称偷到 Claude Fable 5 权重在兜售，网友比对发现文件来自 DeepSeek 免费开源的模型

网上有人在兜售所谓 Anthropic 旗舰模型 Claude Fable 5 的“权重”。这个说法没有证实，已有网友指出是假的：卖家晒出的文件，和 DeepSeek 免费公开下载的模型文件一个字节都不差。截至北京时间 31 日上午，Anthropic 和亚马逊都没有回应，也没有主流媒体报道。

【卖家怎么说】

消息来自 X 账号 Dark Web Informer，它专门转发黑客论坛上的动态。帖子说，一个叫“localizer”的人声称，亚马逊云（AWS）上有个和 Amazon Bedrock 相关的存储桶权限没设好，他从里面拿到了 Fable 5 权重的一个分片，约 7GB。

模型权重是模型训练出来的全部参数，就是一大堆数字组成的文件，拿到它就能在自己的机器上跑这个模型。Anthropic 从不公开权重，外人只能付费调用。Amazon Bedrock 是亚马逊的 AI 模型平台，企业可以在上面调用 Claude。权重文件太大，要切成很多块存放，就像压缩包分卷，每一块叫一个分片。

localizer 说完整模型有 640 个分片、约 8TB，他只拿到 1 片，存储桶就被锁了。他晒出了文件名、模型信息和文件内容的截图当证据，现在要卖这一片。Dark Web Informer 在帖子里也写明：说法未经证实，文件真假、和 Anthropic 有没有关系都没确认。

【为什么说疑似造假】

X 用户 toriset 回帖说这是假的，给了四条理由。

第一，截图里每个文件的大小和内容，都和 DeepSeek V4.1-Flash-1017 第 13 到 42 号分片完全一样。这个模型 10 月 17 日刚开源，任何人都能从 Hugging Face 免费下载。我查了 Hugging Face 上的文件列表，这个模型的分片大多是 7,389,761,368 字节，也就是 7.39GB，和卖家说的“约 7GB”对得上。卖家的截图我没能看到，没法自己逐字节比对。

第二，toriset 说 eu-north-1（AWS 的斯德哥尔摩区域）不托管 Fable。Dark Web Informer 的帖子没提区域，从回帖推断，卖家材料里写的是这个区域。AWS 文档显示，在斯德哥尔摩调用 Fable 5，请求会被转到别的地区处理，当地本身不运行这个模型。

第三，数字对不上。640 片乘以 7.39GB 约等于 4.73TB，离卖家说的 8TB 差了三千多 GB。

第四，toriset 说，只有 1/640 的权重，没法拿来蒸馏（用强模型训练自己的模型）。就算文件是真的，这也好比 640 卷的百科全书只拿到一卷，模型跑不起来。

另一位 X 用户 Ondrej Simaichl 提到，发帖的论坛账号这个月才注册。

【Anthropic 这周还有一起安全事件】

这条传言出现时，Anthropic 正在处理另一起已经证实的安全事件。据《华盛顿邮报》10 月 26 日报道，安全创业公司 Cathedral 在参加 Anthropic 的漏洞悬赏时，用 AI agent 通过第三方办公软件进入 Anthropic 内部系统，看到了工资、会议记录和 Slack 消息。Anthropic 说被访问的只是销售、人事和 IT 的一部分系统，用户的 Claude 聊天记录、源代码和模型权重都没有泄露，并指责 Cathedral 违反了悬赏规则。目前看不出这两件事有关联。

来源：
Dark Web Informer 原帖：X [@DarkWebInformer](/DarkWebInformer)
toriset 反驳：X [@torisetxd](/torisetxd)
DeepSeek V4.1-Flash-1017 文件列表：[huggingface.co/deepseek-ai/De…](https://t.co/vJR4RpU6Jp)
AWS Bedrock Fable 5 可用区域：[docs.aws.amazon.com/bedrock/latest…](https://t.co/zh3ZVVzlJG)
Cathedral 事件（The Decoder 转述《华盛顿邮报》）：[the-decoder.com/ai-agents-hack…](https://t.co/eo3qs71eES)

[/dotey/status/2116366460939386990/photo/1](/dotey/status/2116366460939386990/photo/1)

[/DarkWebInformer/status/2116304098228068572](/DarkWebInformer/status/2116304098228068572)[/DarkWebInformer](/DarkWebInformer)[Dark Web Informer](/DarkWebInformer)
[@DarkWebInformer](/DarkWebInformer)
[12h](/DarkWebInformer/status/2116304098228068572)

🚨🇺🇸 Anthropic model weights allegedly exposed through misconfigured AWS S3 bucket

An actor using the handle "localizer" claims to have obtained a 7 GB shard of Anthropic's alleged "Claude Fable 5" model weights from a misconfigured AWS S3 bucket associated with Amazon Bedrock.

[/DarkWebInformer/status/2116304098228068572/photo/1](/DarkWebInformer/status/2116304098228068572/photo/1)

[/DarkWebInformer/status/2116304098228068572/photo/2](/DarkWebInformer/status/2116304098228068572/photo/2)

[/i/birdwatch/n/2116363339185938784?source=8](/i/birdwatch/n/2116363339185938784?source=8)Readers added context

The model shown here is not a Claude model, but DeepSeek V4.1 Flash. This can be verified by the fact that the file sizes match those of DS V4.1 1017. The screenshot also includes "eu-north-1," even though it does not host Fable.

[x.com/torisetxd/stat…](https://t.co/RcdcUgPQ7Q)
[x.com/YipingDeng5/st…](https://t.co/PdzspSC3pa)
[x.com/olddonkeyblog/…](https://t.co/5ghesty6Du)
