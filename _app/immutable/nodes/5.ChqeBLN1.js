import{t as z,b as A}from"../chunks/dWOrwwKi.js";import"../chunks/BoIXh8xF.js";import{h as w,a4 as H,k as R,a5 as V,J as $,_ as B,m as o,M as O,P as i,Q as c,S as u,R as P,a2 as b,a1 as _,O as Q}from"../chunks/iFupyO9f.js";import{l as T,e as U}from"../chunks/DEgeKwE-.js";import{r as q}from"../chunks/CjK-ldRF.js";import{i as W}from"../chunks/BP3DilHB.js";import{t as X}from"../chunks/DY08gUIi.js";function C(e){var a,s,t="";if(typeof e=="string"||typeof e=="number")t+=e;else if(typeof e=="object")if(Array.isArray(e)){var l=e.length;for(a=0;a<l;a++)e[a]&&(s=C(e[a]))&&(t&&(t+=" "),t+=s)}else for(s in e)e[s]&&(t&&(t+=" "),t+=s);return t}function I(){for(var e,a,s=0,t="",l=arguments.length;s<l;s++)(e=arguments[s])&&(a=C(e))&&(t&&(t+=" "),t+=a);return t}function g(e){return typeof e=="object"?I(e):e??""}function h(e,a,s){var t=e.__className,l=K(a,s);w&&e.className===l?e.__className=l:(t!==l||w&&e.className!==l)&&(e.className=l,e.__className=l)}function K(e,a){return(e??"")+(" "+a)}function y(e,a,s=a){var t=H();T(e,"input",l=>{var r=l?e.defaultValue:e.value;if(r=j(e)?S(r):r,s(r),t&&r!==(r=a())){var f=e.selectionStart,v=e.selectionEnd;e.value=r??"",v!==null&&(e.selectionStart=f,e.selectionEnd=Math.min(v,e.value.length))}}),(w&&e.defaultValue!==e.value||R(a)==null&&e.value)&&s(j(e)?S(e.value):e.value),V(()=>{var l=a();j(e)&&l===S(e.value)||e.type==="date"&&!l&&!e.value||l!==e.value&&(e.value=l??"")})}function j(e){var a=e.type;return a==="number"||a==="range"}function S(e){return e===""?null:+e}var L=z('<div class="contact-form svelte-1ev2dqq"><form class="svelte-1ev2dqq"><label class="svelte-1ev2dqq"><p>Email</p> <input id="email" type="email" placeholder="Email" required class="svelte-1ev2dqq"></label> <label class="svelte-1ev2dqq"><p>Subject</p> <input id="subject" type="text" placeholder="Subject" required class="svelte-1ev2dqq"></label> <label class="svelte-1ev2dqq"><p>Message</p> <input id="msg" type="text" placeholder="Message" required class="svelte-1ev2dqq"></label> <button id="submitBtn" type="submit" class="svelte-1ev2dqq">Submit</button></form></div>');function Y(e,a){$(a,!1);let s=b(""),t=b(""),l=b("");function r(n){f(o(s),o(t),o(l)),n.preventDefault(),console.log("Form submitted")}function f(n,D,G){n=="HamFraGames@gamesweb.dk"&&D=="Hej"&&G=="Det er Jeppe"&&(console.log("Special effect activated"),X.set("RunTime X Jeppe Fra Games"))}W();var v=L(),m=c(v),d=c(m),x=c(d),N=i(x,2);q(N),u(d);var p=i(d,2),k=c(p),E=i(k,2);q(E),u(p);var F=i(p,2),M=c(F),J=i(M,2);q(J),u(F),P(2),u(m),u(v),B(()=>{h(x,g(o(s)?"above":"center"),"svelte-1ev2dqq"),h(k,g(o(t)?"above":"center"),"svelte-1ev2dqq"),h(M,g(o(l)?"above":"center"),"svelte-1ev2dqq")}),y(N,()=>o(s),n=>_(s,n)),y(E,()=>o(t),n=>_(t,n)),y(J,()=>o(l),n=>_(l,n)),U("submit",m,r),A(e,v),O()}var Z=z('<div class="header svelte-1bujzpw"><h1 class="svelte-1bujzpw">Contact Us</h1> <p>Feel free to contact us down below with any questions or reqeusts. We will try and get back to you as soon as possible.</p></div> <div class="contact-form"><!></div>',1);function oe(e){var a=Z(),s=i(Q(a),2),t=c(s);Y(t,{}),u(s),A(e,a)}export{oe as component};
