"use strict";(self.webpackChunk_scow_docs=self.webpackChunk_scow_docs||[]).push([[1887],{70812:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>a});var s=n(35250),r=n(57766);const l={sidebar_position:1,title:"\u4f7f\u7528"},d=void 0,i={id:"deploy/get-started/vagrant/index",title:"\u4f7f\u7528",description:"\u672c\u9879\u76ee\u9762\u5411\u5f00\u53d1\u548c\u6d4b\u8bd5\u4eba\u5458\uff0c\u57fa\u4e8eVagrant\uff0c\u91c7\u7528VirtualBox\u4f5c\u4e3aProvider\uff0c\u63d0\u4f9bslurm+SCOW\u96c6\u7fa4\u4e00\u952e\u90e8\u7f72\u65b9\u6848\uff0c\u6781\u5927\u7b80\u5316\u4e86\u90e8\u7f72\u6d41\u7a0b\u548c\u90e8\u7f72\u95e8\u69db\u3002",source:"@site/docs/deploy/get-started/vagrant/index.md",sourceDirName:"deploy/get-started/vagrant",slug:"/deploy/get-started/vagrant/",permalink:"/SCOW/pr-preview/pr-1072/docs/deploy/get-started/vagrant/",draft:!1,unlisted:!1,editUrl:"https://github.com/PKUHPC/SCOW/edit/main/website/docs/deploy/get-started/vagrant/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\u4f7f\u7528"},sidebar:"deploy",previous:{title:"vagrant",permalink:"/SCOW/pr-preview/pr-1072/docs/category/vagrant"},next:{title:"vagrant\u73af\u5883\u642d\u5efa",permalink:"/SCOW/pr-preview/pr-1072/docs/deploy/get-started/vagrant/vagrant-env"}},c={},a=[{value:"1. \u96c6\u7fa4\u4e00\u952e\u90e8\u7f72",id:"1-\u96c6\u7fa4\u4e00\u952e\u90e8\u7f72",level:3},{value:"2. \u96c6\u7fa4\u521d\u59cb\u5316",id:"2-\u96c6\u7fa4\u521d\u59cb\u5316",level:3},{value:"3. SCOW\u8fd0\u7ef4\u64cd\u4f5c",id:"3-scow\u8fd0\u7ef4\u64cd\u4f5c",level:3},{value:"4. \u96c6\u7fa4\u4e00\u952e\u9500\u6bc1\u547d\u4ee4",id:"4-\u96c6\u7fa4\u4e00\u952e\u9500\u6bc1\u547d\u4ee4",level:3},{value:"5. \u66f4\u591a\u6587\u6863",id:"5-\u66f4\u591a\u6587\u6863",level:3}];function o(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["\u672c\u9879\u76ee\u9762\u5411",(0,s.jsx)(t.strong,{children:"\u5f00\u53d1"}),"\u548c",(0,s.jsx)(t.strong,{children:"\u6d4b\u8bd5"}),"\u4eba\u5458\uff0c\u57fa\u4e8eVagrant\uff0c\u91c7\u7528VirtualBox\u4f5c\u4e3aProvider\uff0c\u63d0\u4f9bslurm+SCOW\u96c6\u7fa4\u4e00\u952e\u90e8\u7f72\u65b9\u6848\uff0c\u6781\u5927\u7b80\u5316\u4e86\u90e8\u7f72\u6d41\u7a0b\u548c\u90e8\u7f72\u95e8\u69db\u3002"]}),"\n",(0,s.jsx)(t.p,{children:"\u90e8\u7f72slurm+SCOW\u56db\u8282\u70b9\u96c6\u7fa4\uff0c\u8282\u70b9\u89d2\u8272\u53ca\u9ed8\u8ba4\u914d\u7f6e\u5982\u4e0b\u8868\u6240\u793a\uff1a"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"\u8282\u70b9\u540d\u79f0/\u89d2\u8272"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"\u4e3b\u8981\u670d\u52a1"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"\u79c1\u7f51IP"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"\u914d\u7f6e"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"scow"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"scow\uff1aportal\u3001mis\u3001auth\u3001gateway"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"192.168.88.100"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"4C4G"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"slurm"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"slurmdbd\u3001slurmctld\u3001slurmd\u3001mariadb\u3001nfs-server\u3001slapd\u3001sssd"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"192.168.88.101"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"2C2G"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"login"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"slurmd\u3001sssd\u3001nfs\u3001Xfce\u3001KDE\u3001MATE\u3001cinnamon"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"192.168.88.102"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"2C2G"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"cn01"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"slurmd\u3001sssd\u3001nfs\u3001Xfce\u3001KDE\u3001MATE\u3001cinnamon"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"192.168.88.103"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"2C2G"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"1-\u96c6\u7fa4\u4e00\u952e\u90e8\u7f72",children:"1. \u96c6\u7fa4\u4e00\u952e\u90e8\u7f72"}),"\n",(0,s.jsxs)(t.p,{children:["\u628a",(0,s.jsx)(t.a,{href:"https://github.com/PKUHPC/scow-vagrant",children:"scow-vagrant"}),"\u9879\u76eeclone\u4e0b\u6765\uff0c\u5728\u8fd9\u4e2a\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"git clone https://github.com/PKUHPC/scow-vagrant.git\n"})}),"\n",(0,s.jsx)(t.p,{children:"\u90e8\u7f72\u524d\u51c6\u5907\uff1a"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\u4e0b\u8f7d\u6700\u65b0Release\u7684scow-cli\uff0c\u62f7\u8d1d\u81f3",(0,s.jsx)(t.code,{children:"scow\\scow-deployment"}),"\u76ee\u5f55\uff0c\u5e76\u547d\u540d\u4e3a",(0,s.jsx)(t.code,{children:"cli"}),";"]}),"\n",(0,s.jsxs)(t.li,{children:["\u7f16\u8bd1\u751f\u6210\u6700\u65b0\u7684\u9002\u914d\u5668\u53ef\u6267\u884c\u7a0b\u5e8f(CentOS7.9)\uff0c\u66ff\u6362",(0,s.jsx)(t.code,{children:"adapter"}),"\u76ee\u5f55\u4e0b\u7684",(0,s.jsx)(t.code,{children:"scow-slurm-adapter-amd64"}),"(\u9ed8\u8ba4\u4e3a\u4e0eSCOW",(0,s.jsx)(t.code,{children:"v1.2.3"}),"\u5339\u914d\u7248\u672c)\uff0c",(0,s.jsx)(t.a,{href:"https://github.com/PKUHPC/scow-slurm-adapter/blob/master/docs/deploy.md#12-%E4%B8%8B%E8%BD%BD%E4%BB%A3%E7%A0%81%E7%BC%96%E8%AF%91%E7%94%9F%E6%88%90%E4%BA%8C%E8%BF%9B%E5%88%B6%E6%96%87%E4%BB%B6%E8%87%AA%E5%B7%B1%E7%BC%96%E8%AF%91%E7%94%9F%E6%88%90%E4%BA%8C%E8%BF%9B%E5%88%B6%E6%96%87%E4%BB%B6",children:"\u7f16\u8bd1\u53c2\u8003\u6587\u6863"}),"\uff1b"]}),"\n",(0,s.jsxs)(t.li,{children:["\u4fee\u6539\u914d\u7f6e\u6587\u4ef6",(0,s.jsx)(t.code,{children:"scow\\scow-deployment\\install.yaml"}),"\uff0c",(0,s.jsx)(t.code,{children:"imageTag"}),"\u4fee\u6539\u4e3a\u4e0e",(0,s.jsx)(t.code,{children:"cli"}),"\u5339\u914d\u7684\u7248\u672c\uff0c\u4f8b\u5982",(0,s.jsx)(t.code,{children:"v1.2.3"}),"\u3002"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"\u4e00\u952e\u90e8\u7f72\u547d\u4ee4\uff1a"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"vagrant up\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(16318).Z+"",width:"1910",height:"849"})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"\u7b2c\u4e00\u6b21\u90e8\u7f72\u9700\u8981\u4ecevagrant clould\u62c9\u53d6vagrant\u955c\u50cf\uff0c\u901f\u5ea6\u4f1a\u6bd4\u8f83\u6162\uff0c\u8bf7\u8010\u5fc3\u7b49\u5f85\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"2-\u96c6\u7fa4\u521d\u59cb\u5316",children:"2. \u96c6\u7fa4\u521d\u59cb\u5316"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["\u521d\u59cb\u5316\u5730\u5740\uff1a",(0,s.jsx)(t.a,{href:"http://192.168.88.100/mis/init/",children:"http://192.168.88.100/mis/init/"}),"  \u7528\u6237\u540d/\u5bc6\u7801\uff1ademo_admin/demo_admin"]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["\u8fdb\u5165\u521d\u59cb\u5316\u9875\u9762\uff0c\u9009\u62e9\u521b\u5efa\u521d\u59cb\u7ba1\u7406\u5458\u7528\u6237\uff0c\u5c06",(0,s.jsx)(t.code,{children:"demo_admin"}),"\u8bbe\u7f6e\u4e3a\u7ba1\u7406\u5458\u7528\u6237\u3002\u540e\u7eed\u7528\u6237\u3001\u8d26\u6237\u8bbe\u7f6e\u8bf7\u53c2\u8003\u672c\u9879\u76ee\u64cd\u4f5c\u624b\u518c\u3002"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"image-20230126081833205",src:n(27190).Z+"",width:"2210",height:"1224"})}),"\n",(0,s.jsx)(t.h3,{id:"3-scow\u8fd0\u7ef4\u64cd\u4f5c",children:"3. SCOW\u8fd0\u7ef4\u64cd\u4f5c"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"#\u767b\u5f55\u5230\u96c6\u7fa4scow\u8282\u70b9\nvagrant ssh scow\n\n# \u8f93\u5165root\u7528\u6237\u5bc6\u7801\uff0c\u5bc6\u7801\u4e3a\uff1avagrant\n\n# \u8fdb\u5165scow\u90e8\u7f72\u76ee\u5f55\n/root/scow/scow-deployment\n\n# \u62c9\u53d6\u6700\u65b0\u955c\u50cf\n./cli compose pull\n\n# \u91cd\u542f\u670d\u52a1\n./cli compose down\n./cli compose up -d\n"})}),"\n",(0,s.jsx)(t.h3,{id:"4-\u96c6\u7fa4\u4e00\u952e\u9500\u6bc1\u547d\u4ee4",children:"4. \u96c6\u7fa4\u4e00\u952e\u9500\u6bc1\u547d\u4ee4"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"vagrant destroy\n"})}),"\n",(0,s.jsx)(t.h3,{id:"5-\u66f4\u591a\u6587\u6863",children:"5. \u66f4\u591a\u6587\u6863"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/SCOW/pr-preview/pr-1072/docs/deploy/get-started/vagrant/vagrant-env",children:"vagrant\u73af\u5883\u642d\u5efa"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/SCOW/pr-preview/pr-1072/docs/deploy/get-started/vagrant/customization",children:"\u81ea\u5b9a\u4e49\u90e8\u7f72"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/SCOW/pr-preview/pr-1072/docs/deploy/get-started/vagrant/images",children:"vagrant\u955c\u50cf\u5236\u4f5c"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/SCOW/pr-preview/pr-1072/docs/deploy/get-started/vagrant/faq",children:"FAQ"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},27190:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/init-b48915cd077c0934531a81d93ee5d481.png"},16318:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/vagrant-up-ea5a65efcb800612313b2bbbde412c66.png"},57766:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>d});var s=n(70079);const r={},l=s.createContext(r);function d(e){const t=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(l.Provider,{value:t},e.children)}}}]);