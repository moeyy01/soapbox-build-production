import{_ as e,a8 as M,el as v,em as h,u as ae,c as se,q as ne,f as ie,d as oe,b9 as le,R as g,de as ce,H as m,I as b,K as f,N as R,cB as re,jb as de,c_ as ue,jc as ge,gV as me,G as fe,f3 as pe,f4 as ve,aI as he,cs as Me,f5 as ke,jd as _e,f7 as be,je as xe,ay as Re,az as Ce,af as Pe,jf as ye,n as Se,C as d,Y as qe,gW as Ne,bU as je,cj as Ee,jg as we,ha as Ie,i as Ae,jh as De,h3 as Be,h4 as Te,aJ as x,v as He,Q as Oe,d7 as Le,hf as Ue,f8 as C,fJ as Fe,ji as ze,U as Ve,iI as Qe,jj as Je,jk as $e,jl as Ge,jm as Ke,jn as We,jo as Ye,jp as Ze,w as Xe,jq as et,jr as tt,js as at,c6 as P,fI as y,bN as S,jt as st,g3 as nt,ju as it}from"../index-961d4ed1.js";import{d as ot}from"./download-2e3dfb39.js";const lt="/packs/assets/flag-3-9139db0c.svg",ct="/packs/assets/calendar-plus-787c1599.svg",rt=()=>{const k=h(5,25),t=h(5,30),a=h(5,30),o=h(5,30);return e(M,{className:"animate-pulse text-primary-50 dark:text-primary-800",space:2},void 0,e("p",{className:"text-lg"},void 0,v(k)),e(M,{space:1},void 0,e("p",{},void 0,v(t)),e("p",{},void 0,v(a)),e("p",{},void 0,v(o))))},n=Se({bannerHeader:{id:"event.banner",defaultMessage:"Event banner"},exportIcs:{id:"event.export_ics",defaultMessage:"Export to your calendar"},copy:{id:"event.copy",defaultMessage:"Copy link to event"},external:{id:"event.external",defaultMessage:"View event on {domain}"},bookmark:{id:"status.bookmark",defaultMessage:"Bookmark"},unbookmark:{id:"status.unbookmark",defaultMessage:"Remove bookmark"},quotePost:{id:"event.quote",defaultMessage:"Quote event"},reblog:{id:"event.reblog",defaultMessage:"Repost event"},unreblog:{id:"event.unreblog",defaultMessage:"Un-repost event"},pin:{id:"status.pin",defaultMessage:"Pin on profile"},unpin:{id:"status.unpin",defaultMessage:"Unpin from profile"},delete:{id:"status.delete",defaultMessage:"Delete"},mention:{id:"status.mention",defaultMessage:"Mention @{name}"},chat:{id:"status.chat",defaultMessage:"Chat with @{name}"},direct:{id:"status.direct",defaultMessage:"Direct message @{name}"},mute:{id:"account.mute",defaultMessage:"Mute @{name}"},block:{id:"account.block",defaultMessage:"Block @{name}"},report:{id:"status.report",defaultMessage:"Report @{name}"},adminAccount:{id:"status.admin_account",defaultMessage:"Moderate @{name}"},adminStatus:{id:"status.admin_status",defaultMessage:"Open this post in the moderation interface"},markStatusSensitive:{id:"admin.statuses.actions.mark_status_sensitive",defaultMessage:"Mark post sensitive"},markStatusNotSensitive:{id:"admin.statuses.actions.mark_status_not_sensitive",defaultMessage:"Mark post not sensitive"},deleteStatus:{id:"admin.statuses.actions.delete_status",defaultMessage:"Delete post"},blockConfirm:{id:"confirmations.block.confirm",defaultMessage:"Block"},blockAndReport:{id:"confirmations.block.block_and_report",defaultMessage:"Block & Report"},deleteConfirm:{id:"confirmations.delete_event.confirm",defaultMessage:"Delete"},deleteHeading:{id:"confirmations.delete_event.heading",defaultMessage:"Delete event"},deleteMessage:{id:"confirmations.delete_event.message",defaultMessage:"Are you sure you want to delete this event?"}}),gt=k=>{let{status:t}=k;const a=ae(),o=se(),q=ne(),p=ie(),N=oe(),{account:c}=le(),j=c?c.staff:!1,E=c?c.admin:!1;if(!t||!t.event)return g.createElement(g.Fragment,null,e("div",{className:"-mx-4 -mt-4"},void 0,e("div",{className:"relative h-32 w-full bg-gray-200 dark:bg-gray-900/50 md:rounded-t-xl lg:h-48"})),e(rt,{}));const l=t.account,r=t.event,_=r.banner,u=l.username,w=s=>{s.preventDefault(),s.stopPropagation(),o(d("MEDIA",{media:qe([r.banner])}))},I=()=>{o($e(t.id)).then(s=>{let{data:i}=s;ot(i,"calendar.ics")}).catch(()=>{})},A=()=>{const{uri:s}=t;Ge(s)},D=()=>{window.open(t.uri,"_blank")},B=()=>{o(Ke(t))},T=()=>{const s=()=>o(it(t));N.get("boostModal")?o(d("BOOST",{status:t,onReblog:s})):s()},H=()=>{o(We(t))},O=()=>{o(Ye(t))},L=()=>{o(d("CONFIRM",{icon:x,heading:a.formatMessage(n.deleteHeading),message:a.formatMessage(n.deleteMessage),confirm:a.formatMessage(n.deleteConfirm),onConfirm:()=>o(Ze(t.id))}))},U=()=>{o(Xe(l))},F=()=>{o(et(l.id,q))},z=()=>{o(tt(l))},V=()=>{o(at(l))},Q=()=>{o(d("CONFIRM",{icon:C,heading:e(f,{id:"confirmations.block.heading",defaultMessage:"Block @{name}",values:{name:l.acct}}),message:e(f,{id:"confirmations.block.message",defaultMessage:"Are you sure you want to block {name}?",values:{name:e("strong",{},void 0,"@",l.acct)}}),confirm:a.formatMessage(n.blockConfirm),onConfirm:()=>o(P(l.id)),secondary:a.formatMessage(n.blockAndReport),onSecondary:()=>{o(P(l.id)),o(y(S.STATUS,l,{status:t}))}}))},J=()=>{o(y(S.STATUS,l,{status:t}))},$=()=>{o(d("ACCOUNT_MODERATION",{accountId:l.id}))},G=()=>{window.open(`/pleroma/admin/#/statuses/${t.id}/`,"_blank")},K=()=>{o(st(a,t.id,t.sensitive))},W=()=>{o(nt(a,t.id))},Y=()=>{const s=l.fqn.split("@")[1],i=[{text:a.formatMessage(n.exportIcs),action:I,icon:ct},{text:a.formatMessage(n.copy),action:A,icon:Ne}];return p.federating&&je(l)&&i.push({text:a.formatMessage(n.external,{domain:s}),action:D,icon:Ee}),c&&(p.bookmarks&&i.push({text:a.formatMessage(t.bookmarked?n.unbookmark:n.bookmark),action:B,icon:t.bookmarked?we:Ie}),["public","unlisted"].includes(t.visibility)&&(i.push({text:a.formatMessage(t.reblogged?n.unreblog:n.reblog),action:T,icon:Ae}),p.quotePosts&&i.push({text:a.formatMessage(n.quotePost),action:H,icon:De})),i.push(null),c.id===l.id?(["public","unlisted"].includes(t.visibility)&&i.push({text:a.formatMessage(t.pinned?n.unpin:n.pin),action:O,icon:t.pinned?Be:Te}),i.push({text:a.formatMessage(n.delete),action:L,icon:x,destructive:!0})):(i.push({text:a.formatMessage(n.mention,{name:u}),action:U,icon:He}),t.getIn(["account","pleroma","accepts_chat_messages"])===!0?i.push({text:a.formatMessage(n.chat,{name:u}),action:F,icon:Oe}):p.privacyScopes&&i.push({text:a.formatMessage(n.direct,{name:u}),action:z,icon:Le}),i.push(null),i.push({text:a.formatMessage(n.mute,{name:u}),action:V,icon:Ue}),i.push({text:a.formatMessage(n.block,{name:u}),action:Q,icon:C}),i.push({text:a.formatMessage(n.report,{name:u}),action:J,icon:Fe})),j&&(i.push(null),i.push({text:a.formatMessage(n.adminAccount,{name:l.username}),action:$,icon:ze}),E&&i.push({text:a.formatMessage(n.adminStatus),action:G,icon:Ve}),i.push({text:a.formatMessage(t.sensitive===!1?n.markStatusSensitive:n.markStatusNotSensitive),action:K,icon:Qe}),l.id!==(c==null?void 0:c.id)&&i.push({text:a.formatMessage(n.deleteStatus),action:W,icon:x,destructive:!0}))),i},Z=s=>{s.stopPropagation(),o(Je(t.id))},X=s=>{s.preventDefault(),s.stopPropagation(),o(c?d("EVENT_PARTICIPANTS",{statusId:t.id}):d("UNAUTHORIZED"))};return g.createElement(g.Fragment,null,e("div",{className:"-mx-4 -mt-4"},void 0,e("div",{className:"relative h-32 w-full bg-gray-200 dark:bg-gray-900/50 md:rounded-t-xl lg:h-48"},void 0,_&&e("a",{href:_.url,onClick:w,target:"_blank"},void 0,e(ce,{src:_.url,alt:a.formatMessage(n.bannerHeader),className:"absolute inset-0 h-full object-cover md:rounded-t-xl"})))),e(M,{space:2},void 0,e(m,{className:"w-full",alignItems:"start",space:2},void 0,e(fe,{className:"grow",size:"lg",weight:"bold"},void 0,r.name),e(pe,{},void 0,e(ve,{as:he,src:Me,theme:"outlined",className:"h-[30px] px-2",iconClassName:"h-4 w-4",children:null}),e(ke,{},void 0,Y().map((s,i)=>{if(typeof(s==null?void 0:s.text)>"u")return e(_e,{},i);{const ee=s.action?be:xe,te=s.action?{onSelect:s.action}:{to:s.to,as:R,target:s.target||"_self"};return g.createElement(ee,Re({key:i},te,{className:"group"}),e("div",{className:"flex items-center"},void 0,s.icon&&e(Ce,{src:s.icon,className:"mr-3 h-5 w-5 flex-none text-gray-400 group-hover:text-gray-500"}),e("div",{className:"truncate"},void 0,s.text)))}}))),l.id===(c==null?void 0:c.id)?e(Pe,{size:"sm",theme:"secondary",onClick:Z},void 0,e(f,{id:"event.manage",defaultMessage:"Manage"})):e(ye,{status:t})),e(M,{space:1},void 0,e(m,{alignItems:"center",space:2},void 0,e(b,{src:lt}),e("span",{},void 0,e(f,{id:"event.organized_by",defaultMessage:"Organized by {name}",values:{name:e(R,{className:"mention inline-block",to:`/@${l.acct}`},void 0,e(m,{space:1,alignItems:"center",grow:!0},void 0,e("span",{dangerouslySetInnerHTML:{__html:l.display_name_html}}),l.verified&&e(re,{})))}}))),e(m,{alignItems:"center",space:2},void 0,e(b,{src:de}),e("a",{href:"#",className:"hover:underline",onClick:X},void 0,e("span",{},void 0,e(f,{id:"event.participants",defaultMessage:"{count} {rawCount, plural, one {person} other {people}} going",values:{rawCount:r.participants_count||0,count:ue(r.participants_count||0)}})))),e(ge,{status:t}),r.location&&e(m,{alignItems:"center",space:2},void 0,e(b,{src:me}),e("span",{},void 0,r.location.get("name"))))))};export{gt as default};
