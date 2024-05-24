"use strict";(self.webpackChunk_scow_docs=self.webpackChunk_scow_docs||[]).push([[662],{2089:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>a,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var o=s(49214),t=s(5409);const i={sidebar_position:3,title:"\u4ece\u6e90\u7801\u6784\u5efa",description:"\u4ece\u6e90\u7801\u6784\u5efaSCOW"},l=void 0,r={id:"deploy/install/build-from-source",title:"\u4ece\u6e90\u7801\u6784\u5efa",description:"\u4ece\u6e90\u7801\u6784\u5efaSCOW",source:"@site/docs/deploy/install/build-from-source.md",sourceDirName:"deploy/install",slug:"/deploy/install/build-from-source",permalink:"/SCOW/pr-preview/pr-1264/docs/deploy/install/build-from-source",draft:!1,unlisted:!1,editUrl:"https://github.com/PKUHPC/SCOW/edit/main/website/docs/deploy/install/build-from-source.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"\u4ece\u6e90\u7801\u6784\u5efa",description:"\u4ece\u6e90\u7801\u6784\u5efaSCOW"},sidebar:"deploy",previous:{title:"scow-cli",permalink:"/SCOW/pr-preview/pr-1264/docs/deploy/install/scow-cli"},next:{title:"\u591a\u67b6\u6784\u652f\u6301",permalink:"/SCOW/pr-preview/pr-1264/docs/deploy/install/multi-platform"}},c={},d=[{value:"\u4ece\u6e90\u7801\u6784\u5efa",id:"\u4ece\u6e90\u7801\u6784\u5efa",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"\u4ece\u6e90\u7801\u6784\u5efa",children:"\u4ece\u6e90\u7801\u6784\u5efa"}),"\n",(0,o.jsx)(n.p,{children:"\u76ee\u524d\u7cfb\u7edf\u5904\u4e8e\u516c\u5f00\u6d4b\u8bd5\u9636\u6bb5\uff0c\u6682\u4e0d\u63d0\u4f9b\u6784\u5efa\u597d\u7684\u955c\u50cf\u4e0b\u8f7d\u3002\u672c\u90e8\u5206\u4ecb\u7ecd\u5982\u4f55\u4ece\u6e90\u7801\u6784\u5efa\u9879\u76ee\u7684\u955c\u50cf\u3002"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"\u5728\u670d\u52a1\u8282\u70b9\u4e2d\u5b89\u88c5\u4ee5\u4e0b\u8f6f\u4ef6\uff1a"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://docs.docker.com/engine/install/",children:"docker"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://docs.docker.com/compose/install/",children:"docker compose"})}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"\u4ece\u4ed3\u5e93clone\u9879\u76ee"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/PKUHPC/SCOW --depth=1\n"})}),"\n",(0,o.jsxs)(n.ol,{start:"3",children:["\n",(0,o.jsx)(n.li,{children:"\u6784\u5efa\u955c\u50cf"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"# \u6784\u5efatag\u4e3ascow:latest\u7684\u955c\u50cf\u3002\u5982\u679c\u9700\u8981\u4fee\u6539\u955c\u50cf\u7684tag\uff0c\u8bf7\u4fee\u6539-t\u53c2\u6570\u7684\u503c\ndocker build -f docker/Dockerfile.scow -t scow .\n"})}),"\n",(0,o.jsxs)(n.admonition,{type:"tip",children:[(0,o.jsx)(n.p,{children:"\u4e3a\u4e86\u7b80\u5316\u6784\u5efa\u955c\u50cf\u65f6\u6240\u9700\u8981\u7684\u73af\u5883\u548c\u51cf\u5c11\u6240\u9700\u65f6\u95f4\uff0c\u4f7f\u7528\u6b64\u547d\u4ee4\u6784\u5efa\u955c\u50cf\u65f6\uff0cdocker\u5c06\u4f1a\u81ea\u52a8\u4f7f\u7528\u8fd0\u884c\u6b64\u547d\u4ee4\u65f6\u7684\u673a\u5668\u7684\u67b6\u6784\u7f16\u8bd1\u955c\u50cf\u3002\u4f8b\u5982\u5982\u679c\u60a8\u5728AMD64\u67b6\u6784\u7684\u673a\u5668\u4e0a\u7f16\u8bd1\uff0c\u7f16\u8bd1\u51fa\u6765\u7684\u955c\u50cf\u4ec5\u652f\u6301AMD64\u67b6\u6784\u3002"}),(0,o.jsxs)(n.p,{children:["\u8bf7\u67e5\u770b",(0,o.jsx)(n.a,{href:"/SCOW/pr-preview/pr-1264/docs/deploy/install/multi-platform",children:"\u591a\u67b6\u6784\u652f\u6301"}),"\u6587\u6863\u6765\u4e86\u89e3\u7cfb\u7edf\u5bf9\u975eAMD64\u67b6\u6784\uff08\u5982ARM64\uff09\u7684\u673a\u5668\u7684\u652f\u6301\u3002"]})]})]})}function a(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},5409:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>r});var o=s(48318);const t={},i=o.createContext(t);function l(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);