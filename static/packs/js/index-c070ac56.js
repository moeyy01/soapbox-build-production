import{u as T,c as _,f as x,t as w,r as l,p as r,a4 as R,a5 as b,a6 as c,a7 as A,_ as e,a8 as E,G as u,K as m,N as P,a2 as k,n as F}from"../index-961d4ed1.js";import{P as H}from"./pull-to-refresh-b67e1521.js";import{T as L}from"./timeline-69e892a4.js";import"./scroll-top-button-ff8ae8be.js";import"./status-list-e5eaf038.js";import"./scrollable-list-74021d3b.js";import"./index-c72bc579.js";import"./load-more-1869fbc1.js";import"./status-container-8c0c48ff.js";import"./pending-status-d95ac051.js";import"./poll-preview-bd47b324.js";import"./noop-33ff36b4.js";const N=F({title:{id:"column.home",defaultMessage:"Home"}}),Q=()=>{const h=T(),o=_(),g=x(),d=w(),i=l.useRef(null),p=r(t=>{var s;return((s=t.timelines.get("home"))==null?void 0:s.isPartial)===!0}),a=r(t=>{var s;return(s=t.timelines.get("home"))==null?void 0:s.feedAccountId}),n=r(t=>a?t.relationships.get(a):null),v=r(t=>{var s;return(s=t.timelines.get("home"))==null?void 0:s.next}),y=t=>{o(c({url:v,maxId:t,accountId:a}))},I=()=>{p?i.current=setInterval(()=>{o(c())},3e3):f()},f=()=>{i.current&&(clearInterval(i.current),i.current=null)},M=()=>o(c({accountId:a}));return l.useEffect(()=>(I(),()=>{f()}),[p]),l.useEffect(()=>{a&&o(R([a]))},[]),l.useEffect(()=>{n&&!(n!=null&&n.following)&&(o(b()),o(c({},()=>{o(A())})))},[a]),e(k,{label:h.formatMessage(N.title),transparent:!0,withHeader:!1},void 0,e(H,{onRefresh:M},void 0,e(L,{scrollKey:"home_timeline",onLoadMore:y,timelineId:"home",divideType:"space",showAds:!0,emptyMessage:e(E,{space:1},void 0,e(u,{size:"xl",weight:"medium",align:"center"},void 0,e(m,{id:"empty_column.home.title",defaultMessage:"You're not following anyone yet"})),e(u,{theme:"muted",align:"center"},void 0,e(m,{id:"empty_column.home.subtitle",defaultMessage:"{siteTitle} gets more interesting once you follow other users.",values:{siteTitle:d.title}})),g.federating&&e(u,{theme:"muted",align:"center"},void 0,e(m,{id:"empty_column.home",defaultMessage:"Or you can visit {public} to get started and meet other users.",values:{public:e(P,{to:"/timeline/local",className:"text-primary-600 hover:underline dark:text-primary-400"},void 0,e(m,{id:"empty_column.home.local_tab",defaultMessage:"the {site_title} tab",values:{site_title:d.title}}))}})))})))};export{Q as default};