"use strict";(self.webpackChunk_scow_docs=self.webpackChunk_scow_docs||[]).push([[8209],{25668:(e,s,t)=>{t.d(s,{A:()=>v});var a=t(48318),i=t(23372),l=t(12439),r=t(91737),n=t(82383),c=t(4701),o=t(66325),d=t(10005);function m(e){const{pathname:s}=(0,o.zy)();return(0,a.useMemo)((()=>e.filter((e=>function(e,s){return!(e.unlisted&&!(0,d.ys)(e.permalink,s))}(e,s)))),[e,s])}const u={sidebar:"sidebar_jfIe",sidebarItemTitle:"sidebarItemTitle__JIg",sidebarItemList:"sidebarItemList_YVce",sidebarItem:"sidebarItem_apQc",sidebarItemLink:"sidebarItemLink_KjF8",sidebarItemLinkActive:"sidebarItemLinkActive_lj4A"};var b=t(49214);function g(e){let{sidebar:s}=e;const t=m(s.items);return(0,b.jsx)("aside",{className:"col col--3",children:(0,b.jsxs)("nav",{className:(0,i.A)(u.sidebar,"thin-scrollbar"),"aria-label":(0,c.T)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,b.jsx)("div",{className:(0,i.A)(u.sidebarItemTitle,"margin-bottom--md"),children:s.title}),(0,b.jsx)("ul",{className:(0,i.A)(u.sidebarItemList,"clean-list"),children:t.map((e=>(0,b.jsx)("li",{className:u.sidebarItem,children:(0,b.jsx)(n.A,{isNavLink:!0,to:e.permalink,className:u.sidebarItemLink,activeClassName:u.sidebarItemLinkActive,children:e.title})},e.permalink)))})]})})}var h=t(11516);function j(e){let{sidebar:s}=e;const t=m(s.items);return(0,b.jsx)("ul",{className:"menu__list",children:t.map((e=>(0,b.jsx)("li",{className:"menu__list-item",children:(0,b.jsx)(n.A,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)))})}function p(e){return(0,b.jsx)(h.GX,{component:j,props:e})}function x(e){let{sidebar:s}=e;const t=(0,r.l)();return s?.items.length?"mobile"===t?(0,b.jsx)(p,{sidebar:s}):(0,b.jsx)(g,{sidebar:s}):null}function v(e){const{sidebar:s,toc:t,children:a,...r}=e,n=s&&s.items.length>0;return(0,b.jsx)(l.A,{...r,children:(0,b.jsx)("div",{className:"container margin-vert--lg",children:(0,b.jsxs)("div",{className:"row",children:[(0,b.jsx)(x,{sidebar:s}),(0,b.jsx)("main",{className:(0,i.A)("col",{"col--7":n,"col--9 col--offset-1":!n}),children:a}),t&&(0,b.jsx)("div",{className:"col col--2",children:t})]})})})}},80236:(e,s,t)=>{t.r(s),t.d(s,{default:()=>j});t(48318);var a=t(23372),i=t(4701);const l=()=>(0,i.T)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});var r=t(52629),n=t(86019),c=t(25668),o=t(57335),d=t(58257);const m={tag:"tag_hPlh"};var u=t(49214);function b(e){let{letterEntry:s}=e;return(0,u.jsxs)("article",{children:[(0,u.jsx)(d.A,{as:"h2",id:s.letter,children:s.letter}),(0,u.jsx)("ul",{className:"padding--none",children:s.tags.map((e=>(0,u.jsx)("li",{className:m.tag,children:(0,u.jsx)(o.A,{...e})},e.permalink)))}),(0,u.jsx)("hr",{})]})}function g(e){let{tags:s}=e;const t=function(e){const s={};return Object.values(e).forEach((e=>{const t=function(e){return e[0].toUpperCase()}(e.label);s[t]??=[],s[t].push(e)})),Object.entries(s).sort(((e,s)=>{let[t]=e,[a]=s;return t.localeCompare(a)})).map((e=>{let[s,t]=e;return{letter:s,tags:t.sort(((e,s)=>e.label.localeCompare(s.label)))}}))}(s);return(0,u.jsx)("section",{className:"margin-vert--lg",children:t.map((e=>(0,u.jsx)(b,{letterEntry:e},e.letter)))})}var h=t(50598);function j(e){let{tags:s,sidebar:t}=e;const i=l();return(0,u.jsxs)(r.e3,{className:(0,a.A)(n.G.wrapper.blogPages,n.G.page.blogTagsListPage),children:[(0,u.jsx)(r.be,{title:i}),(0,u.jsx)(h.A,{tag:"blog_tags_list"}),(0,u.jsxs)(c.A,{sidebar:t,children:[(0,u.jsx)(d.A,{as:"h1",children:i}),(0,u.jsx)(g,{tags:s})]})]})}},57335:(e,s,t)=>{t.d(s,{A:()=>n});t(48318);var a=t(23372),i=t(82383);const l={tag:"tag_kK9b",tagRegular:"tagRegular_kJEi",tagWithCount:"tagWithCount_I_lC"};var r=t(49214);function n(e){let{permalink:s,label:t,count:n,description:c}=e;return(0,r.jsxs)(i.A,{href:s,title:c,className:(0,a.A)(l.tag,n?l.tagWithCount:l.tagRegular),children:[t,n&&(0,r.jsx)("span",{children:n})]})}}}]);