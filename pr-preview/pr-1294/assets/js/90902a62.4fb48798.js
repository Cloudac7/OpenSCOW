"use strict";(self.webpackChunk_scow_docs=self.webpackChunk_scow_docs||[]).push([[2980],{70411:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var i=r(49214),s=r(5409);const a={sidebar_position:6,title:"\u96c6\u7fa4\u76d1\u63a7\u529f\u80fd\uff08\u53ef\u9009\uff09"},t="\u96c6\u7fa4\u76d1\u63a7\u529f\u80fd\uff08\u53ef\u9009\uff09",o={id:"deploy/config/mis/cluster-monitor/index",title:"\u96c6\u7fa4\u76d1\u63a7\u529f\u80fd\uff08\u53ef\u9009\uff09",description:"\u8d44\u6e90\u72b6\u6001",source:"@site/docs/deploy/config/mis/cluster-monitor/index.md",sourceDirName:"deploy/config/mis/cluster-monitor",slug:"/deploy/config/mis/cluster-monitor/",permalink:"/SCOW/pr-preview/pr-1294/docs/deploy/config/mis/cluster-monitor/",draft:!1,unlisted:!1,editUrl:"https://github.com/PKUHPC/SCOW/edit/main/website/docs/deploy/config/mis/cluster-monitor/index.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"\u96c6\u7fa4\u76d1\u63a7\u529f\u80fd\uff08\u53ef\u9009\uff09"},sidebar:"deploy",previous:{title:"\u7cfb\u7edf\u521d\u59cb\u5316",permalink:"/SCOW/pr-preview/pr-1294/docs/deploy/config/mis/init/"},next:{title:"AI \u7cfb\u7edf\uff08beta\uff09",permalink:"/SCOW/pr-preview/pr-1294/docs/category/ai-\u7cfb\u7edfbeta"}},c={},d=[{value:"\u8d44\u6e90\u72b6\u6001",id:"\u8d44\u6e90\u72b6\u6001",level:2},{value:"1. \u76f4\u63a5\u5d4c\u5165",id:"1-\u76f4\u63a5\u5d4c\u5165",level:3},{value:"2. \u4ee3\u7406",id:"2-\u4ee3\u7406",level:3},{value:"\u544a\u8b66\u65e5\u5fd7",id:"\u544a\u8b66\u65e5\u5fd7",level:2},{value:"\u53c2\u8003\u914d\u7f6e",id:"\u53c2\u8003\u914d\u7f6e",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"\u96c6\u7fa4\u76d1\u63a7\u529f\u80fd\u53ef\u9009",children:"\u96c6\u7fa4\u76d1\u63a7\u529f\u80fd\uff08\u53ef\u9009\uff09"}),"\n",(0,i.jsx)(n.h2,{id:"\u8d44\u6e90\u72b6\u6001",children:"\u8d44\u6e90\u72b6\u6001"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"\u96c6\u7fa4\u8d44\u6e90\u4fe1\u606f",src:r(98447).A+"",width:"1896",height:"905"})}),"\n",(0,i.jsx)(n.p,{children:"\u8d44\u6e90\u72b6\u6001\u529f\u80fd\u901a\u8fc7\u5d4c\u5165\u914d\u7f6e\u597d\u7684 Grafana \u9762\u677f\u67e5\u770b\u8d44\u6e90\u7684\u72b6\u6001\u3002\ngrafana \u7248\u672c\u63a8\u8350\u4f7f\u7528\u8f83\u65b0\u7684\u7248\u672c\uff0c\u5426\u5219\u53ef\u80fd\u4f1a\u51fa\u73b0\u6570\u636e\u65e0\u6cd5\u83b7\u53d6\u6216\u8005\u6837\u5f0f\u5f02\u5e38\u7684\u60c5\u51b5\u3002SCOW \u5728\u8fdb\u884c\u6d4b\u8bd5\u65f6\u4f7f\u7528\u7684\u662f Grafana 10.2.2 \u7248\u672c\uff0c\u63a8\u8350\u4f7f\u7528\u8be5\u7248\u672c\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u76ee\u524d\u63d0\u4f9b\u4e24\u79cd\u5d4c\u5165\u65b9\u5f0f"}),"\n",(0,i.jsx)(n.h3,{id:"1-\u76f4\u63a5\u5d4c\u5165",children:"1. \u76f4\u63a5\u5d4c\u5165"}),"\n",(0,i.jsx)(n.p,{children:"\u76f4\u63a5\u5d4c\u5165\u6307\u4f7f\u7528 iframe \u5c06 grafana \u7684\u5b9e\u9645\u9762\u677f\u7684 url \u5d4c\u5165\u5230 scow \u7ba1\u7406\u7cfb\u7edf\u4e2d\u3002\u5c06\u5728 scow \u7ba1\u7406\u7cfb\u7edf\u7684\u5e73\u53f0\u7ba1\u7406\u4e0b\u6dfb\u52a0\u3010\u96c6\u7fa4\u76d1\u63a7\u3011-\u3010\u8d44\u6e90\u72b6\u6001\u3011\u9875\u9762\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u4fee\u6539 grafana \u914d\u7f6e\u6587\u4ef6 grafana.ini\uff0c\u6dfb\u52a0 allow_embedding \u914d\u7f6e\u5982\u4e0b\uff0c\u5141\u8bb8 grafana \u80fd\u591f\u5d4c\u5165\u9875\u9762\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"...other config\n[security]\nallow_embedding = true\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u5728 ",(0,i.jsx)(n.code,{children:"mis.yaml"})," \u6587\u4ef6\u4e2d\u6dfb\u52a0 clusterMonitor \u76f8\u5173\u914d\u7f6e"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'# \u96c6\u7fa4\u76d1\u63a7\u914d\u7f6e\nclusterMonitor:\n  # \u534f\u8bae + ip/\u57df\u540d + \u7aef\u53e3\uff0c\u9ed8\u8ba4\u4e3a http://127.0.0.1:4000\n  grafanaUrl: "http://127.0.0.1:4000"\n  # \u8d44\u6e90\u72b6\u6001\u76f8\u5173\u914d\u7f6e\n  resourceStatus:\n    # \u662f\u5426\u5f00\u542f\u8d44\u6e90\u72b6\u6001\uff0c\u9ed8\u8ba4\u4e0d\u5f00\u542f\n    enabled: true\n    # \u662f\u5426\u4f7f\u7528\u4ee3\u7406\u7684\u65b9\u5f0f\uff0c\u9ed8\u8ba4\u4e3a false\n    proxy: false\n    # \u9ed8\u8ba4\u9762\u677f id,\u9ed8\u8ba4\u8bbe\u7f6e\u4e3a shZOtO4Sk\n    dashboardUid: "shZOtO4Sk"\n\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u5c06 grafanaUrl \u66ff\u6362\u4e3a\u5b9e\u9645\u7684 grafana \u5730\u5740,\u5e76\u5c06 dashboardUid \u8bbe\u7f6e\u4e3a\u4f60\u671f\u671b\u8fdb\u5165\u8d44\u6e90\u72b6\u6001\u9875\u9762\u5c55\u793a\u7684\u9762\u677f id \u5373\u53ef\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"2-\u4ee3\u7406",children:"2. \u4ee3\u7406"}),"\n",(0,i.jsx)(n.p,{children:"\u5982\u679c\u4f60\u4e0d\u5e0c\u671b\u5c06 grafana \u7684\u5730\u5740\u516c\u5f00\uff0c\u53ef\u4ee5\u4f7f\u7528\u4ee3\u7406\u7684\u65b9\u5f0f\u5d4c\u5165 grafana \u9762\u677f\u3002\u5f00\u542f\u4ee3\u7406\u540e\uff0c\u5bf9 grafana \u7684\u8bf7\u6c42\u5c06\u53d1\u9001\u5230 scow \u7684\u540e\u7aef\u7136\u540e\u4ee3\u7406\u5230 grafana\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u4fee\u6539 grafana \u914d\u7f6e\u6587\u4ef6 grafana.ini\uff0c\u6dfb\u52a0 root_url \u548c allow_embedding \u914d\u7f6e\u3002\u5c06\u5982\u4e0b\u914d\u7f6e\u4e2d\u7684 SCOW \u5730\u5740\u66ff\u6362\u4e3a\u771f\u5b9e\u7684\u5730\u5740\u3002\u4f8b\u5982 ",(0,i.jsx)(n.code,{children:"http://127.0.0.1/mis"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"..other config\n[server]\nroot_url=[SCOW \u7ba1\u7406\u7cfb\u7edf\u5730\u5740]/api/admin/monitor/getResourceStatus\n[security]\nallow_embedding = true\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u5728 ",(0,i.jsx)(n.code,{children:"mis.yaml"})," \u6587\u4ef6\u4e2d\u6dfb\u52a0 clusterMonitor \u76f8\u5173\u914d\u7f6e"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'# \u96c6\u7fa4\u76d1\u63a7\u914d\u7f6e\nclusterMonitor:\n  # \u534f\u8bae + ip/\u57df\u540d + \u7aef\u53e3\uff0c\u9ed8\u8ba4\u4e3a http://127.0.0.1:4000\n  grafanaUrl: "http://127.0.0.1:4000"\n  # \u8d44\u6e90\u72b6\u6001\u76f8\u5173\u914d\u7f6e\n  resourceStatus:\n    # \u662f\u5426\u5f00\u542f\u8d44\u6e90\u72b6\u6001\uff0c\u9ed8\u8ba4\u4e0d\u5f00\u542f\n    enabled: true\n    # \u662f\u5426\u4f7f\u7528\u4ee3\u7406\u7684\u65b9\u5f0f\uff0c\u9ed8\u8ba4\u4e3a false\n    proxy: true\n    # \u9ed8\u8ba4\u9762\u677f id,\u9ed8\u8ba4\u8bbe\u7f6e\u4e3a shZOtO4Sk\n    dashboardUid: "shZOtO4Sk"\n\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u540c\u6837\u4f60\u9700\u8981\u5c06 grafanaUrl \u66ff\u6362\u4e3a\u5b9e\u9645\u7684 grafana \u5730\u5740,\u5e76\u5c06 dashboardUid \u8bbe\u7f6e\u4e3a\u4f60\u671f\u671b\u8fdb\u5165\u8d44\u6e90\u72b6\u6001\u9875\u9762\u5c55\u793a\u7684\u9762\u677f id\u3002\u7136\u540e\u5c06 proxy \u9009\u9879\u6539\u4e3a true \u5373\u53ef\u5f00\u542f\u4ee3\u7406\u6a21\u5f0f\u5d4c\u5165 grafana\u3002"}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"\u6ce8\u610f\uff1a\u76ee\u524d\u4ee3\u7406\u7684\u6a21\u5f0f\u6682\u4e0d\u652f\u6301 websocket \u8fde\u63a5\uff0c\u4f1a\u5f71\u54cd grafana \u90e8\u5206\u5b9e\u65f6\u6570\u636e\u66f4\u65b0\u7684\u529f\u80fd"})}),"\n",(0,i.jsx)(n.h2,{id:"\u544a\u8b66\u65e5\u5fd7",children:"\u544a\u8b66\u65e5\u5fd7"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"\u544a\u8b66\u65e5\u5fd7",src:r(44894).A+"",width:"1902",height:"910"})}),"\n",(0,i.jsxs)(n.p,{children:["\u53ef\u4ee5\u67e5\u770b\u8d44\u6e90\u8fbe\u5230\u4e00\u5b9a\u4f7f\u7528\u9650\u989d\u540e\u89e6\u53d1\u7684\u544a\u8b66\u65e5\u5fd7\uff0c\u76ee\u524d\u4ec5\u652f\u6301 scow \u63d0\u4f9b\u7684\u544a\u8b66\u89c4\u5219\u67e5\u770b\u3002\u8be6\u7ec6\u7684\u914d\u7f6e\u4fe1\u606f\u53ef\u4ee5\u67e5\u770b",(0,i.jsx)(n.a,{href:"/SCOW/pr-preview/pr-1294/docs/hpccluster/cluster-monitor/",children:"\u90e8\u7f72\u96c6\u7fa4\u76d1\u63a7"}),"\u3002\u5b8c\u6210 grafana \u6570\u636e\u6e90\u3001Prometheus\u3001Alertmanager\u3001alert-db\u7b49\u914d\u7f6e\u540e\uff0c\u4fee\u6539 ",(0,i.jsx)(n.code,{children:"mis.yaml"})," \u6587\u4ef6\uff0c\u5728 clusterMonior \u4e0b\u6dfb\u52a0\u5982\u4e0b\u914d\u7f6e\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"# \u96c6\u7fa4\u76d1\u63a7\u914d\u7f6e\nclusterMonitor:\n  # \u544a\u8b66\u65e5\u5fd7\u914d\u7f6e\n  alarmLogs:\n    # \u662f\u5426\u5f00\u542f\u544a\u8b66\u65e5\u5fd7\uff0c\u9ed8\u8ba4\u4e0d\u5f00\u542f\n    enabled: true\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u5f00\u542f\u540e\u5c06\u6dfb\u52a0\u3010\u96c6\u7fa4\u76d1\u63a7\u3011-\u3010\u544a\u8b66\u65e5\u5fd7\u3011\u9875\u9762"}),"\n",(0,i.jsx)(n.h2,{id:"\u53c2\u8003\u914d\u7f6e",children:"\u53c2\u8003\u914d\u7f6e"}),"\n",(0,i.jsxs)(n.p,{children:["\u67e5\u770b",(0,i.jsx)(n.a,{href:"/SCOW/pr-preview/pr-1294/docs/hpccluster/cluster-monitor/",children:"\u90e8\u7f72\u96c6\u7fa4\u76d1\u63a7"})]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},44894:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/alarmLog-4de6d965a6fb8d85697f231116ae54c5.png"},98447:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/resourceStatus-08081b8fb398cc77dbba5e390cf42e69.png"},5409:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>o});var i=r(48318);const s={},a=i.createContext(s);function t(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);