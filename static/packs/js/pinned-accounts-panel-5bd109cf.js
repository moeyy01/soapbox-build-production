import{c as r,p as l,ba as d,r as p,h1 as m,_ as t,h2 as u,g$ as h,M as f,K as _}from"../index-961d4ed1.js";import{W as A}from"./widget-a1deeca4.js";import"./arrow-right-b75290c7.js";const P=o=>{let{account:a,limit:n}=o;const c=r(),s=l(e=>{var i;return((i=e.user_lists.pinned.get(a.id))==null?void 0:i.items)||d()}).slice(0,n);return p.useEffect(()=>{c(m(a.id))},[]),s.isEmpty()?t(h,{fetchComponent:u},void 0,e=>t(e,{limit:n})):t(A,{title:t(_,{id:"pinned_accounts.title",defaultMessage:"{name}’s choices",values:{name:t("span",{dangerouslySetInnerHTML:{__html:a.display_name_html}})}})},void 0,s&&s.map(e=>t(f,{id:e,withRelationship:!1},e)))};export{P as default};
