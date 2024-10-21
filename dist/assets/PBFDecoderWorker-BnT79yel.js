import{hc as d,f as p,eD as c,hm as f,hD as m}from"./index-C5AN6gIb.js";import{g as _,z as y,f as g}from"./dehydratedFeatures-zLOmthQT.js";import{p as P,r as C}from"./featureConversionUtils-C3NW8rek.js";import{t as b}from"./pbfQueryUtils-S9bERzlu.js";import"./OptimizedFeature-7juV2tZm.js";import"./OptimizedGeometry-vU5jWBvU.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./pbf-BQAkLotO.js";function G(i,t){return t}function u(i,t,e,r){switch(e){case 0:return h(i,t+r,0);case 1:return i.originPosition==="lowerLeft"?h(i,t+r,1):M(i,t+r,1)}}function l(i,t,e,r){return e===2?h(i,t,2):u(i,t,e,r)}function A(i,t,e,r){return e===2?h(i,t,3):u(i,t,e,r)}function v(i,t,e,r){return e===3?h(i,t,3):l(i,t,e,r)}function h({translate:i,scale:t},e,r){return i[r]+e*t[r]}function M({translate:i,scale:t},e,r){return i[r]-e*t[r]}class R{constructor(t){this._options=t,this.geometryTypes=["point","multipoint","polyline","polygon"],this._previousCoordinate=[0,0],this._transform=null,this._applyTransform=G,this._lengths=[],this._currentLengthIndex=0,this._toAddInCurrentPath=0,this._vertexDimension=0,this._coordinateBuffer=null,this._coordinateBufferPtr=0,this._attributesConstructor=class{},this._missingAttributes=[]}get missingAttributes(){return this._missingAttributes}createFeatureResult(){return new _}finishFeatureResult(t){if(this._options.applyTransform&&(t.transform=null),this._attributesConstructor=class{},this._coordinateBuffer=null,this._lengths.length=0,!t.hasZ)return;const e=d(t.geometryType,this._options.sourceSpatialReference,t.spatialReference);if(e!=null)for(const r of t.features)e(r.geometry)}createSpatialReference(){return new p}addField(t,e){t.fields.push(c.fromJSON(e));const r=t.fields.map(s=>s.name);this._attributesConstructor=function(){for(const s of r)this[s]=null}}addFeature(t,e){const r=this._options.maxStringAttributeLength,s=this._options.maxStringAttributeFields;y(e.attributes,s,r,n=>{const o=e.attributes[t.objectIdFieldName];o!=null&&this._missingAttributes.push({objectId:o,attribute:n})}),t.features.push(e)}addQueryGeometry(t,e){const{queryGeometry:r,queryGeometryType:s}=e,n=P(r.clone(),r,!1,!1,this._transform),o=C(n,s,!1,!1);let a=null;switch(s){case"esriGeometryPoint":a="point";break;case"esriGeometryPolygon":a="polygon";break;case"esriGeometryPolyline":a="polyline";break;case"esriGeometryMultipoint":a="multipoint"}o.type=a,t.queryGeometryType=s,t.queryGeometry=o}prepareFeatures(t){switch(this._transform=t.transform??null,this._options.applyTransform&&t.transform&&(this._applyTransform=this._deriveApplyTransform(t)),this._vertexDimension=2,t.hasZ&&this._vertexDimension++,t.hasM&&this._vertexDimension++,t.geometryType){case"point":this.addCoordinate=(e,r,s)=>this.addCoordinatePoint(e,r,s),this.createGeometry=e=>this.createPointGeometry(e);break;case"polygon":this.addCoordinate=(e,r,s)=>this._addCoordinatePolygon(e,r,s),this.createGeometry=e=>this._createPolygonGeometry(e);break;case"polyline":this.addCoordinate=(e,r,s)=>this._addCoordinatePolyline(e,r,s),this.createGeometry=e=>this._createPolylineGeometry(e);break;case"multipoint":this.addCoordinate=(e,r,s)=>this._addCoordinateMultipoint(e,r,s),this.createGeometry=e=>this._createMultipointGeometry(e);break;case"mesh":case"extent":break;default:f(t.geometryType)}}createFeature(){return this._lengths.length=0,this._currentLengthIndex=0,this._previousCoordinate[0]=0,this._previousCoordinate[1]=0,new g(m(),null,new this._attributesConstructor)}allocateCoordinates(){const t=this._lengths.reduce((e,r)=>e+r,0);this._coordinateBuffer=new Float64Array(t*this._vertexDimension),this._coordinateBufferPtr=0}addLength(t,e){this._lengths.length===0&&(this._toAddInCurrentPath=e),this._lengths.push(e)}createPointGeometry(t){const e={type:"point",x:0,y:0,spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM};return e.hasZ&&(e.z=0),e.hasM&&(e.m=0),e}addCoordinatePoint(t,e,r){const s=this._transform?this._applyTransform(this._transform,e,r,0):e;if(s!=null)switch(r){case 0:t.x=s;break;case 1:t.y=s;break;case 2:t.hasZ?t.z=s:t.m=s;break;case 3:t.m=s}}_transformPathLikeValue(t,e){let r=0;return e<=1&&(r=this._previousCoordinate[e],this._previousCoordinate[e]+=t),this._transform?this._applyTransform(this._transform,t,e,r):t}_addCoordinatePolyline(t,e,r){this._dehydratedAddPointsCoordinate(t.paths,e,r)}_addCoordinatePolygon(t,e,r){this._dehydratedAddPointsCoordinate(t.rings,e,r)}_addCoordinateMultipoint(t,e,r){r===0&&t.points.push([]);const s=this._transformPathLikeValue(e,r);t.points[t.points.length-1].push(s)}_createPolygonGeometry(t){return{type:"polygon",rings:[[]],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}_createPolylineGeometry(t){return{type:"polyline",paths:[[]],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}_createMultipointGeometry(t){return{type:"multipoint",points:[],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}_dehydratedAddPointsCoordinate(t,e,r){r===0&&this._toAddInCurrentPath--==0&&(t.push([]),this._toAddInCurrentPath=this._lengths[++this._currentLengthIndex]-1,this._previousCoordinate[0]=0,this._previousCoordinate[1]=0);const s=this._transformPathLikeValue(e,r),n=t[t.length-1],o=this._coordinateBuffer;if(o){if(r===0){const a=this._coordinateBufferPtr*Float64Array.BYTES_PER_ELEMENT;n.push(new Float64Array(o.buffer,a,this._vertexDimension))}o[this._coordinateBufferPtr++]=s}}_deriveApplyTransform(t){const{hasZ:e,hasM:r}=t;return e&&r?v:e?l:r?A:u}}class T{_parseFeatureQuery(t){var n;const e=new R(t.options),r=b(t.buffer,e),s={...r,spatialReference:(n=r.spatialReference)==null?void 0:n.toJSON(),fields:r.fields?r.fields.map(o=>o.toJSON()):void 0,missingAttributes:e.missingAttributes};return Promise.resolve(s)}}function D(){return new T}export{D as default};
