import{iI as f,h$ as _,fz as m,iJ as L,iK as l,X as v,a3 as x,dE as y,bx as u,M as $,iL as I,iM as P,iN as w,bA as p}from"./index-C-FXvluM.js";import{Y as b}from"./Octree-CXz4dNsB.js";import{m as S}from"./edgeProcessing-DTuw2DSc.js";import"./Util-B1cu74ll.js";import"./deduplicate-CHguaZER.js";import"./Indices-JUNGgdWS.js";import"./InterleavedLayout-FN5nlSrs.js";import"./BufferView-Dk0MoByh.js";import"./types-D0PSWh4d.js";import"./glUtil-DIb2YQRb.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./Normals-Dt6YiP0J.js";const j=1e3;function V(t,n,s){const e=L(),i=l(e);return f(i,i,t,.5),f(i,i,n,.5),e[3]=_(i,t),m(i,i,s),e}let g=class{constructor(){this._idToComponent=new Map,this._components=new b(t=>t.bounds),this._edges=new b(t=>t.bounds),this._tmpLineSegment=y(),this._tmpP1=u(),this._tmpP2=u(),this._tmpP3=u(),this.remoteClient=null}async fetchCandidates(t,n){await Promise.resolve(),$(n),await this._ensureEdgeLocations(t,n);const s=[];return this._edges.forEachNeighbor(e=>(this._addCandidates(t,e,s),s.length<j),t.bounds),{result:{candidates:s}}}async _ensureEdgeLocations(t,n){const s=[];if(this._components.forEachNeighbor(o=>{if(o.info==null){const{id:c,uid:d}=o;s.push({id:c,uid:d})}return!0},t.bounds),!s.length)return;const e={components:s},i=await this.remoteClient.invoke("fetchAllEdgeLocations",e,n??{});for(const o of i.components)this._setFetchEdgeLocations(o)}async add(t){const n=new h(t.id,t.bounds);return this._idToComponent.set(n.id,n),this._components.add([n]),{result:{}}}async remove(t){const n=this._idToComponent.get(t.id);if(n){const s=[];this._edges.forEachNeighbor(e=>(e.component===n&&s.push(e),!0),n.bounds),this._edges.remove(s),this._components.remove([n]),this._idToComponent.delete(n.id)}return{result:{}}}_setFetchEdgeLocations(t){const n=this._idToComponent.get(t.id);if(n==null||t.uid!==n.uid)return;const s=S.createView(t.locations),e=new Array(s.count),i=u(),o=u();for(let r=0;r<s.count;r++){s.position0.getVec(r,i),s.position1.getVec(r,o);const a=V(i,o,t.origin),C=new T(n,r,a);e[r]=C}this._edges.add(e);const{objectIds:c,origin:d}=t;n.info={locations:s,objectIds:c,origin:d}}_addCandidates(t,n,s){const{info:e}=n.component,{origin:i,objectIds:o}=e,c=e.locations,d=c.position0.getVec(n.index,this._tmpP1),r=c.position1.getVec(n.index,this._tmpP2);m(d,d,i),m(r,r,i);const a=o[c.componentIndex.get(n.index)];this._addEdgeCandidate(t,a,d,r,s),E(t,a,d,s),E(t,a,r,s)}_addEdgeCandidate(t,n,s,e,i){if(!t.returnEdge)return;const o=l(t.bounds),c=I(s,e,this._tmpLineSegment),d=P(c,o,this._tmpP3);w(t.bounds,d)&&i.push({type:"edge",objectId:n,target:p(d),distance:_(o,d),start:p(s),end:p(e)})}};g=v([x("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorker")],g);const Y=g;function E(t,n,s,e){if(!t.returnVertex||!w(t.bounds,s))return;const i=l(t.bounds);e.push({type:"vertex",objectId:n,target:p(s),distance:_(i,s)})}class h{constructor(n,s){this.id=n,this.bounds=s,this.info=null,this.uid=++h.uid}}h.uid=0;class T{constructor(n,s,e){this.component=n,this.index=s,this.bounds=e}}export{Y as default};