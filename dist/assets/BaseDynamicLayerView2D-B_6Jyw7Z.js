import{bc as s,ak as p,X as r,Y as a,a3 as m}from"./index-C-FXvluM.js";import{a as n}from"./BitmapContainer-Bjcy8-ag.js";import{j as h}from"./LayerView2D-CACwUEON.js";import{_ as d}from"./ExportStrategy-BKbv8AIL.js";import{y as c}from"./LayerView-BoJFcTuW.js";import{i as y}from"./RefreshableLayerView-BcyJYs-0.js";import"./WGLContainer-DdfRQITb.js";import"./LabelMetric-DcZDHLPh.js";import"./Program-nKTILKyt.js";import"./BufferObject-DuXoHzsa.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./BoundingBox-CIf8VSjb.js";import"./VertexArrayObject-DcaNvwOy.js";import"./ProgramTemplate-Dj-c0Ukb.js";import"./vec3f32-nZdmKIgz.js";import"./Container-xUFVjfQc.js";import"./StyleDefinition-DY46tDlF.js";import"./config-MDUrh2eL.js";import"./earcut-Lltz9D9k.js";import"./featureConversionUtils-COeKMnVA.js";import"./OptimizedFeature-swgcyHeh.js";import"./OptimizedGeometry-C9mSZhHi.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./Bitmap-CQF2m3r0.js";let t=class extends y(h(c)){update(e){this._strategy.update(e).catch(i=>{s(i)||p.getLogger(this).error(i)}),this.notifyChange("updating")}attach(){this._bitmapContainer=new n,this.container.addChild(this._bitmapContainer),this._strategy=new d({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}viewChange(){}moveEnd(){this.requestUpdate()}fetchBitmapData(e,i,o){return this.layer.fetchImageBitmap(e,i,o)}async doRefresh(){this.requestUpdate()}isUpdating(){return this._strategy.updating||this.updateRequested}};r([a()],t.prototype,"_strategy",void 0),r([a()],t.prototype,"updating",void 0),t=r([m("esri.views.2d.layers.BaseDynamicLayerView2D")],t);const X=t;export{X as default};