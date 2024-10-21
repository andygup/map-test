import{fl as w,d4 as P,l3 as y,X as t,Y as i,b8 as O,hW as $,a3 as h,b1 as T,l6 as C,bO as g,c_ as F,cv as R,ek as j,cZ as L,lO as H,fR as N,lP as V,lQ as k,lR as M,f3 as Q,f5 as W,fj as X}from"./index-CC72Q5ax.js";import{c as Y}from"./Analysis-CJrDBLE7.js";import{c as E,b as I}from"./featureReferenceUtils-DKrVP9Bg.js";import{j as f}from"./persistable-BPSBAVNj.js";import"./multiOriginJSONSupportUtils-C0wm8_Yw.js";import"./resourceExtension-BD0_wZpo.js";let l=class extends w(P(T)){constructor(e){super(e),this.position=null,this.elevationInfo=null,this.feature=null}equals(e){return y(this.position,e.position)&&y(this.elevationInfo,e.elevationInfo)&&E(this.feature,e.feature)}};t([i({type:O,json:{write:{isRequired:!0}}})],l.prototype,"position",void 0),t([i({type:$}),f()],l.prototype,"elevationInfo",void 0),t([i(I)],l.prototype,"feature",void 0),l=t([h("esri.analysis.LineOfSightAnalysisObserver")],l);const z=l;let a=class extends w(C){constructor(s){super(s),this.position=null,this.elevationInfo=null,this.feature=null}equals(s){return y(this.position,s.position)&&y(this.elevationInfo,s.elevationInfo)&&E(this.feature,s.feature)}};t([i({type:O}),f()],a.prototype,"position",void 0),t([i({type:$}),f()],a.prototype,"elevationInfo",void 0),t([i(I)],a.prototype,"feature",void 0),a=t([h("esri.analysis.LineOfSightAnalysisTarget")],a);const S=a,c=g.ofType(S);let r=class extends Y{constructor(e){super(e),this.type="line-of-sight",this.observer=null,this.extent=null}initialize(){this.addHandles(R(()=>this._computeExtent(),e=>{(e==null?void 0:e.pending)==null&&this._set("extent",e!=null?e.extent:null)},j))}get targets(){return this._get("targets")||new c}set targets(e){this._set("targets",L(e,this.targets,c))}get spatialReference(){var e;return((e=this.observer)==null?void 0:e.position)!=null?this.observer.position.spatialReference:null}get requiredPropertiesForEditing(){var e;return[(e=this.observer)==null?void 0:e.position]}async waitComputeExtent(){const e=this._computeExtent();return e!=null?e.pending:Promise.resolve()}_computeExtent(){var b;const e=this.spatialReference;if(((b=this.observer)==null?void 0:b.position)==null||e==null)return null;const v=p=>M(p.position,p.elevationInfo)==="absolute-height",o=this.observer.position,m=H(o.x,o.y,o.z,o.x,o.y,o.z);for(const p of this.targets)if(p.position!=null){const u=N(p.position,e);if(u.pending!=null)return{pending:u.pending,extent:null};if(u.geometry!=null){const{x:_,y:q,z:A}=u.geometry;V(m,[_,q,A])}}const d=k(m,e);return v(this.observer)&&this.targets.every(v)||(d.zmin=void 0,d.zmax=void 0),{pending:null,extent:d}}clear(){this.observer=null,this.targets.removeAll()}};t([i({type:["line-of-sight"]})],r.prototype,"type",void 0),t([i({type:z,json:{read:!0,write:!0}})],r.prototype,"observer",void 0),t([i({cast:F,type:c,nonNullable:!0,json:{read:!0,write:!0}})],r.prototype,"targets",null),t([i({value:null,readOnly:!0})],r.prototype,"extent",void 0),t([i({readOnly:!0})],r.prototype,"spatialReference",null),t([i({readOnly:!0})],r.prototype,"requiredPropertiesForEditing",null),r=t([h("esri.analysis.LineOfSightAnalysis")],r);const x=r,Z=g.ofType(S);let n=class extends Q(W(X)){constructor(s){super(s),this.type="line-of-sight",this.operationalLayerType="LineOfSightLayer",this.analysis=new x,this.opacity=1}initialize(){this.addHandles(R(()=>this.analysis,(s,e)=>{e!=null&&e.parent===this&&(e.parent=null),s!=null&&(s.parent=this)},j))}async load(){return this.analysis!=null&&this.addResolvingPromise(this.analysis.waitComputeExtent()),this}get observer(){var s;return(s=this.analysis)==null?void 0:s.observer}set observer(s){const{analysis:e}=this;e&&(e.observer=s)}get targets(){return this.analysis!=null?this.analysis.targets:new g}set targets(s){var e;L(s,(e=this.analysis)==null?void 0:e.targets)}get fullExtent(){return this.analysis!=null?this.analysis.extent:null}get spatialReference(){return this.analysis!=null?this.analysis.spatialReference:null}releaseAnalysis(s){this.analysis===s&&(this.analysis=new x)}};t([i({json:{read:!1},readOnly:!0})],n.prototype,"type",void 0),t([i({type:["LineOfSightLayer"]})],n.prototype,"operationalLayerType",void 0),t([i({type:z,json:{read:!0,write:{isRequired:!0,ignoreOrigin:!0}}})],n.prototype,"observer",null),t([i({type:Z,json:{read:!0,write:{ignoreOrigin:!0}}})],n.prototype,"targets",null),t([i({nonNullable:!0,json:{read:!1,write:!1}})],n.prototype,"analysis",void 0),t([i({readOnly:!0})],n.prototype,"fullExtent",null),t([i({readOnly:!0})],n.prototype,"spatialReference",null),t([i({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],n.prototype,"opacity",void 0),t([i({type:["show","hide"]})],n.prototype,"listMode",void 0),n=t([h("esri.layers.LineOfSightLayer")],n);const se=n;export{se as default};
