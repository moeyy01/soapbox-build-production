import{p,_ as t,cP as n,a8 as r}from"../index-961d4ed1.js";import{n as c}from"./noop-33ff36b4.js";const f=s=>{let{pollId:a}=s;const e=p(o=>o.polls.get(a));return e?t(r,{space:2},void 0,e.options.map((o,l)=>t(n,{poll:e,option:o,index:l,showResults:!1,active:!1,onToggle:c},l))):null};export{f as P};