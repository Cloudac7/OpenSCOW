"use strict";(self.webpackChunk_scow_docs=self.webpackChunk_scow_docs||[]).push([[6634],{58239:(o,e,r)=>{r.r(e),r.d(e,{assets:()=>d,contentTitle:()=>t,default:()=>a,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var n=r(49214),i=r(5409);const s={sidebar_position:1,title:"SCOW Protobuf\u6587\u4ef6"},t="SCOW Protobuf\u6587\u4ef6",c={id:"integration/scow-api-hook/proto",title:"SCOW Protobuf\u6587\u4ef6",description:"SCOW API\u548cHook\u7684\u6570\u636e\u7ed3\u6784\u548c\u670d\u52a1\u90fd\u901a\u8fc7Protocol Buffer\u683c\u5f0f\u7edf\u4e00\u5b9a\u4e49\u5e76\u5206\u53d1\u3002\u8981\u60f3\u4f7f\u7528SCOW API\u548cHook\uff0c\u60a8\u9700\u8981\u9996\u5148\u83b7\u53d6proto\u6587\u4ef6\uff0c\u901a\u8fc7proto\u6587\u4ef6\u751f\u6210\u60a8\u5bf9\u5e94\u7684\u8bed\u8a00\u7684\u4ee3\u7801\uff0c\u7136\u540e\u624d\u80fd\u8fdb\u884c\u5f00\u53d1\u3002",source:"@site/docs/integration/scow-api-hook/proto.md",sourceDirName:"integration/scow-api-hook",slug:"/integration/scow-api-hook/proto",permalink:"/SCOW/pr-preview/pr-1292/docs/integration/scow-api-hook/proto",draft:!1,unlisted:!1,editUrl:"https://github.com/PKUHPC/SCOW/edit/main/website/docs/integration/scow-api-hook/proto.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"SCOW Protobuf\u6587\u4ef6"},sidebar:"integration",previous:{title:"\u6570\u636e\u7edf\u8ba1\u76f8\u5173API",permalink:"/SCOW/pr-preview/pr-1292/docs/integration/scow-api-hook/api/statistic"},next:{title:"SCOW Hook",permalink:"/SCOW/pr-preview/pr-1292/docs/integration/scow-api-hook/hook"}},d={},l=[{value:"\u83b7\u53d6Proto\u6587\u4ef6",id:"\u83b7\u53d6proto\u6587\u4ef6",level:2},{value:"1. \u4f7f\u7528Buf\u83b7\u53d6\u548c\u751f\u6210\u4ee3\u7801\uff08\u63a8\u8350\uff09",id:"1-\u4f7f\u7528buf\u83b7\u53d6\u548c\u751f\u6210\u4ee3\u7801\u63a8\u8350",level:3},{value:"2. \u901a\u8fc7npm\u83b7\u53d6proto\u6587\u4ef6",id:"2-\u901a\u8fc7npm\u83b7\u53d6proto\u6587\u4ef6",level:3},{value:"API\u7248\u672c\u63a7\u5236",id:"api\u7248\u672c\u63a7\u5236",level:2}];function p(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...o.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"scow-protobuf\u6587\u4ef6",children:"SCOW Protobuf\u6587\u4ef6"}),"\n",(0,n.jsxs)(e.p,{children:["SCOW API\u548cHook\u7684\u6570\u636e\u7ed3\u6784\u548c\u670d\u52a1\u90fd\u901a\u8fc7",(0,n.jsx)(e.a,{href:"https://protobuf.dev/",children:"Protocol Buffer"}),"\u683c\u5f0f\u7edf\u4e00\u5b9a\u4e49\u5e76\u5206\u53d1\u3002\u8981\u60f3\u4f7f\u7528SCOW API\u548cHook\uff0c\u60a8\u9700\u8981\u9996\u5148\u83b7\u53d6proto\u6587\u4ef6\uff0c\u901a\u8fc7proto\u6587\u4ef6\u751f\u6210\u60a8\u5bf9\u5e94\u7684\u8bed\u8a00\u7684\u4ee3\u7801\uff0c\u7136\u540e\u624d\u80fd\u8fdb\u884c\u5f00\u53d1\u3002"]}),"\n",(0,n.jsx)(e.h2,{id:"\u83b7\u53d6proto\u6587\u4ef6",children:"\u83b7\u53d6Proto\u6587\u4ef6"}),"\n",(0,n.jsxs)(e.p,{children:["\u6211\u4eec\u5c06SCOW API\u548cHook\u7684proto\u6587\u4ef6\u653e\u5230\u4e86\u4ee3\u7801\u4ed3\u5e93\u4e2d\uff0c\u60a8\u53ef\u4ee5\u76f4\u63a5\u4ece\u4ee3\u7801\u4ed3\u5e93\u4e2d\u83b7\u53d6\u3002\u4ee3\u7801\u4ed3\u5e93\u4e2d",(0,n.jsx)(e.code,{children:"protos"}),"\u76ee\u5f55\u4e0b\u5219\u4e3aproto\u6587\u4ef6\uff1a",(0,n.jsx)(e.a,{href:"https://github.com/PKUHPC/SCOW/blob/master/protos",children:"master\u5206\u652fprotos\u76ee\u5f55\u94fe\u63a5"})]}),"\n",(0,n.jsxs)(e.p,{children:["proto\u6587\u4ef6\u5206\u4e3a",(0,n.jsx)(e.code,{children:"common"}),", ",(0,n.jsx)(e.code,{children:"portal"}),", ",(0,n.jsx)(e.code,{children:"server"}),", ",(0,n.jsx)(e.code,{children:"audit"}),"\u548c",(0,n.jsx)(e.code,{children:"hook"}),"\u3002\u5176\u4e2d\uff0c"]}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.code,{children:"common"}),"\u4e2d\u5b9a\u4e49\u4e86\u516c\u7528\u7684\u6570\u636e\u7ed3\u6784"]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.code,{children:"portal"}),"\u5b9a\u4e49\u4e86\u95e8\u6237\u7cfb\u7edf\u7684SCOW API\u3002",(0,n.jsx)(e.code,{children:"portal-server"}),"\u95e8\u6237\u7cfb\u7edf\u540e\u7aef\u5b9e\u73b0\u4e86",(0,n.jsx)(e.code,{children:"portal"}),"\u4e2d\u5b9a\u4e49\u7684\u670d\u52a1\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7",(0,n.jsx)(e.code,{children:"portal"}),"\u4e0b\u7684\u6587\u4ef6\u4e0e",(0,n.jsx)(e.code,{children:"portal-server"}),"\u4ea4\u4e92"]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.code,{children:"server"}),"\u5b9a\u4e49\u4e86\u7ba1\u7406\u7cfb\u7edf\u7684SCOW API\u3002",(0,n.jsx)(e.code,{children:"mis-server"}),"\u7ba1\u7406\u7cfb\u7edf\u540e\u7aef\u5b9e\u73b0\u4e86",(0,n.jsx)(e.code,{children:"server"}),"\u4e2d\u5b9a\u4e49\u7684\u670d\u52a1\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7",(0,n.jsx)(e.code,{children:"server"}),"\u4e0b\u7684\u6587\u4ef6\u4e0e",(0,n.jsx)(e.code,{children:"mis-server"}),"\u4ea4\u4e92"]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.code,{children:"audit"}),"\u5b9a\u4e49\u4e86\u5ba1\u8ba1\u7cfb\u7edf\u7684SCOW API\u3002",(0,n.jsx)(e.code,{children:"audit-server"}),"\u5ba1\u8ba1\u7cfb\u7edf\u7cfb\u7edf\u540e\u7aef\u5b9e\u73b0\u4e86",(0,n.jsx)(e.code,{children:"audit"}),"\u4e2d\u5b9a\u4e49\u7684\u670d\u52a1\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7",(0,n.jsx)(e.code,{children:"audit"}),"\u4e0b\u7684\u6587\u4ef6\u4e0e",(0,n.jsx)(e.code,{children:"audit-server"}),"\u4ea4\u4e92"]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.code,{children:"hook"}),"\u5b9a\u4e49\u4e86SCOW Hook\u7684\u4e8b\u4ef6\u548c\u670d\u52a1\u3002",(0,n.jsx)(e.code,{children:"portal-server"}),"\u548c",(0,n.jsx)(e.code,{children:"mis-server"}),"\u5c06\u4f1a\u901a\u8fc7",(0,n.jsx)(e.code,{children:"hook"}),"\u4e0b\u7684\u6587\u4ef6\u4e0e\u60a8\u914d\u7f6e\u7684SCOW Hook\u670d\u52a1\u5668\u4ea4\u4e92"]}),"\n"]}),"\n",(0,n.jsx)(e.p,{children:"\u9664\u4e86\u76f4\u63a5\u4ece\u4ee3\u7801\u4ed3\u5e93\u4e2d\u83b7\u53d6\uff0c\u6211\u4eec\u66f4\u63a8\u8350\u4f7f\u7528\u5de5\u5177\u83b7\u53d6Protobuf\u6587\u4ef6\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u83b7\u53d6\u5230SCOW\u7684Protobuf\u6587\u4ef6"}),"\n",(0,n.jsx)(e.h3,{id:"1-\u4f7f\u7528buf\u83b7\u53d6\u548c\u751f\u6210\u4ee3\u7801\u63a8\u8350",children:"1. \u4f7f\u7528Buf\u83b7\u53d6\u548c\u751f\u6210\u4ee3\u7801\uff08\u63a8\u8350\uff09"}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.a,{href:"https://buf.build/docs/tutorials/getting-started-with-buf-cli/",children:"Buf"}),"\u662f\u4e00\u4e2a\u7ba1\u7406gRPC API\u548cproto\u6587\u4ef6\u7684\u4e00\u7ad9\u5f0f\u5de5\u5177\uff0c\u53ef\u5b8c\u6210\u83b7\u53d6\u6587\u4ef6\u3001\u751f\u6210\u4ee3\u7801\u7b49\u5e38\u89c1\u529f\u80fd\u3002\u6211\u4eec\u63a8\u8350\u901a\u8fc7\u4f7f\u7528Buf\u76f4\u63a5\u4eceGitHub\u4e0a\u83b7\u53d6\u4ee3\u7801\u5e76\u751f\u6210\u60a8\u7684\u8bed\u8a00\u7684\u6a21\u677f\u7684\u4ee3\u7801\u7684\u5de5\u4f5c\u3002"]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-bash",children:"# \u4f7f\u7528\u672c\u5730buf.gen.yaml\u751f\u6210\u6a21\u677f\uff0c\u4f7f\u7528v0.3.0\u7248\u672c\u7684SCOW API(v0.3.0\u5f00\u59cb\u53ef\u4ee5\u901a\u8fc7\u6b64\u65b9\u5f0f\uff0c\u63a8\u8350)\nbuf generate --template buf.gen.yaml https://github.com/PKUHPC/SCOW.git#subdir=protos,branch=api-v0.3.0\n\n# \u4f7f\u7528\u672c\u5730buf.gen.yaml\u751f\u6210\u6a21\u677f\uff0c\u4f7f\u7528SCOW\u4ed3\u5e93\u7684master\u5206\u652f\u7684\u4ee3\u7801\u5bf9\u5e94\u7684SCOW API\nbuf generate --template buf.gen.yaml https://github.com/PKUHPC/SCOW.git#subdir=protos,branch=master\n"})}),"\n",(0,n.jsx)(e.p,{children:"\u8be6\u7ec6\u7684\u793a\u4f8b\u8bf7\u53c2\u8003\uff1a"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:(0,n.jsx)(e.a,{href:"/SCOW/pr-preview/pr-1292/docs/integration/scow-api-hook/examples/go#%E4%BD%BF%E7%94%A8buf%E8%8E%B7%E5%8F%96proto%E6%96%87%E4%BB%B6%E5%B9%B6%E7%94%9F%E6%88%90%E4%BB%A3%E7%A0%81",children:"Go"})}),"\n"]}),"\n",(0,n.jsx)(e.h3,{id:"2-\u901a\u8fc7npm\u83b7\u53d6proto\u6587\u4ef6",children:"2. \u901a\u8fc7npm\u83b7\u53d6proto\u6587\u4ef6"}),"\n",(0,n.jsxs)(e.p,{children:["\u60a8\u53ef\u4ee5\u901a\u8fc7npm\u4ece",(0,n.jsx)(e.code,{children:"npmjs.org"}),"\u4e0a\u83b7\u53d6\u4efb\u610f\u7248\u672c\u7684proto\u6587\u4ef6"]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-bash",children:"# \u6700\u65b0\u7248\u672c\u7684API\u6587\u4ef6\nnpm install -g @scow/grpc-api\n\n# \u7279\u5b9a\u7248\u672c(0.1.2)\u7684API\nnpm install -g @scow/grpc-api@0.1.2\n\n# \u5b89\u88c5\u597d\u540e\uff0c\u53ef\u4ee5\u53bbnpm\u7684\u5168\u5c40\u6a21\u5757\u7684\u76ee\u5f55\u4e2d\u67e5\u627e\u5230\u8fd9\u4e2a\u5305\uff0c\u5e76\u83b7\u53d6\u5185\u90e8\u7684\u6587\u4ef6\ncd $(npm root -g)/@scow/grpc-api\n\n# \u5982\u679c\u60a8\u4f7f\u7528npm\u5bf9\u60a8\u7684\u9879\u76ee\u8fdb\u884c\u4f9d\u8d56\u7ba1\u7406\uff0c\u5219\u53ef\u4ee5\u5728\u60a8\u7684\u9879\u76ee\u4e2d\u5b89\u88c5\u6b64\u5305\uff0c\u5e76\u76f4\u63a5\u5728\u6b64\u5305\u7684node_modules\u4e2d\u83b7\u53d6\u5230proto\u6587\u4ef6\nnpm install --save @scow/grpc-api\ncd node_modules/@scow/grpc-api\n"})}),"\n",(0,n.jsx)(e.h2,{id:"api\u7248\u672c\u63a7\u5236",children:"API\u7248\u672c\u63a7\u5236"}),"\n",(0,n.jsxs)(e.p,{children:["\u6211\u4eec\u901a\u8fc7npm\u4ee5\u53capackage.json\u6587\u4ef6\u5bf9API\u7248\u672c\u8fdb\u884c\u63a7\u5236\u3002\u5f53\u524d\u7684\u7248\u672c\u4e3a\uff1a",(0,n.jsx)(e.img,{src:"https://img.shields.io/npm/v/@scow/grpc-api?label=%40scow%2Fgrpc-api",alt:"npm"})]}),"\n",(0,n.jsxs)(e.p,{children:["API\u7684\u7248\u672c\u901a\u8fc7",(0,n.jsx)(e.code,{children:"@scow/grpc-api"}),"\u5305\u7684\u7248\u672c\u8fdb\u884c\u5b9a\u4e49\u3002SCOW gRPC API\u7248\u672c\u63a7\u5236\u539f\u5219\uff1a"]}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"\u4e0d\u5f71\u54cdAPI\u7684\u4fee\u6539\uff0c\u4f8b\u5982lint\u6587\u4ef6\uff1a\u63d0\u9ad8PATCH\u53f7"}),"\n",(0,n.jsx)(e.li,{children:"\u4fee\u6539\u4e86API\uff0c\u4f46\u662f\u517c\u5bb9\u5f53\u524d\u7684API\uff1a\u63d0\u9ad8MINOR\u53f7"}),"\n",(0,n.jsx)(e.li,{children:"\u4e0d\u517c\u5bb9\u5df2\u6709\u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u63d0\u9ad8MAJOR\u7248\u672c"}),"\n"]}),"\n",(0,n.jsx)(e.p,{children:"\u5f53\u524d\uff0c\u6211\u4eec\u5e76\u4e0d\u4fdd\u8bc1\u65b0\u7248\u672cSCOW\u5bf9\u8001\u7248\u672cAPI\u7684\u517c\u5bb9\u6027\u3002SCOW\u6bcf\u6b21\u53d1\u5e03\u7248\u672c\u65f6\uff0c\u4f1a\u540c\u65f6\u516c\u5e03\u6b64\u7248\u672c\u652f\u6301\u7684SCOW API\u7684\u7248\u672c\u53f7\u3002"})]})}function a(o={}){const{wrapper:e}={...(0,i.R)(),...o.components};return e?(0,n.jsx)(e,{...o,children:(0,n.jsx)(p,{...o})}):p(o)}},5409:(o,e,r)=>{r.d(e,{R:()=>t,x:()=>c});var n=r(48318);const i={},s=n.createContext(i);function t(o){const e=n.useContext(s);return n.useMemo((function(){return"function"==typeof o?o(e):{...e,...o}}),[e,o])}function c(o){let e;return e=o.disableParentContext?"function"==typeof o.components?o.components(i):o.components||i:t(o.components),n.createElement(s.Provider,{value:e},o.children)}}}]);