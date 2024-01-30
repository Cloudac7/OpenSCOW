"use strict";(self.webpackChunk_scow_docs=self.webpackChunk_scow_docs||[]).push([[9931],{12198:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>t,toc:()=>l});var i=n(35250),s=n(57766);const o={sidebar_position:2,title:"SCOW API"},c="SCOW API",t={id:"integration/scow-api-hook/api",title:"SCOW API",description:"SCOW\u7cfb\u7edf\u603b\u4f53\u6765\u8bf4\u5206\u4e3a\u524d\u7aef\u548c\u540e\u7aef\u90e8\u5206\uff08\u67b6\u6784\uff09\uff0cSCOW\u7684\u524d\u7aef\u548c\u540e\u7aef\u90e8\u5206\u4f7f\u7528gRPC\u8fdb\u884c\u901a\u4fe1\u3002",source:"@site/docs/integration/scow-api-hook/api.md",sourceDirName:"integration/scow-api-hook",slug:"/integration/scow-api-hook/api",permalink:"/SCOW/pr-preview/pr-1017/docs/integration/scow-api-hook/api",draft:!1,unlisted:!1,editUrl:"https://github.com/PKUHPC/SCOW/edit/main/website/docs/integration/scow-api-hook/api.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"SCOW API"},sidebar:"integration",previous:{title:"SCOW Protobuf\u6587\u4ef6",permalink:"/SCOW/pr-preview/pr-1017/docs/integration/scow-api-hook/proto"},next:{title:"SCOW Hook",permalink:"/SCOW/pr-preview/pr-1017/docs/integration/scow-api-hook/hook"}},d={},l=[{value:"\u6253\u5f00\u540e\u7aef\u670d\u52a1\u7f51\u7edc\u63a5\u53e3",id:"\u6253\u5f00\u540e\u7aef\u670d\u52a1\u7f51\u7edc\u63a5\u53e3",level:2},{value:"API\u8ba4\u8bc1",id:"api\u8ba4\u8bc1",level:2},{value:"\u9759\u6001Token\u8ba4\u8bc1",id:"\u9759\u6001token\u8ba4\u8bc1",level:3},{value:"\u5b9e\u9645\u9879\u76ee\u793a\u4f8b",id:"\u5b9e\u9645\u9879\u76ee\u793a\u4f8b",level:2}];function a(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h1,{id:"scow-api",children:"SCOW API"}),"\n",(0,i.jsxs)(r.p,{children:["SCOW\u7cfb\u7edf\u603b\u4f53\u6765\u8bf4\u5206\u4e3a\u524d\u7aef\u548c\u540e\u7aef\u90e8\u5206\uff08",(0,i.jsx)(r.a,{href:"/SCOW/pr-preview/pr-1017/docs/deploy/architecture/",children:"\u67b6\u6784"}),"\uff09\uff0cSCOW\u7684\u524d\u7aef\u548c\u540e\u7aef\u90e8\u5206\u4f7f\u7528gRPC\u8fdb\u884c\u901a\u4fe1\u3002"]}),"\n",(0,i.jsx)(r.p,{children:"\u8981\u4f7f\u7528SCOW API\uff0c\u60a8\u9700\u8981"}),"\n",(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"/SCOW/pr-preview/pr-1017/docs/integration/scow-api-hook/proto",children:"\u83b7\u53d6SCOW Protobuf\u6587\u4ef6"}),"\u5e76\u751f\u6210\u76f8\u5173\u4ee3\u7801"]}),"\n",(0,i.jsxs)(r.li,{children:["\u7f16\u5199\u7a0b\u5e8f\uff0c\u8c03\u7528gRPC API\u4e0eSCOW\u7684\u540e\u7aef\u90e8\u5206\u7ec4\u4ef6",(0,i.jsx)(r.code,{children:"mis-server"}),", ",(0,i.jsx)(r.code,{children:"portal-server"}),", ",(0,i.jsx)(r.code,{children:"audit-server"}),"\u4ea4\u4e92"]}),"\n"]}),"\n",(0,i.jsx)(r.h2,{id:"\u6253\u5f00\u540e\u7aef\u670d\u52a1\u7f51\u7edc\u63a5\u53e3",children:"\u6253\u5f00\u540e\u7aef\u670d\u52a1\u7f51\u7edc\u63a5\u53e3"}),"\n",(0,i.jsxs)(r.p,{children:["\u90e8\u7f72\u597d\u7684\u7cfb\u7edf\u7684\u540e\u7aef\u670d\u52a1\u5bb9\u5668",(0,i.jsx)(r.code,{children:"mis-server"}),", ",(0,i.jsx)(r.code,{children:"portal-server"}),", ",(0,i.jsx)(r.code,{children:"audit-server"}),"\u4f4d\u4e8edocker compose\u521b\u5efa\u7684\u7f51\u7edc\u4e2d\uff0c\u4ece\u5916\u754c\u65e0\u6cd5\u76f4\u63a5\u8bbf\u95ee",(0,i.jsx)(r.code,{children:"mis-server"}),", ",(0,i.jsx)(r.code,{children:"portal-server"}),"\u548c",(0,i.jsx)(r.code,{children:"audit-server"}),"\u670d\u52a1\u3002"]}),"\n",(0,i.jsxs)(r.p,{children:["\u8981\u60f3\u8bbf\u95ee\u8fd9\u4e9b\u670d\u52a1\uff0c\u60a8\u9700\u8981\u901a\u8fc7",(0,i.jsx)(r.code,{children:"install.yaml"}),"\u5c06\u4e3b\u673a\u4e0a\u7684\u7aef\u53e3\u6620\u5c04\u5230",(0,i.jsx)(r.code,{children:"mis-server"}),", ",(0,i.jsx)(r.code,{children:"portal-server"}),"\u548c",(0,i.jsx)(r.code,{children:"audit-server"}),"\u670d\u52a1\u76845000\u7aef\u53e3\u4e2d\u3002\u914d\u7f6e\u5b8c\u6210\u540e\uff0c\u60a8\u53ef\u4ee5\u4ece\u90e8\u7f72SCOW\u7684\u673a\u5668\u4e0a\u901a\u8fc7\u5b9a\u4e49\u7684IP\u548c\u7aef\u53e3\u4e0e\u5bf9\u5e94\u7684\u670d\u52a1\u4ea4\u4e92\u3002"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-yaml",metastring:"title=install.yaml",children:'\nportal:\n  portMappings:\n    # portal-server\u76845000\u7aef\u53e3\u6620\u5c04\u5230127.0.0.1:7572\n    portalServer: "127.0.0.1:7572"\nmis:\n  portMappings:\n    # mis-server\u76845000\u7aef\u53e3\u6620\u5c04\u5230127.0.0.1:7571\n    misServer: "127.0.0.1:7571"\naudit:\n  portMappings:\n    # audit-server\u76845000\u7aef\u53e3\u6620\u5c04\u5230127.0.0.1:7573\n    auditServer: "127.0.0.1:7573"\n'})}),"\n",(0,i.jsx)(r.h2,{id:"api\u8ba4\u8bc1",children:"API\u8ba4\u8bc1"}),"\n",(0,i.jsxs)(r.p,{children:["\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",(0,i.jsx)(r.code,{children:"mis-server"}),"\u548c",(0,i.jsx)(r.code,{children:"portal-server"}),"\u7684gRPC\u8c03\u7528\u5e76\u4e0d\u8ba4\u8bc1\u8bf7\u6c42\uff0c\u4efb\u4f55\u7528\u6237\u90fd\u53ef\u4ee5\u76f4\u63a5\u8c03\u7528",(0,i.jsx)(r.code,{children:"mis-server"}),"\u548c",(0,i.jsx)(r.code,{children:"portal-server"}),"\u7684API\u3002"]}),"\n",(0,i.jsxs)(r.p,{children:["\u5728\u4e0d\u8ba4\u8bc1\u7684\u60c5\u51b5\u4e0b\uff0c\u5982\u679c\u60a8\u5728\u6620\u5c04\u7aef\u53e3\u65f6\u76f4\u63a5\u8f93\u5165\u7aef\u53e3\u53f7\uff08\u5982",(0,i.jsx)(r.code,{children:"7571"}),"\u4e0d\u662f",(0,i.jsx)(r.code,{children:"127.0.0.1:7571"}),"\uff09\uff0c\u7531\u4e8e\u5728\u540c\u4e00\u4e2a\u96c6\u7fa4\u4e2d\u5404\u4e2a\u8282\u70b9\u7684\u7f51\u7edc\u662f\u4e92\u901a\u7684\uff0c\u5219\u5728\u540c\u4e00\u4e2a\u96c6\u7fa4\u4e2d\u7684\u5176\u4ed6\u4f5c\u4e1a\u53ef\u80fd\u53ef\u4ee5\u76f4\u63a5\u8bbf\u95eeSCOW\u7684gRPC\u540e\u7aef\uff0c\u8fdb\u800c\u76f4\u63a5\u64cd\u4f5cSCOW\u7cfb\u7edf\u7684\u6570\u636e\uff0c\u9020\u6210\u5b89\u5168\u9690\u60a3\u3002\u6240\u4ee5\u6211\u4eec\u5efa\u8bae\uff1a"]}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"\u4e0d\u5c06SCOW\u670d\u52a1\u8282\u70b9\u7528\u4f5c\u96c6\u7fa4\u7684\u767b\u5f55\u8282\u70b9\u6216\u8005\u8ba1\u7b97\u8282\u70b9"}),"\n",(0,i.jsxs)(r.li,{children:["\u5728\u6620\u5c04\u7aef\u53e3\u65f6\u8f93\u5165",(0,i.jsx)(r.code,{children:"127.0.0.1:7571"}),"\uff0c\u4f7f\u6620\u5c04\u51fa\u7684\u7aef\u53e3\u53ea\u80fd\u5728SCOW\u670d\u52a1\u8282\u70b9\u4e0a\u4f7f\u7528"]}),"\n",(0,i.jsx)(r.li,{children:"\u7ed9SCOW\u670d\u52a1\u8282\u70b9\u8bbe\u7f6e\u597d\u9632\u706b\u5899\uff0c\u9632\u6b62\u96c6\u7fa4\u5185\u90e8\u7684\u670d\u52a1\u8bbf\u95ee\u5230SCOW\u670d\u52a1"}),"\n"]}),"\n",(0,i.jsxs)(r.p,{children:["\u60a8\u4e5f\u53ef\u4ee5\u914d\u7f6e\u670d\u52a1\u5668\u7aef\u8ba4\u8bc1\u3002\u5f53\u6253\u5f00\u4e86\u8ba4\u8bc1\u540e\uff0c\u4efb\u4f55\u6ca1\u6709\u901a\u8fc7\u8ba4\u8bc1\u7684\u8bf7\u6c42\u5c06\u4f1a\u6536\u5230",(0,i.jsx)(r.code,{children:"UNAUTHENTICATED"}),"\u54cd\u5e94\u3002"]}),"\n",(0,i.jsx)(r.h3,{id:"\u9759\u6001token\u8ba4\u8bc1",children:"\u9759\u6001Token\u8ba4\u8bc1"}),"\n",(0,i.jsx)(r.p,{children:"\u60a8\u4e5f\u53ef\u4ee5\u914d\u7f6e\u670d\u52a1\u5668\u4f7f\u7528\u9759\u6001Token\u8ba4\u8bc1\u3002"}),"\n",(0,i.jsxs)(r.p,{children:["\u5728",(0,i.jsx)(r.code,{children:"config/common.yaml"}),"\u4e2d\u589e\u52a0\u4ee5\u4e0b\u914d\u7f6e\uff1a"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-yaml",metastring:'title="config/common.yaml"',children:"scowApi:\n  auth:\n    token: <\u79d8\u5bc6\u5b57\u7b26\u4e32\uff0c\u8d8a\u957f\u8d8a\u597d>\n"})}),"\n",(0,i.jsxs)(r.p,{children:["\u5f53\u914d\u7f6e\u597d\u540e\uff0c\u4efb\u4f55\u5230\u670d\u52a1\u5668\u7684\u8bf7\u6c42\u90fd\u5fc5\u987b\u5e26\u6709",(0,i.jsx)(r.code,{children:"authorization"})," header\uff0c\u5176\u5185\u5bb9\u4e3a",(0,i.jsx)(r.code,{children:"Bearer <\u79d8\u5bc6\u5b57\u7b26\u4e32>"}),"\u3002"]}),"\n",(0,i.jsx)(r.p,{children:"\u95e8\u6237\u7cfb\u7edf\u548c\u7ba1\u7406\u7cfb\u7edf\u524d\u7aef\u53d1\u9001\u5230\u670d\u52a1\u5668\u7684\u8bf7\u6c42\u5c06\u4f1a\u81ea\u52a8\u5e26\u6709\u8fd9\u4e2aheader\uff0c\u65e0\u9700\u5355\u72ec\u914d\u7f6e\u3002"}),"\n",(0,i.jsx)(r.h2,{id:"\u5b9e\u9645\u9879\u76ee\u793a\u4f8b",children:"\u5b9e\u9645\u9879\u76ee\u793a\u4f8b"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"/SCOW/pr-preview/pr-1017/docs/integration/scow-api-hook/examples/go#%E4%BD%BF%E7%94%A8scow-api",children:"Go"})}),"\n"]})]})}function p(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},57766:(e,r,n)=>{n.d(r,{Z:()=>t,a:()=>c});var i=n(70079);const s={},o=i.createContext(s);function c(e){const r=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function t(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(o.Provider,{value:r},e.children)}}}]);