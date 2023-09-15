import{r as w,u as T,c as z,p as n,b4 as B,eg as K,_ as s,M as A,R as x,G as V,K as v,ae as j,ab as G,H as Q,a1 as L,eh as Y,ei as J,T as O,aQ as W,n as I,ej as X,ek as Z,a2 as ee}from"../index-961d4ed1.js";import{H as F}from"./hashtag-dc15349e.js";import{S as se}from"./scrollable-list-74021d3b.js";import{S as R}from"./status-container-8c0c48ff.js";import{P as te}from"./placeholder-account-9a0f17de.js";import{P as ae}from"./placeholder-hashtag-555e7a90.js";import"./index-c72bc579.js";import"./load-more-1869fbc1.js";const C=I({accounts:{id:"search_results.accounts",defaultMessage:"People"},statuses:{id:"search_results.statuses",defaultMessage:"Posts"},hashtags:{id:"search_results.hashtags",defaultMessage:"Hashtags"}}),oe=()=>{const d=w.useRef(null),M=T(),m=z(),h=n(e=>e.search.submittedValue),t=n(e=>e.search.results),l=n(e=>e.suggestions.items),g=n(e=>e.trending_statuses.items),D=n(e=>e.trends.items),u=n(e=>e.search.submitted),a=n(e=>e.search.filter),E=n(e=>e.search.accountId||void 0),{account:b}=B(E),U=()=>m(Y(a)),$=()=>m(J(null)),y=e=>m(X(e)),q=()=>{const e=[];return e.push({text:M.formatMessage(C.accounts),action:()=>y("accounts"),name:"accounts"},{text:M.formatMessage(C.statuses),action:()=>y("statuses"),name:"statuses"}),e.push({text:M.formatMessage(C.hashtags),action:()=>y("hashtags"),name:"hashtags"}),s(O,{items:e,activeItem:a})},H=e=>i==null?void 0:i.keySeq().findIndex(r=>r===e),N=e=>{if(!i)return;const r=H(e)-1;k(r)},P=e=>{if(!i)return;const r=H(e)+1;k(r)},k=e=>{var r;(r=d.current)==null||r.scrollIntoView({index:e,behavior:"smooth",done:()=>{const _=document.querySelector(`#search-results [data-index="${e}"] .focusable`);_==null||_.focus()}})};w.useEffect(()=>{m(K())},[]);let o,p=!1,c,f,S=W,i;return a==="accounts"&&(p=t.accountsHasMore,c=t.accountsLoaded,S=te,t.accounts&&t.accounts.size>0?o=t.accounts.map(e=>s(A,{id:e},e)):!u&&l&&!l.isEmpty()?o=l.map(e=>s(A,{id:e.account},e.account)):c&&(f=s("div",{className:"empty-column-indicator"},void 0,s(v,{id:"empty_column.search.accounts",defaultMessage:'There are no people results for "{term}"',values:{term:h}})))),a==="statuses"&&(p=t.statusesHasMore,c=t.statusesLoaded,t.statuses&&t.statuses.size>0?(o=t.statuses.map(e=>s(R,{id:e,onMoveUp:N,onMoveDown:P},e)),i=t.statuses):!u&&g&&!g.isEmpty()?(o=g.map(e=>s(R,{id:e,onMoveUp:N,onMoveDown:P},e)),i=g):c&&(f=s("div",{className:"empty-column-indicator"},void 0,s(v,{id:"empty_column.search.statuses",defaultMessage:'There are no posts results for "{term}"',values:{term:h}})))),a==="hashtags"&&(p=t.hashtagsHasMore,c=t.hashtagsLoaded,S=ae,t.hashtags&&t.hashtags.size>0?o=t.hashtags.map(e=>s(F,{hashtag:e},e.name)):!u&&l&&!l.isEmpty()?o=D.map(e=>s(F,{hashtag:e},e.name)):c&&(f=s("div",{className:"empty-column-indicator"},void 0,s(v,{id:"empty_column.search.hashtags",defaultMessage:'There are no hashtags results for "{term}"',values:{term:h}})))),x.createElement(x.Fragment,null,E?s(Q,{className:"mb-4 border-b border-solid border-gray-200 px-2 pb-4 dark:border-gray-800",space:2},void 0,s(j,{iconClassName:"h-5 w-5",src:G,onClick:$}),s(V,{truncate:!0},void 0,s(v,{id:"search_results.filter_message",defaultMessage:"You are searching for posts from @{acct}.",values:{acct:s("strong",{className:"break-words"},void 0,b==null?void 0:b.acct)}}))):q(),f||x.createElement(se,{id:"search-results",ref:d,key:a,scrollKey:`${a}:${h}`,isLoading:u&&!c,showLoading:u&&!c&&(o==null?void 0:o.isEmpty()),hasMore:p,onLoadMore:U,placeholderComponent:S,placeholderCount:20,className:L({"divide-gray-200 dark:divide-gray-800 divide-solid divide-y":a==="statuses"}),itemClassName:L({"pb-4":a==="accounts","pb-3":a==="hashtags"})},o||[]))},ce=I({heading:{id:"column.search",defaultMessage:"Search"}}),ge=()=>{const d=T();return s(ee,{label:d.formatMessage(ce.heading)},void 0,s("div",{className:"space-y-4"},void 0,s(Z,{autoFocus:!0,autoSubmit:!0}),s(oe,{})))};export{ge as default};
