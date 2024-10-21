import{bi as G,bj as K,d as m,bk as B,bl as L,q as I,B as u,bm as d,L as z,s as y,t as k}from"./index-CC72Q5ax.js";import{i as N}from"./originUtils-D69mHv66.js";import{$ as q,w as x,I as O,j as V,y as C,P as H,l as g,d as Q,v as R,c as T}from"./utils-bcALCH5R.js";import{a as W,b as X,i as Z}from"./fetchService-_JabwDuS.js";import"./multiOriginJSONSupportUtils-C0wm8_Yw.js";import"./saveAPIKeyUtils-B655upw9.js";import"./saveUtils-C1ZIQ2Ip.js";const w="Feature Service",v="feature-layer-utils",aa=`${v}-save`,ea=`${v}-save-as`,p=`${v}-saveall`,f=`${v}-saveall-as`;function $(a){return{isValid:z(a)&&(!("dynamicDataSource"in a)||!a.dynamicDataSource),errorMessage:"Feature layer should be a layer or table in a map or feature service"}}function M(a){const e=[],t=[];for(const{layer:r,layerJSON:o}of a)r.isTable?t.push(o):e.push(o);return{layers:e,tables:t}}function D(a){return M([a])}async function J(a,e){return/\/\d+\/?$/.test(a.url)?D(e[0]):F(e,a)}async function F(a,e){if(a.reverse(),!e)return M(a);const t=await ta(e,a);for(const r of a)U(r.layer,r.layerJSON,t);return sa(t,a),t}async function ta(a,e){let t=await a.fetchData("json");if(ra(t))return t;t||(t={}),na(t);const{layer:{url:r,customParameters:o,apiKey:s}}=e[0];return await oa(t,{url:r??"",customParameters:o,apiKey:s},e.map(n=>n.layer.layerId)),t}function ra(a){return!!(a&&Array.isArray(a.layers)&&Array.isArray(a.tables))}function na(a){a.layers||(a.layers=[]),a.tables||(a.tables=[])}function sa(a,e){const t=[],r=[];for(const{layer:o}of e){const{isTable:s,layerId:n}=o;s?r.push(n):t.push(n)}A(a.layers,t),A(a.tables,r)}function A(a,e){if(a.length<2)return;const t=[];for(const{id:r}of a)t.push(r);G(t.sort(P),e.slice().sort(P))&&a.sort((r,o)=>{const s=e.indexOf(r.id),n=e.indexOf(o.id);return s<n?-1:s>n?1:0})}function P(a,e){return a<e?-1:a>e?1:0}async function oa(a,e,t){const{url:r,customParameters:o,apiKey:s}=e,{serviceJSON:n,layersJSON:i}=await W(r,{customParameters:o,apiKey:s}),l=S(a.layers,n.layers,t),c=S(a.tables,n.tables,t);a.layers=l.itemResources,a.tables=c.itemResources;const h=[...l.added,...c.added],j=i?[...i.layers,...i.tables]:[];await ia(a,h,r,j)}function S(a,e,t){const r=K(a,e,(s,n)=>s.id===n.id);a=a.filter(s=>!r.removed.some(n=>n.id===s.id));const o=r.added;return o.forEach(({id:s})=>{a.push({id:s})}),{itemResources:a,added:o.filter(({id:s})=>!t.includes(s))}}async function ia(a,e,t,r){const o=await la(e),s=e.map(({id:n,type:i})=>new(o.get(i))({url:t,layerId:n,sourceJSON:r.find(({id:l})=>l===n)}));await Promise.allSettled(s.map(n=>n.load())),s.forEach(n=>{const{layerId:i,loaded:l,defaultPopupTemplate:c}=n;if(!l||c==null)return;const h={id:i,popupInfo:c.toJSON()};n.operationalLayerType!=="ArcGISFeatureLayer"&&(h.layerType=n.operationalLayerType),U(n,h,a)})}async function la(a){const e=[];a.forEach(({type:o})=>{const s=Z(o),n=X[s];e.push(n())});const t=await Promise.all(e),r=new Map;return a.forEach(({type:o},s)=>{r.set(o,t[s])}),r}function U(a,e,t){a.isTable?E(t.tables,e):E(t.layers,e)}function E(a,e){const t=a.findIndex(({id:r})=>r===e.id);t===-1?a.push(e):a[t]=e}function Y(a,e){if(!a.length)throw new y(`${e}:missing-parameters`,"'layers' array should contain at least one feature layer")}function ca(a,e){const t=a.map(r=>r.portalItem.id);if(new Set(t).size>1)throw new y(`${e}:invalid-parameters`,"All layers in the 'layers' array should be loaded from the same portal item")}function _(a,e){const t=a.map(r=>r.layerId);if(new Set(t).size!==t.length)throw new y(`${e}:invalid-parameters`,"'layers' array should contain only one instance each of layer or table in a feature service")}async function ua(a){Y(a,p),await Promise.all(a.map(e=>e.load()));for(const e of a)g(e,p,$),Q({layer:e,itemType:w,errorNamePrefix:p});ca(a,p),_(a,p)}function b(a,e){const t=a.some(r=>r.type==="oriented-imagery");d(e,u.ORIENTED_IMAGERY_LAYER,t)}async function ya(a,e){b([a],e)}async function pa(a,e){const{url:t,layerId:r,title:o,fullExtent:s,isTable:n}=a,i=m(t);e.url=((i==null?void 0:i.serverType)==="FeatureServer"?t:`${t}/${r}`)??null,e.title||(e.title=o),e.extent=null,n||s==null||(e.extent=await L(s)),I(e,u.METADATA),I(e,u.MULTI_LAYER),k(e,u.SINGLE_LAYER),d(e,u.TABLE,n),b([a],e)}function fa(a,e){for(const s of a){const n=s.parsedUrl.path,i=m(n);if(!(i==null?void 0:i.url.path))throw new y(`${e}:invalid-parameters`,T(s,`has unsupported url pattern: ${n}`),{layer:s});const c=i==null?void 0:i.serverType;if(c!=="FeatureServer"&&c!=="MapServer")throw new y(`${e}:invalid-parameters`,T(s,`has unsupported server type: ${c}`),{layer:s});if(c==="MapServer"&&a.length>1)throw new y(`${e}:invalid-parameters`,"Only one layer or table in a map service can be saved")}const t=m(a[0].parsedUrl.path),r=t==null?void 0:t.url.path;if(!a.every(s=>{const n=m(s.parsedUrl.path);return(n==null?void 0:n.url.path)===r}))throw new y(`${e}:invalid-parameters`,"'layers' array should only contain layers or tables that belong to the same feature service")}async function ma(a){Y(a,f),await Promise.all(a.map(e=>e.load()));for(const e of a)g(e,f,$);fa(a,f),_(a,f)}function da(a,e){b(e,a),R(a)}async function ha(a,e){let t=0,r=0;for(const{isTable:n}of e)n?r++:t++;const o=e[0].parsedUrl.path,s=m(o);if(a.url=(s==null?void 0:s.serverType)==="FeatureServer"?s.url.path:o,a.title||(a.title=s.title),a.extent=null,t>0){const n=e.map(i=>i.fullExtent).filter(B).reduce((i,l)=>i.clone().union(l));n&&(a.extent=await L(n))}I(a,u.METADATA),d(a,u.MULTI_LAYER,e.length>1),d(a,u.SINGLE_LAYER,e.length===1),d(a,u.TABLE,r>0&&t===0),b(e,a),R(a)}async function Pa(a,e){return q({layer:a,itemType:w,validateLayer:$,createItemData:(t,r)=>J(r,[t]),errorNamePrefix:aa,setItemProperties:ya},e)}async function Sa(a,e){await ua(a);const t=a[0].portalItem,r=x(t),o=await Promise.all(a.map(n=>O(n,r,e))),s=await J(t,a.map((n,i)=>({layer:n,layerJSON:o[i]})));return da(t,a),await t.update({data:s}),await Promise.all(a.slice(1).map(n=>n.portalItem.reload())),N(r),t.clone()}async function Ea(a,e,t){return V({layer:a,itemType:w,validateLayer:$,createItemData:(r,o)=>Promise.resolve(D(r)),errorNamePrefix:ea,newItem:e,setItemProperties:pa},t)}async function La(a,e,t){await ma(a);const r=C({itemType:w,errorNamePrefix:f,newItem:e}),o=x(r),s=await Promise.all(a.map(i=>O(i,o,t))),n=await F(a.map((i,l)=>({layer:i,layerJSON:s[l]})));await ha(r,a),await H(r,n,t);for(const i of a)i.portalItem=r.clone();return N(o),r}export{Pa as save,Sa as saveAll,La as saveAllAs,Ea as saveAs};
