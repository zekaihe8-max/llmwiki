---
type: Source
title: "别急着删 Playwright：官方澄清其与浏览器安全的关系"
title_en: "Don't Rush to Delete Playwright: Official Clarification on Browser Security Relationship"
description: "Playwright 安装包不自带浏览器，仅固定版本浏览器默认关沙箱且不宜访问不可信网页，访问不可控页面应改用正式版 Chrome 并开启沙箱。"
description_en: "Playwright packages do not bundle browsers; fixed-version test browsers run with sandbox off and should not visit untrusted pages—use official Chrome with sandbox enabled for uncontrolled pages."
resource: https://x.com/shao__meng/status/2117811571674214571
tags: [playwright, browser-security, chrome-for-testing, sandbox, agents]
sources:
  - id: playwright-browser-security-reminder
    resource: https://x.com/shao__meng/status/2117811571674214571
    title: "Don't Rush to Delete Playwright: Official Clarification on Browser Security Relationship"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-04T20:05:27+08:00
---

# 别急着删 Playwright：官方澄清其与浏览器安全的关系

*Don't Rush to Delete Playwright: Official Clarification on Browser Security Relationship*

帖文称，有人建议删除 Playwright 因为其自带有漏洞浏览器，这是误解；Playwright 安装包本身不带浏览器，Playwright MCP 或命令行工具调用电脑上的正式版 Chrome/Edge，沙箱默认开启并随浏览器更新；而 npx playwright install 下载的 Chrome for Testing 版本固定、默认关闭沙箱，官方建议仅用于可信应用的端到端测试，不要访问来路不明网站；直接调用 chromium.launch() 时若代码会访问不可控页面，应改用 chromium.launch({ channel: 'chrome', chromiumSandbox: true })，并保持 Chrome/Edge 更新以应对沙箱逃逸漏洞。[^playwright-browser-security-reminder]

The post says claims that Playwright bundles vulnerable browsers are a misconception: Playwright packages contain no browser, MCP/CLI uses the machine's official Chrome or Edge with sandbox on and normal updates, while npx playwright install downloads Chrome for Testing with a fixed version and sandbox off, intended only for trusted end-to-end tests; when chromium.launch() accesses uncontrolled pages such as crawlers or agent scripts, use channel: 'chrome' with chromiumSandbox: true, and keep Chrome/Edge updated against sandbox escapes.[^playwright-browser-security-reminder]

## 摘要 / Summary

- Playwright 的任何安装包里都不带浏览器，删除 Playwright 并非基于“自带漏洞浏览器”的理由。 / No Playwright package bundles a browser, so deleting it over bundled vulnerable browsers is based on a misconception.[^playwright-browser-security-reminder]
- 用 Playwright MCP 或命令行工具的 Agent 调用的是正式版 Chrome 或 Edge，沙箱默认开启且会正常收到安全更新。 / Agents using Playwright MCP or CLI call the local official Chrome or Edge, with sandbox enabled by default and normal security updates.[^playwright-browser-security-reminder]
- npx playwright install 下载的 Chrome for Testing 版本固定、默认关闭沙箱，官方建议只用于自己可信的应用做端到端测试，不要访问来路不明的网站。 / Chrome for Testing downloaded via npx playwright install is version-pinned and runs with sandbox off by default; official guidance limits it to trusted end-to-end tests and warns against visiting untrusted sites.[^playwright-browser-security-reminder]
- chromium.launch() 默认使用固定版本浏览器且沙箱关闭；访问不可控页面（如爬虫或 Agent 脚本）应改用 chromium.launch({ channel: 'chrome', chromiumSandbox: true })。 / chromium.launch() defaults to a fixed browser version with sandbox off; for uncontrolled pages such as crawlers or agent scripts, use chromium.launch({ channel: 'chrome', chromiumSandbox: true }).[^playwright-browser-security-reminder]
- 存在可突破沙箱的漏洞，因此 Chrome 和 Edge 必须保持更新。 / Sandbox-escape vulnerabilities exist, so Chrome and Edge must be kept updated.[^playwright-browser-security-reminder]

## 相关 / Related

- 原文：[链接](https://x.com/shao__meng/status/2117811571674214571)。 / Original: [link](https://x.com/shao__meng/status/2117811571674214571).
- Topic: [Computer Use / Computer Use](../../topics/computer-use.md)
- Topic: [宽松网页管控下的 Agent Harness 插件 / Agent harness plugins under loose web controls](../../topics/loose-web-agent-harness-plugins.md)
- Topic: [账号与资产安全卫生 / Account and asset security hygiene](../../topics/account-and-asset-security-hygiene.md)

[^playwright-browser-security-reminder]: Don't Rush to Delete Playwright: Official Clarification on Browser Security Relationship
