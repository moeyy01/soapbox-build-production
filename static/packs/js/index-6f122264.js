import{c as r,b4 as i,_ as e,b3 as d,b5 as p,b6 as f,Z as m,b7 as h,u as w,p as u,R as q,b8 as _,aE as R,a2 as c,n as g,K as b}from"../index-961d4ed1.js";import{S as A}from"./scrollable-list-74021d3b.js";import{A as M}from"./authorize-reject-buttons-6cf19ed4.js";import"./index-c72bc579.js";import"./load-more-1869fbc1.js";const v=o=>{let{id:t}=o;const a=r(),{account:l}=i(t),n=()=>a(p(t)),s=()=>a(f(t));return l?e("div",{className:"p-2.5"},void 0,e(d,{account:l,action:e(M,{onAuthorize:n,onReject:s,countdown:3e3})})):null},F=g({heading:{id:"column.follow_requests",defaultMessage:"Follow requests"}}),y=m(o=>{o(h())},300,{leading:!0}),L=()=>{const o=r(),t=w(),a=u(s=>s.user_lists.follow_requests.items),l=u(s=>!!s.user_lists.follow_requests.next);if(q.useEffect(()=>{o(_())},[]),!a)return e(c,{},void 0,e(R,{}));const n=e(b,{id:"empty_column.follow_requests",defaultMessage:"You don't have any follow requests yet. When you receive one, it will show up here."});return e(c,{label:t.formatMessage(F.heading)},void 0,e(A,{scrollKey:"follow_requests",onLoadMore:()=>y(o),hasMore:l,emptyMessage:n},void 0,a.map(s=>e(v,{id:s},s))))};export{L as default};
