import{Z as c,ke as g,u as m,c as i,r as p,kf as h,p as o,_ as a,a2 as f,n as u,K as w}from"../index-961d4ed1.js";import{H as M}from"./hashtag-dc15349e.js";import{S as _}from"./scrollable-list-74021d3b.js";import{P as y}from"./placeholder-hashtag-555e7a90.js";import"./index-c72bc579.js";import"./load-more-1869fbc1.js";const F=u({heading:{id:"column.followed_tags",defaultMessage:"Followed hashtags"}}),H=c(s=>{s(g())},300,{leading:!0}),S=()=>{const s=m(),t=i();p.useEffect(()=>{t(h())},[]);const l=o(e=>e.followed_tags.items),d=o(e=>e.followed_tags.isLoading),n=o(e=>!!e.followed_tags.next),r=a(w,{id:"empty_column.followed_tags",defaultMessage:"You haven't followed any hashtag yet."});return a(f,{label:s.formatMessage(F.heading)},void 0,a(_,{scrollKey:"followed_tags",emptyMessage:r,isLoading:d,hasMore:n,onLoadMore:()=>H(t),placeholderComponent:y,placeholderCount:5,itemClassName:"pb-3"},void 0,l.map(e=>a(M,{hashtag:e},e.name))))};export{S as default};