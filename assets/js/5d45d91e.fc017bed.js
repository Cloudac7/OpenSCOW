"use strict";(self.webpackChunk_scow_docs=self.webpackChunk_scow_docs||[]).push([[2991],{4852:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>s});var a=n(9231);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),o=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=o(t.components);return a.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,u=d(t,["components","mdxType","originalType","parentName"]),k=o(n),s=r,N=k["".concat(p,".").concat(s)]||k[s]||m[s]||l;return n?a.createElement(N,i(i({ref:e},u),{},{components:n})):a.createElement(N,i({ref:e},u))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=k;var d={};for(var p in e)hasOwnProperty.call(e,p)&&(d[p]=e[p]);d.originalType=t,d.mdxType="string"==typeof t?t:r,i[1]=d;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},8965:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>o});var a=n(6215),r=(n(9231),n(4852));const l={sidebar_position:3,title:"LDAP"},i="LDAP\u8ba4\u8bc1\u7cfb\u7edf",d={unversionedId:"common/auth/ldap",id:"common/auth/ldap",title:"LDAP",description:"\u672c\u8282\u4ecb\u7ecd\u4f7f\u7528\u5185\u7f6e\u8ba4\u8bc1\u7cfb\u7edf\u5e76\u4f7f\u7528LDAP\u8fdb\u884c\u7528\u6237\u8ba4\u8bc1\u3002",source:"@site/docs/common/auth/ldap.md",sourceDirName:"common/auth",slug:"/common/auth/ldap",permalink:"/SCOW/docs/common/auth/ldap",draft:!1,editUrl:"https://github.com/PKUHPC/SCOW/edit/main/website/docs/common/auth/ldap.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"LDAP"},sidebar:"common",previous:{title:"SSH",permalink:"/SCOW/docs/common/auth/ssh"},next:{title:"\u81ea\u5b9a\u4e49",permalink:"/SCOW/docs/common/auth/custom"}},p={},o=[{value:"LDAP\u8ba4\u8bc1\u6d41\u7a0b",id:"ldap\u8ba4\u8bc1\u6d41\u7a0b",level:2},{value:"\u767b\u5f55",id:"\u767b\u5f55",level:3},{value:"\u521b\u5efa\u7528\u6237",id:"\u521b\u5efa\u7528\u6237",level:3},{value:"\u914d\u7f6eLDAP\u8ba4\u8bc1\u670d\u52a1",id:"\u914d\u7f6eldap\u8ba4\u8bc1\u670d\u52a1",level:2},{value:"LDAP\u5feb\u901f\u914d\u7f6e\u811a\u672c",id:"ldap\u5feb\u901f\u914d\u7f6e\u811a\u672c",level:2},{value:"LDAP\u955c\u50cf",id:"ldap\u955c\u50cf",level:2}],u={toc:o};function m(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ldap\u8ba4\u8bc1\u7cfb\u7edf"},"LDAP\u8ba4\u8bc1\u7cfb\u7edf"),(0,r.kt)("p",null,"\u672c\u8282\u4ecb\u7ecd\u4f7f\u7528\u5185\u7f6e\u8ba4\u8bc1\u7cfb\u7edf\u5e76\u4f7f\u7528LDAP\u8fdb\u884c\u7528\u6237\u8ba4\u8bc1\u3002"),(0,r.kt)("p",null,"LDAP\u8ba4\u8bc1\u7cfb\u7edf\u652f\u6301\u7684\u529f\u80fd\u5982\u4e0b\u8868\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u529f\u80fd"),(0,r.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u652f\u6301"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u767b\u5f55"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u521b\u5efa"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u540d\u548c\u59d3\u540d\u9a8c\u8bc1"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u4fee\u6539\u5bc6\u7801"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f")))),(0,r.kt)("h2",{id:"ldap\u8ba4\u8bc1\u6d41\u7a0b"},"LDAP\u8ba4\u8bc1\u6d41\u7a0b"),(0,r.kt)("p",null,"\u4e3a\u4e86\u66f4\u597d\u7684\u7406\u89e3\u5e76\u914d\u7f6eLDAP\u8ba4\u8bc1\u7cfb\u7edf\uff0c\u672c\u8282\u5c06\u4ecb\u7ecd\u5404\u4e2a\u64cd\u4f5c\u65f6\uff0cLDAP\u8ba4\u8bc1\u7cfb\u7edf\u6240\u8fdb\u884c\u7684\u64cd\u4f5c\u3002\u4e0b\u6587\u4e2d\uff0c\u4ee3\u7801\u5757\uff08\u5982",(0,r.kt)("inlineCode",{parentName:"p"},"ldap.bindDn"),"\uff09\u4e3a\u914d\u7f6e\u6587\u4ef6",(0,r.kt)("inlineCode",{parentName:"p"},"config/auth.yml"),"\u4e2d\u7684\u5bf9\u5e94\u503c\u3002\u8bf7\u786e\u8ba4\u60a8\u7684LDAP\u914d\u7f6e\u517c\u5bb9\u8fd9\u91cc\u6240\u79f0\u7684\u6d41\u7a0b\u3002"),(0,r.kt)("h3",{id:"\u767b\u5f55"},"\u767b\u5f55"),(0,r.kt)("p",null,"\u5f53\u7528\u6237\u767b\u5f55\u65f6\uff0c\u8ba4\u8bc1\u7cfb\u7edf\u83b7\u5f97\u7528\u6237\u7684\u7528\u6237\u540d\u548c\u5bc6\u7801\uff0c\u8fdb\u884c\u4ee5\u4e0b\u64cd\u4f5c\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"li"},"ldap.bindDn"),"\u548c",(0,r.kt)("inlineCode",{parentName:"li"},"ldap.bindPassword"),"\u4f5c\u4e3a\u7528\u6237\u540d\u548c\u5bc6\u7801\u4e0e\u5411LDAP\u670d\u52a1\u5668\u6240\u5728\u7684",(0,r.kt)("inlineCode",{parentName:"li"},"ldap.url"),"\u53d1\u8d77bind\u8bf7\u6c42"),(0,r.kt)("li",{parentName:"ol"},"bind\u6210\u529f\u540e\uff0c\u4ee5",(0,r.kt)("inlineCode",{parentName:"li"},"ldap.searchBase"),"\u4e3a\u641c\u7d22\u6839\uff0c\u4ee5sub\u6a21\u5f0f\uff0c\u4ee5",(0,r.kt)("inlineCode",{parentName:"li"},"ldap.filter")," \u548c (",(0,r.kt)("inlineCode",{parentName:"li"},"ldap.attrs.uid"),"\u7b49\u4e8e\u8f93\u5165\u7684\u7528\u6237\u540d) \u4e3a\u7b5b\u9009\u6761\u4ef6\u641c\u7d22\u8282\u70b9",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"\u5982\u679c\u641c\u7d22\u7ed3\u679c\u4e3a\u7a7a\uff0c\u5219\u767b\u5f55\u5931\u8d25"),(0,r.kt)("li",{parentName:"ol"},"\u5982\u679c\u641c\u7d22\u8282\u70b9\u6709\u591a\u4e2a\uff0c\u53d6\u7b2c\u4e00\u4e2a\u7ed3\u679c"))),(0,r.kt)("li",{parentName:"ol"},"\u4ee5",(0,r.kt)("strong",{parentName:"li"},"\u4e0a\u4e00\u4e2a\u7ed3\u679c\u7684DN"),"\u4ee5\u53ca",(0,r.kt)("strong",{parentName:"li"},"\u8f93\u5165\u7684\u5bc6\u7801"),"\u4f5c\u4e3a\u7528\u6237\u540d\u548c\u5bc6\u7801\uff0c\u4e0eLDAP\u670d\u52a1\u5668\u53d1\u8d77bind\u8bf7\u6c42",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"\u5982\u679cbind\u5931\u8d25\uff0c\u5219\u767b\u5f55\u5931\u8d25"))),(0,r.kt)("li",{parentName:"ol"},"\u767b\u5f55\u6210\u529f\u3002\u751f\u6210\u4e00\u4e2aUUID\u4f5c\u4e3atoken\uff0c\u5c06token\u4e0e",(0,r.kt)("strong",{parentName:"li"},"\u8f93\u5165\u7684\u7528\u6237\u540d"),"\u5b58\u5165redis"),(0,r.kt)("li",{parentName:"ol"},"\u91cd\u5b9a\u5411\u5230\u7528\u6237\u5728\u767b\u5f55\u65f6\uff0c\u901a\u8fc7querystring\u6307\u5b9a\u7684callback URL\uff0c\u5e76\u4f20\u5165",(0,r.kt)("inlineCode",{parentName:"li"},"token={token}"),"\u4f5c\u4e3aquerystring\u53c2\u6570")),(0,r.kt)("h3",{id:"\u521b\u5efa\u7528\u6237"},"\u521b\u5efa\u7528\u6237"),(0,r.kt)("p",null,"\u5f53\u7528\u6237\u5728\u8fd0\u8425\u7cfb\u7edf\u4e2d\u521b\u5efa\u540e\uff0c\u8ba4\u8bc1\u7cfb\u7edf\u83b7\u5f97\u65b0\u7528\u6237\u7684\u7528\u6237\u540d\u3001\u7528\u6237\u59d3\u540d\u3001\u5bc6\u7801\u548c\u90ae\u7bb1\uff0c\u8fdb\u884c\u4ee5\u4e0b\u64cd\u4f5c"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"li"},"ldap.bindDn"),"\u548c",(0,r.kt)("inlineCode",{parentName:"li"},"ldap.bindPassword"),"\u4f5c\u4e3a\u7528\u6237\u540d\u548c\u5bc6\u7801\u4e0e\u5411LDAP\u670d\u52a1\u5668\u6240\u5728\u7684",(0,r.kt)("inlineCode",{parentName:"li"},"ldap.url"),"\u53d1\u8d77bind\u8bf7\u6c42"),(0,r.kt)("li",{parentName:"ol"},"\u521b\u5efa\u4e00\u4e2a\u65b0\u7684entry\u4f5c\u4e3a\u7528\u6237\uff0c\u5176DN\u4ee5\u53ca\u5c5e\u6027\u503c\u5982\u4e0b\u8868\u6240\u793a\u3002\u5982\u679c\u60f3\u4fee\u6539\u8fd9\u4e9b\u503c\uff0c\u8bf7\u53c2\u8003\u914d\u7f6e\u9879\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"li"},"ldap.addUser.extraProps"),"\u5c5e\u6027")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027\u540d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u503c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DN"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{ldap.attrs.uid}=\u7528\u6237\u540d,{ldap.addUser.userBase}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ldap.attrs.uid")),(0,r.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u540d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ldap.attrs.name")),(0,r.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u59d3\u540d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sn"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u540d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"loginShell"),(0,r.kt)("td",{parentName:"tr",align:null},"/bin/bash")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"objectClass"),(0,r.kt)("td",{parentName:"tr",align:null},'["inetOrgPerson", "posixAccount", "shadowAccount"]')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"homeDirectory"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ldap.addUser.homeDir"),"\uff0c\u5176\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"td"},"{{ username }}"),"\u66ff\u6362\u4e3a\u7528\u6237\u540d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"uidNumber"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u4e2d\u7684\u7528\u6237\u9879\u7684id + ",(0,r.kt)("inlineCode",{parentName:"td"},"ldap.addUsaer.uidStart"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gidNumber"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u4e2d\u7684\u7528\u6237\u9879\u7684id + ",(0,r.kt)("inlineCode",{parentName:"td"},"ldap.addUser.uidStart"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ldap.attrs.mail"),"\uff08\u5982\u679c\u8bbe\u7f6e\u4e86\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u7684\u90ae\u7bb1")))),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"\u521b\u5efa\u4e00\u4e2a\u65b0\u7684entry\u4f5c\u4e3agroup\uff0c\u5176DN\u4ee5\u53ca\u5c5e\u6027\u503c\u5982\u4e0b\u8868\u6240\u793a\u3002")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027\u540d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u503c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DN"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{ldap.attrs.groupUserId}=\u7528\u6237\u540d,{ldap.addUser.groupBase}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"objectClass"),(0,r.kt)("td",{parentName:"tr",align:null},'["posixGroup"]')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"memberUid"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u540d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gidNumber"),(0,r.kt)("td",{parentName:"tr",align:null},"\u540c\u7528\u6237\u7684uidNumber")))),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"\u8bbe\u7f6e\u65b0\u7528\u6237\u7684\u5bc6\u7801\u4e3a\u7528\u6237\u8f93\u5165\u7684\u5bc6\u7801")),(0,r.kt)("h2",{id:"\u914d\u7f6eldap\u8ba4\u8bc1\u670d\u52a1"},"\u914d\u7f6eLDAP\u8ba4\u8bc1\u670d\u52a1"),(0,r.kt)("p",null,"\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"config/auth.yml"),"\u4e2d\u8f93\u5165\u4ee5\u4e0b\u5185\u5bb9\uff0c\u5e76\u6839\u636e\u60c5\u51b5\u914d\u7f6e\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config/auth.yml"',title:'"config/auth.yml"'},'# \u6307\u5b9a\u4f7f\u7528\u8ba4\u8bc1\u7c7b\u578b\u4e3aLDAP\nauthType: ldap\n\n# \u5728\u6b64\u90e8\u5206\u8f93\u5165LDAP\u7684\u914d\u7f6e\nldap:\n  # LDAP\u670d\u52a1\u5668\u5730\u5740\u3002\u5fc5\u586b\n  url: ldap://LDAP\u670d\u52a1\u5668\u5730\u5740\n\n  # \u8fdb\u884cLDAP\u64cd\u4f5c\u7684\u7528\u6237DN\u3002\u9ed8\u8ba4\u4e3a\u7a7a\n  # bindDN: ""\n  # \u8fdb\u884cLDAP\u64cd\u4f5c\u7684\u7528\u6237\u5bc6\u7801\u3002\u9ed8\u8ba4\u4e3a\u7a7a\n  # bindPassword: ""\n\n  # \u5728\u54ea\u4e2a\u8282\u70b9\u4e0b\u641c\u7d22\u8981\u767b\u5f55\u7684\u7528\u6237\u3002\u9ed8\u8ba4\u4e3a\u7a7a\n  # searchBase: ""\n  # \u641c\u7d22\u767b\u5f55\u7528\u6237\u65f6\u7684\u7b5b\u9009\u5668\u3002\u5fc5\u586b\n  userFilter: "(uid=*)"\n\n  # \u6dfb\u52a0\u7528\u6237\u7684\u76f8\u5173\u914d\u7f6e\u3002\u5fc5\u586b\n  addUser:\n    # \u589e\u52a0\u7528\u6237\u8282\u70b9\u65f6\uff0c\u628a\u7528\u6237\u589e\u52a0\u5230\u54ea\u4e2a\u8282\u70b9\u4e0b\n    userBase: "ou=People,ou={ou},o={dn}"\n    # \u589e\u52a0\u7528\u6237\u8282\u70b9\u65f6\uff0c\u628a\u7528\u6237\u5bf9\u5e94\u7684\u7ec4\u589e\u52a0\u5230\u54ea\u4e2a\u8282\u70b9\u4e0b\n    groupBase: "ou=Group,ou={ou},o={dn}"\n\n    # \u7528\u6237\u7684homeDirectory\u503c\u3002\u4f7f\u7528{{ userId }}\u4ee3\u66ff\u65b0\u7528\u6237\u7684\u7528\u6237\u540d\u3002\u9ed8\u8ba4\u5982\u4e0b\n    homeDir: /nfs/{{ userId }}\n\n    # \u662f\u5426\u5e94\u8be5\u628a\u65b0\u7528\u6237\u52a0\u5230\u54ea\u4e2aLDAP\u7ec4\u4e0b\u3002\u5982\u679c\u4e0d\u586b\uff0c\u5219\u4e0d\u52a0\n    # userToGroup: group\n\n    # uid\u4ece\u591a\u5c11\u5f00\u59cb\u3002\u751f\u6210\u7684\u7528\u6237\u7684uid\u7b49\u4e8e\u6b64\u503c\u52a0\u4e0a\u7528\u6237\u8d26\u6237\u4e2d\u521b\u5efa\u7684\u7528\u6237ID\u3002\u521b\u5efa\u7684Group\u7684gid\u548cuid\u548c\u6b64\u76f8\u540c\u3002\n    # \u9ed8\u8ba4\u5982\u4e0b\n    # uidStart: 66000\n\n    # \u7528\u6237\u9879\u9664\u4e86id\u3001name\u548cmail\uff0c\u8fd8\u5e94\u8be5\u6dfb\u52a0\u54ea\u4e9b\u5c5e\u6027\u3002\u7c7b\u578b\u662f\u4e2adict\n    # \u5982\u679c\u8fd9\u91cc\u51fa\u73b0\u4e86\u540d\u4e3auid, name\u6216email\u7684\u5c5e\u6027\uff0c\u8fd9\u91cc\u7684\u503c\u5c06\u66ff\u4ee3\u7528\u6237\u8f93\u5165\u7684\u503c\u3002\n    # \u5c5e\u6027\u503c\u652f\u6301\u4f7f\u7528 {{ LDAP\u5c5e\u6027\u503ckey }} \u683c\u5f0f\u6765\u4f7f\u7528\u7528\u6237\u586b\u5165\u7684\u503c\u3002\n    # \u4f8b\u5982\uff1a{ sn: "{{ cn }}" }\uff0c\u90a3\u4e48\u6dfb\u52a0\u65f6\u5c06\u4f1a\u589e\u52a0\u4e00\u4e2asn\u5c5e\u6027\uff0c\u5176\u503c\u4e3acn\u7684\u5c5e\u6027\uff0c\u5373\u4e3a\u7528\u6237\u8f93\u5165\u7684\u59d3\u540d\n    # extraProps: \n    #   key: value\n\n  # \u5c5e\u6027\u6620\u5c04\n  attrs:\n    # LDAP\u4e2d\u5bf9\u5e94\u7528\u6237ID\u7684\u5c5e\u6027\u540d\n    uid: uid\n    # LDAP\u4e2d\u7528\u6237\u5bf9\u5e94\u7684\u7ec4\u7684\u5b9e\u4f53\u8868\u793a\u7528\u6237ID\u7684\u5c5e\u6027\u540d\n    groupUserId: cn\n    # \u6b64\u5b57\u6bb5\u7528\u4e8e\u5728\u521b\u5efa\u7528\u6237\u7684\u65f6\u5019\u628a\u59d3\u540d\u4fe1\u606f\u586b\u5165LDAP\uff0c\u4ee5\u53ca\u9a8c\u8bc1ID\u548c\u59d3\u540d\u662f\u5426\u5339\u914d\u3002\n    # \u5982\u679c\u4e0d\u586b\u5199\uff0c\u5219\u7cfb\u7edf\u5c06\u4e0d\u4f1a\u9a8c\u8bc1ID\u548c\u59d3\u540d\u662f\u5426\u5339\u914d\uff0c\u4e14\u4e0d\u4f1a\u518d\u521b\u5efa\u7528\u6237\u7684\u65f6\u5019\u628a\u59d3\u540d\u4fe1\u606f\u586b\u5165LDAP\u3002\n    # name: cn\n\n    # LDAP\u4e2d\u5bf9\u5e94\u7528\u6237\u7684\u90ae\u7bb1\u7684\u5c5e\u6027\u540d\u3002\u53ef\u4e0d\u586b\u3002\u6b64\u5b57\u6bb5\u53ea\u7528\u4e8e\u5728\u521b\u5efa\u7528\u6237\u7684\u65f6\u5019\u628a\u90ae\u4ef6\u4fe1\u606f\u586b\u5165LDAP\u3002\n    # mail: mail\n')),(0,r.kt)("p",null,"\u589e\u52a0\u597d\u914d\u7f6e\u540e\uff0c\u8fd0\u884c",(0,r.kt)("inlineCode",{parentName:"p"},"docker compose restart"),"\u91cd\u542f\u7cfb\u7edf\u5373\u53ef\u3002"),(0,r.kt)("h2",{id:"ldap\u5feb\u901f\u914d\u7f6e\u811a\u672c"},"LDAP\u5feb\u901f\u914d\u7f6e\u811a\u672c"),(0,r.kt)("p",null,"\u6211\u4eec\u63d0\u4f9b\u4ee5\u4e0b\u4e24\u4e2a\u811a\u672c\u53ef\u4ee5\u7528\u6765\u5728",(0,r.kt)("strong",{parentName:"p"},"CentOS 7"),"\u73af\u5883\u5feb\u901f\u5b89\u88c5\u548c\u914d\u7f6eLDAP\u670d\u52a1\u5668"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/PKUHPC/SCOW/blob/master/scripts/ldap/provider.sh"},"provider.sh"),": \u7528\u4e8e\u914d\u7f6eLDAP\u670d\u52a1\u5668"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/PKUHPC/SCOW/blob/master/scripts/ldap/client.sh"},"client.sh"),": \u7528\u4e8e\u914d\u7f6eLDAP\u5ba2\u6237\u7aef")),(0,r.kt)("p",null,"\u8bf7\u4e0b\u8f7d\u8fd9\u4e24\u4e2a\u6587\u4ef6\uff0c\u4fee\u6539\u4e24\u4e2a\u6587\u4ef6\u5f00\u5934\u90e8\u5206\u7684\u76f8\u5173\u914d\u7f6e\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"Start Configuratin Part"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"End Configuration Part"),"\u4e4b\u95f4\u7684\u53d8\u91cf\uff09\uff0c\u8fd0\u884c\u5373\u53ef\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u4f7f\u7528provider.sh\u811a\u672c\u914d\u7f6e\u60a8\u7684\u670d\u52a1\u5668\uff0c\u60a8\u7684LDAP\u76f8\u5173\u914d\u7f6e\u4e3a\u5982\u4e0b\u3002\u5176\u4e2d",(0,r.kt)("inlineCode",{parentName:"p"},"{\u53d8\u91cf}"),"\u66ff\u6362\u4e3aprovider.sh\u4e2d\u7684\u5bf9\u5e94\u53d8\u91cf\u503c\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config/auth.yml"',title:'"config/auth.yml"'},'\n# ...\u5176\u4ed6\u914d\u7f6e\n\nauthType: ldap\nldap:\n  url: ldap://LDAP\u670d\u52a1\u5668\u5730\u5740\n  bindDN: cn=Manager,ou={ou},o={dn}\n  bindPassword: {adminPasswd}\n  searchBase: "ou={ou},o={dn}"\n  userFilter: "(uid=*)"\n  addUser:\n    userBase: "ou=People,ou={ou},o={dn}"\n    groupBase: "ou=Group,ou={ou},o={dn}"\n  attrs:\n    uid: uid\n    groupUserId: cn\n    name: cn\n    mail: mail\n')),(0,r.kt)("h2",{id:"ldap\u955c\u50cf"},"LDAP\u955c\u50cf"),(0,r.kt)("p",null,"\u60a8\u8fd8\u53ef\u4ee5\u4f7f\u7528\u6211\u4eec\u63d0\u4f9b\u7684\u5df2\u7ecf\u914d\u7f6e\u597d\u7684LDAP docker\u955c\u50cf\u8fdb\u884c\u4f53\u9a8c\u3002\u6ce8\u610f\uff0c\u6b64\u955c\u50cf\u4ec5\u7528\u4e8e\u6d4b\u8bd5\u548c\u529f\u80fd\u4f53\u9a8c\uff0c\u8bf7\u52ff\u7528\u4e8e\u751f\u4ea7\u73af\u5883\uff01"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5728\u6574\u4e2a\u9879\u76ee\u7684\u6839\u76ee\u5f55\u6784\u5efa\u955c\u50cf \ndocker build -f dev/ldap/Dockerfile -t ldap .\n\n# \u542f\u52a8\u955c\u50cf\u3002\u670d\u52a1\u5728389\u7aef\u53e3\u76d1\u542c\u3002\n# \u7ba1\u7406\u5458\u7528\u6237\u4e3acn=Manager,ou=hpc,o=pku\uff0c\u5bc6\u7801\u4e3aadmin\ndocker run -p 389:389 ldap\n")))}m.isMDXComponent=!0}}]);