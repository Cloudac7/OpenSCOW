"use strict";(self.webpackChunk_scow_docs=self.webpackChunk_scow_docs||[]).push([[1957],{4852:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(9231);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,g=u["".concat(i,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(g,p(p({ref:t},c),{},{components:n})):a.createElement(g,p({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:r,p[1]=l;for(var s=2;s<o;s++)p[s]=n[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6513:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(5675),r=(n(9231),n(4852));const o={slug:"scow-update-to-v1.0",title:"SCOW\u5347\u7ea7\uff1a\u4ecev0.4.0(\u53ca\u4ee5\u4e0a)\u5230v1.0.0",authors:["huangjun"],tags:["scow","scow-deployment","v1.0.0"]},p=void 0,l={permalink:"/SCOW/pr-preview/pr-943/blog/scow-update-to-v1.0",editUrl:"https://github.com/PKUHPC/SCOW/edit/main/website/blog/blog/2023-10-20-scow-update1.0.md",source:"@site/blog/2023-10-20-scow-update1.0.md",title:"SCOW\u5347\u7ea7\uff1a\u4ecev0.4.0(\u53ca\u4ee5\u4e0a)\u5230v1.0.0",description:"\u672c\u6587\u6863\u9002\u7528\u4e8e\u4ecev0.4.0(\u53ca\u4ee5\u4e0a)\u5347\u7ea7\u5230v1.0.0\u3002",date:"2023-10-20T00:00:00.000Z",formattedDate:"2023\u5e7410\u670820\u65e5",tags:[{label:"scow",permalink:"/SCOW/pr-preview/pr-943/blog/tags/scow"},{label:"scow-deployment",permalink:"/SCOW/pr-preview/pr-943/blog/tags/scow-deployment"},{label:"v1.0.0",permalink:"/SCOW/pr-preview/pr-943/blog/tags/v-1-0-0"}],readingTime:3.29,hasTruncateMarker:!1,authors:[{name:"Huangjun",title:"Developer",url:"https://blog.csdn.net/huangjun0210?type=blog",imageURL:"https://avatars.githubusercontent.com/u/26295600",key:"huangjun"}],frontMatter:{slug:"scow-update-to-v1.0",title:"SCOW\u5347\u7ea7\uff1a\u4ecev0.4.0(\u53ca\u4ee5\u4e0a)\u5230v1.0.0",authors:["huangjun"],tags:["scow","scow-deployment","v1.0.0"]},nextItem:{title:"\u4ea4\u4e92\u5f0f\u5e94\u7528\u914d\u7f6e\u66f4\u65b0",permalink:"/SCOW/pr-preview/pr-943/blog/update-portal-app"}},i={authorsImageUrls:[void 0]},s=[],c={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u672c\u6587\u6863\u9002\u7528\u4e8e\u4ecev0.4.0(\u53ca\u4ee5\u4e0a)\u5347\u7ea7\u5230v1.0.0\u3002"),(0,r.kt)("h1",{id:"1-\u5347\u7ea7cli"},"1. \u5347\u7ea7cli"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u4e24\u79cd\u65b9\u5f0f\u5347\u7ea7cli\n# 1. \u76f4\u63a5\u4e0b\u8f7d\u66ff\u6362\u672c\u5730cli\nwget https://github.com/PKUHPC/SCOW/releases/download/v1.0.0/cli-x64\n\n# 2. \u4f7f\u7528\u547d\u4ee4\u5347\u7ea7\n./cli update --release v1.0.0\n")),(0,r.kt)("h1",{id:"2-\u6dfb\u52a0\u5ba1\u8ba1\u65e5\u5fd7\u529f\u80fd"},"2. \u6dfb\u52a0\u5ba1\u8ba1\u65e5\u5fd7\u529f\u80fd"),(0,r.kt)("p",null,"\u5728install.yaml\u6dfb\u52a0\u5982\u4e0b\u914d\u7f6e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'# \u53ef\u6dfb\u52a0\u5ba1\u8ba1\u65e5\u5fd7\u529f\u80fd\uff0c\u5e76\u914d\u7f6e\u5ba1\u8ba1\u65e5\u5fd7\u6570\u636e\u5e93\u5bc6\u7801\naudit:\n  dbPassword: "must!chang3this"\n')),(0,r.kt)("p",null,"install.yaml\u914d\u7f6e\u53c2\u8003(\u6781\u7b80\u914d\u7f6e)\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'port: 80\nbasePath: /\nimageTag: v1.0.0\nportal:\n  portMappings: {}\nmis:\n  dbPassword: must!chang3this\n  portMappings: {}\nlog:\n  fluentd:\n    logDir: /var/log/fluentd\nauth:\n  portMappings: {}\naudit:\n  dbPassword: "must!chang3this"\ngateway:\n  proxyReadTimeout: 36000s\n')),(0,r.kt)("p",null,"\u6dfb\u52a0\u5ba1\u8ba1\u65e5\u5fd7\u914d\u7f6e\u6587\u4ef6\uff0c\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"./config"),"\u76ee\u5f55\u4e0b\u6dfb\u52a0audit.yaml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# \u5ba1\u8ba1\u7cfb\u7edf\u6570\u636e\u5e93\u7684\u4fe1\u606f\u3002\u53ef\u4ee5\u4e0d\u4fee\u6539\ndb:\n  host: audit-db\n  port: 3306\n  user: root\n  dbName: scow_audit\n")),(0,r.kt)("h1",{id:"3-\u4fee\u6539misyaml"},"3. \u4fee\u6539mis.yaml"),(0,r.kt)("p",null,"\u4fee\u6539mis.yaml\uff0c\u53bb\u6389\u6e90\u4f5c\u4e1a\u6570\u636e\u5e93\u76f8\u5173\u914d\u7f6e\uff0c\u53bb\u6389",(0,r.kt)("inlineCode",{parentName:"p"},"fetchJobs.db"),"\u914d\u7f6e\uff0c\u7c7b\u4f3c\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'fetchJobs:\n  # \u6e90\u4f5c\u4e1a\u4fe1\u606f\u6570\u636e\u5e93\u7684\u6570\u636e\u5e93\u4fe1\u606f\n  db:\n    host: 192.168.188.11\n    port: 3306\n    user: root\n    password: "aUTx373~5pU@!&^6"\n    dbName: hpc\n    tableName: job_table\n    type: mysql\n')),(0,r.kt)("p",null,"mis.yaml\u914d\u7f6e\u53c2\u8003(\u6781\u7b80\u914d\u7f6e)\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'db:\n  host: db\n  port: 3306\n  user: root\n  dbName: scow\n\nfetchJobs:\n  periodicFetch:\n    enabled: true\n    cron: "10 */10 * * * *"\n\npredefinedChargingTypes:\n  - \u6d4b\u8bd5\n\naccountNamePattern:\n  regex: "(a_)[a-z]+$"\n')),(0,r.kt)("h1",{id:"4-\u90e8\u7f72\u9002\u914d\u5668"},"4. \u90e8\u7f72\u9002\u914d\u5668"),(0,r.kt)("p",null,"\u9002\u914d\u5668\u7f16\u8bd1\u90e8\u7f72\u53ef\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"https://github.com/PKUHPC/scow-slurm-adapter/blob/master/docs/deploy.md"},"\u6587\u6863"),"\u3002"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u7531\u4e8egithub\u4ee3\u7801\u4ed3\u5e93\u4e0b\u8f7d\u7684\u9002\u914d\u5668\u53ef\u6267\u884c\u7a0b\u5e8f\u662f\u7531github action\u751f\u6210\uff0cglibc\u7248\u672c(2.34)\u8f83\u9ad8\uff0c\u82e5slurm\u9002\u914d\u5668\u90e8\u7f72\u8282\u70b9\u7684glibc\u7248\u672c\u4f4e\u4e8e\u8be5\u7248\u672c\uff0c\u5efa\u8bae\u4e0b\u8f7d\u6e90\u7801\uff0c\u81ea\u884c\u7f16\u8bd1\u3002")),(0,r.kt)("h1",{id:"5-\u4fee\u6539\u96c6\u7fa4\u914d\u7f6e\u6587\u4ef6"},"5. \u4fee\u6539\u96c6\u7fa4\u914d\u7f6e\u6587\u4ef6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'displayName: hpc01\n\nloginNodes:\n  - name: hpc01_login01\n    address: hpc01_login01\n\nadapterUrl: "192.168.188.102:8999"\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u6ce8\u610f\u5c06\u767b\u5f55\u8282\u70b9",(0,r.kt)("inlineCode",{parentName:"p"},"loginNodes.address"),"\u53c2\u6570\u548c\u9002\u914d\u5668url",(0,r.kt)("inlineCode",{parentName:"p"},"adapterUrl"),"\u4fee\u6539\u4e3a\u5b9e\u9645\u96c6\u7fa4\u7684\u503c\u3002\u8be6\u7ec6\u914d\u7f6e\u53ef\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"https://pkuhpc.github.io/SCOW/docs/deploy/config/cluster-config"},"\u8be5\u6587\u6863"),"\u3002")),(0,r.kt)("h1",{id:"6-\u4ea4\u4e92\u5f0f\u5e94\u7528\u589e\u52a0\u56fe\u6807\u53ef\u9009"},"6. \u4ea4\u4e92\u5f0f\u5e94\u7528\u589e\u52a0\u56fe\u6807(\u53ef\u9009)"),(0,r.kt)("p",null,"\u652f\u6301\u4e3a\u4ea4\u4e92\u5f0f\u5e94\u7528\u914d\u7f6e\u56fe\u6807\uff1a\u5c06\u56fe\u6807\u6587\u4ef6\u4e0a\u4f20\u81f3",(0,r.kt)("inlineCode",{parentName:"p"},"./public/apps/"),"\u76ee\u5f55\uff0c\u5e76\u5728\u5e94\u7528\u914d\u7f6e\u6587\u4ef6\u4e2d\u6dfb\u52a0\u56fe\u6807\u7684\u8def\u5f84\u3002"),(0,r.kt)("p",null,"\u4f8b\u5982\u7ed9jupyter\u6dfb\u52a0\u4e00\u4e2a\u56fe\u6807(\u5df2\u5c06",(0,r.kt)("inlineCode",{parentName:"p"},"jupyter.png"),"\u4e0a\u4f20\u81f3",(0,r.kt)("inlineCode",{parentName:"p"},"./public/apps/"),")\uff0c\u5728jupyter.yaml\u4e2d\u6dfb\u52a0\u5982\u4e0b\u5185\u5bb9\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"logoPath: /apps/jupyter.png\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u591a\u96c6\u7fa4\u4e0b\u4ea4\u4e92\u5f0f\u5e94\u7528\u914d\u7f6e\u53ef\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"https://pkuhpc.github.io/SCOW/docs/deploy/config/portal/apps/configure-cluster-apps"},"\u8be5\u6587\u6863"),"\u3002")),(0,r.kt)("h1",{id:"7-\u767b\u5f55\u9875\u9762\u6dfb\u52a0slogan\u53ef\u9009"},"7. \u767b\u5f55\u9875\u9762\u6dfb\u52a0slogan(\u53ef\u9009)"),(0,r.kt)("p",null,"\u652f\u6301\u767b\u5f55\u754c\u9762\u81ea\u5b9a\u4e49slogan\u5185\u5bb9\uff0c\u4fee\u6539",(0,r.kt)("inlineCode",{parentName:"p"},"./config/auth.yaml"),"\u6587\u4ef6\uff0c\u6dfb\u52a0\u5982\u4e0b\u5185\u5bb9\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'ui:\n  backgroundImagePath: "./assets/background.png"\n  backgroundFallbackColor: "#9a0000"\n  logoType: "dark"\n  slogan: \n    color: "white"\n    title: "\u5f00\u6e90\u7b97\u529b\u4e2d\u5fc3\u95e8\u6237\u548c\u7ba1\u7406\u5e73\u53f0"\n    texts:\n       - "\u56fe\u5f62\u5316\u754c\u9762\uff0c\u4f7f\u7528\u65b9\u4fbf"\n       - "\u529f\u80fd\u4e30\u5bcc\uff0c\u7ba1\u7406\u7b80\u5355"\n       - "\u4e00\u4f53\u5316\u90e8\u7f72\uff0c\u5f00\u7bb1\u5373\u7528"\n       - "\u6807\u51c6\u5316\u5e73\u53f0\uff0c\u652f\u6301\u7b97\u529b\u878d\u5408"\n       - "\u5f00\u6e90\u4e2d\u7acb\uff0c\u72ec\u7acb\u81ea\u4e3b"\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u8be6\u7ec6\u914d\u7f6e\u53ef\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"https://pkuhpc.github.io/SCOW/docs/deploy/config/auth/config"},"\u8be5\u6587\u6863"),"\u3002")),(0,r.kt)("h1",{id:"8-\u91cd\u542f\u670d\u52a1"},"8. \u91cd\u542f\u670d\u52a1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Bash"},"./cli compose down\n./cli compose up -d \n")))}m.isMDXComponent=!0}}]);