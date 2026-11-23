[/lxfater](/lxfater)

[铁锤人](/lxfater)
[@lxfater](/lxfater)

Show translation
让 AI 改旧代码，是不是总在打补丁，越改越乱？

最近刷屏的那句防屎山提示词，我把 Anthropic 官方原文翻出来了
重点和中文翻译都标在图里了，见图 1

这是官方给 Claude Fable 5.2 写的指南，专门有一节讲代码归谁管

官方在小型编程任务里测过，不提归属或让它觉得是别人代码时
它就像外包干活，能不动就不动，主动合并重复代码的比例不到 10%

但加上这句提示词：
You are the owner and long-term maintainer of this codebase, and its design is up to you.
翻译过来就是，你是这个代码库的所有者和长期维护者，它的设计由你决定

加上后，Claude 主动合并重复代码的比例飙到约 75%！
还会顺手补测试、改文档

但先别急着抄进全局提示词，官方原文后面还有两个转发时漏掉的坑：

1. 会管太宽，改动总结还常漏报
输出 Token 多烧 70% 到 80%，有时会顺手改掉正常功能
更坑的是总结经常漏掉小改动，不自己看实际变更根本发现不了

2. 写限制规则也压不住
官方测过，前面写了别顺手重构和乱清理，一半以上运行里它照样会合并重构

所以平时修小 bug 别挂着这句，真要专门整理旧代码时
单开一个新对话再贴给它

官方原文放下面，直接对照看👇
[platform.claude.com/docs/en/build-…](https://t.co/ES9rX8pJCb)

[/lxfater/status/2124504433195171902/photo/1](/lxfater/status/2124504433195171902/photo/1)

[2:05 PM · Nov 22, 2026](/lxfater/status/2124504433195171902)·[3,003 Views](/lxfater/status/2124504433195171902)

[8](/compose/post?in_reply_to=2124504433195171902)
5
16
25
