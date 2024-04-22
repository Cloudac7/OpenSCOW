"use strict";(self.webpackChunk_scow_docs=self.webpackChunk_scow_docs||[]).push([[769],{35704:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var o=t(49214),i=t(5409);const s={sidebar_position:2,title:"\u81ea\u5b9a\u4e49\u64cd\u4f5c\u884c\u4e3a\u65e5\u5fd7"},c="\u81ea\u5b9a\u4e49\u64cd\u4f5c\u884c\u4e3a\u65e5\u5fd7",r={id:"deploy/config/audit/customEvent",title:"\u81ea\u5b9a\u4e49\u64cd\u4f5c\u884c\u4e3a\u65e5\u5fd7",description:"\u672c\u8282\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528\u81ea\u5b9a\u4e49\u64cd\u4f5c\u884c\u4e3a\u65e5\u5fd7",source:"@site/docs/deploy/config/audit/customEvent.md",sourceDirName:"deploy/config/audit",slug:"/deploy/config/audit/customEvent",permalink:"/SCOW/pr-preview/pr-1219/docs/deploy/config/audit/customEvent",draft:!1,unlisted:!1,editUrl:"https://github.com/PKUHPC/SCOW/edit/main/website/docs/deploy/config/audit/customEvent.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"\u81ea\u5b9a\u4e49\u64cd\u4f5c\u884c\u4e3a\u65e5\u5fd7"},sidebar:"deploy",previous:{title:"\u914d\u7f6e\u5ba1\u8ba1\u7cfb\u7edf",permalink:"/SCOW/pr-preview/pr-1219/docs/deploy/config/audit/intro"},next:{title:"CLI",permalink:"/SCOW/pr-preview/pr-1219/docs/category/cli"}},d={},l=[{value:"\u529f\u80fd\u4ecb\u7ecd",id:"\u529f\u80fd\u4ecb\u7ecd",level:2},{value:"\u5982\u4f55\u65b0\u589e\u81ea\u5b9a\u4e49\u64cd\u4f5c\u884c\u4e3a",id:"\u5982\u4f55\u65b0\u589e\u81ea\u5b9a\u4e49\u64cd\u4f5c\u884c\u4e3a",level:2},{value:"1. \u8c03\u7528CreateOperationLog API",id:"1-\u8c03\u7528createoperationlog-api",level:3},{value:"CustomEvent\u53c2\u6570\u5b9a\u4e49",id:"customevent\u53c2\u6570\u5b9a\u4e49",level:4},{value:"2. \u81ea\u5b9a\u4e49\u64cd\u4f5c\u884c\u4e3a\u65e5\u5fd7\u67e5\u770b\u53ca\u641c\u7d22",id:"2-\u81ea\u5b9a\u4e49\u64cd\u4f5c\u884c\u4e3a\u65e5\u5fd7\u67e5\u770b\u53ca\u641c\u7d22",level:3},{value:"\u6ce8\u610f",id:"\u6ce8\u610f",level:3}];function a(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"\u81ea\u5b9a\u4e49\u64cd\u4f5c\u884c\u4e3a\u65e5\u5fd7",children:"\u81ea\u5b9a\u4e49\u64cd\u4f5c\u884c\u4e3a\u65e5\u5fd7"}),"\n",(0,o.jsx)(n.p,{children:"\u672c\u8282\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528\u81ea\u5b9a\u4e49\u64cd\u4f5c\u884c\u4e3a\u65e5\u5fd7"}),"\n",(0,o.jsx)(n.h2,{id:"\u529f\u80fd\u4ecb\u7ecd",children:"\u529f\u80fd\u4ecb\u7ecd"}),"\n",(0,o.jsx)(n.p,{children:"SCOW\u7684\u5ba1\u8ba1\u7cfb\u7edf\u5185\u7f6e\u4e86\u4e00\u4e9b\u7528\u6237\u64cd\u4f5c\u884c\u4e3a\uff0c\u4f8b\u5982\u767b\u5f55\u3001\u767b\u51fa\u548c\u4fee\u6539\u5bc6\u7801\u7b49\u3002\u8fd9\u4e9b\u5185\u7f6e\u64cd\u4f5c\u884c\u4e3a\u5728SCOW\u7684\u7ba1\u7406\u7cfb\u7edf\u9875\u9762\u4e0a\uff0c\u53ef\u4ee5\u8fdb\u884c\u5c55\u793a\u3001\u641c\u7d22\u4ee5\u53ca\u7edf\u8ba1\u3002"}),"\n",(0,o.jsx)(n.p,{children:"\u4f46\u662f\uff0c\u6709\u65f6\u5019\u7528\u6237\u53ef\u80fd\u9700\u8981\u5bf9\u81ea\u5df1\u7684\u4e1a\u52a1\u7cfb\u7edf\u8fdb\u884c\u5ba1\u8ba1\uff0c\u8fd9\u65f6\u5019\u5c31\u9700\u8981\u81ea\u5b9a\u4e49\u64cd\u4f5c\u884c\u4e3a\u3002\u8be5\u529f\u80fd\u53ef\u4ee5\u5728\u4e0d\u4fee\u6539SCOW\u6e90\u7801\u7684\u60c5\u51b5\u4e0b\uff0c\u901a\u8fc7\u8c03\u7528\u5ba1\u8ba1\u7cfb\u7edf\u7684 API \u5b9e\u73b0\u5bf9\u64cd\u4f5c\u884c\u4e3a\u7c7b\u522b\u7684\u6269\u5c55\u4ee5\u53ca\u5bf9\u5e94\u7684\u56fd\u9645\u5316\u5c55\u793a,\u540c\u65f6\u53ef\u4ee5\u652f\u6301\u5728\u7ba1\u7406\u7cfb\u7edf\u7684\u64cd\u4f5c\u65e5\u5fd7\u9875\u9762\u5bf9\u8be5\u7c7b\u522b\u7684\u64cd\u4f5c\u884c\u4e3a\u8fdb\u884c\u641c\u7d22\u3002"}),"\n",(0,o.jsx)(n.h2,{id:"\u5982\u4f55\u65b0\u589e\u81ea\u5b9a\u4e49\u64cd\u4f5c\u884c\u4e3a",children:"\u5982\u4f55\u65b0\u589e\u81ea\u5b9a\u4e49\u64cd\u4f5c\u884c\u4e3a"}),"\n",(0,o.jsx)(n.h3,{id:"1-\u8c03\u7528createoperationlog-api",children:"1. \u8c03\u7528CreateOperationLog API"}),"\n",(0,o.jsxs)(n.p,{children:["\u5728\u81ea\u5df1\u5b9e\u73b0\u7684\u4e1a\u52a1\u7cfb\u7edf\u4e2d\uff0c\u8c03\u7528\u5ba1\u8ba1\u7cfb\u7edf\u7684",(0,o.jsx)(n.code,{children:"CreateOperationLog"}),"\uff0c\u65b0\u589e\u81ea\u5b9a\u4e49\u64cd\u4f5c\u884c\u4e3a\u7684\u7c7b\u522b\u3002"]}),"\n",(0,o.jsx)(n.p,{children:"\u5b9a\u4e49\u7684protobuf\u6587\u4ef6\u76f8\u5173\u5185\u5bb9\u5982\u4e0b\uff1a"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-proto",children:"message I18nObject {\n  message I18n {\n    string default = 1;\n    optional string en = 2;\n    optional string zh_cn = 3;\n  }\n  I18n i18n = 1;\n}\n\n// \u7528\u6237\u81ea\u5b9a\u4e49\u64cd\u4f5c\u7c7b\u578b\uff0cname\u548ccontent\u5c06\u76f4\u63a5\u5c55\u793a\nmessage CustomEvent {\n  string type = 1;\n  common.I18nObject name = 2;\n  common.I18nObject content = 3;\n}\n\nmessage CreateOperationLogRequest {\n  string operator_user_id = 1;\n  string operator_ip = 2;\n  OperationResult operation_result = 3;\n  oneof operation_event {\n    Login login = 4;\n    Logout logout = 5;\n    SubmitJob submit_job = 6;\n    EndJob end_job = 7;\n    //...\u7701\u7565\u4e2d\u95f4\u7684\u5185\u7f6e\u64cd\u4f5c\u884c\u4e3a\n\n    // \u8868\u793a\u8be5\u6761\u64cd\u4f5c\u65e5\u5fd7\u8bb0\u5f55\u4e3a\u81ea\u5b9a\u4e49\u64cd\u4f5c\u884c\u4e3a\n    CustomEvent custom_event = 61;\n  }\n}\n"})}),"\n",(0,o.jsx)(n.h4,{id:"customevent\u53c2\u6570\u5b9a\u4e49",children:"CustomEvent\u53c2\u6570\u5b9a\u4e49"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"type"}),"\uff1a\u81ea\u5b9a\u4e49\u64cd\u4f5c\u884c\u4e3a\u7684\u7c7b\u522b\uff0c\u7528\u4e8e\u533a\u5206\u4e0d\u540c\u7684\u81ea\u5b9a\u4e49\u64cd\u4f5c\u884c\u4e3a\u3002"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"name"}),"\uff1a\u81ea\u5b9a\u4e49\u64cd\u4f5c\u884c\u4e3a\u7684\u540d\u79f0\uff0c\u56fd\u9645\u5316\u5bf9\u8c61\uff0c\u7528\u4e8e\u5728\u7ba1\u7406\u7cfb\u7edf\u7684\u64cd\u4f5c\u65e5\u5fd7\u9875\u9762\u8fdb\u884c\u5c55\u793a\u3002"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"content"}),"\uff1a\u81ea\u5b9a\u4e49\u64cd\u4f5c\u884c\u4e3a\u7684\u5185\u5bb9\uff0c\u56fd\u9645\u5316\u5bf9\u8c61\uff0c\u7528\u4e8e\u5728\u7ba1\u7406\u7cfb\u7edf\u7684\u64cd\u4f5c\u65e5\u5fd7\u9875\u9762\u8fdb\u884c\u5c55\u793a\u4ee5\u53ca\u641c\u7d22\u3002"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"2-\u81ea\u5b9a\u4e49\u64cd\u4f5c\u884c\u4e3a\u65e5\u5fd7\u67e5\u770b\u53ca\u641c\u7d22",children:"2. \u81ea\u5b9a\u4e49\u64cd\u4f5c\u884c\u4e3a\u65e5\u5fd7\u67e5\u770b\u53ca\u641c\u7d22"}),"\n",(0,o.jsx)(n.p,{children:"\u5728\u7ba1\u7406\u7cfb\u7edf\u7684\u64cd\u4f5c\u65e5\u5fd7\u9875\u9762\uff0c\u53ef\u4ee5\u67e5\u770b\u5230\u65b0\u589e\u7684\u81ea\u5b9a\u4e49\u64cd\u4f5c\u884c\u4e3a\u7684\u7c7b\u522b\uff0c\u4ee5\u53ca\u5bf9\u5e94\u7684\u64cd\u4f5c\u65e5\u5fd7\u8bb0\u5f55\u3002"}),"\n",(0,o.jsxs)(n.p,{children:["\u8868\u683c\u4e2d\u64cd\u4f5c\u884c\u4e3a\u5217\u5c06\u5c55\u793a",(0,o.jsx)(n.code,{children:"custom_event"}),"\u4e2d",(0,o.jsx)(n.code,{children:"name"}),"\u7684\u56fd\u9645\u5316\u5185\u5bb9\uff0c \u64cd\u4f5c\u5185\u5bb9\u4e3a",(0,o.jsx)(n.code,{children:"custom_event"}),"\u4e2d",(0,o.jsx)(n.code,{children:"content"}),"\u7684\u56fd\u9645\u5316\u5185\u5bb9"]}),"\n",(0,o.jsxs)(n.p,{children:["\u5982\u679c\u9700\u8981\u641c\u7d22\u7279\u5b9a\u81ea\u5b9a\u4e49\u64cd\u4f5c\u884c\u4e3a\u7684\u64cd\u4f5c\u65e5\u5fd7\uff0c\u53ef\u5728\u8868\u5355\u4e0a\u65b9\u8fc7\u6ee4\u64cd\u4f5c\u884c\u4e3a\u9009\u62e9\u81ea\u5b9a\u4e49\u64cd\u4f5c\u884c\u4e3a\uff0c\u4e4b\u540e\u5728\u81ea\u5b9a\u4e49\u64cd\u4f5c\u7c7b\u578b\u7684\u4e0b\u62c9\u6846\u91cc\u9009\u53d6\u5177\u4f53\u7684\u81ea\u5b9a\u4e49\u64cd\u4f5c\u7c7b\u578b\uff08\u5bf9\u5e94\u521b\u5efa\u65f6\u7684",(0,o.jsx)(n.code,{children:"type"}),"\u53c2\u6570\uff09"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"custom_event",src:t(90128).A+"",width:"2241",height:"1149"})}),"\n",(0,o.jsx)(n.h3,{id:"\u6ce8\u610f",children:"\u6ce8\u610f"}),"\n",(0,o.jsxs)(n.p,{children:["\u5728\u65b0\u589e\u81ea\u5b9a\u4e49\u64cd\u4f5c\u884c\u4e3a\u65f6\uff0c\u9700\u8981\u786e\u4fdd\u7cfb\u7edf\u5185\u5df2\u6709\u6570\u636e\u662f\u5426\u6709\u76f8\u540c\u7684",(0,o.jsx)(n.code,{children:"custom_event_type"}),", \u5982\u679c\u521b\u5efa\u64cd\u4f5c\u65e5\u5fd7\u65f6\u4f20\u53c2",(0,o.jsx)(n.code,{children:"custom_event"}),"\u5185\u7684",(0,o.jsx)(n.code,{children:"type"}),"\u5df2\u5b58\u5728\uff0c\u9700\u8981\u786e\u4fdd\u6b64\u65f6",(0,o.jsx)(n.code,{children:"name"}),"\u53c2\u6570\u4e0e\u5df2\u6709\u6570\u636e\u4e2d\u7684",(0,o.jsx)(n.code,{children:"name"}),"\u5b8c\u5168\u4e00\u81f4\uff0c\u5426\u5219\u5c06\u521b\u5efa\u5931\u8d25"]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},90128:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/customEvent-e4fe0f4a8cdb2e493d6b1f223d8d844f.png"},5409:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>r});var o=t(48318);const i={},s=o.createContext(i);function c(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);