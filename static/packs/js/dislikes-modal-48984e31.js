import{c as m,p as u,r as f,_ as s,M as h,K as i,bv as k,d$ as y,aE as M}from"../index-961d4ed1.js";import{S as g}from"./scrollable-list-74021d3b.js";import"./index-c72bc579.js";import"./load-more-1869fbc1.js";const E=c=>{let{onClose:d,statusId:a}=c;const n=m(),o=u(l=>{var e;return(e=l.user_lists.disliked_by.get(a))==null?void 0:e.items}),p=()=>{n(y(a))};f.useEffect(()=>{p()},[]);const r=()=>{d("DISLIKES")};let t;return o?t=s(g,{scrollKey:"dislikes",emptyMessage:s(i,{id:"empty_column.dislikes",defaultMessage:"No one has disliked this post yet. When someone does, they will show up here."}),className:"max-w-full",itemClassName:"pb-3"},void 0,o.map(e=>s(h,{id:e},e))):t=s(M,{}),s(k,{title:s(i,{id:"column.dislikes",defaultMessage:"Dislikes"}),onClose:r},void 0,t)};export{E as default};
