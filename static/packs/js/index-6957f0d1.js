import{c as R,aB as $,aW as O,p as r,b1 as w,r as g,b2 as v,_ as i,aE as L,a2 as u,aF as z,K as _,R as C,C as y}from"../index-961d4ed1.js";import{L as b}from"./load-more-1869fbc1.js";import{M as D}from"./media-item-14a28054.js";import"./volume-08f8a8f1.js";const k=d=>{let{maxId:c,onLoadMore:a}=d;return i(b,{onClick:()=>{a(c)}})},P=()=>{const d=R(),{username:c}=$(),{account:a,isLoading:m,isUnavailable:h}=O(c,{withRelationship:!0}),o=r(e=>w(e,a.id)),t=r(e=>{var s;return(s=e.timelines.get(`account:${a==null?void 0:a.id}:media`))==null?void 0:s.isLoading}),p=r(e=>{var s;return(s=e.timelines.get(`account:${a==null?void 0:a.id}:media`))==null?void 0:s.hasMore}),x=r(e=>{var s;return(s=e.timelines.get(`account:${a==null?void 0:a.id}:media`))==null?void 0:s.next}),A=g.useRef(null),E=()=>{p&&f(o.size>0?o.last().status.id:void 0)},f=e=>{a&&d(v(a.id,{url:x,maxId:e}))},I=e=>{e.preventDefault(),E()},N=e=>{if(e.type==="video")d(y("VIDEO",{media:e,status:e.status,account:e.account}));else{const s=e.status.media_attachments,n=s.findIndex(l=>l.id===e.id);d(y("MEDIA",{media:s,index:n,status:e.status}))}};if(g.useEffect(()=>{a&&d(v(a.id))},[a==null?void 0:a.id]),m||!o&&t)return i(u,{},void 0,i(L,{}));if(!a)return i(z,{});let M=null;return p&&!(t&&o.size===0)&&(M=i(b,{className:"my-auto",visible:!t,onClick:I})),h?i(u,{},void 0,i("div",{className:"empty-column-indicator"},void 0,i(_,{id:"empty_column.account_unavailable",defaultMessage:"Profile unavailable"}))):i(u,{label:`@${a.acct}`,transparent:!0,withHeader:!1},void 0,C.createElement("div",{role:"feed",className:"grid grid-cols-2 gap-2 sm:grid-cols-3",ref:A},o.map((e,s)=>{var n,l;return e===null?i(k,{maxId:s>0&&((n=o.get(s-1))==null?void 0:n.id)||null,onLoadMore:f},"more:"+((l=o.get(s+1))==null?void 0:l.id)):i(D,{attachment:e,onOpenMedia:N},`${e.status.id}+${e.id}`)}),!t&&o.size===0&&i("div",{className:"empty-column-indicator col-span-2 sm:col-span-3"},void 0,i(_,{id:"account_gallery.none",defaultMessage:"No media to show."})),M),t&&o.size===0&&i("div",{className:"slist__append"},void 0,i(L,{})))};export{P as default};
