import{u as r,_ as e,a8 as g,dw as b,G as u,K as o,I as m,i as f,bv as p,n as _}from"../index-961d4ed1.js";const t=_({cancel_reblog:{id:"status.cancel_reblog_private",defaultMessage:"Un-repost"},reblog:{id:"status.reblog",defaultMessage:"Repost"}}),v=a=>{let{status:s,onReblog:l,onClose:i}=a;const n=r(),c=()=>{l(s),i()},d=s.reblogged?t.cancel_reblog:t.reblog;return e(p,{title:e(o,{id:"boost_modal.title",defaultMessage:"Repost?"}),confirmationAction:c,confirmationText:n.formatMessage(d)},void 0,e(g,{space:4},void 0,e(b,{status:s,hideActions:!0}),e(u,{},void 0,e(o,{id:"boost_modal.combo",defaultMessage:"You can press {combo} to skip this next time",values:{combo:e("span",{},void 0,"Shift + ",e(m,{className:"inline-block align-middle",src:f}))}}))))};export{v as default};