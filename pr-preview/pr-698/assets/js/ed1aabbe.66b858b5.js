"use strict";(self.webpackChunk_scow_docs=self.webpackChunk_scow_docs||[]).push([[2272],{54852:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(49231);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[d]="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},82895:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var r=n(95907),a=(n(49231),n(54852));const o={sidebar_label:"LDAP\u65b0\u5efa\u7528\u6237",title:"LDAP\u65b0\u5efa\u7528\u6237",sidebar_position:7},i=void 0,p={unversionedId:"hpccluster/add-user",id:"hpccluster/add-user",title:"LDAP\u65b0\u5efa\u7528\u6237",description:"\u90e8\u7f72LDAP\u540e\u53f0\u7ba1\u7406\u540e\uff0c\u8bbf\u95eehttp8080/ \uff0c\u767b\u5f55DN LDAP\u670d\u52a1\u7aef\u5b89\u88c5\u811a\u672cadminPasswd\u7684\u503c\u3002",source:"@site/docs/hpccluster/add-user.md",sourceDirName:"hpccluster",slug:"/hpccluster/add-user",permalink:"/SCOW/pr-preview/pr-698/docs/hpccluster/add-user",draft:!1,editUrl:"https://github.com/PKUHPC/SCOW/edit/main/website/docs/hpccluster/add-user.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_label:"LDAP\u65b0\u5efa\u7528\u6237",title:"LDAP\u65b0\u5efa\u7528\u6237",sidebar_position:7},sidebar:"hpccluster",previous:{title:"\u6570\u636e\u76d8\u6302\u8f7d",permalink:"/SCOW/pr-preview/pr-698/docs/hpccluster/mount-disk"},next:{title:"module\u5b89\u88c5",permalink:"/SCOW/pr-preview/pr-698/docs/hpccluster/module"}},s={},l=[{value:"1. \u754c\u9762\u6dfb\u52a0LDAP\u7528\u6237",id:"1-\u754c\u9762\u6dfb\u52a0ldap\u7528\u6237",level:2},{value:"2. \u547d\u4ee4\u6dfb\u52a0LDAP\u7528\u6237",id:"2-\u547d\u4ee4\u6dfb\u52a0ldap\u7528\u6237",level:2}],c={toc:l},d="wrapper";function u(e){let{components:t,...o}=e;return(0,a.kt)(d,(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u90e8\u7f72LDAP\u540e\u53f0\u7ba1\u7406\u540e\uff0c\u8bbf\u95eehttp://{LDAP\u670d\u52a1\u8282\u70b9ip}:8080/ \uff0c\u767b\u5f55DN: cn=Manager,ou=hpc,o=pku Password: LDAP\u670d\u52a1\u7aef\u5b89\u88c5\u811a\u672cadminPasswd\u7684\u503c\u3002"),(0,a.kt)("h2",{id:"1-\u754c\u9762\u6dfb\u52a0ldap\u7528\u6237"},"1. \u754c\u9762\u6dfb\u52a0LDAP\u7528\u6237"),(0,a.kt)("p",null,"\u90e8\u7f72LDAP\u540e\u53f0\u7ba1\u7406\u540e\uff0c\u8bbf\u95eehttp://{LDAP\u670d\u52a1\u8282\u70b9ip}:8080/ \uff0c\u767b\u5f55DN: cn=Manager,ou=hpc,o=pku Password: LDAP\u670d\u52a1\u7aef\u5b89\u88c5\u811a\u672cadminPasswd\u7684\u503c\u3002"),(0,a.kt)("p",null,"\u767b\u5f55\u6210\u529f\u540e\uff0c\u65b0\u5efaGroup\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img",src:n(74790).Z,width:"1280",height:"560"})),(0,a.kt)("p",null,"\u9009\u62e9 generic\uff1aposix group"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img",src:n(50675).Z,width:"1280",height:"560"})),(0,a.kt)("p",null,"\u586b\u5199group\u540d\u5b57"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img",src:n(48484).Z,width:"1280",height:"443"})),(0,a.kt)("p",null,"\u70b9\u51fbcreate\uff0c\u7136\u540e\u70b9\u51fbcommit\uff0c\u521b\u5efa\u6210\u529f\u3002"),(0,a.kt)("p",null,"\u70b9\u51fbpeople\u65b0\u5efa\u7528\u6237"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img",src:n(93448).Z,width:"1280",height:"623"})),(0,a.kt)("p",null,"\u9009\u62e9generic\uff1auser account"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img",src:n(35868).Z,width:"1280",height:"623"})),(0,a.kt)("p",null,"\u586b\u5199fist name\uff0clast name\uff0c\u8bbe\u7f6e\u5bc6\u7801\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img",src:n(80495).Z,width:"1280",height:"826"})),(0,a.kt)("p",null,"GID\u9009\u62e9\u521a\u521a\u8bbe\u7f6e\u7684\u7ec4\u3002"),(0,a.kt)("p",null,"home directory\u9700\u8981\u8bbe\u7f6e\u4e3aNFS\u7684\u76ee\u5f55\uff0c\u6309\u7167\u6559\u7a0b\u7684\u914d\u7f6e\uff0c\u5e94\u8be5\u4e3a /data/home/\u7528\u6237\u540d"),(0,a.kt)("p",null,"\u70b9\u51fbcreate\uff0c\u7136\u540e\u70b9\u51fbcommit\uff0c\u521b\u5efa\u6210\u529f\u3002"),(0,a.kt)("p",null,"\u7cfb\u7edf\u521d\u59cb\u5316\u65f6\uff0c\u8bbf\u95ee\u90e8\u7f72\u8def\u5f84\u7684mis/init\u8def\u5f84\u4e0b\uff0c\u5c06\u7ba1\u7406\u5458\u8bbe\u7f6e\u4e3a\u521a\u521a\u521b\u5efa\u7684\u7528\u6237\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img",src:n(96484).Z,width:"1280",height:"628"})),(0,a.kt)("p",null,"\u4ee5\u8be5\u8eab\u4efd\u767b\u5f55\u7ba1\u7406\u7cfb\u7edf\uff0c\u70b9\u51fb\u79df\u6237\u7ba1\u7406-\u7528\u6237\u7ba1\u7406-\u521b\u5efa\u7528\u6237\uff0c\u53ef\u4ee5\u521b\u5efa\u522b\u7684\u7528\u6237\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img",src:n(22698).Z,width:"1280",height:"628"})),(0,a.kt)("p",null,"\u70b9\u51fb\u79df\u6237\u7ba1\u7406-\u8d26\u6237\u7ba1\u7406-\u521b\u5efa\u8d26\u6237\uff0c\u8d26\u6237\u7684\u62e5\u6709\u8005ID\u9009\u62e9\u521a\u521a\u5728\u7ba1\u7406\u7cfb\u7edf\u521b\u5efa\u7684\u65b0\u7528\u6237\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img",src:n(98315).Z,width:"1280",height:"628"})),(0,a.kt)("h2",{id:"2-\u547d\u4ee4\u6dfb\u52a0ldap\u7528\u6237"},"2. \u547d\u4ee4\u6dfb\u52a0LDAP\u7528\u6237"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"ldap\u670d\u52a1\u8282\u70b9\u64cd\u4f5c")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'vim demo_admin.ldif\ndn: uid=demo_admin,ou=People,ou=hpc,o=pku\nobjectClass: inetOrgPerson\nobjectClass: posixAccount\nobjectClass: shadowAccount\ncn: demo_admin\nsn: demo_admin\nuidNumber: 65001\ngidNumber: 65001\nhomeDirectory: /data/home/demo_admin\nloginShell: /bin/bash\nuserPassword: {SSHA}emlfzzuvWxe54LgoP5uCO7S63vIfK7jY\n\ndn: cn=demo_admin,ou=Group,ou=hpc,o=pku\nobjectClass: posixGroup\ngidNumber: 65001\nmemberUid: demo_admin\n# \u6dfb\u52a0\n ldapadd -x -D cn=Manager,ou=hpc,o=pku -W -f demo_admin.ldif\n#\u67e5\u627e\nldapsearch -x -D cn=Manager,ou=hpc,o=pku -W "uid=demo_admin,ou=People,ou=hpc,o=pku"\n# \u5220\u9664\nldapdelete -x -D cn=Manager,ou=hpc,o=pku -W "uid=demo_admin,ou=People,ou=hpc,o=pku"\n# \u5bc6\u7801SSHA(\u53ef\u9009\u62e9MD5\u7b49\u5176\u4ed6\u52a0\u5bc6\u65b9\u5f0f)\u52a0\u5bc6\nslappasswd -h {SSHA} -s "password"\n')))}u.isMDXComponent=!0},74790:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/-7-1-414eb05502574573dfec447976457e65.png"},50675:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/-7-2-a7014c5e36dffcf7f77b98df419567b3.png"},48484:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/-7-3-65c8df01ee37667b3b8d5d62a4277441.png"},93448:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/-7-4-71081f81255027477f2f22437aa8b915.png"},35868:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/-7-5-b0a7abd38f7b61e0b34f61722e4fefee.png"},80495:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/-7-6-e6ab6a8f5759758d373ad0a1b0ff491f.png"},96484:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/-7-7-74b06f488107a4f58b5e983450323645.png"},22698:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/-7-8-24819f6377c22464d98b1138f1cf0c92.png"},98315:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/-7-9-89d72ee2be7473a1dfda2bfc331acb42.png"}}]);