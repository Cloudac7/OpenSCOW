"use strict";(self.webpackChunk_scow_docs=self.webpackChunk_scow_docs||[]).push([[8113],{4852:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(9231);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),i=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},a={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=i(r),d=o,f=m["".concat(c,".").concat(d)]||m[d]||a[d]||s;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,l=new Array(s);l[0]=m;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,l[1]=u;for(var i=2;i<s;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8440:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return u},metadata:function(){return i},toc:function(){return a}});var n=r(2208),o=r(9161),s=(r(9231),r(4852)),l=["components"],u={sidebar_position:1,title:"\u96c6\u7fa4\u64cd\u4f5c\u5c42"},c="\u90e8\u7f72\u96c6\u7fa4\u64cd\u4f5c\u5c42",i={unversionedId:"mis/deployment/clusterops",id:"mis/deployment/clusterops",title:"\u96c6\u7fa4\u64cd\u4f5c\u5c42",description:"clusterops\u662f\u5bf9\u96c6\u7fa4\u64cd\u4f5c\u7684\u62bd\u8c61\u5c42\u3002",source:"@site/docs/mis/deployment/clusterops.md",sourceDirName:"mis/deployment",slug:"/mis/deployment/clusterops",permalink:"SCOW/docs/mis/deployment/clusterops",draft:!1,editUrl:"https://github.com/PKUHPC/SCOW/edit/main/website/docs/mis/deployment/clusterops.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\u96c6\u7fa4\u64cd\u4f5c\u5c42"},sidebar:"mis",previous:{title:"\u8ba1\u8d39\u6536\u8d39",permalink:"SCOW/docs/mis/business/billing"},next:{title:"\u6e90\u4f5c\u4e1a\u4fe1\u606f\u6570\u636e\u5e93",permalink:"SCOW/docs/mis/deployment/job_table"}},p={},a=[{value:"\u90e8\u7f72slurm.sh",id:"\u90e8\u7f72slurmsh",level:2},{value:"\u90e8\u7f72clusterops-slurm",id:"\u90e8\u7f72clusterops-slurm",level:2}],m={toc:a};function d(e){var t=e.components,r=(0,o.Z)(e,l);return(0,s.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"\u90e8\u7f72\u96c6\u7fa4\u64cd\u4f5c\u5c42"},"\u90e8\u7f72\u96c6\u7fa4\u64cd\u4f5c\u5c42"),(0,s.kt)("p",null,"clusterops\u662f\u5bf9\u96c6\u7fa4\u64cd\u4f5c\u7684\u62bd\u8c61\u5c42\u3002"),(0,s.kt)("p",null,"\u76ee\u524d\uff0c\u6211\u4eec\u53ea\u652f\u6301slurm\u3002\u8981\u90e8\u7f72slurm\u7684clusterops\uff0c\u9700\u8981\u6ee1\u8db3\u4ee5\u4e0b\u8981\u6c42\uff1a"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"\u6bcf\u4e2a\u96c6\u7fa4\u9700\u8981\u6709\u4e00\u4e2a\u8282\u70b9\u4e0a\u5b89\u88c5\u4e86slurm\uff08\u79f0\u4e3a",(0,s.kt)("strong",{parentName:"li"},"slurm\u8282\u70b9"),"\uff09\uff0c\u5e76\u80fd\u591f\u4f7f\u7528",(0,s.kt)("inlineCode",{parentName:"li"},"sacct"),"\u7b49\u547d\u4ee4"),(0,s.kt)("li",{parentName:"ol"},"\u670d\u52a1\u8282\u70b9\u53ef\u4ee5\u514d\u5bc6\u4ee5root SSH\u767b\u5f55\u5230\u5404\u4e2a\u96c6\u7fa4\u7684slurm\u8282\u70b9")),(0,s.kt)("h2",{id:"\u90e8\u7f72slurmsh"},"\u90e8\u7f72slurm.sh"),(0,s.kt)("p",null,"\u5c06",(0,s.kt)("a",{parentName:"p",href:"https://github.com/PKUHPC/SCOW/blob/master/apps/clusterops-slurm/slurm.sh"},"slurm.sh"),"\u590d\u5236\u8fdb\u6bcf\u4e2a\u96c6\u7fa4\u7684",(0,s.kt)("strong",{parentName:"p"},"slurm\u8282\u70b9"),"\uff0c\u5e76\u7ed9\u4e88\u53ef\u6267\u884c\u6743\u9650\u3002"),(0,s.kt)("h2",{id:"\u90e8\u7f72clusterops-slurm"},"\u90e8\u7f72clusterops-slurm"),(0,s.kt)("p",null,"\u5728\u670d\u52a1\u8282\u70b9\u7684",(0,s.kt)("inlineCode",{parentName:"p"},"docker-compose.yml"),"\u6587\u4ef6\u7684",(0,s.kt)("inlineCode",{parentName:"p"},"services"),"\u90e8\u5206\u4e2d\uff0c\u5bf9\u6bcf\u4e2aclusterops\u589e\u52a0\u4e00\u4e2a\u4ee5\u4e0b\u5185\u5bb9\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"title=docker-compose.yml",title:"docker-compose.yml"},"\n  # \u4e0d\u540c\u7684clusterops\u5e94\u8be5\u6709\u4e0d\u540c\u7684\u670d\u52a1\u540d\uff08\u5373\u4e0b\u4e00\u884c\uff09\n  clusterops-hpc01:\n    image: https://ccimage.pku.edu.cn/chenjunda/scow/clusterops-slurm\n    volumes:\n      - /root/.ssh:/root/.ssh\n    environment:\n      # ssh\u5230slurm\u8282\u70b9\u7684\u547d\u4ee4\u524d\u7f00\uff0c\u9ed8\u8ba4\u4e3assh+slurm\u8282\u70b9\u7684IP\n      SLURM_NODE_URL: 192.168.88.247\n      # slurm.sh\u7684\u7edd\u5bf9\u8def\u5f84\n      SLURM_SCRIPT_PATH: /root/HPCSH/slurm\n      # slurm\u7684MySQL\u6570\u636e\u5e93\u7684\u5bc6\u7801\n      MYSQL_PASSWORD: slurm\u7684MySQL\u6570\u636e\u5e93\u7684\u5bc6\u7801\n      # \u96c6\u7fa4\u4e2d\u7684\u6240\u6709\u5206\u533a\n      BASE_PARTITIONS: compute\n")),(0,s.kt)("p",null,"\u8fd0\u884c",(0,s.kt)("inlineCode",{parentName:"p"},"docker compose up -d"),"\u542f\u52a8clusterops."))}d.isMDXComponent=!0}}]);