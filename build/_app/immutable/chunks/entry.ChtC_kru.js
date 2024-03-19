import{n as q,_ as ce,A as le,s as fe,D as ue,z as de}from"./scheduler.Y2o17alP.js";new URL("sveltekit-internal://");function he(t,n){return t==="/"||n==="ignore"?t:n==="never"?t.endsWith("/")?t.slice(0,-1):t:n==="always"&&!t.endsWith("/")?t+"/":t}function pe(t){return t.split("%25").map(decodeURI).join("%25")}function ge(t){for(const n in t)t[n]=decodeURIComponent(t[n]);return t}function ut({href:t}){return t.split("#")[0]}const me=["href","pathname","search","toString","toJSON"];function _e(t,n,e){const r=new URL(t);Object.defineProperty(r,"searchParams",{value:new Proxy(r.searchParams,{get(a,o){if(o==="get"||o==="getAll"||o==="has")return s=>(e(s),a[o](s));n();const i=Reflect.get(a,o);return typeof i=="function"?i.bind(a):i}}),enumerable:!0,configurable:!0});for(const a of me)Object.defineProperty(r,a,{get(){return n(),t[a]},enumerable:!0,configurable:!0});return r}const ye="/__data.json",we=".html__data.json";function ve(t){return t.endsWith(".html")?t.replace(/\.html$/,we):t.replace(/\/$/,"")+ye}function be(...t){let n=5381;for(const e of t)if(typeof e=="string"){let r=e.length;for(;r;)n=n*33^e.charCodeAt(--r)}else if(ArrayBuffer.isView(e)){const r=new Uint8Array(e.buffer,e.byteOffset,e.byteLength);let a=r.length;for(;a;)n=n*33^r[--a]}else throw new TypeError("value must be a string or TypedArray");return(n>>>0).toString(36)}function Ee(t){const n=atob(t),e=new Uint8Array(n.length);for(let r=0;r<n.length;r++)e[r]=n.charCodeAt(r);return e.buffer}const Vt=window.fetch;window.fetch=(t,n)=>((t instanceof Request?t.method:(n==null?void 0:n.method)||"GET")!=="GET"&&G.delete(_t(t)),Vt(t,n));const G=new Map;function ke(t,n){const e=_t(t,n),r=document.querySelector(e);if(r!=null&&r.textContent){let{body:a,...o}=JSON.parse(r.textContent);const i=r.getAttribute("data-ttl");return i&&G.set(e,{body:a,init:o,ttl:1e3*Number(i)}),r.getAttribute("data-b64")!==null&&(a=Ee(a)),Promise.resolve(new Response(a,o))}return window.fetch(t,n)}function Se(t,n,e){if(G.size>0){const r=_t(t,e),a=G.get(r);if(a){if(performance.now()<a.ttl&&["default","force-cache","only-if-cached",void 0].includes(e==null?void 0:e.cache))return new Response(a.body,a.init);G.delete(r)}}return window.fetch(n,e)}function _t(t,n){let r=`script[data-sveltekit-fetched][data-url=${JSON.stringify(t instanceof Request?t.url:t)}]`;if(n!=null&&n.headers||n!=null&&n.body){const a=[];n.headers&&a.push([...new Headers(n.headers)].join(",")),n.body&&(typeof n.body=="string"||ArrayBuffer.isView(n.body))&&a.push(n.body),r+=`[data-hash="${be(...a)}"]`}return r}const Ae=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Re(t){const n=[];return{pattern:t==="/"?/^\/$/:new RegExp(`^${Le(t).map(r=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);if(a)return n.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const o=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);if(o)return n.push({name:o[1],matcher:o[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!r)return;const i=r.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,l)=>{if(l%2){if(c.startsWith("x+"))return dt(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return dt(String.fromCharCode(...c.slice(2).split("-").map(f=>parseInt(f,16))));const u=Ae.exec(c),[,h,g,d,m]=u;return n.push({name:d,matcher:m,optional:!!h,rest:!!g,chained:g?l===1&&i[0]==="":!1}),g?"(.*?)":h?"([^/]*)?":"([^/]+?)"}return dt(c)}).join("")}).join("")}/?$`),params:n}}function Ie(t){return!/^\([^)]+\)$/.test(t)}function Le(t){return t.slice(1).split("/").filter(Ie)}function Pe(t,n,e){const r={},a=t.slice(1),o=a.filter(s=>s!==void 0);let i=0;for(let s=0;s<n.length;s+=1){const c=n[s];let l=a[s-i];if(c.chained&&c.rest&&i&&(l=a.slice(s-i,s+1).filter(u=>u).join("/"),i=0),l===void 0){c.rest&&(r[c.name]="");continue}if(!c.matcher||e[c.matcher](l)){r[c.name]=l;const u=n[s+1],h=a[s+1];u&&!u.rest&&u.optional&&h&&c.chained&&(i=0),!u&&!h&&Object.keys(r).length===o.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return r}function dt(t){return t.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function xe({nodes:t,server_loads:n,dictionary:e,matchers:r}){const a=new Set(n);return Object.entries(e).map(([s,[c,l,u]])=>{const{pattern:h,params:g}=Re(s),d={id:s,exec:m=>{const f=h.exec(m);if(f)return Pe(f,g,r)},errors:[1,...u||[]].map(m=>t[m]),layouts:[0,...l||[]].map(i),leaf:o(c)};return d.errors.length=d.layouts.length=Math.max(d.errors.length,d.layouts.length),d});function o(s){const c=s<0;return c&&(s=~s),[c,t[s]]}function i(s){return s===void 0?s:[a.has(s),t[s]]}}function Ft(t,n=JSON.parse){try{return n(sessionStorage[t])}catch{}}function xt(t,n,e=JSON.stringify){const r=e(n);try{sessionStorage[t]=r}catch{}}const O=[];function Te(t,n){return{subscribe:nt(t,n).subscribe}}function nt(t,n=q){let e;const r=new Set;function a(s){if(fe(t,s)&&(t=s,e)){const c=!O.length;for(const l of r)l[1](),O.push(l,t);if(c){for(let l=0;l<O.length;l+=2)O[l][0](O[l+1]);O.length=0}}}function o(s){a(s(t))}function i(s,c=q){const l=[s,c];return r.add(l),r.size===1&&(e=n(a,o)||q),s(t),()=>{r.delete(l),r.size===0&&e&&(e(),e=null)}}return{set:a,update:o,subscribe:i}}function rn(t,n,e){const r=!Array.isArray(t),a=r?[t]:t;if(!a.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const o=n.length<2;return Te(e,(i,s)=>{let c=!1;const l=[];let u=0,h=q;const g=()=>{if(u)return;h();const m=n(r?l[0]:l,i,s);o?i(m):h=ue(m)?m:q},d=a.map((m,f)=>ce(m,_=>{l[f]=_,u&=~(1<<f),c&&g()},()=>{u|=1<<f}));return c=!0,g(),function(){le(d),h(),c=!1}})}var Dt;const I=((Dt=globalThis.__sveltekit_17ngoic)==null?void 0:Dt.base)??"";var Ct;const Ue=((Ct=globalThis.__sveltekit_17ngoic)==null?void 0:Ct.assets)??I,Ne="1710841586541",qt="sveltekit:snapshot",Gt="sveltekit:scroll",yt="sveltekit:states",Mt="sveltekit:pageurl",U="sveltekit:history",D="sveltekit:navigation",Y={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},z=location.origin;function wt(t){if(t instanceof URL)return t;let n=document.baseURI;if(!n){const e=document.getElementsByTagName("base");n=e.length?e[0].href:document.URL}return new URL(t,n)}function vt(){return{x:pageXOffset,y:pageYOffset}}function j(t,n){return t.getAttribute(`data-sveltekit-${n}`)}const Tt={...Y,"":Y.hover};function Bt(t){let n=t.assignedSlot??t.parentNode;return(n==null?void 0:n.nodeType)===11&&(n=n.host),n}function Ht(t,n){for(;t&&t!==n;){if(t.nodeName.toUpperCase()==="A"&&t.hasAttribute("href"))return t;t=Bt(t)}}function pt(t,n){let e;try{e=new URL(t instanceof SVGAElement?t.href.baseVal:t.href,document.baseURI)}catch{}const r=t instanceof SVGAElement?t.target.baseVal:t.target,a=!e||!!r||at(e,n)||(t.getAttribute("rel")||"").split(/\s+/).includes("external"),o=(e==null?void 0:e.origin)===z&&t.hasAttribute("download");return{url:e,external:a,target:r,download:o}}function J(t){let n=null,e=null,r=null,a=null,o=null,i=null,s=t;for(;s&&s!==document.documentElement;)r===null&&(r=j(s,"preload-code")),a===null&&(a=j(s,"preload-data")),n===null&&(n=j(s,"keepfocus")),e===null&&(e=j(s,"noscroll")),o===null&&(o=j(s,"reload")),i===null&&(i=j(s,"replacestate")),s=Bt(s);function c(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:Tt[r??"off"],preload_data:Tt[a??"off"],keepfocus:c(n),noscroll:c(e),reload:c(o),replace_state:c(i)}}function Ut(t){const n=nt(t);let e=!0;function r(){e=!0,n.update(i=>i)}function a(i){e=!1,n.set(i)}function o(i){let s;return n.subscribe(c=>{(s===void 0||e&&c!==s)&&i(s=c)})}return{notify:r,set:a,subscribe:o}}function Oe(){const{set:t,subscribe:n}=nt(!1);let e;async function r(){clearTimeout(e);try{const a=await fetch(`${Ue}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const i=(await a.json()).version!==Ne;return i&&(t(!0),clearTimeout(e)),i}catch{return!1}}return{subscribe:n,check:r}}function at(t,n){return t.origin!==z||!t.pathname.startsWith(n)}const je=-1,$e=-2,De=-3,Ce=-4,Ve=-5,Fe=-6;function qe(t,n){if(typeof t=="number")return a(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const e=t,r=Array(e.length);function a(o,i=!1){if(o===je)return;if(o===De)return NaN;if(o===Ce)return 1/0;if(o===Ve)return-1/0;if(o===Fe)return-0;if(i)throw new Error("Invalid input");if(o in r)return r[o];const s=e[o];if(!s||typeof s!="object")r[o]=s;else if(Array.isArray(s))if(typeof s[0]=="string"){const c=s[0],l=n==null?void 0:n[c];if(l)return r[o]=l(a(s[1]));switch(c){case"Date":r[o]=new Date(s[1]);break;case"Set":const u=new Set;r[o]=u;for(let d=1;d<s.length;d+=1)u.add(a(s[d]));break;case"Map":const h=new Map;r[o]=h;for(let d=1;d<s.length;d+=2)h.set(a(s[d]),a(s[d+1]));break;case"RegExp":r[o]=new RegExp(s[1],s[2]);break;case"Object":r[o]=Object(s[1]);break;case"BigInt":r[o]=BigInt(s[1]);break;case"null":const g=Object.create(null);r[o]=g;for(let d=1;d<s.length;d+=2)g[s[d]]=a(s[d+1]);break;default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(s.length);r[o]=c;for(let l=0;l<s.length;l+=1){const u=s[l];u!==$e&&(c[l]=a(u))}}else{const c={};r[o]=c;for(const l in s){const u=s[l];c[l]=a(u)}}return r[o]}return a(0)}const zt=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...zt];const Ge=new Set([...zt]);[...Ge];function Me(t){return t.filter(n=>n!=null)}class rt{constructor(n,e){this.status=n,typeof e=="string"?this.body={message:e}:e?this.body=e:this.body={message:`Error: ${n}`}}toString(){return JSON.stringify(this.body)}}class Kt{constructor(n,e){this.status=n,this.location=e}}class bt extends Error{constructor(n,e,r){super(r),this.status=n,this.text=e}}const Be="x-sveltekit-invalidated",He="x-sveltekit-trailing-slash";function W(t){return t instanceof rt||t instanceof bt?t.status:500}function ze(t){return t instanceof bt?t.text:"Internal Error"}const N=Ft(Gt)??{},M=Ft(qt)??{},x={url:Ut({}),page:Ut({}),navigating:nt(null),updated:Oe()};function ot(t){N[t]=vt()}function Yt(t,n){let e=t+1;for(;N[e];)delete N[e],e+=1;for(e=n+1;M[e];)delete M[e],e+=1}function C(t){return location.href=t.href,new Promise(()=>{})}function Nt(){}let st,gt,X,L,mt,V;const Jt=[],Z=[];let P=null;const Wt=[],Ke=[];let $=[],w={branch:[],error:null,url:null},Et=!1,Q=!1,Ot=!0,B=!1,F=!1,kt=!1,St=!1,it,E,R,A,tt;async function on(t,n,e){var a,o;document.URL!==location.href&&(location.href=location.href),V=t,st=xe(t),L=document.documentElement,mt=n,gt=t.nodes[0],X=t.nodes[1],gt(),X(),E=(a=history.state)==null?void 0:a[U],R=(o=history.state)==null?void 0:o[D],E||(E=R=Date.now(),history.replaceState({...history.state,[U]:E,[D]:R},""));const r=N[E];r&&(history.scrollRestoration="manual",scrollTo(r.x,r.y)),e?await en(mt,e):Qe(location.href,{replaceState:!0}),tn()}function Ye(){Jt.length=0,St=!1}function Xt(t){Z.some(n=>n==null?void 0:n.snapshot)&&(M[t]=Z.map(n=>{var e;return(e=n==null?void 0:n.snapshot)==null?void 0:e.capture()}))}function Zt(t){var n;(n=M[t])==null||n.forEach((e,r)=>{var a,o;(o=(a=Z[r])==null?void 0:a.snapshot)==null||o.restore(e)})}function jt(){ot(E),xt(Gt,N),Xt(R),xt(qt,M)}async function Qt(t,n,e,r){return K({type:"goto",url:wt(t),keepfocus:n.keepFocus,noscroll:n.noScroll,replace_state:n.replaceState,state:n.state,redirect_count:e,nav_token:r,accept:()=>{n.invalidateAll&&(St=!0)}})}async function Je(t){return P={id:t.id,promise:ee(t).then(n=>(n.type==="loaded"&&n.state.error&&(P=null),n))},P.promise}async function ht(t){const n=st.find(e=>e.exec(ne(t)));n&&await Promise.all([...n.layouts,n.leaf].map(e=>e==null?void 0:e[1]()))}function te(t,n){var a;w=t.state;const e=document.querySelector("style[data-sveltekit]");e&&e.remove(),A=t.props.page,it=new V.root({target:n,props:{...t.props,stores:x,components:Z},hydrate:!0}),Zt(R);const r={from:null,to:{params:w.params,route:{id:((a=w.route)==null?void 0:a.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};$.forEach(o=>o(r)),Q=!0}async function et({url:t,params:n,branch:e,status:r,error:a,route:o,form:i}){let s="never";if(I&&(t.pathname===I||t.pathname===I+"/"))s="always";else for(const d of e)(d==null?void 0:d.slash)!==void 0&&(s=d.slash);t.pathname=he(t.pathname,s),t.search=t.search;const c={type:"loaded",state:{url:t,params:n,branch:e,error:a,route:o},props:{constructors:Me(e).map(d=>d.node.component),page:A}};i!==void 0&&(c.props.form=i);let l={},u=!A,h=0;for(let d=0;d<Math.max(e.length,w.branch.length);d+=1){const m=e[d],f=w.branch[d];(m==null?void 0:m.data)!==(f==null?void 0:f.data)&&(u=!0),m&&(l={...l,...m.data},u&&(c.props[`data_${h}`]=l),h+=1)}return(!w.url||t.href!==w.url.href||w.error!==a||i!==void 0&&i!==A.form||u)&&(c.props.page={error:a,params:n,route:{id:(o==null?void 0:o.id)??null},state:{},status:r,url:new URL(t),form:i??null,data:u?l:A.data}),c}async function At({loader:t,parent:n,url:e,params:r,route:a,server_data_node:o}){var u,h,g;let i=null,s=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},l=await t();if((u=l.universal)!=null&&u.load){let d=function(...f){for(const _ of f){const{href:v}=new URL(_,e);c.dependencies.add(v)}};const m={route:new Proxy(a,{get:(f,_)=>(s&&(c.route=!0),f[_])}),params:new Proxy(r,{get:(f,_)=>(s&&c.params.add(_),f[_])}),data:(o==null?void 0:o.data)??null,url:_e(e,()=>{s&&(c.url=!0)},f=>{s&&c.search_params.add(f)}),async fetch(f,_){let v;f instanceof Request?(v=f.url,_={body:f.method==="GET"||f.method==="HEAD"?void 0:await f.blob(),cache:f.cache,credentials:f.credentials,headers:f.headers,integrity:f.integrity,keepalive:f.keepalive,method:f.method,mode:f.mode,redirect:f.redirect,referrer:f.referrer,referrerPolicy:f.referrerPolicy,signal:f.signal,..._}):v=f;const S=new URL(v,e);return s&&d(S.href),S.origin===e.origin&&(v=S.href.slice(e.origin.length)),Q?Se(v,S.href,_):ke(v,_)},setHeaders:()=>{},depends:d,parent(){return s&&(c.parent=!0),n()},untrack(f){s=!1;try{return f()}finally{s=!0}}};i=await l.universal.load.call(null,m)??null}return{node:l,loader:t,server:o,universal:(h=l.universal)!=null&&h.load?{type:"data",data:i,uses:c}:null,data:i??(o==null?void 0:o.data)??null,slash:((g=l.universal)==null?void 0:g.trailingSlash)??(o==null?void 0:o.slash)}}function $t(t,n,e,r,a,o){if(St)return!0;if(!a)return!1;if(a.parent&&t||a.route&&n||a.url&&e)return!0;for(const i of a.search_params)if(r.has(i))return!0;for(const i of a.params)if(o[i]!==w.params[i])return!0;for(const i of a.dependencies)if(Jt.some(s=>s(new URL(i))))return!0;return!1}function Rt(t,n){return(t==null?void 0:t.type)==="data"?t:(t==null?void 0:t.type)==="skip"?n??null:null}function We(t,n){if(!t)return new Set(n.searchParams.keys());const e=new Set([...t.searchParams.keys(),...n.searchParams.keys()]);for(const r of e){const a=t.searchParams.getAll(r),o=n.searchParams.getAll(r);a.every(i=>o.includes(i))&&o.every(i=>a.includes(i))&&e.delete(r)}return e}async function ee({id:t,invalidating:n,url:e,params:r,route:a}){if((P==null?void 0:P.id)===t)return P.promise;const{errors:o,layouts:i,leaf:s}=a,c=[...i,s];o.forEach(p=>p==null?void 0:p().catch(()=>{})),c.forEach(p=>p==null?void 0:p[1]().catch(()=>{}));let l=null;const u=w.url?t!==w.url.pathname+w.url.search:!1,h=w.route?a.id!==w.route.id:!1,g=We(w.url,e);let d=!1;const m=c.map((p,y)=>{var T;const b=w.branch[y],k=!!(p!=null&&p[0])&&((b==null?void 0:b.loader)!==p[1]||$t(d,h,u,g,(T=b.server)==null?void 0:T.uses,r));return k&&(d=!0),k});if(m.some(Boolean)){try{l=await oe(e,m)}catch(p){return ct({status:W(p),error:await H(p,{url:e,params:r,route:{id:a.id}}),url:e,route:a})}if(l.type==="redirect")return l}const f=l==null?void 0:l.nodes;let _=!1;const v=c.map(async(p,y)=>{var lt;if(!p)return;const b=w.branch[y],k=f==null?void 0:f[y];if((!k||k.type==="skip")&&p[1]===(b==null?void 0:b.loader)&&!$t(_,h,u,g,(lt=b.universal)==null?void 0:lt.uses,r))return b;if(_=!0,(k==null?void 0:k.type)==="error")throw k;return At({loader:p[1],url:e,params:r,route:a,parent:async()=>{var Pt;const Lt={};for(let ft=0;ft<y;ft+=1)Object.assign(Lt,(Pt=await v[ft])==null?void 0:Pt.data);return Lt},server_data_node:Rt(k===void 0&&p[0]?{type:"skip"}:k??null,p[0]?b==null?void 0:b.server:void 0)})});for(const p of v)p.catch(()=>{});const S=[];for(let p=0;p<c.length;p+=1)if(c[p])try{S.push(await v[p])}catch(y){if(y instanceof Kt)return{type:"redirect",location:y.location};let b=W(y),k;if(f!=null&&f.includes(y))b=y.status??b,k=y.error;else if(y instanceof rt)k=y.body;else{if(await x.updated.check())return await C(e);k=await H(y,{params:r,url:e,route:{id:a.id}})}const T=await Xe(p,S,o);return T?await et({url:e,params:r,branch:S.slice(0,T.idx).concat(T.node),status:b,error:k,route:a}):await re(e,{id:a.id},k,b)}else S.push(void 0);return await et({url:e,params:r,branch:S,status:200,error:null,route:a,form:n?void 0:null})}async function Xe(t,n,e){for(;t--;)if(e[t]){let r=t;for(;!n[r];)r-=1;try{return{idx:r+1,node:{node:await e[t](),loader:e[t],data:{},server:null,universal:null}}}catch{continue}}}async function ct({status:t,error:n,url:e,route:r}){const a={};let o=null;if(V.server_loads[0]===0)try{const l=await oe(e,[!0]);if(l.type!=="data"||l.nodes[0]&&l.nodes[0].type!=="data")throw 0;o=l.nodes[0]??null}catch{(e.origin!==z||e.pathname!==location.pathname||Et)&&await C(e)}const s=await At({loader:gt,url:e,params:a,route:r,parent:()=>Promise.resolve({}),server_data_node:Rt(o)}),c={node:await X(),loader:X,universal:null,server:null,data:null};return await et({url:e,params:a,branch:[s,c],status:t,error:n,route:null})}function It(t,n){if(!t||at(t,I))return;let e;try{e=V.hooks.reroute({url:new URL(t)})??t.pathname}catch{return}const r=ne(e);for(const a of st){const o=a.exec(r);if(o)return{id:t.pathname+t.search,invalidating:n,route:a,params:ge(o),url:t}}}function ne(t){return pe(t.slice(I.length)||"/")}function ae({url:t,type:n,intent:e,delta:r}){let a=!1;const o=ie(w,e,t,n);r!==void 0&&(o.navigation.delta=r);const i={...o.navigation,cancel:()=>{a=!0,o.reject(new Error("navigation cancelled"))}};return B||Wt.forEach(s=>s(i)),a?null:o}async function K({type:t,url:n,popped:e,keepfocus:r,noscroll:a,replace_state:o,state:i={},redirect_count:s=0,nav_token:c={},accept:l=Nt,block:u=Nt}){const h=It(n,!1),g=ae({url:n,type:t,delta:e==null?void 0:e.delta,intent:h});if(!g){u();return}const d=E,m=R;l(),B=!0,Q&&x.navigating.set(g.navigation),tt=c;let f=h&&await ee(h);if(!f){if(at(n,I))return await C(n);f=await re(n,{id:null},await H(new bt(404,"Not Found",`Not found: ${n.pathname}`),{url:n,params:{},route:{id:null}}),404)}if(n=(h==null?void 0:h.url)||n,tt!==c)return g.reject(new Error("navigation aborted")),!1;if(f.type==="redirect")if(s>=20)f=await ct({status:500,error:await H(new Error("Redirect loop"),{url:n,params:{},route:{id:null}}),url:n,route:{id:null}});else return Qt(new URL(f.location,n).href,{},s+1,c),!1;else f.props.page.status>=400&&await x.updated.check()&&await C(n);if(Ye(),ot(d),Xt(m),f.props.page.url.pathname!==n.pathname&&(n.pathname=f.props.page.url.pathname),i=e?e.state:i,!e){const p=o?0:1,y={[U]:E+=p,[D]:R+=p,[yt]:i};(o?history.replaceState:history.pushState).call(history,y,"",n),o||Yt(E,R)}if(P=null,f.props.page.state=i,Q){w=f.state,f.props.page&&(f.props.page.url=n);const p=(await Promise.all(Ke.map(y=>y(g.navigation)))).filter(y=>typeof y=="function");if(p.length>0){let y=function(){$=$.filter(b=>!p.includes(b))};p.push(y),$.push(...p)}it.$set(f.props),kt=!0}else te(f,mt);const{activeElement:_}=document;await de();const v=e?e.scroll:a?vt():null;if(Ot){const p=n.hash&&document.getElementById(decodeURIComponent(n.hash.slice(1)));v?scrollTo(v.x,v.y):p?p.scrollIntoView():scrollTo(0,0)}const S=document.activeElement!==_&&document.activeElement!==document.body;!r&&!S&&nn(),Ot=!0,f.props.page&&(A=f.props.page),B=!1,t==="popstate"&&Zt(R),g.fulfil(void 0),$.forEach(p=>p(g.navigation)),x.navigating.set(null)}async function re(t,n,e,r){return t.origin===z&&t.pathname===location.pathname&&!Et?await ct({status:r,error:e,url:t,route:n}):await C(t)}function Ze(){let t;L.addEventListener("mousemove",o=>{const i=o.target;clearTimeout(t),t=setTimeout(()=>{r(i,2)},20)});function n(o){r(o.composedPath()[0],1)}L.addEventListener("mousedown",n),L.addEventListener("touchstart",n,{passive:!0});const e=new IntersectionObserver(o=>{for(const i of o)i.isIntersecting&&(ht(i.target.href),e.unobserve(i.target))},{threshold:0});function r(o,i){const s=Ht(o,L);if(!s)return;const{url:c,external:l,download:u}=pt(s,I);if(l||u)return;const h=J(s);if(!h.reload)if(i<=h.preload_data){const g=It(c,!1);g&&Je(g)}else i<=h.preload_code&&ht(c.pathname)}function a(){e.disconnect();for(const o of L.querySelectorAll("a")){const{url:i,external:s,download:c}=pt(o,I);if(s||c)continue;const l=J(o);l.reload||(l.preload_code===Y.viewport&&e.observe(o),l.preload_code===Y.eager&&ht(i.pathname))}}$.push(a),a()}function H(t,n){if(t instanceof rt)return t.body;const e=W(t),r=ze(t);return V.hooks.handleError({error:t,event:n,status:e,message:r})??{message:r}}function Qe(t,n={}){return t=wt(t),t.origin!==z?Promise.reject(new Error("goto: invalid URL")):Qt(t,n,0)}function sn(t,n){ot(E);const e={[U]:E+=1,[D]:R,[Mt]:A.url.href,[yt]:n};history.pushState(e,"",wt(t)),kt=!0,A={...A,state:n},it.$set({page:A}),Yt(E,R)}function tn(){var n;history.scrollRestoration="manual",addEventListener("beforeunload",e=>{let r=!1;if(jt(),!B){const a=ie(w,void 0,null,"leave"),o={...a.navigation,cancel:()=>{r=!0,a.reject(new Error("navigation cancelled"))}};Wt.forEach(i=>i(o))}r?(e.preventDefault(),e.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&jt()}),(n=navigator.connection)!=null&&n.saveData||Ze(),L.addEventListener("click",e=>{var g;if(e.button||e.which!==1||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.defaultPrevented)return;const r=Ht(e.composedPath()[0],L);if(!r)return;const{url:a,external:o,target:i,download:s}=pt(r,I);if(!a)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const c=J(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||s)return;if(o||c.reload){ae({url:a,type:"link"})?B=!0:e.preventDefault();return}const[u,h]=a.href.split("#");if(h!==void 0&&u===ut(location)){const[,d]=w.url.href.split("#");if(d===h){e.preventDefault(),h===""||h==="top"&&r.ownerDocument.getElementById("top")===null?window.scrollTo({top:0}):(g=r.ownerDocument.getElementById(h))==null||g.scrollIntoView();return}if(F=!0,ot(E),t(a),!c.replace_state)return;F=!1}e.preventDefault(),K({type:"link",url:a,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??a.href===location.href})}),L.addEventListener("submit",e=>{if(e.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(e.target),a=e.submitter;if(((a==null?void 0:a.formMethod)||r.method)!=="get")return;const i=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(at(i,I))return;const s=e.target,c=J(s);if(c.reload)return;e.preventDefault(),e.stopPropagation();const l=new FormData(s),u=a==null?void 0:a.getAttribute("name");u&&l.append(u,(a==null?void 0:a.getAttribute("value"))??""),i.search=new URLSearchParams(l).toString(),K({type:"form",url:i,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??i.href===location.href})}),addEventListener("popstate",async e=>{var r;if((r=e.state)!=null&&r[U]){const a=e.state[U];if(tt={},a===E)return;const o=N[a],i=e.state[yt]??{},s=new URL(e.state[Mt]??location.href),c=e.state[D],l=ut(location)===ut(w.url);if(c===R&&(kt||l)){t(s),N[E]=vt(),o&&scrollTo(o.x,o.y),i!==A.state&&(A={...A,state:i},it.$set({page:A})),E=a;return}const h=a-E;await K({type:"popstate",url:s,popped:{state:i,scroll:o,delta:h},accept:()=>{E=a,R=c},block:()=>{history.go(-h)},nav_token:tt})}else if(!F){const a=new URL(location.href);t(a)}}),addEventListener("hashchange",()=>{F&&(F=!1,history.replaceState({...history.state,[U]:++E,[D]:R},"",location.href))});for(const e of document.querySelectorAll("link"))e.rel==="icon"&&(e.href=e.href);addEventListener("pageshow",e=>{e.persisted&&x.navigating.set(null)});function t(e){w.url=e,x.page.set({...A,url:e}),x.page.notify()}}async function en(t,{status:n=200,error:e,node_ids:r,params:a,route:o,data:i,form:s}){Et=!0;const c=new URL(location.href);({params:a={},route:o={id:null}}=It(c,!1)||{});let l;try{const u=r.map(async(d,m)=>{const f=i[m];return f!=null&&f.uses&&(f.uses=se(f.uses)),At({loader:V.nodes[d],url:c,params:a,route:o,parent:async()=>{const _={};for(let v=0;v<m;v+=1)Object.assign(_,(await u[v]).data);return _},server_data_node:Rt(f)})}),h=await Promise.all(u),g=st.find(({id:d})=>d===o.id);if(g){const d=g.layouts;for(let m=0;m<d.length;m++)d[m]||h.splice(m,0,void 0)}l=await et({url:c,params:a,branch:h,status:n,error:e,form:s,route:g??null})}catch(u){if(u instanceof Kt){await C(new URL(u.location,location.href));return}l=await ct({status:W(u),error:await H(u,{url:c,params:a,route:o}),url:c,route:o})}l.props.page&&(l.props.page.state={}),te(l,t)}async function oe(t,n){var a;const e=new URL(t);e.pathname=ve(t.pathname),t.pathname.endsWith("/")&&e.searchParams.append(He,"1"),e.searchParams.append(Be,n.map(o=>o?"1":"0").join(""));const r=await Vt(e.href);if(!r.ok){let o;throw(a=r.headers.get("content-type"))!=null&&a.includes("application/json")?o=await r.json():r.status===404?o="Not Found":r.status===500&&(o="Internal Error"),new rt(r.status,o)}return new Promise(async o=>{var h;const i=new Map,s=r.body.getReader(),c=new TextDecoder;function l(g){return qe(g,{Promise:d=>new Promise((m,f)=>{i.set(d,{fulfil:m,reject:f})})})}let u="";for(;;){const{done:g,value:d}=await s.read();if(g&&!u)break;for(u+=!d&&u?`
`:c.decode(d,{stream:!0});;){const m=u.indexOf(`
`);if(m===-1)break;const f=JSON.parse(u.slice(0,m));if(u=u.slice(m+1),f.type==="redirect")return o(f);if(f.type==="data")(h=f.nodes)==null||h.forEach(_=>{(_==null?void 0:_.type)==="data"&&(_.uses=se(_.uses),_.data=l(_.data))}),o(f);else if(f.type==="chunk"){const{id:_,data:v,error:S}=f,p=i.get(_);i.delete(_),S?p.reject(l(S)):p.fulfil(l(v))}}}})}function se(t){return{dependencies:new Set((t==null?void 0:t.dependencies)??[]),params:new Set((t==null?void 0:t.params)??[]),parent:!!(t!=null&&t.parent),route:!!(t!=null&&t.route),url:!!(t!=null&&t.url),search_params:new Set((t==null?void 0:t.search_params)??[])}}function nn(){const t=document.querySelector("[autofocus]");if(t)t.focus();else{const n=document.body,e=n.getAttribute("tabindex");n.tabIndex=-1,n.focus({preventScroll:!0,focusVisible:!1}),e!==null?n.setAttribute("tabindex",e):n.removeAttribute("tabindex");const r=getSelection();if(r&&r.type!=="None"){const a=[];for(let o=0;o<r.rangeCount;o+=1)a.push(r.getRangeAt(o));setTimeout(()=>{if(r.rangeCount===a.length){for(let o=0;o<r.rangeCount;o+=1){const i=a[o],s=r.getRangeAt(o);if(i.commonAncestorContainer!==s.commonAncestorContainer||i.startContainer!==s.startContainer||i.endContainer!==s.endContainer||i.startOffset!==s.startOffset||i.endOffset!==s.endOffset)return}r.removeAllRanges()}})}}}function ie(t,n,e,r){var c,l;let a,o;const i=new Promise((u,h)=>{a=u,o=h});return i.catch(()=>{}),{navigation:{from:{params:t.params,route:{id:((c=t.route)==null?void 0:c.id)??null},url:t.url},to:e&&{params:(n==null?void 0:n.params)??null,route:{id:((l=n==null?void 0:n.route)==null?void 0:l.id)??null},url:e},willUnload:!n,type:r,complete:i},fulfil:a,reject:o}}export{on as a,I as b,rn as d,sn as p,x as s,nt as w};
