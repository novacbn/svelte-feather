import{SvelteComponent as e,append as n,attr as i,check_outros as t,create_component as l,destroy_component as s,detach as o,element as c,empty as r,group_outros as a,init as m,insert as d,listen as f,mount_component as p,safe_not_equal as w,set_data as u,space as v,text as h,toggle_class as $,transition_in as g,transition_out as j}from"/svelte-feather/dist/web_modules/svelte/internal.js";import{createEventDispatcher as k}from"/svelte-feather/dist/web_modules/svelte.js";import{ICON_DEFAULTS as b}from"../icons.js";function z(e){let n,i;var c=e[0];function m(e){return{props:{color:e[3],fill:e[4],linecap:e[5],linejoin:e[6],size:e[7],width:e[8]}}}if(c)var f=new c(m(e));return{c(){f&&l(f.$$.fragment),n=r()},m(e,t){f&&p(f,e,t),d(e,n,t),i=!0},p(e,i){const o={};if(8&i&&(o.color=e[3]),16&i&&(o.fill=e[4]),32&i&&(o.linecap=e[5]),64&i&&(o.linejoin=e[6]),128&i&&(o.size=e[7]),256&i&&(o.width=e[8]),c!==(c=e[0])){if(f){a();const e=f;j(e.$$.fragment,1,0,()=>{s(e,1)}),t()}c?(f=new c(m(e)),l(f.$$.fragment),g(f.$$.fragment,1),p(f,n.parentNode,n)):f=null}else c&&f.$set(o)},i(e){i||(f&&g(f.$$.fragment,e),i=!0)},o(e){f&&j(f.$$.fragment,e),i=!1},d(e){e&&o(n),f&&s(f,e)}}}function _(e){let l,s,r,m,p,w,k,b,_,x,y=e[0]&&z(e);return{c(){l=c("a"),s=c("article"),r=c("p"),y&&y.c(),m=v(),p=c("header"),w=c("small"),k=c("code"),b=h(e[1]),i(r,"class","text-center svelte-15wtk1w"),i(p,"class","text-center"),i(s,"class","card svelte-15wtk1w"),i(l,"href","#"),i(l,"class","svelte-15wtk1w"),$(l,"is-hidden",!e[2])},m(i,t,o){d(i,l,t),n(l,s),n(s,r),y&&y.m(r,null),n(s,m),n(s,p),n(p,w),n(w,k),n(k,b),_=!0,o&&x(),x=f(l,"click",e[9])},p(e,[n]){e[0]?y?(y.p(e,n),1&n&&g(y,1)):(y=z(e),y.c(),g(y,1),y.m(r,null)):y&&(a(),j(y,1,1,()=>{y=null}),t()),(!_||2&n)&&u(b,e[1]),4&n&&$(l,"is-hidden",!e[2])},i(e){_||(g(y),_=!0)},o(e){j(y),_=!1},d(e){e&&o(l),y&&y.d(),x()}}}function x(e,n,i){const t=k();let{component:l=null}=n,{class_name:s=""}=n,{visible:o=!0}=n,{color:c=b.color}=n,{fill:r=b.fill}=n,{linecap:a=b.linecap}=n,{linejoin:m=b.linejoin}=n,{size:d=b.size}=n,{width:f=b.size}=n;return e.$set=e=>{"component"in e&&i(0,l=e.component),"class_name"in e&&i(1,s=e.class_name),"visible"in e&&i(2,o=e.visible),"color"in e&&i(3,c=e.color),"fill"in e&&i(4,r=e.fill),"linecap"in e&&i(5,a=e.linecap),"linejoin"in e&&i(6,m=e.linejoin),"size"in e&&i(7,d=e.size),"width"in e&&i(8,f=e.width)},[l,s,o,c,r,a,m,d,f,function(e){e.preventDefault(),t("click",{class_name:s})}]}export default class extends e{constructor(e){var i;super(),document.getElementById("svelte-15wtk1w-style")||((i=c("style")).id="svelte-15wtk1w-style",i.textContent="article.svelte-15wtk1w{padding-top:2rem;padding-bottom:2rem;overflow:hidden}p.svelte-15wtk1w{margin-bottom:1rem}a.svelte-15wtk1w{color:inherit}",n(document.head,i)),m(this,e,x,_,w,{component:0,class_name:1,visible:2,color:3,fill:4,linecap:5,linejoin:6,size:7,width:8})}}