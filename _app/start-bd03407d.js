var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,r=Object.getOwnPropertySymbols,s=Object.prototype.propertyIsEnumerable,n=(t,r,s)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[r]=s,a=(e,a)=>{for(var o in a||(a={}))t.call(a,o)&&n(e,o,a[o]);if(r)for(var o of r(a))s.call(a,o)&&n(e,o,a[o]);return e};import{S as o,i,s as c,e as l,t as u,c as h,a as p,b as f,d,f as g,g as m,h as v,j as $,k as y,l as b,n as w,m as E,o as _,p as x,q as k,r as S,u as q,v as R,w as O,x as A,y as L,z as P,A as T,B as j,C as N,D as C,T as D,G as I,E as U,F as z,H as V}from"./chunks/index-1bdcd2ec.js";function H(e){let t,r,s=e[1].stack+"";return{c(){t=l("pre"),r=u(s)},l(e){t=h(e,"PRE",{});var n=p(t);r=f(n,s),n.forEach(d)},m(e,s){g(e,t,s),m(t,r)},p(e,t){2&t&&s!==(s=e[1].stack+"")&&v(r,s)},d(e){e&&d(t)}}}function B(e){let t,r,s,n,a,o,i,c=e[1].message+"",E=e[1].stack&&H(e);return{c(){t=l("h1"),r=u(e[0]),s=$(),n=l("p"),a=u(c),o=$(),E&&E.c(),i=y()},l(l){t=h(l,"H1",{});var u=p(t);r=f(u,e[0]),u.forEach(d),s=b(l),n=h(l,"P",{});var g=p(n);a=f(g,c),g.forEach(d),o=b(l),E&&E.l(l),i=y()},m(e,c){g(e,t,c),m(t,r),g(e,s,c),g(e,n,c),m(n,a),g(e,o,c),E&&E.m(e,c),g(e,i,c)},p(e,[t]){1&t&&v(r,e[0]),2&t&&c!==(c=e[1].message+"")&&v(a,c),e[1].stack?E?E.p(e,t):(E=H(e),E.c(),E.m(i.parentNode,i)):E&&(E.d(1),E=null)},i:w,o:w,d(e){e&&d(t),e&&d(s),e&&d(n),e&&d(o),E&&E.d(e),e&&d(i)}}}function F(e,t,r){let{status:s}=t,{error:n}=t;return e.$$set=e=>{"status"in e&&r(0,s=e.status),"error"in e&&r(1,n=e.error)},[s,n]}class G extends o{constructor(e){super(),i(this,e,F,B,c,{status:0,error:1})}}function K(e){let t,r,s;const n=[e[4]||{}];var a=e[2][1];function o(e){let t={};for(let r=0;r<n.length;r+=1)t=E(t,n[r]);return{props:t}}return a&&(t=new a(o())),{c(){t&&x(t.$$.fragment),r=y()},l(e){t&&k(t.$$.fragment,e),r=y()},m(e,n){t&&S(t,e,n),g(e,r,n),s=!0},p(e,s){const i=16&s?q(n,[R(e[4]||{})]):{};if(a!==(a=e[2][1])){if(t){N();const e=t;A(e.$$.fragment,1,0,(()=>{L(e,1)})),C()}a?(t=new a(o()),x(t.$$.fragment),O(t.$$.fragment,1),S(t,r.parentNode,r)):t=null}else a&&t.$set(i)},i(e){s||(t&&O(t.$$.fragment,e),s=!0)},o(e){t&&A(t.$$.fragment,e),s=!1},d(e){e&&d(r),t&&L(t,e)}}}function M(e){let t,r;return t=new G({props:{status:e[0],error:e[1]}}),{c(){x(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,s){S(t,e,s),r=!0},p(e,r){const s={};1&r&&(s.status=e[0]),2&r&&(s.error=e[1]),t.$set(s)},i(e){r||(O(t.$$.fragment,e),r=!0)},o(e){A(t.$$.fragment,e),r=!1},d(e){L(t,e)}}}function W(e){let t,r,s,n;const a=[M,K],o=[];function i(e,t){return e[1]?0:1}return t=i(e),r=o[t]=a[t](e),{c(){r.c(),s=y()},l(e){r.l(e),s=y()},m(e,r){o[t].m(e,r),g(e,s,r),n=!0},p(e,n){let c=t;t=i(e),t===c?o[t].p(e,n):(N(),A(o[c],1,1,(()=>{o[c]=null})),C(),r=o[t],r?r.p(e,n):(r=o[t]=a[t](e),r.c()),O(r,1),r.m(s.parentNode,s))},i(e){n||(O(r),n=!0)},o(e){A(r),n=!1},d(e){o[t].d(e),e&&d(s)}}}function Y(e){let t,r=e[6]&&J(e);return{c(){t=l("div"),r&&r.c(),this.h()},l(e){t=h(e,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,class:!0});var s=p(t);r&&r.l(s),s.forEach(d),this.h()},h(){_(t,"id","svelte-announcer"),_(t,"aria-live","assertive"),_(t,"aria-atomic","true"),_(t,"class","svelte-1j55zn5")},m(e,s){g(e,t,s),r&&r.m(t,null)},p(e,s){e[6]?r?r.p(e,s):(r=J(e),r.c(),r.m(t,null)):r&&(r.d(1),r=null)},d(e){e&&d(t),r&&r.d()}}}function J(e){let t,r;return{c(){t=u("Navigated to "),r=u(e[7])},l(s){t=f(s,"Navigated to "),r=f(s,e[7])},m(e,s){g(e,t,s),g(e,r,s)},p(e,t){128&t&&v(r,e[7])},d(e){e&&d(t),e&&d(r)}}}function X(e){let t,r,s,n;const a=[e[3]||{}];let o={$$slots:{default:[W]},$$scope:{ctx:e}};for(let c=0;c<a.length;c+=1)o=E(o,a[c]);t=new e[8]({props:o});let i=e[5]&&Y(e);return{c(){x(t.$$.fragment),r=$(),i&&i.c(),s=y()},l(e){k(t.$$.fragment,e),r=b(e),i&&i.l(e),s=y()},m(e,a){S(t,e,a),g(e,r,a),i&&i.m(e,a),g(e,s,a),n=!0},p(e,[r]){const n=8&r?q(a,[R(e[3]||{})]):{};2071&r&&(n.$$scope={dirty:r,ctx:e}),t.$set(n),e[5]?i?i.p(e,r):(i=Y(e),i.c(),i.m(s.parentNode,s)):i&&(i.d(1),i=null)},i(e){n||(O(t.$$.fragment,e),n=!0)},o(e){A(t.$$.fragment,e),n=!1},d(e){L(t,e),e&&d(r),i&&i.d(e),e&&d(s)}}}function Q(e,t,r){let{status:s}=t,{error:n}=t,{stores:a}=t,{page:o}=t,{components:i}=t,{props_0:c=null}=t,{props_1:l=null}=t;const u=i[0];P("__svelte__",a),T(a.page.notify);let h=!1,p=!1,f=null;return j((()=>{const e=a.page.subscribe((()=>{h&&(r(6,p=!0),r(7,f=document.title))}));return r(5,h=!0),e})),e.$$set=e=>{"status"in e&&r(0,s=e.status),"error"in e&&r(1,n=e.error),"stores"in e&&r(9,a=e.stores),"page"in e&&r(10,o=e.page),"components"in e&&r(2,i=e.components),"props_0"in e&&r(3,c=e.props_0),"props_1"in e&&r(4,l=e.props_1)},e.$$.update=()=>{1536&e.$$.dirty&&a.page.set(o)},[s,n,i,c,l,h,p,f,u,a,o]}class Z extends o{constructor(e){super(),i(this,e,Q,X,c,{status:0,error:1,stores:9,page:10,components:2,props_0:3,props_1:4})}}let ee;const te={};function re(e){let t,r,s,n,a,o,i;return o=new D({props:{color:"#00aced",size:"0.9em"}}),{c(){t=l("hr"),r=$(),s=l("footer"),n=l("a"),a=u("Originally made by @colebemis\n\n        "),x(o.$$.fragment),this.h()},l(e){t=h(e,"HR",{class:!0}),r=b(e),s=h(e,"FOOTER",{class:!0});var i=p(s);n=h(i,"A",{href:!0,target:!0,rel:!0});var c=p(n);a=f(c,"Originally made by @colebemis\n\n        "),k(o.$$.fragment,c),c.forEach(d),i.forEach(d),this.h()},h(){_(t,"class","svelte-68az75"),_(n,"href","https://twitter.com/colebemis"),_(n,"target","_blank"),_(n,"rel","noopener noreferrer"),_(s,"class","svelte-68az75")},m(e,c){g(e,t,c),g(e,r,c),g(e,s,c),m(s,n),m(n,a),S(o,n,null),i=!0},p:w,i(e){i||(O(o.$$.fragment,e),i=!0)},o(e){A(o.$$.fragment,e),i=!1},d(e){e&&d(t),e&&d(r),e&&d(s),L(o)}}}class se extends o{constructor(e){super(),i(this,e,null,re,c,{})}}function ne(e){let t,r,s,n,a,o,i,c,v,y,E;return{c(){t=l("header"),r=l("h2"),s=l("a"),n=u("Feather Icons"),a=u("\n        as\n        "),o=l("a"),i=u("Svelte"),c=u("\n        Components"),v=$(),y=l("code"),E=u("npm install github:novacbn/svelte-feather#0.1.0"),this.h()},l(e){t=h(e,"HEADER",{class:!0});var l=p(t);r=h(l,"H2",{});var u=p(r);s=h(u,"A",{href:!0,target:!0,rel:!0});var g=p(s);n=f(g,"Feather Icons"),g.forEach(d),a=f(u,"\n        as\n        "),o=h(u,"A",{href:!0,target:!0,rel:!0});var m=p(o);i=f(m,"Svelte"),m.forEach(d),c=f(u,"\n        Components"),u.forEach(d),v=b(l),y=h(l,"CODE",{class:!0});var $=p(y);E=f($,"npm install github:novacbn/svelte-feather#0.1.0"),$.forEach(d),l.forEach(d),this.h()},h(){_(s,"href","https://feathericons.com/"),_(s,"target","_blank"),_(s,"rel","noopener noreferrer"),_(o,"href","https://svelte.dev/"),_(o,"target","_blank"),_(o,"rel","noopener noreferrer"),_(y,"class","card svelte-oa9ma6"),_(t,"class","container text-center")},m(e,l){g(e,t,l),m(t,r),m(r,s),m(s,n),m(r,a),m(r,o),m(o,i),m(r,c),m(t,v),m(t,y),m(y,E)},p:w,i:w,o:w,d(e){e&&d(t)}}}class ae extends o{constructor(e){super(),i(this,e,null,ne,c,{})}}function oe(e){let t,r,s,n,a,o,i,c,v,y,E,q,R,P;return q=new I({props:{class:"nav-icon",size:"small"}}),{c(){t=l("nav"),r=l("div"),s=l("a"),n=u("svelte-feather"),a=$(),o=l("a"),i=l("span"),c=u("v0.1.0"),v=$(),y=l("div"),E=l("a"),x(q.$$.fragment),R=u("\n            GitHub"),this.h()},l(e){t=h(e,"NAV",{class:!0});var l=p(t);r=h(l,"DIV",{class:!0});var u=p(r);s=h(u,"A",{class:!0,href:!0});var g=p(s);n=f(g,"svelte-feather"),g.forEach(d),a=b(u),o=h(u,"A",{class:!0,href:!0,target:!0,rel:!0});var m=p(o);i=h(m,"SPAN",{class:!0});var $=p(i);c=f($,"v0.1.0"),$.forEach(d),m.forEach(d),u.forEach(d),v=b(l),y=h(l,"DIV",{class:!0});var w=p(y);E=h(w,"A",{class:!0,href:!0,target:!0,rel:!0});var _=p(E);k(q.$$.fragment,_),R=f(_,"\n            GitHub"),_.forEach(d),w.forEach(d),l.forEach(d),this.h()},h(){_(s,"class","brand"),_(s,"href","#"),_(i,"class","badge"),_(o,"class","version svelte-1coezw"),_(o,"href","https://github.com/novacbn/svelte-feather/releases"),_(o,"target","_blank"),_(o,"rel","noopener noreferrer"),_(r,"class","nav-left"),_(E,"class","button outline"),_(E,"href","https://github.com/novacbn/svelte-feather"),_(E,"target","_blank"),_(E,"rel","noopener noreferrer"),_(y,"class","nav-right"),_(t,"class","nav")},m(e,l){g(e,t,l),m(t,r),m(r,s),m(s,n),m(r,a),m(r,o),m(o,i),m(i,c),m(t,v),m(t,y),m(y,E),S(q,E,null),m(E,R),P=!0},p:w,i(e){P||(O(q.$$.fragment,e),P=!0)},o(e){A(q.$$.fragment,e),P=!1},d(e){e&&d(t),L(q)}}}class ie extends o{constructor(e){super(),i(this,e,null,oe,c,{})}}function ce(e){let t,r,s,n,a,o,i;t=new ie({}),s=new ae({});const c=e[1].default,l=U(c,e,e[0],null);return o=new se({}),{c(){x(t.$$.fragment),r=$(),x(s.$$.fragment),n=$(),l&&l.c(),a=$(),x(o.$$.fragment)},l(e){k(t.$$.fragment,e),r=b(e),k(s.$$.fragment,e),n=b(e),l&&l.l(e),a=b(e),k(o.$$.fragment,e)},m(e,c){S(t,e,c),g(e,r,c),S(s,e,c),g(e,n,c),l&&l.m(e,c),g(e,a,c),S(o,e,c),i=!0},p(e,[t]){l&&l.p&&1&t&&z(l,c,e,e[0],t,null,null)},i(e){i||(O(t.$$.fragment,e),O(s.$$.fragment,e),O(l,e),O(o.$$.fragment,e),i=!0)},o(e){A(t.$$.fragment,e),A(s.$$.fragment,e),A(l,e),A(o.$$.fragment,e),i=!1},d(e){L(t,e),e&&d(r),L(s,e),e&&d(n),l&&l.d(e),e&&d(a),L(o,e)}}}function le(e,t,r){let{$$slots:s={},$$scope:n}=t;return e.$$set=e=>{"$$scope"in e&&r(0,n=e.$$scope)},[n,s]}var ue=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:class extends o{constructor(e){super(),i(this,e,le,ce,c,{})}}});const he=[[/^\/$/,[[()=>function(e,t){if(!t)return e();if(void 0===ee){const e=document.createElement("link").relList;ee=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in te)return;te[e]=!0;const t=e.endsWith(".css"),r=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${r}`))return;const s=document.createElement("link");return s.rel=t?"stylesheet":ee,t||(s.as="script",s.crossOrigin=""),s.href=e,document.head.appendChild(s),t?new Promise(((e,t)=>{s.addEventListener("load",e),s.addEventListener("error",t)})):void 0}))).then((()=>e()))}((()=>import("./pages/index.svelte-41d8f44c.js")),["/svelte-feather/_app/pages/index.svelte-41d8f44c.js","/svelte-feather/_app/assets/pages/index.svelte-ca51d2e5.css","/svelte-feather/_app/chunks/index-1bdcd2ec.js"])][0]]]];function pe(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}function fe(){return{x:pageXOffset,y:pageYOffset}}class de{constructor({base:e,routes:t}){this.base=e,this.routes=t,this.history=window.history||{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"}}init(e){let t;this.renderer=e,e.router=this,"scrollRestoration"in this.history&&(this.history.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{this.history.scrollRestoration="auto"})),addEventListener("load",(()=>{this.history.scrollRestoration="manual"})),addEventListener("scroll",(()=>{clearTimeout(t),t=setTimeout((()=>{const e=a(a({},history.state||{}),{"sveltekit:scroll":fe()});history.replaceState(e,document.title,window.location.href)}),50)})),addEventListener("click",(e=>{if(e.button||1!==e.which)return;if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;if(e.defaultPrevented)return;const t=pe(e.target);if(!t)return;if(!t.href)return;const r="object"==typeof t.href&&"SVGAnimatedString"===t.href.constructor.name,s=String(r?t.href.baseVal:t.href);if(s===location.href)return void(location.hash||e.preventDefault());if(t.hasAttribute("download")||"external"===t.getAttribute("rel"))return;if(r?t.target.baseVal:t.target)return;const n=new URL(s);if(n.pathname===location.pathname&&n.search===location.search)return;const a=this.parse(n);if(a){const r=t.hasAttribute("sveltekit:noscroll");this.history.pushState({},"",n.href),this._navigate(a,r?fe():null,[],n.hash),e.preventDefault()}})),addEventListener("popstate",(e=>{if(e.state){const t=new URL(location.href),r=this.parse(t);r?this._navigate(r,e.state["sveltekit:scroll"],[]):location.href=location.href}})),document.body.setAttribute("tabindex","-1"),this.history.replaceState({},"",location.href)}parse(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(this.base))return null;const t=e.pathname.slice(this.base.length)||"/",r=this.routes.filter((([e])=>e.test(t)));return r.length>0?{routes:r,path:t,query:new URLSearchParams(e.search)}:void 0}async goto(e,{noscroll:t=!1,replaceState:r=!1}={},s){const n=new URL(e,function(e){let t=e.baseURI;if(!t){const r=e.getElementsByTagName("base");t=r.length?r[0].href:e.URL}return t}(document)),a=this.parse(n);return a?(this.history[r?"replaceState":"pushState"]({},"",e),this._navigate(a,t?fe():null,s,n.hash)):(location.href=e,new Promise((()=>{})))}async _navigate(e,t,r,s){this.renderer.notify({path:e.path,query:e.query}),location.pathname.endsWith("/")&&"/"!==location.pathname&&history.replaceState({},"",`${location.pathname.slice(0,-1)}${location.search}`),await this.renderer.update(e,r),document.body.focus();const n=s&&document.getElementById(s.slice(1));t?scrollTo(t.x,t.y):n?scrollTo(0,n.getBoundingClientRect().top+scrollY):scrollTo(0,0)}}function ge(e){if(e.error){const t="string"==typeof e.error?new Error(e.error):e.error,r=e.status;return t instanceof Error?!r||r<400||r>599?(console.warn('"error" returned from load() without a valid status code — defaulting to 500'),{status:500,error:t}):{status:r,error:t}:{status:500,error:new Error(`"error" property returned from load() must be a string or instance of Error, received type "${typeof t}"`)}}if(e.redirect){if(!e.status||3!==Math.floor(e.status/100))return{status:500,error:new Error('"redirect" property returned from load() must be accompanied by a 3xx status code')};if("string"!=typeof e.redirect)return{status:500,error:new Error('"redirect" property returned from load() must be a string')}}return e}function me(e){const t=V(e);let r=!0;return{notify:function(){r=!0,t.update((e=>e))},set:function(e){r=!1,t.set(e)},subscribe:function(e){let s;return t.subscribe((t=>{(void 0===s||r&&t!==s)&&e(s=t)}))}}}class ve{constructor({Root:e,layout:t,target:r,session:s,host:n}){this.Root=e,this.layout=t,this.host=n,this.router=null,this.target=r,this.started=!1,this.current={page:null,query:null,session_changed:!1,nodes:[],contexts:[]},this.caches=new Map,this.prefetching={href:null,promise:null},this.stores={page:me({}),navigating:V(null),session:V(s)},this.$session=null,this.root=null;const a=e=>{const t=pe(e.target);t&&t.hasAttribute("sveltekit:prefetch")&&this.prefetch(new URL(t.href))};let o;addEventListener("touchstart",a),addEventListener("mousemove",(e=>{clearTimeout(o),o=setTimeout((()=>{a(e)}),20)}));let i=!1;this.stores.session.subscribe((async e=>{if(this.$session=e,!i)return;this.current.session_changed=!0;const t=this.router.parse(new URL(location.href));this.update(t,[])})),i=!0}async start(e,t,r){const s={stores:this.stores,error:r,status:t,page:e.page};if(r)s.components=[this.layout.default];else{const t=await this._hydrate(e);if(t.redirect)throw new Error("TODO client-side redirects");Object.assign(s,t.props),this.current=t.state}this.root=new this.Root({target:this.target,props:s,hydrate:!0}),this.started=!0}notify({path:e,query:t}){dispatchEvent(new CustomEvent("sveltekit:navigation-start")),this.stores.navigating.set({from:{path:this.current.page.path,query:this.current.page.query},to:{path:e,query:t}})}async update(e,t){const r=this.token={},s=await this._get_navigation_result(e);if(r===this.token){if(s.reload)location.reload();else if(s.redirect){if(!(t.length>10||t.includes(this.current.page.path)))return void this.router.goto(s.redirect,{replaceState:!0},[...t,this.current.page.path]);this.root.$set({status:500,error:new Error("Redirect loop")})}else this.current=s.state,this.root.$set(s.props),this.stores.navigating.set(null),await 0;dispatchEvent(new CustomEvent("sveltekit:navigation-end"))}}async prefetch(e){const t=this.router.parse(e);if(t)return e.href!==this.prefetching.href&&(this.prefetching={href:e.href,promise:this._get_navigation_result(t)}),this.prefetching.promise;throw new Error(`Could not prefetch ${e.href}`)}async _get_navigation_result(e){for(let t=0;t<e.routes.length;t+=1){const r=e.routes[t],[s,n,a]=r;if(1===r.length)return{reload:!0};let o=t+1;for(;o<e.routes.length;){const t=e.routes[o];if(t[0].toString()!==s.toString())break;1!==t.length&&t[1].forEach((e=>e())),o+=1}const i=n.map((e=>e())),c={host:this.host,path:e.path,params:a?a(r[0].exec(e.path)):{},query:e.query},l=await this._hydrate({nodes:i,page:c});if(l)return l}return{state:{page:null,query:null,session_changed:!1,contexts:[],nodes:[]},props:{status:404,error:new Error(`Not found: ${e.path}`)}}}async _hydrate({nodes:e,page:n}){const o={status:200,error:null,components:[]},i=(e,n)=>{if(!this.started){const n="string"==typeof e?e:e.url,a=document.querySelector(`script[type="svelte-data"][url="${n}"]`);if(a){const e=JSON.parse(a.textContent),{body:n}=e,o=((e,n)=>{var a={};for(var o in e)t.call(e,o)&&n.indexOf(o)<0&&(a[o]=e[o]);if(null!=e&&r)for(var o of r(e))n.indexOf(o)<0&&s.call(e,o)&&(a[o]=e[o]);return a})(e,["body"]);return Promise.resolve(new Response(n,o))}}return fetch(e,n)},c=n.query.toString(),l={page:n,query:c,session_changed:!1,nodes:[],contexts:[]},u=[this.layout,...e],h=[];let p,f;const d={params:Object.keys(n.params).filter((e=>!this.current.page||this.current.page.params[e]!==n.params[e])),query:c!==this.current.query,session:this.current.session_changed,context:!1};try{for(let e=0;e<u.length;e+=1){const t=this.current.nodes[e],r=this.current.contexts[e],{default:s,preload:g,load:m}=await u[e];if(o.components[e]=s,g)throw new Error("preload has been deprecated in favour of load. Please consult the documentation: https://kit.svelte.dev/docs#load");if(!t||s!==t.component||d.params.some((e=>t.uses.params.has(e)))||d.query&&t.uses.query||d.session&&t.uses.session||d.context&&t.uses.context){const t=n.path+c,r=this.caches.get(s),u=r&&r.get(t);let g,v;if(!u||d.context&&u.node.uses.context){g={component:s,uses:{params:new Set,query:!1,session:!1,context:!1}};const e={};for(const r in n.params)Object.defineProperty(e,r,{get:()=>(g.uses.params.add(r),n.params[r]),enumerable:!0});const t=this.$session;if(m&&(v=await m.call(null,{page:{host:n.host,path:n.path,params:e,get query(){return g.uses.query=!0,n.query}},get session(){return g.uses.session=!0,t},get context(){return g.uses.context=!0,a({},p)},fetch:i}),!v))return}else({node:g,loaded:v}=u);if(v){if(v=ge(v),v.error)return o.error=v.error,o.status=v.status||500,l.nodes=[],{redirect:f,props:o,state:l};if(v.redirect){f=v.redirect;break}if(v.context&&(d.context=!0,p=a(a({},p),v.context)),v.maxage){this.caches.has(s)||this.caches.set(s,new Map);const e=this.caches.get(s),r={node:g,loaded:v};e.set(t,r);let n=!1;const a=setTimeout((()=>{o()}),1e3*v.maxage),o=()=>{e.get(t)===r&&e.delete(t),i(),clearTimeout(a)},i=this.stores.session.subscribe((()=>{n&&o()}));n=!0}h[e]=v.props}l.nodes[e]=g,l.contexts[e]=p}else l.nodes[e]=t,l.contexts[e]=p=r}(await Promise.all(h)).forEach(((e,t)=>{e&&(o[`props_${t}`]=e)})),this.current.page&&n.path===this.current.page.path&&!d.query||(o.page=n)}catch(g){o.error=g,o.status=500,l.nodes=[]}return{redirect:f,props:o,state:l}}}async function $e({paths:e,target:t,session:r,error:s,status:n,nodes:a,page:o}){const i=new de({base:e.base,routes:he}),c=new ve({Root:Z,layout:ue,target:t,session:r,host:o.host});i.init(c),await c.start({nodes:a,page:o},n,s),dispatchEvent(new CustomEvent("sveltekit:start"))}export{$e as start};
