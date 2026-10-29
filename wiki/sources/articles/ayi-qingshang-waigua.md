---
type: Source
title: 情商外挂开源仓库
title_en: qingshang-waigua open-source repository
description: AYi 开源「情商外挂」：发消息前用非暴力沟通框架标出易惹怒对方的措辞并重写；七种对象、三档语气、两文件零依赖，任意 OpenAI 兼容接口；本机 config、可选 UUMit 分享。
description_en: AYi's open “EQ plug-in” rewrites drafts before you send using Nonviolent Communication—flags inflammatory wording; seven audiences, three tone tiers, two files and no deps, any OpenAI-compatible API; local config and optional UUMit sharing.
resource: https://github.com/ayi-ai/qingshang-waigua
tags: [ayi, qingshang-waigua, nvc, local-first, openai-compatible, uumit, communication]
sources:
  - id: ayi-qingshang-waigua
    resource: https://github.com/ayi-ai/qingshang-waigua
    title: qingshang-waigua open-source repository
    author: human:AYi
generated:
  by: cursor-agent/composer-2.5
  at: 2026-10-29T21:10:00+08:00
---

# 情商外挂开源仓库

*qingshang-waigua open-source repository*

**情商外挂**在消息发出去之前先改一遍：把带火气的话贴进去，选好对方是谁与想要的语气，先标出原话里最容易惹毛对方的几个字，再给一条能直接发的说法。方法来自马歇尔·卢森堡《非暴力沟通》的观察、感受、需要、请求四要素。[^ayi-qingshang-waigua] 仓库 <https://github.com/ayi-ai/qingshang-waigua>；MIT 许可；作者 AYi（[@AYi_AInotes](https://x.com/AYi_AInotes)）。

**EQ plug-in** rewrites before you send: paste heated wording, pick who you're talking to and the tone you want, flag the words most likely to trigger the other person, then offer send-ready phrasing. The method follows Marshall Rosenberg's *Nonviolent Communication*—observation, feeling, need, and request.[^ayi-qingshang-waigua] Repository: <https://github.com/ayi-ai/qingshang-waigua>; MIT license; author AYi ([@AYi_AInotes](https://x.com/AYi_AInotes)).

## 摘要 / Summary

- **对象与语气**：七种对象（客户、上级、同事、下属、伴侣、家人、朋友），各有说话规矩；三档语气（温和、坚定、直接），选坚定或直接时立场不会被改软。[^ayi-qingshang-waigua]
- **Audiences and tone**: seven audiences (customer, boss, colleague, subordinate, partner, family, friend), each with its own rules; three tone tiers (gentle, firm, direct)—choosing firm or direct does not soften your stance.[^ayi-qingshang-waigua]
- **两种用法**：改自己想发出去的话，或帮你回别人发来的话。[^ayi-qingshang-waigua]
- **Two modes**: rewrite what you plan to send, or draft a reply to incoming text.[^ayi-qingshang-waigua]
- **实现与依赖**：仅 `app.py`（提示词、七种对象规矩、模型调用、设置与次数上限）与 `index.html`；不用装任何依赖，兼容任意 OpenAI 格式模型接口。改说话规矩可直接编辑 `app.py` 里的 `WHO`、`TONE` 与 `SYSTEM_PROMPT`。[^ayi-qingshang-waigua]
- **Implementation**: only `app.py` (prompts, per-audience rules, model calls, settings, rate limits) and `index.html`; no dependencies, any OpenAI-compatible API. Edit `WHO`, `TONE`, and `SYSTEM_PROMPT` in `app.py` to change wording rules.[^ayi-qingshang-waigua]
- **运行**：Python 3，`python3 app.py` 默认 `http://127.0.0.1:8787`；设置口令只在启动终端显示，用于页面右上角设置。内置 OpenAI、DeepSeek、阿里云百炼、Kimi、智谱、硅基流动、OpenRouter、AIsa 等服务商预设，也可自定义地址；API Key 仅存本机 `config.json`（仅本人可读），页面上打码显示。可用 `MOCK=1` 不接模型预览界面。[^ayi-qingshang-waigua]
- **Run**: Python 3, `python3 app.py` serves `http://127.0.0.1:8787` by default; a setup passphrase prints only in the launching terminal for the page's settings gear. Presets for OpenAI, DeepSeek, Alibaba Bailian, Kimi, Zhipu, SiliconFlow, OpenRouter, AIsa, plus custom base URLs; API keys live in local `config.json` (owner-only permissions) and appear masked in the UI. `MOCK=1` previews the UI without calling a model.[^ayi-qingshang-waigua]
- **共享与隐私**：`127.0.0.1` 仅本机；README 建议用 [UUMit](https://uumit.com) 客户端给运行中的工具生成可分享链接（可见性：仅自己 / 邀请的人 / 所有人），分享后主机需在线且每次调用消耗分享者的模型费用，可在设置里设每分钟与每天次数上限（默认 10 与 200，0 为不限）。工具不保存聊天记录；敏感名字、金额可先换成【】，改完再填回。[^ayi-qingshang-waigua]
- **Share and privacy**: `127.0.0.1` is local-only; the README suggests [UUMit](https://uumit.com) to expose a running instance (visibility: only you / invited / everyone)—the host must stay online and each use bills the sharer's model account; per-minute and daily caps are configurable (defaults 10 and 200, 0 unlimited). The tool stores no chat logs; replace sensitive names or amounts with 【】 before sending to the model, then restore after rewrite.[^ayi-qingshang-waigua]

## 相关 / Related

- Source: [蓝哥AI谈 Ayi 用 Opus 5.5 开源「情商外挂」](./0xlangeai-qingshang-waigua-nvc-skill.md)
- Topic: [Agent Skill 编写](../../topics/agent-skill-authoring.md)
- Topic: [工作流优先于智能体](../../topics/workflows-before-agents.md)
- Topic: [Agent Skills 开放标准](../../topics/agent-skills-open-standard.md)

[^ayi-qingshang-waigua]: qingshang-waigua open-source repository
