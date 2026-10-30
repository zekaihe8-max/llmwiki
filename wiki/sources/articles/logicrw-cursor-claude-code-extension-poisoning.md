---
type: Source
title: 思维怪怪转述 Cursor 商店 Claude Code 扩展投毒事件
title_en: Logicrw reports Claude Code extension poisoning in the Cursor marketplace
description: 思维怪怪转述 Cursor 商店 Claude Code 2.1.313 扩展投毒、加载即执行与持久化风险，并限定受影响渠道及人数说法。
description_en: Logicrw reports poisoning of Claude Code extension 2.1.313 in the Cursor marketplace, execution on load, and persistence risks, with limits on the reported channel and affected-user count.
resource: https://x.com/0xLogicrw/status/2116093465591452001
tags: [security, cursor, claude-code, extensions, supply-chain]
sources:
  - id: cursor-extension-poisoning
    resource: https://x.com/0xLogicrw/status/2116093465591452001
    title: Logicrw on Cursor marketplace extension poisoning
    author: human:0xLogicrw
generated:
  by: codex/gpt-6
  at: 2026-10-30T20:55:06+08:00
---

# 思维怪怪转述 Cursor 商店 Claude Code 扩展投毒事件

*Logicrw reports Claude Code extension poisoning in the Cursor marketplace*

## 摘要 / Summary

思维怪怪称，10 月 29 日 Cursor 扩展商店中的 Claude Code 2.1.313 被替换为恶意包，上架约 11 小时；帖子转述 Cursor 称最多 5,000 名用户受到影响。这是受影响人数上限的转述，不是已确认远程入侵人数。[^cursor-extension-poisoning]

Logicrw reports that Claude Code 2.1.313 in the Cursor extension marketplace was replaced with a malicious package on October 29 and remained available for about 11 hours. The post relays Cursor’s upper bound of 5,000 affected users; this is not a count of confirmed remote compromises.[^cursor-extension-poisoning]

据帖文，攻击者在一个文件的正常代码前插入 66 行恶意代码，Cursor 加载扩展即可触发，无须主动使用 Claude Code。载荷收集电脑名称、Git 邮箱及公网 IP，添加 SSH 密钥、尝试开启远程登录并连接攻击服务器，还安装自启脚本约每 60 秒重连。[^cursor-extension-poisoning]

According to the post, attackers inserted 66 malicious lines before normal code in one file, triggering when Cursor loaded the extension without active Claude Code use. The payload collected the computer name, Git email, and public IP, added an SSH key, attempted to enable remote login and connect to an attacker server, and installed a startup script that retried about every 60 seconds.[^cursor-extension-poisoning]

帖子称，开启 SSH 在多数 Mac 和 Windows 电脑上受管理员权限限制而通常失败，但已有 SSH 服务的电脑仍可能被访问；登录失败也不代表没有植入密钥、后台脚本或采集信息。单纯卸载扩展可能不足以清除残留，帖文转述 Cursor 提供清理工具并建议检查 SSH 授权文件中的 svc-telemetry。[^cursor-extension-poisoning]

The post says enabling SSH generally failed on most Mac and Windows computers because administrator privileges were required, while machines already running SSH could remain accessible. Failed login does not establish that keys, background scripts, or information collection were absent. Uninstalling the extension alone may leave artifacts; the post relays that Cursor provided a cleanup tool and suggested checking SSH authorization files for svc-telemetry.[^cursor-extension-poisoning]

按帖文叙述，Cursor 下架恶意版本、一度关闭商店、轮换密钥并重建服务，随后商店恢复、攻击服务器被关停；Cursor 称未发现其他扩展被篡改，也无证据表明 Anthropic 官方分发版本受影响。抓取正文嵌有 Cursor 公告片段，但未提供完整取证报告、清理工具链接或技术复现；本页仅归档原帖所述，不将其推广到所有分发渠道。[^cursor-extension-poisoning]

The post describes Cursor removing the malicious version, temporarily closing the marketplace, rotating keys, and rebuilding services, followed by marketplace restoration and shutdown of the attacker server. It relays Cursor’s statements that no other tampered extensions were found and no evidence implicated Anthropic’s official distribution. The fetched body embeds a Cursor announcement excerpt but supplies no full forensic report, cleanup-tool link, or technical reproduction; this page records the post’s account without extending it to all distribution channels.[^cursor-extension-poisoning]

## 相关 / Related

- [原帖 / Original post](https://x.com/0xLogicrw/status/2116093465591452001)
- [精简核心与社区扩展 / Minimal core and community extensions](../../topics/minimal-core-community-extensions.md)

[^cursor-extension-poisoning]: Logicrw on Cursor marketplace extension poisoning
