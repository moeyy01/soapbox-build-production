import{r as l,R as w,bk as v,cu as y,c as M,_ as s,dV as x,a8 as C,G as R,K as g,bv as D,bw as S}from"../index-961d4ed1.js";import{C as _}from"./copyable-input-3af4610c.js";const k=o=>{let{className:n,sandbox:m,title:r,html:e}=o;const a=l.useRef(null),[u,f]=l.useState(void 0),p=l.useCallback(t=>{var d,i;((d=t.data)==null?void 0:d.type)==="setHeight"&&f((i=t.data)==null?void 0:i.height)},[]);return l.useEffect(()=>{var d,i,b,h;const t=(i=(d=a.current)==null?void 0:d.contentWindow)==null?void 0:i.document;if(t&&e){t.open(),t.write(e),t.close(),t.body.style.margin="0",(h=(b=a.current)==null?void 0:b.contentWindow)==null||h.addEventListener("message",p);const c=t.querySelector("iframe");c&&(c.width="100%")}return()=>{var c,E;(E=(c=a.current)==null?void 0:c.contentWindow)==null||E.removeEventListener("message",p)}},[a.current,e]),w.createElement("iframe",{ref:a,className:n,sandbox:m,height:u,title:r})};function N(o){const n=v();return y(["embed",o],async()=>{const{data:r}=await n.get("/api/oembed",{params:{url:o}});return r})}const F=o=>{let{url:n,onError:m}=o;const r=M(),{data:e,error:a,isError:u}=N(n);return l.useEffect(()=>{a&&u&&m(a)},[u]),s(D,{title:s(g,{id:"status.embed",defaultMessage:"Embed post"}),onClose:()=>{r(S("EMBED"))}},void 0,s(C,{space:4},void 0,s(R,{theme:"muted"},void 0,s(g,{id:"embed.instructions",defaultMessage:"Embed this post on your website by copying the code below."})),s(_,{value:(e==null?void 0:e.html)||""})),s("div",{className:"py-9"},void 0,s(x,{})),s(k,{className:"w-full overflow-hidden rounded-xl",sandbox:"allow-same-origin allow-scripts",title:"embedded-status",html:e==null?void 0:e.html}))};export{F as default};
