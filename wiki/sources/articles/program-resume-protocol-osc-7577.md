---
type: Source
title: "程序恢复协议 (OSC 7577)"
title_en: "Program Resume Protocol (OSC 7577)"
description: "通过 OSC 7577 转义序列让程序向终端报告自身恢复命令的统一终端协议。"
description_en: "A uniform terminal protocol that lets programs report their resume commands to a terminal via the OSC 7577 escape sequence."
resource: https://www.superlogical.com/rex/docs/build/program-resume
tags: [terminal, osc-7577, program-resume, escape-sequence]
sources:
  - id: program-resume-osc-7577
    resource: https://www.superlogical.com/rex/docs/build/program-resume
    title: "Program Resume Protocol (OSC 7577)"
generated:
  by: openrouter/nvidia/nemotron-3.5-super-vl:free
  at: 2026-11-27T08:36:51+08:00
---

# 程序恢复协议 (OSC 7577)

*Program Resume Protocol (OSC 7577)*

「帖文称」程序恢复协议（OSC 7577）是一种终端转义序列，允许程序向终端报告如何在终端重启后恢复自身；恢复仅是提示而非保证，终端可自行决定接受或拒绝报告。[^program-resume-osc-7577]

The Program Resume Protocol (OSC 7577) is a terminal escape sequence that lets a program tell the terminal how to resume it after a restart; resumption is a hint, not a guarantee, and terminals may ignore or reject reports.[^program-resume-osc-7577]

## 摘要 / Summary

- 协议使用 OSC 7577 序列，body 由 key=value 对组成，以 :mac= 结尾，mac 为对 body 片段加上令牌计算的 SHA-256 哈希。[^program-resume-osc-7577]
- The protocol uses an OSC 7577 sequence whose body is key=value pairs ending with :mac=, where mac is a SHA-256 hash of the body prefix plus the token.[^program-resume-osc-7577]
- 每条报告必须包含 pid、time 和 mac，且 mac 必须是最后一个键。[^program-resume-osc-7577]
- Every report must include pid, time, and mac, and mac must be the last key.[^program-resume-osc-7577]
- 终端在建议 60 秒的时间窗口内验证 time，并忽略超出窗口或早于同 pid 上一条已接受报告的 time。[^program-resume-osc-7577]
- The terminal verifies time within a recommended 60-second window and ignores reports outside the window or earlier than the last accepted report for the same pid.[^program-resume-osc-7577]
- argv 采用标准 base64 编码的 UTF-8 参数，第一个元素为要执行的程序，不允许相对路径。[^program-resume-osc-7577]
- argv uses standard base64-encoded UTF-8 arguments, the first element is the program to execute, and relative paths are not allowed.[^program-resume-osc-7577]
- 协议不传输环境变量，恢复的程序获得终端启动时的环境，可能与报告时不同。[^program-resume-osc-7577]
- The protocol does not transmit environment variables; a resumed program gets the environment the terminal starts it in, which may differ from report time.[^program-resume-osc-7577]
- 存在重放攻击等安全风险，终端可自行选择信任模型，协议本身有重大安全影响。[^program-resume-osc-7577]
- There are security risks such as replay attacks; terminals may choose their own trust model, and the protocol has significant security implications.[^program-resume-osc-7577]

## 相关 / Related

- 原文：[链接](https://www.superlogical.com/rex/docs/build/program-resume)。 / Original: [link](https://www.superlogical.com/rex/docs/build/program-resume).
- Topic: [Computer Use / Computer Use](../../topics/computer-use.md)
- Topic: [代码重于规格 / Code over the spec](../../topics/code-over-spec.md)
- Topic: [LLM 形式化验证 / LLM formal verification](../../topics/llm-formal-verification.md)

[^program-resume-osc-7577]: Program Resume Protocol (OSC 7577)
