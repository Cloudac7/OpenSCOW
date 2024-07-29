"use strict";(self.webpackChunk_scow_docs=self.webpackChunk_scow_docs||[]).push([[9771],{65666:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>a});var r=s(49214),t=s(5409);const c={sidebar_label:"NFS\u5b89\u88c5\u548c\u914d\u7f6e",title:"NFS\u5b89\u88c5\u548c\u914d\u7f6e",sidebar_position:4},l=void 0,i={id:"hpccluster/nfs",title:"NFS\u5b89\u88c5\u548c\u914d\u7f6e",description:"\u672c\u65b9\u6848\u4ee5NFS\u4f5c\u4e3a\u5171\u4eab\u5b58\u50a8\u3002",source:"@site/docs/hpccluster/nfs.md",sourceDirName:"hpccluster",slug:"/hpccluster/nfs",permalink:"/SCOW/pr-preview/pr-1329/docs/hpccluster/nfs",draft:!1,unlisted:!1,editUrl:"https://github.com/PKUHPC/SCOW/edit/main/website/docs/hpccluster/nfs.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_label:"NFS\u5b89\u88c5\u548c\u914d\u7f6e",title:"NFS\u5b89\u88c5\u548c\u914d\u7f6e",sidebar_position:4},sidebar:"hpccluster",previous:{title:"\u57fa\u7840\u914d\u7f6e",permalink:"/SCOW/pr-preview/pr-1329/docs/basic-config"},next:{title:"slurm.conf \u914d\u7f6e",permalink:"/SCOW/pr-preview/pr-1329/docs/hpccluster/config/slurm.conf"}},o={},a=[{value:"1. \u5b89\u88c5NFS\u670d\u52a1\u7aef",id:"1-\u5b89\u88c5nfs\u670d\u52a1\u7aef",level:2},{value:"2. \u5ba2\u6237\u7aef\u642d\u5efa",id:"2-\u5ba2\u6237\u7aef\u642d\u5efa",level:2},{value:"3. \u4f7f\u7528",id:"3-\u4f7f\u7528",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"\u672c\u65b9\u6848\u4ee5NFS\u4f5c\u4e3a\u5171\u4eab\u5b58\u50a8\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"1-\u5b89\u88c5nfs\u670d\u52a1\u7aef",children:"1. \u5b89\u88c5NFS\u670d\u52a1\u7aef"}),"\n",(0,r.jsxs)(n.p,{children:["\u9009\u62e9\u4e00\u53f0\u673a\u5668\u4f5c\u4e3aNFS\u7684\u670d\u52a1\u7aef\uff0c\u4f8b\u5982\u9009\u62e9\u670d\u52a1\u8282\u70b9",(0,r.jsx)(n.code,{children:"manage01"}),"\uff0cIP\u4e3a",(0,r.jsx)(n.code,{children:"192.168.29.106"}),"\u3002"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u5b89\u88c5NFS\u3001RPC\u670d\u52a1"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-PowerShell",children:"yum install -y nfs-utils rpcbind\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u521b\u5efa\u5171\u4eab\u76ee\u5f55"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-PowerShell",children:"# \u6b64\u5904\u9700\u8981\u6267\u884c\u6743\u9650\nmkdir /data\nchmod 755 /data\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["\u82e5\u9700\u5355\u72ec\u6302\u8f7d\u4e00\u4e2a\u78c1\u76d8\u4f5c\u4e3a\u5171\u4eab\u76ee\u5f55\uff0c\u53ef\u53c2\u8003\u8be5\u94fe\u63a5",(0,r.jsx)(n.a,{href:"/SCOW/pr-preview/pr-1329/docs/hpccluster/mount-disk",children:"\u6570\u636e\u76d8\u6302\u8f7d"})]})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:["\u4fee\u6539\u914d\u7f6e\u6587\u4ef6",(0,r.jsx)(n.code,{children:"vim /etc/exports"}),"\uff0c\u6dfb\u52a0\u5982\u4e0b\u5185\u5bb9"]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-PowerShell",children:"/data *(rw,sync,insecure,no_subtree_check,no_root_squash)\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u542f\u52a8RPC\uff0cNFS\u670d\u52a1"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Bash",children:"systemctl start rpcbind \nsystemctl start nfs-server \n\nsystemctl enable rpcbind \nsystemctl enable nfs-server\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u67e5\u770b\u670d\u52a1\u7aef\u662f\u5426\u6b63\u5e38\u52a0\u8f7d\u914d\u7f6e\u6587\u4ef6"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-PowerShell",children:"showmount -e localhost\n\n# \u6709\u5982\u4e0b\u8f93\u51fa\nExport list for localhost:\n/data *\n"})}),"\n",(0,r.jsx)(n.h2,{id:"2-\u5ba2\u6237\u7aef\u642d\u5efa",children:"2. \u5ba2\u6237\u7aef\u642d\u5efa"}),"\n",(0,r.jsx)(n.p,{children:"\u9700\u8981\u4f7f\u7528\u5171\u4eab\u5b58\u50a8\u7684\u8282\u70b9\u5305\u62ec\u6240\u6709\u7684\u767b\u5f55\u8282\u70b9\u548c\u8ba1\u7b97\u8282\u70b9"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"\u4ee5\u4e0b\u64cd\u4f5c\u5728\u6240\u6709\u767b\u5f55\u8282\u70b9\u548c\u8ba1\u7b97\u8282\u70b9\u4e0a\u6267\u884c"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u5b89\u88c5NFS\u5ba2\u6237\u7aefnfs-utils"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-PowerShell",children:"yum install nfs-utils -y\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u67e5\u770b\u670d\u52a1\u7aef\u53ef\u5171\u4eab\u7684\u76ee\u5f55"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-PowerShell",children:"# 192.168.29.106\u4e3aNFS\u670d\u52a1\u7aefIP\nshowmount -e 192.168.29.106\n\n# \u6709\u5982\u4e0b\u8f93\u51fa\nExport list for 192.168.29.106:\n/data *\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u6302\u8f7d\u670d\u52a1\u7aef\u5171\u4eab\u76ee\u5f55"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-PowerShell",children:"# \u521b\u5efa\u76ee\u5f55\nmkdir /data\n#\u5c06\u5171\u4eab\u5b58\u50a8/data \u6302\u8f7d\u81f3192.168.29.106\u670d\u52a1\u5668\u7684/data\u76ee\u5f55\u4e0b\nmount 192.168.29.106:/data /data -o proto=tcp -o nolock\n\n# \u8bbe\u7f6e\u5f00\u673a\u81ea\u52a8\u6302\u8f7d\nvim /etc/fstab\n# \u5728\u6587\u6863\u672b\u5c3e\u6dfb\u52a0\n192.168.29.106:/data /data nfs rw,auto,nofail,noatime,nolock,intr,tcp,actimeo=1800 0 0\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u67e5\u770b\u6302\u8f7d"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-PowerShell",children:"df -h |grep data\n\n# \u6709\u5982\u4e0b\u8f93\u51fa\n192.168.29.106:/data     79G   56M   75G   1% /data\n"})}),"\n",(0,r.jsx)(n.h2,{id:"3-\u4f7f\u7528",children:"3. \u4f7f\u7528"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u6d4b\u8bd5"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-PowerShell",children:'# \u4f8b\u5982\u5728NFS\u670d\u52a1\u7aef\u8282\u70b9(\u5176\u4ed6\u8282\u70b9\u4e5f\u53ef\u4ee5)\u5199\u5165\u4e00\u4e2a\u6d4b\u8bd5\u6587\u4ef6\necho "hello nfs server" > /data/test.txt\n\ncat /data/test.txt\n# \u5728\u670d\u52a1\u7aef\u8282\u70b9\u6216\u5ba2\u6237\u7aef\u8282\u70b9\u5747\u53ef\u4ee5\u67e5\u770b\u4ee5\u4e0b\u5185\u5bb9\nhello nfs server\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u521b\u5efa\u76ee\u5f55"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-PowerShell",children:"# \u521b\u5efahome\u76ee\u5f55\u4f5c\u4e3a\u7528\u6237\u5bb6\u76ee\u5f55\u7684\u96c6\u5408\uff0c\u53ef\u81ea\u5b9a\u4e49\nmkdir /data/home\n\n# \u521b\u5efasoftware\u76ee\u5f55\u4f5c\u4e3a\u4ea4\u4e92\u5f0f\u5e94\u7528\u7684\u5b89\u88c5\u76ee\u5f55\nmkdir /data/software\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},5409:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>i});var r=s(48318);const t={},c=r.createContext(t);function l(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);