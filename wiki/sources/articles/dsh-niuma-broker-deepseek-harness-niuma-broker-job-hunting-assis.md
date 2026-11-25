---
type: Source
title: "dsh-niuma-broker：DeepSeek Harness 牛马经纪人求职助手"
title_en: "dsh-niuma-broker: DeepSeek Harness Niuma Broker Job Hunting Assistant"
description: "一款基于 DeepSeek Harness 的求职与职涯管理插件，支持官网岗位巡检、AI 匹配、简历版本图谱与工作成果挖掘。"
description_en: "A DeepSeek Harness-based job hunting and career management plugin supporting official website job monitoring, AI matching, resume version graphing, and work achievement mining."
resource: https://github.com/Nimbus318/dsh-niuma-broker
tags: [deepseek-harness, job-hunting, career-management, agent-plugin, resume]
sources:
  - id: 70a54ea313dfce0a
    resource: https://github.com/Nimbus318/dsh-niuma-broker
    title: "dsh-niuma-broker: DeepSeek Harness Niuma Broker Job Hunting Assistant"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-24T20:06:48+08:00
---

# dsh-niuma-broker：DeepSeek Harness 牛马经纪人求职助手

*dsh-niuma-broker: DeepSeek Harness Niuma Broker Job Hunting Assistant*

「dsh-niuma-broker」是一款运行在 DeepSeek Harness 上的求职职涯插件，帖文称其核心不在于简历本身，而在于目标设定、市场水温感知与基于市场需求反向调整工作投入；插件可订阅目标公司官网招聘页并定时巡检，通过 AI 将真实在招 JD 与个人履历进行精准匹配，并生成带理由的「留意」提示与面试反问话术。[^70a54ea313dfce0a]

「dsh-niuma-broker」is a job hunting and career plugin running on DeepSeek Harness; the post claims its core is not the resume itself but goal setting, market temperature sensing, and adjusting work input based on market demand; the plugin can subscribe to target company official recruitment pages for periodic monitoring, uses AI to match real open JDs with personal resumes, and generates reason-based "watch" warnings and interview counter-question talking points.[^70a54ea313dfce0a]

## 摘要 / Summary

- 插件需要 DeepSeek Harness `>=0.2.2-rc.5` 且 `<0.3.0`，以及 Node.js `>=22`，支持从 GitHub Releases 离线包或 npm 安装。[^70a54ea313dfce0a]
- The plugin requires DeepSeek Harness `>=0.2.2-rc.5` and `<0.3.0`, plus Node.js `>=22`, and supports installation from GitHub Releases offline packages or npm.[^70a54ea313dfce0a]
- 功能包括全网官网定时巡检、带理由的精准匹配、全流程求职推进与系统日历联动，以及岗位深度解读和风险排雷。[^70a54ea313dfce0a]
- Features include scheduled official website monitoring, reason-based precise matching, full-process job hunting tracking with system calendar linkage, JD in-depth interpretation, and risk screening.[^70a54ea313dfce0a]
- 插件提供五维能力雷达、AI 深度研判行动清单、二维技能价值象限以及公司×赛道热力图，用于把真实在招 JD 转化为市场水温图。[^70a54ea313dfce0a]
- The plugin provides five-dimensional capability radar, AI deep-dive action lists, two-dimensional skill value quadrants, and company × track heat maps to convert real open JDs into market temperature maps.[^70a54ea313dfce0a]
- 工作成果挖掘仅读取用户明确授权的工作区对话，新成果先进入「待核对」队列，由用户核验后才标记「对外可用」，且不模拟登录、不代投递。[^70a54ea313dfce0a]
- Work achievement mining only reads workspace dialogues explicitly authorized by the user; new achievements enter a "pending verification" queue and are marked "available externally" only after user verification, and the plugin does not simulate login or apply on behalf of users.[^70a54ea313dfce0a]
- 数据默认保存在本机 `~/.dsh/profiles/<profile>/career-broker/`，AI 能力需在 DSH 设置中配置模型，当前最佳体验平台为 macOS，Linux/Windows 支持核心简历、岗位与洞察功能。[^70a54ea313dfce0a]
- Data is stored locally at `~/.dsh/profiles/<profile>/career-broker/` by default; AI capabilities require configuring a model in DSH settings, with macOS currently offering the best experience while Linux/Windows support core resume, job, and insight features.[^70a54ea313dfce0a]

## 相关 / Related

- 原文：[链接](https://github.com/Nimbus318/dsh-niuma-broker)。 / Original: [link](https://github.com/Nimbus318/dsh-niuma-broker).
- Topic: [宽松网页管控下的 Agent Harness 插件 / Agent harness plugins under loose web controls](../../topics/loose-web-agent-harness-plugins.md)
- Topic: [Agent Skill 编写 / Agent skill authoring](../../topics/agent-skill-authoring.md)
- Topic: [智能体自动模式 / Agent auto mode](../../topics/agent-auto-mode.md)

[^70a54ea313dfce0a]: dsh-niuma-broker: DeepSeek Harness Niuma Broker Job Hunting Assistant
