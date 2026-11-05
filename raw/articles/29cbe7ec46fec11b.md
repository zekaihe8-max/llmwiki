[/0xLogicrw](/0xLogicrw)

[思维怪怪](/0xLogicrw)
[@0xLogicrw](/0xLogicrw)

Show translation
OpenAI 利用尚未发布的新模型，让 AI 自动寻找 Linux 内核漏洞、编写攻击程序，再生成修复补丁。一次实验就验证了 948 个不同的提权漏洞，API 总费用约 121 万美元，平均每个只需 1279 美元。

这些漏洞让原本只有普通用户权限的攻击者，可以获得系统最高管理员权限。实验使用的是开启常规安全防护的 Linux 系统，并未刻意降低攻击难度。

整套流程基本由 AI 自主完成。它先从 Linux 内核超过 4000 万行代码中筛选出约 280 万行重点检查，找到 2308 个疑似漏洞。随后在虚拟机中实际测试，成功复现 1724 个漏洞，并编写出 1169 个能够取得管理员权限的攻击程序，去重后对应 948 个漏洞。

AI 甚至开始自己发明攻击方法。研究人员抽查了 166 个攻击程序，发现至少 10 种此前未见过的漏洞利用技术。OpenAI 邀请外部内核安全专家核对，对方同样认为这些方法很新颖。

模型能力正在快速提升。今年 7 月，GPT-5.6 Sol 在同一研究项目中挖出了 166 个可利用的提权漏洞，花费约 51 万美元。10 月的新模型则找到 948 个，数量约为此前的 5.7 倍，平均单个漏洞的 API 成本也从约 3095 美元降至 1279 美元。

OpenAI 还用约 3.3 万美元的 API 费用，在 Google 的强化版 Linux 安全测试环境中，开发出 21 个可用的提权攻击程序。按该项目公开的悬赏标准估算，若全部获认可，理论奖金约为 150 万美元，是 API 成本的 45 倍。
[/OpenAI/status/2118119451401048497](/OpenAI/status/2118119451401048497)[/OpenAI](/OpenAI)[OpenAI](/OpenAI)
[@OpenAI](/OpenAI)
[12h](/OpenAI/status/2118119451401048497)

Our security researchers built an autonomous cyber vulnerability discovery, exploitation, and patching pipeline.

In a single run with an upcoming cyber model, it validated and generated patches for 948 local privilege escalation vulnerabilities in the Linux kernel at a total API

[/OpenAI/status/2118119451401048497/photo/1](/OpenAI/status/2118119451401048497/photo/1)
