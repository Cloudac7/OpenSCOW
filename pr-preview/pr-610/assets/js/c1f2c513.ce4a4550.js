"use strict";(self.webpackChunk_scow_docs=self.webpackChunk_scow_docs||[]).push([[6314],{4852:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var l=n(9231);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=l.createContext({}),c=function(e){var t=l.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return l.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},u=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=c(n),u=a,k=d["".concat(p,".").concat(u)]||d[u]||m[u]||r;return n?l.createElement(k,i(i({ref:t},s),{},{components:n})):l.createElement(k,i({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<r;c++)i[c]=n[c];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}u.displayName="MDXCreateElement"},800:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var l=n(5675),a=(n(9231),n(4852));const r={sidebar_position:2,title:"scow-cli",description:"\u4f7f\u7528scow-cli\u7ba1\u7406SCOW\u96c6\u7fa4"},i=void 0,o={unversionedId:"deploy/install/scow-cli",id:"deploy/install/scow-cli",title:"scow-cli",description:"\u4f7f\u7528scow-cli\u7ba1\u7406SCOW\u96c6\u7fa4",source:"@site/docs/deploy/install/scow-cli.md",sourceDirName:"deploy/install",slug:"/deploy/install/scow-cli",permalink:"/SCOW/pr-preview/pr-610/docs/deploy/install/scow-cli",draft:!1,editUrl:"https://github.com/PKUHPC/SCOW/edit/main/website/docs/deploy/install/scow-cli.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"scow-cli",description:"\u4f7f\u7528scow-cli\u7ba1\u7406SCOW\u96c6\u7fa4"},sidebar:"deploy",previous:{title:"\u5b89\u88c5",permalink:"/SCOW/pr-preview/pr-610/docs/deploy/install/"},next:{title:"\u4ece\u6e90\u7801\u6784\u5efa",permalink:"/SCOW/pr-preview/pr-610/docs/deploy/install/build-from-source"}},p={},c=[{value:"\u5e38\u89c1\u547d\u4ee4\u7684\u5bf9\u7167",id:"\u5e38\u89c1\u547d\u4ee4\u7684\u5bf9\u7167",level:2}],s={toc:c},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,l.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"scow-cli\u662fSCOW\u96c6\u7fa4\u5b89\u88c5\u3001\u914d\u7f6e\u548c\u7ba1\u7406\u5de5\u5177\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528scow-cli\u9ad8\u6548\u7ba1\u7406\u60a8\u7684\u96c6\u7fa4\u3002"),(0,a.kt)("h1",{id:"\u4e0b\u8f7d"},"\u4e0b\u8f7d"),(0,a.kt)("p",null,"\u8bf7\u901a\u8fc7\u4ee5\u4e0b\u65b9\u6cd5\u4e0b\u8f7dscow-cli\uff0c\u5e76\u5c06\u4e0b\u8f7d\u7684\u6587\u4ef6\u89e3\u538b\uff0c\u5c06\u91cc\u9762\u7684\u53ef\u6267\u884c\u6587\u4ef6\u5b58\u653e\u5230\u60a8\u5c06\u4f1a\u5b58\u653eSCOW\u914d\u7f6e\u6587\u4ef6\u7684\u76ee\u5f55\u4e0b\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/PKUHPC/SCOW/releases"},"GitHub Release"),": SCOW\u6bcf\u6b21\u53d1\u5e03\u65b0\u7684\u7248\u672c\u65f6\uff0c\u5c06\u4f1a\u5c06\u6b64\u7248\u672c\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"scow-cli"),"\u4e0a\u4f20\u5230Release\u4e2d")),(0,a.kt)("p",null,"\u60f3\u83b7\u53d6\u6700\u65b0\u7684scow-cli\u7248\u672c\uff1f\u60a8\u53ef\u4ee5\u4eceGitHub Actions\u7684",(0,a.kt)("a",{parentName:"p",href:"https://github.com/PKUHPC/SCOW/actions/workflows/test-build-publish.yaml"},(0,a.kt)("inlineCode",{parentName:"a"},"Test, Build and Publish Projects")," workflow"),"\u4e2d\u4e0b\u8f7d\u5230\u4e0a\u4f20\u5230Archive\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"scow-cli"),"\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u53c2\u8003\u547d\u4ee4")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5982\u679c\u6ca1\u6709wget\uff0c\u53ef\u4ee5\u5148install\nyum install wget\n\n# \u4e0b\u8f7d\u5bf9\u5e94\u7684release\u7248\u672c\u3002\u4fee\u6539latest\u3001cli-x64\u53ef\u4e0b\u8f7d\u6307\u5b9a\u7248\u672ccli\n# \u4fee\u6539latest\u4e3av0.4.0\u5373\u53ef\u4e0b\u8f7d0.4.0\u7248\u672c\u7684cli\uff0c\u5982 https://github.com/PKUHPC/SCOW/releases/download/v0.4.0/cli-x64\n# \u53ef\u4fee\u6539cli-x64\u4e3acli-arm64\u4e0b\u8f7darm64\u7248\u672c\uff0c\u5982 https://github.com/PKUHPC/SCOW/releases/download/v0.4.0/cli-arm64\nwget https://github.com/PKUHPC/SCOW/releases/download/latest/cli-x64\n\n# \u91cd\u547d\u540d\nmv cli-x64 cli\n\n#\u4fee\u6539\u6587\u4ef6\u6743\u9650\nchmod +x cli\n")),(0,a.kt)("h1",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,a.kt)("p",null,"scow-cli\u4f7f\u7528\u8fd0\u884c\u76ee\u5f55\u4e0b\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"install.yaml"),"\u4f5c\u4e3a\u914d\u7f6e\u6765\u7ba1\u7406\u96c6\u7fa4\uff0c\u4f46\u60a8\u53ef\u4ee5\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"-c"),"\u547d\u4ee4\u884c\u9009\u9879\u6307\u5b9a",(0,a.kt)("inlineCode",{parentName:"p"},"install.yaml"),"\u7684\u8def\u5f84\u3002"),(0,a.kt)("h1",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# docker compose \u64cd\u4f5c\n# \u5728compose\u540e\u8ddf\u4efb\u610fcompose\u53c2\u6570\n# \u6ce8\u610f\uff1a\u6bcf\u6b21\u8fd0\u884ccompose\u7684\u64cd\u4f5c\u65f6\uff0ccli\u5c06\u4f1a\u5728\u672c\u76ee\u5f55\u4e0b\u521b\u5efa\u4e00\u4e2a\u4e34\u65f6\u7684docker-compose-{\u65f6\u95f4\u6233}.yml\u6587\u4ef6\uff0c\u8fd0\u884c\u7ed3\u675f\u540e\u4f1a\u5220\u9664\u6b64\u6587\u4ef6\n# \u4ee5\u4fdd\u8bc1docker compose\u914d\u7f6e\u7684\u5185\u5bb9\u4e3a\u6700\u65b0\n# \u542f\u52a8\u96c6\u7fa4\n./cli compose up -d\n# \u5173\u95ed\u96c6\u7fa4\n./cli compose down\n# \u66f4\u65b0\u955c\u50cf\n./cli compose pull\n\n# \u751f\u6210docker-compose.yml\u6587\u4ef6\n./cli generate -o docker-compose.yml\n\n# \u8fdb\u5165\u6570\u636e\u5e93\n./cli db\n\n# \u5c06\u793a\u4f8b\u914d\u7f6e\u6587\u4ef6\u653e\u5230\u5f53\u524d\u76ee\u5f55\u4e0b\n./cli init\n\n# \u67e5\u770b\u5f53\u524d\u4f7f\u7528install.yaml\u7684\u5185\u5bb9\n./cli view-install\n\n# \u68c0\u67e5./config\u76ee\u5f55\u4e0b\u7684SCOW\u914d\u7f6e\u6587\u4ef6\u7684\u683c\u5f0f\n./cli check-config\n")),(0,a.kt)("h1",{id:"\u4ecescow-deployment\u8fc1\u79fb"},"\u4ecescow-deployment\u8fc1\u79fb"),(0,a.kt)("p",null,"\u4ecescow-deployment\u8fc1\u79fb\u5230scow-cli\u662f\u975e\u5e38\u5bb9\u6613\u7684\u3002"),(0,a.kt)("p",null,"\u9996\u5148\uff0c\u8bf7\u5148\u4e0b\u8f7dscow-cli\u5230\u60a8\u7684scow-deployment\u6587\u4ef6\u5939\u4e2d\uff0c\u786e\u4fdd",(0,a.kt)("inlineCode",{parentName:"p"},"config.py"),"\u5b58\u5728\u4e8e\u76ee\u5f55\u4e2d\uff0c\u7136\u540e\u8fd0\u884c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"./cli migrate\n")),(0,a.kt)("p",null,"\u6b64\u547d\u4ee4\u5c06\u4f1a\u8bfb\u53d6\u5f53\u524d\u76ee\u5f55\u4e2d",(0,a.kt)("inlineCode",{parentName:"p"},"config.py"),"\u4e2d\u7684\u914d\u7f6e\uff0c\u5e76\u751f\u6210\u5bf9\u5e94\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"install.yaml"),"\u3002"),(0,a.kt)("p",null,"\u4e4b\u540e\uff0c\u60a8\u5c31\u53ef\u4ee5\u4f7f\u7528scow-cli\u6765\u7ba1\u7406\u60a8\u7684\u96c6\u7fa4\u4e86\u3002"),(0,a.kt)("h2",{id:"\u5e38\u89c1\u547d\u4ee4\u7684\u5bf9\u7167"},"\u5e38\u89c1\u547d\u4ee4\u7684\u5bf9\u7167"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u4f7f\u7528"),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"th"},"scow-deployment")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"th"},"scow-cli")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u542f\u52a8\u7cfb\u7edf"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"./compose.sh up -d")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"./cli compose up -d"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u505c\u6b62\u7cfb\u7edf"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"./compose.sh down")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"./cli compose down"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u8ddf\u968f\u67e5\u770b\u6240\u6709\u65e5\u5fd7"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"./compose.sh logs -f")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"./cli compose logs -f"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u66f4\u65b0\u955c\u50cf"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"./compose.sh pull")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"./cli compose pull"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u8fdb\u5165\u6570\u636e\u5e93"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"./db.sh")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"./cli db"))))),(0,a.kt)("h1",{id:"\u66f4\u65b0scow-cli"},"\u66f4\u65b0",(0,a.kt)("inlineCode",{parentName:"h1"},"scow-cli")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"scow-cli"),"\u53ef\u4ee5\u81ea\u6211\u66f4\u65b0\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u66f4\u65b0\u5230PR 535\u5bf9\u5e94\u7684\u6700\u65b0\u7684\u7248\u672c\n./cli update --pr 535\n\n# \u5c06test\u5206\u652f\u7684\u6700\u65b0cli\u4e0b\u8f7d\u5230./cli-test\n./cli update --pr 535 -o ./cli-test\n\n# \u66f4\u65b0\u5230test\u5206\u652f\u7684\u6700\u65b0cli\u7248\u672c\n./cli update --branch test\n\n# \u66f4\u65b0\u81f3\u6700\u65b0\u7248\u672c\u7684scow-cli\n./cli update\n\n# \u66f4\u65b0cli\u81f3v0.4.0\u7248\u672c\n./cli update --release v0.4.0\n\n# \u4e0b\u8f7dv0.4.0\u7248\u672c\u7684scow-cli\u5e76\u4fdd\u5b58\u5230./cli-test\n./cli update --release v0.4.0 -o ./cli-test\n")),(0,a.kt)("p",null,"\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"--pr"),"\u6216\u8005",(0,a.kt)("inlineCode",{parentName:"p"},"--branch"),"\u9009\u9879\u9700\u8981\u60a8\u521b\u5efa\u4e00\u4e2a\u6709",(0,a.kt)("inlineCode",{parentName:"p"},"workflow"),"\u6743\u9650\u7684GitHub Token ( ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/settings/tokens/new"},"https://github.com/settings/tokens/new")," )\uff0c\u5e76\u5c06\u8fd9\u4e2atoken\u653e\u5230cli\u76ee\u5f55\u4e0b\u7684",(0,a.kt)("inlineCode",{parentName:"p"},".env"),"\u6587\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-env",metastring:'title=".env"',title:'".env"'},"# .env\nGITHUB_TOKEN={token}\n")),(0,a.kt)("h1",{id:"\u4ee3\u7406"},"\u4ee3\u7406"),(0,a.kt)("p",null,"CLI\u9700\u8981\u8bbf\u95ee\u7f51\u7edc\u7684\u529f\u80fd\uff08\u4f8b\u5982\u66f4\u65b0scow-cli\uff09\u53ef\u4ee5\u8bbe\u7f6eHTTP\u4ee3\u7406\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e",(0,a.kt)("inlineCode",{parentName:"p"},"HTTPS_PROXY"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"https_proxy"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"HTTP_PROXY"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"http_proxy"),"\u73af\u5883\u53d8\u91cf\u6765\u8bbe\u7f6e\u4ee3\u7406\u3002\u5982\u679c\u591a\u4e2a\u73af\u5883\u53d8\u91cf\u540c\u65f6\u5b58\u5728\uff0c\u5219\u4f7f\u7528\u4f18\u5148\u7ea7\u4e3a\u4e0a\u9762\u5217\u51fa\u6765\u7684\u987a\u5e8f\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u73af\u5883\u53d8\u91cf\u4e5f\u53ef\u4ee5\u5199\u5165.env\u4e2d\nexport HTTPS_PROXY=http://localhost:1080\n./cli update\n")),(0,a.kt)("h1",{id:"\u6253\u5370\u8c03\u8bd5\u65e5\u5fd7"},"\u6253\u5370\u8c03\u8bd5\u65e5\u5fd7"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'LOG_LEVEL="debug" ./cli\n')))}m.isMDXComponent=!0}}]);