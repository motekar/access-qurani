function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["../nodes/0.W4Uieupq.js","../chunks/disclose-version.OqR9qxKF.js","../chunks/runtime.-KGhlEcp.js","../nodes/1.BtdCwmPK.js","../chunks/store.CUOUiSNX.js","../chunks/paths.Bh5SIoz-.js","../chunks/entry.BoahJ362.js","../nodes/2.ByHRKKfZ.js","../chunks/main-client.BkeSG2Pp.js","../assets/2.BW_hWdYJ.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
var F=(t,e,n)=>{if(!e.has(t))throw TypeError("Cannot "+n)};var h=(t,e,n)=>(F(t,e,"read from private field"),n?n.call(t):e.get(t)),T=(t,e,n)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,n)},W=(t,e,n,r)=>(F(t,e,"write to private field"),r?r.call(t,n):e.set(t,n),n);import{d as re,S as v,o as ae,e as ie,f as $,h as R,i as oe,s as w,U as L,j as le,k as Y,m as Z,g as x,u as ee,l as ce,q as ue,t as G,v as I,w as fe,I as de,a as _e,x as me,p as he}from"../chunks/runtime.-KGhlEcp.js";import{h as j,r as z,j as O,k as ge,l as C,m as ve,n as A,p as B,q as ye,v as be,w as we,x as q,y as ke,u as Ee,c as S,z as U,A as xe,B as H,o as Pe,a as D,g as J,b as p,C as Re,e as Le,D as Oe,d as Ie,f as te,E as K}from"../chunks/disclose-version.OqR9qxKF.js";import{o as Ce}from"../chunks/main-client.BkeSG2Pp.js";function P(t,e=!0,n){if(typeof t=="object"&&t!=null&&!re(t)){if(v in t){const s=t[v];if(s.t===t||s.p===t)return s.p}const r=ce(t);if(r===ae||r===ie){const s=new Proxy(t,Se);return $(t,v,{value:{s:new Map,v:R(0),a:oe(t),i:e,p:s,t},writable:!0,enumerable:!1}),s}}return t}function Q(t,e=1){const n=ee(()=>x(t));w(t,n+e)}const Se={defineProperty(t,e,n){if(n.value){const r=t[v],s=r.s.get(e);s!==void 0&&w(s,P(n.value,r.i,r.o))}return Reflect.defineProperty(t,e,n)},deleteProperty(t,e){const n=t[v],r=n.s.get(e),s=n.a,i=delete t[e];if(s&&i){const a=n.s.get("length"),l=t.length-1;a!==void 0&&a.v!==l&&w(a,l)}return r!==void 0&&w(r,L),i&&Q(n.v),i},get(t,e,n){var i;if(e===v)return Reflect.get(t,v);const r=t[v];let s=r.s.get(e);if(s===void 0&&(j()||le)&&(!(e in t)||(i=Y(t,e))!=null&&i.writable)&&(s=(r.i?R:Z)(P(t[e],r.i,r.o)),r.s.set(e,s)),s!==void 0){const a=x(s);return a===L?void 0:a}return Reflect.get(t,e,n)},getOwnPropertyDescriptor(t,e){const n=Reflect.getOwnPropertyDescriptor(t,e);if(n&&"value"in n){const s=t[v].s.get(e);s&&(n.value=x(s))}return n},has(t,e){var i;if(e===v)return!0;const n=t[v],r=Reflect.has(t,e);let s=n.s.get(e);return(s!==void 0||j()&&(!r||(i=Y(t,e))!=null&&i.writable))&&(s===void 0&&(s=(n.i?R:Z)(r?P(t[e],n.i,n.o):L),n.s.set(e,s)),x(s)===L)?!1:r},set(t,e,n,r){const s=t[v];let i=s.s.get(e);i===void 0&&j()&&(ee(()=>r[e]),i=s.s.get(e)),i!==void 0&&w(i,P(n,s.i,s.o));const a=s.a,l=!(e in t);if(a&&e==="length")for(let f=n;f<t.length;f+=1){const d=s.s.get(f+"");d!==void 0&&w(d,L)}if(t[e]=n,l){if(a){const f=s.s.get("length"),d=t.length;f!==void 0&&f.v!==d&&w(f,d)}Q(s.v)}return!0},ownKeys(t){const e=t[v];return x(e.v),Reflect.ownKeys(t)}};function De(){return{a:null,ae:null,c:null,ce:null,d:null,e:null,p:fe,r:null,t:de,v:!1}}function M(t,e,n,r){const s=De();ge(t);let i=!1,a=null,l=null,f=!1,d=null;const y=z(()=>{var m,u;const _=!!e();if(s.v!==_||!f){if(s.v=_,f){const g=s.c,k=s.a;_?(k===null||k.size===0?I(c):C(k,"out"),g===null||g.size===0?I(o):C(g,"in")):(g===null||g.size===0?I(o):C(g,"out"),k===null||k.size===0?I(c):C(k,"in"))}else if(ve){const g=(u=(m=A)==null?void 0:m[0])==null?void 0:u.data;!g||g==="ssr:if:true"&&!_||g==="ssr:if:false"&&_?(O(A),B(null),i=!0):A.shift()}f=!0}},s,!1),o=z((_,m)=>{const u=s.v;!u&&a!==null&&(O(a),a=null),u&&d!==m&&(n(t),i&&d===null&&B([]),d=m,a=s.d),s.d=null},s,!0);s.ce=o;const c=z((_,m)=>{const u=s.v;u&&l!==null&&(O(l),l=null),!u&&d!==m&&(r!==null&&r(t),i&&d===null&&B([]),d=m,l=s.d),s.d=null},s,!0);s.ae=c,ue(y,()=>{a!==null&&O(a),l!==null&&O(l),G(o),G(c)}),s.e=y}function Te(t){return class extends je{constructor(e){super({component:t,...e})}}}var E,b;class je{constructor(e){T(this,E,{});T(this,b,void 0);const n=P({...e.props||{},$$events:h(this,E)},!1);W(this,b,(e.hydrate?ye:be)(e.component,{target:e.target,props:n,context:e.context,intro:e.intro,recover:e.recover}));for(const r of Object.keys(h(this,b)))$(this,r,{get(){return h(this,b)[r]},set(s){h(this,b)[r]=s},enumerable:!0});h(this,b).$set=r=>{Object.assign(n,r)},h(this,b).$destroy=()=>{we(h(this,b))}}$set(e){h(this,b).$set(e)}$on(e,n){h(this,E)[e]=h(this,E)[e]||[];const r=(...s)=>n.call(this,...s);return h(this,E)[e].push(r),()=>{h(this,E)[e]=h(this,E)[e].filter(s=>s!==r)}}$destroy(){h(this,b).$destroy()}}E=new WeakMap,b=new WeakMap;const ze="modulepreload",Ae=function(t,e){return new URL(t,e).href},X={},N=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){const i=document.getElementsByTagName("link");s=Promise.all(n.map(a=>{if(a=Ae(a,r),a in X)return;X[a]=!0;const l=a.endsWith(".css"),f=l?'[rel="stylesheet"]':"";if(!!r)for(let o=i.length-1;o>=0;o--){const c=i[o];if(c.href===a&&(!l||c.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${f}`))return;const y=document.createElement("link");if(y.rel=l?"stylesheet":ze,l||(y.as="script",y.crossOrigin=""),y.href=a,document.head.appendChild(y),l)return new Promise((o,c)=>{y.addEventListener("load",o),y.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${a}`)))})}))}return s.then(()=>e()).catch(i=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=i,window.dispatchEvent(a),!a.defaultPrevented)throw i})},Ve={};var Be=te('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'),qe=te("<!> <!>",!0);function Ue(t,e){_e(e,!0);let n=q(e,"components",11,()=>[]),r=q(e,"data_0",3,null),s=q(e,"data_1",3,null);ke(()=>e.stores.page.set(e.page)),Ee(()=>{e.stores,e.page,e.constructors,n(),e.form,r(),s(),e.stores.page.notify()});let i=R(!1),a=R(!1),l=R(null);Ce(()=>{const o=e.stores.page.subscribe(()=>{x(i)&&(w(a,!0),me().then(()=>{w(l,P(document.title||"untitled page"))}))});return w(i,!0),o});var f=Pe(t,!0,qe),d=D(f),y=J(J(d,!0));M(d,()=>e.constructors[1],o=>{var c=p(o),_=D(c);U(_,()=>e.constructors[0],m=>{K(m(_,{get data(){return r()},children:(u,g)=>{var k=p(u),V=D(k);U(V,()=>e.constructors[1],se=>{K(se(V,{get data(){return s()},get form(){return e.form}}),ne=>n()[1]=ne,()=>n()[1])}),S(u,k)}}),u=>n()[0]=u,()=>n()[0])}),S(o,c)},o=>{var c=p(o),_=D(c);U(_,()=>e.constructors[0],m=>{K(m(_,{get data(){return r()},get form(){return e.form}}),u=>n()[0]=u,()=>n()[0])}),S(o,c)}),M(y,()=>x(i),o=>{var c=Re(o,!0,Be),_=Le(c);M(_,()=>x(a),m=>{var u=Oe(m),g=Ie(u);xe(g,()=>x(l)),H(m,u)},null),H(o,c)},null),S(t,f),he()}const Fe=Te(Ue),We=[()=>N(()=>import("../nodes/0.W4Uieupq.js"),__vite__mapDeps([0,1,2]),import.meta.url),()=>N(()=>import("../nodes/1.BtdCwmPK.js"),__vite__mapDeps([3,1,2,4,5,6]),import.meta.url),()=>N(()=>import("../nodes/2.ByHRKKfZ.js"),__vite__mapDeps([7,1,2,4,5,8,9]),import.meta.url)],Ye=[],Ze={"/":[2]},Ge={handleError:({error:t})=>{console.error(t)},reroute:()=>{}};export{Ze as dictionary,Ge as hooks,Ve as matchers,We as nodes,Fe as root,Ye as server_loads};
