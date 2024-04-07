"use strict";(self.webpackChunk_scow_docs=self.webpackChunk_scow_docs||[]).push([[7910],{48880:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>a});var o=t(49214),s=t(5409);const l={sidebar_position:4,title:"\u5185\u7f6e\u8ba4\u8bc1\u7cfb\u7edf\u914d\u7f6e"},r="\u5185\u7f6e\u8ba4\u8bc1\u7cfb\u7edf\u914d\u7f6e",i={id:"deploy/config/auth/config",title:"\u5185\u7f6e\u8ba4\u8bc1\u7cfb\u7edf\u914d\u7f6e",description:"UI \u914d\u7f6e",source:"@site/docs/deploy/config/auth/config.md",sourceDirName:"deploy/config/auth",slug:"/deploy/config/auth/config",permalink:"/SCOW/pr-preview/pr-1202/docs/deploy/config/auth/config",draft:!1,unlisted:!1,editUrl:"https://github.com/PKUHPC/SCOW/edit/main/website/docs/deploy/config/auth/config.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"\u5185\u7f6e\u8ba4\u8bc1\u7cfb\u7edf\u914d\u7f6e"},sidebar:"deploy",previous:{title:"LDAP",permalink:"/SCOW/pr-preview/pr-1202/docs/deploy/config/auth/ldap"},next:{title:"\u95e8\u6237\u7cfb\u7edf",permalink:"/SCOW/pr-preview/pr-1202/docs/category/\u95e8\u6237\u7cfb\u7edf"}},c={},a=[{value:"UI \u914d\u7f6e",id:"ui-\u914d\u7f6e",level:2},{value:"\u5141\u8bb8\u56de\u8c03\u4e3b\u673a\u540d",id:"\u5141\u8bb8\u56de\u8c03\u4e3b\u673a\u540d",level:2},{value:"\u9a8c\u8bc1\u7801\u529f\u80fd",id:"\u9a8c\u8bc1\u7801\u529f\u80fd",level:2},{value:"\u6a21\u4eff\u7528\u6237",id:"\u6a21\u4eff\u7528\u6237",level:2},{value:"OTP\u529f\u80fd",id:"otp\u529f\u80fd",level:2},{value:"\u4e00\u3001\u5c06OTP\u5bc6\u94a5\u4fdd\u5b58\u5728LDAP\u4e2d(\u5373otp.type\u4e3aldap):",id:"\u4e00\u5c06otp\u5bc6\u94a5\u4fdd\u5b58\u5728ldap\u4e2d\u5373otptype\u4e3aldap",level:3},{value:"\u4e8c\u3001\u7531\u60a8\u81ea\u5df1\u7ba1\u7406OTP\u5bc6\u94a5(otp.type\u4e3aremote):",id:"\u4e8c\u7531\u60a8\u81ea\u5df1\u7ba1\u7406otp\u5bc6\u94a5otptype\u4e3aremote",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"\u5185\u7f6e\u8ba4\u8bc1\u7cfb\u7edf\u914d\u7f6e",children:"\u5185\u7f6e\u8ba4\u8bc1\u7cfb\u7edf\u914d\u7f6e"}),"\n",(0,o.jsx)(n.h2,{id:"ui-\u914d\u7f6e",children:"UI \u914d\u7f6e"}),"\n",(0,o.jsx)(n.p,{children:"\u8ba4\u8bc1\u7cfb\u7edf\u652f\u6301\u5bf9\u767b\u5f55\u754c\u9762\u90e8\u5206 UI \u8fdb\u884c\u4fee\u6539"}),"\n",(0,o.jsxs)(n.p,{children:["\u5728",(0,o.jsx)(n.code,{children:"auth.yaml"}),"\u914d\u7f6e\u4e2d\uff0c\u53ef\u4ee5\u914d\u7f6e\u5173\u4e8e\u767b\u5f55\u754c\u9762 UI \u7684\u90e8\u5206\u5185\u5bb9\u3002"]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["\u6ce8\u610f\uff1a\u767b\u5f55\u6846\u4e2d\u767b\u5f55\u6309\u94ae\u989c\u8272\u8ddf\u968f\u4e3b\u9898\u8272\u914d\u7f6e\uff0c\u914d\u7f6e\u6587\u4ef6\u4e3a ",(0,o.jsx)(n.code,{children:"ui.yaml"})]})}),"\n",(0,o.jsxs)(n.p,{children:["\u5176\u4e2d\u5173\u4e8e\u80cc\u666f\u56fe\u7247\u8def\u5f84\u548c\u81ea\u5b9a\u4e49 logo \u56fe\u7247\u8def\u5f84\u7684\u8bbe\u7f6e\u53ef\u4ee5\u53c2\u8003",(0,o.jsx)(n.a,{href:"https://pkuhpc.github.io/SCOW/docs/deploy/config/customization/public-files",children:"\u516c\u5171\u6587\u4ef6"}),"\u8fdb\u884c\u914d\u7f6e\u3002\u9700\u8981\u5f3a\u8c03\u7684\u662f\u8be5\u8def\u5f84\u662f\u76f8\u5bf9\u4e8e\u516c\u5171\u6587\u4ef6\u7684\u8def\u5f84\u3002"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:'# auth \u754c\u9762 ui \u914d\u7f6e\n# \u53ef\u6839\u636e\u4e0d\u540c\u57df\u540d\u8fdb\u884c\u4e0d\u540c\u7684\u5c55\u793a\uff0c\u5f53\u5bf9\u5e94\u57df\u540d\u6ca1\u6709\u76f8\u5e94\u914d\u7f6e\u65f6\u91c7\u7528 default \u914d\u7f6e\nui:\n  default:\n    # \u767b\u5f55\u754c\u9762\u80cc\u666f\u56fe\uff0c\u8bbe\u7f6e\u4e3a""(\u7a7a\u5b57\u7b26\u4e32)\u5219\u65e0\u80cc\u666f\u56fe\n    # \u53ef\u9009\u914d\u7f6e\uff0c\u9ed8\u8ba4\u52a0\u8f7d install.yml \u540c\u7ea7\u7684 /public/assets \u76ee\u5f55\u4e0b\u7684 background.png \u4f5c\u4e3a\u80cc\u666f\u56fe\n    backgroundImagePath: "./assets/background.png"\n\n    # \u767b\u5f55\u754c\u9762\u80cc\u666f\u8272\uff0c\u5f53\u80cc\u666f\u56fe\u65e0\u6cd5\u52a0\u8f7d\u65f6\uff0c\u80cc\u666f\u8272\u8d77\u6548\n    # \u53ef\u9009\u914d\u7f6e\uff0c\u9ed8\u8ba4\u4e3a #8c8c8c\n    backgroundFallbackColor: "#8c8c8c" \n      \n    # \u767b\u5f55\u754c\u9762 logo\uff0c\u53ef\u9009\u914d\u7f6e\n    logo:\n      # \u672a\u914d\u7f6e\u81ea\u5b9a\u4e49 logo\uff08customLogoPath\uff09 \u65f6\uff0c\u9ed8\u8ba4\u4f7f\u7528 SCOW Logo\n      # light: \u4eae\u8272\u6a21\u5f0f\u4e0b\u7684 logo, dark: \u9ed1\u6697\u6a21\u5f0f\u4e0b\u7684 logo\n      # \u53ef\u9009\u914d\u7f6e\uff0c\u9ed8\u8ba4\u4e3a\u9ed1\u6697\u6a21\u5f0f logo\n      scowLogoType: "dark"\n      # \u53ef\u9009\u914d\u7f6e\uff0c\u81ea\u5b9a\u4e49 logo \u7684\u56fe\u7247\u8def\u5f84\u3002\u4e0e\u80cc\u666f\u56fe\u4e00\u81f4\uff0c\u8def\u5f84\u65f6\u76f8\u5bf9\u4e8e\u516c\u5171\u6587\u4ef6\u7684\u8def\u5f84\n      customLogoPath: ""\n      # \u53ef\u9009\u914d\u7f6e\uff0c\u81ea\u5b9a\u4e49\u70b9\u51fb logo \u8df3\u8f6c\u5730\u5740\n      customLogoLink: "https://icode.pku.edu.cn/SCOW/"\n\n    # \u767b\u5f55\u754c\u9762 slogan \u914d\u7f6e\n    # \u53ef\u9009\u914d\u7f6e\uff0c\u9ed8\u8ba4\u53f3\u4fa7\u65e0 slogan\n    slogan:\n      # \u767b\u5f55\u754c\u9762 slogan \u6587\u5b57\u989c\u8272\n      # \u53ef\u9009\u914d\u7f6e\uff0c\u9ed8\u8ba4\u4e3a\u767d\u8272\u5b57\u4f53\n      color: "white"\n      # \u767b\u5f55\u754c\u9762 slogan title\n      # \u53ef\u9009\u914d\u7f6e\uff0c\u9ed8\u8ba4\u65e0 slogan \u6807\u9898\n      title: "\u5f00\u6e90\u7b97\u529b\u4e2d\u5fc3\u95e8\u6237\u548c\u7ba1\u7406\u5e73\u53f0"\n      # \u591a\u6761 slogan \u6587\u672c\n      # \u53ef\u9009\u914d\u7f6e\uff0c\u9ed8\u8ba4 slogan \u4e3a\u7a7a\u6570\u7ec4\n      texts:\n        - "\u56fe\u5f62\u5316\u754c\u9762\uff0c\u4f7f\u7528\u65b9\u4fbf"\n        - "\u529f\u80fd\u4e30\u5bcc\uff0c\u7ba1\u7406\u7b80\u5355"\n        - "\u4e00\u4f53\u5316\u90e8\u7f72\uff0c\u5f00\u7bb1\u5373\u7528"\n        - "\u6807\u51c6\u5316\u5e73\u53f0\uff0c\u652f\u6301\u7b97\u529b\u878d\u5408"\n        - "\u5f00\u6e90\u4e2d\u7acb\uff0c\u72ec\u7acb\u81ea\u4e3b"\n\n    # \u767b\u9646\u754c\u9762\u5e95\u90e8 Power By \u5b57\u4f53\u989c\u8272\u914d\u7f6e\n    # \u53ef\u9009\u914d\u7f6e\uff0c\u9ed8\u8ba4\u4e3a\u767d\u8272\u5b57\u4f53\n    footerTextColor: "white"\n\n  # \u6839\u636e\u4e0d\u57df\u540d\u8fdb\u884c\u4e0d\u540c\u7684\u5c55\u793a\uff0c\u5bf9\u5177\u4f53hostname\u751f\u6548\u7684\u751f\u6548\uff0c\u53ef\u4ee5\u4e0d\u586b\n  # hostnameMap:\n\n  #   a.com:\n  #     # \u767b\u5f55\u754c\u9762\u80cc\u666f\u56fe\n  #     backgroundImagePath: "./assets/background1.png"\n\n  #     # \u767b\u5f55\u754c\u9762\u80cc\u666f\u8272\uff0c\u5f53\u80cc\u666f\u56fe\u65e0\u6cd5\u52a0\u8f7d\u65f6\uff0c\u80cc\u666f\u8272\u8d77\u6548\n  #     backgroundFallbackColor: "#000"\n\n  #     # \u767b\u5f55\u754c\u9762 logo \u56fe,\n  #     logo:\n  #       # \u5982\u679c\u6ca1\u6709\u914d\u7f6e\u81ea\u5b9a\u4e49 logo, \u5219\u4f7f\u7528 type \u9009\u62e9 SCOW Logo\n  #       # light: \u4eae\u8272\u6a21\u5f0f\u4e0b\u7684 logo, dark: \u9ed1\u6697\u6a21\u5f0f\u4e0b\u7684 logo\n  #       scowLogoType: "light"\n  #       # \u81ea\u5b9a\u4e49 logo, \u9ed8\u8ba4\u4e3a\u7a7a\n  #       customLogoPath: ""\n  #       # \u81ea\u5b9a\u4e49\u70b9\u51fb logo \u8df3\u8f6c\u5730\u5740\n  #       customLogoLink: "https://icode.pku.edu.cn/SCOW/"\n\n  #     # \u767b\u5f55\u754c\u9762 slogan \u914d\u7f6e\n  #     slogan:\n  #       # \u767b\u5f55\u754c\u9762 slogan \u6587\u5b57\u989c\u8272\n  #       color: "black"\n  #       # \u767b\u5f55\u754c\u9762 slogan title\n  #       title: "\u5f00\u6e90\u7b97\u529b\u4e2d\u5fc3\u95e8\u6237\u548c\u7ba1\u7406\u5e73\u53f0"\n  #       # \u591a\u6761 slogan \u6587\u672c\n  #       texts:\n  #         - "\u56fe\u5f62\u5316\u754c\u9762\uff0c\u4f7f\u7528\u65b9\u4fbf."\n  #         - "\u529f\u80fd\u4e30\u5bcc\uff0c\u7ba1\u7406\u7b80\u5355."\n  #         - "\u4e00\u4f53\u5316\u90e8\u7f72\uff0c\u5f00\u7bb1\u5373\u7528."\n  #         - "\u6807\u51c6\u5316\u5e73\u53f0\uff0c\u652f\u6301\u7b97\u529b\u878d\u5408."\n  #         - "\u5f00\u6e90\u4e2d\u7acb\uff0c\u72ec\u7acb\u81ea\u4e3b."\n\n  #     # \u767b\u9646\u754c\u9762\u5e95\u90e8 Power By \u5b57\u4f53\u989c\u8272\u914d\u7f6e\n  #     footerTextColor: "black"\n'})}),"\n",(0,o.jsx)(n.h2,{id:"\u5141\u8bb8\u56de\u8c03\u4e3b\u673a\u540d",children:"\u5141\u8bb8\u56de\u8c03\u4e3b\u673a\u540d"}),"\n",(0,o.jsxs)(n.p,{children:["\u5f53\u767b\u5f55\u5b8c\u6210\u540e\uff0c\u8ba4\u8bc1\u7cfb\u7edf\u5c06\u4f1a\u56de\u8c03\u5230\u767b\u5f55\u65f6\u4f20\u5165\u7684",(0,o.jsx)(n.code,{children:"callbackUrl"}),"\u53c2\u6570\u3002\u4e3a\u4e86\u4fdd\u8bc1\u5b89\u5168\u6027\uff0c\u8ba4\u8bc1\u7cfb\u7edf\u9ed8\u8ba4\u53ea\u5141\u8bb8\u56de\u8c03\u5230\u548c\u8ba4\u8bc1\u7cfb\u7edf\u76f8\u540c\u7684\u4e3b\u673a\u540d\u4e0b\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e",(0,o.jsx)(n.code,{children:"auth.yml"}),"\u4e0b\u7684",(0,o.jsx)(n.code,{children:"allowedCallbackHostnames"}),"\u914d\u7f6e\u9879\u6765\u914d\u7f6e\u5141\u8bb8\u56de\u8c03\u7684\u4e3b\u673a\u540d\u3002\u6ce8\u610f\uff0c\u4e3b\u673a\u540d(hostname)\u4e0d\u5305\u62ec\u7aef\u53e3\u53f7\u3002"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",metastring:'title="config/auth.yml"',children:"allowedCallbackHostnames\uff1a\n  - localhost\n  - another.com\n"})}),"\n",(0,o.jsx)(n.h2,{id:"\u9a8c\u8bc1\u7801\u529f\u80fd",children:"\u9a8c\u8bc1\u7801\u529f\u80fd"}),"\n",(0,o.jsxs)(n.p,{children:["\u5728",(0,o.jsx)(n.code,{children:"auth.yaml"}),"\u914d\u7f6e\u4e2d\uff0c\u53ef\u4ee5\u914d\u7f6e\u5173\u4e8e\u767b\u5f55\u9a8c\u8bc1\u7801\u7684\u529f\u80fd"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",metastring:'title="config/auth.yml"',children:"# \u9ed8\u8ba4\u4e0d\u542f\u7528\u767b\u5f55\u9a8c\u8bc1\u7801\u529f\u80fd\n# captcha:\n  # enabled\u4e3atrue\u5f00\u542f\u767b\u5f55\u9a8c\u8bc1\u7801\u529f\u80fd\n  # enabled: false\n"})}),"\n",(0,o.jsx)(n.p,{children:"\u542f\u7528\u767b\u5f55\u9a8c\u8bc1\u7801\u65f6UI\u754c\u9762\uff1a"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"\u9a8c\u8bc1\u7801\u767b\u5f55UI",src:t(93792).A+"",width:"973",height:"589"})}),"\n",(0,o.jsx)(n.h2,{id:"\u6a21\u4eff\u7528\u6237",children:"\u6a21\u4eff\u7528\u6237"}),"\n",(0,o.jsx)(n.p,{children:"\u5982\u679c\u767b\u5f55\u7528\u6237\u7684ID\u4e3a\u67d0\u4e2akey\uff0c\u90a3\u4e48\u5b9e\u9645\u5c06\u4f1a\u4ee5\u5176\u5bf9\u5e94\u7684value\u7684\u7528\u6237\u767b\u5f55\u3002\u4fee\u6539\u6b64\u914d\u7f6e\u65e0\u9700\u91cd\u542f\u8ba4\u8bc1\u7cfb\u7edf\u3002"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",metastring:'title="config/auth.yml"',children:"mockUsers:\n  # \u5f53\u767b\u5f55\u7528\u6237\u7684ID\u4e3afromUser1\uff0c\u5b9e\u9645\u4e0a\u4ee5toUser1\u767b\u5f55\n  fromUser1: toUser1\n  fromUser2: toUser2\n"})}),"\n",(0,o.jsx)(n.h2,{id:"otp\u529f\u80fd",children:"OTP\u529f\u80fd"}),"\n",(0,o.jsxs)(n.p,{children:["\u5728",(0,o.jsx)(n.code,{children:"auth.yaml"}),"\u914d\u7f6e\u4e2d\uff0c\u53ef\u4ee5\u914d\u7f6e\u5173\u4e8eotp\u9a8c\u8bc1\u7801\u7684\u529f\u80fd, ldap\u8ba4\u8bc1\u65b9\u5f0f\u652f\u6301\u652f\u6301\u7ed1\u5b9aotp\u548c\u9a8c\u8bc1\uff0c\u6709\u6548\u9a8c\u8bc1\u7801\u4e3a\u5f53\u524d\u9a8c\u8bc1\u7801\u548c\u4e0a\u4e00\u4e2a\u9a8c\u8bc1\u7801\u3002ssh\u8ba4\u8bc1\u65b9\u5f0f\u4ec5\u652f\u6301\u8fdc\u7a0b\u9a8c\u8bc1\u3002"]}),"\n",(0,o.jsx)(n.h3,{id:"\u4e00\u5c06otp\u5bc6\u94a5\u4fdd\u5b58\u5728ldap\u4e2d\u5373otptype\u4e3aldap",children:"\u4e00\u3001\u5c06OTP\u5bc6\u94a5\u4fdd\u5b58\u5728LDAP\u4e2d(\u5373otp.type\u4e3aldap):"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"\u624b\u673aapp\u60a8\u53ef\u4ee5\u4f7f\u7528authenticator\uff0cFreeOTP\u7b49\u3002"}),"\n",(0,o.jsxs)(n.li,{children:["\u60a8\u9700\u8981\u81ea\u5df1\u5728ldap\u4e2d\u5b9a\u4e49\u4e00\u4e2a\u5c5e\u6027\u540d\u7528\u6765\u5b58\u50a8string\u7c7b\u578b\u7684OTP\u5bc6\u94a5,\u5e76\u914d\u7f6e\u4e3a",(0,o.jsx)(n.code,{children:"auth.yaml"}),"\u4e2d\u7684",(0,o.jsx)(n.code,{children:"opt.secretAttributeName"}),"\uff0c\u8fd9\u4e2a\u5bc6\u94a5\u5c5e\u6027\u540d\u9ed8\u8ba4\u4e3a",(0,o.jsx)(n.code,{children:"otpSecret"}),"\u3002"]}),"\n",(0,o.jsx)(n.li,{children:"\u60a8\u9700\u8981\u914d\u7f6e\u90ae\u4ef6\u53d1\u9001\u4fe1\u606f\u3002\u5176\u4e2d\uff0c\u60a8\u9700\u8981\u63d0\u4f9b\u6709\u6548\u7684\u53d1\u4ef6\u4eba\u5730\u5740\u3001SMTP \u670d\u52a1\u5668\u5730\u5740\u3001SMTP \u670d\u52a1\u5668\u7aef\u53e3\u53f7\u4ee5\u53ca SMTP \u8ba4\u8bc1\u51ed\u636e\uff08\u5305\u62ec\u7528\u6237\u540d\u548c\u6388\u6743\u7801\uff09\u3002"}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"\u4e8c\u7531\u60a8\u81ea\u5df1\u7ba1\u7406otp\u5bc6\u94a5otptype\u4e3aremote",children:"\u4e8c\u3001\u7531\u60a8\u81ea\u5df1\u7ba1\u7406OTP\u5bc6\u94a5(otp.type\u4e3aremote):"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\u90a3\u4e48\u60a8\u9700\u8981\u63d0\u4f9b\u4e00\u4e2a\u9a8c\u8bc1otp\u7801\u7684\u63a5\u53e3, \u5e76\u914d\u7f6e\u4e3a",(0,o.jsx)(n.code,{children:"otp.remote.validateUrl"}),"\uff0c\u8fd4\u56de\u9a8c\u8bc1\u7684\u7ed3\u679c\u3002\u8fd4\u56de\u7ed3\u679c\u8981\u6c42json\u683c\u5f0f",(0,o.jsx)(n.code,{children:'{"result": true|false}'}),"\u3002"]}),"\n",(0,o.jsxs)(n.li,{children:["scow\u4f1a\u4f7f\u7528fetch\u5411\u4e0a\u8ff0\u63a5\u53e3\uff08",(0,o.jsx)(n.code,{children:"otp.remote.validateUrl"}),"\uff09\u53d1\u8d77\u8bf7\u6c42\u3002fetch\u8bf7\u6c42\u4e2d",(0,o.jsx)(n.code,{children:"otpCode"}),"\u4e3a\u7528\u6237\u8f93\u5165\u7684otp\u7801\uff0c",(0,o.jsx)(n.code,{children:"userId"}),"\u4e3a\u7528\u6237\u540d\uff0c\u7c7b\u578b\u5747\u4e3a",(0,o.jsx)(n.code,{children:"string"}),"\u3002"]}),"\n"]}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{style:{textAlign:"center"},children:"fetch"}),(0,o.jsx)(n.th,{style:{textAlign:"center"}})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{style:{textAlign:"center"},children:"headers"}),(0,o.jsx)(n.td,{style:{textAlign:"center"},children:'"Content-Type": "application/json"'})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{style:{textAlign:"center"},children:"body"}),(0,o.jsx)(n.td,{style:{textAlign:"center"},children:"otpCode, userId"})]})]})]}),"\n",(0,o.jsxs)(n.p,{children:["\u4f8b\uff1a\u5047\u8bbe\u60a8\u662f\u50cf",(0,o.jsx)(n.a,{href:"https://github.com/google/google-authenticator-libpam",children:"Google Authenticator"}),"\u4e00\u6837\u5c06\u5bc6\u94a5\u5b58\u5728\u7528\u6237\u5bb6\u76ee\u5f55\u4e0b\u7684",(0,o.jsx)(n.code,{children:".google_authenticator"}),"\u7b2c\u4e00\u884c\u5185\u5bb9\uff0c\u90a3\u4e48\u60a8\u53ef\u4ee5\u63d0\u4f9b\u7684\u8def\u7531\u63a5\u53e3\u53ca\u670d\u52a1TypeScript\u793a\u4f8b\uff1a"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'\nimport { Static, Type } from "@sinclair/typebox";\nimport fastify from "fastify";\nimport { NodeSSH } from "node-ssh";\nimport * as speakeasy from "speakeasy";\n\n// \u8fdc\u7a0b\u9a8c\u8bc1OTP\u7801\nconst app = fastify({ logger: true });\n\n/**\n * \u8981\u6c42\u542f\u52a8\u8be5\u670d\u52a1\u7684\u4e3b\u673a\u53ef\u4ee5ssh\u514d\u5bc6\u767b\u5f55\u5230\u5b58\u653eotp\u5bc6\u94a5\u7684\u4e3b\u673a\u7684root\u7528\u6237\u3002\u542f\u52a8\u8be5\u670d\u52a1\u7684\u4e3b\u673a\u7684\u79c1\u94a5\u5730\u5740\u4e3a/home/node/.ssh/id_rsa\uff0cnode\u4e3a\u7528\u6237\u540d\u3002\n * \u5047\u8bbe\u60a8\u7684OTP\u5bc6\u94a5\u5b58\u653e\u4e3b\u673ahost="192.168.88.102"\u4e0a/data/home/{{userId}}/.google_authenticator\u6587\u4ef6\u7684\u7b2c\u4e00\u884c\u5185\u5bb9\uff0c\u5176\u4e2d{{userId}}\u4e3a\u9700\u8981\u9a8c\u8bc1otp\u7801\u662f\u5426\u6b63\u786e\u7684\u7528\u6237\u540d\n * \n */\n// ssh\u514d\u5bc6\u767b\u5f55\u5230\u5b58\u653eotp\u5bc6\u94a5\u7684root\u7528\u6237\nconst sshUserName = "root";\n// \u5047\u8bbe\u542f\u52a8\u8be5\u670d\u52a1\u7684\u4e3b\u673a\u7684\u79c1\u94a5\u5730\u5740\u4e3a/home/node/.ssh/id_rsa\nconst privateKeyPath = "/home/node/.ssh/id_rsa";\n\n// OTP\u5bc6\u94a5\u5b58\u653e\u4e3b\u673ahost="192.168.88.102"\nconst host = "192.168.88.102";\n// \u7528\u6237\u5bb6\u76ee\u5f55\uff0cotp\u5bc6\u94a5\u5b58\u653e\u4e8e\u6b64\u76ee\u5f55\u4e0b\u7684.google_authenticator\u6587\u4ef6\u7684\u7b2c\u4e00\u884c\u5185\u5bb9\nconst homedir = "/data/home/{{ userId }}";\n\n// routePath\u9700\u8981\u4e0e\u60a8\u5b9e\u73b0\u7684\u9a8c\u8bc1\u63a5\u53e3(otp.remote.url\u4e2d\u7684path)\u4e00\u81f4\nconst routePath = "/otp/remote/validateCode";\n\nconst bodySchema = Type.Object({\n  otpCode: Type.String(),\n  userId: Type.String(),\n});\napp.post<{Body: Static<typeof bodySchema>}>(\n  routePath,\n  {\n    schema: {\n      body: bodySchema,\n    },\n  },\n  async (req, res) => {\n    // otpCode\u4e3ascow\u53d1\u8d77\u7684\u8bf7\u6c42\u643a\u5e26\u7684OTP\u9a8c\u8bc1\u7801\uff0cuserId\u4e3aOTP\u9a8c\u8bc1\u7684\u7528\u6237\u540d\n    const { otpCode, userId } = req.body;\n    const ssh = new NodeSSH();\n    // \u83b7\u53d6OTP\u5bc6\u94a5\n    const otpSecret = await ssh.connect({ host: host, username: sshUserName, privateKeyPath: privateKeyPath })\n      .then(async () => {\n        const otpSecretFilePath = homedir.replace("{{ userId }}", userId) + "/.google_authenticator";\n        const fileContent = await ssh.execCommand(`su ${userId} && cat ${otpSecretFilePath}`);\n        return fileContent.stdout.toString().split("\\n")[0];\n      }).finally(() => {\n        ssh.dispose();\n      });\n    // \u83b7\u53d6\u7edd\u5bf9\u65f6\u95f4\u6233\n    const currentTime = new Date();\n    const timeStamp = Date.UTC(currentTime.getUTCFullYear(), currentTime.getUTCMonth(), currentTime.getUTCDate(),\n      currentTime.getUTCHours(), currentTime.getUTCMinutes(), currentTime.getUTCSeconds(),\n      currentTime.getUTCMilliseconds());\n\n    // \u9a8c\u8bc1\n    let result = speakeasy.totp.verify({\n      token: otpCode,\n      time: timeStamp / 1000,\n      encoding: "base32",\n      secret: otpSecret,\n      // digits, step, algorithm\u9700\u8981\u60a8\u4e0e\u624b\u673aapp\u8bbe\u7f6e\u4fdd\u6301\u4e00\u81f4,\u9ed8\u8ba4digits\u4e3a6\uff0cstep\u4e3a30\uff0calgorithm\u4e3asha1\n    });\n    // \u9a8c\u8bc1\u5931\u8d25\u5219\u68c0\u6d4b\u8f93\u5165\u7684\u662f\u5426\u662f\u4e0a\u4e00\u4e2astep\u7684otp\u7801\uff0c\u5982\u679c\u662f\uff0c\u4e5f\u7b97\u901a\u8fc7\n    if (!result) {\n      result = speakeasy.totp.verify({\n        token: otpCode,\n        time: timeStamp / 1000 - 30,\n        encoding: "base32",\n        secret: otpSecret,\n      });\n    }\n    res.send({ result });\n  },\n);\n\nexport const start = async () => {\n  // \u914d\u7f6e\u76d1\u542c\u7684ip\u548c\u7aef\u53e3\n  await app.listen({ port: 9999, host: "192.168.88.100" });\n};\nstart();\n\n'})}),"\n",(0,o.jsxs)(n.p,{children:["\u9ed8\u8ba4\u4e0d\u542f\u7528",(0,o.jsx)(n.code,{children:"otp"}),"\u529f\u80fd\uff0c\u65e0\u9700\u914d\u7f6e\u3002\u82e5\u8981\u542f\u7528",(0,o.jsx)(n.code,{children:"otp"}),", \u5219\u9700\u8981\u5c06",(0,o.jsx)(n.code,{children:"otp.enabled"}),"\u914d\u7f6e\u4e3a",(0,o.jsx)(n.code,{children:"true"}),", \u6b64\u65f6\u5fc5\u987b\u914d\u7f6e",(0,o.jsx)(n.code,{children:"otp.type"}),"\u4e3a",(0,o.jsx)(n.code,{children:"ldap"}),"\u6216\u8005",(0,o.jsx)(n.code,{children:"remote"}),"\u3002"]}),"\n",(0,o.jsxs)(n.p,{children:["\u542f\u7528\u65f6\uff0c\u5982\u679c\u60a8\u5c06",(0,o.jsx)(n.code,{children:"otp.type"}),"\u914d\u7f6e\u4e3a",(0,o.jsx)(n.code,{children:"ldap"}),", \u90a3\u4e48",(0,o.jsx)(n.code,{children:"otp.ldap"}),"\u4e0b\u6240\u6709\u6ca1\u6709\u9ed8\u8ba4\u503c\u7684\u914d\u7f6e\u9879\u90fd\u9700\u8981\u914d\u7f6e\uff0c\u6b64\u5916\u60a8\u9700\u8981\u4fdd\u8bc1",(0,o.jsx)(n.code,{children:"auth.yaml"}),"\u6587\u4ef6\u4e2d",(0,o.jsx)(n.code,{children:"ldap.attrs.mail"}),"\u88ab\u914d\u7f6e\u4e86\uff0c\u6b64\u914d\u7f6e\u5728\u8fd9\u91cc\u7528\u4e8e\u83b7\u53d6\u90ae\u7bb1\u4fe1\u606f\u53d1\u9001\u90ae\u4ef6\u3002\u540c\u6837\u5730\u5982\u679c\u60a8\u5c06",(0,o.jsx)(n.code,{children:"otp.type"}),"\u914d\u7f6e\u4e3a",(0,o.jsx)(n.code,{children:"remote"}),", \u90a3\u4e48",(0,o.jsx)(n.code,{children:"otp.remote"}),"\u4e0b\u6240\u6709\u6ca1\u6709\u9ed8\u8ba4\u503c\u7684\u914d\u7f6e\u9879\u90fd\u9700\u8981\u914d\u7f6e\u3002"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"auth.yaml:"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",metastring:'title="config/auth.yml"',children:'\n# ldap\u8ba4\u8bc1\u652f\u6301\u7ed1\u5b9a\u548c\u9a8c\u8bc1otp\uff0cssh\u8ba4\u8bc1\u4ec5\u652f\u6301\u9a8c\u8bc1\notp:\n  # \u662f\u5426\u542f\u7528otp\u529f\u80fd\uff0c \u9ed8\u8ba4false\n  enabled: false\n  # status\u6307\u5b9aotp\u542f\u7528\u7c7b\u578b\uff0c\u5206\u522b\u4e3aldap\uff1a\u5bc6\u94a5\u5b58\u5728ldap\uff0cremote\uff1a\u5bc6\u94a5\u60a8\u81ea\u5df1\u7ba1\u7406\u3002\n  type: ldap\n  # \u5f53status\u4e3aldap\u65f6\u95f4\uff0c\u9700\u914d\u7f6e\u4ee5\u4e0b\u8fd9\u6bb5\u5185\u5bb9\n  ldap:\n    # \u9650\u5236\u7ed1\u5b9aotp\u8981\u5728\u591a\u5c11\u5206\u949f\u5185\u5b8c\u6210\uff0c\u9700\u8981\u6574\u6570, \u9ed8\u8ba410\n    # bindLimitMinutes: 10\n    # \u5bc6\u94a5\u5b58\u50a8\u5c5e\u6027\u540d, \u9ed8\u8ba4\u4e3aotpSecret, \u9700\u8981\u7528\u6237\u81ea\u5df1\u5728ldap\u4e2d\u8fdb\u884c\u5b9a\u4e49\n    secretAttributeName: \n    # \u8bbf\u95eescow\u7cfb\u7edf\u7684\u57df\u540d\u6216ip\u5730\u5740(\u4e0d\u9700\u8981\u586b\u5199scow\u7684base path),\u7528\u4e8e\u53d1\u9001\u90ae\u4ef6\u4e2d\u7ec4\u6210OTP\u7ed1\u5b9a\u9875\u9762\u7684\u5730\u5740\uff0c\u4f8b\u5982\uff1ahttps://pku.edu.cn\n    scowHost: \n    # otp\u9a8c\u8bc1\u8f6f\u4ef6\u626b\u63cf\u4e8c\u7ef4\u7801\u4e4b\u540e\uff0c\u51fa\u73b0\u7684label\u4e2d\uff0c\u7528\u6237\u540d\u548c@\u540e\u663e\u793a\u7684\u540d\u79f0, \u9ed8\u8ba4\u4e3aSCOW\n    # ldabel: "scow"\n    # otp\u7684\u4e8c\u7ef4\u7801\u4e0a\u65b9\u6587\u5b57\u63cf\u8ff0\u4fe1\u606f", \u9ed8\u8ba4\u4e3a "\u6b64\u4e8c\u7ef4\u7801\u4ec5\u51fa\u73b0\u4e00\u6b21\uff0c\u7528\u8fc7\u5373\u6bc1", \u652f\u6301html\u6807\u7b7e\n    # qrcodeDescription: "\u6b64\u4e8c\u7ef4\u7801\u4ec5\u51fa\u73b0\u4e00\u6b21"\n    # \u7ed1\u5b9aotp\u65f6\u53d1\u9001\u7ed1\u5b9a\u4fe1\u606f\u65b9\u5f0f\n    authenticationMethod:\n      mail:\n        # \u53d1\u4ef6\u90ae\u7bb1\u5730\u5740\n        from: "morgan68@ethereal.email"\n        # \u5411\u6bcf\u4e2a\u7528\u6237\u53d1\u9001\u90ae\u4ef6\u9891\u7387\u9650\u5236\uff0c\u9700\u8981\u6574\u6570\uff0c\u5355\u4f4d\u79d2\uff0c\u9ed8\u8ba460\u79d2\u95f4\u9694\n        # sendEmailFrequencyLimitInSeconds: 60\n        # \u90ae\u4ef6\u4e3b\u9898\uff0c\u9ed8\u8ba4\u4e3a"OTP\u7ed1\u5b9a\u94fe\u63a5"\n        # subject: "OTP\u7ed1\u5b9a\u94fe\u63a5"\n        # \u90ae\u4ef6\u5185\u5bb9\u6807\u9898\uff0c\u9ed8\u8ba4\u4e3a"Bind OTP"\uff0c\u4e5f\u53ef\u4ee5\u662fhtml\u6807\u7b7e\u5185\u5bb9\n        # title: "Bind OTP"\n        # \u90ae\u4ef6\u5185\u5bb9,\u9ed8\u8ba4\u4e3a"Please click on the following link to bind your OTP:"\uff0c\u4e5f\u53ef\u4ee5\u662fhtml\u6807\u7b7e\u5185\u5bb9\n        # contentText: "Please click on the following link to bind your OTP"\n        # \u6807\u7b7e\u70b9\u51fb\u6587\u5b57,\u9ed8\u8ba4\u4e3a"Bind OTP"\n        # labelText: "Bind OTP"\n        mailTransportInfo:\n          # SMTP\u670d\u52a1\u5668\n          host: "smtp.ethereal.email"\n          # \u662f\u5426\u542f\u7528\u5b89\u5168\u8fde\u63a5\uff0c\u9ed8\u8ba4false\n          # secure: false\n          # \u670d\u52a1\u5668\u7aef\u53e3\n          port: 587\n          # SMTP\u8eab\u4efd\u9a8c\u8bc1\u7528\u6237\u540d\n          user: "morgan68@ethereal.email"\n          # SMTP\u8eab\u4efd\u9a8c\u8bc1\u6388\u6743\u7801\n          password: "y2es3bd3rYwxWs5n8g"\n  # \u5982\u679cmode\u6307\u5b9a\u4e3aremote\uff0c\u9700\u8981\u914d\u7f6e\u4ee5\u4e0b\u5185\u5bb9\n  remote:\n    # \u8fdc\u7a0b\u9a8c\u8bc1url\uff0c\u4f8b\u5982http://localhost:9999/otp/remote/validateCode,\u8be6\u89c1https://pkuhpc.github.io/SCOW/docs/deploy/config/auth/config\n    validateUrl: \n    # \u5f53\u7528\u6237\u70b9\u51fb\u7ed1\u5b9aOTP\u6309\u94ae\u65f6\u8df3\u8f6c\u7684\u6309\u94ae\uff0c\u5efa\u8bae\u914d\u7f6e\uff0c\u4e0d\u914d\u7f6e\u4f1a\u4e0d\u663e\u793a\u7ed1\u5b9aotp\u6309\u94ae\n    # redirectUrl: https://pkuhpc.github.io/SCOW/docs/deploy/config/auth/config \n\n'})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},93792:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/\u9a8c\u8bc1\u7801\u767b\u5f55UI-e706d1f9b21221bb70af6166e0cf48b8.png"},5409:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>i});var o=t(48318);const s={},l=o.createContext(s);function r(e){const n=o.useContext(l);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(l.Provider,{value:n},e.children)}}}]);