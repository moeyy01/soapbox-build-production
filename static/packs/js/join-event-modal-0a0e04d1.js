import{u as f,c as M,r as c,_ as t,bG as v,b_ as b,K as j,bv as _,n as y,bw as E,ja as w}from"../index-961d4ed1.js";const s=y({hint:{id:"join_event.hint",defaultMessage:"You can tell the organizer why do you want to participate in this event:"},placeholder:{id:"join_event.placeholder",defaultMessage:"Message to organizer"},join:{id:"join_event.join",defaultMessage:"Request join"}}),K=d=>{let{statusId:u}=d;const a=f(),n=M(),[o,g]=c.useState(""),[i,h]=c.useState(!1),l=()=>{n(E("JOIN_EVENT"))},p=e=>{g(e.target.value)},r=()=>{h(!0),n(w(u,o)).then(()=>{l()}).catch(()=>{})},m=e=>{e.key==="Enter"&&(e.ctrlKey||e.metaKey)&&r()};return t(_,{title:t(j,{id:"join_event.title",defaultMessage:"Join event"}),onClose:l,confirmationAction:r,confirmationText:a.formatMessage(s.join),confirmationDisabled:i},void 0,t(v,{labelText:a.formatMessage(s.hint)},void 0,t(b,{placeholder:a.formatMessage(s.placeholder),value:o,onChange:p,onKeyDown:m,disabled:i,autoFocus:!0})))};export{K as default};
