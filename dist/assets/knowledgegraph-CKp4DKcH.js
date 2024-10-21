const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/knowledgeGraphService-CxMpisqG.js","assets/index-C-FXvluM.js","assets/index-NV7R-tPD.css","assets/GraphQueryStreaming-Byt6ZeFl.js"])))=>i.map(i=>d[i]);
import{e as I,_ as A,O as J,cA as Q,cB as V,b9 as j,y as P,x as B,z as C,S as K,gn as T,v as M,gr as O}from"./index-C-FXvluM.js";import{t as z,N as W}from"./arcadeUtils-BfdEM_4F.js";import{i as b,a as u,r as c,d as k,P as y,$ as L,Y as U,E as _,B as Y,z as G,k as D,t as Z,g as H,T as X,Z as q,_ as $}from"./languageUtils-D6fITh3r.js";import{l as tt}from"./portalUtils-BAuDSarS.js";import{s as nt,m as et,t as rt,p as at,c as it}from"./GraphQueryStreaming-Byt6ZeFl.js";import"./featureConversionUtils-COeKMnVA.js";import"./OptimizedFeature-swgcyHeh.js";import"./OptimizedGeometry-C9mSZhHi.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./number-BhozGW4E.js";import"./shared-B2Wi1qXt.js";let f=null;async function ot(t){const n=J.geometryServiceUrl??"";if(!n){Q()||await V();for(const e of t)e.container[e.indexer]=j(e.container[e.indexer],P.WGS84);return}const r=t.map(e=>e.container[e.indexer]),i=new B({geometries:r,outSpatialReference:P.WGS84}),s=await C(n,i);for(let e=0;e<s.length;e++){const a=t[e];a.container[a.indexer]=s[e]}}async function E(t,n){const r=new K({portal:t,id:n});return await r.load(),f===null&&(f=await A(()=>import("./knowledgeGraphService-CxMpisqG.js").then(i=>i.k),__vite__mapDeps([0,1,2,3]))),await f.fetchKnowledgeGraph(r.url)}function R(t,n,r,i,s){if(t===null)return null;if(y(t)||G(t))return t;if(D(t)||D(t))return t.toJSDate();if(Z(t))return t.toStorageFormat();if(H(t))return t.toStorageString();if(X(t)){const e={};for(const a of t.keys())e[a]=R(t.field(a),n,r,i,s),e[a]instanceof T&&s.push({container:e,indexer:a});return e}if(_(t)){const e=t.map(a=>R(a,n,r,i,s));for(let a=0;a<e.length;a++)e[a]instanceof T&&s.push({container:e,indexer:a});return e}return q(t)?t.spatialReference.isWGS84?t:t.spatialReference.isWebMercator&&n?M(t):t:void 0}function st(t,n){if(!t)return t;if(t.spatialReference.isWGS84&&n.spatialReference.isWebMercator)return O(t);if(t.spatialReference.equals(n.spatialReference))return t;throw new u(n,c.WrongSpatialReference,null)}function v(t,n){if(!t)return null;const r={};for(const i in t)r[i]=g(t[i],n);return r}function g(t,n){return t===null?null:_(t)?t.map(r=>g(r,n)):t instanceof et?{graphTypeName:t.typeName,id:t.id,graphType:"entity",properties:v(t.properties,n)}:t instanceof rt?{graphType:"object",properties:v(t.properties,n)}:t instanceof at?{graphTypeName:t.typeName,id:t.id,graphType:"relationship",originId:t.originId??null,destinationId:t.destinationId??null,properties:v(t.properties,n)}:t instanceof it?{graphType:"path",path:t.path?t.path.map(r=>g(r,n)):null}:q(t)?st(t,n):y(t)||G(t)||$(t)?t:null}function St(t){t.mode==="async"&&(t.functions.knowledgegraphbyportalitem=function(n,r){return t.standardFunctionAsync(n,r,(i,s,e)=>{var d,m;if(b(e,2,2,n,r),e[0]===null)throw new u(n,c.PortalRequired,r);if(e[0]instanceof z){const p=k(e[1]);let h;return h=(d=n.services)!=null&&d.portal?n.services.portal:I.getDefault(),E(tt(e[0],h),p)}if(y(e[0])===!1)throw new u(n,c.InvalidParameter,r);const a=k(e[0]);return E(((m=n.services)==null?void 0:m.portal)??I.getDefault(),a)})},t.signatures.push({name:"knowledgegraphbyportalitem",min:2,max:2}),t.functions.querygraph=function(n,r){return t.standardFunctionAsync(n,r,async(i,s,e)=>{var x;b(e,2,4,n,r);const a=e[0];if(!L(a))throw new u(n,c.InvalidParameter,r);const d=e[1];if(!y(d))throw new u(n,c.InvalidParameter,r);f===null&&(f=await A(()=>import("./knowledgeGraphService-CxMpisqG.js").then(o=>o.k),__vite__mapDeps([0,1,2,3])));let m=null;const p=U(e[2],null);if(!(p instanceof W||p===null))throw new u(n,c.InvalidParameter,r);if(p){let o=[];m=R(p,!0,!1,n,o),o=o.filter(l=>!l.container[l.indexer].spatialReference.isWGS84),o.length>0&&await ot(o)}const h=new nt({openCypherQuery:d,bindParameters:m});(((x=a==null?void 0:a.serviceDefinition)==null?void 0:x.currentVersion)??11.3)>11.2&&(h.outputSpatialReference=n.spatialReference);const F=(await f.executeQueryStreaming(a,h)).resultRowsStream.getReader(),S=[];try{for(;;){const{done:o,value:l}=await F.read();if(o)break;if(_(l))for(const w of l)S.push(g(w,n));else{const w=[];for(const N of l)w.push(g(l[N],n));S.push(w)}}}catch(o){throw o}return W.convertJsonToArcade(S,Y(n),!1,!0)})},t.signatures.push({name:"querygraph",min:2,max:4}))}export{St as registerFunctions};