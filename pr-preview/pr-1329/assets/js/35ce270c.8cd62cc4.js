"use strict";(self.webpackChunk_scow_docs=self.webpackChunk_scow_docs||[]).push([[4281],{73510:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>t,contentTitle:()=>s,default:()=>l,frontMatter:()=>o,metadata:()=>p,toc:()=>d});var c=i(49214),r=i(5409);const o={sidebar_position:3,title:"\u914d\u7f6e\u684c\u9762\u7c7b\u5e94\u7528"},s=void 0,p={id:"deploy/config/ai/apps/configure-vnc-app",title:"\u914d\u7f6e\u684c\u9762\u7c7b\u5e94\u7528",description:"\u524d\u63d0\u6761\u4ef6",source:"@site/docs/deploy/config/ai/apps/configure-vnc-app.md",sourceDirName:"deploy/config/ai/apps",slug:"/deploy/config/ai/apps/configure-vnc-app",permalink:"/SCOW/pr-preview/pr-1329/docs/deploy/config/ai/apps/configure-vnc-app",draft:!1,unlisted:!1,editUrl:"https://github.com/PKUHPC/SCOW/edit/main/website/docs/deploy/config/ai/apps/configure-vnc-app.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"\u914d\u7f6e\u684c\u9762\u7c7b\u5e94\u7528"},sidebar:"deploy",previous:{title:"\u914d\u7f6eWeb\u7c7b\u5e94\u7528",permalink:"/SCOW/pr-preview/pr-1329/docs/deploy/config/ai/apps/configure-web-app"},next:{title:"\u5e94\u7528\u914d\u7f6e\u793a\u4f8b",permalink:"/SCOW/pr-preview/pr-1329/docs/category/\u5e94\u7528\u914d\u7f6e\u793a\u4f8b-1"}},t={},d=[{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",level:2},{value:"\u914d\u7f6e\u793a\u4f8b",id:"\u914d\u7f6e\u793a\u4f8b",level:2},{value:"\u914d\u7f6e\u89e3\u91ca",id:"\u914d\u7f6e\u89e3\u91ca",level:2},{value:"<code>logoPath</code>",id:"logopath",level:3},{value:"<code>image</code>",id:"image",level:3},{value:"<code>beforeScript</code>",id:"beforescript",level:3},{value:"<code>xstartup</code>",id:"xstartup",level:3}];function a(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h2,{id:"\u524d\u63d0\u6761\u4ef6",children:"\u524d\u63d0\u6761\u4ef6"}),"\n",(0,c.jsx)(n.p,{children:"\u955c\u50cf\u8981\u6c42\uff1a"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"\u5b89\u88c5\u6709VNC\uff08TigerVNC or TurboVNC\uff09"}),"\n",(0,c.jsx)(n.li,{children:"\u5b89\u88c5\u5bf9\u5e94\u7684\u5e94\u7528"}),"\n",(0,c.jsx)(n.li,{children:"\u76f8\u5e94\u7684\u811a\u672c\u542f\u52a8VNC\u670d\u52a1\u4ee5\u53ca\u684c\u9762\u5e94\u7528"}),"\n",(0,c.jsxs)(n.li,{children:["\u786e\u4fddvnc\u8fde\u63a5\u7684\u5bc6\u7801\u4fdd\u5b58\u5728",(0,c.jsx)(n.code,{children:"~/.vnc/passwd"}),"\u6587\u4ef6\u4e2d\uff0c\u5e94\u7528\u5728\u8fde\u63a5\u65f6\uff0c\u4f1a\u7ed9\u6bcf\u6b21\u8fde\u63a5\u751f\u6210\u4e00\u4e2a\u65b0\u7684\u5bc6\u7801\uff0c\u751f\u6210\u7684\u4f4d\u7f6e\u4e3a",(0,c.jsx)(n.code,{children:"~/.vnc/passwd"}),"\u3002"]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"\u8bf7\u786e\u4fdd\u8ba1\u7b97\u8282\u70b9\u53ef\u4ee5\u62c9\u53d6\u6216\u8005\u5df2\u7ecf\u5b58\u5728\u914d\u7f6e\u4e2d\u5e94\u7528\u7684\u955c\u50cf\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"\u914d\u7f6e\u793a\u4f8b",children:"\u914d\u7f6e\u793a\u4f8b"}),"\n",(0,c.jsx)(n.p,{children:"\u4e0b\u9762\u4ee5\u4f7f\u7528pycharm\u4e3a\u793a\u4f8b\u4ecb\u7ecd\u5982\u4f55\u914d\u7f6e\u684c\u9762\u7c7b\u5e94\u7528\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u521b\u5efaconfig/ai/apps\u76ee\u5f55\uff0c\u5728\u91cc\u9762\u521b\u5efapycharm/config.yml\u6216vscode.yml\u6587\u4ef6\uff0c\u5176\u5185\u5bb9\u5982\u4e0b\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-yaml",metastring:'title="config/ai/apps/pycharm/config.yml"',children:"# \u8fd9\u4e2a\u5e94\u7528\u7684ID\nid: pycharm\n\n# \u8fd9\u4e2a\u5e94\u7528\u7684\u540d\u5b57\nname: pycharm\n\n# \u8fd9\u4e2a\u5e94\u7528\u7684\u56fe\u6807\u6587\u4ef6\u5728\u516c\u5171\u6587\u4ef6\u4e0b\u7684\u8def\u5f84\nlogoPath: /test.svg\n\ntype: vnc\nimage:\n  # \u955c\u50cf\u540d\u79f0\n  name: 10.129.227.64/test/admin/pycharm\n  # \u955c\u50cf\u7248\u672c\n  tag: v1.1\n\n# VNC\u5e94\u7528\u7684\u914d\u7f6e\nvnc:\n  # \u6b64X Session\u7684xstartup\u811a\u672c\n  xstartup: |\n    /dockerstartup/vnc_startup.sh pycharm\n\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u589e\u52a0\u4e86\u6b64\u6587\u4ef6\u540e\uff0c\u5237\u65b0\u5373\u53ef\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"\u914d\u7f6e\u89e3\u91ca",children:"\u914d\u7f6e\u89e3\u91ca"}),"\n",(0,c.jsx)(n.h3,{id:"logopath",children:(0,c.jsx)(n.code,{children:"logoPath"})}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.a,{href:"/SCOW/pr-preview/pr-1329/docs/deploy/config/portal/apps/configure-app-logo",children:"\u53c2\u8003\u95e8\u6237\u7cfb\u7edf"})}),"\n",(0,c.jsx)(n.h3,{id:"image",children:(0,c.jsx)(n.code,{children:"image"})}),"\n",(0,c.jsxs)(n.p,{children:["\u8be5\u955c\u50cf\u4f1a\u88ab\u7528\u6765\u542f\u52a8\u5e94\u7528\uff0c",(0,c.jsx)(n.code,{children:"name"}),"\u548c",(0,c.jsx)(n.code,{children:"tag"}),"\u5206\u522b\u6307\u5b9a\u955c\u50cf\u7684\u540d\u79f0\u548c\u7248\u672c\u3002\u5982\u679c\u672c\u5730\u6ca1\u6709\u8be5\u955c\u50cf\uff0c\u5c06\u4f1a\u5c1d\u8bd5\u4ece\u955c\u50cf\u4ed3\u5e93\u62c9\u53d6\u3002"]}),"\n",(0,c.jsx)(n.h3,{id:"beforescript",children:(0,c.jsx)(n.code,{children:"beforeScript"})}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.a,{href:"/SCOW/pr-preview/pr-1329/docs/deploy/config/portal/apps/configure-vnc-app#beforescript",children:"\u53c2\u8003\u95e8\u6237\u7cfb\u7edf"})}),"\n",(0,c.jsx)(n.h3,{id:"xstartup",children:(0,c.jsx)(n.code,{children:"xstartup"})}),"\n",(0,c.jsx)(n.p,{children:"\u6b64\u5904\u5e94\u8be5\u586b\u5199\u542f\u52a8\u955c\u50cf\u65f6\uff0cvnc\u670d\u52a1\u542f\u52a8\u65f6\u7684xstartup\u811a\u672c\uff0c\u811a\u672c\u4e2d\u5e94\u8be5\u5305\u542b\u542f\u52a8\u684c\u9762\u5e94\u7528\u7684\u547d\u4ee4\u3002"})]})}function l(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(a,{...e})}):a(e)}},5409:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>p});var c=i(48318);const r={},o=c.createContext(r);function s(e){const n=c.useContext(o);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function p(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),c.createElement(o.Provider,{value:n},e.children)}}}]);