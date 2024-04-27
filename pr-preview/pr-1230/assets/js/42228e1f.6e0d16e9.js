"use strict";(self.webpackChunk_scow_docs=self.webpackChunk_scow_docs||[]).push([[7897],{88246:(s,n,e)=>{e.r(n),e.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var r=e(49214),o=e(5409);const c={sidebar_position:4,title:"\u8de8\u96c6\u7fa4\u6587\u4ef6\u4f20\u8f93\u529f\u80fd\uff08\u53ef\u9009\uff09"},t="\u8de8\u96c6\u7fa4\u6587\u4ef6\u4f20\u8f93\u529f\u80fd\uff08\u53ef\u9009\uff09",i={id:"deploy/config/portal/transfer-cross-clusters",title:"\u8de8\u96c6\u7fa4\u6587\u4ef6\u4f20\u8f93\u529f\u80fd\uff08\u53ef\u9009\uff09",description:"1. \u4e3a\u6bcf\u4e2a\u96c6\u7fa4\u6dfb\u52a0\u4f20\u8f93\u8282\u70b9",source:"@site/docs/deploy/config/portal/transfer-cross-clusters.md",sourceDirName:"deploy/config/portal",slug:"/deploy/config/portal/transfer-cross-clusters",permalink:"/SCOW/pr-preview/pr-1230/docs/deploy/config/portal/transfer-cross-clusters",draft:!1,unlisted:!1,editUrl:"https://github.com/PKUHPC/SCOW/edit/main/website/docs/deploy/config/portal/transfer-cross-clusters.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"\u8de8\u96c6\u7fa4\u6587\u4ef6\u4f20\u8f93\u529f\u80fd\uff08\u53ef\u9009\uff09"},sidebar:"deploy",previous:{title:"\u767b\u5f55\u8282\u70b9\u684c\u9762\u529f\u80fd",permalink:"/SCOW/pr-preview/pr-1230/docs/deploy/config/portal/desktop"},next:{title:"Shell\u7ec8\u7aef\u6587\u4ef6\u4f20\u8f93\u529f\u80fd",permalink:"/SCOW/pr-preview/pr-1230/docs/deploy/config/portal/shell"}},l={},d=[{value:"1. \u4e3a\u6bcf\u4e2a\u96c6\u7fa4\u6dfb\u52a0\u4f20\u8f93\u8282\u70b9",id:"1-\u4e3a\u6bcf\u4e2a\u96c6\u7fa4\u6dfb\u52a0\u4f20\u8f93\u8282\u70b9",level:2},{value:"\u7f51\u7edc\u533a\u5206",id:"\u7f51\u7edc\u533a\u5206",level:3},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:3},{value:"2. \u5efa\u7acbscow\u8282\u70b9\u5230\u6bcf\u4e2a\u4f20\u8f93\u8282\u70b9\u7684root\u7528\u6237\u514d\u5bc6",id:"2-\u5efa\u7acbscow\u8282\u70b9\u5230\u6bcf\u4e2a\u4f20\u8f93\u8282\u70b9\u7684root\u7528\u6237\u514d\u5bc6",level:2},{value:"3. \u5728\u6bcf\u4e2a\u4f20\u8f93\u8282\u70b9\u4e0a\u5b89\u88c5scow-sync\u4f20\u8f93\u8f6f\u4ef6",id:"3-\u5728\u6bcf\u4e2a\u4f20\u8f93\u8282\u70b9\u4e0a\u5b89\u88c5scow-sync\u4f20\u8f93\u8f6f\u4ef6",level:2},{value:"4. \u53ef\u9009\uff1a\u81ea\u5b9a\u4e49scow-sync\u7684\u65e5\u5fd7\u8def\u5f84",id:"4-\u53ef\u9009\u81ea\u5b9a\u4e49scow-sync\u7684\u65e5\u5fd7\u8def\u5f84",level:2}];function a(s){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...s.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"\u8de8\u96c6\u7fa4\u6587\u4ef6\u4f20\u8f93\u529f\u80fd\u53ef\u9009",children:"\u8de8\u96c6\u7fa4\u6587\u4ef6\u4f20\u8f93\u529f\u80fd\uff08\u53ef\u9009\uff09"}),"\n",(0,r.jsx)(n.h2,{id:"1-\u4e3a\u6bcf\u4e2a\u96c6\u7fa4\u6dfb\u52a0\u4f20\u8f93\u8282\u70b9",children:"1. \u4e3a\u6bcf\u4e2a\u96c6\u7fa4\u6dfb\u52a0\u4f20\u8f93\u8282\u70b9"}),"\n",(0,r.jsx)(n.h3,{id:"\u7f51\u7edc\u533a\u5206",children:"\u7f51\u7edc\u533a\u5206"}),"\n",(0,r.jsxs)(n.p,{children:["\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u540c\u5c5e\u4e00\u4e2a\u96c6\u7fa4\u7684\u6240\u6709\u8282\u70b9\uff0c\u5747\u5728\u540c\u4e00\u4e2a\u5b50\u7f51\u4e0b\uff0c\u6211\u4eec\u79f0\u4e4b\u4e3a",(0,r.jsx)(n.strong,{children:"\u96c6\u7fa4\u5185\u7f51"}),"\u3002\u4f8b\u5982\uff1a\u767b\u5f55\u8282\u70b9\u8bbf\u95ee\u8ba1\u7b97\u7ed3\u70b9\u4fbf\u662f\u901a\u8fc7\u96c6\u7fa4\u5185\u7f51\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u4e0d\u540c\u96c6\u7fa4\u4e4b\u95f4\u7684\u8282\u70b9\uff0c\u4e92\u76f8\u901a\u5e38\u662f\u8bbf\u95ee\u4e0d\u5230\u7684\uff0c\u9664\u975e\u63a5\u5165\u5230\u66f4\u5927\u7684\u7f51\u7edc\u4e4b\u4e2d\uff0c\u6211\u4eec\u79f0\u4e4b\u4e3a",(0,r.jsx)(n.strong,{children:"\u96c6\u7fa4\u95f4\u53ef\u8fbe\u7f51"}),"\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u4efb\u4f55\u673a\u5668\u90fd\u53ef\u4ee5\u901a\u8fc7\u7f51\u7edc\u8bbf\u95ee\u5230\u7684\u5730\u5740\uff0c\u4e3a\u516c\u7f51\u5730\u5740\uff0c\u6211\u4eec\u79f0\u4e4b\u4e3a",(0,r.jsx)(n.strong,{children:"\u4e92\u8054\u7f51\u516c\u7f51"}),"\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u7f51\u7edc\u8303\u56f4\u6392\u5e8f\uff1a\u4e92\u8054\u7f51\u516c\u7f51 > \u96c6\u7fa4\u95f4\u53ef\u8fbe\u7f51 > \u96c6\u7fa4\u5185\u7f51"}),"\n",(0,r.jsx)(n.h3,{id:"\u914d\u7f6e",children:"\u914d\u7f6e"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u5728\u8de8\u96c6\u7fa4\u4f20\u8f93\u529f\u80fd\u7684\u914d\u7f6e\u4e2d\uff0c\u6bcf\u4e2a\u96c6\u7fa4\u9700\u8981\u6709\u4e00\u4e2a\u4e13\u95e8\u7528\u6765\u505a\u6587\u4ef6\u4f20\u8f93\u7684\u8282\u70b9TransferNode\uff0c\u8be5TransferNode\u8981\u6c42\u5177\u6709",(0,r.jsx)(n.strong,{children:"\u96c6\u7fa4\u95f4\u53ef\u8fbe\u7f51"}),"\u7684\u5730\u5740\uff0c\u4e5f\u5c31\u662f\u8bf4\u63a5\u5165SCOW\u7cfb\u7edf\u7684\u6240\u6709\u96c6\u7fa4\u7684\u4f20\u8f93\u8282\u70b9\u4e4b\u95f4\u5f7c\u6b64\u662f\u53ef\u4ee5\u8bbf\u95ee\u7684\u3002\u4f20\u8f93\u8282\u70b9TransferNode\u548c\u767b\u5f55\u8282\u70b9LoginNode\u53ef\u4ee5\u662f\u540c\u4e00\u4e2a\u8282\u70b9\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u4f20\u8f93\u8282\u70b9\u80fd\u591f\u8bbf\u95ee\u6587\u4ef6\u7cfb\u7edf\uff0c\u4e14\u6302\u8f7d\u76ee\u5f55\u8def\u5f84\u548c\u767b\u5f55\u8282\u70b9\u8bbf\u95ee\u6587\u4ef6\u7cfb\u7edf\u7684\u8def\u5f84\u76f8\u540c\u3002\u51fa\u4e8e\u5b89\u5168\u6027\u7684\u8003\u8651\uff0c\u4f20\u8f93\u8282\u70b9\u6700\u597d\u4e0d\u5177\u5907\u8bbf\u95ee\u4f5c\u4e1a\u6743\u9650\uff08\u4f8b\u5982\uff0c\u8bbe\u7f6e\u4e0eslurm\u7ba1\u7406\u8282\u70b9\u7f51\u7edc\u4e0d\u901a\uff09"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u51c6\u5907\u597d\u4f20\u8f93\u8282\u70b9\u540e\uff0c\u9700\u8981\u5c06\u5176\u63a5\u5165\u5230scow\u96c6\u7fa4\u4e2d\u3002\u63a5\u4e0b\u6765\u9700\u8981\u4fee\u6539\u96c6\u7fa4\u914d\u7f6e\u6587\u4ef6",(0,r.jsx)(n.code,{children:"config/clusters/xxx.yaml"}),"\uff0c\u5728yaml\u6587\u4ef6\u672b\u5c3e\u6dfb\u52a0crossClusterFileTransfer\u6a21\u5757\uff0c\u6dfb\u52a0enabled\u548ctransferNode\u5c5e\u6027\u3002\u5982\u679cenabled\u4e3atrue\u8868\u793a\u5f00\u542f\u8be5\u529f\u80fd\u9700\u8981\u914d\u7f6etransferNode\uff0c\u4e3afalse\u8868\u793a\u4e0d\u5f00\u542f\u8be5\u529f\u80fd\u65e0\u9700\u914d\u7f6etransferNode\u3002transferNode\u914d\u7f6e\u683c\u5f0f\u4e3aip",":port","\uff0c\u5982\u679c\u4e0d\u914d\u7f6eport\u9ed8\u8ba4\u4e3a22\u7aef\u53e3\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:'title="config/clusters/hpc01.yaml"',children:"displayName: hpc01Name\nadapterUrl: 0.0.0.0:6000\nloginNodes:\n  - name: loginNode01\n    address: localhost:22222\ncrossClusterFileTransfer:\n  enabled: true\n  transferNode: localhost:22222\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"\u4f20\u8f93\u8282\u70b9\u5982\u679c\u662f\u4e00\u4e2a\u65b0\u8282\u70b9\uff0c\u5219\u8be5\u8282\u70b9\u9700\u8981\u4e0e\u96c6\u7fa4\u6709\u4e00\u81f4\u7684\u7528\u6237\uff0c\u5373\u914d\u7f6e\u4e0e\u8be5\u96c6\u7fa4\u76f8\u540c\u7684\u8ba4\u8bc1\u7cfb\u7edf(LDAP)\uff0c\u6302\u8f7d\u76f8\u540c\u7684\u5171\u4eab\u76ee\u5f55\u3002"})}),"\n",(0,r.jsx)(n.h2,{id:"2-\u5efa\u7acbscow\u8282\u70b9\u5230\u6bcf\u4e2a\u4f20\u8f93\u8282\u70b9\u7684root\u7528\u6237\u514d\u5bc6",children:"2. \u5efa\u7acbscow\u8282\u70b9\u5230\u6bcf\u4e2a\u4f20\u8f93\u8282\u70b9\u7684root\u7528\u6237\u514d\u5bc6"}),"\n",(0,r.jsx)(n.p,{children:"\u5728scow\u8282\u70b9\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# \u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u8fde\u7eed\u56de\u8f66\uff0c\u8f93\u5165\u5bc6\u7801\u540e\u8bbe\u7f6e\u514d\u5bc6\u6210\u529f\nssh-copy-id root@[TransferNodeIP]\n"})}),"\n",(0,r.jsx)(n.h2,{id:"3-\u5728\u6bcf\u4e2a\u4f20\u8f93\u8282\u70b9\u4e0a\u5b89\u88c5scow-sync\u4f20\u8f93\u8f6f\u4ef6",children:"3. \u5728\u6bcf\u4e2a\u4f20\u8f93\u8282\u70b9\u4e0a\u5b89\u88c5scow-sync\u4f20\u8f93\u8f6f\u4ef6"}),"\n",(0,r.jsx)(n.p,{children:"scow-sync\u4f20\u8f93\u8f6f\u4ef6\u76ee\u524d\u53ea\u652f\u6301\u4ece\u6e90\u7801\u6784\u5efa\u3002"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\u62c9\u53d6scow-sync\u4ee3\u7801\u3002\u9996\u5148\u9700\u8981\u4ee5root\u8eab\u4efd\u767b\u5f55\u5230\u4f20\u8f93\u8282\u70b9\uff0c\u7136\u540e\u62c9\u53d6scow-sync\u7684\u4ed3\u5e93",(0,r.jsx)(n.a,{href:"https://github.com/PKUHPC/scow-sync.git%E3%80%82%E9%80%9A%E5%B8%B8%E5%B0%86scow-sync%E5%AE%89%E8%A3%85%E5%9C%A8/data/software%E7%9B%AE%E5%BD%95%E4%B8%8B%E3%80%82",children:"https://github.com/PKUHPC/scow-sync.git\u3002\u901a\u5e38\u5c06scow-sync\u5b89\u88c5\u5728/data/software\u76ee\u5f55\u4e0b\u3002"})]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# \u4ee5root\u8eab\u4efd\u767b\u5f55\u4f20\u8f93\u8282\u70b9\nssh root@[TransferNodeIP] -p [TransferNodePort]\n# \u62c9\u53d6scow-sync\u5230/data/software\u76ee\u5f55\ncd /data/software\ngit clone https://github.com/PKUHPC/scow-sync.git\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:"\u5b89\u88c5python\u4f9d\u8d56\u5e93\u3002\u5728\u4f20\u8f93\u8282\u70b9\u4e0a\u6309\u7167scow-sync\u7684requirements.txt\u6587\u4ef6\u5b89\u88c5\u597d\u5bf9\u5e94\u7248\u672c\u7684\u4f9d\u8d56\u5e93\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-txt",children:"python >= 3.6.0\nparamiko >= 3.0.0\npsutil >= 5.9.4\nsubprocess\nconcurrent\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsx)(n.li,{children:"\u8bbe\u7f6epython\u89e3\u91ca\u5668\u7684\u8def\u5f84\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u5982\u679c\u7528\u6237\u4f7f\u7528\u7684python\u89e3\u91ca\u5668\u7684\u8def\u5f84\u4e3a",(0,r.jsx)(n.code,{children:"/usr/bin/python3"}),"\uff0c\u5219\u53ef\u4ee5\u76f4\u63a5\u6267\u884c",(0,r.jsx)(n.code,{children:"sudo bash install.sh"}),"\uff0c\u8be5\u811a\u672c\u4f1a\u5728\u5168\u5c40\u5b89\u88c5scow-sync\u76f8\u5173\u7684\u547d\u4ee4\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u5982\u679c\u7528\u6237\u4f7f\u7528\u81ea\u5b9a\u4e49\u7684python\u89e3\u91ca\u5668\u7684\u8def\u5f84\uff0c\u9700\u8981\u4fee\u6539scow-sync\u4ee3\u7801\u4e2d\u7684",(0,r.jsx)(n.code,{children:"scow_sync/config.py"}),"\u914d\u7f6e\u6587\u4ef6\u7684",(0,r.jsx)(n.code,{children:"SHEBANG_PATH"}),"\u4e3apython\u89e3\u91ca\u5668\u7684\u8def\u5f84\uff0c\u518d\u6267\u884c",(0,r.jsx)(n.code,{children:"sudo bash install.sh update"}),"\u66f4\u65b0scow-sync\u5404\u4e2a\u811a\u672c\u7684SheBang\uff0c\u6700\u540e\u518d\u6267\u884c",(0,r.jsx)(n.code,{children:"sudo bash install.sh"}),"\u5b89\u88c5scow-sync\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.ol,{start:"4",children:["\n",(0,r.jsx)(n.li,{children:"\u8f93\u5165\u4ee5\u4e0b\u547d\u4ee4\u89c2\u5bdf\u662f\u5426\u5b89\u88c5\u6210\u529f\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"[root@login01 ~]# scow-sync-start -h\nusage: scow-sync-start [-h] [-a ADDRESS] [-u USER] [-s SOURCE]\n                       [-d DESTINATION] [-m MAX_DEPTH] [-p PORT]\n                       [-k SSHKEY_PATH] [-c]\n\nargsparser for starting transferring files\n\noptional arguments:\n  -h, --help            show this help message and exit\n  -a ADDRESS, --address ADDRESS\n                        address of the server\n  -u USER, --user USER  username for logging in\n  -s SOURCE, --source SOURCE\n                        path of the source file or directory\n  -d DESTINATION, --destination DESTINATION\n                        path of the destination directory\n  -m MAX_DEPTH, --max-depth MAX_DEPTH\n                        max parallel depth of the directory\n  -p PORT, --port PORT  ssh port of the server\n  -k SSHKEY_PATH, --sshkey-path SSHKEY_PATH\n                        path of the private key\n  -c, --check           check whether the key in scow-sync-ssh is right\n  \n[root@login01 ~]# scow-sync-query\n[]\n[root@login01 ~]# scow-sync-terminate -h\nusage: scow-sync-terminate [-h] [-a ADDRESS] [-u USER] [-s SOURCE]\n\nargsparser for terminating transferring files\n\noptional arguments:\n  -h, --help            show this help message and exit\n  -a ADDRESS, --address ADDRESS\n                        address of the server\n  -u USER, --user USER  username for logging in to the server\n  -s SOURCE, --source SOURCE\n                        path to the source file or directory\n"})}),"\n",(0,r.jsx)(n.h2,{id:"4-\u53ef\u9009\u81ea\u5b9a\u4e49scow-sync\u7684\u65e5\u5fd7\u8def\u5f84",children:"4. \u53ef\u9009\uff1a\u81ea\u5b9a\u4e49scow-sync\u7684\u65e5\u5fd7\u8def\u5f84"}),"\n",(0,r.jsxs)(n.p,{children:["\u914d\u7f6escow-sync\u7684\u8f93\u51fa\u8def\u5f84\u4e3a\u53ef\u9009\u64cd\u4f5c\uff0c\u9ed8\u8ba4\u7684\u8f93\u51fa\u8def\u5f84\u4e3a",(0,r.jsx)(n.code,{children:"~/scow/.scow-sync"}),"\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u4fee\u6539scow-sync\u4ee3\u7801\u4e2d\u7684",(0,r.jsx)(n.code,{children:"scow_sync/config.py"}),"\u7684",(0,r.jsx)(n.code,{children:"SCOWSYNC_PATH"}),"\u3001",(0,r.jsx)(n.code,{children:"LOG_PATH"}),"\u548c",(0,r.jsx)(n.code,{children:"ERROR_PATH"}),"\uff0c\u4ee5\u4e0b\u4e3a\u9ed8\u8ba4\u914d\u7f6e:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"SCOWSYNC_PATH = os.path.expanduser('~/scow/.scow-sync')  # scow-sync\u4f20\u8f93\u6587\u4ef6\u8fdb\u5ea6\u4fdd\u5b58\u76ee\u5f55\nLOG_PATH = os.path.join(SCOWSYNC_PATH, 'scow-sync.log')  # scow-sync\u6253\u5370\u65e5\u5fd7\u76ee\u5f55\nERROR_PATH = os.path.join(SCOWSYNC_PATH, 'scow-sync.err') # scow-sync\u9519\u8bef\u65e5\u5fd7\u76ee\u5f55\n"})}),"\n",(0,r.jsx)(n.p,{children:"SCOWSYNC_PATH\u7684\u8def\u5f84\u5fc5\u987b\u4e3a\u4ee5~\u5f00\u5934\u7684\u7528\u6237\u8def\u5f84\uff0c\u4ece\u800c\u5b9e\u73b0\u7528\u6237\u4fe1\u606f\u7684\u9694\u79bb\u3002"})]})}function h(s={}){const{wrapper:n}={...(0,o.R)(),...s.components};return n?(0,r.jsx)(n,{...s,children:(0,r.jsx)(a,{...s})}):a(s)}},5409:(s,n,e)=>{e.d(n,{R:()=>t,x:()=>i});var r=e(48318);const o={},c=r.createContext(o);function t(s){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof s?s(n):{...n,...s}}),[n,s])}function i(s){let n;return n=s.disableParentContext?"function"==typeof s.components?s.components(o):s.components||o:t(s.components),r.createElement(c.Provider,{value:n},s.children)}}}]);