"use strict";(self.webpackChunk_scow_docs=self.webpackChunk_scow_docs||[]).push([[9150],{4852:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>d});var r=n(9231);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),p=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},s=function(t){var e=p(t.components);return r.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,l(l({ref:e},s),{},{components:n})):r.createElement(f,l({ref:e},s))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8263:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(6215),a=(n(9231),n(4852));const o={sidebar_position:2,title:"SSH"},l="SSH\u8ba4\u8bc1\u7cfb\u7edf",i={unversionedId:"common/auth/ssh",id:"common/auth/ssh",title:"SSH",description:"\u672c\u8282\u4ecb\u7ecd\u5185\u7f6e\u8ba4\u8bc1\u7cfb\u7edf\u5e76\u91c7\u7528SSH\u8fdb\u884c\u7528\u6237\u8ba4\u8bc1\u7684\u8ba4\u8bc1\u7cfb\u7edf\u3002",source:"@site/docs/common/auth/ssh.md",sourceDirName:"common/auth",slug:"/common/auth/ssh",permalink:"/SCOW/docs/common/auth/ssh",draft:!1,editUrl:"https://github.com/PKUHPC/SCOW/edit/main/website/docs/common/auth/ssh.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"SSH"},sidebar:"common",previous:{title:"\u7b80\u4ecb",permalink:"/SCOW/docs/common/auth/"},next:{title:"LDAP",permalink:"/SCOW/docs/common/auth/ldap"}},c={},p=[{value:"\u914d\u7f6eSSH\u8ba4\u8bc1\u670d\u52a1",id:"\u914d\u7f6essh\u8ba4\u8bc1\u670d\u52a1",level:2}],s={toc:p};function u(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ssh\u8ba4\u8bc1\u7cfb\u7edf"},"SSH\u8ba4\u8bc1\u7cfb\u7edf"),(0,a.kt)("p",null,"\u672c\u8282\u4ecb\u7ecd\u5185\u7f6e\u8ba4\u8bc1\u7cfb\u7edf\u5e76\u91c7\u7528SSH\u8fdb\u884c\u7528\u6237\u8ba4\u8bc1\u7684\u8ba4\u8bc1\u7cfb\u7edf\u3002"),(0,a.kt)("p",null,"SSH\u8ba4\u8bc1\u662f\u975e\u5e38\u7b80\u5355\u7684\u8ba4\u8bc1\u65b9\u5f0f\u3002\u7528\u6237\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u548cSSH\u767b\u5f55\u96c6\u7fa4\u76f8\u540c\u7684\u7528\u6237\u540d\u548c\u5bc6\u7801\u6765\u767b\u5f55\u7cfb\u7edf\u3002"),(0,a.kt)("p",null,"SSH\u8ba4\u8bc1\u65b9\u5f0f\u6240\u652f\u6301\u7684\u529f\u80fd\u5982\u4e0b\u8868\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u529f\u80fd"),(0,a.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u652f\u6301"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u767b\u5f55"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u521b\u5efa"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u540d\u548c\u59d3\u540d\u9a8c\u8bc1"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u4fee\u6539\u5bc6\u7801"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426")))),(0,a.kt)("h2",{id:"\u914d\u7f6essh\u8ba4\u8bc1\u670d\u52a1"},"\u914d\u7f6eSSH\u8ba4\u8bc1\u670d\u52a1"),(0,a.kt)("p",null,"SSH\u8ba4\u8bc1\u65b9\u5f0f\u8981\u6c42\u7f16\u5199\u597d",(0,a.kt)("a",{parentName:"p",href:"/SCOW/docs/common/clusterConfig"},"\u96c6\u7fa4\u914d\u7f6e\u6587\u4ef6"),"\uff0c\u5e76\u4e14\u786e\u4fdd\u5176\u4e2d\u7b2c\u4e00\u4e2a\u96c6\u7fa4\u6709\u81f3\u5c11\u4e00\u4e2a\u767b\u5f55\u8282\u70b9\u3002"),(0,a.kt)("p",null,"\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"config/auth.yml"),"\u4e2d\u8f93\u5165\u4ee5\u4e0b\u5185\u5bb9\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config/auth.yml"',title:'"config/auth.yml"'},"# \u6307\u5b9a\u4f7f\u7528\u8ba4\u8bc1\u7c7b\u578b\u4e3aSSH\nauthType: ssh\n")),(0,a.kt)("p",null,"\u589e\u52a0\u597d\u914d\u7f6e\u540e\uff0c\u8fd0\u884c",(0,a.kt)("inlineCode",{parentName:"p"},"docker compose restart"),"\u91cd\u542f\u7cfb\u7edf\u5373\u53ef\u3002"))}u.isMDXComponent=!0}}]);