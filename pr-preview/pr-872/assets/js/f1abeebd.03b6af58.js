"use strict";(self.webpackChunk_scow_docs=self.webpackChunk_scow_docs||[]).push([[5482],{4852:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>f});var l=t(9231);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);r&&(l=l.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,l)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,l,n=function(e,r){if(null==e)return{};var t,l,n={},s=Object.keys(e);for(l=0;l<s.length;l++)t=s[l],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(l=0;l<s.length;l++)t=s[l],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var a=l.createContext({}),o=function(e){var r=l.useContext(a),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},p=function(e){var r=o(e.components);return l.createElement(a.Provider,{value:r},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return l.createElement(l.Fragment,{},r)}},d=l.forwardRef((function(e,r){var t=e.components,n=e.mdxType,s=e.originalType,a=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=o(t),d=n,f=m["".concat(a,".").concat(d)]||m[d]||c[d]||s;return t?l.createElement(f,u(u({ref:r},p),{},{components:t})):l.createElement(f,u({ref:r},p))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var s=t.length,u=new Array(s);u[0]=d;var i={};for(var a in r)hasOwnProperty.call(r,a)&&(i[a]=r[a]);i.originalType=e,i[m]="string"==typeof e?e:n,u[1]=i;for(var o=2;o<s;o++)u[o]=t[o];return l.createElement.apply(null,u)}return l.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9032:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>u,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>o});var l=t(5675),n=(t(9231),t(4852));const s={sidebar_position:1,title:"slurm",description:"\u4f7f\u7528slurm\u7684\u96c6\u7fa4\u7684\u914d\u7f6e"},u="\u914d\u7f6e\u4f7f\u7528slurm\u7684\u96c6\u7fa4",i={unversionedId:"deploy/config/mis/schedulers/slurm",id:"deploy/config/mis/schedulers/slurm",title:"slurm",description:"\u4f7f\u7528slurm\u7684\u96c6\u7fa4\u7684\u914d\u7f6e",source:"@site/docs/deploy/config/mis/schedulers/slurm.md",sourceDirName:"deploy/config/mis/schedulers",slug:"/deploy/config/mis/schedulers/slurm",permalink:"/SCOW/pr-preview/pr-872/docs/deploy/config/mis/schedulers/slurm",draft:!1,editUrl:"https://github.com/PKUHPC/SCOW/edit/main/website/docs/deploy/config/mis/schedulers/slurm.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"slurm",description:"\u4f7f\u7528slurm\u7684\u96c6\u7fa4\u7684\u914d\u7f6e"},sidebar:"deploy",previous:{title:"\u8c03\u5ea6\u5668",permalink:"/SCOW/pr-preview/pr-872/docs/category/\u8c03\u5ea6\u5668"},next:{title:"\u7cfb\u7edf\u521d\u59cb\u5316",permalink:"/SCOW/pr-preview/pr-872/docs/deploy/config/mis/init/"}},a={},o=[{value:"\u9009\u5b9aslurm\u8282\u70b9\u548c\u90e8\u7f72slurm\u9002\u914d\u5668",id:"\u9009\u5b9aslurm\u8282\u70b9\u548c\u90e8\u7f72slurm\u9002\u914d\u5668",level:2},{value:"\u4fee\u6539\u96c6\u7fa4\u914d\u7f6e",id:"\u4fee\u6539\u96c6\u7fa4\u914d\u7f6e",level:2},{value:"\u5bfc\u5165\u5df2\u6709\u7528\u6237\u4fe1\u606f",id:"\u5bfc\u5165\u5df2\u6709\u7528\u6237\u4fe1\u606f",level:2},{value:"SCOW\u548cslurm\u7528\u6237\u4fe1\u606f\u7684\u5173\u7cfb",id:"scow\u548cslurm\u7528\u6237\u4fe1\u606f\u7684\u5173\u7cfb",level:2},{value:"\u5237\u65b0\u8c03\u5ea6\u5668\u7528\u6237\u5c01\u9501\u72b6\u6001",id:"\u5237\u65b0\u8c03\u5ea6\u5668\u7528\u6237\u5c01\u9501\u72b6\u6001",level:2}],p={toc:o},m="wrapper";function c(e){let{components:r,...s}=e;return(0,n.kt)(m,(0,l.Z)({},p,s,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u914d\u7f6e\u4f7f\u7528slurm\u7684\u96c6\u7fa4"},"\u914d\u7f6e\u4f7f\u7528slurm\u7684\u96c6\u7fa4"),(0,n.kt)("h2",{id:"\u9009\u5b9aslurm\u8282\u70b9\u548c\u90e8\u7f72slurm\u9002\u914d\u5668"},"\u9009\u5b9aslurm\u8282\u70b9\u548c\u90e8\u7f72slurm\u9002\u914d\u5668"),(0,n.kt)("p",null,"\u5728\u96c6\u7fa4\u4e2d\u9009\u5b9a\u4e00\u4e2a\u8282\u70b9\u4f5c\u4e3a",(0,n.kt)("strong",{parentName:"p"},"slurm\u8282\u70b9"),"\u3002\u6b64\u8282\u70b9\u9700\u8981\u90e8\u7f72slurm\u9002\u914d\u5668\u5e76\u4fdd\u8bc1\u6b63\u786e\u8fd0\u884c\u3002"),(0,n.kt)("h2",{id:"\u4fee\u6539\u96c6\u7fa4\u914d\u7f6e"},"\u4fee\u6539\u96c6\u7fa4\u914d\u7f6e"),(0,n.kt)("p",null,"\u5728",(0,n.kt)("inlineCode",{parentName:"p"},"config/clusters/{\u4f7f\u7528slurm\u7684\u96c6\u7fa4\u7684ID}.yml"),"\u4e2d\uff0c\u4fee\u6539\u914d\u7f6e(\u4f7f\u7528\u9002\u914d\u5668\u7684ip\u5730\u5740\u548c\u7aef\u53e3\u53f7)"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config/clusters/{\u4f7f\u7528slurm\u7684\u96c6\u7fa4\u7684\u96c6\u7fa4ID}.yml"',title:'"config/clusters/{\u4f7f\u7528slurm\u7684\u96c6\u7fa4\u7684\u96c6\u7fa4ID}.yml"'},"# ...\nadapterUrl: localhost:8972\n")),(0,n.kt)("h2",{id:"\u5bfc\u5165\u5df2\u6709\u7528\u6237\u4fe1\u606f"},"\u5bfc\u5165\u5df2\u6709\u7528\u6237\u4fe1\u606f"),(0,n.kt)("p",null,"\u5982\u679c\u60a8\u5df2\u6709\u4e00\u4e2aslurm\u96c6\u7fa4\uff0c\u5728\u7ba1\u7406\u7cfb\u7edf\u90e8\u7f72\u5b8c\u6210\u540e\uff0c\u53ef\u4ee5\u4f7f\u7528\u672c\u529f\u80fd\u5c06slurm\u4e2d\u7684\u7528\u6237\u4fe1\u606f\u5bfc\u5165\u672c\u7cfb\u7edf\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u5bfc\u5165\u5df2\u6709\u7528\u6237\u4fe1\u606f",src:t(4052).Z,width:"885",height:"769"})),(0,n.kt)("p",null,"\u7cfb\u7edf\u4f1a\u4eceslurm\u96c6\u7fa4\u4e2d\u8bfb\u53d6\u7528\u6237\u548c\u8d26\u6237\u4fe1\u606f\uff0c\u663e\u793a\u5728\u8868\u683c\u4e2d\u3002\u4e0d\u5b58\u5728\u540d\u5b57\u7684\u7528\u6237\u7684\u521d\u59cb\u540d\u5b57\u9ed8\u8ba4\u4e3a\u81ea\u5df1\u7684ID\u3002"),(0,n.kt)("p",null,"\u7cfb\u7edf\u9ed8\u8ba4\u5c06",(0,n.kt)("inlineCode",{parentName:"p"},"a_\u7528\u6237ID == \u8d26\u6237ID"),"\u7684\u7528\u6237\u8bbe\u7f6e\u4e3a\u62e5\u6709\u8005\u3002\u6b64\u5916\uff0c\u60a8\u4e5f\u53ef\u4ee5\u5728\u7cfb\u7edf\u4e2d\u9009\u62e9\u62e5\u6709\u8005\uff0c\u9700\u8981\u6ce8\u610f\u7cfb\u7edf\u8981\u6c42\u8d26\u6237\u7684\u62e5\u6709\u8005\u5b57\u6bb5\u4e0d\u80fd\u4e3a\u7a7a\u3002"),(0,n.kt)("p",null,"\u5728\u7cfb\u7edf\u521d\u59cb\u5316\u65f6\uff0c\u6216\u8005\u7cfb\u7edf\u521d\u59cb\u5316\u540e\u4f7f\u7528\u5e73\u53f0\u7ba1\u7406\u5458\u7528\u6237\u767b\u5f55\u540e\u9009\u62e9",(0,n.kt)("strong",{parentName:"p"},"\u5e73\u53f0\u7ba1\u7406"),"->",(0,n.kt)("strong",{parentName:"p"},"\u5bfc\u5165\u7528\u6237"),"\uff0c\u5373\u53ef\u4f7f\u7528\u5bfc\u5165\u7528\u6237\u529f\u80fd\u3002\u5982\u679c\u9700\u8981\u5c06\u65b0\u52a0\u5165\u7684\u8d26\u6237\u90fd\u52a0\u5165\u767d\u540d\u5355\u4e2d\uff0c\u8bf7\u52fe\u9009",(0,n.kt)("inlineCode",{parentName:"p"},"\u5c06\u6240\u6709\u8d26\u6237\u52a0\u5165\u767d\u540d\u5355"),"\u3002\u70b9\u51fb\u786e\u5b9a\uff0c\u5373\u53ef\u5c06\u6240\u6709\u8d26\u6237\u5bfc\u5165\u6307\u5b9a\u79df\u6237\u4e2d\u3002"),(0,n.kt)("h2",{id:"scow\u548cslurm\u7528\u6237\u4fe1\u606f\u7684\u5173\u7cfb"},"SCOW\u548cslurm\u7528\u6237\u4fe1\u606f\u7684\u5173\u7cfb"),(0,n.kt)("p",null,"\u4e3a\u4e86\u4fdd\u5b58\u5982\u8ba1\u8d39\u6536\u8d39\u7b49\u66f4\u591a\u4fe1\u606f\uff0cSCOW\u81ea\u5df1\u7ef4\u62a4\u4e00\u5957\u7528\u6237\u8d26\u6237\u4fe1\u606f\uff0c\u5e76\u5728\u8fdb\u884c\u5404\u79cd\u4e0e\u7528\u6237\u4fe1\u606f\u6709\u5173\u7684\u64cd\u4f5c\u65f6\u81ea\u52a8\u5c06\u8fd9\u4e2a\u64cd\u4f5c\u540c\u6b65\u5230slurm\u7684\u7528\u6237\u8d26\u6237\u4fe1\u606f\u4e2d\u3002"),(0,n.kt)("p",null,"\u4e3a\u4e86\u4fdd\u8bc1SCOW\u64cd\u4f5c\u7684\u6b63\u786e\u6027\uff0c\u6211\u4eec\u8981\u6c42",(0,n.kt)("strong",{parentName:"p"},"SCOW\u7684\u7528\u6237\u4fe1\u606f\u4e3aslurm\u7528\u6237\u4fe1\u606f\u7684\u5b50\u96c6"),"\u3002"),(0,n.kt)("p",null,"\u4ee5\u4e0b\u60c5\u51b5\u662f\u5141\u8bb8\u7684\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"slurm\u4e2d\u6216\u8005\u8ba4\u8bc1\u7cfb\u7edf\u4e2d\u5b58\u5728\u7684\u7528\u6237SCOW\u4e2d\u4e0d\u5b58\u5728",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5728SCOW\u521b\u5efa\u8fd9\u4e2a\u7528\u6237\u65f6\uff08\u7528\u6237ID\u548c\u5df2\u6709\u7528\u6237\u76f8\u540c\uff09\uff0cSCOW\u5c06\u4f1a\u63d0\u793a\u8ba4\u8bc1\u7cfb\u7edf\u4e2d\u5df2\u5b58\u5728\u6b64\u7528\u6237\uff0c\u5e76\u5141\u8bb8\u7528\u6237\u76f4\u63a5\u5728SCOW\u4e2d\u6dfb\u52a0\u7528\u6237"))),(0,n.kt)("li",{parentName:"ul"},"slurm\u4e2d\u5b58\u5728\u7684\u8d26\u6237SCOW\u4e2d\u4e0d\u5b58\u5728",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5728SCOW\u4e2d\u521b\u5efa\u8fd9\u4e2a\u8d26\u6237\u65f6\uff0c\u5982\u679cslurm\u4e2d\u5df2\u7ecf\u5b58\u5728\uff0cSCOW\u5c06\u76f4\u63a5\u6dfb\u52a0\u5230SCOW\u6570\u636e\u5e93\u4e2d\uff0c\u5e76\u5c1d\u8bd5\u628a\u62e5\u6709\u8005\u52a0\u5165\u8d26\u6237\u4e2d"))),(0,n.kt)("li",{parentName:"ul"},"slurm\u4e2d\u4e00\u4e2a\u7528\u6237\u5b58\u5728\u4e8e\u4e00\u4e2a\u8d26\u6237\u4e2d\uff0cSCOW\u4e2d\u6ca1\u6709",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5728SCOW\u4e2d\u5c06\u8fd9\u4e2a\u7528\u6237\u52a0\u5165\u8d26\u6237\u65f6\uff0c\u5982\u679cslurm\u4e2d\u7528\u6237\u5df2\u7ecf\u5b58\u5728\u4e8e\u8d26\u6237\u4e2d\uff0cSCOW\u5c06\u4f1a\u76f4\u63a5\u5728slurm\u7684\u7528\u6237\u4fe1\u606f\u4e2d\u6dfb\u52a0\u8fd9\u4e2a\u7528\u6237\u8d26\u6237\u5173\u7cfb")))),(0,n.kt)("p",null,"\u4ee5\u4e0b\u60c5\u51b5\u5728\u8fdb\u884c\u548cslurm\u6709\u5173\u7684\u64cd\u4f5c\uff08\u5982\u5c01\u9501\u89e3\u5c01\uff09\u65f6\u4f1a\u51fa\u9519\uff0c\u5728\u8fdb\u884c\u53ea\u548cSCOW\u6709\u5173\u7684\u64cd\u4f5c\uff08\u5982\u8bbe\u7f6e\u9650\u989d\u3001\u8bbe\u7f6e\u7528\u6237\u7ba1\u7406\u5458\u6743\u9650\u7b49\uff09\u65f6\u4e0d\u4f1a\u62a5\u9519\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"SCOW\u4e2d\u4e00\u4e2a\u7528\u6237\u4e8e\u4e00\u4e2a\u8d26\u6237\u4e2d\uff0cslurm\u4e2d\u6ca1\u6709"),(0,n.kt)("li",{parentName:"ul"},"SCOW\u4e2d\u5b58\u5728\u7684\u7528\u6237\u6216\u8005\u8d26\u6237\u65f6slurm\u4e2d\u4e0d\u5b58\u5728")),(0,n.kt)("p",null,"\u6211\u4eec\u5efa\u8bae\uff0c\u90e8\u7f72\u597dSCOW\u7cfb\u7edf\u540e\uff0c\u6240\u6709SCOW\u4e2d\u652f\u6301\u7684\u529f\u80fd\u90fd\u4eceSCOW\u4e2d\u64cd\u4f5c\u3002\u5982\u679c\u9700\u8981\u4e00\u4e9bSCOW\u4e2d\u4e0d\u652f\u6301\u7684\u64cd\u4f5c\uff0c\u8bf7\u5b8c\u6210\u64cd\u4f5c\u540e\u7acb\u5373\u624b\u52a8\u4fee\u6539\u6570\u636e\u5e93\uff0c\u4f7fSCOW\u548cslurm\u7684\u7528\u6237\u4fe1\u606f\u540c\u6b65\u3002"),(0,n.kt)("h2",{id:"\u5237\u65b0\u8c03\u5ea6\u5668\u7528\u6237\u5c01\u9501\u72b6\u6001"},"\u5237\u65b0\u8c03\u5ea6\u5668\u7528\u6237\u5c01\u9501\u72b6\u6001"),(0,n.kt)("p",null,"\u5f53\u8fd0\u884cslurm.sh\u8282\u70b9\u548cslurm\u7ba1\u7406\u8282\u70b9\u5e76\u975e\u540c\u4e00\u8282\u70b9\u65f6\uff0c\u5df2\u5c01\u9501\u7684\u7528\u6237\u3001\u8d26\u6237\u548c\u7528\u6237\u8d26\u6237\u5c06\u4f1a\u5728slurm\u96c6\u7fa4\u91cd\u542f\u540e\u88ab\u89e3\u5c01\u3002"),(0,n.kt)("p",null,"SCOW\u5728\u542f\u52a8\u65f6\u5c06\u4f1a\u81ea\u52a8\u5237\u65b0\u4e00\u6b21slurm\u5c01\u9501\u72b6\u6001\uff0c\u4f46\u662fslurm\u96c6\u7fa4\u53ef\u80fd\u5728SCOW\u8fd0\u884c\u65f6\u91cd\u542f\uff0cSCOW\u6682\u65f6\u4e0d\u80fd\u5bf9\u8fd9\u79cd\u60c5\u51b5\u505a\u51fa\u53cd\u5e94\u3002"),(0,n.kt)("p",null,"\u6240\u4ee5\uff0c\u5982\u679c\u8fd0\u884cslurm.sh\u8282\u70b9\u548cslurm\u7ba1\u7406\u8282\u70b9\u5e76\u975e\u540c\u4e00\u8282\u70b9\u65f6\uff0c\u60a8\u9700\u8981\u5728slurm\u96c6\u7fa4\u91cd\u542f\u540e\uff0c\u624b\u52a8\u6267\u884c\u4e00\u4e0b",(0,n.kt)("strong",{parentName:"p"},"\u5e73\u53f0\u8c03\u8bd5"),"->",(0,n.kt)("strong",{parentName:"p"},"\u5c01\u9501\u72b6\u6001\u540c\u6b65"),"\u7684",(0,n.kt)("strong",{parentName:"p"},"\u5237\u65b0\u8c03\u5ea6\u5668\u7528\u6237\u5c01\u9501\u72b6\u6001"),"\u7684\u529f\u80fd\u3002\u5982\u679cslurm.sh\u8282\u70b9\u548cslurm\u7ba1\u7406\u8282\u70b9\u4e3a\u540c\u4e00\u8282\u70b9\uff0c\u60a8\u53ef\u4ee5\u5ffd\u7565\u672c\u529f\u80fd\u3002"),(0,n.kt)("p",null,"\u5982\u679c\u60a8\u4f7f\u7528\u7684\u662fslurm\u4e4b\u5916\u7684\u8c03\u5ea6\u5668\uff0c\u5728\u8c03\u5ea6\u5668\u548cSCOW\u95f4\u7528\u6237\u5c01\u9501\u72b6\u6001\u4e0d\u540c\u6b65\u65f6\uff0c\u53ef\u4ee5\u624b\u52a8\u6267\u884c\u4e00\u4e0b\u672c\u9875\u9762\u7684\u5237\u65b0\u8c03\u5ea6\u5668\u7528\u6237\u5c01\u9501\u72b6\u6001\u7684\u529f\u80fd\u3002"))}c.isMDXComponent=!0},4052:(e,r,t)=>{t.d(r,{Z:()=>l});const l=t.p+"assets/images/import-users-bf3cfc54075a63287a0b7dbf5ce0d53c.png"}}]);