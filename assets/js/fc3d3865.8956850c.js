"use strict";(self.webpackChunk_scow_docs=self.webpackChunk_scow_docs||[]).push([[8197],{36290:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>t,contentTitle:()=>l,default:()=>a,frontMatter:()=>s,metadata:()=>d,toc:()=>r});var c=i(35250),o=i(57766);const s={sidebar_position:8,title:"\u63d2\u4ef6"},l="CLI\u63d2\u4ef6",d={id:"deploy/config/cli/plugins/index",title:"\u63d2\u4ef6",description:"\u5b9e\u9a8c\u6027\u529f\u80fd\uff01",source:"@site/docs/deploy/config/cli/plugins/index.md",sourceDirName:"deploy/config/cli/plugins",slug:"/deploy/config/cli/plugins/",permalink:"/SCOW/docs/deploy/config/cli/plugins/",draft:!1,unlisted:!1,editUrl:"https://github.com/PKUHPC/SCOW/edit/main/website/docs/deploy/config/cli/plugins/index.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,title:"\u63d2\u4ef6"},sidebar:"deploy",previous:{title:"CLI",permalink:"/SCOW/docs/category/cli"},next:{title:"\u7f51\u5173",permalink:"/SCOW/docs/category/\u7f51\u5173"}},t={},r=[{value:"\u7f16\u5199\u548c\u914d\u7f6e",id:"\u7f16\u5199\u548c\u914d\u7f6e",level:2},{value:"\u63d2\u4ef6\u529f\u80fd",id:"\u63d2\u4ef6\u529f\u80fd",level:2},{value:"\u8986\u76d6<code>docker-compose.yml</code>",id:"\u8986\u76d6docker-composeyml",level:3},{value:"\u62d3\u5c55\u4e0e\u96c6\u6210",id:"\u62d3\u5c55\u4e0e\u96c6\u6210",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:"cli\u63d2\u4ef6",children:"CLI\u63d2\u4ef6"}),"\n",(0,c.jsx)(n.admonition,{type:"caution",children:(0,c.jsx)(n.p,{children:"\u5b9e\u9a8c\u6027\u529f\u80fd\uff01"})}),"\n",(0,c.jsx)(n.h2,{id:"\u7f16\u5199\u548c\u914d\u7f6e",children:"\u7f16\u5199\u548c\u914d\u7f6e"}),"\n",(0,c.jsxs)(n.p,{children:["\u60a8\u53ef\u4ee5\u901a\u8fc7\u548ccli\u540c\u7ea7\u7684",(0,c.jsx)(n.code,{children:"plugins"}),"\u76ee\u5f55\u7f16\u5199CLI\u63d2\u4ef6\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u6bcf\u4e2a\u63d2\u4ef6\u5360\u636e\u4e00\u4e2a\u76ee\u5f55\uff0c\u76ee\u5f55\u540d\u4e3a\u63d2\u4ef6\u7684ID\u3002\u4f8b\u5982",(0,c.jsx)(n.code,{children:"plugins/plugin1"}),"\uff0c\u5219\u6b64\u63d2\u4ef6id\u4e3a",(0,c.jsx)(n.code,{children:"plugin1"}),"\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u5f53\u60a8\u7f16\u5199\u597d\u63d2\u4ef6\u540e\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7",(0,c.jsx)(n.code,{children:"install.yml"}),"\u7684",(0,c.jsx)(n.code,{children:"plugins.enabledPlugins"}),"\u9009\u9879\uff0c\u6307\u5b9a\u542f\u7528\u7684\u63d2\u4ef6\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u4f8b\u5982\uff0c\u5982\u679c\u8981\u4f7f\u7528",(0,c.jsx)(n.code,{children:"plugin1"}),"\u63d2\u4ef6\uff0c\u5219\u7f16\u5199"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-yaml",metastring:'title="install.yml"',children:'plugins: \n  enabledPlugins: ["plugin1"]\n'})}),"\n",(0,c.jsx)(n.h2,{id:"\u63d2\u4ef6\u529f\u80fd",children:"\u63d2\u4ef6\u529f\u80fd"}),"\n",(0,c.jsxs)(n.h3,{id:"\u8986\u76d6docker-composeyml",children:["\u8986\u76d6",(0,c.jsx)(n.code,{children:"docker-compose.yml"})]}),"\n",(0,c.jsx)(n.p,{children:"\u60a8\u53ef\u4ee5\u901a\u8fc7\u6b64\u529f\u80fd\u66f4\u6539\u90e8\u7f72\u7684Docker Compose\u914d\u7f6e\uff0c\u4f8b\u5982\u5728SCOW\u7f51\u7edc\u4e2d\u90e8\u7f72\u5176\u4ed6\u7684\u5bb9\u5668\uff0c\u6216\u8005\u7ed9\u5df2\u6709\u7684\u670d\u52a1\u589e\u52a0\u65b0\u7684\u73af\u5883\u53d8\u91cf\u3001\u7aef\u53e3\u7b49\u3002"}),"\n",(0,c.jsxs)(n.p,{children:["\u5728\u63d2\u4ef6\u76ee\u5f55\u4e0b\uff0c\u60a8\u53ef\u4ee5\u7f16\u5199",(0,c.jsx)(n.code,{children:"docker-compose.yml"}),"\u6587\u4ef6\uff0c\u6b64\u6587\u4ef6\u5c06\u4f1a\u4e0eCLI\u751f\u6210\u7684Docker Compose\u914d\u7f6e\u6587\u4ef6\u5408\u5e76\u3002CLI\u5728\u8c03\u7528docker compose\u65f6\uff0c\u4f7f\u7528",(0,c.jsx)(n.code,{children:"docker compose -f {scow-cli\u751f\u6210\u7684compose\u6587\u4ef6} ...-f {\u6240\u6709\u63d2\u4ef6\u7684compose\u6587\u4ef6}"}),"\u7684\u65b9\u6cd5\u6267\u884c\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-yaml",metastring:'title="plugins/plugin1/docker-compose.yml"',children:'version: "3"\n\nservices: \n  extraService:\n    image: <\u60a8\u7684\u5bb9\u5668\u955c\u50cf>\n    # ...\n'})}),"\n",(0,c.jsx)(n.h2,{id:"\u62d3\u5c55\u4e0e\u96c6\u6210",children:"\u62d3\u5c55\u4e0e\u96c6\u6210"}),"\n",(0,c.jsx)(n.p,{children:"\u5982\u679c\u60a8\u4ec5\u9700\u8981\u589e\u52a0\u90e8\u5206\u670d\u52a1\u7aef\u529f\u80fd\uff0c\u53ea\u9700\u8981\u589e\u52a0\u4e00\u4e2a\u63d2\u4ef6\u670d\u52a1\u5373\u53ef\u3002"}),"\n",(0,c.jsxs)(n.p,{children:["\u5982\u679c\u60a8\u9700\u8981\u589e\u52a0\u9875\u9762\u529f\u80fd\uff0c\u5e76\u4e0escow\u7684http\u670d\u52a1\u7ed1\u5b9a\u5728\u540c\u4e00\u4e2a\u7aef\u53e3\u4e0a\uff0c\u9700\u8981\u5728\u589e\u52a0\u63d2\u4ef6\u670d\u52a1\u7684\u540c\u65f6\u589e\u52a0gateway\u7684\u914d\u7f6e\uff0c\u5177\u4f53\u53c2\u8003",(0,c.jsx)(n.a,{href:"/SCOW/docs/deploy/config/gateway/config/",children:"\u7f51\u5173\u914d\u7f6e"})]})]})}function a(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(p,{...e})}):p(e)}},57766:(e,n,i)=>{i.d(n,{Z:()=>d,a:()=>l});var c=i(70079);const o={},s=c.createContext(o);function l(e){const n=c.useContext(s);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),c.createElement(s.Provider,{value:n},e.children)}}}]);