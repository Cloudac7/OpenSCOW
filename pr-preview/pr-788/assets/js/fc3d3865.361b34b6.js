"use strict";(self.webpackChunk_scow_docs=self.webpackChunk_scow_docs||[]).push([[8197],{54852:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>g});var r=t(49231);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=r.createContext({}),c=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(a.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(t),m=o,g=u["".concat(a,".").concat(m)]||u[m]||d[m]||i;return t?r.createElement(g,l(l({ref:n},s),{},{components:t})):r.createElement(g,l({ref:n},s))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,l=new Array(i);l[0]=m;var p={};for(var a in n)hasOwnProperty.call(n,a)&&(p[a]=n[a]);p.originalType=e,p[u]="string"==typeof e?e:o,l[1]=p;for(var c=2;c<i;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},74778:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var r=t(45675),o=(t(49231),t(54852));const i={sidebar_position:8,title:"\u63d2\u4ef6"},l="CLI\u63d2\u4ef6",p={unversionedId:"deploy/config/cli/plugins/index",id:"deploy/config/cli/plugins/index",title:"\u63d2\u4ef6",description:"\u5b9e\u9a8c\u6027\u529f\u80fd\uff01",source:"@site/docs/deploy/config/cli/plugins/index.md",sourceDirName:"deploy/config/cli/plugins",slug:"/deploy/config/cli/plugins/",permalink:"/SCOW/pr-preview/pr-788/docs/deploy/config/cli/plugins/",draft:!1,editUrl:"https://github.com/PKUHPC/SCOW/edit/main/website/docs/deploy/config/cli/plugins/index.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,title:"\u63d2\u4ef6"},sidebar:"deploy",previous:{title:"CLI",permalink:"/SCOW/pr-preview/pr-788/docs/category/cli"},next:{title:"\u7f51\u5173",permalink:"/SCOW/pr-preview/pr-788/docs/category/\u7f51\u5173"}},a={},c=[{value:"\u7f16\u5199\u548c\u914d\u7f6e",id:"\u7f16\u5199\u548c\u914d\u7f6e",level:2},{value:"\u63d2\u4ef6\u529f\u80fd",id:"\u63d2\u4ef6\u529f\u80fd",level:2},{value:"\u8986\u76d6<code>docker-compose.yml</code>",id:"\u8986\u76d6docker-composeyml",level:3},{value:"\u62d3\u5c55\u4e0e\u96c6\u6210",id:"\u62d3\u5c55\u4e0e\u96c6\u6210",level:2}],s={toc:c},u="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(u,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cli\u63d2\u4ef6"},"CLI\u63d2\u4ef6"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"\u5b9e\u9a8c\u6027\u529f\u80fd\uff01")),(0,o.kt)("h2",{id:"\u7f16\u5199\u548c\u914d\u7f6e"},"\u7f16\u5199\u548c\u914d\u7f6e"),(0,o.kt)("p",null,"\u60a8\u53ef\u4ee5\u901a\u8fc7\u548ccli\u540c\u7ea7\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"plugins"),"\u76ee\u5f55\u7f16\u5199CLI\u63d2\u4ef6\u3002"),(0,o.kt)("p",null,"\u6bcf\u4e2a\u63d2\u4ef6\u5360\u636e\u4e00\u4e2a\u76ee\u5f55\uff0c\u76ee\u5f55\u540d\u4e3a\u63d2\u4ef6\u7684ID\u3002\u4f8b\u5982",(0,o.kt)("inlineCode",{parentName:"p"},"plugins/plugin1"),"\uff0c\u5219\u6b64\u63d2\u4ef6id\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"plugin1"),"\u3002"),(0,o.kt)("p",null,"\u5f53\u60a8\u7f16\u5199\u597d\u63d2\u4ef6\u540e\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"p"},"install.yml"),"\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"plugins.enabledPlugins"),"\u9009\u9879\uff0c\u6307\u5b9a\u542f\u7528\u7684\u63d2\u4ef6\u3002"),(0,o.kt)("p",null,"\u4f8b\u5982\uff0c\u5982\u679c\u8981\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"plugin1"),"\u63d2\u4ef6\uff0c\u5219\u7f16\u5199"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="install.yml"',title:'"install.yml"'},'plugins: \n  enabledPlugins: ["plugin1"]\n')),(0,o.kt)("h2",{id:"\u63d2\u4ef6\u529f\u80fd"},"\u63d2\u4ef6\u529f\u80fd"),(0,o.kt)("h3",{id:"\u8986\u76d6docker-composeyml"},"\u8986\u76d6",(0,o.kt)("inlineCode",{parentName:"h3"},"docker-compose.yml")),(0,o.kt)("p",null,"\u60a8\u53ef\u4ee5\u901a\u8fc7\u6b64\u529f\u80fd\u66f4\u6539\u90e8\u7f72\u7684Docker Compose\u914d\u7f6e\uff0c\u4f8b\u5982\u5728SCOW\u7f51\u7edc\u4e2d\u90e8\u7f72\u5176\u4ed6\u7684\u5bb9\u5668\uff0c\u6216\u8005\u7ed9\u5df2\u6709\u7684\u670d\u52a1\u589e\u52a0\u65b0\u7684\u73af\u5883\u53d8\u91cf\u3001\u7aef\u53e3\u7b49\u3002"),(0,o.kt)("p",null,"\u5728\u63d2\u4ef6\u76ee\u5f55\u4e0b\uff0c\u60a8\u53ef\u4ee5\u7f16\u5199",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose.yml"),"\u6587\u4ef6\uff0c\u6b64\u6587\u4ef6\u5c06\u4f1a\u4e0eCLI\u751f\u6210\u7684Docker Compose\u914d\u7f6e\u6587\u4ef6\u5408\u5e76\u3002CLI\u5728\u8c03\u7528docker compose\u65f6\uff0c\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"docker compose -f {scow-cli\u751f\u6210\u7684compose\u6587\u4ef6} ...-f {\u6240\u6709\u63d2\u4ef6\u7684compose\u6587\u4ef6}"),"\u7684\u65b9\u6cd5\u6267\u884c\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="plugins/plugin1/docker-compose.yml"',title:'"plugins/plugin1/docker-compose.yml"'},'version: "3"\n\nservices: \n  extraService:\n    image: <\u60a8\u7684\u5bb9\u5668\u955c\u50cf>\n    # ...\n')),(0,o.kt)("h2",{id:"\u62d3\u5c55\u4e0e\u96c6\u6210"},"\u62d3\u5c55\u4e0e\u96c6\u6210"),(0,o.kt)("p",null,"\u5982\u679c\u60a8\u4ec5\u9700\u8981\u589e\u52a0\u90e8\u5206\u670d\u52a1\u7aef\u529f\u80fd\uff0c\u53ea\u9700\u8981\u589e\u52a0\u4e00\u4e2a\u63d2\u4ef6\u670d\u52a1\u5373\u53ef\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u60a8\u9700\u8981\u589e\u52a0\u9875\u9762\u529f\u80fd\uff0c\u5e76\u4e0escow\u7684http\u670d\u52a1\u7ed1\u5b9a\u5728\u540c\u4e00\u4e2a\u7aef\u53e3\u4e0a\uff0c\u9700\u8981\u5728\u589e\u52a0\u63d2\u4ef6\u670d\u52a1\u7684\u540c\u65f6\u589e\u52a0gateway\u7684\u914d\u7f6e\uff0c\u5177\u4f53\u53c2\u8003",(0,o.kt)("a",{parentName:"p",href:"/SCOW/pr-preview/pr-788/docs/deploy/config/gateway/config/"},"\u7f51\u5173\u914d\u7f6e")))}d.isMDXComponent=!0}}]);