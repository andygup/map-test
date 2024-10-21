import{bO as l,c$ as m,cw as _,bk as n,aZ as g,cv as d,X as p,Y as u,a3 as w}from"./index-CC72Q5ax.js";import{c as y,y as f,C as k,T as M,j as F,S as V,w as v}from"./Stop-CXoH26EQ.js";import{j as I}from"./LayerView2D-yIHHRUuy.js";import{t as G}from"./GraphicContainer-DvwBbr9I.js";import{F as H}from"./GraphicsView2D-BriVPBVS.js";import{y as C}from"./LayerView-CF0tSBzc.js";import"./Container-DV3ZrFFJ.js";import"./AGraphicContainer-DvrWJq1O.js";import"./TechniqueInstance-DzUx4RCW.js";import"./UpdateTracking2D-Bh2X3QVj.js";import"./BindType-BmZEZMMh.js";import"./Util-BiGuS9PU.js";import"./Program-CeEqLbly.js";import"./BufferObject-BBgiZblF.js";import"./LabelMetric-BHdquRrO.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./BoundingBox-BgWEC7oM.js";import"./TileContainer-Dw39C1eZ.js";import"./WGLContainer-DrEewjaT.js";import"./VertexArrayObject-BnG1Iql9.js";import"./ProgramTemplate-Cr3WW2mj.js";import"./vec3f32-nZdmKIgz.js";import"./StyleDefinition-ZOqSQ2ts.js";import"./config-MDUrh2eL.js";import"./earcut-Lltz9D9k.js";import"./featureConversionUtils-9H_Ovj7K.js";import"./OptimizedFeature-swgcyHeh.js";import"./OptimizedGeometry-C9mSZhHi.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./FeatureCommandQueue-CSKkHRH5.js";import"./CIMSymbolHelper-BHsr-sHr.js";import"./BidiEngine-DNnuvc1i.js";import"./fontUtils-BFYXB_Sy.js";import"./GeometryUtils-CwcTiJRQ.js";import"./Rect-CUzevAry.js";import"./constants-F8oTIn7N.js";import"./AttributeStore-te1N8EdN.js";import"./centroid-DdLmOD72.js";import"./queryUtils-DRc9hajA.js";import"./json-Wa8cmqdu.js";import"./timeSupport-CcSJQo1x.js";import"./normalizeUtilsSync-C8Q5lxUb.js";const b=["route-info","direction-line","direction-point","polygon-barrier","polyline-barrier","point-barrier","stop"],a={graphic:null,property:null,oldValue:null,newValue:null};function c(t){return t instanceof y||t instanceof f||t instanceof k||t instanceof M||t instanceof F||t instanceof V||t instanceof v}function $(t){return l.isCollection(t)&&t.length&&c(t.at(0))}function U(t){return Array.isArray(t)&&t.length>0&&c(t[0])}const j=new Set(["default"]);let h=class extends I(C){constructor(){super(...arguments),this._graphics=new l,this._highlightIds=new Map,this._networkFeatureMap=new Map,this._networkGraphicMap=new Map}get _routeItems(){return new m({getCollections:()=>this.layer==null||this.destroyed?[]:[this.layer.routeInfo!=null?new l([this.layer.routeInfo]):null,this.layer.directionLines,this.layer.directionPoints,this.layer.polygonBarriers,this.layer.polylineBarriers,this.layer.pointBarriers,this.layer.stops]})}initialize(){this._updatingHandles.addOnCollectionChange(()=>this._routeItems,t=>this._routeItemsChanged(t),_)}destroy(){var t;this._networkFeatureMap.clear(),this._networkGraphicMap.clear(),this._graphics.removeAll(),(t=this._get("_routeItems"))==null||t.destroy()}attach(){this._createGraphicsView()}detach(){this._destroyGraphicsView()}async fetchPopupFeaturesAtLocation(t,e){return this._graphicsView.hitTest(t).filter(({popupTemplate:i})=>!!i)}highlight(t){let e;e=c(t)?[this._getNetworkFeatureUid(t)]:U(t)?t.map(r=>this._getNetworkFeatureUid(r)):$(t)?t.map(r=>this._getNetworkFeatureUid(r)).toArray():[t.uid];const i=e.filter(n);return i.length?(this._addHighlight(i),g(()=>this._removeHighlight(i))):g()}async hitTest(t,e){if(this.suspended)return null;const i=this._graphicsView.hitTest(t).filter(n).map(s=>this._networkGraphicMap.get(s));if(!i.length)return null;const{layer:r}=this;return i.reverse().map(s=>({type:"route",layer:r,mapPoint:t,networkFeature:s}))}isUpdating(){return this._graphicsView.updating}moveEnd(){}update(t){this._graphicsView.processUpdate(t)}viewChange(){this._graphicsView.viewChange()}_addHighlight(t){for(const e of t)if(this._highlightIds.has(e)){const i=this._highlightIds.get(e);this._highlightIds.set(e,i+1)}else this._highlightIds.set(e,1);this._updateHighlight()}_createGraphic(t){const e=t.toGraphic();return e.layer=this.layer,e.sourceLayer=this.layer,e}_createGraphicsView(){const t=this.view,e=()=>this.requestUpdate(),i=new G(t.featuresTilingScheme);this._graphicsView=new H({container:i,graphics:this._graphics,requestUpdateCallback:e,view:t}),this.container.addChild(i),this._updateHighlight()}_destroyGraphicsView(){this.container.removeChild(this._graphicsView.container),this._graphicsView.destroy()}_getDrawOrder(t){const e=this._networkGraphicMap.get(t);return b.indexOf(e.type)}_getNetworkFeatureUid(t){return this._networkFeatureMap.has(t)?this._networkFeatureMap.get(t).uid:null}_removeHighlight(t){for(const e of t)if(this._highlightIds.has(e)){const i=this._highlightIds.get(e)-1;i===0?this._highlightIds.delete(e):this._highlightIds.set(e,i)}this._updateHighlight()}_routeItemsChanged(t){if(t.removed.length){this._graphics.removeMany(t.removed.map(e=>{const i=this._networkFeatureMap.get(e);return this._networkFeatureMap.delete(e),this._networkGraphicMap.delete(i),i}));for(const e of t.removed)this.removeHandles(e)}if(t.added.length){this._graphics.addMany(t.added.map(e=>{const i=this._createGraphic(e);return i.symbol==null?null:(this._networkFeatureMap.set(e,i),this._networkGraphicMap.set(i,e),i)}).filter(n));for(const e of t.added)this.addHandles([d(()=>e.geometry,(i,r)=>{this._updateGraphic(e,"geometry",i,r)}),d(()=>e.symbol,(i,r)=>{this._updateGraphic(e,"symbol",i,r)})],e);this._graphics.sort((e,i)=>this._getDrawOrder(e)-this._getDrawOrder(i))}}_updateGraphic(t,e,i,r){if(!this._networkFeatureMap.has(t)){const o=this._createGraphic(t);return this._networkFeatureMap.set(t,o),this._networkGraphicMap.set(o,t),void this._graphics.add(o)}const s=this._networkFeatureMap.get(t);s[e]=i,a.graphic=s,a.property=e,a.oldValue=r,a.newValue=i,this._graphicsView.graphicUpdateHandler(a)}_updateHighlight(){const t=Array.from(this._highlightIds.keys()),e=this._getHighlightBits(j);this._graphicsView.setHighlight(t.map(i=>({objectId:i,highlightFlags:e})))}};p([u()],h.prototype,"_graphics",void 0),p([u()],h.prototype,"_routeItems",null),h=p([w("esri.views.2d.layers.RouteLayerView2D")],h);const Mt=h;export{Mt as default};
