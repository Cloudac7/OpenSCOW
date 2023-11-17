"use strict";(self.webpackChunk_scow_docs=self.webpackChunk_scow_docs||[]).push([[9915],{82379:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>a,contentTitle:()=>r,default:()=>l,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var s=n(35250),i=n(57766);const o={sidebar_position:1,title:"\u4f7f\u7528\u81ea\u5b9a\u4e49\u8ba4\u8bc1\u7cfb\u7edf"},r="\u4f7f\u7528\u81ea\u5b9a\u4e49\u8ba4\u8bc1\u7cfb\u7edf",c={id:"integration/auth/use",title:"\u4f7f\u7528\u81ea\u5b9a\u4e49\u8ba4\u8bc1\u7cfb\u7edf",description:"\u5982\u679c\u7cfb\u7edf\u63d0\u4f9b\u7684\u8ba4\u8bc1\u7cfb\u7edf\u4e0d\u80fd\u6ee1\u8db3\u60a8\u7684\u9700\u6c42\uff0c\u60a8\u53ef\u4ee5\u81ea\u5df1\u4f7f\u7528\u548c\u5b9e\u73b0\u4e00\u4e2a\u81ea\u5b9a\u4e49\u8ba4\u8bc1\u670d\u52a1\u3002",source:"@site/docs/integration/auth/use.md",sourceDirName:"integration/auth",slug:"/integration/auth/use",permalink:"/SCOW/docs/integration/auth/use",draft:!1,unlisted:!1,editUrl:"https://github.com/PKUHPC/SCOW/edit/main/website/docs/integration/auth/use.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\u4f7f\u7528\u81ea\u5b9a\u4e49\u8ba4\u8bc1\u7cfb\u7edf"},sidebar:"integration",previous:{title:"\u4e0eSCOW\u96c6\u6210",permalink:"/SCOW/docs/integration/"},next:{title:"\u5b9e\u73b0\u81ea\u5b9a\u4e49\u8ba4\u8bc1\u7cfb\u7edf",permalink:"/SCOW/docs/integration/auth/impl"}},a={},u=[{value:"\u4f7f\u7528\u81ea\u5b9a\u4e49\u8ba4\u8bc1\u670d\u52a1",id:"\u4f7f\u7528\u81ea\u5b9a\u4e49\u8ba4\u8bc1\u670d\u52a1",level:2}];function d(t){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"\u4f7f\u7528\u81ea\u5b9a\u4e49\u8ba4\u8bc1\u7cfb\u7edf",children:"\u4f7f\u7528\u81ea\u5b9a\u4e49\u8ba4\u8bc1\u7cfb\u7edf"}),"\n",(0,s.jsx)(e.p,{children:"\u5982\u679c\u7cfb\u7edf\u63d0\u4f9b\u7684\u8ba4\u8bc1\u7cfb\u7edf\u4e0d\u80fd\u6ee1\u8db3\u60a8\u7684\u9700\u6c42\uff0c\u60a8\u53ef\u4ee5\u81ea\u5df1\u4f7f\u7528\u548c\u5b9e\u73b0\u4e00\u4e2a\u81ea\u5b9a\u4e49\u8ba4\u8bc1\u670d\u52a1\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u4f7f\u7528\u81ea\u5b9a\u4e49\u8ba4\u8bc1\u670d\u52a1",children:"\u4f7f\u7528\u81ea\u5b9a\u4e49\u8ba4\u8bc1\u670d\u52a1"}),"\n",(0,s.jsx)(e.p,{children:"\u60a8\u81ea\u5df1\u7f16\u5199\u7684\u81ea\u5b9a\u4e49\u8ba4\u8bc1\u670d\u52a1\u5e94\u8be5\u88ab\u6253\u5305\u4e3a\u4e00\u4e2adocker\u955c\u50cf\uff0c\u653e\u5728\u60a8\u90e8\u7f72\u6240\u5728\u673a\u5668\u53ef\u4ee5\u8bbf\u95ee\u7684\u5730\u5740\u4e0a\u3002"}),"\n",(0,s.jsxs)(e.p,{children:["\u4fee\u6539\u5b89\u88c5\u914d\u7f6e\u6587\u4ef6\u7684",(0,s.jsx)(e.code,{children:"auth.custom"}),"\u90e8\u5206\u4ee5\u4f7f\u7528\u60a8\u7684\u81ea\u5b9a\u4e49\u8ba4\u8bc1\u670d\u52a1\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-yaml",metastring:'title="install.yaml"',children:'auth:\n  custom:\n    # \u955c\u50cf\u5730\u5740\u3002\u5fc5\u586b\uff0c\u53ea\u8981\u662f\u80fd\u8bbf\u95ee\u7684\u955c\u50cf\u5730\u5740\u5373\u53ef\u3002\n    image: "ghcr.io/pkuhpc/scow-auth:master",\n  \n    # \u7aef\u53e3\u6620\u5c04\uff08\u53ef\u9009\uff09\n    # ports: ["80:80", "3302:3302"],\n  \n    # \u73af\u5883\u53d8\u91cf\uff08\u53ef\u9009\uff09\n    # environment: ["KEY=123"],\n  \n    # \u5377\u6620\u5c04\uff08\u53ef\u9009\uff09\n    # \u9ed8\u8ba4\u6dfb\u52a0/etc/hosts:/etc/hosts\u548c./config:/etc/scow\n    # \u53ef\u9009\u6dfb\u52a0\u5176\u4ed6\u6620\u5c04\n    # volumes:\n    #   - ./test.py:/etc/test.py\n'})})]})}function l(t={}){const{wrapper:e}={...(0,i.a)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(d,{...t})}):d(t)}},57766:(t,e,n)=>{n.d(e,{Z:()=>c,a:()=>r});var s=n(70079);const i={},o=s.createContext(i);function r(t){const e=s.useContext(o);return s.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:r(t.components),s.createElement(o.Provider,{value:e},t.children)}}}]);