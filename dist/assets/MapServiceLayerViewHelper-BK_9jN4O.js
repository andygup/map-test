const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-CC72Q5ax.js","assets/index-NV7R-tPD.css"])))=>i.map(i=>d[i]);
import{eE as X,fd as Y,fc as K,mc as ee,md as _,hj as Q,X as n,Y as u,h9 as te,dw as re,a1 as J,a6 as z,y as se,fe as ie,a3 as G,a4 as q,a5 as oe,bP as B,a0 as ae,j6 as ne,a7 as le,bN as ue,a9 as pe,a8 as ye,U as ce,b1 as he,fu as de,cq as fe,s as T,bO as me,bk as M,aZ as ge,du as A,_ as we,fM as be,cC as ve,aU as xe,me as L,mf as $e,M as U,mg as Se,et as Fe}from"./index-CC72Q5ax.js";import{H as je}from"./languageUtils-CXqaVYj4.js";import{s as H}from"./highlightUtils-C_-rdBJv.js";import{n as Oe,p as Ee}from"./popupUtils-DOXd1VHO.js";function Pe(t,e){const{dpi:s,gdbVersion:o,geometry:r,geometryPrecision:a,height:i,historicMoment:c,layerOption:h,mapExtent:l,maxAllowableOffset:p,returnFieldName:y,returnGeometry:m,returnUnformattedValues:x,returnZ:$,spatialReference:j,timeExtent:f,tolerance:F,width:w}=t.toJSON(),{dynamicLayers:g,layerDefs:b,layerIds:P}=Ie(t),I=(e==null?void 0:e.geometry)!=null?e.geometry:null,v={historicMoment:c,geometryPrecision:a,maxAllowableOffset:p,returnFieldName:y,returnGeometry:m,returnUnformattedValues:x,returnZ:$,tolerance:F},O=(I==null?void 0:I.toJSON())||r;v.imageDisplay=`${w},${i},${s}`,o&&(v.gdbVersion=o),O&&(delete O.spatialReference,v.geometry=JSON.stringify(O),v.geometryType=X(O));const V=j??(O==null?void 0:O.spatialReference)??(l==null?void 0:l.spatialReference);if(V&&(v.sr=Y(V)),v.time=f?[f.start,f.end].join(","):null,l){const{xmin:D,ymin:Z,xmax:C,ymax:W}=l;v.mapExtent=`${D},${Z},${C},${W}`}return b&&(v.layerDefs=b),g&&!b&&(v.dynamicLayers=g),v.layers=h==="popup"?"visible":h,P&&!g&&(v.layers+=`:${P.join(",")}`),v}function Ie(t){var $,j;const{mapExtent:e,floors:s,width:o,sublayers:r,layerIds:a,layerOption:i,gdbVersion:c}=t,h=(j=($=r==null?void 0:r.find(f=>f.layer!=null))==null?void 0:$.layer)==null?void 0:j.serviceSublayers,l=i==="popup",p={},y=K({extent:e,width:o,spatialReference:e==null?void 0:e.spatialReference}),m=[],x=f=>{const F=y===0,w=f.minScale===0||y<=f.minScale,g=f.maxScale===0||y>=f.maxScale;if(f.visible&&(F||w&&g))if(f.sublayers)f.sublayers.forEach(x);else{if((a==null?void 0:a.includes(f.id))===!1||l&&(!f.popupTemplate||!f.popupEnabled))return;m.unshift(f)}};if(r==null||r.forEach(x),r&&!m.length)p.layerIds=[];else{const f=ee(m,h,c),F=m.map(w=>{const g=_(s,w);return w.toExportImageJSON(g)});if(f)p.dynamicLayers=JSON.stringify(F);else{if(r){let g=m.map(({id:b})=>b);a&&(g=g.filter(b=>a.includes(b))),p.layerIds=g}else a!=null&&a.length&&(p.layerIds=a);const w=Ne(s,m);if(w!=null&&w.length){const g={};for(const b of w)b.definitionExpression&&(g[b.id]=b.definitionExpression);Object.keys(g).length&&(p.layerDefs=JSON.stringify(g))}}}return p}function Ne(t,e){const s=!!(t!=null&&t.length),o=e.filter(r=>r.definitionExpression!=null||s&&r.floorInfo!=null);return o.length?o.map(r=>{const a=_(t,r),i=Q(a,r.definitionExpression);return{id:r.id,definitionExpression:i??void 0}}):null}var R;let d=R=class extends q{static from(t){return oe(R,t)}constructor(t){super(t),this.dpi=96,this.floors=null,this.gdbVersion=null,this.geometry=null,this.geometryPrecision=null,this.height=400,this.historicMoment=null,this.layerIds=null,this.layerOption="top",this.mapExtent=null,this.maxAllowableOffset=null,this.returnFieldName=!0,this.returnGeometry=!1,this.returnM=!1,this.returnUnformattedValues=!0,this.returnZ=!1,this.spatialReference=null,this.sublayers=null,this.timeExtent=null,this.tolerance=null,this.width=400}writeHistoricMoment(t,e){e.historicMoment=t&&t.getTime()}};n([u({type:Number,json:{write:!0}})],d.prototype,"dpi",void 0),n([u()],d.prototype,"floors",void 0),n([u({type:String,json:{write:!0}})],d.prototype,"gdbVersion",void 0),n([u({types:te,json:{read:re,write:!0}})],d.prototype,"geometry",void 0),n([u({type:Number,json:{write:!0}})],d.prototype,"geometryPrecision",void 0),n([u({type:Number,json:{write:!0}})],d.prototype,"height",void 0),n([u({type:Date})],d.prototype,"historicMoment",void 0),n([J("historicMoment")],d.prototype,"writeHistoricMoment",null),n([u({type:[Number],json:{write:!0}})],d.prototype,"layerIds",void 0),n([u({type:["top","visible","all","popup"],json:{write:!0}})],d.prototype,"layerOption",void 0),n([u({type:z,json:{write:!0}})],d.prototype,"mapExtent",void 0),n([u({type:Number,json:{write:!0}})],d.prototype,"maxAllowableOffset",void 0),n([u({type:Boolean,json:{write:!0}})],d.prototype,"returnFieldName",void 0),n([u({type:Boolean,json:{write:!0}})],d.prototype,"returnGeometry",void 0),n([u({type:Boolean,json:{write:!0}})],d.prototype,"returnM",void 0),n([u({type:Boolean,json:{write:!0}})],d.prototype,"returnUnformattedValues",void 0),n([u({type:Boolean,json:{write:!0}})],d.prototype,"returnZ",void 0),n([u({type:se,json:{write:!0}})],d.prototype,"spatialReference",void 0),n([u()],d.prototype,"sublayers",void 0),n([u({type:ie,json:{write:!0}})],d.prototype,"timeExtent",void 0),n([u({type:Number,json:{write:!0}})],d.prototype,"tolerance",void 0),n([u({type:Number,json:{write:!0}})],d.prototype,"width",void 0),d=R=n([G("esri.rest.support.IdentifyParameters")],d);const k=d;let S=class extends q{constructor(t){super(t),this.displayFieldName=null,this.feature=null,this.layerId=null,this.layerName=null}readFeature(t,e){return B.fromJSON({attributes:{...e.attributes},geometry:{...e.geometry}})}writeFeature(t,e){if(!t)return;const{attributes:s,geometry:o}=t;s&&(e.attributes={...s}),o!=null&&(e.geometry=o.toJSON(),e.geometryType=ne.toJSON(o.type))}};n([u({type:String,json:{write:!0}})],S.prototype,"displayFieldName",void 0),n([u({type:B})],S.prototype,"feature",void 0),n([ae("feature",["attributes","geometry"])],S.prototype,"readFeature",null),n([J("feature")],S.prototype,"writeFeature",null),n([u({type:Number,json:{write:!0}})],S.prototype,"layerId",void 0),n([u({type:String,json:{write:!0}})],S.prototype,"layerName",void 0),S=n([G("esri.rest.support.IdentifyResult")],S);const Re=S;async function _e(t,e,s){const o=(e=Ve(e)).geometry?[e.geometry]:[],r=le(t);return r.path+="/identify",ue(o).then(a=>{const i=Pe(e,{geometry:a==null?void 0:a[0]}),c=pe({...r.query,f:"json",...i}),h=ye(c,s);return ce(r.path,h).then(Ge).then(l=>Te(l,e.sublayers))})}function Ge(t){const e=t.data;return e.results=e.results||[],e.exceededTransferLimit=!!e.exceededTransferLimit,e.results=e.results.map(s=>Re.fromJSON(s)),e}function Ve(t){return t=k.from(t)}function Te(t,e){if(!(e!=null&&e.length))return t;const s=new Map;function o(r){s.set(r.id,r),r.sublayers&&r.sublayers.forEach(o)}e.forEach(o);for(const r of t.results)r.feature.sourceLayer=s.get(r.layerId);return t}let N=null;function qe(t,e){return e.type==="tile"||e.type==="map-image"}let E=class extends he{constructor(t){super(t),this._featuresResolutions=new WeakMap,this.highlightGraphics=null,this.highlightGraphicUpdated=null,this.updateHighlightedFeatures=de(async e=>{this.destroyed||this.updatingHandles.addPromise(this._updateHighlightedFeaturesGeometries(e).catch(()=>{}))})}initialize(){const t=e=>{this.updatingHandles.addPromise(this._updateHighlightedFeaturesSymbols(e).catch(()=>{})),this.updateHighlightedFeatures(this._highlightGeometriesResolution)};this.addHandles([fe(()=>this.highlightGraphics,"change",e=>t(e.added),{onListenerAdd:e=>t(e)})])}async fetchPopupFeaturesAtLocation(t,e){var i,c;const{layerView:{layer:s,view:{scale:o}}}=this;if(!t)throw new T("fetchPopupFeatures:invalid-area","Nothing to fetch without area",{layer:s});const r=Me(s.sublayers,o,e);if(!r.length)return[];const a=await Le(s,r);if(!((((c=(i=s.capabilities)==null?void 0:i.operations)==null?void 0:c.supportsIdentify)??!0)&&s.version>=10.5)&&!a)throw new T("fetchPopupFeatures:not-supported","query operation is disabled for this service",{layer:s});return a?this._fetchPopupFeaturesUsingQueries(t,r,e):this._fetchPopupFeaturesUsingIdentify(t,r,e)}clearHighlights(){var t;(t=this.highlightGraphics)==null||t.removeAll()}highlight(t){const e=this.highlightGraphics;if(!t||!e)return H;let s=je(t)?[t]:me.isCollection(t)?t.toArray():Array.isArray(t)?t:[];if(s=s==null?void 0:s.filter(M),((s==null?void 0:s.length)??0)===0)return H;for(const o of s){const{sourceLayer:r}=o;r!=null&&"geometryType"in r&&r.geometryType==="point"&&(o.visible=!1)}return e.addMany(s),ge(()=>e.removeMany(s??[]))}async _updateHighlightedFeaturesSymbols(t){const{layerView:{view:e},highlightGraphics:s,highlightGraphicUpdated:o}=this;if(s&&o)for(const r of t){const a=r.sourceLayer&&"renderer"in r.sourceLayer&&r.sourceLayer.renderer;r.sourceLayer&&"geometryType"in r.sourceLayer&&r.sourceLayer.geometryType==="point"&&a&&"getSymbolAsync"in a&&a.getSymbolAsync(r).then(async i=>{var l;i||(i=new A);let c=null;const h="visualVariables"in a?(l=a.visualVariables)==null?void 0:l.find(p=>p.type==="size"):void 0;h&&(N||(N=(await we(async()=>{const{getSize:p}=await import("./index-CC72Q5ax.js").then(y=>y.yB);return{getSize:p}},__vite__mapDeps([0,1]))).getSize),c=N(h,r,{view:e.type,scale:e.scale,shape:i.type==="simple-marker"?i.style:null})),c||(c="width"in i&&"height"in i&&i.width!=null&&i.height!=null?Math.max(i.width,i.height):"size"in i?i.size:16),s.includes(r)&&(r.symbol=new A({style:"square",size:c,xoffset:"xoffset"in i?i.xoffset:0,yoffset:"yoffset"in i?i.yoffset:0}),o(r,"symbol"),r.visible=!0)})}}async _updateHighlightedFeaturesGeometries(t){const{layerView:{layer:e,view:s},highlightGraphics:o,highlightGraphicUpdated:r}=this;if(this._highlightGeometriesResolution=t,!r||!(o!=null&&o.length)||!e.capabilities.operations.supportsQuery)return;const a=this._getTargetResolution(t),i=new Map;for(const l of o)if(!this._featuresResolutions.has(l)||this._featuresResolutions.get(l)>a){const p=l.sourceLayer;be(i,p,()=>new Map).set(l.getObjectId(),l)}const c=Array.from(i,([l,p])=>{const y=l.createQuery();return y.objectIds=[...p.keys()],y.outFields=[l.objectIdField],y.returnGeometry=!0,y.maxAllowableOffset=a,y.outSpatialReference=s.spatialReference,l.queryFeatures(y)}),h=await Promise.all(c);if(!this.destroyed)for(const{features:l}of h)for(const p of l){const y=p.sourceLayer,m=i.get(y).get(p.getObjectId());m&&o.includes(m)&&(m.geometry=p.geometry,r(m,"geometry"),this._featuresResolutions.set(m,a))}}_getTargetResolution(t){const e=t*ve(this.layerView.view.spatialReference),s=e/16;return s<=10?0:t/e*s}async _fetchPopupFeaturesUsingIdentify(t,e,s){const o=await this._createIdentifyParameters(t,e,s);if(o==null)return[];const{results:r}=await _e(this.layerView.layer.parsedUrl,o,s);return r.map(a=>a.feature)}async _createIdentifyParameters(t,e,s){const{floors:o,layer:r,timeExtent:a,view:{spatialReference:i,scale:c}}=this.layerView;if(!e.length)return null;await Promise.all(e.map(({sublayer:x})=>x.load(s).catch(()=>{})));const h=Math.min(xe("mapservice-popup-identify-max-tolerance"),r.allSublayers.reduce((x,$)=>$.renderer?L({renderer:$.renderer,pointerType:s==null?void 0:s.pointerType}):x,2)),l=this.createFetchPopupFeaturesQueryGeometry(t,h),p=$e(c,i),y=Math.round(l.width/p),m=new z({xmin:l.center.x-p*y,ymin:l.center.y-p*y,xmax:l.center.x+p*y,ymax:l.center.y+p*y,spatialReference:l.spatialReference});return new k({floors:o,gdbVersion:"gdbVersion"in r?r.gdbVersion:void 0,geometry:t,height:y,layerOption:"popup",mapExtent:m,returnGeometry:!0,spatialReference:i,sublayers:r.sublayers,timeExtent:a,tolerance:h,width:y})}async _fetchPopupFeaturesUsingQueries(t,e,s){const{layerView:{floors:o,timeExtent:r}}=this,a=e.map(async({sublayer:i,popupTemplate:c})=>{var b;if(await i.load(s).catch(()=>{}),i.capabilities&&!i.capabilities.operations.supportsQuery)return[];const h=i.createQuery(),l=L({renderer:i.renderer,pointerType:s==null?void 0:s.pointerType}),p=this.createFetchPopupFeaturesQueryGeometry(t,l),y=new Set,[m]=await Promise.all([Oe(i,c),(b=i.renderer)==null?void 0:b.collectRequiredFields(y,i.fieldsIndex)]);U(s),Se(y,i.fieldsIndex,m);const x=Array.from(y).sort();h.geometry=p,h.outFields=x,h.timeExtent=r;const $=_(o,i);h.where=Q(h.where,$);const j=this._getTargetResolution(p.width/l),f=await Ae(c);U(s);const F=i.geometryType==="point"||f&&f.arcadeUtils.hasGeometryOperations(c);F||(h.maxAllowableOffset=j);let{features:w}=await i.queryFeatures(h,s);const g=F?0:j;w=await Ue(i,w,s);for(const P of w)this._featuresResolutions.set(P,g);return w});return(await Promise.allSettled(a)).reduce((i,c)=>c.status==="fulfilled"?[...i,...c.value]:i,[]).filter(M)}};function Me(t,e,s){const o=[];if(!t)return o;const r=a=>{const i=a.minScale===0||e<=a.minScale,c=a.maxScale===0||e>=a.maxScale;if(a.visible&&i&&c){if(a.sublayers)a.sublayers.forEach(r);else if(a.popupEnabled){const h=Ee(a,{...s,defaultPopupTemplateEnabled:!1});h!=null&&o.unshift({sublayer:a,popupTemplate:h})}}};return t.map(r),o}function Ae(t){var e;return(e=t.expressionInfos)!=null&&e.length||Array.isArray(t.content)&&t.content.some(s=>s.type==="expression")?Fe():Promise.resolve()}async function Le(t,e){var s,o;if((o=(s=t.capabilities)==null?void 0:s.operations)!=null&&o.supportsQuery)return!0;try{return await Promise.any(e.map(({sublayer:r})=>r.load().then(()=>r.capabilities.operations.supportsQuery)))}catch{return!1}}async function Ue(t,e,s){const o=t.renderer;return o&&"defaultSymbol"in o&&!o.defaultSymbol&&(e=o.valueExpression?await Promise.all(e.map(r=>o.getSymbolAsync(r,s).then(a=>a?r:null))).then(r=>r.filter(a=>a!=null)):e.filter(r=>o.getSymbol(r)!=null)),e}n([u({constructOnly:!0})],E.prototype,"createFetchPopupFeaturesQueryGeometry",void 0),n([u({constructOnly:!0})],E.prototype,"layerView",void 0),n([u({constructOnly:!0})],E.prototype,"highlightGraphics",void 0),n([u({constructOnly:!0})],E.prototype,"highlightGraphicUpdated",void 0),n([u({constructOnly:!0})],E.prototype,"updatingHandles",void 0),E=n([G("esri.views.layers.support.MapServiceLayerViewHelper")],E);export{E as R,qe as _};
