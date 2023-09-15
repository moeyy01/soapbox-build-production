import{u as z,dD as v,jR as q,jN as A,r as F,_ as e,aE as w,a2 as h,jY as y,K as E,n as G,b3 as P,H as S,bq as g}from"../index-961d4ed1.js";import{u as C}from"./useGroupMembers-90156dc5.js";import{A as I}from"./authorize-reject-buttons-6cf19ed4.js";import{S as N}from"./scrollable-list-74021d3b.js";import"./index-c72bc579.js";import"./load-more-1869fbc1.js";const m=G({heading:{id:"column.group_pending_requests",defaultMessage:"Pending requests"},authorizeFail:{id:"group.group_mod_authorize.fail",defaultMessage:"Failed to approve @{name}"},rejectFail:{id:"group.group_mod_reject.fail",defaultMessage:"Failed to reject @{name}"}}),x=d=>{let{account:s,onAuthorize:o,onReject:r}=d;return s?e(S,{space:1,alignItems:"center",justifyContent:"between",className:"p-2.5"},void 0,e("div",{className:"w-full"},void 0,e(P,{account:s,withRelationship:!1})),e(I,{onAuthorize:()=>o(s),onReject:()=>r(s),countdown:3e3})):null},T=d=>{let{params:s}=d;const o=s==null?void 0:s.groupId,r=z(),{group:a}=v(o),{accounts:c,authorize:f,reject:j,refetch:p,isLoading:R}=q(o),{invalidate:M}=C(o,A.USER);if(F.useEffect(()=>()=>{M()},[]),!a||!a.relationship||R)return e(h,{label:r.formatMessage(m.heading)},void 0,e(w,{}));if(!a.relationship.role||!["owner","admin","moderator"].includes(a.relationship.role))return e(y,{});async function b(t){return f(t.id).then(()=>Promise.resolve()).catch(n=>{var u,l;p();let i=r.formatMessage(m.authorizeFail,{name:t.username});return((u=n.response)==null?void 0:u.status)===409&&(i=((l=n.response)==null?void 0:l.data).error),g.error(i),Promise.reject()})}async function _(t){return j(t.id).then(()=>Promise.resolve()).catch(n=>{var u,l;p();let i=r.formatMessage(m.rejectFail,{name:t.username});return((u=n.response)==null?void 0:u.status)===409&&(i=((l=n.response)==null?void 0:l.data).error),g.error(i),Promise.reject()})}return e(h,{label:r.formatMessage(m.heading)},void 0,e(N,{scrollKey:"group_membership_requests",emptyMessage:e(E,{id:"empty_column.group_membership_requests",defaultMessage:"There are no pending membership requests for this group."})},void 0,c.map(t=>e(x,{account:t,onAuthorize:b,onReject:_},t.id))))};export{T as default};