import{bk as i,gY as n,jI as u,bn as o}from"../index-961d4ed1.js";function p(t){const s=i(),{entity:a,...e}=n([o.GROUP_TAGS,t],()=>s.get(`/api/v1/tags/${t}`),{schema:u});return{...e,tag:a}}export{p as u};
