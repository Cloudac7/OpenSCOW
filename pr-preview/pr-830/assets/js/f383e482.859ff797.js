"use strict";(self.webpackChunk_scow_docs=self.webpackChunk_scow_docs||[]).push([[9436],{54852:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>g});var n=r(49231);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(r),f=a,g=u["".concat(i,".").concat(f)]||u[f]||m[f]||p;return r?n.createElement(g,o(o({ref:t},s),{},{components:r})):n.createElement(g,o({ref:t},s))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,o=new Array(p);o[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<p;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1028:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>p,metadata:()=>l,toc:()=>c});var n=r(45675),a=(r(49231),r(54852));const p={slug:"update-portal-app",title:"\u4ea4\u4e92\u5f0f\u5e94\u7528\u914d\u7f6e\u66f4\u65b0",authors:["sunyixin"],tags:["scow","scow-portal-apps","scow-apps"]},o=void 0,l={permalink:"/SCOW/pr-preview/pr-830/blog/update-portal-app",editUrl:"https://github.com/PKUHPC/SCOW/edit/main/website/blog/blog/2023-07-05-update-app.md",source:"@site/blog/2023-07-05-update-app.md",title:"\u4ea4\u4e92\u5f0f\u5e94\u7528\u914d\u7f6e\u66f4\u65b0",description:"\u4e0a\u4e00\u4e2a\u7248\u672c\uff0c\u5728SCOW\u95e8\u6237\u7cfb\u7edf\u7684\u4ea4\u4e92\u5f0f\u5e94\u7528\u4e0b\uff0c\u6211\u4eec\u901a\u8fc7\u5728config/apps\u4e0b\u914d\u7f6e\u7684\u4ea4\u4e92\u5f0f\u5e94\u7528\uff0c\u5b9e\u73b0\u521b\u5efa\u5404\u4e2a\u96c6\u7fa4\u4e0b\u5747\u53ef\u4ee5\u4f7f\u7528\u7684\u4ea4\u4e92\u5f0f\u5e94\u7528\u3002",date:"2023-07-05T00:00:00.000Z",formattedDate:"2023\u5e747\u67085\u65e5",tags:[{label:"scow",permalink:"/SCOW/pr-preview/pr-830/blog/tags/scow"},{label:"scow-portal-apps",permalink:"/SCOW/pr-preview/pr-830/blog/tags/scow-portal-apps"},{label:"scow-apps",permalink:"/SCOW/pr-preview/pr-830/blog/tags/scow-apps"}],readingTime:1.305,hasTruncateMarker:!1,authors:[{name:"Sun Yixin",title:"Developer",url:"https://github.com/piccaSun",imageURL:"https://avatars.githubusercontent.com/u/43978285",key:"sunyixin"}],frontMatter:{slug:"update-portal-app",title:"\u4ea4\u4e92\u5f0f\u5e94\u7528\u914d\u7f6e\u66f4\u65b0",authors:["sunyixin"],tags:["scow","scow-portal-apps","scow-apps"]},nextItem:{title:"SCOW\u8c03\u5ea6\u5668\u9002\u914d\u5668",permalink:"/SCOW/pr-preview/pr-830/blog/scow-scheduler-adapter"}},i={authorsImageUrls:[void 0]},c=[],s={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u4e0a\u4e00\u4e2a\u7248\u672c\uff0c\u5728SCOW\u95e8\u6237\u7cfb\u7edf\u7684\u4ea4\u4e92\u5f0f\u5e94\u7528\u4e0b\uff0c\u6211\u4eec\u901a\u8fc7\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"config/apps"),"\u4e0b\u914d\u7f6e\u7684\u4ea4\u4e92\u5f0f\u5e94\u7528\uff0c\u5b9e\u73b0\u521b\u5efa\u5404\u4e2a\u96c6\u7fa4\u4e0b\u5747\u53ef\u4ee5\u4f7f\u7528\u7684\u4ea4\u4e92\u5f0f\u5e94\u7528\u3002\n\u4f46\u662f\u8003\u8651\u5230\u4e0d\u540c\u96c6\u7fa4\u7684\u8ba1\u7b97\u673a\u8282\u70b9\u4e0b\u5b89\u88c5\u73af\u5883\u4e0d\u540c\uff0c\u53ef\u80fd\u65e0\u6cd5\u6ee1\u8db3\u5bf9\u6240\u6709\u83b7\u53d6\u5230\u7684\u4ea4\u4e92\u5f0f\u5e94\u7528\u7684\u6b63\u5e38\u4f7f\u7528\u3002"),(0,a.kt)("p",null,"\u4e3a\u4e86\u8ba9\u5927\u5bb6\u66f4\u65b9\u4fbf\u3001\u9ad8\u6548\u5730\u7ba1\u7406\u548c\u4f7f\u7528SCOW\u96c6\u7fa4\uff0c\u6211\u4eec\u5728\u65b0\u7248\u672c\u7684\u4ea4\u4e92\u5f0f\u5e94\u7528\u914d\u7f6e\u90e8\u5206\uff0c\u5b9e\u73b0\u4e86\u4ee5\u4e0b\u529f\u80fd\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5b9e\u73b0\u5728",(0,a.kt)("inlineCode",{parentName:"li"},"config/clusters/{\u96c6\u7fa4ID}/apps"),"\u4e0b\u5bf9\u7279\u5b9a\u96c6\u7fa4\u53ef\u4ee5\u4f7f\u7528\u7684\u4ea4\u4e92\u5f0f\u5e94\u7528\u8fdb\u884c\u5355\u72ec\u914d\u7f6e"),(0,a.kt)("li",{parentName:"ul"},"\u540c\u65f6\u6709\u6548\u517c\u5bb9\u65e7\u7248\u672c",(0,a.kt)("inlineCode",{parentName:"li"},"config/apps"),"\u4e0b\u6240\u6709\u96c6\u7fa4\u5747\u53ef\u4ee5\u4f7f\u7528\u7684\u4ea4\u4e92\u5f0f\u5e94\u7528\u914d\u7f6e"),(0,a.kt)("li",{parentName:"ul"},"\u4ea4\u4e92\u5f0f\u5e94\u7528\u914d\u7f6e\u589e\u52a0\u53ef\u9009\u81ea\u5b9a\u4e49\u56fe\u6807\u914d\u7f6e\uff0c\u5728\u521b\u5efa\u5e94\u7528\u9875\u9762\u5b9e\u73b0\u4ea4\u4e92\u5f0f\u5e94\u7528\u56fe\u6807\u53ef\u89c6\u5316\u7ba1\u7406")),(0,a.kt)("p",null,"\u8be6\u7ec6\u8bf4\u660e\u53ef\u53c2\u8003SCOW",(0,a.kt)("inlineCode",{parentName:"p"},"\u90e8\u7f72\u548c\u914d\u7f6e"),"\u4e0b\u7684",(0,a.kt)("a",{parentName:"p",href:"https://PKUHPC.github.io/SCOW/pr-preview/pr-830/docs/deploy/config/portal/apps/configure-cluster-apps"},"\u591a\u96c6\u7fa4\u4e0b\u7684\u5e94\u7528\u914d\u7f6e"),"\u3002"))}m.isMDXComponent=!0}}]);