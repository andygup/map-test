const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/uploadAssets-DsbLlEqS.js","assets/index-C5AN6gIb.js","assets/index-NV7R-tPD.css","assets/External-DFED46rE.js","assets/progressUtils-D49OrrLs.js","assets/convertMeshVertexSpace-SLZHA7RX.js","assets/MeshVertexAttributes-BKMquezO.js","assets/vertexSpaceConversion-Dzki7RJ-.js","assets/meshVertexSpaceUtils-CUbXRTTC.js","assets/MeshLocalVertexSpace-CTAY8X8I.js","assets/vec3-CiIgb4WS.js","assets/projection-DyzoT35-.js","assets/DoubleArray-Bc_s-eRk.js","assets/BufferView-CNNe45YH.js","assets/vec4-DO8SGWMS.js"])))=>i.map(i=>d[i]);
import{G as P,g$ as Q,bn as V,h0 as G,e7 as D,h1 as $,K as T,s as S,bf as z,d0 as H,d$ as j,aE as O,aF as A,h2 as Z,fF as W,b9 as X,al as J,h3 as v,D as f,bg as M,h4 as Y,h5 as B,h6 as K,h7 as ee,h8 as te,aO as ae,f6 as se,g5 as re,V as N,_ as L,z as C,bZ as ie,h9 as ne,g0 as oe,aC as ue,cr as le,f as de,ha as ce,aU as pe,aL as he}from"./index-C5AN6gIb.js";import{i as ye}from"./MeshLocalVertexSpace-CTAY8X8I.js";import{a as me}from"./meshVertexSpaceUtils-CUbXRTTC.js";import{v as fe}from"./External-DFED46rE.js";import{N as ge}from"./MeshTransform-XUwO-bLO.js";import{isFeatureIdentifierArrayWithGlobalId as we,isFeatureIdentifierArrayWithObjectId as be}from"./editingSupport-CQxJG2oj.js";import{o as Ie}from"./clientSideDefaults-C1erWadG.js";import{x as Re}from"./QueryTask-Bn17AehK.js";import{s as Se}from"./executeQueryJSON-wSHCtr-x.js";import"./axisAngleDegrees-Bq-bfGg9.js";import"./QueryEngineCapabilities-CTDe3LlQ.js";import"./executeForIds-BZUPskyd.js";import"./query-D9E5mc5-.js";import"./pbfQueryUtils-S9bERzlu.js";import"./pbf-BQAkLotO.js";import"./OptimizedGeometry-vU5jWBvU.js";import"./OptimizedFeature-7juV2tZm.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./executeQueryPBF-Dmq124oG.js";import"./featureConversionUtils-C3NW8rek.js";async function U(t,e,a){const{geometry:s}=e,r={...e.attributes};if(a!=null&&(s==null?void 0:s.type)==="mesh"){const{transformFieldRoles:i}=a,{origin:o,spatialReference:n,vertexSpace:u}=s,l=s.transform??new ge,d=u.type==="local",c=t.spatialReference,b=c.isGeographic,I=P(c,n),h=Q(n,c)&&V(n,c);if(!(d&&b&&h||!d&&!b&&I))return null;const p=G(o,n,c);if(p==null)return null;if(r[i.originX]=p.x,r[i.originY]=p.y,r[i.originZ]=p.z??0,l!=null){const{translation:R,scale:y,rotation:g}=l,m=d?1:D(n)/D(c);r[i.translationX]=R[0]*m,r[i.translationY]=R[2]*m,r[i.translationZ]=-R[1]*m,r[i.scaleX]=y[0],r[i.scaleY]=y[2],r[i.scaleZ]=y[1],r[i.rotationX]=g[0],r[i.rotationY]=g[2],r[i.rotationZ]=-g[1],r[i.rotationDeg]=g[3]}return{attributes:r}}return s==null?{attributes:r}:s.type==="mesh"||s.type==="extent"?null:{geometry:s.toJSON(),attributes:r}}async function qe(t,e){const a=await Promise.all((e.addAttachments??[]).map(i=>k(t,i))),s=await Promise.all((e.updateAttachments??[]).map(i=>k(t,i))),r=e.deleteAttachments??[];return a.length||s.length||r.length?{adds:a,updates:s,deletes:[...r]}:null}async function k(t,e){var d;const{feature:a,attachment:s}=e,{globalId:r,name:i,contentType:o,data:n,uploadId:u}=s,l={globalId:r};if(a&&("attributes"in a?l.parentGlobalId=(d=a.attributes)==null?void 0:d[t.globalIdField]:a.globalId&&(l.parentGlobalId=a.globalId)),u)l.uploadId=u;else if(n){const c=await $(n);c&&(l.contentType=c.mediaType,l.data=c.data),n instanceof File&&(l.name=n.name)}return i&&(l.name=i),o&&(l.contentType=o),l}function _e(t,e,a){if(!e||e.length===0)return[];if(a&&we(e))return e.map(r=>r.globalId);if(be(e))return e.map(r=>r.objectId);const s=a?t.globalIdField:t.objectIdField;return s?e.map(r=>r.getAttribute(s)):[]}function Ee(t){var r,i,o;const e=t==null?void 0:t.assetMaps;if(e){for(const n of e.addResults)n.success||T.getLogger("esri.layers.graphics.sources.support.sourceUtils").error(`Failed to map asset to feature with globalId ${n.globalId}.`);for(const n of e.updateResults)n.success||T.getLogger("esri.layers.graphics.sources.support.sourceUtils").error(`Failed to map asset to feature with globalId ${n.globalId}.`)}const a=t==null?void 0:t.attachments,s={addFeatureResults:((r=t==null?void 0:t.addResults)==null?void 0:r.map(w))??[],updateFeatureResults:((i=t==null?void 0:t.updateResults)==null?void 0:i.map(w))??[],deleteFeatureResults:((o=t==null?void 0:t.deleteResults)==null?void 0:o.map(w))??[],addAttachmentResults:a!=null&&a.addResults?a.addResults.map(w):[],updateAttachmentResults:a!=null&&a.updateResults?a.updateResults.map(w):[],deleteAttachmentResults:a!=null&&a.deleteResults?a.deleteResults.map(w):[]};return t!=null&&t.editMoment&&(s.editMoment=t.editMoment),s}function w(t){const e=t.success===!0?null:t.error||{code:void 0,description:void 0};return{objectId:t.objectId,globalId:t.globalId,error:e?new S("feature-layer-source:edit-failure",e.description,{code:e.code}):null}}function x(t,e){return new z({attributes:t.attributes,geometry:H({...t.geometry,spatialReference:e})})}function Oe(t,e){var a,s,r;return{adds:((a=t==null?void 0:t.adds)==null?void 0:a.map(i=>x(i,e)))||[],updates:((s=t==null?void 0:t.updates)==null?void 0:s.map(i=>({original:x(i[0],e),current:x(i[1],e)})))||[],deletes:((r=t==null?void 0:t.deletes)==null?void 0:r.map(i=>x(i,e)))||[],spatialReference:e}}function Fe(t){const e=t.details.raw,a=+e.code,s=+e.extendedCode;return a===500&&(s===-2147217144||s===-2147467261)}const Ae=new j({originalAndCurrentFeatures:"original-and-current-features",none:"none"}),ve=new j({Started:"published",Publishing:"publishing",Stopped:"unavailable"});let q=class extends Z{constructor(t){super(t),this.type="feature-layer",this.supportedSourceTypes=new Set(["Feature Layer","Oriented Imagery Layer","Table","Catalog Layer"]),this.refresh=W(async()=>{var s,r;await this.load();const e=(s=this.sourceJSON.editingInfo)==null?void 0:s.lastEditDate;if(e==null)return{dataChanged:!0,updates:{}};try{await this._fetchService(null)}catch{return{dataChanged:!0,updates:{}}}const a=e!==((r=this.sourceJSON.editingInfo)==null?void 0:r.lastEditDate);return{dataChanged:a,updates:a?{editingInfo:this.sourceJSON.editingInfo,extent:this.sourceJSON.extent}:null}}),this._ongoingAssetUploads=new Map}load(t){const e=this.layer.sourceJSON,a=this._fetchService(e,{...t}).then(()=>this.layer.setUserPrivileges(this.sourceJSON.serviceItemId,t)).then(()=>this._ensureLatestMetadata(t));return this.addResolvingPromise(a),Promise.resolve(this)}initialize(){this.addHandles([X(()=>{const t=this.layer;return t&&"lastEditsEventDate"in t?t.lastEditsEventDate:null},t=>this._handleLastEditsEventChange(t))])}destroy(){this._removeEditInterceptor()}get queryTask(){var l;const{capabilities:t,parsedUrl:e,gdbVersion:a,spatialReference:s,fieldsIndex:r}=this.layer,i="infoFor3D"in this.layer?this.layer.infoFor3D:null,o="dynamicDataSource"in this.layer?this.layer.dynamicDataSource:null,n=J("featurelayer-pbf")&&(t==null?void 0:t.query.supportsFormatPBF)&&i==null,u=((l=t==null?void 0:t.operations)==null?void 0:l.supportsQueryAttachments)??!1;return new Re({url:e.path,pbfSupported:n,fieldsIndex:r,infoFor3D:i,dynamicDataSource:o,gdbVersion:a,sourceSpatialReference:s,queryAttachmentsSupported:u})}async addAttachment(t,e){await this.load();const{layer:a}=this;await v(a,"editing");const s=t.attributes[a.objectIdField],r=a.parsedUrl.path+"/"+s+"/addAttachment",i=this._getLayerRequestOptions(),o=this._getFormDataForAttachment(e,i.query);try{const n=await f(r,{body:o});return w(n.data.addAttachmentResult)}catch(n){throw this._createAttachmentErrorResult(s,n)}}async updateAttachment(t,e,a){await this.load();const{layer:s}=this;await v(s,"editing");const r=t.attributes[s.objectIdField],i=s.parsedUrl.path+"/"+r+"/updateAttachment",o=this._getLayerRequestOptions({query:{attachmentId:e}}),n=this._getFormDataForAttachment(a,o.query);try{const u=await f(i,{body:n});return w(u.data.updateAttachmentResult)}catch(u){throw this._createAttachmentErrorResult(r,u)}}async applyEdits(t,e){var _,F;await this.load();const{layer:a}=this;await v(a,"editing");const s="infoFor3D"in a?a.infoFor3D:null,r=s!=null,i=r||((e==null?void 0:e.globalIdUsed)??!1),o=r?await this._uploadMeshesAndGetAssetMapEditsJSON(t):null,n=((_=t.addFeatures)==null?void 0:_.map(E=>U(this.layer,E,s)))??[],u=(await Promise.all(n)).filter(M),l=((F=t.updateFeatures)==null?void 0:F.map(E=>U(this.layer,E,s)))??[],d=(await Promise.all(l)).filter(M),c=_e(this.layer,t.deleteFeatures,i);Y(u,d,a.spatialReference);const b=await qe(this.layer,t),I=a.capabilities.editing.supportsAsyncApplyEdits&&r,h=(e==null?void 0:e.gdbVersion)||a.gdbVersion,p={gdbVersion:h,rollbackOnFailure:e==null?void 0:e.rollbackOnFailureEnabled,useGlobalIds:i,returnEditMoment:e==null?void 0:e.returnEditMoment,usePreviousEditMoment:e==null?void 0:e.usePreviousEditMoment,async:I};await B(this.layer.url,h,!0);const R=K(this.layer.url,h||null);if(await ee(a.url,h,a.historicMoment))throw new S("feature-layer-source:historic-version","Editing a historic version is not allowed");e!=null&&e.returnServiceEditsOption?(p.edits=JSON.stringify([{id:a.layerId,adds:u.length?u:null,updates:d.length?d:null,deletes:c.length?c:null,attachments:b,assetMaps:o}]),p.returnServiceEditsOption=Ae.toJSON(e==null?void 0:e.returnServiceEditsOption),p.returnServiceEditsInSourceSR=e==null?void 0:e.returnServiceEditsInSourceSR):(p.adds=u.length?JSON.stringify(u):null,p.updates=d.length?JSON.stringify(d):null,p.deletes=c.length?i?JSON.stringify(c):c.join(","):null,p.attachments=b&&JSON.stringify(b),p.assetMaps=o!=null?JSON.stringify(o):void 0);const y=this._getLayerRequestOptions({method:"post",query:p});R&&(y.authMode="immediate",y.query.returnEditMoment=!0,y.query.sessionId=te);const g=e!=null&&e.returnServiceEditsOption?a.url:a.parsedUrl.path;let m;try{m=I?await this._asyncApplyEdits(g+"/applyEdits",y):await f(g+"/applyEdits",y)}catch(E){if(!Fe(E))throw E;y.authMode="immediate",m=I?await this._asyncApplyEdits(g+"/applyEdits",y):await f(g+"/applyEdits",y)}return this._createEditsResult(m)}async deleteAttachments(t,e){await this.load();const{layer:a}=this;await v(a,"editing");const s=t.attributes[a.objectIdField],r=a.parsedUrl.path+"/"+s+"/deleteAttachments";try{return(await f(r,this._getLayerRequestOptions({query:{attachmentIds:e.join(",")},method:"post"}))).data.deleteAttachmentResults.map(w)}catch(i){throw this._createAttachmentErrorResult(s,i)}}fetchRecomputedExtents(t={}){const e=t.signal;return this.load({signal:e}).then(async()=>{const a=this._getLayerRequestOptions({...t,query:{returnUpdates:!0}}),{layerId:s,url:r}=this.layer,{data:i}=await f(`${r}/${s}`,a),{id:o,extent:n,fullExtent:u,timeExtent:l}=i,d=n||u;return{id:o,fullExtent:d&&ae.fromJSON(d),timeExtent:l&&se.fromJSON({start:l[0],end:l[1]})}})}async queryAttachments(t,e={}){await this.load();const a=this._getLayerRequestOptions(e);return this.queryTask.executeAttachmentQuery(t,a)}async queryFeatures(t,e){var s;await this.load();const a=await this.queryTask.execute(t,{...e,query:this._createRequestQueryOptions(e)});return(s=t.outStatistics)!=null&&s.length&&a.features.length&&a.features.forEach(r=>{var o;const i=r.attributes;(o=t.outStatistics)==null||o.forEach(({outStatisticFieldName:n})=>{if(n){const u=n.toLowerCase();u&&u in i&&n!==u&&(i[n]=i[u],delete i[u])}})}),a}async queryFeaturesJSON(t,e){return await this.load(),this.queryTask.executeJSON(t,{...e,query:this._createRequestQueryOptions(e)})}async queryObjectIds(t,e){return await this.load(),this.queryTask.executeForIds(t,{...e,query:this._createRequestQueryOptions(e)})}async queryFeatureCount(t,e){return await this.load(),this.queryTask.executeForCount(t,{...e,query:this._createRequestQueryOptions(e)})}async queryExtent(t,e){return await this.load(),this.queryTask.executeForExtent(t,{...e,query:this._createRequestQueryOptions(e)})}async queryRelatedFeatures(t,e){return await this.load(),this.queryTask.executeRelationshipQuery(t,{...e,query:this._createRequestQueryOptions(e)})}async queryRelatedFeaturesCount(t,e){return await this.load(),this.queryTask.executeRelationshipQueryForCount(t,{...e,query:this._createRequestQueryOptions(e)})}async queryTopFeatures(t,e){return await this.load(),this.queryTask.executeTopFeaturesQuery(t,{...e,query:this._createRequestQueryOptions(e)})}async queryTopObjectIds(t,e){return await this.load(),this.queryTask.executeForTopIds(t,{...e,query:this._createRequestQueryOptions(e)})}async queryTopExtents(t,e){return await this.load(),this.queryTask.executeForTopExtents(t,{...e,query:this._createRequestQueryOptions(e)})}async queryTopCount(t,e){return await this.load(),this.queryTask.executeForTopCount(t,{...e,query:this._createRequestQueryOptions(e)})}async fetchPublishingStatus(){if(!re(this.layer.url))return"unavailable";const t=N(this.layer.url,"status"),e=await f(t,{query:{f:"json"}});return ve.fromJSON(e.data.status)}async uploadAssets(t,e){const{uploadAssets:a}=await L(()=>import("./uploadAssets-DsbLlEqS.js"),__vite__mapDeps([0,1,2,3,4]));return a(t,{layer:this.layer,ongoingUploads:this._ongoingAssetUploads},e)}_handleLastEditsEventChange(t){var s,r,i,o;const e=this.layer;if(t==null||!("capabilities"in e)||!("effectiveCapabilities"in e)||!(!((r=(s=e.capabilities)==null?void 0:s.operations)!=null&&r.supportsEditing)&&((o=(i=e.effectiveCapabilities)==null?void 0:i.operations)!=null&&o.supportsEditing)))return;const a=e.url;a!=null&&("layerId"in e&&N(a,e.layerId.toString()),this._getOrCreateEditInterceptor(a).before=n=>{const u=n.requestOptions.method??"auto";if(u==="auto"||u==="head"){const l=n.requestOptions.query??{};l._ts=t.getTime(),n.requestOptions.query=l}})}_getOrCreateEditInterceptor(t){return this._editInterceptor==null&&(this._editInterceptor={urls:t},C.request.internalInterceptors.push(this._editInterceptor)),this._editInterceptor}_removeEditInterceptor(){this._editInterceptor!=null&&(ie(C.request.internalInterceptors,this._editInterceptor),this._editInterceptor=null)}async _asyncApplyEdits(t,e){const a=(await f(t,e)).data.statusUrl;for(;;){const s=(await f(a,{query:{f:"json"},responseType:"json"})).data;switch(s.status){case"Completed":return f(s.resultUrl,{query:{f:"json"},responseType:"json"});case"CompletedWithErrors":throw new S("async-applyEdits-failed","asynchronous applyEdits call failed.");case"Failed ImportChanges":case"InProgress":case"Pending":case"ExportAttachments":case"ExportChanges":case"ExportingData":case"ExportingSnapshot":case"ImportAttachments":case"ProvisioningReplica":case"UnRegisteringReplica":break;default:throw new S("async-applyEdits-failed","asynchronous applyEdits call failed (undefined response status)")}await ne(xe)}}_createRequestQueryOptions(t){const e={...this.layer.customParameters,token:this.layer.apiKey,...t==null?void 0:t.query};return this.layer.datesInUnknownTimezone&&(e.timeReferenceUnknownClient=!0),e}async _fetchService(t,e){if(!t){const s={};J("featurelayer-advanced-symbols")&&(s.returnAdvancedSymbols=!0),e!=null&&e.cacheBust&&(s._ts=Date.now());const{data:r}=await f(this.layer.parsedUrl.path,this._getLayerRequestOptions({query:s,signal:e==null?void 0:e.signal}));t=r}this.sourceJSON=await this._patchServiceJSON(t,e==null?void 0:e.signal);const a=t.type;if(!this.supportedSourceTypes.has(a))throw new S("feature-layer-source:unsupported-type",`Source type "${a}" is not supported`)}async _patchServiceJSON(t,e){var a;if(t.type!=="Table"&&t.geometryType&&!((a=t==null?void 0:t.drawingInfo)!=null&&a.renderer)&&!t.defaultSymbol){const s=Ie(t.geometryType).renderer;oe("drawingInfo.renderer",s,t)}if(t.geometryType==="esriGeometryMultiPatch"&&t.infoFor3D&&(t.geometryType="mesh"),t.extent==null)try{const{data:s}=await f(this.layer.url,this._getLayerRequestOptions({signal:e}));s.spatialReference&&(t.extent={xmin:0,ymin:0,xmax:0,ymax:0,spatialReference:s.spatialReference})}catch(s){ue(s)}return t}async _ensureLatestMetadata(t){if(this.layer.userHasUpdateItemPrivileges&&this.sourceJSON.cacheMaxAge>0)return this._fetchService(null,{...t,cacheBust:!0})}async _uploadMeshesAndGetAssetMapEditsJSON(t){const{addAssetFeatures:e}=t;if(!(e!=null&&e.length)||await this._areAllAssetsAlreadyMapped(e))return null;const a=t.addFeatures.filter(i=>i.geometry);if(e.length!==a.length+t.updateFeatures.length)throw new S("feature-layer-source:unsupported-mesh-edits","Mixing attribute only edits with mesh geometry edits is not currently supported");const s=new Array,r=new Map;for(const i of e){const{geometry:o}=i,{vertexSpace:n}=o;if(me(n))s.push(o);else{const u=o.anchor,{convertMeshVertexSpace:l}=await L(async()=>{const{convertMeshVertexSpace:c}=await import("./convertMeshVertexSpace-SLZHA7RX.js");return{convertMeshVertexSpace:c}},__vite__mapDeps([5,1,2,6,7,8,9,10,11,12,13,14])),d=await l(o,new ye({origin:[u.x,u.y,u.z??0]}));r.set(d,o),i.geometry=d,s.push(d)}}await this.uploadAssets(s);for(const[i,o]of r)o.addExternalSources(i.metadata.externalSources.items);return{adds:this._getAssetMapEditsJSON(e),updates:[],deletes:[]}}_getAssetMapEditsJSON(t){const e=new Array,a=this.layer.globalIdField,s=this.layer.parsedUrl;for(const r of t){const i=r.geometry,{metadata:o}=i,n=o.getExternalSourcesOnService(s),u=r.getAttribute(a);if(n.length===0){T.getLogger(this).error(`Skipping feature ${u}. The mesh it is associated with has not been uploaded to the service and cannot be mapped to it.`);continue}const{source:l}=n.find(fe)??n[0];for(const d of l)d.parts.length===1?e.push({globalId:le(),parentGlobalId:u,assetName:d.assetName,assetHash:d.parts[0].partHash,flags:[]}):T.getLogger(this).error(`Skipping asset ${d.assetName}. It does not have exactly one part, so we cannot map it to a feature.`)}return e}_createEditsResult(t){const e=t.data,{layerId:a}=this.layer,s=[];let r=null;if(Array.isArray(e))for(const o of e)s.push({id:o.id,editedFeatures:o.editedFeatures}),o.id===a&&(r={addResults:o.addResults??[],updateResults:o.updateResults??[],deleteResults:o.deleteResults??[],attachments:o.attachments,editMoment:o.editMoment});else r=e;const i=Ee(r);if(s.length>0){i.editedFeatureResults=[];for(const o of s){const{editedFeatures:n}=o,u=n!=null&&n.spatialReference?new de(n.spatialReference):null;i.editedFeatureResults.push({layerId:o.id,editedFeatures:Oe(n,u)})}}return i}_createAttachmentErrorResult(t,e){var r;const a=((r=e.details.messages)==null?void 0:r[0])||e.message,s=e.details.httpStatus||e.details.messageCode;return{objectId:t,globalId:null,error:new S("feature-layer-source:attachment-failure",a,{code:s})}}_getFormDataForAttachment(t,e){const a=t instanceof FormData?t:t&&t.elements?new FormData(t):null;if(a)for(const s in e){const r=e[s];r!=null&&(a.set?a.set(s,r):a.append(s,r))}return a}_getLayerRequestOptions(t={}){const{layer:e,layer:{parsedUrl:a,gdbVersion:s}}=this;return{...t,query:{gdbVersion:s,layer:"dynamicDataSource"in e&&e.dynamicDataSource?JSON.stringify({source:e.dynamicDataSource}):void 0,...a.query,f:"json",...this._createRequestQueryOptions(t)},responseType:"json"}}async _areAllAssetsAlreadyMapped(t){const{layer:e}=this,{globalIdField:a,parsedUrl:s}=e,r="infoFor3D"in e?e.infoFor3D:null;if(r==null||a==null)return!1;const i=ce(r);if(i==null)return!1;const o=N(s.path,`../${i.id}`),n=new Array;for(const h of t){if(!(h.geometry.metadata.getExternalSourcesOnService(s).length>0))return!1;n.push(h)}const u=n.map(h=>h.getAttribute(a)).filter(M);if(u.length===0)return!1;const{assetMapFieldRoles:{parentGlobalId:l,assetHash:d}}=r,c=new pe({where:`${l} IN (${u.map(h=>`'${h}'`)})`,outFields:[d,l],returnGeometry:!1}),b=await Se(o,c),{features:I}=b;return I.length!==0&&!n.some(h=>{const p=h.getAttribute(a);if(!p)return!0;const{metadata:R}=h.geometry,y=I.filter(m=>m.getAttribute(l)===p);if(y.length===0)return!0;const g=y.map(m=>m.getAttribute(d));return R.getExternalSourcesOnService(s).flatMap(({source:m})=>m.flatMap(_=>_.parts.map(F=>F.partHash))).some(m=>g.every(_=>m!==_))})}};O([A()],q.prototype,"type",void 0),O([A({constructOnly:!0})],q.prototype,"layer",void 0),O([A({constructOnly:!0})],q.prototype,"supportedSourceTypes",void 0),O([A({readOnly:!0})],q.prototype,"queryTask",null),q=O([he("esri.layers.graphics.sources.FeatureLayerSource")],q);const xe=1e3,Ye=q;export{Ye as default};
