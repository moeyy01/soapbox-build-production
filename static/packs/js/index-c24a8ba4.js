import{r as I,R as v}from"../index-961d4ed1.js";var Y=Object.defineProperty,S=Object.getOwnPropertySymbols,T=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable,F=(c,s,a)=>s in c?Y(c,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):c[s]=a,B=(c,s)=>{for(var a in s||(s={}))T.call(s,a)&&F(c,a,s[a]);if(S)for(var a of S(s))D.call(s,a)&&F(c,a,s[a]);return c},$=(c,s)=>{var a={};for(var i in c)T.call(c,i)&&s.indexOf(i)<0&&(a[i]=c[i]);if(c!=null&&S)for(var i of S(c))s.indexOf(i)<0&&D.call(c,i)&&(a[i]=c[i]);return a};/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */var p;(c=>{const s=class{constructor(t,e,r,n){if(this.version=t,this.errorCorrectionLevel=e,this.modules=[],this.isFunction=[],t<s.MIN_VERSION||t>s.MAX_VERSION)throw new RangeError("Version value out of range");if(n<-1||n>7)throw new RangeError("Mask value out of range");this.size=t*4+17;let o=[];for(let l=0;l<this.size;l++)o.push(!1);for(let l=0;l<this.size;l++)this.modules.push(o.slice()),this.isFunction.push(o.slice());this.drawFunctionPatterns();const h=this.addEccAndInterleave(r);if(this.drawCodewords(h),n==-1){let l=1e9;for(let m=0;m<8;m++){this.applyMask(m),this.drawFormatBits(m);const f=this.getPenaltyScore();f<l&&(n=m,l=f),this.applyMask(m)}}u(0<=n&&n<=7),this.mask=n,this.applyMask(n),this.drawFormatBits(n),this.isFunction=[]}static encodeText(t,e){const r=c.QrSegment.makeSegments(t);return s.encodeSegments(r,e)}static encodeBinary(t,e){const r=c.QrSegment.makeBytes(t);return s.encodeSegments([r],e)}static encodeSegments(t,e,r=1,n=40,o=-1,h=!0){if(!(s.MIN_VERSION<=r&&r<=n&&n<=s.MAX_VERSION)||o<-1||o>7)throw new RangeError("Invalid value");let l,m;for(l=r;;l++){const d=s.getNumDataCodewords(l,e)*8,M=C.getTotalBits(t,l);if(M<=d){m=M;break}if(l>=n)throw new RangeError("Data too long")}for(const d of[s.Ecc.MEDIUM,s.Ecc.QUARTILE,s.Ecc.HIGH])h&&m<=s.getNumDataCodewords(l,d)*8&&(e=d);let f=[];for(const d of t){i(d.mode.modeBits,4,f),i(d.numChars,d.mode.numCharCountBits(l),f);for(const M of d.getData())f.push(M)}u(f.length==m);const A=s.getNumDataCodewords(l,e)*8;u(f.length<=A),i(0,Math.min(4,A-f.length),f),i(0,(8-f.length%8)%8,f),u(f.length%8==0);for(let d=236;f.length<A;d^=253)i(d,8,f);let R=[];for(;R.length*8<f.length;)R.push(0);return f.forEach((d,M)=>R[M>>>3]|=d<<7-(M&7)),new s(l,e,R,o)}getModule(t,e){return 0<=t&&t<this.size&&0<=e&&e<this.size&&this.modules[e][t]}getModules(){return this.modules}drawFunctionPatterns(){for(let r=0;r<this.size;r++)this.setFunctionModule(6,r,r%2==0),this.setFunctionModule(r,6,r%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);const t=this.getAlignmentPatternPositions(),e=t.length;for(let r=0;r<e;r++)for(let n=0;n<e;n++)r==0&&n==0||r==0&&n==e-1||r==e-1&&n==0||this.drawAlignmentPattern(t[r],t[n]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(t){const e=this.errorCorrectionLevel.formatBits<<3|t;let r=e;for(let o=0;o<10;o++)r=r<<1^(r>>>9)*1335;const n=(e<<10|r)^21522;u(n>>>15==0);for(let o=0;o<=5;o++)this.setFunctionModule(8,o,g(n,o));this.setFunctionModule(8,7,g(n,6)),this.setFunctionModule(8,8,g(n,7)),this.setFunctionModule(7,8,g(n,8));for(let o=9;o<15;o++)this.setFunctionModule(14-o,8,g(n,o));for(let o=0;o<8;o++)this.setFunctionModule(this.size-1-o,8,g(n,o));for(let o=8;o<15;o++)this.setFunctionModule(8,this.size-15+o,g(n,o));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let t=this.version;for(let r=0;r<12;r++)t=t<<1^(t>>>11)*7973;const e=this.version<<12|t;u(e>>>18==0);for(let r=0;r<18;r++){const n=g(e,r),o=this.size-11+r%3,h=Math.floor(r/3);this.setFunctionModule(o,h,n),this.setFunctionModule(h,o,n)}}drawFinderPattern(t,e){for(let r=-4;r<=4;r++)for(let n=-4;n<=4;n++){const o=Math.max(Math.abs(n),Math.abs(r)),h=t+n,l=e+r;0<=h&&h<this.size&&0<=l&&l<this.size&&this.setFunctionModule(h,l,o!=2&&o!=4)}}drawAlignmentPattern(t,e){for(let r=-2;r<=2;r++)for(let n=-2;n<=2;n++)this.setFunctionModule(t+n,e+r,Math.max(Math.abs(n),Math.abs(r))!=1)}setFunctionModule(t,e,r){this.modules[e][t]=r,this.isFunction[e][t]=!0}addEccAndInterleave(t){const e=this.version,r=this.errorCorrectionLevel;if(t.length!=s.getNumDataCodewords(e,r))throw new RangeError("Invalid argument");const n=s.NUM_ERROR_CORRECTION_BLOCKS[r.ordinal][e],o=s.ECC_CODEWORDS_PER_BLOCK[r.ordinal][e],h=Math.floor(s.getNumRawDataModules(e)/8),l=n-h%n,m=Math.floor(h/n);let f=[];const A=s.reedSolomonComputeDivisor(o);for(let d=0,M=0;d<n;d++){let w=t.slice(M,M+m-o+(d<l?0:1));M+=w.length;const P=s.reedSolomonComputeRemainder(w,A);d<l&&w.push(0),f.push(w.concat(P))}let R=[];for(let d=0;d<f[0].length;d++)f.forEach((M,w)=>{(d!=m-o||w>=l)&&R.push(M[d])});return u(R.length==h),R}drawCodewords(t){if(t.length!=Math.floor(s.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");let e=0;for(let r=this.size-1;r>=1;r-=2){r==6&&(r=5);for(let n=0;n<this.size;n++)for(let o=0;o<2;o++){const h=r-o,m=(r+1&2)==0?this.size-1-n:n;!this.isFunction[m][h]&&e<t.length*8&&(this.modules[m][h]=g(t[e>>>3],7-(e&7)),e++)}}u(e==t.length*8)}applyMask(t){if(t<0||t>7)throw new RangeError("Mask value out of range");for(let e=0;e<this.size;e++)for(let r=0;r<this.size;r++){let n;switch(t){case 0:n=(r+e)%2==0;break;case 1:n=e%2==0;break;case 2:n=r%3==0;break;case 3:n=(r+e)%3==0;break;case 4:n=(Math.floor(r/3)+Math.floor(e/2))%2==0;break;case 5:n=r*e%2+r*e%3==0;break;case 6:n=(r*e%2+r*e%3)%2==0;break;case 7:n=((r+e)%2+r*e%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[e][r]&&n&&(this.modules[e][r]=!this.modules[e][r])}}getPenaltyScore(){let t=0;for(let o=0;o<this.size;o++){let h=!1,l=0,m=[0,0,0,0,0,0,0];for(let f=0;f<this.size;f++)this.modules[o][f]==h?(l++,l==5?t+=s.PENALTY_N1:l>5&&t++):(this.finderPenaltyAddHistory(l,m),h||(t+=this.finderPenaltyCountPatterns(m)*s.PENALTY_N3),h=this.modules[o][f],l=1);t+=this.finderPenaltyTerminateAndCount(h,l,m)*s.PENALTY_N3}for(let o=0;o<this.size;o++){let h=!1,l=0,m=[0,0,0,0,0,0,0];for(let f=0;f<this.size;f++)this.modules[f][o]==h?(l++,l==5?t+=s.PENALTY_N1:l>5&&t++):(this.finderPenaltyAddHistory(l,m),h||(t+=this.finderPenaltyCountPatterns(m)*s.PENALTY_N3),h=this.modules[f][o],l=1);t+=this.finderPenaltyTerminateAndCount(h,l,m)*s.PENALTY_N3}for(let o=0;o<this.size-1;o++)for(let h=0;h<this.size-1;h++){const l=this.modules[o][h];l==this.modules[o][h+1]&&l==this.modules[o+1][h]&&l==this.modules[o+1][h+1]&&(t+=s.PENALTY_N2)}let e=0;for(const o of this.modules)e=o.reduce((h,l)=>h+(l?1:0),e);const r=this.size*this.size,n=Math.ceil(Math.abs(e*20-r*10)/r)-1;return u(0<=n&&n<=9),t+=n*s.PENALTY_N4,u(0<=t&&t<=2568888),t}getAlignmentPatternPositions(){if(this.version==1)return[];{const t=Math.floor(this.version/7)+2,e=this.version==32?26:Math.ceil((this.version*4+4)/(t*2-2))*2;let r=[6];for(let n=this.size-7;r.length<t;n-=e)r.splice(1,0,n);return r}}static getNumRawDataModules(t){if(t<s.MIN_VERSION||t>s.MAX_VERSION)throw new RangeError("Version number out of range");let e=(16*t+128)*t+64;if(t>=2){const r=Math.floor(t/7)+2;e-=(25*r-10)*r-55,t>=7&&(e-=36)}return u(208<=e&&e<=29648),e}static getNumDataCodewords(t,e){return Math.floor(s.getNumRawDataModules(t)/8)-s.ECC_CODEWORDS_PER_BLOCK[e.ordinal][t]*s.NUM_ERROR_CORRECTION_BLOCKS[e.ordinal][t]}static reedSolomonComputeDivisor(t){if(t<1||t>255)throw new RangeError("Degree out of range");let e=[];for(let n=0;n<t-1;n++)e.push(0);e.push(1);let r=1;for(let n=0;n<t;n++){for(let o=0;o<e.length;o++)e[o]=s.reedSolomonMultiply(e[o],r),o+1<e.length&&(e[o]^=e[o+1]);r=s.reedSolomonMultiply(r,2)}return e}static reedSolomonComputeRemainder(t,e){let r=e.map(n=>0);for(const n of t){const o=n^r.shift();r.push(0),e.forEach((h,l)=>r[l]^=s.reedSolomonMultiply(h,o))}return r}static reedSolomonMultiply(t,e){if(t>>>8||e>>>8)throw new RangeError("Byte out of range");let r=0;for(let n=7;n>=0;n--)r=r<<1^(r>>>7)*285,r^=(e>>>n&1)*t;return u(r>>>8==0),r}finderPenaltyCountPatterns(t){const e=t[1];u(e<=this.size*3);const r=e>0&&t[2]==e&&t[3]==e*3&&t[4]==e&&t[5]==e;return(r&&t[0]>=e*4&&t[6]>=e?1:0)+(r&&t[6]>=e*4&&t[0]>=e?1:0)}finderPenaltyTerminateAndCount(t,e,r){return t&&(this.finderPenaltyAddHistory(e,r),e=0),e+=this.size,this.finderPenaltyAddHistory(e,r),this.finderPenaltyCountPatterns(r)}finderPenaltyAddHistory(t,e){e[0]==0&&(t+=this.size),e.pop(),e.unshift(t)}};let a=s;a.MIN_VERSION=1,a.MAX_VERSION=40,a.PENALTY_N1=3,a.PENALTY_N2=3,a.PENALTY_N3=40,a.PENALTY_N4=10,a.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],a.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],c.QrCode=a;function i(t,e,r){if(e<0||e>31||t>>>e)throw new RangeError("Value out of range");for(let n=e-1;n>=0;n--)r.push(t>>>n&1)}function g(t,e){return(t>>>e&1)!=0}function u(t){if(!t)throw new Error("Assertion error")}const E=class{constructor(t,e,r){if(this.mode=t,this.numChars=e,this.bitData=r,e<0)throw new RangeError("Invalid argument");this.bitData=r.slice()}static makeBytes(t){let e=[];for(const r of t)i(r,8,e);return new E(E.Mode.BYTE,t.length,e)}static makeNumeric(t){if(!E.isNumeric(t))throw new RangeError("String contains non-numeric characters");let e=[];for(let r=0;r<t.length;){const n=Math.min(t.length-r,3);i(parseInt(t.substr(r,n),10),n*3+1,e),r+=n}return new E(E.Mode.NUMERIC,t.length,e)}static makeAlphanumeric(t){if(!E.isAlphanumeric(t))throw new RangeError("String contains unencodable characters in alphanumeric mode");let e=[],r;for(r=0;r+2<=t.length;r+=2){let n=E.ALPHANUMERIC_CHARSET.indexOf(t.charAt(r))*45;n+=E.ALPHANUMERIC_CHARSET.indexOf(t.charAt(r+1)),i(n,11,e)}return r<t.length&&i(E.ALPHANUMERIC_CHARSET.indexOf(t.charAt(r)),6,e),new E(E.Mode.ALPHANUMERIC,t.length,e)}static makeSegments(t){return t==""?[]:E.isNumeric(t)?[E.makeNumeric(t)]:E.isAlphanumeric(t)?[E.makeAlphanumeric(t)]:[E.makeBytes(E.toUtf8ByteArray(t))]}static makeEci(t){let e=[];if(t<0)throw new RangeError("ECI assignment value out of range");if(t<128)i(t,8,e);else if(t<16384)i(2,2,e),i(t,14,e);else if(t<1e6)i(6,3,e),i(t,21,e);else throw new RangeError("ECI assignment value out of range");return new E(E.Mode.ECI,0,e)}static isNumeric(t){return E.NUMERIC_REGEX.test(t)}static isAlphanumeric(t){return E.ALPHANUMERIC_REGEX.test(t)}getData(){return this.bitData.slice()}static getTotalBits(t,e){let r=0;for(const n of t){const o=n.mode.numCharCountBits(e);if(n.numChars>=1<<o)return 1/0;r+=4+o+n.bitData.length}return r}static toUtf8ByteArray(t){t=encodeURI(t);let e=[];for(let r=0;r<t.length;r++)t.charAt(r)!="%"?e.push(t.charCodeAt(r)):(e.push(parseInt(t.substr(r+1,2),16)),r+=2);return e}};let C=E;C.NUMERIC_REGEX=/^[0-9]*$/,C.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,C.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",c.QrSegment=C})(p||(p={}));(c=>{(s=>{const a=class{constructor(g,u){this.ordinal=g,this.formatBits=u}};let i=a;i.LOW=new a(0,1),i.MEDIUM=new a(1,0),i.QUARTILE=new a(2,3),i.HIGH=new a(3,2),s.Ecc=i})(c.QrCode||(c.QrCode={}))})(p||(p={}));(c=>{(s=>{const a=class{constructor(g,u){this.modeBits=g,this.numBitsCharCount=u}numCharCountBits(g){return this.numBitsCharCount[Math.floor((g+7)/17)]}};let i=a;i.NUMERIC=new a(1,[10,12,14]),i.ALPHANUMERIC=new a(2,[9,11,13]),i.BYTE=new a(4,[8,16,16]),i.KANJI=new a(8,[8,10,12]),i.ECI=new a(7,[0,0,0]),s.Mode=i})(c.QrSegment||(c.QrSegment={}))})(p||(p={}));var y=p;/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */var G={L:y.QrCode.Ecc.LOW,M:y.QrCode.Ecc.MEDIUM,Q:y.QrCode.Ecc.QUARTILE,H:y.QrCode.Ecc.HIGH},X=128,K="L",W="#FFFFFF",j="#000000",x=!1,z=4,V=.1;function Z(c,s=0){const a=[];return c.forEach(function(i,g){let u=null;i.forEach(function(E,C){if(!E&&u!==null){a.push(`M${u+s} ${g+s}h${C-u}v1H${u+s}z`),u=null;return}if(C===i.length-1){if(!E)return;u===null?a.push(`M${C+s},${g+s} h1v1H${C+s}z`):a.push(`M${u+s},${g+s} h${C+1-u}v1H${u+s}z`);return}E&&u===null&&(u=C)})}),a.join("")}function J(c,s){return c.slice().map((a,i)=>i<s.y||i>=s.y+s.h?a:a.map((g,u)=>u<s.x||u>=s.x+s.w?g:!1))}function q(c,s,a,i){if(i==null)return null;const g=a?z:0,u=c.length+g*2,E=Math.floor(s*V),C=u/s,t=(i.width||E)*C,e=(i.height||E)*C,r=i.x==null?c.length/2-t/2:i.x*C,n=i.y==null?c.length/2-e/2:i.y*C;let o=null;if(i.excavate){let h=Math.floor(r),l=Math.floor(n),m=Math.ceil(t+r-h),f=Math.ceil(e+n-l);o={x:h,y:l,w:m,h:f}}return{x:r,y:n,h:e,w:t,excavation:o}}var tt=function(){try{new Path2D().addPath(new Path2D)}catch{return!1}return!0}();function rt(c){const s=c,{value:a,size:i=X,level:g=K,bgColor:u=W,fgColor:E=j,includeMargin:C=x,style:t,imageSettings:e}=s,r=$(s,["value","size","level","bgColor","fgColor","includeMargin","style","imageSettings"]),n=e==null?void 0:e.src,o=I.useRef(null),h=I.useRef(null),[l,m]=I.useState(!1);I.useEffect(()=>{if(o.current!=null){const R=o.current,d=R.getContext("2d");if(!d)return;let M=y.QrCode.encodeText(a,G[g]).getModules();const w=C?z:0,P=M.length+w*2,_=q(M,i,C,e),N=h.current,L=_!=null&&N!==null&&N.complete&&N.naturalHeight!==0&&N.naturalWidth!==0;L&&_.excavation!=null&&(M=J(M,_.excavation));const O=window.devicePixelRatio||1;R.height=R.width=i*O;const b=i/P*O;d.scale(b,b),d.fillStyle=u,d.fillRect(0,0,P,P),d.fillStyle=E,tt?d.fill(new Path2D(Z(M,w))):M.forEach(function(U,Q){U.forEach(function(k,H){k&&d.fillRect(H+w,Q+w,1,1)})}),L&&d.drawImage(N,_.x+w,_.y+w,_.w,_.h)}}),I.useEffect(()=>{m(!1)},[n]);const f=B({height:i,width:i},t);let A=null;return n!=null&&(A=v.createElement("img",{src:n,key:n,style:{display:"none"},onLoad:()=>{m(!0)},ref:h})),v.createElement(v.Fragment,null,v.createElement("canvas",B({style:f,height:i,width:i,ref:o},r)),A)}export{rt as Q};
