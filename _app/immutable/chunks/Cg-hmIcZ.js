var Mn=Array.isArray,tn=Array.prototype.indexOf,jn=Array.from,Un=Object.defineProperty,ht=Object.getOwnPropertyDescriptor,nn=Object.getOwnPropertyDescriptors,Bn=Object.prototype,Hn=Array.prototype,rn=Object.getPrototypeOf;const Vn=()=>{};function Gn(t){return t()}function gt(t){for(var n=0;n<t.length;n++)t[n]()}const w=2,Tt=4,U=8,it=16,x=32,B=64,$=128,g=256,K=512,p=1024,S=2048,F=4096,P=8192,tt=16384,en=32768,kt=65536,$n=1<<17,ln=1<<19,At=1<<20,dt=Symbol("$state"),Kn=Symbol("legacy props"),Zn=Symbol("");function xt(t){return t===this.v}function sn(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function Rt(t){return!sn(t,this.v)}function an(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function un(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function on(t){throw new Error("https://svelte.dev/e/effect_orphan")}function fn(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function zn(){throw new Error("https://svelte.dev/e/hydration_failed")}function Wn(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Jn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Qn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function _n(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function cn(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let nt=!1;function Xn(){nt=!0}const tr=1,nr=2,rr=4,er=8,lr=16,sr=1,ar=2,vn="[",pn="[!",hn="]",St={},ur=Symbol();function Dt(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let i=null;function yt(t){i=t}function or(t,n=!1,r){i={p:i,c:null,e:null,m:!1,s:t,x:null,l:null},nt&&!n&&(i.l={s:null,u:null,r1:[],r2:_t(!1)})}function fr(t){const n=i;if(n!==null){const a=n.e;if(a!==null){var r=f,e=u;n.e=null;try{for(var l=0;l<a.length;l++){var s=a[l];J(s.effect),W(s.reaction),Lt(s.fn)}}finally{J(r),W(e)}}i=n.p,n.m=!0}return{}}function rt(){return!nt||i!==null&&i.l===null}function _t(t,n){var r={f:0,v:t,reactions:null,equals:xt,rv:0,wv:0};return r}function ir(t){return Ot(_t(t))}function dn(t,n=!1){var e;const r=_t(t);return n||(r.equals=Rt),nt&&i!==null&&i.l!==null&&((e=i.l).s??(e.s=[])).push(r),r}function _r(t,n=!1){return Ot(dn(t,n))}function Ot(t){return u!==null&&!A&&(u.f&w)!==0&&(m===null?In([t]):m.push(t)),t}function cr(t,n){return u!==null&&!A&&rt()&&(u.f&(w|it))!==0&&(m===null||!m.includes(t))&&cn(),yn(t,n)}function yn(t,n){return t.equals(n)||(t.v,t.v=n,t.wv=Kt(),It(t,S),rt()&&f!==null&&(f.f&p)!==0&&(f.f&(x|B))===0&&(k===null?Nn([t]):k.push(t))),n}function It(t,n){var r=t.reactions;if(r!==null)for(var e=rt(),l=r.length,s=0;s<l;s++){var a=r[s],_=a.f;(_&S)===0&&(!e&&a===f||(T(a,n),(_&(p|g))!==0&&((_&w)!==0?It(a,F):lt(a))))}}let O=!1;function vr(t){O=t}let E;function Y(t){if(t===null)throw Dt(),St;return E=t}function pr(){return Y(N(E))}function hr(t){if(O){if(N(E)!==null)throw Dt(),St;E=t}}function dr(t=1){if(O){for(var n=t,r=E;n--;)r=N(r);E=r}}function yr(){for(var t=0,n=E;;){if(n.nodeType===8){var r=n.data;if(r===hn){if(t===0)return n;t-=1}else(r===vn||r===pn)&&(t+=1)}var e=N(n);n.remove(),n=e}}var wt,wn,Nt,bt;function wr(){if(wt===void 0){wt=window,wn=document;var t=Element.prototype,n=Node.prototype;Nt=ht(n,"firstChild").get,bt=ht(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function st(t=""){return document.createTextNode(t)}function at(t){return Nt.call(t)}function N(t){return bt.call(t)}function Er(t,n){if(!O)return at(t);var r=at(E);if(r===null)r=E.appendChild(st());else if(n&&r.nodeType!==3){var e=st();return r==null||r.before(e),Y(e),e}return Y(r),r}function mr(t,n){if(!O){var r=at(t);return r instanceof Comment&&r.data===""?N(r):r}return E}function gr(t,n=1,r=!1){let e=O?E:t;for(var l;n--;)l=e,e=N(e);if(!O)return e;var s=e==null?void 0:e.nodeType;if(r&&s!==3){var a=st();return e===null?l==null||l.after(a):e.before(a),Y(a),a}return Y(e),e}function Tr(t){t.textContent=""}function qt(t){var n=w|S,r=u!==null&&(u.f&w)!==0?u:null;return f===null||r!==null&&(r.f&g)!==0?n|=g:f.f|=At,{ctx:i,deps:null,effects:null,equals:xt,f:n,fn:t,reactions:null,rv:0,v:null,wv:0,parent:r??f}}function kr(t){const n=qt(t);return n.equals=Rt,n}function Ct(t){var n=t.effects;if(n!==null){t.effects=null;for(var r=0;r<n.length;r+=1)I(n[r])}}function En(t){for(var n=t.parent;n!==null;){if((n.f&w)===0)return n;n=n.parent}return null}function mn(t){var n,r=f;J(En(t));try{Ct(t),n=zt(t)}finally{J(r)}return n}function Pt(t){var n=mn(t),r=(R||(t.f&g)!==0)&&t.deps!==null?F:p;T(t,r),t.equals(n)||(t.v=n,t.wv=Kt())}function Ft(t){f===null&&u===null&&on(),u!==null&&(u.f&g)!==0&&f===null&&un(),ct&&an()}function gn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function L(t,n,r,e=!0){var l=(t&B)!==0,s=f,a={ctx:i,deps:null,nodes_start:null,nodes_end:null,f:t|S,first:null,fn:n,last:null,next:null,parent:l?null:s,prev:null,teardown:null,transitions:null,wv:0};if(r){var _=q;try{Et(!0),vt(a),a.f|=en}catch(b){throw I(a),b}finally{Et(_)}}else n!==null&&lt(a);var y=r&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&(At|$))===0;if(!y&&!l&&e&&(s!==null&&gn(a,s),u!==null&&(u.f&w)!==0)){var c=u;(c.effects??(c.effects=[])).push(a)}return a}function Ar(t){const n=L(U,null,!1);return T(n,p),n.teardown=t,n}function xr(t){Ft();var n=f!==null&&(f.f&x)!==0&&i!==null&&!i.m;if(n){var r=i;(r.e??(r.e=[])).push({fn:t,effect:f,reaction:u})}else{var e=Lt(t);return e}}function Rr(t){return Ft(),Tn(t)}function Sr(t){const n=L(B,t,!0);return(r={})=>new Promise(e=>{r.outro?xn(n,()=>{I(n),e(void 0)}):(I(n),e(void 0))})}function Lt(t){return L(Tt,t,!1)}function Tn(t){return L(U,t,!0)}function Dr(t,n=[],r=qt){const e=n.map(r);return kn(()=>t(...e.map(Ln)))}function kn(t,n=0){return L(U|it|n,t,!0)}function Or(t,n=!0){return L(U|x,t,!0,n)}function Yt(t){var n=t.teardown;if(n!==null){const r=ct,e=u;mt(!0),W(null);try{n.call(null)}finally{mt(r),W(e)}}}function Mt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;I(r,n),r=e}}function An(t){for(var n=t.first;n!==null;){var r=n.next;(n.f&x)===0&&I(n),n=r}}function I(t,n=!0){var r=!1;if((n||(t.f&ln)!==0)&&t.nodes_start!==null){for(var e=t.nodes_start,l=t.nodes_end;e!==null;){var s=e===l?null:N(e);e.remove(),e=s}r=!0}Mt(t,n&&!r),X(t,0),T(t,tt);var a=t.transitions;if(a!==null)for(const y of a)y.stop();Yt(t);var _=t.parent;_!==null&&_.first!==null&&jt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function jt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function xn(t,n){var r=[];Ut(t,r,!0),Rn(r,()=>{I(t),n&&n()})}function Rn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var l of t)l.out(e)}else n()}function Ut(t,n,r){if((t.f&P)===0){if(t.f^=P,t.transitions!==null)for(const a of t.transitions)(a.is_global||r)&&n.push(a);for(var e=t.first;e!==null;){var l=e.next,s=(e.f&kt)!==0||(e.f&x)!==0;Ut(e,n,s?r:!1),e=l}}}function Ir(t){Bt(t,!0)}function Bt(t,n){if((t.f&P)!==0){t.f^=P,(t.f&p)===0&&(t.f^=p),H(t)&&(T(t,S),lt(t));for(var r=t.first;r!==null;){var e=r.next,l=(r.f&kt)!==0||(r.f&x)!==0;Bt(r,l?n:!1),r=e}if(t.transitions!==null)for(const s of t.transitions)(s.is_global||n)&&s.in()}}const Sn=typeof requestIdleCallback>"u"?t=>setTimeout(t,1):requestIdleCallback;let Z=!1,z=!1,ut=[],ot=[];function Ht(){Z=!1;const t=ut.slice();ut=[],gt(t)}function Vt(){z=!1;const t=ot.slice();ot=[],gt(t)}function Nr(t){Z||(Z=!0,queueMicrotask(Ht)),ut.push(t)}function br(t){z||(z=!0,Sn(Vt)),ot.push(t)}function Dn(){Z&&Ht(),z&&Vt()}const Gt=0,On=1;let V=!1,G=Gt,M=!1,j=null,q=!1,ct=!1;function Et(t){q=t}function mt(t){ct=t}let D=[],C=0;let u=null,A=!1;function W(t){u=t}let f=null;function J(t){f=t}let m=null;function In(t){m=t}let v=null,d=0,k=null;function Nn(t){k=t}let $t=1,Q=0,R=!1;function Kt(){return++$t}function H(t){var c;var n=t.f;if((n&S)!==0)return!0;if((n&F)!==0){var r=t.deps,e=(n&g)!==0;if(r!==null){var l,s,a=(n&K)!==0,_=e&&f!==null&&!R,y=r.length;if(a||_){for(l=0;l<y;l++)s=r[l],(a||!((c=s==null?void 0:s.reactions)!=null&&c.includes(t)))&&(s.reactions??(s.reactions=[])).push(t);a&&(t.f^=K)}for(l=0;l<y;l++)if(s=r[l],H(s)&&Pt(s),s.wv>t.wv)return!0}(!e||f!==null&&!R)&&T(t,p)}return!1}function bn(t,n){for(var r=n;r!==null;){if((r.f&$)!==0)try{r.fn(t);return}catch{r.f^=$}r=r.parent}throw V=!1,t}function qn(t){return(t.f&tt)===0&&(t.parent===null||(t.parent.f&$)===0)}function et(t,n,r,e){if(V){if(r===null&&(V=!1),qn(n))throw t;return}r!==null&&(V=!0);{bn(t,n);return}}function Zt(t,n,r=0){var e=t.reactions;if(e!==null)for(var l=0;l<e.length;l++){var s=e[l];(s.f&w)!==0?Zt(s,n,r+1):n===s&&(r===0?T(s,S):(s.f&p)!==0&&T(s,F),lt(s))}}function zt(t){var pt;var n=v,r=d,e=k,l=u,s=R,a=m,_=i,y=A,c=t.f;v=null,d=0,k=null,u=(c&(x|B))===0?t:null,R=(c&g)!==0&&(!q||l===null||y),m=null,yt(t.ctx),A=!1,Q++;try{var b=(0,t.fn)(),h=t.deps;if(v!==null){var o;if(X(t,d),h!==null&&d>0)for(h.length=d+v.length,o=0;o<v.length;o++)h[d+o]=v[o];else t.deps=h=v;if(!R)for(o=d;o<h.length;o++)((pt=h[o]).reactions??(pt.reactions=[])).push(t)}else h!==null&&d<h.length&&(X(t,d),h.length=d);if(rt()&&k!==null&&(t.f&(w|F|S))===0)for(o=0;o<k.length;o++)Zt(k[o],t);return l!==null&&Q++,b}finally{v=n,d=r,k=e,u=l,R=s,m=a,yt(_),A=y}}function Cn(t,n){let r=n.reactions;if(r!==null){var e=tn.call(r,t);if(e!==-1){var l=r.length-1;l===0?r=n.reactions=null:(r[e]=r[l],r.pop())}}r===null&&(n.f&w)!==0&&(v===null||!v.includes(n))&&(T(n,F),(n.f&(g|K))===0&&(n.f^=K),Ct(n),X(n,0))}function X(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)Cn(t,r[e])}function vt(t){var n=t.f;if((n&tt)===0){T(t,p);var r=f,e=i;f=t;try{(n&it)!==0?An(t):Mt(t),Yt(t);var l=zt(t);t.teardown=typeof l=="function"?l:null,t.wv=$t;var s=t.deps,a}catch(_){et(_,t,r,e||t.ctx)}finally{f=r}}}function Wt(){if(C>1e3){C=0;try{fn()}catch(t){if(j!==null)et(t,j,null);else throw t}}C++}function Jt(t){var n=t.length;if(n!==0){Wt();var r=q;q=!0;try{for(var e=0;e<n;e++){var l=t[e];(l.f&p)===0&&(l.f^=p);var s=[];Qt(l,s),Pn(s)}}finally{q=r}}}function Pn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if((e.f&(tt|P))===0)try{H(e)&&(vt(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?jt(e):e.fn=null))}catch(l){et(l,e,null,e.ctx)}}}function Fn(){if(M=!1,C>1001)return;const t=D;D=[],Jt(t),M||(C=0,j=null)}function lt(t){G===Gt&&(M||(M=!0,queueMicrotask(Fn))),j=t;for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if((r&(B|x))!==0){if((r&p)===0)return;n.f^=p}}D.push(n)}function Qt(t,n){var r=t.first,e=[];t:for(;r!==null;){var l=r.f,s=(l&x)!==0,a=s&&(l&p)!==0,_=r.next;if(!a&&(l&P)===0)if((l&U)!==0){if(s)r.f^=p;else{var y=u;try{u=r,H(r)&&vt(r)}catch(o){et(o,r,null,r.ctx)}finally{u=y}}var c=r.first;if(c!==null){r=c;continue}}else(l&Tt)!==0&&e.push(r);if(_===null){let o=r.parent;for(;o!==null;){if(t===o)break t;var b=o.next;if(b!==null){r=b;continue t}o=o.parent}}r=_}for(var h=0;h<e.length;h++)c=e[h],n.push(c),Qt(c,n)}function Xt(t){var n=G,r=D;try{Wt();const l=[];G=On,D=l,M=!1,Jt(r);var e=t==null?void 0:t();return Dn(),(D.length>0||l.length>0)&&Xt(),C=0,j=null,e}finally{G=n,D=r}}async function qr(){await Promise.resolve(),Xt()}function Ln(t){var n=t.f,r=(n&w)!==0;if(u!==null&&!A){m!==null&&m.includes(t)&&_n();var e=u.deps;t.rv<Q&&(t.rv=Q,v===null&&e!==null&&e[d]===t?d++:v===null?v=[t]:(!R||!v.includes(t))&&v.push(t))}else if(r&&t.deps===null&&t.effects===null){var l=t,s=l.parent;s!==null&&(s.f&g)===0&&(l.f^=g)}return r&&(l=t,H(l)&&Pt(l)),t.v}function Cr(t){var n=A;try{return A=!0,t()}finally{A=n}}const Yn=-7169;function T(t,n){t.f=t.f&Yn|n}function Pr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(dt in t)ft(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&dt in r&&ft(r)}}}function ft(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{ft(t[e],n)}catch{}const r=rn(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=nn(r);for(let l in e){const s=e[l].get;if(s)try{s.call(t)}catch{}}}}}export{sr as $,zn as A,Tr as B,jn as C,Sr as D,Or as E,or as F,f as G,ln as H,fr as I,nt as J,dr as K,rn as L,nn as M,br as N,Zn as O,W as P,J as Q,u as R,Ar as S,Nr as T,Un as U,Mn as V,mr as W,Dr as X,Er as Y,hr as Z,gr as _,vn as a,ar as a0,cr as a1,_r as a2,wn as a3,rt as a4,Tn as a5,dt as a6,Bn as a7,Hn as a8,_t as a9,Qn as aa,ur as ab,ht as ac,Jn as ad,kt as ae,pn as af,yr as ag,Ir as ah,xn as ai,Lt as aj,Wn as ak,$n as al,rr as am,Rt as an,dn as ao,er as ap,Kn as aq,nr as ar,x as as,B as at,tr as au,lr as av,kr as aw,Xt as ax,ir as ay,qr as az,kn as b,st as c,Y as d,E as e,at as f,N as g,O as h,i,xr as j,Cr as k,Gn as l,Ln as m,Pr as n,qt as o,Vn as p,sn as q,gt as r,vr as s,Xn as t,Rr as u,wr as v,St as w,pr as x,hn as y,Dt as z};
