import{iV as l,c as m,u as g,aB as f,p as o,ba as h,R as M,iW as i,_ as n,a2 as q,n as _,K as y}from"../index-961d4ed1.js";import{l as I}from"./lodash-d2d72341.js";import{S as L}from"./status-list-e5eaf038.js";import"./scrollable-list-74021d3b.js";import"./index-c72bc579.js";import"./load-more-1869fbc1.js";import"./status-container-8c0c48ff.js";import"./pending-status-d95ac051.js";import"./poll-preview-bd47b324.js";import"./noop-33ff36b4.js";const R=_({heading:{id:"column.quotes",defaultMessage:"Post quotes"}}),S=I.debounce((t,a)=>a(l(t)),300,{leading:!0}),T=()=>{const t=m(),a=g(),{statusId:s}=f(),r=o(e=>e.status_lists.getIn([`quotes:${s}`,"items"],h())),u=o(e=>e.status_lists.getIn([`quotes:${s}`,"isLoading"],!0)),d=o(e=>!!e.status_lists.getIn([`quotes:${s}`,"next"]));M.useEffect(()=>{t(i(s))},[s]);const p=async()=>{await t(i(s))},c=n(y,{id:"empty_column.quotes",defaultMessage:"This post has not been quoted yet."});return n(q,{label:a.formatMessage(R.heading),transparent:!0},void 0,n(L,{statusIds:r,scrollKey:`quotes:${s}`,hasMore:d,isLoading:typeof u=="boolean"?u:!0,onLoadMore:()=>S(s,t),onRefresh:p,emptyMessage:c,divideType:"space"}))};export{T as default};