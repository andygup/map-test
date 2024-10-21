import{cd as w,ce as y,cf as I,cg as V,ch as H,ci as v,aZ as T,n as q,bc as o,cj as g,ak as U,X as n,Y as f,a3 as b}from"./index-CC72Q5ax.js";import"./UpdateTracking2D-Bh2X3QVj.js";import"./GeometryUtils-CwcTiJRQ.js";import"./CIMSymbolHelper-BHsr-sHr.js";import"./floatRGBA-Dj0WGnBf.js";import"./WGLContainer-DrEewjaT.js";import"./Program-CeEqLbly.js";import"./LabelMetric-BHdquRrO.js";import"./StyleDefinition-ZOqSQ2ts.js";import"./enums-BRzLM11V.js";import"./GridShader-C9_PbyB8.js";import"./pbf-hM4K8d6H.js";import"./FeatureCommandQueue-CSKkHRH5.js";import"./PieChartMeshWriter-DZHsqxhE.js";import"./renderState-ByrxXTF7.js";import"./testSVGPremultipliedAlpha-9A00IRFq.js";import{F as C}from"./GraphicsView2D-BriVPBVS.js";import"./earcut-Lltz9D9k.js";import"./vec3f32-nZdmKIgz.js";import{r as Q,o as c,n as d}from"./imageUtils-CPag82-J.js";import{j as S}from"./LayerView2D-yIHHRUuy.js";import{h as $}from"./HighlightGraphicContainer-B9yjYlpS.js";import{y as F}from"./LayerView-CF0tSBzc.js";import{i as P}from"./RefreshableLayerView-BdW3TCLg.js";import{_ as k,R as L}from"./MapServiceLayerViewHelper-BK_9jN4O.js";import"./BindType-BmZEZMMh.js";import"./Util-BiGuS9PU.js";import"./BidiEngine-DNnuvc1i.js";import"./fontUtils-BFYXB_Sy.js";import"./OptimizedGeometry-C9mSZhHi.js";import"./Rect-CUzevAry.js";import"./BoundingBox-BgWEC7oM.js";import"./BufferObject-BBgiZblF.js";import"./VertexArrayObject-BnG1Iql9.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./ProgramTemplate-Cr3WW2mj.js";import"./Container-DV3ZrFFJ.js";import"./config-MDUrh2eL.js";import"./featureConversionUtils-9H_Ovj7K.js";import"./OptimizedFeature-swgcyHeh.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./CircularArray-CujHzHWW.js";import"./AttributeStore-te1N8EdN.js";import"./centroid-DdLmOD72.js";import"./queryUtils-DRc9hajA.js";import"./json-Wa8cmqdu.js";import"./timeSupport-CcSJQo1x.js";import"./constants-F8oTIn7N.js";import"./TurboLine-COt-TQ7o.js";import"./basicInterfaces-CZwQPxTp.js";import"./normalizeUtilsSync-C8Q5lxUb.js";import"./Bitmap-Bp-YrqCi.js";import"./TileContainer-Dw39C1eZ.js";import"./AGraphicContainer-DvrWJq1O.js";import"./TechniqueInstance-DzUx4RCW.js";import"./languageUtils-CXqaVYj4.js";import"./shared-C-6VNJNd.js";import"./number-D3_xSS_j.js";import"./highlightUtils-C_-rdBJv.js";import"./popupUtils-DOXd1VHO.js";const E=[0,0];let a=class extends P(Q(S(F))){constructor(){super(...arguments),this._fetchQueue=null,this._highlightGraphics=new w,this._highlightView=null,this._popupHighlightHelper=null,this._tileStrategy=null,this.layer=null}get resampling(){return!("resampling"in this.layer)||this.layer.resampling!==!1}get tilemapCache(){return"tilemapCache"in this.layer?this.layer.tilemapCache:null}update(t){var e;this._fetchQueue.pause(),this._fetchQueue.state=t.state,this._tileStrategy.update(t),this._fetchQueue.resume(),(e=this._highlightView)==null||e.processUpdate(t)}attach(){const t="tileServers"in this.layer?this.layer.tileServers:null,e=this.tilemapCache;if(this._tileInfoView=new y(this.layer.tileInfo,this.layer.fullExtent,e==null?void 0:e.effectiveMinLOD,e==null?void 0:e.effectiveMaxLOD),this._fetchQueue=new I({tileInfoView:this._tileInfoView,concurrency:t&&10*t.length||10,process:(i,r)=>this.fetchTile(i,r),scheduler:this.scheduler,priority:V.MAPVIEW_FETCH_QUEUE}),this._tileStrategy=new H({cachePolicy:"keep",resampling:this.resampling,acquireTile:i=>this.acquireTile(i),releaseTile:i=>this.releaseTile(i),tileInfoView:this._tileInfoView}),k(this,this.layer)){const i=this._highlightView=new C({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new $(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1});this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new L({createFetchPopupFeaturesQueryGeometry:(r,h)=>v(r,h,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(r,h)=>{i.graphicUpdateHandler({graphic:r,property:h})},layerView:this,updatingHandles:this._updatingHandles})}this.requestUpdate(),this.addAttachHandles(this._updatingHandles.add(()=>this.resampling,()=>{this.doRefresh()})),super.attach()}detach(){var t,e;super.detach(),this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),(t=this._popupHighlightHelper)==null||t.destroy(),(e=this._highlightView)==null||e.destroy(),this._fetchQueue=this._tileStrategy=this._tileInfoView=this._popupHighlightHelper=null}async fetchPopupFeaturesAtLocation(t,e){return this._popupHighlightHelper?this._popupHighlightHelper.fetchPopupFeaturesAtLocation(t,e):[]}highlight(t){return this._popupHighlightHelper?this._popupHighlightHelper.highlight(t):T()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}supportsSpatialReference(t){var e;return q((e=this.layer.tileInfo)==null?void 0:e.spatialReference,t)}async doRefresh(){if(this.attached){if(this.suspended)return this._tileStrategy.clear(),void this.requestUpdate();this._fetchQueue.reset(),this._tileStrategy.refresh(t=>this._updatingHandles.addPromise(this._enqueueTileFetch(t)))}}acquireTile(t){const e=this._bitmapView.createTile(t),i=e.bitmap;return[i.x,i.y]=this._tileInfoView.getTileCoords(E,e.key),i.resolution=this._tileInfoView.getTileResolution(e.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._updatingHandles.addPromise(this._enqueueTileFetch(e)),this._bitmapView.addChild(e),this.requestUpdate(),e}releaseTile(t){this._fetchQueue.abort(t.key.id),this._bitmapView.removeChild(t),t.once("detach",()=>t.destroy()),this.requestUpdate()}async fetchTile(t,e={}){const i=this.tilemapCache,{signal:r,resamplingLevel:h=0}=e;if(!i)try{return await this._fetchImage(t,r)}catch(s){if(!o(s)&&!this.resampling)return c(this._tileInfoView.tileInfo.size);if(h<3){const m=this._tileInfoView.getTileParentId(t.id);if(m){const u=new g(m),_=await this.fetchTile(u,{...e,resamplingLevel:h+1});return d(this._tileInfoView,_,u,t)}}throw s}const l=new g(0,0,0,0);let p;try{if(await i.fetchAvailabilityUpsample(t.level,t.row,t.col,l,{signal:r}),!this.resampling&&l.level!==t.level)return c(this._tileInfoView.tileInfo.size);p=await this._fetchImage(l,r)}catch(s){if(o(s))throw s;return c(this._tileInfoView.tileInfo.size)}return this.resampling?d(this._tileInfoView,p,l,t):p}async _enqueueTileFetch(t){if(!this._fetchQueue.has(t.key.id)){try{const e=await this._fetchQueue.push(t.key);t.bitmap.source=e,t.bitmap.width=this._tileInfoView.tileInfo.size[0],t.bitmap.height=this._tileInfoView.tileInfo.size[1],t.once("attach",()=>this.requestUpdate())}catch(e){o(e)||U.getLogger(this).error(e)}this.requestUpdate()}}async _fetchImage(t,e){return this.layer.fetchImageBitmapTile(t.level,t.row,t.col,{signal:e})}};n([f()],a.prototype,"resampling",null),n([f()],a.prototype,"tilemapCache",null),a=n([b("esri.views.2d.layers.TileLayerView2D")],a);const Dt=a;export{Dt as default};
