import{R as t,q as B,d as W,r as a,_ as o,aE as N,Z,ay as L,b0 as j}from"../index-961d4ed1.js";import{V as G}from"./index-c72bc579.js";import{L as Q}from"./load-more-1869fbc1.js";const U=l=>{let{context:s,...r}=l;return t.createElement("div",L({className:s==null?void 0:s.itemClassName},r))},X=t.forwardRef((l,s)=>{const{context:r,...c}=l;return t.createElement("div",L({ref:s,className:r==null?void 0:r.listClassName},c))}),ne=t.forwardRef((l,s)=>{let{scrollKey:r,prepend:c=null,alwaysPrepend:w,children:P,isLoading:d,emptyMessage:E,emptyMessageCard:b=!0,showLoading:g,onRefresh:Y,onScroll:R,onScrollToTop:_,onLoadMore:m,className:I,itemClassName:O,id:T,hasMore:u,placeholderComponent:i,placeholderCount:M=0,initialTopMostItemIndex:h=0,style:k={},useWindowScroll:D=!0}=l;const F=B(),f=W().get("autoloadMore"),p=`soapbox:scrollData:${r}`,n=a.useMemo(()=>JSON.parse(sessionStorage.getItem(p)),[p]),S=a.useRef(n?n.index:0),y=a.useRef(n?n.offset:0),q=Array.from(P||[]),v=g&&i&&M>0,x=v?Array(M).fill(""):q;u&&(f||d)&&i?x.push(o(i,{})):u&&(f||d)&&x.push(o(N,{}));const C=a.useCallback(Z(()=>{const e=document.querySelector(`[data-virtuoso-scroller] [data-item-index="${S.current}"]`);e?y.current=e.getBoundingClientRect().top*-1:y.current=0},150,{trailing:!0}),[]);a.useEffect(()=>(document.addEventListener("scroll",C),sessionStorage.removeItem(p),()=>{if(r){const e={index:S.current,offset:y.current};sessionStorage.setItem(p,JSON.stringify(e))}document.removeEventListener("scroll",C)}),[]);const A=()=>o("div",{className:"mt-2"},void 0,w&&c,d?o(N,{}):t.createElement(t.Fragment,null,b?o(j,{variant:"rounded",size:"lg"},void 0,E):E)),H=(e,z)=>v?o(i,{}):z,J=()=>{f&&u&&m&&m()},K=()=>f||!u||!m?null:o(Q,{visible:!d,onClick:m}),V=e=>{S.current=Math.min(e.startIndex+1,e.endIndex),C()},$=a.useMemo(()=>g?0:h||(n&&F.action==="POP"?{align:"start",index:n.index,offset:n.offset}:0),[g,h]);return t.createElement(G,{ref:s,id:T,useWindowScroll:D,className:I,data:x,startReached:_,endReached:J,isScrolling:e=>e&&R&&R(),itemContent:H,initialTopMostItemIndex:$,rangeChanged:V,style:k,context:{listClassName:I,itemClassName:O},components:{Header:()=>t.createElement(t.Fragment,null,c),ScrollSeekPlaceholder:i,EmptyPlaceholder:()=>A(),List:X,Item:U,Footer:K}})});export{ne as S};
