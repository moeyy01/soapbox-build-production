import{v as m}from"./dots-vertical-68cbc8e2.js";import{dU as u,u as p,c as l,b9 as f,p as g,_ as e,K as _,cQ as M,fd as I,n as R,C as E}from"../index-961d4ed1.js";import{W as F}from"./widget-a1deeca4.js";import{I as h}from"./instance-restrictions-b4a0ddfe.js";import"./arrow-right-b75290c7.js";const v=u(),A=R({editFederation:{id:"remote_instance.edit_federation",defaultMessage:"Edit federation"}}),O=n=>{let{host:s}=n;const a=p(),o=l(),{account:t}=f(),i=g(c=>v(c,s)),r=()=>{o(E("EDIT_FEDERATION",{host:s}))},d=(()=>[{text:a.formatMessage(A.editFederation),action:r,icon:I}])();return e(F,{title:e(_,{id:"remote_instance.federation_panel.heading",defaultMessage:"Federation Restrictions"}),action:t!=null&&t.admin?e(M,{items:d,src:m}):void 0},void 0,e(h,{remoteInstance:i}))};export{O as default};
