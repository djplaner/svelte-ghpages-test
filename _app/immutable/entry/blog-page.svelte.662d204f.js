import{S as H,i as L,s as S,k as _,q as x,a as y,l as m,m as d,r as q,h as c,c as A,b as u,D as g,H as p,J as C,n as b,u as D}from"../chunks/index.be37e931.js";import{b as v}from"../chunks/paths.38e379b3.js";function E(f,a,n){const s=f.slice();return s[1]=a[n].slug,s[2]=a[n].title,s}function k(f){let a,n,s=f[2]+"",r,o;return{c(){a=_("li"),n=_("a"),r=x(s),this.h()},l(t){a=m(t,"LI",{});var e=d(a);n=m(e,"A",{href:!0});var i=d(n);r=q(i,s),i.forEach(c),e.forEach(c),this.h()},h(){b(n,"href",o=v+"/blog/"+f[1])},m(t,e){u(t,a,e),g(a,n),g(n,r)},p(t,e){e&1&&s!==(s=t[2]+"")&&D(r,s),e&1&&o!==(o=v+"/blog/"+t[1])&&b(n,"href",o)},d(t){t&&c(a)}}}function I(f){let a,n,s,r,o=f[0].summaries,t=[];for(let e=0;e<o.length;e+=1)t[e]=k(E(f,o,e));return{c(){a=_("h1"),n=x("blog"),s=y(),r=_("ul");for(let e=0;e<t.length;e+=1)t[e].c()},l(e){a=m(e,"H1",{});var i=d(a);n=q(i,"blog"),i.forEach(c),s=A(e),r=m(e,"UL",{});var l=d(r);for(let h=0;h<t.length;h+=1)t[h].l(l);l.forEach(c)},m(e,i){u(e,a,i),g(a,n),u(e,s,i),u(e,r,i);for(let l=0;l<t.length;l+=1)t[l]&&t[l].m(r,null)},p(e,[i]){if(i&1){o=e[0].summaries;let l;for(l=0;l<o.length;l+=1){const h=E(e,o,l);t[l]?t[l].p(h,i):(t[l]=k(h),t[l].c(),t[l].m(r,null))}for(;l<t.length;l+=1)t[l].d(1);t.length=o.length}},i:p,o:p,d(e){e&&c(a),e&&c(s),e&&c(r),C(t,e)}}}function J(f,a,n){let{data:s}=a;return f.$$set=r=>{"data"in r&&n(0,s=r.data)},[s]}class j extends H{constructor(a){super(),L(this,a,J,I,S,{data:0})}}export{j as default};