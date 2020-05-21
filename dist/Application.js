import{SvelteComponent as e,add_flush_callback as n,append as t,attr as o,bind as l,binding_callbacks as i,component_subscribe as s,create_component as c,destroy_component as a,detach as r,element as m,init as f,insert as p,listen as u,mount_component as d,safe_not_equal as $,set_store_value as g,space as v,transition_in as h,transition_out as w}from"/svelte-feather/dist/web_modules/svelte/internal.js";import{query_param as j}from"/svelte-feather/dist/web_modules/svelte-commons.js";import{ICON_DEFAULTS as y,ICON_MANIFEST as z}from"./icons.js";import _ from"./components/ComponentOverlay.js";import x from"./components/IconEditor.js";import b from"./components/IconGrid.js";import C from"./components/PageHeader.js";import k from"./components/PageNav.js";import L from"./components/PageFooter.js";import E from"./components/SearchBar.js";import I from"./components/TagList.js";function P(e){let s,f,$,g,j,y,z,P,T,B,H,S,F,G,M,N,O,R,q,A,D,J,K,Q,U,V,W,X;function Y(n){e[22].call(null,n)}let Z={color:e[4].color,fill:e[4].fill,linecap:e[4].linecap,linejoin:e[4].linejoin,size:e[4].size,width:e[4].width};void 0!==e[2]&&(Z.class_name=e[2]);const ee=new _({props:Z});i.push(()=>l(ee,"class_name",Y));const ne=new k({}),te=new C({});function oe(n){e[23].call(null,n)}let le={count:e[1].length};void 0!==e[3]&&(le.value=e[3]);const ie=new E({props:le});i.push(()=>l(ie,"value",oe));const se=new I({});se.$on("click",e[21]);const ce=new b({props:{color:e[5],fill:e[6],linecap:e[7],linejoin:e[8],size:e[9],width:e[10],icons:e[1]}});function ae(n){e[25].call(null,n)}function re(n){e[26].call(null,n)}function me(n){e[27].call(null,n)}function fe(n){e[28].call(null,n)}function pe(n){e[29].call(null,n)}function ue(n){e[30].call(null,n)}ce.$on("click",e[19]);let de={};void 0!==e[5]&&(de.color=e[5]),void 0!==e[6]&&(de.fill=e[6]),void 0!==e[7]&&(de.linecap=e[7]),void 0!==e[8]&&(de.linejoin=e[8]),void 0!==e[9]&&(de.size=e[9]),void 0!==e[10]&&(de.width=e[10]);const $e=new x({props:de});e[24]($e),i.push(()=>l($e,"color",ae)),i.push(()=>l($e,"fill",re)),i.push(()=>l($e,"linecap",me)),i.push(()=>l($e,"linejoin",fe)),i.push(()=>l($e,"size",pe)),i.push(()=>l($e,"width",ue));const ge=new L({});return{c(){c(ee.$$.fragment),f=v(),c(ne.$$.fragment),$=v(),c(te.$$.fragment),g=v(),j=m("main"),y=m("div"),c(ie.$$.fragment),P=v(),c(se.$$.fragment),T=v(),c(ce.$$.fragment),B=v(),H=m("hr"),S=v(),F=m("aside"),G=m("header"),M=m("div"),M.innerHTML='<h4 class="svelte-12yvgmf">Customize</h4>',N=v(),O=m("div"),R=m("button"),R.textContent="RESET",q=v(),c($e.$$.fragment),V=v(),c(ge.$$.fragment),o(y,"class","col-12 col-9-md is-marginless"),o(H,"class","hide-md hide-lg svelte-12yvgmf"),o(M,"class","col-7"),o(O,"class","col-5 text-right"),o(G,"class","row"),o(F,"class","col-12 col-3-md svelte-12yvgmf"),o(j,"class","row svelte-12yvgmf")},m(n,o,l){d(ee,n,o),p(n,f,o),d(ne,n,o),p(n,$,o),d(te,n,o),p(n,g,o),p(n,j,o),t(j,y),d(ie,y,null),t(y,P),d(se,y,null),t(y,T),d(ce,y,null),t(j,B),t(j,H),t(j,S),t(j,F),t(F,G),t(G,M),t(G,N),t(G,O),t(O,R),t(F,q),d($e,F,null),p(n,V,o),d(ge,n,o),W=!0,l&&X(),X=u(R,"click",e[20])},p(e,[t]){const o={};16&t&&(o.color=e[4].color),16&t&&(o.fill=e[4].fill),16&t&&(o.linecap=e[4].linecap),16&t&&(o.linejoin=e[4].linejoin),16&t&&(o.size=e[4].size),16&t&&(o.width=e[4].width),!s&&4&t&&(s=!0,o.class_name=e[2],n(()=>s=!1)),ee.$set(o);const l={};2&t&&(l.count=e[1].length),!z&&8&t&&(z=!0,l.value=e[3],n(()=>z=!1)),ie.$set(l);const i={};32&t&&(i.color=e[5]),64&t&&(i.fill=e[6]),128&t&&(i.linecap=e[7]),256&t&&(i.linejoin=e[8]),512&t&&(i.size=e[9]),1024&t&&(i.width=e[10]),2&t&&(i.icons=e[1]),ce.$set(i);const c={};!A&&32&t&&(A=!0,c.color=e[5],n(()=>A=!1)),!D&&64&t&&(D=!0,c.fill=e[6],n(()=>D=!1)),!J&&128&t&&(J=!0,c.linecap=e[7],n(()=>J=!1)),!K&&256&t&&(K=!0,c.linejoin=e[8],n(()=>K=!1)),!Q&&512&t&&(Q=!0,c.size=e[9],n(()=>Q=!1)),!U&&1024&t&&(U=!0,c.width=e[10],n(()=>U=!1)),$e.$set(c)},i(e){W||(h(ee.$$.fragment,e),h(ne.$$.fragment,e),h(te.$$.fragment,e),h(ie.$$.fragment,e),h(se.$$.fragment,e),h(ce.$$.fragment,e),h($e.$$.fragment,e),h(ge.$$.fragment,e),W=!0)},o(e){w(ee.$$.fragment,e),w(ne.$$.fragment,e),w(te.$$.fragment,e),w(ie.$$.fragment,e),w(se.$$.fragment,e),w(ce.$$.fragment,e),w($e.$$.fragment,e),w(ge.$$.fragment,e),W=!1},d(n){a(ee,n),n&&r(f),a(ne,n),n&&r($),a(te,n),n&&r(g),n&&r(j),a(ie),a(se),a(ce),e[24](null),a($e),n&&r(V),a(ge,n),X()}}}function T(e,n,t){let o,l,c,a,r,m,f,p;const u=j("class_name","");s(e,u,e=>t(2,o=e));const d=j("search","",{replace:!0});s(e,d,e=>t(3,l=e));const $=j("color",y.color,{replace:!0});s(e,$,e=>t(5,c=e));const v=j("fill",y.fill,{replace:!0});s(e,v,e=>t(6,a=e));const h=j("linecap",y.linecap,{replace:!0});s(e,h,e=>t(7,r=e));const w=j("linejoin",y.linejoin,{replace:!0});s(e,w,e=>t(8,m=e));const _=j("size",y.size,{replace:!0});s(e,_,e=>t(9,f=e));const x=j("width",y.width,{replace:!0});let b;s(e,x,e=>t(10,p=e));let C,k=[];return e.$$.update=()=>{if(2020&e.$$.dirty&&t(4,C={class_name:o,color:c,fill:a,linecap:r,linejoin:m,size:f,width:p}),8&e.$$.dirty)if(l){const e=l.toLowerCase();t(1,k=z.map(({class_name:n,component:t,display_name:o,name:l,tags:i})=>{let s=n.toLowerCase().includes(e)||l.includes(e)||o.toLowerCase().includes(e);if(!s)for(const n of i)if(n.includes(e)){s=!0;break}return{class_name:n,component:t,display_name:o,name:l,tags:i,visible:s}}))}else t(1,k=z.map(e=>({...e,visible:!0})))},[b,k,o,l,C,c,a,r,m,f,p,u,d,$,v,h,w,_,x,function(e){g(u,o=e.detail.class_name)},function(e){b&&b.reset()},function(e){g(d,l=e.detail.tag)},function(e){o=e,u.set(o)},function(e){l=e,d.set(l)},function(e){i[e?"unshift":"push"](()=>{t(0,b=e)})},function(e){c=e,$.set(c)},function(e){a=e,v.set(a)},function(e){r=e,h.set(r)},function(e){m=e,w.set(m)},function(e){f=e,_.set(f)},function(e){p=e,x.set(p)}]}export default class extends e{constructor(e){var n;super(),document.getElementById("svelte-12yvgmf-style")||((n=m("style")).id="svelte-12yvgmf-style",n.textContent="main.svelte-12yvgmf{margin-top:4rem;margin-bottom:2rem;margin-left:2rem;margin-right:2rem}aside.svelte-12yvgmf{height:fit-content}h4.svelte-12yvgmf{margin-top:0}@media screen and (min-width: 900px){aside.svelte-12yvgmf{position:sticky;top:2rem;margin-left:3rem;max-width:450px}}@media screen and (max-width: 899px){main.svelte-12yvgmf{flex-direction:column-reverse}hr.svelte-12yvgmf{margin-bottom:2rem}}",t(document.head,n)),f(this,e,T,P,$,{})}}