import{SvelteComponent as e,append as t,attr as n,create_component as s,destroy_component as r,detach as a,element as l,init as o,insert as c,mount_component as i,noop as v,safe_not_equal as d,space as f,text as m,transition_in as u,transition_out as h}from"/svelte-feather/dist/web_modules/svelte/internal.js";import{IconGithub as p}from"/svelte-feather/dist/web_modules/svelte-feather.js";function g(e){let o,d,g,b,w,$,z;const y=new p({props:{class:"nav-icon",size:"small"}});return{c(){o=l("nav"),d=l("div"),d.innerHTML='<a class="brand" href="#">svelte-feather</a> \n\n        <a class="version svelte-1coezw" href="https://github.com/novacbn/svelte-feather/releases" target="_blank" rel="noopener noreferrer"><span class="badge">v0.0.1</span></a>',g=f(),b=l("div"),w=l("a"),s(y.$$.fragment),$=m("\n            GitHub"),n(d,"class","nav-left"),n(w,"class","button outline"),n(w,"href","https://github.com/novacbn/svelte-feather"),n(w,"target","_blank"),n(w,"rel","noopener noreferrer"),n(b,"class","nav-right"),n(o,"class","nav")},m(e,n){c(e,o,n),t(o,d),t(o,g),t(o,b),t(b,w),i(y,w,null),t(w,$),z=!0},p:v,i(e){z||(u(y.$$.fragment,e),z=!0)},o(e){h(y.$$.fragment,e),z=!1},d(e){e&&a(o),r(y)}}}export default class extends e{constructor(e){var n;super(),document.getElementById("svelte-1coezw-style")||((n=l("style")).id="svelte-1coezw-style",n.textContent=".version.svelte-1coezw{padding-left:0}.nav-icon{margin-right:0.75rem}",t(document.head,n)),o(this,e,null,g,d,{})}}