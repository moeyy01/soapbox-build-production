import{c as p,u as f,f as h,p as a,Z as M,io as r,r as w,_ as s,G as S,K as b,a2 as c,a8 as v,M as u,n as A}from"../index-961d4ed1.js";import{S as L}from"./scrollable-list-74021d3b.js";import"./index-c72bc579.js";import"./load-more-1869fbc1.js";const l=A({heading:{id:"followRecommendations.heading",defaultMessage:"Suggested Profiles"}}),R=()=>{const n=p(),i=f(),g=h(),o=a(e=>e.suggestions.items),d=a(e=>!!e.suggestions.next),t=a(e=>e.suggestions.isLoading),m=M(()=>t?null:n(r({limit:20})),300);return w.useEffect(()=>{n(r({limit:20}))},[]),o.size===0&&!t?s(c,{label:i.formatMessage(l.heading)},void 0,s(S,{align:"center"},void 0,s(b,{id:"empty_column.follow_recommendations",defaultMessage:"Looks like no suggestions could be generated for you. You can try using search to look for people you might know or explore trending hashtags."}))):s(c,{label:i.formatMessage(l.heading)},void 0,s(v,{space:4},void 0,s(L,{isLoading:t,scrollKey:"suggestions",onLoadMore:m,hasMore:d,itemClassName:"pb-4"},void 0,g.truthSuggestions?o.map(e=>s(u,{id:e.account,withAccountNote:!0,showProfileHoverCard:!1,actionAlignment:"top"},e.account)):o.map(e=>s(u,{id:e.account,withAccountNote:!0},e.account)))))};export{R as default};