"use strict";(self.webpackChunk_scow_docs=self.webpackChunk_scow_docs||[]).push([[8209],{51016:(e,s,t)=>{t.d(s,{A:()=>v});var a=t(48318),i=t(46601),r=t(16175),l=t(80147),n=t(41924),c=t(28240),o=t(66325),d=t(68447);function m(e){const{pathname:s}=(0,o.zy)();return(0,a.useMemo)((()=>e.filter((e=>function(e,s){return!(e.unlisted&&!(0,d.ys)(e.permalink,s))}(e,s)))),[e,s])}const u={sidebar:"sidebar_juGB",sidebarItemTitle:"sidebarItemTitle_gYDd",sidebarItemList:"sidebarItemList_HtN8",sidebarItem:"sidebarItem_wNWX",sidebarItemLink:"sidebarItemLink_iMkt",sidebarItemLinkActive:"sidebarItemLinkActive_FwE7"};var g=t(49214);function b(e){let{sidebar:s}=e;const t=m(s.items);return(0,g.jsx)("aside",{className:"col col--3",children:(0,g.jsxs)("nav",{className:(0,i.A)(u.sidebar,"thin-scrollbar"),"aria-label":(0,c.T)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,g.jsx)("div",{className:(0,i.A)(u.sidebarItemTitle,"margin-bottom--md"),children:s.title}),(0,g.jsx)("ul",{className:(0,i.A)(u.sidebarItemList,"clean-list"),children:t.map((e=>(0,g.jsx)("li",{className:u.sidebarItem,children:(0,g.jsx)(n.A,{isNavLink:!0,to:e.permalink,className:u.sidebarItemLink,activeClassName:u.sidebarItemLinkActive,children:e.title})},e.permalink)))})]})})}var h=t(75050);function j(e){let{sidebar:s}=e;const t=m(s.items);return(0,g.jsx)("ul",{className:"menu__list",children:t.map((e=>(0,g.jsx)("li",{className:"menu__list-item",children:(0,g.jsx)(n.A,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)))})}function p(e){return(0,g.jsx)(h.GX,{component:j,props:e})}function x(e){let{sidebar:s}=e;const t=(0,l.l)();return s?.items.length?"mobile"===t?(0,g.jsx)(p,{sidebar:s}):(0,g.jsx)(b,{sidebar:s}):null}function v(e){const{sidebar:s,toc:t,children:a,...l}=e,n=s&&s.items.length>0;return(0,g.jsx)(r.A,{...l,children:(0,g.jsx)("div",{className:"container margin-vert--lg",children:(0,g.jsxs)("div",{className:"row",children:[(0,g.jsx)(x,{sidebar:s}),(0,g.jsx)("main",{className:(0,i.A)("col",{"col--7":n,"col--9 col--offset-1":!n}),children:a}),t&&(0,g.jsx)("div",{className:"col col--2",children:t})]})})})}},82205:(e,s,t)=>{t.r(s),t.d(s,{default:()=>j});t(48318);var a=t(46601),i=t(28240);const r=()=>(0,i.T)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});var l=t(56285),n=t(56257),c=t(51016),o=t(37490),d=t(38272);const m={tag:"tag_o1Ik"};var u=t(49214);function g(e){let{letterEntry:s}=e;return(0,u.jsxs)("article",{children:[(0,u.jsx)(d.A,{as:"h2",id:s.letter,children:s.letter}),(0,u.jsx)("ul",{className:"padding--none",children:s.tags.map((e=>(0,u.jsx)("li",{className:m.tag,children:(0,u.jsx)(o.A,{...e})},e.permalink)))}),(0,u.jsx)("hr",{})]})}function b(e){let{tags:s}=e;const t=function(e){const s={};return Object.values(e).forEach((e=>{const t=function(e){return e[0].toUpperCase()}(e.label);s[t]??=[],s[t].push(e)})),Object.entries(s).sort(((e,s)=>{let[t]=e,[a]=s;return t.localeCompare(a)})).map((e=>{let[s,t]=e;return{letter:s,tags:t.sort(((e,s)=>e.label.localeCompare(s.label)))}}))}(s);return(0,u.jsx)("section",{className:"margin-vert--lg",children:t.map((e=>(0,u.jsx)(g,{letterEntry:e},e.letter)))})}var h=t(4497);function j(e){let{tags:s,sidebar:t}=e;const i=r();return(0,u.jsxs)(l.e3,{className:(0,a.A)(n.G.wrapper.blogPages,n.G.page.blogTagsListPage),children:[(0,u.jsx)(l.be,{title:i}),(0,u.jsx)(h.A,{tag:"blog_tags_list"}),(0,u.jsxs)(c.A,{sidebar:t,children:[(0,u.jsx)(d.A,{as:"h1",children:i}),(0,u.jsx)(b,{tags:s})]})]})}},37490:(e,s,t)=>{t.d(s,{A:()=>n});t(48318);var a=t(46601),i=t(41924);const r={tag:"tag__kek",tagRegular:"tagRegular_u5cB",tagWithCount:"tagWithCount_n6gD"};var l=t(49214);function n(e){let{permalink:s,label:t,count:n}=e;return(0,l.jsxs)(i.A,{href:s,className:(0,a.A)(r.tag,n?r.tagWithCount:r.tagRegular),children:[t,n&&(0,l.jsx)("span",{children:n})]})}}}]);