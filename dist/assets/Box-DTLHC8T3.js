import{c6 as N,a2 as K,ia as D,b8 as f,c7 as ct,du as O,fq as F,dv as nt,cm as lt,ig as Q,aS as T,dA as U,dB as V,ic as pt,hy as _t,cv as H,co as q,bP as E,dH as dt,X as u,Y as g,ib as ut,ek as gt,cw as mt,a3 as yt}from"./index-CC72Q5ax.js";import{i as x,s as z,m as vt,a as ft}from"./drawUtils-DLyRl_xG.js";import Gt from"./GraphicMover-CtPKWoPx.js";import{h as bt}from"./settings-CfOjQJzB.js";import{m as xt,k as wt}from"./automaticLengthMeasurementUtils-BHb-JcBn.js";import{s as St,o as kt,i as Rt}from"./ExtentScaleTooltipInfo-Ce-Ra2RA.js";import{i as Mt}from"./TranslateTooltipInfo-DxY4HCv_.js";import"./GraphicManipulator-DF6ZHzNj.js";import"./MeshTransform-D3dyzoG0.js";import"./axisAngleDegrees-8iTlWR3a.js";import"./meshVertexSpaceUtils-CnmEbj7h.js";import"./MeshLocalVertexSpace-CLr9qQun.js";import"./geodesicLengthMeasurementUtils-u5RohsfN.js";import"./geometryEngine-BO6t6gJ5.js";import"./geometryEngineBase-yFIvKOkM.js";import"./_commonjsHelpers-DCkdB7M8.js";import"./hydrated-DFUphhei.js";function Y(t,i,e,s){const o=[];for(const a of t){const h=a.slice();o.push(h);const c=i*(a[0]-s.x)-e*(a[1]-s.y)+s.x,r=e*(a[0]-s.x)+i*(a[1]-s.y)+s.y;h[0]=c,h[1]=r}return o}function L(t,i,e){const{hasM:s,hasZ:o,spatialReference:a}=t,h=i*Math.PI/180,c=Math.cos(h),r=Math.sin(h);if("xmin"in t&&(e=e??t.center,t=new N({spatialReference:a,rings:[[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]]]})),"paths"in t){e=e??t.extent.center;const n=[];for(const l of t.paths)n.push(Y(l,c,r,e));return new K({hasM:s,hasZ:o,spatialReference:a,paths:n})}if("rings"in t){e=e??t.extent.center;const n=[];for(const l of t.rings){const w=D(l),v=Y(l,c,r,e);D(v)!==w&&v.reverse(),n.push(v)}return new N({hasM:s,hasZ:o,spatialReference:a,rings:n})}if("x"in t){e=e??t;const n=new f({x:c*(t.x-e.x)-r*(t.y-e.y)+e.x,y:r*(t.x-e.x)+c*(t.y-e.y)+e.y,spatialReference:a});return t.z!=null&&(n.z=t.z),t.m!=null&&(n.m=t.m),n}return"points"in t?(e=e??t.extent.center,new ct({hasM:s,hasZ:o,points:Y(t.points,c,r,e),spatialReference:a})):null}class Ht{constructor(i,e,s,o){this.graphics=i,this.mover=e,this.dx=s,this.dy=o,this.type="move-start"}}class It{constructor(i,e,s,o){this.graphics=i,this.mover=e,this.dx=s,this.dy=o,this.type="move"}}class Z{constructor(i,e,s,o){this.graphics=i,this.mover=e,this.dx=s,this.dy=o,this.type="move-stop"}}class Ct{constructor(i,e,s){this.graphics=i,this.mover=e,this.angle=s,this.type="rotate-start"}}class Ot{constructor(i,e,s){this.graphics=i,this.mover=e,this.angle=s,this.type="rotate"}}class j{constructor(i,e,s){this.graphics=i,this.mover=e,this.angle=s,this.type="rotate-stop"}}class Tt{constructor(i,e,s,o){this.graphics=i,this.mover=e,this.xScale=s,this.yScale=o,this.type="scale-start"}}class Et{constructor(i,e,s,o){this.graphics=i,this.mover=e,this.xScale=s,this.yScale=o,this.type="scale"}}class J{constructor(i,e,s,o){this.graphics=i,this.mover=e,this.xScale=s,this.yScale=o,this.type="scale-stop"}}const _=bt.transformGraphics,zt={centerIndicator:new O({style:"cross",size:_.center.size,color:_.center.color}),fill:{default:new F({color:_.fill.color,outline:{color:_.fill.outlineColor,join:"round",width:1}}),active:new F({color:_.fill.stagedColor,outline:{color:_.fill.outlineColor,join:"round",style:"dash",width:1}})},handles:{default:new O({style:"square",size:_.vertex.size,color:_.vertex.color,outline:{color:_.vertex.outlineColor,width:1}}),hover:new O({style:"square",size:_.vertex.hoverSize,color:_.vertex.hoverColor,outline:{color:_.vertex.hoverOutlineColor,width:1}})},rotator:{default:new O({style:"circle",size:_.vertex.size,color:_.vertex.color,outline:{color:_.vertex.outlineColor,width:1}}),hover:new O({style:"circle",size:_.vertex.hoverSize,color:_.vertex.hoverColor,outline:{color:_.vertex.hoverOutlineColor,width:1}})},rotatorLine:new nt({color:_.line.color,width:1})};let d=class extends lt.EventedAccessor{constructor(t){super(t),this._activeHandleGraphic=null,this._graphicAttributes={esriSketchTool:"box"},this._mover=null,this._centerGraphic=null,this._backgroundGraphic=null,this._vertexGraphics=[],this._rotateHandleGraphic=null,this._rotateGraphicOffset=20,this._angleOfRotation=0,this._rotateLineGraphic=null,this._startInfo=null,this._totalDx=0,this._totalDy=0,this._xScale=1,this._yScale=1,this.tooltip=null,this.type="box",this.callbacks={onMoveStart(){},onMove(){},onMoveStop(){},onScaleStart(){},onScale(){},onScaleStop(){},onRotateStart(){},onRotate(){},onRotateStop(){},onGraphicClick(){}},this.enableMovement=!0,this.enableRotation=!0,this.enableScaling=!0,this.graphics=[],this.highlightsEnabled=!0,this.layer=null,this.preserveAspectRatio=!1,this.showCenterGraphic=!0,this.symbols=zt,this.sketchOptions=new Q,this.view=null,this._getBounds=(()=>{const i=T();return(e,s)=>{e[0]=Number.POSITIVE_INFINITY,e[1]=Number.POSITIVE_INFINITY,e[2]=Number.NEGATIVE_INFINITY,e[3]=Number.NEGATIVE_INFINITY;for(const o of s){if(!o)continue;let a,h,c,r;if(o.type==="point")a=c=o.x,h=r=o.y;else if(o.type==="multipoint"){const n=U(o);[a,h,c,r]=V(i,[n])}else if(o.type==="extent")[a,h,c,r]=[o.xmin,o.ymin,o.xmax,o.ymax];else{const n=U(o);[a,h,c,r]=V(i,n)}e[0]=Math.min(a,e[0]),e[1]=Math.min(h,e[1]),e[2]=Math.max(c,e[2]),e[3]=Math.max(r,e[3])}return e}})()}initialize(){const t=this.view;this._highlightHelper=new pt({view:t}),this._setup(),this.addHandles([_t(()=>t==null?void 0:t.ready,()=>{const{layer:i,view:e}=this;ut(e,i)},{once:!0,initial:!0}),H(()=>this.preserveAspectRatio,()=>{this._activeHandleGraphic&&(this._scaleGraphic(this._activeHandleGraphic),this._updateGraphics(),this._updateTooltip(this._activeHandleGraphic))}),H(()=>t==null?void 0:t.scale,()=>{this._updateRotateGraphic(),this._updateRotateLineGraphic()}),H(()=>this.graphics,()=>this.refresh()),H(()=>this.layer,(i,e)=>{e&&this._resetGraphics(e),this.refresh()}),H(()=>this.highlightsEnabled,()=>{var i;(i=this._highlightHelper)==null||i.removeAll(),this._setUpHighlights()}),H(()=>this.sketchOptions.tooltips.effectiveEnabled,i=>{this.tooltip=i?wt(()=>({view:t,options:this.sketchOptions.tooltips})):q(this.tooltip)},gt),H(()=>this.view.effectiveTheme.accentColor,()=>this._updateSymbolsForTheme(),mt),this.on("move-start",i=>{var e,s;return(s=(e=this.callbacks)==null?void 0:e.onMoveStart)==null?void 0:s.call(e,i)}),this.on("move",i=>{var e,s;return(s=(e=this.callbacks)==null?void 0:e.onMove)==null?void 0:s.call(e,i)}),this.on("move-stop",i=>{var e,s;return(s=(e=this.callbacks)==null?void 0:e.onMoveStop)==null?void 0:s.call(e,i)}),this.on("rotate-start",i=>{var e,s;return(s=(e=this.callbacks)==null?void 0:e.onRotateStart)==null?void 0:s.call(e,i)}),this.on("rotate",i=>{var e,s;return(s=(e=this.callbacks)==null?void 0:e.onRotate)==null?void 0:s.call(e,i)}),this.on("rotate-stop",i=>{var e,s;return(s=(e=this.callbacks)==null?void 0:e.onRotateStop)==null?void 0:s.call(e,i)}),this.on("scale-start",i=>{var e,s;return(s=(e=this.callbacks)==null?void 0:e.onScaleStart)==null?void 0:s.call(e,i)}),this.on("scale",i=>{var e,s;return(s=(e=this.callbacks)==null?void 0:e.onScale)==null?void 0:s.call(e,i)}),this.on("scale-stop",i=>{var e,s;return(s=(e=this.callbacks)==null?void 0:e.onScaleStop)==null?void 0:s.call(e,i)})])}destroy(){this._reset(),this.tooltip=q(this.tooltip)}get state(){var e;const t=((e=this.view)==null?void 0:e.ready)??!1,i=this.graphics.length&&this.layer;return t&&i?"active":t?"ready":"disabled"}isUIGraphic(t){return this._vertexGraphics.includes(t)||t===this._backgroundGraphic||t===this._centerGraphic||t===this._rotateHandleGraphic||t===this._rotateLineGraphic}move(t,i){if(this._mover&&this.graphics.length){for(const e of this.graphics){const s=e.geometry,o=x(s,t,i,this.view);e.geometry=o}this.refresh(),this.emit("move-stop",new Z(this.graphics,null,t,i))}}scale(t,i){if(this._mover&&this.graphics.length){for(const e of this.graphics){const s=e.geometry,o=z(s,t,i);e.geometry=o}this.refresh(),this.emit("scale-stop",new J(this.graphics,null,t,i))}}rotate(t,i){if(this._mover&&this.graphics.length){if(!i){const e=this._vertexGraphics[1].geometry.x,s=this._vertexGraphics[3].geometry.y;i=new f(e,s,this.view.spatialReference)}for(const e of this.graphics){const s=e.geometry,o=L(s,t,i);e.geometry=o}this.refresh(),this.emit("rotate-stop",new j(this.graphics,null,t))}}refresh(){this._reset(),this._setup()}reset(){this.graphics=[]}_setup(){this.state==="active"&&(this._setUpHighlights(),this._setupGraphics(),this._setupMover(),this._updateGraphics())}_reset(){var t;(t=this._highlightHelper)==null||t.removeAll(),this._resetGraphicStateVars(),this._resetGraphics(),this._updateTooltip(),this._mover&&this._mover.destroy(),this._mover=null,this.view.cursor="default"}_resetGraphicStateVars(){this._startInfo=null,this._activeHandleGraphic=null,this._totalDx=0,this._totalDy=0,this._xScale=1,this._yScale=1,this._angleOfRotation=0}_resetGraphics(t){(t=t||this.layer)&&(t.removeMany(this._vertexGraphics),t.remove(this._backgroundGraphic),t.remove(this._centerGraphic),t.remove(this._rotateHandleGraphic),t.remove(this._rotateLineGraphic)),this._vertexGraphics.forEach(i=>!i.destroyed&&i.destroy()),!this._backgroundGraphic.destroyed&&this._backgroundGraphic.destroy(),!this._centerGraphic.destroyed&&this._centerGraphic.destroy(),!this._rotateHandleGraphic.destroyed&&this._rotateHandleGraphic.destroy(),!this._rotateLineGraphic.destroyed&&this._rotateLineGraphic.destroy(),this._vertexGraphics=[],this._backgroundGraphic=null,this._centerGraphic=null,this._rotateHandleGraphic=null,this._rotateLineGraphic=null}_setupMover(){let t=[];this.enableScaling&&(t=t.concat(this._vertexGraphics)),this.enableMovement&&(t=t.concat(this.graphics,this._backgroundGraphic)),this.enableRotation&&t.push(this._rotateHandleGraphic),this.showCenterGraphic&&t.push(this._centerGraphic),this._mover=new Gt({enableMoveAllGraphics:!1,highlightsEnabled:!1,indicatorsEnabled:!1,view:this.view,graphics:t,callbacks:{onGraphicClick:i=>this._onGraphicClickCallback(i),onGraphicMoveStart:i=>this._onGraphicMoveStartCallback(i),onGraphicMove:i=>this._onGraphicMoveCallback(i),onGraphicMoveStop:i=>this._onGraphicMoveStopCallback(i),onGraphicPointerOver:i=>this._onGraphicPointerOverCallback(i),onGraphicPointerOut:i=>this._onGraphicPointerOutCallback(i)}})}_getStartInfo(t){const[i,e,s,o]=this._getBoxBounds(T()),a=Math.abs(s-i),h=Math.abs(o-e),c=(s+i)/2,r=(o+e)/2,{x:n,y:l}=t.geometry;return{width:a,height:h,centerX:c,centerY:r,startX:n,startY:l,graphicInfos:this._getGraphicInfos(),box:this._backgroundGraphic.geometry,rotate:this._rotateHandleGraphic.geometry}}_getGraphicInfos(){return this.graphics.map(t=>this._getGraphicInfo(t))}_getGraphicInfo(t){const i=t.geometry,[e,s,o,a]=this._getBounds(T(),[i]);return{width:Math.abs(o-e),height:Math.abs(a-s),centerX:(o+e)/2,centerY:(a+s)/2,geometry:i}}_onGraphicClickCallback(t){t.viewEvent.stopPropagation(),this.emit("graphic-click",t),this.callbacks.onGraphicClick&&this.callbacks.onGraphicClick(t)}_onGraphicMoveStartCallback(t){const{_angleOfRotation:i,_xScale:e,_yScale:s,_backgroundGraphic:o,_vertexGraphics:a,_rotateHandleGraphic:h,symbols:c}=this,r=t.graphic;this._resetGraphicStateVars(),this._hideGraphicsBeforeUpdate(),o.symbol=c.fill.active,this._startInfo=this._getStartInfo(r),this._updateTooltip(r,t.viewEvent),r===h?(this.view.cursor="grabbing",this.emit("rotate-start",new Ct(this.graphics,r,i))):a.includes(r)?(this._activeHandleGraphic=r,this.emit("scale-start",new Tt(this.graphics,r,e,s))):this.emit("move-start",new Ht(this.graphics,r,t.dx,t.dy))}_onGraphicMoveCallback(t){const i=t.graphic;if(this._startInfo)if(this._vertexGraphics.includes(i))this._scaleGraphic(i),this._updateTooltip(i,t.viewEvent),this.emit("scale",new Et(this.graphics,i,this._xScale,this._yScale));else if(i===this._rotateHandleGraphic)this._rotateGraphic(i),this._updateTooltip(i,t.viewEvent),this.emit("rotate",new Ot(this.graphics,i,this._angleOfRotation));else{const{dx:e,dy:s}=t;this._totalDx+=e,this._totalDy+=s,this._moveGraphic(i,e,s),this._updateTooltip(i,t.viewEvent),this.emit("move",new It(this.graphics,i,e,s))}}_onGraphicMoveStopCallback(t){const i=t.graphic;if(!this._startInfo)return void this.refresh();const{_angleOfRotation:e,_totalDx:s,_totalDy:o,_xScale:a,_yScale:h,_vertexGraphics:c,_rotateHandleGraphic:r}=this;this.refresh(),i===r?(this.view.cursor="pointer",this.emit("rotate-stop",new j(this.graphics,i,e))):c.includes(i)?this.emit("scale-stop",new J(this.graphics,i,a,h)):this.emit("move-stop",new Z(this.graphics,i,s,o))}_onGraphicPointerOverCallback(t){const{_backgroundGraphic:i,_vertexGraphics:e,graphics:s,_rotateHandleGraphic:o,symbols:a,view:h}=this,c=t.graphic;if(this._hoveredGraphic=c,c===o)return o.symbol=a.rotator.hover,h.cursor="pointer",void this._updateTooltip(c);if(s.includes(c)||c===i)return void(h.cursor="move");if(!e.includes(c))return void(h.cursor="pointer");this._updateTooltip(c),t.graphic.symbol=a.handles.hover;const r=h.rotation;let n,l=t.index;switch(l<8&&(r>=0&&r<45?l%=8:l=r>=45&&r<90?(l+1)%8:r>=90&&r<135?(l+2)%8:r>=135&&r<180?(l+3)%8:r>=180&&r<225?(l+4)%8:r>=225&&r<270?(l+5)%8:r>=270&&r<315?(l+6)%8:(l+7)%8),l){case 0:case 4:n="nwse-resize";break;case 1:case 5:n="ns-resize";break;case 2:case 6:n="nesw-resize";break;case 3:case 7:n="ew-resize";break;default:n="pointer"}h.cursor=n}_onGraphicPointerOutCallback(t){const{_vertexGraphics:i,_rotateHandleGraphic:e,symbols:s,view:o}=this;this._hoveredGraphic=null,t.graphic===e?e.symbol=s.rotator.default:i.includes(t.graphic)&&(t.graphic.symbol=s.handles.default),o.cursor="default",this._updateTooltip()}_scaleGraphic(t){const{_startInfo:i,_vertexGraphics:e,preserveAspectRatio:s,view:o}=this,{centerX:a,centerY:h,graphicInfos:c,height:r,startX:n,startY:l,width:w}=i,{resolution:v,transform:p}=o.state,m=e.indexOf(t);m!==1&&m!==5||this._updateX(t,a),m!==3&&m!==7||this._updateY(t,h);const{x:k,y:C}=t.geometry,W=p[0]*k+p[2]*C+p[4],tt=p[1]*k+p[3]*C+p[5],R=(c==null?void 0:c.map(y=>y.geometry))??[],et=R.every(y=>y.type==="point");if((w===0||r===0)&&et){const y=I((k-n)/v),G=I((l-C)/v);for(let S=0;S<R.length;S++)this.graphics[S].geometry=x(R[S],y,G,o,!0);return this._centerGraphic.geometry=new f(k,C,o.spatialReference),void(this._backgroundGraphic.geometry=x(i.box,y,G,o,!0))}if(s){const y=I(p[0]*a+p[2]*h+p[4],2),G=I(p[1]*a+p[3]*h+p[5],2),S=I(p[0]*n+p[2]*l+p[4],2),$=I(p[1]*n+p[3]*l+p[5],2);let b=ft(y,G,S,$,W,tt);b!==0&&Math.abs(b)!==1/0||(b=1),this._xScale=this._yScale=b;for(const M of R){const B=R.indexOf(M);this.graphics[B].geometry=z(M,this._xScale,this._yScale,[a,h])}this._updateBackgroundGraphic()}else{let y=k-n,G=l-C;if(m===1||m===5?y=0:m!==3&&m!==7||(G=0),y===0&&G===0)return;const S=a+y/2,$=h+G/2;let b=(w+(n>a?y:-1*y))/w,M=(r+(l<h?G:-1*G))/r;m!==1&&m!==5&&b!==0&&Math.abs(b)!==1/0||(b=1),m!==3&&m!==7&&M!==0&&Math.abs(M)!==1/0||(M=1),this._xScale=b,this._yScale=M;const B=(S-a)/v,it=($-h)/v,st=z(i.box,this._xScale,this._yScale);this._backgroundGraphic.geometry=x(st,B,it,o,!0);const{centerX:A,centerY:X}=this._getGraphicInfo(this._backgroundGraphic),ot=(A-a)/v,at=-1*(X-h)/v;for(const P of R){const rt=R.indexOf(P),ht=z(P,this._xScale,this._yScale,[a,h]);this.graphics[rt].geometry=x(ht,ot,at,o,!0)}this._centerGraphic.geometry=new f(A,X,o.spatialReference)}}_rotateGraphic(t){var v;const{centerX:i,centerY:e,startX:s,startY:o,box:a,rotate:h}=this._startInfo,c=this.view.spatialReference,r=new f(s,o,c),n=new f(i,e,c),l=t.geometry;this._angleOfRotation=vt(r,l,n);const w=((v=this._startInfo.graphicInfos)==null?void 0:v.map(p=>p.geometry))??[];for(const p of w){const m=w.indexOf(p),k=L(p,this._angleOfRotation,n);this.graphics[m].geometry=k}this._backgroundGraphic.geometry=L(a,this._angleOfRotation,n),this._rotateHandleGraphic.geometry=L(h,this._angleOfRotation,n)}_moveGraphic(t,i,e){if(this.graphics.includes(t)){const s=this._backgroundGraphic.geometry;this._backgroundGraphic.geometry=x(s,i,e,this.view);for(const o of this.graphics)o!==t&&(o.geometry=x(o.geometry,i,e,this.view))}else if(t===this._centerGraphic){const s=this._backgroundGraphic.geometry;this._backgroundGraphic.geometry=x(s,i,e,this.view)}if(t===this._backgroundGraphic||t===this._centerGraphic)for(const s of this.graphics)s.geometry=x(s.geometry,i,e,this.view)}_setUpHighlights(){var t;this.highlightsEnabled&&this.graphics.length&&((t=this._highlightHelper)==null||t.add(this.graphics))}_setupGraphics(){const{_graphicAttributes:t,symbols:i}=this;this._centerGraphic=new E({symbol:i.centerIndicator,attributes:t}),this.showCenterGraphic&&this.layer.add(this._centerGraphic),this._backgroundGraphic=new E({symbol:i.fill.default,attributes:t}),this.layer.add(this._backgroundGraphic),this._rotateLineGraphic=new E({symbol:i.rotatorLine,attributes:t}),this._rotateHandleGraphic=new E({symbol:i.rotator.default,attributes:t}),this.enableRotation&&!this._hasExtentGraphic()&&this.layer.addMany([this._rotateLineGraphic,this._rotateHandleGraphic]);for(let e=0;e<8;e++)this._vertexGraphics.push(new E({symbol:i.handles.default,attributes:t}));this.enableScaling&&this.layer.addMany(this._vertexGraphics)}_updateSymbolsForTheme(){var i,e;const t=this.view.effectiveTheme.accentColor;this.symbols={...this.symbols,fill:{active:(i=this.symbols.fill.active)==null?void 0:i.clone().set("outline.color",t),default:(e=this.symbols.fill.default)==null?void 0:e.clone().set("outline.color",t)},handles:{...this.symbols.handles,default:this.symbols.handles.default.clone().set("outline.color",t)},rotator:{...this.symbols.rotator,default:this.symbols.rotator.default.clone().set("outline.color",t)},rotatorLine:this.symbols.rotatorLine.clone().set("color",t)};for(const s of this._vertexGraphics)s.symbol=s===this._hoveredGraphic?this.symbols.handles.hover:this.symbols.handles.default;this._backgroundGraphic.symbol=this.symbols.fill.default,this._rotateHandleGraphic.symbol=this._rotateHandleGraphic===this._hoveredGraphic?this.symbols.rotator.hover:this.symbols.rotator.default,this._rotateLineGraphic.symbol=this.symbols.rotatorLine}_updateGraphics(){this._updateBackgroundGraphic(),this._updateHandleGraphics(),this._updateCenterGraphic(),this._updateRotateGraphic(),this._updateRotateLineGraphic()}_hideGraphicsBeforeUpdate(){this._centerGraphic.visible=!1,this._rotateHandleGraphic.visible=!1,this._rotateLineGraphic.visible=!1,this._vertexGraphics.forEach(t=>t.visible=!1)}_updateHandleGraphics(){const t=this._getCoordinates(!0);this._vertexGraphics.forEach((i,e)=>{const[s,o]=t[e];this._updateXY(i,s,o)})}_updateBackgroundGraphic(){const t=this._getCoordinates().map(([i,e])=>[i,e]);this._backgroundGraphic.geometry=new N({rings:[t],spatialReference:this.view.spatialReference})}_updateCenterGraphic(){const[t,i,e,s]=this._getBoxBounds(T()),o=(e+t)/2,a=(s+i)/2;this._centerGraphic.geometry=new f(o,a,this.view.spatialReference)}_updateRotateGraphic(){if(!this._vertexGraphics.length)return;const{x:t,y:i}=this._vertexGraphics[1].geometry,e=i+this.view.state.resolution*this._rotateGraphicOffset;this._rotateHandleGraphic.geometry=new f(t,e,this.view.spatialReference)}_updateRotateLineGraphic(){var e;if(!this._vertexGraphics.length||!((e=this._rotateHandleGraphic)!=null&&e.geometry))return;const t=this._vertexGraphics[1].geometry,i=this._rotateHandleGraphic.geometry;this._rotateLineGraphic.geometry=new K({paths:[[[t.x,t.y],[i.x,i.y]]],spatialReference:this.view.spatialReference})}_updateXY(t,i,e){t.geometry=new f(i,e,this.view.spatialReference)}_updateX(t,i){const e=t.geometry.y;t.geometry=new f(i,e,this.view.spatialReference)}_updateY(t,i){const e=t.geometry.x;t.geometry=new f(e,i,this.view.spatialReference)}_hasExtentGraphic(){return this.graphics.some(t=>(t==null?void 0:t.geometry)!=null&&t.geometry.type==="extent")}_getBoxBounds(t){const i=this.graphics.map(e=>e.geometry);return this._getBounds(t,i)}_getCoordinates(t){const[i,e,s,o]=this._getBoxBounds(T());if(t){const a=(i+s)/2,h=(o+e)/2;return[[i,o],[a,o],[s,o],[s,h],[s,e],[a,e],[i,e],[i,h]]}return[[i,o],[s,o],[s,e],[i,e]]}_updateTooltip(t,i){if(this.tooltip==null)return;if(!t)return void this.tooltip.clear();const{_backgroundGraphic:e,graphics:s,_vertexGraphics:o,_rotateHandleGraphic:a}=this;t===a?this._updateRotateTooltip():o.includes(t)?this._updateScaleTooltip():(s.includes(t)||t===e)&&this._updateMoveTooltip(i)}_updateRotateTooltip(){this.tooltip!=null&&(this.tooltip.info=new St({sketchOptions:this.sketchOptions,angle:-this._angleOfRotation}))}_updateScaleTooltip(){const{tooltip:t,_xScale:i,_yScale:e,sketchOptions:s,view:o}=this;if(t==null)return;const a=this._getCoordinates(),h=kt({topLeft:a[0],topRight:a[1],bottomRight:a[2],bottomLeft:a[3],spatialReference:o.spatialReference});if(h==null)return;const{xSize:c,ySize:r}=h,n=Math.abs(i),l=Math.abs(e);t.info=new Rt({sketchOptions:s,xScale:n,yScale:l,xSize:c,ySize:r})}_updateMoveTooltip(t){const{tooltip:i,sketchOptions:e,view:s}=this;if(i==null)return;const o=new Mt({sketchOptions:e});if(t){const{x:a,y:h}=t.origin,c=s.toMap(t),r=s.toMap({x:a,y:h}),n=xt(r,c);o.distance=n??dt}i.info=o}};function I(t,i=2){return Number.parseFloat(t.toFixed(i))}u([g()],d.prototype,"tooltip",void 0),u([g({readOnly:!0})],d.prototype,"type",void 0),u([g()],d.prototype,"callbacks",void 0),u([g()],d.prototype,"enableMovement",void 0),u([g()],d.prototype,"enableRotation",void 0),u([g()],d.prototype,"enableScaling",void 0),u([g()],d.prototype,"graphics",void 0),u([g()],d.prototype,"highlightsEnabled",void 0),u([g()],d.prototype,"layer",void 0),u([g()],d.prototype,"preserveAspectRatio",void 0),u([g()],d.prototype,"showCenterGraphic",void 0),u([g({readOnly:!0})],d.prototype,"state",null),u([g()],d.prototype,"symbols",void 0),u([g({type:Q})],d.prototype,"sketchOptions",void 0),u([g({constructOnly:!0})],d.prototype,"view",void 0),d=u([yt("esri.views.draw.support.Box")],d);const Qt=d;export{Qt as default};
