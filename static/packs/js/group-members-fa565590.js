import{jJ as S,jK as w,jL as O,bn as F,c as q,f as D,u as W,jM as $,b4 as z,jN as t,r as U,O as E,jO as Q,f8 as J,_ as n,H as I,a1 as L,cQ as X,b3 as Y,n as V,C as G,jP as Z,bq as f,jQ as ee,dD as oe,jR as se,R as x}from"../index-961d4ed1.js";import{u as C}from"./useGroupMembers-90156dc5.js";import{P as re}from"./pending-items-row-950d92ee.js";import{S as ae}from"./scrollable-list-74021d3b.js";import{P as j}from"./placeholder-account-9a0f17de.js";import"./index-c72bc579.js";import"./load-more-1869fbc1.js";function te(m,i){const{createEntity:r}=S([F.GROUP_MEMBERSHIPS,i.id],{post:`/api/v1/groups/${m.id}/demote`},{schema:w.array(O).transform(o=>o[0])});return r}function ie(m,i){const{createEntity:r}=S([F.GROUP_MEMBERSHIPS,i.account.id],{post:`/api/v1/groups/${m.id}/promote`},{schema:w.array(O).transform(o=>o[0])});return r}const a=V({adminLimitTitle:{id:"group.member.admin.limit.title",defaultMessage:"Admin limit reached"},adminLimitSummary:{id:"group.member.admin.limit.summary",defaultMessage:"You can assign up to {count, plural, one {admin} other {admins}} for the group at this time."},blockConfirm:{id:"confirmations.block_from_group.confirm",defaultMessage:"Ban"},blockFromGroupHeading:{id:"confirmations.block_from_group.heading",defaultMessage:"Ban From Group"},blockFromGroupMessage:{id:"confirmations.block_from_group.message",defaultMessage:"Are you sure you want to ban @{name} from the group?"},blocked:{id:"group.group_mod_block.success",defaultMessage:"@{name} is banned"},demotedToUser:{id:"group.demote.user.success",defaultMessage:"@{name} is now a member"},groupModBlock:{id:"group.group_mod_block",defaultMessage:"Ban from group"},groupModDemote:{id:"group.group_mod_demote",defaultMessage:"Remove {role} role"},groupModKick:{id:"group.group_mod_kick",defaultMessage:"Kick @{name} from group"},groupModPromoteMod:{id:"group.group_mod_promote_mod",defaultMessage:"Assign {role} role"},kickConfirm:{id:"confirmations.kick_from_group.confirm",defaultMessage:"Kick"},kickFromGroupMessage:{id:"confirmations.kick_from_group.message",defaultMessage:"Are you sure you want to kick @{name} from this group?"},kicked:{id:"group.group_mod_kick.success",defaultMessage:"Kicked @{name} from group"},promoteConfirm:{id:"group.promote.admin.confirmation.title",defaultMessage:"Assign Admin Role"},promoteConfirmMessage:{id:"group.promote.admin.confirmation.message",defaultMessage:"Are you sure you want to assign the admin role to @{name}?"},promotedToAdmin:{id:"group.promote.admin.success",defaultMessage:"@{name} is now an admin"}}),ne=m=>{var N,P;const{canPromoteToAdmin:i,member:r,group:o}=m,u=q(),M=D(),s=W(),b=$(o,r.account),y=ie(o,r),k=te(o,r),{account:e,isLoading:A}=z(r.account.id),h=((N=o.relationship)==null?void 0:N.role)===t.OWNER,_=((P=o.relationship)==null?void 0:P.role)===t.ADMIN,l=r.role===t.OWNER,d=r.role===t.ADMIN,c=r.role===t.USER,R=()=>{u(G("CONFIRM",{message:s.formatMessage(a.kickFromGroupMessage,{name:e==null?void 0:e.username}),confirm:s.formatMessage(a.kickConfirm),onConfirm:()=>u(Z(o.id,e==null?void 0:e.id)).then(()=>f.success(s.formatMessage(a.kicked,{name:e==null?void 0:e.acct})))}))},g=()=>{u(G("CONFIRM",{heading:s.formatMessage(a.blockFromGroupHeading),message:s.formatMessage(a.blockFromGroupMessage,{name:e==null?void 0:e.username}),confirm:s.formatMessage(a.blockConfirm),onConfirm:()=>{b({account_ids:[r.account.id]},{onSuccess(){u(ee([r.id],F.GROUP_MEMBERSHIPS)),f.success(s.formatMessage(a.blocked,{name:e==null?void 0:e.acct}))}})}}))},K=()=>{if(!i){f.error(s.formatMessage(a.adminLimitTitle),{summary:s.formatMessage(a.adminLimitSummary,{count:B})});return}u(G("CONFIRM",{heading:s.formatMessage(a.promoteConfirm),message:s.formatMessage(a.promoteConfirmMessage,{name:e==null?void 0:e.username}),confirm:s.formatMessage(a.promoteConfirm),confirmationTheme:"primary",onConfirm:()=>{y({role:t.ADMIN,account_ids:[e==null?void 0:e.id]},{onSuccess(){f.success(s.formatMessage(a.promotedToAdmin,{name:e==null?void 0:e.acct}))}})}}))},T=()=>{k({role:t.USER,account_ids:[e==null?void 0:e.id]},{onSuccess(){f.success(s.formatMessage(a.demotedToUser,{name:e==null?void 0:e.acct}))}})},H=U.useMemo(()=>{var v;const p=[];return!o||!e||!((v=o.relationship)!=null&&v.role)||(h&&(c?p.push({text:s.formatMessage(a.groupModPromoteMod,{role:t.ADMIN}),icon:E,action:K}):d&&p.push({text:s.formatMessage(a.groupModDemote,{role:t.ADMIN,name:e.username}),icon:E,action:T,destructive:!0})),(h||_)&&(d||c)&&r.role!==o.relationship.role&&(M.groupsKick&&p.push({text:s.formatMessage(a.groupModKick,{name:e.username}),icon:Q,action:R}),p.push({text:s.formatMessage(a.groupModBlock,{name:e.username}),icon:J,action:g,destructive:!0}))),p},[o,e==null?void 0:e.id]);return A?n(j,{}):n(I,{alignItems:"center",justifyContent:"between","data-testid":"group-member-list-item"},void 0,n("div",{className:"w-full"},void 0,n(Y,{account:r.account,withRelationship:!1})),n(I,{alignItems:"center",space:2},void 0,l||d?n("span",{"data-testid":"role-badge",className:L("inline-flex items-center rounded px-2 py-1 text-xs font-medium capitalize",{"bg-primary-200 text-primary-500 dark:bg-primary-800 dark:text-primary-200":l,"bg-gray-200 text-gray-900 dark:bg-gray-800 dark:text-gray-100":d})},void 0,r.role):null,n(X,{items:H})))},B=5,fe=m=>{const{groupId:i}=m.params,r=D(),{group:o,isFetching:u}=oe(i),{groupMembers:M,isFetching:s}=C(i,t.OWNER),{groupMembers:b,isFetching:y}=C(i,t.ADMIN),{groupMembers:k,isFetching:e,fetchNextPage:A,hasNextPage:h}=C(i,t.USER),{isFetching:_,count:l}=se(i),d=u||s||y||e||_,c=U.useMemo(()=>[...M,...b,...k],[M,b,k]),R=r.groupsAdminMax?c.filter(g=>g.role===t.ADMIN).length<B:!0;return x.createElement(x.Fragment,null,n(ae,{scrollKey:"group-members",hasMore:h,onLoadMore:A,isLoading:!o||d,showLoading:!o||_||d&&c.length===0,placeholderComponent:j,placeholderCount:3,className:"divide-y divide-solid divide-gray-200 dark:divide-gray-800",itemClassName:"py-3 last:pb-0",prepend:l>0&&n("div",{className:L("py-3",{"border-b border-gray-200 dark:border-gray-800":c.length})},void 0,n(re,{to:`/group/${o==null?void 0:o.slug}/manage/requests`,count:l}))},void 0,c.map(g=>n(ne,{group:o,member:g,canPromoteToAdmin:R},g.account.id))))};export{B as MAX_ADMIN_COUNT,fe as default};