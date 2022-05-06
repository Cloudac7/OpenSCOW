"use strict";(self.webpackChunk_scow_docs=self.webpackChunk_scow_docs||[]).push([[1678],{4852:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(9231);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1528:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var r=n(2208),o=n(9161),i=(n(9231),n(4852)),a=["components"],c={sidebar_position:4,title:"\u524d\u7aef"},l="\u90e8\u7f72\u8fd0\u8425\u7cfb\u7edf\u524d\u7aef",s={unversionedId:"mis/deployment/web",id:"mis/deployment/web",title:"\u524d\u7aef",description:"\u95e8\u6237\u524d\u7aef\u4e3a\u7528\u6237\u63d0\u4f9b\u8fd0\u8425\u7cfb\u7edf\u7684web\u5185\u5bb9\u3002",source:"@site/docs/mis/deployment/web.md",sourceDirName:"mis/deployment",slug:"/mis/deployment/web",permalink:"SCOW/docs/mis/deployment/web",draft:!1,editUrl:"https://github.com/PKUHPC/SCOW/edit/main/website/docs/mis/deployment/web.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"\u524d\u7aef"},sidebar:"mis",previous:{title:"\u670d\u52a1\u7aef",permalink:"SCOW/docs/mis/deployment/backend"},next:{title:"clusterops-slurm",permalink:"SCOW/docs/mis/refs/clusterops-slurm"}},p={},u=[{value:"\u5b89\u88c5\u548c\u914d\u7f6e\u8fd0\u8425\u7cfb\u7edf\u524d\u7aef\u9879\u76ee",id:"\u5b89\u88c5\u548c\u914d\u7f6e\u8fd0\u8425\u7cfb\u7edf\u524d\u7aef\u9879\u76ee",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u90e8\u7f72\u8fd0\u8425\u7cfb\u7edf\u524d\u7aef"},"\u90e8\u7f72\u8fd0\u8425\u7cfb\u7edf\u524d\u7aef"),(0,i.kt)("p",null,"\u95e8\u6237\u524d\u7aef\u4e3a\u7528\u6237\u63d0\u4f9b\u8fd0\u8425\u7cfb\u7edf\u7684web\u5185\u5bb9\u3002"),(0,i.kt)("h2",{id:"\u5b89\u88c5\u548c\u914d\u7f6e\u8fd0\u8425\u7cfb\u7edf\u524d\u7aef\u9879\u76ee"},"\u5b89\u88c5\u548c\u914d\u7f6e\u8fd0\u8425\u7cfb\u7edf\u524d\u7aef\u9879\u76ee"),(0,i.kt)("p",null,"\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose.yml"),"\u6587\u4ef6\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"services"),"\u90e8\u5206\u589e\u52a0\u4ee5\u4e0b\u5185\u5bb9\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u672c\u9879\u76ee\u5c06\u4f1a\u90e8\u7f72\u5728\u57df\u540d\u7684\u6839\u76ee\u5f55\u4e0b\uff0c\u5219\u8bf7\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"li"},"mis-web-root"),"\u955c\u50cf\uff1b"),(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u5c06\u4f1a\u90e8\u7f72\u5728",(0,i.kt)("inlineCode",{parentName:"li"},"/mis"),"\u8def\u5f84\u4e0b\uff0c\u8bf7\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"li"},"mis-web-mis"),"\u955c\u50cf\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u82e5\u90fd\u4e0d\u662f\uff0c\u8bf7\u53c2\u8003",(0,i.kt)("a",{parentName:"li",href:"SCOW/docs/common/customization/customize-basepath"},"\u81ea\u5b9a\u4e49\u524d\u7aef\u76f8\u5bf9\u8def\u5f84"),"\u3002")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"title=docker-compose.yml",title:"docker-compose.yml"},'  mis-web:\n    # \u6839\u636e\u4e0a\u9762\u9009\u62e9\u955c\u50cf\n    image: https://ccimage.pku.edu.cn/chenjunda/scow/mis-web-root\n    restart: unless-stopped\n    environment:\n      # \u5982\u679c\u60a8\u540c\u65f6\u90e8\u7f72\u4e86\u95e8\u6237\u524d\u7aef\u9879\u76ee\uff0c\u8bf7\u914d\u7f6e\u4e0b\u503c\u4e3a\u95e8\u6237\u524d\u7aef\u9879\u76ee\u7684\u8def\u5f84\n      PORTAL_PATH: /portal\n\n    volumes:\n      - "./config:/etc/scow"\n')),(0,i.kt)("p",null,"\u8fd0\u884c",(0,i.kt)("inlineCode",{parentName:"p"},"docker compose up -d"),"\u542f\u52a8\u524d\u7aef\u9879\u76ee\u3002"))}d.isMDXComponent=!0}}]);