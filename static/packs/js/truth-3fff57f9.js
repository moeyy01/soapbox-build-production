import{jK as t,ki as c,z as i,cy as n,cv as o}from"../index-961d4ed1.js";const d=t.object({impression:t.string(),card:c,expires_at:t.string(),reason:t.string().catch("")}),h={getAds:async e=>{const s=e(),r=i(s);try{const{data:a}=await n.get("/api/v2/truth/ads?device=desktop",{headers:{"Accept-Language":t.string().catch("*").parse(r.get("locale"))}});return o(d).parse(a)}catch{}return[]}};export{h as default};