function w(){}function F(t,e){for(const n in e)t[n]=e[n];return t}function q(t){return t()}function k(){return Object.create(null)}function g(t){t.forEach(q)}function D(t){return typeof t=="function"}function at(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let x;function ft(t,e){return x||(x=document.createElement("a")),x.href=e,t===x.href}function R(t){return Object.keys(t).length===0}function G(t,...e){if(t==null)return w;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function dt(t,e,n){t.$$.on_destroy.push(G(e,n))}function _t(t,e,n,i){if(t){const r=L(t,e,n,i);return t[0](r)}}function L(t,e,n,i){return t[1]&&i?F(n.ctx.slice(),t[1](i(e))):n.ctx}function ht(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const o=[],l=Math.max(e.dirty.length,r.length);for(let c=0;c<l;c+=1)o[c]=e.dirty[c]|r[c];return o}return e.dirty|r}return e.dirty}function mt(t,e,n,i,r,o){if(r){const l=L(e,n,i,o);t.p(l,r)}}function pt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}const I=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;"WeakMap"in I;let v=!1;function J(){v=!0}function K(){v=!1}function Q(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function U(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let u=0;u<e.length;u++){const f=e[u];f.claim_order!==void 0&&s.push(f)}e=s}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let s=0;s<e.length;s++){const u=e[s].claim_order,f=(r>0&&e[n[r]].claim_order<=u?r+1:Q(1,r,b=>e[n[b]].claim_order,u))-1;i[s]=n[f]+1;const a=f+1;n[a]=s,r=Math.max(a,r)}const o=[],l=[];let c=e.length-1;for(let s=n[r]+1;s!=0;s=i[s-1]){for(o.push(e[s-1]);c>=s;c--)l.push(e[c]);c--}for(;c>=0;c--)l.push(e[c]);o.reverse(),l.sort((s,u)=>s.claim_order-u.claim_order);for(let s=0,u=0;s<l.length;s++){for(;u<o.length&&l[s].claim_order>=o[u].claim_order;)u++;const f=u<o.length?o[u]:null;t.insertBefore(l[s],f)}}function V(t,e){if(v){for(U(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function yt(t,e,n){v&&!n?V(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function X(t){t.parentNode&&t.parentNode.removeChild(t)}function Y(t){return document.createElement(t)}function Z(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function M(t){return document.createTextNode(t)}function gt(){return M(" ")}function bt(){return M("")}function xt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function $t(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function tt(t){return Array.from(t.childNodes)}function et(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function O(t,e,n,i,r=!1){et(t);const o=(()=>{for(let l=t.claim_info.last_index;l<t.length;l++){const c=t[l];if(e(c)){const s=n(c);return s===void 0?t.splice(l,1):t[l]=s,r||(t.claim_info.last_index=l),c}}for(let l=t.claim_info.last_index-1;l>=0;l--){const c=t[l];if(e(c)){const s=n(c);return s===void 0?t.splice(l,1):t[l]=s,r?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=l,c}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function B(t,e,n,i){return O(t,r=>r.nodeName===e,r=>{const o=[];for(let l=0;l<r.attributes.length;l++){const c=r.attributes[l];n[c.name]||o.push(c.name)}o.forEach(l=>r.removeAttribute(l))},()=>i(e))}function wt(t,e,n){return B(t,e,n,Y)}function vt(t,e,n){return B(t,e,n,Z)}function nt(t,e){return O(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>M(e),!0)}function Et(t){return nt(t," ")}function Nt(t,e){e=""+e,t.data!==e&&(t.data=e)}function St(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function At(t,e,n){t.classList[n?"add":"remove"](e)}function Mt(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const o=r.textContent.trim();o===`HEAD_${t}_END`?(i-=1,n.push(r)):o===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function Tt(t,e){return new t(e)}let y;function p(t){y=t}function H(){if(!y)throw new Error("Function called outside component initialization");return y}function jt(t){H().$$.on_mount.push(t)}function kt(t){H().$$.after_update.push(t)}const h=[],C=[];let m=[];const N=[],P=Promise.resolve();let S=!1;function W(){S||(S=!0,P.then(z))}function Ct(){return W(),P}function A(t){m.push(t)}function qt(t){N.push(t)}const E=new Set;let _=0;function z(){if(_!==0)return;const t=y;do{try{for(;_<h.length;){const e=h[_];_++,p(e),it(e.$$)}}catch(e){throw h.length=0,_=0,e}for(p(null),h.length=0,_=0;C.length;)C.pop()();for(let e=0;e<m.length;e+=1){const n=m[e];E.has(n)||(E.add(n),n())}m.length=0}while(h.length);for(;N.length;)N.pop()();S=!1,E.clear(),p(t)}function it(t){if(t.fragment!==null){t.update(),g(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(A)}}function rt(t){const e=[],n=[];m.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),m=e}const $=new Set;let d;function Dt(){d={r:0,c:[],p:d}}function Lt(){d.r||g(d.c),d=d.p}function lt(t,e){t&&t.i&&($.delete(t),t.i(e))}function Ot(t,e,n,i){if(t&&t.o){if($.has(t))return;$.add(t),d.c.push(()=>{$.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const st=["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"];[...st];function Bt(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function Ht(t){t&&t.c()}function Pt(t,e){t&&t.l(e)}function ut(t,e,n,i){const{fragment:r,after_update:o}=t.$$;r&&r.m(e,n),i||A(()=>{const l=t.$$.on_mount.map(q).filter(D);t.$$.on_destroy?t.$$.on_destroy.push(...l):g(l),t.$$.on_mount=[]}),o.forEach(A)}function ct(t,e){const n=t.$$;n.fragment!==null&&(rt(n.after_update),g(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ot(t,e){t.$$.dirty[0]===-1&&(h.push(t),W(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Wt(t,e,n,i,r,o,l,c=[-1]){const s=y;p(t);const u=t.$$={fragment:null,ctx:[],props:o,update:w,not_equal:r,bound:k(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(s?s.$$.context:[])),callbacks:k(),dirty:c,skip_bound:!1,root:e.target||s.$$.root};l&&l(u.root);let f=!1;if(u.ctx=n?n(t,e.props||{},(a,b,...T)=>{const j=T.length?T[0]:b;return u.ctx&&r(u.ctx[a],u.ctx[a]=j)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](j),f&&ot(t,a)),b}):[],u.update(),f=!0,g(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){J();const a=tt(e.target);u.fragment&&u.fragment.l(a),a.forEach(X)}else u.fragment&&u.fragment.c();e.intro&&lt(t.$$.fragment),ut(t,e.target,e.anchor,e.customElement),K(),z()}p(s)}class zt{$destroy(){ct(this,1),this.$destroy=w}$on(e,n){if(!D(n))return w;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!R(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{ut as A,ct as B,At as C,V as D,xt as E,w as F,A as G,Bt as H,qt as I,g as J,dt as K,_t as L,mt as M,pt as N,ht as O,Z as P,vt as Q,ft as R,zt as S,Mt as T,gt as a,yt as b,Et as c,Ot as d,bt as e,Lt as f,lt as g,X as h,Wt as i,kt as j,Y as k,wt as l,tt as m,$t as n,jt as o,St as p,M as q,nt as r,at as s,Ct as t,Nt as u,Dt as v,C as w,Tt as x,Ht as y,Pt as z};
