import{bk as n,aw as f,br as h,bs as g,bn as r,bl as m,bt as w}from"../index-961d4ed1.js";function d(s,e){const a=n(),{isLoggedIn:i}=f();function c(t){const p=t.map(b=>`id[]=${b}`).join("&");return a.get(`/api/v1/accounts/relationships?${p}`)}const{entityMap:u,...l}=h([r.RELATIONSHIPS,...s],e,c,{schema:g,enabled:i});return{relationships:u,...l}}function o(s,e,a={}){const{entities:i,...c}=m([r.ACCOUNTS,...s],e,{schema:w,enabled:a.enabled}),{relationships:u}=d(s,i.map(({id:t})=>t));return{accounts:i.map(t=>({...t,relationship:u[t.id]})),...c}}function S(){const s=n();return o(["blocks"],()=>s.get("/api/v1/blocks"))}function k(){const s=n();return o(["mutes"],()=>s.get("/api/v1/mutes"))}function A(s){const e=n();return o([s,"following"],()=>e.get(`/api/v1/accounts/${s}/following`),{enabled:!!s})}function E(s){const e=n();return o([s,"followers"],()=>e.get(`/api/v1/accounts/${s}/followers`),{enabled:!!s})}export{A as a,S as b,k as c,E as u};