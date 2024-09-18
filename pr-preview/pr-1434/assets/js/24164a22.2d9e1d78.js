"use strict";(self.webpackChunk_scow_docs=self.webpackChunk_scow_docs||[]).push([[9893],{54178:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>p});var r=s(49214),l=s(5409);const c={slug:"scow-scheduler-adapter",title:"OpenSCOW\u8c03\u5ea6\u5668\u9002\u914d\u5668",authors:["quhan"],tags:["scow","scow-scheduler-adapter"]},t=void 0,i={permalink:"/OpenSCOW/pr-preview/pr-1434/blog/scow-scheduler-adapter",editUrl:"https://github.com/PKUHPC/OpenSCOW/edit/main/website/blog/blog/2023-06-26-scow-scheduler-adapter.md",source:"@site/blog/2023-06-26-scow-scheduler-adapter.md",title:"OpenSCOW\u8c03\u5ea6\u5668\u9002\u914d\u5668",description:"\u4ec0\u4e48\u662f\u8c03\u5ea6\u5668\u9002\u914d\u5668",date:"2023-06-26T00:00:00.000Z",tags:[{inline:!0,label:"scow",permalink:"/OpenSCOW/pr-preview/pr-1434/blog/tags/scow"},{inline:!0,label:"scow-scheduler-adapter",permalink:"/OpenSCOW/pr-preview/pr-1434/blog/tags/scow-scheduler-adapter"}],readingTime:2.935,hasTruncateMarker:!1,authors:[{name:"Qu Han",title:"Developer",imageURL:"https://avatars.githubusercontent.com/u/98016770",key:"quhan"}],frontMatter:{slug:"scow-scheduler-adapter",title:"OpenSCOW\u8c03\u5ea6\u5668\u9002\u914d\u5668",authors:["quhan"],tags:["scow","scow-scheduler-adapter"]},unlisted:!1,prevItem:{title:"\u4ea4\u4e92\u5f0f\u5e94\u7528\u914d\u7f6e\u66f4\u65b0",permalink:"/OpenSCOW/pr-preview/pr-1434/blog/update-portal-app"},nextItem:{title:"scow-cli",permalink:"/OpenSCOW/pr-preview/pr-1434/blog/scow-cli-release"}},d={authorsImageUrls:[void 0]},p=[{value:"\u4ec0\u4e48\u662f\u8c03\u5ea6\u5668\u9002\u914d\u5668",id:"\u4ec0\u4e48\u662f\u8c03\u5ea6\u5668\u9002\u914d\u5668",level:2},{value:"\u600e\u6837\u5b9e\u73b0\u8c03\u5ea6\u5668\u9002\u914d\u5668",id:"\u600e\u6837\u5b9e\u73b0\u8c03\u5ea6\u5668\u9002\u914d\u5668",level:2},{value:"\u5982\u4f55\u5e73\u6ed1\u5347\u7ea7",id:"\u5982\u4f55\u5e73\u6ed1\u5347\u7ea7",level:2},{value:"1. \u90e8\u7f72\u8c03\u5ea6\u5668\u9002\u914d\u5668",id:"1-\u90e8\u7f72\u8c03\u5ea6\u5668\u9002\u914d\u5668",level:3},{value:"2. \u4fee\u6539OpenSCOW\u914d\u7f6e\u6587\u4ef6",id:"2-\u4fee\u6539openscow\u914d\u7f6e\u6587\u4ef6",level:3},{value:"3. \u4e0d\u518d\u4f7f\u7528\u6e90\u4f5c\u4e1a\u4fe1\u606f\u6570\u636e\u5e93",id:"3-\u4e0d\u518d\u4f7f\u7528\u6e90\u4f5c\u4e1a\u4fe1\u606f\u6570\u636e\u5e93",level:3}];function o(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u4ec0\u4e48\u662f\u8c03\u5ea6\u5668\u9002\u914d\u5668",children:"\u4ec0\u4e48\u662f\u8c03\u5ea6\u5668\u9002\u914d\u5668"}),"\n",(0,r.jsx)(n.p,{children:"OpenSCOW\u662f\u5efa\u7acb\u5728\u5e95\u5c42\u4f5c\u4e1a\u8c03\u5ea6\u5668\u57fa\u7840\u4e0a\u7684\u7cfb\u7edf\uff0c\u5b83\u901a\u8fc7\u4e0e\u5e95\u5c42\u8c03\u5ea6\u5668\u8fdb\u884c\u529f\u80fd\u5bf9\u63a5\uff0c\u5411\u7528\u6237\u63d0\u4f9b\u5404\u79cd\u8d85\u7b97\u529f\u80fd\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u4e4b\u524d\u7684\u5b9e\u73b0\u4e2d\uff0cOpenSCOW\u76f4\u63a5\u4e0e\u4f5c\u4e1a\u8c03\u5ea6\u5668\u672c\u8eab\u4ea4\u4e92\uff0c\u56e0\u6b64OpenSCOW\u5fc5\u987b\u77e5\u9053\u5e95\u5c42\u8c03\u5ea6\u5668\u5185\u90e8\u7684\u67d0\u4e9b\u7ec6\u8282\uff0c\n\u5bfc\u81f4OpenSCOW\u5185\u90e8\u7684\u67d0\u4e9b\u4ee3\u7801\u662f\u4e0e\u8c03\u5ea6\u5668\u79cd\u7c7b\u76f4\u63a5\u76f8\u5173\u7684\uff08\u5982\u6700\u5148\u9002\u914d\u7684slurm\uff09\uff0c\u8fd9\u4f1a\u4f7f\u9002\u914d\u5176\u5b83\u8c03\u5ea6\u5668\u65f6\u6bd4\u8f83\u9ebb\u70e6\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u8c03\u5ea6\u5668\u9002\u914d\u5668\uff08",(0,r.jsx)(n.code,{children:"scheduler-adapter"}),"\uff09\u5219\u662f\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e00\u95ee\u9898\uff0c\u901a\u8fc7\u4e00\u5c42\u9002\u914d\u5668\u5c42\uff0cOpenSCOW\u53ea\u4e0e\u9002\u914d\u5668\u8fdb\u884c\u4ea4\u4e92\uff0c\n\u9002\u914d\u5668\u518d\u5bf9\u63a5\u4f5c\u4e1a\u8c03\u5ea6\u5668\uff0c\u5b9e\u73b0OpenSCOW\u9700\u8981\u7684\u8c03\u5ea6\u5668\u529f\u80fd\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u600e\u6837\u5b9e\u73b0\u8c03\u5ea6\u5668\u9002\u914d\u5668",children:"\u600e\u6837\u5b9e\u73b0\u8c03\u5ea6\u5668\u9002\u914d\u5668"}),"\n",(0,r.jsxs)(n.p,{children:["\u8c03\u5ea6\u5668\u9002\u914d\u5668\u672c\u8d28\u4e0a\u662f\u4e00\u4e2agRPC\u670d\u52a1\u5668\uff0c\u5b83\u5b9e\u73b0\u4e86OpenSCOW\u5b9a\u4e49\u7684\u4e00\u5957",(0,r.jsx)(n.a,{href:"https://github.com/PKUHPC/scow-scheduler-adapter-interface",children:"\u63a5\u53e3"}),"\uff0c\nOpenSCOW\u53ea\u4f1a\u8c03\u7528\u8fd9\u5957\u63a5\u53e3\u6765\u5b9e\u73b0\u8c03\u5ea6\u5668\u529f\u80fd\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u56e0\u6b64\uff0c\u53ea\u9700\u8981\u4e3a\u5bf9\u5e94\u79cd\u7c7b\u7684\u4f5c\u4e1a\u8c03\u5ea6\u5668\u5b9e\u73b0\u8fd9\u6837\u4e00\u4e2agRPC\u670d\u52a1\u5668\uff0c\u6ee1\u8db3\u4e0a\u8ff0\u63a5\u53e3\u5b9a\u4e49\uff0c\u5c31\u80fd\u591f\u8f7b\u677e\u5bf9\u63a5OpenSCOW\u7cfb\u7edf"}),"\n",(0,r.jsx)(n.p,{children:"\u6211\u4eec\u5df2\u7ecf\u5b9e\u73b0\u7684\u8c03\u5ea6\u5668\u9002\u914d\u5668\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/PKUHPC/scow-slurm-adapter",children:"slurm"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u5982\u4f55\u5e73\u6ed1\u5347\u7ea7",children:"\u5982\u4f55\u5e73\u6ed1\u5347\u7ea7"}),"\n",(0,r.jsx)(n.p,{children:"\u8fd9\u4e00\u90e8\u5206\u4ecb\u7ecd\u5982\u4f55\u4ece\u65e7\u7248\u672cOpenSCOW\u5347\u7ea7\u81f3\u65b0\u7248\u672c\uff0c\u4f7f\u7528\u8c03\u5ea6\u5668\u9002\u914d\u5668"}),"\n",(0,r.jsx)(n.h3,{id:"1-\u90e8\u7f72\u8c03\u5ea6\u5668\u9002\u914d\u5668",children:"1. \u90e8\u7f72\u8c03\u5ea6\u5668\u9002\u914d\u5668"}),"\n",(0,r.jsx)(n.p,{children:"\u9996\u5148\u9700\u8981\u786e\u4fdd\u60a8\u7684\u96c6\u7fa4\u4e0a\u90e8\u7f72\u4e86\u5bf9\u5e94\u7684\u8c03\u5ea6\u5668\u9002\u914d\u5668\uff0c\u5f97\u5230\u8bbf\u95ee\u5b83\u7684\u5730\u5740\u53ca\u7aef\u53e3\u53f7"}),"\n",(0,r.jsx)(n.p,{children:"\u90e8\u7f72\u9002\u914d\u5668\u53ef\u53c2\u8003\u6587\u6863\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/PKUHPC/scow-slurm-adapter",children:"slurm"})}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"2-\u4fee\u6539openscow\u914d\u7f6e\u6587\u4ef6",children:"2. \u4fee\u6539OpenSCOW\u914d\u7f6e\u6587\u4ef6"}),"\n",(0,r.jsxs)(n.p,{children:["\u9996\u5148\u786e\u4fdd\u60a8\u4f7f\u7528\u4e86\u6700\u65b0\u7684OpenSCOW\u955c\u50cf\uff08\u53ef\u67e5\u770b",(0,r.jsx)(n.code,{children:"install.yaml"}),"\u4e2d\u7684",(0,r.jsx)(n.code,{children:"imageTag"}),"\u5b57\u6bb5\uff09"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u7528\u4e8e\u90e8\u7f72OpenSCOW\u7684",(0,r.jsx)(n.code,{children:"scow-deployment"}),"\u6587\u4ef6\u5939\u4e2d\uff0c\u4fee\u6539\u914d\u7f6e\u6587\u4ef6\uff1a"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u9996\u5148\u4fee\u6539",(0,r.jsx)(n.a,{href:"https://PKUHPC.github.io/OpenSCOW/pr-preview/pr-1434/docs/deploy/config/cluster-config",children:"\u96c6\u7fa4\u914d\u7f6e\u6587\u4ef6"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u4e3b\u8981\u53d8\u5316\u4e3a\u5220\u9664",(0,r.jsx)(n.code,{children:"slurm"}),"\u914d\u7f6e\u9879, \u5c06",(0,r.jsx)(n.code,{children:"loginNodes"}),"\u914d\u7f6e\u9879\u4f5c\u4e3a\u72ec\u7acb\u7684\u4e00\u9879\u914d\u7f6e\u3002\u65b0\u589e",(0,r.jsx)(n.code,{children:"adapterUrl"}),"\u914d\u7f6e\u9879\uff0c\u6807\u8bc6\u9002\u914d\u5668\u5730\u5740"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u4fee\u6539",(0,r.jsx)(n.a,{href:"https://PKUHPC.github.io/OpenSCOW/pr-preview/pr-1434/docs/deploy/config/mis/intro",children:"\u7ba1\u7406\u7cfb\u7edf\u914d\u7f6e\u6587\u4ef6"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u5220\u9664\u4e86",(0,r.jsx)(n.code,{children:"fetchJobs"}),"\u914d\u7f6e\u9879\u4e2d\u7684",(0,r.jsx)(n.code,{children:"db"}),"\u9879\uff0c\u5373\u4e0d\u518d\u91c7\u7528\u6e90\u4f5c\u4e1a\u4fe1\u606f\u6570\u636e\u5e93\uff0c\u901a\u8fc7\u9002\u914d\u5668\u540c\u6b65\u4f5c\u4e1a\u4fe1\u606f"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"3-\u4e0d\u518d\u4f7f\u7528\u6e90\u4f5c\u4e1a\u4fe1\u606f\u6570\u636e\u5e93",children:"3. \u4e0d\u518d\u4f7f\u7528\u6e90\u4f5c\u4e1a\u4fe1\u606f\u6570\u636e\u5e93"}),"\n",(0,r.jsxs)(n.p,{children:["\u90e8\u7f72\u4f7f\u7528\u9002\u914d\u5668\u540e\uff0c\u53ef\u4ee5\u4e0d\u518d\u90e8\u7f72",(0,r.jsx)(n.a,{href:"https://github.com/PKUHPC/export-jobs",children:(0,r.jsx)(n.code,{children:"export-jobs"})}),"\u9879\u76ee\uff0c\u540c\u6b65\u4f5c\u4e1a\u4fe1\u606f\u7684\u529f\u80fd\u7531\u9002\u914d\u5668\u5b8c\u6210"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},5409:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>i});var r=s(48318);const l={},c=r.createContext(l);function t(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);