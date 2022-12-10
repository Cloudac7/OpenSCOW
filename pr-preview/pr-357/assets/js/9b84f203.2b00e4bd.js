"use strict";(self.webpackChunk_scow_docs=self.webpackChunk_scow_docs||[]).push([[6992],{4852:(e,r,t)=>{t.d(r,{Zo:()=>m,kt:()=>d});var n=t(9231);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,s=function(e,r){if(null==e)return{};var t,n,s={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var u=n.createContext({}),o=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},m=function(e){var r=o(e.components);return n.createElement(u.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},c=n.forwardRef((function(e,r){var t=e.components,s=e.mdxType,l=e.originalType,u=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),c=o(t),d=s,f=c["".concat(u,".").concat(d)]||c[d]||p[d]||l;return t?n.createElement(f,i(i({ref:r},m),{},{components:t})):n.createElement(f,i({ref:r},m))}));function d(e,r){var t=arguments,s=r&&r.mdxType;if("string"==typeof e||s){var l=t.length,i=new Array(l);i[0]=c;var a={};for(var u in r)hasOwnProperty.call(r,u)&&(a[u]=r[u]);a.originalType=e,a.mdxType="string"==typeof e?e:s,i[1]=a;for(var o=2;o<l;o++)i[o]=t[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},9533:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>a,toc:()=>o});var n=t(9675),s=(t(9231),t(4852));const l={sidebar_position:1,title:"slurm"},i="\u914d\u7f6e\u4f7f\u7528slurm\u7684\u96c6\u7fa4",a={unversionedId:"mis/schedulers/slurm",id:"mis/schedulers/slurm",title:"slurm",description:"\u9009\u5b9aslurm\u8282\u70b9\u548c\u90e8\u7f72slurm.sh",source:"@site/docs/mis/schedulers/slurm.md",sourceDirName:"mis/schedulers",slug:"/mis/schedulers/slurm",permalink:"/SCOW/pr-preview/pr-357/docs/mis/schedulers/slurm",draft:!1,editUrl:"https://github.com/PKUHPC/SCOW/edit/main/website/docs/mis/schedulers/slurm.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"slurm"},sidebar:"mis",previous:{title:"\u90e8\u7f72",permalink:"/SCOW/pr-preview/pr-357/docs/mis/deployment"},next:{title:"\u7cfb\u7edf\u521d\u59cb\u5316",permalink:"/SCOW/pr-preview/pr-357/docs/mis/init/"}},u={},o=[{value:"\u9009\u5b9aslurm\u8282\u70b9\u548c\u90e8\u7f72slurm.sh",id:"\u9009\u5b9aslurm\u8282\u70b9\u548c\u90e8\u7f72slurmsh",level:2},{value:"\u4fee\u6539\u96c6\u7fa4\u914d\u7f6e",id:"\u4fee\u6539\u96c6\u7fa4\u914d\u7f6e",level:2},{value:"\u5bfc\u5165\u5df2\u6709\u7528\u6237\u4fe1\u606f",id:"\u5bfc\u5165\u5df2\u6709\u7528\u6237\u4fe1\u606f",level:2}],m={toc:o};function p(e){let{components:r,...l}=e;return(0,s.kt)("wrapper",(0,n.Z)({},m,l,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"\u914d\u7f6e\u4f7f\u7528slurm\u7684\u96c6\u7fa4"},"\u914d\u7f6e\u4f7f\u7528slurm\u7684\u96c6\u7fa4"),(0,s.kt)("h2",{id:"\u9009\u5b9aslurm\u8282\u70b9\u548c\u90e8\u7f72slurmsh"},"\u9009\u5b9aslurm\u8282\u70b9\u548c\u90e8\u7f72slurm.sh"),(0,s.kt)("p",null,"\u5728\u96c6\u7fa4\u4e2d\u9009\u5b9a\u4e00\u4e2a\u8282\u70b9\u4f5c\u4e3a",(0,s.kt)("strong",{parentName:"p"},"slurm\u8282\u70b9"),"\u3002\u6b64\u8282\u70b9\u9700\u8981\u6ee1\u8db3\u4ee5\u4e0b\u6761\u4ef6\uff1a"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"\u670d\u52a1\u8282\u70b9"),"\u53ef\u4ee5\u4ee5root\u7528\u6237SSH\u514d\u5bc6\u767b\u5f55\u5230\u6b64\u8282\u70b9"),(0,s.kt)("li",{parentName:"ul"},"\u6b64\u8282\u70b9\u4e0a\u5b89\u88c5\u5e76\u914d\u7f6e\u597d\u4e86slurm\u7684\u5ba2\u6237\u7aef\u7a0b\u5e8f\uff0c\u5982",(0,s.kt)("inlineCode",{parentName:"li"},"sacctmgr"),"\u3001",(0,s.kt)("inlineCode",{parentName:"li"},"squeue"),"\u7b49\u3002")),(0,s.kt)("p",null,"\u6211\u4eec\u5efa\u8bae\u5728slurm\u96c6\u7fa4\u7684manager\u8282\u70b9\u4e0a\u540c\u65f6\u914d\u7f6e\u5ba2\u6237\u7aef\u7a0b\u5e8f\uff0c\u5e76\u4f7f\u7528\u6b64\u8282\u70b9\u4e3a",(0,s.kt)("strong",{parentName:"p"},"slurm\u8282\u70b9"),"\u3002\n\u5728\u9879\u76ee\u542f\u52a8\u540e\uff0c\u7cfb\u7edf\u5c06\u81ea\u52a8\u7ed9slurm\u8282\u70b9\u4e0a\u4f20\u4e00\u4e2aslurm.sh\u811a\u672c\uff0c\u7528\u4e8e\u8fdb\u884c\u4e00\u4e9bslurm\u64cd\u4f5c\u3002\u5177\u4f53\u4e0a\u4f20\u7684\u4f4d\u7f6e\u53ef\u4ee5\u5728\u96c6\u7fa4\u914d\u7f6e\u4e2d\u8fdb\u884c\u914d\u7f6e\u3002"),(0,s.kt)("h2",{id:"\u4fee\u6539\u96c6\u7fa4\u914d\u7f6e"},"\u4fee\u6539\u96c6\u7fa4\u914d\u7f6e"),(0,s.kt)("p",null,"\u5728",(0,s.kt)("inlineCode",{parentName:"p"},"config/clusters/{\u4f7f\u7528slurm\u7684\u96c6\u7fa4\u7684ID}.yml"),"\u4e2d\uff0c\u4fee\u6539\u914d\u7f6e"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config/clusters/{\u4f7f\u7528slurm\u7684\u96c6\u7fa4\u7684\u96c6\u7fa4ID}.yml"',title:'"config/clusters/{\u4f7f\u7528slurm\u7684\u96c6\u7fa4\u7684\u96c6\u7fa4ID}.yml"'},"# ...\nslurm:\n  #....\n  mis:\n    # \u90e8\u7f72slurm.sh\u7684\u673a\u5668\u7684\u5730\u5740\n    managerUrl: haha\n    # slurm.sh\u5728\u673a\u5668\u4e2d\u7684\u7edd\u5bf9\u5730\u5740,\u6bcf\u6b21\u7cfb\u7edf\u542f\u52a8\u65f6\uff0c\u4f1a\u81ea\u52a8\u5c06slurm.sh\u6587\u4ef6\u590d\u5236\u5230scriptPath\u6307\u5b9a\u8def\u5f84\u4e0a\n    scriptPath: /test/slurm.sh\n    # slurmdbd\u7684\u6570\u636e\u5e93\u5bc6\u7801\n    dbPassword: password\n    # slurm\u4e2d\u8fd9\u4e2a\u96c6\u7fa4\u7684\u96c6\u7fa4\u540d\n    clusterName: hpc01\n")),(0,s.kt)("h2",{id:"\u5bfc\u5165\u5df2\u6709\u7528\u6237\u4fe1\u606f"},"\u5bfc\u5165\u5df2\u6709\u7528\u6237\u4fe1\u606f"),(0,s.kt)("p",null,"\u5982\u679c\u60a8\u5df2\u6709\u4e00\u4e2aslurm\u96c6\u7fa4\uff0c\u5728\u7ba1\u7406\u7cfb\u7edf\u90e8\u7f72\u5b8c\u6210\u540e\uff0c\u53ef\u4ee5\u4f7f\u7528\u672c\u529f\u80fd\u5c06slurm\u4e2d\u7684\u7528\u6237\u4fe1\u606f\u5bfc\u5165\u672c\u7cfb\u7edf\u3002"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"\u5bfc\u5165\u5df2\u6709\u7528\u6237\u4fe1\u606f",src:t(4686).Z,width:"1262",height:"1565"})),(0,s.kt)("p",null,"\u7cfb\u7edf\u4f1a\u4eceslurm\u96c6\u7fa4\u4e2d\u8bfb\u53d6\u7528\u6237\u548c\u8d26\u6237\u4fe1\u606f\uff0c\u663e\u793a\u5728\u8868\u683c\u4e2d\u3002\u4e0d\u5b58\u5728\u540d\u5b57\u7684\u7528\u6237\u7684\u521d\u59cb\u540d\u5b57\u9ed8\u8ba4\u4e3a\u81ea\u5df1\u7684ID\u3002"),(0,s.kt)("p",null,"\u7cfb\u7edf\u9ed8\u8ba4\u5c06",(0,s.kt)("inlineCode",{parentName:"p"},"a_\u7528\u6237ID == \u8d26\u6237ID"),"\u7684\u7528\u6237\u8bbe\u7f6e\u4e3a\u62e5\u6709\u8005\u3002\u6b64\u5916\uff0c\u60a8\u4e5f\u53ef\u4ee5\u5728\u7cfb\u7edf\u4e2d\u9009\u62e9\u62e5\u6709\u8005\uff0c\u9700\u8981\u6ce8\u610f\u7cfb\u7edf\u8981\u6c42\u8d26\u6237\u7684\u62e5\u6709\u8005\u5b57\u6bb5\u4e0d\u80fd\u4e3a\u7a7a\u3002"),(0,s.kt)("p",null,"\u5728\u7cfb\u7edf\u521d\u59cb\u5316\u65f6\uff0c\u6216\u8005\u7cfb\u7edf\u521d\u59cb\u5316\u540e\u4f7f\u7528\u5e73\u53f0\u7ba1\u7406\u5458\u7528\u6237\u767b\u5f55\u540e\u9009\u62e9",(0,s.kt)("strong",{parentName:"p"},"\u5e73\u53f0\u7ba1\u7406"),"->",(0,s.kt)("strong",{parentName:"p"},"\u5bfc\u5165\u7528\u6237"),"\uff0c\u5373\u53ef\u4f7f\u7528\u5bfc\u5165\u7528\u6237\u529f\u80fd\u3002\u5982\u679c\u9700\u8981\u5c06\u65b0\u52a0\u5165\u7684\u8d26\u6237\u90fd\u52a0\u5165\u767d\u540d\u5355\u4e2d\uff0c\u8bf7\u52fe\u9009",(0,s.kt)("inlineCode",{parentName:"p"},"\u5c06\u6240\u6709\u8d26\u6237\u52a0\u5165\u767d\u540d\u5355"),"\u3002\u70b9\u51fb\u786e\u5b9a\uff0c\u5373\u53ef\u5c06\u6240\u6709\u8d26\u6237\u5bfc\u5165\u9ed8\u8ba4\u79df\u6237\u4e2d\u3002"))}p.isMDXComponent=!0},4686:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/import-users-0870ad65f6f05e5c7a8de09e25c4772f.png"}}]);