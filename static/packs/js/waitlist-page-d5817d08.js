import{c as u,t as v,b9 as f,r as p,_ as e,N as g,e2 as x,af as l,K as a,a8 as c,G as h,iE as y,eo as w,C as N}from"../index-961d4ed1.js";const k=()=>{var o;const s=u(),n=v(),{account:t}=f(),r=((o=t==null?void 0:t.source)==null?void 0:o.sms_verified)??!0,m=d=>{d.preventDefault(),s(w())},i=()=>s(N("VERIFY_SMS"));return p.useEffect(()=>{r||i()},[]),e("div",{},void 0,e(y,{}),e("main",{className:"relative mx-auto flex h-screen max-w-7xl flex-col px-2 sm:px-6 lg:px-8"},void 0,e("header",{className:"relative flex h-16 justify-between"},void 0,e("div",{className:"relative flex flex-1 items-stretch justify-center"},void 0,e(g,{to:"/",className:"flex shrink-0 cursor-pointer items-center"},void 0,e(x,{alt:"Logo",className:"h-7"})),e("div",{className:"absolute inset-y-0 right-0 flex items-center pr-2"},void 0,e(l,{onClick:m,theme:"primary",to:"/logout"},void 0,e(a,{id:"navigation_bar.logout",defaultMessage:"Logout"}))))),e("div",{className:"-mt-16 flex h-full flex-col items-center justify-center"},void 0,e("div",{className:"max-w-xl"},void 0,e(c,{space:4},void 0,e("img",{src:"/instance/images/waitlist.png",className:"mx-auto h-32 w-32",alt:"Waitlisted"}),e(c,{space:2},void 0,e(h,{size:"lg",theme:"muted",align:"center",weight:"medium"},void 0,e(a,{id:"waitlist.body",defaultMessage:"Welcome back to {title}! You were previously placed on our waitlist. Please verify your phone number to receive immediate access to your account!",values:{title:n.title}})),e("div",{className:"text-center"},void 0,e(l,{onClick:i,theme:"primary"},void 0,e(a,{id:"waitlist.actions.verify_number",defaultMessage:"Verify phone number"})))))))))};export{k as default};
