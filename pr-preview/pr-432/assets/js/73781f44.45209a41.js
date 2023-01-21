"use strict";(self.webpackChunk_scow_docs=self.webpackChunk_scow_docs||[]).push([[5984],{4852:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var a=n(9231);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=l,k=m["".concat(p,".").concat(d)]||m[d]||c[d]||r;return n?a.createElement(k,i(i({ref:t},s),{},{components:n})):a.createElement(k,i({ref:t},s))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5418:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>N,contentTitle:()=>h,default:()=>C,frontMatter:()=>g,metadata:()=>v,toc:()=>y});var a=n(9675),l=n(9231),r=n(4852),i=n(9841),o=n(2948),p=n(5333),u=n(5094),s=n(6294);const c="tabList_IcYw",m="tabItem_sLrt";function d(e){var t;const{lazy:n,block:r,defaultValue:o,values:d,groupId:k,className:b}=e,f=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=d??f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),h=(0,p.l)(g,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===o?o:o??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==v&&!g.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:y}=(0,u.U)(),[w,C]=(0,l.useState)(v),O=[],{blockElementScrollPositionUntilNextRender:P}=(0,s.o5)();if(null!=k){const e=N[k];null!=e&&e!==w&&g.some((t=>t.value===e))&&C(e)}const T=e=>{const t=e.currentTarget,n=O.indexOf(t),a=g[n].value;a!==w&&(P(t),C(a),null!=k&&y(k,String(a)))},x=e=>{var t;let n=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":{const t=O.indexOf(e.currentTarget)+1;n=O[t]??O[0];break}case"ArrowLeft":{const t=O.indexOf(e.currentTarget)-1;n=O[t]??O[O.length-1];break}}null==(t=n)||t.focus()};return l.createElement("div",{className:(0,i.Z)("tabs-container",c)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},b)},g.map((e=>{let{value:t,label:n,attributes:r}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>O.push(e),onKeyDown:x,onClick:T},r,{className:(0,i.Z)("tabs__item",m,null==r?void 0:r.className,{"tabs__item--active":w===t})}),n??t)}))),n?(0,l.cloneElement)(f.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function k(e){const t=(0,o.Z)();return l.createElement(d,(0,a.Z)({key:String(t)},e))}const b="tabItem_uKFL";function f(e){let{children:t,hidden:n,className:a}=e;return l.createElement("div",{role:"tabpanel",className:(0,i.Z)(b,a),hidden:n},t)}const g={sidebar_position:2,title:"\u8ba1\u8d39\u6536\u8d39"},h="\u8ba1\u8d39\u6536\u8d39",v={unversionedId:"info/mis/business/billing",id:"info/mis/business/billing",title:"\u8ba1\u8d39\u6536\u8d39",description:"\u7cfb\u7edf\u76ee\u524d\u91c7\u7528\u4e00\u4e2a\u72ec\u7acb\u7684\u8d22\u52a1\u7cfb\u7edf\u3002",source:"@site/docs/info/mis/business/billing.mdx",sourceDirName:"info/mis/business",slug:"/info/mis/business/billing",permalink:"/SCOW/pr-preview/pr-432/docs/info/mis/business/billing",draft:!1,editUrl:"https://github.com/PKUHPC/SCOW/edit/main/website/docs/info/mis/business/billing.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"\u8ba1\u8d39\u6536\u8d39"},sidebar:"info",previous:{title:"\u7528\u6237\u6a21\u578b",permalink:"/SCOW/pr-preview/pr-432/docs/info/mis/business/users"}},N={},y=[{value:"\u8ba1\u8d39\u89c4\u5219",id:"\u8ba1\u8d39\u89c4\u5219",level:2},{value:"\u4ece\u7f51\u9875\u7f16\u8f91\u4f5c\u4e1a\u4ef7\u683c\u8868",id:"\u4ece\u7f51\u9875\u7f16\u8f91\u4f5c\u4e1a\u4ef7\u683c\u8868",level:2},{value:"\u5feb\u901f\u521b\u5efa\u8ba1\u8d39\u89c4\u5219",id:"\u5feb\u901f\u521b\u5efa\u8ba1\u8d39\u89c4\u5219",level:2}],w={toc:y};function C(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},w,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u8ba1\u8d39\u6536\u8d39"},"\u8ba1\u8d39\u6536\u8d39"),(0,r.kt)("p",null,"\u7cfb\u7edf\u76ee\u524d\u91c7\u7528\u4e00\u4e2a\u72ec\u7acb\u7684\u8d22\u52a1\u7cfb\u7edf\u3002"),(0,r.kt)("p",null,"\u6536\u8d39\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7cfb\u7edf\u91c7\u7528\u9884\u4ed8\u8d39\u5236\uff0c\u6bcf\u4e2a\u79df\u6237\u548c\u8d26\u6237\u5177\u6709\u4f59\u989d"),(0,r.kt)("li",{parentName:"ul"},"\u5e73\u53f0\u7ba1\u7406\u5458\u53ef\u4ee5\u7ed9\u79df\u6237\u589e\u52a0\u4f59\u989d\uff0c\u79df\u6237\u7ba1\u7406\u5458\u53ef\u4ee5\u7ed9\u8d26\u6237\u589e\u52a0\u4f59\u989d"),(0,r.kt)("li",{parentName:"ul"},"\u5728\u6570\u636e\u5e93\u4e2d\u4f59\u989d\u5b58\u50a8\u5230\u5c0f\u6570\u70b9\u540e4\u4f4d\uff0c\u524d\u53f0\u663e\u793a3\u4f4d")),(0,r.kt)("p",null,"\u8ba1\u8d39\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7cfb\u7edf\u7684\u8ba1\u8d39\u6536\u8d39\u6a21\u578b\u6309\u7167\u96c6\u7fa4\u3001\u5206\u533a\u548cQOS\u8fdb\u884c\u6536\u8d39",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,r.kt)("a",{parentName:"li",href:"https://hpc.pku.edu.cn/guide_6.html"},"\u5317\u5927\u9ad8\u6027\u80fd\u5e73\u53f0\u6536\u8d39\u6807\u51c6"),"\u8bbe\u8ba1"))),(0,r.kt)("li",{parentName:"ul"},"\u7cfb\u7edf\u652f\u6301\u591a\u7ea7\u8ba1\u8d39\uff1a\u5e73\u53f0\u5bf9\u79df\u6237\u4f7f\u7528\u4e00\u4e2a\u7edf\u4e00\u7684\u6536\u8d39\u6807\u51c6\uff0c\u800c\u79df\u6237\u53ef\u4ee5\u81ea\u5b9a\u4e49\u79df\u6237\u5185\u7684\u8d26\u6237\u7684\u8d39\u7528\u6807\u51c6")),(0,r.kt)("h2",{id:"\u8ba1\u8d39\u89c4\u5219"},"\u8ba1\u8d39\u89c4\u5219"),(0,r.kt)("p",null,"\u670d\u52a1\u5668\u4f1a\u5b9a\u671f\u5730\u4ece",(0,r.kt)("strong",{parentName:"p"},"\u6e90\u4f5c\u4e1a\u4fe1\u606f\u6570\u636e\u5e93"),"\u4e2d\u83b7\u53d6\u5df2\u5b8c\u6210\u7684\u4f5c\u4e1a\u4fe1\u606f\uff0c\u5e76\u6839\u636e\u89c4\u5219\u5bf9\u79df\u6237\u548c\u8d26\u6237\u8fdb\u884c\u6263\u8d39\u64cd\u4f5c\u3002"),(0,r.kt)("p",null,"\u7cfb\u7edf\u8ba1\u8d39\u4ee5",(0,r.kt)("strong",{parentName:"p"},"\u8d39\u7528\u9879\u76ee price item"),"\u4e3a\u57fa\u7840\uff0c\u6bcf\u4e2a\u8ba1\u8d39\u9879\u6709\u72ec\u7279\u7684ID\u4ee5\u53ca\u4ef7\u683c\uff0c\u6bcf\u4e2a(\u96c6\u7fa4,\u5206\u533a,QOS)\u9879\u5e94\u8be5\u6709\u4e00\u4e2a\u72ec\u7279\u7684\u8ba1\u8d39\u9879\u3002\u8ba1\u8d39\u9879\u4e00\u65e6\u521b\u5efa\u548c\u5206\u914d\u4e0d\u80fd\u88ab\u91cd\u65b0\u5206\u914d\u3001\u4fee\u6539\u6216\u8005\u5220\u9664\uff0c\u5982\u679c\u60a8\u60f3\u4fee\u6539\u4e00\u4e2a\u8ba1\u8d39\u9879\u7684\u4ef7\u683c\uff0c\u60a8\u9700\u8981\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u8ba1\u8d39\u9879\u3002"),(0,r.kt)("p",null,"\u8d39\u7528\u9879\u76ee\u7684\u4fe1\u606f\u5b58\u653e\u5728\u6570\u636e\u5e93\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"job_price_item"),"\u8868\u4e2d\u3002\u6bcf\u6b21\u9700\u8981\u8ba1\u7b97\u4ef7\u683c\u65f6\uff0c\u670d\u52a1\u5668\u5c06\u4f1a\u4ece\u6570\u636e\u5e93\u4e2d\u53d6\u5f97\u6240\u6709\u8ba1\u8d39\u9879\uff0c\u5e76\u5f97\u5230\u6bcf\u4e2a(\u96c6\u7fa4,\u5206\u533a,QOS)\u7684\u6700\u65b0\u7684\u8ba1\u8d39\u89c4\u5219\u3002\u5982\u679c\u5728",(0,r.kt)("a",{parentName:"p",href:"/SCOW/pr-preview/pr-432/docs/deploy/config/clusterConfig"},"\u96c6\u7fa4\u4fe1\u606f\u914d\u7f6e\u6587\u4ef6"),"\u7684\u67d0\u4e2aQOS\u4e0d\u5b58\u5728\u8d39\u7528\u9879\uff0c\u670d\u52a1\u5668\u5c06\u4f1a\u62a5\u9519\u3002"),(0,r.kt)("p",null,"\u6bcf\u4e2a\u4f5c\u4e1a\u7684\u8d39\u7528\u8ba1\u7b97\u65b9\u6cd5\u5982\u4e0b\uff1a"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u56db\u820d\u4e94\u5165(\u4f5c\u4e1a\u6301\u7eed\u5c0f\u65f6 (",(0,r.kt)("inlineCode",{parentName:"p"},"timeUsed")," / 3600) x \u7528\u91cf x \u6240\u9002\u7528\u7684\u8d39\u7528\u9879\u76ee\u7684\u4ef7\u683c)")),(0,r.kt)("p",null,"\u6bcf\u4e2a\u4f5c\u4e1a\u7684\u7528\u91cf\u7531\u8ba1\u8d39\u7b56\u7565(amount)\u786e\u5b9a\uff0c\u652f\u6301\u7684\u8ba1\u8d39\u7b56\u7565\u53d6\u503c\u5982\u4e0b\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"amount"),(0,r.kt)("th",{parentName:"tr",align:null},"\u603b\u91cf\u7b97\u6cd5"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"max-cpusAlloc-mem")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"cpusAlloc"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"gpu")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"gpu"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"max-gpu-cpusAlloc")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"max(gpu, \u5411\u4e0a\u53d6\u6574(cpusAlloc / (\u5206\u533a\u6838\u5fc3\u6570/\u5206\u533agpu\u6570)))"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"cpusAlloc")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"max(cpusAlloc, \u5411\u4e0a\u53d6\u6574(memReq / (\u5206\u533a\u5185\u5b58\u91cf/\u5206\u533a\u6838\u5fc3\u6570)))"))))),(0,r.kt)("p",null,"\u5728\u8ba1\u7b97\u8fc7\u7a0b\u4e2d\u5982\u679c\u53d1\u73b0\u4e86\u5176\u4ed6\u7b56\u7565\uff0c\u5219\u6574\u4e2a\u4f5c\u4e1a\u7684\u8d39\u7528\u4e3a0\u3002"),(0,r.kt)("h2",{id:"\u4ece\u7f51\u9875\u7f16\u8f91\u4f5c\u4e1a\u4ef7\u683c\u8868"},"\u4ece\u7f51\u9875\u7f16\u8f91\u4f5c\u4e1a\u4ef7\u683c\u8868"),(0,r.kt)("p",null,"\u60a8\u53ef\u4ee5\u5728\u7cfb\u7edf\u521d\u59cb\u5316\u65f6\u6216\u8005\u4ee5\u5e73\u53f0\u7ba1\u7406\u5458\u8eab\u4efd\u767b\u5f55\u7cfb\u7edf\u540e\u8fdb\u5165",(0,r.kt)("strong",{parentName:"p"},"\u5e73\u53f0\u7ba1\u7406"),"->",(0,r.kt)("strong",{parentName:"p"},"\u7f16\u8f91\u4f5c\u4e1a\u4ef7\u683c\u8868"),"\uff0c\u5728\u7f51\u9875\u4e0a\u7f16\u8f91\u4f5c\u4e1a\u4ef7\u683c\u8868\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u4f5c\u4e1a\u4ef7\u683c\u8868",src:n(5801).Z,width:"2418",height:"1057"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u4fee\u6539\u4f5c\u4e1a\u4ef7\u683c",src:n(78).Z,width:"997",height:"935"})),(0,r.kt)("p",null,"\u65b0\u7684\u4f5c\u4e1a\u4ef7\u683c\u8868\u5c06\u5728\u4e0b\u6b21\u83b7\u53d6\u4f5c\u4e1a\u65f6\u751f\u6548\u3002"),(0,r.kt)("h2",{id:"\u5feb\u901f\u521b\u5efa\u8ba1\u8d39\u89c4\u5219"},"\u5feb\u901f\u521b\u5efa\u8ba1\u8d39\u89c4\u5219"),(0,r.kt)("p",null,"\u60a8\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"config/priceItems.{json|yml|yaml}"),"\u6587\u4ef6\uff0c\u5b9a\u4e49(\u96c6\u7fa4,\u5206\u533a,QOS)\u9879\u4ee5\u53ca\u5bf9\u5e94\u7684\u8d39\u7528\u9879\u76ee\uff0c\u670d\u52a1\u5668\u53ef\u4ee5\u5feb\u901f\u6839\u636e\u8fd9\u4e9b\u4fe1\u606f\u5728\u6570\u636e\u5e93\u4e2d\u521b\u5efa\u8d39\u7528\u9879\u76ee\u3002\u6587\u4ef6\u683c\u5f0f\u4ee5\u53ca\u5404\u4e2a\u5b57\u6bb5\u7684\u89e3\u91ca\u8bf7\u53c2\u8003\u4e0b\u5217yaml\u6587\u4ef6\u7684\u6ce8\u91ca\u3002"),(0,r.kt)(k,{mdxType:"Tabs"},(0,r.kt)(f,{value:"config/priceItems.yml",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"default: # \u9ed8\u8ba4\u89c4\u5219\uff0c\u5bf9\u6240\u6709\u96c6\u7fa4\u548c\u79df\u6237\u751f\u6548\n  hpc01: # \u5bf9hpc01\u96c6\u7fa4\u7684...\n    compute: # compute\u5206\u533a\u7684...\n      low: # QOS\u4e3alow\u7684\u4efb\u52a1\n        id: HPC01 # \u8d39\u7528\u9879\u76eeID\u4e3aHPC01\n        price: '1.00' # \u57fa\u7840\u4ef7\u683c\u4e3a1.00\uff0c\u5b57\u7b26\u4e32\u5f62\u5f0f\n        amount: 'cpusAlloc' # \u8ba1\u8d39\u7b56\u7565\uff0c\u770b\u4e0a\u6587\n      normal:\n        id: HPC02\n        price: '2.00'\n        amount: 'cpusAlloc'\n      high:\n        id: HPC03\n        price: '3.00'\n        amount: 'cpusAlloc'\n    GPU: # \u5982\u679c\u6574\u4e2a\u5206\u533a\u7684\u8d39\u7528\u76f8\u540c\uff0c\u60a8\u4e5f\u53ef\u4ee5\u7ed9\u4e00\u6574\u4e2a\u5206\u533a\u5b9a\u4e49\u4e00\u4e2a\u8d39\u7528\u9879\u76ee\n      id: HPC04\n      price: '10.00'\n      amount: 'cpusAlloc'\ntenant_1: # \u5bf9\u79df\u6237tenant_1\u7684\u8d26\u6237\u7528\u6237\u53d1\u8d77\u7684\u4efb\u52a1\uff0c\u5728\u9ed8\u8ba4\u89c4\u5219\u7684\u57fa\u7840\u4e0a\uff0c\u8986\u76d6\u4ee5\u4e0b\u914d\u7f6e\n  hpc01:\n    GPU:\n      low:\n        id: HPC07 # \u5bf9\u79df\u6237tenant_1\u7684hpc01.GPU.low\u7684\u4efb\u52a1\uff0c\u4ef7\u683c\u4e3a12.00\n        price: '12.00'\n        amount: 'cpusAlloc'\n"))),(0,r.kt)(f,{value:"config/priceItems.json",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "default": {\n    "hpc01": {\n      "compute": {\n        "low": {\n          "id": "HPC01",\n          "price": "1.00",\n          "amount": "cpusAlloc"\n         },\n        "normal": {\n          "id": "HPC02",\n          "price": "2.00",\n          "amount": "cpusAlloc"\n         },\n        "high": {\n          "id": "HPC03",\n          "price": "3.00",\n          "amount": "cpusAlloc"\n         }\n      },\n      "GPU": {\n        "low": {\n          "id": "HPC04",\n          "price": "10.00",\n          "amount": "cpusAlloc"\n         },\n        "normal": {\n          "id": "HPC05",\n          "price": "20.00",\n          "amount": "cpusAlloc"\n         },\n        "high": {\n          "id": "HPC06",\n          "price": "30.00",\n          "amount": "cpusAlloc"\n         }\n      }\n    }\n  },\n  "tenant_1": {\n    "hpc01": {\n      "GPU": {\n        "low": {\n          "id": "HPC07",\n          "price": "12.00",\n          "amount": "cpusAlloc"\n         }\n      }\n    }\n  }\n}\n')))),(0,r.kt)("p",null,"\u6ce8\u610f\u4e8b\u9879\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u6bcf\u4e2a\u8ba1\u8d39\u9879\u5e94\u8be5\u53ea\u51fa\u73b0\u4e00\u6b21\u3002\u5373\u4f7f\u591a\u4e2aQOS\u8d39\u7528\u76f8\u540c\uff0c\u4e5f\u5e94\u8be5\u5b9a\u4e49\u4e24\u4e2a\u8ba1\u8d39\u9879"),(0,r.kt)("li",{parentName:"ol"},"\u6570\u636e\u5e93\u4e2d\u4e0d\u5b58\u5728\u5177\u6709\u76f8\u540c\u8ba1\u8d39\u9879\u540d\u7684\u884c")),(0,r.kt)("p",null,"\u5728\u6570\u636e\u5e93\u6b63\u5728\u8fd0\u884c\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml"),"\u914d\u7f6e\u7f16\u5199\u5b8c\u6210\u7684\u6761\u4ef6\u4e0b\uff0c\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u5feb\u901f\u5728\u6570\u636e\u5e93\u4e2d\u521b\u5efa\u8d39\u7528\u9879\u4fe1\u606f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker compose run mis-server createPriceItems\n")))}C.isMDXComponent=!0},78:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/edit-price-item-d984facac9485f1863b7a8f2382e8f2b.png"},5801:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/price-table-1d232d50cbdc495a0d3bf3b0c11c0ed8.png"}}]);