import{c as M,q as S,p as u,ar as y,_ as r,as as w,r as C,Z as x,at as I,R as D,K as L,u as _,au as A,av as R,a2 as b,n as k,aq as U}from"../index-961d4ed1.js";import{u as E,A as q}from"./account-search-ce1ec351.js";import{S as H}from"./scrollable-list-74021d3b.js";import{S as K}from"./status-container-8c0c48ff.js";import"./index-c72bc579.js";import"./load-more-1869fbc1.js";const P=n=>{let{conversationId:s,onMoveUp:t,onMoveDown:a}=n;const m=M(),d=S(),{accounts:h,unread:l,lastStatusId:c}=u(i=>{const v=i.conversations.items.find(f=>f.id===s);return{accounts:v.accounts.map(f=>y(i,f)),unread:v.unread,lastStatusId:v.last_status||null}}),p=()=>{l&&m(w(s)),d.push(`/statuses/${c}`)},e=()=>{t(s)},o=()=>{a(s)};return c===null?null:r(K,{id:c,unread:l,otherAccounts:h,onMoveUp:e,onMoveDown:o,onClick:p})},$=()=>{const n=M(),s=C.useRef(null),t=u(e=>e.conversations.items),a=u(e=>e.conversations.isLoading),m=u(e=>e.conversations.hasMore),d=e=>t.findIndex(o=>o.id===e),h=e=>{const o=d(e)-1;c(o)},l=e=>{const o=d(e)+1;c(o)},c=e=>{var o;(o=s.current)==null||o.scrollIntoView({index:e,behavior:"smooth",done:()=>{const i=document.querySelector(`#direct-list [data-index="${e}"] .focusable`);i&&i.focus()}})},p=x(()=>{const e=t.getIn([-1,"id"]);e&&n(I({maxId:e}))},300,{leading:!0});return D.createElement(H,{hasMore:m,onLoadMore:p,id:"direct-list",scrollKey:"direct",ref:s,isLoading:a,showLoading:a&&t.size===0,emptyMessage:r(L,{id:"empty_column.direct",defaultMessage:"You don't have any direct messages yet. When you send or receive one, it will show up here."})},t.map(e=>r(P,{conversationId:e.id,onMoveUp:h,onMoveDown:l},e.id)))},g=k({title:{id:"column.direct",defaultMessage:"Direct messages"},searchPlaceholder:{id:"direct.search_placeholder",defaultMessage:"Send a message to…"}}),W=()=>{const n=_(),s=M();E(),C.useEffect(()=>(s(A()),s(I()),()=>{s(R())}),[]);const t=a=>{s(U(a))};return r(b,{label:n.formatMessage(g.title)},void 0,r(q,{placeholder:n.formatMessage(g.searchPlaceholder),onSelected:t}),r($,{}))};export{W as default};
