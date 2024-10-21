import{eF as _,eC as j,s as I,b2 as P,bc as $,ak as R,I as L,U as A,ez as N,eD as T,eB as G,n as M,aN as Q,gM as J,gP as U,y as Z,ey as Y,bg as B}from"./index-CC72Q5ax.js";import{e as z,n as H}from"./date-DLgTylpo.js";import{t as K}from"./json-Wa8cmqdu.js";import{e as W}from"./OptimizedFeature-swgcyHeh.js";import{s as X}from"./OptimizedGeometry-C9mSZhHi.js";import{m as ee}from"./FeatureStore-CiDHtFAl.js";import{x as te}from"./queryUtils-DRc9hajA.js";import{V as ie}from"./QueryEngine-DlcJyi46.js";import{c as ne}from"./number-D3_xSS_j.js";import{a as se,u as re}from"./clientSideDefaults-BiDpWz7v.js";import"./featureConversionUtils-9H_Ovj7K.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./BoundsStore-B9AnjEoZ.js";import"./PooledRBush-DUL4VpNM.js";import"./timeSupport-CcSJQo1x.js";import"./optimizedFeatureQueryEngineAdapter-DrXZKbZy.js";import"./centroid-DdLmOD72.js";import"./WhereClause-Dmb3AZGA.js";import"./QueryEngineCapabilities-DjYb9CEb.js";import"./utils-Be7h0xeP.js";import"./utils-0y3tP9-x.js";import"./ClassBreaksDefinition-DnmfwumH.js";import"./SnappingCandidate-O5eRSE6e.js";import"./capabilities-Y9lFlGVh.js";function oe(s,t,e){var o,a;t=(o=_(t))==null?void 0:o.toLowerCase(),e=(a=_(e))==null?void 0:a.toLowerCase();const i=s.map(u=>u.toLowerCase()),n=t?s[i.indexOf(t)]:null,r=e?s[i.indexOf(e)]:null;return{longitudeFieldName:n||s[i.indexOf(le.find(u=>i.includes(u)))],latitudeFieldName:r||s[i.indexOf(ae.find(u=>i.includes(u)))]}}const ae=["lat","lat83","latitude","latitude83","latdecdeg","lat_dd","y","ycenter","point_y"],le=["lon","lng","lng83","long","long83","longitude","longitude83","longdecdeg","long_dd","x","xcenter","point_x"],E=/^\s*"([\S\s]*)"\s*$/,O=/""/g,S=`
`,ce=[","," ",";","|","	"];function*q(s,t,e){let i=0;for(;i<=s.length;){const n=s.indexOf(t,i),r=s.slice(i,n>-1?n:void 0);i+=r.length+t.length,e&&!r.trim()||(yield r)}}function C(s){const t=s.includes(`\r
`)?`\r
`:S;return q(s,t,!0)}function v(s,t){return q(s,t,!1)}function ue(s,t,e){s=s.trim(),t=t==null?void 0:t.trim();const i=[],n=Array.from(new Set([e==null?void 0:e.delimiter,...ce])).filter(o=>o!=null);for(const o of n){const a=w(s,o).length,u=w(t,o).length??a;a>1&&i.push({weight:Math.min(a,u),delimiter:o})}const r=i.sort(({weight:o},{weight:a})=>a-o).map(({delimiter:o})=>o);for(const o of r){const a=D(s,o).names,u=oe(a,e==null?void 0:e.longitudeField,e==null?void 0:e.latitudeField);if(u.longitudeFieldName&&u.latitudeFieldName)return{delimiter:o,locationInfo:u}}return{delimiter:r[0],locationInfo:null}}function*k(s,t,e,i=()=>Object.create(null)){const n=C(s);n.next();let r="",o="",a=0,u=i(),d=0;e:for(const h of n){const m=v(h,e);for(const y of m)if(r+=o+y,o="",a+=V(y),a%2==0){if(a>0){const g=E.exec(r);if(!g){u=i(),d=0,r="",a=0;continue e}u[t[d]]=g[1].replaceAll(O,'"'),d++}else u[t[d]]=r,d++;r="",a=0}else o=e;a===0?(yield u,u=i(),d=0):o=S}}function D(s,t){const e=w(s,t).filter(n=>n!=null),i=e.map(n=>_(n));for(let n=i.length-1;n>=0;n--)i[n]||(i.splice(n,1),e.splice(n,1));return{names:i,aliases:e}}function w(s,t){if(!(s!=null&&s.length))return[];const e=[];let i="",n="",r=0;const o=v(s,t);for(const a of o)if(i+=n+a,n="",r+=V(a),r%2==0){if(r>0){const u=E.exec(i);u&&e.push(u[1].replaceAll(O,'"'))}else e.push(i);i="",r=0}else n=t;return e}function V(s){let t=0,e=0;for(e=s.indexOf('"',e);e>=0;)t++,e=s.indexOf('"',e+1);return t}function de(s,t,e,i,n){const r=[],o=k(s,e,t),a=[];for(const u of o){if(a.length===10)break;a.push(u)}for(let u=0;u<e.length;u++){const d=e[u],h=i[u];if(d===n.longitudeFieldName||d===n.latitudeFieldName)r.push({name:d,type:"esriFieldTypeDouble",alias:h});else{let m;switch(fe(a.map(y=>y[d]))){case"integer":m="esriFieldTypeInteger";break;case"double":m="esriFieldTypeDouble";break;case"date":m="esriFieldTypeDate";break;default:m="esriFieldTypeString"}r.push({name:d,type:m,alias:h,length:j(m)})}}return r}function fe(s){if(!s.length)return"string";const t=/[^+\-.,0-9]/;return s.map(e=>{if(e!==""){if(!t.test(e)){let i=x(e);if(!isNaN(i))return/[.,]/.test(e)||!Number.isInteger(i)||i>214783647||i<-214783648?"double":"integer";if(e.includes("E")&&(i=Number(e),!Number.isNaN(i)||e.includes(",")&&(e=e.replace(",","."),i=Number(e),!Number.isNaN(i))))return"double"}return z(e)?"date":"string"}}).reduce((e,i)=>e===void 0?i:i===void 0?e:e===i?i:e==="string"||i==="string"?"string":e==="double"||i==="double"?"double":void 0)}const x=function(){const s=ne(),t=new RegExp("^"+s.regexp+"$"),e=new RegExp("["+s.group+"\\s\\xa0]","g"),i=s.factor;return n=>{const r=t.exec(n);if(s.factor=i,!r)return NaN;let o=r[1];if(!r[1]){if(!r[2])return NaN;o=r[2],s.factor*=-1}return o=o.replace(e,"").replace(s.decimal,"."),+o*s.factor}}();function me(s){return JSON.parse(JSON.stringify(s))}const pe=re("esriGeometryPoint"),he=["csv"],ye=[0,0];class ge{constructor(t,e){this.x=t,this.y=e}}class Qe{constructor(){this._queryEngine=null,this._snapshotFeatures=async t=>{const e=await this._fetch(t);return this._createFeatures(e)}}destroy(){var t;(t=this._queryEngine)==null||t.destroy(),this._queryEngine=null}async load(t,e={}){var u;this._loadOptions=t;const[i]=await Promise.all([this._fetch(e.signal),this._checkProjection((u=t==null?void 0:t.parsingOptions)==null?void 0:u.spatialReference)]),n=Fe(i,t);this._locationInfo=n.locationInfo,this._delimiter=n.delimiter,this._queryEngine=this._createQueryEngine(n);const r=await this._createFeatures(i);this._queryEngine.featureStore.addMany(r);const{fullExtent:o,timeExtent:a}=await this._queryEngine.fetchRecomputedExtents();if(n.layerDefinition.extent=o,a){const{start:d,end:h}=a;n.layerDefinition.timeInfo.timeExtent=[d,h]}return n}async applyEdits(){throw new I("csv-layer:editing-not-supported","applyEdits() is not supported on CSVLayer")}async queryFeatures(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(t,e.signal)}async queryFeatureCount(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(t,e.signal)}async queryObjectIds(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(t,e.signal)}async queryExtent(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(t,e.signal)}async querySnapping(t,e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(t,e.signal)}async refresh(t){var n;this._loadOptions.customParameters=t,(n=this._snapshotTask)==null||n.abort(),this._snapshotTask=P(this._snapshotFeatures),this._snapshotTask.promise.then(r=>{this._queryEngine.featureStore.clear(),r&&this._queryEngine.featureStore.addMany(r)},r=>{this._queryEngine.featureStore.clear(),$(r)||R.getLogger("esri.layers.CSVLayer").error(new I("csv-layer:refresh","An error occurred during refresh",{error:r}))}),await this._waitSnapshotComplete();const{fullExtent:e,timeExtent:i}=await this._queryEngine.fetchRecomputedExtents();return{extent:e,timeExtent:i}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _fetch(t){const{url:e,customParameters:i}=this._loadOptions;if(!e)throw new I("csv-layer:invalid-source","url not defined");const n=L(e);return(await A(n.path,{query:{...n.query,...i},responseType:"text",signal:t})).data}_createQueryEngine(t){const{objectIdField:e,fields:i,extent:n,timeInfo:r}=t.layerDefinition,o=new ee({geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1});return new ie({fieldsIndex:N.fromLayerJSON({fields:i,dateFieldsTimeReference:{timeZoneIANA:T}}),geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1,timeInfo:r,objectIdField:e,spatialReference:n.spatialReference||{wkid:4326},featureStore:o})}async _createFeatures(t){const{latitudeFieldName:e,longitudeFieldName:i}=this._locationInfo,{objectIdField:n,fieldsIndex:r,spatialReference:o}=this._queryEngine;let a=[];const u=[],d=r.fields.filter(l=>l.name!==n).map(l=>l.name);let h=0;const m={};for(const l of r.fields)if(l.type!=="esriFieldTypeOID"&&l.type!=="esriFieldTypeGlobalID"){const p=G(l);p!==void 0&&(m[l.name]=p)}const y=k(t,d,this._delimiter,se(m,n));for(const l of y){const p=this._parseCoordinateValue(l[e]),F=this._parseCoordinateValue(l[i]);if(F!=null&&p!=null&&!isNaN(p)&&!isNaN(F)){l[e]=p,l[i]=F;for(const c in l)if(c!==e&&c!==i)if(r.isDateField(c))l[c]=H(l[c]);else if(r.isNumericField(c)){const f=x(l[c]);isNaN(f)?l[c]=null:l[c]=f}else l[c]!=null&&(l[c]=me(l[c]));l[n]=h,h++,a.push(new ge(F,p)),u.push(l)}}if(!M({wkid:4326},o))if(Q(o))for(const l of a)[l.x,l.y]=J(l.x,l.y,ye);else a=U(K,a,Z.WGS84,o,null,null);const g=[];for(let l=0;l<a.length;l++){const{x:p,y:F}=a[l],c=u[l];c[n]=l+1,g.push(new W(new X([],[p,F]),c,null,c[n]))}return g}_parseCoordinateValue(t){if(t==null||t==="")return null;let e=x(t);return(isNaN(e)||Math.abs(e)>181)&&(e=parseFloat(t)),e}async _checkProjection(t){try{await te(Y,t)}catch{throw new I("csv-layer:projection-not-supported","Projection not supported")}}}function Fe(s,t){var l,p,F;const e=t.parsingOptions||{},i={delimiter:e.delimiter,layerDefinition:null,locationInfo:{latitudeFieldName:e.latitudeField,longitudeFieldName:e.longitudeField}},n=i.layerDefinition={name:B(t.url,he)||"csv",dateFieldsTimeReference:{timeZoneIANA:T},drawingInfo:pe,geometryType:"esriGeometryPoint",objectIdField:null,fields:[],timeInfo:e.timeInfo,extent:{xmin:Number.POSITIVE_INFINITY,ymin:Number.POSITIVE_INFINITY,xmax:Number.NEGATIVE_INFINITY,ymax:Number.NEGATIVE_INFINITY,spatialReference:e.spatialReference||{wkid:4326}}},r=C(s),o=(l=r.next().value)==null?void 0:l.trim(),a=(p=r.next().value)==null?void 0:p.trim();if(!o)throw new I("csv-layer:empty-csv","CSV is empty",{csv:s});const{delimiter:u,locationInfo:d}=ue(o,a,e);if(!u)throw new I("csv-layer:invalid-delimiter","Unable to detect the delimiter from CSV",{firstLine:o,secondLine:a,parsingOptions:e});if(!d)throw new I("csv-layer:location-fields-not-found","Unable to identify latitude and longitude fields from the CSV file",{firstLine:o,secondLine:a,parsingOptions:e});i.locationInfo=d,i.delimiter=u;const{names:h,aliases:m}=D(o,u),y=de(s,i.delimiter,h,m,i.locationInfo);if((F=e.fields)!=null&&F.length){const c=new N(e.fields);for(const f of y){const b=c.get(f.name);b&&Object.assign(f,b)}}if(!y.some(c=>c.type==="esriFieldTypeOID"&&(n.objectIdField=c.name,!0))){const c={name:"__OBJECTID",alias:"__OBJECTID",type:"esriFieldTypeOID",editable:!1,nullable:!1};n.objectIdField=c.name,y.unshift(c)}n.fields=y;const g=new N(n.fields);if(i.locationInfo&&(i.locationInfo.latitudeFieldName=g.get(i.locationInfo.latitudeFieldName).name,i.locationInfo.longitudeFieldName=g.get(i.locationInfo.longitudeFieldName).name),n.timeInfo){const c=n.timeInfo;if(c.startTimeField){const f=g.get(c.startTimeField);f?(c.startTimeField=f.name,f.type="esriFieldTypeDate"):c.startTimeField=null}if(c.endTimeField){const f=g.get(c.endTimeField);f?(c.endTimeField=f.name,f.type="esriFieldTypeDate"):c.endTimeField=null}if(c.trackIdField){const f=g.get(c.trackIdField);c.trackIdField=f?f.name:null}c.startTimeField||c.endTimeField||(n.timeInfo=null)}return i}export{Qe as default};
