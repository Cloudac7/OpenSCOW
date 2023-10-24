"use strict";(self.webpackChunk_scow_docs=self.webpackChunk_scow_docs||[]).push([[1337],{4852:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(9231);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),m=l,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,a=new Array(o);a[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[u]="string"==typeof e?e:l,a[1]=p;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5463:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=n(5675),l=(n(9231),n(4852));const o={sidebar_position:1,title:"\u8fd0\u7ef4"},a="\u8fd0\u7ef4",p={unversionedId:"deploy/ops/index",id:"deploy/ops/index",title:"\u8fd0\u7ef4",description:"\u672c\u8282\u4ecb\u7ecd\u5982\u4f55\u5bf9\u7cfb\u7edf\u8fdb\u884c\u7684\u5e38\u89c1\u8fd0\u7ef4\u64cd\u4f5c\u3002",source:"@site/docs/deploy/ops/index.md",sourceDirName:"deploy/ops",slug:"/deploy/ops/",permalink:"/SCOW/pr-preview/pr-911/docs/deploy/ops/",draft:!1,editUrl:"https://github.com/PKUHPC/SCOW/edit/main/website/docs/deploy/ops/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\u8fd0\u7ef4"},sidebar:"deploy",previous:{title:"\u591a\u96c6\u7fa4\u7ba1\u7406",permalink:"/SCOW/pr-preview/pr-911/docs/multi_cluster"}},i={},s=[{value:"\u66f4\u65b0",id:"\u66f4\u65b0",level:2},{value:"\u65e5\u5fd7",id:"\u65e5\u5fd7",level:2},{value:"\u67e5\u770b\u65e5\u5fd7",id:"\u67e5\u770b\u65e5\u5fd7",level:3},{value:"\u914d\u7f6e\u65e5\u5fd7\u8f93\u51fa",id:"\u914d\u7f6e\u65e5\u5fd7\u8f93\u51fa",level:3}],c={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,l.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u8fd0\u7ef4"},"\u8fd0\u7ef4"),(0,l.kt)("p",null,"\u672c\u8282\u4ecb\u7ecd\u5982\u4f55\u5bf9\u7cfb\u7edf\u8fdb\u884c\u7684\u5e38\u89c1\u8fd0\u7ef4\u64cd\u4f5c\u3002"),(0,l.kt)("h2",{id:"\u66f4\u65b0"},"\u66f4\u65b0"),(0,l.kt)("p",null,"SCOW\u901a\u8fc7\u5bb9\u5668\u955c\u50cf\u5206\u53d1\uff0c\u7248\u672c\u53f7\u5373SCOW\u955c\u50cf\u7684tag\u540d\u3002"),(0,l.kt)("p",null,"\u8981\u66f4\u65b0SCOW\uff0c\u8bf7\u4fee\u6539",(0,l.kt)("inlineCode",{parentName:"p"},"install.yaml"),"\u4e2d\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"imageTag"),"\u4e3a\u60a8\u60f3\u66f4\u65b0\u5230\u7684\u7248\u672c\uff08tag\u540d\uff09\uff0c\u4f8b\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="install.yaml"',title:'"install.yaml"'},"# \u4f7f\u7528v0.4.0\u7248\u672c\nimageTag: v0.4.0\n")),(0,l.kt)("p",null,"\u4fee\u6539\u5b8c\u6210\u540e\uff0c\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u66f4\u65b0\u5bb9\u5668\u955c\u50cf\u5e76\u91cd\u65b0\u7cfb\u7edf\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"./cli compose pull\n./cli compose up -d\n")),(0,l.kt)("p",null,"\u5982\u679c\u66f4\u65b0\u5f15\u5165\u4e86\u7834\u574f\u6027\u7684\u53d8\u66f4\uff0c\u8bf7\u6839\u636e\u5bf9\u5e94\u7684\u66f4\u65b0\u8bf4\u660e\uff0c\u4fee\u6539\u914d\u7f6e\u540e\u5728\u8fdb\u884c\u90e8\u7f72\u3002"),(0,l.kt)("h2",{id:"\u65e5\u5fd7"},"\u65e5\u5fd7"),(0,l.kt)("h3",{id:"\u67e5\u770b\u65e5\u5fd7"},"\u67e5\u770b\u65e5\u5fd7"),(0,l.kt)("p",null,"\u5404\u4e2a\u7ec4\u4ef6\u7684\u65e5\u5fd7\u76f4\u63a5\u5199\u5230",(0,l.kt)("inlineCode",{parentName:"p"},"stdout"),"\u3002\u53ef\u4ee5\u4f7f\u7528\u5e38\u7528\u7684docker\u65e5\u5fd7\u7ba1\u7406\u547d\u4ee4\u6216\u8005\u5de5\u5177\u7ba1\u7406\u65e5\u5fd7\u3002\u5982\u679c\u4f7f\u7528\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"docker compose"),"\uff0c\u53ef\u4ee5\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"./cli compose logs -f"),"\u540e\u9762\u8ddf\u5bf9\u5e94\u670d\u52a1\u540d\u79f0\u7684\u65b9\u5f0f\u67e5\u770b\u670d\u52a1\u7684\u65e5\u5fd7\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u67e5\u770b\u8ba4\u8bc1\u7cfb\u7edf\u7684\u65e5\u5fd7\n./cli compose logs -f auth\n\n# \u67e5\u770b\u95e8\u6237\u7cfb\u7edf\u670d\u52a1\u5668\u7aef\u7684\u65e5\u5fd7\n./cli compose logs -f portal-server\n\n# \u67e5\u770b\u7ba1\u7406\u7cfb\u7edf\u670d\u52a1\u5668\u7aef\u7684\u65e5\u5fd7\n./cli compose logs -f mis-server\n")),(0,l.kt)("h3",{id:"\u914d\u7f6e\u65e5\u5fd7\u8f93\u51fa"},"\u914d\u7f6e\u65e5\u5fd7\u8f93\u51fa"),(0,l.kt)("p",null,"\u60a8\u53ef\u4ee5\u901a\u8fc7\u5b89\u88c5\u914d\u7f6e\u6587\u4ef6\u914d\u7f6e\u95e8\u6237\u7cfb\u7edf\u540e\u7aef\uff08",(0,l.kt)("inlineCode",{parentName:"p"},"portal-server"),"\uff09\u3001\u7ba1\u7406\u7cfb\u7edf\u540e\u7aef\uff08",(0,l.kt)("inlineCode",{parentName:"p"},"mis-server"),"\uff09\u548c\u5185\u7f6e\u8ba4\u8bc1\u7cfb\u7edf\uff08",(0,l.kt)("inlineCode",{parentName:"p"},"auth"),"\uff09\u7684\u65e5\u5fd7\u8f93\u51fa\u9009\u9879\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="install.yaml"',title:'"install.yaml"'},'log:\n  # LOG.LEVEL: \u65e5\u5fd7\u7b49\u7ea7\uff0c\u53ef\u9009trace, debug, info, warn, error\u3002\u9ed8\u8ba4info\n  level: "info"\n\n  # LOG.PRETTY: \u662f\u5426\u8f93\u51fa\u66f4\u9002\u5408\u76f4\u63a5\u8bfb\u7684log\u3002\u5982\u679c\u4e3afalse\uff0c\u5219\u8f93\u51fajson\u683c\u5f0f\u7684\u65e5\u5fd7\u3002\u9ed8\u8ba4false\n  pretty: false\n')),(0,l.kt)("p",null,"\u5f53",(0,l.kt)("inlineCode",{parentName:"p"},"log.pretty"),"\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"true"),"\u65f6\uff0c\u8f93\u51fa\u65e5\u5fd7\u683c\u5f0f\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'[02:27:00.372] INFO (18): request completed\n    reqId: "req-3"\n    res: {\n      "statusCode": 200\n    }\n    responseTime: 0.3789879999967525\n')),(0,l.kt)("p",null,"\u5f53",(0,l.kt)("inlineCode",{parentName:"p"},"log.pretty"),"\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"false"),"\u65f6\uff0c\u8f93\u51fa\u65e5\u5fd7\u683c\u5f0f\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"level":30,"time":1676429663943,"pid":18,"hostname":"d3fc2f53e863","reqId":"req-1","res":{"statusCode":200},"responseTime":4.37828900013119,"msg":"request completed"}\n')),(0,l.kt)("p",null,"\u5f53\u60a8\u9700\u8981\u4f7f\u7528\u65e5\u5fd7\u6536\u96c6\u5de5\u5177\u65f6\uff0c\u5efa\u8bae\u60a8\u4f7f\u7528JSON\u683c\u5f0f\u8f93\u51fa\u65e5\u5fd7\uff0c\u7136\u540e\u4f7f\u7528\u65e5\u5fd7\u5206\u6790\u5de5\u5177\u6765\u67e5\u770b\u548c\u5206\u6790\u6536\u96c6\u5230\u7684\u65e5\u5fd7\u3002"))}d.isMDXComponent=!0}}]);