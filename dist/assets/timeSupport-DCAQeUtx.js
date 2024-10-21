const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/geometryEngineJSON-DDjAODZ3.js","assets/index-C5AN6gIb.js","assets/index-NV7R-tPD.css","assets/json-Wa8cmqdu.js"])))=>i.map(i=>d[i]);
import{hB as W,lh as X,G as I,bT as Y,li as j,af as M,hC as U,bg as H,eC as Q,ep as d,d$ as ee,k_ as te,cs as ne,d0 as ie,X as h,a1 as x,a2 as re,bn as se,lj as ae,cu as le,eb as T,_ as Z,lk as oe,ll as ue,lm as ce,ln as fe,s as $,eh as me}from"./index-C5AN6gIb.js";import{I as pe,x as G,$ as he,H as ye,U as Re,a as b,h as ge,K as A}from"./featureConversionUtils-C3NW8rek.js";import{e as R}from"./OptimizedGeometry-vU5jWBvU.js";import{t as q}from"./json-Wa8cmqdu.js";const E=new R,Se=new R,v=new R,m={esriGeometryPoint:G,esriGeometryPolyline:he,esriGeometryPolygon:ye,esriGeometryMultipoint:Re};function Je(e,t,n,i=e.hasZ,r=e.hasM){if(t==null)return null;const s=e.hasZ&&i,a=e.hasM&&r;if(n){const l=b(v,t,e.hasZ,e.hasM,"esriGeometryPoint",n,i,r);return G(l,s,a)}return G(t,s,a)}function S(e,t,n,i,r,s,a=t,l=n){var y,p,g;const o=t&&a,u=n&&l,c=i!=null?"coords"in i?i:i.geometry:null;if(c==null)return null;if(r){let f=ge(Se,c,t,n,e,r,a,l);return s&&(f=b(v,f,o,u,e,s)),((y=m[e])==null?void 0:y.call(m,f,o,u))??null}if(s){const f=b(v,c,t,n,e,s,a,l);return((p=m[e])==null?void 0:p.call(m,f,o,u))??null}return pe(E,c,t,n,a,l),((g=m[e])==null?void 0:g.call(m,E,o,u))??null}function Ve(e){return e&&z in e?JSON.parse(JSON.stringify(e,de)):e}const z="_geVersion",de=(e,t)=>e!==z?t:void 0,_=[0,0];function C(e,t){if(!t)return null;if("x"in t){const n={x:0,y:0};return[n.x,n.y]=e(t.x,t.y,_),t.z!=null&&(n.z=t.z),t.m!=null&&(n.m=t.m),n}if("xmin"in t){const n={xmin:0,ymin:0,xmax:0,ymax:0};return[n.xmin,n.ymin]=e(t.xmin,t.ymin,_),[n.xmax,n.ymax]=e(t.xmax,t.ymax,_),t.hasZ&&(n.zmin=t.zmin,n.zmax=t.zmax,n.hasZ=!0),t.hasM&&(n.mmin=t.mmin,n.mmax=t.mmax,n.hasM=!0),n}return"rings"in t?{rings:F(t.rings,e),hasM:t.hasM,hasZ:t.hasZ}:"paths"in t?{paths:F(t.paths,e),hasM:t.hasM,hasZ:t.hasZ}:"points"in t?{points:B(t.points,e),hasM:t.hasM,hasZ:t.hasZ}:null}function F(e,t){const n=[];for(const i of e)n.push(B(i,t));return n}function B(e,t){const n=[];for(const i of e){const r=t(i[0],i[1],[0,0]);n.push(r),i.length>2&&r.push(i[2]),i.length>3&&r.push(i[3])}return n}async function P(e,t){if(!e||!t)return;const n=Array.isArray(e)?e.map(i=>i.geometry!=null?i.geometry.spatialReference:null).filter(H):[e];await Q(n.map(i=>({source:i,dest:t})))}const J=C.bind(null,W),V=C.bind(null,X);function D(e,t,n,i){if(!e||(n||(n=t,t=e.spatialReference),!d(t)||!d(n)||I(t,n)))return e;if(j(t,n)){const r=M(n)?J(e):V(e);return r.spatialReference=n,r}return U(q,[e],t,n,null,i)[0]}class xe{constructor(){this._jobs=[],this._timer=null,this._process=this._process.bind(this)}async push(t,n,i,r){if(!(t!=null&&t.length)||!n||!i||I(n,i))return t;const s={geometries:t,inSpatialReference:n,outSpatialReference:i,geographicTransformation:r,resolve:Y()};return this._jobs.push(s),this._timer??(this._timer=setTimeout(this._process,10)),s.resolve.promise}_process(){this._timer=null;const t=this._jobs.shift();if(!t)return;const{geometries:n,inSpatialReference:i,outSpatialReference:r,resolve:s,geographicTransformation:a}=t;j(i,r)?M(r)?s(n.map(J)):s(n.map(V)):s(U(q,n,i,r,a,null)),this._jobs.length>0&&(this._timer=setTimeout(this._process,10))}}const $e=new xe;function De(e,t,n,i){return $e.push(e,t,n,i)}const _e=new ee({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"}),O=Object.freeze({});async function ke(e,t,n){const{outFields:i,orderByFields:r,groupByFieldsForStatistics:s,outStatistics:a}=e;if(i)for(let l=0;l<i.length;l++)i[l]=i[l].trim();if(r)for(let l=0;l<r.length;l++)r[l]=r[l].trim();if(s)for(let l=0;l<s.length;l++)s[l]=s[l].trim();if(a)for(let l=0;l<a.length;l++)a[l].onStatisticField&&(a[l].onStatisticField=a[l].onStatisticField.trim());return e.geometry&&!e.outSR&&(e.outSR=e.geometry.spatialReference),we(e,t,n)}async function we(e,t,n){var s;if(!e)return null;let{where:i}=e;if(e.where=i=i==null?void 0:i.trim(),(!i||/^1 *= *1$/.test(i)||t&&t===i)&&(e.where=null),!e.geometry)return e;let r=await be(e);if(e.distance=0,e.units=null,e.spatialRel==="esriSpatialRelEnvelopeIntersects"){const{spatialReference:a}=e.geometry;r=te(r),r.spatialReference=a}if(r){await P(r.spatialReference,n),r=Ge(r,n);const a=(await ne(ie(r)))[0];if(a==null)throw O;const l="quantizationParameters"in e&&((s=e.quantizationParameters)==null?void 0:s.tolerance)||"maxAllowableOffset"in e&&e.maxAllowableOffset||0,o=l&&k(r,n)?{densificationStep:8*l}:void 0,u=a.toJSON(),c=D(u,u.spatialReference,n,o);if(!c)throw O;c.spatialReference=n,e.geometry=c}return e}function k(e,t){if(!e)return!1;const n=e.spatialReference;return(h(e)||x(e)||re(e))&&!I(n,t)&&!se(n,t)}function Ge(e,t){const n=e.spatialReference;return k(e,t)&&h(e)?{spatialReference:n,rings:[[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]]}:e}async function be(e){const{distance:t,units:n}=e,i=e.geometry;if(t==null||"vertexAttributes"in i)return i;const r=i.spatialReference,s=n?_e.fromJSON(n):ae(r),a=r&&(le(r)||M(r))?i:await P(r,T).then(()=>D(i,T));return(await ve())(a.spatialReference,a,t,s)}async function ve(){return(await Z(async()=>{const{geodesicBuffer:e}=await import("./geometryEngineJSON-DDjAODZ3.js").then(t=>t.g);return{geodesicBuffer:e}},__vite__mapDeps([0,1,2,3]))).geodesicBuffer}function Ie(e){return e==="mesh"?oe:ue(e)}function L(e,t){return e?t?4:3:t?3:2}function Me(e,t,n,i){return K(e,t,n,i.coords[0],i.coords[1])}function Pe(e,t,n,i,r,s){const a=L(r,s),{coords:l,lengths:o}=i;if(!o)return!1;for(let u=0,c=0;u<o.length;u++,c+=a)if(!K(e,t,n,l[c],l[c+1]))return!1;return!0}function K(e,t,n,i,r){if(!e)return!1;const s=L(t,n),{coords:a,lengths:l}=e;let o=!1,u=0;for(const c of l)o=Ne(o,a,s,u,c,i,r),u+=c*s;return o}function Ne(e,t,n,i,r,s,a){let l=e,o=i;for(let u=i,c=i+r*n;u<c;u+=n){o=u+n,o===c&&(o=i);const y=t[u],p=t[u+1],g=t[o],f=t[o+1];(p<a&&f>=a||f<a&&p>=a)&&y+(a-p)/(f-p)*(g-y)<s&&(l=!l)}return l}const w="unsupported-query",Te={esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"intersects",esriSpatialRelIndexIntersects:null,esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:null},N={spatialRelationship:{esriSpatialRelIntersects:!0,esriSpatialRelContains:!0,esriSpatialRelWithin:!0,esriSpatialRelCrosses:!0,esriSpatialRelDisjoint:!0,esriSpatialRelTouches:!0,esriSpatialRelOverlaps:!0,esriSpatialRelEnvelopeIntersects:!0,esriSpatialRelIndexIntersects:!1,esriSpatialRelRelation:!1},queryGeometry:{esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!0},layerGeometry:{esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!1}};function Ae(e){return e!=null&&N.spatialRelationship[e]===!0}function Ee(e){return e!=null&&N.queryGeometry[me(e)]===!0}function Fe(e){return e!=null&&N.layerGeometry[e]===!0}function Oe(){return Z(()=>import("./geometryEngineJSON-DDjAODZ3.js").then(e=>e.g),__vite__mapDeps([0,1,2,3]))}function Le(e,t,n,i,r){if(x(t)&&n==="esriGeometryPoint"&&(e==="esriSpatialRelIntersects"||e==="esriSpatialRelContains")){const s=A(new R,t,!1,!1);return Promise.resolve(a=>Me(s,!1,!1,a))}if(x(t)&&n==="esriGeometryMultipoint"){const s=A(new R,t,!1,!1);if(e==="esriSpatialRelContains")return Promise.resolve(a=>Pe(s,!1,!1,a,i,r))}if(h(t)&&n==="esriGeometryPoint"&&(e==="esriSpatialRelIntersects"||e==="esriSpatialRelContains"))return Promise.resolve(s=>ce(t,S(n,i,r,s)));if(h(t)&&n==="esriGeometryMultipoint"&&e==="esriSpatialRelContains")return Promise.resolve(s=>fe(t,S(n,i,r,s)));if(h(t)&&e==="esriSpatialRelIntersects"){const s=Ie(n);return Promise.resolve(a=>s(t,S(n,i,r,a)))}return Oe().then(s=>{const a=s[Te[e]].bind(null,t.spatialReference,t);return l=>a(S(n,i,r,l))})}async function Ke(e,t,n){var s;const{spatialRel:i,geometry:r}=e;if(r){if(!Ae(i))throw new $(w,"Unsupported query spatial relationship",{query:e});if(d(r.spatialReference)&&d(n)){if(!Ee(r))throw new $(w,"Unsupported query geometry type",{query:e});if(!Fe(t))throw new $(w,"Unsupported layer geometry type",{query:e});if(e.outSR)return P((s=e.geometry)==null?void 0:s.spatialReference,e.outSR)}}}function We(e){if(h(e))return!0;if(x(e)){for(const t of e.rings)if(t.length!==5||t[0][0]!==t[1][0]||t[0][0]!==t[4][0]||t[2][0]!==t[3][0]||t[0][1]!==t[3][1]||t[0][1]!==t[4][1]||t[1][1]!==t[2][1])return!1;return!0}return!1}async function Xe(e,t){if(!e)return null;const n=t.featureAdapter,{startTimeField:i,endTimeField:r}=e;let s=Number.POSITIVE_INFINITY,a=Number.NEGATIVE_INFINITY;if(i&&r)await t.forEach(l=>{const o=n.getAttribute(l,i),u=n.getAttribute(l,r);o==null||isNaN(o)||(s=Math.min(s,o)),u==null||isNaN(u)||(a=Math.max(a,u))});else{const l=i||r;await t.forEach(o=>{const u=n.getAttribute(o,l);u==null||isNaN(u)||(s=Math.min(s,u),a=Math.max(a,u))})}return{start:s,end:a}}function Ye(e,t,n){var o;if(!t||!e)return null;const{startTimeField:i,endTimeField:r}=e;if(!i&&!r)return null;const{start:s,end:a}=t;if(s===null&&a===null)return null;if(s===void 0&&a===void 0)return Ze();const l=((o=n.getAttributeAsTimestamp)==null?void 0:o.bind(n))??n.getAttribute.bind(n);return i&&r?je(l,i,r,s,a):Ue(l,i||r,s,a)}function je(e,t,n,i,r){return i!=null&&r!=null?s=>{const a=e(s,t),l=e(s,n);return(a==null||a<=r)&&(l==null||l>=i)}:i!=null?s=>{const a=e(s,n);return a==null||a>=i}:r!=null?s=>{const a=e(s,t);return a==null||a<=r}:void 0}function Ue(e,t,n,i){return n!=null&&i!=null&&n===i?r=>e(r,t)===n:n!=null&&i!=null?r=>{const s=e(r,t);return s!=null&&s>=n&&s<=i}:n!=null?r=>{const s=e(r,t);return s!=null&&s>=n}:i!=null?r=>{const s=e(r,t);return s!=null&&s<=i}:void 0}function Ze(){return()=>!1}export{We as I,Ke as P,ke as S,S as a,we as b,De as c,O as g,Ve as h,D as j,Xe as n,Ye as t,Le as v,P as x,Je as y};
