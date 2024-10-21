import{hm as $,ih as v,b2 as D,M as R,ii as b,dg as H,kD as k,kE as L,cv as p,g5 as P,gu as T,X as c,Y as f,a3 as M,b1 as O,kF as V,e3 as G,kG as j,ek as d,a2 as x,em as w,hx as I,co as u,ij as y}from"./index-C-FXvluM.js";import{a as S}from"./HoveredPoints-DzkJRY6G.js";import{j as z,a as E}from"./OverlayCompositing.glsl-BdWJ9dYd.js";import"./Octree-CXz4dNsB.js";import"./Util-B1cu74ll.js";import"./line-B3A6Shbe.js";import"./Geometry-BTp0yhOg.js";import"./NormalAttribute.glsl-BzcwcK9j.js";import"./BindType-BmZEZMMh.js";import"./renderState-CfpGbofm.js";import"./basicInterfaces-CZwQPxTp.js";import"./requestImageUtils-CswTYnN2.js";import"./Indices-JUNGgdWS.js";import"./triangle-C57UtqE7.js";import"./triangulationUtils-DYBtHM4K.js";import"./earcut-Lltz9D9k.js";import"./deduplicate-CHguaZER.js";import"./RibbonLine.glsl-BRlvmZSr.js";import"./GeometryUtil-BqnSbvZN.js";import"./doublePrecisionUtils-B0owpBza.js";import"./vec3f32-nZdmKIgz.js";import"./InterleavedLayout-FN5nlSrs.js";import"./BufferView-Dk0MoByh.js";import"./types-D0PSWh4d.js";import"./hydratedFeatures-DXGiFJc-.js";import"./floatRGBA-omvZ6LNc.js";import"./VertexArrayObject-km1At7bV.js";import"./NestedMap-GuqgquCN.js";import"./glUtil-DIb2YQRb.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./VertexArrayObject-DcaNvwOy.js";import"./axisAngleDegrees-B_k9QdRo.js";import"./BufferObject-DuXoHzsa.js";let A=class{constructor(e){this._params=e,this._highlightTask=null,this._highlightHandle=null,this._visualElementHandle=null,this._settings=new z({getTheme:()=>this._params.view.effectiveTheme})}destroy(){this.remove()}remove(){this._highlightTask=$(this._highlightTask),this._highlightHandle=v(this._highlightHandle),this._visualElementHandle=v(this._visualElementHandle)}showHighlight(e){if(this.remove(),e==null||!g(e))return;const i=e.layer;this._highlightTask=D(async t=>{const a=await this._params.view.whenLayerView(i);R(t),b(a)&&(this._highlightHandle=a.highlight(e))})}showReshaping(e){if(this.remove(),e==null)return;const i=this._params.view,t=new E({view:i,geometry:g(e)?e.geometry:null,attached:!1,elevationInfo:H(e),renderOccluded:k.OccludeAndTransparentStencil,isDecoration:!0}),a=new L({graphic:e}),s=[p(()=>a.isDraped,o=>{t.isDraped=o}),a.on("changed",()=>{t.geometry=g(e)?e.geometry:null}),i.trackGraphicState(a),i.maskOccludee(e),P(t)];this._settings.visualElements.lineObjects.outline.apply(t),t.attached=!0,this._visualElementHandle=T(s)}};function g(r){return r.geometry!=null&&r.geometry.type==="polyline"}let m=class extends O{constructor(r){super(r),this._chartData=null,this._visualElements=[],this._update=e=>{const{chartData:i}=e;if(i==null)return this.remove();if(!i.refined)return;const t=this._visualElements,a=i.lines.filter(n=>n.viewVisualizationEnabled),s=a.length;for(;t.length>s;)t.pop().destroy();const o=w().profileLinesStyle3D;for(;t.length<s;){const n=new E({view:this.view,elevationInfo:{mode:"absolute-height",offset:0},innerWidth:o.innerWidth,innerColor:o.innerColor,width:o.width,falloff:o.falloff,renderOccluded:o.renderOccluded,isDecoration:!0});t.push(n)}const l=e.spatialReference;for(let n=0;n<s;++n){const h=t[n],_=a[s-1-n];h.geometry=this._createLineGeometry(_,l),h.color=V(G.toUnitRGBA(_.color))}}}initialize(){const r=w().profileLines3DUpdateThrottleMillis;let e=this._update;{const i=j(this._update,r);this.addHandles(i),e=i}this.addHandles([p(()=>({spatialReference:this.view.spatialReference,chartData:this._chartData}),e,d)])}destroy(){this._destroyVisualElements()}remove(){this._destroyVisualElements()}update(r){this._chartData=r}_createLineGeometry(r,e){const i=r.samples??[],t=i.length-1,a=[];let s=[];for(let o=0;o<=t;o++){const{x:l,y:n,z:h}=i[o];h!=null&&s.push([l,n,h]),o!==t&&h!=null||!s.length||(a.push(s),s=[])}return new x({paths:a,hasZ:!0,spatialReference:e})}_destroyVisualElements(){this._visualElements.forEach(r=>r.destroy()),this._visualElements.length=0}};c([f()],m.prototype,"view",void 0),c([f()],m.prototype,"_chartData",void 0),m=c([M("esri.widgets.ElevationProfile.support.ProfileLines3D")],m);class Ee{constructor(e,i){this._handles=new I,this._inputRepresentation=new A({view:e}),this._hoveredPoints=new S({view:e}),this._profileLines=new m({view:e}),this._handles.add([p(()=>i.viewModel.hoveredPoints,t=>this._hoveredPoints.update(t),d),p(()=>{const{state:t,editable:a,highlightEnabled:s,viewModel:o}=i,l=o.input;return l&&(l.commitProperty("geometry"),l.commitProperty("layer")),{input:l,state:t,editable:a,highlightEnabled:s}},t=>this._updateInputRepresentation(t),d),p(()=>i.viewModel.chartData,t=>this._profileLines.update(t),d),p(()=>{var t;return(t=i.viewModel.input)==null?void 0:t.geometry},()=>{this._profileLines.remove()},d)])}destroy(){this._handles=u(this._handles),this._inputRepresentation=u(this._inputRepresentation),this._hoveredPoints=u(this._hoveredPoints),this._profileLines=u(this._profileLines)}_updateInputRepresentation({input:e,state:i,editable:t,highlightEnabled:a}){const s=this._inputRepresentation;if(!a)return s.remove();i===y.Selected?s.showHighlight(e):i!==y.Created||t?s.remove():s.showReshaping(e)}}export{Ee as ElevationProfileView3D};