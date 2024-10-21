const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/mediaLayerUtils-DKVuqkwR.js","assets/utils-Brn5aNjo.js","assets/index-C5AN6gIb.js","assets/index-NV7R-tPD.css","assets/originUtils-D69mHv66.js","assets/multiOriginJSONSupportUtils-C0wm8_Yw.js","assets/saveAPIKeyUtils-ot4Qx3WZ.js","assets/saveUtils-Cgg_D2MY.js","assets/resourceUtils-C405elns.js","assets/resourceUtils-qzCWpzM5.js"])))=>i.map(i=>d[i]);
import{aE as s,aL as x,kx as we,fZ as D,K as W,aF as l,bm as h,fw as Ee,f as ae,mf as Me,gP as N,s as T,gY as v,mK as Le,dM as ne,aI as q,aJ as oe,mL as U,mM as he,bl as ce,au as R,aM as Te,mN as Q,aO as ue,cC as je,mO as me,mP as He,dj as Ce,f2 as K,mQ as Ne,eZ as ve,h2 as xe,fU as Ae,dh as fe,dl as Ve,di as We,dk as Ge,mR as Re,dm as ze,mS as Ue,D as Be,v as Fe,V as ke,mT as Je,bb as te,b0 as Ke,b1 as De,b9 as qe,x as Ye,bC as Ze,eC as Qe,G as Xe,bj as et,gS as tt,gR as nt,eT as ot,eV as rt,eX as st,eY as it,fF as lt,fH as X,dP as at,fb as ct,_ as ut}from"./index-C5AN6gIb.js";import{p as _,j as be,m as pt}from"./perspectiveUtils-Tb9rmwmB.js";import{p as dt}from"./imageUtils-Cp-OddyP.js";import{p as ht}from"./resourceExtension-CvC0KOtE.js";import{o as mt}from"./BoundsStore-U2eIEVMR.js";import"./normalizeUtilsSync-Ccn9l9sq.js";import"./PooledRBush-BI9lRTDf.js";let ie=class extends we{projectOrWarn(e,t){if(e==null)return e;const{geometry:o,pending:n}=D(e,t);return n?null:n||o?o:(W.getLogger(this).warn("geometry could not be projected to the spatial reference",{georeference:this,geometry:e,sourceSpatialReference:e.spatialReference,targetSpatialReference:t}),null)}};ie=s([x("esri.layers.support.GeoreferenceBase")],ie);const Y=ie,re=ne(),d=R();let k=class extends Te{};s([l({type:Number,json:{write:!0}})],k.prototype,"x",void 0),s([l({type:Number,json:{write:!0}})],k.prototype,"y",void 0),k=s([x("esri.layers.support.ControlPointsGeoreference.ControlPointJSONType")],k);let J=class extends we{constructor(){super(...arguments),this.sourcePoint=null,this.mapPoint=null}};s([l()],J.prototype,"sourcePoint",void 0),s([l({type:h})],J.prototype,"mapPoint",void 0),J=s([x("esri.layers.support.ControlPointsGeoreference.ControlPoint")],J);let P=class extends Ee(Y){constructor(e){super(e),this.controlPoints=null,this.height=0,this.type="control-points",this.width=0}readControlPoints(e,t){const o=ae.fromJSON(t.spatialReference),n=Me(...t.coefficients,1);return e.map(r=>(N(d,r.x,r.y),_(d,d,n),{sourcePoint:r,mapPoint:new h({x:d[0],y:d[1],spatialReference:o})}))}writeControlPoints(e,t,o,n){if(this.transform!=null)e!=null&&y(e[0])&&(t.controlPoints=e.map(r=>{const i=r.sourcePoint;return{x:i.x,y:i.y}}),t.spatialReference=e[0].mapPoint.spatialReference.toJSON(),t.coefficients=this.transform.slice(0,8));else{const r=new T("web-document-write:invalid-georeference","Invalid 'controlPoints', 'width', 'height' configuration.",{layer:n==null?void 0:n.layer,georeference:this});n!=null&&n.messages?n.messages.push(r):W.getLogger(this).error(r.name,r.message)}}get coords(){if(this.controlPoints==null)return null;const e=this._updateTransform(re);if(e==null||!y(this.controlPoints[0]))return null;const t=this.controlPoints[0].mapPoint.spatialReference;return wt(e,this.width,this.height,t)}set coords(e){if(this.controlPoints==null||!y(this.controlPoints[0]))return;const t=this.controlPoints[0].mapPoint.spatialReference;if((e=this.projectOrWarn(e,t))==null)return;const{width:o,height:n}=this,{rings:[[r,i,c,a]]}=e,u={sourcePoint:v(0,n),mapPoint:new h({x:r[0],y:r[1],spatialReference:t})},p={sourcePoint:v(0,0),mapPoint:new h({x:i[0],y:i[1],spatialReference:t})},m={sourcePoint:v(o,0),mapPoint:new h({x:c[0],y:c[1],spatialReference:t})},g={sourcePoint:v(o,n),mapPoint:new h({x:a[0],y:a[1],spatialReference:t})};y(u)&&y(p)&&y(m)&&y(g)&&(ye(re,u,p,m,g),this.controlPoints=this.controlPoints.map(({sourcePoint:b})=>(N(d,b.x,b.y),_(d,d,re),{sourcePoint:b,mapPoint:new h({x:d[0],y:d[1],spatialReference:t})})))}get inverseTransform(){return this.transform==null?null:Le(ne(),this.transform)}get transform(){return this._updateTransform()}toMap(e){if(e==null||this.transform==null||this.controlPoints==null||!y(this.controlPoints[0]))return null;N(d,e.x,e.y);const t=this.controlPoints[0].mapPoint.spatialReference;return _(d,d,this.transform),new h({x:d[0],y:d[1],spatialReference:t})}toSource(e){if(e==null||this.inverseTransform==null||this.controlPoints==null||!y(this.controlPoints[0]))return null;const t=this.controlPoints[0].mapPoint.spatialReference;return e=e.normalize(),(e=D(e,t).geometry)==null?null:(N(d,e.x,e.y),_(d,d,this.inverseTransform),v(d[0],d[1]))}toSourceNormalized(e){const t=this.toSource(e);return t!=null&&(t.x/=this.width,t.y/=this.height),t}_updateTransform(e){const{controlPoints:t,width:o,height:n}=this;if(!(t!=null&&o>0&&n>0))return null;const[r,i,c,a]=t;if(!y(r))return null;const u=r.mapPoint.spatialReference,p=this._projectControlPoint(i,u),m=this._projectControlPoint(c,u),g=this._projectControlPoint(a,u);if(!p.valid||!m.valid||!g.valid||!y(p.controlPoint))return null;e==null&&(e=ne());let b=null;return b=y(m.controlPoint)&&y(g.controlPoint)?ye(e,r,p.controlPoint,m.controlPoint,g.controlPoint):y(m.controlPoint)?yt(e,r,p.controlPoint,m.controlPoint):ft(e,r,p.controlPoint),b.every($e=>$e===0)?null:b}_projectControlPoint(e,t){if(!y(e))return{valid:!0,controlPoint:e};const{sourcePoint:o,mapPoint:n}=e,{geometry:r,pending:i}=D(n,t);return i?{valid:!1,controlPoint:null}:i||r?{valid:!0,controlPoint:{sourcePoint:o,mapPoint:r}}:(W.getLogger(this).warn("map point could not be projected to the spatial reference",{georeference:this,controlPoint:e,sourceSpatialReference:n.spatialReference,targetSpatialReference:t}),{valid:!1,controlPoint:null})}};function y(e){return(e==null?void 0:e.sourcePoint)!=null&&e.mapPoint!=null}s([l({type:[J],json:{write:{allowNull:!1,isRequired:!0,target:{controlPoints:{type:[k]},coefficients:{type:[Number]},spatialReference:{type:ae}}}}})],P.prototype,"controlPoints",void 0),s([q("controlPoints")],P.prototype,"readControlPoints",null),s([oe("controlPoints")],P.prototype,"writeControlPoints",null),s([l({clonable:!1})],P.prototype,"coords",null),s([l({type:Number,nonNullable:!0,json:{write:!0}})],P.prototype,"height",void 0),s([l({readOnly:!0})],P.prototype,"inverseTransform",null),s([l({readOnly:!0})],P.prototype,"transform",null),s([l({type:Number,nonNullable:!0,json:{write:!0}})],P.prototype,"width",void 0),P=s([x("esri.layers.support.ControlPointsGeoreference")],P);const S=R(),I=R(),A=R(),j=R(),O=R(),$=R(),V=R(),H=R(),ee=Math.PI/2;function E(e,t,o){N(e,o.sourcePoint.x,o.sourcePoint.y),N(t,o.mapPoint.x,o.mapPoint.y)}function ft(e,t,o){return E(S,O,t),E(I,$,o),U(A,I,S,ee),U(j,S,I,ee),U(V,$,O,-ee),U(H,O,$,-ee),pe(e,S,I,A,j,O,$,V,H)}function yt(e,t,o,n){return E(S,O,t),E(I,$,o),E(A,V,n),he(j,S,I,.5),U(j,A,j,Math.PI),he(H,O,$,.5),U(H,V,H,Math.PI),pe(e,S,I,A,j,O,$,V,H)}function ye(e,t,o,n,r){return E(S,O,t),E(I,$,o),E(A,V,n),E(j,H,r),pe(e,S,I,A,j,O,$,V,H)}const gt=new Array(8).fill(0),Pt=new Array(8).fill(0);function ge(e,t,o,n,r){return e[0]=t[0],e[1]=t[1],e[2]=o[0],e[3]=o[1],e[4]=n[0],e[5]=n[1],e[6]=r[0],e[7]=r[1],e}function pe(e,t,o,n,r,i,c,a,u){return be(e,ge(gt,t,o,n,r),ge(Pt,i,c,a,u))}function wt(e,t,o,n){const r=Q(0,o),i=Q(0,0),c=Q(t,0),a=Q(t,o);return _(r,r,e),_(i,i,e),_(c,c,e),_(a,a,e),new ce({rings:[[r,i,c,a,r]],spatialReference:n})}const Z=P,B=R();let M=class extends Y{constructor(t){super(t),this.bottomLeft=null,this.bottomRight=null,this.topLeft=null,this.topRight=null,this.type="corners"}get coords(){let{topLeft:t,topRight:o,bottomLeft:n,bottomRight:r}=this;if(t==null||o==null||n==null||r==null)return null;const i=t.spatialReference;return o=this.projectOrWarn(o,i),n=this.projectOrWarn(n,i),r=this.projectOrWarn(r,i),o==null||n==null||r==null?null:new ce({rings:[[[n.x,n.y],[t.x,t.y],[o.x,o.y],[r.x,r.y],[n.x,n.y]]],spatialReference:i})}set coords(t){const{topLeft:o}=this;if(o==null)return;const n=o.spatialReference;if((t=this.projectOrWarn(t,n))==null)return;const{rings:[[r,i,c,a]]}=t;this.bottomLeft=new h({x:r[0],y:r[1],spatialReference:n}),this.topLeft=new h({x:i[0],y:i[1],spatialReference:n}),this.topRight=new h({x:c[0],y:c[1],spatialReference:n}),this.bottomRight=new h({x:a[0],y:a[1],spatialReference:n})}toSourceNormalized(t){const{topLeft:o,topRight:n,bottomRight:r,bottomLeft:i}=this;if(t==null||o==null||n==null||r==null||i==null)return null;const c=o.spatialReference;t=t.normalize();const a=D(t,c).geometry;if(a==null)return null;N(B,a.x,a.y);const u=be(ne(),[o.x,o.y,i.x,i.y,n.x,n.y,r.x,r.y],[0,0,0,1,1,0,1,1]);return _(B,B,u),v(B[0],B[1])}};s([l({clonable:!1})],M.prototype,"coords",null),s([l({type:h})],M.prototype,"bottomLeft",void 0),s([l({type:h})],M.prototype,"bottomRight",void 0),s([l({type:h})],M.prototype,"topLeft",void 0),s([l({type:h})],M.prototype,"topRight",void 0),M=s([x("esri.layers.support.CornersGeoreference")],M);const vt=M;let G=class extends Y{constructor(e){super(e),this.extent=null,this.rotation=0,this.type="extent-and-rotation"}get coords(){if(this.extent==null)return null;const{xmin:e,ymin:t,xmax:o,ymax:n,spatialReference:r}=this.extent;let i;if(this.rotation){const{x:c,y:a}=this.extent.center,u=se(c,a,this.rotation);i=[u(e,t),u(e,n),u(o,n),u(o,t)],i.push(i[0])}else i=[[e,t],[e,n],[o,n],[o,t],[e,t]];return new ce({rings:[i],spatialReference:r})}set coords(e){if(e==null||this.extent==null)return;const t=this.extent.spatialReference;if(e=this.projectOrWarn(e,t),(e==null?void 0:e.extent)==null)return;const{rings:[[o,n,r]],extent:{center:{x:i,y:c}}}=e,a=je(Math.PI/2-Math.atan2(n[1]-o[1],n[0]-o[0])),u=se(i,c,-a),[p,m]=u(o[0],o[1]),[g,b]=u(r[0],r[1]);this.extent=new ue({xmin:p,ymin:m,xmax:g,ymax:b,spatialReference:t}),this.rotation=a}toSourceNormalized(e){const{extent:t,rotation:o}=this;if(e==null||t==null)return null;const{xmin:n,ymin:r,xmax:i,ymax:c,center:a,spatialReference:u}=t;e=e.normalize();const p=D(e,u).geometry;if(p==null)return null;let m=p.x,g=p.y;return o&&([m,g]=se(a.x,a.y,-o)(m,g)),v(me(m,n,i,0,1),me(g,c,r,0,1))}};function se(e,t,o){const n=He(o),r=Math.cos(n),i=Math.sin(n);return(c,a)=>[r*(c-e)+i*(a-t)+e,r*(a-t)-i*(c-e)+t]}s([l({clonable:!1})],G.prototype,"coords",null),s([l({type:ue})],G.prototype,"extent",void 0),s([l({type:Number})],G.prototype,"rotation",void 0),G=s([x("esri.layers.support.ExtentAndRotationGeoreference")],G);const xt=G;function Rt(e){return(e==null?void 0:e.type)==="media"}function _e(e,t){const o=Ce(t);return Rt(e)&&!!e.portalItem&&o!=null&&o>K.PORTAL_ITEM}function bt(e,t,o){var p;if(!e||e.type==="control-points")return e;const{coords:n}=e;if(((p=n==null?void 0:n.rings[0])==null?void 0:p.length)!==5)return null;const[r,i,c,a]=n.rings[0],{spatialReference:u}=n;return new Z({controlPoints:[{mapPoint:new h({x:r[0],y:r[1],spatialReference:u}),sourcePoint:v(0,o)},{mapPoint:new h({x:i[0],y:i[1],spatialReference:u}),sourcePoint:v(0,0)},{mapPoint:new h({x:c[0],y:c[1],spatialReference:u}),sourcePoint:v(t,0)},{mapPoint:new h({x:a[0],y:a[1],spatialReference:u}),sourcePoint:v(t,o)}],width:t,height:o})}const _t={key:"type",base:Y,typeMap:{"control-points":Z,corners:vt,"extent-and-rotation":xt}},St={key:"type",base:Y,typeMap:{"control-points":Z}};let C=class extends Ne(ve(xe)){constructor(e){super(e),this.georeference=null,this.opacity=1}readGeoreference(e){return Z.fromJSON(e)}writeGeoreference(e,t,o,n){var c;const r=(c=n==null?void 0:n.resources)==null?void 0:c.pendingOperations,i=()=>{var u;const a=bt(this.georeference,this.contentWidth,this.contentHeight);if(a){if(e.type!=="control-points"&&W.getLogger(this).warn(`only georeference of type 'control-points' may be persisted. The georeference of type '${e.type}' has been automatically converted.`),((u=a.controlPoints)==null?void 0:u.length)!==4&&(n==null?void 0:n.messages))return void n.messages.push(new T("property:unsupported","only 'control-points' georeference with 4 control points may be persisted."));t[o]=a.write({},n)}};if(e.type!=="control-points"&&!this.loaded&&r)return t[o]={},void r.push(this.load().then(i));i()}get contentWidth(){return 0}get contentHeight(){return 0}toSource(e){const{georeference:t,contentWidth:o,contentHeight:n}=this;if(e==null||t==null||o===0||n===0)return null;const r=t.toSourceNormalized(e);return r==null?null:(r.x*=o,r.y*=n,r)}};s([l({types:_t,json:{write:!0,types:St}})],C.prototype,"georeference",void 0),s([q("georeference")],C.prototype,"readGeoreference",null),s([oe("georeference")],C.prototype,"writeGeoreference",null),s([l({json:{read:!1,write:!1}})],C.prototype,"opacity",void 0),C=s([x("esri.layers.support.MediaElementBase")],C);const de=C;let w=class extends de{constructor(t){super(t),this.animationOptions=null,this.content=null,this.image=null,this.type="image",this.image=null}load(){const t=this.image;if(typeof t=="string"){const o=dt(t).then(n=>{this._set("content",n)});this.addResolvingPromise(o)}else if(t instanceof HTMLImageElement){const o=t.decode().then(()=>{this._set("content",t)});this.addResolvingPromise(o)}else t?this._set("content",t):this.addResolvingPromise(Promise.reject(new T("image-element:invalid-image-type","Invalid image type",{image:t})));return Promise.resolve(this)}get contentWidth(){return this.content==null?0:this.content instanceof HTMLImageElement?this.content.naturalWidth:this.content.width}get contentHeight(){return this.content==null?0:this.content instanceof HTMLImageElement?this.content.naturalHeight:this.content.height}readImage(t,o,n){return Ae(o.url,n)}writeImage(t,o,n,r){if(t==null)return;const i=r==null?void 0:r.portalItem,c=r==null?void 0:r.resources;if(!i||!c)return void(typeof t=="string"&&(o[n]=fe(t,r)));const a=It(t)?t:null;if(a){if(Ve(a)==null)return void(o[n]=a);const u=fe(a,{...r,verifyItemRelativeUrls:r!=null&&r.verifyItemRelativeUrls?{writtenUrls:r.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},We.NO);if(i&&u&&!Ge(u))return c.toKeep.push({resource:i.resourceFromPath(u),compress:!1}),void(o[n]=u)}o[n]="<pending>",c.pendingOperations.push(Ot(t).then(u=>{const p=Et(u,i);o[n]=p.itemRelativeUrl,c.toAdd.push({resource:p,content:{type:"blob",blob:u},compress:!1,finish:m=>{this.image=m.url}})}))}write(t,o){const n=super.write(t,o);return"mediaType"in n&&!n.url&&delete n.mediaType,n}};s([l()],w.prototype,"animationOptions",void 0),s([l({readOnly:!0})],w.prototype,"content",void 0),s([l({readOnly:!0})],w.prototype,"contentWidth",null),s([l({readOnly:!0})],w.prototype,"contentHeight",null),s([l({json:{name:"url",type:String,write:{overridePolicy:(e,t,o)=>({enabled:!_e(o==null?void 0:o.layer,o==null?void 0:o.origin)})}}})],w.prototype,"image",void 0),s([q("image",["url"])],w.prototype,"readImage",null),s([oe("image")],w.prototype,"writeImage",null),s([l({readOnly:!0,json:{read:!1,write:{target:"mediaType",ignoreOrigin:!0}}})],w.prototype,"type",void 0),w=s([x("esri.layers.support.ImageElement")],w);const Se=w;function It(e){return typeof e=="string"&&!Re(e)&&!ze(e)}async function Ot(e){return typeof e=="string"?Re(e)?Ue(e):(await Be(e,{responseType:"blob"})).data:new Promise(t=>$t(e).toBlob(t))}function $t(e){if(e instanceof HTMLCanvasElement)return e;const t=e instanceof HTMLImageElement?e.naturalWidth:e.width,o=e instanceof HTMLImageElement?e.naturalHeight:e.height,n=document.createElement("canvas"),r=n.getContext("2d");return n.width=t,n.height=o,e instanceof HTMLImageElement?r.drawImage(e,0,0,e.width,e.height):e instanceof ImageData&&r.putImageData(e,0,0),n}function Et(e,t){const o=Fe(),n=`${ke("media",o)}.${ht({type:"blob",blob:e})}`;return t.resourceFromPath(n)}let L=class extends de{constructor(e){super(e),this.autoplay=!0,this.content=null,this.type="video"}load(){const e=this.video;if(typeof e=="string"){const t=document.createElement("video");t.src=e,t.crossOrigin="anonymous",t.autoplay=!0,t.muted=!0,t.loop=!0,t.playsInline=!0,this.addResolvingPromise(this._loadVideo(t).then(()=>{this._set("content",t)}))}else e instanceof HTMLVideoElement?this.addResolvingPromise(this._loadVideo(e).then(()=>{this._set("content",e)})):this.addResolvingPromise(Promise.reject(new T("video-element:invalid-video-type","Invalid video type",{video:e})));return Promise.resolve(this)}get contentWidth(){var e;return((e=this.content)==null?void 0:e.videoWidth)??0}get contentHeight(){var e;return((e=this.content)==null?void 0:e.videoHeight)??0}set video(e){this.loadStatus==="not-loaded"?this._set("video",e):W.getLogger(this).error("#video","video cannot be changed after the element is loaded.")}_loadVideo(e){return new Promise((t,o)=>{var r;const n=Je(e,"canplay",()=>{this.removeHandles("canplay"),this.autoplay?e.play().then(t,o):t()});this.addHandles(n,"canplay"),e.crossOrigin!=="anonymous"&&(e.crossOrigin="anonymous",(r=e.src)!=null&&r.includes("blob:")||(e.src=e.src))})}};s([l()],L.prototype,"autoplay",void 0),s([l({readOnly:!0})],L.prototype,"content",void 0),s([l({readOnly:!0})],L.prototype,"contentWidth",null),s([l({readOnly:!0})],L.prototype,"contentHeight",null),s([l()],L.prototype,"video",null),L=s([x("esri.layers.support.VideoElement")],L);const Ie=L,Mt={key:"type",defaultKeyValue:"image",base:de,typeMap:{image:Se,video:Ie}},Pe=te.ofType(Mt);let z=class extends xe.LoadableMixin(Ke(De.EventedAccessor)){constructor(e){super(e),this._index=new mt,this._elementViewsMap=new Map,this._elementsIndexes=new Map,this._elementsChangedHandler=t=>{for(const n of t.removed){const r=this._elementViewsMap.get(n);this._elementViewsMap.delete(n),this._index.delete(r),this.removeHandles(r),r.destroy(),this.notifyChange("fullExtent")}const{spatialReference:o}=this;for(const n of t.added){if(this._elementViewsMap.get(n))continue;const r=new pt({spatialReference:o,element:n});this._elementViewsMap.set(n,r);const i=qe(()=>r.coords,()=>this._updateIndexForElement(r,!1));this._updateIndexForElement(r,!0),this.addHandles(i,r)}this._elementsIndexes.clear(),this.elements.forEach((n,r)=>this._elementsIndexes.set(n,r)),this.emit("refresh")},this.elements=new Pe}async load(e){if(Ye(e),!this.spatialReference){const t=this.elements.find(o=>{var n;return((n=o.georeference)==null?void 0:n.coords)!=null});this._set("spatialReference",t?t.georeference.coords.spatialReference:ae.WGS84)}return this._elementsChangedHandler({added:this.elements.items,removed:[]}),this.addHandles(this.elements.on("change",this._elementsChangedHandler)),this}destroy(){this._index.clear(),this._elementViewsMap.clear(),this._elementsIndexes.clear()}set elements(e){this._set("elements",Ze(e,this._get("elements"),Pe))}get fullExtent(){if(this.loadStatus==="not-loaded")return null;const e=this._index.fullBounds;return e==null?null:new ue({xmin:e[0],ymin:e[1],xmax:e[2],ymax:e[3],spatialReference:this.spatialReference})}set spatialReference(e){this.loadStatus==="not-loaded"?this._set("spatialReference",e):W.getLogger(this).error("#spatialReference","spatialReference cannot be changed after the source is loaded.")}async queryElements(e,t){await this.load(),await Qe(e.spatialReference,this.spatialReference,null,t);const o=Xe(e.spatialReference,this.spatialReference)?e:et(e,this.spatialReference);if(!o)return[];const n=o.normalize(),r=[];for(const i of n)this._index.forEachInBounds(tt(i),({normalizedCoords:c,element:a})=>{c!=null&&nt(i,c)&&r.push(a)});return r.sort((i,c)=>this._elementsIndexes.get(i)-this._elementsIndexes.get(c)),r}hasElement(e){return this.elements.includes(e)}_updateIndexForElement(e,t){const o=e.normalizedBounds,n=this._index.has(e),r=o!=null;this._index.delete(e),r&&this._index.set(e,o),this.notifyChange("fullExtent"),t||(n!==r?this.emit("refresh"):this.emit("change",{element:e.element}))}};s([l()],z.prototype,"elements",null),s([l({readOnly:!0})],z.prototype,"fullExtent",null),s([l()],z.prototype,"spatialReference",null),z=s([x("esri.layers.support.LocalMediaElementSource")],z);const F=z;function le(e){return typeof e=="object"&&e!=null&&"type"in e}function Oe(e){return le(e)&&e.type==="image"}let f=class extends ot(rt(st(it(ve(ct))))){constructor(e){super(e),this.effectiveSource=null,this.georeference=null,this.copyright=null,this.operationalLayerType="MediaLayer",this.spatialReference=null,this.type="media",this._debouncedSaveOperations=lt(async(t,o,n)=>{const{save:r,saveAs:i}=await ut(()=>import("./mediaLayerUtils-DKVuqkwR.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]));switch(t){case X.SAVE:return r(this,o);case X.SAVE_AS:return i(this,n,o)}}),this.source=new F}load(e){return this.addResolvingPromise(this._doLoad(e)),Promise.resolve(this)}async _doLoad(e){await this.loadFromPortal({supportedTypes:["Media Layer"]},e);let t=this.source;if(!t)throw new T("media-layer:source-missing","Set 'MediaLayer.source' before loading the layer.");const o=this._getSourceOverride(t,this.georeference);o&&(this.setAtOrigin("source",o,"web-map"),this.setAtOrigin("source",o,"web-scene"),t=o);const n=le(t)?new F({elements:new te([t])}):t;this._set("effectiveSource",n),this.spatialReference&&(n.spatialReference=this.spatialReference),await n.load(e),this.spatialReference=n.spatialReference}destroy(){var e,t;(e=this.effectiveSource)==null||e.destroy(),this.effectiveSource!==this.source&&((t=this.source)==null||t.destroy())}readGeoreference(e,t){return e&&"itemId"in t&&t.itemId?e:void 0}get fullExtent(){return this.loaded?this.effectiveSource.fullExtent:null}set source(e){this.loadStatus!=="loaded"&&this.loadStatus!=="failed"?this._set("source",e):W.getLogger(this).error("#source","source cannot be changed after the layer is loaded.")}castSource(e){return e?Array.isArray(e)?new F({elements:new te(e)}):e instanceof te?new F({elements:e}):e:null}readSource(e,t,o){if("itemId"in t&&t.itemId)return;const n=this._createSource(t);return n==null||n.read(t,o),n}writeSource(e,t,o,n){if(e&&e instanceof F){const r=e.elements.length;if(r!==1)return void((n==null?void 0:n.messages)&&n.messages.push(new T("media-layer:unsupported-source",`local media element source can only be persisted if it contains exactly one ImageElement, but it has ${r}.`)));e=e.elements.at(0)}Oe(e)?e.write(t,n):n!=null&&n.messages&&(e?n.messages.push(new T("media-layer:unsupported-source","only media elements of type 'ImageElement' can be persisted")):n.messages.push(new T("media-layer:unsupported-source","the media layer is missing a source")))}async save(e){return this._debouncedSaveOperations(X.SAVE,e)}async saveAs(e,t){return this._debouncedSaveOperations(X.SAVE_AS,t,e)}_createSource(e){if("mediaType"in e)switch(e.mediaType){case"image":return new Se;case"video":return new Ie}return null}_getSourceOverride(e,t){if(le(e)&&this.originIdOf("source")===K.PORTAL_ITEM&&t&&(this.originIdOf("georeference")===K.WEB_MAP||this.originIdOf("georeference")===K.WEB_SCENE)){const o=e.toJSON(),n=this._createSource(o);return n.read({...o},{origin:"portal-item"}),n.read({georeference:t},{origin:"web-map"}),n.read({georeference:t},{origin:"web-scene"}),n}return null}};s([l({readOnly:!0})],f.prototype,"effectiveSource",void 0),s([l({readOnly:!0,json:{read:!1,write:!1,origins:{"web-document":{read:!0}}}})],f.prototype,"georeference",void 0),s([q("web-document","georeference")],f.prototype,"readGeoreference",null),s([l({type:String})],f.prototype,"copyright",void 0),s([l({readOnly:!0})],f.prototype,"fullExtent",null),s([l({type:["MediaLayer"]})],f.prototype,"operationalLayerType",void 0),s([l({type:["show","hide"]})],f.prototype,"listMode",void 0),s([l({nonNullable:!0,json:{write:{enabled:!0,allowNull:!1,target:{url:{type:String},mediaType:{type:["image"]},georeference:{type:Z}},overridePolicy(e,t,o){return{enabled:!0,allowNull:!1,ignoreOrigin:_e(this,o==null?void 0:o.origin)&&Oe(e)&&!!e.georeference&&e.originIdOf("georeference")>K.PORTAL_ITEM}}}}})],f.prototype,"source",null),s([at("source")],f.prototype,"castSource",null),s([q("source",["url"])],f.prototype,"readSource",null),s([oe("source")],f.prototype,"writeSource",null),s([l()],f.prototype,"spatialReference",void 0),s([l({readOnly:!0})],f.prototype,"type",void 0),f=s([x("esri.layers.MediaLayer")],f);const Ut=f;export{Ut as default};
