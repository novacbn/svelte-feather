import{SvelteComponent as e,append as t,attr as n,detach as s,element as i,init as o,insert as l,listen as c,noop as r,run_all as a,safe_not_equal as d,set_data as m,space as u,text as h,toggle_class as p}from"/svelte-feather/dist/web_modules/svelte/internal.js";import{TEMPLATE_CODE as g}from"../util.js";function f(e){let o,d,g,f,k,v,j,w,y,q,x,b,$;return{c(){o=i("section"),d=i("div"),g=i("header"),f=i("h3"),k=i("code"),v=h(e[0]),j=u(),w=i("pre"),y=i("code"),q=u(),x=i("footer"),b=i("button"),b.textContent="OKAY!",n(k,"class","svelte-1mwkqje"),n(y,"class","language-html svelte-1mwkqje"),n(b,"class","button primary"),n(x,"class","is-right"),n(d,"class","card"),n(o,"class","svelte-1mwkqje"),p(o,"is-hidden",!e[0])},m(n,s,i){l(n,o,s),t(o,d),t(d,g),t(g,f),t(f,k),t(k,v),t(d,j),t(d,w),t(w,y),y.innerHTML=e[1],t(d,q),t(d,x),t(x,b),i&&a($),$=[c(b,"click",e[2]),c(o,"click",e[3])]},p(e,[t]){1&t&&m(v,e[0]),2&t&&(y.innerHTML=e[1]),1&t&&p(o,"is-hidden",!e[0])},i:r,o:r,d(e){e&&s(o),a($)}}}function k(e,t,n){let{component:s=""}=t;let i="";return e.$set=e=>{"component"in e&&n(0,s=e.component)},e.$$.update=()=>{if(1&e.$$.dirty){const e=g({class_name:s});n(1,i=Prism.highlight(e,Prism.languages.html,"html"))}},[s,i,function(e){n(0,s="")},function(e){"SECTION"===e.target.tagName&&n(0,s="")}]}export default class extends e{constructor(e){var n;super(),document.getElementById("svelte-1mwkqje-style")||((n=i("style")).id="svelte-1mwkqje-style",n.textContent='section.svelte-1mwkqje{display:flex;position:fixed;align-items:center;justify-content:center;width:100%;height:100%;z-index:1}section.svelte-1mwkqje::before{display:block;content:"";position:absolute;width:100%;height:100%;background-color:var(--color-darkGrey);opacity:0.5;z-index:-1}code.svelte-1mwkqje{user-select:all}',t(document.head,n)),o(this,e,k,f,d,{component:0})}}