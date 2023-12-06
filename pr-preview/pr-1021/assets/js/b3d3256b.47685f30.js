"use strict";(self.webpackChunk_scow_docs=self.webpackChunk_scow_docs||[]).push([[1337],{26939:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>t});var r=s(35250),l=s(57766);const o={sidebar_position:1,title:"\u8fd0\u7ef4"},c="\u8fd0\u7ef4",i={id:"deploy/ops/index",title:"\u8fd0\u7ef4",description:"\u672c\u8282\u4ecb\u7ecd\u5982\u4f55\u5bf9\u7cfb\u7edf\u8fdb\u884c\u7684\u5e38\u89c1\u8fd0\u7ef4\u64cd\u4f5c\u3002",source:"@site/docs/deploy/ops/index.md",sourceDirName:"deploy/ops",slug:"/deploy/ops/",permalink:"/SCOW/pr-preview/pr-1021/docs/deploy/ops/",draft:!1,unlisted:!1,editUrl:"https://github.com/PKUHPC/SCOW/edit/main/website/docs/deploy/ops/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\u8fd0\u7ef4"},sidebar:"deploy",previous:{title:"\u8fd0\u7ef4",permalink:"/SCOW/pr-preview/pr-1021/docs/category/\u8fd0\u7ef4"},next:{title:"SCOW\u7ba1\u7406\u5458\u4f7f\u7528\u6280\u5de7",permalink:"/SCOW/pr-preview/pr-1021/docs/deploy/ops/admin-usage-tips"}},d={},t=[{value:"\u66f4\u65b0",id:"\u66f4\u65b0",level:2},{value:"\u65e5\u5fd7",id:"\u65e5\u5fd7",level:2},{value:"\u67e5\u770b\u65e5\u5fd7",id:"\u67e5\u770b\u65e5\u5fd7",level:3},{value:"\u914d\u7f6e\u65e5\u5fd7\u8f93\u51fa",id:"\u914d\u7f6e\u65e5\u5fd7\u8f93\u51fa",level:3}];function a(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"\u8fd0\u7ef4",children:"\u8fd0\u7ef4"}),"\n",(0,r.jsx)(n.p,{children:"\u672c\u8282\u4ecb\u7ecd\u5982\u4f55\u5bf9\u7cfb\u7edf\u8fdb\u884c\u7684\u5e38\u89c1\u8fd0\u7ef4\u64cd\u4f5c\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u66f4\u65b0",children:"\u66f4\u65b0"}),"\n",(0,r.jsx)(n.p,{children:"SCOW\u901a\u8fc7\u5bb9\u5668\u955c\u50cf\u5206\u53d1\uff0c\u7248\u672c\u53f7\u5373SCOW\u955c\u50cf\u7684tag\u540d\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u8981\u66f4\u65b0SCOW\uff0c\u8bf7\u4fee\u6539",(0,r.jsx)(n.code,{children:"install.yaml"}),"\u4e2d\u7684",(0,r.jsx)(n.code,{children:"imageTag"}),"\u4e3a\u60a8\u60f3\u66f4\u65b0\u5230\u7684\u7248\u672c\uff08tag\u540d\uff09\uff0c\u4f8b\u5982\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:'title="install.yaml"',children:"# \u4f7f\u7528v0.4.0\u7248\u672c\nimageTag: v0.4.0\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u4fee\u6539\u5b8c\u6210\u540e\uff0c\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u66f4\u65b0\u5bb9\u5668\u955c\u50cf\u5e76\u91cd\u65b0\u7cfb\u7edf\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"./cli compose pull\n./cli compose up -d\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u679c\u66f4\u65b0\u5f15\u5165\u4e86\u7834\u574f\u6027\u7684\u53d8\u66f4\uff0c\u8bf7\u6839\u636e\u5bf9\u5e94\u7684\u66f4\u65b0\u8bf4\u660e\uff0c\u4fee\u6539\u914d\u7f6e\u540e\u5728\u8fdb\u884c\u90e8\u7f72\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u65e5\u5fd7",children:"\u65e5\u5fd7"}),"\n",(0,r.jsx)(n.h3,{id:"\u67e5\u770b\u65e5\u5fd7",children:"\u67e5\u770b\u65e5\u5fd7"}),"\n",(0,r.jsxs)(n.p,{children:["\u5404\u4e2a\u7ec4\u4ef6\u7684\u65e5\u5fd7\u76f4\u63a5\u5199\u5230",(0,r.jsx)(n.code,{children:"stdout"}),"\u3002\u53ef\u4ee5\u4f7f\u7528\u5e38\u7528\u7684docker\u65e5\u5fd7\u7ba1\u7406\u547d\u4ee4\u6216\u8005\u5de5\u5177\u7ba1\u7406\u65e5\u5fd7\u3002\u5982\u679c\u4f7f\u7528\u7684",(0,r.jsx)(n.code,{children:"docker compose"}),"\uff0c\u53ef\u4ee5\u4f7f\u7528",(0,r.jsx)(n.code,{children:"./cli compose logs -f"}),"\u540e\u9762\u8ddf\u5bf9\u5e94\u670d\u52a1\u540d\u79f0\u7684\u65b9\u5f0f\u67e5\u770b\u670d\u52a1\u7684\u65e5\u5fd7\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# \u67e5\u770b\u8ba4\u8bc1\u7cfb\u7edf\u7684\u65e5\u5fd7\n./cli compose logs -f auth\n\n# \u67e5\u770b\u95e8\u6237\u7cfb\u7edf\u670d\u52a1\u5668\u7aef\u7684\u65e5\u5fd7\n./cli compose logs -f portal-server\n\n# \u67e5\u770b\u7ba1\u7406\u7cfb\u7edf\u670d\u52a1\u5668\u7aef\u7684\u65e5\u5fd7\n./cli compose logs -f mis-server\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u914d\u7f6e\u65e5\u5fd7\u8f93\u51fa",children:"\u914d\u7f6e\u65e5\u5fd7\u8f93\u51fa"}),"\n",(0,r.jsxs)(n.p,{children:["\u60a8\u53ef\u4ee5\u901a\u8fc7\u5b89\u88c5\u914d\u7f6e\u6587\u4ef6\u914d\u7f6e\u95e8\u6237\u7cfb\u7edf\u540e\u7aef\uff08",(0,r.jsx)(n.code,{children:"portal-server"}),"\uff09\u3001\u7ba1\u7406\u7cfb\u7edf\u540e\u7aef\uff08",(0,r.jsx)(n.code,{children:"mis-server"}),"\uff09\u548c\u5185\u7f6e\u8ba4\u8bc1\u7cfb\u7edf\uff08",(0,r.jsx)(n.code,{children:"auth"}),"\uff09\u7684\u65e5\u5fd7\u8f93\u51fa\u9009\u9879\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:'title="install.yaml"',children:'log:\n  # LOG.LEVEL: \u65e5\u5fd7\u7b49\u7ea7\uff0c\u53ef\u9009trace, debug, info, warn, error\u3002\u9ed8\u8ba4info\n  level: "info"\n\n  # LOG.PRETTY: \u662f\u5426\u8f93\u51fa\u66f4\u9002\u5408\u76f4\u63a5\u8bfb\u7684log\u3002\u5982\u679c\u4e3afalse\uff0c\u5219\u8f93\u51fajson\u683c\u5f0f\u7684\u65e5\u5fd7\u3002\u9ed8\u8ba4false\n  pretty: false\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u5f53",(0,r.jsx)(n.code,{children:"log.pretty"}),"\u4e3a",(0,r.jsx)(n.code,{children:"true"}),"\u65f6\uff0c\u8f93\u51fa\u65e5\u5fd7\u683c\u5f0f\u5982\u4e0b\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'[02:27:00.372] INFO (18): request completed\n    reqId: "req-3"\n    res: {\n      "statusCode": 200\n    }\n    responseTime: 0.3789879999967525\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u5f53",(0,r.jsx)(n.code,{children:"log.pretty"}),"\u4e3a",(0,r.jsx)(n.code,{children:"false"}),"\u65f6\uff0c\u8f93\u51fa\u65e5\u5fd7\u683c\u5f0f\u5982\u4e0b\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{"level":30,"time":1676429663943,"pid":18,"hostname":"d3fc2f53e863","reqId":"req-1","res":{"statusCode":200},"responseTime":4.37828900013119,"msg":"request completed"}\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u5f53\u60a8\u9700\u8981\u4f7f\u7528\u65e5\u5fd7\u6536\u96c6\u5de5\u5177\u65f6\uff0c\u5efa\u8bae\u60a8\u4f7f\u7528JSON\u683c\u5f0f\u8f93\u51fa\u65e5\u5fd7\uff0c\u7136\u540e\u4f7f\u7528\u65e5\u5fd7\u5206\u6790\u5de5\u5177\u6765\u67e5\u770b\u548c\u5206\u6790\u6536\u96c6\u5230\u7684\u65e5\u5fd7\u3002"})]})}function p(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},57766:(e,n,s)=>{s.d(n,{Z:()=>i,a:()=>c});var r=s(70079);const l={},o=r.createContext(l);function c(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);