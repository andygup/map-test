const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/loader-BuUrC5lV.js","assets/index-CC72Q5ax.js","assets/index-NV7R-tPD.css","assets/BufferView-IdfsJNbH.js","assets/resourceUtils-Bcbo74K0.js","assets/basicInterfaces-CZwQPxTp.js"])))=>i.map(i=>d[i]);
import{lU as ye,lV as be,lW as G,hg as J,hv as ae,lX as we,lY as oe,U as ve,j as ie,s as $e,kJ as le,e2 as I,lZ as F,by as K,dY as ue,lP as N,cO as Q,ak as Te,l_ as Re,_ as Ae,l$ as Me,ik as Be,il as X,im as Ee,bD as Oe,bE as Se,fA as Z,dF as Ie,m0 as ee,dG as Pe,c2 as Ce,kw as Fe,bx as W}from"./index-CC72Q5ax.js";import{C as ce,b as fe,t as L}from"./Geometry-C-mMk4A4.js";import{c as ke,x as me,L as Ue,i as de,O as _e,E as Le}from"./BufferView-IdfsJNbH.js";import{e as Ne,f as je,l as te,o as re}from"./vec3-TYwEpiIF.js";import{n as qe,s as se}from"./vec4-DV4UPuQo.js";import{n as De,o as P,a as Ve,b as Ge,t as We,c as ze}from"./DefaultMaterial_COLOR_GAMMA-Q216-NiQ.js";import{r as z}from"./resourceUtils-Bcbo74K0.js";import{t as He}from"./NestedMap-GuqgquCN.js";import{l as Ye}from"./Indices-DWw6RaGO.js";import{t as Je}from"./requestImageUtils-BPHIv4AQ.js";import{e as H,i as R,n as Ke}from"./basicInterfaces-CZwQPxTp.js";import{B as j,s as Qe,t as Xe,n as Ze,o as et}from"./RealisticTree.glsl-Bpwwzqj4.js";import{a as ne}from"./NormalAttribute.glsl-DJDgpDLJ.js";function U(r){if(r==null)return null;const t=r.offset!=null?r.offset:ye,n=r.rotation!=null?r.rotation:0,s=r.scale!=null?r.scale:be,u=G(1,0,0,0,1,0,t[0],t[1],1),i=G(Math.cos(n),-Math.sin(n),0,Math.sin(n),Math.cos(n),0,0,0,1),a=G(s[0],0,0,0,s[1],0,0,0,1),l=ae();return J(l,i,a),J(l,u,l),l}class tt{constructor(){this.geometries=new Array,this.materials=new Array,this.textures=new Array}}class rt{constructor(t,n,s){this.name=t,this.lodThreshold=n,this.pivotOffset=s,this.stageResources=new tt,this.numberOfVertices=0}}const B=()=>Te.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function st(r,t){const n=await nt(r,t),s=await ut(n.textureDefinitions??{},t);let u=0;for(const i in s)if(s.hasOwnProperty(i)){const a=s[i];u+=a!=null&&a.image?a.image.width*a.image.height*4:0}return{resource:n,textures:s,size:u+we(n)}}async function nt(r,t){const n=t==null?void 0:t.streamDataRequester;if(n)return at(r,n,t);const s=await oe(ve(r,t));if(s.ok===!0)return s.value.data;ie(s.error),pe(s.error)}async function at(r,t,n){const s=await oe(t.request(r,"json",n));if(s.ok===!0)return s.value;ie(s.error),pe(s.error.details.url)}function pe(r){throw new $e("",`Request for object resource failed: ${r}`)}function ot(r){const t=r.params,n=t.topology;let s=!0;switch(t.vertexAttributes||(B().warn("Geometry must specify vertex attributes"),s=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const i=t.faces;if(i){if(t.vertexAttributes)for(const a in t.vertexAttributes){const l=i[a];l!=null&&l.values?(l.valueType!=null&&l.valueType!=="UInt32"&&(B().warn(`Unsupported indexed geometry indices type '${l.valueType}', only UInt32 is currently supported`),s=!1),l.valuesPerElement!=null&&l.valuesPerElement!==1&&(B().warn(`Unsupported indexed geometry values per element '${l.valuesPerElement}', only 1 is currently supported`),s=!1)):(B().warn(`Indexed geometry does not specify face indices for '${a}' attribute`),s=!1)}}else B().warn("Indexed geometries must specify faces"),s=!1;break}default:B().warn(`Unsupported topology '${n}'`),s=!1}r.params.material||(B().warn("Geometry requires material"),s=!1);const u=r.params.vertexAttributes;for(const i in u)u[i].values||(B().warn("Geometries with externally defined attributes are not yet supported"),s=!1);return s}function it(r,t){var x,b;const n=new Array,s=new Array,u=new Array,i=new He,a=r.resource,l=le.parse(a.version||"1.0","wosr");ft.validate(l);const c=a.model.name,e=a.model.geometries,o=a.materialDefinitions??{},f=r.textures;let m=0;const p=new Map;for(let d=0;d<e.length;d++){const h=e[d];if(!ot(h))continue;const $=ct(h),w=h.params.vertexAttributes,k=[],q=g=>{if(h.params.topology==="PerAttributeArray")return null;const T=h.params.faces;for(const M in T)if(M===g)return T[M].values;return null},O=w[I.POSITION],_=O.values.length/O.valuesPerElement;for(const g in w){const T=w[g],M=T.values,V=q(g)??Ye(_);k.push([g,new F(M,V,T.valuesPerElement,!0)])}const A=$.texture,y=f&&f[A];if(y&&!p.has(A)){const{image:g,parameters:T}=y,M=new ce(g,T);s.push(M),p.set(A,M)}const S=p.get(A),D=S?S.id:void 0,E=$.material;let v=i.get(E,A);if(v==null){const g=o[E.slice(E.lastIndexOf("/")+1)].params;g.transparency===1&&(g.transparency=0);const T=y&&y.alphaChannelUsage,M=g.transparency>0||T==="transparency"||T==="maskAndTransparency",V=y?xe(y.alphaChannelUsage):void 0,Y={ambient:K(g.diffuse),diffuse:K(g.diffuse),opacity:1-(g.transparency||0),transparent:M,textureAlphaMode:V,textureAlphaCutoff:.33,textureId:D,initTextureTransparent:!0,doubleSided:!0,cullFace:H.None,colorMixMode:g.externalColorMixMode||"tint",textureAlphaPremultiplied:(y==null?void 0:y.parameters.preMultiplyAlpha)??!1};t!=null&&t.materialParameters&&Object.assign(Y,t.materialParameters),v=new j(Y,t),i.set(E,A,v)}u.push(v);const ge=new fe(v,k);m+=((b=(x=k.find(g=>g[0]===I.POSITION))==null?void 0:x[1])==null?void 0:b.indices.length)??0,n.push(ge)}return{engineResources:[{name:c,stageResources:{textures:s,materials:u,geometries:n},pivotOffset:a.model.pivotOffset,numberOfVertices:m,lodThreshold:null}],referenceBoundingBox:lt(n)}}function lt(r){const t=ue();return r.forEach(n=>{const s=n.boundingInfo;s!=null&&(N(t,s.bbMin),N(t,s.bbMax))}),t}async function ut(r,t){const n=new Array;for(const i in r){const a=r[i],l=a.images[0].data;if(!l){B().warn("Externally referenced texture data is not yet supported");continue}const c=a.encoding+";base64,"+l,e="/textureDefinitions/"+i,o=a.channels==="rgba"?a.alphaChannelUsage||"transparency":"none",f={noUnpackFlip:!0,wrap:{s:Q.REPEAT,t:Q.REPEAT},preMultiplyAlpha:xe(o)!==R.Opaque},m=t!=null&&t.disableTextures?Promise.resolve(null):Je(c,t);n.push(m.then(p=>({refId:e,image:p,parameters:f,alphaChannelUsage:o})))}const s=await Promise.all(n),u={};for(const i of s)u[i.refId]=i;return u}function xe(r){switch(r){case"mask":return R.Mask;case"maskAndTransparency":return R.MaskBlend;case"none":return R.Opaque;default:return R.Blend}}function ct(r){const t=r.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}const ft=new le(1,2,"wosr");async function mt(r,t){var f;const n=he(Re(r));if(n.fileType==="wosr"){const m=await(t.cache?t.cache.loadWOSR(n.url,t):st(n.url,t)),{engineResources:p,referenceBoundingBox:x}=it(m,t);return{lods:p,referenceBoundingBox:x,isEsriSymbolResource:!1,isWosr:!0}}let s;if(t.cache)s=await t.cache.loadGLTF(n.url,t,!!t.usePBR);else{const{loadGLTF:m}=await Ae(()=>import("./loader-BuUrC5lV.js"),__vite__mapDeps([0,1,2,3,4,5]));s=await m(new De(t.streamDataRequester),n.url,t,t.usePBR)}const u=(f=s.model.meta)==null?void 0:f.ESRI_proxyEllipsoid,i=s.meta.isEsriSymbolResource&&u!=null&&s.meta.ESRI_webstyle==="EsriRealisticTreesStyle";i&&!s.customMeta.esriTreeRendering&&(s.customMeta.esriTreeRendering=!0,gt(s,u));const a=!!t.usePBR,l=s.meta.isEsriSymbolResource?{usePBR:a,isSchematic:!1,treeRendering:i,mrrFactors:Qe}:{usePBR:a,isSchematic:!1,treeRendering:!1,mrrFactors:Xe},c={...t.materialParameters,treeRendering:i},{engineResources:e,referenceBoundingBox:o}=dt(s,l,c,t,n.specifiedLodIndex);return{lods:e,referenceBoundingBox:o,isEsriSymbolResource:s.meta.isEsriSymbolResource,isWosr:!1}}function he(r){const t=r.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return t?{fileType:"gltf",url:t[1],specifiedLodIndex:t[4]!=null?Number(t[4]):null}:r.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:r,specifiedLodIndex:null}:{fileType:"unknown",url:r,specifiedLodIndex:null}}function dt(r,t,n,s,u){const i=r.model,a=new Array,l=new Map,c=new Map,e=i.lods.length,o=ue();return i.lods.forEach((f,m)=>{const p=s.skipHighLods===!0&&(e>1&&m===0||e>3&&m===1)||s.skipHighLods===!1&&u!=null&&m!==u;if(p&&m!==0)return;const x=new rt(f.name,f.lodThreshold,[0,0,0]);f.parts.forEach(b=>{const d=p?new j({},s):pt(i,b,x,t,n,l,c,s),{geometry:h,vertexCount:$}=xt(b,d??new j({},s)),w=h.boundingInfo;w!=null&&m===0&&(N(o,w.bbMin),N(o,w.bbMax)),d!=null&&(x.stageResources.geometries.push(h),x.numberOfVertices+=$)}),p||a.push(x)}),{engineResources:a,referenceBoundingBox:o}}function pt(r,t,n,s,u,i,a,l){var x,b;const c=t.material+(t.attributes.normal?"_normal":"")+(t.attributes.color?"_color":"")+(t.attributes.texCoord0?"_texCoord0":"")+(t.attributes.tangent?"_tangent":""),e=r.materials.get(t.material),o=t.attributes.texCoord0!=null,f=t.attributes.normal!=null;if(e==null)return null;const m=ht(e.alphaMode);if(!i.has(c)){if(o){const y=(S,D=!1)=>{if(S!=null&&!a.has(S)){const E=r.textures.get(S);if(E!=null){const v=E.data;a.set(S,new ce(z(v)?v.data:v,{...E.parameters,preMultiplyAlpha:!z(v)&&D,encoding:z(v)&&v.encoding!=null?v.encoding:void 0}))}}};y(e.textureColor,m!==R.Opaque),y(e.textureNormal),y(e.textureOcclusion),y(e.textureEmissive),y(e.textureMetallicRoughness)}const d=e.color[0]**(1/P),h=e.color[1]**(1/P),$=e.color[2]**(1/P),w=e.emissiveFactor[0]**(1/P),k=e.emissiveFactor[1]**(1/P),q=e.emissiveFactor[2]**(1/P),O=e.textureColor!=null&&o?a.get(e.textureColor):null,_=Ze({normalTexture:e.textureNormal,metallicRoughnessTexture:e.textureMetallicRoughness,metallicFactor:e.metallicFactor,roughnessFactor:e.roughnessFactor,emissiveTexture:e.textureEmissive,emissiveFactor:e.emissiveFactor,occlusionTexture:e.textureOcclusion}),A=((x=e.normalTextureTransform)==null?void 0:x.scale)!=null?(b=e.normalTextureTransform)==null?void 0:b.scale:Me;i.set(c,new j({...s,transparent:m===R.Blend,customDepthTest:Ke.Lequal,textureAlphaMode:m,textureAlphaCutoff:e.alphaCutoff,diffuse:[d,h,$],ambient:[d,h,$],opacity:e.opacity,doubleSided:e.doubleSided,doubleSidedType:"winding-order",cullFace:e.doubleSided?H.None:H.Back,hasVertexColors:!!t.attributes.color,hasVertexTangents:!!t.attributes.tangent,normalType:f?ne.Attribute:ne.ScreenDerivative,castShadows:!0,receiveShadows:e.receiveShadows,receiveAmbientOcclusion:e.receiveAmbientOcclustion,textureId:O!=null?O.id:void 0,colorMixMode:e.colorMixMode,normalTextureId:e.textureNormal!=null&&o?a.get(e.textureNormal).id:void 0,textureAlphaPremultiplied:O!=null&&!!O.parameters.preMultiplyAlpha,occlusionTextureId:e.textureOcclusion!=null&&o?a.get(e.textureOcclusion).id:void 0,emissiveTextureId:e.textureEmissive!=null&&o?a.get(e.textureEmissive).id:void 0,metallicRoughnessTextureId:e.textureMetallicRoughness!=null&&o?a.get(e.textureMetallicRoughness).id:void 0,emissiveFactor:[w,k,q],mrrFactors:_?et:[e.metallicFactor,e.roughnessFactor,s.mrrFactors[2]],isSchematic:_,colorTextureTransformMatrix:U(e.colorTextureTransform),normalTextureTransformMatrix:U(e.normalTextureTransform),scale:[A[0],A[1]],occlusionTextureTransformMatrix:U(e.occlusionTextureTransform),emissiveTextureTransformMatrix:U(e.emissiveTextureTransform),metallicRoughnessTextureTransformMatrix:U(e.metallicRoughnessTextureTransform),...u},l))}const p=i.get(c);if(n.stageResources.materials.push(p),o){const d=h=>{h!=null&&n.stageResources.textures.push(a.get(h))};d(e.textureColor),d(e.textureNormal),d(e.textureOcclusion),d(e.textureEmissive),d(e.textureMetallicRoughness)}return p}function xt(r,t){const n=r.attributes.position.count,s=Ve(r.indices||n,r.primitiveType),u=L(3*n),{typedBuffer:i,typedBufferStride:a}=r.attributes.position;Ne(u,i,r.transform,3,a);const l=[[I.POSITION,new F(u,s,3,!0)]];if(r.attributes.normal!=null){const e=L(3*n),{typedBuffer:o,typedBufferStride:f}=r.attributes.normal;Be(C,r.transform),je(e,o,C,3,f),X(C)&&te(e,e),l.push([I.NORMAL,new F(e,s,3,!0)])}if(r.attributes.tangent!=null){const e=L(4*n),{typedBuffer:o,typedBufferStride:f}=r.attributes.tangent;Ee(C,r.transform),qe(e,o,C,4,f),X(C)&&te(e,e,4),l.push([I.TANGENT,new F(e,s,4,!0)])}if(r.attributes.texCoord0!=null){const e=L(2*n),{typedBuffer:o,typedBufferStride:f}=r.attributes.texCoord0;Ge(e,o,2,f),l.push([I.UV0,new F(e,s,2,!0)])}const c=r.attributes.color;if(c!=null){const e=new Uint8Array(4*n);c.elementCount===4?c instanceof ke?se(e,c,255):c instanceof me?We(e,c):c instanceof Ue&&se(e,c,1/256):(e.fill(255),c instanceof de?re(e,c.typedBuffer,255,4,c.typedBufferStride):r.attributes.color instanceof _e?ze(e,c.typedBuffer,4,r.attributes.color.typedBufferStride):r.attributes.color instanceof Le&&re(e,c.typedBuffer,1/256,4,c.typedBufferStride)),l.push([I.COLOR,new F(e,s,4,!0)])}return{geometry:new fe(t,l),vertexCount:n}}const C=ae();function ht(r){switch(r){case"BLEND":return R.Blend;case"MASK":return R.Mask;case"OPAQUE":case null:case void 0:return R.Opaque}}function gt(r,t){for(let n=0;n<r.model.lods.length;++n){const s=r.model.lods[n];for(const u of s.parts){const i=u.attributes.normal;if(i==null)return;const a=u.attributes.position,l=a.count,c=W(),e=W(),o=W(),f=new Uint8Array(4*l),m=new Float64Array(3*l),p=Oe(Se(),u.transform);let x=0,b=0;for(let d=0;d<l;d++){a.getVec(d,e),i.getVec(d,c),Z(e,e,u.transform),Ie(o,e,t.center),ee(o,o,t.radius);const h=o[2],$=Pe(o),w=Math.min(.45+.55*$*$,1);ee(o,o,t.radius),p!==null&&Z(o,o,p),Ce(o,o),n+1!==r.model.lods.length&&r.model.lods.length>1&&Fe(o,o,c,h>-1?.2:Math.min(-4*h-3.8,1)),m[x]=o[0],m[x+1]=o[1],m[x+2]=o[2],x+=3,f[b]=255*w,f[b+1]=255*w,f[b+2]=255*w,f[b+3]=255,b+=4}u.attributes.normal=new de(m),u.attributes.color=new me(f)}}}const It=Object.freeze(Object.defineProperty({__proto__:null,fetch:mt,parseUrl:he},Symbol.toStringTag,{value:"Module"}));export{mt as e,It as o,U as s};
