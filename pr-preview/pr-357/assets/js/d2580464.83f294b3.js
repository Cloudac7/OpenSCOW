"use strict";(self.webpackChunk_scow_docs=self.webpackChunk_scow_docs||[]).push([[7071],{4852:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>N});var a=n(9231);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=d(n),N=l,c=u["".concat(o,".").concat(N)]||u[N]||k[N]||r;return n?a.createElement(c,p(p({ref:t},m),{},{components:n})):a.createElement(c,p({ref:t},m))}));function N(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,p=new Array(r);p[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:l,p[1]=i;for(var d=2;d<r;d++)p[d]=n[d];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4029:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>k,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var a=n(9675),l=(n(9231),n(4852));const r={sidebar_position:2,title:"\u914d\u7f6eWeb\u7c7b\u5e94\u7528"},p="\u914d\u7f6eWeb\u7c7b\u5e94\u7528",i={unversionedId:"portal/apps/configure-web-app",id:"portal/apps/configure-web-app",title:"\u914d\u7f6eWeb\u7c7b\u5e94\u7528",description:"\u524d\u63d0\u6761\u4ef6",source:"@site/docs/portal/apps/configure-web-app.md",sourceDirName:"portal/apps",slug:"/portal/apps/configure-web-app",permalink:"/SCOW/pr-preview/pr-357/docs/portal/apps/configure-web-app",draft:!1,editUrl:"https://github.com/PKUHPC/SCOW/edit/main/website/docs/portal/apps/configure-web-app.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"\u914d\u7f6eWeb\u7c7b\u5e94\u7528"},sidebar:"portal",previous:{title:"\u914d\u7f6e\u684c\u9762\u7c7b\u5e94\u7528",permalink:"/SCOW/pr-preview/pr-357/docs/portal/apps/configure-vnc-app"},next:{title:"Jupyter",permalink:"/SCOW/pr-preview/pr-357/docs/portal/apps/configure-jupyter-app"}},o={},d=[{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",level:2},{value:"\u914d\u7f6e\u793a\u4f8b",id:"\u914d\u7f6e\u793a\u4f8b",level:2},{value:"\u914d\u7f6e\u89e3\u91ca",id:"\u914d\u7f6e\u89e3\u91ca",level:2},{value:"<code>proxyType</code>",id:"proxytype",level:3},{value:"<code>beforeScript</code>\u548c<code>script</code>",id:"beforescript\u548cscript",level:3},{value:"<code>connect</code>",id:"connect",level:3},{value:"<code>attributes</code>",id:"attributes",level:3},{value:"\u914d\u7f6e\u8f93\u5165\u7c7b\u578b\u4e3a\u6587\u672c\u7684HTML\u8868\u5355",id:"\u914d\u7f6e\u8f93\u5165\u7c7b\u578b\u4e3a\u6587\u672c\u7684html\u8868\u5355",level:4},{value:"\u914d\u7f6e\u8f93\u5165\u7c7b\u578b\u4e3a\u6570\u5b57\u7684HTML\u8868\u5355",id:"\u914d\u7f6e\u8f93\u5165\u7c7b\u578b\u4e3a\u6570\u5b57\u7684html\u8868\u5355",level:4},{value:"\u914d\u7f6e\u8f93\u5165\u4e3a\u4e0b\u62c9\u9009\u62e9\u5668\u7684HTML\u8868\u5355",id:"\u914d\u7f6e\u8f93\u5165\u4e3a\u4e0b\u62c9\u9009\u62e9\u5668\u7684html\u8868\u5355",level:4}],m={toc:d};function k(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u914d\u7f6eweb\u7c7b\u5e94\u7528"},"\u914d\u7f6eWeb\u7c7b\u5e94\u7528"),(0,l.kt)("h2",{id:"\u524d\u63d0\u6761\u4ef6"},"\u524d\u63d0\u6761\u4ef6"),(0,l.kt)("p",null,"\u8bf7\u786e\u4fdd\u5728\u9700\u8981\u8fd0\u884c\u5e94\u7528\u7684\u8ba1\u7b97\u8282\u70b9\u4e0a\u5b89\u88c5\u6709\u9700\u8981\u7684\u8f6f\u4ef6\u5305\u3002"),(0,l.kt)("h2",{id:"\u914d\u7f6e\u793a\u4f8b"},"\u914d\u7f6e\u793a\u4f8b"),(0,l.kt)("p",null,"\u4e0b\u9762\u4ee5\u4f7f\u7528",(0,l.kt)("a",{parentName:"p",href:"https://github.com/coder/code-server"},"coder/code-server"),"\u542f\u52a8VSCode\u7684\u914d\u7f6e\u4e3a\u4f8b\u6765\u8bb2\u89e3\u5982\u4f55\u914d\u7f6e\u4e00\u4e2a\u670d\u52a1\u5668\u7c7b\u5e94\u7528\u3002"),(0,l.kt)("p",null,"\u521b\u5efa",(0,l.kt)("inlineCode",{parentName:"p"},"config/apps"),"\u76ee\u5f55\uff0c\u5728\u91cc\u9762\u521b\u5efa",(0,l.kt)("inlineCode",{parentName:"p"},"vscode.yml"),"\u6587\u4ef6\uff0c\u5176\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config/apps/vscode.yml"',title:'"config/apps/vscode.yml"'},'# \u8fd9\u4e2a\u5e94\u7528\u7684ID\nid: vscode\n\n# \u8fd9\u4e2a\u5e94\u7528\u7684\u540d\u5b57\nname: VSCode\n\n# \u6307\u5b9a\u5e94\u7528\u7c7b\u578b\u4e3aweb\ntype: web\n\n\n# slurm\u914d\u7f6e\nslurm:\n  options:\n     - "-x node[1-2]"\n\n# Web\u5e94\u7528\u7684\u914d\u7f6e\nweb:\n\n  # \u6307\u5b9a\u53cd\u5411\u4ee3\u7406\u7c7b\u578b\n  proxyType: relative\n\n  # \u51c6\u5907\u811a\u672c\n  beforeScript: |\n    export PORT=$(get_port)\n    export PASSWORD=$(get_password 12)\n\n  # \u8fd0\u884c\u4efb\u52a1\u7684\u811a\u672c\u3002\u53ef\u4ee5\u4f7f\u7528\u51c6\u5907\u811a\u672c\u5b9a\u4e49\u7684\n  script: |\n    PASSWORD=$PASSWORD code-server -vvv --bind-addr 0.0.0.0:$PORT --auth password\n\n  # \u5982\u4f55\u8fde\u63a5\u5e94\u7528\n  connect:\n    method: POST\n    path: /login\n    formData:\n      password: "{{ PASSWORD }}"\n\n# \u914d\u7f6eHTML\u8868\u5355\uff0c\u7528\u6237\u53ef\u4ee5\u6307\u5b9acode-server\u7248\u672c      \nattributes:\n  - type: select\n    name: selectVersion\n    label: \u9009\u62e9\u7248\u672c\n    select:\n      - value: version10\n        label: v10\n      - value: version11\n        label: v11\n')),(0,l.kt)("p",null,"\u589e\u52a0\u4e86\u6b64\u6587\u4ef6\u540e\uff0c\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u91cd\u542fjob-server\u5373\u53ef\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"./compose.sh restart portal-web\n")),(0,l.kt)("h2",{id:"\u914d\u7f6e\u89e3\u91ca"},"\u914d\u7f6e\u89e3\u91ca"),(0,l.kt)("h3",{id:"proxytype"},(0,l.kt)("inlineCode",{parentName:"h3"},"proxyType")),(0,l.kt)("p",null,"\u5bf9\u4e8eweb\u7c7b\u578b\u7684\u5e94\u7528\uff0c\u9700\u8981\u914d\u7f6e",(0,l.kt)("inlineCode",{parentName:"p"},"proxyType"),"\u3002\u4e0d\u540c\u7684\u4ea4\u4e92\u5f0f\u5e94\u7528\u4f7f\u7528\u4e86\u4e0d\u540c\u7684nginx proxy\u65b9\u5f0f\uff0c\u901a\u8fc7\u914d\u7f6e",(0,l.kt)("inlineCode",{parentName:"p"},"proxyType"),"\uff0c\u53ef\u4ee5\u5141\u8bb8\u5e94\u7528\u643a\u5e26\u4e0d\u540c\u7c7b\u578b\u7684uri\u5230\u540e\u7aef\u8ba1\u7b97\u8282\u70b9\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"proxyType"),"\u53ef\u4ee5\u914d\u7f6e\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"relative"),"\u6216\u8005",(0,l.kt)("inlineCode",{parentName:"p"},"absolute"),"\uff0c\u5982\u679c\u4e0d\u914d\u7f6e\u9ed8\u8ba4\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"relative"),"\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5982\u679c\u8bbe\u7f6e\u6210",(0,l.kt)("inlineCode",{parentName:"p"},"absolute"),"\uff0c\u4f1a\u628a\u5b8c\u6574URL\u8bf7\u6c42\u8def\u5f84\u53cd\u5411\u4ee3\u7406\u5230\u7ed9\u5b9a\u7684\u4e3b\u673a\u548c\u7aef\u53e3\u3002\u6bd4\u5982\u8bbf\u95ee\u4ee5\u4e0b\u5730\u5740\uff1a"),(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://hpc.pku.edu/proxy/192.168.220.133/7383/index.html"},"https://hpc.pku.edu/proxy/192.168.220.133/7383/index.html"))),(0,l.kt)("p",{parentName:"li"},"\u4ee5\u4e0bURL\u8bf7\u6c42\u5c06\u4f1a\u88ab\u53d1\u9001\u7ed9\u8ba1\u7b97\u8282\u70b9",(0,l.kt)("inlineCode",{parentName:"p"},"192.168.220.133"),"\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"7383"),"\u7aef\u53e3\u3002"),(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"/proxy/192.168.220.133/7383/index.html"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5982\u679c\u8bbe\u7f6e\u6210",(0,l.kt)("inlineCode",{parentName:"p"},"relative"),"\uff0c\u53ea\u4f7f\u7528URL\u8bf7\u6c42\u8def\u5f84\u7684\u8def\u5f84\u90e8\u5206\u5c06\u8bf7\u6c42\u53cd\u5411\u4ee3\u7406\u5230\u7ed9\u5b9a\u7684\u4e3b\u673a\u548c\u7aef\u53e3\u3002\u6bd4\u5982\u8bbf\u95ee\u4ee5\u4e0b\u5730\u5740\uff1a"),(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://hpc.pku.edu/rproxy/192.168.220.133/4253/index.html"},"https://hpc.pku.edu/rproxy/192.168.220.133/4253/index.html"))),(0,l.kt)("p",{parentName:"li"},"\u4ee5\u4e0bURL\u8bf7\u6c42\u5c06\u4f1a\u88ab\u53d1\u9001\u7ed9\u8ba1\u7b97\u8282\u70b9",(0,l.kt)("inlineCode",{parentName:"p"},"192.168.220.133"),"\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"4253"),"\u7aef\u53e3\u3002"),(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"/index.html")))),(0,l.kt)("h3",{id:"beforescript\u548cscript"},(0,l.kt)("inlineCode",{parentName:"h3"},"beforeScript"),"\u548c",(0,l.kt)("inlineCode",{parentName:"h3"},"script")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"beforeScript"),"\u90e8\u5206\u4e3a\u51c6\u5907\u811a\u672c\u3002\u8fd9\u4e2a\u811a\u672c\u7528\u6765\u51c6\u5907\u8fd0\u884c\u4efb\u52a1\u7684\u73af\u5883\u3002\u8fd9\u4e2a\u811a\u672c\u8981\u6c42\u5fc5\u987bexport\u4e24\u4e2a\u53d8\u91cf\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"PORT"),"\uff1a\u7a0b\u5e8f\u5c06\u4f1a\u8fd0\u884c\u5728\u7684\u7aef\u53e3"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"PASSWORD"),": \u8fde\u63a5\u7a0b\u5e8f\u7528\u7684\u5bc6\u7801")),(0,l.kt)("p",null,"\u51c6\u5907\u811a\u672c\u4e2d\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"export"),"\u7684\u53d8\u91cf\u53ef\u4ee5\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"script"),"\u4e2d\u4f7f\u7528\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"script"),"\u90e8\u5206\u4e3a\u5982\u4f55\u542f\u52a8\u8fd9\u4e2a\u5e94\u7528\u7684\u811a\u672c\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"beforeScript"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"script"),"\u4e2d\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u8f85\u52a9\u51fd\u6570\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u51fd\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u4f5c\u7528"),(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8fd4\u56de\u503c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"get_port")),(0,l.kt)("td",{parentName:"tr",align:null},"\u83b7\u5f97\u4e00\u4e2a\u53ef\u7528\u7684TCP\u7aef\u53e3"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e00\u4e2a\u8c03\u7528\u65f6\u53ef\u7528\u7684TCP\u7aef\u53e3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"get_password")),(0,l.kt)("td",{parentName:"tr",align:null},"\u751f\u6210\u4e00\u4e2a\u5305\u542bA-Za-z0-9\u7684\u968f\u673a\u5bc6\u7801"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$1"),": \u5bc6\u7801\u957f\u5ea6"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5bc6\u7801")))),(0,l.kt)("p",null,"\u8fd9\u4e9b\u811a\u672c\uff0c\u4ee5\u53ca\u4e00\u4e9b\u8f85\u52a9\u7684\u811a\u672c\u5c06\u4f1a\u88ab\u4f5c\u4e3a\u4e00\u4e2a\u4f5c\u4e1a\u63d0\u4ea4\u7ed9\u8c03\u5ea6\u7cfb\u7edf\uff0c\u5e76\u6700\u7ec8\u5728\u67d0\u4e2a\u8ba1\u7b97\u8282\u70b9\u4e0a\u8fd0\u884c\u3002"),(0,l.kt)("h3",{id:"connect"},(0,l.kt)("inlineCode",{parentName:"h3"},"connect")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"connect"),"\u90e8\u5206\u5b9a\u4e49\u5982\u4f55\u8fde\u63a5\u5230\u5e94\u7528\u3002\u7cfb\u7edf\u5c06\u4f1a\u7ed9\u53ef\u4ee5\u8fde\u63a5\u7684\u5e94\u7528\u521b\u5efa\u4e00\u4e2a\u7528\u4e8e\u8fde\u63a5\u5e94\u7528\u7684a\u6807\u7b7e\u3002\u70b9\u51fba\u6807\u7b7e\u4e4b\u540e\uff0c\u7cfb\u7edf\u5c06\u4f1a\u6253\u5f00\u4e00\u4e2a\u65b0\u6807\u7b7e\u9875\uff0c\u6253\u5f00\u65b0\u6807\u7b7e\u9875\u65f6\u5b9e\u9645\u8fdb\u884c\u7684\u52a8\u4f5c\u5c06\u53ef\u4ee5\u5728\u8fd9\u91cc\u81ea\u5b9a\u4e49\u3002"),(0,l.kt)("p",null,"\u914d\u7f6e\u5982\u4e0b\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u89e3\u91ca"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"path")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b57\u7b26\u4e32"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65b0\u6807\u7b7e\u9875\u6240\u8bbf\u95ee\u7684\u76f8\u5bf9\u8def\u5f84")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"method")),(0,l.kt)("td",{parentName:"tr",align:null},'"GET" \u6216\u8005 "POST"'),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53d1\u8d77\u4e00\u4e2a\u4ec0\u4e48\u7684HTTP\u8bf7\u6c42")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"query")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b57\u7b26\u4e32\u5230\u5b57\u7b26\u4e32\u7684\u5b57\u5178"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8fde\u63a5\u65f6\u9644\u5e26\u7684query")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"formData")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b57\u7b26\u4e32\u5230\u5b57\u7b26\u4e32\u7684\u5b57\u5178"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5982\u679c",(0,l.kt)("inlineCode",{parentName:"td"},"method"),"\u662fPOST\uff0c\u8fd9\u4e2a\u8bf7\u6c42\u5c06\u4f1a\u5e26\u7684form data")))),(0,l.kt)("p",null,"\u6211\u4eec\u63a8\u8350\u5c06\u5e94\u7528\u4f7f\u7528\u5bc6\u7801\u65b9\u5f0f\u8fdb\u884c\u52a0\u5bc6\uff0c\u6240\u4ee5\u4e00\u822c\u5728\u8fde\u63a5\u65f6\u9700\u8981\u5c06\u5bc6\u7801\u8f93\u5165\u7ed9\u5e94\u7528\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"path"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"query"),"\u7684\u503c\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"formData"),"\u7684\u503c\u90e8\u5206\u53ef\u4ee5\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"{{ PASSWORD }}"),"\u4ee3\u66ff\u5e94\u7528\u5728\u521b\u5efa\u65f6\u751f\u6210\u7684\u5bc6\u7801\u3002"),(0,l.kt)("h3",{id:"attributes"},(0,l.kt)("inlineCode",{parentName:"h3"},"attributes")),(0,l.kt)("p",null,"\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"attributes"),"\u914d\u7f6e\u9879\uff0c\u53ef\u4ee5\u4fee\u6539\u521b\u5efa\u5e94\u7528\u7684HTML\u8868\u5355\uff0c\u5141\u8bb8\u7ba1\u7406\u5458\u5b9a\u4e49\u7528\u6237\u521b\u5efa\u4ea4\u4e92\u5f0f\u5e94\u7528\u65f6\u7684\u8868\u5355\u9009\u9879\uff0c\u8ba9\u7528\u6237\u80fd\u591f\u6307\u5b9a\u5e94\u7528\u7684\u7248\u672c\u7b49\u3002"),(0,l.kt)("p",null,"\u7528\u6237\u63d0\u4ea4\u7684\u5185\u5bb9\u4f1a\u4f5c\u4e3a\u8fd0\u884c\u5e94\u7528\u7684\u8ba1\u7b97\u8282\u70b9\u7684\u73af\u5883\u53d8\u91cf\u751f\u6548\u3002"),(0,l.kt)("p",null,"\u914d\u7f6e",(0,l.kt)("inlineCode",{parentName:"p"},"attributes"),"\u53ef\u4ee5\u52a0\u8f7d\u591a\u4e2aHTML\u8868\u5355\uff0c\u6bcf\u4e00\u6761\u53ef\u7528\u914d\u7f6e\u9879\u5982\u4e0b\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u89e3\u91ca"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"text")," \u6216\u8005 ",(0,l.kt)("inlineCode",{parentName:"td"},"select")),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5728HTML\u8868\u5355\u5143\u7d20\u4e2d\u8f93\u5165\u7684\u5185\u5bb9\u7684\u7c7b\u578b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"name")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b57\u7b26\u4e32"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"HTML\u8868\u5355\u7684name\u5c5e\u6027\uff0c\u5728\u7f16\u7a0b\u4e2d\u4f7f\u7528\uff0c\u5e76\u4e14\u4f1a\u4f5c\u4e3a\u8ba1\u7b97\u8282\u70b9\u73af\u5883\u53d8\u91cf\u540d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"label")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b57\u7b26\u4e32"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"HTML\u8868\u5355\u7684label\u5c5e\u6027\uff0c\u8f93\u5165\u6846\u5de6\u4fa7\u663e\u793a\u7684\u6807\u7b7e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"select")),(0,l.kt)("td",{parentName:"tr",align:null},"\u9009\u9879\u7684\u5217\u8868"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5982\u679c",(0,l.kt)("inlineCode",{parentName:"td"},"type"),"\u662f",(0,l.kt)("inlineCode",{parentName:"td"},"select"),"\uff0c\u5fc5\u987b\u914d\u7f6e\u6b64\u9879\uff0c\u6307\u660e\u5177\u4f53\u7684\u9009\u9879\uff0c\u5177\u4f53\u914d\u7f6e\u529e\u6cd5\u89c1",(0,l.kt)("inlineCode",{parentName:"td"},"select"),"\u793a\u4f8b")))),(0,l.kt)("h4",{id:"\u914d\u7f6e\u8f93\u5165\u7c7b\u578b\u4e3a\u6587\u672c\u7684html\u8868\u5355"},"\u914d\u7f6e\u8f93\u5165\u7c7b\u578b\u4e3a\u6587\u672c\u7684HTML\u8868\u5355"),(0,l.kt)("p",null,"\u914d\u7f6e\u4e00\u4e2a\u8f93\u5165\u5185\u5bb9\u662f\u6587\u672c\u7c7b\u578b\u7684\u8868\u5355\uff0c\u9700\u8981\u6307\u5b9a",(0,l.kt)("inlineCode",{parentName:"p"},"type"),"\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"text"),", \u793a\u4f8b\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"attributes:\n  - type: text\n    name: version\n    label: \u7248\u672c\n")),(0,l.kt)("p",null,"\u5982\u679c\u7528\u6237\u8f93\u5165\u4e86",(0,l.kt)("inlineCode",{parentName:"p"},"v3.4.5"),"\uff0c\u8ba1\u7b97\u8282\u70b9\u7684\u73af\u5883\u53d8\u91cf",(0,l.kt)("inlineCode",{parentName:"p"},"version=v3.4.5"),"\u53ef\u4ee5\u5728\u5e94\u7528\u542f\u52a8\u65f6\u88ab\u8bfb\u53d6\u3002"),(0,l.kt)("h4",{id:"\u914d\u7f6e\u8f93\u5165\u7c7b\u578b\u4e3a\u6570\u5b57\u7684html\u8868\u5355"},"\u914d\u7f6e\u8f93\u5165\u7c7b\u578b\u4e3a\u6570\u5b57\u7684HTML\u8868\u5355"),(0,l.kt)("p",null,"\u914d\u7f6e\u4e00\u4e2a\u8f93\u5165\u5185\u5bb9\u662f\u6570\u5b57\u7c7b\u578b\u7684\u8868\u5355\uff0c\u9700\u8981\u6307\u5b9a",(0,l.kt)("inlineCode",{parentName:"p"},"type"),"\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"number"),", \u6b64\u65f6\u7528\u6237\u4ec5\u80fd\u8f93\u5165\u6570\u5b57\uff0c\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"attributes:\n  - type: number\n    name: size\n    label: \u6570\u91cf\n")),(0,l.kt)("p",null,"\u5982\u679c\u7528\u6237\u8f93\u5165\u4e86345\uff0c\u8ba1\u7b97\u8282\u70b9\u7684\u73af\u5883\u53d8\u91cf",(0,l.kt)("inlineCode",{parentName:"p"},"size=345"),"\u53ef\u4ee5\u5728\u5e94\u7528\u542f\u52a8\u65f6\u88ab\u8bfb\u53d6\u3002"),(0,l.kt)("h4",{id:"\u914d\u7f6e\u8f93\u5165\u4e3a\u4e0b\u62c9\u9009\u62e9\u5668\u7684html\u8868\u5355"},"\u914d\u7f6e\u8f93\u5165\u4e3a\u4e0b\u62c9\u9009\u62e9\u5668\u7684HTML\u8868\u5355"),(0,l.kt)("p",null,"\u914d\u7f6e\u4e00\u4e2a\u8f93\u5165\u5185\u5bb9\u662f\u4e0b\u62c9\u9009\u62e9\u5668\u7684\u8868\u5355\uff0c\u9700\u8981\u6307\u5b9a",(0,l.kt)("inlineCode",{parentName:"p"},"type"),"\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"select"),",\u5e76\u4e14\u914d\u7f6e",(0,l.kt)("inlineCode",{parentName:"p"},"select"),"\u9879\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"select"),"\u9879\u9700\u8981\u914d\u7f6e",(0,l.kt)("inlineCode",{parentName:"p"},"value"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"label"),"\uff0c\u4f5c\u4e3a\u7528\u6237\u53ef\u4ee5\u9009\u62e9\u7684\u9009\u9879\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u89e3\u91ca"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"value")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b57\u7b26\u4e32"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"HTML\u8868\u5355\u9009\u9879\u7684value\u5c5e\u6027\uff0c\u5728\u7f16\u7a0b\u4e2d\u4f7f\u7528\uff0c\u5e76\u4e14\u4f1a\u4f5c\u4e3a\u8ba1\u7b97\u8282\u70b9\u73af\u5883\u53d8\u91cf\u7684\u503c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"label")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b57\u7b26\u4e32"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"HTML\u8868\u5355\u7684label\u5c5e\u6027\uff0c\u9009\u9879\u4e2d\u5c55\u793a\u7ed9\u7528\u6237\u7684\u6587\u672c")))),(0,l.kt)("p",null,"\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"attributes:\n  - type: select\n    name: selectVersion\n    label: \u9009\u62e9\u7248\u672c\n    select:\n      - value: version10\n        label: v10\n      - value: version11\n        label: v11\n")),(0,l.kt)("p",null,"\u5982\u679c\u7528\u6237\u9009\u62e9v11\u9009\u9879\uff0c\u8ba1\u7b97\u8282\u70b9\u7684\u73af\u5883\u53d8\u91cf ",(0,l.kt)("inlineCode",{parentName:"p"},"selectVersion=version11")," \u53ef\u4ee5\u5728\u5e94\u7528\u542f\u52a8\u65f6\u88ab\u8bfb\u53d6\u3002"),(0,l.kt)("p",null,"\u53ef\u4ee5\u914d\u7f6e\u591a\u4e2aHTML\u8868\u5355\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"attributes:\n  - type: text\n    name: version\n    label: \u7248\u672c\n  - type: number\n    name: size\n    label: \u6570\u91cf\n  - type: select\n    name: selectVersion\n    label: \u9009\u62e9\u7248\u672c\n    select:\n      - value: version10\n        label: v10\n      - value: version11\n        label: v11\n")))}k.isMDXComponent=!0}}]);