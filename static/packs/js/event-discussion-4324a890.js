import{c as _,r as n,aN as F,p as m,ba as O,jv as P,Z as T,aO as W,_ as a,aF as A,aQ as g,dC as U,a8 as $,R as y,K,aR as j,dc as q,Y as I}from"../index-961d4ed1.js";import{S as z}from"./scrollable-list-74021d3b.js";import{P as G}from"./pending-status-d95ac051.js";import{g as Q,a as V}from"./thread-0ef56bd7.js";import"./index-c72bc579.js";import"./load-more-1869fbc1.js";import"./poll-preview-bd47b324.js";import"./noop-33ff36b4.js";import"./status-container-8c0c48ff.js";const ae=r=>{const i=_(),M=n.useCallback(F(),[]),s=m(e=>M(e,{id:r.params.statusId})),u=m(e=>e.me),d=m(e=>{let t=O();if(s){const o=s.id;t=Q(e,o),t=t.delete(o)}return t}),[l,p]=n.useState(!!s),[c,h]=n.useState(),C=n.useRef(null),f=n.useRef(null),D=async()=>{const{params:e}=r,{statusId:t}=e,{next:o}=await i(j(t));h(o)};n.useEffect(()=>{D().then(()=>{p(!0)}).catch(()=>{p(!0)})},[r.params.statusId]),n.useEffect(()=>{l&&u&&i(P(`reply:${r.params.statusId}`,s))},[l,u]);const v=e=>{const t=I(d).indexOf(e);b(t-1)},S=e=>{const t=I(d).indexOf(e);b(t+1)},b=e=>{var t;(t=f.current)==null||t.scrollIntoView({index:e,behavior:"smooth",done:()=>{const o=document.querySelector(`#thread [data-index="${e}"] .focusable`);o&&o.focus()}})},w=e=>a("div",{className:"py-4 pb-8"},void 0,a(q,{id:e,onMoveUp:v,onMoveDown:S},e)),E=e=>a(V,{id:e,focusedStatusId:s.id,onMoveUp:v,onMoveDown:S},e),N=e=>{const t=e.replace(/^末pending-/,"");return a(G,{idempotencyKey:t,thread:!0},e)},R=e=>e.map(t=>t.endsWith("-tombstone")?w(t):t.startsWith("末pending-")?N(t):E(t)),L=n.useCallback(T(()=>{c&&s&&i(W(s.id,c)).then(e=>{let{next:t}=e;h(t)}).catch(()=>{})},300,{leading:!0}),[c,s]),k=d.size>0;if(!s&&l)return a(A,{});if(!s)return a(g,{});const x=[];return k&&x.push(...R(d).toArray()),a($,{space:2},void 0,u&&a("div",{className:"border-b border-solid border-gray-200 p-2 pt-0 dark:border-gray-800"},void 0,a(U,{id:`reply:${s.id}`,autoFocus:!1,event:s.id})),y.createElement("div",{ref:C,className:"thread p-0 shadow-none sm:p-2"},y.createElement(z,{id:"thread",ref:f,hasMore:!!c,onLoadMore:L,placeholderComponent:()=>a(g,{variant:"slim"}),initialTopMostItemIndex:0,emptyMessage:a(K,{id:"event.discussion.empty",defaultMessage:"No one has commented this event yet. When someone does, they will appear here."})},x)))};export{ae as default};