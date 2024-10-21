const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/geometryServiceUtils-75JeK0Iw.js","assets/index-CC72Q5ax.js","assets/index-NV7R-tPD.css"])))=>i.map(i=>d[i]);
import{w as y,l as U,s as m,m as F,n as J,S as K,e as z,q as i,t as p,u as d,T as H,v as q,_ as Q,x as X,y as Y,z as Z,W as $,A as ee,I as ae,B as _,L as I,E as te,G as oe,J as re}from"./index-CC72Q5ax.js";import{i as ne}from"./originUtils-D69mHv66.js";import{p as T}from"./resourceUtils-DEfo0ZYY.js";import{i as P}from"./saveAPIKeyUtils-B655upw9.js";import{r as O,t as S}from"./saveUtils-C1ZIQ2Ip.js";import"./multiOriginJSONSupportUtils-C0wm8_Yw.js";import"./resourceUtils-BZkoBhoy.js";const ie=["NatGeo_World_Map","Ocean_Basemap","USA_Topo_Maps","World_Imagery","World_Street_Map","World_Terrain_Base","World_Topo_Map","World_Hillshade","Canvas/World_Light_Gray_Base","Canvas/World_Light_Gray_Reference","Canvas/World_Dark_Gray_Base","Canvas/World_Dark_Gray_Reference","Ocean/World_Ocean_Base","Ocean/World_Ocean_Reference","Reference/World_Boundaries_and_Places","Reference/World_Reference_Overlay","Reference/World_Transportation"].map(a=>a.toLowerCase());async function Ne(a,e,t){t??(t={}),se(a,e),await y(()=>!e.updatingFromView),await e.load(),await V(e),await O(e),await D(a,e);const o=e.portalItem,{json:r,jsonContext:n}=await C(e,o);return S(n,{errorName:`${a.name}:save`},t),await L(e,o),await Se(a,e,o,r,n),await Promise.all([e.updateItemThumbnail(),T(e.resourceReferences,n)]),o}async function C(a,e){const t=U(e,"web-map",!0),o=a.write({},t);return await Promise.all(t.resources.pendingOperations),{json:o,jsonContext:t}}async function Be(a,e,t,o){o??(o={});const r=le(a,t);await y(()=>!e.updatingFromView),await e.load(),await V(e),await O(e),await D(a,e);const{json:n,jsonContext:s}=await C(e,r);S(s,{errorName:`${a.name}:save`},o),await de(e,r);const l=e.getThumbnailState();return await Ce(a,e,r,n,s,o)&&(e.resourceReferences.portalItem=r),e.restoreThumbnailFromState(l),await Promise.all([e.updateItemThumbnail(),T(e.resourceReferences,s)]),r}function se(a,e){if(!e.portalItem)throw new m(`${a.name}:portal-item-not-set`,"Portal item to save to has not been set on the WebMap");P(e.portalItem),E(a,e.portalItem)}function E(a,e){if(e.type!==a.itemType)throw new m(`${a.name}:portal-item-wrong-type`,`Portal item needs to have type "${a.itemType}"`)}async function D(a,e){var o;if(!((o=e.basemap)!=null&&o.baseLayers.length))throw new m(`${a.name}:save`,"Map does not have a valid basemap with a base layer.");let t=null;if(await y(()=>{const r=F(e.initialViewProperties,e.basemap);return t=r.spatialReference,!r.updating}),!J(t,e.initialViewProperties.spatialReference))throw new m(`${a.name}:save`,"The spatial reference of the basemap is not compatible with the one from the map.",{expected:e.initialViewProperties.spatialReference,actual:t})}function le(a,e){let t=K.from(e);return t.id&&(t=t.clone(),t.id=null),t.type||(t.type=a.itemType),t.portal||(t.portal=z.getDefault()),P(t),E(a,t),t}function V(a){const e=[];return a.basemap&&e.push(a.basemap.load()),a.ground&&e.push(a.ground.load()),Promise.allSettled(e).then(()=>{})}async function L(a,e){e.extent=await Re(a.portalItem,a.initialViewProperties.viewpoint.targetGeometry),await me(a,e)}const pe=_.JSAPI,M="CollectorDisabled",g="Collector",b="Data Editing",j="OfflineDisabled",v="Offline",G="Workforce Project",k="Workforce Worker",x="Workforce Dispatcher",ce="Offline Map Areas",ue="FieldMapsDisabled",R=_.DEVELOPER_BASEMAP,W="UtilityNetwork",A="IPS";async function de(a,e){i(e,M),i(e,ue),i(e,_.METADATA),i(e,j),i(e,ce),i(e,x),i(e,G),i(e,k),await L(a,e)}async function me(a,e){p(e,pe),await fe(a),ye(a,e),_e(a,e),he(a,e),ge(a,e),be(a,e),ve(a,e),e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter((t,o,r)=>r.indexOf(t)===o))}function fe(a){const e=h(a).map(t=>t.load()).toArray();return Promise.allSettled(e).then(()=>{})}function h(a){return a.allLayers.concat(a.allTables)}function N(a){return h(a).some(e=>e.loaded&&I(e)&&e.capabilities.operations.supportsEditing&&e.editingEnabled&&(e.type!=="subtype-group"||e.sublayers.some(t=>t.editingEnabled)))}function we(a){return h(a).filter(e=>e.type!=="group").every(e=>e.loaded&&Ie(a,e))}function ye(a,e){d(e,M)||d(e,G)||d(e,k)||d(e,x)||!N(a)?i(e,g):p(e,g)}function _e(a,e){N(a)?p(e,b):i(e,b)}function he(a,e){!d(e,j)&&we(a)?p(e,v):i(e,v)}function ge(a,e){H(a.basemap)?p(e,R):i(e,R)}function be(a,e){var t;(t=a.utilityNetworks)!=null&&t.length?p(e,W):i(e,W)}function ve(a,e){a.ipsInfo?p(e,A):i(e,A)}async function Re(a,e){const t=e.clone().normalize();let o;if(t.length>1)for(const r of t)o?r.width>o.width&&(o=r):o=r;else o=t[0];return We(a,o)}async function We(a,e){const t=e.spatialReference;if(t.isWGS84)return e.clone();if(t.isWebMercator)return q(e);const{getGeometryServiceURL:o}=await Q(()=>import("./geometryServiceUtils-75JeK0Iw.js"),__vite__mapDeps([0,1,2])),r=await o(a),n=new X({geometries:[e],outSpatialReference:Y.WGS84});return(await Z(r,n))[0]}function Ae(a){return re(a)||a.type==="map-notes"||a.type==="route"}function Ie(a,e){return I(e)&&e.capabilities.operations.supportsSync||Ae(e)&&!e.portalItem||Te(e)&&!Pe(e)&&e.spatialReference.equals(a.initialViewProperties.spatialReference)}function Te(a){return(a.type==="tile"||a.type==="vector-tile")&&(a.capabilities.operations.supportsExportTiles||Oe(a)||te(a))}function Pe(a){return a.type==="vector-tile"&&Object.keys(a.sourceNameToSource).length>1}function Oe(a){return a.type==="tile"&&oe(a.url)&&ie.some(e=>{var t;return(t=a.url)==null?void 0:t.toLowerCase().includes("/"+e+"/")})}async function Se(a,e,t,o,r){await t.update({data:o}),B(a,e,t,o,r)}async function Ce(a,e,t,o,r,n){const s=e.portalItem,l={item:s,authenticated:!(!(s!=null&&s.id)||!s.portal.user)},c=t.portal;await c.signIn();const{copyAllowed:f,itemReloaded:u}=await Ee(l,c);if(l.authenticated||(l.authenticated=u),!f)throw new m(`${a.name}:save-as-copy-not-allowed`,"Owner of this map does not allow others to save a copy");const w=await De(t,l,o,n);return e.portalItem=t,B(a,e,t,o,r),w}async function Ee(a,e){var r;const{item:t,authenticated:o}=a;return t!=null&&t.id&&((r=t.typeKeywords)!=null&&r.includes("useOnly"))?t.portal.portalHostname!==e.portalHostname?{copyAllowed:!1,itemReloaded:!1}:(o||await t.reload(),{copyAllowed:t.itemControl==="admin"||t.itemControl==="update",itemReloaded:!0}):{copyAllowed:!0,itemReloaded:!1}}async function De(a,e,t,o){var f;const r=a.portal,{item:n}=e,{folder:s,copyAllResources:l}=o;let c=!1;if(l&&(n!=null&&n.id)&&$(n.portal.url,r.url)&&parseInt(n.portal.currentVersion,10)>=2023){const{total:u}=await n.fetchResources();c=!!u}if(c){const u=await n.copy({copyResources:"all",folder:s});a.id=u.id,a.portal=u.portal;const w=a.toJSON();await a.load(),a.read(w),await a.update({data:t})}else await((f=r.user)==null?void 0:f.addItem({item:a,folder:s,data:t}));return c}function B(a,e,t,o,r){ee.prototype.read.call(e,{version:o.version,authoringApp:o.authoringApp,authoringAppVersion:o.authoringAppVersion},{origin:a.origin,ignoreDefaults:!0,url:t.itemUrl?ae(t.itemUrl):void 0}),ne(r),e.resourceInfo=o}export{C as createJSON,De as initializeNewItem,Ee as isCopyAllowed,Ne as save,Be as saveAs};
