"use strict";(self.webpackChunk_scow_docs=self.webpackChunk_scow_docs||[]).push([[9318],{22758:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>d,metadata:()=>l,toc:()=>t});var i=s(49214),c=s(5409);const d={sidebar_position:2,title:"SCOW\u7ba1\u7406\u5458\u4f7f\u7528\u6280\u5de7"},r=void 0,l={id:"deploy/ops/admin-usage-tips",title:"SCOW\u7ba1\u7406\u5458\u4f7f\u7528\u6280\u5de7",description:"1. \u7cfb\u7edf\u62a5\u9519\uff1a\u67e5\u770b\u8fd0\u884c\u65e5\u5fd7",source:"@site/docs/deploy/ops/admin-usage-tips.md",sourceDirName:"deploy/ops",slug:"/deploy/ops/admin-usage-tips",permalink:"/SCOW/pr-preview/pr-1329/docs/deploy/ops/admin-usage-tips",draft:!1,unlisted:!1,editUrl:"https://github.com/PKUHPC/SCOW/edit/main/website/docs/deploy/ops/admin-usage-tips.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"SCOW\u7ba1\u7406\u5458\u4f7f\u7528\u6280\u5de7"},sidebar:"deploy",previous:{title:"\u8fd0\u7ef4",permalink:"/SCOW/pr-preview/pr-1329/docs/deploy/ops/"}},o={},t=[{value:"1. \u7cfb\u7edf\u62a5\u9519\uff1a\u67e5\u770b\u8fd0\u884c\u65e5\u5fd7",id:"1-\u7cfb\u7edf\u62a5\u9519\u67e5\u770b\u8fd0\u884c\u65e5\u5fd7",level:2},{value:"1.1 \u67e5\u770b\u65e5\u5fd7",id:"11-\u67e5\u770b\u65e5\u5fd7",level:3},{value:"1.2 \u8bbe\u7f6e\u65e5\u5fd7\u7ea7\u522b",id:"12-\u8bbe\u7f6e\u65e5\u5fd7\u7ea7\u522b",level:3},{value:"2. \u4f5c\u4e1a/\u4ea4\u4e92\u5f0f\u5e94\u7528\u6267\u884c\u5931\u8d25\uff1a\u67e5\u770b\u8f93\u51fa\u6587\u6863",id:"2-\u4f5c\u4e1a\u4ea4\u4e92\u5f0f\u5e94\u7528\u6267\u884c\u5931\u8d25\u67e5\u770b\u8f93\u51fa\u6587\u6863",level:2},{value:"2.1 \u4f5c\u4e1a\u6267\u884c\u5931\u8d25",id:"21-\u4f5c\u4e1a\u6267\u884c\u5931\u8d25",level:3},{value:"2.2 \u4ea4\u4e92\u5f0f\u5e94\u7528\u6267\u884c\u5931\u8d25",id:"22-\u4ea4\u4e92\u5f0f\u5e94\u7528\u6267\u884c\u5931\u8d25",level:3},{value:"3. \u7528\u6237\u64cd\u4f5c\u5ba1\u8ba1\uff1a\u67e5\u770b\u64cd\u4f5c\u65e5\u5fd7",id:"3-\u7528\u6237\u64cd\u4f5c\u5ba1\u8ba1\u67e5\u770b\u64cd\u4f5c\u65e5\u5fd7",level:2},{value:"4. \u89e3\u51b3\u7279\u5b9a\u73af\u5883\u95ee\u9898\uff1a\u6a21\u4eff\u7528\u6237\u767b\u5f55",id:"4-\u89e3\u51b3\u7279\u5b9a\u73af\u5883\u95ee\u9898\u6a21\u4eff\u7528\u6237\u767b\u5f55",level:2},{value:"5. \u5176\u4ed6",id:"5-\u5176\u4ed6",level:2},{value:"5.1 \u7528\u6237\u4ece\u8d26\u6237\u4e2d\u79fb\u9664\u5931\u8d25",id:"51-\u7528\u6237\u4ece\u8d26\u6237\u4e2d\u79fb\u9664\u5931\u8d25",level:3},{value:"5.2 <strong>\u5c06\u7528\u6237\u6dfb\u52a0\u5230\u67d0\u4e2a\u8d26\u6237\u5931\u8d25</strong>",id:"52-\u5c06\u7528\u6237\u6dfb\u52a0\u5230\u67d0\u4e2a\u8d26\u6237\u5931\u8d25",level:3}];function a(e){const n={admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"1-\u7cfb\u7edf\u62a5\u9519\u67e5\u770b\u8fd0\u884c\u65e5\u5fd7",children:"1. \u7cfb\u7edf\u62a5\u9519\uff1a\u67e5\u770b\u8fd0\u884c\u65e5\u5fd7"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"\u95e8\u6237\u7cfb\u7edf\u62a5\u9519\u65f6\uff0c\u8bf7\u67e5\u770bportal-server(\u4f18\u5148)\u548cportal-web\u65e5\u5fd7\uff1b\u7ba1\u7406\u7cfb\u7edf\u62a5\u9519\u65f6\uff0c\u8bf7\u67e5\u770bmis-server(\u4f18\u5148)\u548cmis-web\u65e5\u5fd7\u3002"})}),"\n",(0,i.jsx)(n.h3,{id:"11-\u67e5\u770b\u65e5\u5fd7",children:"1.1 \u67e5\u770b\u65e5\u5fd7"}),"\n",(0,i.jsxs)(n.p,{children:["\u5404\u7ec4\u4ef6\u7684\u5b9e\u65f6\u65e5\u5fd7\u662f\u8f93\u51fa\u5728",(0,i.jsx)(n.code,{children:"stdout"}),"\uff0c\u53ef\u4ee5\u901a\u8fc7",(0,i.jsx)(n.code,{children:"./cli compose logs -f "}),"\u67e5\u770b\u5b9e\u65f6\u7684\u65e5\u5fd7\u8f93\u51fa\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Bash",children:"# \u67e5\u770b\u6240\u6709\u7ec4\u4ef6\u7684\u65e5\u5fd7\n./cli compose logs -f \n\n# \u67e5\u770b\u8ba4\u8bc1\u7cfb\u7edf\u7684\u65e5\u5fd7\n./cli compose logs -f auth\n\n# \u67e5\u770b\u95e8\u6237\u7cfb\u7edf\u670d\u52a1\u5668\u7aef\u7684\u65e5\u5fd7\n./cli compose logs -f portal-server\n\n# \u67e5\u770b\u7ba1\u7406\u7cfb\u7edf\u670d\u52a1\u5668\u7aef\u7684\u65e5\u5fd7\n./cli compose logs -f mis-server\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u82e5\u5f00\u542f\u4e86\u65e5\u5fd7\u6536\u96c6\u5de5\u5177fluentd(\u9ed8\u8ba4\u5f00\u542f)\uff0c\u53ef\u4ee5\u67e5\u770b\u5404\u7ec4\u4ef6\u7684\u5386\u53f2\u65e5\u5fd7\uff0c\u5386\u53f2\u65e5\u5fd7\u7684\u9ed8\u8ba4\u8def\u5f84\u5728",(0,i.jsx)(n.code,{children:"/var/log/fluentd/"}),"\uff0c\u5404\u7ec4\u4ef6\u7684\u65e5\u5fd7\u6309\u7ec4\u4ef6\u540d\u79f0\u5206\u6587\u4ef6\u5939\u5b58\u50a8\uff0c\u6bcf\u4e2a\u7ec4\u4ef6\u7684\u65e5\u5fd7\u6309\u7167\u5927\u5c0f\u548c\u65e5\u671f\u5206\u6587\u4ef6\u5b58\u50a8\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u5404\u7ec4\u4ef6\u65e5\u5fd7\uff1a"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"img",src:s(29912).A+"",width:"1342",height:"568"})}),"\n",(0,i.jsx)(n.p,{children:"mis-web\u65e5\u5fd7\uff1a"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"img",src:s(4931).A+"",width:"1753",height:"435"})}),"\n",(0,i.jsx)(n.h3,{id:"12-\u8bbe\u7f6e\u65e5\u5fd7\u7ea7\u522b",children:"1.2 \u8bbe\u7f6e\u65e5\u5fd7\u7ea7\u522b"}),"\n",(0,i.jsxs)(n.p,{children:["SCOW\u65e5\u5fd7\u8f93\u51fa\u652f\u6301\u65e5\u5fd7\u7b49\u7ea7\u8bbe\u7f6e\uff0c\u53ef\u9009\u7b49\u7ea7\u5305\u62ec",(0,i.jsx)(n.code,{children:"trace"}),", ",(0,i.jsx)(n.code,{children:"debug"}),", ",(0,i.jsx)(n.code,{children:"info"}),", ",(0,i.jsx)(n.code,{children:"warn"}),", ",(0,i.jsx)(n.code,{children:"error"}),"\uff0c\u9ed8\u8ba4\u7b49\u7ea7\u4e3a",(0,i.jsx)(n.code,{children:"info"}),"\uff0c\u901a\u8fc7\u4fee\u6539",(0,i.jsx)(n.code,{children:"install.yamll"}),"\u65e5\u5fd7\u914d\u7f6e\u90e8\u5206\u6765\u5b9e\u73b0\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-YAML",children:'log:\n  # \u53ef\u9009trace, debug, info, warn, error, \u9ed8\u8ba4info\n  level: "info"\n'})}),"\n",(0,i.jsx)(n.h2,{id:"2-\u4f5c\u4e1a\u4ea4\u4e92\u5f0f\u5e94\u7528\u6267\u884c\u5931\u8d25\u67e5\u770b\u8f93\u51fa\u6587\u6863",children:"2. \u4f5c\u4e1a/\u4ea4\u4e92\u5f0f\u5e94\u7528\u6267\u884c\u5931\u8d25\uff1a\u67e5\u770b\u8f93\u51fa\u6587\u6863"}),"\n",(0,i.jsx)(n.h3,{id:"21-\u4f5c\u4e1a\u6267\u884c\u5931\u8d25",children:"2.1 \u4f5c\u4e1a\u6267\u884c\u5931\u8d25"}),"\n",(0,i.jsxs)(n.p,{children:["\u4f5c\u4e1a\u6267\u884c\u5b8c\u6210\u65f6\uff0c\u5728\u8be5\u4f5c\u4e1a\u7684\u5de5\u4f5c\u76ee\u5f55\u4f1a\u751f\u6210\u4e24\u4e2a\u6807\u51c6\u8f93\u51fa\u6587\u4ef6\uff1a",(0,i.jsx)(n.code,{children:"job.{job_id}.out"}),"\u548c",(0,i.jsx)(n.code,{children:"job.{job_id}.err"}),"\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u5f53\u4f5c\u4e1a\u6267\u884c\u5931\u8d25(\u72b6\u6001\u4e3a",(0,i.jsx)(n.code,{children:"FAILED"}),")\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u67e5\u770b",(0,i.jsx)(n.code,{children:"job.{job_id}.err"})," \u6587\u4ef6\u5185\u5bb9\u5206\u6790\u9519\u8bef\u7684\u539f\u56e0\uff1a\u6240\u6709\u4f5c\u4e1a\u5217\u8868->\u8be5\u4f5c\u4e1a\u884c->\u8fdb\u5165\u76ee\u5f55\uff1a"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"img",src:s(79156).A+"",width:"1947",height:"832"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"img",src:s(47492).A+"",width:"1701",height:"280"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"img",src:s(92081).A+"",width:"772",height:"130"})}),"\n",(0,i.jsx)(n.h3,{id:"22-\u4ea4\u4e92\u5f0f\u5e94\u7528\u6267\u884c\u5931\u8d25",children:"2.2 \u4ea4\u4e92\u5f0f\u5e94\u7528\u6267\u884c\u5931\u8d25"}),"\n",(0,i.jsx)(n.p,{children:"\u4ea4\u4e92\u5f0f\u5e94\u7528\u5206\u4e3aweb\u548cvnc\u4e24\u7c7b\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u67e5\u770b\u4ea4\u4e92\u5f0f\u5e94\u7528\u6267\u884c\u7684\u8282\u70b9\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["web\u7c7b\u5e94\u7528\uff1a\u5de5\u4f5c\u76ee\u5f55\u4e0b\u7684",(0,i.jsx)(n.code,{children:"server_session_info.json"}),"\u6587\u4ef6\u4e2d\u7684",(0,i.jsx)(n.code,{children:"HOST"})]}),"\n",(0,i.jsxs)(n.li,{children:["vnc\u7c7b\u5e94\u7528\uff1a\u5de5\u4f5c\u76ee\u5f55\u4e0b\u7684",(0,i.jsx)(n.code,{children:"VNC_SESSION_INFO"}),"\u6587\u4ef6"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u67e5\u770b\u4ea4\u4e92\u5f0f\u5e94\u7528\u8f93\u51fa\u65e5\u5fd7\u53ca\u62a5\u9519\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["web\u7c7b\u5e94\u7528\uff1a\u5de5\u4f5c\u76ee\u5f55\u4e0b\u7684",(0,i.jsx)(n.code,{children:"slurm-{job_id}.out"}),"\u6587\u4ef6"]}),"\n",(0,i.jsxs)(n.li,{children:["vnc\u7c7b\u5e94\u7528\uff1a\u5de5\u4f5c\u76ee\u5f55\u4e0b\u7684",(0,i.jsx)(n.code,{children:"output"}),"\u548c",(0,i.jsx)(n.code,{children:"vnc.log"}),"\u6587\u4ef6"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"\u622a\u56fe\u7565\u3002"})}),"\n",(0,i.jsx)(n.h2,{id:"3-\u7528\u6237\u64cd\u4f5c\u5ba1\u8ba1\u67e5\u770b\u64cd\u4f5c\u65e5\u5fd7",children:"3. \u7528\u6237\u64cd\u4f5c\u5ba1\u8ba1\uff1a\u67e5\u770b\u64cd\u4f5c\u65e5\u5fd7"}),"\n",(0,i.jsx)(n.p,{children:"SCOW\u652f\u6301\u53ef\u63d2\u62d4\u7684\u5ba1\u8ba1\u65e5\u5fd7\u529f\u80fd\uff0c\u914d\u7f6e\u5ba1\u8ba1\u65e5\u5fd7\u7684\u6b65\u9aa4\u5982\u4e0b\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["(1) \u5728install.yaml\u4e2d\u6dfb\u52a0","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-YAML",children:'# \u53ef\u6dfb\u52a0\u5ba1\u8ba1\u65e5\u5fd7\u529f\u80fd\uff0c\u5e76\u914d\u7f6e\u5ba1\u8ba1\u65e5\u5fd7\u6570\u636e\u5e93\u5bc6\u7801\naudit:\n  dbPassword: "must!chang3this"\n'})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["(2) \u6dfb\u52a0\u5ba1\u8ba1\u65e5\u5fd7\u914d\u7f6e\u6587\u4ef6\uff0c\u5728",(0,i.jsx)(n.code,{children:"./config"}),"\u76ee\u5f55\u4e0b\u6dfb\u52a0",(0,i.jsx)(n.code,{children:"audit.yaml"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-YAML",children:"# \u5ba1\u8ba1\u7cfb\u7edf\u6570\u636e\u5e93\u7684\u4fe1\u606f\u3002\u53ef\u4ee5\u4e0d\u4fee\u6539\ndb:\n  host: audit-db\n  port: 3306\n  user: root\n  dbName: scow_audit \n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"SCOW\u652f\u6301\u7528\u6237\u3001\u8d26\u6237\u3001\u79df\u6237\u3001\u5e73\u53f0\u7ea7\u522b\u64cd\u4f5c\u65e5\u5fd7\u67e5\u770b\uff1a"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{alt:"img",src:s(90725).A+"",width:"1698",height:"898"}),(0,i.jsx)(n.img,{alt:"img",src:s(34885).A+"",width:"1702",height:"877"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{alt:"img",src:s(17208).A+"",width:"1681",height:"906"}),(0,i.jsx)(n.img,{alt:"img",src:s(49985).A+"",width:"1684",height:"901"})]}),"\n",(0,i.jsx)(n.h2,{id:"4-\u89e3\u51b3\u7279\u5b9a\u73af\u5883\u95ee\u9898\u6a21\u4eff\u7528\u6237\u767b\u5f55",children:"4. \u89e3\u51b3\u7279\u5b9a\u73af\u5883\u95ee\u9898\uff1a\u6a21\u4eff\u7528\u6237\u767b\u5f55"}),"\n",(0,i.jsx)(n.p,{children:"\u4e3a\u89e3\u51b3\u53ea\u5728\u67d0\u4e2a\u7528\u6237\u4e0b\u51fa\u73b0\u7684\u9519\u8bef\uff0c\u7ba1\u7406\u5458\u53ef\u4ee5\u901a\u8fc7\u6a21\u4eff\u8be5\u7528\u6237\uff0c\u4ee5\u8be5\u7528\u6237\u7684\u8eab\u4efd\u767b\u5f55\u5230SCOW\u91cd\u73b0\u95ee\u9898\u3002"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u5185\u7f6e\u8ba4\u8bc1\u7cfb\u7edf\uff1a"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u5728",(0,i.jsx)(n.code,{children:"config/auth.yml"}),"\u6587\u4ef6\u6dfb\u52a0\u5982\u4e0b\u5185\u5bb9\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-YAML",children:"# \u5f53\u767b\u5f55\u7528\u6237\u7684ID\u4e3afromUser1\uff0c\u5b9e\u9645\u4e0a\u4ee5toUser1\u767b\u5f55\nmockUsers:\n  fromUserId1: toUserId1\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"IAAA\u8ba4\u8bc1\u7cfb\u7edf\uff1a"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u5728",(0,i.jsx)(n.code,{children:"config"}),"\u76ee\u5f55\u4e0b\u521b\u5efa",(0,i.jsx)(n.code,{children:"pkuauth.yaml"}),"\u6587\u4ef6\uff0c\u5185\u5bb9\u5982\u4e0b\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-YAML",children:"mockUsers: \n  fromUserId1: toUserId1\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u4fee\u6539\u6539\u914d\u7f6e\u6587\u4ef6\u540e\u65e0\u9700\u91cd\u542f\u8ba4\u8bc1\u7cfb\u7edf\uff0c\u53ea\u9700\u8981\u9000\u51fa\u518d\u91cd\u65b0\u767b\u5f55\u4e00\u4e0b\u5373\u53ef\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"5-\u5176\u4ed6",children:"5. \u5176\u4ed6"}),"\n",(0,i.jsx)(n.h3,{id:"51-\u7528\u6237\u4ece\u8d26\u6237\u4e2d\u79fb\u9664\u5931\u8d25",children:"5.1 \u7528\u6237\u4ece\u8d26\u6237\u4e2d\u79fb\u9664\u5931\u8d25"}),"\n",(0,i.jsx)(n.p,{children:"\u5728SCOW\u4e2d\u53ef\u80fd\u4f1a\u51fa\u73b0\u67d0\u4e2a\u7528\u6237\u4ece\u8d26\u6237\u4e2d\u79fb\u9664\u5931\u8d25(slurm\u96c6\u7fa4\u4e2d\u8be5\u7528\u6237\u5df2\u4e0e\u8be5\u8d26\u6237\u53d6\u6d88\u5173\u8054)\u3002\u8be5\u60c5\u51b5\u9700\u8981\u5728SCOW\u6570\u636e\u5e93\u4e2d\u5904\u7406\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-PowerShell",children:'# \u8fdb\u5165SCOW\u6570\u636e\u5e93\n./cli db\nuse scow\n\n# \u901a\u8fc7\u7528\u6237\u540d\u67e5\u627e\u8be5\u7528\u6237\u7684ID\uff0c\u6ce8\u610fuser\u8868\u4e2d\u7684user_id\u662f\u6307\u7528\u6237\u540d\uff0c\u7528\u6237ID\u662f\u8868\u7684id\u5217\n select * from user where user_id="{user}";\n \n# \u901a\u8fc7\u8d26\u6237\u540d\u67e5\u627e\u8be5\u8d26\u6237\u7684ID\nselect * from account where account_name="{account}";\n\n# \u57fa\u4e8e\u67e5\u627e\u5230\u7684\u7528\u6237ID\u548c\u8d26\u6237ID\uff0c\u5728\u7528\u6237\u8d26\u6237\u5173\u7cfb\u8868\u4e2d\u3002\n# \u6ce8\u610fuser_account\u8868\u4e2d\u7684user_id\u5bf9\u5e94user\u8868\u4e2d\u7684id\uff0caccount_id\u5bf9\u5e94account\u8868\u4e2d\u7684id\nselect * from user_account where user_id={user.id} and account_id={account.id};\n\n#\u786e\u8ba4\u65e0\u8bef\u4e4b\u540e\u5220\u9664\u8be5\u8bb0\u5f55\n delete from user_account where user_id={user.id} and account_id={account.id};\n'})}),"\n",(0,i.jsxs)(n.h3,{id:"52-\u5c06\u7528\u6237\u6dfb\u52a0\u5230\u67d0\u4e2a\u8d26\u6237\u5931\u8d25",children:["5.2 ",(0,i.jsx)(n.strong,{children:"\u5c06\u7528\u6237\u6dfb\u52a0\u5230\u67d0\u4e2a\u8d26\u6237\u5931\u8d25"})]}),"\n",(0,i.jsx)(n.p,{children:"\u5728SCOW\u4e2d\u53ef\u80fd\u4f1a\u51fa\u73b0\u5c06\u4e00\u4e2a\u7528\u6237\u6dfb\u52a0\u5230\u67d0\u4e2a\u8d26\u6237\u4e2d\u5931\u8d25\u7684\u60c5\u51b5(slurm\u96c6\u7fa4\u4e2d\u5df2\u5b58\u5728\u8be5\u7528\u6237\u4e0e\u8be5\u8d26\u6237\u7684\u5173\u8054)\u3002\u8be5\u60c5\u51b5\u9700\u8981\u5728SCOW\u6570\u636e\u5e93\u4e2d\u5904\u7406\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-PowerShell",children:'# \u8fdb\u5165SCOW\u6570\u636e\u5e93\u3001\u67e5\u627e\u7528\u6237ID\u548c\u8d26\u6237ID\u8bf7\u53c2\u80035.1\u5c0f\u8282\n./cli db\nuse scow\n\n# \u5c06\u7528\u6237\u4e0e\u8d26\u6237\u5173\u7cfb\u8bb0\u5f55\u63d2\u5165\ninsert into user_account(user_id,account_id,status,role,used_job_charge,job_charge_limit) values({user.id} , {account.id}, "UNBLOCKED", "USER", NULL, NULL); \n'})})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},34885:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/account-log-1aafb37331fec33e9606f80c476c60cb.png"},47492:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/files-071b5eeb040b4594c5f1d8b22eae08ac.png"},79156:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/history-jobs-d3996e151f178bb2d98f4c56a987ec00.png"},92081:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/job-error-b54c870c011f6b7749feb443ea1eb0dc.png"},4931:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/mis-server-log-5fb92970283c503d80cbbaecd321733d.png"},49985:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/platform-log-0d48699d344063c6b4ccb6b480ef5357.png"},29912:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/servers-log-0f2b978cd19362266f36a460f8f28a6e.png"},17208:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/tenant-log-2abc3bbaa56437431d38f0efec9b0d5a.png"},90725:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/user-log-68fc44c25c61b26a1dabe9e28141e757.png"},5409:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>l});var i=s(48318);const c={},d=i.createContext(c);function r(e){const n=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);