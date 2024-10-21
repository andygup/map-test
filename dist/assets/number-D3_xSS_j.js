import{ct as E,cu as S}from"./index-CC72Q5ax.js";const x={ar:[".",","],bg:[","," "],bs:[",","."],ca:[",","."],cs:[","," "],da:[",","."],de:[",","."],"de-ch":[".","’"],el:[",","."],en:[".",","],"en-au":[".",","],es:[",","."],"es-mx":[".",","],et:[","," "],fi:[","," "],fr:[","," "],"fr-ch":[","," "],he:[".",","],hi:[".",",","#,##,##0.###"],hr:[",","."],hu:[","," "],id:[",","."],it:[",","."],"it-ch":[".","’"],ja:[".",","],ko:[".",","],lt:[","," "],lv:[","," "],mk:[",","."],nb:[","," "],nl:[",","."],pl:[","," "],pt:[",","."],"pt-pt":[","," "],ro:[",","."],ru:[","," "],sk:[","," "],sl:[",","."],sr:[",","."],sv:[","," "],th:[".",","],tr:[",","."],uk:[","," "],vi:[",","."],zh:[".",","]};function w(e=E()){let n=(e=e.toLowerCase())in x;if(!n){const s=e.split("-");s.length>1&&s[0]in x&&(e=s[0],n=!0),n||(e="en")}const[t,r,l="#,##0.###"]=x[e];return{decimal:t,group:r,pattern:l}}function k(e,n){const t=w((n={...n}).locale);n.customs=t;const r=n.pattern||t.pattern;return isNaN(e)||Math.abs(e)===1/0?null:v(e,r,n)}const N=/[#0,]*[#0](?:\.0*#*)?/;function v(e,n,t){const r=(t=t||{}).customs.group,l=t.customs.decimal,s=n.split(";"),c=s[0];if((n=s[e<0?1:0]||"-"+c).includes("%"))e*=100;else if(n.includes("‰"))e*=1e3;else{if(n.includes("¤"))throw new Error("currency notation not supported");if(n.includes("E"))throw new Error("exponential notation not supported")}const d=N,u=c.match(d);if(!u)throw new Error("unable to find a number expression in pattern: "+n);return t.fractional===!1&&(t.places=0),n.replace(d,z(e,u[0],{decimal:l,group:r,places:t.places,round:t.round}))}function z(e,n,t){(t=t||{}).places===!0&&(t.places=0),t.places===1/0&&(t.places=6);const r=n.split("."),l=typeof t.places=="string"&&t.places.indexOf(",");let s=t.places;l?s=t.places.slice(l+1):+s>=0||(s=(r[1]||[]).length),t.round<0||(e=Number(e.toFixed(Number(s))));const c=String(Math.abs(e)).split("."),d=c[1]||"";if(r[1]||t.places){l&&(t.places=t.places.slice(0,Math.max(0,l)));const o=t.places!==void 0?t.places:r[1]&&r[1].lastIndexOf("0")+1;+o>d.length&&(c[1]=d.padEnd(Number(o),"0")),+s<d.length&&(c[1]=d.slice(0,Math.max(0,Number(s))))}else c[1]&&c.pop();const u=r[0].replace(",","");let f=u.indexOf("0");f!==-1&&(f=u.length-f,f>c[0].length&&(c[0]=c[0].padStart(f,"0")),u.includes("#")||(c[0]=c[0].slice(-f)));let p,i,a=r[0].lastIndexOf(",");if(a!==-1){p=r[0].length-a-1;const o=r[0].slice(0,a);a=o.lastIndexOf(","),a!==-1&&(i=o.length-a-1)}const g=[];for(let o=c[0];o;){const m=o.length-p;g.push(m>0?o.slice(Math.max(0,m)):o),o=m>0?o.slice(0,m):"",i&&(p=i,i=void 0)}return c[0]=g.reverse().join(t.group||","),c.join(t.decimal||".")}function y(e){const n=w((e=e||{}).locale),t=e.pattern||n.pattern,r=n.group,l=n.decimal;let s=1;if(t.includes("%"))s/=100;else if(t.includes("‰"))s/=1e3;else if(t.includes("¤"))throw new Error("currency notation not supported");const c=t.split(";");return c.length===1&&c.push("-"+c[0]),{regexp:h(c,u=>(u="(?:"+S(u,".")+")").replace(N,f=>{const p={signed:!1,separator:e.strict?r:[r,""],fractional:e.fractional,decimal:l,exponent:!1},i=f.split(".");let a=e.places;i.length===1&&s!==1&&(i[1]="###"),i.length===1||a===0?p.fractional=!1:(a===void 0&&(a=e.pattern?i[1].lastIndexOf("0")+1:1/0),a&&e.fractional==null&&(p.fractional=!0),!e.places&&+a<i[1].length&&(a+=","+i[1].length),p.places=a);const g=i[0].split(",");return g.length>1&&(p.groupSize=g.pop().length,g.length>1&&(p.groupSize2=g.pop().length)),"("+O(p)+")"}),!0).replaceAll(/[\xa0 ]/g,"[\\s\\xa0]"),group:r,decimal:l,factor:s}}function A(e,n){const t=y(n),r=new RegExp("^"+t.regexp+"$").exec(e);if(!r)return NaN;let l=r[1];if(!r[1]){if(!r[2])return NaN;l=r[2],t.factor*=-1}return l=l.replaceAll(new RegExp("["+t.group+"\\s\\xa0]","g"),"").replace(t.decimal,"."),Number(l)*t.factor}function O(e){"places"in(e=e||{})||(e.places=1/0),typeof e.decimal!="string"&&(e.decimal="."),"fractional"in e&&!String(e.places).startsWith("0")||(e.fractional=[!0,!1]),"exponent"in e||(e.exponent=[!0,!1]),"eSigned"in e||(e.eSigned=[!0,!1]);const n=b(e),t=h(e.fractional,l=>{let s="";return l&&e.places!==0&&(s="\\"+e.decimal,e.places===1/0?s="(?:"+s+"\\d+)?":s+="\\d{"+e.places+"}"),s},!0);let r=n+t;return t&&(r="(?:(?:"+r+")|(?:"+t+"))"),r+h(e.exponent,l=>l?"([eE]"+b({signed:e.eSigned})+")":"")}function b(e){return"signed"in(e=e||{})||(e.signed=[!0,!1]),"separator"in e?"groupSize"in e||(e.groupSize=3):e.separator="",h(e.signed,n=>n?"[-+]":"",!0)+h(e.separator,n=>{if(!n)return"(?:\\d+)";(n=S(n))===" "?n="\\s":n===" "&&(n="\\s\\xa0");const t=e.groupSize,r=e.groupSize2;if(r){const l="(?:0|[1-9]\\d{0,"+(r-1)+"}(?:["+n+"]\\d{"+r+"})*["+n+"]\\d{"+t+"})";return t-r>0?"(?:"+l+"|(?:0|[1-9]\\d{0,"+(t-1)+"}))":l}return"(?:0|[1-9]\\d{0,"+(t-1)+"}(?:["+n+"]\\d{"+t+"})*)"},!0)}const h=(e,n,t)=>{if(!Array.isArray(e))return n(e);const r=[];for(let l=0;l<e.length;l++)r.push(n(e[l]));return M(r.join("|"),!!t)},M=(e,n)=>"("+(n?"?:":"")+e+")";export{y as c,k as l,A as p,w as r};
