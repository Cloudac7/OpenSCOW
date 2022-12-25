"use strict";(self.webpackChunk_scow_docs=self.webpackChunk_scow_docs||[]).push([[2113],{4852:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var a=n(9231);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),k=d(n),c=r,s=k["".concat(o,".").concat(c)]||k[c]||u[c]||p;return n?a.createElement(s,l(l({ref:t},m),{},{components:n})):a.createElement(s,l({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,l=new Array(p);l[0]=k;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var d=2;d<p;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},4173:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>p,metadata:()=>i,toc:()=>d});var a=n(9675),r=(n(9231),n(4852));const p={sidebar_position:2,title:"\u914d\u7f6eWeb\u7c7b\u5e94\u7528"},l="\u914d\u7f6eWeb\u7c7b\u5e94\u7528",i={unversionedId:"deploy/SCOW/portal/apps/configure-web-app",id:"deploy/SCOW/portal/apps/configure-web-app",title:"\u914d\u7f6eWeb\u7c7b\u5e94\u7528",description:"\u524d\u63d0\u6761\u4ef6",source:"@site/docs/deploy/SCOW/portal/apps/configure-web-app.md",sourceDirName:"deploy/SCOW/portal/apps",slug:"/deploy/SCOW/portal/apps/configure-web-app",permalink:"/SCOW/pr-preview/pr-381/docs/deploy/SCOW/portal/apps/configure-web-app",draft:!1,editUrl:"https://github.com/PKUHPC/SCOW/edit/main/website/docs/deploy/SCOW/portal/apps/configure-web-app.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"\u914d\u7f6eWeb\u7c7b\u5e94\u7528"},sidebar:"deploy",previous:{title:"\u914d\u7f6e\u684c\u9762\u7c7b\u5e94\u7528",permalink:"/SCOW/pr-preview/pr-381/docs/deploy/SCOW/portal/apps/configure-vnc-app"},next:{title:"Jupyter",permalink:"/SCOW/pr-preview/pr-381/docs/deploy/SCOW/portal/apps/configure-jupyter-app"}},o={},d=[{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",level:2},{value:"\u914d\u7f6e\u793a\u4f8b",id:"\u914d\u7f6e\u793a\u4f8b",level:2},{value:"\u914d\u7f6e\u89e3\u91ca",id:"\u914d\u7f6e\u89e3\u91ca",level:2},{value:"<code>proxyType</code>",id:"proxytype",level:3},{value:"<code>beforeScript</code>\u548c<code>script</code>",id:"beforescript\u548cscript",level:3},{value:"<code>connect</code>",id:"connect",level:3},{value:"<code>attributes</code>",id:"attributes",level:3}],m={toc:d};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u914d\u7f6eweb\u7c7b\u5e94\u7528"},"\u914d\u7f6eWeb\u7c7b\u5e94\u7528"),(0,r.kt)("h2",{id:"\u524d\u63d0\u6761\u4ef6"},"\u524d\u63d0\u6761\u4ef6"),(0,r.kt)("p",null,"\u8bf7\u786e\u4fdd\u5728\u9700\u8981\u8fd0\u884c\u5e94\u7528\u7684\u8ba1\u7b97\u8282\u70b9\u4e0a\u5b89\u88c5\u6709\u9700\u8981\u7684\u8f6f\u4ef6\u5305\u3002"),(0,r.kt)("h2",{id:"\u914d\u7f6e\u793a\u4f8b"},"\u914d\u7f6e\u793a\u4f8b"),(0,r.kt)("p",null,"\u4e0b\u9762\u4ee5\u4f7f\u7528",(0,r.kt)("a",{parentName:"p",href:"https://github.com/coder/code-server"},"coder/code-server"),"\u542f\u52a8VSCode\u7684\u914d\u7f6e\u4e3a\u4f8b\u6765\u8bb2\u89e3\u5982\u4f55\u914d\u7f6e\u4e00\u4e2a\u670d\u52a1\u5668\u7c7b\u5e94\u7528\u3002"),(0,r.kt)("p",null,"\u521b\u5efa",(0,r.kt)("inlineCode",{parentName:"p"},"config/apps"),"\u76ee\u5f55\uff0c\u5728\u91cc\u9762\u521b\u5efa",(0,r.kt)("inlineCode",{parentName:"p"},"vscode.yml"),"\u6587\u4ef6\uff0c\u5176\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config/apps/vscode.yml"',title:'"config/apps/vscode.yml"'},'# \u8fd9\u4e2a\u5e94\u7528\u7684ID\nid: vscode\n\n# \u8fd9\u4e2a\u5e94\u7528\u7684\u540d\u5b57\nname: VSCode\n\n# \u6307\u5b9a\u5e94\u7528\u7c7b\u578b\u4e3aweb\ntype: web\n\n# Web\u5e94\u7528\u7684\u914d\u7f6e\nweb:\n\n  # \u6307\u5b9a\u53cd\u5411\u4ee3\u7406\u7c7b\u578b\n  proxyType: relative\n\n  # \u51c6\u5907\u811a\u672c\n  beforeScript: |\n    export PORT=$(get_port)\n    export PASSWORD=$(get_password 12)\n\n  # \u8fd0\u884c\u4efb\u52a1\u7684\u811a\u672c\u3002\u53ef\u4ee5\u4f7f\u7528\u51c6\u5907\u811a\u672c\u5b9a\u4e49\u7684\u53d8\u91cf\n  script: |\n    PASSWORD=$PASSWORD code-server -vvv --bind-addr 0.0.0.0:$PORT --auth password\n\n  # \u5982\u4f55\u8fde\u63a5\u5e94\u7528\n  connect:\n    method: POST\n    path: /login\n    formData:\n      password: "{{ PASSWORD }}"\n\n')),(0,r.kt)("p",null,"\u589e\u52a0\u4e86\u6b64\u6587\u4ef6\u540e\uff0c\u5237\u65b0\u5373\u53ef\u3002"),(0,r.kt)("h2",{id:"\u914d\u7f6e\u89e3\u91ca"},"\u914d\u7f6e\u89e3\u91ca"),(0,r.kt)("h3",{id:"proxytype"},(0,r.kt)("inlineCode",{parentName:"h3"},"proxyType")),(0,r.kt)("p",null,"\u5bf9\u4e8eweb\u7c7b\u578b\u7684\u5e94\u7528\uff0c\u9700\u8981\u914d\u7f6e",(0,r.kt)("inlineCode",{parentName:"p"},"proxyType"),"\u3002\u4e0d\u540c\u7684\u4ea4\u4e92\u5f0f\u5e94\u7528\u4f7f\u7528\u4e86\u4e0d\u540c\u7684nginx proxy\u65b9\u5f0f\uff0c\u901a\u8fc7\u914d\u7f6e",(0,r.kt)("inlineCode",{parentName:"p"},"proxyType"),"\uff0c\u53ef\u4ee5\u5141\u8bb8\u5e94\u7528\u643a\u5e26\u4e0d\u540c\u7c7b\u578b\u7684uri\u5230\u540e\u7aef\u8ba1\u7b97\u8282\u70b9\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"proxyType"),"\u53ef\u4ee5\u914d\u7f6e\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"relative"),"\u6216\u8005",(0,r.kt)("inlineCode",{parentName:"p"},"absolute"),"\uff0c\u5982\u679c\u4e0d\u914d\u7f6e\u9ed8\u8ba4\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"relative"),"\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5982\u679c\u8bbe\u7f6e\u6210",(0,r.kt)("inlineCode",{parentName:"p"},"absolute"),"\uff0c\u4f1a\u628a\u5b8c\u6574URL\u8bf7\u6c42\u8def\u5f84\u53cd\u5411\u4ee3\u7406\u5230\u7ed9\u5b9a\u7684\u4e3b\u673a\u548c\u7aef\u53e3\u3002\u6bd4\u5982\u8bbf\u95ee\u4ee5\u4e0b\u5730\u5740\uff1a"),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://hpc.pku.edu/proxy/192.168.220.133/7383/index.html"},"https://hpc.pku.edu/proxy/192.168.220.133/7383/index.html"))),(0,r.kt)("p",{parentName:"li"},"\u4ee5\u4e0bURL\u8bf7\u6c42\u5c06\u4f1a\u88ab\u53d1\u9001\u7ed9\u8ba1\u7b97\u8282\u70b9",(0,r.kt)("inlineCode",{parentName:"p"},"192.168.220.133"),"\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"7383"),"\u7aef\u53e3\u3002"),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"/proxy/192.168.220.133/7383/index.html"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5982\u679c\u8bbe\u7f6e\u6210",(0,r.kt)("inlineCode",{parentName:"p"},"relative"),"\uff0c\u53ea\u4f7f\u7528URL\u8bf7\u6c42\u8def\u5f84\u7684\u8def\u5f84\u90e8\u5206\u5c06\u8bf7\u6c42\u53cd\u5411\u4ee3\u7406\u5230\u7ed9\u5b9a\u7684\u4e3b\u673a\u548c\u7aef\u53e3\u3002\u6bd4\u5982\u8bbf\u95ee\u4ee5\u4e0b\u5730\u5740\uff1a"),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://hpc.pku.edu/rproxy/192.168.220.133/4253/index.html"},"https://hpc.pku.edu/rproxy/192.168.220.133/4253/index.html"))),(0,r.kt)("p",{parentName:"li"},"\u4ee5\u4e0bURL\u8bf7\u6c42\u5c06\u4f1a\u88ab\u53d1\u9001\u7ed9\u8ba1\u7b97\u8282\u70b9",(0,r.kt)("inlineCode",{parentName:"p"},"192.168.220.133"),"\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"4253"),"\u7aef\u53e3\u3002"),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"/index.html")))),(0,r.kt)("h3",{id:"beforescript\u548cscript"},(0,r.kt)("inlineCode",{parentName:"h3"},"beforeScript"),"\u548c",(0,r.kt)("inlineCode",{parentName:"h3"},"script")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"beforeScript"),"\u90e8\u5206\u4e3a\u51c6\u5907\u811a\u672c\u3002\u8fd9\u4e2a\u811a\u672c\u7528\u6765\u51c6\u5907\u8fd0\u884c\u4efb\u52a1\u7684\u73af\u5883\u3002\u8fd9\u4e2a\u811a\u672c\u8981\u6c42\u5fc5\u987bexport\u4e24\u4e2a\u53d8\u91cf\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PORT"),"\uff1a\u7a0b\u5e8f\u5c06\u4f1a\u8fd0\u884c\u5728\u7684\u7aef\u53e3"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PASSWORD"),": \u8fde\u63a5\u7a0b\u5e8f\u7528\u7684\u5bc6\u7801")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"connect"),"\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"formData"),"\u9879\u9700\u8981\u4f7f\u7528\u7684\u53d8\u91cf\u4e5f\u9700\u8981\u5728\u6b64\u5904export\u3002"),(0,r.kt)("p",null,"\u51c6\u5907\u811a\u672c\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"export"),"\u7684\u53d8\u91cf\u53ef\u4ee5\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"script"),"\u4e2d\u4f7f\u7528\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"script"),"\u90e8\u5206\u4e3a\u5982\u4f55\u542f\u52a8\u8fd9\u4e2a\u5e94\u7528\u7684\u811a\u672c\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"beforeScript"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"script"),"\u4e2d\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u8f85\u52a9\u51fd\u6570\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u51fd\u6570\u540d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u4f5c\u7528"),(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8fd4\u56de\u503c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"get_port")),(0,r.kt)("td",{parentName:"tr",align:null},"\u83b7\u5f97\u4e00\u4e2a\u53ef\u7528\u7684TCP\u7aef\u53e3"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e00\u4e2a\u8c03\u7528\u65f6\u53ef\u7528\u7684TCP\u7aef\u53e3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"get_password")),(0,r.kt)("td",{parentName:"tr",align:null},"\u751f\u6210\u4e00\u4e2a\u5305\u542bA-Za-z0-9\u7684\u968f\u673a\u5bc6\u7801"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$1"),": \u5bc6\u7801\u957f\u5ea6"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5bc6\u7801")))),(0,r.kt)("p",null,"\u8fd9\u4e9b\u811a\u672c\uff0c\u4ee5\u53ca\u4e00\u4e9b\u8f85\u52a9\u7684\u811a\u672c\u5c06\u4f1a\u88ab\u4f5c\u4e3a\u4e00\u4e2a\u4f5c\u4e1a\u63d0\u4ea4\u7ed9\u8c03\u5ea6\u7cfb\u7edf\uff0c\u5e76\u6700\u7ec8\u5728\u67d0\u4e2a\u8ba1\u7b97\u8282\u70b9\u4e0a\u8fd0\u884c\u3002"),(0,r.kt)("h3",{id:"connect"},(0,r.kt)("inlineCode",{parentName:"h3"},"connect")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"connect"),"\u90e8\u5206\u5b9a\u4e49\u5982\u4f55\u8fde\u63a5\u5230\u5e94\u7528\u3002\u7cfb\u7edf\u5c06\u4f1a\u7ed9\u53ef\u4ee5\u8fde\u63a5\u7684\u5e94\u7528\u521b\u5efa\u4e00\u4e2a\u7528\u4e8e\u8fde\u63a5\u5e94\u7528\u7684a\u6807\u7b7e\u3002\u70b9\u51fba\u6807\u7b7e\u4e4b\u540e\uff0c\u7cfb\u7edf\u5c06\u4f1a\u6253\u5f00\u4e00\u4e2a\u65b0\u6807\u7b7e\u9875\uff0c\u6253\u5f00\u65b0\u6807\u7b7e\u9875\u65f6\u5b9e\u9645\u8fdb\u884c\u7684\u52a8\u4f5c\u5c06\u53ef\u4ee5\u5728\u8fd9\u91cc\u81ea\u5b9a\u4e49\u3002"),(0,r.kt)("p",null,"\u914d\u7f6e\u5982\u4e0b\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u89e3\u91ca"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"path")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b57\u7b26\u4e32"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65b0\u6807\u7b7e\u9875\u6240\u8bbf\u95ee\u7684\u76f8\u5bf9\u8def\u5f84")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"method")),(0,r.kt)("td",{parentName:"tr",align:null},'"GET" \u6216\u8005 "POST"'),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53d1\u8d77\u4e00\u4e2a\u4ec0\u4e48\u7684HTTP\u8bf7\u6c42")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"query")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b57\u7b26\u4e32\u5230\u5b57\u7b26\u4e32\u7684\u5b57\u5178"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8fde\u63a5\u65f6\u9644\u5e26\u7684query")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"formData")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b57\u7b26\u4e32\u5230\u5b57\u7b26\u4e32\u7684\u5b57\u5178"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5982\u679c",(0,r.kt)("inlineCode",{parentName:"td"},"method"),"\u662fPOST\uff0c\u8fd9\u4e2a\u8bf7\u6c42\u5c06\u4f1a\u5e26\u7684form data")))),(0,r.kt)("p",null,"\u6211\u4eec\u63a8\u8350\u5c06\u5e94\u7528\u4f7f\u7528\u5bc6\u7801\u65b9\u5f0f\u8fdb\u884c\u52a0\u5bc6\uff0c\u6240\u4ee5\u4e00\u822c\u5728\u8fde\u63a5\u65f6\u9700\u8981\u5c06\u5bc6\u7801\u8f93\u5165\u7ed9\u5e94\u7528\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"path"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"query"),"\u7684\u503c\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"formData"),"\u7684\u503c\u90e8\u5206\u53ef\u4ee5\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"{{ PASSWORD }}"),"\u4ee3\u66ff\u5e94\u7528\u5728\u521b\u5efa\u65f6\u751f\u6210\u7684\u5bc6\u7801\u3002"),(0,r.kt)("p",null,"\u6b64\u5916\uff0c\u5982\u679c",(0,r.kt)("inlineCode",{parentName:"p"},"formData"),"\u9700\u8981\u4f7f\u7528\u5176\u4ed6\u53d8\u91cf\uff0c\u53ef\u4ee5\u5728\u51c6\u5907\u811a\u672c",(0,r.kt)("inlineCode",{parentName:"p"},"beforeScript"),"\u4e2dexport\u9700\u8981\u7684\u53d8\u91cf\uff0c\u7136\u540e\u4ee5",(0,r.kt)("inlineCode",{parentName:"p"},"{{ \u53d8\u91cf\u540d }}"),"\u7684\u5f62\u5f0f\u4f7f\u7528\u3002"),(0,r.kt)("h3",{id:"attributes"},(0,r.kt)("inlineCode",{parentName:"h3"},"attributes")),(0,r.kt)("p",null,"\u5982\u679c\u9700\u8981\u6307\u5b9a\u5e94\u7528\u7248\u672c\uff0c\u53ef\u4ee5\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"attributes"),"\u914d\u7f6e\u9879\u6dfb\u52a0\u81ea\u5b9a\u4e49HTML\u8868\u5355\uff0c\u5177\u4f53\u914d\u7f6e\u793a\u4f8b\u8bf7\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"/SCOW/pr-preview/pr-381/docs/deploy/SCOW/portal/apps/configure-attributes"},"attributes\u914d\u7f6e"),"\u3002"))}u.isMDXComponent=!0}}]);