import{SvelteComponent as t,append as e,attr as l,detach as i,element as n,init as a,insert as u,listen as o,noop as s,run_all as v,safe_not_equal as c,set_input_value as p,space as _,to_number as r}from"/svelte-feather/dist/web_modules/svelte/internal.js";import{ICON_SIZES as d}from"/svelte-feather/dist/web_modules/svelte-feather.js";function f(t){let a,c,r,d,f,h,x,m,y,g,w,j,b,C,k,z,S,I,E,L,T,q,B,F,G,H,J,M,R,W,$,A,D,K,N,O,P,Q,U,V,X,Y,Z,tt,et,lt,it,nt,at,ut,ot,st,vt,ct,pt,_t,rt,dt,ft,ht,xt,mt,yt,gt,wt,jt,bt,Ct,kt,zt,St,It,Et,Lt,Tt,qt,Bt,Ft,Gt,Ht,Jt,Mt,Rt,Wt,$t,At,Dt;return{c(){a=n("header"),c=n("div"),c.innerHTML='<h4 class="svelte-kfj89x">Customize</h4>',r=_(),d=n("div"),f=n("button"),f.textContent="RESET",h=_(),x=n("label"),x.textContent="Size",m=_(),y=n("div"),g=n("div"),w=n("input"),j=_(),b=n("datalist"),C=n("option"),k=n("option"),z=n("option"),S=n("option"),I=n("option"),E=_(),L=n("div"),T=n("input"),q=_(),B=n("label"),B.textContent="Stroke Width",F=_(),G=n("div"),H=n("div"),J=n("input"),M=_(),R=n("datalist"),W=n("option"),$=n("option"),A=n("option"),D=n("option"),K=n("option"),N=n("option"),O=_(),P=n("div"),Q=n("input"),U=_(),V=n("label"),V.textContent="Stroke Line Cap",X=_(),Y=n("div"),Z=n("div"),tt=n("input"),et=_(),lt=n("datalist"),it=n("option"),nt=n("option"),at=n("option"),ut=_(),ot=n("div"),st=n("input"),vt=_(),ct=n("label"),ct.textContent="Stroke Line Join",pt=_(),_t=n("div"),rt=n("div"),dt=n("input"),ft=_(),ht=n("datalist"),xt=n("option"),mt=n("option"),yt=n("option"),gt=n("option"),wt=n("option"),jt=_(),bt=n("div"),Ct=n("input"),kt=_(),zt=n("label"),zt.textContent="Color",St=_(),It=n("div"),Et=n("div"),Lt=n("input"),Tt=_(),qt=n("div"),Bt=n("input"),Ft=_(),Gt=n("label"),Gt.textContent="Fill",Ht=_(),Jt=n("div"),Mt=n("div"),Rt=n("input"),Wt=_(),$t=n("div"),At=n("input"),l(c,"class","col-7"),l(d,"class","col-5 text-right"),l(a,"class","row"),l(w,"type","range"),l(w,"list","list-sizes"),l(w,"min","0"),l(w,"max","4"),l(w,"step","1"),C.__value="0",C.value=C.__value,k.__value="1",k.value=k.__value,z.__value="2",z.value=z.__value,S.__value="3",S.value=S.__value,I.__value="4",I.value=I.__value,l(b,"id","list-sizes"),l(g,"class","col-8"),l(T,"type","text"),l(L,"class","col"),l(y,"class","row"),l(J,"type","range"),l(J,"list","list-widths"),l(J,"min","0.5"),l(J,"max","3"),l(J,"step","0.5"),W.__value="0.5",W.value=W.__value,$.__value="1",$.value=$.__value,A.__value="1.5",A.value=A.__value,D.__value="2",D.value=D.__value,K.__value="2.5",K.value=K.__value,N.__value="3",N.value=N.__value,l(R,"id","list-widths"),l(H,"class","col-8"),l(Q,"type","text"),l(P,"class","col"),l(G,"class","row"),l(tt,"type","range"),l(tt,"list","list-linecap"),l(tt,"min","0"),l(tt,"max","2"),l(tt,"step","1"),it.__value="0",it.value=it.__value,nt.__value="1",nt.value=nt.__value,at.__value="2",at.value=at.__value,l(lt,"id","list-linecap"),l(Z,"class","col-8"),l(st,"type","text"),l(ot,"class","col"),l(Y,"class","row"),l(dt,"type","range"),l(dt,"list","list-linejoin"),l(dt,"min","0"),l(dt,"max","4"),l(dt,"step","1"),xt.__value="0",xt.value=xt.__value,mt.__value="1",mt.value=mt.__value,yt.__value="2",yt.value=yt.__value,gt.__value="3",gt.value=gt.__value,wt.__value="4",wt.value=wt.__value,l(ht,"id","list-linejoin"),l(rt,"class","col-8"),l(Ct,"type","text"),l(bt,"class","col"),l(_t,"class","row"),l(Lt,"type","text"),l(Et,"class","col-8"),l(Bt,"type","color"),l(Bt,"class","svelte-kfj89x"),l(qt,"class","col"),l(It,"class","row"),l(Rt,"type","text"),l(Mt,"class","col-8"),l(At,"type","color"),l(At,"class","svelte-kfj89x"),l($t,"class","col"),l(Jt,"class","row")},m(l,i,n){u(l,a,i),e(a,c),e(a,r),e(a,d),e(d,f),u(l,h,i),u(l,x,i),u(l,m,i),u(l,y,i),e(y,g),e(g,w),p(w,t[8]),e(g,j),e(g,b),e(b,C),e(b,k),e(b,z),e(b,S),e(b,I),e(y,E),e(y,L),e(L,T),p(T,t[4]),u(l,q,i),u(l,B,i),u(l,F,i),u(l,G,i),e(G,H),e(H,J),p(J,t[9]),e(H,M),e(H,R),e(R,W),e(R,$),e(R,A),e(R,D),e(R,K),e(R,N),e(G,O),e(G,P),e(P,Q),p(Q,t[5]),u(l,U,i),u(l,V,i),u(l,X,i),u(l,Y,i),e(Y,Z),e(Z,tt),p(tt,t[6]),e(Z,et),e(Z,lt),e(lt,it),e(lt,nt),e(lt,at),e(Y,ut),e(Y,ot),e(ot,st),p(st,t[2]),u(l,vt,i),u(l,ct,i),u(l,pt,i),u(l,_t,i),e(_t,rt),e(rt,dt),p(dt,t[7]),e(rt,ft),e(rt,ht),e(ht,xt),e(ht,mt),e(ht,yt),e(ht,gt),e(ht,wt),e(_t,jt),e(_t,bt),e(bt,Ct),p(Ct,t[3]),u(l,kt,i),u(l,zt,i),u(l,St,i),u(l,It,i),e(It,Et),e(Et,Lt),p(Lt,t[0]),e(It,Tt),e(It,qt),e(qt,Bt),p(Bt,t[0]),u(l,Ft,i),u(l,Gt,i),u(l,Ht,i),u(l,Jt,i),e(Jt,Mt),e(Mt,Rt),p(Rt,t[1]),e(Jt,Wt),e(Jt,$t),e($t,At),p(At,t[1]),n&&v(Dt),Dt=[o(f,"click",t[10]),o(w,"change",t[15]),o(w,"input",t[15]),o(w,"input",t[13]),o(T,"input",t[16]),o(J,"change",t[17]),o(J,"input",t[17]),o(J,"input",t[14]),o(Q,"input",t[18]),o(tt,"change",t[19]),o(tt,"input",t[19]),o(tt,"input",t[11]),o(st,"input",t[20]),o(dt,"change",t[21]),o(dt,"input",t[21]),o(dt,"input",t[12]),o(Ct,"input",t[22]),o(Lt,"input",t[23]),o(Bt,"input",t[24]),o(Rt,"input",t[25]),o(At,"input",t[26])]},p(t,[e]){256&e&&p(w,t[8]),16&e&&T.value!==t[4]&&p(T,t[4]),512&e&&p(J,t[9]),32&e&&Q.value!==t[5]&&p(Q,t[5]),64&e&&p(tt,t[6]),4&e&&st.value!==t[2]&&p(st,t[2]),128&e&&p(dt,t[7]),8&e&&Ct.value!==t[3]&&p(Ct,t[3]),1&e&&Lt.value!==t[0]&&p(Lt,t[0]),1&e&&p(Bt,t[0]),2&e&&Rt.value!==t[1]&&p(Rt,t[1]),2&e&&p(At,t[1])},i:s,o:s,d(t){t&&i(a),t&&i(h),t&&i(x),t&&i(m),t&&i(y),t&&i(q),t&&i(B),t&&i(F),t&&i(G),t&&i(U),t&&i(V),t&&i(X),t&&i(Y),t&&i(vt),t&&i(ct),t&&i(pt),t&&i(_t),t&&i(kt),t&&i(zt),t&&i(St),t&&i(It),t&&i(Ft),t&&i(Gt),t&&i(Ht),t&&i(Jt),v(Dt)}}}const h=[d.tiny,d.small,d.default,d.large,d.huge],x=["round","butt","square"],m=["round","arcs","bevel","miter","miter-clip"];function y(t,e,l){let{color:i="currentColor"}=e,{fill:n="none"}=e,{linecap:a="round"}=e,{linejoin:u="round"}=e,{size:o=d.default}=e,{width:s="2px"}=e,v="0",c="0",p=2,_="2";return t.$set=t=>{"color"in t&&l(0,i=t.color),"fill"in t&&l(1,n=t.fill),"linecap"in t&&l(2,a=t.linecap),"linejoin"in t&&l(3,u=t.linejoin),"size"in t&&l(4,o=t.size),"width"in t&&l(5,s=t.width)},[i,n,a,u,o,s,v,c,p,_,function(t){l(0,i="currentColor"),l(1,n="none"),l(2,a="round"),l(6,v="0"),l(3,u="round"),l(7,c="0"),l(4,o=d.default),l(8,p=2),l(5,s="2px"),l(9,_="2")},function(t){l(2,a=x[parseInt(v)])},function(t){l(3,u=m[parseInt(c)])},function(t){l(4,o=h[parseInt(p)])},function(t){l(5,s=_.toString()+"px")},function(){p=r(this.value),l(8,p)},function(){o=this.value,l(4,o)},function(){_=r(this.value),l(9,_)},function(){s=this.value,l(5,s)},function(){v=r(this.value),l(6,v)},function(){a=this.value,l(2,a)},function(){c=r(this.value),l(7,c)},function(){u=this.value,l(3,u)},function(){i=this.value,l(0,i)},function(){i=this.value,l(0,i)},function(){n=this.value,l(1,n)},function(){n=this.value,l(1,n)}]}export default class extends t{constructor(t){var l;super(),document.getElementById("svelte-kfj89x-style")||((l=n("style")).id="svelte-kfj89x-style",l.textContent='h4.svelte-kfj89x{margin-top:0}input[type="color"].svelte-kfj89x{display:block;width:100%;height:100%;padding:0.35rem;border:1px solid var(--color-lightGrey);border-radius:4px;transition:all 0.2s ease}',e(document.head,l)),a(this,t,y,f,c,{color:0,fill:1,linecap:2,linejoin:3,size:4,width:5})}}