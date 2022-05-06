"use strict";(self.webpackChunk_scow_docs=self.webpackChunk_scow_docs||[]).push([[5387],{4852:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(9231);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(t),d=a,f=m["".concat(u,".").concat(d)]||m[d]||s[d]||l;return t?r.createElement(f,o(o({ref:n},p),{},{components:t})):r.createElement(f,o({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=m;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},930:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(9231),a=t(1506),l="tabItem_hucY";function o(e){var n=e.children,t=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:t},n)}},1477:function(e,n,t){t.d(n,{Z:function(){return d}});var r=t(2208),a=t(9231),l=t(9443),o=t(7936),i=t(8653),u=t(3610),c=t(1506),p="tabList_HAHr",s="tabItem_Wq5N";function m(e){var n,t,l,m=e.lazy,d=e.block,f=e.defaultValue,b=e.values,k=e.groupId,v=e.className,g=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=b?b:g.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),y=(0,o.l)(h,(function(e,n){return e.value===n.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===f?f:null!=(n=null!=f?f:null==(t=g.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(l=g[0])?void 0:l.props.value;if(null!==N&&!h.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var C=(0,i.U)(),O=C.tabGroupChoices,w=C.setTabGroupChoices,P=(0,a.useState)(N),x=P[0],T=P[1],E=[],A=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var j=O[k];null!=j&&j!==x&&h.some((function(e){return e.value===j}))&&T(j)}var _=function(e){var n=e.currentTarget,t=E.indexOf(n),r=h[t].value;r!==x&&(A(n),T(r),null!=k&&w(k,r))},S=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=E.indexOf(e.currentTarget)+1;t=E[r]||E[0];break;case"ArrowLeft":var a=E.indexOf(e.currentTarget)-1;t=E[a]||E[E.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:(0,c.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":d},v)},h.map((function(e){var n=e.value,t=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:x===n?0:-1,"aria-selected":x===n,key:n,ref:function(e){return E.push(e)},onKeyDown:S,onFocus:_,onClick:_},l,{className:(0,c.Z)("tabs__item",s,null==l?void 0:l.className,{"tabs__item--active":x===n})}),null!=t?t:n)}))),m?(0,a.cloneElement)(g.filter((function(e){return e.props.value===x}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==x})}))))}function d(e){var n=(0,l.Z)();return a.createElement(m,(0,r.Z)({key:String(n)},e))}},776:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return p},default:function(){return b},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return d}});var r=t(2208),a=t(9161),l=(t(9231),t(4852)),o=t(1477),i=t(930),u=["components"],c={sidebar_position:2,title:"\u8ba1\u8d39\u6536\u8d39"},p="\u8ba1\u8d39\u6536\u8d39",s={unversionedId:"mis/business/billing",id:"mis/business/billing",title:"\u8ba1\u8d39\u6536\u8d39",description:"\u7cfb\u7edf\u76ee\u524d\u91c7\u7528\u4e00\u4e2a\u72ec\u7acb\u7684\u8d22\u52a1\u7cfb\u7edf\u3002",source:"@site/docs/mis/business/billing.mdx",sourceDirName:"mis/business",slug:"/mis/business/billing",permalink:"SCOW/docs/mis/business/billing",draft:!1,editUrl:"https://github.com/PKUHPC/SCOW/edit/main/website/docs/mis/business/billing.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"\u8ba1\u8d39\u6536\u8d39"},sidebar:"mis",previous:{title:"\u7528\u6237\u6a21\u578b",permalink:"SCOW/docs/mis/business/users"},next:{title:"\u96c6\u7fa4\u64cd\u4f5c\u5c42",permalink:"SCOW/docs/mis/deployment/clusterops"}},m={},d=[{value:"\u8ba1\u8d39\u89c4\u5219",id:"\u8ba1\u8d39\u89c4\u5219",level:2},{value:"\u5feb\u901f\u521b\u5efa\u8ba1\u8d39\u89c4\u5219",id:"\u5feb\u901f\u521b\u5efa\u8ba1\u8d39\u89c4\u5219",level:2}],f={toc:d};function b(e){var n=e.components,t=(0,a.Z)(e,u);return(0,l.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u8ba1\u8d39\u6536\u8d39"},"\u8ba1\u8d39\u6536\u8d39"),(0,l.kt)("p",null,"\u7cfb\u7edf\u76ee\u524d\u91c7\u7528\u4e00\u4e2a\u72ec\u7acb\u7684\u8d22\u52a1\u7cfb\u7edf\u3002"),(0,l.kt)("p",null,"\u6536\u8d39\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7cfb\u7edf\u91c7\u7528\u9884\u4ed8\u8d39\u5236\uff0c\u6bcf\u4e2a\u79df\u6237\u548c\u8d26\u6237\u5177\u6709\u4f59\u989d"),(0,l.kt)("li",{parentName:"ul"},"\u5e73\u53f0\u7ba1\u7406\u5458\u53ef\u4ee5\u7ed9\u79df\u6237\u589e\u52a0\u4f59\u989d\uff0c\u79df\u6237\u7ba1\u7406\u5458\u53ef\u4ee5\u7ed9\u8d26\u6237\u589e\u52a0\u4f59\u989d"),(0,l.kt)("li",{parentName:"ul"},"\u5728\u6570\u636e\u5e93\u4e2d\u4f59\u989d\u5b58\u50a8\u5230\u5c0f\u6570\u70b9\u540e4\u4f4d\uff0c\u524d\u53f0\u663e\u793a3\u4f4d")),(0,l.kt)("p",null,"\u8ba1\u8d39\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7cfb\u7edf\u7684\u8ba1\u8d39\u6536\u8d39\u6a21\u578b\u6309\u7167\u96c6\u7fa4\u3001\u5206\u533a\u548cQOS\u8fdb\u884c\u6536\u8d39",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("a",{parentName:"li",href:"https://hpc.pku.edu.cn/guide_6.html"},"\u5317\u5927\u9ad8\u6027\u80fd\u5e73\u53f0\u6536\u8d39\u6807\u51c6"),"\u8bbe\u8ba1"))),(0,l.kt)("li",{parentName:"ul"},"\u7cfb\u7edf\u652f\u6301\u591a\u7ea7\u8ba1\u8d39\uff1a\u5e73\u53f0\u5bf9\u79df\u6237\u4f7f\u7528\u4e00\u4e2a\u7edf\u4e00\u7684\u6536\u8d39\u6807\u51c6\uff0c\u800c\u79df\u6237\u53ef\u4ee5\u81ea\u5b9a\u4e49\u79df\u6237\u5185\u7684\u8d26\u6237\u7684\u8d39\u7528\u6807\u51c6")),(0,l.kt)("h2",{id:"\u8ba1\u8d39\u89c4\u5219"},"\u8ba1\u8d39\u89c4\u5219"),(0,l.kt)("p",null,"\u670d\u52a1\u5668\u4f1a\u5b9a\u671f\u5730\u4ece",(0,l.kt)("strong",{parentName:"p"},"\u6e90\u4f5c\u4e1a\u4fe1\u606f\u6570\u636e\u5e93"),"\u4e2d\u83b7\u53d6\u5df2\u5b8c\u6210\u7684\u4f5c\u4e1a\u4fe1\u606f\uff0c\u5e76\u6839\u636e\u89c4\u5219\u5bf9\u79df\u6237\u548c\u8d26\u6237\u8fdb\u884c\u6263\u8d39\u64cd\u4f5c\u3002"),(0,l.kt)("p",null,"\u7cfb\u7edf\u8ba1\u8d39\u4ee5",(0,l.kt)("strong",{parentName:"p"},"\u8d39\u7528\u9879\u76ee price item"),"\u4e3a\u57fa\u7840\uff0c\u6bcf\u4e2a\u8ba1\u8d39\u9879\u6709\u72ec\u7279\u7684ID\u4ee5\u53ca\u4ef7\u683c\uff0c\u6bcf\u4e2a(\u96c6\u7fa4,\u5206\u533a,QOS)\u9879\u5e94\u8be5\u6709\u4e00\u4e2a\u72ec\u7279\u7684\u8ba1\u8d39\u9879\u3002\u8ba1\u8d39\u9879\u4e00\u65e6\u521b\u5efa\u548c\u5206\u914d\u4e0d\u80fd\u88ab\u91cd\u65b0\u5206\u914d\u3001\u4fee\u6539\u6216\u8005\u5220\u9664\uff0c\u5982\u679c\u60a8\u60f3\u4fee\u6539\u4e00\u4e2a\u8ba1\u8d39\u9879\u7684\u4ef7\u683c\uff0c\u60a8\u9700\u8981\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u8ba1\u8d39\u9879\u3002"),(0,l.kt)("p",null,"\u8d39\u7528\u9879\u76ee\u7684\u4fe1\u606f\u5b58\u653e\u5728\u6570\u636e\u5e93\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"job_price_item"),"\u8868\u4e2d\u3002\u6bcf\u6b21\u9700\u8981\u8ba1\u7b97\u4ef7\u683c\u65f6\uff0c\u670d\u52a1\u5668\u5c06\u4f1a\u4ece\u6570\u636e\u5e93\u4e2d\u53d6\u5f97\u6240\u6709\u8ba1\u8d39\u9879\uff0c\u5e76\u5f97\u5230\u6bcf\u4e2a(\u96c6\u7fa4,\u5206\u533a,QOS)\u7684\u6700\u65b0\u7684\u8ba1\u8d39\u89c4\u5219\u3002\u5982\u679c\u5728",(0,l.kt)("a",{parentName:"p",href:"SCOW/docs/common/deployment/clusters"},"\u96c6\u7fa4\u4fe1\u606f\u914d\u7f6e\u6587\u4ef6"),"\u7684\u67d0\u4e2aQOS\u4e0d\u5b58\u5728\u8d39\u7528\u9879\uff0c\u670d\u52a1\u5668\u5c06\u4f1a\u62a5\u9519\u3002"),(0,l.kt)("p",null,"\u6bcf\u4e2a\u4f5c\u4e1a\u7684\u8d39\u7528\u8ba1\u7b97\u65b9\u6cd5\u5982\u4e0b\uff1a"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u56db\u820d\u4e94\u5165(\u4f5c\u4e1a\u6301\u7eed\u5c0f\u65f6 (",(0,l.kt)("inlineCode",{parentName:"p"},"timeUsed")," / 3600) x \u7528\u91cf x \u6240\u9002\u7528\u7684\u8d39\u7528\u9879\u76ee\u7684\u4ef7\u683c)")),(0,l.kt)("p",null,"\u6bcf\u4e2a\u4f5c\u4e1a\u7684\u7528\u91cf\u7531\u8ba1\u8d39\u7b56\u7565(amount)\u786e\u5b9a\uff0c\u652f\u6301\u7684\u8ba1\u8d39\u7b56\u7565\u53d6\u503c\u5982\u4e0b\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"amount"),(0,l.kt)("th",{parentName:"tr",align:null},"\u603b\u91cf\u7b97\u6cd5"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"max-cpusAlloc-mem")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"cpusAlloc"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"gpu")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"gpu"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"max-gpu-cpusAlloc")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"max(gpu, \u5411\u4e0a\u53d6\u6574(cpusAlloc / (\u5206\u533a\u6838\u5fc3\u6570/\u5206\u533agpu\u6570)))"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"cpusAlloc")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"max(cpusAlloc, \u5411\u4e0a\u53d6\u6574(memReq / (\u5206\u533a\u5185\u5b58\u91cf/\u5206\u533a\u6838\u5fc3\u6570)))"))))),(0,l.kt)("p",null,"\u5728\u8ba1\u7b97\u8fc7\u7a0b\u4e2d\u5982\u679c\u53d1\u73b0\u4e86\u5176\u4ed6\u7b56\u7565\uff0c\u5219\u6574\u4e2a\u4f5c\u4e1a\u7684\u8d39\u7528\u4e3a0\u3002"),(0,l.kt)("h2",{id:"\u5feb\u901f\u521b\u5efa\u8ba1\u8d39\u89c4\u5219"},"\u5feb\u901f\u521b\u5efa\u8ba1\u8d39\u89c4\u5219"),(0,l.kt)("p",null,"\u60a8\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"config/priceItems.{json|yml|yaml}"),"\u6587\u4ef6\uff0c\u5b9a\u4e49(\u96c6\u7fa4,\u5206\u533a,QOS)\u9879\u4ee5\u53ca\u5bf9\u5e94\u7684\u8d39\u7528\u9879\u76ee\uff0c\u670d\u52a1\u5668\u53ef\u4ee5\u5feb\u901f\u6839\u636e\u8fd9\u4e9b\u4fe1\u606f\u5728\u6570\u636e\u5e93\u4e2d\u521b\u5efa\u8d39\u7528\u9879\u76ee\u3002\u6587\u4ef6\u683c\u5f0f\u4ee5\u53ca\u5404\u4e2a\u5b57\u6bb5\u7684\u89e3\u91ca\u8bf7\u53c2\u8003\u4e0b\u5217yaml\u6587\u4ef6\u7684\u6ce8\u91ca\u3002"),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"config/priceItems.yml",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"default: # \u9ed8\u8ba4\u89c4\u5219\uff0c\u5bf9\u6240\u6709\u96c6\u7fa4\u548c\u79df\u6237\u751f\u6548\n  hpc01: # \u5bf9hpc01\u96c6\u7fa4\u7684...\n    compute: # compute\u5206\u533a\u7684...\n      low: # QOS\u4e3alow\u7684\u4efb\u52a1\n        id: HPC01 # \u8d39\u7528\u9879\u76eeID\u4e3aHPC01\n        price: '1.00' # \u57fa\u7840\u4ef7\u683c\u4e3a1.00\uff0c\u5b57\u7b26\u4e32\u5f62\u5f0f\n        amount: 'cpusAlloc' # \u8ba1\u8d39\u7b56\u7565\uff0c\u770b\u4e0a\u6587\n      normal:\n        id: HPC02\n        price: '2.00'\n        amount: 'cpusAlloc'\n      high:\n        id: HPC03\n        price: '3.00'\n        amount: 'cpusAlloc'\n    GPU: # \u5982\u679c\u6574\u4e2a\u5206\u533a\u7684\u8d39\u7528\u76f8\u540c\uff0c\u60a8\u4e5f\u53ef\u4ee5\u7ed9\u4e00\u6574\u4e2a\u5206\u533a\u5b9a\u4e49\u4e00\u4e2a\u8d39\u7528\u9879\u76ee\n      id: HPC04\n      price: '10.00'\n      amount: 'cpusAlloc'\ntenant_1: # \u5bf9\u79df\u6237tenant_1\u7684\u8d26\u6237\u7528\u6237\u53d1\u8d77\u7684\u4efb\u52a1\uff0c\u5728\u9ed8\u8ba4\u89c4\u5219\u7684\u57fa\u7840\u4e0a\uff0c\u8986\u76d6\u4ee5\u4e0b\u914d\u7f6e\n  hpc01:\n    GPU:\n      low:\n        id: HPC07 # \u5bf9\u79df\u6237tenant_1\u7684hpc01.GPU.low\u7684\u4efb\u52a1\uff0c\u4ef7\u683c\u4e3a12.00\n        price: '12.00'\n        amount: 'cpusAlloc'\n"))),(0,l.kt)(i.Z,{value:"config/priceItems.json",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "default": {\n    "hpc01": {\n      "compute": {\n        "low": {\n          "id": "HPC01",\n          "price": "1.00",\n          "amount": "cpusAlloc"\n         },\n        "normal": {\n          "id": "HPC02",\n          "price": "2.00",\n          "amount": "cpusAlloc"\n         },\n        "high": {\n          "id": "HPC03",\n          "price": "3.00",\n          "amount": "cpusAlloc"\n         }\n      },\n      "GPU": {\n        "low": {\n          "id": "HPC04",\n          "price": "10.00",\n          "amount": "cpusAlloc"\n         },\n        "normal": {\n          "id": "HPC05",\n          "price": "20.00",\n          "amount": "cpusAlloc"\n         },\n        "high": {\n          "id": "HPC06",\n          "price": "30.00",\n          "amount": "cpusAlloc"\n         }\n      }\n    }\n  },\n  "tenant_1": {\n    "hpc01": {\n      "GPU": {\n        "low": {\n          "id": "HPC07",\n          "price": "12.00",\n          "amount": "cpusAlloc"\n         }\n      }\n    }\n  }\n}\n')))),(0,l.kt)("p",null,"\u6ce8\u610f\u4e8b\u9879\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u6bcf\u4e2a\u8ba1\u8d39\u9879\u5e94\u8be5\u53ea\u51fa\u73b0\u4e00\u6b21\u3002\u5373\u4f7f\u591a\u4e2aQOS\u8d39\u7528\u76f8\u540c\uff0c\u4e5f\u5e94\u8be5\u5b9a\u4e49\u4e24\u4e2a\u8ba1\u8d39\u9879"),(0,l.kt)("li",{parentName:"ol"},"\u6570\u636e\u5e93\u4e2d\u4e0d\u5b58\u5728\u5177\u6709\u76f8\u540c\u8ba1\u8d39\u9879\u540d\u7684\u884c")),(0,l.kt)("p",null,"\u5728\u6570\u636e\u5e93\u6b63\u5728\u8fd0\u884c\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"docker-compose.yml"),"\u914d\u7f6e\u7f16\u5199\u5b8c\u6210\u7684\u6761\u4ef6\u4e0b\uff0c\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u5feb\u901f\u5728\u6570\u636e\u5e93\u4e2d\u521b\u5efa\u8d39\u7528\u9879\u4fe1\u606f\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker compose run mis-server createPriceItems\n")))}b.isMDXComponent=!0}}]);