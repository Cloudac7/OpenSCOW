"use strict";(self.webpackChunk_scow_docs=self.webpackChunk_scow_docs||[]).push([[1450],{76139:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>c,metadata:()=>r,toc:()=>d});var t=o(35250),s=o(57766);const c={sidebar_position:2,title:"\u96c6\u7fa4\u914d\u7f6e\u6587\u4ef6"},i="\u96c6\u7fa4\u914d\u7f6e\u6587\u4ef6",r={id:"deploy/config/cluster-config",title:"\u96c6\u7fa4\u914d\u7f6e\u6587\u4ef6",description:"\u5bf9\u4e8e\u6bcf\u4e2a\u9700\u8981\u8fdb\u884c\u90e8\u7f72\u7684\u96c6\u7fa4\uff0c\u9700\u8981\u5728config/clusters\u76ee\u5f55\u4e0b\u521b\u5efa\u4e00\u4e2a{\u96c6\u7fa4ID}/config.yml\uff08\u6216{\u96c6\u7fa4ID}.yml\uff09\u6587\u4ef6\uff0c\u5e76\u7f16\u5199\u96c6\u7fa4\u7684\u4fe1\u606f\u3002\u5f53\u60a8\u7684\u96c6\u7fa4\u4fe1\u606f\u4fee\u6539\u540e\uff0c\u60a8\u9700\u8981\u540c\u65f6\u624b\u52a8\u4fee\u6539\u5bf9\u5e94\u7684\u96c6\u7fa4\u914d\u7f6e\u6587\u4ef6\u3002",source:"@site/docs/deploy/config/cluster-config.md",sourceDirName:"deploy/config",slug:"/deploy/config/cluster-config",permalink:"/SCOW/docs/deploy/config/cluster-config",draft:!1,unlisted:!1,editUrl:"https://github.com/PKUHPC/SCOW/edit/main/website/docs/deploy/config/cluster-config.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"\u96c6\u7fa4\u914d\u7f6e\u6587\u4ef6"},sidebar:"deploy",previous:{title:"\u914d\u7f6e\u7b80\u4ecb",permalink:"/SCOW/docs/deploy/config/"},next:{title:"\u8ba4\u8bc1",permalink:"/SCOW/docs/category/\u8ba4\u8bc1"}},l={},d=[{value:"\u6ce8\u610f",id:"\u6ce8\u610f",level:2}];function a(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"\u96c6\u7fa4\u914d\u7f6e\u6587\u4ef6",children:"\u96c6\u7fa4\u914d\u7f6e\u6587\u4ef6"}),"\n",(0,t.jsxs)(e.p,{children:["\u5bf9\u4e8e\u6bcf\u4e2a\u9700\u8981\u8fdb\u884c\u90e8\u7f72\u7684\u96c6\u7fa4\uff0c\u9700\u8981\u5728",(0,t.jsx)(e.code,{children:"config/clusters"}),"\u76ee\u5f55\u4e0b\u521b\u5efa\u4e00\u4e2a",(0,t.jsx)(e.code,{children:"{\u96c6\u7fa4ID}/config.yml"}),"\uff08\u6216",(0,t.jsx)(e.code,{children:"{\u96c6\u7fa4ID}.yml"}),"\uff09\u6587\u4ef6\uff0c\u5e76\u7f16\u5199\u96c6\u7fa4\u7684\u4fe1\u606f\u3002\u5f53\u60a8\u7684\u96c6\u7fa4\u4fe1\u606f\u4fee\u6539\u540e\uff0c\u60a8\u9700\u8981\u540c\u65f6\u624b\u52a8\u4fee\u6539\u5bf9\u5e94\u7684\u96c6\u7fa4\u914d\u7f6e\u6587\u4ef6\u3002"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-yaml",metastring:'title="config/clusters/hpc01/config.yml"',children:"# \u6b64\u6587\u4ef6\u4e3ahpc01.yml\uff0c\u5bf9\u5e94\u7684\u96c6\u7fa4ID\u4e3ahpc01\n\n# \u96c6\u7fa4\u663e\u793a\u540d\u79f0\ndisplayName: hpc01Name\n\n# \u96c6\u7fa4\u9009\u62e9\u65f6\u6392\u5e8f\u7684\u4f18\u5148\u7ea7\uff0c\u6570\u5b57\u8d8a\u5c0f\u4f18\u5148\u7ea7\u8d8a\u9ad8\uff0c\u9ed8\u8ba4\u4f18\u5148\u7ea7\u6700\u4f4e\npriority: 0\n\n# \u8c03\u5ea6\u5668\u9002\u914d\u5668\u5730\u5740(ip\u5730\u5740:\u7aef\u53e3\u53f7)\nadapterUrl: localhost:8972\n\nloginNodes:\n    # \u767b\u5f55\u8282\u70b9\u5c55\u793a\u540d\u79f0\n  - name: login01\n    # \u5404\u4e2a\u767b\u5f55\u8282\u70b9\u7684IP\u6216\u8005\u57df\u540d\uff0c\u4e0d\u80fd\u91cd\u590d\n    # \u5982\u679c\u8bbe\u7f6e\u7684\u662f\u57df\u540d\uff0c\u8bf7\u786e\u8ba4\u6b64\u8282\u70b9\u7684/etc/hosts\u4e2d\u5305\u542b\u4e86\u57df\u540d\u5230IP\u7684\u89e3\u6790\u4fe1\u606f\n    # \u5982\u679c\u90e8\u7f72\u4e86\u591a\u96c6\u7fa4\uff0c\u9700\u4fdd\u8bc1\u591a\u96c6\u7fa4\u4e0b\u767b\u5f55\u8282\u70b9\u7684IP\u6216\u8005\u57df\u540d\u4e5f\u4e0d\u80fd\u91cd\u590d\n    address: 192.168.88.102\n  - name: login02\n    address: 192.168.88.103\n\n# \u767b\u5f55\u8282\u70b9\u684c\u9762\u529f\u80fd\nloginDesktop:\n  # \u662f\u5426\u542f\u7528\u684c\u9762\u529f\u80fd\n  enabled: true\n\n  # \u684c\u9762\n  wms: \n    # \u684c\u9762\u540d\u548c\u5bf9\u5e94\u7684wm\u503c\u3002\u89c1\u6587\u6863\n    - name: Xfce\n      wm: xfce\n\n  # \u5355\u4e2a\u767b\u5f55\u8282\u70b9\u6700\u591a\u542f\u52a8\u591a\u5c11\u4e2a\u684c\u9762\u8282\u70b9\n  maxDesktops: 3\n\n  # \u5c06\u521b\u5efa\u7684\u767b\u5f55\u8282\u70b9\u684c\u9762\u4fe1\u606f\u7684\u4fdd\u5b58\u5230\u4ec0\u4e48\u4f4d\u7f6e\u3002\u76f8\u5bf9\u4e8e\u7528\u6237\u7684\u5bb6\u76ee\u5f55\n  desktopsDir: scow/desktops\n\n# TurboVNC\u7684\u5b89\u88c5\u8def\u5f84\nturboVNCPath: /opt/TurboVNC\n\n# \u8de8\u96c6\u7fa4\u4f20\u8f93\u6a21\u5757\uff0c\u53ef\u9009\u529f\u80fd\ncrossClusterFileTransfer:\n  # \u4e0d\u542f\u7528\u8de8\u96c6\u7fa4\u4f20\u8f93\u529f\u80fd\u53ef\u4ee5\u8bbe\u7f6e\u4e3afalse\n  enabled: true\n  # \u4f20\u8f93\u8282\u70b9\u7684\u5730\u5740(ip\u5730\u5740:\u7aef\u53e3\u53f7)\n  transferNode: localhost:22222\n  \n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u6ce8\u610f",children:"\u6ce8\u610f"}),"\n",(0,t.jsxs)(e.p,{children:["\u96c6\u7fa4\u914d\u7f6e\u91cc\u7684\u767b\u5f55\u8282\u70b9\u684c\u9762\u529f\u80fd\u548cTurboVNC\u7684\u5b89\u88c5\u8def\u5f84\u914d\u7f6e\u4e3a\u8be5\u96c6\u7fa4\u7279\u6709\uff0c\u5982\u4e0d\u9700\u8981\u7279\u6b8a\u914d\u7f6e\u8be5\u96c6\u7fa4\u7684\u8fd9\u4e9b\u529f\u80fd\uff0c\u53ef\u5728",(0,t.jsx)(e.a,{href:"/SCOW/docs/deploy/config/portal/intro",children:"\u95e8\u6237\u7cfb\u7edf"}),"\u8fdb\u884c\u7edf\u4e00\u914d\u7f6e\uff1b\u82e5\u5728\u96c6\u7fa4\u4e0b\u914d\u7f6e\u4ee5\u4e0a\u529f\u80fd\uff0c\u5728\u8be5\u96c6\u7fa4\u5185\u5c06\u4f1a\u8986\u76d6\u95e8\u6237\u7cfb\u7edf\u4e0b\u7684\u914d\u7f6e\u3002\n\u96c6\u7fa4\u914d\u7f6e\u91cc\u7684\u767b\u5f55\u8282\u70b9\u7684IP\u6216\u8005\u57df\u540d\u5fc5\u987b\u552f\u4e00\u3002\u5982\u679c\u90e8\u7f72\u4e86\u5355\u96c6\u7fa4\u591a\u767b\u5f55\u8282\u70b9\u6216\u8005\u591a\u96c6\u7fa4\uff0c\u9700\u4fdd\u8bc1\u6240\u6709\u767b\u5f55\u8282\u70b9\u7684IP\u6216\u8005\u57df\u540d\u4e0d\u80fd\u91cd\u590d\u3002"]})]})}function p(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(a,{...n})}):a(n)}},57766:(n,e,o)=>{o.d(e,{Z:()=>r,a:()=>i});var t=o(70079);const s={},c=t.createContext(s);function i(n){const e=t.useContext(c);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:i(n.components),t.createElement(c.Provider,{value:e},n.children)}}}]);