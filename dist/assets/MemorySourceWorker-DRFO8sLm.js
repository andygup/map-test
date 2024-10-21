import{ez as O,s as I,eA as Q,eC as Z,eB as A,eD as C,eE as F,ey as S,ay as v}from"./index-CC72Q5ax.js";import{e as w,n as k,t as P}from"./featureConversionUtils-9H_Ovj7K.js";import{t as $,n as G}from"./objectIdUtils-4dd1rf9p.js";import{m as z}from"./FeatureStore-CiDHtFAl.js";import{x as E,j as _}from"./queryUtils-DRc9hajA.js";import{V as L}from"./QueryEngine-DlcJyi46.js";import{a as W,u as B,l as H}from"./clientSideDefaults-BiDpWz7v.js";import{j as U,f as g,p as T,d as j,y as D}from"./sourceUtils-DqqDCy3M.js";import"./OptimizedFeature-swgcyHeh.js";import"./OptimizedGeometry-C9mSZhHi.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./BoundsStore-B9AnjEoZ.js";import"./PooledRBush-DUL4VpNM.js";import"./timeSupport-CcSJQo1x.js";import"./optimizedFeatureQueryEngineAdapter-DrXZKbZy.js";import"./centroid-DdLmOD72.js";import"./json-Wa8cmqdu.js";import"./WhereClause-Dmb3AZGA.js";import"./QueryEngineCapabilities-DjYb9CEb.js";import"./utils-Be7h0xeP.js";import"./utils-0y3tP9-x.js";import"./ClassBreaksDefinition-DnmfwumH.js";import"./SnappingCandidate-O5eRSE6e.js";import"./capabilities-Y9lFlGVh.js";import"./date-DLgTylpo.js";const N=S,V={xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:S},J={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!0,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0,supportsQueryWithCacheHint:!0}};function K(h){return v(h)?h.z!=null:!!h.hasZ}function X(h){return v(h)?h.m!=null:!!h.hasM}class je{constructor(){this._queryEngine=null,this._nextObjectId=null}destroy(){var e;(e=this._queryEngine)==null||e.destroy(),this._queryEngine=this._createDefaultAttributes=null}async load(e){const i=[],{features:a}=e,n=this._inferLayerProperties(a,e.fields),l=e.fields||[],d=e.hasM!=null?e.hasM:!!n.hasM,m=e.hasZ!=null?e.hasZ:!!n.hasZ,p=!e.spatialReference&&!n.spatialReference,u=p?N:e.spatialReference||n.spatialReference,y=p?V:null,c=e.geometryType||n.geometryType,o=!c;let t=e.objectIdField||n.objectIdField,r=e.timeInfo;const f=new O(l);if(!o&&(p&&i.push({name:"feature-layer:spatial-reference-not-found",message:"Spatial reference not provided or found in features. Defaults to WGS84"}),!c))throw new I("feature-layer:missing-property","geometryType not set and couldn't be inferred from the provided features");if(!t)throw new I("feature-layer:missing-property","objectIdField not set and couldn't be found in the provided fields");if(n.objectIdField&&t!==n.objectIdField&&(i.push({name:"feature-layer:duplicated-oid-field",message:`Provided objectIdField "${t}" doesn't match the field name "${n.objectIdField}", found in the provided fields`}),t=n.objectIdField),t&&!n.objectIdField){const s=f.get(t);s?(t=s.name,s.type="esriFieldTypeOID",s.editable=!1,s.nullable=!1):l.unshift({alias:t,name:t,type:"esriFieldTypeOID",editable:!1,nullable:!1})}for(const s of l){if(s.name==null&&(s.name=s.alias),s.alias==null&&(s.alias=s.name),!s.name)throw new I("feature-layer:invalid-field-name","field name is missing",{field:s});if(s.name===t&&(s.type="esriFieldTypeOID"),!Q.jsonValues.includes(s.type))throw new I("feature-layer:invalid-field-type",`invalid type for field "${s.name}"`,{field:s});s.length==null&&(s.length=Z(s))}const b={};for(const s of l)if(s.type!=="esriFieldTypeOID"&&s.type!=="esriFieldTypeGlobalID"){const q=A(s);q!==void 0&&(b[s.name]=q)}if(r){if(r.startTimeField){const s=f.get(r.startTimeField);s?(r.startTimeField=s.name,s.type="esriFieldTypeDate"):r.startTimeField=null}if(r.endTimeField){const s=f.get(r.endTimeField);s?(r.endTimeField=s.name,s.type="esriFieldTypeDate"):r.endTimeField=null}if(r.trackIdField){const s=f.get(r.trackIdField);s?r.trackIdField=s.name:(r.trackIdField=null,i.push({name:"feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:r}}))}r.startTimeField||r.endTimeField||(i.push({name:"feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing or invalid",details:{timeInfo:r}}),r=null)}const x=f.dateFields.length?{timeZoneIANA:e.dateFieldsTimeZone??C}:null;this._createDefaultAttributes=W(b,t);const R={warnings:i,featureErrors:[],layerDefinition:{...J,drawingInfo:B(c),templates:H(b),extent:y,geometryType:c,objectIdField:t,fields:l,hasZ:m,hasM:d,timeInfo:r,dateFieldsTimeReference:x},assignedObjectIds:{}};if(this._queryEngine=new L({fieldsIndex:O.fromLayerJSON({fields:l,timeInfo:r,dateFieldsTimeReference:x}),geometryType:c,hasM:d,hasZ:m,objectIdField:t,spatialReference:u,featureStore:new z({geometryType:c,hasM:d,hasZ:m}),timeInfo:r}),!(a!=null&&a.length))return this._nextObjectId=$,R;const M=G(t,a);return this._nextObjectId=M+1,await E(a,u),this._loadInitialFeatures(R,a)}async applyEdits(e){const{spatialReference:i,geometryType:a}=this._queryEngine;return await Promise.all([U(i,a),E(e.adds,i),E(e.updates,i)]),this._applyEdits(e)}queryFeatures(e,i={}){return this._queryEngine.executeQuery(e,i.signal)}queryFeatureCount(e,i={}){return this._queryEngine.executeQueryForCount(e,i.signal)}queryObjectIds(e,i={}){return this._queryEngine.executeQueryForIds(e,i.signal)}queryExtent(e,i={}){return this._queryEngine.executeQueryForExtent(e,i.signal)}querySnapping(e,i={}){return this._queryEngine.executeQueryForSnapping(e,i.signal)}_inferLayerProperties(e,i){let a,n,l=null,d=null,m=null;for(const p of e){const u=p.geometry;if(u!=null&&(l||(l=F(u)),d||(d=u.spatialReference),a==null&&(a=K(u)),n==null&&(n=X(u)),l&&d&&a!=null&&n!=null))break}if(i&&i.length){let p=null;i.some(u=>{const y=u.type==="esriFieldTypeOID",c=!u.type&&u.name&&u.name.toLowerCase()==="objectid";return p=u,y||c})&&(m=p.name)}return{geometryType:l,spatialReference:d,objectIdField:m,hasM:n,hasZ:a}}async _loadInitialFeatures(e,i){const{geometryType:a,hasM:n,hasZ:l,objectIdField:d,spatialReference:m,featureStore:p,fieldsIndex:u}=this._queryEngine,y=[];for(const t of i){if(t.uid!=null&&(e.assignedObjectIds[t.uid]=-1),t.geometry&&a!==F(t.geometry)){e.featureErrors.push(g("Incorrect geometry type."));continue}const r=this._createDefaultAttributes(),f=T(u,r,t.attributes,!0);f?e.featureErrors.push(f):(this._assignObjectId(r,t.attributes,!0),t.attributes=r,t.uid!=null&&(e.assignedObjectIds[t.uid]=t.attributes[d]),t.geometry!=null&&(t.geometry=_(t.geometry,t.geometry.spatialReference,m)),y.push(t))}p.addMany(w([],y,a,l,n,d));const{fullExtent:c,timeExtent:o}=await this._queryEngine.fetchRecomputedExtents();if(e.layerDefinition.extent=c,o){const{start:t,end:r}=o;e.layerDefinition.timeInfo.timeExtent=[t,r]}return e}async _applyEdits(e){const{adds:i,updates:a,deletes:n}=e,l={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(i!=null&&i.length&&this._applyAddEdits(l,i),a!=null&&a.length&&this._applyUpdateEdits(l,a),n==null?void 0:n.length){for(const p of n)l.deleteResults.push(j(p));this._queryEngine.featureStore.removeManyById(n)}const{fullExtent:d,timeExtent:m}=await this._queryEngine.fetchRecomputedExtents();return{extent:d,timeExtent:m,featureEditResults:l}}_applyAddEdits(e,i){const{addResults:a}=e,{geometryType:n,hasM:l,hasZ:d,objectIdField:m,spatialReference:p,featureStore:u,fieldsIndex:y}=this._queryEngine,c=[];for(const o of i){if(o.geometry&&n!==F(o.geometry)){a.push(g("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),r=T(y,t,o.attributes);if(r)a.push(r);else{if(this._assignObjectId(t,o.attributes),o.attributes=t,o.uid!=null){const f=o.attributes[m];e.uidToObjectId[o.uid]=f}if(o.geometry!=null){const f=o.geometry.spatialReference??p;o.geometry=_(D(o.geometry,f),f,p)}c.push(o),a.push(j(o.attributes[m]))}}u.addMany(w([],c,n,d,l,m))}_applyUpdateEdits({updateResults:e},i){const{geometryType:a,hasM:n,hasZ:l,objectIdField:d,spatialReference:m,featureStore:p,fieldsIndex:u}=this._queryEngine;for(const y of i){const{attributes:c,geometry:o}=y,t=c==null?void 0:c[d];if(t==null){e.push(g(`Identifier field ${d} missing`));continue}if(!p.has(t)){e.push(g(`Feature with object id ${t} missing`));continue}const r=k(p.getFeature(t),a,l,n);if(o!=null){if(a!==F(o)){e.push(g("Incorrect geometry type."));continue}const f=o.spatialReference??m;r.geometry=_(D(o,f),f,m)}if(c){const f=T(u,r.attributes,c);if(f){e.push(f);continue}}p.add(P(r,a,l,n,d)),e.push(j(t))}}_assignObjectId(e,i,a=!1){const n=this._queryEngine.objectIdField;a&&i&&isFinite(i[n])?e[n]=i[n]:e[n]=this._nextObjectId++}}export{je as default};
