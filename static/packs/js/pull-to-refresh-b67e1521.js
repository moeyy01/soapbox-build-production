import{R as t,r as m,ay as q,_ as V,aE as X}from"../index-961d4ed1.js";var w;(function(e){e[e.UP=-1]="UP",e[e.DOWN=1]="DOWN"})(w||(w={}));function G(e){var r=getComputedStyle(e).overflowY;return e===document.scrollingElement&&r==="visible"?!0:!(r!=="scroll"&&r!=="auto")}function J(e,r){if(!G(e))return!1;if(r===w.DOWN){var s=e.scrollTop+e.clientHeight;return s<e.scrollHeight}if(r===w.UP)return e.scrollTop>0;throw new Error("unsupported direction")}function H(e,r){return J(e,r)?!0:e.parentElement==null?!1:H(e.parentElement,r)}function z(e,r){r===void 0&&(r={});var s=r.insertAt;if(!(!e||typeof document>"u")){var a=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",s==="top"&&a.firstChild?a.insertBefore(i,a.firstChild):a.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}var K=`.lds-ellipsis {
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px; }

.lds-ellipsis div {
  position: absolute;
  top: 27px;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: #363636;
  animation-timing-function: cubic-bezier(0, 1, 1, 0); }

.lds-ellipsis div:nth-child(1) {
  left: 6px;
  animation: lds-ellipsis1 0.6s infinite; }

.lds-ellipsis div:nth-child(2) {
  left: 6px;
  animation: lds-ellipsis2 0.6s infinite; }

.lds-ellipsis div:nth-child(3) {
  left: 26px;
  animation: lds-ellipsis2 0.6s infinite; }

.lds-ellipsis div:nth-child(4) {
  left: 45px;
  animation: lds-ellipsis3 0.6s infinite; }

@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0); }
  100% {
    transform: scale(1); } }

@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1); }
  100% {
    transform: scale(0); } }

@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0); }
  100% {
    transform: translate(19px, 0); } }
`;z(K);var Q=function(){return t.createElement("div",{className:"lds-ellipsis"},t.createElement("div",null),t.createElement("div",null),t.createElement("div",null),t.createElement("div",null))},Z=function(){return t.createElement("div",null,t.createElement("p",null,"↧  pull to refresh  ↧"))},I=`.ptr,
.ptr__children {
  height: 100%;
  width: 100%;
  overflow: hidden;
  -webkit-overflow-scrolling: touch;
  position: relative; }

.ptr.ptr--fetch-more-treshold-breached .ptr__fetch-more {
  display: block; }

.ptr__fetch-more {
  display: none; }

/**
  * Pull down transition 
  */
.ptr__children,
.ptr__pull-down {
  transition: transform 0.2s cubic-bezier(0, 0, 0.31, 1); }

.ptr__pull-down {
  position: absolute;
  overflow: hidden;
  left: 0;
  right: 0;
  top: 0;
  visibility: hidden; }
  .ptr__pull-down > div {
    display: none; }

.ptr--dragging {
  /**
    * Hide PullMore content is treshold breached
    */
  /**
    * Otherwize, display content
    */ }
  .ptr--dragging.ptr--pull-down-treshold-breached .ptr__pull-down--pull-more {
    display: none; }
  .ptr--dragging .ptr__pull-down--pull-more {
    display: block; }

.ptr--pull-down-treshold-breached {
  /**
    * Force opacity to 1 is pull down trashold breached
    */
  /**
    * And display loader
    */ }
  .ptr--pull-down-treshold-breached .ptr__pull-down {
    opacity: 1 !important; }
  .ptr--pull-down-treshold-breached .ptr__pull-down--loading {
    display: block; }

.ptr__loader {
  margin: 0 auto;
  text-align: center; }
`;z(I);var ee=function(e){var r=e.isPullable,s=r===void 0?!0:r,a=e.canFetchMore,i=a===void 0?!1:a,C=e.onRefresh,E=e.onFetchMore,P=e.refreshingContent,D=P===void 0?t.createElement(Q,null):P,M=e.pullingContent,U=M===void 0?t.createElement(Z,null):M,x=e.children,k=e.pullDownThreshold,L=k===void 0?67:k,N=e.fetchMoreThreshold,T=N===void 0?100:N,A=e.maxPullDownDistance,R=A===void 0?95:A,S=e.resistance,O=S===void 0?1:S,W=e.backgroundColor,F=e.className,j=F===void 0?"":F,o=m.useRef(null),l=m.useRef(null),d=m.useRef(null),$=m.useRef(null),y=!1,g=!1,f=!1,p=0,h=0;m.useEffect(function(){if(!(!s||!l||!l.current)){var n=l.current;return n.addEventListener("touchstart",b,{passive:!0}),n.addEventListener("mousedown",b),n.addEventListener("touchmove",_,{passive:!1}),n.addEventListener("mousemove",_),window.addEventListener("scroll",B),n.addEventListener("touchend",v),n.addEventListener("mouseup",v),document.body.addEventListener("mouseleave",v),function(){n.removeEventListener("touchstart",b),n.removeEventListener("mousedown",b),n.removeEventListener("touchmove",_),n.removeEventListener("mousemove",_),window.removeEventListener("scroll",B),n.removeEventListener("touchend",v),n.removeEventListener("mouseup",v),document.body.removeEventListener("mouseleave",v)}}},[x,s,C,L,R,i,T]),m.useEffect(function(){var n;if(!((n=o)===null||n===void 0)&&n.current){var c=o.current.classList.contains("ptr--fetch-more-treshold-breached");c||i&&Y()<T&&E&&(o.current.classList.add("ptr--fetch-more-treshold-breached"),g=!0,E().then(u).catch(u))}},[i,x]);var Y=function(){if(!l||!l.current)return-1;var n=window.scrollY,c=l.current.scrollHeight;return c-n-window.innerHeight},u=function(){requestAnimationFrame(function(){l.current&&(l.current.style.overflowX="hidden",l.current.style.overflowY="auto",l.current.style.transform="unset"),d.current&&(d.current.style.opacity="0"),o.current&&(o.current.classList.remove("ptr--pull-down-treshold-breached"),o.current.classList.remove("ptr--dragging"),o.current.classList.remove("ptr--fetch-more-treshold-breached")),y&&(y=!1),g&&(g=!1)})},b=function(n){f=!1,n instanceof MouseEvent&&(p=n.pageY),window.TouchEvent&&n instanceof TouchEvent&&(p=n.touches[0].pageY),h=p,!(n.type==="touchstart"&&H(n.target,w.UP))&&(l.current.getBoundingClientRect().top<0||(f=!0))},_=function(n){if(f){if(window.TouchEvent&&n instanceof TouchEvent?h=n.touches[0].pageY:h=n.pageY,o.current.classList.add("ptr--dragging"),h<p){f=!1;return}n.cancelable&&n.preventDefault();var c=Math.min((h-p)/O,R);c>=L&&(f=!0,y=!0,o.current.classList.remove("ptr--dragging"),o.current.classList.add("ptr--pull-down-treshold-breached")),!(c>=R)&&(d.current.style.opacity=(c/65).toString(),l.current.style.overflow="visible",l.current.style.transform="translate(0px, "+c+"px)",d.current.style.visibility="visible")}},B=function(n){g||i&&Y()<T&&E&&(g=!0,o.current.classList.add("ptr--fetch-more-treshold-breached"),E().then(u).catch(u))},v=function(){if(f=!1,p=0,h=0,!y){d.current&&(d.current.style.visibility="hidden"),u();return}l.current&&(l.current.style.overflow="visible",l.current.style.transform="translate(0px, "+L+"px)"),C().then(u).catch(u)};return t.createElement("div",{className:"ptr "+j,style:{backgroundColor:W},ref:o},t.createElement("div",{className:"ptr__pull-down",ref:d},t.createElement("div",{className:"ptr__loader ptr__pull-down--loading"},D),t.createElement("div",{className:"ptr__pull-down--pull-more"},U)),t.createElement("div",{className:"ptr__children",ref:l},x,t.createElement("div",{className:"ptr__fetch-more",ref:$},t.createElement("div",{className:"ptr__loader ptr__fetch-more--loading"},D))))};const te=e=>{let{children:r,onRefresh:s,...a}=e;const i=()=>s?s():Promise.resolve();return t.createElement(ee,q({onRefresh:i,pullingContent:t.createElement(t.Fragment,null),refreshingContent:s?V(X,{size:30,withText:!1}):t.createElement(t.Fragment,null),pullDownThreshold:67,maxPullDownDistance:95,resistance:2},a),t.createElement(t.Fragment,null,r))};export{te as P};
