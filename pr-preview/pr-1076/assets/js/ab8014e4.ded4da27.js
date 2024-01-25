"use strict";(self.webpackChunk_scow_docs=self.webpackChunk_scow_docs||[]).push([[3816],{7566:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>t,default:()=>j,frontMatter:()=>r,metadata:()=>c,toc:()=>h});var d=n(35250),i=n(57766);const r={sidebar_position:2,title:"\u5f00\u53d1UI\u6269\u5c55"},t=void 0,c={id:"integration/ui-extension/develop",title:"\u5f00\u53d1UI\u6269\u5c55",description:"\u5f00\u53d1UI\u6269\u5c55",source:"@site/docs/integration/ui-extension/develop.md",sourceDirName:"integration/ui-extension",slug:"/integration/ui-extension/develop",permalink:"/SCOW/pr-preview/pr-1076/docs/integration/ui-extension/develop",draft:!1,unlisted:!1,editUrl:"https://github.com/PKUHPC/SCOW/edit/main/website/docs/integration/ui-extension/develop.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"\u5f00\u53d1UI\u6269\u5c55"},sidebar:"integration",previous:{title:"UI\u6269\u5c55",permalink:"/SCOW/pr-preview/pr-1076/docs/integration/ui-extension/"}},l={},h=[{value:"\u5f00\u53d1UI\u6269\u5c55",id:"\u5f00\u53d1ui\u6269\u5c55",level:2},{value:"\u6269\u5c55\u9875",id:"\u6269\u5c55\u9875",level:3},{value:"\u914d\u7f6e\u63a5\u53e3",id:"\u914d\u7f6e\u63a5\u53e3",level:3},{value:"\u83b7\u53d6\u6e05\u5355\uff1aGET /api/manifests",id:"\u83b7\u53d6\u6e05\u5355get-apimanifests",level:4},{value:"\u91cd\u5199\u95e8\u6237\u7cfb\u7edf\u7684\u5bfc\u822a\u9879\uff1aPOST /api/portal/rewriteNavigations",id:"\u91cd\u5199\u95e8\u6237\u7cfb\u7edf\u7684\u5bfc\u822a\u9879post-apiportalrewritenavigations",level:4},{value:"\u91cd\u5199\u7ba1\u7406\u7cfb\u7edf\u7684\u5bfc\u822a\u9879\uff1aPOST /api/mis/rewriteNavigations",id:"\u91cd\u5199\u7ba1\u7406\u7cfb\u7edf\u7684\u5bfc\u822a\u9879post-apimisrewritenavigations",level:4},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2}];function x(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s.h2,{id:"\u5f00\u53d1ui\u6269\u5c55",children:"\u5f00\u53d1UI\u6269\u5c55"}),"\n",(0,d.jsxs)(s.p,{children:["\u8981\u4f7f\u7528UI\u6269\u5c55\uff0c\u60a8\u9996\u5148\u9700\u8981\u5f00\u53d1\u5e76\u6784\u5efa\u4e00\u4e2a\u4ece\u5916\u754c\u53ef\u4ee5\u8bbf\u95ee\u7684\u7f51\u7ad9\uff08\u79f0\u4e3a",(0,d.jsx)(s.strong,{children:"\u6269\u5c55\u7ad9"}),"\uff09\u3002\u60a8\u53ef\u4ee5\u4f7f\u7528\u4efb\u4f55\u6280\u672f\u5f00\u53d1\u3001\u7ef4\u62a4\u548c\u90e8\u7f72\u6b64\u7f51\u7ad9\uff0c\u53ea\u9700\u8981\u6ee1\u8db3\u60a8\u7684\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u76f4\u63a5\u516c\u7f51\u8bbf\u95ee\u5373\u53ef\u3002"]}),"\n",(0,d.jsx)(s.h3,{id:"\u6269\u5c55\u9875",children:"\u6269\u5c55\u9875"}),"\n",(0,d.jsxs)(s.p,{children:["\u5f53\u7528\u6237\u5f00\u542f\u4e86UI\u6269\u5c55\u529f\u80fd\uff0c\u5e76\u8bbf\u95eeSCOW\u90e8\u7f72\u8def\u5f84\u7684",(0,d.jsx)(s.code,{children:"/extensions/*"}),"\u7684\u8def\u5f84\u65f6\uff0cSCOW\u5c06\u4f1a\u663e\u793aSCOW\u7684\u57fa\u7840\u5bfc\u822a\u7ed3\u6784\uff0c\u5e76\u5728\u4e3b\u8981\u5185\u5bb9\u90e8\u5206\u901a\u8fc7\u4e00\u4e2a",(0,d.jsx)(s.code,{children:"iframe"}),"\u663e\u793a\u60a8\u7684",(0,d.jsx)(s.strong,{children:"\u6269\u5c55\u7ad9"}),(0,d.jsx)(s.code,{children:"/extensions/*"}),"\u4e0b\u7684\u5185\u5bb9\uff0c\u5e76\u5c06\u7528\u6237\u8bbf\u95ee\u7684query\u53c2\u6570\uff0c\u4ee5\u53ca\u4ee5\u4e0b\u4e09\u4e2aquery\u53c2\u6570\uff0c\u4ee5query\u53c2\u6570\u7684\u5f62\u5f0f\u4f20\u7ed9iframe\u3002"]}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"\u53c2\u6570"}),(0,d.jsx)(s.th,{children:"\u53d6\u503c"}),(0,d.jsx)(s.th,{children:"\u89e3\u91ca"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"scowDark"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:'"true" | "false"'})}),(0,d.jsx)(s.td,{children:"\u5f53\u524dSCOW\u662f\u5426\u4ee5\u9ed1\u6697\u4e3b\u9898\u663e\u793a"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"scowUserToken"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"string | undefined"})}),(0,d.jsx)(s.td,{children:"\u5f53\u524dSCOW\u7684\u767b\u5f55\u7528\u6237\u7684token\u3002\u53ef\u901a\u8fc7SCOW\u8ba4\u8bc1\u7cfb\u7edf\u63a5\u53e3\u67e5\u8be2\u767b\u5f55\u7528\u6237"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"scowLangId"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"string"})}),(0,d.jsx)(s.td,{children:"\u5f53\u524dSCOW\u663e\u793a\u6240\u4f7f\u7528\u7684\u8bed\u8a00ID"})]})]})]}),"\n",(0,d.jsxs)(s.p,{children:["\u4f8b\u5982\uff0c\u5047\u8bbeSCOW\u90e8\u7f72\u4e8e",(0,d.jsx)(s.code,{children:"https://myscow.com/scow"}),"\uff0c\u60a8\u7684\u6269\u5c55\u7ad9\u90e8\u7f72\u4e8e",(0,d.jsx)(s.code,{children:"https://myscowext.com/ext"}),"\uff0c\u5f53\u7528\u6237\u8bbf\u95ee",(0,d.jsx)(s.code,{children:"https://myscow/scow/extensions/parent/child?test=123"}),"\u65f6\uff0cSCOW\u5c06\u4f1a\u663e\u793a\u4e00\u4e2aiframe\uff0c\u5176URL\u4e3a",(0,d.jsx)(s.code,{children:"https://myscowext.com/ext/extensions/parent/child?test=123&scowDark={\u5f53\u524dSCOW\u662f\u5426\u4ee5\u9ed1\u6697\u6a21\u5f0f\u663e\u793a}&scowUserToken={\u7528\u6237token}&scowLangId={\u5f53\u524dSCOW\u663e\u793a\u8bed\u8a00ID}"}),"\u3002"]}),"\n",(0,d.jsx)(s.h3,{id:"\u914d\u7f6e\u63a5\u53e3",children:"\u914d\u7f6e\u63a5\u53e3"}),"\n",(0,d.jsxs)(s.p,{children:["\u9664\u6b64\u4e4b\u5916\uff0cUI\u6269\u5c55\u7ad9\u9700\u8981\u5b9e\u73b0\u4ee5\u4e0b\u7684\u914d\u7f6e\u63a5\u53e3\u3002SCOW\u4f1a\u5728\u9700\u8981\u7684\u4f7f\u7528\u8c03\u7528\u4ee5\u4e0b\u63a5\u53e3\u83b7\u53d6\u54cd\u5e94\u914d\u7f6e\u3002\u6240\u6709\u914d\u7f6e\u63a5\u53e3\u4ee5",(0,d.jsx)(s.code,{children:"/api"}),"\u5f00\u5934\u3002"]}),"\n",(0,d.jsx)(s.h4,{id:"\u83b7\u53d6\u6e05\u5355get-apimanifests",children:"\u83b7\u53d6\u6e05\u5355\uff1aGET /api/manifests"}),"\n",(0,d.jsx)(s.p,{children:"\u83b7\u53d6UI\u6269\u5c55\u914d\u7f6e\u6e05\u5355\u3002SCOW\u901a\u8fc7\u6b64\u63a5\u53e3\u83b7\u53d6\u60a8\u7684UI\u6269\u5c55\u7684\u4e00\u4e9b\u914d\u7f6e\u53c2\u6570\u3002"}),"\n",(0,d.jsx)(s.p,{children:"\u5bf9\u4e8e\u6b64\u63a5\u53e3\uff0c\u60a8\u9700\u8981\u8fd4\u56de\u5982\u4e0b\u7c7b\u578b\u7684JSON\u5185\u5bb9\uff1a"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"JSON\u5c5e\u6027\u8def\u5f84"}),(0,d.jsx)(s.th,{children:"\u7c7b\u578b"}),(0,d.jsx)(s.th,{children:"\u662f\u5426\u5fc5\u987b"}),(0,d.jsx)(s.th,{children:"\u89e3\u91ca"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"portal"})}),(0,d.jsx)(s.td,{children:"\u5bf9\u8c61"}),(0,d.jsx)(s.td,{children:"\u5426"}),(0,d.jsx)(s.td,{children:"\u5173\u4e8e\u95e8\u6237\u7cfb\u7edf\u7684\u914d\u7f6e"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"portal.rewriteNavigations"})}),(0,d.jsx)(s.td,{children:"\u5e03\u5c14\u503c"}),(0,d.jsx)(s.td,{children:"\u5426"}),(0,d.jsxs)(s.td,{children:["\u662f\u5426\u91cd\u5199\u95e8\u6237\u7cfb\u7edf\u7684\u5bfc\u822a\u9879\u3002\u9ed8\u8ba4\u4e3a",(0,d.jsx)(s.code,{children:"false"})]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"mis"})}),(0,d.jsx)(s.td,{children:"\u5bf9\u8c61"}),(0,d.jsx)(s.td,{children:"\u5426"}),(0,d.jsx)(s.td,{children:"\u5173\u4e8e\u7ba1\u7406\u7cfb\u7edf\u7684\u914d\u7f6e"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"mis.rewriteNavigations"})}),(0,d.jsx)(s.td,{children:"\u5e03\u5c14\u503c"}),(0,d.jsx)(s.td,{children:"\u5426"}),(0,d.jsxs)(s.td,{children:["\u662f\u5426\u91cd\u5199\u7ba1\u7406\u7cfb\u7edf\u7684\u5bfc\u822a\u9879\u3002\u9ed8\u8ba4\u4e3a",(0,d.jsx)(s.code,{children:"false"})]})]})]})]}),"\n",(0,d.jsx)(s.p,{children:"\u4f8b\u5982\uff0c\u60a8\u53ef\u4ee5\u8fd4\u56de\u5982\u4e0b\u7c7b\u578b\u7684JSON\uff0c\u8868\u793a\u8981\u91cd\u5199\u95e8\u6237\u7cfb\u7edf\u7684\u5bfc\u822a\u9879\uff0c\u4f46\u662f\u4e0d\u91cd\u5199\u7ba1\u7406\u7cfb\u7edf\u7684\u5bfc\u822a\u9879\u3002"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-json",children:'{\n  "portal": {\n    "rewriteNavigations": true\n  },\n  "mis": {\n    "rewriteNavigations": false,\n  }\n}\n'})}),"\n",(0,d.jsx)(s.h4,{id:"\u91cd\u5199\u95e8\u6237\u7cfb\u7edf\u7684\u5bfc\u822a\u9879post-apiportalrewritenavigations",children:"\u91cd\u5199\u95e8\u6237\u7cfb\u7edf\u7684\u5bfc\u822a\u9879\uff1aPOST /api/portal/rewriteNavigations"}),"\n",(0,d.jsxs)(s.p,{children:["\u91cd\u5199\u95e8\u6237\u7cfb\u7edf\u7684\u5bfc\u822a\u9879\u3002\u82e5\u60a8\u5728",(0,d.jsx)(s.code,{children:"GET /api/manifests"}),"\u4e2d\u8fd4\u56de\u7684",(0,d.jsx)(s.code,{children:"portal.rewriteNavigations"}),"\u4e3a",(0,d.jsx)(s.code,{children:"true"}),"\uff0c\u5219\u5fc5\u987b\u5b9e\u73b0\u6b64\u63a5\u53e3\u3002"]}),"\n",(0,d.jsx)(s.p,{children:"SCOW\u5c06\u4f1a\u5728body\u4e2d\u4f20\u5165\u9ed8\u8ba4\u60c5\u51b5\u4e0bSCOW\u5c06\u4f1a\u663e\u793a\u7684\u5bfc\u822a\u9879\u3002\u4e0b\u8868\u4e3a\u4f20\u5165\u7684JSON\u53c2\u6570\u7684\u5c5e\u6027\uff1a"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"JSON\u5c5e\u6027\u8def\u5f84"}),(0,d.jsx)(s.th,{children:"\u7c7b\u578b"}),(0,d.jsx)(s.th,{children:"\u662f\u5426\u5fc5\u987b"}),(0,d.jsx)(s.th,{children:"\u89e3\u91ca"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"navs"})}),(0,d.jsx)(s.td,{children:"\u5bf9\u8c61\u6570\u7ec4"}),(0,d.jsx)(s.td,{children:"\u662f"}),(0,d.jsx)(s.td,{children:"\u5bfc\u822a\u9879"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"navs[].path"})}),(0,d.jsx)(s.td,{children:"\u5b57\u7b26\u4e32"}),(0,d.jsx)(s.td,{children:"\u662f"}),(0,d.jsx)(s.td,{children:"\u6b64\u5bfc\u822a\u9879\u7684\u8def\u5f84\u3002\u6b64\u8def\u5f84\u4e0d\u5305\u62ecbase path\u3002\u82e5\u5f53\u524d\u6d4f\u89c8\u5668\u7684pathname\u4ee5\u6b64\u5f00\u5934\uff0c\u5219\u6b64\u5bfc\u822a\u9879\u5c06\u4f1a\u9ad8\u4eae"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"navs[].clickToPath"})}),(0,d.jsx)(s.td,{children:"\u5b57\u7b26\u4e32"}),(0,d.jsx)(s.td,{children:"\u5426"}),(0,d.jsxs)(s.td,{children:["\u70b9\u51fb\u6b64\u5bfc\u822a\u9879\u5c06\u4f1a\u5bfc\u822a\u81f3\u7684\u8def\u5f84\u3002\u5982\u679c\u4e0d\u586b\uff0c\u5219\u4f7f\u7528",(0,d.jsx)(s.code,{children:"path"}),"\u5c5e\u6027"]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"navs[].text"})}),(0,d.jsx)(s.td,{children:"\u5b57\u7b26\u4e32"}),(0,d.jsx)(s.td,{children:"\u662f"}),(0,d.jsx)(s.td,{children:"\u5bfc\u822a\u9879\u7684\u6587\u672c"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"navs[].openInNewPage"})}),(0,d.jsx)(s.td,{children:"\u5e03\u5c14\u503c"}),(0,d.jsx)(s.td,{children:"\u662f"}),(0,d.jsx)(s.td,{children:"\u6b64\u5bfc\u822a\u9879\u7684\u9875\u9762\u662f\u5426\u5728\u65b0\u7a97\u53e3\u4e2d\u6253\u5f00"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"navs[].children"})}),(0,d.jsxs)(s.td,{children:["\u5bf9\u8c61\u6570\u7ec4\uff0c\u7c7b\u578b\u4e0e",(0,d.jsx)(s.code,{children:"navs"}),"\u6570\u7ec4\u7684\u6bcf\u4e00\u9879\u76f8\u540c"]}),(0,d.jsx)(s.td,{children:"\u5426"}),(0,d.jsx)(s.td,{children:"\u6b64\u5bfc\u822a\u9879\u7684\u5b50\u9879\u3002"})]})]})]}),"\n",(0,d.jsx)(s.p,{children:"\u540c\u65f6\uff0cSCOW\u4f1a\u4f20\u5165\u4ee5\u4e0b\u53c2\u6570\u4f5c\u4e3aquery\u53c2\u6570\u3002"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"\u53c2\u6570"}),(0,d.jsx)(s.th,{children:"\u53d6\u503c"}),(0,d.jsx)(s.th,{children:"\u89e3\u91ca"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"scowDark"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:'"true" | "false"'})}),(0,d.jsx)(s.td,{children:"\u5f53\u524dSCOW\u662f\u5426\u4ee5\u9ed1\u6697\u4e3b\u9898\u663e\u793a"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"scowUserToken"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"string | undefined"})}),(0,d.jsx)(s.td,{children:"\u5f53\u524dSCOW\u7684\u767b\u5f55\u7528\u6237\u7684token\u3002\u53ef\u901a\u8fc7SCOW\u8ba4\u8bc1\u7cfb\u7edf\u63a5\u53e3\u67e5\u8be2\u767b\u5f55\u7528\u6237"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"scowLangId"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"string"})}),(0,d.jsx)(s.td,{children:"\u5f53\u524dSCOW\u663e\u793a\u6240\u4f7f\u7528\u7684\u8bed\u8a00ID"})]})]})]}),"\n",(0,d.jsx)(s.p,{children:"\u60a8\u9700\u8981\u8fd4\u56de\u4ee5\u4e0b\u7c7b\u578b\u7684JSON\uff0c\u8868\u793a\u91cd\u5199\u540e\u7684\u95e8\u6237\u7cfb\u7edf\u7684\u5bfc\u822a\u9879\u3002\u60a8\u53ef\u4ee5\u91cd\u5199\u7cfb\u7edf\u9ed8\u8ba4\u5bfc\u822a\u9879\u7684\u5c5e\u6027\u3002"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"JSON\u5c5e\u6027\u8def\u5f84"}),(0,d.jsx)(s.th,{children:"\u7c7b\u578b"}),(0,d.jsx)(s.th,{children:"\u662f\u5426\u5fc5\u987b"}),(0,d.jsx)(s.th,{children:"\u89e3\u91ca"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"navs"})}),(0,d.jsx)(s.td,{children:"\u5bf9\u8c61\u6570\u7ec4"}),(0,d.jsx)(s.td,{children:"\u662f"}),(0,d.jsx)(s.td,{children:"\u5bfc\u822a\u9879"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"navs[].path"})}),(0,d.jsx)(s.td,{children:"\u5b57\u7b26\u4e32"}),(0,d.jsx)(s.td,{children:"\u662f"}),(0,d.jsx)(s.td,{children:"\u6b64\u5bfc\u822a\u9879\u7684\u8def\u5f84\u3002\u6b64\u8def\u5f84\u4e0d\u5305\u62ecbase path\u3002\u82e5\u5f53\u524d\u6d4f\u89c8\u5668\u7684pathname\u4ee5\u6b64\u5f00\u5934\uff0c\u5219\u6b64\u5bfc\u822a\u9879\u5c06\u4f1a\u9ad8\u4eae"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"navs[].clickToPath"})}),(0,d.jsx)(s.td,{children:"\u5b57\u7b26\u4e32"}),(0,d.jsx)(s.td,{children:"\u5426"}),(0,d.jsxs)(s.td,{children:["\u70b9\u51fb\u6b64\u5bfc\u822a\u9879\u5c06\u4f1a\u5bfc\u822a\u81f3\u7684\u8def\u5f84\u3002\u5982\u679c\u4e0d\u586b\uff0c\u5219\u4f7f\u7528",(0,d.jsx)(s.code,{children:"path"}),"\u5c5e\u6027"]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"navs[].text"})}),(0,d.jsx)(s.td,{children:"\u5b57\u7b26\u4e32"}),(0,d.jsx)(s.td,{children:"\u662f"}),(0,d.jsx)(s.td,{children:"\u5bfc\u822a\u9879\u7684\u6587\u672c"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"navs[].icon"})}),(0,d.jsx)(s.td,{children:"\u5bf9\u8c61"}),(0,d.jsx)(s.td,{children:"\u5426"}),(0,d.jsxs)(s.td,{children:["\u5bfc\u822a\u9879\u7684\u56fe\u6807\u4fe1\u606f\u3002\u5982\u679c\u4e0d\u586b\uff0c\u5c06\u663e\u793a\u9ed8\u8ba4\u5bfc\u822a\u9879\u4e2d\u5177\u6709\u76f8\u540c\u7684path\u7684\u5bfc\u822a\u9879\u7684\u56fe\u6807\u3002\u5982\u679c\u4e0d\u5b58\u5728\u5177\u6709\u76f8\u540cpath\u7684\u5bfc\u822a\u9879\uff0c\u5c06\u663e\u793a",(0,d.jsx)(s.a,{href:"https://ant.design/components/icon-cn",children:"Ant Design Icon"}),"\u7684",(0,d.jsx)(s.code,{children:"LinkOutlined"})]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"navs[].icon.src"})}),(0,d.jsx)(s.td,{children:"\u56fe\u6807URL"}),(0,d.jsx)(s.td,{children:"\u662f"}),(0,d.jsx)(s.td,{children:"\u5bfc\u822a\u9879\u7684\u56fe\u6807\u5730\u5740\u3002\u5fc5\u987b\u662f\u5b8c\u6574\u7684\u3001\u53ef\u516c\u5f00\u8bbf\u95ee\u7684URL"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"navs[].icon.alt"})}),(0,d.jsx)(s.td,{children:"\u5e03\u5c14\u503c"}),(0,d.jsx)(s.td,{children:"\u5426"}),(0,d.jsx)(s.td,{children:"\u5bfc\u822a\u9879\u7684\u56fe\u6807alt\u5c5e\u6027\u3002\u53ef\u4e0d\u586b"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"navs[].openInNewPage"})}),(0,d.jsx)(s.td,{children:"\u5e03\u5c14\u503c"}),(0,d.jsx)(s.td,{children:"\u662f"}),(0,d.jsx)(s.td,{children:"\u6b64\u5bfc\u822a\u9879\u7684\u9875\u9762\u662f\u5426\u5728\u65b0\u7a97\u53e3\u4e2d\u6253\u5f00"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"navs[].children"})}),(0,d.jsxs)(s.td,{children:["\u5bf9\u8c61\u6570\u7ec4\uff0c\u7c7b\u578b\u4e0e",(0,d.jsx)(s.code,{children:"navs"}),"\u6570\u7ec4\u7684\u6bcf\u4e00\u9879\u76f8\u540c"]}),(0,d.jsx)(s.td,{children:"\u5426"}),(0,d.jsx)(s.td,{children:"\u6b64\u5bfc\u822a\u9879\u7684\u5b50\u9879\u3002"})]})]})]}),"\n",(0,d.jsx)(s.h4,{id:"\u91cd\u5199\u7ba1\u7406\u7cfb\u7edf\u7684\u5bfc\u822a\u9879post-apimisrewritenavigations",children:"\u91cd\u5199\u7ba1\u7406\u7cfb\u7edf\u7684\u5bfc\u822a\u9879\uff1aPOST /api/mis/rewriteNavigations"}),"\n",(0,d.jsxs)(s.p,{children:["\u91cd\u5199\u95e8\u6237\u7cfb\u7edf\u7684\u5bfc\u822a\u9879\u3002\u82e5\u60a8\u5728",(0,d.jsx)(s.code,{children:"GET /api/manifests"}),"\u4e2d\u8fd4\u56de\u7684",(0,d.jsx)(s.code,{children:"mis.rewriteNavigations"}),"\u4e3a",(0,d.jsx)(s.code,{children:"true"}),"\uff0c\u5219\u5fc5\u987b\u5b9e\u73b0\u6b64\u63a5\u53e3\u3002"]}),"\n",(0,d.jsx)(s.p,{children:"\u6b64\u63a5\u53e3\u7684\u53c2\u6570\u53ca\u54cd\u5e94\u4e0e\u95e8\u6237\u7cfb\u7edf\u7684\u5b8c\u5168\u76f8\u540c\u3002"}),"\n",(0,d.jsx)(s.h2,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsxs)(s.li,{children:["UI\u6269\u5c55\u793a\u4f8b\u9879\u76ee\uff1a",(0,d.jsx)(s.a,{href:"https://github.com/PKUHPC/scow-ui-extension-demo",children:"PKUHPC/scow-ui-extension-demo"})]}),"\n",(0,d.jsxs)(s.li,{children:["\u5982\u679c\u60a8\u7684\u6269\u5c55\u7ad9\u548cSCOW\u90e8\u7f72\u5730\u5740\u975e\u540c\u6e90\uff0c\u8bf7\u6ce8\u610f\u4f7f\u5f97\u60a8\u7684\u6269\u5c55\u7ad9\u7684\u6240\u6709\u8def\u5f84\u5747\u652f\u6301CORS\u8bbf\u95ee\u3002","\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsxs)(s.li,{children:["Next.js\u9879\u76ee\u53ef\u4ee5\u53c2\u8003",(0,d.jsxs)(s.a,{href:"https://github.com/PKUHPC/scow-ui-extension-demo/blob/main/src/middleware.ts",children:["\u793a\u4f8b\u9879\u76ee\u4e2d\u7684",(0,d.jsx)(s.code,{children:"src/middleware.ts"})]})]}),"\n"]}),"\n"]}),"\n"]})]})}function j(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(x,{...e})}):x(e)}},57766:(e,s,n)=>{n.d(s,{Z:()=>c,a:()=>t});var d=n(70079);const i={},r=d.createContext(i);function t(e){const s=d.useContext(r);return d.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),d.createElement(r.Provider,{value:s},e.children)}}}]);