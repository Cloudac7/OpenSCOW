"use strict";(self.webpackChunk_scow_docs=self.webpackChunk_scow_docs||[]).push([[1446],{58928:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>t});var d=s(49214),r=s(5409);const i={sidebar_position:1},l="VSCode",o={id:"deploy/config/portal/apps/apps/vscode/index",title:"VSCode",description:"\u8f6f\u4ef6\u7b80\u4ecb",source:"@site/docs/deploy/config/portal/apps/apps/vscode/index.md",sourceDirName:"deploy/config/portal/apps/apps/vscode",slug:"/deploy/config/portal/apps/apps/vscode/",permalink:"/SCOW/pr-preview/pr-1341/docs/deploy/config/portal/apps/apps/vscode/",draft:!1,unlisted:!1,editUrl:"https://github.com/PKUHPC/SCOW/edit/main/website/docs/deploy/config/portal/apps/apps/vscode/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"deploy",previous:{title:"RStudio",permalink:"/SCOW/pr-preview/pr-1341/docs/deploy/config/portal/apps/apps/rstudio/"},next:{title:"\u914d\u7f6eHTML\u8868\u5355",permalink:"/SCOW/pr-preview/pr-1341/docs/deploy/config/portal/apps/configure-attributes"}},c={},t=[{value:"\u8f6f\u4ef6\u7b80\u4ecb",id:"\u8f6f\u4ef6\u7b80\u4ecb",level:2},{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",level:2},{value:"1\u3001code-server\u5b89\u88c5",id:"1code-server\u5b89\u88c5",level:3},{value:"2\u3001\u6dfb\u52a0modulefile\u6587\u4ef6",id:"2\u6dfb\u52a0modulefile\u6587\u4ef6",level:3},{value:"\u914d\u7f6e\u6587\u4ef6",id:"\u914d\u7f6e\u6587\u4ef6",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2},{value:"VSCode\u6269\u5c55\u5b89\u88c5",id:"vscode\u6269\u5c55\u5b89\u88c5",level:3},{value:"1\u3001\u57df\u540d\u89e3\u6790",id:"1\u57df\u540d\u89e3\u6790",level:4},{value:"2\u3001\u901a\u8fc7\u6269\u5c55\u5546\u5e97\u5b89\u88c5",id:"2\u901a\u8fc7\u6269\u5c55\u5546\u5e97\u5b89\u88c5",level:4},{value:"3\u3001\u901a\u8fc7\u6269\u5c55\u540d\u6216\u8005\u6269\u5c55ID\u5b89\u88c5",id:"3\u901a\u8fc7\u6269\u5c55\u540d\u6216\u8005\u6269\u5c55id\u5b89\u88c5",level:4},{value:"4\u3001\u624b\u52a8\u4e0b\u8f7d\u6269\u5c55\u5305\u8fdb\u884c\u5b89\u88c5",id:"4\u624b\u52a8\u4e0b\u8f7d\u6269\u5c55\u5305\u8fdb\u884c\u5b89\u88c5",level:4}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h1,{id:"vscode",children:"VSCode"}),"\n",(0,d.jsx)(n.h2,{id:"\u8f6f\u4ef6\u7b80\u4ecb",children:"\u8f6f\u4ef6\u7b80\u4ecb"}),"\n",(0,d.jsx)(n.p,{children:"code-server\u662f\u4e00\u4e2a\u57fa\u4e8eVS Code\u7684\u5f00\u6e90\u5de5\u5177\uff0c\u5b83\u53ef\u4ee5\u8ba9\u4f60\u901a\u8fc7\u6d4f\u89c8\u5668\u8fdc\u7a0b\u8bbf\u95ee\u4e00\u4e2a\u8fd0\u884c\u7740VS Code\u7684\u670d\u52a1\u5668\u3002"}),"\n",(0,d.jsx)(n.h2,{id:"\u524d\u63d0\u6761\u4ef6",children:"\u524d\u63d0\u6761\u4ef6"}),"\n",(0,d.jsxs)(n.p,{children:["\u8bf7\u786e\u4fdd\u5728\u9700\u8981\u8fd0\u884c\u5e94\u7528\u7684\u8ba1\u7b97\u8282\u70b9\u4e0a\u5b89\u88c5\u6709",(0,d.jsx)(n.a,{href:"https://github.com/coder/code-server",children:"coder/code-server"}),"\u8f6f\u4ef6\u5305\u3002"]}),"\n",(0,d.jsx)(n.h3,{id:"1code-server\u5b89\u88c5",children:"1\u3001code-server\u5b89\u88c5"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"# \u4e0b\u8f7d\u6240\u9700\u7248\u672c\u7684code-server\u4e8c\u8fdb\u5236\u5b89\u88c5\u5305\nwget https://github.com/coder/code-server/releases/download/v4.11.0/code-server-4.11.0-linux-amd64.tar.gz\n\n# \u89e3\u538bcode-server\u4e8c\u8fdb\u5236\u5b89\u88c5\u5305\ntar zxf code-server-4.11.0-linux-amd64.tar.gz\n\n# \u5c06code-server\u91cd\u547d\u540d\u81f3\u6307\u5b9a\u8def\u5f84\nmkdir -p /data/software/code-server\nmv code-server-4.11.0-linux-amd64 /data/software/code-server/4.11.0\n"})}),"\n",(0,d.jsx)(n.h3,{id:"2\u6dfb\u52a0modulefile\u6587\u4ef6",children:"2\u3001\u6dfb\u52a0modulefile\u6587\u4ef6"}),"\n",(0,d.jsx)(n.p,{children:"\u914d\u7f6e\u5df2\u5b89\u88c5\u597d\u7684code-server\u7684modulefile\u6587\u4ef6:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:'# ${MODULEPATH}\u4e3amodulefile\u6240\u5728\u7684\u8def\u5f84\nmkdir -p ${MODULEPATH}/code-server\ncat >> ${MODULEPATH}/code-server/4.11.0 << EOF\n#%Module1.0########################################################################\n##\n## code-server@4.11.0  modulefile\n##\nproc ModulesHelp { } {\n    puts stderr "\\tThis module defines environment variables, aliases and add PATH for code-server"\n    puts stderr "\\tVersion 4.11.0"\n}\n\nmodule-whatis   "code-server@4.11.0"\nprepend-path    PATH                    "/data/software/code-server/4.11.0/bin"\nEOF\n'})}),"\n",(0,d.jsx)(n.p,{children:"\u4e0b\u9762\u8bb2\u89e3\u5982\u4f55\u914d\u7f6e\u4f7f\u7528code-server\u3002"}),"\n",(0,d.jsx)(n.h2,{id:"\u914d\u7f6e\u6587\u4ef6",children:"\u914d\u7f6e\u6587\u4ef6"}),"\n",(0,d.jsxs)(n.p,{children:["\u521b\u5efa",(0,d.jsx)(n.code,{children:"config/apps"}),"\u76ee\u5f55\uff0c\u5728\u91cc\u9762\u521b\u5efa",(0,d.jsx)(n.code,{children:"vscode.yml"}),"\u6587\u4ef6\uff0c\u5176\u5185\u5bb9\u5982\u4e0b\uff1a"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-yaml",metastring:'title="config/apps/vscode.yml"',children:'# \u8fd9\u4e2a\u5e94\u7528\u7684ID\nid: vscode\n\n# \u8fd9\u4e2a\u5e94\u7528\u7684\u540d\u5b57\nname: VSCode\n\n# \u6307\u5b9a\u5e94\u7528\u7c7b\u578b\u4e3aweb\ntype: web\n\n# Web\u5e94\u7528\u7684\u914d\u7f6e\nweb:\n\n  # \u6307\u5b9a\u53cd\u5411\u4ee3\u7406\u7c7b\u578b\n  proxyType: relative\n  \n  # \u51c6\u5907\u811a\u672c\n  beforeScript: |\n    export PORT=$(get_port)\n    export PASSWORD=$(get_password 12)\n\n  # \u8fd0\u884c\u4efb\u52a1\u7684\u811a\u672c\u3002\u53ef\u4ee5\u4f7f\u7528\u51c6\u5907\u811a\u672c\u5b9a\u4e49\u7684\u53d8\u91cf\n  script: |\n    module switch code-server/${selectVersion}\n    PASSWORD=$PASSWORD code-server -vvv --bind-addr 0.0.0.0:$PORT --auth password\n\n  # \u5982\u4f55\u8fde\u63a5\u5e94\u7528\n  connect:\n    method: POST\n    path: /login\n    formData:\n      password: "{{ PASSWORD }}"\n\n# \u914d\u7f6eHTML\u8868\u5355\uff0c\u7528\u6237\u53ef\u4ee5\u6307\u5b9acode-server\u7248\u672c      \nattributes:\n  - type: select\n    name: selectVersion\n    label: \u9009\u62e9\u7248\u672c\n    required: true  # \u7528\u6237\u5fc5\u987b\u9009\u62e9\u4e00\u4e2a\u7248\u672c\n    placeholder: \u9009\u62e9code-server\u7684\u7248\u672c  # \u63d0\u793a\u4fe1\u606f\n    select:\n      - value: 4.9.1\n        label: version 4.9.1\n      - value: 4.11.0\n        label: version 4.11.0\n  - type: text\n    name: sbatchOptions\n    label: \u5176\u4ed6sbatch\u53c2\u6570\n    required: false\n    placeholder: "\u6bd4\u5982\uff1a--gpus gres:2 --time 10"\n'})}),"\n",(0,d.jsx)(n.h2,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,d.jsx)(n.h3,{id:"vscode\u6269\u5c55\u5b89\u88c5",children:"VSCode\u6269\u5c55\u5b89\u88c5"}),"\n",(0,d.jsx)(n.p,{children:"VSCode\u6269\u5c55\u7684\u5b89\u88c5\u9700\u8981\u4e92\u8054\u7f51\uff0c\u5f53\u96c6\u7fa4\u8ba1\u7b97\u8282\u70b9\u65e0\u6cd5\u8fde\u5165\u4e92\u8054\u7f51\u65f6\uff0c\u4f1a\u5f71\u54cdVSCode\u6269\u5c55\u7684\u5b89\u88c5\u3002"}),"\n",(0,d.jsx)(n.h4,{id:"1\u57df\u540d\u89e3\u6790",children:"1\u3001\u57df\u540d\u89e3\u6790"}),"\n",(0,d.jsxs)(n.p,{children:["Open VSX\u662f\u4e00\u4e2a\u5f00\u6e90\u7684VSCode\u6269\u5c55\u5e02\u573a\uff0c\u76ee\u524d\u5b83\u7684\u57df\u540d",(0,d.jsx)(n.a,{href:"https://open-vsx.org",children:"open-vsx.org"}),"\u89e3\u6790\u5730\u5740\u4e3a198.41.30.195\uff0c\u9700\u8981\u786e\u4fdd\u5728\u8fd0\u884cVSCode\u7684\u8282\u70b9\u4e0a\u89e3\u6790\u8be5\u57df\u540d\uff0c\u5e76\u901a\u8fc7\u589e\u52a0\u8def\u7531\u7684\u65b9\u5f0f\u4f7f\u5f97\u8ba1\u7b97\u8282\u70b9\u80fd\u8bbf\u95ee198.41.30.195\u7684443\u7aef\u53e3\u670d\u52a1\u3002\u53e6\u5916\uff0c\u5728\u7ebf\u5b89\u88c5\u6269\u5c55\u65f6\uff0copen-vsx.org\u9700\u8981\u91cd\u5b9a\u5411\u8f6c\u53d1\u5230openvsxorg.blob.core.windows.net\u4e0a\u83b7\u53d6\u6269\u5c55\u5305\uff0c\u56e0\u6b64\uff0copenvsxorg.blob.core.windows.net\u4e0a\u6240\u5bf9\u5e94\u7684IP:443\u670d\u52a1\u9700\u8981\u786e\u4fddVSCode\u8282\u70b9\u4e0a\u80fd\u8bbf\u95ee\u5230\u3002"]}),"\n",(0,d.jsx)(n.p,{children:"\u4ee5\u4e0b\u8868\u683c\u4e2d\u4e3a\u9700\u8981\u89e3\u6790\u7684\u57df\u540d\u53ca\u5b89\u88c5\u6240\u9700\u8bbf\u95ee\u7684IP\u5730\u5740\u548c\u7aef\u53e3\uff1a"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u57df\u540d"}),(0,d.jsx)(n.th,{children:"IP"}),(0,d.jsx)(n.th,{children:"\u7aef\u53e3"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"open-vsx.org"}),(0,d.jsx)(n.td,{children:"198.41.30.195"}),(0,d.jsx)(n.td,{children:"443"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"openvsxorg.blob.core.windows.net"}),(0,d.jsx)(n.td,{children:"20.60.40.4"}),(0,d.jsx)(n.td,{children:"443"})]})]})]}),"\n",(0,d.jsx)(n.p,{children:"VSCode\u6269\u5c55\u5b89\u88c5\u6709\u4e09\u79cd\u65b9\u5f0f\uff1a"}),"\n",(0,d.jsx)(n.h4,{id:"2\u901a\u8fc7\u6269\u5c55\u5546\u5e97\u5b89\u88c5",children:"2\u3001\u901a\u8fc7\u6269\u5c55\u5546\u5e97\u5b89\u88c5"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u5728VSCode\u5de6\u4fa7\u7684\u4fa7\u8fb9\u680f\u4e2d\uff0c\u70b9\u51fb\u5e95\u90e8\u7684\u6269\u5c55\u56fe\u6807\uff08\u901a\u5e38\u662f\u4e00\u4e2a\u6b63\u65b9\u5f62\u65b9\u5757\u6216\u62fc\u56fe\u56fe\u6807\uff09\uff0c\u4ee5\u6253\u5f00\u6269\u5c55\u9762\u677f\u3002"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{alt:"vscode\u6269\u5c55\u5546\u5e97",src:s(70124).A+"",width:"1280",height:"873"})}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u5728\u6269\u5c55\u9762\u677f\u4e2d\uff0c\u4f60\u53ef\u4ee5\u6d4f\u89c8\u5e76\u641c\u7d22\u53ef\u7528\u7684\u6269\u5c55\u3002"}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u627e\u5230\u4f60\u60f3\u8981\u5b89\u88c5\u7684\u6269\u5c55\u540e\uff0c\u70b9\u51fb\u6269\u5c55\u5361\u7247\u4e0a\u7684\u5b89\u88c5\u6309\u94ae\u3002"}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"VSCode\u5c06\u5f00\u59cb\u4e0b\u8f7d\u548c\u5b89\u88c5\u6269\u5c55\uff0c\u4f60\u53ef\u4ee5\u5728\u6269\u5c55\u9762\u677f\u4e2d\u67e5\u770b\u5b89\u88c5\u8fdb\u5ea6\u3002"}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u5b89\u88c5\u5b8c\u6210\u540e\uff0c\u4f60\u4f1a\u6536\u5230\u901a\u77e5\uff0c\u5e76\u4e14\u6269\u5c55\u4f1a\u51fa\u73b0\u5728\u5df2\u5b89\u88c5\u7684\u6269\u5c55\u5217\u8868\u4e2d\u3002"}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u5728\u6269\u5c55\u9762\u677f\u7684\u5df2\u5b89\u88c5\u6269\u5c55\u5217\u8868\u4e2d\uff0c\u4f60\u53ef\u4ee5\u542f\u7528\u3001\u7981\u7528\u6216\u5378\u8f7d\u5df2\u5b89\u88c5\u7684\u6269\u5c55\u3002\u4e00\u4e9b\u6269\u5c55\u53ef\u80fd\u9700\u8981\u8fdb\u884c\u4e00\u4e9b\u989d\u5916\u7684\u8bbe\u7f6e\u6216\u914d\u7f6e\u3002"}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h4,{id:"3\u901a\u8fc7\u6269\u5c55\u540d\u6216\u8005\u6269\u5c55id\u5b89\u88c5",children:"3\u3001\u901a\u8fc7\u6269\u5c55\u540d\u6216\u8005\u6269\u5c55ID\u5b89\u88c5"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u6253\u5f00\u7ec8\u7aef\uff1a\u5728VSCode\u7684\u754c\u9762\u4e0a\u627e\u5230\u7ec8\u7aef\uff08\u547d\u4ee4\u884c\u754c\u9762\uff09\u7684\u5165\u53e3\u3002\u901a\u5e38\uff0c\u7ec8\u7aef\u56fe\u6807\u4f4d\u4e8e\u5de6\u4fa7\u7684\u4fa7\u8fb9\u680f\u4e2d\u3002"}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u5728\u7ec8\u7aef\u4e2d\uff0c\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u5b89\u88c5\u6269\u5c55\uff1a"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:'# <extension-name>\u66ff\u6362\u4e3a\u4f60\u60f3\u5b89\u88c5\u7684\u6269\u5c55\u7684\u6807\u8bc6\u7b26\u6216\u540d\u79f0\u3002\u6269\u5c55\u7684\u6807\u8bc6\u7b26\u901a\u5e38\u662f\u7c7b\u4f3c\u4e8epublisher.extension\u7684\u683c\u5f0f\u3002\u4f8b\u5982\uff0c\u8981\u5b89\u88c5 "Python" \u6269\u5c55\uff0c\u6269\u5c55\u6807\u8bc6\u7b26\u4e3ams-python.python\ncode-server --install-extension <extension-name>\n'})}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u5982\u679c\u4f60\u4e0d\u786e\u5b9a\u6269\u5c55\u7684\u6807\u8bc6\u7b26\uff0c\u4f60\u53ef\u4ee5\u5728Visual Studio Code Marketplace\u4e0a\u627e\u5230\u6269\u5c55\u9875\u9762\uff0c\u5e76\u4eceURL\u4e2d\u83b7\u53d6\u6807\u8bc6\u7b26\u90e8\u5206\u3002"}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u6267\u884c\u547d\u4ee4\u540e\uff0cVSCode\u5c06\u5f00\u59cb\u4e0b\u8f7d\u5e76\u5b89\u88c5\u6307\u5b9a\u7684\u6269\u5c55\u3002\u5b89\u88c5\u5b8c\u6210\u540e\uff0c\u4f60\u5c06\u5728\u7ec8\u7aef\u4e2d\u770b\u5230\u76f8\u5e94\u7684\u6210\u529f\u6d88\u606f\u3002"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{alt:"vscode\u6269\u5c55ID\u5b89\u88c5",src:s(96001).A+"",width:"965",height:"154"})}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u5b89\u88c5\u7684\u6269\u5c55\u73b0\u5728\u5e94\u8be5\u5df2\u7ecf\u5728VSCode\u4e2d\u53ef\u7528\u3002\u4f60\u53ef\u4ee5\u5728\u5de6\u4fa7\u7684\u4fa7\u8fb9\u680f\u4e2d\u70b9\u51fb\u6269\u5c55\u56fe\u6807\u6765\u67e5\u770b\u5df2\u5b89\u88c5\u7684\u6269\u5c55\uff0c\u5e76\u6839\u636e\u9700\u8981\u542f\u7528\u3001\u7981\u7528\u6216\u914d\u7f6e\u5b83\u4eec\u3002"}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h4,{id:"4\u624b\u52a8\u4e0b\u8f7d\u6269\u5c55\u5305\u8fdb\u884c\u5b89\u88c5",children:"4\u3001\u624b\u52a8\u4e0b\u8f7d\u6269\u5c55\u5305\u8fdb\u884c\u5b89\u88c5"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u51c6\u5907\u6269\u5c55\u6587\u4ef6\uff1a\u9996\u5148\u4e0b\u8f7d\u4f60\u9700\u8981\u5b89\u88c5\u7684\u6269\u5c55\u6587\u4ef6\uff0c\u5e76\u4e0a\u4f20\u5230\u670d\u52a1\u5668\u3002\u6269\u5c55\u6587\u4ef6\u901a\u5e38\u5177\u6709.vsix\u6269\u5c55\u540d\uff0c\u5e76\u4e14\u662f\u9884\u5148\u6253\u5305\u597d\u7684\u6269\u5c55\u6587\u4ef6\u3002"}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u6253\u5f00\u7ec8\u7aef\uff1a\u5728VSCode\u7684\u754c\u9762\u4e0a\u627e\u5230\u7ec8\u7aef\uff08\u547d\u4ee4\u884c\u754c\u9762\uff09\u7684\u5165\u53e3\u3002\u901a\u5e38\uff0c\u7ec8\u7aef\u56fe\u6807\u4f4d\u4e8e\u5de6\u4fa7\u7684\u4fa7\u8fb9\u680f\u4e2d\u3002"}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u5728\u7ec8\u7aef\u4e2d\u4f7f\u7528--install-extension\u53c2\u6570\u5b89\u88c5\u6269\u5c55\uff0c\u5c06/path/to/extension.vsix\u66ff\u6362\u4e3a\u4f60\u5b9e\u9645\u7684\u6269\u5c55\u6587\u4ef6\u8def\u5f84\uff1a"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"code-server --install-extension /path/to/extension.vsix\n"})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{alt:"vscode\u6269\u5c55\u5305\u5b89\u88c51",src:s(65418).A+"",width:"962",height:"141"})}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"VSCode\u5c06\u5f00\u59cb\u5b89\u88c5\u6307\u5b9a\u7684\u6269\u5c55\u3002\u5b89\u88c5\u5b8c\u6210\u540e\uff0c\u4f60\u5c06\u5728\u7ec8\u7aef\u4e2d\u770b\u5230\u76f8\u5e94\u7684\u6210\u529f\u6d88\u606f\u3002\u53e6\u5916\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u5728Visual Studio Code Marketplace\u4e0a\u6216\u8005\u975e\u5b98\u65b9\u4e0b\u8f7d\u7684\u6269\u5c55\u5305\u4f1a\u5b58\u5728\u548cVSCode\u4e0d\u517c\u5bb9\u7684\u60c5\u51b5\u3002"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{alt:"vscode\u6269\u5c55\u5305\u5b89\u88c52",src:s(20627).A+"",width:"962",height:"141"})}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u5b89\u88c5\u7684\u6269\u5c55\u73b0\u5728\u5e94\u8be5\u5df2\u7ecf\u5728VSCode\u4e2d\u53ef\u7528\u3002\u4f60\u53ef\u4ee5\u5728\u5de6\u4fa7\u7684\u4fa7\u8fb9\u680f\u4e2d\u70b9\u51fb\u6269\u5c55\u56fe\u6807\u6765\u67e5\u770b\u5df2\u5b89\u88c5\u7684\u6269\u5c55\uff0c\u5e76\u6839\u636e\u9700\u8981\u542f\u7528\u3001\u7981\u7528\u6216\u914d\u7f6e\u5b83\u4eec\u3002"}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},96001:(e,n,s)=>{s.d(n,{A:()=>d});const d=s.p+"assets/images/vscode-ext-install-1-f0f827f20fbcf215b5e4468706e143fd.png"},65418:(e,n,s)=>{s.d(n,{A:()=>d});const d=s.p+"assets/images/vscode-ext-install-2-f5867f1ebc9a1d680dc895dc9a6552c7.png"},20627:(e,n,s)=>{s.d(n,{A:()=>d});const d=s.p+"assets/images/vscode-ext-install-3-f5867f1ebc9a1d680dc895dc9a6552c7.png"},70124:(e,n,s)=>{s.d(n,{A:()=>d});const d=s.p+"assets/images/vscode-ext-shop-e7624cf5878850cfa077f46f715b450c.png"},5409:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>o});var d=s(48318);const r={},i=d.createContext(r);function l(e){const n=d.useContext(i);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),d.createElement(i.Provider,{value:n},e.children)}}}]);