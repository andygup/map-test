const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/loadGLTFMesh-BsIOzdeY.js","assets/index-C-FXvluM.js","assets/index-NV7R-tPD.css","assets/MeshComponent-BrMkggFz.js","assets/meshProperties-C4iW0Ukm.js","assets/MeshVertexAttributes-E6t0Y7Ui.js","assets/meshVertexSpaceUtils-6Oit8r3Z.js","assets/MeshLocalVertexSpace-cD48CuiV.js","assets/BufferView-Dk0MoByh.js","assets/vec3-Ba3sX4Tq.js","assets/vec4-BXZ1pugf.js","assets/types-D0PSWh4d.js","assets/loader-Dy-62eoS.js","assets/resourceUtils-Db653h5C.js","assets/basicInterfaces-CZwQPxTp.js","assets/DefaultMaterial_COLOR_GAMMA-DZ5lGIJe.js","assets/Indices-JUNGgdWS.js","assets/vertexSpaceConversion-B-Meq4J1.js","assets/gltfexport-l-wtLFj-.js"])))=>i.map(i=>d[i]);
import{s as H,bn as lt,h_ as _,dF as ct,fz as ut,bx as w,bz as ie,ak as re,i9 as pt,pi as ft,lQ as xe,pj as le,iA as de,cD as ht,a6 as mt,is as Oe,fB as dt,bE as se,gi as Le,_ as ce,M as oe,b8 as M,oK as gt,pk as xt,gj as yt,kb as vt,kd as wt,X as d,Y as g,a3 as Ee,l6 as $t,bO as At,cq as bt,hq as ue,c2 as Rt,hv as ze,df as pe,bB as St,pl as Pe,lH as Mt,pm as ae,ix as ke,pn as De,iy as Ue,po as Be,pp as Ce,im as Ft,pq as _t,fA as Ot,bG as Lt,pr as Et,kk as zt,g$ as Pt,cl as kt,cv as Dt,cU as Ut,ps as Bt,c6 as Ct,gU as Tt,gn as jt}from"./index-C-FXvluM.js";import{j as Te,z as je,w as X,k as Ie,d as It}from"./axisAngleDegrees-B_k9QdRo.js";import{f as V}from"./MeshComponent-BrMkggFz.js";import{a as fe,b as Y}from"./MeshLocalVertexSpace-cD48CuiV.js";import{N as W}from"./MeshTransform-DerVYA28.js";import{p as Z}from"./MeshVertexAttributes-E6t0Y7Ui.js";import{a as J,s as ee,g as Ge,u as Gt}from"./meshVertexSpaceUtils-6Oit8r3Z.js";import{f as Vt}from"./triangulationUtils-DYBtHM4K.js";import{F as y,B as he,O as E,n as Nt,k as Ve,g as Ne,E as qe,w as He,h as We,R as Ke,G as Je}from"./vertexSpaceConversion-B-Meq4J1.js";import{e as ye,i as qt}from"./vec3-Ba3sX4Tq.js";import{o as ve,h as Ht,m as Wt}from"./External-CNHlILjO.js";const Kt="Mesh must be loaded before applying operations",Jt="Provided component is not part of the list of components",Qt="Expected polygon to be a Polygon instance",q="Expected location to be a Point instance";class we extends H{constructor(){super("invalid-input:location",q)}}function ge(e,t,n,r){if(r!==void 0){lt(e(),"option: geographic",{replacement:"Use mesh `vertexSpace` and spatial reference to control how operations are performed instead.",version:"4.30",warnOnce:!0});const s=t.type==="local";if(!J(t)||r===s)return n.isGeographic||n.isWebMercator&&r;e().warnOnce(`Specifying the 'geographic' parameter (${r}) for a Mesh vertex space of type "${t.type}" is not supported. This parameter will be ignored.`)}switch(t.type){case"georeferenced":return n.isGeographic;case"local":return n.isGeographic||n.isWebMercator}}const K=()=>re.getLogger("esri.geometry.support.meshUtils.centerAt");function Xt(e,t,n){var a;if(!((a=e.vertexAttributes)!=null&&a.position))return;const{vertexSpace:r}=e,s=(n==null?void 0:n.origin)??e.origin,o=ge(K,r,s.spatialReference,n==null?void 0:n.geographic);J(r)?Yt(e,t,s):o?Zt(e,t,s):en(e,t,s)}function Yt(e,t,n){const{vertexSpace:r}=e;if(!J(r))return;const s=Xe,o=Qe;if(!_(t,o,e.spatialReference))return void y(K(),t.spatialReference,e.spatialReference,E);if(!_(n,s,e.spatialReference)){const i=e.origin;return s[0]=i.x,s[1]=i.y,s[2]=i.z,void y(K(),n.spatialReference,e.spatialReference,E)}const a=ct(nn,o,s);r.origin=ut(w(),r.origin,a)}function Zt(e,t,n){const r=ie(n.x,n.y,n.z??0),s=he(e,new fe({origin:r}));if(!s)return;const o=ie(t.x,t.y,t.z??0),a=he({vertexAttributes:s,spatialReference:e.spatialReference,vertexSpace:new fe({origin:o})},Y.absolute);if(!a)return;const{position:i,normal:l,tangent:u}=a;e.vertexAttributes.position=i,e.vertexAttributes.normal=l,e.vertexAttributes.tangent=u,e.vertexAttributesChanged()}function en(e,t,n){const r=Xe,s=Qe;if(_(t,s,e.spatialReference)){if(!_(n,r,e.spatialReference)){const o=e.origin;return r[0]=o.x,r[1]=o.y,r[2]=o.z,void y(K(),n.spatialReference,e.spatialReference,E)}tn(e.vertexAttributes.position,s,r),e.vertexAttributesChanged()}else y(K(),t.spatialReference,e.spatialReference,E)}function tn(e,t,n){if(e)for(let r=0;r<e.length;r+=3)for(let s=0;s<3;s++)e[r+s]+=t[s]-n[s]}const Qe=w(),Xe=w(),nn=w();function rn(e){const{spatialReference:t,vertexSpace:n,untransformedBounds:r}=e,s=ft(r,sn);if(J(n)&&e.transform&&ye(s,s,e.transform.localMatrix),n.type==="georeferenced"){const i=n.origin;return i&&qt(s,s,i),xe(le(s),t)}const o=de(t),a=n.origin;if(!ht(o,t)){const[i,l,u]=a;return new mt({xmin:i,ymin:l,zmin:u,xmax:i,ymax:l,zmax:u,spatialReference:t})}return Oe(t,a,$e,o),ye(s,s,$e),dt(s,o,0,s,t,0),xe(le(s),t)}const $e=se(),sn=pt(24);async function on(e,t,n){const{source:r}=t,{loadGLTFMesh:s}=await Le(ce(()=>import("./loadGLTFMesh-BsIOzdeY.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17])),n),o=await ln(r,n);oe(n);const a=s(new M({x:0,y:0,z:0,spatialReference:e.spatialReference}),o.url,{resolveFile:an(o),signal:n==null?void 0:n.signal,expectedType:o.type});a.then(()=>o.dispose(),()=>o.dispose());const{vertexAttributes:i,components:l}=await a;e.vertexAttributes=i,e.components=l}function an(e){const t=gt(e.url);return n=>{const r=xt(n,t,t),s=r?r.replace(/^ *\.\//,""):null;return(s?e.files.get(s):null)??n}}async function ln(e,t){if(Array.isArray(e)){if(!e.length)throw new H("mesh-load-external:missing-assets","There must be at least one file to load");return e[0]instanceof File?un(e):pn(e,t)}return Ye(e)}async function cn(e,t){const{parts:n,assetMimeType:r,assetName:s}=e;if(n.length===1)return new te(n[0].partUrl);const o=await e.toBlob(t);return oe(t),te.fromBlob(o,rt(s,r))}function Ye(e){return te.fromBlob(e,rt(e.name,e.type))}function un(e){return tt(e.map(t=>({name:t.name,mimeType:t.type,source:Ye(t)})))}async function pn(e,t){const n=await yt(e.map(async r=>{const s=await cn(r);return oe(t),{name:r.assetName,mimeType:r.assetMimeType,source:s}}));if(vt(t))throw n.forEach(r=>r.source.dispose()),wt();return tt(n)}const Ze=/^model\/gltf\+json$/,et=/^model\/gltf-binary$/,me=/\.gltf$/i,fn=/\.glb$/i;function Ae({mimeType:e,source:t,name:n}){return Ze.test(e)||me.test(n)?{url:t.url,type:"gltf"}:et.test(e)||fn.test(n)?{url:t.url,type:"glb"}:null}function tt(e){const t=new Map;let n=null,r=null;for(const o of e){const{source:a,name:i}=o;n??(n=Ae(o)),i==="ESRI3DO_NORM.glb"&&(r=Ae(o)),t.set(i,a.url),a.files.forEach((l,u)=>t.set(u,l))}const s=r??n;if(s==null)throw new H("mesh-load-external:missing-files","Missing files to load external mesh source");return new te(s.url,()=>e.forEach(({source:o})=>o.dispose()),t,s.type)}let te=class nt{constructor(t,n=()=>{},r=new Map,s){this.url=t,this.dispose=n,this.files=r,this.type=s}static fromBlob(t,n){const r=URL.createObjectURL(t);return new nt(r,()=>URL.revokeObjectURL(r),void 0,n)}};function rt(e,t){return Ze.test(t)||me.test(e)?"gltf":et.test(t)||me.test(e)?"glb":void 0}let F=class extends $t{constructor(e){super(e),this.externalSources=new At,this._explicitDisplaySource=null,this.georeferenced=!1,this.addHandles(bt(()=>this.externalSources,"after-remove",({item:t})=>{t===this._explicitDisplaySource&&(this._explicitDisplaySource=null)},{sync:!0,onListenerRemove:()=>this._explicitDisplaySource=null}))}get displaySource(){return this._explicitDisplaySource??this._implicitDisplaySource}set displaySource(e){if(e!=null&&!ve(e))throw new Error("Cannot use this source for display: it is not in a supported format.");this._explicitDisplaySource=e,e&&this.externalSources.every(t=>!Ht(t,e))&&this.externalSources.add(e)}clearSources(){this.externalSources.removeAll()}getExternalSourcesOnService(e){return this.externalSources.items.filter(t=>Wt(t,e))}get _implicitDisplaySource(){return this.externalSources.find(ve)}};d([g()],F.prototype,"externalSources",void 0),d([g()],F.prototype,"displaySource",null),d([g()],F.prototype,"_implicitDisplaySource",null),d([g()],F.prototype,"_explicitDisplaySource",void 0),d([g()],F.prototype,"georeferenced",void 0),F=d([Ee("esri.geometry.support.meshUtils.Metadata")],F);function hn(){const{faceDescriptions:e,faceVertexOffsets:t,uvScales:n}=An,r=4*e.length,s=new Float64Array(3*r),o=new Float32Array(3*r),a=new Float32Array(2*r),i=new Uint32Array(2*e.length*3);let l=0,u=0,c=0,f=0;for(let h=0;h<e.length;h++){const p=e[h],x=l/3;for(const A of t)i[f++]=x+A;const z=p.corners;for(let A=0;A<4;A++){const P=z[A];let $=0;a[c++]=.25*n[A][0]+p.uvOrigin[0],a[c++]=p.uvOrigin[1]-.25*n[A][1];for(let R=0;R<3;R++)p.axis[R]!==0?(s[l++]=.5*p.axis[R],o[u++]=p.axis[R]):(s[l++]=.5*P[$++],o[u++]=0)}}return{position:s,normal:o,uv:a,faces:i}}function mn(e,t){const n=e.components[0],r=n.faces,s=bn[t],o=6*s,a=new Array(6),i=new Array(r.length-6);let l=0,u=0;for(let c=0;c<r.length;c++)c>=o&&c<o+6?a[l++]=r[c]:i[u++]=r[c];if(e.vertexAttributes.uv!=null){const c=new Float32Array(e.vertexAttributes.uv),f=4*s*2,h=[0,1,1,1,1,0,0,0];for(let p=0;p<h.length;p++)c[f+p]=h[p];e.vertexAttributes.uv=c}return e.components=[new V({faces:a,material:n.material}),new V({faces:i})],e}function dn(e=0){const t=Math.round(8*2**e),n=2*t,r=(t-1)*(n+1)+2*n,s=new Float64Array(3*r),o=new Float32Array(3*r),a=new Float32Array(2*r),i=new Uint32Array(3*((t-1)*n*2));let l=0,u=0,c=0,f=0;for(let h=0;h<=t;h++){const p=h/t*Math.PI+.5*Math.PI,x=Math.cos(p),z=Math.sin(p);m[2]=z;const A=h===0||h===t,P=A?n-1:n;for(let $=0;$<=P;$++){const R=$/P*2*Math.PI;m[0]=-Math.sin(R)*x,m[1]=Math.cos(R)*x;for(let O=0;O<3;O++)s[l]=.5*m[O],o[l]=m[O],++l;a[u++]=($+(A?.5:0))/n,a[u++]=h/t,h!==0&&$!==n&&(h!==t&&(i[c++]=f,i[c++]=f+1,i[c++]=f-n),h!==1&&(i[c++]=f,i[c++]=f-n,i[c++]=f-n-1)),f++}}return{position:s,normal:o,uv:a,faces:i}}function gn(e=0){const n=Math.round(16*2**e),r=4*(n+1)+2*n,s=new Float64Array(3*r),o=new Float32Array(3*r),a=new Float32Array(2*r),i=new Uint32Array(3*(4*n));let l=0,u=0,c=0,f=0,h=0;for(let p=0;p<=5;p++){const x=p===0||p===5,z=p<=1||p>=4,A=p===2||p===4,P=x?n-1:n;for(let $=0;$<=P;$++){const R=$/P*2*Math.PI,O=x?0:.5;m[0]=O*Math.sin(R),m[1]=O*-Math.cos(R),m[2]=p<=2?.5:-.5;for(let U=0;U<3;U++)s[l++]=m[U],o[u++]=z?U===2?p<=1?1:-1:0:U===2?0:m[U]/O;a[c++]=($+(x?.5:0))/n,a[c++]=p<=1?1*p/3:p<=3?1*(p-2)/3+1/3:1*(p-4)/3+2/3,A||p===0||$===n||(p!==5&&(i[f++]=h,i[f++]=h+1,i[f++]=h-n),p!==1&&(i[f++]=h,i[f++]=h-n,i[f++]=h-n-1)),h++}}return{position:s,normal:o,uv:a,faces:i}}function xn(e,t){const n=typeof t=="number"?t:t!=null?t.width:1,r=typeof t=="number"?t:t!=null?t.height:1;switch(e){case"up":case"down":return{width:n,depth:r};case"north":case"south":return{width:n,height:r};case"east":case"west":return{depth:n,height:r}}}function yn(e){const t=N.facingAxisOrderSwap[e],n=N.position,r=N.normal,s=new Float64Array(n.length),o=new Float32Array(r.length);let a=0;for(let i=0;i<4;i++){const l=a;for(let u=0;u<3;u++){const c=t[u],f=Math.abs(c)-1,h=c>=0?1:-1;s[a]=n[l+f]*h,o[a]=r[l+f]*h,a++}}return{position:s,normal:o,uv:new Float32Array(N.uv),faces:new Uint32Array(N.faces),isPlane:!0}}const B=1,C=2,T=3,N={position:[-.5,-.5,0,.5,-.5,0,.5,.5,0,-.5,.5,0],normal:[0,0,1,0,0,1,0,0,1,0,0,1],uv:[0,1,1,1,1,0,0,0],faces:[0,1,2,0,2,3],facingAxisOrderSwap:{east:[T,B,C],west:[-T,-B,C],north:[-B,T,C],south:[B,-T,C],up:[B,C,T],down:[B,-C,-T]}};function Q(e,t,n){e.isPlane||vn(e),$n(e,wn(n==null?void 0:n.size,n==null?void 0:n.unit,t.spatialReference));const r=ee(t,n),s=t.spatialReference.isGeographic?ee(t):r,o=he({vertexAttributes:e,vertexSpace:s,spatialReference:t.spatialReference},r,{allowBufferReuse:!0});return{vertexAttributes:new Z({...o,uv:e.uv}),vertexSpace:r,components:[new V({faces:e.faces,material:(n==null?void 0:n.material)||null})],spatialReference:t.spatialReference}}function vn(e){for(let t=0;t<e.position.length;t+=3)e.position[t+2]+=.5}function wn(e,t,n){const r=Nt(t,n);if(e==null&&r===1)return null;if(e==null)return[r,r,r];if(typeof e=="number"){const s=e*r;return[s,s,s]}return[e.width!=null?e.width*r:r,e.depth!=null?e.depth*r:r,e.height!=null?e.height*r:r]}function $n(e,t){if(t!=null){L[0]=t[0],L[4]=t[1],L[8]=t[2];for(let n=0;n<e.position.length;n+=3){for(let r=0;r<3;r++)m[r]=e.position[n+r];ue(m,m,L);for(let r=0;r<3;r++)e.position[n+r]=m[r]}if(t[0]!==t[1]||t[1]!==t[2]){L[0]=1/t[0],L[4]=1/t[1],L[8]=1/t[2];for(let n=0;n<e.normal.length;n+=3){for(let r=0;r<3;r++)m[r]=e.normal[n+r];ue(m,m,L),Rt(m,m);for(let r=0;r<3;r++)e.normal[n+r]=m[r]}}}}const An={faceDescriptions:[{axis:[0,-1,0],uvOrigin:[0,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[1,0,0],uvOrigin:[.25,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,1,0],uvOrigin:[.5,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[-1,0,0],uvOrigin:[.75,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[0,0,1],uvOrigin:[0,.375],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,0,-1],uvOrigin:[0,.875],corners:[[-1,1],[1,1],[1,-1],[-1,-1]]}],uvScales:[[0,0],[1,0],[1,1],[0,1]],faceVertexOffsets:[0,1,2,0,2,3]},bn={south:0,east:1,north:2,west:3,up:4,down:5},m=w(),L=ze(),k=()=>re.getLogger("esri.geometry.support.meshUtils.rotate");function Rn(e,t,n){var l;if(!((l=e.vertexAttributes)!=null&&l.position)||t[3]===0)return;const{spatialReference:r,vertexSpace:s}=e,o=(n==null?void 0:n.origin)??e.origin,a=n==null?void 0:n.geographic,i=ge(k,s,r,a);Ge(e)?Sn(e,t,o):i?Mn(e,t,o):Fn(e,t,o)}function Sn(e,t,n){e.transform??(e.transform=new W);const{vertexSpace:r,transform:s,spatialReference:o}=e,[a,i,l]=r.origin,u=new M({x:a,y:i,z:l,spatialReference:o}),c=j;if(u.equals(n))pe(c,0,0,0);else if(!Ve(c,n,e))return void y(k(),n.spatialReference,o,E);St(Me,X(t),je(t));const f=Pe(be,Me,ae,Mt,c),{localMatrix:h}=s,p=ke(be,f,h);s.scale=De(w(),p),Ue(p,p,Be(j,s.scale));const x=s.rotationAxis;s.rotation=Ie(p),s.rotationAngle===0&&(s.rotationAxis=x),s.translation=Ce(w(),p)}function Mn(e,t,n){const r=e.spatialReference,s=de(r),o=st;if(!_(n,o,s)&&(y(k(),n.spatialReference,s,"Falling back to mesh origin"),!_(e.origin,o,s)))return void y(k(),e.origin.spatialReference,s);const a=e.vertexAttributes.position,i=e.vertexAttributes.normal,l=e.vertexAttributes.tangent,u=new Float64Array(a.length),c=i!=null?new Float32Array(i.length):null,f=l!=null?new Float32Array(l.length):null;Oe(s,o,ne,s),Ft(Se,ne);const h=Re;ue(X(Re),X(t),Se),h[3]=t[3],Ne(a,r,u,s)&&(i==null||c==null||qe(i,a,r,u,s,c))&&(l==null||f==null||He(l,a,r,u,s,f))?(G(u,h,3,o),We(u,s,a,r)&&(i==null||c==null||(G(c,h,3),Ke(c,a,r,u,s,i)))&&(l==null||f==null||(G(f,h,4),Je(f,a,r,u,s,l)))?e.vertexAttributesChanged():y(k(),s,r)):y(k(),r,s)}function Fn(e,t,n){const r=st;if(!_(n,r,e.spatialReference)){const s=e.origin;return r[0]=s.x,r[1]=s.y,r[2]=s.z,void y(k(),n.spatialReference,e.spatialReference,E)}G(e.vertexAttributes.position,t,3,r),G(e.vertexAttributes.normal,t,3),G(e.vertexAttributes.tangent,t,4),e.vertexAttributesChanged()}function G(e,t,n,r=ae){if(e!=null){_t(ne,je(t),X(t));for(let s=0;s<e.length;s+=n){for(let o=0;o<3;o++)j[o]=e[s+o]-r[o];Ot(j,j,ne);for(let o=0;o<3;o++)e[s+o]=j[o]+r[o]}}}const j=w(),be=se(),Re=Te(),ne=se(),Se=ze(),st=w(),Me=Lt(),D=()=>re.getLogger("esri.geometry.support.meshUtils.scale");function _n(e,t,n){var l;if(!((l=e.vertexAttributes)!=null&&l.position))return;const{vertexSpace:r,spatialReference:s}=e,o=(n==null?void 0:n.origin)??e.origin,a=n==null?void 0:n.geographic,i=ge(D,r,s,a);Ge(e)?On(e,t,o):i?Ln(e,t,o):En(e,t,o)}function On(e,t,n){e.transform??(e.transform=new W);const{vertexSpace:r,transform:s,spatialReference:o}=e,[a,i,l]=r.origin,u=new M({x:a,y:i,z:l,spatialReference:o}),c=I;if(u.equals(n))pe(c,0,0,0);else if(!Ve(c,n,e))return void y(D(),n.spatialReference,o,E);const f=pe(zn,t,t,t),h=Pe(Fe,Et,ae,f,c),{localMatrix:p}=s,x=ke(Fe,h,p);s.scale=De(w(),x),Ue(x,x,Be(I,s.scale));const z=s.rotationAxis;s.rotation=Ie(x),s.rotationAngle===0&&(s.rotationAxis=z),s.translation=Ce(w(),x)}function Ln(e,t,n){const r=e.spatialReference,s=de(r),o=at;if(!_(n,o,s)&&(y(D(),n.spatialReference,s,"Falling back to mesh origin"),!_(e.origin,o,s)))return void y(D(),e.origin.spatialReference,s);const a=e.vertexAttributes.position,i=e.vertexAttributes.normal,l=e.vertexAttributes.tangent,u=new Float64Array(a.length),c=i!=null?new Float32Array(i.length):null,f=l!=null?new Float32Array(l.length):null;Ne(a,r,u,s)&&(i==null||c==null||qe(i,a,r,u,s,c))&&(l==null||f==null||He(l,a,r,u,s,f))?(ot(u,t,o),We(u,s,a,r)&&(i==null||c==null||Ke(c,a,r,u,s,i))&&(l==null||f==null||Je(f,a,r,u,s,l))?e.vertexAttributesChanged():y(D(),s,r)):y(D(),r,s)}function En(e,t,n){const r=at;if(!_(n,r,e.spatialReference)){const s=e.origin;return r[0]=s.x,r[1]=s.y,r[2]=s.z,void y(D(),n.spatialReference,e.spatialReference,E)}ot(e.vertexAttributes.position,t,r),e.vertexAttributesChanged()}function ot(e,t,n=ae){if(e)for(let r=0;r<e.length;r+=3){for(let s=0;s<3;s++)I[s]=e[r+s]-n[s];zt(I,I,t);for(let s=0;s<3;s++)e[r+s]=I[s]+n[s]}}const I=w(),zn=w(),Fe=se(),at=w();var b;const it="esri.geometry.Mesh";function S(){return re.getLogger(it)}const Pn={base:null,key:"type",defaultKeyValue:"georeferenced",typeMap:{georeferenced:Y,local:fe}};let v=b=class extends Pt.LoadableMixin(kt(jt)){constructor(e){super(e),this.components=null,this.vertexSpace=new Y,this.transform=null,this.metadata=new F,this.hasZ=!0,this.hasM=!1,this.vertexAttributes=new Z,this.type="mesh"}initialize(){(this.metadata.externalSources.length===0||this.vertexAttributes.position.length)&&(this.loadStatus="loaded"),this.when(()=>{this.addHandles(Dt(()=>{var e;return{vertexAttributes:this.vertexAttributes,components:(e=this.components)==null?void 0:e.map(t=>t.clone())}},()=>this._clearSources(),{once:!0,sync:!0}))})}get hasExtent(){var e;return this.loaded?this.vertexAttributes.position.length>0&&(!this.components||this.components.length>0):((e=this.metadata.displaySource)==null?void 0:e.extent)!=null}get _transformedExtent(){const{spatialReference:e,vertexSpace:t}=this,n=this;return rn({get transform(){return n.transform},vertexSpace:t,spatialReference:e,untransformedBounds:this._untransformedBounds})}get _untransformedBounds(){const{vertexAttributes:{position:e},components:t}=this;return e.length===0||(t==null?void 0:t.length)===0?Ut(Bt):le(e)}get origin(){const e=Gt(this.vertexSpace,this.spatialReference);if(e!=null)return e;const{center:t,zmin:n}=this._transformedExtent;return new M({x:t.x,y:t.y,z:n,spatialReference:this.spatialReference})}get extent(){var e,t;return this.loaded||((t=(e=this.metadata)==null?void 0:e.displaySource)==null?void 0:t.extent)==null?this._transformedExtent:this.metadata.displaySource.extent.clone()}addComponent(e){this._checkIfLoaded("addComponent()")&&(this.components||(this.components=[]),this.components.push(V.from(e)),this.notifyChange("components"))}removeComponent(e){if(this._checkIfLoaded("removeComponent()")){if(this.components){const t=this.components.indexOf(e);if(t!==-1)return this.components.splice(t,1),void this.notifyChange("components")}S().error("removeComponent()",Jt)}}rotate(e,t,n,r){return It(e,t,n,_e),Rn(this,_e,r),this}offset(e,t,n){if(!this._checkIfLoaded("offset()"))return this;const{vertexSpace:r,vertexAttributes:s}=this,o=s==null?void 0:s.position;if(!o)return this;if(J(r)){const[a,i,l]=r.origin;r.origin=ie(a+e,i+t,l+n)}else{for(let a=0;a<o.length;a+=3)o[a]+=e,o[a+1]+=t,o[a+2]+=n;this.vertexAttributesChanged()}return this}scale(e,t){return this._checkIfLoaded("scale()")?(_n(this,e,t),this):this}centerAt(e,t){return this._checkIfLoaded("centerAt()")?(Xt(this,e,t),this):this}load(e){const{metadata:{displaySource:t}}=this;return t&&this.addResolvingPromise(on(this,t,e)),Promise.resolve(this)}addExternalSources(e){this.metadata.externalSources.addMany(e)}updateDisplaySource(e){this.metadata.displaySource=e}clone(){return this.cloneAndModifyVertexAttributes(this.vertexAttributes.clone(),this.vertexSpace.clone(),{preserveMetadata:!0})}cloneAndModifyVertexAttributes(e,t,n){var o;let r=null;if(this.components){const a=new Map,i=new Map;r=this.components.map(l=>l.cloneWithDeduplication(a,i))}const s={components:r,spatialReference:this.spatialReference,vertexAttributes:e,vertexSpace:t,transform:((o=this.transform)==null?void 0:o.clone())??null,metadata:n!=null&&n.preserveMetadata?this.metadata.clone():new F};return new b(s)}cloneShallow(){return new b({components:this.components,spatialReference:this.spatialReference,vertexAttributes:this.vertexAttributes,vertexSpace:this.vertexSpace.clone(),transform:this.transform,metadata:this.metadata})}vertexAttributesChanged(){this.notifyChange("vertexAttributes")}async toBinaryGLTF(e){const[{toBinaryGLTF:t}]=await Promise.all([ce(()=>import("./gltfexport-l-wtLFj-.js"),__vite__mapDeps([18,1,2,3,4,17,6,7,9,8,10,13,14])),this.load(e)]);return oe(e),await t(this,e)}get memoryUsage(){let e=0;if(e+=this.vertexAttributes.memoryUsage,this.components!=null)for(const t of this.components)e+=t.memoryUsage;return e}_clearSources(){this.metadata.clearSources()}_checkIfLoaded(e){return!!this.loaded||(S().error(e,Kt),!1)}static createBox(e,t){if(!(e instanceof M))return S().error(".createBox()",q),null;const n=new b(Q(hn(),e,t));return t!=null&&t.imageFace&&t.imageFace!=="all"?mn(n,t.imageFace):n}static createSphere(e,t){return e instanceof M?new b(Q(dn((t==null?void 0:t.densificationFactor)||0),e,t)):(S().error(".createSphere()",q),null)}static createCylinder(e,t){return e instanceof M?new b(Q(gn((t==null?void 0:t.densificationFactor)||0),e,t)):(S().error(".createCylinder()",q),null)}static createPlane(e,t){if(!(e instanceof M))return S().error(".createPlane()",q),null;const n=(t==null?void 0:t.facing)??"up",r=xn(n,t==null?void 0:t.size);return new b(Q(yn(n),e,{...t,size:r}))}static createFromPolygon(e,t){if(!(e instanceof Ct))return S().error(".createFromPolygon()",Qt),null;const n=Vt(e);return new b({vertexAttributes:new Z({position:n.position}),components:[new V({faces:n.faces,shading:"flat",material:(t==null?void 0:t.material)??null})],spatialReference:e.spatialReference,vertexSpace:new Y})}static async createFromGLTF(e,t,n){if(!(e instanceof M)){const s=new we;throw S().error(".createfromGLTF()",s.message),s}const{loadGLTFMesh:r}=await Le(ce(()=>import("./loadGLTFMesh-BsIOzdeY.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17])),n);return new b(await r(e,t,n))}static async createFromFiles(e,t,n){Tt(S(),"`Mesh.createFromFiles` is deprecated in favor of 'SceneLayer.convertMesh'",{replacement:"SceneLayer.convertMesh",version:"4.29"});const r=s=>S().error(".createFromFiles()",s.message);if(!(e instanceof M)){const s=new we;throw r(s),s}if(!(n!=null&&n.layer))throw new H("invalid:no-layer","SceneLayer required for file to mesh conversion.");return n.layer.convertMesh(t,{location:e,...n})}static createWithExternalSource(e,t,n){var u;const r=(n==null?void 0:n.extent)??null,{spatialReference:s}=e,o=((u=n==null?void 0:n.transform)==null?void 0:u.clone())??new W,a=ee(e,n),i={source:t,extent:r},l=new F;return l.externalSources.push(i),new b({metadata:l,transform:o,vertexSpace:a,spatialReference:s})}static createIncomplete(e,t){var a;const{spatialReference:n}=e,r=((a=t==null?void 0:t.transform)==null?void 0:a.clone())??new W,s=ee(e,t),o=new b({transform:r,vertexSpace:s,spatialReference:n});return o.addResolvingPromise(Promise.reject(new H("mesh-incomplete","Mesh resources are not complete"))),o}};d([g({type:[V],json:{write:!0}})],v.prototype,"components",void 0),d([g({nonNullable:!0,types:Pn,constructOnly:!0,json:{write:!0}})],v.prototype,"vertexSpace",void 0),d([g({type:W,json:{write:!0}})],v.prototype,"transform",void 0),d([g({constructOnly:!0})],v.prototype,"metadata",void 0),d([g()],v.prototype,"hasExtent",null),d([g()],v.prototype,"_transformedExtent",null),d([g()],v.prototype,"_untransformedBounds",null),d([g()],v.prototype,"origin",null),d([g({readOnly:!0,json:{read:!1}})],v.prototype,"extent",null),d([g({readOnly:!0,json:{read:!1,write:!0,default:!0}})],v.prototype,"hasZ",void 0),d([g({readOnly:!0,json:{read:!1,write:!0,default:!1}})],v.prototype,"hasM",void 0),d([g({type:Z,nonNullable:!0,json:{write:!0}})],v.prototype,"vertexAttributes",void 0),v=b=d([Ee(it)],v);const _e=Te(),qn=v;export{qn as $};