import{bk as n,f as r,bl as p,bm as g,bn as c,jE as l}from"../index-961d4ed1.js";function d(){const t=n(),u=r(),{entities:e,...i}=p([c.GROUPS,"suggested"],()=>t.get("/api/v1/truth/suggestions/groups"),{schema:g,enabled:u.groupsDiscovery}),{relationships:a}=l(["suggested"],e.map(s=>s.id)),o=e.map(s=>({...s,relationship:a[s.id]||null}));return{...i,groups:o}}export{d as u};
