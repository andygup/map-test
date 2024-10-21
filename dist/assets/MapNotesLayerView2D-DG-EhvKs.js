import{bf as u,bb as f,bg as w,aq as g,b9 as h,ba as o,b6 as y,aE as _,aL as V}from"./index-C5AN6gIb.js";import{t as b}from"./highlightReasons-DFsDA0zc.js";import{f as v}from"./LayerView2D-tmdMtJYv.js";import{t as c}from"./GraphicContainer-Bwt5gDIs.js";import{V as d}from"./GraphicsView2D-C5JT0i5c.js";import{y as C}from"./LayerView-B14_-j8k.js";import"./Container-DoXxt5zf.js";import"./definitions-Y_v3njP4.js";import"./enums-BlUEVwJR.js";import"./Texture-CTKIRDMu.js";import"./AGraphicContainer-CuMJmQTl.js";import"./TechniqueInstance-CSiYJXEd.js";import"./UpdateTracking2D-BLvcY7jP.js";import"./BindType-BmZEZMMh.js";import"./Util-DZ-J3OpH.js";import"./Program-DbcSl83q.js";import"./BufferObject-KHYTZLM-.js";import"./LabelMetric-G82jk8Dw.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./BoundingBox-DtHb85M2.js";import"./TileContainer-4z5zi0ok.js";import"./WGLContainer-CF9Cdabk.js";import"./VertexArrayObject-itGszRJk.js";import"./vec4f32-CjrfB-0a.js";import"./ProgramTemplate-Dt1rsZaa.js";import"./vec3f32-nZdmKIgz.js";import"./StyleDefinition-CzFICxQ3.js";import"./config-MDUrh2eL.js";import"./earcut-h7wdVcTx.js";import"./featureConversionUtils-C3NW8rek.js";import"./OptimizedFeature-7juV2tZm.js";import"./OptimizedGeometry-vU5jWBvU.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./FeatureCommandQueue-BDDWB6HO.js";import"./CIMSymbolHelper-BvTJZJyB.js";import"./BidiEngine-BwB1Df7c.js";import"./fontUtils-CwPg7HxN.js";import"./GeometryUtils-DhrvD4RL.js";import"./Rect-CUzevAry.js";import"./constants-D5zmR9t2.js";import"./AttributeStore-BcKPyP_9.js";import"./centroid-DdLmOD72.js";import"./timeSupport-DCAQeUtx.js";import"./json-Wa8cmqdu.js";import"./normalizeUtilsSync-Ccn9l9sq.js";const m="sublayers",l="layerView";let n=class extends v(C){constructor(){super(...arguments),this._highlightIds=new Map}*graphicsViews(){this._graphicsViewsFeatureCollectionMap==null?this._graphicsViews==null?yield*[]:yield*this._graphicsViews:yield*this._graphicsViewsFeatureCollectionMap.keys()}async hitTest(i,t){return Array.from(this.graphicsViews(),e=>{const s=e.hitTest(i);if(this._graphicsViewsFeatureCollectionMap!=null){const a=this._graphicsViewsFeatureCollectionMap.get(e);for(const r of s)!r.popupTemplate&&a.popupTemplate&&(r.popupTemplate=a.popupTemplate),r.sourceLayer=r.layer=this.layer}return s}).flat().map(e=>({type:"graphic",graphic:e,layer:this.layer,mapPoint:i}))}highlight(i){let t;typeof i=="number"?t=[i]:i instanceof u?t=[i.uid]:Array.isArray(i)&&i.length>0?t=typeof i[0]=="number"?i:i.map(s=>s&&s.uid):f.isCollection(i)&&(t=i.map(s=>s&&s.uid).toArray());const e=t==null?void 0:t.filter(w);return e!=null&&e.length?(this._addHighlight(e),g(()=>this._removeHighlight(e))):g()}update(i){for(const t of this.graphicsViews())t.processUpdate(i)}attach(){const i=this.view,t=()=>this.requestUpdate(),e=this.layer.featureCollections;if(e!=null&&e.length){this._graphicsViewsFeatureCollectionMap=new Map;for(const s of e){const a=new c(this.view.featuresTilingScheme),r=new d({view:i,graphics:s.source,renderer:s.renderer,requestUpdateCallback:t,container:a});this._graphicsViewsFeatureCollectionMap.set(r,s),this.container.addChild(r.container),this.addHandles([h(()=>s.visible,p=>r.container.visible=p,o),h(()=>r.updating,()=>this.notifyChange("updating"),o)],l)}this._updateHighlight()}else this.layer.sublayers!=null&&this.addHandles(y(()=>this.layer.sublayers,"change",()=>this._createGraphicsViews(),{onListenerAdd:()=>this._createGraphicsViews(),onListenerRemove:()=>this._destroyGraphicsViews()}),m)}detach(){this._destroyGraphicsViews(),this.removeHandles(m)}moveEnd(){}viewChange(){for(const i of this.graphicsViews())i.viewChange()}isUpdating(){for(const i of this.graphicsViews())if(i.updating)return!0;return!1}_destroyGraphicsViews(){this.container.removeAllChildren(),this.removeHandles(l);for(const i of this.graphicsViews())i.destroy();this._graphicsViews=null,this._graphicsViewsFeatureCollectionMap=null}_createGraphicsViews(){if(this._destroyGraphicsViews(),this.layer.sublayers==null)return;const i=[],t=this.view,e=()=>this.requestUpdate();for(const s of this.layer.sublayers){const a=new c(this.view.featuresTilingScheme);a.fadeTransitionEnabled=!0;const r=new d({view:t,graphics:s.graphics,requestUpdateCallback:e,container:a});this.addHandles([s.on("graphic-update",r.graphicUpdateHandler),h(()=>s.visible,p=>r.container.visible=p,o),h(()=>r.updating,()=>this.notifyChange("updating"),o)],l),this.container.addChild(r.container),i.push(r)}this._graphicsViews=i,this._updateHighlight()}_addHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t);this._highlightIds.set(t,e+1)}else this._highlightIds.set(t,1);this._updateHighlight()}_removeHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t)-1;e===0?this._highlightIds.delete(t):this._highlightIds.set(t,e)}this._updateHighlight()}_updateHighlight(){const i=Array.from(this._highlightIds.keys()),t=b("highlight");for(const e of this.graphicsViews())e.setHighlight(i.map(s=>({objectId:s,highlightFlags:t})))}};n=_([V("esri.views.2d.layers.MapNotesLayerView2D")],n);const ui=n;export{ui as default};
