[/dotey](/dotey)

[宝玉](/dotey)
[@dotey](/dotey)

Show translation
Opus 5.5 发布之后，AI Agent 剪辑视频已经能替代初级剪辑师了。差不多就相当于 Claude Code 刚发布的时候一样，模型真的能自主完成复杂编程任务了，但这才刚开始，想想 Claude Code 发布才多久。

当年 Anthropic 专注于训练 Coding，没想到能解决这么多问题，连视频剪辑都能用 HTML、JavaScript 剪视频、生成动画。

在 Opus 5.5 之前我就在做剪辑的 Skill 和工具，但模型发布后发现绝大部分 Skill 都不需要了。

我自己有做过实验，同一个视频，不用任何 Skill，只提供 ASR 和 TTS 工具，Opus 5.5 做的比没有用 Skill 效果更好，这点跟推文中的经验基本吻合。

另外 Sabba 有一条建议跟我最近在做的事差不多，他建议：“不要重造专业剪辑软件的时间线，那个太难做，专心做好初剪，再方便地交给现有专业软件”。

我最近也把 BaoCut 的时间线编辑器退居二线了，太过复杂，默认应该只需要一个简单的视频预览播放。

如果你用 Agent 去生成、剪辑视频的话，编辑器越简单越好，只要能标记，方便的让 Agent 知道改哪就够了。

这其实和之前 Tibo 改造 Codex 的经历类似，Codex 不需要一个 VSCode 的代码编辑器，视频剪辑 Agent 也不需要一个视频编辑器。

转发的这两条推文有分享很多 AI Agent 剪辑的经验，有兴趣的可以看看。

---

我把引用的两条推文放在一起总结一下：

Alex Cooper 管着一支剪辑团队，每天出大量广告，讲的是怎么用；Sabba Keynejad 是在线视频剪辑工具 VEED 的联合创始人，讲的是市场会怎么变。

1. 视频剪辑在走编程走过的路

两人都认为 AI 智能体剪辑已经能用，而且现在是它最差的时候。Alex 团队的资深剪辑师说，同等质量下，他一天的产出是以前的 5 倍。

Sabba 预计一年内基础剪辑的成本会从几美元降到几美分。Sabba 也拿编程做类比：资深工程师当初最抵触 AI 写的代码，理由是质量和可维护性，后来还是接受了。他认为最好的剪辑师会是最大的批评者，但最终也会转过来。

2. 视频被当成代码问题解决了

Sabba 解释了为什么是现在：Anthropic 押注编程，模型会写代码，就能用 HTML/CSS、SVG、浏览器渲染、OpenCV 这些手段“写”出视频。之前有一批工具包专门给大模型补剪辑能力，Opus 5.5 出来后，很多用法就用不上了。他也承认，现在剪出来的东西还是更像网页，不太像视频。

Alex 的经验和这一点基本一致：他试过各种方案，最后发现不装 MCP、不装插件，全在 Claude 里做效果最好。通用模型能力上去后，夹在中间的工具层会被吃掉一大块，编程领域已经发生过一次。

3. 核心资产是 Skill，Alex 给了一套能照搬的做法

这是两条帖子里最有实操价值的部分：

按风格拆小 Skill：混剪、UGC（模仿普通用户自拍口吻的素材）、AI 动画各做一个，不做大而全的剪辑 Skill，这样每次加载的上下文都和当前任务相关。

起步：给 Claude 4～5 条参考作品，让它总结成 Skill。
训练：让 Skill 把资深剪辑师最近剪的 25 条广告重剪一遍，放进 Artifact，资深剪辑师逐条点评，反复做到 Skill 明白什么是好剪辑。

把隐性知识录下来：让顶尖剪辑师边剪边录屏，用 Google Meet 或 Loom 口述为什么这样切、为什么这个节奏、为什么选这段空镜。这些理由就是 Skill 最缺的上下文。

只让最强的剪辑师训练 Skill。

结果是大部分片子第一版或第二版就能过，偶尔要到第三版。这套方法换到写作、设计、客服话术上也成立：用参考样本起底稿，用历史作品批量重做，专家逐条反馈，再把专家做判断时的理由录下来。

4. 人的价值从操作转到品味

Alex 认为技术趋势挡不住，但品味仍然很值钱，因为训练 AI、给 AI 反馈都靠它。有品味的剪辑师会更值钱，没有的会越来越难。

Sabba 从另一头说了同一件事：初剪做对 80%～90% 已经不错，要做到优秀，靠的是反复迭代，创作者怎么给反馈、怎么让片子带上自己的风格，才是这类工具真正的价值所在。

5. 推广的分工：负责人搭框架，最强的人教 AI

Alex 说，团队里推动 AI 的人搭好第一版就该让开。他说自己不是团队里最会剪的，他的工作是搭一套环境，让最会剪的人去训练 Skill。

在我看来，这同时化解了 Sabba 说的抵触问题：最可能反对的资深剪辑师，变成了教 AI 的人。另外他提醒要给资深剪辑师留出专门的时间，前期会有一段效率下降的阶段，不留时间，做出来的 Skill 质量一般，也省不了多少时间。

6. 两人的分歧，以及分歧背后的立场

Alex 全程在 Claude 对话里完成；Sabba 认为视频涉及时间轴和画面上的空间位置，只靠聊天不够，需要更复杂的界面。

Sabba 还认为品牌一致性和可重复性没解决，比如 Casey Neistat（风格很鲜明的 YouTube 博主）的视频一看就是他的，品牌方也需要在几百条视频里保持这种一致。但 Alex 那套“按风格拆 Skill + 反馈循环”的做法，本身就是在用户这一侧解决可重复性。

分歧有两个来源。Alex 做的是广告，时长短、套路固定、量大，最适合交给 AI。Sabba 是卖工具的，更好的界面正是他的生意。

7. 瓶颈会转移

Sabba 判断，剪辑变得几乎不费力后，创作者数量会暴增，拍摄和录制可能成为最大的瓶颈。Alex 说，他原以为还要 3～6 个月才能做到的事，现在已经能做了。

8. 给做工具的人的判断

Sabba 认为这个市场不会一家通吃，就像 Cursor 往大企业走、Lovable 服务不懂技术的用户。

基础剪辑撑不起长期优势，Anthropic、Google、OpenAI 迟早都会做；差异化要靠更深的工作流、垂直场景和好用的手机端。

他还建议不要重造专业剪辑软件的时间线，那个太难做，专心做好初剪，再方便地交给现有专业软件。

[/dotey/status/2115282464935473225/photo/1](/dotey/status/2115282464935473225/photo/1)

[/dotey/status/2115282464935473225/photo/2](/dotey/status/2115282464935473225/photo/2)

[/sab8a/status/2115185432870662545](/sab8a/status/2115185432870662545)[/sab8a](/sab8a)[Sabba Keynejad](/sab8a)
[@sab8a](/sab8a)
[15h](/sab8a/status/2115185432870662545)

My thoughts on the agentic video editing wave:

1. There won't be one winner in agentic video editing. Speed, use case and workflow will always matter. Just as Cursor moves upmarket while Lovable caters to non-technical users, specialised video tools will continue to serve

[/alexgoughcooper/status/2115076988327076296](/alexgoughcooper/status/2115076988327076296)Quote

Alex Cooper

@alexgoughcooper
[22h](/alexgoughcooper/status/2115076988327076296)

A few thoughts on agentic video editing I’ve had over the last few days:

1. 99% of ads should be edited agentically now. If your editors are still editing in the timeline, they’re falling behind. I got a message from my senior VE saying that he’s putting out 5x edits/day now at
