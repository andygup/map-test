import{z as h}from"./index-C5AN6gIb.js";const u="arial-unicode-ms",a="woff2",c=new Map,f=new Set;class w{constructor(e,r){this.fontFace=e,this.promise=r}}async function b(t){const e=y(t),r=g(t),s=c.get(e);if(s)return s.promise;const n=new FontFace(t.family,`url('${h.fontsUrl}/woff2/${r}.${a}') format('${a}')`,{style:t.style,weight:t.weight}),o=document.fonts;if(o.has(n)&&n.status==="loading")return n.loaded;const i=n.load().then(()=>(o.add(n),n));return c.set(e,new w(n,i)),f.add(n),i}function $(t){return f.has(t)}function m(t){if(!t)return u;const e=t.toLowerCase().split(" ").join("-");switch(e){case"serif":return"noto-serif";case"sans-serif":return"arial-unicode-ms";case"monospace":return"ubuntu-mono";case"fantasy":return"cabin-sketch";case"cursive":return"redressed";default:return e}}function g(t){const e=l(t)+d(t);return m(t.family)+(e.length>0?e:"-regular")}function y(t){const e=l(t)+d(t);return(t.family||u)+(e.length>0?e:"-regular")}function l(t){if(!t.weight)return"";switch(t.weight.toLowerCase()){case"bold":case"bolder":return"-bold"}return""}function d(t){if(!t.style)return"";switch(t.style.toLowerCase()){case"italic":case"oblique":return"-italic"}return""}export{b as c,g as f,$ as i,u as t,m as u};
