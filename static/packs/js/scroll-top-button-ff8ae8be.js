import{u as E,d as T,r as s,a1 as S,cn as b,_ as o,I as k,G as y}from"../index-961d4ed1.js";const C="/packs/assets/arrow-bar-to-up-57af5989.svg",I=u=>{let{onClick:e,count:t,message:m,threshold:l=400,autoloadThreshold:a=50}=u;const p=E(),f=T(),[h,r]=s.useState(!1),n=f.get("autoloadTimelines")===!0,v=t>0&&h,g=S("fixed left-1/2 top-20 z-50 -translate-x-1/2",{hidden:!v}),c=()=>(document.scrollingElement||document.documentElement).scrollTop,i=()=>{n&&c()<=a&&e()},d=s.useCallback(b(()=>{i(),c()>l?r(!0):r(!1)},150,{trailing:!0}),[n,l,a,e]),w=()=>{window.scrollTo({top:0})},x=()=>{setTimeout(w,10),e()};return s.useEffect(()=>(window.addEventListener("scroll",d),()=>{window.removeEventListener("scroll",d)}),[e]),s.useEffect(()=>{i()},[t]),o("div",{className:g},void 0,o("a",{className:"flex cursor-pointer items-center space-x-1.5 whitespace-nowrap rounded-full bg-primary-600 px-4 py-2 text-white transition-transform hover:scale-105 hover:bg-primary-700 active:scale-100",onClick:x},void 0,o(k,{src:C}),t>0&&o(y,{theme:"inherit",size:"sm"},void 0,p.formatMessage(m,{count:t}))))};export{I as S};
