import{ec as O,s as I,ed as Q,ef as Z,ee as A,eg as k,eh as b,eb as S,a0 as v}from"./index-C5AN6gIb.js";import{e as w,n as C,t as P}from"./featureConversionUtils-C3NW8rek.js";import{t as $,n as G}from"./objectIdUtils-4dd1rf9p.js";import{m as L}from"./FeatureStore-Cbjw9jbD.js";import{x as E,j as _}from"./timeSupport-DCAQeUtx.js";import{$ as z}from"./QueryEngine-zQzW3jdH.js";import{i as W,o as B,c as H}from"./clientSideDefaults-C1erWadG.js";import{j as N,f as g,p as T,d as j,y as D}from"./sourceUtils-BZjIng5-.js";import"./OptimizedFeature-7juV2tZm.js";import"./OptimizedGeometry-vU5jWBvU.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./BoundsStore-U2eIEVMR.js";import"./PooledRBush-BI9lRTDf.js";import"./SnappingCandidate-xj0n6h40.js";import"./centroid-DdLmOD72.js";import"./json-Wa8cmqdu.js";import"./WhereClause-CwdWzaSi.js";import"./QueryEngineCapabilities-CTDe3LlQ.js";import"./utils-DKaxd0pF.js";import"./utils-BUKYl_Lx.js";import"./ClassBreaksDefinition-DkBi6sY8.js";import"./date-M6n_RqpC.js";const U=S,J={xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:S},K={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};function V(h){return v(h)?h.z!=null:!!h.hasZ}function X(h){return v(h)?h.m!=null:!!h.hasM}class Ee{constructor(){this._queryEngine=null,this._nextObjectId=null}destroy(){var e;(e=this._queryEngine)==null||e.destroy(),this._queryEngine=this._createDefaultAttributes=null}async load(e){const i=[],{features:a}=e,n=this._inferLayerProperties(a,e.fields),l=e.fields||[],u=e.hasM!=null?e.hasM:!!n.hasM,m=e.hasZ!=null?e.hasZ:!!n.hasZ,p=!e.spatialReference&&!n.spatialReference,d=p?U:e.spatialReference||n.spatialReference,y=p?J:null,c=e.geometryType||n.geometryType,o=!c;let t=e.objectIdField||n.objectIdField,r=e.timeInfo;const f=new O(l);if(!o&&(p&&i.push({name:"feature-layer:spatial-reference-not-found",message:"Spatial reference not provided or found in features. Defaults to WGS84"}),!c))throw new I("feature-layer:missing-property","geometryType not set and couldn't be inferred from the provided features");if(!t)throw new I("feature-layer:missing-property","objectIdField not set and couldn't be found in the provided fields");if(n.objectIdField&&t!==n.objectIdField&&(i.push({name:"feature-layer:duplicated-oid-field",message:`Provided objectIdField "${t}" doesn't match the field name "${n.objectIdField}", found in the provided fields`}),t=n.objectIdField),t&&!n.objectIdField){const s=f.get(t);s?(t=s.name,s.type="esriFieldTypeOID",s.editable=!1,s.nullable=!1):l.unshift({alias:t,name:t,type:"esriFieldTypeOID",editable:!1,nullable:!1})}for(const s of l){if(s.name==null&&(s.name=s.alias),s.alias==null&&(s.alias=s.name),!s.name)throw new I("feature-layer:invalid-field-name","field name is missing",{field:s});if(s.name===t&&(s.type="esriFieldTypeOID"),!Q.jsonValues.includes(s.type))throw new I("feature-layer:invalid-field-type",`invalid type for field "${s.name}"`,{field:s});s.length==null&&(s.length=Z(s))}const F={};for(const s of l)if(s.type!=="esriFieldTypeOID"&&s.type!=="esriFieldTypeGlobalID"){const q=A(s);q!==void 0&&(F[s.name]=q)}if(r){if(r.startTimeField){const s=f.get(r.startTimeField);s?(r.startTimeField=s.name,s.type="esriFieldTypeDate"):r.startTimeField=null}if(r.endTimeField){const s=f.get(r.endTimeField);s?(r.endTimeField=s.name,s.type="esriFieldTypeDate"):r.endTimeField=null}if(r.trackIdField){const s=f.get(r.trackIdField);s?r.trackIdField=s.name:(r.trackIdField=null,i.push({name:"feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:r}}))}r.startTimeField||r.endTimeField||(i.push({name:"feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing or invalid",details:{timeInfo:r}}),r=null)}const x=f.dateFields.length?{timeZoneIANA:e.dateFieldsTimeZone??k}:null;this._createDefaultAttributes=W(F,t);const R={warnings:i,featureErrors:[],layerDefinition:{...K,drawingInfo:B(c),templates:H(F),extent:y,geometryType:c,objectIdField:t,fields:l,hasZ:m,hasM:u,timeInfo:r,dateFieldsTimeReference:x},assignedObjectIds:{}};if(this._queryEngine=new z({fieldsIndex:O.fromLayerJSON({fields:l,timeInfo:r,dateFieldsTimeReference:x}),geometryType:c,hasM:u,hasZ:m,objectIdField:t,spatialReference:d,featureStore:new L({geometryType:c,hasM:u,hasZ:m}),timeInfo:r,cacheSpatialQueries:!0}),!(a!=null&&a.length))return this._nextObjectId=$,R;const M=G(t,a);return this._nextObjectId=M+1,await E(a,d),this._loadInitialFeatures(R,a)}async applyEdits(e){const{spatialReference:i,geometryType:a}=this._queryEngine;return await Promise.all([N(i,a),E(e.adds,i),E(e.updates,i)]),this._applyEdits(e)}queryFeatures(e,i={}){return this._queryEngine.executeQuery(e,i.signal)}queryFeatureCount(e,i={}){return this._queryEngine.executeQueryForCount(e,i.signal)}queryObjectIds(e,i={}){return this._queryEngine.executeQueryForIds(e,i.signal)}queryExtent(e,i={}){return this._queryEngine.executeQueryForExtent(e,i.signal)}querySnapping(e,i={}){return this._queryEngine.executeQueryForSnapping(e,i.signal)}_inferLayerProperties(e,i){let a,n,l=null,u=null,m=null;for(const p of e){const d=p.geometry;if(d!=null&&(l||(l=b(d)),u||(u=d.spatialReference),a==null&&(a=V(d)),n==null&&(n=X(d)),l&&u&&a!=null&&n!=null))break}if(i&&i.length){let p=null;i.some(d=>{const y=d.type==="esriFieldTypeOID",c=!d.type&&d.name&&d.name.toLowerCase()==="objectid";return p=d,y||c})&&(m=p.name)}return{geometryType:l,spatialReference:u,objectIdField:m,hasM:n,hasZ:a}}async _loadInitialFeatures(e,i){const{geometryType:a,hasM:n,hasZ:l,objectIdField:u,spatialReference:m,featureStore:p,fieldsIndex:d}=this._queryEngine,y=[];for(const t of i){if(t.uid!=null&&(e.assignedObjectIds[t.uid]=-1),t.geometry&&a!==b(t.geometry)){e.featureErrors.push(g("Incorrect geometry type."));continue}const r=this._createDefaultAttributes(),f=T(d,r,t.attributes,!0);f?e.featureErrors.push(f):(this._assignObjectId(r,t.attributes,!0),t.attributes=r,t.uid!=null&&(e.assignedObjectIds[t.uid]=t.attributes[u]),t.geometry!=null&&(t.geometry=_(t.geometry,t.geometry.spatialReference,m)),y.push(t))}p.addMany(w([],y,a,l,n,u));const{fullExtent:c,timeExtent:o}=await this._queryEngine.fetchRecomputedExtents();if(e.layerDefinition.extent=c,o){const{start:t,end:r}=o;e.layerDefinition.timeInfo.timeExtent=[t,r]}return e}async _applyEdits(e){const{adds:i,updates:a,deletes:n}=e,l={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(i!=null&&i.length&&this._applyAddEdits(l,i),a!=null&&a.length&&this._applyUpdateEdits(l,a),n==null?void 0:n.length){for(const p of n)l.deleteResults.push(j(p));this._queryEngine.featureStore.removeManyById(n)}const{fullExtent:u,timeExtent:m}=await this._queryEngine.fetchRecomputedExtents();return{extent:u,timeExtent:m,featureEditResults:l}}_applyAddEdits(e,i){const{addResults:a}=e,{geometryType:n,hasM:l,hasZ:u,objectIdField:m,spatialReference:p,featureStore:d,fieldsIndex:y}=this._queryEngine,c=[];for(const o of i){if(o.geometry&&n!==b(o.geometry)){a.push(g("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),r=T(y,t,o.attributes);if(r)a.push(r);else{if(this._assignObjectId(t,o.attributes),o.attributes=t,o.uid!=null){const f=o.attributes[m];e.uidToObjectId[o.uid]=f}if(o.geometry!=null){const f=o.geometry.spatialReference??p;o.geometry=_(D(o.geometry,f),f,p)}c.push(o),a.push(j(o.attributes[m]))}}d.addMany(w([],c,n,u,l,m))}_applyUpdateEdits({updateResults:e},i){const{geometryType:a,hasM:n,hasZ:l,objectIdField:u,spatialReference:m,featureStore:p,fieldsIndex:d}=this._queryEngine;for(const y of i){const{attributes:c,geometry:o}=y,t=c==null?void 0:c[u];if(t==null){e.push(g(`Identifier field ${u} missing`));continue}if(!p.has(t)){e.push(g(`Feature with object id ${t} missing`));continue}const r=C(p.getFeature(t),a,l,n);if(o!=null){if(a!==b(o)){e.push(g("Incorrect geometry type."));continue}const f=o.spatialReference??m;r.geometry=_(D(o,f),f,m)}if(c){const f=T(d,r.attributes,c);if(f){e.push(f);continue}}p.add(P(r,a,l,n,u)),e.push(j(t))}}_assignObjectId(e,i,a=!1){const n=this._queryEngine.objectIdField;a&&i&&isFinite(i[n])?e[n]=i[n]:e[n]=this._nextObjectId++}}export{Ee as default};
