import{u as m,c as l,p,r as u,ap as o,_ as t,a2 as h,K as g,n as f,aq as M}from"../index-961d4ed1.js";import{u as y,A as S}from"./account-search-ce1ec351.js";import{T as x}from"./timeline-69e892a4.js";import"./scroll-top-button-ff8ae8be.js";import"./status-list-e5eaf038.js";import"./scrollable-list-74021d3b.js";import"./index-c72bc579.js";import"./load-more-1869fbc1.js";import"./status-container-8c0c48ff.js";import"./pending-status-d95ac051.js";import"./poll-preview-bd47b324.js";import"./noop-33ff36b4.js";const i=f({heading:{id:"column.direct",defaultMessage:"Direct messages"},searchPlaceholder:{id:"direct.search_placeholder",defaultMessage:"Send a message to…"}}),P=()=>{const a=m(),s=l(),c=p(e=>{var r;return(r=e.timelines.get("direct"))==null?void 0:r.next});y(),u.useEffect(()=>{s(o())},[]);const d=e=>{s(M(e))},n=e=>{s(o({url:c,maxId:e}))};return t(h,{label:a.formatMessage(i.heading)},void 0,t(S,{placeholder:a.formatMessage(i.searchPlaceholder),onSelected:d}),t(x,{scrollKey:"direct_timeline",timelineId:"direct",onLoadMore:n,emptyMessage:t(g,{id:"empty_column.direct",defaultMessage:"You don't have any direct messages yet. When you send or receive one, it will show up here."}),divideType:"border"}))};export{P as default};