import{_ as e,N as n,H as a,bp as u,a8 as c,G as s,c7 as d,d8 as l,hd as g,K as r,R as i,c_ as p,jH as h}from"../index-961d4ed1.js";const _=o=>{const{group:t,withJoinAction:m=!0}=o;return e(a,{alignItems:"center",justifyContent:"between","data-testid":"group-list-item"},void 0,e(n,{to:`/group/${t.slug}`,className:"overflow-hidden"},t.id,e(a,{alignItems:"center",space:2},void 0,e(u,{group:t,size:44}),e(c,{className:"overflow-hidden"},void 0,e(s,{weight:"bold",dangerouslySetInnerHTML:{__html:t.display_name_html},truncate:!0}),e(a,{className:"text-gray-700 dark:text-gray-600",space:1,alignItems:"center"},void 0,e(d,{className:"h-4.5 w-4.5",src:t.locked?l:g}),e(s,{theme:"inherit",tag:"span",size:"sm",weight:"medium"},void 0,t.locked?e(r,{id:"group.privacy.locked",defaultMessage:"Private"}):e(r,{id:"group.privacy.public",defaultMessage:"Public"})),typeof t.members_count<"u"&&i.createElement(i.Fragment,null,e("span",{},void 0,"•"),e(s,{theme:"inherit",tag:"span",size:"sm",weight:"medium"},void 0,p(t.members_count)," ",e(r,{id:"groups.discover.search.results.member_count",defaultMessage:"{members, plural, one {member} other {members}}",values:{members:t.members_count}}))))))),m&&e(h,{group:t}))};export{_ as G};
