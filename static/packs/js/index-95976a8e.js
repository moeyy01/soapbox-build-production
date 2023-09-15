import{c,ip as r,is as n,_ as i,aP as p}from"../index-961d4ed1.js";const h=()=>{const a=c(),{search:s}=r(),t=new URLSearchParams(s),e=[t.get("title"),t.get("text"),t.get("url")].filter(o=>o).join(`

`);return e&&a(n("compose-modal",e)),i(p,{to:"/"})};export{h as default};
