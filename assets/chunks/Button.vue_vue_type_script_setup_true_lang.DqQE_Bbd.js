import{_ as a}from"./Icon.vue_vue_type_script_setup_true_lang.D6-bMglB.js";import{d as t,s as r,o,c as p,b as s,e as i,j as d,r as u,n as c}from"./framework.BZaIkLTY.js";const f=["disabled","autofocus","type"],k=t({name:"VcButton",__name:"Button",props:{type:{},size:{},plain:{type:Boolean},round:{type:Boolean},circle:{type:Boolean},loading:{type:Boolean},disabled:{type:Boolean},icon:{},nativeType:{default:"button"},autofocus:{type:Boolean}},setup(y,{expose:l}){const n=r();return l({ref:n}),(e,m)=>(o(),p("button",{ref_key:"_ref",ref:n,class:c(["vc-button",{[`vc-button--${e.type}`]:e.type,[`vc-button--${e.size}`]:e.size,"is-plain":e.plain,"is-round":e.round,"is-circle":e.circle,"is-disabled":e.disabled,"is-loading":e.loading}]),disabled:e.disabled||e.loading,autofocus:e.autofocus,type:e.nativeType},[e.loading?(o(),s(a,{key:0,icon:"spinner",spin:""})):i("",!0),e.icon?(o(),s(a,{key:1,icon:e.icon},null,8,["icon"])):i("",!0),d("span",null,[u(e.$slots,"default")])],10,f))}});export{k as _};
