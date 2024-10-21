import{aE as t,aF as l,bD as o,aL as d,bb as V,b9 as y,fJ as h,bC as p}from"./index-C5AN6gIb.js";import{f as w}from"./LayerView2D-tmdMtJYv.js";import{y as v}from"./LayerView-B14_-j8k.js";import"./Container-DoXxt5zf.js";import"./highlightReasons-DFsDA0zc.js";import"./definitions-Y_v3njP4.js";import"./enums-BlUEVwJR.js";import"./Texture-CTKIRDMu.js";let r=class extends v{constructor(i){super(i),this.type="group",this.layerViews=new V}destroy(){this.layerViews.length=0}_allLayerViewVisibility(i){this.layerViews.forEach(e=>{e.visible=i})}initialize(){this.addHandles([this.layerViews.on("change",i=>this._layerViewsChangeHandler(i)),y(()=>{var i;return(i=this.layer)==null?void 0:i.visibilityMode},()=>{this.layer&&this._applyVisibility(()=>this._allLayerViewVisibility(this.visible),()=>this._applyExclusiveVisibility(null))},h),y(()=>this.visible,i=>{this._applyVisibility(()=>this._allLayerViewVisibility(i),()=>{})},h)],"grouplayerview"),this._layerViewsChangeHandler({target:null,added:this.layerViews.toArray(),removed:[],moved:[]})}get creatingLayerViews(){var i,e;return((e=(i=this.view)==null?void 0:i.layerViewManager)==null?void 0:e.isCreatingLayerViewsForLayer(this.layer))??!1}set layerViews(i){this._set("layerViews",p(i,this._get("layerViews")))}get updatingProgress(){return this.layerViews.length===0?1:this.layerViews.reduce((i,e)=>i+e.updatingProgress,0)/this.layerViews.length}isUpdating(){return this.creatingLayerViews||this.layerViews.some(i=>i.updating)}_hasLayerViewVisibleOverrides(){return this.layerViews.some(i=>i._isOverridden("visible"))}_findLayerViewForLayer(i){return i&&this.layerViews.find(e=>e.layer===i)}_firstVisibleOnLayerOrder(){const i=this.layer.layers.find(e=>{const s=this._findLayerViewForLayer(e);return!!(s!=null&&s.visible)});return i&&this._findLayerViewForLayer(i)}_applyExclusiveVisibility(i){i==null&&(i=this._firstVisibleOnLayerOrder())==null&&this.layerViews.length>0&&(i=this._findLayerViewForLayer(this.layer.layers.at(0))),this.layerViews.forEach(e=>{e.visible=e===i})}_layerViewsChangeHandler(i){this.removeHandles("grouplayerview:visible"),this.addHandles(this.layerViews.map(s=>y(()=>s.visible,a=>this._applyVisibility(()=>{a!==this.visible&&(s.visible=this.visible)},()=>this._applyExclusiveVisibility(a?s:null)),h)).toArray(),"grouplayerview:visible");const e=i.added[i.added.length-1];this._applyVisibility(()=>this._allLayerViewVisibility(this.visible),()=>this._applyExclusiveVisibility(e!=null&&e.visible?e:null))}_applyVisibility(i,e){var s,a;this._hasLayerViewVisibleOverrides()&&(((s=this.layer)==null?void 0:s.visibilityMode)==="inherited"?i():((a=this.layer)==null?void 0:a.visibilityMode)==="exclusive"&&e())}};t([l({readOnly:!0})],r.prototype,"creatingLayerViews",null),t([l({cast:o})],r.prototype,"layerViews",null),t([l({readOnly:!0})],r.prototype,"updatingProgress",null),t([l()],r.prototype,"view",void 0),r=t([d("esri.views.layers.GroupLayerView")],r);const b=r;let n=class extends w(b){attach(){this._updateStageChildren(),this.addAttachHandles(this.layerViews.on("after-changes",()=>this._updateStageChildren()))}detach(){this.container.removeAllChildren()}update(i){}viewChange(){}moveEnd(){}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((i,e)=>this.container.addChildAt(i.container,e))}};n=t([d("esri.views.2d.layers.GroupLayerView2D")],n);const E=n;export{E as default};
