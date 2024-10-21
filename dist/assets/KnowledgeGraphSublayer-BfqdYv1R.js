import{d0 as _e,s as G,D as ke,fV as F,aE as l,aF as y,aL as he,b2 as ve,K as ae,aU as B,eC as Ne,eb as ne,bj as ye,aO as ue,lx as ce,bl as Me,i5 as Ce,hT as je,hU as Oe,eT as xe,hS as qe,eU as Ae,eV as Fe,e_ as Ge,eZ as Qe,ly as Ue,eD as pe,eE as P,hV as Je,bd as le,f as Pe,hX as Be,aT as Ye,aK as Ve,bv as C,lz as He,lA as We,lB as Ke,lC as ze,hY as Ze,hZ as Xe,h_ as et,fy as tt,ii as nt,ij as it,h$ as rt,lD as ot,i0 as st,bc as at,i1 as pt,aJ as lt,lE as dt,f2 as yt,fb as ut}from"./index-C5AN6gIb.js";import{m as ht}from"./FeatureStore-Cbjw9jbD.js";import{$ as ct}from"./QueryEngine-zQzW3jdH.js";import{l as mt,o as de}from"./clientSideDefaults-C1erWadG.js";import{o as ft}from"./featureConversionUtils-C3NW8rek.js";import{e as me}from"./OptimizedFeature-7juV2tZm.js";import{T as ee,r as Se}from"./knowledgeGraphService-F3y6S6aw.js";import{s as Y}from"./GraphQueryStreaming-BgW5Tt5E.js";const gt="ESRI__DESTINATION_ID",Tt="ESRI__ORIGIN_ID";class q{constructor(){this._featureLookup=new Map}static getInstance(){return q.instance||(q.instance=new q),q.instance}static resetInstance(){q.instance&&(q.instance=null)}deleteFromStore(t){t.forEach(i=>{this._featureLookup.delete(i)})}readFromStoreByList(t){const i=[];return t.forEach(n=>{const s=this.readFromStoreById(n);s&&i.push(s)}),i}readFromStoreById(t){return this._featureLookup.get(t)??null}writeToStore(t,i,n){const s=[];return t.forEach(r=>{if(!(r!=null&&r.id))return;r.properties||(r.properties=[]);let o,a=null;if(n&&r.properties[n]&&(a=ft(r.properties[n])),"originId"in r&&"destinationId"in r&&(r.properties[Tt]=r.originId,r.properties[gt]=r.destinationId),r.properties[i]=r.id,r.id&&this._featureLookup.has(r.id)&&this._featureLookup.get(r.id).attributes){const p=this._featureLookup.get(r.id),c=JSON.parse(JSON.stringify(Object.assign(p.attributes,r.properties)));n&&r.properties[n]&&(c[n]=_e(r.properties[n])),o=new me(a?JSON.parse(JSON.stringify(a)):p!=null&&p.geometry?JSON.parse(JSON.stringify(p.geometry)):null,c,null,r.properties[i])}else o=new me(a?JSON.parse(JSON.stringify(a)):null,r.properties,null,r.properties[i]);this._featureLookup.set(r.id,o),s.push(o)}),s}}var re;(function(e){e.ELEMENTUID="ELEMENTUID",e.TYPENAME="TYPENAME"})(re||(re={}));re.ELEMENTUID,re.TYPENAME;var fe,ge;(function(e){e[e.ELEMENTUID=0]="ELEMENTUID",e[e.TYPENAME=1]="TYPENAME"})(fe||(fe={})),function(e){e[e.ELEMENTUID=0]="ELEMENTUID",e[e.TYPENAME=1]="TYPENAME",e[e.FROMUID=2]="FROMUID",e[e.TOUID=3]="TOUID"}(ge||(ge={}));var Te,be,we,oe;(function(e){e[e.featureResult=0]="featureResult",e[e.countResult=1]="countResult",e[e.idsResult=2]="idsResult"})(Te||(Te={})),function(e){e[e.upperLeft=0]="upperLeft",e[e.lowerLeft=1]="lowerLeft"}(be||(be={})),function(e){e[e.sqlTypeBigInt=0]="sqlTypeBigInt",e[e.sqlTypeBinary=1]="sqlTypeBinary",e[e.sqlTypeBit=2]="sqlTypeBit",e[e.sqlTypeChar=3]="sqlTypeChar",e[e.sqlTypeDate=4]="sqlTypeDate",e[e.sqlTypeDecimal=5]="sqlTypeDecimal",e[e.sqlTypeDouble=6]="sqlTypeDouble",e[e.sqlTypeFloat=7]="sqlTypeFloat",e[e.sqlTypeGeometry=8]="sqlTypeGeometry",e[e.sqlTypeGUID=9]="sqlTypeGUID",e[e.sqlTypeInteger=10]="sqlTypeInteger",e[e.sqlTypeLongNVarchar=11]="sqlTypeLongNVarchar",e[e.sqlTypeLongVarbinary=12]="sqlTypeLongVarbinary",e[e.sqlTypeLongVarchar=13]="sqlTypeLongVarchar",e[e.sqlTypeNChar=14]="sqlTypeNChar",e[e.sqlTypeNVarChar=15]="sqlTypeNVarChar",e[e.sqlTypeOther=16]="sqlTypeOther",e[e.sqlTypeReal=17]="sqlTypeReal",e[e.sqlTypeSmallInt=18]="sqlTypeSmallInt",e[e.sqlTypeSqlXml=19]="sqlTypeSqlXml",e[e.sqlTypeTime=20]="sqlTypeTime",e[e.sqlTypeTimestamp=21]="sqlTypeTimestamp",e[e.sqlTypeTimestamp2=22]="sqlTypeTimestamp2",e[e.sqlTypeTinyInt=23]="sqlTypeTinyInt",e[e.sqlTypeVarbinary=24]="sqlTypeVarbinary",e[e.sqlTypeVarchar=25]="sqlTypeVarchar"}(we||(we={})),function(e){e[e.OID_ARRAY=0]="OID_ARRAY",e[e.GLOBALID_ARRAY=1]="GLOBALID_ARRAY",e[e.STRING_ARRAY=2]="STRING_ARRAY",e[e.IDENTIFIER_ARRAY=3]="IDENTIFIER_ARRAY"}(oe||(oe={}));function bt(e){if(!e.spatialReference.isWGS84)throw new G("knowledge-graph:layer-support-utils","The extentToInBoundsRings function only supports WGS84 spatial references.");return e.clone().normalize().map(t=>[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]])}async function jt(e,t){var r,o;const i=[],n=new Map,s=[];if((r=t.dataModel)!=null&&r.relationshipTypes)for(const a of t.dataModel.relationshipTypes)a.name&&n.set(a.name,[]);for(const a of e)n.has(a.typeName)&&((o=n.get(a.typeName))==null||o.push(a.id));for(const[a,p]of n){if(p.length<1)continue;const c=new Y({openCypherQuery:`MATCH (n)-[r:${a}]->(m) WHERE id(r) in $ids RETURN id(n), labels(n)[0], id(m), labels(m)[0]`,bindParameters:{ids:p}});s.push(ee(t,c).then(async b=>{const g=b.resultRowsStream.getReader();for(;;){const{done:w,value:S}=await g.read();if(w)break;for(const R of S)i.push({id:R[0],typeName:R[1]}),i.push({id:R[2],typeName:R[3]})}}))}return await Promise.all(s),i}async function Ot(e,t){t??(t=!1);const i={generateAllSublayers:t,namedTypeDefinitions:new Map};return await It(e).then(n=>{Dt(n,i)}),i}async function xt(e){const t=await Se(),i=new t.MapOfObjectIdentifierSets;wt(i,t,e);const n=new t.MapOfObjectIdentifierSetsEncoder;try{n.set_map_of_identifier_sets(i),n.encode();const s=n.get_encoding_result();if(s.error.error_code!==0)throw new G("knowledge-graph:layer-support-utils",s.error.error_message);const r=structuredClone(s.get_byte_buffer());return n.delete(),r}finally{i.delete()}}function wt(e,t,i){for(const[n,s]of i.namedTypeDefinitions){if(!s.members||s.useAllData)continue;const r=s.members.keys(),o=new t.GlobalIdArray,a=new t.ObjectIdentifierSet;for(const p of r)o.add_globalid(p);a.set_globalid_array(o),o.delete(),e.put_identifier_set(n,a),a.delete()}return e}async function It(e){const t=await ke(e,{responseType:"array-buffer"}),i=await t.data;return Et(new Uint8Array(i))}async function Et(e){const t=new(await Se()).MapOfObjectIdentifierSetsDecoder,i=t.decode(new Uint8Array(e)),n=new Map;if(i.error_code!==0)throw new G("knowledge-graph:layer-support-utils",i.error_message);const s=t.get_map_of_identifier_sets(),r=s.keys,o=r.size();for(let a=0;a<o;a++){const p=r.get(a),c=s.query_identifier_set(p),b=[];if(c.id_array_type.value===oe.GLOBALID_ARRAY){const g=c.get_globalid_array(),w=g.count();for(let S=0;S<w;S++)b.push(g.get_globalid_at(S))}else{if(c.id_array_type.value!==oe.IDENTIFIER_ARRAY)throw new G("knowledge-graph:layer-support-utils","Tried to encode an unexpected ID Array type.");{const g=c.get_identifier_array(),w=g.count();for(let S=0;S<w;S++)b.push(g.get_identifier_at(S).toString())}}n.set(p,b)}return t.delete(),n}function Dt(e,t){for(const[i,n]of e){const s=F(t.namedTypeDefinitions,i,()=>({useAllData:!1,members:new Map}));for(const r of n)s.members.has(r)||s.members.set(r,{id:r})}return t}const x="ESRI__ID",qt="ESRI__ORIGIN_ID",At="ESRI__DESTINATION_ID",Le="ESRI__LAYOUT_GEOMETRY",Ie="ESRI__AGGREGATION_COUNT";let O=class extends ve{constructor(e){var i,n,s;super(e),this._processingCacheUpdatesLookup=new Map,this.knowledgeGraph=null,this.inclusionModeDefinition={generateAllSublayers:!0,namedTypeDefinitions:new Map},this.entityTypeNames=new Set,this.relationshipTypeNames=new Set,this.geographicLookup=new Map,this.sublayerCaches=new Map,this.nodeConnectionsLookup=new Map,this.relationshipConnectionsLookup=new Map,this.memberIdTypeLookup=new Map;const t=new Map;(i=e.knowledgeGraph.dataModel.entityTypes)==null||i.forEach(r=>{var o,a;r.name&&(t.set(r.name,"entity"),this._processingCacheUpdatesLookup.set(r.name,[]),e.inclusionModeDefinition&&!((o=e.inclusionModeDefinition)!=null&&o.generateAllSublayers)||this.entityTypeNames.add(r.name),(a=r.properties)==null||a.forEach(p=>{p.geometryType&&p.geometryType!=="esriGeometryNull"&&this.geographicLookup.set(r.name,{name:p.name??"",geometryType:p.geometryType})}))}),(n=e.knowledgeGraph.dataModel.relationshipTypes)==null||n.forEach(r=>{var o,a;r.name&&(t.set(r.name,"relationship"),this._processingCacheUpdatesLookup.set(r.name,[]),e.inclusionModeDefinition&&!((o=e.inclusionModeDefinition)!=null&&o.generateAllSublayers)||this.relationshipTypeNames.add(r.name),(a=r.properties)==null||a.forEach(p=>{p.geometryType&&p.geometryType!=="esriGeometryNull"&&this.geographicLookup.set(r.name,{name:p.name??"",geometryType:p.geometryType})}))}),(s=e.inclusionModeDefinition)==null||s.namedTypeDefinitions.forEach((r,o)=>{var p,c;if(t.get(o)==="entity")this.entityTypeNames.add(o);else{if(t.get(o)!=="relationship")return ae.getLogger(this).warn(`A named type, ${o}, was in the inclusion list that wasn't in the data model and will be removed`),void((p=e.inclusionModeDefinition)==null?void 0:p.namedTypeDefinitions.delete(o));this.relationshipTypeNames.add(o)}const a=new Map;(c=r.members)==null||c.forEach(b=>{F(this.memberIdTypeLookup,b.id,()=>new Set).add(o);const g=this.getById(b.id);g&&a.set(b.id,g)}),this.sublayerCaches.set(o,a)})}addToLayer(e){e.forEach(({typeName:t,id:i})=>{if(!this.inclusionModeDefinition)throw new G("knowledge-graph:layer-data-manager","You cannot add to a layer's exclusion list if it was not created with an exclusion list originally");if(this.inclusionModeDefinition.namedTypeDefinitions.has(t)){if(this.inclusionModeDefinition.namedTypeDefinitions.has(t)){const n=this.inclusionModeDefinition.namedTypeDefinitions.get(t);n.members||(n.members=new Map),n.members.set(i,{id:i}),F(this.memberIdTypeLookup,i,()=>new Set).add(t)}}else{const n=new Map;n.set(i,{id:i}),this.inclusionModeDefinition.namedTypeDefinitions.set(t,{useAllData:!1,members:n}),F(this.memberIdTypeLookup,i,()=>new Set).add(t)}})}getById(e){return q.getInstance().readFromStoreById(e)}async getData(e,t,i){var s,r;if(t.objectType.name&&((s=this.inclusionModeDefinition)!=null&&s.namedTypeDefinitions)&&this.inclusionModeDefinition.namedTypeDefinitions.size>0&&!this.inclusionModeDefinition.namedTypeDefinitions.has(t.objectType.name))return[];let n;if(n=e||new B({where:"1=1",outFields:["*"]}),t.parentCompositeLayer.type==="link-chart"){const o=t.parentCompositeLayer,a=this._processingCacheUpdatesLookup.get(t.objectType.name??""),p=n.outFields;p&&p.length===1&&p[0]===x&&n.where==="1=1"||await Promise.all(a??[]);const c=this.sublayerCaches.has(t.objectType.name??"")?Array.from((r=this.sublayerCaches.get(t.objectType.name))==null?void 0:r.values()):[],b=[];return c.forEach(g=>{this.relationshipTypeNames.has(t.objectType.name)?g.geometry=o.relationshipLinkChartDiagramLookup.get(g.attributes[t.objectIdField]):g.geometry=o.entityLinkChartDiagramLookup.get(g.attributes[t.objectIdField]),g.attributes[Le]=g.geometry,b.push(g)}),b}return this.retrieveDataFromService(n,t,i)}async getConnectedRecordIds(e,t){const i=[];let n="";const s=[],r=new Map;if(e.forEach(o=>{var a;if(this.memberIdTypeLookup.has(o))for(const p of this.memberIdTypeLookup.get(o)){if(!this.entityTypeNames.has(p))return;r.has(p)?(a=r.get(p))==null||a.push(o):r.set(p,[o])}}),t&&(t==null?void 0:t.length)!==0){for(const o of t)n=n+o+"|";n=n.slice(0,-1)}return r.forEach((o,a)=>{let p;p=t&&(t==null?void 0:t.length)!==0?`MATCH (n:${a})-[r:${n}]-(m) WHERE id(n) IN $ids RETURN id(r), type(r), id(m), labels(m)[0]`:`MATCH (n:${a})-[r]-(m) WHERE id(n) IN $ids RETURN id(r), type(r), id(m), labels(m)[0]`;const c=new Promise(b=>{(async()=>{const g=(await ee(this.knowledgeGraph,new Y({openCypherQuery:p,bindParameters:{ids:o}}))).resultRowsStream.getReader();try{for(;;){const{done:w,value:S}=await g.read();if(w)break;for(let R=0;R<S.length;R++){const d=S[R];i.push({id:d[0],typeName:d[1]}),i.push({id:d[2],typeName:d[3]})}}}catch(w){if(w.name!=="AbortError")throw w;ae.getLogger(this).info("Request aborted as expected")}})().then(()=>{b()})});s.push(c)}),this.refreshCacheContent(),await Promise.all(s),i}async getAttachedRelationships(e,t){const i=[],n="MATCH (n)-[r]->(m) WHERE id(n) IN $nodeIds AND id(m) in $nodeIds AND NOT id(r) IN $relationshipExclusionIds return id(r), type(r)",s=(await ee(this.knowledgeGraph,new Y({openCypherQuery:n,bindParameters:{nodeIds:e,relationshipExclusionIds:t}}))).resultRowsStream.getReader();try{for(;;){const{done:r,value:o}=await s.read();if(r)break;for(let a=0;a<o.length;a++){const p=o[a];i.push({id:p[0],typeName:p[1]})}}}catch(r){if(r.name!=="AbortError")throw r;ae.getLogger(this).info("Request aborted as expected")}return i}async refreshCacheContent(e,t,i,n=!0){var p,c,b,g,w,S,R;const s=q.getInstance(),r=[],o=new Map,a=new Map;(p=this.knowledgeGraph.dataModel.entityTypes)==null||p.forEach(d=>{d.name&&a.set(d.name,d)}),(c=this.knowledgeGraph.dataModel.relationshipTypes)==null||c.forEach(d=>{d.name&&a.set(d.name,d)}),e||this.inclusionModeDefinition?e?e.forEach(d=>{var L;if(this.memberIdTypeLookup.has(d))for(const k of this.memberIdTypeLookup.get(d))o.has(k)?(L=o.get(k))==null||L.push(d):o.set(k,[d])}):(g=(b=this.inclusionModeDefinition)==null?void 0:b.namedTypeDefinitions)==null||g.forEach((d,L)=>{d.useAllData?o.set(L,null):d.members&&d.members.forEach(k=>{var Q;o.has(L)&&o.get(L)!==null?(Q=o.get(L))==null||Q.push(k.id):o.set(L,[k.id])})}):((w=this.knowledgeGraph.dataModel.entityTypes)==null||w.forEach(d=>{d.name&&o.set(d.name,null)}),(S=this.knowledgeGraph.dataModel.entityTypes)==null||S.forEach(d=>{d.name&&o.set(d.name,null)}));for(const[d,L]of o){const k=new Promise(Q=>{(async()=>{var W,K,z,Z,X,I,m;const U=new Set,J=[];let V,A="",H=!1;if(t||((K=(W=a.get(d))==null?void 0:W.properties)==null||K.forEach(T=>{T.name&&U.add(T.name)})),i&&this.geographicLookup.has(d)){const T=(z=this.geographicLookup.get(d))==null?void 0:z.name;T&&U.add(T)}if(this.entityTypeNames.has(d))A=`MATCH (n:${d}) ${L?"WHERE id(n) IN $ids ":""}return ID(n)`,U.forEach(T=>{A+=`, n.${T}`,J.push(T)});else{if(!this.relationshipTypeNames.has(d))throw new G("knowledge-graph:layer-data-manager",`The graph type of ${d} could not be determined. Was this type set in the KG data model and inclusion definition?`);H=!0,A=`MATCH ()-[n:${d}]->() ${L?"WHERE id(n) IN $ids ":""}return ID(n), id(startNode(n)), id(endNode(n))`,U.forEach(T=>{A+=`, n.${T}`,J.push(T)})}V=new Y(L?{openCypherQuery:A,bindParameters:{ids:L}}:{openCypherQuery:A});const ie=(await ee(this.knowledgeGraph,V)).resultRowsStream.getReader();for(;;){const{done:T,value:$}=await ie.read();if(T)break;const M=[];for(let f=0;f<$.length;f++){const h=$[f];let N=0,_=0;const v={properties:{}};for(v.id=h[N],N++,_++,H&&(v.originId=h[N],N++,_++,v.destinationId=h[N],N++,_++,F(this.nodeConnectionsLookup,v.originId,()=>new Set).add(v.id),F(this.nodeConnectionsLookup,v.destinationId,()=>new Set).add(v.id),F(this.relationshipConnectionsLookup,v.id,()=>[v.originId,v.destinationId]));N<h.length;N++)v.properties[J[N-_]]=h[N];M.push(v)}const E=s.writeToStore(M,x,(Z=this.geographicLookup.get(d))==null?void 0:Z.name);this.sublayerCaches.has(d)||this.sublayerCaches.set(d,new Map),n&&!((X=this.inclusionModeDefinition)!=null&&X.namedTypeDefinitions.has(d))&&((I=this.inclusionModeDefinition)==null||I.namedTypeDefinitions.set(d,{useAllData:!1,members:new Map})),n&&!((m=this.inclusionModeDefinition)!=null&&m.namedTypeDefinitions.get(d).members)&&(this.inclusionModeDefinition.namedTypeDefinitions.get(d).members=new Map);const D=this.sublayerCaches.get(d);E.forEach(f=>{var h,N;D==null||D.set(f.attributes[x],f),n&&!((h=this.inclusionModeDefinition)!=null&&h.namedTypeDefinitions.get(d).members.has(f.attributes[x]))&&((N=this.inclusionModeDefinition)==null||N.namedTypeDefinitions.get(d).members.set(f.attributes[x],{id:f.attributes[x]}),F(this.memberIdTypeLookup,f.attributes[x],()=>new Set).add(d))})}})().then(()=>{Q(null)})});r.push(k),(R=this._processingCacheUpdatesLookup.get(d))==null||R.push(k)}await Promise.all(r)}removeFromLayer(e){var n,s,r;const t=new Set,i=new Set(e.map(o=>o.id));for(const o of e)t.add(o.typeName),((n=this.memberIdTypeLookup.get(o.id))==null?void 0:n.size)===1?this.memberIdTypeLookup.delete(o.id):(s=this.memberIdTypeLookup.get(o.id))==null||s.delete(o.typeName),(r=this.inclusionModeDefinition)==null||r.namedTypeDefinitions.forEach((a,p)=>{var c;p===o.typeName&&((c=a.members)!=null&&c.has(o.id))&&a.members.delete(o.id)});t.forEach(o=>{var a;(a=this.sublayerCaches.get(o))==null||a.forEach((p,c)=>{var b;i.has(c)&&((b=this.sublayerCaches.get(o))==null||b.delete(c))})})}async retrieveDataFromService(e,t,i){var R,d,L,k,Q,se,U,J,V,A,H,ie,W,K,z,Z,X;const n=q.getInstance(),s=new Set,r=[];let o,a="",p=[];const c=t.graphType==="relationship",b=(L=(d=(R=this.inclusionModeDefinition)==null?void 0:R.namedTypeDefinitions)==null?void 0:d.get(t.objectType.name))==null?void 0:L.useAllData,g=t.parentCompositeLayer.sublayerIdsCache.get(t.objectType.name);let w=!b&&g?Array.from(g).sort():null;if((se=(Q=(k=this.inclusionModeDefinition)==null?void 0:k.namedTypeDefinitions)==null?void 0:Q.get(t.objectType.name))!=null&&se.useAllData)(V=(J=(U=this.inclusionModeDefinition)==null?void 0:U.namedTypeDefinitions)==null?void 0:J.get(t.objectType.name))!=null&&V.useAllData&&e.objectIds!=null&&(w=e.objectIds);else if(e.objectIds!=null&&w&&w.length>0){const I=e.objectIds;e.objectIds=w.filter(m=>I.includes(m))}else if(e.objectIds!=null)w=e.objectIds;else{if((A=this.inclusionModeDefinition)!=null&&A.namedTypeDefinitions.has(t.objectType.name)&&(!((H=this.inclusionModeDefinition.namedTypeDefinitions.get(t.objectType.name))!=null&&H.members)||((W=(ie=this.inclusionModeDefinition.namedTypeDefinitions.get(t.objectType.name))==null?void 0:ie.members)==null?void 0:W.size)<1))return e.objectIds=[],[];e.objectIds=w}if(e.outFields!=null){const I=e.outFields;I.includes("*")?t.fields.forEach(m=>{s.add(m.name)}):I.forEach(m=>{m!==x&&m!==t.geometryFieldName&&s.add(m)})}if(e.geometry!=null){const I=e.geometry;let m;const T=t.parentCompositeLayer.dataManager.knowledgeGraph.serviceDefinition,$=T==null?void 0:T.spatialReference,M=(K=T==null?void 0:T.serviceCapabilities)==null?void 0:K.geometryCapabilities;let E=M==null?void 0:M.geometryMaxBoundingRectangleSizeX,D=M==null?void 0:M.geometryMaxBoundingRectangleSizeY;if((z=I==null?void 0:I.extent)!=null&&z.spatialReference&&!((Z=I.spatialReference)!=null&&Z.isWGS84)?(await Ne(I.extent.spatialReference,ne),m=ye(I.extent,ne)):m=I.extent,E&&D&&$){if($.wkid!==4326){const f=new ue({spatialReference:$,xmax:E,ymax:D}),h=ye(f,ne);E=h.xmax,D=h.ymax}if(m.xmax-m.xmin>E)throw new G("knowledge-graph:layer-data-manager",`Extent x bounds should be within ${E}° latitude, limit exceeded`);if(m.ymax-m.ymin>D)throw new G("knowledge-graph:layer-data-manager",`Extent y bounds should be within ${D}° longitude, limit exceeded`)}if(e.where!=null&&e.where!=="1=1"){const f=await ce(e.where.toUpperCase(),t.fieldsIndex);t.fields.forEach(h=>{f.fieldNames.includes(h.name)&&s.add(h.name)})}a=c?`Match ()-[n:${t.objectType.name}]->() WHERE esri.graph.ST_Intersects($param_filter_geom, n.${t.geometryFieldName}) return ID(n), id(startNode(r)), id(endNode(r))`:`Match (n:${t.objectType.name}) WHERE esri.graph.ST_Intersects($param_filter_geom, n.${t.geometryFieldName}) return ID(n)`,t.geometryFieldName&&s.add(t.geometryFieldName),s.forEach(f=>{a+=`, n.${f}`,r.push(f)}),o=new Y({openCypherQuery:a,bindParameters:{param_filter_geom:new Me({rings:bt(m)})}})}else{let I="";if(e.where!=null&&e.where!=="1=1"){const $=await ce(e.where,t.fieldsIndex);t.fields.forEach(h=>{$.fieldNames.includes(h.name)&&s.add(h.name)});const M=new Set(["column-reference","string","number","binary-expression"]),E=new Set(["=","<","<=","<>",">",">=","AND","OR","LIKE"]);let D=!1;const f=h=>{if(h.type==="column-reference")return`n.${h.column}`;if(h.type==="string")return`'${h.value}'`;if(h.type==="number")return`${h.value}`;if(h.type==="binary-expression"&&M.has(h.left.type)&&M.has(h.right.type)&&E.has(h.operator))return`${f(h.left)} ${h.operator} ${f(h.right)}`;if(h.type==="binary-expression"&&h.operator==="LIKE"){let N="";if(h.left.type==="function"&&h.left.args.value[0].type==="column-reference")N+=`lower(n.${h.left.args.value[0].column})`;else{if(h.left.type!=="column-reference")return D=!0,"";N+=`lower(n.${h.left.column})`}if(N+=" CONTAINS (",h.right.type!=="string")return D=!0,"";{let _=h.right.value;_.charAt(0)==="%"&&(_=_.slice(1)),_.charAt(_.length-1)==="%"&&(_=_.slice(0,-1)),N+=`'${_.toLowerCase()}')`}return N}return D=!0,""};I=f($.parseTree),D&&(I="")}let m="";m=c?`Match ()-[n:${t.objectType.name}]->()`:`Match (n:${t.objectType.name})`;let T=!1;w&&(T=!0,m+=" WHERE ID(n) IN $ids"),I&&(m+=T?" AND":" WHERE",m+=` ${I}`),m+=" return ID(n)",c&&(m+=", id(startNode(n)), id(endNode(n))"),e.returnGeometry&&t.geometryFieldName&&s.add(t.geometryFieldName),s.forEach($=>{m+=`, n.${$}`,r.push($)}),o=new Y(w?{openCypherQuery:m,bindParameters:{ids:w}}:{openCypherQuery:m})}const S=(await ee(t.parentCompositeLayer.dataManager.knowledgeGraph,o,i)).resultRowsStream.getReader();for(;;){const{done:I,value:m}=await S.read();if(I)break;const T=[];for(let $=0;$<m.length;$++){const M=m[$];let E=0,D=0;const f={properties:{}};for(f.id=M[E],E++,D++,c&&(f.originId=M[E],E++,D++,f.destinationId=M[E],E++,D++);E<M.length;E++)f.properties[r[E-D]]=M[E];T.push(f)}p=p.concat(n.writeToStore(T,x,(X=t.parentCompositeLayer.dataManager.geographicLookup.get(t.objectType.name))==null?void 0:X.name))}return p}};l([y()],O.prototype,"knowledgeGraph",void 0),l([y()],O.prototype,"inclusionModeDefinition",void 0),l([y()],O.prototype,"entityTypeNames",void 0),l([y()],O.prototype,"relationshipTypeNames",void 0),l([y()],O.prototype,"geographicLookup",void 0),l([y()],O.prototype,"sublayerCaches",void 0),l([y()],O.prototype,"nodeConnectionsLookup",void 0),l([y()],O.prototype,"relationshipConnectionsLookup",void 0),l([y()],O.prototype,"memberIdTypeLookup",void 0),O=l([he("esri.layers.knowledgeGraph.KnowledgeGraphLayerDataManager")],O);const Ee=Ce(),Nt=e=>{let t=class extends e{constructor(){super(...arguments),this.fields=[],this.fieldsIndex=null}};return l([y(Ee.fields)],t.prototype,"fields",void 0),l([y(Ee.fieldsIndex)],t.prototype,"fieldsIndex",void 0),t=l([he("esri.layers.knowledgeGraph.KnowledgeGraphSublayerBase")],t),t};function j(e){if(!e.json)return e;e.json.write=De(e.json.write);const t=e.json.origins;if(!t)return e;let i;for(i in t){const n=t[i];n&&(n.write=De(n.write))}return e}function De(e){return typeof e=="object"&&e?(e.enabled!==!1&&(e.overridePolicy=Mt(e)),e):e===!0?te():e}function Mt(e){const{target:t,writer:i,overridePolicy:n,...s}=e;return function(r,o){const a=$e.call(this,r,o);return a.enabled?{...s,...a}:a}}function te(){return{overridePolicy:$e}}function $e(e,t){const i=!!this.geometryType;let n={enabled:i};return i&&(n={...n,...Re.call(this,e,t)}),n}function Re(e,t){return{ignoreOrigin:this.originIdOf(t)>yt.DEFAULTS}}let u=class extends Nt(je(Oe(xe(qe(Ae(Fe(Ge(Qe(ut))))))))){constructor(e){super(e),this.blendMode="normal",this.capabilities=mt(!1,!1),this.charts=null,this.definitionExpression=null,this.displayField="",this.effect=null,this.elevationInfo=null,this.featureEffect=null,this.graphType=null,this.labelsVisible=!0,this.labelingInfo=null,this.layerType=null,this.legendEnabled=!0,this.maxScale=0,this.minScale=0,this.objectIdField=x,this.objectType=null,this.opacity=1,this.orderBy=null,this.parentCompositeLayer=null,this.persistenceEnabled=!0,this.popupEnabled=!0,this.popupTemplate=null,this.refreshInterval=0,this.source={openPorts:()=>this.load().then(()=>{const t=new MessageChannel;return new Ue(t.port1,{channel:t,client:{queryFeatures:(i,n={})=>{const s=B.fromJSON(i);return this.queryFeaturesJSON(s,n)}}}),[t.port2]})},this.title=null,this.type="knowledge-graph-sublayer",this.useViewTime=!0,this.visible=!0}get defaultPopupTemplate(){return this.createPopupTemplate()}set featureReduction(e){const t=this._normalizeFeatureReduction(e);this._set("featureReduction",t)}get fields(){var t,i;const e=[];return(i=(t=this.objectType)==null?void 0:t.properties)==null||i.forEach(n=>{const s=n.fieldType==="esriFieldTypeOID"?"esriFieldTypeInteger":n.fieldType;e.push(pe.fromJSON({name:n.name,type:s,alias:n.alias,defaultValue:n.defaultValue,editable:n.editable,nullable:n.nullable}))}),e.push(pe.fromJSON({name:this.objectIdField,type:"esriFieldTypeString",alias:this.objectIdField,editable:!1}),pe.fromJSON({name:Ie,type:"esriFieldTypeInteger",alias:Ie,editable:!1})),e}get geometryType(){var i,n,s;if(((i=this.parentCompositeLayer)==null?void 0:i.type)==="link-chart")return this.graphType==="relationship"?"polyline":"point";const e=(s=this.parentCompositeLayer)==null?void 0:s.dataManager.geographicLookup.get((n=this.objectType)==null?void 0:n.name),t=e==null?void 0:e.geometryType;return t&&t!=="esriGeometryNull"?P.fromJSON(t):null}get geometryFieldName(){var t,i,n;if(((t=this.parentCompositeLayer)==null?void 0:t.type)==="link-chart")return Le;const e=(n=this.parentCompositeLayer)==null?void 0:n.dataManager.geographicLookup.get((i=this.objectType)==null?void 0:i.name);return(e==null?void 0:e.name)??null}get graphTypeName(){var e;return(e=this.objectType)==null?void 0:e.name}get hasM(){var n,s,r,o;const e=(s=this.parentCompositeLayer)==null?void 0:s.dataManager.geographicLookup.get((n=this.objectType)==null?void 0:n.name),t=e==null?void 0:e.name,i=t?(o=(r=this.objectType)==null?void 0:r.properties)==null?void 0:o[t]:null;return(i==null?void 0:i.hasM)??!1}get hasZ(){var n,s,r,o;const e=(s=this.parentCompositeLayer)==null?void 0:s.dataManager.geographicLookup.get((n=this.objectType)==null?void 0:n.name),t=e==null?void 0:e.name,i=t?(o=(r=this.objectType)==null?void 0:r.properties)==null?void 0:o[t]:null;return(i==null?void 0:i.hasZ)??!1}set renderer(e){Je(e,this.fieldsIndex),this._set("renderer",e)}get renderer(){var e;return this._isOverridden("renderer")?this._get("renderer"):((e=this.parentCompositeLayer)==null?void 0:e.type)==="link-chart"?this.graphType==="relationship"?le(de(P.toJSON("polyline")).renderer):le(de(P.toJSON("point")).renderer):le(de(P.toJSON(this.geometryType)).renderer)}get spatialReference(){var e,t,i,n;return((n=(i=(t=(e=this.parentCompositeLayer)==null?void 0:e.dataManager)==null?void 0:t.knowledgeGraph)==null?void 0:i.dataModel)==null?void 0:n.spatialReference)??Pe.WGS84}writeTitle(e,t){t.title=e??"Layer"}createPopupTemplate(e){return Be(this,e)}createQuery(){return new B({where:"1=1",outFields:["*"]})}getField(e){for(let t=0;t<this.fields.length;t++)if(this.fields[t].name===e)return this.fields[t];return null}getFieldDomain(e,t){return null}async queryFeatures(e,t){const{resolvedQuery:i,queryEngine:n}=await this._setupQueryObjects(e),s=Ye.fromJSON(await n.executeQuery(i.toJSON(),t==null?void 0:t.signal));return s.features.forEach(r=>{r.sourceLayer=this}),s}async queryFeaturesJSON(e,t){const{resolvedQuery:i,queryEngine:n}=await this._setupQueryObjects(e);return await n.executeQuery(i.toJSON(),t==null?void 0:t.signal)}async queryFeatureCount(e,t){const{resolvedQuery:i,queryEngine:n}=await this._setupQueryObjects(e);return n.executeQueryForCount(i.toJSON(),t==null?void 0:t.signal)}async queryExtent(e={},t){var a,p,c,b;const i={...e,returnGeometry:!0},{resolvedQuery:n,queryEngine:s}=await this._setupQueryObjects(i),r=await s.executeQueryForExtent(n.toJSON(),t==null?void 0:t.signal);let o;return o=((a=r.extent)==null?void 0:a.xmin)!=null&&((p=r.extent)==null?void 0:p.xmax)!=null&&((c=r.extent)==null?void 0:c.ymin)!=null&&((b=r.extent)==null?void 0:b.ymax)!=null?new ue(r.extent):new ue,{count:r.count,extent:o}}async queryObjectIds(e,t){const i=B.from(e);let n;if(this.parentCompositeLayer.type==="link-chart"&&this._cachedQueryEngine)n=this._cachedQueryEngine;else{const s=await this.parentCompositeLayer.dataManager.getData(i,this,t);n=this.loadQueryEngine(s)}return n.executeQueryForIds(i.toJSON(),t==null?void 0:t.signal)}loadQueryEngine(e){const t=new ht({geometryType:P.toJSON(this.geometryType),hasM:this.hasM,hasZ:this.hasZ}),i=new ct({fieldsIndex:this.fieldsIndex.toJSON(),geometryType:P.toJSON(this.geometryType),hasM:this.hasM,hasZ:this.hasZ,objectIdField:this.objectIdField,spatialReference:this.spatialReference.toJSON(),timeInfo:null,featureStore:t});return i.featureStore.addMany(e),i}async refreshCachedQueryEngine(){const e=await this.parentCompositeLayer.dataManager.getData(new B({where:"1=1",outFields:[x]}),this);this._cachedQueryEngine=this.loadQueryEngine(e)}async _setupQueryObjects(e,t){var r;const i=B.from(e),n=i.geometry;let s;if(n&&!((r=n.spatialReference)!=null&&r.isWGS84)&&(await Ne(n.spatialReference,ne),i.geometry=ye(n instanceof Me||n instanceof Ve?n:n.extent,ne)),this.parentCompositeLayer.type==="link-chart"&&this._cachedQueryEngine)s=this._cachedQueryEngine;else{const o=await this.parentCompositeLayer.dataManager.getData(i,this,t);s=this.loadQueryEngine(o)}return{resolvedQuery:i,queryEngine:s}}};l([y(j(C(He)))],u.prototype,"blendMode",void 0),l([y()],u.prototype,"capabilities",void 0),l([y({json:{origins:{"web-scene":{write:!1}},write:te()}})],u.prototype,"charts",void 0),l([y({readOnly:!0})],u.prototype,"defaultPopupTemplate",null),l([y({type:String,json:{origins:{service:{read:!1}},name:"layerDefinition.definitionExpression",write:{ignoreOrigin:!0}}})],u.prototype,"definitionExpression",void 0),l([y()],u.prototype,"displayField",void 0),l([y(j(C(We)))],u.prototype,"effect",void 0),l([y()],u.prototype,"elevationInfo",void 0),l([y(j(C(Ke)))],u.prototype,"featureEffect",void 0),l([y(j(C(ze)))],u.prototype,"featureReduction",null),l([y()],u.prototype,"fields",null),l([y()],u.prototype,"geometryType",null),l([y()],u.prototype,"geometryFieldName",null),l([y({type:["entity","relationship"],nonNullable:!0,json:{write:{isRequired:!0,ignoreOrigin:!0}}})],u.prototype,"graphType",void 0),l([y({type:String,nonNullable:!0,json:{write:{isRequired:!0,ignoreOrigin:!0}}})],u.prototype,"graphTypeName",null),l([y()],u.prototype,"hasM",null),l([y()],u.prototype,"hasZ",null),l([y({type:String,json:{origins:{service:{read:!1},"portal-item":{read:!1}},write:{ignoreOrigin:!0}}})],u.prototype,"id",void 0),l([y(j(C(Ze)))],u.prototype,"labelsVisible",void 0),l([y({type:[Xe],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:et,write:te()}})],u.prototype,"labelingInfo",void 0),l([y({readOnly:!0,json:{read:!1,write:{writer(e,t){t.layerType=this.geometryType?"KnowledgeGraphSubLayer":"KnowledgeGraphSubTable"},isRequired:!0,ignoreOrigin:!0,writerEnsuresNonNull:!0}}})],u.prototype,"layerType",void 0),l([y(j(C(tt)))],u.prototype,"legendEnabled",void 0),l([y(j(C(nt)))],u.prototype,"maxScale",void 0),l([y(j(C(it)))],u.prototype,"minScale",void 0),l([y()],u.prototype,"objectIdField",void 0),l([y()],u.prototype,"objectType",void 0),l([y(j(C(rt)))],u.prototype,"opacity",void 0),l([y(j(C(ot)))],u.prototype,"orderBy",void 0),l([y()],u.prototype,"parentCompositeLayer",void 0),l([y(j(C(st)))],u.prototype,"popupEnabled",void 0),l([y({type:at,json:{name:"popupInfo",write:{ignoreOrigin:!0}}})],u.prototype,"popupTemplate",void 0),l([y({type:Number,json:{write:{overridePolicy:Re}}})],u.prototype,"refreshInterval",void 0),l([y({types:pt,json:{name:"layerDefinition.drawingInfo.renderer",write:te()}})],u.prototype,"renderer",null),l([y()],u.prototype,"source",void 0),l([y()],u.prototype,"spatialReference",null),l([y({type:String,json:{write:{isRequired:!0,ignoreOrigin:!0,writerEnsuresNonNull:!0}}})],u.prototype,"title",void 0),l([lt("title")],u.prototype,"writeTitle",null),l([y({json:{read:!1}})],u.prototype,"type",void 0),l([y(j(C(dt)))],u.prototype,"useViewTime",void 0),l([y({type:Boolean,json:{name:"visibility",write:te()}})],u.prototype,"visible",void 0),u=l([he("esri.layers.knowledgeGraph.KnowledgeGraphSublayer")],u);const Ft=u;export{Le as D,xt as E,Ie as I,O as M,Ot as T,Ft as a,qt as b,At as c,jt as h,x as w};
