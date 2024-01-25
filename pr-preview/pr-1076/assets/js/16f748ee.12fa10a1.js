"use strict";(self.webpackChunk_scow_docs=self.webpackChunk_scow_docs||[]).push([[2549],{91382:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>l,default:()=>a,frontMatter:()=>r,metadata:()=>d,toc:()=>t});var c=n(35250),i=n(57766);const r={sidebar_position:1,title:"\u5b89\u88c5",description:"\u5982\u4f55\u5728\u5df2\u6709\u8d85\u7b97\u96c6\u7fa4\u4e0a\u90e8\u7f72SCOW\u7cfb\u7edf"},l="\u5b89\u88c5",d={id:"deploy/install/index",title:"\u5b89\u88c5",description:"\u5982\u4f55\u5728\u5df2\u6709\u8d85\u7b97\u96c6\u7fa4\u4e0a\u90e8\u7f72SCOW\u7cfb\u7edf",source:"@site/docs/deploy/install/index.md",sourceDirName:"deploy/install",slug:"/deploy/install/",permalink:"/SCOW/pr-preview/pr-1076/docs/deploy/install/",draft:!1,unlisted:!1,editUrl:"https://github.com/PKUHPC/SCOW/edit/main/website/docs/deploy/install/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\u5b89\u88c5",description:"\u5982\u4f55\u5728\u5df2\u6709\u8d85\u7b97\u96c6\u7fa4\u4e0a\u90e8\u7f72SCOW\u7cfb\u7edf"},sidebar:"deploy",previous:{title:"\u5b89\u88c5",permalink:"/SCOW/pr-preview/pr-1076/docs/category/\u5b89\u88c5"},next:{title:"scow-cli",permalink:"/SCOW/pr-preview/pr-1076/docs/deploy/install/scow-cli"}},o={},t=[{value:"\u96c6\u7fa4\u8981\u6c42",id:"\u96c6\u7fa4\u8981\u6c42",level:2},{value:"\u51c6\u5907\u73af\u5883",id:"\u51c6\u5907\u73af\u5883",level:2},{value:"\u90e8\u7f72SCOW\u8c03\u5ea6\u5668\u9002\u914d\u5668",id:"\u90e8\u7f72scow\u8c03\u5ea6\u5668\u9002\u914d\u5668",level:2},{value:"\u4e0b\u8f7dscow-cli",id:"\u4e0b\u8f7dscow-cli",level:2},{value:"\u51c6\u5907\u914d\u7f6e\u6587\u4ef6",id:"\u51c6\u5907\u914d\u7f6e\u6587\u4ef6",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2}];function h(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s.h1,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,c.jsx)(s.p,{children:"\u672c\u8282\u4ecb\u7ecd\u5982\u4f55\u5728\u5df2\u6709\u7684\u8d85\u7b97\u96c6\u7fa4\u4e0a\u90e8\u7f72SCOW\u7cfb\u7edf\u3002\u60a8\u53ef\u53c2\u8003\u672c\u6587\u6863\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u90e8\u7f72SCOW\u3002"}),"\n",(0,c.jsx)(s.h2,{id:"\u96c6\u7fa4\u8981\u6c42",children:"\u96c6\u7fa4\u8981\u6c42"}),"\n",(0,c.jsxs)(s.p,{children:["\u6211\u4eec\u63a8\u8350\u5c06SCOW\u90e8\u7f72\u5728\u4e00\u4e2a",(0,c.jsx)(s.strong,{children:"\u5355\u72ec"}),"\u7684\u8282\u70b9\u4e0a\u3002\u4e0b\u6587\u79f0\u90e8\u7f72\u8fd9\u4e9b\u7ec4\u4ef6\u7684\u8282\u70b9\u4e3a",(0,c.jsx)(s.strong,{children:"\u670d\u52a1\u8282\u70b9"}),"\u3002"]}),"\n",(0,c.jsx)(s.p,{children:"\u8981\u5728\u60a8\u7684\u96c6\u7fa4\u4e0a\u4f7f\u7528SCOW\uff0c\u8bf7\u4fdd\u8bc1\u60a8\u7684\u96c6\u7fa4\u6ee1\u8db3\u4ee5\u4e0b\u6761\u4ef6\uff1a"}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"\u96c6\u7fa4\u4e2d\u7684\u5404\u4e2a\u8282\u70b9\u53ef\u76f8\u4e92\u901a\u8fc7\u7f51\u7edc\u8fde\u63a5"}),"\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.strong,{children:"\u670d\u52a1\u8282\u70b9"}),"\u53ef\u4ee5\u514d\u5bc6\u4ee5root\u7528\u6237SSH\u767b\u5f55\u5230\u5404\u4e2a",(0,c.jsx)(s.strong,{children:"\u767b\u5f55\u8282\u70b9"}),"\uff0c\u5e76\u4e14",(0,c.jsx)(s.strong,{children:"\u670d\u52a1\u8282\u70b9"}),"\u7684",(0,c.jsx)(s.code,{children:"~/.ssh"}),"\u76ee\u5f55\u4e0b\u6709\u767b\u5f55\u6240\u9700\u8981\u7684",(0,c.jsx)(s.code,{children:"id_rsa.pub"}),"\u548c",(0,c.jsx)(s.code,{children:"id_rsa"}),"\u6587\u4ef6","\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsxs)(s.li,{children:["\u8fd0\u884c\u6240\u6709\u90e8\u7f72\u7684\u547d\u4ee4\u7528\u6237\u4e0d\u9700\u8981\u4e3aroot\uff0c\u4f46\u662f\u6b64\u7528\u6237\u7684",(0,c.jsx)(s.code,{children:"~/.ssh"}),"\u4e0b\u7684\u5bc6\u94a5\u5bf9\u9700\u53ef\u4ee5\u4ee5root\u7528\u6237\u767b\u5f55\u767b\u5f55\u8282\u70b9"]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.strong,{children:"\u670d\u52a1\u8282\u70b9"}),"\u53ef\u4ee5SSH\u8fde\u63a5\u5230\u6240\u6709",(0,c.jsx)(s.strong,{children:"\u8ba1\u7b97\u8282\u70b9"}),"\uff0c\u5e76\u4e14",(0,c.jsx)(s.strong,{children:"\u8ba1\u7b97\u8282\u70b9"}),"\u548c",(0,c.jsx)(s.strong,{children:"\u767b\u5f55\u8282\u70b9"}),"\u7684\u6240\u6709\u7528\u6237\u5171\u4eab\u540c\u6837\u7684",(0,c.jsx)(s.code,{children:"SSH authorized_keys"}),"\u914d\u7f6e\u6587\u4ef6"]}),"\n",(0,c.jsxs)(s.li,{children:["\u4f7f\u7528slurm\u8c03\u5ea6\u5668\uff0c\u5e76\u4e14","\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"\u7248\u672c\u4e3a21.08.4\u53ca\u4ee5\u4e0a"}),"\n",(0,c.jsxs)(s.li,{children:["\u5df2\u7ecf\u90e8\u7f72slurm\u7684",(0,c.jsx)(s.a,{href:"https://slurm.schedmd.com/accounting.html#database-configuration",children:"Accounting"}),"\u529f\u80fd"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(s.admonition,{type:"caution",children:[(0,c.jsxs)(s.p,{children:["\u56e0\u4e3a",(0,c.jsx)(s.a,{href:"https://github.com/mscdex/ssh2/issues/989",children:"\u8fd9\u4e2aissue"}),"\uff0c\u5982\u679c\u60a8\u7684\u767b\u5f55\u8282\u70b9\u548c\u8ba1\u7b97\u8282\u70b9\u7684\u6240\u4f7f\u7528\u7684OpenSSH\u7684\u7248\u672c\u9ad8\u4e8e",(0,c.jsx)(s.strong,{children:"8.2"}),"\uff08\u5927\u591a\u6bd4CentOS 7\u65b0\u7684\u64cd\u4f5c\u7cfb\u7edf\u9ed8\u8ba4\u7684\u7248\u672c\u5747\u9ad8\u4e8e\u6b64\uff09\uff0c\u90a3\u4e48\u5373\u4f7f\u60a8\u80fd\u5728SCOW\u8282\u70b9\u4e0a\u901a\u8fc7",(0,c.jsx)(s.code,{children:"ssh"}),"\u547d\u4ee4\u8fde\u63a5\u5230\u767b\u5f55\u548c\u8ba1\u7b97\u8282\u70b9\u4e0a\uff0cSCOW\u53ef\u80fd\u4e5f\u65e0\u6cd5\u901a\u8fc7SSH\u8fde\u63a5\u5230\u8fd9\u4e9b\u8282\u70b9\u4e0a\u3002\u5982\u679c\u60a8\u9047\u5230\u4e86\u8fd9\u4e2a\u95ee\u9898\uff0c\u60a8\u9700\u8981\u5728\u60a8\u7684\u5404\u4e2a\u8282\u70b9\u7684",(0,c.jsx)(s.code,{children:"/etc/ssh/sshd_config"}),"\u6587\u4ef6\u4e2d\u589e\u52a0\u4ee5\u4e0b\u5185\u5bb9\uff0c\u5e76\u91cd\u542f",(0,c.jsx)(s.code,{children:"sshd"}),"\u670d\u52a1\u3002"]}),(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-bash",children:"PubkeyAcceptedKeyTypes=+ssh-rsa\n"})}),(0,c.jsxs)(s.p,{children:["\u8fd9\u662f\u56e0\u4e3aOpenSSH\u4ece8.2\u7248\u672c\u5f00\u59cb\u9ed8\u8ba4\u53d6\u6d88\u4e86\u5bf9",(0,c.jsx)(s.code,{children:"ssh-rsa"}),"\u516c\u94a5\u7b7e\u540d\u7b97\u6cd5\u7684\u652f\u6301\uff08",(0,c.jsx)(s.a,{href:"https://www.openssh.com/txt/release-8.2",children:"OpenSSH 8.2 Release Note"}),"\uff09\u3002\u5f53\u524d\u7cfb\u7edf\u4ec5\u652f\u6301\u4f7f\u7528",(0,c.jsx)(s.code,{children:"ssh-rsa"}),"\u7c7b\u578b\u7684\u516c\u94a5\u5bf9\u8fdb\u884cSSH\u767b\u5f55\uff0c\u5728\u540e\u7eed\u6211\u4eec\u4f1a\u589e\u52a0\u5bf9\u4f7f\u7528\u66f4\u65b0\u7b97\u6cd5\uff08\u4f8b\u5982",(0,c.jsx)(s.code,{children:"ed25519"}),"\uff09\u7684\u516c\u79c1\u94a5\u5bf9\u7684\u9ed8\u8ba4\u652f\u6301\u3002"]})]}),"\n",(0,c.jsx)(s.h2,{id:"\u51c6\u5907\u73af\u5883",children:"\u51c6\u5907\u73af\u5883"}),"\n",(0,c.jsx)(s.p,{children:"\u4e3a\u4e86\u7b80\u5316\u90e8\u7f72\uff0c\u7cfb\u7edf\u7ec4\u4ef6\u4ee5docker\u955c\u50cf\u7684\u5f62\u5f0f\u5206\u53d1\u3002\u670d\u52a1\u8282\u70b9\u5e94\u8be5\u5b89\u88c5\u597d"}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.code,{children:"docker"}),"\uff08",(0,c.jsx)(s.a,{href:"https://docs.docker.com/engine/install/",children:"\u5b89\u88c5docker\u7684\u5b98\u65b9\u6587\u6863"}),"\uff09"]}),"\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.code,{children:"docker compose"}),"\uff08",(0,c.jsx)(s.a,{href:"https://docs.docker.com/compose/install/",children:"\u5b89\u88c5docker compose\u7684\u5b98\u65b9\u6587\u6863"}),"\uff09\u3002"]}),"\n"]}),"\n",(0,c.jsx)(s.h2,{id:"\u90e8\u7f72scow\u8c03\u5ea6\u5668\u9002\u914d\u5668",children:"\u90e8\u7f72SCOW\u8c03\u5ea6\u5668\u9002\u914d\u5668"}),"\n",(0,c.jsxs)(s.p,{children:["\u9488\u5bf9\u4e0d\u540c\u79cd\u7c7b\u7684\u8c03\u5ea6\u5668\uff0c\u9700\u8981\u5728\u96c6\u7fa4\u4e0a\u90e8\u7f72\u5bf9\u5e94\u7684\u9002\u914d\u5668\u3002\u9002\u914d\u5668\u662f\u5728SCOW\u548c\u5e95\u5c42\u8c03\u5ea6\u5668\u4e4b\u95f4\u7684\u4e2d\u95f4\u5c42\uff0c\u5411SCOW\u63d0\u4f9b\u4e00\u7ec4",(0,c.jsx)(s.a,{href:"https://github.com/PKUHPC/scow-scheduler-adapter-interface",children:"\u63a5\u53e3"}),"\uff0cSCOW\u901a\u8fc7\u8fd9\u7ec4\u63a5\u53e3\u8c03\u7528\u9002\u914d\u5668\u529f\u80fd\u3002\u7406\u8bba\u4e0a\uff0c\u53ea\u8981\u9002\u914d\u5668\u5b9e\u73b0\u4e86\u63a5\u53e3\u6240\u5b9a\u4e49\u7684\u529f\u80fd\uff0cSCOW\u5c31\u80fd\u65b9\u4fbf\u5730\u90e8\u7f72\u5728\u5bf9\u5e94\u96c6\u7fa4\u4e0a\u3002"]}),"\n",(0,c.jsx)(s.p,{children:"\u9002\u914d\u5668\u672c\u8d28\u4e0a\u662f\u4e00\u4e2agRPC\u670d\u52a1\u5668\uff0c\u6211\u4eec\u5df2\u7ecf\u5b9e\u73b0\u4e86\u90e8\u5206\u8c03\u5ea6\u5668\u5bf9\u5e94\u7684\u9002\u914d\u5668\uff0c\u53ef\u4ee5\u53c2\u8003\u4e0b\u5217\u6587\u6863\u90e8\u7f72\u9002\u914d\u5668"}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:(0,c.jsx)(s.a,{href:"https://github.com/PKUHPC/scow-slurm-adapter",children:"slurm"})}),"\n"]}),"\n",(0,c.jsx)(s.admonition,{type:"note",children:(0,c.jsxs)(s.p,{children:["\u9002\u914d\u5668\u5c06\u4f1a\u66b4\u9732\u4e00\u4e2a\u7aef\u53e3\u6765\u63d0\u4f9b\u670d\u52a1\uff0cSCOW\u5c06\u901a\u8fc7",(0,c.jsx)(s.code,{children:"ip\u5730\u5740+\u7aef\u53e3\u53f7"}),"\u8bbf\u95ee\u9002\u914d\u5668\uff0c\u8c03\u7528\u63a5\u53e3\u3002\u8bf7\u8bb0\u5f55\u4e0b\u9002\u914d\u5668\u7684\u5730\u5740\u4fe1\u606f\uff0c\u7528\u4e8e\u540e\u7eed\u90e8\u7f72\u3002"]})}),"\n",(0,c.jsx)(s.h2,{id:"\u4e0b\u8f7dscow-cli",children:"\u4e0b\u8f7dscow-cli"}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"scow-cli"}),"\u662f\u6211\u4eec\u5b98\u65b9\u7ef4\u62a4\u7684SCOW\u90e8\u7f72\u548c\u8fd0\u7ef4\u5de5\u5177\uff0c\u80fd\u591f\u5e2e\u52a9\u60a8\u5feb\u901f\u90e8\u7f72\u3001\u7ba1\u7406\u548c\u7ef4\u62a4SCOW\u96c6\u7fa4\u3002"]}),"\n",(0,c.jsxs)(s.p,{children:["\u53c2\u8003",(0,c.jsx)(s.a,{href:"/SCOW/pr-preview/pr-1076/docs/deploy/install/scow-cli",children:"scow-cli"}),"\u4e0b\u8f7d",(0,c.jsx)(s.code,{children:"scow-cli"}),"\uff0c\u5e76\u5c06\u5176\u5b58\u653e\u5230\u4e00\u4e2a\u4f60\u7528\u4e8e\u5b58\u653eSCOW\u914d\u7f6e\u6587\u4ef6\u7684\u76ee\u5f55\u4e0b\u3002"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-bash",children:"# scow\u76ee\u5f55\u5c06\u4f1a\u7528\u4e8e\u5b58\u5728SCOW\u76f8\u5173\u7684\u914d\u7f6e\u6587\u4ef6\nmkdir scow\ncd scow\n\n# \u5c06\u4e0b\u8f7d\u7684scow-cli\u79fb\u52a8\u5230scow\u76ee\u5f55\u4e0b\ncp /path/to/scow-cli ./\nchmod +x scow-cli\n"})}),"\n",(0,c.jsx)(s.h2,{id:"\u51c6\u5907\u914d\u7f6e\u6587\u4ef6",children:"\u51c6\u5907\u914d\u7f6e\u6587\u4ef6"}),"\n",(0,c.jsx)(s.p,{children:"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u751f\u6210\u793a\u4f8b\u914d\u7f6e\u6587\u4ef6\uff1a"}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-bash",children:"# \u751f\u6210\u5b89\u88c5\u914d\u7f6e\u6587\u4ef6./install.yaml\u548c\u793a\u4f8b\u914d\u7f6e\u6587\u4ef6\u76ee\u5f55./config\n./cli init\n"})}),"\n",(0,c.jsx)(s.h2,{id:"\u914d\u7f6e",children:"\u914d\u7f6e"}),"\n",(0,c.jsx)(s.p,{children:"\u6839\u636e\u4ee5\u4e0b\u987a\u5e8f\u914d\u7f6e\u7cfb\u7edf\uff1a"}),"\n",(0,c.jsxs)(s.ol,{children:["\n",(0,c.jsx)(s.li,{children:(0,c.jsx)(s.a,{href:"/SCOW/pr-preview/pr-1076/docs/deploy/config/cluster-config",children:"\u7f16\u5199\u96c6\u7fa4\u4fe1\u606f\u914d\u7f6e\u6587\u4ef6"})}),"\n",(0,c.jsx)(s.li,{children:(0,c.jsx)(s.a,{href:"/SCOW/pr-preview/pr-1076/docs/deploy/config/auth/intro",children:"\u914d\u7f6e\u8ba4\u8bc1\u7cfb\u7edf"})}),"\n",(0,c.jsxs)(s.li,{children:["\uff08\u53ef\u9009\uff09",(0,c.jsx)(s.a,{href:"/SCOW/pr-preview/pr-1076/docs/deploy/config/portal/intro",children:"\u914d\u7f6e\u95e8\u6237\u7cfb\u7edf"})]}),"\n",(0,c.jsxs)(s.li,{children:["\uff08\u53ef\u9009\uff09",(0,c.jsx)(s.a,{href:"/SCOW/pr-preview/pr-1076/docs/deploy/config/mis/intro",children:"\u914d\u7f6e\u7ba1\u7406\u7cfb\u7edf"})]}),"\n",(0,c.jsxs)(s.li,{children:["\uff08\u53ef\u9009\uff09",(0,c.jsx)(s.a,{href:"/SCOW/pr-preview/pr-1076/docs/deploy/config/audit/intro",children:"\u914d\u7f6e\u5ba1\u8ba1\u7cfb\u7edf"})]}),"\n"]}),"\n",(0,c.jsx)(s.p,{children:"\u90e8\u7f72\u5b8c\u6210\u540e\uff0c\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u542f\u52a8\u7cfb\u7edf\u3002"}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-bash",children:"./cli compose up -d\n"})}),"\n",(0,c.jsx)(s.p,{children:"\u5f53\u4fee\u6539\u4e86\u914d\u7f6e\u6587\u4ef6\u540e\uff0c\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u91cd\u542f\u7cfb\u7edf"}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-bash",children:"./cli compose restart\n"})})]})}function a(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,c.jsx)(s,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}},57766:(e,s,n)=>{n.d(s,{Z:()=>d,a:()=>l});var c=n(70079);const i={},r=c.createContext(i);function l(e){const s=c.useContext(r);return c.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),c.createElement(r.Provider,{value:s},e.children)}}}]);