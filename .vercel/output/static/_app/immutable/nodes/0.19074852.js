import{C as me,S as Q,i as X,s as j,k as m,a as N,l as h,m as v,h as _,c as A,n as f,D as z,b as U,E as o,F as Z,G as W,H as x,w as he,I as ve,y as Y,q as V,z as F,r as R,A as G,J as ge,g as T,d as B,B as J,K as be,L as ye,o as pe,p as K,e as ce,f as Ee,M as we,N as Le,O as ze,P as ke,Q as Ie,R as $e,v as Se}from"../chunks/index.dc0e088a.js";import{p as qe}from"../chunks/stores.53a9c27d.js";import{L as Me}from"../chunks/LogoSvg.de8aeac5.js";const Ne=({url:r})=>({currentRoute:r.pathname}),We=Object.freeze(Object.defineProperty({__proto__:null,load:Ne},Symbol.toStringTag,{value:"Module"}));function fe(r,{delay:e=0,duration:s=400,easing:l=me}={}){const t=+getComputedStyle(r).opacity;return{delay:e,duration:s,easing:l,css:a=>`opacity: ${a*t}`}}function Ae(r){let e,s,l,t,a,n,d,u,b;return{c(){e=m("ul"),s=m("li"),l=N(),t=m("li"),a=N(),n=m("li"),this.h()},l(c){e=h(c,"UL",{class:!0});var p=v(e);s=h(p,"LI",{class:!0}),v(s).forEach(_),l=A(p),t=h(p,"LI",{class:!0}),v(t).forEach(_),a=A(p),n=h(p,"LI",{class:!0}),v(n).forEach(_),p.forEach(_),this.h()},h(){f(s,"class","bar first svelte-12rzu02"),f(t,"class","bar second svelte-12rzu02"),f(n,"class","bar third svelte-12rzu02"),f(e,"class",d="bar-wrapper "+r[1]+" svelte-12rzu02"),z(e,"open",r[0]===!0)},m(c,p){U(c,e,p),o(e,s),o(e,l),o(e,t),o(e,a),o(e,n),u||(b=Z(e,"mousedown",r[2]),u=!0)},p(c,[p]){p&2&&d!==(d="bar-wrapper "+c[1]+" svelte-12rzu02")&&f(e,"class",d),p&3&&z(e,"open",c[0]===!0)},i:W,o:W,d(c){c&&_(e),u=!1,b()}}}function De(r,e,s){let{open:l=!1}=e,{className:t=""}=e;const a=()=>{s(0,l=!l)};return r.$$set=n=>{"open"in n&&s(0,l=n.open),"className"in n&&s(1,t=n.className)},[l,t,a]}class Ve extends Q{constructor(e){super(),X(this,e,De,Ae,j,{open:0,className:1})}}function Re(r){let e=!1,s=()=>{e=!1},l,t,a,n,d,u,b,c,p,y,i,g,S,q,w,I,H,C,k,D,O,$,P,ee;x(r[7]),x(r[8]);function de(E){r[9](E)}let te={className:"burger"};return r[2]!==void 0&&(te.open=r[2]),a=new Ve({props:te}),he.push(()=>ve(a,"open",de)),{c(){t=m("nav"),Y(a.$$.fragment),d=N(),u=m("ul"),b=m("li"),c=m("a"),p=V("Startseite"),y=N(),i=m("li"),g=m("a"),S=V("Leistungen"),q=N(),w=m("li"),I=m("a"),H=V("Über Mich"),C=N(),k=m("li"),D=m("a"),O=V("Kontakt"),this.h()},l(E){t=h(E,"NAV",{class:!0});var L=v(t);F(a.$$.fragment,L),d=A(L),u=h(L,"UL",{class:!0});var M=v(u);b=h(M,"LI",{class:!0});var se=v(b);c=h(se,"A",{href:!0,class:!0});var ae=v(c);p=R(ae,"Startseite"),ae.forEach(_),se.forEach(_),y=A(M),i=h(M,"LI",{class:!0});var le=v(i);g=h(le,"A",{href:!0,class:!0});var re=v(g);S=R(re,"Leistungen"),re.forEach(_),le.forEach(_),q=A(M),w=h(M,"LI",{class:!0});var ne=v(w);I=h(ne,"A",{href:!0,class:!0});var oe=v(I);H=R(oe,"Über Mich"),oe.forEach(_),ne.forEach(_),C=A(M),k=h(M,"LI",{class:!0});var ie=v(k);D=h(ie,"A",{href:!0,class:!0});var ue=v(D);O=R(ue,"Kontakt"),ue.forEach(_),ie.forEach(_),M.forEach(_),L.forEach(_),this.h()},h(){f(c,"href","/"),f(c,"class","svelte-1xufqzp"),f(b,"class","svelte-1xufqzp"),z(b,"active",r[5].url.pathname==="/"),f(g,"href","/leistungen"),f(g,"class","svelte-1xufqzp"),f(i,"class","svelte-1xufqzp"),z(i,"active",r[5].url.pathname==="/leistungen"),f(I,"href","/ueber-mich"),f(I,"class","svelte-1xufqzp"),f(w,"class","svelte-1xufqzp"),z(w,"active",r[5].url.pathname==="/ueber-mich"),f(D,"href","/kontakt"),f(D,"class","svelte-1xufqzp"),f(k,"class","svelte-1xufqzp"),z(k,"active",r[5].url.pathname==="/kontakt"),f(u,"class","menu-entries svelte-1xufqzp"),z(u,"mobile",r[4]<680&&r[2]==!0),f(t,"class","navigation svelte-1xufqzp"),z(t,"scroll",r[1]>r[0]),z(t,"hide",r[3]===!0)},m(E,L){U(E,t,L),G(a,t,null),o(t,d),o(t,u),o(u,b),o(b,c),o(c,p),o(u,y),o(u,i),o(i,g),o(g,S),o(u,q),o(u,w),o(w,I),o(I,H),o(u,C),o(u,k),o(k,D),o(D,O),$=!0,P||(ee=[Z(window,"scroll",()=>{e=!0,clearTimeout(l),l=setTimeout(s,100),r[7]()}),Z(window,"resize",r[8])],P=!0)},p(E,[L]){L&2&&!e&&(e=!0,clearTimeout(l),scrollTo(window.pageXOffset,E[1]),l=setTimeout(s,100));const M={};!n&&L&4&&(n=!0,M.open=E[2],ge(()=>n=!1)),a.$set(M),(!$||L&32)&&z(b,"active",E[5].url.pathname==="/"),(!$||L&32)&&z(i,"active",E[5].url.pathname==="/leistungen"),(!$||L&32)&&z(w,"active",E[5].url.pathname==="/ueber-mich"),(!$||L&32)&&z(k,"active",E[5].url.pathname==="/kontakt"),(!$||L&20)&&z(u,"mobile",E[4]<680&&E[2]==!0),(!$||L&3)&&z(t,"scroll",E[1]>E[0]),(!$||L&8)&&z(t,"hide",E[3]===!0)},i(E){$||(T(a.$$.fragment,E),$=!0)},o(E){B(a.$$.fragment,E),$=!1},d(E){E&&_(t),J(a),P=!1,be(ee)}}}function Te(r,e,s){let l,t,a,n;ye(r,qe,i=>s(5,n=i));let d=!1,u;const b=50;pe(async()=>{});function c(){s(1,l=window.pageYOffset)}function p(){s(4,t=window.innerWidth)}function y(i){d=i,s(2,d)}return r.$$.update=()=>{r.$$.dirty&66&&l&&(u===void 0&&s(6,u=l),u<l?s(3,a=!0):s(3,a=!1),s(6,u=l))},s(1,l=0),s(4,t=0),s(3,a=!1),[b,l,d,a,t,n,u,c,p,y]}class Be extends Q{constructor(e){super(),X(this,e,Te,Re,j,{offset:0})}get offset(){return this.$$.ctx[0]}}function He(r){let e,s,l,t,a,n,d,u,b,c,p,y,i,g,S,q;return l=new Me({props:{height:"50px",animation:!0}}),{c(){e=m("div"),s=m("div"),t=m("div"),Y(l.$$.fragment),a=N(),n=m("div"),d=m("small"),u=V("B.Sc in Psychologie"),b=N(),c=m("div"),p=m("h1"),y=V("Lisa-Marie Loof"),i=N(),g=m("small"),S=V("Dipl. Hypnosetrainerin"),this.h()},l(w){e=h(w,"DIV",{class:!0});var I=v(e);s=h(I,"DIV",{class:!0});var H=v(s);t=h(H,"DIV",{style:!0});var C=v(t);F(l.$$.fragment,C),H.forEach(_),a=A(I),n=h(I,"DIV",{class:!0});var k=v(n);d=h(k,"SMALL",{class:!0});var D=v(d);u=R(D,"B.Sc in Psychologie"),D.forEach(_),b=A(k),c=h(k,"DIV",{class:!0});var O=v(c);p=h(O,"H1",{class:!0});var $=v(p);y=R($,"Lisa-Marie Loof"),$.forEach(_),O.forEach(_),i=A(k),g=h(k,"SMALL",{class:!0});var P=v(g);S=R(P,"Dipl. Hypnosetrainerin"),P.forEach(_),k.forEach(_),I.forEach(_),this.h()},h(){K(t,"display","contents"),K(t,"--leaves-main","#fff"),K(t,"--leaves-overlay","#fff"),K(t,"--tree-color","#fff"),K(t,"--tree-overlay","#fff"),f(s,"class","circle svelte-22psy5"),f(d,"class","svelte-22psy5"),f(p,"class","svelte-22psy5"),f(c,"class","brand-name svelte-22psy5"),f(g,"class","svelte-22psy5"),f(n,"class","brand-wrapper svelte-22psy5"),f(e,"class","logo logo-wrapper svelte-22psy5")},m(w,I){U(w,e,I),o(e,s),o(s,t),G(l,t,null),o(e,a),o(e,n),o(n,d),o(d,u),o(n,b),o(n,c),o(c,p),o(p,y),o(n,i),o(n,g),o(g,S),q=!0},p:W,i(w){q||(T(l.$$.fragment,w),q=!0)},o(w){B(l.$$.fragment,w),q=!1},d(w){w&&_(e),J(l)}}}class Oe extends Q{constructor(e){super(),X(this,e,null,He,j,{})}}function _e(r){let e,s,l,t,a,n,d,u,b,c;l=new Oe({}),a=new Be({});const p=r[2].default,y=we(p,r,r[1],null);return{c(){e=m("div"),s=m("header"),Y(l.$$.fragment),t=N(),Y(a.$$.fragment),n=N(),d=m("main"),y&&y.c(),this.h()},l(i){e=h(i,"DIV",{class:!0});var g=v(e);s=h(g,"HEADER",{class:!0});var S=v(s);F(l.$$.fragment,S),t=A(S),F(a.$$.fragment,S),S.forEach(_),n=A(g),d=h(g,"MAIN",{class:!0});var q=v(d);y&&y.l(q),q.forEach(_),g.forEach(_),this.h()},h(){f(s,"class","svelte-1dzui5o"),f(d,"class","svelte-1dzui5o"),f(e,"class","app svelte-1dzui5o")},m(i,g){U(i,e,g),o(e,s),G(l,s,null),o(s,t),G(a,s,null),o(e,n),o(e,d),y&&y.m(d,null),c=!0},p(i,g){y&&y.p&&(!c||g&2)&&Le(y,p,i,i[1],c?ke(p,i[1],g,null):ze(i[1]),null)},i(i){c||(T(l.$$.fragment,i),T(a.$$.fragment,i),T(y,i),x(()=>{c&&(b&&b.end(1),u=Ie(e,fe,{duration:250,delay:10}),u.start())}),c=!0)},o(i){B(l.$$.fragment,i),B(a.$$.fragment,i),B(y,i),u&&u.invalidate(),b=$e(e,fe,{delay:10,duration:250}),c=!1},d(i){i&&_(e),J(l),J(a),y&&y.d(i),i&&b&&b.end()}}}function Pe(r){let e=r[0].currentRoute,s,l,t=_e(r);return{c(){t.c(),s=ce()},l(a){t.l(a),s=ce()},m(a,n){t.m(a,n),U(a,s,n),l=!0},p(a,[n]){n&1&&j(e,e=a[0].currentRoute)?(Se(),B(t,1,1,W),Ee(),t=_e(a),t.c(),T(t,1),t.m(s.parentNode,s)):t.p(a,n)},i(a){l||(T(t),l=!0)},o(a){B(t),l=!1},d(a){a&&_(s),t.d(a)}}}function Ce(r,e,s){let{$$slots:l={},$$scope:t}=e,{data:a}=e;return pe(async()=>{}),r.$$set=n=>{"data"in n&&s(0,a=n.data),"$$scope"in n&&s(1,t=n.$$scope)},[a,t,l]}class Ye extends Q{constructor(e){super(),X(this,e,Ce,Pe,j,{data:0})}}export{Ye as component,We as universal};