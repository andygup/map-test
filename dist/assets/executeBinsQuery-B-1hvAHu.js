import{I as m,bN as f,U as y,V as c,fd as s,eE as S,n as l,a7 as p,bv as R}from"./index-CC72Q5ax.js";import{t as g}from"./query-lSI4e_aN.js";import N from"./BinsQuery-GKCx4l3t.js";import"./pbfQueryUtils-BjGKWyem.js";import"./pbf-hM4K8d6H.js";import"./OptimizedGeometry-C9mSZhHi.js";import"./OptimizedFeature-swgcyHeh.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./queryUtils-DRc9hajA.js";import"./json-Wa8cmqdu.js";function d(r){const e=r.geometry,n=r.toJSON(),t=n;let i,o,a;return e!=null&&(o=e.spatialReference,a=s(o),t.geometryType=S(e),t.geometry=JSON.stringify(e),t.inSR=a),n.outSR?(t.outSR=s(n.outSR),i=r.outSpatialReference):e&&(t.outSR=t.inSR,i=o),t.bin&&(t.bin=JSON.stringify(t.bin)),t.quantizationParameters&&(t.quantizationParameters=JSON.stringify(t.quantizationParameters)),t.outStatistics&&(t.outStatistics=JSON.stringify(t.outStatistics)),t.outTimeReference&&(t.outTimeReference=JSON.stringify(t.outTimeReference)),r.defaultSpatialReference&&l(o,i)&&(t.defaultSR=t.inSR,delete t.inSR,delete t.outSR),t}async function J(r,e,n){return O(r,e,n)}async function O(r,e,n={}){const t=typeof r=="string"?m(r):r,i=e.geometry?[e.geometry]:[],o=await f(i,null,{signal:n.signal}),a=o==null?void 0:o[0];a!=null&&((e=e.clone()).geometry=a);const u=g({...t.query,f:"json",...d(e)});return y(c(t.path,"queryBins"),{...n,query:{...u,...n.query}})}async function V(r,e,n){const{data:t}=await J(p(r),N.from(e),n);return R.fromJSON(t)}export{V as executeBinsQuery};
