import{u as g,c as C,dA as v,b4 as A,r as M,be as b,_ as e,ab as h,ae as f,bX as R,b3 as y,H as N,n as k,dL as w,dM as I,aN as P,p as E,b9 as S,dN as T,K as q,dt as L,bv as x}from"../index-961d4ed1.js";const _=k({remove:{id:"reply_mentions.account.remove",defaultMessage:"Remove from mentions"},add:{id:"reply_mentions.account.add",defaultMessage:"Add to mentions"}}),F=i=>{var p;let{composeId:n,accountId:o,author:l}=i;const c=g(),s=C(),d=v(n),{account:t}=A(o),u=!!t&&((p=d.to)==null?void 0:p.includes(t.acct)),m=()=>s(w(n,o)),a=()=>s(I(n,o));if(M.useEffect(()=>{o&&!t&&s(b(o))},[]),!t)return null;let r;return u?r=e(f,{src:h,iconClassName:"h-5 w-5",title:c.formatMessage(_.remove),onClick:m}):r=e(f,{src:R,iconClassName:"h-5 w-5",title:c.formatMessage(_.add),onClick:a}),e(N,{space:1,alignItems:"center",justifyContent:"between",className:"p-2.5"},void 0,e("div",{className:"w-full"},void 0,e(y,{account:t,withRelationship:!1,withLinkToProfile:!1})),!l&&r)},O=i=>{let{composeId:n,onClose:o}=i;const l=v(n),c=M.useCallback(P(),[]),s=E(a=>c(a,{id:l.in_reply_to})),{account:d}=S(),t=T(s,d),u=(s==null?void 0:s.account).id;return e(x,{title:e(q,{id:"navigation_bar.in_reply_to",defaultMessage:"In reply to"}),onClose:()=>{o("REPLY_MENTIONS")},closeIcon:L,closePosition:"left"},void 0,e("div",{className:"reply-mentions-modal__accounts"},void 0,t.map(a=>e(F,{composeId:n,accountId:a,author:u===a},a))))};export{O as default};
