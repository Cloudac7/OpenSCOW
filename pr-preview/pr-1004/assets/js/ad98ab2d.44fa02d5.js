"use strict";(self.webpackChunk_scow_docs=self.webpackChunk_scow_docs||[]).push([[8388],{32330:(o,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>t,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>h});var i=n(35250),s=n(57766);const r={sidebar_position:3,title:"SCOW Hook"},t="SCOW Hook",c={id:"integration/scow-api-hook/hook",title:"SCOW Hook",description:"\u5982\u679c\u7528\u6237\u914d\u7f6e\u4e86SCOW Hook\uff0c\u90a3\u4e48SCOW\u5728\u53d1\u751f\u4e00\u4e9b\u4e8b\u4ef6\u65f6\uff0c\u4f1a\u901a\u8fc7SCOW Hook\u8c03\u7528\u76d1\u542c\u7684Hook\u670d\u52a1\u5668\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7SCOW Hook\u76d1\u542cSCOW\u4e2d\u53d1\u751f\u7684\u4e8b\u4ef6\uff0c\u5e76\u81ea\u5df1\u8fdb\u884c\u4e00\u4e9b\u540e\u7eed\u5904\u7406\u3002",source:"@site/docs/integration/scow-api-hook/hook.md",sourceDirName:"integration/scow-api-hook",slug:"/integration/scow-api-hook/hook",permalink:"/SCOW/pr-preview/pr-1004/docs/integration/scow-api-hook/hook",draft:!1,unlisted:!1,editUrl:"https://github.com/PKUHPC/SCOW/edit/main/website/docs/integration/scow-api-hook/hook.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"SCOW Hook"},sidebar:"integration",previous:{title:"SCOW API",permalink:"/SCOW/pr-preview/pr-1004/docs/integration/scow-api-hook/api"},next:{title:"\u4f7f\u7528\u793a\u4f8b",permalink:"/SCOW/pr-preview/pr-1004/docs/category/\u4f7f\u7528\u793a\u4f8b"}},l={},h=[{value:"SCOW\u670d\u52a1\u8fde\u63a5\u5230Hook\u670d\u52a1",id:"scow\u670d\u52a1\u8fde\u63a5\u5230hook\u670d\u52a1",level:2},{value:"\u5b9e\u9645\u9879\u76ee\u793a\u4f8b",id:"\u5b9e\u9645\u9879\u76ee\u793a\u4f8b",level:2}];function a(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...o.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"scow-hook",children:"SCOW Hook"}),"\n",(0,i.jsx)(e.p,{children:"\u5982\u679c\u7528\u6237\u914d\u7f6e\u4e86SCOW Hook\uff0c\u90a3\u4e48SCOW\u5728\u53d1\u751f\u4e00\u4e9b\u4e8b\u4ef6\u65f6\uff0c\u4f1a\u901a\u8fc7SCOW Hook\u8c03\u7528\u76d1\u542c\u7684Hook\u670d\u52a1\u5668\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7SCOW Hook\u76d1\u542cSCOW\u4e2d\u53d1\u751f\u7684\u4e8b\u4ef6\uff0c\u5e76\u81ea\u5df1\u8fdb\u884c\u4e00\u4e9b\u540e\u7eed\u5904\u7406\u3002"}),"\n",(0,i.jsxs)(e.p,{children:["\u4f1a\u8c03\u7528Hook\u7684\u4e8b\u4ef6\u8bf7\u53c2\u8003",(0,i.jsx)(e.a,{href:"https://github.com/PKUHPC/SCOW/blob/master/protos/hook/hook.proto",children:(0,i.jsx)(e.code,{children:"protos/hook/hook.proto"})}),"\u6587\u4ef6\u4e2d",(0,i.jsx)(e.code,{children:"OnEventRequest"}),"\u6d88\u606f\u7684",(0,i.jsx)(e.code,{children:"message"}),"\u5c5e\u6027\u3002"]}),"\n",(0,i.jsx)(e.p,{children:"\u8981\u4f7f\u7528SCOW Hook\uff0c\u60a8\u9700\u8981\uff1a"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"/SCOW/pr-preview/pr-1004/docs/integration/scow-api-hook/proto",children:"\u83b7\u53d6SCOW Protobuf\u6587\u4ef6"}),"\u5e76\u751f\u6210\u4ee3\u7801"]}),"\n",(0,i.jsxs)(e.li,{children:["\u6839\u636e",(0,i.jsx)(e.code,{children:"hook"}),"\u76ee\u5f55\u4e0b\u7684",(0,i.jsx)(e.code,{children:"proto"}),"\u6587\u4ef6\u5b9e\u73b0\u5176\u4e2d\u5b9a\u4e49\u7684gRPC\u670d\u52a1"]}),"\n",(0,i.jsx)(e.li,{children:"\u542f\u52a8\u60a8\u7684gRPC\u670d\u52a1\u5668"}),"\n",(0,i.jsx)(e.li,{children:"\u5728SCOW\u4e2d\u914d\u7f6eSCOW Hook\u529f\u80fd"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-yaml",metastring:'title="config/common.yaml"',children:"scowHook:\n  url: \u60a8\u7684gRPC\u670d\u52a1\u5668\u7684\u5730\u5740\n"})}),"\n",(0,i.jsxs)(e.ol,{start:"5",children:["\n",(0,i.jsx)(e.li,{children:"\u91cd\u542fSCOW"}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"scow\u670d\u52a1\u8fde\u63a5\u5230hook\u670d\u52a1",children:"SCOW\u670d\u52a1\u8fde\u63a5\u5230Hook\u670d\u52a1"}),"\n",(0,i.jsxs)(e.p,{children:["\u8bf7\u6ce8\u610f\uff0cSCOW\u7684\u670d\u52a1\u5668\u662f\u8fd0\u884c\u5728\u5bb9\u5668\u4e2d\u7684\uff0c\u901a\u8fc7",(0,i.jsx)(e.code,{children:"localhost"}),"\u65e0\u6cd5\u8bbf\u95ee\u5230\u8fd0\u884c\u5230SCOW\u8282\u70b9\u4e0a\u7684\u670d\u52a1\u3002\u5f53\u8bbe\u5b9ahook\u7684URL\u65f6\uff0c\u8bf7\u4f7f\u7528\u670d\u52a1\u5728\u60a8\u7684\u5c40\u57df\u7f51\u4e2d\u7684\u5730\u5740\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["\u5982\u679c\u60a8\u4e0d\u786e\u5b9a\u4e00\u4e2a\u5730\u5740\u662f\u5426\u80fd\u4ece\u5bb9\u5668\u4e2d\u8fde\u63a5\uff0c\u60a8\u53ef\u4ee5\u624b\u52a8\u5728\u5bb9\u5668\u4e2d\u8fd0\u884c",(0,i.jsx)(e.code,{children:"ping"}),"\u7b49\u547d\u4ee4\u5c1d\u8bd5\u662f\u5426\u80fd\u5230\u8fbe\u60a8\u7684Hook\u670d\u52a1\uff1a"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"./cli compose exec mis-server sh\nping \u60a8\u7684gRPC\u670d\u52a1\u5668\u7684\u5730\u5740\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u5b9e\u9645\u9879\u76ee\u793a\u4f8b",children:"\u5b9e\u9645\u9879\u76ee\u793a\u4f8b"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"/SCOW/pr-preview/pr-1004/docs/integration/scow-api-hook/examples/go#%E5%AE%9E%E7%8E%B0%E5%B9%B6%E6%B3%A8%E5%86%8Cscow-hook",children:"Go"})}),"\n"]})]})}function d(o={}){const{wrapper:e}={...(0,s.a)(),...o.components};return e?(0,i.jsx)(e,{...o,children:(0,i.jsx)(a,{...o})}):a(o)}},57766:(o,e,n)=>{n.d(e,{Z:()=>c,a:()=>t});var i=n(70079);const s={},r=i.createContext(s);function t(o){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof o?o(e):{...e,...o}}),[e,o])}function c(o){let e;return e=o.disableParentContext?"function"==typeof o.components?o.components(s):o.components||s:t(o.components),i.createElement(r.Provider,{value:e},o.children)}}}]);