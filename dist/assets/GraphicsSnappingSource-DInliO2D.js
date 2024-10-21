import{b1 as v,cn as S,gf as w,cw as y,ge as b,cv as k,cq as E,gj as F,M as c,gk as C,gh as P,b2 as A,c6 as G,gl as g,cD as $,b9 as H,eZ as I,ez as R,cg as O,X as a,Y as p,gi as x,b7 as z,gm as Z,a3 as M}from"./index-CC72Q5ax.js";import{a as L}from"./normalizeUtilsSync-C8Q5lxUb.js";import{o as W}from"./featureConversionUtils-9H_Ovj7K.js";import{e as q}from"./OptimizedFeature-swgcyHeh.js";import{m as J}from"./FeatureStore-CiDHtFAl.js";import{V as N}from"./QueryEngine-DlcJyi46.js";import{o as j,i as T}from"./queryEngineUtils-D7Gklp9q.js";import{i as m,r as D,n as _}from"./symbologySnappingCandidates-IylZ5gz7.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./OptimizedGeometry-C9mSZhHi.js";import"./BoundsStore-B9AnjEoZ.js";import"./PooledRBush-DUL4VpNM.js";import"./timeSupport-CcSJQo1x.js";import"./queryUtils-DRc9hajA.js";import"./json-Wa8cmqdu.js";import"./optimizedFeatureQueryEngineAdapter-DrXZKbZy.js";import"./centroid-DdLmOD72.js";import"./WhereClause-Dmb3AZGA.js";import"./QueryEngineCapabilities-DjYb9CEb.js";import"./utils-Be7h0xeP.js";import"./utils-0y3tP9-x.js";import"./ClassBreaksDefinition-DnmfwumH.js";import"./SnappingCandidate-O5eRSE6e.js";import"./VertexSnappingCandidate-Cf6XYral.js";import"./PointSnappingHint-A6rcas4e.js";const f="graphics-collections";let r=class extends v{get updating(){return this._updatingHandles.updating}get _hasZ(){const e=this.view;return e!=null&&e.type==="3d"&&this.layerSource.layer.type!=="map-notes"}get _snappingElevationAligner(){const{view:e}=this,{layer:t}=this.layerSource,i=e!=null&&e.type==="3d";if(!i||t.type==="map-notes")return m();const s=async(o,n)=>(await x(e.whenLayerView(t),n)).elevationAlignPointsInFeatures(o,n);return m(i,{elevationInfo:t.elevationInfo,alignPointsInFeatures:s})}get _snappingElevationFilter(){const{view:e}=this,t=e!=null&&e.type==="3d"&&this.layerSource.layer.type!=="map-notes";return D(t)}get _symbologySnappingFetcher(){const{view:e}=this,{layer:t}=this.layerSource,i=e!=null&&e.type==="3d",s=this._extrudedPolygonSymbolsCount>0;return i&&t.type!=="map-notes"&&s?_(s,async(o,n)=>{const l=await e.whenLayerView(t);return c(n),l.queryForSymbologySnapping({candidates:o,spatialReference:e.spatialReference},n)}):_()}constructor(e){super(e),this.availability=1,this._sources={multipoint:null,point:null,polygon:null,polyline:null},this._loadedWkids=new Set,this._loadedWkts=new Set,this._pendingAdds=[],this._extrudedPolygonSymbolsCount=0,this._updatingHandles=new S,this._memoizedMakeGetGroundElevation=w(T)}destroy(){for(const e of this._pendingAdds)e.task.abort();this._pendingAdds.length=0,this._mapSources(e=>this._destroySource(e)),this._updatingHandles.destroy()}initialize(){this._updatingHandles.add(()=>this.getGraphicsLayers(),i=>{this._updatingHandles.removeHandles(f);for(const s of i)this._addMany(s.graphics.toArray()),this.addHandles([s.on("graphic-update",o=>this._onGraphicUpdate(o)),this._updatingHandles.addOnCollectionChange(()=>s.graphics,o=>this._onGraphicsChanged(o))],f)},y);const{view:e}=this,{layer:t}=this.layerSource;e!=null&&e.type==="3d"&&t.type!=="map-notes"&&e.elevationProvider&&this.addHandles([e.elevationProvider.on("elevation-change",({context:i})=>{b(i,t.elevationInfo)&&this._snappingElevationAligner.notifyElevationSourceChange()}),k(()=>t.elevationInfo,()=>this._snappingElevationAligner.notifyElevationSourceChange(),y),E(()=>t,["edits","apply-edits","graphic-update"],()=>this._symbologySnappingFetcher.notifySymbologyChange())])}async fetchCandidates(e,t){const{point:i,coordinateHelper:{spatialReference:s}}=e,o=await F(this._mapSources(d=>this._fetchCandidatesForSource(d,e,t)));c(t);const n=this._memoizedMakeGetGroundElevation(this.view,s),l=o.flat().map(d=>j(d,n));return C(i,l),l}async _fetchCandidatesForSource(e,t,i){var u;const s=P(t,((u=this.view)==null?void 0:u.type)??"2d"),o=await e.queryEngine.executeQueryForSnapping(s,i);c(i);const n=await this._snappingElevationAligner.alignCandidates(o.candidates,t.coordinateHelper.spatialReference,i);c(i);const l=await this._symbologySnappingFetcher.fetch(n,i);c(i);const d=l.length===0?n:[...n,...l];return this._snappingElevationFilter.filter(s,d)}refresh(){}_onGraphicUpdate(e){if(this.getGraphicsLayers().some(t=>t.graphics.includes(e.graphic)))switch(e.property){case"geometry":case"visible":this._remove(e.graphic),this._addMany([e.graphic])}}_onGraphicsChanged(e){for(const t of e.removed)this._remove(t);this._addMany(e.added)}_addMany(e){const t=[],i=new Map;for(const s of e)s.geometry!=null&&(this._needsInitializeProjection(s.geometry.spatialReference)?(t.push(s.geometry.spatialReference),i.set(s.uid,s)):this._add(s));this._createPendingAdd(t,i)}_createPendingAdd(e,t){if(!e.length)return;const i=A(async n=>{await z(e.map(l=>({source:l,dest:this.spatialReference})),{signal:n}),this._markLoadedSpatialReferences(e);for(const l of t.values())this._add(l)});this._updatingHandles.addPromise(i.promise);const s={task:i,graphics:t},o=()=>Z(this._pendingAdds,s);i.promise.then(o,o),this._pendingAdds.push(s)}_markLoadedSpatialReferences(e){for(const t of e){t.wkid!=null&&this._loadedWkids.add(t.wkid);const i=t.wkt2||t.wkt;i&&this._loadedWkts.add(i)}}_add(e){if(e.geometry==null||!e.visible)return;let t=e.geometry;if(t.type==="mesh")return;t.type==="extent"&&(t=G.fromExtent(t));const i=this._ensureSource(t.type);if(i==null)return;const s=this._createOptimizedFeature(e.uid,t);s!=null&&(i.featureStore.add(s),g(e.symbol)&&this._extrudedPolygonSymbolsCount++)}_needsInitializeProjection(e){if(e.wkid!=null&&this._loadedWkids.has(e.wkid))return!1;const t=e.wkt2||e.wkt;return(!t||!this._loadedWkts.has(t))&&!$(e,this.spatialReference)}_createOptimizedFeature(e,t){const i=H(L(t),this.spatialReference);if(!i)return null;const s=this._ensureGeometryHasZ(i),o=W(s,this._hasZ,!1);return new q(o,{[h]:e},null,e)}_ensureGeometryHasZ(e){if(!this._hasZ)return e;const t=s=>{for(;s.length<3;)s.push(0)},i=e.clone();switch(i.hasZ=!0,i.type){case"point":i.z=i.z??0;break;case"multipoint":i.points.forEach(t);break;case"polyline":i.paths.forEach(s=>s.forEach(t));break;case"polygon":i.rings.forEach(s=>s.forEach(t))}return i}_ensureSource(e){const t=this._sources[e];if(t!=null)return t;const i=this._createSource(e);return this._sources[e]=i,i}_createSource(e){const t=I.toJSON(e),i=this._hasZ,s=new J({geometryType:t,hasZ:i,hasM:!1});return{featureStore:s,queryEngine:new N({featureStore:s,fieldsIndex:R.fromLayerJSON({fields:[{name:h,type:"esriFieldTypeOID",alias:h}]}),geometryType:t,hasM:!1,hasZ:i,objectIdField:h,spatialReference:this.spatialReference,priority:O.SNAPPING,scheduler:this.view!=null&&this.view.type==="3d"?this.view.resourceController.scheduler:null}),type:e}}_remove(e){this._mapSources(t=>this._removeFromSource(t,e));for(const t of this._pendingAdds)t.graphics.delete(e.uid),t.graphics.size===0&&t.task.abort()}_removeFromSource(e,t){const i=t.uid;e.featureStore.has(i)&&(e.featureStore.removeById(t.uid),g(t.symbol)&&this._extrudedPolygonSymbolsCount--)}_destroySource(e){e.queryEngine.destroy(),this._sources[e.type]=null}_mapSources(e){const{point:t,polygon:i,polyline:s,multipoint:o}=this._sources,n=[];return t!=null&&n.push(e(t)),i!=null&&n.push(e(i)),s!=null&&n.push(e(s)),o!=null&&n.push(e(o)),n}};a([p()],r.prototype,"getGraphicsLayers",void 0),a([p({constructOnly:!0})],r.prototype,"layerSource",void 0),a([p({constructOnly:!0})],r.prototype,"spatialReference",void 0),a([p({constructOnly:!0})],r.prototype,"view",void 0),a([p({readOnly:!0})],r.prototype,"updating",null),a([p({readOnly:!0})],r.prototype,"availability",void 0),a([p()],r.prototype,"_hasZ",null),a([p()],r.prototype,"_snappingElevationAligner",null),a([p()],r.prototype,"_snappingElevationFilter",null),a([p()],r.prototype,"_symbologySnappingFetcher",null),a([p()],r.prototype,"_extrudedPolygonSymbolsCount",void 0),r=a([M("esri.views.interactive.snapping.featureSources.GraphicsSnappingSource")],r);const h="OBJECTID";export{r as GraphicsSnappingSource};
