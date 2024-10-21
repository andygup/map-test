import{bv as h,y as d,bP as S,a6 as g,g0 as M,fM as l,ak as N}from"./index-CC72Q5ax.js";import{$ as E}from"./Mesh-n_kfSahd.js";import{i as D,a as F}from"./External-DEN3NyJj.js";import{n as T,i as w}from"./meshFeatureAttributes-BuBqcNY9.js";import"./axisAngleDegrees-8iTlWR3a.js";import"./MeshComponent-D7zZkpXS.js";import"./meshProperties-C4iW0Ukm.js";import"./MeshLocalVertexSpace-CLr9qQun.js";import"./MeshTransform-D3dyzoG0.js";import"./MeshVertexAttributes-BAMht-z0.js";import"./meshVertexSpaceUtils-CnmEbj7h.js";import"./triangulationUtils-Coz2MyES.js";import"./earcut-Lltz9D9k.js";import"./Indices-DWw6RaGO.js";import"./deduplicate-C0MyxjfC.js";import"./vertexSpaceConversion-CiDM2BGj.js";import"./vec3-TYwEpiIF.js";import"./BufferView-IdfsJNbH.js";import"./vec4-DV4UPuQo.js";const I=()=>N.getLogger("esri.rest.support.meshFeatureSet");function Y(t,s,e){const r=e.features;e.features=[],delete e.geometryType;const o=h.fromJSON(e);if(o.geometryType="mesh",!e.assetMaps)return o;const n=O(s,e.assetMaps),i=t.sourceSpatialReference??d.WGS84,m=e.globalIdFieldName,{outFields:a}=t,f=a!=null&&a.length>0?b(a.includes("*")?null:new Set(a)):()=>({});for(const u of r){const p=L(u,m,i,s,n);o.features.push(new S({geometry:p,attributes:f(u)}))}return o}function b(t){return({attributes:s})=>{if(!s)return{};if(!t)return s;for(const e in s)t.has(e)||delete s[e];return s}}function L(t,s,e,r,o){const n=t.attributes[s],i=o.get(n);if(i==null||!t.geometry)return null;const m=T(t.attributes,e,r.transformFieldRoles),a=g.fromJSON(t.geometry);a.spatialReference=e;const f=w(t.attributes,r.transformFieldRoles),u=e.isGeographic?"local":"georeferenced",p=P(i);return p?E.createWithExternalSource(m,p,{extent:a,transform:f,vertexSpace:u}):E.createIncomplete(m,{extent:a,transform:f,vertexSpace:u})}var c;function O(t,s){const e=new Map;for(const r of s){const o=r.parentGlobalId;if(o==null)continue;const n=r.assetName,i=r.assetType,m=r.assetHash,a=r.assetURL,f=r.conversionStatus,u=r.seqNo,p=M(i,t.supportedFormats);if(!p){I().error("mesh-feature-set:unknown-format",`Service returned an asset of type ${i}, but it does not list it as a supported type`);continue}const y=l(e,o,()=>({files:new Map}));l(y.files,n,()=>({name:n,type:i,mimeType:p,status:$(f),parts:[]})).parts[u]={hash:m,url:a}}return e}function P(t){const s=Array.from(t.files.values()),e=new Array;for(const r of s){if(r.status!==c.COMPLETED)return null;const o=new Array;for(const n of r.parts){if(!n)return null;o.push(new D(n.url,n.hash))}e.push(new F(r.name,r.mimeType,o))}return e}function $(t){switch(t){case"COMPLETED":case"SUBMITTED":return c.COMPLETED;case"INPROGRESS":return c.PENDING;default:return c.FAILED}}(function(t){t[t.FAILED=0]="FAILED",t[t.PENDING=1]="PENDING",t[t.COMPLETED=2]="COMPLETED"})(c||(c={}));export{O as assetMapFromAssetMapsJSON,L as extractMesh,Y as meshFeatureSetFromJSON};
