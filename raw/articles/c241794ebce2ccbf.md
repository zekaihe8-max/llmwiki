[/Gorden_Sun](/Gorden_Sun)

[Gorden Sun](/Gorden_Sun)
[@Gorden_Sun](/Gorden_Sun)

Show translation
A社竟然出了识别掺假模型的工具

FlashProve：通过密码学方法证明AI回答究竟来自哪款模型。

普通用户使用AI时（尤其是中转站），完全无法确认屏幕上的回答究竟来自宣传的大模型，还是被服务商偷偷换成了低成本的劣质模型，甚至可能遭遇中间人篡改。

Anthropic开源了FlashProve研究原型，采用零知识证明技术结合Lean 4形式化数学验证。厂商在提供服务前先公开一串用于绑定的特征码，每次生成回答时让显卡附带生成一份计算凭据；用户拿到凭据后，在自己的普通电脑上运行验证程序即可核对。

最终达到的效果是，用户不需要拿到模型权重，只用普通家用电脑的CPU，几秒钟内就能确认这次回答确实来自指定的正版模型，造假几乎不可能成功；同时，AI厂商的核心参数完全隐藏，商业机密不会外泄。该系统能支持Llama 4级别的大模型，在单张英伟达H100显卡上跑完全部证明流程。

Github：[github.com/anthropics/Fla…](https://t.co/ayJcAZdUBg)

[/Gorden_Sun/status/2117527237457240113/photo/1](/Gorden_Sun/status/2117527237457240113/photo/1)

[8:00 AM · Nov 3, 2026](/Gorden_Sun/status/2117527237457240113)·[4,990 Views](/Gorden_Sun/status/2117527237457240113)

[32](/compose/post?in_reply_to=2117527237457240113)
2
32
31
