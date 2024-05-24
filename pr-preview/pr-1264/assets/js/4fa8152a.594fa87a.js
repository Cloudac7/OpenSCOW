"use strict";(self.webpackChunk_scow_docs=self.webpackChunk_scow_docs||[]).push([[1439],{34735:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>a});var c=t(49214),o=t(5409);const r={sidebar_position:8,title:"\u914d\u7f6e"},i="\u7f51\u5173\u914d\u7f6e",s={id:"deploy/config/gateway/config/index",title:"\u914d\u7f6e",description:"extra",source:"@site/docs/deploy/config/gateway/config/index.md",sourceDirName:"deploy/config/gateway/config",slug:"/deploy/config/gateway/config/",permalink:"/SCOW/pr-preview/pr-1264/docs/deploy/config/gateway/config/",draft:!1,unlisted:!1,editUrl:"https://github.com/PKUHPC/SCOW/edit/main/website/docs/deploy/config/gateway/config/index.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,title:"\u914d\u7f6e"},sidebar:"deploy",previous:{title:"\u7f51\u5173",permalink:"/SCOW/pr-preview/pr-1264/docs/category/\u7f51\u5173"},next:{title:"\u81ea\u5b9a\u4e49",permalink:"/SCOW/pr-preview/pr-1264/docs/category/\u81ea\u5b9a\u4e49"}},l={},a=[{value:"extra",id:"extra",level:2},{value:"\u57df\u540d\u767d\u540d\u5355\u914d\u7f6e",id:"\u57df\u540d\u767d\u540d\u5355\u914d\u7f6e",level:2},{value:"SCOW \u8bbf\u95ee\u534f\u8bae",id:"scow-\u8bbf\u95ee\u534f\u8bae",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:"\u7f51\u5173\u914d\u7f6e",children:"\u7f51\u5173\u914d\u7f6e"}),"\n",(0,c.jsx)(n.h2,{id:"extra",children:"extra"}),"\n",(0,c.jsxs)(n.p,{children:["\u60a8\u53ef\u4ee5\u5728cli\u540c\u7ea7\u7684",(0,c.jsx)(n.code,{children:"install.yml"}),"\u6587\u4ef6\u4e2d\u589e\u52a0\u5bf9scow\u81ea\u5e26\u7f51\u5173\u7684\u914d\u7f6e\uff0c\u53ef\u63a5\u53d7\u7684\u683c\u5f0f\u4e3anginx\u7684server\u53ef\u63a5\u53d7\u7684\u5c5e\u6027\u914d\u7f6e\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u4f8b\u5982\uff0c\u589e\u52a0\u5728\u5f53\u524d\u7cfb\u7edfnginx\u9ed8\u8ba4\u7aef\u53e3\u7684http\u670d\u52a1",(0,c.jsx)(n.code,{children:"http://extra-web:3000"}),"\uff0c\u5219\u7f16\u5199"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-yaml",metastring:'title="install.yml"',children:"# \u7f51\u5173\u914d\u7f6e\ngateway:\n  # \u66f4\u591anginx\u914d\u7f6e\n  extra: >\n      location /extra {\n          proxy_pass http://extra-web:3000;\n          include includes/headers;\n          include includes/websocket;\n        }\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u60a8\u589e\u52a0",(0,c.jsx)(n.code,{children:"extra"}),"\u914d\u7f6e\u540e\uff0c\u53ef\u4ee5\u5728\u4f7f\u7528",(0,c.jsx)(n.code,{children:"./cli compose up -d"}),"\u542f\u52a8scow\u540e\uff0c\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:" ./cli compose exec gateway sh"})," \u8fdb\u5165gateway\u670d\u52a1\uff0c\u5728 ",(0,c.jsx)(n.code,{children:"/etc/nginx/http.d"})," \u76ee\u5f55\u4e0b\u7684 ",(0,c.jsx)(n.code,{children:"default.conf"})," \u6587\u4ef6\u6700\u4e0b\u65b9\u67e5\u770b\u5230\u60a8\u6dfb\u52a0\u7684\u914d\u7f6e\u3002\n\u5982\u679cgateway\u670d\u52a1\u542f\u52a8\u5931\u8d25\uff0c\u8bf4\u660e\u60a8\u7684\u914d\u7f6e\u4e0d\u7b26\u5408\u89c4\u8303\uff0c\u8bf7\u4fdd\u8bc1\u5176\u6b63\u786e\u6027\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u57df\u540d\u767d\u540d\u5355\u914d\u7f6e",children:"\u57df\u540d\u767d\u540d\u5355\u914d\u7f6e"}),"\n",(0,c.jsx)(n.p,{children:"scow \u7f51\u5173\u9ed8\u8ba4\u4e0d\u9650\u5236 HTTP Host \u5934"}),"\n",(0,c.jsx)(n.p,{children:"\u4e3a\u4e86\u9632\u6b62 host \u5934\u653b\u51fb\u7684\u53d1\u751f\uff0c\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e\u57df\u540d\u767d\u540d\u5355\u6765\u9650\u5236 Host \u7684\u57df\u540d\u6216 IP"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"gateway:\n  # \u540c nginx server_name \u914d\u7f6e\n  allowedServerName: example.com www.example.com\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u591a\u4e2a\u57df\u540d\u6216 IP \u95f4\u7528\u7a7a\u683c\u95f4\u9694\u5373\u53ef\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"scow-\u8bbf\u95ee\u534f\u8bae",children:"SCOW \u8bbf\u95ee\u534f\u8bae"}),"\n",(0,c.jsxs)(n.p,{children:["\u8bbe\u7f6e scow \u8bbf\u95ee\u534f\u8bae",(0,c.jsx)(n.code,{children:"http | https"}),"\uff0c\u5c06\u4fee\u6539\u8ba4\u8bc1\u7cfb\u7edf\u4e2d callbackUrl \u7684\u534f\u8bae\u3002\n\u9ed8\u8ba4\u60c5\u51b5\u4e0b callbackUrl \u7684 protocol \u4e3a http\uff0c"]}),"\n",(0,c.jsx)(n.p,{children:"\u5982\u679c\u914d\u7f6e https \u4ee3\u7406\uff0c\u5219\u5efa\u8bae\u8bbe\u7f6e\u8be5\u9879\u786e\u4fdd\u7528\u6237\u4f53\u9a8c\u7684\u4e00\u81f4\u6027\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:'gateway:\n  # scow \u8bbf\u95ee\u534f\u8bae\uff0c\u5c06\u5f71\u54cd callbackUrl \u7684 protocol\n  # callbackUrl \u9ed8\u8ba4\u7684 protocol \u4e3a http\n  protocol: "http"\n'})})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}},5409:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>s});var c=t(48318);const o={},r=c.createContext(o);function i(e){const n=c.useContext(r);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),c.createElement(r.Provider,{value:n},e.children)}}}]);