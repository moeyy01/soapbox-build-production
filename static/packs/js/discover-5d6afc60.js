import{bk as O,f as q,bl as B,bm as U,bn as J,jE as K,jF as Y,r as f,_ as e,R as m,H as y,c7 as x,jy as X,jx as $,a8 as h,G as n,el as _,em as Q,K as d,fL as G,jG as w,b9 as I,aA as F,a1 as Z,ay as j,u as ee,aI as te,dt as se,bH as ae,ab as re,n as oe}from"../index-961d4ed1.js";import{u as ie}from"./usePopularGroups-8db4dafa.js";import{G as M}from"./layout-list-0e6136f9.js";import{u as ne,T as ce}from"./tag-list-item-0ece9fe1.js";import{u as le}from"./useDebounce-0a090d55.js";import{P}from"./placeholder-group-search-530a2b76.js";import{V as z,a as de}from"./index-c72bc579.js";import{G as ue}from"./group-list-item-80a96dc7.js";import{G as E,L as ge}from"./layout-buttons-cd730444.js";import{u as he}from"./useSuggestedGroups-970ba3f8.js";import{T as pe,a as me}from"./tab-bar-24867ccf.js";import"./group-header-image-9d6945b3.js";function fe(s){const a=O(),t=q(),{entities:r,...o}=B([J.GROUPS,"discover","search",s],()=>a.get("/api/v1/groups/search",{params:{q:s}}),{enabled:t.groupsDiscovery&&!!s,schema:U}),{relationships:c}=K(["discover","search",s],r.map(i=>i.id)),l=r.map(i=>({...i,relationship:c[i.id]||null}));return{...o,groups:l}}const L=s=>{const{children:a,controlsHeight:t,isDisabled:r,itemCount:o,itemWidth:c}=s,[l,i,{width:u}]=Y(),g=u||(l==null?void 0:l.clientWidth),[b,p]=f.useState(0),[v,S]=f.useState(1),k=Math.ceil(o/b),N=g/Math.floor(g/c),H=v<k&&k>1,V=v>1&&k>1,D=()=>S(C=>C+1),W=()=>S(C=>C-1),A=()=>typeof a=="function"?a({width:N||"auto"}):a;return f.useEffect(()=>{g&&p(Math.round(g/N))},[g,N]),e(y,{alignItems:"stretch"},void 0,e("div",{className:"z-10 flex w-5 items-center justify-center self-stretch rounded-l-xl bg-white dark:bg-primary-900",style:{height:t||"auto"}},void 0,e("button",{"data-testid":"prev-page",onClick:W,className:"flex h-full w-7 items-center justify-center transition-opacity duration-500 disabled:opacity-25",disabled:!V||r},void 0,e(x,{src:X,className:"h-5 w-5 text-black dark:text-white"}))),e("div",{className:"relative w-full overflow-hidden"},void 0,m.createElement(y,{alignItems:"center",style:{transform:`translateX(-${(v-1)*100}%)`},className:"transition-all duration-500 ease-out",ref:i},A())),e("div",{className:"z-10 flex w-5 items-center justify-center self-stretch rounded-r-xl bg-white dark:bg-primary-900",style:{height:t||"auto"}},void 0,e("button",{"data-testid":"next-page",onClick:D,className:"flex h-full w-7 items-center justify-center transition-opacity duration-500 disabled:opacity-25",disabled:!H||r},void 0,e(x,{src:$,className:"h-5 w-5 text-black dark:text-white"}))))},T=()=>{const s=Q(12,20);return e(h,{space:2,className:"animate-pulse"},void 0,e(h,{className:"aspect-h-7 aspect-w-10 h-full w-full overflow-hidden rounded-lg"},void 0,e("div",{className:"absolute inset-0 rounded-t-lg bg-gray-300 object-cover dark:bg-gray-800"}),e(h,{justifyContent:"end",className:"z-10 p-4 text-gray-900 dark:text-gray-100",space:3},void 0,e("div",{className:"h-11 w-11 rounded-full bg-gray-500 dark:bg-gray-700 dark:ring-primary-900"}),e(h,{space:1,className:"text-gray-500 dark:text-gray-700"},void 0,e(n,{theme:"inherit",weight:"bold",truncate:!0},void 0,_(s)),e(y,{space:3,wrap:!0},void 0,e(n,{tag:"span",theme:"inherit"},void 0,_(6)),e(n,{tag:"span",theme:"inherit"},void 0,_(6)))))),e("div",{className:"h-10 w-full rounded-full bg-gray-300 dark:bg-gray-800"}))},ve=()=>{const{groups:s,isFetching:a,isFetched:t,isError:r}=ie(),o=t&&s.length===0||r,[c,l]=f.useState(null);return e(h,{space:4,"data-testid":"popular-groups"},void 0,e(y,{alignItems:"center",justifyContent:"between"},void 0,e(n,{size:"xl",weight:"bold"},void 0,e(d,{id:"groups.discover.popular.title",defaultMessage:"Popular Groups"})),e(G,{to:"/groups/popular"},void 0,e(n,{tag:"span",weight:"medium",size:"sm",theme:"inherit"},void 0,e(d,{id:"groups.discover.popular.show_more",defaultMessage:"Show More"})))),o?e(n,{theme:"muted"},void 0,e(d,{id:"groups.discover.popular.empty",defaultMessage:"Unable to fetch popular groups at this time. Please check back later."})):e(L,{itemWidth:250,itemCount:s.length,controlsHeight:c==null?void 0:c.clientHeight,isDisabled:a},void 0,i=>{let{width:u}=i;return m.createElement(m.Fragment,null,a?new Array(4).fill(0).map((g,b)=>e("div",{className:"relative flex shrink-0 flex-col space-y-2 px-1",style:{width:u||"auto"}},b,e(T,{}))):s.map(g=>m.createElement(M,{key:g.id,group:g,width:u,ref:l})))}))},be=()=>{const{tags:s,isFetched:a,isError:t}=ne(),r=a&&s.length===0||t;return e(h,{space:4,"data-testid":"popular-tags"},void 0,e(y,{alignItems:"center",justifyContent:"between"},void 0,e(n,{size:"xl",weight:"bold"},void 0,e(d,{id:"groups.discover.tags.title",defaultMessage:"Browse Topics"})),e(G,{to:"/groups/tags"},void 0,e(n,{tag:"span",weight:"medium",size:"sm",theme:"inherit"},void 0,e(d,{id:"groups.discover.tags.show_more",defaultMessage:"Show More"})))),r?e(n,{theme:"muted"},void 0,e(d,{id:"groups.discover.tags.empty",defaultMessage:"Unable to fetch popular topics at this time. Please check back later."})):e(h,{space:4},void 0,s.slice(0,10).map(o=>e(ce,{tag:o},o.id))))},ye="soapbox:recent-group-searches",we=s=>w.remove(s),Se=(s,a)=>{let t=[];if(w.get(s)&&(t=w.get(s)),t.indexOf(a)===-1)return t.unshift(a),t.length>10&&t.pop(),w.set(s,t),t;{const r=t.indexOf(a),o=[...t];return o.splice(0,0,...o.splice(r,1)),localStorage.setItem(ye,JSON.stringify(o)),o}},R=s=>{let{title:a,subtitle:t}=s;return e(h,{space:2,className:"px-4 py-2","data-testid":"no-results"},void 0,e(n,{weight:"bold",size:"lg"},void 0,a),e(n,{theme:"muted"},void 0,t))},xe=s=>{const{onSelect:a}=s,{account:t}=I(),[r,o]=f.useState(w.get(t==null?void 0:t.id)||[]),c=()=>{we(t==null?void 0:t.id),o([])};return e(h,{space:2,"data-testid":"recent-searches"},void 0,r.length>0?m.createElement(m.Fragment,null,e(y,{alignItems:"center",justifyContent:"between",className:"bg-white dark:bg-gray-900"},void 0,e(n,{theme:"muted",weight:"semibold",size:"sm"},void 0,e(d,{id:"groups.discover.search.recent_searches.title",defaultMessage:"Recent searches"})),e("button",{onClick:c,"data-testid":"clear-recent-searches"},void 0,e(n,{theme:"primary",size:"sm",className:"hover:underline"},void 0,e(d,{id:"groups.discover.search.recent_searches.clear_all",defaultMessage:"Clear all"})))),e(z,{useWindowScroll:!0,data:r,itemContent:(l,i)=>e("div",{"data-testid":"recent-search"},i,e("button",{onClick:()=>a(i),className:"group flex w-full flex-col rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-800","data-testid":"recent-search-result"},void 0,e(y,{alignItems:"center",space:2},void 0,e("div",{className:"flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 p-2 dark:bg-gray-800 dark:group-hover:bg-gray-700/20"},void 0,e(x,{src:F,className:"h-5 w-5 text-gray-600"})),e(n,{weight:"bold",size:"sm",align:"left"},void 0,i))))})):e(h,{space:2,"data-testid":"recent-searches-blankslate"},void 0,e(n,{weight:"bold",size:"lg"},void 0,e(d,{id:"groups.discover.search.recent_searches.blankslate.title",defaultMessage:"No recent searches"})),e(n,{theme:"muted"},void 0,e(d,{id:"groups.discover.search.recent_searches.blankslate.subtitle",defaultMessage:"Search group names, topics or keywords"}))))},ke=m.forwardRef((s,a)=>{const{context:t,...r}=s;return m.createElement("div",j({ref:a},r,{className:"flex flex-wrap"}))}),Ne=s=>{const{groupSearchResult:a}=s,[t,r]=f.useState(E.LIST),{groups:o,hasNextPage:c,isFetching:l,fetchNextPage:i}=a,u=()=>{c&&!l&&i()},g=f.useCallback((p,v)=>e("div",{className:Z({"pt-4":v!==0})},void 0,e(ue,{group:p,withJoinAction:!0})),[]),b=f.useCallback(p=>e(M,{group:p}),[]);return e(h,{space:4,"data-testid":"results"},void 0,e(y,{alignItems:"center",justifyContent:"between"},void 0,e(n,{weight:"semibold"},void 0,e(d,{id:"groups.discover.search.results.groups",defaultMessage:"Groups"})),e(ge,{layout:t,onSelect:p=>r(p)})),t===E.LIST?e(z,{useWindowScroll:!0,data:o,itemContent:(p,v)=>g(v,p),endReached:u}):e(de,{useWindowScroll:!0,data:o,itemContent:(p,v)=>b(v),components:{Item:p=>m.createElement("div",j({},p,{className:"w-1/2 flex-none pb-4 [&:nth-last-of-type(-n+2)]:pb-0"})),List:ke},endReached:u}))},Ce=s=>{const{onSelect:a,searchValue:t}=s,{account:r}=I(),o=le,c=o(t,300),l=o(t,1e3),i=fe(c),{groups:u,isLoading:g,isFetched:b,isError:p}=i,v=b&&u.length>0,S=b&&u.length===0;return f.useEffect(()=>{l&&l.length>=0&&Se(r==null?void 0:r.id,l)},[l]),g?e(h,{space:4},void 0,e(P,{}),e(P,{}),e(P,{})):p?e(R,{title:e(d,{id:"groups.discover.search.error.title",defaultMessage:"An error occurred"}),subtitle:e(d,{id:"groups.discover.search.error.subtitle",defaultMessage:"Please try again later."})}):S?e(R,{title:e(d,{id:"groups.discover.search.no_results.title",defaultMessage:"No matches found"}),subtitle:e(d,{id:"groups.discover.search.no_results.subtitle",defaultMessage:"Try searching for another group."})}):v?e(Ne,{groupSearchResult:i}):e(xe,{onSelect:a})},_e=()=>{const{groups:s,isFetching:a,isFetched:t,isError:r}=he(),o=t&&s.length===0||r,[c,l]=f.useState(null);return e(h,{space:4,"data-testid":"suggested-groups"},void 0,e(y,{alignItems:"center",justifyContent:"between"},void 0,e(n,{size:"xl",weight:"bold"},void 0,e(d,{id:"groups.discover.suggested.title",defaultMessage:"Suggested For You"})),e(G,{to:"/groups/suggested"},void 0,e(n,{tag:"span",weight:"medium",size:"sm",theme:"inherit"},void 0,e(d,{id:"groups.discover.suggested.show_more",defaultMessage:"Show More"})))),o?e(n,{theme:"muted"},void 0,e(d,{id:"groups.discover.suggested.empty",defaultMessage:"Unable to fetch suggested groups at this time. Please check back later."})):e(L,{itemWidth:250,itemCount:s.length,controlsHeight:c==null?void 0:c.clientHeight,isDisabled:a},void 0,i=>{let{width:u}=i;return m.createElement(m.Fragment,null,a?new Array(20).fill(0).map((g,b)=>e("div",{className:"relative flex shrink-0 flex-col space-y-2 px-0.5",style:{width:u||"auto"}},b,e(T,{}))):s.map(g=>m.createElement(M,{key:g.id,group:g,width:u,ref:l})))}))},Pe=oe({placeholder:{id:"groups.discover.search.placeholder",defaultMessage:"Search"}}),De=()=>{const s=ee(),[a,t]=f.useState(!1),[r,o]=f.useState(""),c=r&&r.length>0,l=()=>{i(),t(!1)},i=()=>o("");return e(h,{space:4},void 0,e(pe,{activeTab:me.FIND_GROUPS}),e(h,{space:6},void 0,e(y,{alignItems:"center"},void 0,a?e(te,{src:se,iconClassName:"mr-2 h-5 w-5 fill-current text-gray-600",onClick:l,"data-testid":"group-search-icon"}):null,e(ae,{"data-testid":"search",type:"text",placeholder:s.formatMessage(Pe.placeholder),value:r,onChange:u=>o(u.target.value),onFocus:()=>t(!0),outerClassName:"mt-0 w-full",theme:"search",append:e("button",{onClick:i},void 0,e(x,{src:c?re:F,className:"h-4 w-4 text-gray-700 dark:text-gray-600","aria-hidden":"true"}))})),a?e(Ce,{searchValue:r,onSelect:u=>o(u)}):m.createElement(m.Fragment,null,e(ve,{}),e(_e,{}),e(be,{}))))};export{De as default};