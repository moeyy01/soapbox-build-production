import{u as C,_ as e,af as x,a8 as n,H as k,aI as y,ab as M,G as l,n as R}from"../index-961d4ed1.js";const g=R({add:{id:"streamfield.add",defaultMessage:"Add"},remove:{id:"streamfield.remove",defaultMessage:"Remove"}}),b=h=>{let{values:s,label:o,hint:m,onAddItem:d,onRemoveItem:i,onChange:u,component:f,maxItems:v=1/0,minItems:p=0}=h;const r=C(),I=t=>a=>{const c=[...s];c[t]=a,u(c)};return e(n,{space:4},void 0,e(n,{},void 0,o&&e(l,{size:"sm",weight:"medium"},void 0,o),m&&e(l,{size:"xs",theme:"muted"},void 0,m)),s.length>0&&e(n,{space:1},void 0,s.map((t,a)=>t!=null&&t._destroy?null:e(k,{space:2,alignItems:"center"},void 0,e(f,{onChange:I(a),value:t,autoFocus:a>0},a),s.length>p&&i&&e(y,{iconClassName:"h-4 w-4",className:"bg-transparent text-gray-600 hover:text-gray-600",src:M,onClick:()=>i(a),title:r.formatMessage(g.remove)})))),d&&s.length<v&&e(x,{onClick:d,theme:"secondary",block:!0},void 0,r.formatMessage(g.add)))};export{b as S};