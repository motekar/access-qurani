import{c as r,i as f,u as l}from"./runtime.-KGhlEcp.js";import{u as m}from"./disclose-version.OqR9qxKF.js";function b(n){if(r===null)throw new Error("onMount can only be used during component initialisation.");r.r?m(()=>{const e=l(n);if(typeof e=="function")return e}):_(r).m.push(n)}function p(n,e,{bubbles:o=!1,cancelable:c=!1}={}){return new CustomEvent(n,{detail:e,bubbles:o,cancelable:c})}function h(){const n=r;if(n===null)throw new Error("createEventDispatcher can only be used during component initialisation.");return(e,o,c)=>{var s;const t=(s=n.s.$$events)==null?void 0:s[e];if(t){const a=f(t)?t.slice():[t],u=p(e,o,c);for(const i of a)i.call(n.x,u);return!u.defaultPrevented}return!0}}function _(n){return n.u??(n.u={a:[],b:[],m:[]})}export{h as c,b as o};
