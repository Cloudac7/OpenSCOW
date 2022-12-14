"use strict";(self.webpackChunk_scow_docs=self.webpackChunk_scow_docs||[]).push([[705],{4852:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(9231);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,y=d["".concat(i,".").concat(m)]||d[m]||c[m]||l;return r?n.createElement(y,o(o({ref:t},s),{},{components:r})):n.createElement(y,o({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7253:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var n=r(9675),a=(r(9231),r(4852));const l={sidebar_position:2,title:"SSH"},o="SSH\u8ba4\u8bc1\u7cfb\u7edf",p={unversionedId:"deploy/SCOW/auth/ssh",id:"deploy/SCOW/auth/ssh",title:"SSH",description:"\u672c\u8282\u4ecb\u7ecd\u5185\u7f6e\u8ba4\u8bc1\u7cfb\u7edf\u5e76\u91c7\u7528SSH\u8fdb\u884c\u7528\u6237\u8ba4\u8bc1\u7684\u8ba4\u8bc1\u7cfb\u7edf\u3002",source:"@site/docs/deploy/SCOW/auth/ssh.md",sourceDirName:"deploy/SCOW/auth",slug:"/deploy/SCOW/auth/ssh",permalink:"/SCOW/pr-preview/pr-366/docs/deploy/SCOW/auth/ssh",draft:!1,editUrl:"https://github.com/PKUHPC/SCOW/edit/main/website/docs/deploy/SCOW/auth/ssh.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"SSH"},sidebar:"deploy",previous:{title:"\u7b80\u4ecb",permalink:"/SCOW/pr-preview/pr-366/docs/deploy/SCOW/auth/"},next:{title:"LDAP",permalink:"/SCOW/pr-preview/pr-366/docs/deploy/SCOW/auth/ldap"}},i={},u=[{value:"\u914d\u7f6eSSH\u8ba4\u8bc1\u670d\u52a1",id:"\u914d\u7f6essh\u8ba4\u8bc1\u670d\u52a1",level:2}],s={toc:u};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ssh\u8ba4\u8bc1\u7cfb\u7edf"},"SSH\u8ba4\u8bc1\u7cfb\u7edf"),(0,a.kt)("p",null,"\u672c\u8282\u4ecb\u7ecd\u5185\u7f6e\u8ba4\u8bc1\u7cfb\u7edf\u5e76\u91c7\u7528SSH\u8fdb\u884c\u7528\u6237\u8ba4\u8bc1\u7684\u8ba4\u8bc1\u7cfb\u7edf\u3002"),(0,a.kt)("p",null,"SSH\u8ba4\u8bc1\u662f\u975e\u5e38\u7b80\u5355\u7684\u8ba4\u8bc1\u65b9\u5f0f\u3002\u7528\u6237\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u548cSSH\u767b\u5f55\u96c6\u7fa4\u76f8\u540c\u7684\u7528\u6237\u540d\u548c\u5bc6\u7801\u6765\u767b\u5f55\u7cfb\u7edf\u3002"),(0,a.kt)("p",null,"\u5728\u6b64\u8ba4\u8bc1\u65b9\u5f0f\u4e2d\uff0c\u7528\u6237\u7684\u7528\u6237ID\u4e3a\u5176\u5bf9\u5e94\u7684Linux\u7528\u6237\u540d\u3002"),(0,a.kt)("p",null,"SSH\u8ba4\u8bc1\u65b9\u5f0f\u6240\u652f\u6301\u7684\u529f\u80fd\u5982\u4e0b\u8868\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u529f\u80fd"),(0,a.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u652f\u6301"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u767b\u5f55"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u521b\u5efa"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u540d\u548c\u59d3\u540d\u9a8c\u8bc1"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u4fee\u6539\u5bc6\u7801"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426")))),(0,a.kt)("h2",{id:"\u914d\u7f6essh\u8ba4\u8bc1\u670d\u52a1"},"\u914d\u7f6eSSH\u8ba4\u8bc1\u670d\u52a1"),(0,a.kt)("p",null,"SSH\u8ba4\u8bc1\u65b9\u5f0f\u8981\u6c42\u7f16\u5199\u597d",(0,a.kt)("a",{parentName:"p",href:"/SCOW/pr-preview/pr-366/docs/deploy/config/clusterConfig"},"\u96c6\u7fa4\u914d\u7f6e\u6587\u4ef6"),"\uff0c\u5e76\u4e14\u786e\u4fdd\u5176\u4e2d\u7b2c\u4e00\u4e2a\u96c6\u7fa4\u6709\u81f3\u5c11\u4e00\u4e2a\u767b\u5f55\u8282\u70b9\u3002"),(0,a.kt)("p",null,"\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"config/auth.yml"),"\u4e2d\u8f93\u5165\u4ee5\u4e0b\u5185\u5bb9\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config/auth.yml"',title:'"config/auth.yml"'},"# \u6307\u5b9a\u4f7f\u7528\u8ba4\u8bc1\u7c7b\u578b\u4e3aSSH\nauthType: ssh\n")),(0,a.kt)("p",null,"\u589e\u52a0\u597d\u914d\u7f6e\u540e\uff0c\u8fd0\u884c",(0,a.kt)("inlineCode",{parentName:"p"},"./compose.sh restart"),"\u91cd\u542f\u7cfb\u7edf\u5373\u53ef\u3002"))}c.isMDXComponent=!0}}]);