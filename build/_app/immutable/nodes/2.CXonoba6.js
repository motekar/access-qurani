import{n as F,s as te,O as ze,t as M,P as tt,Q as Be,b as U,d as N,f as y,R as at,v as I,i as C,h as p,S as De,T as Te,a as q,p as Ze,g as K,U as P,k as Y,z as Qe,e as w,c as Q,V as ke,W as Fe,x as G,A as He,X as Pe,r as Ne,Y as nt,j as oe,Z as rt,_ as H}from"../chunks/scheduler.hUGlD-fh.js";import{S as ae,i as ne,t as B,g as Ue,a as W,c as xe,b as O,d as X,m as $,e as ee,f as st}from"../chunks/index.1RmtpcWw.js";import{p as it,w as ot,d as Je,b as _e}from"../chunks/entry.BkwVWPmy.js";import{p as Ge}from"../chunks/stores.CDnBO53s.js";const ut=typeof window<"u";let lt=ut?t=>requestAnimationFrame(t):F;function At(t){let e,a,n=t[4]()+"",r,u,s=t[3].svg+"",i;return{c(){e=ze("svg"),a=ze("title"),r=M(n),u=new tt(!0),this.h()},l(o){e=Be(o,"svg",{role:!0,class:!0,focusable:!0,width:!0,height:!0,viewBox:!0});var l=U(e);a=Be(l,"title",{});var S=U(a);r=N(S,n),S.forEach(y),u=at(l,!0),l.forEach(y),this.h()},h(){u.a=null,I(e,"role","img"),I(e,"class",i=t[5].class),I(e,"focusable",t[2]),I(e,"width",t[0]),I(e,"height",t[1]),I(e,"viewBox","0 0 "+t[3].box+" "+t[3].box)},m(o,l){C(o,e,l),p(e,a),p(a,r),u.m(s,e)},p(o,[l]){l&32&&i!==(i=o[5].class)&&I(e,"class",i),l&4&&I(e,"focusable",o[2]),l&1&&I(e,"width",o[0]),l&2&&I(e,"height",o[1])},i:F,o:F,d(o){o&&y(e)}}}function ft(t,e,a){let{name:n}=e,{width:r="1rem"}=e,{height:u="1rem"}=e,{focusable:s=void 0}=e,{title:i=void 0}=e,l={delete:{box:32,svg:'<path d="M 15 4 C 14.476563 4 13.941406 4.183594 13.5625 4.5625 C 13.183594 4.941406 13 5.476563 13 6 L 13 7 L 7 7 L 7 9 L 8 9 L 8 25 C 8 26.644531 9.355469 28 11 28 L 23 28 C 24.644531 28 26 26.644531 26 25 L 26 9 L 27 9 L 27 7 L 21 7 L 21 6 C 21 5.476563 20.816406 4.941406 20.4375 4.5625 C 20.058594 4.183594 19.523438 4 19 4 Z M 15 6 L 19 6 L 19 7 L 15 7 Z M 10 9 L 24 9 L 24 25 C 24 25.554688 23.554688 26 23 26 L 11 26 C 10.445313 26 10 25.554688 10 25 Z M 12 12 L 12 23 L 14 23 L 14 12 Z M 16 12 L 16 23 L 18 23 L 18 12 Z M 20 12 L 20 23 L 22 23 L 22 12 Z"></path>'},info:{box:24,svg:'<g stroke-width="0"></g><g stroke-linecap="round" stroke-linejoin="round"></g><g><path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm1,15a1,1,0,0,1-2,0V11a1,1,0,0,1,2,0ZM12,8a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,12,8Z"></path></g>'},leftArrow:{box:512,svg:'<g stroke-width="0"></g><g stroke-linecap="round" stroke-linejoin="round"></g><g> <g> <g> <path d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M384,277.333H179.499 l48.917,48.917c8.341,8.341,8.341,21.824,0,30.165c-4.16,4.16-9.621,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251 l-85.333-85.333c-1.963-1.963-3.52-4.309-4.608-6.933c-2.155-5.205-2.155-11.093,0-16.299c1.088-2.624,2.645-4.971,4.608-6.933 l85.333-85.333c8.341-8.341,21.824-8.341,30.165,0s8.341,21.824,0,30.165l-48.917,48.917H384c11.776,0,21.333,9.557,21.333,21.333 S395.776,277.333,384,277.333z"></path> </g> </g> </g>'}}[n];function S(){return i??`${n} icon`}return t.$$set=h=>{a(5,e=De(De({},e),Te(h))),"name"in h&&a(6,n=h.name),"width"in h&&a(0,r=h.width),"height"in h&&a(1,u=h.height),"focusable"in h&&a(2,s=h.focusable),"title"in h&&a(7,i=h.title)},e=Te(e),[r,u,s,l,S,e,n,i]}class Ve extends ae{constructor(e){super(),ne(this,e,ft,At,te,{name:6,width:0,height:1,focusable:2,title:7})}}function Re(t){let e,a,n,r,u;return a=new Ve({props:{name:"info",title:"Informasi dan panduan penggunaan",width:"2rem",height:"2rem","aria-hidden":t[1].state.showInfo}}),{c(){e=w("button"),O(a.$$.fragment),this.h()},l(s){e=Q(s,"BUTTON",{class:!0});var i=U(e);X(a.$$.fragment,i),i.forEach(y),this.h()},h(){I(e,"class","float svelte-1bljhol")},m(s,i){C(s,e,i),$(a,e,null),n=!0,r||(u=P(e,"click",t[3]),r=!0)},p(s,i){const o={};i&2&&(o["aria-hidden"]=s[1].state.showInfo),a.$set(o)},i(s){n||(B(a.$$.fragment,s),n=!0)},o(s){W(a.$$.fragment,s),n=!1},d(s){s&&y(e),ee(a),r=!1,u()}}}function qe(t){let e,a,n,r,u,s="Akses Qurani",i,o,l="Panduan Penggunaan",S,h,E="Tentang Aplikasi",_,L,b;return n=new Ve({props:{name:"leftArrow",title:"Kembali",width:"2rem",height:"2rem"}}),{c(){e=w("div"),a=w("button"),O(n.$$.fragment),r=q(),u=w("h1"),u.textContent=s,i=q(),o=w("h2"),o.textContent=l,S=q(),h=w("h2"),h.textContent=E,this.h()},l(m){e=Q(m,"DIV",{class:!0});var c=U(e);a=Q(c,"BUTTON",{class:!0});var D=U(a);X(n.$$.fragment,D),D.forEach(y),r=K(c),u=Q(c,"H1",{"data-svelte-h":!0}),ke(u)!=="svelte-xjc619"&&(u.textContent=s),i=K(c),o=Q(c,"H2",{"data-svelte-h":!0}),ke(o)!=="svelte-1egz4v5"&&(o.textContent=l),S=K(c),h=Q(c,"H2",{"data-svelte-h":!0}),ke(h)!=="svelte-167jip5"&&(h.textContent=E),c.forEach(y),this.h()},h(){I(a,"class","svelte-1bljhol"),I(e,"class","content svelte-1bljhol"),Fe(e,"show",t[1].state.showInfo)},m(m,c){C(m,e,c),p(e,a),$(n,a,null),t[4](a),p(e,r),p(e,u),p(e,i),p(e,o),p(e,S),p(e,h),_=!0,L||(b=P(a,"click",Ye),L=!0)},p(m,c){(!_||c&2)&&Fe(e,"show",m[1].state.showInfo)},i(m){_||(B(n.$$.fragment,m),_=!0)},o(m){W(n.$$.fragment,m),_=!1},d(m){m&&y(e),ee(n),t[4](null),L=!1,b()}}}function ct(t){let e,a,n,r,u,s=!t[1].state.showInfo&&Re(t),i=t[1].state.showInfo&&qe(t);return{c(){s&&s.c(),e=q(),i&&i.c(),a=Ze()},l(o){s&&s.l(o),e=K(o),i&&i.l(o),a=Ze()},m(o,l){s&&s.m(o,l),C(o,e,l),i&&i.m(o,l),C(o,a,l),n=!0,r||(u=P(window,"keydown",t[2]),r=!0)},p(o,[l]){o[1].state.showInfo?s&&(Ue(),W(s,1,1,()=>{s=null}),xe()):s?(s.p(o,l),l&2&&B(s,1)):(s=Re(o),s.c(),B(s,1),s.m(e.parentNode,e)),o[1].state.showInfo?i?(i.p(o,l),l&2&&B(i,1)):(i=qe(o),i.c(),B(i,1),i.m(a.parentNode,a)):i&&(Ue(),W(i,1,1,()=>{i=null}),xe())},i(o){n||(B(s),B(i),n=!0)},o(o){W(s),W(i),n=!1},d(o){o&&(y(e),y(a)),s&&s.d(o),i&&i.d(o),r=!1,u()}}}function Ye(){history.back()}function dt(t,e,a){let n;Y(t,Ge,o=>a(1,n=o));let r;function u(o){n.state.showInfo&&o.key=="Escape"&&Ye()}function s(){it("",{showInfo:!0})}function i(o){G[o?"unshift":"push"](()=>{r=o,a(0,r)})}return t.$$.update=()=>{t.$$.dirty&3&&n.state.showInfo&&Qe().then(()=>{r&&r.focus()})},[r,n,u,s,i]}class ht extends ae{constructor(e){super(),ne(this,e,dt,ct,te,{})}}const g={};g.suraPageStart=[1,2,50,77,106,128,151,177,187,208,221,235,249,255,262,267,282,293,305,312,322,332,342,350,359,367,377,385,396,404,411,415,418,428,434,440,446,453,458,467,477,483,489,496,499,502,507,511,515,518,520,523,526,528,531,534,537,542,545,549,551,553,554,556,558,560,562,564,566,568,570,572,574,575,577,578,580,582,583,585,586,587,587,589,590,591,591,592,593,594,595,595,596,596,597,597,598,598,599,599,600,600,601,601,601,602,602,602,603,603,603,604,604,604];g.pageSuraStart=[1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,12,12,12,13,13,13,13,13,13,13,14,14,14,14,14,14,15,15,15,15,15,15,16,16,16,16,16,16,16,16,16,16,16,16,16,16,17,17,17,17,17,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,25,25,25,25,25,25,25,26,26,26,26,26,26,26,26,26,26,27,27,27,27,27,27,27,27,27,28,28,28,28,28,28,28,28,28,28,28,29,29,29,29,29,29,29,29,30,30,30,30,30,30,31,31,31,31,32,32,32,33,33,33,33,33,33,33,33,33,33,34,34,34,34,34,34,34,35,35,35,35,35,35,36,36,36,36,36,37,37,37,37,37,37,37,38,38,38,38,38,38,39,39,39,39,39,39,39,39,39,40,40,40,40,40,40,40,40,40,41,41,41,41,41,41,42,42,42,42,42,42,42,43,43,43,43,43,43,44,44,44,45,45,45,45,46,46,46,46,47,47,47,47,48,48,48,48,48,49,49,50,50,50,51,51,51,52,52,53,53,53,54,54,54,55,55,55,56,56,56,57,57,57,57,58,58,58,58,59,59,59,60,60,60,61,62,62,63,64,64,65,65,66,66,67,67,67,68,68,69,69,70,70,71,72,72,73,73,74,74,75,76,76,77,78,78,79,80,81,82,83,83,85,86,87,89,89,91,92,95,97,98,100,103,106,109,112];g.pageAyaStart=[1,1,6,17,25,30,38,49,58,62,70,77,84,89,94,102,106,113,120,127,135,142,146,154,164,170,177,182,187,191,197,203,211,216,220,225,231,234,238,246,249,253,257,260,265,270,275,282,283,1,10,16,23,30,38,46,53,62,71,78,84,92,101,109,116,122,133,141,149,154,158,166,174,181,187,195,1,7,12,15,20,24,27,34,38,45,52,60,66,75,80,87,92,95,102,106,114,122,128,135,141,148,155,163,171,176,3,6,10,14,18,24,32,37,42,46,51,58,65,71,77,83,90,96,104,109,114,1,9,19,28,36,45,53,60,69,74,82,91,95,102,111,119,125,132,138,143,147,152,158,1,12,23,31,38,44,52,58,68,74,82,88,96,105,121,131,138,144,150,156,160,164,171,179,188,196,1,9,17,26,34,41,46,53,62,70,1,7,14,21,27,32,37,41,48,55,62,69,73,80,87,94,100,107,112,118,123,1,7,15,21,26,34,43,54,62,71,79,89,98,107,6,13,20,29,38,46,54,63,72,82,89,98,109,118,5,15,23,31,38,44,53,64,70,79,87,96,104,1,6,14,19,29,35,43,6,11,19,25,34,43,1,16,32,52,71,91,7,15,27,35,43,55,65,73,80,88,94,103,111,119,1,8,18,28,39,50,59,67,76,87,97,105,5,16,21,28,35,46,54,62,75,84,98,1,12,26,39,52,65,77,96,13,38,52,65,77,88,99,114,126,1,11,25,36,45,58,73,82,91,102,1,6,16,24,31,39,47,56,65,73,1,18,28,43,60,75,90,105,1,11,21,28,32,37,44,54,59,62,3,12,21,33,44,56,68,1,20,40,61,84,112,137,160,184,207,1,14,23,36,45,56,64,77,89,6,14,22,29,36,44,51,60,71,78,85,7,15,24,31,39,46,53,64,6,16,25,33,42,51,1,12,20,29,1,12,21,1,7,16,23,31,36,44,51,55,63,1,8,15,23,32,40,49,4,12,19,31,39,45,13,28,41,55,71,1,25,52,77,103,127,154,1,17,27,43,62,84,6,11,22,32,41,48,57,68,75,8,17,26,34,41,50,59,67,78,1,12,21,30,39,47,1,11,16,23,32,45,52,11,23,34,48,61,74,1,19,40,1,14,23,33,6,15,21,29,1,12,20,30,1,10,16,24,29,5,12,1,16,36,7,31,52,15,32,1,27,45,7,28,50,17,41,68,17,51,77,4,12,19,25,1,7,12,22,4,10,17,1,6,12,6,1,9,5,1,10,1,6,1,8,1,13,27,16,43,9,35,11,40,11,1,14,1,20,18,48,20,6,26,20,1,31,16,1,1,1,7,35,1,1,16,1,24,1,15,1,1,8,10,1,1,1,1];g.suraNumAyas=[7,286,200,176,120,165,206,75,129,109,123,111,43,52,99,128,111,110,98,135,112,78,118,64,77,227,93,88,69,60,34,30,73,54,45,83,182,88,75,85,54,53,89,59,37,35,38,29,18,45,60,49,62,55,78,96,29,22,24,13,14,11,11,18,12,12,30,52,52,44,28,28,20,56,40,31,50,40,46,42,29,19,36,25,22,17,19,26,30,20,15,21,11,8,8,19,5,8,8,11,11,8,3,9,5,4,7,3,6,3,5,4,5,6];g.juzSuraAya=[[1,1],[2,142],[2,253],[3,93],[4,24],[4,148],[5,82],[6,111],[7,88],[8,41],[9,93],[11,6],[12,53],[15,1],[17,1],[18,75],[21,1],[23,1],[25,21],[27,56],[29,46],[33,31],[36,28],[39,32],[41,47],[46,1],[51,31],[58,1],[67,1],[78,1]];g.suraNames=["Al-Fatihah","Al-Baqarah","Ali Imran","An-Nisa","Al-Ma'idah","Al-An'am","Al-A'raf","Al-Anfal","At-Taubah","Yunus","Hud","Yusuf","Ar-Ra'd","Ibrahim","Al-Hijr","An-Nahl","Al-Isra'","Al-Kahf","Maryam","Ta Ha","Al-Anbiya","Al-Hajj","Al-Mu'minun","An-Nur","Al-Furqan","Asy-Syu'ara'","An-Naml","Al-Qasas","Al-'Ankabut","Ar-Rum","Luqman","As-Sajdah","Al-Ahzab","Saba'","Fatir","Yasin","As-Saffat","Sad","Az-Zumar","Ghafir","Fussilat","Asy-Syura","Az-Zukhruf","Ad-Dukhan","Al-Jasiyah","Al-Ahqaf","Muhammad","Al-Fath","Al-Hujurat","Qaf","Az-Zariyat","At-Tur","An-Najm","Al-Qamar","Ar-Rahman","Al-Waqi'ah","Al-Hadid","Al-Mujadalah","Al-Hasyr","Al-Mumtahanah","As-Saff","Al-Jumu'ah","Al-Munafiqun","At-Taghabun","At-Talaq","At-Tahrim","Al-Mulk","Al-Qalam","Al-Haqqah","Al-Ma'arij","Nuh","Al-Jinn","Al-Muzzammil","Al-Muddassir","Al-Qiyamah","Al-Insan","Al-Mursalat","An-Naba'","An-Nazi'at","'Abasa","At-Takwir","Al-Infitar","Al-Mutaffifin","Al-Insyiqaq","Al-Buruj","At-Thariq","Al-A'la","Al-Ghasyiyah","Al-Fajr","Al-Balad","Asy-Syams","Al-Lail","Ad-Dhuha","Al-Insyirah","At-Tin","Al-'Alaq","Al-Qadr","Al-Bayyinah","Az-Zalzalah","Al-'Adiyat","Al-Qari'ah","At-Takasur","Al-'Asr","Al-Humazah","Al-Fil","Quraisy","Al-Ma'un","Al-Kausar","Al-Kafirun","An-Nasr","Al-Lahab","Al-Ikhlas","Al-Falaq","An-Nas"];function mt(t){const[e,a]=g.ayaIndex[t];return pt(e+1,a+1)}function gt(t){if(t>g.ayaIndex.length-1)return 0;let e=-1;return g.juzAyaIndex.forEach((a,n)=>{t>=a&&(e=n)}),e>=0?e+1:0}function pt(t,e){if(e===0&&(e=1),t<1||t>114||e<1||e>286)return-1;let a=g.suraPageStart[t-1]-1;for(;a<604;){const n=g.pageSuraStart[a];if(n>t||n===t&&g.pageAyaStart[a]>e)break;a++}return a}function yt(t){return{name:g.suraNames[t-1],ayaIndex:he(t)}}function Le(t){return g.ayaIndex.findIndex(e=>e[0]==g.pageSuraStart[t-1]-1&&e[1]==g.pageAyaStart[t-1]-1)}function he(t){return g.ayaIndex.findIndex(e=>e[0]==t-1&&e[1]==0)}function Oe(t,e){return g.ayaIndex.findIndex(a=>a[0]==t-1&&a[1]==e-1)}function Ke(t){const[e,a]=g.juzSuraAya[t-1];return Oe(e,a)}g.ayaIndex=[];g.juzAyaIndex=[];g.suraStarts=[];(function(){for(let t=0;t<g.suraNumAyas.length;t++){const e=g.suraNumAyas[t];g.suraStarts.push(g.ayaIndex.length);for(let a=0;a<e;a++)g.ayaIndex.push([t,a])}g.juzSuraAya.forEach((t,e)=>{g.juzAyaIndex[e]=Oe(t[0],t[1])})})();function me(t){const[e,a]=g.ayaIndex[t],n=(e+1).toString().padStart(3,"0"),r=(a+1).toString().padStart(3,"0");return`https://tanzil.net/res/audio/afasy/${`${n}${r}.mp3`}`}const St="data:audio/wav;base64,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qJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=";let Ee=!1;async function It(){try{Ee=await navigator.wakeLock.request("screen")}catch{return!1}}async function bt(){if(Ee===!1)return!1;try{return await Ee.release()}catch{return!1}}function We(t){const e=Math.floor(t),a=e%60,n=Math.round((t-a)*60),r=Math.floor(e/60),u=String(r).padStart(2,"0"),s=String(a).padStart(2,"0"),i=String(n).padStart(2,"0");return`${u}:${s}:${i}`}function kt(t,e){const a=localStorage.getItem(t),n=a?JSON.parse(a):e,r=ot(n,()=>r.subscribe(s=>{localStorage.setItem(t,JSON.stringify(s))}));return r}const z=kt("index",0),Me=Je(z,t=>{const[e,a]=g.ayaIndex[t];return{juz:gt(t),page:mt(t),sura:e+1,suraName:yt(e+1).name,aya:a+1,url:me(t)}});function vt(t){let e,a,n,r=`<div class="circle svelte-1knerme"><img src="${_e}/img/access-quran.png" width="100" height="100" alt="Logo Akses Qurani"/></div> <div class="sensor top svelte-1knerme"></div> <div class="sensor right svelte-1knerme"></div> <div class="sensor bottom svelte-1knerme"></div> <div class="sensor left svelte-1knerme"></div>`,u,s;return{c(){e=w("button"),a=w("div"),n=w("div"),n.innerHTML=r,this.h()},l(i){e=Q(i,"BUTTON",{class:!0});var o=U(e);a=Q(o,"DIV",{class:!0});var l=U(a);n=Q(l,"DIV",{class:!0,"data-svelte-h":!0}),ke(n)!=="svelte-1h6uyqn"&&(n.innerHTML=r),l.forEach(y),o.forEach(y),this.h()},h(){I(n,"class","scroller svelte-1knerme"),I(a,"class","wrap idle svelte-1knerme"),I(e,"class","svelte-1knerme")},m(i,o){C(i,e,o),p(e,a),p(a,n),t[8](n),t[9](a),u||(s=[P(window,"keydown",t[4]),P(window,"keyup",t[5]),P(e,"touchend",t[3],{passive:!0}),P(e,"click",t[2])],u=!0)},p:F,i:F,o:F,d(i){i&&y(e),t[8](null),t[9](null),u=!1,He(s)}}}function wt(t,e,a){let n,r,u=[],s;function i(f){n.classList.add(f)}function o(f){n.classList.remove(f)}const l=Pe();function S(){a(0,n.style.overflow="hidden",n),a(0,n.scrollLeft=(r.offsetWidth-n.offsetWidth)/2,n),a(0,n.scrollTop=(r.offsetHeight-n.offsetHeight)/2,n),setTimeout(()=>{a(0,n.style.overflow="scroll",n)},100)}function h(){a(1,r.style.transform="initial",r),a(1,r.style.top="initial",r),a(1,r.style.left="initial",r);const f=new IntersectionObserver(E,{root:n,threshold:.3});n.querySelectorAll(".sensor").forEach(T=>f.observe(T))}function E(f){const T=[];f.forEach(j=>{j.isIntersecting&&T.push(j.target.classList[1])}),T.length&&(u.push(T.join(",")),s.play())}function _(){l("click")}function L(){S(),l("touchend",u),u=[]}function b(f){const j={ArrowUp:"bottom",ArrowRight:"left",ArrowDown:"top",ArrowLeft:"right"}[f.code];j&&(f.preventDefault(),u.push(j),s.play())}function m(){l("touchend",u),u=[]}Ne(()=>{S(),h(),s=new Audio(St)});function c(f){G[f?"unshift":"push"](()=>{r=f,a(1,r)})}function D(f){G[f?"unshift":"push"](()=>{n=f,a(0,n)})}return[n,r,_,L,b,m,i,o,c,D]}class Qt extends ae{constructor(e){super(),ne(this,e,wt,vt,te,{addClass:6,removeClass:7})}get addClass(){return this.$$.ctx[6]}get removeClass(){return this.$$.ctx[7]}}function _t(t){let e;return{c(){e=w("div"),this.h()},l(a){e=Q(a,"DIV",{"aria-live":!0,class:!0}),U(e).forEach(y),this.h()},h(){I(e,"aria-live","assertive"),I(e,"class","svelte-ymxihk")},m(a,n){C(a,e,n),t[2](e)},p:F,i:F,o:F,d(a){a&&y(e),t[2](null)}}}function Lt(t,e,a){let n;function r(s){a(0,n.textContent=s,n)}function u(s){G[s?"unshift":"push"](()=>{n=s,a(0,n)})}return[n,r,u]}class Et extends ae{constructor(e){super(),ne(this,e,Lt,_t,te,{notify:1})}get notify(){return this.$$.ctx[1]}}function Mt(t){let e,a=!1,n,r,u;function s(){cancelAnimationFrame(n),e.paused||(n=lt(s),a=!0),t[9].call(e)}return{c(){e=w("audio"),this.h()},l(i){e=Q(i,"AUDIO",{preload:!0}),U(e).forEach(y),this.h()},h(){I(e,"preload","auto")},m(i,o){C(i,e,o),t[8](e),r||(u=[P(e,"ended",t[2]),P(e,"timeupdate",s)],r=!0)},p(i,[o]){!a&&o&1&&!isNaN(i[0])&&(e.currentTime=i[0]),a=!1},i:F,o:F,d(i){i&&y(e),t[8](null),r=!1,He(u)}}}function Nt(t,e,a){let n,r;Y(t,Me,f=>a(13,n=f)),Y(t,z,f=>a(14,r=f));let{currentTime:u=0}=e;const s=Pe();let i,o,l,S;function h(f){a(1,i.src=f,i),i.load(),Qe().then(b)}function E(){return{url:i.src,time:u}}function _(){i.play(),Qe().then(b)}function L(){i.pause()}function b(){if(r<g.ayaIndex.length-1){const f=me(r+1);o.src!=f&&(o.src=f,o.load())}if(n.page<604){const f=me(Le(n.page+1));l.src!=f&&(l.src=f,l.load())}if(n.sura<114){const f=me(he(n.sura+1));S.src!=f&&(S.src=f,S.load())}}function m(){s("ended")}Ne(()=>{o=new Audio,o.preload="auto",l=new Audio,l.preload="auto",S=new Audio,S.preload="auto"});function c(f){G[f?"unshift":"push"](()=>{i=f,a(1,i)})}function D(){u=this.currentTime,a(0,u)}return t.$$set=f=>{"currentTime"in f&&a(0,u=f.currentTime)},[u,i,m,h,E,_,L,b,c,D]}class Ct extends ae{constructor(e){super(),ne(this,e,Nt,Mt,te,{currentTime:0,load:3,current:4,play:5,pause:6,preload:7})}get load(){return this.$$.ctx[3]}get current(){return this.$$.ctx[4]}get play(){return this.$$.ctx[5]}get pause(){return this.$$.ctx[6]}get preload(){return this.$$.ctx[7]}}function jt(t){let e,a,n,r,u,s,i,o=t[2].sura+"",l,S,h=t[2].suraName+"",E,_,L,b,m=t[2].aya+"",c,D,f,T,j=t[2].page+"",re,ue,le,Ae,d=t[2].juz+"",fe,ce,se,x,ge,pe,V,de=We(t[4])+"",ye,Se,R,ve,Ie,J,Z,we,Ce;document.title=e=t[5],n=new ht({});let Xe={};x=new Qt({props:Xe}),t[14](x),x.$on("touchend",t[9]),x.$on("click",t[8].togglePlayer);function $e(A){t[16](A)}let je={};t[4]!==void 0&&(je.currentTime=t[4]),R=new Ct({props:je}),t[15](R),G.push(()=>st(R,"currentTime",$e)),R.$on("ended",t[8].nextAya);let et={};return J=new Et({props:et}),t[17](J),{c(){a=q(),O(n.$$.fragment),r=q(),u=w("div"),s=w("div"),i=M("Surah "),l=M(o),S=q(),E=M(h),_=M("."),L=w("br"),b=M(`
		Ayat `),c=M(m),D=M("."),f=w("br"),T=M(`
		Halaman `),re=M(j),ue=M("."),le=w("br"),Ae=M(`
		Juz `),fe=M(d),ce=M("."),se=q(),O(x.$$.fragment),pe=q(),V=w("div"),ye=M(de),Se=q(),O(R.$$.fragment),Ie=q(),O(J.$$.fragment),this.h()},l(A){nt("svelte-1q317r5",document.head).forEach(y),a=K(A),X(n.$$.fragment,A),r=K(A),u=Q(A,"DIV",{"aria-hidden":!0});var ie=U(u);s=Q(ie,"DIV",{class:!0,"aria-hidden":!0});var v=U(s);i=N(v,"Surah "),l=N(v,o),S=K(v),E=N(v,h),_=N(v,"."),L=Q(v,"BR",{}),b=N(v,`
		Ayat `),c=N(v,m),D=N(v,"."),f=Q(v,"BR",{}),T=N(v,`
		Halaman `),re=N(v,j),ue=N(v,"."),le=Q(v,"BR",{}),Ae=N(v,`
		Juz `),fe=N(v,d),ce=N(v,"."),v.forEach(y),se=K(ie),X(x.$$.fragment,ie),ie.forEach(y),pe=K(A),V=Q(A,"DIV",{class:!0,"aria-hidden":!0});var be=U(V);ye=N(be,de),be.forEach(y),Se=K(A),X(R.$$.fragment,A),Ie=K(A),X(J.$$.fragment,A),this.h()},h(){I(s,"class","status svelte-184kj0o"),I(s,"aria-hidden","true"),I(u,"aria-hidden",ge=t[6].state.showInfo),I(V,"class","time svelte-184kj0o"),I(V,"aria-hidden","true")},m(A,k){C(A,a,k),$(n,A,k),C(A,r,k),C(A,u,k),p(u,s),p(s,i),p(s,l),p(s,S),p(s,E),p(s,_),p(s,L),p(s,b),p(s,c),p(s,D),p(s,f),p(s,T),p(s,re),p(s,ue),p(s,le),p(s,Ae),p(s,fe),p(s,ce),p(u,se),$(x,u,null),C(A,pe,k),C(A,V,k),p(V,ye),C(A,Se,k),$(R,A,k),C(A,Ie,k),$(J,A,k),Z=!0,we||(Ce=P(window,"keyup",t[10]),we=!0)},p(A,[k]){(!Z||k&32)&&e!==(e=A[5])&&(document.title=e),(!Z||k&4)&&o!==(o=A[2].sura+"")&&oe(l,o),(!Z||k&4)&&h!==(h=A[2].suraName+"")&&oe(E,h),(!Z||k&4)&&m!==(m=A[2].aya+"")&&oe(c,m),(!Z||k&4)&&j!==(j=A[2].page+"")&&oe(re,j),(!Z||k&4)&&d!==(d=A[2].juz+"")&&oe(fe,d);const ie={};x.$set(ie),(!Z||k&64&&ge!==(ge=A[6].state.showInfo))&&I(u,"aria-hidden",ge),(!Z||k&16)&&de!==(de=We(A[4])+"")&&oe(ye,de);const v={};!ve&&k&16&&(ve=!0,v.currentTime=A[4],rt(()=>ve=!1)),R.$set(v);const be={};J.$set(be)},i(A){Z||(B(n.$$.fragment,A),B(x.$$.fragment,A),B(R.$$.fragment,A),B(J.$$.fragment,A),Z=!0)},o(A){W(n.$$.fragment,A),W(x.$$.fragment,A),W(R.$$.fragment,A),W(J.$$.fragment,A),Z=!1},d(A){A&&(y(a),y(r),y(u),y(pe),y(V),y(Se),y(Ie)),ee(n,A),t[14](null),ee(x),t[15](null),ee(R,A),t[17](null),ee(J,A),we=!1,Ce()}}}function zt(t,e,a){let n,r,u,s;Y(t,z,d=>a(19,n=d)),Y(t,Me,d=>a(2,r=d)),Y(t,Ge,d=>a(6,s=d));let i,o,l,S,h,E;const _=Je(Me,d=>`Surah ${d.sura} ${d.suraName} Ayat ${d.aya} - Akses Qurani`);Y(t,_,d=>a(5,u=d));let L=1,b=!1;function m(d){b||o.notify(d)}const c={togglePlayer(){a(13,b=!b),b?It():(bt(),m(`Surah ${r.sura} ${r.suraName}, ayat ${r.aya}, Halaman ${r.page}, juz ${r.juz}`))},nextAya(){if(n>=g.ayaIndex.length-1){b&&a(13,b=!1);return}H(z,n++,n),m(`Ayat ${r.aya}, surah ${r.sura} ${r.suraName}`)},prevAya(){n>0&&H(z,n--,n),m(`Ayat ${r.aya}, surah ${r.sura} ${r.suraName}`)},nextPage(){r.page>=604||(H(z,n=Le(r.page+1),n),m(`Halaman ${r.page} Surah ${r.sura} ${r.suraName} ayat ${r.aya}`))},prevPage(){r.page<=1||(H(z,n=Le(r.page-1),n),m(`Halaman ${r.page} Surah ${r.sura} ${r.suraName} ayat ${r.aya}`))},nextSura(){r.sura>=114||(H(z,n=he(r.sura+1),n),m(`Surah ${r.sura} ${r.suraName}`))},prevSura(){r.sura<=1||(H(z,n=he(r.sura-1),n),m(`Surah ${r.sura} ${r.suraName}`))},nextJuz(){r.juz>=30||(H(z,n=Ke(r.juz+1),n),m(`Juz ${r.juz} Surah ${r.sura} ${r.suraName} ayat ${r.aya}`))},prevJuz(){r.juz<=1||(H(z,n=Ke(r.juz-1),n),m(`Juz ${r.juz} Surah ${r.sura} ${r.suraName} ayat ${r.aya}`))},firstSura(){H(z,n=0,n),m("Surah "+r.sura)},lastSura(){H(z,n=he(114),n),m("Surah "+r.sura)}},D={left:c.nextPage,right:c.prevPage,top:c.prevAya,bottom:c.nextAya,"left,top":c.nextSura,"top,left":c.nextSura,"right,top":c.prevSura,"top,right":c.prevSura,"left,bottom":c.nextJuz,"bottom,left":c.nextJuz,"right,bottom":c.prevJuz,"bottom,right":c.prevJuz,"left,top,bottom":c.firstSura,"left,bottom,top":c.firstSura,"right,top,bottom":c.lastSura,"right,bottom,top":c.lastSura};function f(d){const ce=d.detail.join(","),se=D[ce];se&&se()}function T(d){d.code=="Space"&&c.togglePlayer()}function j(d){d?(E.currentTime=0,E.play()):(a(11,h.currentTime=0,h),h.play())}Ne(()=>{l.load(me(n)),a(11,h=new Audio(_e+"audio/pageflip.mp3")),E=new Audio(_e+"audio/pageflip-multi.mp3")});function re(d){G[d?"unshift":"push"](()=>{i=d,a(0,i)})}function ue(d){G[d?"unshift":"push"](()=>{l=d,a(1,l)})}function le(d){S=d,a(4,S)}function Ae(d){G[d?"unshift":"push"](()=>{o=d,a(3,o)})}return t.$$.update=()=>{t.$$.dirty&6148&&r.page!=L&&(h&&j(Math.abs(r.page-L)>1),a(12,L=r.page)),t.$$.dirty&8199&&(b?(l.current().url!=r.url&&l.load(r.url),l.play(),i.removeClass("idle")):(l&&l.pause(),i&&i.addClass("idle")))},[i,l,r,o,S,u,s,_,c,f,T,h,L,b,re,ue,le,Ae]}class Bt extends ae{constructor(e){super(),ne(this,e,zt,jt,te,{})}}function Dt(t){let e,a;return e=new Bt({}),{c(){O(e.$$.fragment)},l(n){X(e.$$.fragment,n)},m(n,r){$(e,n,r),a=!0},p:F,i(n){a||(B(e.$$.fragment,n),a=!0)},o(n){W(e.$$.fragment,n),a=!1},d(n){ee(e,n)}}}class xt extends ae{constructor(e){super(),ne(this,e,null,Dt,te,{})}}export{xt as component};