import{c as b,u as y,r as m,p as _,Y as N,e0 as S,R as f,_ as s,M as w,a1 as A,K as h,bv as j,dZ as z,e1 as F,L as I,T as L,aE as U,n as T}from"../index-961d4ed1.js";import{S as D}from"./scrollable-list-74021d3b.js";import"./index-c72bc579.js";import"./load-more-1869fbc1.js";const K=T({close:{id:"lightbox.close",defaultMessage:"Close"},all:{id:"reactions.all",defaultMessage:"All"}}),W=g=>{let{onClose:R,statusId:i,reaction:M}=g;const u=b(),v=y(),[n,d]=m.useState(M),a=_(t=>{var c,l;const e=(c=t.user_lists.favourited_by.get(i))==null?void 0:c.items,o=(l=t.user_lists.reactions.get(i))==null?void 0:l.items;return e&&o&&N(e!=null&&e.size?[S({accounts:e,count:e.size,name:"👍"})]:[]).concat(o||[])}),x=()=>{u(z(i)),u(F(i))},C=()=>{R("REACTIONS")},E=()=>{const t=[{text:v.formatMessage(K.all),action:()=>d(""),name:"all"}];return a.forEach(e=>t.push({text:s("div",{className:"flex items-center gap-1"},void 0,s(I,{className:"h-4 w-4",emoji:e.name,src:e.url||void 0}),e.count),action:()=>d(e.name),name:e.name})),s(L,{items:t,activeItem:n||"all"})},p=m.useMemo(()=>{if(a)if(n){const t=a.find(e=>{let{name:o}=e;return o===n});if(t)return t.accounts.map(e=>({id:e,reaction:n,reactionUrl:t.url||void 0})).toList()}else return a.map(t=>{let{accounts:e,name:o,url:c}=t;return e.map(l=>({id:l,reaction:o,reactionUrl:c}))}).flatten()},[a,n]);m.useEffect(()=>{x()},[]);let r;if(!p||!a)r=s(U,{});else{const t=s(h,{id:"status.reactions.empty",defaultMessage:"No one has reacted to this post yet. When someone does, they will show up here."});r=f.createElement(f.Fragment,null,a.size>0&&E(),s(D,{scrollKey:"reactions",emptyMessage:t,className:A("max-w-full",{"mt-4":a.size>0}),itemClassName:"pb-3"},void 0,p.map(e=>s(w,{id:e.id,emoji:e.reaction,emojiUrl:e.reactionUrl},`${e.id}-${e.reaction}`))))}return s(j,{title:s(h,{id:"column.reactions",defaultMessage:"Reactions"}),onClose:C},void 0,r)};export{W as default};