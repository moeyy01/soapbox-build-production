import{v as c,a as n}from"./layout-list-0e6136f9.js";import{_ as a,c7 as s,a1 as o,H as l}from"../index-961d4ed1.js";var e=function(t){return t.LIST="LIST",t.GRID="GRID",t}(e||{});const I=t=>{let{layout:i,onSelect:r}=t;return a(l,{alignItems:"center",space:1},void 0,a("button",{"data-testid":"layout-list-action",onClick:()=>r(e.LIST)},void 0,a(s,{src:n,className:o("h-5 w-5 text-gray-600",{"text-primary-600":i===e.LIST})})),a("button",{"data-testid":"layout-grid-action",onClick:()=>r(e.GRID)},void 0,a(s,{src:c,className:o("h-5 w-5 text-gray-600",{"text-primary-600":i===e.GRID})})))};export{e as G,I as L};