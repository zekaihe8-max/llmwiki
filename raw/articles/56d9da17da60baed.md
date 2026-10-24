[/shao__meng](/shao__meng)

[meng shao](/shao__meng)
[@shao__meng](/shao__meng)

Show translation
Netflix 用本体把可观测性做成知识图谱，把四小时排障里「拼关系」的时间吃掉

排障慢往往不是缺 MELT 数据，是各工具对「应用 / 服务 / 集群」说法不一致、关系只存在人脑子里；Netflix 建 Observability Ontology + RDF 知识图谱（QuipuDB），用类型约束把 LLM/模糊匹配等非确定性输出收成可 SPARQL 查询的确定性事实，再喂 AutoRCA，让工程师一上来就拿着原先要拼半下午的上下文。
[netflixtechblog.com/ontology-drive…](https://netflixtechblog.com/ontology-driven-observability-building-an-end-to-end-knowledge-graph-at-netflix-scale-421392cf5adf)

问题场景
· 规模：Jake Paul vs Tyson 约 6500 万并发流；日常 20 亿+ 请求/天量级、约 3800 万实时日志事件/秒（文中数字）。
· 典型回归：首页列表渲染慢约 1.5s → 告警；嫌疑可在客户端版本、A/B、基础设施限流、下游 6 跳 GraphQL 坏数据等。
· 调查时间线约 4 小时：几乎不在「算难题」，而在重建各系统其实知道、却从未写成可发现关系的映射。

为何不是「多看板」或「直接上 Agent」
Atlas / Radar / [incident.io](http://incident.io) / PagerDuty / Spinnaker / Slack 各自自洽、对外孤立；同名实体后缀、大小写、改名不一致，跨域 join 靠人。给 Agent 错上下文会幻觉，on-call 更危险。本质是数据建模问题：缺一份机器可读的实体约定。

本体与图谱
· 本体 = 类型、属性、允许关系；单元是三元组（主语–谓词–宾语）。例：api-gateway ops:ownedBy "Team Bedrock"，一次查询即可答「us-east-1 里 Bedrock 应用相关的事故」。
· 技术栈：RDF / OWL / SHACL / SPARQL；存 QuipuDB（自研 RDF 四元组库，基于 Rust redb）；每次 harvest 出 Turtle 归档，便于 diff。
· 约 12 个命名空间 覆盖运维域；关键设计：
  1. 拒绝泛化 Service：统一为 ops:Application，对照约 4.9 万 软件目录校验；未校验字符串不成应用；双向依赖边设上限，防热门服务撑爆图。
  2. 建模事故讨论：把 Slack 里假设、否决路径、缓解手段结构化为三元组，避免频道冷掉后知识蒸发。

非确定性 → 确定性：熵阶梯
LLM 摘要、模糊匹配、概率因果链都不稳定；靠本体收紧输出空间（如 category/sentiment 枚举）→ 确定性三元组。五层管线逐步降低「仍困在非结构化里」的信息比例。

Enricher
大量 enricher：读噪声 →（可随机）分析 → 只写带类型的三元组。不变量：必有 rdf:type、统一 URI 方案、目录门控 Application。流水线顺序执行（换并行减竞态）；外部 MELT 调用 best-effort，慢 API 降级图质量而不堵 harvest。正把 Metrics / Alerts 等也本体化，争取一站式查询。

Correlation Engine
读 13 类信号（日志错误、指标异常、慢/失败 trace、告警、事故、发布、配置、实验、扩缩容、commit、端到端瓶颈、错误模式等），在约 10 分钟窗内按时间邻近与严重度找路径；已知因果对有高先验，相关链置信度 <0.6 丢弃。角色是带证据的假说，不是下定论；链与支撑图记录一并保存（如 0.87）。

Knowledge Flywheel
Observe → Enrich → Infer → Adapt：一次事故里发现的因果链变成下次检测规则；图谱从 schema 长成「记忆」（例：api-gateway 发布相关 SEV-2 占比、超时类问题占比等叙述性洞察）。

落地：AutoRCA
多个专科 Agent 围同一问题协作；本体当共同词汇：写 traces 发现的人与读 logs 的人互不认识，都读写同一 ops:Application 三元组。告警仍响、人仍拍板、代码仍人写；省下的是找 owner、拼发布、跨系统相关、回忆上季度类似事故。假说仍会错，故每条带证据。

如果要自建：八条原则
先建模身份与权威目录；本体当代码（PR/评审）；概念与实例分离；用开放标准；用类型系统约束随机工具；enrichment 有序且 best-effort；把人的推理与遥测一起建模；人审批准 Agent/本体变更。

下一步
AutoRCA → 高置信自动修复（回滚/切流/改代码）→ 预测性自愈。计划与 Netflix UDA 的领域建模语言 Upper 对接，先以事故建模做 PoC。

[/shao__meng/status/2113925598443675835/photo/1](/shao__meng/status/2113925598443675835/photo/1)

[9:28 AM · Oct 24, 2026](/shao__meng/status/2113925598443675835)·[718 Views](/shao__meng/status/2113925598443675835)

[6](/compose/post?in_reply_to=2113925598443675835)

6
4
