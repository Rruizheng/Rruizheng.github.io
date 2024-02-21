(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{423:function(s,v,_){"use strict";_.r(v);var t=_(14),i=Object(t.a)({},(function(){var s=this,v=s._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[v("h1",{attrs:{id:"csrf和xss"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#csrf和xss"}},[s._v("#")]),s._v(" CSRF和XSS")]),s._v(" "),v("h2",{attrs:{id:"csrf"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#csrf"}},[s._v("#")]),s._v(" CSRF")]),s._v(" "),v("p",[s._v("CSRF（Cross-Site Request Forgery，跨站请求伪造）是一种网络安全攻击技术，攻击者通过伪造用户的身份，以用户的名义发送恶意请求，从而执行非法操作。")]),s._v(" "),v("ul",[v("li",[s._v("跨站请求伪造")]),s._v(" "),v("li",[s._v("攻击原理：引诱点击---访问A网站---获取cookie主动上传\n"),v("ul",[v("li",[s._v("网站A登录过，用户信息存在Cookie中")]),s._v(" "),v("li",[s._v("利用存在漏洞的接口进行")])])]),s._v(" "),v("li",[s._v("防御\n"),v("ul",[v("li",[s._v("加token验证：服务器端在生成表单或链接时，为每个用户生成一个唯一的令牌（CSRF Token），并将其嵌入到表单或链接中。在处理请求时，服务器端会验证请求中的令牌是否与用户对应，如果不匹配则拒绝请求。")]),s._v(" "),v("li",[s._v("referer验证：验证来源站点，服务器端在处理请求时，可以检查请求的来源站点（Referer 头部），只接受来自合法站点的请求。")]),s._v(" "),v("li",[s._v("隐藏令牌token：使得攻击者无法获取到用户会话中的令牌，从而无法伪造合法的请求。")]),s._v(" "),v("li",[s._v("设置 Cookie 属性：通过限制 Cookie 的作用域（如设置 SameSite 属性为 Strict 或 Lax），可以减少 CSRF 攻击的风险。")])])])]),s._v(" "),v("h2",{attrs:{id:"xss"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#xss"}},[s._v("#")]),s._v(" XSS")]),s._v(" "),v("p",[s._v("Xss(cross-site scripting)攻击指的是攻击者往Web页面里插入恶意html标签或者javascript代码。比如：攻击者在论坛中放一个看似安全的链接，骗取用户点击后，窃取cookie中的用户私密信息；或者攻击者在论坛中加一个恶意表单，当用户提交表单的时候，却把信息传送到攻击者的服务器中，而不是用户原本以为的信任站点")]),s._v(" "),v("ul",[v("li",[s._v("跨域脚本攻击")]),s._v(" "),v("li",[s._v("原理：像页面注入脚本，通过html，js代码注入，js函数体里进行操作")]),s._v(" "),v("li",[s._v("防御\n"),v("ul",[v("li",[s._v("首先代码里对用户输入的地方和变量都需要仔细检查长度和对”<”,”>”,”;”,”’”等字符做过滤；")]),s._v(" "),v("li",[s._v("其次任何内容写到页面之前都必须加以encode，避免不小心把html tag 弄出来。这一个层面做好，至少可以堵住超过一半的XSS 攻击")])])])]),s._v(" "),v("h2",{attrs:{id:"xss与csrf有什么区别吗"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#xss与csrf有什么区别吗"}},[s._v("#")]),s._v(" XSS与CSRF有什么区别吗？")]),s._v(" "),v("ol",[v("li",[s._v("目标：\n"),v("ul",[v("li",[s._v("XSS 的目标是在受害者浏览器中执行恶意脚本，从而获取用户的敏感信息、劫持用户会话或进行其他恶意操作。")]),s._v(" "),v("li",[s._v("CSRF 的目标是以用户的身份发送恶意请求，使用户在不知情的情况下执行非法操作，如修改用户账户、发送恶意邮件等。")])])]),s._v(" "),v("li",[s._v("影响范围：\n"),v("ul",[v("li",[s._v("XSS 主要针对受害者的浏览器，攻击者能够获取用户的敏感信息、劫持用户会话等。")]),s._v(" "),v("li",[s._v("CSRF 主要针对目标网站和用户的身份，攻击者能够以用户的身份执行非法操作。")])])]),s._v(" "),v("li",[s._v("实际操作\n"),v("ul",[v("li",[s._v("XSS是获取信息，不需要提前知道其他用户页面的代码和数据包。")]),s._v(" "),v("li",[s._v("CSRF是代替用户完成指定的动作，需要知道其他用户页面的代码和数据包。要完成一次CSRF攻击，受害者必须依次完成两个步骤\n"),v("ul",[v("li",[s._v("登录受信任网站A，并在本地生成Cookie")]),s._v(" "),v("li",[s._v("在不登出A的情况下，访问危险网站B")])])])])])]),s._v(" "),v("p",[s._v("常见的防御措施包括输入验证和转义、输出过滤、使用安全的编程语言和框架、设置 Cookie 属性、使用令牌验证等。")])])}),[],!1,null,null,null);v.default=i.exports}}]);