import{dZ as u,aE as o,b2 as x,he as w,hf as D,b1 as G,b9 as z,fJ as M,hg as I,hh as f,hi as _,hj as E,bn as H,bj as L,e9 as k,hk as j,aF as n,aL as J,cd as O,hl as R}from"./index-C5AN6gIb.js";function X(e){let s=0,i=0,t=0;return e?(e.type==="cim"&&e.data.symbol&&"symbolLayers"in e.data.symbol&&e.data.symbol.symbolLayers&&e.data.symbol.symbolLayers.map(l=>{l.type==="CIMVectorMarker"&&l.anchorPoint&&(Math.abs(l.anchorPoint.x)>s&&(s=l.anchorPoint.x),Math.abs(l.anchorPoint.y)>i&&(i=l.anchorPoint.y),l.size!=null&&l.size>t&&(t=l.size))}),s=u(s),i=u(i),t=u(t),{offsetX:s,offsetY:i,size:t}):{offsetX:s,offsetY:i,size:t}}let a=class extends x{set graphic(e){this._circleCollisionCache=null,this._originalSymbol=e.symbol,this._set("graphic",e),this.attachSymbolChanged()}get elevationInfo(){const{layer:e}=this.graphic,s=e&&"elevationInfo"in e?e.elevationInfo:null,i=w(this.graphic),t=s?s.offset:0;return new D({mode:i,offset:t})}set focusedSymbol(e){e!==this._get("focusedSymbol")&&(this._set("focusedSymbol",e),this._updateGraphicSymbol(),this._circleCollisionCache=null)}grabbableForEvent(){return!0}set grabbing(e){e!==this._get("grabbing")&&(this._set("grabbing",e),this._updateGraphicSymbol())}set hovering(e){e!==this._get("hovering")&&(this._set("hovering",e),this._updateGraphicSymbol())}set selected(e){e!==this._get("selected")&&(this._set("selected",e),this._updateGraphicSymbol(),this.events.emit("select-changed",{action:e?"select":"deselect"}))}get _focused(){return this._get("hovering")||this._get("grabbing")}constructor(e){super(e),this.layer=null,this.interactive=!0,this.selectable=!1,this.grabbable=!0,this.dragging=!1,this.cursor=null,this.consumesClicks=!0,this.events=new G.EventEmitter,this._circleCollisionCache=null,this._graphicSymbolChangedHandle=null,this._originalSymbol=null}destroy(){this.detachSymbolChanged(),this._resetGraphicSymbol(),this._set("view",null)}intersectionDistance(e){const s=this.graphic;if(s.visible===!1)return null;const i=s.geometry;if(i==null)return null;const t=this._get("focusedSymbol"),l=t??s.symbol;return this.view.type==="2d"?this._intersectDistance2D(this.view,e,i,l):this._intersectDistance3D(this.view,e,s)}attach(){this.attachSymbolChanged(),this.layer!=null&&this.layer.add(this.graphic)}detach(){this.detachSymbolChanged(),this._resetGraphicSymbol(),this.layer!=null&&this.layer.remove(this.graphic)}attachSymbolChanged(){this.detachSymbolChanged(),this._graphicSymbolChangedHandle=z(()=>{var e;return(e=this.graphic)==null?void 0:e.symbol},e=>{e!=null&&e!==this.focusedSymbol&&e!==this._originalSymbol&&(this._originalSymbol=e,this._focused&&this.focusedSymbol!=null&&(this.graphic.symbol=this.focusedSymbol))},M)}detachSymbolChanged(){this._graphicSymbolChangedHandle!=null&&(this._graphicSymbolChangedHandle.remove(),this._graphicSymbolChangedHandle=null)}onElevationChange(){}onViewChange(){}_updateGraphicSymbol(){this.graphic.symbol=this._focused&&this.focusedSymbol!=null?this.focusedSymbol:this._originalSymbol}_resetGraphicSymbol(){this.graphic.symbol=this._originalSymbol}_intersectDistance2D(e,s,i,t){var d,g;if((t=t||I(i))==null)return null;const l=1;let h=this._circleCollisionCache;if(i.type==="point"&&t.type==="cim"&&((d=t.data.symbol)==null?void 0:d.type)==="CIMPointSymbol"&&t.data.symbol.symbolLayers){const{offsetX:c,offsetY:r,size:y}=X(t),p=f(s,v),b=y/2,m=e.toScreen(i),C=m.x+c,P=m.y+r;return _(p,[C,P])<b*b?l:null}if(i.type!=="point"||t.type!=="simple-marker")return E(s,i,e)?l:null;if(h==null||!h.originalPoint.equals(i)){const c=i,r=e.spatialReference;if(H(c.spatialReference,r)){const y=L(c,r);h={originalPoint:c.clone(),mapPoint:y,radiusPx:u(t.size)},this._circleCollisionCache=h}}if(h!=null){const c=f(s,v),r=(g=e.toScreen)==null?void 0:g.call(e,h.mapPoint);if(!r)return null;const y=h.radiusPx,p=r.x+u(t.xoffset),b=r.y-u(t.yoffset);return _(c,[p,b])<y*y?l:null}return null}_intersectDistance3D(e,s,i){const t=e.toMap(s,{include:[i]});return t&&k(t,S,e.renderSpatialReference)?j(S,e.state.camera.eye):null}};o([n({constructOnly:!0,nonNullable:!0})],a.prototype,"graphic",null),o([n()],a.prototype,"elevationInfo",null),o([n({constructOnly:!0,nonNullable:!0})],a.prototype,"view",void 0),o([n({value:null})],a.prototype,"focusedSymbol",null),o([n({constructOnly:!0})],a.prototype,"layer",void 0),o([n()],a.prototype,"interactive",void 0),o([n()],a.prototype,"selectable",void 0),o([n()],a.prototype,"grabbable",void 0),o([n({value:!1})],a.prototype,"grabbing",null),o([n()],a.prototype,"dragging",void 0),o([n()],a.prototype,"hovering",null),o([n({value:!1})],a.prototype,"selected",null),o([n()],a.prototype,"cursor",void 0),a=o([J("esri.views.interactive.GraphicManipulator")],a);const S=O(),v=R();export{a as S,X as s};
