[/shao__meng](/shao__meng)

[meng shao](/shao__meng)
[@shao__meng](/shao__meng)

Show translation
Google Research 最新发布「SLEEP」：给大模型加一段「离线巩固记忆」的周期，减轻灾难性遗忘

SLEEP 想解决的是：模型上线后知识基本冻结，硬调参容易灾难性遗忘，只靠上下文学习又出了窗口就忘。做法是让 LLM 在固定架构与既定训练规则下，在「清醒交互」和「睡眠巩固」之间周期切换：先把短时上下文里的脆弱信息，写进可扩展的长时参数；再在「做梦」阶段用合成数据自我改进。
[research.google/blog/the-sleep…](https://t.co/VJ6VCRbpRK)

问题从哪来
预训练 + 上下文学习（ICL）很强，但部署后仍近似静态，有知识截止日期。持续改参数常会把旧能力冲掉（灾难性遗忘）；只靠 ICL，则知识停在当前会话，会话一结束短期信息就没了。

清醒 vs 睡眠
· 清醒（Active / wake）：正常接收与处理输入，临时信息放在快、短时的记忆组件里。
· 睡眠（Sleep）：暂停接新输入，把算力转向记忆巩固与自我改进。离线阶段会解锁预先留好的 MoE 记忆块，并用模型自己生成的练习样例更新权重。术语借自神经科学，但实现仍是固定架构上的自动化后训练，不改核心代码与设计。

睡眠里的两步
1. 记忆巩固（类比 NREM / 慢波睡眠）
· 参数扩展与连续记忆层次：睡眠时动态扩容。结合 MoE 与文中提到的 Hope 架构，把新解锁的低秩专家写入更稳、更低频的记忆块，尽量少动旧参数。
· 知识播种 / 向上蒸馏：把高频层（如上下文记忆）里脆弱的短期痕迹，迁到新扩出来的长时参数。技术上用 广义知识蒸馏（GKD） 加上基于强化学习的模仿：一方面做 on-policy distillation（学生对自采样序列上教师分布的逐 token 反馈学习）；另一方面做 Learning to Imitate（LTI），按语义与编辑距离（Levenshtein）等相似度给前缀续写打分。
· 突触修剪：巩固完成后，重置高频临时参数，腾出容量给下一轮清醒会话。

2. 做梦式自我改进（类比 REM）
· 生成合成数据时，MoE 路由随机激活非常规专家，促使跨域混搭、挖潜在模式。
· 用基于梯度的数据筛选，留下最可能提升整体能力的「梦境」样本。
· 再对优选样本做监督微调，并检查下游任务是否真的变好。

理论侧
巩固被看成结构化的低秩压缩：不是把短期痕迹原样抄进参数，而是选出既能对齐模型自身 on-policy 行为、又保住语义与任务相关奖励的方向；参数扩展提供「写入空间」，减轻覆盖旧知识。做梦则被描述成改善学习几何：随机专家拓宽梯度方向，梯度筛选再强调有用更新，使优化更均衡、更稳。

文中给出的结果要点
· 持续翻译：对未见语言（如满语 Manchu、Kalamang）多阶段评测中，SLEEP 近乎零掉点；ICL、Cartridges、监督微调（SFT）等基线遗忘更重。
· 长上下文：在 BABILong 上称可近乎完美地扩到约 1000 万 token，并用睡眠期巩固把长文压进参数记忆，对比含 GPT-4、Titans 等。
· 事实注入：SQuAD / 持续预训练设定下，单任务约 48.9%、CPT 约 46.2%，优于基座、SFT、SEAL 等表述。
· 数学推理：睡眠增强基座在 AIME 24/25、HMMT 25 上分别约 79.2% / 69.0% / 46.1%，优于 SFT、GRPO、OPSD 等。

[/shao__meng/status/2115633448702615604/photo/1](/shao__meng/status/2115633448702615604/photo/1)

[/GoogleResearch/status/2115136620446019795](/GoogleResearch/status/2115136620446019795)[/GoogleResearch](/GoogleResearch)[Google Research](/GoogleResearch)[/Google](/Google)
[@GoogleResearch](/GoogleResearch)
[Oct 27](/GoogleResearch/status/2115136620446019795)

Today on the blog, learn about our new instance of a “sleep” phase in continual learning, which enables LLMs to continuously integrate new facts and enhance reasoning while mitigating catastrophic forgetting or static knowledge cutoffs.

More →[goo.gle/4iICkyD](https://t.co/5v9w5Pn4dw)

[/GoogleResearch/status/2115136620446019795/photo/1](/GoogleResearch/status/2115136620446019795/photo/1)
read image descriptionALT
