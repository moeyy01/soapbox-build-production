import{R as A,_ as e,P as G,H as X,a as le,b as ce,u as O,c as K,d as Z,f as re,v as ee,I as y,g as B,i as E,k as te,l as oe,m as S,T as ue,n as Y,s as de,r as m,o as fe,p as w,q as me,t as pe,w as ge,x as ve,y as he,z as L,A as _e,B as Q,C as ye,D as Me,E as be,F as H,G as we,J as je,K as U,L as ke,M as $,N as qe,O as xe,Q as Ne,S as Re,U as Ce,V,W as Ie,X as Pe,Y as Se,Z as z,$ as W,a0 as P,a1 as Le,a2 as Fe,a3 as Te}from"../index-961d4ed1.js";import{P as De}from"./pull-to-refresh-b67e1521.js";import{S as He}from"./scroll-top-button-ff8ae8be.js";import{S as $e}from"./scrollable-list-74021d3b.js";import{v as ze}from"./mood-smile-6a052395.js";import{S as Ae}from"./status-container-8c0c48ff.js";import"./index-c72bc579.js";import"./load-more-1869fbc1.js";const Be=()=>e("div",{className:"bg-white px-4 py-6 dark:bg-primary-900 sm:p-6"},void 0,e("div",{className:"w-full animate-pulse"},void 0,e("div",{className:"mb-2"},void 0,e(G,{minLength:20,maxLength:20})),e("div",{},void 0,e(X,{space:3,alignItems:"center"},void 0,e("div",{className:"shrink-0"},void 0,e(le,{size:48})),e("div",{className:"min-w-0 flex-1"},void 0,e(ce,{minLength:3,maxLength:25})))),e("div",{className:"mt-4"},void 0,e(G,{minLength:5,maxLength:120})))),Ee=A.memo(Be),v=Y({all:{id:"notifications.filter.all",defaultMessage:"All"},mentions:{id:"notifications.filter.mentions",defaultMessage:"Mentions"},favourites:{id:"notifications.filter.favourites",defaultMessage:"Likes"},boosts:{id:"notifications.filter.boosts",defaultMessage:"Reposts"},polls:{id:"notifications.filter.polls",defaultMessage:"Poll results"},follows:{id:"notifications.filter.follows",defaultMessage:"Follows"},emoji_reacts:{id:"notifications.filter.emoji_reacts",defaultMessage:"Emoji reacts"},statuses:{id:"notifications.filter.statuses",defaultMessage:"Updates from people you follow"}}),Ue=()=>{const t=O(),l=K(),d=Z(),r=re(),n=d.getIn(["notifications","quickFilter","active"]),u=d.getIn(["notifications","quickFilter","advanced"]),o=M=>()=>l(de(M)),c=[{text:t.formatMessage(v.all),action:o("all"),name:"all"}];return u?(c.push({text:e(y,{src:ee}),title:t.formatMessage(v.mentions),action:o("mention"),name:"mention"}),c.push({text:e(y,{src:B}),title:t.formatMessage(v.favourites),action:o("favourite"),name:"favourite"}),r.emojiReacts&&c.push({text:e(y,{src:ze}),title:t.formatMessage(v.emoji_reacts),action:o("pleroma:emoji_reaction"),name:"pleroma:emoji_reaction"}),c.push({text:e(y,{src:E}),title:t.formatMessage(v.boosts),action:o("reblog"),name:"reblog"}),c.push({text:e(y,{src:te}),title:t.formatMessage(v.polls),action:o("poll"),name:"poll"}),c.push({text:e(y,{src:oe}),title:t.formatMessage(v.statuses),action:o("status"),name:"status"}),c.push({text:e(y,{src:S}),title:t.formatMessage(v.follows),action:o("follow"),name:"follow"})):c.push({text:t.formatMessage(v.mentions),action:o("mention"),name:"mention"}),e(ue,{items:c,activeItem:n})},Oe="/packs/assets/calendar-time-e551770b.svg",Ke=(t,l,d)=>{const r=[l];return r.push(t.formatDate(d,{hour:"2-digit",minute:"2-digit",month:"short",day:"numeric"})),r.join(", ")},Ye=t=>e("bdi",{},void 0,e(qe,{className:"font-bold text-gray-800 hover:underline dark:text-gray-200",title:t.acct,to:`/@${t.acct}`,dangerouslySetInnerHTML:{__html:t.display_name_html}})),Ge={follow:S,follow_request:S,mention:ee,favourite:B,group_favourite:B,reblog:E,group_reblog:E,status:oe,poll:te,move:xe,"pleroma:chat_mention":Ne,"pleroma:emoji_reaction":Re,user_approved:S,update:Ce,"pleroma:event_reminder":Oe,"pleroma:participation_request":V,"pleroma:participation_accepted":V},Qe=Ie({id:"notification.name",defaultMessage:"{link}{others}"}),ae=Y({follow:{id:"notification.follow",defaultMessage:"{name} followed you"},follow_request:{id:"notification.follow_request",defaultMessage:"{name} has requested to follow you"},mention:{id:"notification.mentioned",defaultMessage:"{name} mentioned you"},favourite:{id:"notification.favourite",defaultMessage:"{name} liked your post"},group_favourite:{id:"notification.group_favourite",defaultMessage:"{name} liked your group post"},reblog:{id:"notification.reblog",defaultMessage:"{name} reposted your post"},group_reblog:{id:"notification.group_reblog",defaultMessage:"{name} reposted your group post"},status:{id:"notification.status",defaultMessage:"{name} just posted"},poll:{id:"notification.poll",defaultMessage:"A poll you have voted in has ended"},move:{id:"notification.move",defaultMessage:"{name} moved to {targetName}"},"pleroma:chat_mention":{id:"notification.pleroma:chat_mention",defaultMessage:"{name} sent you a message"},"pleroma:emoji_reaction":{id:"notification.pleroma:emoji_reaction",defaultMessage:"{name} reacted to your post"},user_approved:{id:"notification.user_approved",defaultMessage:"Welcome to {instance}!"},update:{id:"notification.update",defaultMessage:"{name} edited a post you interacted with"},"pleroma:event_reminder":{id:"notification.pleroma:event_reminder",defaultMessage:"An event you are participating in starts soon"},"pleroma:participation_request":{id:"notification.pleroma:participation_request",defaultMessage:"{name} wants to join your event"},"pleroma:participation_accepted":{id:"notification.pleroma:participation_accepted",defaultMessage:"You were accepted to join the event"}}),Ve=(t,l,d,r,n,u)=>{const o=Ye(d),c=t.formatMessage(Qe,{link:o,others:r&&r>0?e(U,{id:"notification.others",defaultMessage:" + {count, plural, one {# other} other {# others}}",values:{count:r-1}}):""});return t.formatMessage(ae[l],{name:c,targetName:n,instance:u})},b=48,We=t=>{const{hidden:l=!1,onMoveUp:d,onMoveDown:r}=t,n=K(),u=m.useCallback(fe(),[]),o=w(f=>u(f,t.notification)),c=me(),M=O(),j=pe(),p=o.type,{account:a,status:i}=o,k=()=>({reply:N,favourite:R,boost:C,mention:N,open:q,openProfile:x,moveUp:I,moveDown:h,toggleHidden:F}),q=()=>{i&&typeof i=="object"&&a&&typeof a=="object"?c.push(`/@${a.acct}/posts/${i.id}`):x()},x=()=>{a&&typeof a=="object"&&c.push(`/@${a.acct}`)},N=m.useCallback(f=>{f==null||f.preventDefault(),a&&typeof a=="object"&&n(ge(a))},[a]),R=m.useCallback(f=>{i&&typeof i=="object"&&(i.favourited?n(ve(i)):n(he(i)))},[i]),C=m.useCallback(f=>{i&&typeof i=="object"&&n((Xe,ie)=>{const se=L(ie()).get("boostModal");i.reblogged?n(_e(i)):f!=null&&f.shiftKey||!se?n(Q(i)):n(ye("BOOST",{status:i,onReblog:ne=>{n(Q(ne))}}))})},[i]),F=m.useCallback(f=>{i&&typeof i=="object"&&(i.hidden?n(Me(i.id)):n(be(i.id)))},[i]),I=()=>{d&&d(o.id)},h=()=>{r&&r(o.id)},T=()=>p==="pleroma:emoji_reaction"&&o.emoji?e(ke,{emoji:o.emoji,src:o.emoji_url||void 0,className:"h-4 w-4 flex-none"}):H(p)?e(y,{src:Ge[p],className:"flex-none text-primary-600 dark:text-primary-400"}):null,D=()=>{switch(p){case"follow":case"user_approved":return a&&typeof a=="object"?e($,{id:a.id,hidden:l,avatarSize:b,withRelationship:!0}):null;case"follow_request":return a&&typeof a=="object"?e($,{id:a.id,hidden:l,avatarSize:b,actionType:"follow_request",withRelationship:!0}):null;case"move":return a&&typeof a=="object"&&o.target&&typeof o.target=="object"?e($,{id:o.target.id,hidden:l,avatarSize:b,withRelationship:!0}):null;case"favourite":case"group_favourite":case"mention":case"reblog":case"group_reblog":case"status":case"poll":case"update":case"pleroma:emoji_reaction":case"pleroma:event_reminder":case"pleroma:participation_accepted":case"pleroma:participation_request":return i&&typeof i=="object"?e(Ae,{id:i.id,hidden:l,onMoveDown:h,onMoveUp:I,avatarSize:b,contextType:"notifications",showGroup:!1}):null;default:return null}},s=o.target&&typeof o.target=="object"?o.target.acct:"",_=H(p)&&a&&typeof a=="object"?Ve(M,p,a,o.total_count,s,j.title):null,g=H(p)?Ke(M,M.formatMessage(ae[p],{name:a&&typeof a=="object"?a.acct:"",targetName:s}),o.created_at):"";return e(je,{handlers:k(),"data-testid":"notification"},void 0,e("div",{className:"notification focusable",tabIndex:0,"aria-label":g},void 0,e("div",{className:"focusable p-4"},void 0,e("div",{className:"mb-2"},void 0,e(X,{alignItems:"center",space:3},void 0,e("div",{className:"flex justify-end",style:{flexBasis:b}},void 0,T()),e("div",{className:"truncate"},void 0,e(we,{theme:"muted",size:"xs",truncate:!0,"data-testid":"message"},void 0,_)))),e("div",{},void 0,D()))))},J=Y({title:{id:"column.notifications",defaultMessage:"Notifications"},queue:{id:"notifications.queue_label",defaultMessage:"Click to see {count} new {count, plural, one {notification} other {notifications}}"}}),Je=Pe([t=>L(t).getIn(["notifications","quickFilter","show"]),t=>L(t).getIn(["notifications","quickFilter","active"]),t=>Se(L(t).getIn(["notifications","shows"]).filter(l=>!l).keys()),t=>t.notifications.items.toList()],(t,l,d,r)=>!t||l==="all"?r.filterNot(n=>n!==null&&d.includes(n.get("type"))):r.filter(n=>n!==null&&l===n.get("type"))),lt=()=>{const t=K(),l=O(),d=Z(),r=d.getIn(["notifications","quickFilter","show"]),n=d.getIn(["notifications","quickFilter","active"]),u=w(s=>Je(s)),o=w(s=>s.notifications.isLoading),c=w(s=>s.notifications.hasMore),M=w(s=>s.notifications.totalQueuedNotificationsCount||0),j=m.useRef(null),p=m.useRef(null),a=m.useRef(null),i=m.useCallback(z(()=>{const s=u.last();t(W({maxId:s&&s.get("id")}))},300,{leading:!0}),[u]),k=m.useCallback(z(()=>{t(P(!0))},100),[]),q=m.useCallback(z(()=>{t(P(!1))},100),[]),x=s=>{const _=u.findIndex(g=>g!==null&&g.get("id")===s)-1;R(_)},N=s=>{const _=u.findIndex(g=>g!==null&&g.get("id")===s)+1;R(_)},R=s=>{var _;(_=j.current)==null||_.scrollIntoView({index:s,behavior:"smooth",done:()=>{const g=p.current,f=g==null?void 0:g.querySelector(`[data-index="${s}"] .focusable`);f&&f.focus()}})},C=()=>{t(Te())},F=()=>t(W());m.useEffect(()=>(C(),t(P(!0)),()=>{i.cancel(),k.cancel(),q.cancel(),t(P(!1))}),[]);const I=n==="all"?e(U,{id:"empty_column.notifications",defaultMessage:"You don't have any notifications yet. Interact with others to start the conversation."}):e(U,{id:"empty_column.notifications_filtered",defaultMessage:"You don't have any notifications of this type yet."});let h=null;const T=r?e(Ue,{}):null;o&&a.current?h=a.current:u.size>0||c?h=u.map(s=>e(We,{notification:s,onMoveUp:x,onMoveDown:N},s.id)):h=null,a.current=h;const D=A.createElement($e,{ref:j,scrollKey:"notifications",isLoading:o,showLoading:o&&u.size===0,hasMore:c,emptyMessage:I,placeholderComponent:Ee,placeholderCount:20,onLoadMore:i,onScrollToTop:k,onScroll:q,className:Le({"divide-y divide-gray-200 dark:divide-primary-800 divide-solid":u.size>0,"space-y-2":u.size===0})},h);return A.createElement(Fe,{ref:p,label:l.formatMessage(J.title),withHeader:!1},T,e(He,{onClick:C,count:M,message:J.queue}),e(De,{onRefresh:F},void 0,D))};export{lt as default};