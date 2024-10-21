import{hH as f,hk as _,fK as m,hI as L,hJ as l,aE as x,aL as v,d8 as y,cd as h,x as I,hK as P,hL as S,hM as C,cg as u}from"./index-C5AN6gIb.js";import{Y as b}from"./Octree-CyDSDobB.js";import{m as V}from"./edgeProcessing-Bd6CVQt5.js";import"./Util-DZ-J3OpH.js";import"./deduplicate-Bon-NhLh.js";import"./Indices-BRKmhTP5.js";import"./InterleavedLayout-Bq7Nk9sY.js";import"./BufferView-CNNe45YH.js";import"./types-D0PSWh4d.js";import"./glUtil-C6KhMg1m.js";import"./enums-BlUEVwJR.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./Normals-BE87b4Vz.js";const j=1e3;function T(t,n,s){const e=L(),o=l(e);return f(o,o,t,.5),f(o,o,n,.5),e[3]=_(o,t),m(o,o,s),e}let g=class{constructor(){this._idToComponent=new Map,this._components=new b(t=>t.bounds),this._edges=new b(t=>t.bounds),this._tmpLineSegment=y(),this._tmpP1=h(),this._tmpP2=h(),this._tmpP3=h(),this.remoteClient=null}async fetchCandidates(t,n){await Promise.resolve(),I(n),await this._ensureEdgeLocations(t,n);const s=[];return this._edges.forEachNeighbor(e=>(this._addCandidates(t,e,s),s.length<j),t.bounds),{result:{candidates:s}}}async _ensureEdgeLocations(t,n){const s=[];if(this._components.forEachNeighbor(i=>{if(i.info==null){const{id:c,uid:d}=i;s.push({id:c,uid:d})}return!0},t.bounds),!s.length)return;const e={components:s},o=await this.remoteClient.invoke("fetchAllEdgeLocations",e,n??{});for(const i of o.components)this._setFetchEdgeLocations(i)}async add(t){const n=new p(t.id,t.bounds);return this._idToComponent.set(n.id,n),this._components.add([n]),{result:{}}}async remove(t){const n=this._idToComponent.get(t.id);if(n){const s=[];this._edges.forEachNeighbor(e=>(e.component===n&&s.push(e),!0),n.bounds),this._edges.remove(s),this._components.remove([n]),this._idToComponent.delete(n.id)}return{result:{}}}_setFetchEdgeLocations(t){const n=this._idToComponent.get(t.id);if(n==null||t.uid!==n.uid)return;const s=V.createView(t.locations),e=new Array(s.count),o=h(),i=h();for(let r=0;r<s.count;r++){s.position0.getVec(r,o),s.position1.getVec(r,i);const a=T(o,i,t.origin),E=new k(n,r,a);e[r]=E}this._edges.add(e);const{objectIds:c,origin:d}=t;n.info={locations:s,objectIds:c,origin:d}}_addCandidates(t,n,s){const{info:e}=n.component,{origin:o,objectIds:i}=e,c=e.locations,d=c.position0.getVec(n.index,this._tmpP1),r=c.position1.getVec(n.index,this._tmpP2);m(d,d,o),m(r,r,o);const a=i[c.componentIndex.get(n.index)];this._addEdgeCandidate(t,a,d,r,s),w(t,a,d,s),w(t,a,r,s)}_addEdgeCandidate(t,n,s,e,o){if(!t.returnEdge)return;const i=l(t.bounds),c=P(s,e,this._tmpLineSegment),d=S(c,i,this._tmpP3);C(t.bounds,d)&&o.push({type:"edge",objectId:n,target:u(d),distance:_(i,d),start:u(s),end:u(e)})}};g=x([v("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorker")],g);const D=g;function w(t,n,s,e){if(!t.returnVertex||!C(t.bounds,s))return;const o=l(t.bounds);e.push({type:"vertex",objectId:n,target:u(s),distance:_(o,s)})}class p{constructor(n,s){this.id=n,this.bounds=s,this.info=null,this.uid=++p.uid}}p.uid=0;class k{constructor(n,s,e){this.component=n,this.index=s,this.bounds=e}}export{D as default};
