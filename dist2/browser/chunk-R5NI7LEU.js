import{a as ga,b as Ce,c as On,d as zn,e as te,f as ke,g as fo,h as Cn,i as Dn,j as Wt,k as va,l as Ti}from"./chunk-QIADSMNB.js";import{$ as Qe,Aa as In,B as Tn,Ba as h,C as bn,Ca as V,Da as p,Ea as U,Fa as G,G as H,Ga as ue,H as wn,Ha as lt,I as Be,Ia as wt,J as Ie,Ja as Vt,K as O,Ka as Ue,L as he,La as M,M as ye,Ma as mo,Na as ut,O as xe,P as bt,W as Vn,X as ne,Y as rt,_ as ai,a as lo,aa as Mi,b as ge,ca as Ni,d as E,da as Ee,e as o,f as g,g as I,ga as _e,h as _,ha as Ge,i as Tt,ia as B,j as ii,ja as be,ka as uo,l as xn,la as fa,m as q,ma as Fn,n as Si,o as oi,p as He,pa as st,q as da,ra as co,sa as po,t as ma,ta as $,u as ve,v as Sn,w as y,x as ae,xa as W}from"./chunk-3FPKBZAP.js";import{d as An}from"./chunk-KOZWPKSX.js";import{a as yn}from"./chunk-ASWKMS6K.js";import{a as Fe,c as on,d as ua,e as ca,f as Ei}from"./chunk-F5QRQRVO.js";import{a as ra,b as yi,c as io,d as an,e as nn,f as rn,g as sa,i as oo,j as sn,k as ln,l as un,m as cn,n as pn,o as la,p as dn,r as mn,s as fn,t as gn,u as J,v as ao,w as oe}from"./chunk-NDSIH3HT.js";import{a as hn,b as _n}from"./chunk-QU7J6W3Q.js";import{d as ro,e as vn,g as so}from"./chunk-VCCGESZ3.js";import{c as pa,g as Pn,h as go,i as Z,j as ie,k as X,l as Rn,m as Q,n as j,o as ee,p as Ft}from"./chunk-63CUCT2D.js";import{d as xi,j as no}from"./chunk-WMERNBBO.js";import{b as en,c as tn}from"./chunk-F6XZGHRL.js";import{A as Qa,k as $a,y as na,z as Ja}from"./chunk-MLCROG6T.js";import{a as At}from"./chunk-DW75GXUR.js";import{a as Ka,b as Xa,c as aa,e as to,g as Yt}from"./chunk-67YVG46W.js";import{e as Za,h as ja}from"./chunk-B2QABUVD.js";import{a as r,b as w}from"./chunk-WNSZCIFR.js";import{f as oa}from"./chunk-MQI2G2HI.js";import{D as Wa,E as eo,g as ht}from"./chunk-L244EAZB.js";import{a as Ya}from"./chunk-OZLXIX76.js";import{a as d,b}from"./chunk-Q7L6LLAK.js";var ha=class{get forceStaticPath(){return ht("esri-cim-animations-enable-status")==="disabled"}get forceAnimatedPath(){return ht("esri-cim-animations-enable-status")==="forced"}get freezeGlobalTime(){return ht("esri-cim-animations-freeze-time")??!1}get spotlightAnimatedSymbols(){return!!ht("esri-cim-animations-spotlight")}get forceGlobalTimeOrigin(){return ht("esri-cim-animations-freeze-time")!==!1}},bi=new ha;var It=class extends M{};r([p(o)],It.prototype,"globalTime",void 0),r([p(g)],It.prototype,"animationTextureSize",void 0),r([p(q)],It.prototype,"toScreen",void 0),r([p(q)],It.prototype,"toNdc",void 0),r([p(o)],It.prototype,"mapRotation",void 0),r([p(o)],It.prototype,"pixelRatio",void 0);var ct=class extends mo{getVisualVariableData(e){return this._vvData||(this._vvData=W(this.visualVariableData,e).setDebugName("storage2")),this._vvData}getFilterData(e){return W(this.filterFlags,e).setDebugName("storage0")}getAnimationData(e){return W(this.animation,e).setDebugName("storage1")}getVVData(e){return this.getVisualVariableData(e)}getDataDrivenData0(e){return W(this.dataDriven0,e).setDebugName("storage30")}getDataDrivenData1(e){return W(this.dataDriven1,e).setDebugName("storage31")}getDataDrivenData2(e){return W(this.dataDriven2,e).setDebugName("storage32")}getGPGPUData(e){return W(this.gpgpu,e).setDebugName("storage4")}getLocalTimeOrigin(e){return W(this.localTimeOrigin,e).x.setDebugName("storage5")}getFilterFlags(e){return ht("webgl-ignores-sampler-precision")?Vn(this.getFilterData(e).x.multiply(He(255))):this.getFilterData(e).x.multiply(He(255))}getLabelVisibility(e){let t=this.getFilterData(e).y.multiply(255);return new o(1).subtract(t)}getAnimationValue(e){return this.getAnimationData(e).x}getSizeValue(e){return this.getVisualVariableData(e).x}getColorValue(e){return this.getVisualVariableData(e).y}getOpacityValue(e){return this.getVisualVariableData(e).z}getRotationValue(e){return this.getVisualVariableData(e).w}};r([U(E)],ct.prototype,"filterFlags",void 0),r([U(E)],ct.prototype,"animation",void 0),r([U(E)],ct.prototype,"gpgpu",void 0),r([U(E)],ct.prototype,"localTimeOrigin",void 0),r([U(E)],ct.prototype,"visualVariableData",void 0),r([U(E)],ct.prototype,"dataDriven0",void 0),r([U(E)],ct.prototype,"dataDriven1",void 0),r([U(E)],ct.prototype,"dataDriven2",void 0);var Hi=class extends M{getAttributeDataCoords(e){if(!this._uv){let t=Dn(e),i=this.size,a=oi(t.x),s=oi(t.y).multiply(oi(256)),l=oi(t.z).multiply(oi(256)).multiply(oi(256)),u=He(a.add(s).add(l)),c=be(u,i),f=u.subtract(c).divide(i);this._uv=new g(c,f).add(.5).divide(i)}return this._uv}};r([p(o)],Hi.prototype,"size",void 0);var wi=class extends M{};r([p(o)],wi.prototype,"activeReasons",void 0),r([p(o)],wi.prototype,"highlightAll",void 0);var Pt=class extends M{};r([p(g)],Pt.prototype,"position",void 0),r([p(o)],Pt.prototype,"distance",void 0),r([p(o)],Pt.prototype,"smallSymbolDistance",void 0),r([p(o)],Pt.prototype,"smallSymbolSizeThreshold",void 0),r([p(_)],Pt.prototype,"tlbr",void 0);var Se=class extends M{};r([p(q)],Se.prototype,"displayViewScreenMat3",void 0),r([p(q)],Se.prototype,"displayViewMat3",void 0),r([p(q)],Se.prototype,"displayMat3",void 0),r([p(q)],Se.prototype,"viewMat3",void 0),r([p(q)],Se.prototype,"tileMat3",void 0),r([p(o)],Se.prototype,"displayZoomFactor",void 0),r([p(o)],Se.prototype,"requiredZoomFactor",void 0),r([p(g)],Se.prototype,"tileOffset",void 0),r([p(o)],Se.prototype,"currentScale",void 0),r([p(o)],Se.prototype,"currentZoom",void 0),r([p(o)],Se.prototype,"metersPerSRUnit",void 0),r([p(o)],Se.prototype,"rotation",void 0),r([p(o)],Se.prototype,"pixelRatio",void 0),r([p(o)],Se.prototype,"scaleFactor",void 0);var de=class extends lt{};r([h(0,I)],de.prototype,"id",void 0),r([h(1,o)],de.prototype,"bitset",void 0),r([h(2,g)],de.prototype,"pos",void 0);var ce=class extends wt{};r([h(14,g)],ce.prototype,"nextPos1",void 0),r([h(15,g)],ce.prototype,"nextPos2",void 0);var pe=class extends Vt{},re=class extends ut{clip(e,t){let i=new o(0),a=this.getFilterFlags(e);if(i=i.add(He(2).multiply(He(1).subtract(fo(a,0)))),this.inside?i=i.add(He(2).multiply(He(1).subtract(fo(a,1)))):this.outside?i=i.add(He(2).multiply(fo(a,1))):this.highlight&&(i=i.add(He(2).multiply(He(1).subtract(this._checkHighlight(a))))),t!=null){let s=new o(1).subtract($(t.x,this.view.currentZoom)),l=$(t.y,this.view.currentZoom);i=i.add(new o(2).multiply(s.add(l)))}return i}getFragmentOutput(e,t,i=new o(1/255)){let a=new Ue;return a.fragColor=this._maybeWriteHittest(t)??this._maybeHighlight(e,i)??e,a}_maybeHighlight(e,t){return this.highlight?new _(e.rgb,$(t,e.a)):null}_checkHighlight(e){let t=this._checkHighlightBit(e,0);for(let i=1;i<Qa;i++)t=t.add(this._checkHighlightBit(e,i));return $(new o(.1),t.add(this.highlight.highlightAll))}_checkHighlightBit(e,t){return Cn(e,t).multiply(te(this.highlight.activeReasons,t))}computeHittestTriangle(e,t,i){let{viewMat3:a,tileMat3:s}=this.view,l=a.multiply(s),{nextPos1:u,nextPos2:c}=t;return{pos0:l.multiply(new I(e.pos,1)).xy,pos1:l.multiply(new I(u,1)).xy,pos2:l.multiply(new I(c,1)).xy}}maybeRunHittest(e,t,i){if(this.hittestRequest==null)return null;let a=this.hittest(e,t,i),s=H(a,new o(oe)),l=H(a,new o(ao)),u=y(l,()=>new _(new o(1/255),0,0,0),y(s,()=>new _(new o(2/255),0,0,0),new _(J))),c=y(ye(s,l),new o(0),new o(2)),f=this.getAttributeDataCoords(e.id),m=zn(f);return c=c.add(this.clip(e.id,e.zoomRange)),{glPointSize:new o(1),glPosition:new _(m,c,1),color:u}}_maybeWriteHittest(e){return this.hittestRequest!=null?e.color:null}getAttributeDataCoords(e){return this.storage.getAttributeDataCoords(e)}getVVData(e){return this.storageTextures.getVVData(this.getAttributeDataCoords(e))}getFilterFlags(e){return this.storageTextures.getFilterFlags(this.getAttributeDataCoords(e))}getLocalTimeOrigin(e){return this.storageTextures.getLocalTimeOrigin(this.getAttributeDataCoords(e))}getSizeValue(e){return this.storageTextures.getSizeValue(this.getAttributeDataCoords(e))}getColorValue(e){return this.storageTextures.getColorValue(this.getAttributeDataCoords(e))}getOpacityValue(e){return this.storageTextures.getOpacityValue(this.getAttributeDataCoords(e))}getRotationValue(e){return this.storageTextures.getRotationValue(this.getAttributeDataCoords(e))}};r([ue],re.prototype,"inside",void 0),r([ue],re.prototype,"outside",void 0),r([G(wi)],re.prototype,"highlight",void 0),r([p(Hi)],re.prototype,"storage",void 0),r([U(ct)],re.prototype,"storageTextures",void 0),r([p(Se)],re.prototype,"view",void 0),r([G(Pt)],re.prototype,"hittestRequest",void 0);var qe=class extends M{getPatternOffsetAtTileOrigin(e,t=new o(0),i=new o(1)){let a=new g(dn).divide(e),s=e.multiply(Ni(this.maxIntsToLocalOrigin.multiply(a))).add(this.tileOffsetFromLocalOrigin).subtract(new o(.5).multiply(e));return s=new g(s.x.multiply(i).subtract(s.y.multiply(t)),s.x.multiply(t).add(s.y.multiply(i))),be(s,e)}};r([p(g)],qe.prototype,"tileOffsetFromLocalOrigin",void 0),r([p(g)],qe.prototype,"maxIntsToLocalOrigin",void 0);var me=class extends M{};r([p(g)],me.prototype,"size",void 0);var De=class extends M{getColor(e,t,i){return ae([ye(Ce(e),i),t],[Ie(e,this.values.first()),this.colors.first()],[he(e,this.values.last()),this.colors.last()],[!0,()=>{let a=this.values.findIndex(f=>O(f,e)),s=this.values.get(a),l=a.subtract(1),u=this.values.get(l),c=e.subtract(u).divide(s.subtract(u));return B(this.colors.get(l),this.colors.get(a),c)}])}};r([p(ge.ofType(_,8))],De.prototype,"colors",void 0),r([p(ge.ofType(o,8))],De.prototype,"values",void 0);var Ae=class extends M{getOpacity(e){return ae([Ce(e),new o(1)],[Ie(e,this.opacityValues.first()),this.opacities.first()],[he(e,this.opacityValues.last()),this.opacities.last()],[!0,()=>{let t=this.opacityValues.findIndex(u=>O(u,e)),i=this.opacityValues.get(t),a=t.subtract(1),s=this.opacityValues.get(a),l=e.subtract(s).divide(i.subtract(s));return B(this.opacities.get(a),this.opacities.get(t),l)}])}};r([p(ge.ofType(o,8))],Ae.prototype,"opacities",void 0),r([p(ge.ofType(o,8))],Ae.prototype,"opacityValues",void 0);var Rt=class extends M{getVVRotationMat4(e){return y(Ce(e),Si.identity(),()=>{let t=this.getNormalizedAngle(e).multiply(ra),i=st(t),a=rt(t);return new Si(a,i,0,0,i.multiply(new o(-1)),a,0,0,0,0,1,0,0,0,0,1)})}getVVRotationMat3(e){return y(Ce(e),q.identity(),()=>{let t=this.getNormalizedAngle(e).multiply(ra),i=st(t),a=rt(t);return new q(a,i,0,i.multiply(new o(-1)),a,0,0,0,1)})}getNormalizedAngle(e){let t=H(this.rotationType,new o(1));return y(t,new o(90).subtract(e),e)}};r([p(o)],Rt.prototype,"rotationType",void 0);var et=class extends M{getSize(e,t){let i=this.minMaxValueAndSize.xy,a=this.minMaxValueAndSize.zw;return y(Ce(e),t,()=>{let s=e.subtract(i.x).divide(i.y.subtract(i.x)),l=ne(s,new o(0),new o(1));return a.x.add(l.multiply(a.y.subtract(a.x)))})}};r([p(_)],et.prototype,"minMaxValueAndSize",void 0);var Ye=class extends M{getSizeForViewScale(e){return ae([Ie(e,this.values.first()),this.sizes.first()],[he(e,this.values.last()),this.sizes.last()],[!0,()=>{let t=this.values.findIndex(u=>O(u,e)),i=this.values.get(t),a=t.subtract(1),s=this.values.get(a),l=e.subtract(s).divide(i.subtract(s));return B(this.sizes.get(a),this.sizes.get(t),l)}])}};r([p(ge.ofType(o,8))],Ye.prototype,"sizes",void 0),r([p(ge.ofType(o,8))],Ye.prototype,"values",void 0);var We=class extends M{getSize(e,t){let i=ae([Ce(e),t],[Ie(e,this.values.first()),this.sizes.first()],[he(e,this.values.last()),this.sizes.last()],[!0,()=>{let a=this.values.findIndex(f=>O(f,e)),s=this.values.get(a),l=a.subtract(1),u=this.values.get(l),c=e.subtract(u).divide(s.subtract(u));return B(this.sizes.get(l),this.sizes.get(a),c)}]);return y(Ce(i),t,i)}};r([p(ge.ofType(o,8))],We.prototype,"sizes",void 0),r([p(ge.ofType(o,8))],We.prototype,"values",void 0);var tt=class extends M{getSize(e,t){return y(Ce(e),t,e.multiply(this.unitValueToPixelsRatio))}};r([p(o)],tt.prototype,"unitValueToPixelsRatio",void 0);function _a(n){return n.visualVariableSizeMinMaxValue!=null||n.visualVariableSizeScaleStops!=null||n.visualVariableSizeStops!=null||n.visualVariableSizeUnitValue!=null}function Lt(n,e,t){if(_a(n)){let i=n.getSizeValue(e);return n.visualVariableSizeMinMaxValue?.getSize(i,t)??n.visualVariableSizeScaleStops?.getSizeForViewScale(n.view.currentScale)??n.visualVariableSizeStops?.getSize(i,t)??n.visualVariableSizeUnitValue?.getSize(i,t)}return t}function pt(n,e,t,i=new Tt(!1)){if(n.visualVariableColor==null)return t;let a=n.getColorValue(e);return n.visualVariableColor.getColor(a,t,i)}function dt(n,e){if(n.visualVariableOpacity==null)return new o(1);let t=n.getOpacityValue(e);return n.visualVariableOpacity.getOpacity(t)}function vo(n,e){if(n.visualVariableRotation==null)return q.identity();let t=n.getRotationValue(e);return n.visualVariableRotation.getVVRotationMat3(t)}function Ln(n,e){if(n.visualVariableRotation==null)return new o(0);let t=n.getRotationValue(e);return n.visualVariableRotation.getNormalizedAngle(t)}var mt=class extends de{};r([h(3,g)],mt.prototype,"offset",void 0),r([h(4,_)],mt.prototype,"sizing",void 0),r([h(5,_)],mt.prototype,"value1Position2Value2",void 0),r([h(6,_)],mt.prototype,"animationPointerAndBaseSizeAndReferenceSize",void 0),r([h(7,g)],mt.prototype,"zoomRange",void 0),r([h(8,o)],mt.prototype,"lineLength",void 0);var Vi=class extends pe{},we=class extends re{_vertexPreamble(e,t,i){let{id:a,offset:s,animationPointerAndBaseSizeAndReferenceSize:l,sizing:u}=e,c=l.xy,f=l.z,m=l.w,v=u.xy,S=this._getEvalParams(e,v,i),x,T;if(e.value1Position2Value2){let fe=Pe(c,6,S).a,ze=e.pos,nt=e.value1Position2Value2.yz,Qi=e.value1Position2Value2.x,ta=e.value1Position2Value2.w,Li=fe.subtract(Qi).divide(ta.subtract(Qi));T=ze.add(nt.subtract(ze).multiply(Li)),x=$(new o(1),Li).add($(new o(0),ve(Li)))}else T=e.pos,x=new o(0);let F=u.z,C=te(e.bitset,Fe.bitset.isStroke),D=u.w,z=te(e.bitset,Fe.bitset.scaleSymbolsProportionally),R=Pe(c,0,S),N=ae([H(te(e.bitset,Fe.bitset.isMapAligned),new o(1)),this.view.rotation.divide(180).multiply(Math.PI)],[!0,new o(0)]),P=new xn(rt(N),st(N.multiply(-1)),st(N),rt(N)).multiply(R.xy),L=R.z.subtract(N).subtract(t),k=R.w,Y=te(e.bitset,Fe.bitset.isSDF),A=Lt(this,a,new o(m)).divide(new o(m));return{baseSize:f,animationPointer:c,strokeWidth:F,isOutline:C,unscaledDistanceToPx:D,scaleSymbolsProportionally:z,isSDF:Y,position:this._getScreenPosition({id:a,pos:T,offset:s,referenceSize:m,translation:P,rotation:L,scale:k,vvScale:A}),evalParams:S,vvScale:A,scale:k,clip:x}}_getScreenPosition(e){let{pos:t,translation:i,rotation:a,scale:s,offset:l,id:u,vvScale:c}=e,f=Ln(this,u).multiply(Math.PI/180),m=i.x.multiply(4/3),v=i.y.multiply(-1).multiply(4/3),S=st(f),x=rt(f),T=x.multiply(m).add(ve(S).multiply(v)),F=S.multiply(m).add(x.multiply(v)),C=st(a.subtract(f)),D=rt(a.subtract(f)),z=new o(0),R=new o(1),{pixelRatio:N}=this.animationInfo,P=new q(R,z,z,z,R,z,T.multiply(N),F.multiply(N),R),L=new q(D,C.multiply(-1),z,C,D,z,0,0,R),k=s.multiply(c).multiply(N).multiply(4/3),Y=L.multiply(k),A=this.animationInfo.toScreen.multiply(new I(t,1)),fe=P.multiply(A).xy,ze=Y.multiply(new I(l,0)).xy;return fe.add(ze)}_clip(e,t){let i=super.clip(e,t),a=Ie(this._getLocalTimeOrigin(e),new o(0));return bi.forceGlobalTimeOrigin||(i=i.add(ae([a,()=>new o(2)],[!0,()=>new o(0)]))),i}_getLocalTimeOrigin(e){return this.getLocalTimeOrigin(e)}_toNdc(e){return this.animationInfo.toNdc.multiply(new I(e,1)).xy}_getEvalParams(e,t,i){let{globalTime:a,animationTextureSize:s}=this.animationInfo;return{globalTime:a,localTimeOrigin:this._getLocalTimeOrigin(e.id),animationTextureSize:s,animationTexture:this.animationTexture,pixelDimensions:t,lineLength:i}}_getColor(e,t){return y(H(t.isSDF,new o(1)),this._getSDFColor(e,t),this._getSpriteColor(e,t))}_getSpriteColor(e,t){return W(this.mosaicTexture,e).multiply(t.color)}_getSDFColor(e,t){let i=W(this.mosaicTexture,e),a=new o(.5).subtract(Wt(i)).multiply(t.distanceToPx).multiply(io),s=ne(new o(.5).subtract(a),new o(0),new o(1)),l=t.color.multiply(s),u=t.outlineSize.multiply(.5),c=bt(a).subtract(u),f=ne(new o(.5).subtract(c),new o(0),new o(1)),m=t.outlineColor.multiply(f);return new o(1).subtract(m.a).multiply(l).add(m)}};function Pe(n,e,t){let i=n.add(new g(e,0)),a=W(t.animationTexture,i.add(.5).divide(t.animationTextureSize)).xy;return n=n.add(a),Sn(d({animationPointer:n},t),_,null,s=>{let{out:l}=s;if(!l)throw new Error("out is null");return on(b(d({},s),{out:l}))})}r([p(me)],we.prototype,"mosaicInfo",void 0),r([p(It)],we.prototype,"animationInfo",void 0),r([p(qe)],we.prototype,"localTileOffset",void 0),r([U(E)],we.prototype,"mosaicTexture",void 0),r([G(De)],we.prototype,"visualVariableColor",void 0),r([G(Ae)],we.prototype,"visualVariableOpacity",void 0),r([G(et)],we.prototype,"visualVariableSizeMinMaxValue",void 0),r([G(Ye)],we.prototype,"visualVariableSizeScaleStops",void 0),r([G(We)],we.prototype,"visualVariableSizeStops",void 0),r([G(tt)],we.prototype,"visualVariableSizeUnitValue",void 0),r([G(Rt)],we.prototype,"visualVariableRotation",void 0),r([U(E)],we.prototype,"animationTexture",void 0);var Zt=class extends mt{};r([h(9,_)],Zt.prototype,"tlbr",void 0),r([h(10,o)],Zt.prototype,"angle",void 0);var jt=class extends wt{};r([h(13,g)],jt.prototype,"nextPos1",void 0),r([h(14,g)],jt.prototype,"nextPos2",void 0);var Fi=class extends Vi{},Ii=class extends we{constructor(){super(...arguments),this.computeAttributes={pos:["nextPos1","nextPos2"]}}_fragmentPoly(e){let t=be(e.uv,new o(1)),i=B(e.tlbr.xy,e.tlbr.zw,t);return this._getColor(i,{color:e.color,distanceToPx:e.distanceToPx,isSDF:e.isSDF,outlineColor:e.outlineColor,outlineSize:e.strokeWidth})}_vertexPoly(e){let{position:t,animationPointer:i,evalParams:a,isOutline:s,unscaledDistanceToPx:l,vvScale:u,strokeWidth:c,scaleSymbolsProportionally:f,scale:m,isSDF:v,baseSize:S,clip:x}=this._vertexPreamble(e,new o(0),e.lineLength||new o(0)),T=this._toNdc(t),F=Pe(i,1,a);F=new _(F.rgb.multiply(F.a),F.a);let C=y(ke(e.bitset,Fe.bitset.colorLocked),F,Pe(i,2,a));C=new _(C.rgb.multiply(C.a),C.a);let D=Pe(i,3,a);D=new _(D.rgb.multiply(D.a),D.a);let z=Pe(i,4,a).a,R=Pe(i,5,a).a,N=pt(this,e.id,F,ye(ke(e.bitset,Fe.bitset.colorLocked),new Tt(s))),P=B(N,C,D),L=dt(this,e.id),k=B(L,z,R),Y=P.multiply(k),A=this.clip(e.id,e.zoomRange).add(x.multiply(2)),fe=l.multiply(u);return{unscaledDistanceToPx:l,vvScale:u,strokeWidth:c,scaleSymbolsProportionally:f,scale:m,isSDF:v,baseSize:S,ndc:T,color:Y,z:A,isOutline:s,evalParams:a,distanceToPx:fe}}};function tr(n,e){return Qe(n,uo(e))}function Et(n,e,t){let i=t.subtract(e),a=tr(n.subtract(e),i),s=ne(a.divide(Ee(i)),new o(0),new o(1));return ai(n,e.add(s.multiply(t.subtract(e))))}function se(n){let e=bt(n);return $(e.x.add(e.y).add(e.z),new o(1.05))}function le(n,e,t,i){let a=new q(t.x.multiply(i.y).subtract(i.x.multiply(t.y)),i.x.multiply(e.y).subtract(e.x.multiply(i.y)),e.x.multiply(t.y).subtract(t.x.multiply(e.y)),t.y.subtract(i.y),i.y.subtract(e.y),e.y.subtract(t.y),i.x.subtract(t.x),e.x.subtract(i.x),t.x.subtract(e.x)),s=e.x.multiply(t.y.subtract(i.y)),l=t.x.multiply(i.y.subtract(e.y)),u=i.x.multiply(e.y.subtract(t.y)),c=s.add(l).add(u);return new o(1).divide(c).multiply(a.multiply(new I(1,n)))}function ir(n,e,t,i){return H(se(le(n,e,t,i)),new o(1))}function ni(n,e,t,i){let a=t.subtract(e),s=i.subtract(e),l=On(a,s),u=xe(Be(l,new o(sa)),O(l,new o(-sa)));return ae([xe(fa(u),ir(n.xy,e,t,i)),new o(-1)],[!0,()=>{let c=Et(n,e,t),f=Et(n,t,i),m=Et(n,i,e);return Ge(Ge(c,f),m)}])}function Kt(n,e,t){let{viewMat3:i,tileMat3:a}=n.view,s=i.multiply(a),l=s.multiply(new I(e.pos,1)),u=s.multiply(new I(t.nextPos1,1)),c=s.multiply(new I(t.nextPos2,1));return ni(n.hittestRequest.position,l.xy,u.xy,c.xy)}function En(n,e,t){return ai(n,t).subtract(e)}function ft(n,e,t,i){let a=n.x,s=n.y,l=e.x,u=e.y,c=t.x,f=t.y,m=i.x,v=i.y,S=m.subtract(c),x=a.subtract(c),T=l.subtract(a),F=v.subtract(f),C=s.subtract(f),D=u.subtract(s),z=F.multiply(T).subtract(S.multiply(D)),R=S.multiply(C).subtract(F.multiply(x)).divide(z),N=T.multiply(C).subtract(D.multiply(x)).divide(z),P=xe(fa(H(z,new o(0))),xe(xe(he(R,new o(0)),Ie(R,new o(1))),xe(he(N,new o(0)),Ie(N,new o(1)))));return y(P,new o(1),new o(0))}function ya(n,e,t,i,a){return xe(xe(he(n.x,e),he(n.y,t)),xe(Be(n.x,i),Ie(n.y,a)))}function Mn(n,e,t,i){let a=i.xy,s=i.zw,l=new g(s.x,a.y),u=new g(a.x,s.y),c=Ge(a.x,s.x),f=Ge(a.y,s.y),m=_e(a.x,s.x),v=_e(a.y,s.y),S=le(new g(c,f),n,e,t),x=le(new g(m,v),n,e,t),T=le(new g(c,v),n,e,t),F=le(new g(m,f),n,e,t),C=xe(H(se(S),new o(1)),xe(H(se(x),new o(1)),xe(H(se(T),new o(1)),H(se(F),new o(1))))),D=ft(a,l,n.xy,e.xy).add(ft(l,s,n.xy,e.xy)).add(ft(u,s,n.xy,e.xy)).add(ft(u,a,n.xy,e.xy)),z=ft(a,l,n.xy,t.xy).add(ft(l,s,n.xy,t.xy)).add(ft(u,s,n.xy,t.xy)).add(ft(u,a,n.xy,t.xy)),R=ft(a,l,e.xy,t.xy).add(ft(l,s,e.xy,t.xy)).add(ft(u,s,e.xy,t.xy)).add(ft(u,a,e.xy,t.xy)),N=ya(n.xy,c,f,m,v),P=ya(e.xy,c,f,m,v),L=ya(t.xy,c,f,m,v),k=xe(N,xe(P,L));return{hasIntersectingSegments:ye(O(D,new o(0)),ye(O(z,new o(0)),O(R,new o(0)))),allTriangleVerticesInside:k,triangleContainsRect:C}}function ho(n,e,t,i){let{hasIntersectingSegments:a,allTriangleVerticesInside:s,triangleContainsRect:l}=Mn(n,e,t,i);return y(a,new o(ao),y(ye(s,l),new o(oe),new o(J)))}function Me(n,e,t,i){let{hasIntersectingSegments:a,allTriangleVerticesInside:s,triangleContainsRect:l}=Mn(n,e,t,i);return y(ye(a,ye(s,l)),new o(oe),new o(J))}function Ve(n){return xe(he(n.tlbr.x,new o(0)),he(n.tlbr.y,new o(0)),he(n.tlbr.z,new o(0)),he(n.tlbr.w,new o(0)))}var _t=class extends de{};r([h(3,_)],_t.prototype,"color",void 0),r([h(4,g)],_t.prototype,"zoomRange",void 0);var Re=class extends re{constructor(){super(...arguments),this.type="FillShader",this.computeAttributes={pos:["nextPos1","nextPos2"]}}vertex(e,t){let i=dt(this,e.id),a=pt(this,e.id,e.color).multiply(i),s=this.view.displayViewScreenMat3.multiply(new I(e.pos.xy,1)),l=this.clip(e.id,e.zoomRange);return d({glPosition:new _(s.xy,l,1),color:a},this.maybeRunHittest(e,t,null))}fragment(e){return this.getFragmentOutput(e.color,e,new o(0))}hittest(e,t){let{pos0:i,pos1:a,pos2:s}=this.computeHittestTriangle(e,t,null),l=Ve(this.hittestRequest);return y(l,()=>{let{tlbr:u}=this.hittestRequest;return Me(i,a,s,u)},()=>{let u=Kt(this,e,t);return y(O(u,this.hittestRequest.distance),new o(J),new o(oe))})}};r([G(De)],Re.prototype,"visualVariableColor",void 0),r([G(Ae)],Re.prototype,"visualVariableOpacity",void 0),r([w(0,V(_t)),w(1,V(ce))],Re.prototype,"vertex",null),r([w(0,V(pe))],Re.prototype,"fragment",null);var Mt=class extends _t{};r([h(5,_)],Mt.prototype,"tlbr",void 0),r([h(6,o)],Mt.prototype,"width",void 0),r([h(7,o)],Mt.prototype,"height",void 0),r([h(8,g)],Mt.prototype,"offset",void 0),r([h(9,g)],Mt.prototype,"scale",void 0),r([h(10,o)],Mt.prototype,"angle",void 0);var xa=class extends pe{};function Sa(n,e,t,i,a){let s=H(te(a,ln),He(1)),l=Wt(new _(n,0));return y(s,ma(i.divide(e.x),t.divide(e.y),0,ve(t.divide(e.x)),i.divide(e.y),0,ga(da(l,0)),ga(da(0,l)),1),ma(i.divide(e.x),t.divide(e.y),0,ve(t.divide(e.x)),i.divide(e.y),0,0,0,1))}function Ta(n,e){let t=n.view.requiredZoomFactor,i=new g(e.width,e.height),a=i.multiply(e.scale).multiply(t),s=e.angle.multiply(yi),l=st(s),u=rt(s),c=Sa(e.id,a,l,u,e.bitset),f=n.localTileOffset.getPatternOffsetAtTileOrigin(i,l,u),m=t.multiply(e.scale).multiply(e.offset.subtract(f)).divide(a),v=new I(e.pos,1),S=c.multiply(v).xy.subtract(m),x=e.tlbr.divide(n.mosaicInfo.size.xyxy),T=te(e.bitset,oo);return n.visualVariableColor!=null&&(T=y(Ce(n.getColorValue(e.id)),new o(0),T)),{tileTextureCoord:S,tlbr:x,sampleAlphaOnly:T}}function ba(n,e){let t=be(e.tileTextureCoord,new o(1)),i=B(e.tlbr.xy,e.tlbr.zw,t),a=W(n.mosaicTexture,i);return a=y(O(e.sampleAlphaOnly,new o(.5)),a.aaaa,a),e.color.multiply(a)}var Nt=class extends Re{constructor(){super(...arguments),this.type="ComplexFillShader"}vertex(e,t){return d(d({},super.vertex(e,t)),Ta(this,e))}fragment(e){let t=ba(this,e);return this.getFragmentOutput(t,e,new o(0))}};r([p(me)],Nt.prototype,"mosaicInfo",void 0),r([U(E)],Nt.prototype,"mosaicTexture",void 0),r([p(qe)],Nt.prototype,"localTileOffset",void 0),r([w(0,V(Mt)),w(1,V(ce))],Nt.prototype,"vertex",null),r([w(0,V(xa))],Nt.prototype,"fragment",null);var Oi=class extends Ii{constructor(){super(...arguments),this.type="AnimatedFillShader"}vertex(e,t){let{distanceToPx:i,ndc:a,z:s,color:l,isOutline:u,strokeWidth:c,isSDF:f,scale:m,scaleSymbolsProportionally:v}=this._vertexPoly(e),S=this.view.requiredZoomFactor,x=e.sizing.xy,T=x.multiply(S),F=e.angle?e.angle.multiply(yi):new o(0),C=st(F),D=rt(F),z=Sa(e.id,T,C,D,e.bitset),R=this.localTileOffset.getPatternOffsetAtTileOrigin(x,C,D),N=S.multiply(e.offset.subtract(R)).divide(T),P=new I(e.pos,1),L=z.multiply(P).xy.subtract(N),k=e.tlbr.divide(this.mosaicInfo.size.xyxy);return d({glPosition:new _(a,s,1),tlbr:k,uv:L,color:l.multiply(new o(1).subtract(u)),outlineColor:l.multiply(u),distanceToPx:i,strokeWidth:c.multiply(B(new o(1),m,v)),isOutline:u,isSDF:f},this.maybeRunHittest(e,t,{}))}fragment(e){let t=this._fragmentPoly(e);return this.getFragmentOutput(t,e)}hittest(e,t,i){let{pos0:a,pos1:s,pos2:l}=this.computeHittestTriangle(e,t,null),u=Ve(this.hittestRequest);return y(u,()=>{let{tlbr:c}=this.hittestRequest;return Me(a,s,l,c)},()=>{let c=Kt(this,e,t);return y(O(c,this.hittestRequest.distance),new o(J),new o(oe))})}};r([w(0,V(Zt)),w(1,V(jt))],Oi.prototype,"vertex",null),r([w(0,V(Fi))],Oi.prototype,"fragment",null);var it=class extends de{};r([h(3,_)],it.prototype,"color",void 0),r([h(4,g)],it.prototype,"offset",void 0),r([h(5,g)],it.prototype,"normal",void 0),r([h(6,o)],it.prototype,"halfWidth",void 0),r([h(7,o)],it.prototype,"referenceHalfWidth",void 0),r([h(8,g)],it.prototype,"zoomRange",void 0);var ri=class extends pe{},Ht=class extends M{};function _o(n){return _e(new o(an).multiply($(n,new o(nn))),new o(1))}function si(n,e){let{halfWidth:t,normal:i}=n,a=_o(t),s=Ee(i).multiply(t);return ne(a.multiply(t.subtract(s)).divide(e.add(a).subtract(new o(1))),new o(0),new o(1))}function or(n,e){let{id:t,halfWidth:i,referenceHalfWidth:a}=e;if(_a(n)){let s=new o(2).multiply(a),l=Lt(n,t,s),u=new o(rn),c=y(O(i,u),i.divide(_e(a,u)),new o(1));return new o(.5).multiply(c).multiply(l)}return i}function li(n,e){let{id:t,offset:i,pos:a,normal:s,zoomRange:l}=e,{displayViewScreenMat3:u,displayViewMat3:c}=n.view,f=pt(n,t,e.color),m=dt(n,t),v=or(n,e),S=new o(.5).multiply(n.antialiasingControls.antialiasing),x=_e(v.add(S),new o(.45)).add(new o(.1).multiply(S)),T=_o(x).multiply(x).multiply(i).multiply(n.view.scaleFactor),F=c.multiply(new I(T,new o(0))),C=u.multiply(new I(a,new o(1))).add(F),D=new o(2).multiply($(v,new o(0))).add(n.clip(t,l)),z=new _(C.xy,D,1);return{color:f,opacity:m,halfWidth:x,normal:s,scaledOffset:T,scaledHalfWidth:v,glPosition:new _(z.xy,D,1)}}function ui(n,e){let{opacity:t,color:i}=n,a=si(n,e);return t.multiply(i).multiply(a)}r([p(o)],Ht.prototype,"antialiasing",void 0),r([p(o)],Ht.prototype,"blur",void 0);var Oe=class extends re{constructor(){super(...arguments),this.type="LineShader",this.computeAttributes={pos:["nextPos1","nextPos2"]}}vertex(e,t){let i=li(this,e);return d(d({},i),this.maybeRunHittest(e,t,i.halfWidth))}fragment(e){let t=ui(e,this.antialiasingControls.blur);return this.getFragmentOutput(t,e)}hittest(e,t,i){let{pos0:a,pos1:s,pos2:l}=this.computeHittestTriangle(e,t,null),u=Ve(this.hittestRequest),{distance:c,smallSymbolDistance:f,smallSymbolSizeThreshold:m,tlbr:v}=this.hittestRequest,S=$(i,m.multiply(.5)).multiply(c.subtract(f)),x=this.hittestRequest.position,T=Ge(Et(x,a,s),Et(x,a,l)).subtract(i).add(S);return y(u,Me(a,s,l,v),y(O(T,c),new o(J),new o(oe)))}};r([p(Ht)],Oe.prototype,"antialiasingControls",void 0),r([G(De)],Oe.prototype,"visualVariableColor",void 0),r([G(Ae)],Oe.prototype,"visualVariableOpacity",void 0),r([G(et)],Oe.prototype,"visualVariableSizeMinMaxValue",void 0),r([G(Ye)],Oe.prototype,"visualVariableSizeScaleStops",void 0),r([G(We)],Oe.prototype,"visualVariableSizeStops",void 0),r([G(tt)],Oe.prototype,"visualVariableSizeUnitValue",void 0),r([w(0,V(it)),w(1,V(ce))],Oe.prototype,"vertex",null),r([w(0,V(ri))],Oe.prototype,"fragment",null);var zi=class extends Zt{};r([h(10,o)],zi.prototype,"accumulatedDistance",void 0),r([h(11,g)],zi.prototype,"normal",void 0),r([h(12,g)],zi.prototype,"segmentDirection",void 0);var wa=class extends Fi{},ci=class extends Ii{constructor(){super(...arguments),this.type="AnimatedLineShader"}vertex(e,t){let{animationPointerAndBaseSizeAndReferenceSize:i}=e,a=i.xy,{distanceToPx:s,ndc:l,z:u,color:c,isOutline:f,strokeWidth:m,isSDF:v,baseSize:S,scale:x,scaleSymbolsProportionally:T,evalParams:F}=this._vertexPoly(e),C=e.sizing.xy,D=C.x.multiply(S).divide(C.y),z=Pe(a,6,F).a,R=e.accumulatedDistance.subtract(z),{normal:N}=e,P=e.normal.y,L=R.divide(this.view.displayZoomFactor).add(Qe(e.segmentDirection,e.offset)).divide(D),k=P.add(1).divide(2),Y=new g(L,k),A=e.tlbr.divide(this.mosaicInfo.size.xyxy),fe=S.divide(2),ze=new o(.5).multiply(this.antialiasingControls.antialiasing),nt=_e(fe.add(ze),new o(.45)).add(new o(.1).multiply(ze));return d({glPosition:new _(l,u,1),tlbr:A,uv:Y,color:c.multiply(new o(1).subtract(f)),outlineColor:c.multiply(f),distanceToPx:s,strokeWidth:m.multiply(B(new o(1),x,T)),isOutline:f,isSDF:v,halfWidth:nt,normal:N},this.maybeRunHittest(e,t,nt))}fragment(e){let t=this._fragmentPoly(e),i=si(e,this.antialiasingControls.blur),{halfWidth:a,normal:s}=e,l=_o(a),u=Ee(s).multiply(a),c=ne(l.multiply(a.subtract(u)).divide(l.subtract(new o(1))),new o(0),new o(1));return this.getFragmentOutput(t.multiply(c).multiply(i),e)}hittest(e,t,i){let{pos0:a,pos1:s,pos2:l}=this.computeHittestTriangle(e,t,null),u=Ve(this.hittestRequest),{distance:c,smallSymbolDistance:f,smallSymbolSizeThreshold:m,tlbr:v}=this.hittestRequest,S=$(i,m.multiply(.5)).multiply(c.subtract(f)),x=this.hittestRequest.position,T=Ge(Et(x,a,s),Et(x,a,l)).subtract(i).add(S);return y(u,Me(a,s,l,v),y(O(T,c),new o(J),new o(oe)))}};r([p(Ht)],ci.prototype,"antialiasingControls",void 0),r([w(0,V(zi)),w(1,V(jt))],ci.prototype,"vertex",null),r([w(0,V(wa))],ci.prototype,"fragment",null);var Bi=class extends mt{};r([h(9,g)],Bi.prototype,"uv",void 0),r([h(10,o)],Bi.prototype,"angle",void 0);var pi=class extends wt{};r([h(11,g)],pi.prototype,"offsetNextVertex1",void 0),r([h(12,g)],pi.prototype,"offsetNextVertex2",void 0),r([h(13,g)],pi.prototype,"textureUVNextVertex1",void 0),r([h(14,g)],pi.prototype,"textureUVNextVertex2",void 0);var Va=class extends Vi{};function Bt(n,e,t,i){return e.multiply(n.x).add(t.multiply(n.y)).add(i.multiply(n.z))}var di=class extends we{constructor(){super(...arguments),this.type="AnimatedMarkerShader",this.computeAttributes={offset:["offsetNextVertex1","offsetNextVertex2"],uv:["textureUVNextVertex1","textureUVNextVertex2"]}}vertex(e,t){let i=e.uv.divide(this.mosaicInfo.size),{position:a,animationPointer:s,evalParams:l,isOutline:u,unscaledDistanceToPx:c,vvScale:f,strokeWidth:m,scaleSymbolsProportionally:v,scale:S,isSDF:x,baseSize:T,clip:F}=this._vertexPreamble(e,e.angle,e.lineLength||new o(0)),C=this._toNdc(a),D=Pe(s,1,l);D=new _(D.rgb.multiply(D.a),D.a);let z=y(ke(e.bitset,Fe.bitset.colorLocked),D,Pe(s,2,l));z=new _(z.rgb.multiply(z.a),z.a);let R=Pe(s,3,l);R=new _(R.rgb.multiply(R.a),R.a);let N=Pe(s,4,l).a,P=Pe(s,5,l).a,L=pt(this,e.id,D,ye(ke(e.bitset,Fe.bitset.colorLocked),new Tt(u))),k=B(L,z,R),Y=dt(this,e.id),A=B(Y,N,P),fe=k.multiply(A),ze=this.clip(e.id,e.zoomRange).add(F.multiply(2)),nt=c.multiply(f);return d({glPosition:new _(C,ze,1),uv:i,color:fe.multiply(new o(1).subtract(u)),outlineColor:fe.multiply(u),distanceToPx:nt,strokeWidth:m.multiply(B(new o(1),S,v)),isOutline:u,isSDF:x},this.maybeRunHittest(e,t,{pos:e.pos,size:T,sizeCorrection:new o(1),isMapAligned:new o(1),vvRotationMat3:new q(1,0,0,0,1,0,0,0,1),placementMat3:new q(1,0,0,0,1,0,0,0,1),outlineSize:new o(1),distanceToPx:nt,isSDF:x}))}fragment(e){let t=this._getColor(e.uv,{color:e.color,distanceToPx:e.distanceToPx,isSDF:e.isSDF,outlineColor:e.outlineColor,outlineSize:e.strokeWidth});return bi.spotlightAnimatedSymbols&&(t=t.add(new _(0,.3,0,.3))),this.getFragmentOutput(t,e)}hittest(e,t,i){let{pos0:a,pos1:s,pos2:l}=this.computeHittestTriangle(e,t,i),u=Ve(this.hittestRequest);return y(u,()=>{let{tlbr:c}=this.hittestRequest;return ho(a,s,l,c)},()=>y(Be(i.size,this.hittestRequest.smallSymbolSizeThreshold),this._hittestSmallMarker(e,t,i),this._hittestMarker(e,t,i)))}_hittestSmallMarker(e,t,i){let{position:a,distance:s,smallSymbolDistance:l}=this.hittestRequest,u=s.subtract(l),{viewMat3:c,tileMat3:f}=this.view,m=c.multiply(f).multiply(new I(i.pos,1)).xy,v=i.size.multiply(.5),S=ai(m,a).subtract(v).add(u);return y(O(S,this.hittestRequest.distance),new o(J),new o(oe))}_hittestMarker(e,t,i){let a=this._vertexPreamble(d({},e),e.angle,new o(0)).position,s=this._vertexPreamble(b(d({},e),{offset:t.offsetNextVertex1}),e.angle,new o(0)).position,l=this._vertexPreamble(b(d({},e),{offset:t.offsetNextVertex2}),e.angle,new o(0)).position,u=this.hittestRequest.position,c=this.hittestRequest.distance,f=ni(u,a,s,l);return y(O(f,c),new o(J),this._hittestSamples(a,s,l,e,t,i))}_hittestSamples(e,t,i,a,s,l){let{outlineSize:u,isSDF:c,distanceToPx:f}=l,m=this.hittestRequest.position,v=this.hittestRequest.distance,S=le(m.add(new g(ve(v),ve(v))),e,t,i),x=le(m.add(new g(0,ve(v))),e,t,i),T=le(m.add(new g(v,ve(v))),e,t,i),F=le(m.add(new g(ve(v),0)),e,t,i),C=le(m,e,t,i),D=le(m.add(new g(v,0)),e,t,i),z=le(m.add(new g(ve(v),v)),e,t,i),R=le(m.add(new g(0,v)),e,t,i),N=le(m.add(new g(v,v)),e,t,i),P=a.uv.divide(this.mosaicInfo.size),L=s.textureUVNextVertex1.divide(this.mosaicInfo.size),k=s.textureUVNextVertex2.divide(this.mosaicInfo.size),Y={color:new _(1,1,1,1),outlineSize:u,outlineColor:new _(1,1,1,1),isSDF:c,distanceToPx:f},A=new o(0);return A=A.add(se(S).multiply(this._getColor(Bt(S,P,L,k),Y).a)),A=A.add(se(x).multiply(this._getColor(Bt(x,P,L,k),Y).a)),A=A.add(se(T).multiply(this._getColor(Bt(T,P,L,k),Y).a)),A=A.add(se(F).multiply(this._getColor(Bt(F,P,L,k),Y).a)),A=A.add(se(C).multiply(this._getColor(Bt(C,P,L,k),Y).a)),A=A.add(se(D).multiply(this._getColor(Bt(D,P,L,k),Y).a)),A=A.add(se(z).multiply(this._getColor(Bt(z,P,L,k),Y).a)),A=A.add(se(R).multiply(this._getColor(Bt(R,P,L,k),Y).a)),A=A.add(se(N).multiply(this._getColor(Bt(N,P,L,k),Y).a)),y(O(A,new o(.05)),new o(oe),new o(J))}};r([w(0,V(Bi)),w(1,V(pi))],di.prototype,"vertex",null),r([w(0,V(Va))],di.prototype,"fragment",null);var K=class extends lo{constructor(){super(...arguments),this.symbologyPlane=0,this._input=null}};function Ze(n){let e=1/n;return{antialiasing:e,blur:0+e}}var mi=class extends K{render(e,t){let{context:i,painter:a,pixelRatio:s}=e,{target:l}=t,{freezeGlobalTime:u}=bi,c=0,f=a.textureManager.animationStore.getTexture(i,c),m=[2/e.state.size[0],0,0,0,-2/e.state.size[1],0,-1,1,1],v=Array.from(Za(pa(),m)),S=Array.from(ja(pa(),v,l.transforms.displayViewScreenMat3)),x=t.instance.getInput(),T=a.textureManager.getMosaicInfo(e,t.textureKey,!1),{optionalAttributes:F}=x,C=F.zoomRange,D=F.value1Position2Value2,z="accumulatedDistance"in F&&F.accumulatedDistance,R="segmentDirection"in F&&F.segmentDirection,N="normal"in F&&F.normal;a.setShader({shader:this.shaders.geometry,uniforms:b(d(d({},ie(e,t.target,x.uniforms)),X(e,t.target)),{antialiasingControls:Ze(s),mosaicInfo:T,animationInfo:{globalTime:e.animationsEnabled?u===!1?e.time/1e3:u:0,animationTextureSize:[f.descriptor.width,f.descriptor.height],toScreen:S,toNdc:m,mapRotation:e.state.rotation,pixelRatio:e.state.pixelRatio},localTileOffset:Ft(t.target)}),textures:b(d({},Q(e)),{mosaicTexture:a.textureManager.getMosaicTexture(e,t.textureKey,!1),animationTexture:{unit:6,texture:f}}),defines:d({},j(e)),optionalAttributes:{zoomRange:C,value1Position2Value2:D,accumulatedDistance:z,segmentDirection:R,normal:N},useComputeBuffer:Z(e)}),a.setPipelineState(d({},ee(e))),a.submitDraw(e,t),u===!1&&e.animationsEnabled&&l.requestRender()}};var yo=class extends mi{constructor(){super(...arguments),this.type=2,this.symbologyPlane=2,this.shaders={geometry:new di}}},xo=class extends mi{constructor(){super(...arguments),this.type=3,this.symbologyPlane=2,this.shaders={geometry:new di}}},So=class extends mi{constructor(){super(...arguments),this.type=0,this.symbologyPlane=0,this.shaders={geometry:new Oi}}},To=class extends mi{constructor(){super(...arguments),this.type=1,this.symbologyPlane=1,this.shaders={geometry:new ci}}};var bo=class extends lt{};r([h(0,g)],bo.prototype,"pos",void 0);var Fa=class extends pe{},wo=class extends M{};r([p(o)],wo.prototype,"dotSize",void 0);var Gi=class extends M{};r([p(o)],Gi.prototype,"pixelRatio",void 0),r([p(o)],Gi.prototype,"tileZoomFactor",void 0);var ar=1e-6,Ot=class extends ut{constructor(){super(...arguments),this.type="DotDensityPointShader"}vertex(e){let t=new q(1,0,0,0,-1,0,0,1,1).multiply(new I(e.pos.xy.divide(512),1)),i=W(this.drawLocations,t.xy),a=_e(this.instance.dotSize.divide(2),new o(1)),s=new o(0);s=s.add($(i.a,new o(ar)).multiply(2));let l=a.add(this.instance.dotSize),u=this.view.displayViewScreenMat3.multiply(new I(e.pos.add(.5),1)),c=new _(u.xy,s,1),f=this.instance.dotSize.divide(l),m=new o(-1).divide(a.divide(l));return l=l.multiply(this.draw.pixelRatio.multiply(this.draw.tileZoomFactor)),{glPosition:c,glPointSize:l,color:i,ratio:f,invEdgeRatio:m}}fragment(e){let t=Ee(e.glPointCoord.subtract(.5)).multiply(2),i=co(new o(0),new o(1),e.invEdgeRatio.multiply(t.subtract(e.ratio)).add(1)),a=new Ue;return a.fragColor=e.color.multiply(i),a}};r([p(wo)],Ot.prototype,"instance",void 0),r([p(Gi)],Ot.prototype,"draw",void 0),r([p(Se)],Ot.prototype,"view",void 0),r([U(E)],Ot.prototype,"drawLocations",void 0),r([w(0,V(bo))],Ot.prototype,"vertex",null),r([w(0,V(Fa))],Ot.prototype,"fragment",null);var Vo=class extends de{};r([h(3,o)],Vo.prototype,"inverseArea",void 0);var Ci=class extends M{};r([p(ge.ofType(_,2))],Ci.prototype,"isActive",void 0),r([p(ge.ofType(_,8))],Ci.prototype,"colors",void 0),r([p(o)],Ci.prototype,"dotValue",void 0);var Di=class extends M{};r([p(o)],Di.prototype,"tileZoomFactor",void 0),r([p(o)],Di.prototype,"pixelRatio",void 0),r([p(o)],Di.prototype,"tileDotsOverArea",void 0);var Ui=class extends mo{};r([U(E)],Ui.prototype,"dotTexture0",void 0),r([U(E)],Ui.prototype,"dotTexture1",void 0);var zt=class extends re{constructor(){super(...arguments),this.type="DotDensityPolygonShader"}_dotThreshold(e,t,i){return e.divide(t).divide(i)}vertex(e){let t=new q(2/512,0,0,0,-2/512,0,-1,1,1).multiply(new I(e.pos,1)),i=this.clip(e.id),a=new _(t.xy,i,1),s=this.getVVData(e.id).multiply(this.instance.isActive.get(0)).multiply(e.inverseArea),l=this.storageTextures.getDataDrivenData0(this.getAttributeDataCoords(e.id)).multiply(this.instance.isActive.get(1)).multiply(e.inverseArea),u=this.draw.tileZoomFactor.multiply(512).divide(this.draw.pixelRatio),c=this._dotThreshold(s,this.instance.dotValue,this.draw.tileDotsOverArea),f=this._dotThreshold(l,this.instance.dotValue,this.draw.tileDotsOverArea),m=e.pos.add(.5).divide(u);return{glPosition:a,color:new _(0,0,0,0),textureCoords:m,thresholds0:c,thresholds1:f}}fragment(e){let t=new Ue,i=W(this.drawTextures.dotTexture0,e.textureCoords),a=W(this.drawTextures.dotTexture1,e.textureCoords),s=e.thresholds0.subtract(i),l=e.thresholds1.subtract(a),u,c=Si.fromColumns(this.instance.colors.get(0),this.instance.colors.get(1),this.instance.colors.get(2),this.instance.colors.get(3)),f=Si.fromColumns(this.instance.colors.get(4),this.instance.colors.get(5),this.instance.colors.get(6),this.instance.colors.get(7));if(this.blending){let m=$(new o(0),s),v=$(new o(0),l),S=Qe(m,s).add(Qe(v,l)),x=$(S,new o(0)),T=new o(1).subtract(x),F=S.add(x),C=s.multiply(m).divide(F),D=l.multiply(v).divide(F),z=c.multiply(C).add(f.multiply(D));u=T.multiply(z)}else{let m=_e(va(s),va(l)),v=$(m,new o(0)),S=new o(1).subtract(v),x=$(m,s),T=$(m,l),F=c.multiply(x).add(f.multiply(T));u=S.multiply(F)}return t.fragColor=u,t}hittest(e){return new o(J)}};r([ue],zt.prototype,"blending",void 0),r([p(Ci)],zt.prototype,"instance",void 0),r([p(Di)],zt.prototype,"draw",void 0),r([U(Ui)],zt.prototype,"drawTextures",void 0),r([w(0,V(Vo))],zt.prototype,"vertex",null),r([w(0,V(pe))],zt.prototype,"fragment",null);var nr={pos:{count:2,type:Xa.UNSIGNED_SHORT}},Fo=class{constructor(){this._dotTextureSize=0,this._dotTextures=null,this._dotMesh=null}destroy(){this._disposeTextures(),this._dotFBO?.dispose(),this._dotMesh?.destroy()}getFBO(e){if(this._dotFBO==null){let t=512,i=512,a=new xi(t,i);a.samplingMode=9728,a.wrapMode=33071;let s=new vn(e,new ro(to.DEPTH24_STENCIL8,t,i));this._dotFBO=new so(e,a,s)}return this._dotFBO}getDotDensityMesh(e){if(this._dotMesh==null){let t=512,i=t*t,a=2,s=new Int16Array(i*a);for(let l=0;l<t;l++)for(let u=0;u<t;u++)s[a*(u+l*t)]=u,s[a*(u+l*t)+1]=l;this._dotMesh=An.create(e,{primitive:Ka.POINTS,vertex:s,count:i,layout:nr})}return this._dotMesh}getDotDensityTextures(e,t,i){if(this._dotTextureSize===t&&this._seed===i||(this._disposeTextures(),this._dotTextureSize=t,this._seed=i),this._dotTextures===null){let a=new Ya(i);this._dotTextures=[this._allocDotDensityTexture(e,t,a),this._allocDotDensityTexture(e,t,a)]}return this._dotTextures}_disposeTextures(){if(this._dotTextures){for(let e=0;e<this._dotTextures.length;e++)this._dotTextures[e].dispose();this._dotTextures=null}}_allocDotDensityTexture(e,t,i){let a=new Float32Array(t*t*4);for(let l=0;l<a.length;l++)a[l]=i.getFloat();let s=new xi(t);return s.dataType=Yt.FLOAT,s.samplingMode=9728,new no(e,s,a)}};var Io=class extends K{constructor(){super(...arguments),this.type=12,this.shaders={polygon:new zt,point:new Ot,fill:new Re},this._resources=new Map}render(e,t){go(e)||Z(e)?this._renderPolygons(e,t):this._renderDotDensity(e,t)}_renderPolygons(e,t){let{painter:i}=e;i.setShader({shader:this.shaders.fill,uniforms:b(d({},X(e,t.target)),{visualVariableColor:null,visualVariableOpacity:null}),textures:Q(e),defines:d({},j(e)),optionalAttributes:{zoomRange:!1},useComputeBuffer:Z(e)}),i.setPipelineState(ee(e)),i.submitDraw(e,t)}_renderDotDensity(e,t){let{context:i,painter:a,requiredLevel:s}=e,l=t.instance.getInput().uniforms,u=this._getOrCreateResourcesRecord(i),c=u.getDotDensityTextures(i,512,l.seed),f=1/2**(s-t.target.key.level),m=512,v=m*window.devicePixelRatio*m*window.devicePixelRatio,S=1/f*(1/f),x=l.dotScale?e.state.scale/l.dotScale:1,T=l.dotValue*x*S;a.setShader({shader:this.shaders.polygon,uniforms:b(d({},X(e,t.target)),{instance:{isActive:l.isActive,colors:l.colors,dotValue:Math.max(1,T)},draw:{tileZoomFactor:f,pixelRatio:window.devicePixelRatio,tileDotsOverArea:v/(512*window.devicePixelRatio*512*window.devicePixelRatio)}}),textures:b(d({},Q(e)),{drawTextures:{dotTexture0:{unit:na,texture:c[0]},dotTexture1:{unit:Ja,texture:c[1]}}}),defines:b(d({},j(e)),{blending:l.blending}),optionalAttributes:{},useComputeBuffer:!1});let F=i.getViewport();i.setViewport(0,0,512,512);let C=i.boundFramebuffer,D=u.getFBO(i);i.bindFramebuffer(D),i.setClearColor(0,0,0,0),i.clear(16384),a.setPipelineState({color:{write:[!0,!0,!0,!0],blendMode:"composite"},depth:!1,stencil:!1}),a.updatePipelineState(i),a.submitDraw(e,t),i.bindFramebuffer(C),i.setViewport(F.x,F.y,F.width,F.height);let z=u.getFBO(i).colorTexture,R={shader:this.shaders.point,uniforms:{view:Pn(e,t.target),instance:{dotSize:l.dotSize},draw:{tileZoomFactor:1,pixelRatio:window.devicePixelRatio}},textures:{drawLocations:{unit:na,texture:z}},defines:d({},j(e)),optionalAttributes:{},useComputeBuffer:!1};a.setPipelineState(ee(e)),a.submitDrawMesh(i,R,u.getDotDensityMesh(i),{stencilRef:t.getStencilReference()})}shutdown(e){super.shutdown(e),this._resources.get(e)?.destroy(),this._resources.delete(e)}_getOrCreateResourcesRecord(e){let t=this._resources.get(e);return t==null&&(t=new Fo,this._resources.set(e,t)),t}};var Oo=class extends K{constructor(){super(...arguments),this.type=10,this.shaders={geometry:new Nt}}render(e,t){let{painter:i}=e,a=t.instance.getInput();i.setShader({shader:this.shaders.geometry,uniforms:b(d(d({},ie(e,t.target,a.uniforms)),X(e,t.target)),{mosaicInfo:i.textureManager.getMosaicInfo(e,t.textureKey),localTileOffset:Ft(t.target)}),textures:b(d({},Q(e)),{mosaicTexture:i.textureManager.getMosaicTexture(e,t.textureKey)}),defines:d({},j(e)),optionalAttributes:a.optionalAttributes,useComputeBuffer:Z(e)}),i.setPipelineState(ee(e)),i.submitDraw(e,t)}};var yt=class extends de{};r([h(3,g)],yt.prototype,"offset",void 0),r([h(4,_)],yt.prototype,"color",void 0),r([h(5,g)],yt.prototype,"normal",void 0),r([h(6,o)],yt.prototype,"halfWidth",void 0),r([h(7,o)],yt.prototype,"referenceHalfWidth",void 0),r([h(8,g)],yt.prototype,"zoomRange",void 0);var ki=class extends ri{};function qi(n,e,t){let{id:i,bitset:a}=e,s=te(a,sn),l=O(s,new o(.5)),u=li(n,e),c=y(l,u.halfWidth,new o(0)),f=dt(n,i),m=pt(n,i,e.color),v=y(l,y(ke(a,gn),m,e.color),m.multiply(f)),S=n.view.displayViewScreenMat3.multiply(new I(e.pos.xy,1)),x=n.clip(e.id),T=new _(S.xy,x,1),F=y(l,u.glPosition,T),C=t&&n.maybeRunHittest(e,t,l);return d({isOutline:s,color:v,opacity:new o(1),halfWidth:c,normal:u.normal,glPosition:F},C)}var gt=class extends re{constructor(){super(...arguments),this.computeAttributes={pos:["nextPos1","nextPos2"]}}};r([p(Ht)],gt.prototype,"antialiasingControls",void 0),r([G(De)],gt.prototype,"visualVariableColor",void 0),r([G(Ae)],gt.prototype,"visualVariableOpacity",void 0),r([G(et)],gt.prototype,"visualVariableSizeMinMaxValue",void 0),r([G(Ye)],gt.prototype,"visualVariableSizeScaleStops",void 0),r([G(We)],gt.prototype,"visualVariableSizeStops",void 0),r([G(tt)],gt.prototype,"visualVariableSizeUnitValue",void 0);var Xt=class extends gt{constructor(){super(...arguments),this.type="OutlineFillShader"}vertex(e,t){return qi(this,e,t)}fragment(e){let{color:t,isOutline:i}=e,a=O(i,new o(.5)),s=ui(e,this.antialiasingControls.blur),l=y(a,s,t),u=y(a,new o(1/255),new o(0));return this.getFragmentOutput(l,e,u)}hittest(e,t,i){let{pos0:a,pos1:s,pos2:l}=this.computeHittestTriangle(e,t,null),u=Ve(this.hittestRequest);return y(u,()=>{let{tlbr:c}=this.hittestRequest;return Me(a,s,l,c)},()=>{let c=Kt(this,e,t);return y(ye(i,O(c,this.hittestRequest.distance)),new o(J),new o(oe))})}};r([w(0,V(yt)),w(1,V(ce))],Xt.prototype,"vertex",null),r([w(0,V(ki))],Xt.prototype,"fragment",null);var Yi=class extends _t{};r([h(5,_)],Yi.prototype,"tlbr",void 0),r([h(6,o)],Yi.prototype,"inverseRasterizationScale",void 0);var Ia=class extends pe{};function rr(n){let e=new o(1),t=new o(0);return new q(e.divide(n.x),t.divide(n.y),0,ve(t.divide(n.x)),e.divide(n.y),0,0,0,1)}function Oa(n,e){let t=e.tlbr.xy,i=e.tlbr.zw,a=i.x.subtract(t.x),s=t.y.subtract(i.y),l=new g(a,s).multiply(e.inverseRasterizationScale),u=l.multiply(n.view.requiredZoomFactor),c=rr(u),f=n.localTileOffset.getPatternOffsetAtTileOrigin(l).divide(u),m=new I(e.pos,1);return{tileTextureCoord:c.multiply(m).xy.subtract(f),tlbr:e.tlbr.divide(n.mosaicInfo.size.xyxy)}}function za(n,e){let t=be(n.tileTextureCoord,new o(1)),i=B(n.tlbr.xy,n.tlbr.zw,t),a=W(e.mosaicTexture,i);return n.color.multiply(a)}var Gt=class extends Re{constructor(){super(...arguments),this.type="PatternFillShader"}vertex(e,t){return d(d({},super.vertex(e,t)),Oa(this,e))}fragment(e){let t=za(e,this);return this.getFragmentOutput(t,e,new o(0))}};r([p(me)],Gt.prototype,"mosaicInfo",void 0),r([U(E)],Gt.prototype,"mosaicTexture",void 0),r([p(qe)],Gt.prototype,"localTileOffset",void 0),r([w(0,V(Yi)),w(1,V(ce))],Gt.prototype,"vertex",null),r([w(0,V(Ia))],Gt.prototype,"fragment",null);var Wi=class extends yt{};r([h(9,_)],Wi.prototype,"tlbr",void 0),r([h(10,o)],Wi.prototype,"inverseRasterizationScale",void 0);var Zi=class extends ki{},Ut=class extends Xt{constructor(){super(...arguments),this.type="PatternOutlineFillShader"}vertex(e,t){return d(d({},qi(this,e,t)),Oa(this,e))}fragment(e){let{isOutline:t}=e,i=O(t,new o(.5)),a=ui(e,this.antialiasingControls.blur),s=za(e,this),l=y(i,a,s),u=y(i,new o(1/255),new o(0));return this.getFragmentOutput(l,e,u)}};r([p(me)],Ut.prototype,"mosaicInfo",void 0),r([U(E)],Ut.prototype,"mosaicTexture",void 0),r([p(qe)],Ut.prototype,"localTileOffset",void 0),r([w(0,V(Wi)),w(1,V(ce))],Ut.prototype,"vertex",null),r([w(0,V(Zi))],Ut.prototype,"fragment",null);var Nn=1/mn,xt=class extends de{};r([h(3,_)],xt.prototype,"color",void 0),r([h(4,_)],xt.prototype,"tlbr",void 0),r([h(5,o)],xt.prototype,"angle",void 0),r([h(6,o)],xt.prototype,"aux1",void 0),r([h(7,o)],xt.prototype,"aux2",void 0),r([h(8,g)],xt.prototype,"aux3",void 0),r([h(9,g)],xt.prototype,"aux4",void 0),r([h(10,g)],xt.prototype,"zoomRange",void 0);var Ca=class extends Zi{},kt=class extends gt{constructor(){super(...arguments),this.type="ComplexOutlineFillShader"}vertex(e,t){let{aux1:i,aux2:a,aux3:s,aux4:l}=e,u=b(d({},e),{width:i,height:a,offset:s,scale:l.multiply(Nn)}),c=b(d({},e),{halfWidth:i,referenceHalfWidth:a,offset:s,normal:l.subtract(fn).multiply(Nn)}),f=qi(this,c),m=Ta(this,u),v=O(f.isOutline,new o(.5));return d(d(d({},f),m),Object.assign({},this.maybeRunHittest(e,t,v)))}fragment(e){let{isOutline:t}=e,i=O(t,new o(.5)),a=ui(e,this.antialiasingControls.blur),s=ba(this,e),l=y(i,a,s),u=y(i,new o(1/255),new o(0));return this.getFragmentOutput(l,e,u)}hittest(e,t,i){let{pos0:a,pos1:s,pos2:l}=this.computeHittestTriangle(e,t,null),u=Ve(this.hittestRequest);return y(u,()=>{let{tlbr:c}=this.hittestRequest;return Me(a,s,l,c)},()=>{let c=Kt(this,e,t);return y(ye(i,O(c,this.hittestRequest.distance)),new o(J),new o(oe))})}};r([p(me)],kt.prototype,"mosaicInfo",void 0),r([U(E)],kt.prototype,"mosaicTexture",void 0),r([p(qe)],kt.prototype,"localTileOffset",void 0),r([w(0,V(xt)),w(1,V(ce))],kt.prototype,"vertex",null),r([w(0,V(Ca))],kt.prototype,"fragment",null);var zo=class extends K{constructor(){super(...arguments),this.type=11,this.shaders={geometry:new kt}}render(e,t){let{painter:i,pixelRatio:a}=e,s=t.instance.getInput();i.setShader({shader:this.shaders.geometry,uniforms:b(d(d({},ie(e,t.target,s.uniforms)),X(e,t.target)),{antialiasingControls:Ze(a),mosaicInfo:i.textureManager.getMosaicInfo(e,t.textureKey),localTileOffset:Ft(t.target)}),textures:b(d({},Q(e)),{mosaicTexture:i.textureManager.getMosaicTexture(e,t.textureKey)}),defines:d({},j(e)),optionalAttributes:s.optionalAttributes,useComputeBuffer:Z(e)}),i.setPipelineState(ee(e)),i.submitDraw(e,t)}};var Co=class extends K{constructor(){super(...arguments),this.type=15,this.shaders={geometry:new Re}}render(e,t){let{painter:i}=e,a=t.instance.getInput();i.setShader({shader:this.shaders.geometry,uniforms:d(d({},ie(e,t.target,a.uniforms)),X(e,t.target)),textures:Q(e),defines:j(e),optionalAttributes:a.optionalAttributes,useComputeBuffer:Z(e)}),i.setPipelineState(ee(e)),i.submitDraw(e,t)}};var fi=class extends _t{};r([h(5,_)],fi.prototype,"tlbr",void 0),r([h(6,g)],fi.prototype,"relativePosition",void 0),r([h(7,o)],fi.prototype,"gradientMethod",void 0),r([h(8,g)],fi.prototype,"relativeGradientSize",void 0);var Da=class extends pe{},$t=class extends Re{constructor(){super(...arguments),this.type="GradientFillShader"}vertex(e,t){let{tlbr:i,relativePosition:a,gradientMethod:s,relativeGradientSize:l}=e,u=y(ke(e.bitset,ca.isAbsolute),this.view.displayZoomFactor,new o(1));return b(d({},super.vertex(e,t)),{tlbr:i,relativePosition:a,gradientMethod:s,gradientSize:l.multiply(u),isDiscrete:te(e.bitset,ca.isDiscrete)})}fragment(e){let{tlbr:t,relativePosition:i,gradientMethod:a,gradientSize:s,isDiscrete:l}=e,u=y(O(l,new o(.5)),s.subtract(1),new g(0)),c=ae([H(a,new o(ua.rectangular)),()=>{let x=bt(i).add(u).divide(s);return Ti(_e(x.x,x.y))}],[H(a,new o(ua.circular)),Ti(po(Qe(i,i)).add(u.x).divide(s.x))],[!0,Ti(i.x.add(u.x).divide(s.x))]),f=new g(ne(c,new o(0),new o(1)),.5),m=B(t.xy,t.zw,f).divide(this.mosaicInfo.size),v=W(this.mosaicTexture,m),S=e.color.a;return this.getFragmentOutput(v.multiply(S),e,new o(0))}};r([p(me)],$t.prototype,"mosaicInfo",void 0),r([U(E)],$t.prototype,"mosaicTexture",void 0),r([w(0,V(fi)),w(1,V(ce))],$t.prototype,"vertex",null),r([w(0,V(Da))],$t.prototype,"fragment",null);var Do=class extends K{constructor(){super(...arguments),this.type=16,this.shaders={geometry:new $t},this.symbologyPlane=0}render(e,t){let{painter:i}=e,a=t.instance.getInput();i.setShader({shader:this.shaders.geometry,uniforms:b(d(d({},ie(e,t.target,a.uniforms)),X(e,t.target)),{mosaicInfo:i.textureManager.getMosaicInfo(e,t.textureKey)}),textures:b(d({},Q(e)),{mosaicTexture:i.textureManager.getMosaicTexture(e,t.textureKey)}),defines:d({},j(e)),optionalAttributes:a.optionalAttributes,useComputeBuffer:Z(e)}),i.setPipelineState(ee(e)),i.submitDraw(e,t)}};var Ao=class extends K{constructor(){super(...arguments),this.type=26,this.shaders={geometry:new Xt}}render(e,t){let{painter:i,pixelRatio:a}=e,s=t.instance.getInput();i.setShader({shader:this.shaders.geometry,uniforms:b(d(d({},ie(e,t.target,s.uniforms)),X(e,t.target)),{antialiasingControls:Ze(a)}),textures:Q(e),defines:d({},j(e)),optionalAttributes:s.optionalAttributes,useComputeBuffer:Z(e)}),i.setPipelineState(ee(e)),i.submitDraw(e,t)}};var Po=class extends K{constructor(){super(...arguments),this.type=28,this.shaders={geometry:new Gt}}render(e,t){let{painter:i}=e,a=t.instance.getInput();i.setShader({shader:this.shaders.geometry,uniforms:b(d(d({},ie(e,t.target,a.uniforms)),X(e,t.target)),{mosaicInfo:i.textureManager.getMosaicInfo(e,t.textureKey),localTileOffset:Ft(t.target)}),textures:b(d({},Q(e)),{mosaicTexture:i.textureManager.getMosaicTexture(e,t.textureKey)}),defines:d({},j(e)),optionalAttributes:a.optionalAttributes,useComputeBuffer:Z(e)}),i.setPipelineState(ee(e)),i.submitDraw(e,t)}};var Ro=class extends K{constructor(){super(...arguments),this.type=29,this.shaders={geometry:new Ut}}render(e,t){let{painter:i,pixelRatio:a}=e,s=t.instance.getInput();i.setShader({shader:this.shaders.geometry,uniforms:b(d(d({},ie(e,t.target,s.uniforms)),X(e,t.target)),{antialiasingControls:Ze(a),mosaicInfo:i.textureManager.getMosaicInfo(e,t.textureKey),localTileOffset:Ft(t.target)}),textures:b(d({},Q(e)),{mosaicTexture:i.textureManager.getMosaicTexture(e,t.textureKey)}),defines:d({},j(e)),optionalAttributes:s.optionalAttributes,useComputeBuffer:Z(e)}),i.setPipelineState(ee(e)),i.submitDraw(e,t)}};var Aa=class{constructor(e,t,i,a){this.startTime=e,this.startValue=t,this.endTime=i,this.endValue=a}getValue(e){if(e<=this.startTime)return this.startValue;if(e>=this.endTime)return this.endValue;let t=(e-this.startTime)/(this.endTime-this.startTime);return this.startValue+t*(this.endValue-this.startValue)}isForeverZero(e){return this.startValue===0&&this.endValue===0||this.endValue===0&&e>=this.endTime}};function Pa(n,e){return typeof n=="number"?n:n.getValue(e)}function Hn(n){return typeof n=="number"?n:n.endValue}function Rd(n,e){return typeof n=="number"?n===0:n.isForeverZero(e)}function sr(n,e,t,i){return n===t?n:new Aa(n,e,t,i)}function Ld(n,e,t){let i=Pa(n,t),a=i*e;return a===0?0:sr(t,i,t+a,0)}function Bn(n,e){let t=!0;return t=t&&n.collisions===e.collisions,t=t&&n.density===e.density,t=t&&n.interpolate===e.interpolate,t=t&&n.lineCollisionWidth===e.lineCollisionWidth,t=t&&n.lineSpacing===e.lineSpacing,t=t&&n.maxTurnAngle===e.maxTurnAngle,t=t&&n.minSpeedThreshold===e.minSpeedThreshold,t=t&&n.segmentLength===e.segmentLength,t=t&&n.smoothing===e.smoothing,t=t&&n.velocityScale===e.velocityScale,t=t&&n.verticesPerLine===e.verticesPerLine,t=t&&n.onlyForwardTracing===e.onlyForwardTracing,t=t&&n.continuous===e.continuous,t=t&&n.maxNumberOfStreamlines===e.maxNumberOfStreamlines,t=t&&lr(n.perturb,e.perturb),t}function lr(n,e){return!n&&!e||!(n&&!e||!n&&e)&&n?.rotation===e?.rotation&&n?.scale===e?.scale}function Gd(n){let e=pr(cr(n)),t=e,i=!0,a=Math.max(e/2,5),s=Math.round(At(n.maxPathLength)/a)+1,l=10,{density:u}=n,c=At(n.smoothing),f=n.flowRepresentation==="flow-from"?1:-1,m=.001,v=1,S=!0,x=!1,{continuous:T,perturb:F}=n;return{smoothing:c,interpolate:S,velocityScale:f,verticesPerLine:s,minSpeedThreshold:m,segmentLength:a,maxTurnAngle:v,collisions:i,lineCollisionWidth:t,lineSpacing:l,density:u,onlyForwardTracing:x,continuous:T,perturb:F,wrapAround:!1,maxNumberOfStreamlines:1/0}}function Ud(n,e,t,i){if(n.length===0)return[];let a=[],s=t.time-e.time,l=_n(n),u=l?hn(n[0].hasMagnitude):1,c=l?({vertices:f},m)=>{let v=f,S=m*u;return{x:v[S],y:v[S+1],time:v[S+2],speed:0}}:({vertices:f},m)=>f[m];for(let f of n){let{stage:m,vertices:v}=f;if(m===2)continue;let S=v.length/u,x=c(f,0),T=x.time,F=(s*i-T)%(c(f,S-1).time-T)+T,C=x.x,D=x.y,z=x.time;for(let R=1;R<S&&z<F;R++){let N=c(f,R),P=Math.min(N.time,F)-z,L=N.time-z;C+=(N.x-C)*(P/L),D+=(N.y-D)*(P/L),z=z+P}a.push(ur(C,D,e,t))}return a}function ur(n,e,t,i){return n/=t.size[0],e=1-(e/=t.size[1]),n*=t.extent.xmax-t.extent.xmin,e*=t.extent.ymax-t.extent.ymin,n+=t.extent.xmin,e+=t.extent.ymin,n-=i.extent.xmin,e-=i.extent.ymin,n/=i.extent.xmax-i.extent.xmin,e=1-(e/=i.extent.ymax-i.extent.ymin),{x:n*=i.size[0],y:e*=i.size[1]}}function cr(n){if(!n.hasVisualVariables("size"))return{kind:"constant",value:[At(n.trailWidth)]};let e=n.getVisualVariablesForType("size")[0],t=[],i=[],a;if(e.stops){for(let s of e.stops)t.push(s.value),i.push(At(s.size));a=e.stops.length}else t.push(e.minDataValue,e.maxDataValue),i.push(At(e.minSize),At(e.maxSize)),a=2;return{kind:"ramp",stops:t,values:i,count:a}}function pr(n){return n.kind==="constant"?n.value[0]:n.values[n.values.length-1]}function Gn(n){let e=n.toRgba();return[e[0]/255,e[1]/255,e[2]/255,e[3]]}function Yd(n){return{kind:"constant",value:[.1,.1,.1,1]}}function Wd(n){if(!n.hasVisualVariables("color"))return{kind:"constant",value:Gn(n.color)};let e=n.getVisualVariablesForType("color")[0],t=[],i=[];for(let a of e.stops)t.push(a.value),Array.prototype.push.apply(i,Gn(a.color));return{kind:"ramp",stops:t,values:i,count:e.stops.length}}function Zd(n){if(!n.hasVisualVariables("opacity"))return{kind:"constant",value:[1]};let e=n.getVisualVariablesForType("opacity")[0],t=[],i=[];for(let a of e.stops)t.push(a.value),i.push(a.opacity);return{kind:"ramp",stops:t,values:i,count:e.stops.length}}var Ct=8;function jd(n){if(n.kind==="constant")return{constant:n.value,count:1,stops:new Array(Ct).fill(0),values:new Array(Ct).fill(n.value)};let e=Math.min(n.count,Ct),t=new Array(Ct).fill(n.stops[e-1]),i=new Array(Ct).fill(null).map((a,s)=>{let l=4*Math.min(s,e-1);return n.values.slice(l,l+4)});for(let a=0;a<e;a++)t[a]=n.stops[a];return{constant:[0,0,0,0],count:e,stops:t,values:i}}function Kd(n){if(n.kind==="constant")return{constant:n.value[0],count:1,stops:new Array(Ct).fill(0),values:new Array(Ct).fill(n.value[0])};let e=Math.min(n.count,Ct),t=new Array(Ct).fill(n.stops[e-1]),i=new Array(Ct).fill(n.values[e-1]);for(let a=0;a<e;a++)t[a]=n.stops[a],i[a]=n.values[a];return{constant:0,count:e,stops:t,values:i}}function dr(n,e){return n===e||n!=null&&e!=null&&n.equals(e)}function Xd(n,e){if(!Bn(n.simulationSettings,e.simulationSettings)||!dr(n.timeExtent,e.timeExtent))return!1;let t=!0;return t=t&&n.loadImagery===e.loadImagery,t=t&&n.createFlowMesh===e.createFlowMesh,t=t&&n.color.kind===e.color.kind,t=t&&n.opacity.kind===e.opacity.kind,t=t&&n.size.kind===e.size.kind,t}var Un=36e5,$d=3600;var je=class extends M{};r([p(o)],je.prototype,"time",void 0),r([p(q)],je.prototype,"dvsMat3",void 0),r([p(q)],je.prototype,"displayViewMat3",void 0),r([p(o)],je.prototype,"displayOpacity",void 0),r([p(o)],je.prototype,"startTime",void 0),r([p(o)],je.prototype,"endTime",void 0);var ot=class extends M{};r([p(o)],ot.prototype,"trailLength",void 0),r([p(o)],ot.prototype,"flowSpeed",void 0),r([p(o)],ot.prototype,"featheringSize",void 0),r([p(o)],ot.prototype,"featheringOffset",void 0),r([p(o)],ot.prototype,"introFade",void 0),r([p(o)],ot.prototype,"fadeToZero",void 0),r([p(o)],ot.prototype,"decayRate",void 0);var Ai=class extends M{};r([p(o)],Ai.prototype,"min",void 0),r([p(o)],Ai.prototype,"max",void 0);var vt=class extends M{getValue(e,t){return t?ae([Ie(e,this.stops.first()),this.values.first()],[he(e,this.stops.get(this.count.subtract(1))),this.values.get(this.count.subtract(1))],[!0,()=>{let i=this.stops.findIndex(c=>O(c,e)),a=this.stops.get(i),s=i.subtract(1),l=this.stops.get(s),u=e.subtract(l).divide(a.subtract(l));return B(this.values.get(s),this.values.get(i),u)}]):this.constant}};r([p(_)],vt.prototype,"constant",void 0),r([p(ge.ofType(o,8))],vt.prototype,"stops",void 0),r([p(ge.ofType(_,8))],vt.prototype,"values",void 0),r([p(ii)],vt.prototype,"count",void 0);var Ke=class extends M{getValue(e,t){return t?ae([Ie(e,this.stops.first()),this.values.first()],[he(e,this.stops.get(this.count.subtract(1))),this.values.get(this.count.subtract(1))],[!0,()=>{let i=this.stops.findIndex(c=>O(c,e)),a=this.stops.get(i),s=i.subtract(1),l=this.stops.get(s),u=e.subtract(l).divide(a.subtract(l));return B(this.values.get(s),this.values.get(i),u)}]):this.constant}};function Lo(n,e,t){return n.add(e.multiply(new o(2)).multiply(t))}function Eo(n,e,t,i){return n.dvsMat3.multiply(new I(e,1)).add(n.displayViewMat3.multiply(new I(t.multiply(i),0))).xy}function Pi(n,e,t){let i=B(new o(0),Mi(e.multiply(new o(-1))),t);return Mi(e.multiply(n).multiply(new o(-1))).subtract(i).divide(new o(1).subtract(i))}function Mo(n,e,t,i){let a=ne(new o(.5).subtract(i.divide(t)),new o(0),new o(.5)),s=y(O(e,a),new o(1).subtract(e.subtract(a).divide(new o(.5).subtract(a))),new o(1));return n.multiply(s)}function Ri(n,e){return new _(n.rgb.multiply(e),e)}function kn(n,e){return be(n.multiply(3.634).add(e.multiply(5.153)).add(7.381),new o(1))}r([p(o)],Ke.prototype,"constant",void 0),r([p(ge.ofType(o,8))],Ke.prototype,"stops",void 0),r([p(ge.ofType(o,8))],Ke.prototype,"values",void 0),r([p(ii)],Ke.prototype,"count",void 0);var ji=class extends lt{};r([h(0,g)],ji.prototype,"position",void 0),r([h(1,g)],ji.prototype,"texcoord",void 0);var Ra=class extends Vt{},at=class extends ut{constructor(){super(...arguments),this.type="FlowImageryShader",this.vvColor=null,this.vvOpacity=null}vertex(e){let t=this.state.dvsMat3.multiply(new I(e.position,1)).xy;return{glPosition:new _(t,0,1),texcoord:e.texcoord}}fragment(e){let t=W(this.texture,e.texcoord),i=this.config.min.add(t.r.multiply(this.config.max.subtract(this.config.min))),a=this.color.getValue(i,this.vvColor),s=a.a.multiply(this.opacity.getValue(t.r,this.vvOpacity)).multiply(t.a),l=new Ue;return l.fragColor=Ri(a,s),l}};r([ue],at.prototype,"vvColor",void 0),r([ue],at.prototype,"vvOpacity",void 0),r([p(je)],at.prototype,"state",void 0),r([p(Ai)],at.prototype,"config",void 0),r([U(E)],at.prototype,"texture",void 0),r([p(vt)],at.prototype,"color",void 0),r([p(Ke)],at.prototype,"opacity",void 0),r([w(0,V(ji))],at.prototype,"vertex",null),r([w(0,V(Ra))],at.prototype,"fragment",null);var gi=class extends lt{};r([h(0,_)],gi.prototype,"xyts0",void 0),r([h(1,_)],gi.prototype,"xyts1",void 0),r([h(2,_)],gi.prototype,"typeIdFirstTimeLastTime",void 0),r([h(3,_)],gi.prototype,"extrudeInfo",void 0);var La=class extends Vt{},Xe=class extends ut{constructor(){super(...arguments),this.type="FlowParticlesShader",this.vvColor=null,this.vvOpacity=null,this.vvSize=null}vertex(e){let t=e.typeIdFirstTimeLastTime.z,i=e.typeIdFirstTimeLastTime.w.subtract(t),a=e.xyts0.xy,s=e.xyts0.z.subtract(t),l=e.xyts0.w,u=e.xyts1.xy,c=e.xyts1.z.subtract(t),f=e.xyts1.w,m=e.typeIdFirstTimeLastTime.x,v=e.typeIdFirstTimeLastTime.y,S=new o(2),x=new o(1),T=new o(2),F=new o(3),C=e.extrudeInfo.xy,D=e.extrudeInfo.zw,z=i.add(this.config.trailLength),R=be(this.state.time.multiply(this.config.flowSpeed),z),N=R.subtract(s).divide(c.subtract(s)),P=ne(N,new o(0),new o(1)),L=B(s,c,P),k=B(l,f,P),Y=B(C,D,P),A=uo(u.subtract(a)).multiply(new o(.5)),fe=H(m,S),ze=ye(H(v,x),H(v,T)),nt=y(fe,ye(Be(N,new o(0)),xe(O(N,new o(1)),wn(c,i))),Be(N,new o(0))),Qi=y(fe,ae([H(v,x),Y],[H(v,T),Y.multiply(new o(-1))],[H(v,F),Y.add(A)],[!0,Y.multiply(new o(-1)).add(A)]),ae([H(v,x),C],[H(v,T),C.multiply(new o(-1))],[H(v,F),Y],[!0,Y.multiply(new o(-1))])),ta=y(fe,ae([H(v,x),new g(.5,0)],[H(v,T),new g(.5,1)],[H(v,F),new g(1,0)],[!0,new g(1,1)]),ae([H(v,x),new g(.5,0)],[H(v,T),new g(.5,1)],[H(v,F),new g(.5,0)],[!0,new g(.5,1)])),Li=y(fe,L,y(ze,s,L)),ia=y(fe,k,y(ze,l,k)),Xn=y(fe,Pi(R.subtract(L).divide(this.config.trailLength),this.config.decayRate,this.config.fadeToZero),y(ze,Pi(R.subtract(s).divide(this.config.trailLength),this.config.decayRate,this.config.fadeToZero),Pi(R.subtract(L).divide(this.config.trailLength),this.config.decayRate,this.config.fadeToZero))),$n=new o(1).subtract(Mi(Li.multiply(new o(-1)))),ka=Lo(this.size.getValue(ia,this.vvSize),this.config.featheringSize,this.config.featheringOffset),qa=this.color.getValue(ia,this.vvColor),Jn=qa.a.multiply(this.opacity.getValue(ia,this.vvOpacity)).multiply(Xn).multiply(B(new o(1),$n,this.config.introFade)).multiply(this.state.displayOpacity),Qn=y(fe,B(a,u,P),y(ze,a,B(a,u,P))),er=Eo(this.state,Qn,Qi,ka);return{glPosition:y(nt,new _(0,0,-2,1),new _(er,0,1)),color:Ri(qa,Jn),texcoord:ta,size:ka}}fragment(e){let t=new Ue;return t.fragColor=Mo(e.color,Ee(e.texcoord.subtract(new g(.5))),e.size,this.config.featheringSize),t}};r([ue],Xe.prototype,"vvColor",void 0),r([ue],Xe.prototype,"vvOpacity",void 0),r([ue],Xe.prototype,"vvSize",void 0),r([p(je)],Xe.prototype,"state",void 0),r([p(ot)],Xe.prototype,"config",void 0),r([p(vt)],Xe.prototype,"color",void 0),r([p(Ke)],Xe.prototype,"opacity",void 0),r([p(Ke)],Xe.prototype,"size",void 0),r([w(0,V(gi))],Xe.prototype,"vertex",null),r([w(0,V(La))],Xe.prototype,"fragment",null);var vi=class extends lt{};r([h(0,I)],vi.prototype,"positionAndSide",void 0),r([h(1,I)],vi.prototype,"timeInfo",void 0),r([h(2,g)],vi.prototype,"extrude",void 0),r([h(3,o)],vi.prototype,"speed",void 0);var Ea=class extends Vt{},$e=class extends ut{constructor(){super(...arguments),this.type="FlowStreamlinesShader",this.vvColor=null,this.vvOpacity=null,this.vvSize=null}vertex(e){let t=e.positionAndSide.xy,i=this.color.getValue(e.speed,this.vvColor),a=this.opacity.getValue(e.speed,this.vvOpacity),s=Lo(this.size.getValue(e.speed,this.vvSize),this.config.featheringSize,this.config.featheringOffset),l=Eo(this.state,t,e.extrude,s),u=i.a.multiply(a);return{glPosition:new _(l,0,1),side:e.positionAndSide.z,timeInfo:e.timeInfo,color:Ri(i,u),size:s}}fragment(e){let t=e.timeInfo.z.subtract(e.timeInfo.y).add(this.config.trailLength),i=kn(e.timeInfo.y,e.timeInfo.z),a=be(i.multiply(t).add(this.state.time.multiply(this.config.flowSpeed)),t).add(e.timeInfo.y).subtract(e.timeInfo.x).divide(this.config.trailLength),s=e.color.multiply(this.state.displayOpacity).multiply(y(Be(a,new o(0)),new o(0),Pi(a,this.config.decayRate,this.config.fadeToZero))),l=new Ue;return l.fragColor=Mo(s,bt(e.side).divide(new o(2)),e.size,this.config.featheringSize),l}};r([ue],$e.prototype,"vvColor",void 0),r([ue],$e.prototype,"vvOpacity",void 0),r([ue],$e.prototype,"vvSize",void 0),r([p(je)],$e.prototype,"state",void 0),r([p(ot)],$e.prototype,"config",void 0),r([p(vt)],$e.prototype,"color",void 0),r([p(Ke)],$e.prototype,"opacity",void 0),r([p(Ke)],$e.prototype,"size",void 0),r([w(0,V(vi))],$e.prototype,"vertex",null),r([w(0,V(Ea))],$e.prototype,"fragment",null);var No=class extends lo{constructor(){super(...arguments),this.type=14,this.drawPhase=1,this.shaders={imagery:new at,particles:new Xe,streamlines:new $e}}render(e,t){let{painter:i}=e;i.setPipelineState({depth:!1,color:{write:[!0,!0,!0,!0],blendMode:"composite"},stencil:{write:!1,test:{compare:514,op:{fail:7680,zFail:7680,zPass:7680},mask:255}}}),this._renderResource(e,t.item.resources,this._createVisualState(e,t))}_renderResource(e,t,i){switch(t.kind){case"stack":return void this._renderStackResources(e,t,i);case"imagery":return void this._renderImageryResources(e,t,i);case"particles":return void this._renderParticlesResources(e,t,i);case"streamlines":return void this._renderStreamlinesResources(e,t,i)}}_createVisualState(e,t){let{item:i,dvsMat3:a}=t,s=e.time/1e3;return{time:e.animationsEnabled?s:Un,dvsMat3:a,displayViewMat3:e.state.displayViewMat3,displayOpacity:e.animationsEnabled?Pa(i.displayOpacity,s):Hn(i.displayOpacity),startTime:i.startTime,endTime:i.endTime}}_renderStackResources(e,t,i){for(let a of t.resources)this._renderResource(e,a,i)}_renderImageryResources({context:e,painter:t},i,a){let s=i.getProgramSpec(a);t.submitDrawMeshUntyped(e,{shader:this.shaders.imagery,uniforms:s.uniforms,textures:s.textures,defines:s.defines,optionalAttributes:s.optionalAttributes,useComputeBuffer:!1},i.mesh,{stencilRef:0})}_renderParticlesResources({context:e,painter:t},i,a){let s=i.getProgramSpec(a);t.submitDrawMeshUntyped(e,{shader:this.shaders.particles,uniforms:s.uniforms,textures:s.textures,defines:s.defines,optionalAttributes:s.optionalAttributes,useComputeBuffer:!1},i.mesh,{stencilRef:0})}_renderStreamlinesResources({context:e,painter:t},i,a){let s=i.getProgramSpec(a);t.submitDrawMeshUntyped(e,{shader:this.shaders.streamlines,uniforms:s.uniforms,textures:s.textures,defines:s.defines,optionalAttributes:s.optionalAttributes,useComputeBuffer:!1},i.mesh,{stencilRef:0})}};var Ki=class{constructor(e,t,i,a){this.dataType=e,this.samplingMode=t,this.pixelFormat=i,this.internalFormat=a}};function qn(n,e){let{textureFloatLinear:t,colorBufferFloat:i}=n.capabilities,a=i?.textureFloat,s=i?.textureHalfFloat,l=i?.floatBlend,u=n.driverTest.floatBufferBlend.result;if(!a&&!s)throw new eo("heatmap:missing-color-buffer-float","HeatmapRenderer requires the WebGL extension EXT_color_buffer_float or EXT_color_buffer_half_float or WEBGL_color_buffer_float.");if(!(l&&u||s))throw new eo("heatmap:missing-float-blend","HeatmapRenderer requires the WebGL extension EXT_float_blend or EXT_color_buffer_half_float."+(u?"":" This device claims support for EXT_float_blend, but does not actually support it."));let c=a&&l&&u,f=s,m=t,v=!!i?.R32F,S=!!i?.R16F;if(c&&m)return m||e.warnOnce("Missing WebGL extension OES_texture_float_linear. Heatmap quality may be reduced."),new Ki(Yt.FLOAT,m?9729:9728,v?6403:6408,v?aa.R32F:6408);if(f)return new Ki(Yt.HALF_FLOAT,9729,S?6403:6408,S?aa.R16F:6408);throw new eo("heatmap:missing-hardware-support","HeatmapRenderer requires WebGL extensions that allow it to render and blend to float or half float textures.")}var Im=new Ki(Yt.HALF_FLOAT,9728,6408,6408);var mr=()=>Wa.getLogger("esri.views.2d.engine.webgl.shaderGraph.techniques.heatmap.HeatmapResources"),Ho=class{destroy(){this._accumulateFramebuffer=oa(this._accumulateFramebuffer),this._resolveGradientTexture=oa(this._resolveGradientTexture),this._prevGradientHash=null,this._qualityProfile=null}get initialized(){return this._accumulateFramebuffer!=null&&this._resolveGradientTexture!=null}get accumulateFramebuffer(){return this._accumulateFramebuffer}get resolveGradientTexture(){return this._resolveGradientTexture}loadQualityProfile(e){if(this._qualityProfile==null){let t=qn(e,mr());this._qualityProfile=b(d({},t),{defines:{usesHalfFloatPrecision:t.dataType!==Yt.FLOAT}})}return this._qualityProfile}ensureAccumulateFBO(e,t,i){if(this._accumulateFramebuffer==null){let{dataType:a,samplingMode:s,pixelFormat:l,internalFormat:u}=this.loadQualityProfile(e),c=new xi(t,i);c.pixelFormat=l,c.internalFormat=u,c.dataType=a,c.samplingMode=s,c.wrapMode=33071;let f=new ro(to.DEPTH24_STENCIL8,t,i);this._accumulateFramebuffer=new so(e,c,f)}else{let{width:a,height:s}=this._accumulateFramebuffer;a===t&&s===i||this._accumulateFramebuffer.resize(t,i)}return this._accumulateFramebuffer}ensureResolveGradientTexture(e,t,i){if(this._resolveGradientTexture==null){let a=new xi;a.wrapMode=33071,this._resolveGradientTexture=new no(e,a),this._prevGradientHash=null}return this._prevGradientHash!==t&&(this._resolveGradientTexture.resize(i.length/4,1),this._resolveGradientTexture.setData(i),this._prevGradientHash=t),this._resolveGradientTexture}};function Bo(n){return n?.25:1}var Go=class extends de{};r([h(5,g)],Go.prototype,"offset",void 0);var Ma=class extends pe{},Xi=class extends M{};r([p(o)],Xi.prototype,"radius",void 0),r([p(o)],Xi.prototype,"isFieldActive",void 0);var Jt=class extends re{constructor(){super(...arguments),this.type="HeatmapAccumulateShader",this.usesHalfFloatPrecision=!1}vertex(e){let{radius:t,isFieldActive:i}=this.kernelControls,a=e.offset,s=i.multiply(this.getVVData(e.id).x).add(new o(1).subtract(i)),l=this.view.displayViewScreenMat3.multiply(new I(e.pos,1)).add(this.view.displayViewMat3.multiply(new I(a,0)).multiply(t)),u=this.clip(e.id);return d({glPosition:new _(l.xy,u,1),offset:a,fieldValue:s,color:new _(0)},this.maybeRunHittest(e,{},null))}fragment(e){let{offset:t,fieldValue:i}=e,a=Ee(t),s=$(a,new o(1)),l=new o(1).subtract(a.multiply(a)),u=l.multiply(l),c=s.multiply(u).multiply(i).multiply(new o(Bo(this.usesHalfFloatPrecision)));return this.getFragmentOutput(new _(c),e)}hittest(e){let{viewMat3:t,tileMat3:i}=this.view,a=t.multiply(i).multiply(new I(e.pos,1)),s=En(a.xy,this.kernelControls.radius,this.hittestRequest.position);return y(O(s,this.hittestRequest.distance),new o(J),new o(oe))}};r([ue],Jt.prototype,"usesHalfFloatPrecision",void 0),r([p(Xi)],Jt.prototype,"kernelControls",void 0),r([w(0,V(Go))],Jt.prototype,"vertex",null),r([w(0,V(Ma))],Jt.prototype,"fragment",null);var Uo=class extends lt{};r([h(0,g)],Uo.prototype,"position",void 0);var Na=class extends Vt{},$i=class extends M{};r([p(g)],$i.prototype,"minAndInvRange",void 0),r([p(o)],$i.prototype,"normalization",void 0);var Dt=class extends ut{constructor(){super(...arguments),this.type="HeatmapResolveShader",this.usesHalfFloatPrecision=!1}vertex(e){return{glPosition:new _(e.position.multiply(2).subtract(1),1,1),uv:e.position}}fragment(e){let{accumulatedDensity:t}=this,i=W(this.densityTexture,e.uv).r.divide(new o(Bo(this.usesHalfFloatPrecision)));i=i.multiply(t.normalization),i=i.subtract(t.minAndInvRange.x).multiply(t.minAndInvRange.y);let a=W(this.gradientTexture,new g(i,.5)),s=new Ue;return s.fragColor=new _(a.rgb.multiply(a.a),a.a),s}};r([ue],Dt.prototype,"usesHalfFloatPrecision",void 0),r([p($i)],Dt.prototype,"accumulatedDensity",void 0),r([U(E)],Dt.prototype,"densityTexture",void 0),r([U(E)],Dt.prototype,"gradientTexture",void 0),r([w(0,V(Uo))],Dt.prototype,"vertex",null),r([w(0,V(Na))],Dt.prototype,"fragment",null);var ko=class extends K{constructor(){super(...arguments),this.type=19,this.drawPhase=73,this.shaders={accumulate:new Jt,resolve:new Dt},this._isBound=!1,this._resources=new Map}shutdown(e){super.shutdown(e),this._resources.get(e)?.destroy(),this._resources.delete(e),this._prevFBO=null,this._unbind()}render(e,t){let{context:i,painter:a,state:s}=e,l=t.instance.getInput(),{isFieldActive:u}=l.uniforms,c=this._getOrCreateResourcesRecord(i),f=c.loadQualityProfile(i);Z(e)||this._bind(e,c,l),a.setShader({shader:this.shaders.accumulate,uniforms:b(d({},X(e,t.target)),{kernelControls:{radius:Yn(l,s),isFieldActive:u?1:0}}),textures:Q(e),defines:d(d({},j(e)),f.defines),optionalAttributes:{},useComputeBuffer:Z(e)});let m=Z(e)?vr:Wn;a.setPipelineState(m),a.submitDraw(e,t)}getStencilReference(e){return gr(e)}renderResolvePass(e,t){if(Z(e))return;let{context:i,painter:a}=e,s=this._resources.get(i);if(this._prevFBO==null||this._prevViewport==null||!s?.initialized)return;let{defines:l}=s.loadQualityProfile(i),{minDensity:u,maxDensity:c,radius:f}=t.getInput().uniforms,m=8,v=9,S=s.accumulateFramebuffer,x=s.resolveGradientTexture,T={shader:this.shaders.resolve,uniforms:{accumulatedDensity:{minAndInvRange:[u,1/(c-u)],normalization:3/(f*f*Math.PI)}},textures:{densityTexture:{unit:m,texture:S.colorTexture},gradientTexture:{unit:v,texture:x}},defines:l,optionalAttributes:{},useComputeBuffer:!1};i.bindFramebuffer(this._prevFBO),i.setViewport(0,0,this._prevViewport.width,this._prevViewport.height),i.bindTexture(S.colorTexture,m),i.bindTexture(x,v),a.setPipelineState(hr),a.submitDrawMesh(i,T,a.quadMesh),this._unbind()}_getOrCreateResourcesRecord(e){let t=this._resources.get(e);return t==null&&(t=new Ho,this._resources.set(e,t)),t}_unbind(){this._prevFBO=null,this._prevViewport=null,this._isBound=!1}_bind(e,t,i){let{context:a,state:s,pixelRatio:l}=e,u=a.boundFramebuffer;if(this._isBound||u==null)return;let c=a.getViewport();this._prevFBO=u,this._prevViewport=c;let{gradient:f,gradientHash:m}=i.uniforms;t.ensureResolveGradientTexture(a,m,f);let{width:v,height:S}=c,x=fr(Yn(i,s),l),T=v*x,F=S*x,C=t.ensureAccumulateFBO(a,T,F);a.blitFramebuffer(u,C,1024),a.bindFramebuffer(C),a.setViewport(0,0,C.width,C.height),a.setColorMask(!0,!0,!0,!0),a.setClearColor(0,0,0,0),a.clear(16384),this._isBound=!0}};function fr(n,e){let t=e>1.5?.25:.5;return n<1/(2*t)?1:t}function gr(n){return n.key.level+1}var Wn={color:{write:[!0,!0,!0,!0],blendMode:"additive"},depth:!1,stencil:{write:!1,test:{compare:518,mask:255,op:{fail:7680,zFail:7680,zPass:7681}}}},vr=b(d({},Wn),{stencil:!1}),hr={color:{write:[!0,!0,!0,!0],blendMode:"composite"},depth:!1,stencil:!1};function Yn(n,e){let{referenceScale:t,radius:i}=n.uniforms;return i*(t!==0?t/e.scale:1)}var _r=360/254,Je=class extends de{};r([h(3,_)],Je.prototype,"color",void 0),r([h(4,g)],Je.prototype,"offset",void 0),r([h(5,g)],Je.prototype,"textureUV",void 0),r([h(6,_)],Je.prototype,"fontAndReferenceSize",void 0),r([h(7,_)],Je.prototype,"outlineColor",void 0),r([h(8,_)],Je.prototype,"haloColor",void 0),r([h(9,g)],Je.prototype,"outlineAndHaloSize",void 0),r([h(10,g)],Je.prototype,"zoomRange",void 0),r([h(11,o)],Je.prototype,"clipAngle",void 0),r([h(12,_)],Je.prototype,"referenceSymbol",void 0),r([h(15,o)],Je.prototype,"visibility",void 0);var Ji=class extends wt{};r([h(13,g)],Ji.prototype,"offsetNextVertex1",void 0),r([h(14,g)],Ji.prototype,"offsetNextVertex2",void 0);var Ha=class extends pe{},Te=class extends re{constructor(){super(...arguments),this.type="TextShader",this.computeAttributes={offset:["offsetNextVertex1","offsetNextVertex2"]},this.textRenderPassType=0,this.isBackgroundPass=!1,this.isLabel=!1}clipLabel(e,t){let{clipAngle:i,zoomRange:a,visibility:s}=e,l=i.multiply(_r),u=be(l.subtract(this.view.rotation),new o(360)),c=new o(0),f=this.view.currentZoom,m=a.x,v=a.y,S=new o(1).subtract($(m,f)).multiply(2),x=new o(xe(he(u,new o(90)),Be(u,new o(270)))).multiply(2),T=new o(2).multiply(new o(1).subtract($(f,v)));return c=c.add(t.multiply(S)),c=c.add(t.multiply(x)),c=c.add(T),s&&(c=c.add(s)),c}vertex(e,t){let i=te(e.bitset,pn),a=new o(1).subtract(i),s=e.fontAndReferenceSize[0],l=e.fontAndReferenceSize[1],u=e.fontAndReferenceSize[2],c=e.fontAndReferenceSize[3],f=s.divide(u),m=this.textRenderPassType===1?e.outlineColor:this.textRenderPassType===2?e.haloColor:this._getVertexColor(e),v=this.view.displayViewScreenMat3.multiply(new I(e.pos,1)),S=e.offset,x=new o(1),T=q.identity(),F=new g(0);if(this.isLabel){if(!e.referenceSymbol)throw new Error("InternalError: Optional attribute 'referenceSymbol' expected for labels");let P=e.referenceSymbol,L=P.xy,k=P.z,Y=this._unpackDirection(P.w),A=Lt(this,e.id,k).divide(2),fe=Y.multiply(A.add($a));F=L.add(fe),S=S.add(F)}else x=Lt(this,e.id,l).divide(l),s=s.multiply(x),f=f.multiply(x),S=S.multiply(x),T=vo(this,e.id),S=T.multiply(new I(S,0)).xy;let C=te(e.bitset,la),D=this._getViewRotationMatrix(C).multiply(new I(S,0)).multiply(this.view.scaleFactor),z=this.isLabel?this.clipLabel(e,C):this.clip(e.id,e.zoomRange);z=this.isBackgroundPass?z.add(a.multiply(2)):z.add(i.multiply(2));let R=new o(0);if(this.textRenderPassType===1&&(z=z.add(y(H(e.outlineAndHaloSize.x,new o(0)),new o(2),new o(0))),R=new o(e.outlineAndHaloSize.x).divide(f).divide(c)),this.textRenderPassType===2){let P=e.outlineAndHaloSize.x,L=new o(e.outlineAndHaloSize.y);z=z.add(y(H(L,new o(0)),new o(2),new o(0))),R=L.add(P).divide(f).divide(c)}let N=this.isLabel?O(z,new o(1)):new Tt(!1);return d({glPosition:new _(v.xy.add(D.xy),z,1),color:m,size:f,textureUV:e.textureUV.divide(this.mosaicInfo.size),antialiasingWidth:new o(.105).multiply(u).divide(s).divide(this.view.pixelRatio),outlineDistanceOffset:R},this.maybeRunHittest(e,t,{vvSizeAdjustment:x,vvRotation:T,labelOffset:F,labelClipped:N,scaleFactor:this.view.scaleFactor}))}_getViewRotationMatrix(e){let t=this.view.displayViewMat3,i=this.view.displayMat3,a=new o(1).subtract(e);return t.multiply(e).add(i.multiply(a))}_getHittestAlignmentMatrix(e){let t=this.view.viewMat3.multiply(this.view.tileMat3),i=this.view.tileMat3,a=new o(1).subtract(e);return t.multiply(e).add(i.multiply(a))}fragment(e){let t=new o(.25),i=new o(1).subtract(t),a=W(this.mosaicTexture,e.textureUV).a,s=i.subtract(e.outlineDistanceOffset);this.highlight&&(s=s.divide(2));let l=e.antialiasingWidth,u=co(s.subtract(l),s.add(l),a);return this.getFragmentOutput(e.color.multiply(u),e)}computeHittestTriangle(e,t,{vvSizeAdjustment:i,vvRotation:a,labelOffset:s,scaleFactor:l}){let u,c,f;this.isLabel?(u=new I(e.offset.multiply(l).add(s),0),c=new I(t.offsetNextVertex1.multiply(l).add(s),0),f=new I(t.offsetNextVertex2.multiply(l).add(s),0)):(u=a.multiply(new I(e.offset.multiply(l).multiply(i),0)),c=a.multiply(new I(t.offsetNextVertex1.multiply(l).multiply(i),0)),f=a.multiply(new I(t.offsetNextVertex2.multiply(l).multiply(i),0)));let{viewMat3:m,tileMat3:v}=this.view,S=m.multiply(v).multiply(new I(e.pos,1)),x=te(e.bitset,la),T=this._getHittestAlignmentMatrix(x);return{pos0:S.add(T.multiply(u)).xy,pos1:S.add(T.multiply(c)).xy,pos2:S.add(T.multiply(f)).xy}}hittest(e,t,i){let{vvSizeAdjustment:a,vvRotation:s,labelOffset:l,labelClipped:u,scaleFactor:c}=i,f=Ve(this.hittestRequest),{pos0:m,pos1:v,pos2:S}=this.computeHittestTriangle(e,t,{vvSizeAdjustment:a,vvRotation:s,labelOffset:l,scaleFactor:c});return y(f,()=>{let{tlbr:x}=this.hittestRequest;return this.isLabel?y(u,new o(J),Me(m,v,S,x)):Me(m,v,S,x)},()=>{let x=ni(this.hittestRequest.position,m,v,S),T=this.isLabel?u:new Tt(!1);return y(T,new o(J),y(O(x,this.hittestRequest.distance),new o(J),new o(oe)))})}_unpackDirection(e){let t=new ii(e),i=Tn(t,new ii(2)),a=bn(t,new ii(3));return new g(new o(i).subtract(1),new o(a).subtract(1))}_getVertexColor(e){let t=e.color;if(this.visualVariableColor){let i=this.getColorValue(e.id);t=this.visualVariableColor.getColor(i,e.color,new Tt(!1))}if(this.visualVariableOpacity){let i=this.getOpacityValue(e.id),a=this.visualVariableOpacity.getOpacity(i);t=t.multiply(a)}return t}};r([G(De)],Te.prototype,"visualVariableColor",void 0),r([G(Ae)],Te.prototype,"visualVariableOpacity",void 0),r([G(Rt)],Te.prototype,"visualVariableRotation",void 0),r([G(et)],Te.prototype,"visualVariableSizeMinMaxValue",void 0),r([G(Ye)],Te.prototype,"visualVariableSizeScaleStops",void 0),r([G(We)],Te.prototype,"visualVariableSizeStops",void 0),r([G(tt)],Te.prototype,"visualVariableSizeUnitValue",void 0),r([p(me)],Te.prototype,"mosaicInfo",void 0),r([U(E)],Te.prototype,"mosaicTexture",void 0),r([ue],Te.prototype,"textRenderPassType",void 0),r([ue],Te.prototype,"isBackgroundPass",void 0),r([ue],Te.prototype,"isLabel",void 0),r([w(0,V(Je)),w(1,V(Ji))],Te.prototype,"vertex",null),r([w(0,V(Ha))],Te.prototype,"fragment",null);var qo=class extends K{constructor(){super(...arguments),this.type=20,this.shaders={geometry:new Te},this.drawPhase=14,this.symbologyPlane=3}render(e,t){let{painter:i}=e,a=j(e),s=b(d({},ee(e)),{stencil:{write:!1,test:{compare:516,mask:255,op:{fail:7680,zFail:7680,zPass:7680}}}}),l=t.instance.getInput(),u={shader:this.shaders.geometry,uniforms:b(d(d({},ie(e,t.target,l.uniforms)),X(e,t.target)),{mosaicInfo:i.textureManager.getMosaicInfo(e,t.textureKey)}),textures:b(d({},Q(e)),{mosaicTexture:i.textureManager.getMosaicTexture(e,t.textureKey)}),defines:b(d({},a),{textRenderPassType:0,isBackgroundPass:!0,isLabel:!0}),optionalAttributes:l.optionalAttributes,useComputeBuffer:Z(e)};i.setPipelineState(s),i.setShader(u),i.submitDraw(e,t,{stencilRef:255}),i.setShader(b(d({},u),{defines:b(d({},a),{textRenderPassType:2,isBackgroundPass:!1,isLabel:!0})})),i.submitDraw(e,t,{stencilRef:255}),i.setShader(b(d({},u),{defines:b(d({},a),{textRenderPassType:0,isBackgroundPass:!1,isLabel:!0})})),i.submitDraw(e,t,{stencilRef:255})}};function yr(n){return $(new o(0),n).multiply(2).subtract(1)}var Qt=class extends it{};r([h(9,o)],Qt.prototype,"accumulatedDistance",void 0),r([h(10,o)],Qt.prototype,"totalLength",void 0),r([h(11,o)],Qt.prototype,"gradientSize",void 0),r([h(12,g)],Qt.prototype,"segmentDirection",void 0),r([h(13,_)],Qt.prototype,"tlbr",void 0);var Yo=class extends M{};r([p(o)],Yo.prototype,"isColorPass",void 0);var ei=class extends Oe{constructor(){super(...arguments),this.type="GradientStrokeShader"}vertex(e,t){let{totalLength:i,gradientSize:a,segmentDirection:s,tlbr:l}=e,u=li(this,e),c=te(e.bitset,Ei.isAlongLine),f=i.divide(this.view.displayZoomFactor),m=y(ke(e.bitset,Ei.isAbsoluteSize),()=>{let x=y(O(c,new o(.5)),f,u.halfWidth);return a.divide(x)},a),v=e.accumulatedDistance.add(Qe(s,u.scaledOffset).divide(f)),S=l.divide(this.mosaicInfo.size.xyxy);return d(b(d({},u),{tlbr:S,relativePositionAlongLine:v,relativeGradientSize:m,isAlongLine:te(e.bitset,Ei.isAlongLine),isDiscrete:te(e.bitset,Ei.isDiscrete)}),this.maybeRunHittest(e,t,u.halfWidth))}fragment(e){let{isAlongLine:t,isDiscrete:i,relativePositionAlongLine:a,relativeGradientSize:s,normal:l,tlbr:u}=e,c=si(e,this.antialiasingControls.blur),f=yr(l.y).multiply(Ge(Ee(l),new o(1))),m=new o(.5).multiply(f).add(new o(.5)),v=y(O(t,new o(.5)),a,m),S=y(O(i,new o(.5)),s.subtract(1),new o(0)),x=v.add(S).divide(s);x=y(O(t,new o(.5)),x,Ti(x));let T=B(u.xy,u.zw,new g(ne(x,new o(0),new o(1)),.5)),F=W(this.mosaicTexture,T),C=e.opacity.multiply(c),D=this.getFragmentOutput(F.multiply(C),e),z=$(new o(.5),this.technique.isColorPass).multiply(ht("gradient-depth-epsilon")),R=$(new o(0),l.y).multiply(new o(ht("gradient-depth-bias")).subtract(z));return D.glFragDepth=ne(Ee(l).add(R),new o(0),new o(1)),D}};r([p(me)],ei.prototype,"mosaicInfo",void 0),r([U(E)],ei.prototype,"mosaicTexture",void 0),r([p(Yo)],ei.prototype,"technique",void 0),r([w(0,V(Qt)),w(1,V(ce))],ei.prototype,"vertex",null);var Wo=class extends K{constructor(){super(...arguments),this.type=17,this.shaders={geometry:new ei},this.symbologyPlane=1}_getShaderOptions(e,t,i){let{painter:a,pixelRatio:s}=e,l=t.instance.getInput();return{shader:this.shaders.geometry,uniforms:b(d(d({},ie(e,t.target,l.uniforms)),X(e,t.target)),{antialiasingControls:Ze(s),mosaicInfo:a.textureManager.getMosaicInfo(e,t.textureKey),technique:{isColorPass:i}}),textures:b(d({},Q(e)),{mosaicTexture:a.textureManager.getMosaicTexture(e,t.textureKey)}),defines:d({},j(e)),optionalAttributes:l.optionalAttributes,useComputeBuffer:Z(e)}}render(e,t){let{painter:i}=e;if(Z(e)||go(e)){let l=ee(e);return i.setPipelineState(l),i.setShader(this._getShaderOptions(e,t,1)),void i.submitDraw(e,t)}e.context.setClearDepth(1),e.context.clear(256);let a={color:!1,depth:{write:{zNear:0,zFar:1},test:513},stencil:{write:!1,test:{compare:514,mask:255,op:{fail:7680,zFail:7680,zPass:7680}}}};i.setShader(this._getShaderOptions(e,t,0)),i.setPipelineState(a),i.submitDraw(e,t);let s={color:{write:[!0,!0,!0,!0],blendMode:"composite"},depth:{write:!1,test:515},stencil:{write:!1,test:{compare:514,mask:255,op:{fail:7680,zFail:7680,zPass:7680}}}};i.setShader(this._getShaderOptions(e,t,1)),i.setPipelineState(s),i.submitDraw(e,t)}};var Zo=class extends K{constructor(){super(...arguments),this.type=21,this.shaders={geometry:new Oe},this.symbologyPlane=1}render(e,t){let{painter:i,pixelRatio:a}=e,s=t.instance.getInput();i.setShader({shader:this.shaders.geometry,uniforms:b(d(d({},ie(e,t.target,s.uniforms)),X(e,t.target)),{antialiasingControls:Ze(a)}),textures:Q(e),defines:d({},j(e)),optionalAttributes:s.optionalAttributes,useComputeBuffer:Z(e)}),i.setPipelineState(ee(e)),i.submitDraw(e,t)}};var ti=class extends it{};r([h(9,o)],ti.prototype,"accumulatedDistance",void 0),r([h(10,g)],ti.prototype,"segmentDirection",void 0),r([h(11,o)],ti.prototype,"offsetAlongLine",void 0),r([h(12,o)],ti.prototype,"capType",void 0),r([h(13,_)],ti.prototype,"tlbr",void 0);var hi=class extends Oe{constructor(){super(...arguments),this.type="TexturedLineShader"}_getDistanceRatio(e,t){let i=te(e.bitset,un);return i.multiply(_e(t,new o(.25)).multiply(new o(2))).add(new o(1).subtract(i).multiply(At(1)))}_getSDFAlpha(e){let{halfWidth:t,normal:i,tlbr:a,patternSize:s,accumulatedDistance:l,offsetAlongLine:u,dashToPx:c,capType:f}=e,m=s.x.divide(en).multiply(c),v=Ni(l.add(u).divide(m)),S=B(a.xy,a.zw,new g(v,.5)),x=Wt(W(this.mosaicTexture,S)).multiply(2).subtract(1).multiply(tn).multiply(c),T=i.y.multiply(t),F=ae([H(f,new o(1)),x.subtract(t)],[H(f,new o(2)),po(Fn(_e(x,new o(0)),new o(2)).add(T.multiply(T))).subtract(t)],[!0,x]),C=ne(new o(.25).subtract(F),new o(0),new o(1));return new _(C)}_getPatternColor(e){let{halfWidth:t,normal:i,color:a,accumulatedDistance:s,patternSize:l,sampleAlphaOnly:u,tlbr:c}=e,f=l.y.multiply(new o(2).multiply(t).divide(l.x)),m=Ni(s.divide(f)),v=new o(.5).multiply(i.y).add(new o(.5)),S=B(c.xy,c.zw,new g(v,m)),x=W(this.mosaicTexture,S);return this.visualVariableColor!=null&&(x=y(O(u,new o(.5)),new _(a.a),a)),x}vertex(e,t){let{segmentDirection:i,tlbr:a,bitset:s}=e,l=li(this,e),u=e.accumulatedDistance.divide(this.view.displayZoomFactor).add(Qe(i,l.scaledOffset)),c=new g(a.z.subtract(a.x),a.w.subtract(a.y)),f=a.divide(this.mosaicInfo.size.xyxy),m=te(s,cn),v=te(s,oo),S=y(O(m,new o(.5)),this._getDistanceRatio(e,l.scaledHalfWidth),new o(1));return d(b(d({},l),{tlbr:f,patternSize:c,accumulatedDistance:u,isSDF:m,sampleAlphaOnly:v,dashToPx:S,offsetAlongLine:e.offsetAlongLine,capType:e.capType}),this.maybeRunHittest(e,t,l.halfWidth))}fragment(e){let{color:t,opacity:i,isSDF:a}=e,s=si(e,this.antialiasingControls.blur),l=y(O(a,new o(.5)),this._getSDFAlpha(e),this._getPatternColor(e)),u=t.multiply(i).multiply(s).multiply(l);return this.getFragmentOutput(u,e)}};r([p(me)],hi.prototype,"mosaicInfo",void 0),r([U(E)],hi.prototype,"mosaicTexture",void 0),r([w(0,V(ti)),w(1,V(ce))],hi.prototype,"vertex",null);var jo=class extends K{constructor(){super(...arguments),this.type=33,this.shaders={geometry:new hi},this.symbologyPlane=1}render(e,t){let{painter:i,pixelRatio:a}=e,s=t.instance.getInput();i.setShader({shader:this.shaders.geometry,uniforms:b(d(d({},ie(e,t.target,s.uniforms)),X(e,t.target)),{antialiasingControls:Ze(a),mosaicInfo:i.textureManager.getMosaicInfo(e,t.textureKey)}),textures:b(d({},Q(e)),{mosaicTexture:i.textureManager.getMosaicTexture(e,t.textureKey)}),defines:d({},j(e)),optionalAttributes:s.optionalAttributes,useComputeBuffer:Z(e)}),i.setPipelineState(ee(e)),i.submitDraw(e,t)}};var St=class extends de{};r([h(3,_)],St.prototype,"color",void 0),r([h(4,_)],St.prototype,"outlineColor",void 0),r([h(5,g)],St.prototype,"offset",void 0),r([h(6,g)],St.prototype,"textureUV",void 0),r([h(7,_)],St.prototype,"sizing",void 0),r([h(8,o)],St.prototype,"placementAngle",void 0),r([h(9,o)],St.prototype,"sdfDecodeCoeff",void 0),r([h(10,g)],St.prototype,"zoomRange",void 0);var _i=class extends wt{};r([h(11,g)],_i.prototype,"offsetNextVertex1",void 0),r([h(12,g)],_i.prototype,"offsetNextVertex2",void 0),r([h(13,g)],_i.prototype,"textureUVNextVertex1",void 0),r([h(14,g)],_i.prototype,"textureUVNextVertex2",void 0);var Ga=class extends pe{};function qt(n,e,t,i){return e.multiply(n.x).add(t.multiply(n.y)).add(i.multiply(n.z))}function Ba(n){return n.multiply(n).divide(128)}var Ne=class extends re{constructor(){super(...arguments),this.type="MarkerShader",this.computeAttributes={offset:["offsetNextVertex1","offsetNextVertex2"],textureUV:["textureUVNextVertex1","textureUVNextVertex2"]}}vertex(e,t){let i=Ba(e.sizing.x),a=Ba(e.sizing.y),s=Ba(e.sizing.z),l=e.placementAngle,u=te(e.bitset,Fe.bitset.isSDF),c=te(e.bitset,Fe.bitset.isMapAligned),f=te(e.bitset,Fe.bitset.scaleSymbolsProportionally),m=ke(e.bitset,Fe.bitset.colorLocked),v=dt(this,e.id),S=pt(this,e.id,e.color,m).multiply(v),x=this.view.displayViewScreenMat3.multiply(new I(e.pos.xy,1)),T=Lt(this,e.id,s).divide(s),F=i.multiply(T),C=e.offset.xy.multiply(T),D=a.multiply(f.multiply(T.subtract(1)).add(1));D=Ge(D,_e(F.subtract(.99),new o(0)));let z=_e(D,new o(1)),R=Ge(D,new o(1)),N=q.fromRotation(l.multiply(yi)),P=vo(this,e.id),L=this._getViewRotationMatrix(c).multiply(P).multiply(N).multiply(new I(C.xy,0)).multiply(this.view.scaleFactor),k=this.clip(e.id,e.zoomRange),Y=new _(x.xy.add(L.xy),k,1),A=e.textureUV.divide(this.mosaicInfo.size),fe=e.outlineColor.multiply(R),ze=te(e.bitset,Fe.bitset.overrideOutlineColor),nt=e.sdfDecodeCoeff.multiply(F);return d({glPosition:Y,color:S,textureUV:A,outlineColor:fe,outlineSize:z,distanceToPx:nt,isSDF:u,overrideOutlineColor:ze},this.maybeRunHittest(e,t,{pos:e.pos,size:F,sizeCorrection:T,scaleFactor:this.view.scaleFactor,isMapAligned:c,vvRotationMat3:P,placementMat3:N,outlineSize:z,distanceToPx:nt,isSDF:u}))}fragment(e){let t=this._getColor(e.textureUV,e);return this.getFragmentOutput(t,e)}hittest(e,t,i){let{pos0:a,pos1:s,pos2:l}=this.computeHittestTriangle(e,t,i),u=Ve(this.hittestRequest);return y(u,()=>{let{tlbr:c}=this.hittestRequest;return ho(a,s,l,c)},()=>y(Be(i.size,this.hittestRequest.smallSymbolSizeThreshold),this._hittestSmallMarker(e,t,i),this._hittestMarker(e,t,i)))}_getViewRotationMatrix(e){let t=this.view.displayViewMat3,i=this.view.displayMat3,a=new o(1).subtract(e);return t.multiply(e).add(i.multiply(a))}_getViewScreenMatrix(e){let t=this.view.viewMat3.multiply(this.view.tileMat3),i=this.view.tileMat3,a=new o(1).subtract(e);return t.multiply(e).add(i.multiply(a))}_getColor(e,t){return y(H(t.isSDF,new o(1)),this._getSDFColor(e,t),this._getSpriteColor(e,t))}_getSpriteColor(e,t){return W(this.mosaicTexture,e).multiply(t.color)}_getSDFColor(e,t){let i=W(this.mosaicTexture,e),a=new o(.5).subtract(Wt(i)).multiply(t.distanceToPx).multiply(io),s=ne(new o(.5).subtract(a),new o(0),new o(1)),l=t.color.multiply(s),u=t.outlineSize;this.highlight&&(u=_e(u,t.overrideOutlineColor.multiply(4)));let c=u.multiply(.5),f=bt(a).subtract(c),m=ne(new o(.5).subtract(f),new o(0),new o(1)),v=B(t.outlineColor,t.color,t.overrideOutlineColor).multiply(m);return new o(1).subtract(v.a).multiply(l).add(v)}_hittestSmallMarker(e,t,i){let{position:a,distance:s,smallSymbolDistance:l}=this.hittestRequest,u=s.subtract(l),{viewMat3:c,tileMat3:f}=this.view,m=c.multiply(f).multiply(new I(i.pos,1)).xy,v=i.size.multiply(.5),S=ai(m,a).subtract(v).add(u);return y(O(S,this.hittestRequest.distance),new o(J),new o(oe))}_hittestMarker(e,t,i){let{pos0:a,pos1:s,pos2:l}=this.computeHittestTriangle(e,t,i),u=this.hittestRequest.position,c=this.hittestRequest.distance,f=ni(u,a,s,l);return y(O(f,c),new o(J),this._hittestSamples(a,s,l,e,t,i))}computeHittestTriangle(e,t,i){let{pos:a,sizeCorrection:s,scaleFactor:l,isMapAligned:u}=i,c=new I(e.offset.multiply(s).multiply(l),0),f=new I(t.offsetNextVertex1.multiply(s).multiply(l),0),m=new I(t.offsetNextVertex2.multiply(s).multiply(l),0),{viewMat3:v,tileMat3:S}=this.view,x=v.multiply(S).multiply(new I(a,1)),T=this._getViewScreenMatrix(u).multiply(i.vvRotationMat3).multiply(i.placementMat3);return{pos0:x.add(T.multiply(c)).xy,pos1:x.add(T.multiply(f)).xy,pos2:x.add(T.multiply(m)).xy}}_hittestSamples(e,t,i,a,s,l){let{outlineSize:u,isSDF:c,distanceToPx:f}=l,m=this.hittestRequest.position,v=this.hittestRequest.distance,S=le(m.add(new g(ve(v),ve(v))),e,t,i),x=le(m.add(new g(0,ve(v))),e,t,i),T=le(m.add(new g(v,ve(v))),e,t,i),F=le(m.add(new g(ve(v),0)),e,t,i),C=le(m,e,t,i),D=le(m.add(new g(v,0)),e,t,i),z=le(m.add(new g(ve(v),v)),e,t,i),R=le(m.add(new g(0,v)),e,t,i),N=le(m.add(new g(v,v)),e,t,i),P=a.textureUV.divide(this.mosaicInfo.size),L=s.textureUVNextVertex1.divide(this.mosaicInfo.size),k=s.textureUVNextVertex2.divide(this.mosaicInfo.size),Y={color:new _(1),outlineColor:new _(1),overrideOutlineColor:new o(1),outlineSize:u,distanceToPx:f,isSDF:c},A=new o(0);return A=A.add(se(S).multiply(this._getColor(qt(S,P,L,k),Y).a)),A=A.add(se(x).multiply(this._getColor(qt(x,P,L,k),Y).a)),A=A.add(se(T).multiply(this._getColor(qt(T,P,L,k),Y).a)),A=A.add(se(F).multiply(this._getColor(qt(F,P,L,k),Y).a)),A=A.add(se(C).multiply(this._getColor(qt(C,P,L,k),Y).a)),A=A.add(se(D).multiply(this._getColor(qt(D,P,L,k),Y).a)),A=A.add(se(z).multiply(this._getColor(qt(z,P,L,k),Y).a)),A=A.add(se(R).multiply(this._getColor(qt(R,P,L,k),Y).a)),A=A.add(se(N).multiply(this._getColor(qt(N,P,L,k),Y).a)),y(O(A,new o(.05)),new o(oe),new o(J))}};r([G(De)],Ne.prototype,"visualVariableColor",void 0),r([G(Ae)],Ne.prototype,"visualVariableOpacity",void 0),r([G(Rt)],Ne.prototype,"visualVariableRotation",void 0),r([G(et)],Ne.prototype,"visualVariableSizeMinMaxValue",void 0),r([G(Ye)],Ne.prototype,"visualVariableSizeScaleStops",void 0),r([G(We)],Ne.prototype,"visualVariableSizeStops",void 0),r([G(tt)],Ne.prototype,"visualVariableSizeUnitValue",void 0),r([p(me)],Ne.prototype,"mosaicInfo",void 0),r([U(E)],Ne.prototype,"mosaicTexture",void 0),r([w(0,V(St)),w(1,V(_i))],Ne.prototype,"vertex",null),r([w(0,V(Ga))],Ne.prototype,"fragment",null);var Ko=class extends K{constructor(){super(...arguments),this.type=23,this.shaders={geometry:new Ne},this.symbologyPlane=2}render(e,t){let{painter:i}=e,a=t.instance.getInput();i.setShader({shader:this.shaders.geometry,uniforms:b(d(d({},ie(e,t.target,a.uniforms)),X(e,t.target)),{mosaicInfo:i.textureManager.getMosaicInfo(e,t.textureKey,!0)}),textures:b(d({},Q(e)),{mosaicTexture:i.textureManager.getMosaicTexture(e,t.textureKey,!0)}),defines:d({},j(e)),optionalAttributes:a.optionalAttributes,useComputeBuffer:Z(e)}),i.setPipelineState(ee(e)),i.submitDraw(e,t)}};var Xo=class{constructor(){this.computeAttributes={}}get locationsMap(){let e=new Map;for(let t in this.locations)e.set(t,this.locations[t].index);return e}get optionPropertyKeys(){if(!this._optionPropertyKeys){let e=new Set(Object.keys(this.options));this._optionPropertyKeys=e}return this._optionPropertyKeys}get _transformFeedbackBindings(){return[]}get locationInfo(){if(!this._locationInfo){let e=this.locationsMap,t=Array.from(e.entries()).map(([i,a])=>`${i}.${a}`).join(".");this._locationInfo={stringHash:t,locations:e,computeAttributeMap:this.computeAttributes}}return this._locationInfo}get renamedLocationsMap(){let e=new Map;for(let[t,i]of this.locationsMap.entries())e.set("a_"+t,i);return e}getShaderKey(e,t,i,a,s){return`${Object.keys(e).map(l=>`${l}.${e[l]}`).join(".")}.${Object.keys(a).filter(l=>a[l]).map(l=>`${l}_${a[l].toString()}`).join(".")}.${Object.keys(t).filter(l=>this.optionPropertyKeys.has(l)).join(".")}.${Object.keys(i).filter(l=>i[l]).join(".")}`}getProgram(e,t,i,a){let s="",l="";for(let u in i)if(i[u]){let c=typeof i[u]=="boolean"?`#define ${u}
`:`#define ${u} ${i[u]}
`;s+=c,l+=c}return s+=this.vertexShader,l+=this.fragmentShader,new In("glslShaderModule",s,l,this.renamedLocationsMap,this._getUniformBindings(t),this._getTextureBindings(),this._transformFeedbackBindings)}_getUniformBindings(e){let t=[];for(let i in this.required){let a=this.required[i];t.push({uniformHydrated:null,shaderModulePath:i,uniformName:i,uniformType:a.type,uniformArrayElementType:Zn(a),uniformArrayLength:jn(a)})}for(let i in e){let a=this.options[i];if(e[i])for(let s in a){let l=a[s];t.push({uniformHydrated:null,shaderModulePath:`${i}.${s}`,uniformName:s,uniformType:l.type,uniformArrayElementType:Zn(l),uniformArrayLength:jn(l)})}}return t}_getTextureBindings(){let e=[];for(let t in this.textures)e.push({textureHydrated:null,shaderModulePath:t,textureName:t});return e}},Zn=n=>n.type==="array"?n.elementType?.type:void 0,jn=n=>n.type==="array"?n.size:void 0;var Kn={bitBlit:{"bitBlit.frag":`uniform lowp sampler2D u_tex;
uniform lowp float u_opacity;
varying mediump vec2 v_uv;
void main() {
lowp vec4 color = texture2D(u_tex, v_uv);
gl_FragColor = color * u_opacity;
}`,"bitBlit.vert":`attribute vec2 a_pos;
attribute vec2 a_tex;
varying mediump vec2 v_uv;
void main(void) {
gl_Position = vec4(a_pos , 0.0, 1.0);
v_uv = a_tex;
}`},debug:{overlay:{"overlay.frag":`precision mediump float;
varying vec4 v_color;
void main(void) {
gl_FragColor = v_color;
}`,"overlay.vert":`attribute vec3 a_PositionAndFlags;
uniform mat3 u_dvsMat3;
uniform vec4 u_colors[4];
uniform float u_opacities[4];
varying vec4 v_color;
void main(void) {
vec2 position = a_PositionAndFlags.xy;
float flags = a_PositionAndFlags.z;
int colorIndex = int(mod(flags, 4.0));
vec4 color;
for (int i = 0; i < 4; i++) {
color = u_colors[i];
if (i == colorIndex) {
break;
}
}
int opacityIndex = int(mod(floor(flags / 4.0), 4.0));
float opacity;
for (int i = 0; i < 4; i++) {
opacity = u_opacities[i];
if (i == opacityIndex) {
break;
}
}
v_color = color * opacity;
gl_Position = vec4((u_dvsMat3 * vec3(position, 1.0)).xy, 0.0, 1.0);
}`}},dot:{dot:{"dot.frag":`precision mediump float;
varying vec4 v_color;
varying float v_dotRatio;
varying float v_invEdgeRatio;
uniform highp float u_tileZoomFactor;
void main()
{
float dist = length(gl_PointCoord - vec2(.5, .5)) * 2.;
float alpha = smoothstep(0., 1., v_invEdgeRatio * (dist - v_dotRatio) + 1.);
gl_FragColor = v_color * alpha;
}`,"dot.vert":`precision highp float;
attribute vec2 a_pos;
uniform sampler2D u_texture;
uniform highp mat3 u_dvsMat3;
uniform highp float u_tileZoomFactor;
uniform highp float u_dotSize;
uniform highp float u_pixelRatio;
varying vec2 v_pos;
varying vec4 v_color;
varying float v_dotRatio;
varying float v_invEdgeRatio;
const float EPSILON = 0.000001;
void main()
{
mat3 tileToTileTexture = mat3(  1., 0., 0.,
0., -1., 0.,
0., 1., 1.  );
vec3 texCoords = tileToTileTexture * vec3(a_pos.xy / 512., 1.);
v_color = texture2D(u_texture, texCoords.xy);
float smoothEdgeWidth = max(u_dotSize / 2., 1.) ;
float z = 0.;
z += 2.0 * step(v_color.a, EPSILON);
gl_PointSize = (smoothEdgeWidth + u_dotSize);
gl_Position = vec4((u_dvsMat3 * vec3(a_pos + .5, 1.)).xy, z, 1.);
v_dotRatio = u_dotSize / gl_PointSize;
v_invEdgeRatio = -1. / ( smoothEdgeWidth / gl_PointSize );
gl_PointSize  *= (u_pixelRatio * u_tileZoomFactor);
}`}},filtering:{"bilinear.glsl":`vec4 sampleBilinear(sampler2D sampler, vec2 coords, vec2 texSize) {
vec2 texelStart = floor(coords * texSize);
vec2 coord0 = texelStart / texSize;
vec2 coord1 = (texelStart +  vec2(1.0, 0.0)) / texSize;
vec2 coord2 = (texelStart +  vec2(0.0, 1.0)) / texSize;
vec2 coord3 = (texelStart +  vec2(1.0, 1.0)) / texSize;
vec4 color0 = texture2D(sampler, coord0);
vec4 color1 = texture2D(sampler, coord1);
vec4 color2 = texture2D(sampler, coord2);
vec4 color3 = texture2D(sampler, coord3);
vec2 blend = fract(coords * texSize);
vec4 color01 = mix(color0, color1, blend.x);
vec4 color23 = mix(color2, color3, blend.x);
vec4 color = mix(color01, color23, blend.y);
#ifdef NNEDGE
float alpha = floor(color0.a * color1.a * color2.a * color3.a + 0.5);
color = color * alpha + (1.0 - alpha) * texture2D(sampler, coords);
#endif
return color;
}`,"bicubic.glsl":`vec4 computeWeights(float v) {
float b = 1.0 / 6.0;
float v2 = v * v;
float v3 = v2 * v;
float w0 = b * (-v3 + 3.0 * v2 - 3.0 * v + 1.0);
float w1 = b * (3.0 * v3  - 6.0 * v2 + 4.0);
float w2 = b * (-3.0 * v3 + 3.0 * v2 + 3.0 * v + 1.0);
float w3 = b * v3;
return vec4(w0, w1, w2, w3);
}
vec4 bicubicOffsetsAndWeights(float v) {
vec4 w = computeWeights(v);
float g0 = w.x + w.y;
float g1 = w.z + w.w;
float h0 = 1.0 - (w.y / g0) + v;
float h1 = 1.0 + (w.w / g1) - v;
return vec4(h0, h1, g0, g1);
}
vec4 sampleBicubicBSpline(sampler2D sampler, vec2 coords, vec2 texSize) {
vec2 eX = vec2(1.0 / texSize.x, 0.0);
vec2 eY = vec2(0.0, 1.0 / texSize.y);
vec2 texel = coords * texSize - 0.5;
vec3 hgX = bicubicOffsetsAndWeights(fract(texel).x).xyz;
vec3 hgY = bicubicOffsetsAndWeights(fract(texel).y).xyz;
vec2 coords10 = coords + hgX.x * eX;
vec2 coords00 = coords - hgX.y * eX;
vec2 coords11 = coords10 + hgY.x * eY;
vec2 coords01 = coords00 + hgY.x * eY;
coords10 = coords10 - hgY.y * eY;
coords00 = coords00 - hgY.y * eY;
vec4 color00 = texture2D(sampler, coords00);
vec4 color10 = texture2D(sampler, coords10);
vec4 color01 = texture2D(sampler, coords01);
vec4 color11 = texture2D(sampler, coords11);
color00 = mix(color00, color01, hgY.z);
color10 = mix(color10, color11, hgY.z);
color00 = mix(color00, color10, hgX.z);
return color00;
}`,"epx.glsl":`vec4 sampleEPX(sampler2D sampler, float size, vec2 coords, vec2 texSize) {
vec2 invSize = 1.0 / texSize;
vec2 texel = coords * texSize;
vec2 texel_i = floor(texel);
vec2 texel_frac = fract(texel);
vec4 colorP = texture2D(sampler, texel_i * invSize);
vec4 colorP1 = vec4(colorP);
vec4 colorP2 = vec4(colorP);
vec4 colorP3 = vec4(colorP);
vec4 colorP4 = vec4(colorP);
vec4 colorA = texture2D(sampler, (texel_i - vec2(0.0, 1.0)) * invSize);
vec4 colorB = texture2D(sampler, (texel_i + vec2(1.0, 0.0)) * invSize);
vec4 colorC = texture2D(sampler, (texel_i - vec2(1.0, 0.0)) * invSize);
vec4 colorD = texture2D(sampler, (texel_i + vec2(0.0, 1.0)) * invSize);
if (colorC == colorA && colorC != colorD && colorA != colorB) {
colorP1 = colorA;
}
if (colorA == colorB && colorA != colorC && colorB != colorD) {
colorP2 = colorB;
}
if (colorD == colorC && colorD != colorB && colorC != colorA) {
colorP3 = colorC;
}
if (colorB == colorD && colorB != colorA && colorD != colorC) {
colorP4 = colorD;
}
vec4 colorP12 = mix(colorP1, colorP2, texel_frac.x);
vec4 colorP34 = mix(colorP1, colorP2, texel_frac.x);
return mix(colorP12, colorP34, texel_frac.y);
}`},heatmap:{heatmapResolve:{"heatmapResolve.frag":`precision highp float;
#ifdef HEATMAP_PRECISION_HALF_FLOAT
#define COMPRESSION_FACTOR 4.0
#else
#define COMPRESSION_FACTOR 1.0
#endif
uniform sampler2D u_texture;
uniform sampler2D u_gradient;
uniform vec2 u_densityMinAndInvRange;
uniform float u_densityNormalization;
varying vec2 v_uv;
void main() {
vec4 data = texture2D(u_texture, v_uv);
float density = data.r * COMPRESSION_FACTOR;
density *= u_densityNormalization;
density = (density - u_densityMinAndInvRange.x) * u_densityMinAndInvRange.y;
vec4 color = texture2D(u_gradient, vec2(density, 0.5));
gl_FragColor = vec4(color.rgb * color.a, color.a);
}`,"heatmapResolve.vert":`precision highp float;
attribute vec2 a_pos;
varying vec2 v_uv;
void main() {
v_uv = a_pos;
gl_Position = vec4(a_pos * 2.0 - 1.0, 1., 1.);
}`}},highlight:{"blur.frag":`varying mediump vec2 v_texcoord;
uniform mediump vec4 u_direction;
uniform mediump mat4 u_channelSelector;
uniform mediump float u_sigma;
uniform sampler2D u_texture;
mediump float gauss1(mediump vec2 dir) {
return exp(-dot(dir, dir) / (2.0 * u_sigma * u_sigma));
}
mediump vec4 selectChannel(mediump vec4 sample) {
return u_channelSelector * sample;
}
void accumGauss1(mediump float i, inout mediump float tot, inout mediump float weight) {
mediump float w = gauss1(i * u_direction.xy);
tot += selectChannel(texture2D(u_texture, v_texcoord + i * u_direction.zw))[3] * w;
weight += w;
}
void main(void) {
mediump float tot = 0.0;
mediump float weight = 0.0;
accumGauss1(-5.0, tot, weight);
accumGauss1(-4.0, tot, weight);
accumGauss1(-3.0, tot, weight);
accumGauss1(-2.0, tot, weight);
accumGauss1(-1.0, tot, weight);
accumGauss1(0.0, tot, weight);
accumGauss1(1.0, tot, weight);
accumGauss1(2.0, tot, weight);
accumGauss1(3.0, tot, weight);
accumGauss1(4.0, tot, weight);
accumGauss1(5.0, tot, weight);
gl_FragColor = vec4(0.0, 0.0, 0.0, tot / weight);
}`,"highlight.frag":`varying mediump vec2 v_texcoord;
uniform sampler2D u_texture;
uniform mediump float u_sigma;
uniform sampler2D u_shade;
uniform mediump vec2 u_minMaxDistance;
mediump float estimateDistance() {
mediump float y = texture2D(u_texture, v_texcoord)[3];
const mediump float y0 = 0.5;
mediump float m0 = 1.0 / (sqrt(2.0 * 3.1415) * u_sigma);
mediump float d = (y - y0) / m0;
return d;
}
mediump vec4 shade(mediump float d) {
mediump float mappedDistance = (d - u_minMaxDistance.x) / (u_minMaxDistance.y - u_minMaxDistance.x);
mappedDistance = clamp(mappedDistance, 0.0, 1.0);
return texture2D(u_shade, vec2(mappedDistance, 0.5));
}
void main(void) {
mediump float d = estimateDistance();
gl_FragColor = shade(d);
}`,"textured.vert":`attribute mediump vec2 a_position;
attribute mediump vec2 a_texcoord;
varying mediump vec2 v_texcoord;
void main(void) {
gl_Position = vec4(a_position, 0.0, 1.0);
v_texcoord = a_texcoord;
}`},materials:{"attributeData.glsl":`uniform highp sampler2D filterFlags;
uniform highp sampler2D animation;
uniform highp sampler2D gpgpu;
uniform highp sampler2D visualVariableData;
uniform highp sampler2D dataDriven0;
uniform highp sampler2D dataDriven1;
uniform highp sampler2D dataDriven2;
uniform float size;
highp vec2 getAttributeDataCoords(in highp vec3 id) {
highp vec3  texel = unpackDisplayIdTexel(id);
highp float u32 = float(int(texel.r) + int(texel.g) * 256 + int(texel.b) * 256 * 256);
highp float col = mod(u32, size);
highp float row = (u32 - col) / size;
highp float u = col / size;
highp float v = row / size;
return vec2(u, v);
}
highp vec2 getAttributeDataTextureCoords(in highp vec3 id) {
return (getAttributeDataCoords(id) * 2.0) - 1.0 + (.5 / vec2(size));
}
highp vec4 getFilterData(in highp vec3 id) {
vec2 coords = getAttributeDataCoords(id);
return texture2D(filterFlags, coords);
}
highp vec4 getAnimation(in highp vec3 id) {
highp vec2 coords = getAttributeDataCoords(id);
return texture2D(animation, coords);
}
highp vec4 getVisualVariableData(in highp vec3 id) {
highp vec2 coords = getAttributeDataCoords(id);
return texture2D(visualVariableData, coords);
}
highp vec4 getDataDriven0(in highp vec3 id) {
highp vec2 coords = getAttributeDataCoords(id);
return texture2D(dataDriven0, coords);
}
highp vec4 getDataDriven1(in highp vec3 id) {
highp vec2 coords = getAttributeDataCoords(id);
return texture2D(dataDriven1, coords);
}
highp vec4 getGPGPU(in highp vec3 id) {
highp vec2 coords = getAttributeDataCoords(id);
return texture2D(gpgpu, coords);
}
highp vec4 getDataDriven2(in highp vec3 id) {
highp vec2 coords = getAttributeDataCoords(id);
return texture2D(dataDriven2, coords);
}
float u88VVToFloat(in vec2 v) {
bool isMagic = v.x == 255.0 && v.y == 255.0;
if (isMagic) {
return NAN_MAGIC_NUMBER;
}
return (v.x + v.y * float(0x100)) - 32768.0;
}`,"barycentric.glsl":`float inTriangle(vec3 bary) {
vec3 absBary = abs(bary);
return step((absBary.x + absBary.y + absBary.z), 1.05);
}
vec3 xyToBarycentric(in vec2 pos, in vec2 v0,  in vec2 v1, in vec2 v2) {
mat3 xyToBarycentricMat3 = mat3(
v1.x * v2.y - v2.x * v1.y, v2.x * v0.y - v0.x * v2.y, v0.x * v1.y - v1.x * v0.y,
v1.y - v2.y, v2.y - v0.y, v0.y - v1.y,
v2.x - v1.x, v0.x - v2.x, v1.x - v0.x
);
float A2 = v0.x * (v1.y - v2.y) + v1.x * (v2.y - v0.y) + v2.x * (v0.y - v1.y);
return (1. / A2) * xyToBarycentricMat3 * vec3(1., pos);
}`,"constants.glsl":`const float C_DEG_TO_RAD = 3.14159265359 / 180.0;
const float C_256_TO_RAD = 3.14159265359 / 128.0;
const float C_RAD_TO_DEG = 180.0 / 3.141592654;
const float POSITION_PRECISION = 1.0 / 8.0;
const float FILL_POSITION_PRECISION = 1.0 / 1.0;
const float SOFT_EDGE_RATIO = 1.0;
const float THIN_LINE_WIDTH_FACTOR = 1.1;
const float THIN_LINE_HALF_WIDTH = 1.0;
const float EXTRUDE_SCALE_PLACEMENT_PADDING = 1.0 / 4.0;
const float OFFSET_PRECISION = 1.0 / 8.0;
const float OUTLINE_SCALE = 1.0 / 5.0;
const float SDF_FONT_SIZE = 24.0;
const float MAX_SDF_DISTANCE = 8.0;
const float PLACEMENT_PADDING = 8.0;
const float EPSILON = 0.00001;
const float EPSILON_HITTEST = 0.05;
const int MAX_FILTER_COUNT = 2;
const int ATTR_VV_SIZE = 0;
const int ATTR_VV_COLOR = 1;
const int ATTR_VV_OPACITY = 2;
const int ATTR_VV_ROTATION = 3;
const highp float NAN_MAGIC_NUMBER = 1e-30;
const int BITSET_GENERIC_LOCK_COLOR = 1;
const int BITSET_GENERIC_CONSIDER_ALPHA_ONLY = 4;
const int BITSET_MARKER_ALIGNMENT_MAP = 0;
const int BITSET_MARKER_OUTLINE_ALLOW_COLOR_OVERRIDE = 2;
const int BITSET_MARKER_SCALE_SYMBOLS_PROPORTIONALLY = 3;
const int BITSET_TYPE_FILL_OUTLINE = 0;
const int BITSET_FILL_RANDOM_PATTERN_OFFSET = 2;
const int BITSET_FILL_HAS_UNRESOLVED_REPLACEMENT_COLOR = 3;
const int BITSET_FILL_HAS_PATTERN_HEIGHT_PRECISION_FACTOR = 5;
const int BITSET_FILL_HAS_PATTERN_WIDTH_PRECISION_FACTOR = 6;
const int BITSET_LINE_SCALE_DASH = 2;`,fill:{"common.glsl":`#include <materials/symbologyTypeUtils.glsl>
#ifdef PATTERN
uniform mediump vec2 u_mosaicSize;
varying mediump float v_sampleAlphaOnly;
#endif
#if SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_DOT_DENSITY
uniform lowp vec4 u_isActive[ 2 ];
uniform highp float u_dotValue;
uniform highp float u_tileDotsOverArea;
uniform highp float u_dotTextureDotCount;
uniform mediump float u_tileZoomFactor;
#endif
varying highp vec3 v_id;
varying lowp vec4 v_color;
varying lowp float v_opacity;
varying mediump vec4 v_aux1;
#ifdef PATTERN
varying mediump vec2 v_tileTextureCoord;
#endif
#ifdef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE
varying lowp float v_isOutline;
#endif
#if SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_DOT_DENSITY
varying highp vec2 v_dotTextureCoords;
varying highp vec4 v_dotThresholds[ 2 ];
#endif`,"fill.frag":`precision highp float;
#include <materials/constants.glsl>
#include <materials/utils.glsl>
#include <materials/fill/common.glsl>
#ifdef PATTERN
uniform lowp sampler2D u_texture;
#endif
#if SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_DOT_DENSITY
uniform mediump mat4 u_dotColors[ 2 ];
uniform sampler2D u_dotTextures[ 2 ];
uniform vec4 u_dotBackgroundColor;
#endif
#ifdef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE
#include <materials/shared/line/common.glsl>
#include <materials/shared/line/line.frag>
lowp vec4 drawLine() {
float v_lineWidth = v_aux1.x;
vec2  v_normal    = v_aux1.yz;
LineData inputs = LineData(
v_color,
v_normal,
v_lineWidth,
v_opacity,
v_id
);
return shadeLine(inputs);
}
#endif
lowp vec4 drawFill() {
lowp vec4 out_color = vec4(0.);
#ifdef HITTEST
out_color = v_color;
#elif defined(PATTERN)
mediump vec4 v_tlbr = v_aux1;
mediump vec2 normalizedTextureCoord = mod(v_tileTextureCoord, 1.0);
mediump vec2 samplePos = mix(v_tlbr.xy, v_tlbr.zw, normalizedTextureCoord);
lowp vec4 color = texture2D(u_texture, samplePos);
if (v_sampleAlphaOnly > 0.5) {
color.rgb = vec3(color.a);
}
out_color = v_opacity * v_color * color;
#elif SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_DOT_DENSITY && !defined(HIGHLIGHT)
vec4 textureThresholds0 = texture2D(u_dotTextures[0], v_dotTextureCoords);
vec4 textureThresholds1 = texture2D(u_dotTextures[1], v_dotTextureCoords);
vec4 difference0 = v_dotThresholds[0] - textureThresholds0;
vec4 difference1 = v_dotThresholds[1] - textureThresholds1;
#ifdef DD_DOT_BLENDING
vec4 isPositive0 = step(0.0, difference0);
vec4 isPositive1 = step(0.0, difference1);
float weightSum = dot(isPositive0, difference0) + dot(isPositive1, difference1);
float lessThanEqZero = step(weightSum, 0.0);
float greaterThanZero = 1.0 - lessThanEqZero ;
float divisor = (weightSum + lessThanEqZero);
vec4 weights0 = difference0 * isPositive0 / divisor;
vec4 weights1 = difference1 * isPositive1 / divisor;
vec4 dotColor = u_dotColors[0] * weights0 + u_dotColors[1] * weights1;
vec4 preEffectColor = greaterThanZero * dotColor + lessThanEqZero * u_dotBackgroundColor;
#else
float diffMax = max(max4(difference0), max4(difference1));
float lessThanZero = step(diffMax, 0.0);
float greaterOrEqZero = 1.0 - lessThanZero;
vec4 isMax0 = step(diffMax, difference0);
vec4 isMax1 = step(diffMax, difference1);
vec4 dotColor = u_dotColors[0] * isMax0 + u_dotColors[1] * isMax1;
vec4 preEffectColor = greaterOrEqZero * dotColor + lessThanZero * u_dotBackgroundColor;
#endif
out_color = preEffectColor;
#else
out_color = v_opacity * v_color;
#endif
#ifdef HIGHLIGHT
out_color.a = 1.0;
#endif
return out_color;
}
void main() {
#ifdef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE
if (v_isOutline > 0.5) {
gl_FragColor = drawLine();
} else {
gl_FragColor = drawFill();
}
#else
gl_FragColor = drawFill();
#endif
}`,"fill.vert":`#include <materials/symbologyTypeUtils.glsl>
#define PACKED_LINE
precision highp float;
attribute float a_bitset;
#if SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_DOT_DENSITY
attribute float a_inverseArea;
vec4 a_color = vec4(0.0, 0.0, 0.0, 1.0);
vec2 a_zoomRange = vec2(0.0, 10000.0);
#else
attribute vec4 a_color;
attribute vec4 a_aux2;
attribute vec4 a_aux3;
#ifndef SYMBOLOGY_TYPE_IS_SIMPLE_LIKE
attribute vec4 a_aux1;
attribute vec2 a_zoomRange;
#else
vec2 a_zoomRange = vec2(0.0, 10000.0);
#endif
#endif
uniform vec2 u_tileOffset;
uniform vec2 u_maxIntNumOfCrossing;
#include <util/encoding.glsl>
#include <materials/vcommon.glsl>
#include <materials/fill/common.glsl>
#include <materials/fill/hittest.glsl>
const float INV_SCALE_COMPRESSION_FACTOR = 1.0 / 128.0;
const float MAX_REPRESENTABLE_INT = 16777216.0;
#if SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_DOT_DENSITY
vec4 dotThreshold(vec4 featureAttrOverFeatureArea, float dotValue, float tileDotsOverArea) {
return featureAttrOverFeatureArea * (1.0 / dotValue)  * (1.0 / tileDotsOverArea);
}
#endif
#ifdef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE
#include <materials/shared/line/common.glsl>
#include <materials/shared/line/line.vert>
void drawLine(out lowp vec4 out_color, out highp vec3 out_pos) {
LineData outputs = buildLine(
out_pos,
a_id,
a_pos,
a_color,
(a_aux3.xy - 128.) / 16.,
(a_aux3.zw - 128.) / 16.,
0.,
a_aux2.z / 16.,
a_bitset,
vec4(0.),
vec2(0.),
a_aux2.w / 16.
);
v_id      = outputs.id;
v_opacity = outputs.opacity;
v_aux1    = vec4(outputs.lineHalfWidth, outputs.normal, 0.);
out_color = outputs.color;
}
#endif
void drawFill(out lowp vec4 out_color, out highp vec3 out_pos) {
float a_bitSet = a_bitset;
out_color = getColor(a_color, a_bitSet, BITSET_GENERIC_LOCK_COLOR);
v_opacity = getOpacity();
v_id      = norm(a_id);
#if SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_DOT_DENSITY
mat3 tileToTileNormalized = mat3(  2. / 512.,  0.,  0.,
0., -2. / 512.,  0.,
-1.,  1.,  1.  );
out_pos   = tileToTileNormalized * vec3((a_pos * FILL_POSITION_PRECISION), 1.);
#else
out_pos   = u_dvsMat3 * vec3(a_pos * FILL_POSITION_PRECISION, 1.);
#endif
#ifdef PATTERN
vec4  a_tlbr   = a_aux1;
float a_width  = a_aux2.x;
float a_height = a_aux2.y;
vec2  a_offset = a_aux2.zw;
vec2  a_scale  = a_aux3.xy;
float a_angle  = a_aux3.z;
if (getBit(a_bitset, BITSET_FILL_HAS_PATTERN_WIDTH_PRECISION_FACTOR) > 0.5) {
a_width *= INV_SCALE_COMPRESSION_FACTOR;
}
if (getBit(a_bitset, BITSET_FILL_HAS_PATTERN_HEIGHT_PRECISION_FACTOR) > 0.5) {
a_height *= INV_SCALE_COMPRESSION_FACTOR;
}
vec2 scale = INV_SCALE_COMPRESSION_FACTOR * a_scale;
float width = u_zoomFactor * a_width * scale.x;
float height = u_zoomFactor * a_height * scale.y;
float angle = C_256_TO_RAD * a_angle;
float sinA = sin(angle);
float cosA = cos(angle);
float dx = 0.0;
float dy = 0.0;
if (getBit(a_bitset, BITSET_FILL_RANDOM_PATTERN_OFFSET) > 0.5) {
float id = rgba2float(vec4(a_id, 0.0));
dx = rand(vec2(id, 0.0));
dy = rand(vec2(0.0, id));
}
mat3 patternMatrix = mat3(cosA / width, sinA / height, 0,
-sinA / width, cosA / height, 0,
dx,            dy,           1);
vec2 patternSize = vec2(a_width, a_height);
vec2 numPatternsPerMaxInt = vec2(MAX_REPRESENTABLE_INT) / patternSize;
vec2 maxIntCrossingOffsetCorrection = patternSize * fract(u_maxIntNumOfCrossing * numPatternsPerMaxInt);
vec2 tileOffset = u_tileOffset + maxIntCrossingOffsetCorrection - 0.5 * patternSize;
tileOffset = vec2(tileOffset.x * cosA - tileOffset.y * sinA, tileOffset.x * sinA + tileOffset.y * cosA);
tileOffset = mod(tileOffset, patternSize);
vec2 symbolOffset = u_zoomFactor * scale * vec2(a_offset - tileOffset) / vec2(width, height);
v_tileTextureCoord = (patternMatrix * vec3(a_pos * FILL_POSITION_PRECISION, 1.0)).xy - symbolOffset;
v_aux1 = a_tlbr / u_mosaicSize.xyxy;
v_sampleAlphaOnly = getBit(a_bitset, BITSET_GENERIC_CONSIDER_ALPHA_ONLY);
if (getBit(a_bitSet, BITSET_FILL_HAS_UNRESOLVED_REPLACEMENT_COLOR) > 0.5) {
#ifdef VV_COLOR
v_sampleAlphaOnly *= (1.0 - float(isNan(VV_ADATA[ATTR_VV_COLOR]))) * (1.0 - getBit(a_bitSet, BITSET_GENERIC_LOCK_COLOR));
#else
v_sampleAlphaOnly = 0.0;
#endif
}
#elif SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_DOT_DENSITY
vec4 ddAttributeData0 = getAttributeData2(a_id) * u_isActive[0] * a_inverseArea;
vec4 ddAttributeData1 = getAttributeData3(a_id) * u_isActive[1] * a_inverseArea;
float size = u_tileZoomFactor * 512.0 * 1.0 / u_pixelRatio;
v_dotThresholds[0] = dotThreshold(ddAttributeData0, u_dotValue, u_tileDotsOverArea);
v_dotThresholds[1] = dotThreshold(ddAttributeData1, u_dotValue, u_tileDotsOverArea);
v_dotTextureCoords = (a_pos * FILL_POSITION_PRECISION + 0.5) / size;
#endif
}
#ifdef HITTEST
void draw(out lowp vec4 out_color, out highp vec3 out_pos) {
#ifdef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE
if (getBit(a_bitset, BITSET_TYPE_FILL_OUTLINE) > 0.5) {
out_pos = vec3(0., 0., 2.);
return;
}
#endif
hittestFill(out_color, out_pos);
gl_PointSize = 1.0;
}
#elif defined(SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE)
void draw(out lowp vec4 out_color, out highp vec3 out_pos) {
v_isOutline = getBit(a_bitset, BITSET_TYPE_FILL_OUTLINE);
if (v_isOutline > 0.5) {
drawLine(out_color, out_pos);
} else {
drawFill(out_color, out_pos);
}
}
#else
#define draw drawFill
#endif
void main()
{
INIT;
highp vec3 pos  = vec3(0.);
highp vec4 color  = vec4(0.);
draw(color, pos);
v_color = color;
gl_Position = vec4(clip(v_color, pos, getFilterFlags(), a_zoomRange), 1.0);
}`,"hittest.glsl":`#ifdef HITTEST
#include <materials/hittest/common.glsl>
attribute vec2 a_pos1;
attribute vec2 a_pos2;
void hittestFill(
out lowp vec4 out_color,
out highp vec3 out_pos
) {
vec3 pos        = u_viewMat3 * u_tileMat3 * vec3(a_pos  * FILL_POSITION_PRECISION, 1.);
vec3 pos1       = u_viewMat3 * u_tileMat3 * vec3(a_pos1 * FILL_POSITION_PRECISION, 1.);
vec3 pos2       = u_viewMat3 * u_tileMat3 * vec3(a_pos2 * FILL_POSITION_PRECISION, 1.);
float hittestDist = u_hittestDist;
float dist = distPointTriangle(u_hittestPos, pos.xy, pos1.xy, pos2.xy);
out_pos = vec3(getAttributeDataTextureCoords(a_id), 0.0);
if (dist < 0. || dist >= hittestDist) {
out_pos.z += 2.0;
}
out_color = vec4(1. / 255., 0, 0, dist == 0. ? (1. / 255.) : 0.);
}
#endif`},hittest:{"common.glsl":`#ifdef HITTEST
uniform float hittestDist;
uniform highp vec2 hittestPos;
float projectScalar(vec2 a, vec2 b) {
return dot(a, normalize(b));
}
float distPointSegment(vec2 p0, vec2 p1, vec2 p2) {
vec2 L = p2 - p1;
vec2 A = p0 - p1;
float projAL = projectScalar(A, L);
float t = clamp(projAL / length(L), 0., 1.);
return distance(p0, p1 + t * (p2 - p1));
}
void hittestMarker(out lowp vec4 out_color, out highp vec3 out_pos, in highp vec3 pos, float size) {
float dist = distance(pos, vec3(hittestPos, 1.));
out_pos = vec3(getAttributeDataTextureCoords(a_id), 0.0);
if ((dist - size) > hittestDist) {
out_pos.z += 2.0;
}
out_color = vec4(1. / 255., 0, 0, (dist - size) < 0. ? (1. / 255.) : 0.);
}
float intersectPointTriangleBary(vec2 p, vec2 a, vec2 b, vec2 c) {
return inTriangle(xyToBarycentric(p, a, b, c));
}
float distPointTriangle(vec2 p, vec2 a, vec2 b, vec2 c) {
vec2 ba = b - a;
vec2 ca = c - a;
float crossProduct = ba.x * ca.y - ca.x * ba.y;
bool isParallel = crossProduct < EPSILON_HITTEST && crossProduct > -EPSILON_HITTEST;
if (isParallel) {
return -1.;
}
if (intersectPointTriangleBary(p.xy, a, b, c) == 1.) {
return 0.;
}
float distAB = distPointSegment(p, a, b);
float distBC = distPointSegment(p, b, c);
float distCA = distPointSegment(p, c, a);
return min(min(distAB, distBC), distCA);
}
#endif`},icon:{"common.glsl":`#include <util/encoding.glsl>
uniform lowp vec2 u_mosaicSize;
varying lowp vec4 v_color;
varying highp vec3 v_id;
varying highp vec4 v_sizeTex;
varying mediump vec3 v_pos;
varying lowp float v_opacity;
uniform lowp sampler2D u_texture;
#ifdef SDF
varying lowp vec4 v_outlineColor;
varying mediump float v_outlineWidth;
varying mediump float v_distRatio;
varying mediump float v_overridingOutlineColor;
varying mediump float v_isThin;
#endif
#ifdef SDF
vec4 getColor(vec2 v_size, vec2 v_tex) {
#ifdef HITTEST
lowp vec4 fillPixelColor = vec4(1.0);
#else
lowp vec4 fillPixelColor = v_color;
#endif
float d = 0.5 - rgba2float(texture2D(u_texture, v_tex));
float size = max(v_size.x, v_size.y);
float dist = d * size * SOFT_EDGE_RATIO * v_distRatio;
fillPixelColor *= clamp(0.5 - dist, 0.0, 1.0);
float outlineWidth = v_outlineWidth;
#ifdef HIGHLIGHT
outlineWidth = max(outlineWidth, 4.0 * v_isThin);
#endif
if (outlineWidth > 0.25) {
lowp vec4 outlinePixelColor = v_overridingOutlineColor * v_color + (1.0 - v_overridingOutlineColor) * v_outlineColor;
float clampedOutlineSize = min(outlineWidth, size);
outlinePixelColor *= clamp(0.5 - abs(dist) + clampedOutlineSize * 0.5, 0.0, 1.0);
return v_opacity * ((1.0 - outlinePixelColor.a) * fillPixelColor + outlinePixelColor);
}
return v_opacity * fillPixelColor;
}
#else
vec4 getColor(vec2 _v_size, vec2 v_tex) {
lowp vec4 texColor = texture2D(u_texture, v_tex);
return v_opacity * texColor * v_color;
}
#endif`,heatmapAccumulate:{"common.glsl":`varying lowp vec4 v_hittestResult;
varying mediump vec2 v_offsetFromCenter;
varying highp float v_fieldValue;`,"heatmapAccumulate.frag":`precision mediump float;
#include <materials/icon/heatmapAccumulate/common.glsl>
#ifdef HEATMAP_PRECISION_HALF_FLOAT
#define COMPRESSION_FACTOR 0.25
#else
#define COMPRESSION_FACTOR 1.0
#endif
uniform lowp sampler2D u_texture;
void main() {
#ifdef HITTEST
gl_FragColor = v_hittestResult;
#else
float radius = length(v_offsetFromCenter);
float shapeWeight = step(radius, 1.0);
float oneMinusRadiusSquared = 1.0 - radius * radius;
float kernelWeight = oneMinusRadiusSquared * oneMinusRadiusSquared;
gl_FragColor = vec4(shapeWeight * kernelWeight * v_fieldValue * COMPRESSION_FACTOR);
#endif
}`,"heatmapAccumulate.vert":`precision highp float;
attribute vec2 a_vertexOffset;
vec4 a_color = vec4(0.0);
vec2 a_zoomRange = vec2(0.0, 10000.0);
uniform float u_radius;
uniform float u_isFieldActive;
#include <materials/vcommon.glsl>
#include <materials/hittest/common.glsl>
#include <materials/icon/heatmapAccumulate/common.glsl>
void main() {
float filterFlags = getFilterFlags();
#ifdef HITTEST
highp vec4 out_hittestResult = vec4(0.);
highp vec3 out_pos = vec3(0.);
vec3 pos = u_viewMat3 * u_tileMat3 * vec3(a_pos * POSITION_PRECISION, 1.0);
hittestMarker(out_hittestResult, out_pos, pos, u_radius);
v_hittestResult = out_hittestResult;
gl_PointSize = 1.;
gl_Position = vec4(clip(a_color, out_pos, filterFlags, a_zoomRange), 1.0);
#else
v_offsetFromCenter = sign(a_vertexOffset);
v_fieldValue = getAttributeData2(a_id).x * u_isFieldActive + 1.0 - u_isFieldActive;
vec3 centerPos = u_dvsMat3 * vec3(a_pos * POSITION_PRECISION, 1.0);
vec3 vertexPos = centerPos + u_displayViewMat3 * vec3(v_offsetFromCenter, 0.0) * u_radius;
gl_Position = vec4(clip(a_color, vertexPos, filterFlags, a_zoomRange), 1.0);
#endif
}`},"hittest.glsl":`#ifdef HITTEST
#include <materials/hittest/common.glsl>
attribute vec2 a_vertexOffset1;
attribute vec2 a_vertexOffset2;
attribute vec2 a_texCoords1;
attribute vec2 a_texCoords2;
vec2 getTextureCoords(in vec3 bary, in vec2 texCoords0, in vec2 texCoords1, in vec2 texCoords2) {
return texCoords0 * bary.x + texCoords1 * bary.y + texCoords2 * bary.z;
}
void hittestIcon(
inout lowp vec4 out_color,
out highp vec3 out_pos,
in vec3 pos,
in vec3 offset,
in vec2 size,
in float scaleFactor,
in float isMapAligned
) {
out_pos = vec3(getAttributeDataTextureCoords(a_id), 0.0);
vec3 posBase = u_viewMat3 * u_tileMat3  * pos;
vec3 offset1 = scaleFactor * vec3(a_vertexOffset1 / 16.0, 0.);
vec3 offset2 = scaleFactor * vec3(a_vertexOffset2 / 16.0, 0.);
vec2 pos0    = (posBase + getMatrixNoDisplay(isMapAligned) * offset).xy;
vec2 pos1    = (posBase + getMatrixNoDisplay(isMapAligned) * offset1).xy;
vec2 pos2    = (posBase + getMatrixNoDisplay(isMapAligned) * offset2).xy;
vec3 bary0 = xyToBarycentric(u_hittestPos + vec2(-u_hittestDist, -u_hittestDist), pos0, pos1, pos2);
vec3 bary1 = xyToBarycentric(u_hittestPos + vec2(0., -u_hittestDist), pos0, pos1, pos2);
vec3 bary2 = xyToBarycentric(u_hittestPos + vec2(u_hittestDist, -u_hittestDist), pos0, pos1, pos2);
vec3 bary3 = xyToBarycentric(u_hittestPos + vec2(-u_hittestDist, 0.), pos0, pos1, pos2);
vec3 bary4 = xyToBarycentric(u_hittestPos, pos0, pos1, pos2);
vec3 bary5 = xyToBarycentric(u_hittestPos + vec2(u_hittestDist, 0.), pos0, pos1, pos2);
vec3 bary6 = xyToBarycentric(u_hittestPos + vec2(-u_hittestDist, u_hittestDist), pos0, pos1, pos2);
vec3 bary7 = xyToBarycentric(u_hittestPos + vec2(0., u_hittestDist), pos0, pos1, pos2);
vec3 bary8 = xyToBarycentric(u_hittestPos + vec2(u_hittestDist, u_hittestDist), pos0, pos1, pos2);
vec2 tex0 = a_texCoords  / u_mosaicSize;
vec2 tex1 = a_texCoords1 / u_mosaicSize;
vec2 tex2 = a_texCoords2 / u_mosaicSize;
float alphaSum = 0.;
alphaSum += inTriangle(bary0) * getColor(size, getTextureCoords(bary0, tex0, tex1, tex2)).a;
alphaSum += inTriangle(bary1) * getColor(size, getTextureCoords(bary1, tex0, tex1, tex2)).a;
alphaSum += inTriangle(bary2) * getColor(size, getTextureCoords(bary2, tex0, tex1, tex2)).a;
alphaSum += inTriangle(bary3) * getColor(size, getTextureCoords(bary3, tex0, tex1, tex2)).a;
alphaSum += inTriangle(bary4) * getColor(size, getTextureCoords(bary4, tex0, tex1, tex2)).a;
alphaSum += inTriangle(bary5) * getColor(size, getTextureCoords(bary5, tex0, tex1, tex2)).a;
alphaSum += inTriangle(bary6) * getColor(size, getTextureCoords(bary6, tex0, tex1, tex2)).a;
alphaSum += inTriangle(bary7) * getColor(size, getTextureCoords(bary7, tex0, tex1, tex2)).a;
out_pos.z += step(alphaSum, .05) * 2.0;
out_color = vec4(1. / 255., 0., 0., alphaSum / 255.);
}
#endif`,"icon.frag":`precision mediump float;
#include <materials/constants.glsl>
#include <materials/utils.glsl>
#include <materials/icon/common.glsl>
void main()
{
#ifdef HITTEST
vec4 color = v_color;
#else
vec4 color = getColor(v_sizeTex.xy, v_sizeTex.zw);
#endif
#ifdef HIGHLIGHT
color.a = step(1.0 / 255.0, color.a);
#endif
gl_FragColor = color;
}`,"icon.vert":`precision highp float;
attribute vec4 a_color;
attribute vec4 a_outlineColor;
attribute vec4 a_sizeAndOutlineWidth;
attribute vec2 a_vertexOffset;
attribute vec2 a_texCoords;
attribute vec2 a_bitSetAndDistRatio;
attribute vec2 a_zoomRange;
#include <materials/vcommon.glsl>
#include <materials/icon/common.glsl>
#include <materials/icon/hittest.glsl>
float getMarkerScaleFactor(inout vec2 size, in float referenceSize) {
#ifdef VV_SIZE
float f = getSize(size.y) / size.y;
float sizeFactor = size.y / referenceSize;
return getSize(referenceSize) / referenceSize;
#else
return 1.;
#endif
}
void main()
{
INIT;
float a_bitSet = a_bitSetAndDistRatio.x;
vec3  pos           = vec3(a_pos * POSITION_PRECISION, 1.0);
vec2  size          = a_sizeAndOutlineWidth.xy * a_sizeAndOutlineWidth.xy / 128.0;
vec3  offset        = vec3(a_vertexOffset / 16.0, 0.);
float outlineSize   = a_sizeAndOutlineWidth.z * a_sizeAndOutlineWidth.z / 128.0;
float isMapAligned  = getBit(a_bitSet, BITSET_MARKER_ALIGNMENT_MAP);
float referenceSize = a_sizeAndOutlineWidth.w * a_sizeAndOutlineWidth.w / 128.0;
float scaleSymbolProportionally = getBit(a_bitSet, BITSET_MARKER_SCALE_SYMBOLS_PROPORTIONALLY);
float scaleFactor               = getMarkerScaleFactor(size, referenceSize);
size.xy     *= scaleFactor;
offset.xy   *= scaleFactor;
outlineSize *= scaleSymbolProportionally * (scaleFactor - 1.0) + 1.0;
vec2 v_tex   = a_texCoords / u_mosaicSize;
float filterFlags = getFilterFlags();
v_color    = getColor(a_color, a_bitSet, BITSET_GENERIC_LOCK_COLOR);
v_opacity  = getOpacity();
v_id       = norm(a_id);
v_pos      = u_dvsMat3 * pos + getMatrix(isMapAligned) * getRotation()  * offset;
v_sizeTex  = vec4(size.xy, v_tex.xy);
#ifdef SDF
v_isThin   = getBit(a_bitSet, BITSET_MARKER_OUTLINE_ALLOW_COLOR_OVERRIDE);
#ifdef VV_COLOR
v_overridingOutlineColor = v_isThin;
#else
v_overridingOutlineColor = 0.0;
#endif
v_outlineWidth = min(outlineSize, max(max(size.x, size.y) - 0.99, 0.0));
v_outlineColor = a_outlineColor;
v_distRatio = a_bitSetAndDistRatio.y / 128.0;
#endif
#ifdef HITTEST
highp vec4 out_color = vec4(0.);
highp vec3 out_pos   = vec3(0.);
hittestIcon(out_color, out_pos, pos, offset, size, scaleFactor, isMapAligned);
v_color = out_color;
gl_PointSize = 1.;
gl_Position = vec4(clip(v_color, out_pos, filterFlags, a_zoomRange), 1.0);
#else
gl_Position = vec4(clip(v_color, v_pos, filterFlags, a_zoomRange), 1.0);
#endif
}`},label:{"common.glsl":`uniform mediump float u_zoomLevel;
uniform mediump float u_mapRotation;
uniform mediump float u_mapAligned;
uniform mediump vec2 u_mosaicSize;
varying mediump float v_antialiasingWidth;
varying mediump float v_edgeDistanceOffset;
varying mediump vec2 v_tex;
varying mediump vec4 v_color;
varying lowp vec4 v_animation;`,"label.frag":"#include <materials/text/text.frag>","label.vert":`precision highp float;
#include <materials/vcommon.glsl>
#include <materials/text/common.glsl>
attribute vec4 a_color;
attribute vec4 a_haloColor;
attribute vec4 a_texAndSize;
attribute vec4 a_refSymbolAndPlacementOffset;
attribute vec4 a_glyphData;
attribute vec2 a_vertexOffset;
attribute vec2 a_texCoords;
uniform float u_isHaloPass;
uniform float u_isBackgroundPass;
uniform float u_mapRotation;
uniform float u_mapAligned;
float getZ(in float minZoom, in float maxZoom, in float angle) {
float glyphAngle = angle * 360.0 / 254.0;
float mapAngle = u_mapRotation * 360.0 / 254.0;
float diffAngle = min(360.0 - abs(mapAngle - glyphAngle), abs(mapAngle - glyphAngle));
float z = 0.0;
z += u_mapAligned * (2.0 * (1.0 - step(minZoom, u_currentZoom)));
z += u_mapAligned * 2.0 * step(90.0, diffAngle);
z += 2.0 * (1.0 - step(u_currentZoom, maxZoom));
return z;
}
void main()
{
INIT;
float groupMinZoom    = getMinZoom();
float glyphMinZoom    = a_glyphData.x;
float glyphMaxZoom    = a_glyphData.y;
float glyphAngle      = a_glyphData.z;
float a_isBackground  = a_glyphData.w;
float a_minZoom          = max(groupMinZoom, glyphMinZoom);
float a_placementPadding = a_refSymbolAndPlacementOffset.x * EXTRUDE_SCALE_PLACEMENT_PADDING;
vec2  a_placementDir     = unpack_u8_nf32(a_refSymbolAndPlacementOffset.zw);
float a_refSymbolSize    = a_refSymbolAndPlacementOffset.y;
float fontSize           = a_texAndSize.z;
float haloSize           = a_texAndSize.w * OUTLINE_SCALE;
vec2  vertexOffset = a_vertexOffset * OFFSET_PRECISION;
vec3  pos          = vec3(a_pos * POSITION_PRECISION, 1.0);
float z            = getZ(a_minZoom, glyphMaxZoom, glyphAngle);
float fontScale    = fontSize / SDF_FONT_SIZE;
float halfSize     = getSize(a_refSymbolSize) / 2.0;
float animation    = pow(getAnimationState(), vec4(2.0)).r;
float isText = 1.0 - a_isBackground;
float isBackground = u_isBackgroundPass * a_isBackground;
vec4  nonHaloColor = (isBackground + isText) * a_color;
v_color     = animation * ((1.0 - u_isHaloPass) * nonHaloColor + (u_isHaloPass * a_haloColor));
v_opacity   = 1.0;
v_tex       = a_texCoords / u_mosaicSize;
v_edgeDistanceOffset = u_isHaloPass * haloSize / fontScale / MAX_SDF_DISTANCE;
v_antialiasingWidth  = 0.105 * SDF_FONT_SIZE / fontSize / u_pixelRatio;
vec2 placementOffset = a_placementDir * (halfSize + a_placementPadding);
vec3 glyphOffset     = u_displayMat3 * vec3(vertexOffset + placementOffset, 0.0);
vec3 v_pos           = vec3((u_dvsMat3 * pos + glyphOffset).xy, z);
float isHidden = u_isBackgroundPass * isText + (1.0 - u_isBackgroundPass) * a_isBackground;
v_pos.z += 2.0 * isHidden;
gl_Position = vec4(v_pos, 1.0);
#ifdef DEBUG
v_color = vec4(a_color.rgb, z == 0.0 ? 1.0 : 0.645);
#endif
}`},line:{"common.glsl":`varying lowp vec4 v_color;
varying highp vec3 v_id;
varying mediump vec2 v_normal;
varying mediump float v_lineHalfWidth;
varying lowp float v_opacity;
#ifdef PATTERN
varying mediump vec4 v_tlbr;
varying mediump vec2 v_patternSize;
#endif
#if defined(PATTERN) || defined(SDF)
varying highp float v_accumulatedDistance;
#endif
#ifdef SDF
varying mediump float v_lineWidthRatio;
#endif`,"hittest.glsl":`#include <materials/hittest/common.glsl>
#ifdef HITTEST
attribute vec2 a_pos1;
attribute vec2 a_pos2;
void hittestLine(out lowp vec4 out_color, out highp vec3 out_pos, float halfWidth) {
vec3 pos        = u_viewMat3 * u_tileMat3 * vec3(a_pos  * POSITION_PRECISION, 1.);
vec3 pos1       = u_viewMat3 * u_tileMat3 * vec3(a_pos1 * POSITION_PRECISION, 1.);
vec3 pos2       = u_viewMat3 * u_tileMat3 * vec3(a_pos2 * POSITION_PRECISION, 1.);
vec3 outTextureCoords = vec3(getAttributeDataTextureCoords(a_id), 0.0);
float dist = min(distPointSegment(u_hittestPos, pos.xy, pos1.xy),
distPointSegment(u_hittestPos, pos.xy, pos2.xy)) - halfWidth;
out_pos = vec3(getAttributeDataTextureCoords(a_id), 0.0);
if (dist >= u_hittestDist) {
out_pos.z += 2.0;
}
out_color = vec4(1. / 255., 0, 0, dist <= 0. ? (1. / 255.) : 0.);
}
#endif`,"line.frag":`precision lowp float;
#include <util/encoding.glsl>
#include <materials/constants.glsl>
#include <materials/symbologyTypeUtils.glsl>
#include <materials/line/common.glsl>
#include <materials/shared/line/common.glsl>
#include <materials/shared/line/line.frag>
#ifdef HITTEST
void main() {
gl_FragColor = v_color;
}
#else
void main() {
LineData inputs = LineData(
v_color,
v_normal,
v_lineHalfWidth,
v_opacity,
#ifndef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE
#ifdef PATTERN
v_tlbr,
v_patternSize,
#endif
#ifdef SDF
v_lineWidthRatio,
#endif
#if defined(PATTERN) || defined(SDF)
v_accumulatedDistance,
#endif
#endif
v_id
);
gl_FragColor = shadeLine(inputs);
}
#endif`,"line.vert":`precision highp float;
attribute vec4 a_color;
attribute vec4 a_offsetAndNormal;
attribute vec2 a_accumulatedDistanceAndHalfWidth;
attribute vec4 a_tlbr;
attribute vec4 a_segmentDirection;
attribute vec2 a_aux;
attribute vec2 a_zoomRange;
#include <materials/vcommon.glsl>
#include <materials/symbologyTypeUtils.glsl>
#include <materials/line/common.glsl>
#include <materials/line/hittest.glsl>
#include <materials/shared/line/common.glsl>
#include <materials/shared/line/line.vert>
#ifdef HITTEST
void draw() {
float aa        = 0.5 * u_antialiasing;
float a_halfWidth = a_accumulatedDistanceAndHalfWidth.y / 16.;
float a_cimHalfWidth = a_aux.x / 16. ;
vec2  a_offset = a_offsetAndNormal.xy / 16.;
float baseWidth = getBaseLineHalfWidth(a_halfWidth, a_cimHalfWidth);
float halfWidth = getLineHalfWidth(baseWidth, aa);
highp vec3 pos  = vec3(0.);
v_color = vec4(0.);
hittestLine(v_color, pos, halfWidth);
gl_PointSize = 1.;
gl_Position = vec4(clip(v_color, pos, getFilterFlags(), a_zoomRange), 1.0);
}
#else
void draw()
{
highp vec3 pos = vec3(0.);
LineData outputs = buildLine(
pos,
a_id,
a_pos,
a_color,
a_offsetAndNormal.xy / 16.,
a_offsetAndNormal.zw / 16.,
a_accumulatedDistanceAndHalfWidth.x,
a_accumulatedDistanceAndHalfWidth.y / 16.,
a_segmentDirection.w,
a_tlbr,
a_segmentDirection.xy / 16.,
a_aux.x / 16.
);
v_id              = outputs.id;
v_color           = outputs.color;
v_normal          = outputs.normal;
v_lineHalfWidth   = outputs.lineHalfWidth;
v_opacity         = outputs.opacity;
#ifndef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE
#ifdef PATTERN
v_tlbr          = outputs.tlbr;
v_patternSize   = outputs.patternSize;
#endif
#ifdef SDF
v_lineWidthRatio = outputs.lineWidthRatio;
#endif
#if defined(PATTERN) || defined(SDF)
v_accumulatedDistance = outputs.accumulatedDistance;
#endif
#endif
gl_Position = vec4(clip(outputs.color, pos, getFilterFlags(), a_zoomRange), 1.0);
}
#endif
void main() {
INIT;
draw();
}`},pie:{"pie.common.glsl":`uniform float outlineWidth;
uniform mediump float sectorThreshold;
varying vec3  v_id;
varying vec3  v_pos;
varying vec2  v_offset;
varying vec4  v_color;
varying float v_size;
varying float v_numOfEntries;
varying float v_maxSectorAngle;
varying vec2  v_filteredSectorToColorId[numberOfFields];
varying vec2  v_texCoords;
varying float v_outlineWidth;
varying float v_opacity;
struct FilteredChartInfo {
float endSectorAngle;
int colorId;
};`,"pie.frag":`precision highp float;
#include <util/atan2.glsl>
#include <materials/constants.glsl>
#include <materials/utils.glsl>
#include <materials/pie/pie.common.glsl>
uniform lowp vec4 colors[numberOfFields];
uniform lowp vec4 defaultColor;
uniform lowp vec4 othersColor;
uniform lowp vec4 outlineColor;
uniform float donutRatio;
lowp vec4 getSectorColor(in int index, in vec2 filteredSectorToColorId[numberOfFields]) {
mediump int colorIndex = int(filteredSectorToColorId[index].y);
return colors[colorIndex];
}
const int OTHER_SECTOR_ID = 255;
#ifdef HITTEST
vec4 getColor() {
float distanceSize = length(v_offset) * v_size;
float donutSize = donutRatio * v_size;
float alpha = step(donutSize, distanceSize) * (1.0 - step(v_size, distanceSize));
return v_color;
}
#else
vec4 getColor() {
float angle = mod(90.0 - C_RAD_TO_DEG * atan2(v_offset.y, v_offset.x), 360.0);
int numOfEntries = int(v_numOfEntries);
float maxSectorAngle = v_maxSectorAngle;
lowp vec4 fillColor = (maxSectorAngle > 0.0 || sectorThreshold > 0.0) ? othersColor : defaultColor;
lowp vec4 prevColor = vec4(0.0);
lowp vec4 nextColor = vec4(0.0);
float startSectorAngle = 0.0;
float endSectorAngle = 0.0;
if (angle < maxSectorAngle) {
for (int index = 0; index < numberOfFields; ++index) {
startSectorAngle = endSectorAngle;
endSectorAngle = v_filteredSectorToColorId[index].x;
if (endSectorAngle > angle) {
fillColor = getSectorColor(index, v_filteredSectorToColorId);
prevColor = sectorThreshold != 0.0 && index == 0 && maxSectorAngle + EPSILON < 360. ? othersColor :
getSectorColor(index > 0 ? index - 1 : numOfEntries - 1, v_filteredSectorToColorId);
nextColor = sectorThreshold != 0.0 && abs(endSectorAngle - maxSectorAngle) < EPSILON && maxSectorAngle + EPSILON < 360. ? othersColor :
getSectorColor(index < numOfEntries - 1 ? index + 1 : 0, v_filteredSectorToColorId);
break;
}
if (index == numOfEntries - 1) {
break;
}
}
} else if (numOfEntries <= 0) {
prevColor = nextColor = fillColor;
} else {
prevColor = getSectorColor(numOfEntries - 1, v_filteredSectorToColorId);
nextColor = getSectorColor(0, v_filteredSectorToColorId);
startSectorAngle = maxSectorAngle;
endSectorAngle = 360.0;
}
lowp vec4 outlineColor = outlineColor;
float offset = length(v_offset);
float distanceSize = offset * v_size;
float distanceToStartSector = (angle - startSectorAngle);
float distanceToEndSector = (endSectorAngle - angle);
float sectorThreshold = 0.75;
float beginSectorAlpha = smoothstep(-sectorThreshold, sectorThreshold, distanceToStartSector * offset);
float endSectorAlpha = smoothstep(-sectorThreshold, sectorThreshold, distanceToEndSector * offset);
fillColor = mix(prevColor, fillColor, beginSectorAlpha) + mix(nextColor, fillColor, endSectorAlpha) - fillColor;
float aaThreshold = 0.75;
float startOfOutline = v_size - v_outlineWidth - aaThreshold;
float donutSize = donutRatio * startOfOutline;
float endOfDonut = donutSize - v_outlineWidth;
float innerCircleAlpha = endOfDonut > aaThreshold ? smoothstep(endOfDonut - aaThreshold, endOfDonut + aaThreshold, distanceSize) : 1.0;
float outerCircleAlpha = 1.0 - smoothstep(v_size - 2.0 * aaThreshold, v_size, distanceSize);
float circleAlpha = innerCircleAlpha * outerCircleAlpha;
if (startOfOutline > 0.0 && v_outlineWidth > 0.25) {
float outlineFactor = smoothstep(startOfOutline - aaThreshold, startOfOutline + aaThreshold, distanceSize);
float innerLineFactor = donutSize - aaThreshold > 0.0 ? 1.0 - smoothstep(donutSize - aaThreshold, donutSize + aaThreshold , distanceSize) : 0.0;
fillColor = mix(fillColor, outlineColor, innerLineFactor + outlineFactor);
}
return v_opacity * circleAlpha * fillColor;
}
#endif
void main()
{
vec4 color = getColor();
#ifdef highlight
color.a = step(1.0 / 255.0, color.a);
#endif
gl_FragColor = color;
}`,"pie.vert":`#include <materials/constants.glsl>
#include <materials/utils.glsl>
#include <materials/barycentric.glsl>
#include <materials/vcommon.glsl>
#include <materials/vv.glsl>
#include <materials/attributeData.glsl>
#include <materials/pie/pie.common.glsl>
#include <materials/hittest/common.glsl>
attribute float a_bitSet;
attribute vec2  a_offset;
attribute vec2  a_texCoords;
attribute float a_referenceSize;
attribute vec2  a_zoomRange;
int filterValue(in float sectorAngle,
in int currentIndex,
inout FilteredChartInfo filteredInfo,
inout vec2 filteredSectorToColorId[numberOfFields]) {
if (sectorAngle > sectorThreshold * 360.0) {
filteredInfo.endSectorAngle += sectorAngle;
filteredSectorToColorId[filteredInfo.colorId] = vec2(filteredInfo.endSectorAngle, currentIndex);
++filteredInfo.colorId;
}
return 0;
}
int filterValues(inout vec2 filteredSectorToColorId[numberOfFields],
inout FilteredChartInfo filteredInfo,
in float sectorAngles[numberOfFields]) {
for (int index = 0; index < numberOfFields; ++index) {
float sectorValue = sectorAngles[index];
filterValue(sectorValue, index, filteredInfo, filteredSectorToColorId);
}
return filteredInfo.colorId;
}
float getMarkerSize(inout vec2 offset, inout float outlineSize, in float referenceSize, in float bitSet) {
float outSize = referenceSize * 0.5;
#ifdef VV_SIZE
float r = getSize(referenceSize, currentScale) / referenceSize;
outSize *= r;
offset.xy *= r;
float scaleSymbolProportionally = getBit(bitSet, BITSET_MARKER_SCALE_SYMBOLS_PROPORTIONALLY);
outlineSize *= scaleSymbolProportionally * (r - 1.0) + 1.0;
#endif
return outSize;
}
vec3 getOffset(in vec2 in_offset, float a_bitSet) {
float isMapAligned = getBit(a_bitSet, BITSET_MARKER_ALIGNMENT_MAP);
vec3  offset       = vec3(in_offset, 0.0);
return getMatrix(isMapAligned) * offset;
}
float filterNaNValues(in float value) {
return value != NAN_MAGIC_NUMBER && value > 0.0 ? value : 0.0;
}
void main()
{
INIT;
vec2  a_offset = a_offset / 16.0;
float outlineSize = outlineWidth;
float a_bitSet = a_bitSet;
float a_referenceSize = a_referenceSize;
vec2 a_texCoords = a_texCoords / 4.0;
float markerSize = getMarkerSize(a_offset, outlineSize, a_referenceSize, a_bitSet);
float filterFlags = getFilterFlags();
vec3  pos         = vec3(a_pos / 10.0, 1.0);
v_opacity      = getOpacity();
v_pos          = displayViewScreenMat3 * pos + getOffset(a_offset, a_bitSet);
v_offset       = sign(a_texCoords - 0.5);
v_size         = markerSize;
v_outlineWidth = outlineSize;
float attributeData[10];
vec4 attributeData3 = getDataDriven0(a_id);
attributeData[0] = filterNaNValues(attributeData3.x);
attributeData[1] = filterNaNValues(attributeData3.y);
attributeData[2] = filterNaNValues(attributeData3.z);
attributeData[3] = filterNaNValues(attributeData3.w);
#if (numberOfFields > 4)
vec4 attributeData4 = getDataDriven1(a_id);
attributeData[4] = filterNaNValues(attributeData4.x);
attributeData[5] = filterNaNValues(attributeData4.y);
attributeData[6] = filterNaNValues(attributeData4.z);
attributeData[7] = filterNaNValues(attributeData4.w);
#endif
#if (numberOfFields > 8)
vec4 attributeData5 = getDataDriven2(a_id);
attributeData[8] = filterNaNValues(attributeData5.x);
attributeData[9] = filterNaNValues(attributeData5.y);
#endif
float sum = 0.0;
for (int i = 0; i < numberOfFields; ++i) {
sum += attributeData[i];
}
float sectorAngles[numberOfFields];
for (int i = 0; i < numberOfFields; ++i) {
sectorAngles[i] = 360.0 * attributeData[i] / sum;
}
vec2 filteredSectorToColorId[numberOfFields];
FilteredChartInfo filteredInfo = FilteredChartInfo(0.0, 0);
int numOfEntries = filterValues(filteredSectorToColorId, filteredInfo, sectorAngles);
v_numOfEntries = float(numOfEntries);
v_maxSectorAngle = filteredInfo.endSectorAngle;
v_filteredSectorToColorId = filteredSectorToColorId;
#ifdef HITTEST
highp vec3 out_pos = vec3(0.0);
v_color            = vec4(0.0);
hittestMarker(v_color, out_pos, viewMat3 * tileMat3 *  pos, v_size);
gl_PointSize = 1.0;
gl_Position = vec4(clip(v_color, out_pos, filterFlags, a_zoomRange), 1.0);
#else
gl_Position = vec4(clip(v_color, v_pos, filterFlags, a_zoomRange), 1.0);
#endif
}`},shared:{line:{"common.glsl":`#if !defined(SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE) && defined(PATTERN)
uniform mediump vec2 u_mosaicSize;
varying mediump float v_sampleAlphaOnly;
#endif
struct LineData {
lowp vec4 color;
mediump vec2 normal;
mediump float lineHalfWidth;
lowp float opacity;
#ifndef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE
#ifdef PATTERN
mediump vec4 tlbr;
mediump vec2 patternSize;
#endif
#ifdef SDF
mediump float lineWidthRatio;
#endif
#if defined(PATTERN) || defined(SDF)
highp float accumulatedDistance;
#endif
#endif
highp vec3 id;
};`,"line.frag":`uniform lowp float u_blur;
#if !defined(SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE) && !defined(HIGHLIGHT)
#if defined(PATTERN) || defined(SDF)
uniform sampler2D u_texture;
uniform highp float u_pixelRatio;
#endif
#endif
#if defined(SDF) && !defined(HIGHLIGHT) && !defined(SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE)
lowp vec4 getLineColor(LineData line) {
mediump float adjustedPatternWidth = line.patternSize.x * 2.0 * line.lineWidthRatio;
mediump float relativeTexX = fract(line.accumulatedDistance / adjustedPatternWidth);
mediump float relativeTexY = 0.5 + 0.25 * line.normal.y;
mediump vec2 texCoord = mix(line.tlbr.xy, line.tlbr.zw, vec2(relativeTexX, relativeTexY));
mediump float d = rgba2float(texture2D(u_texture, texCoord)) - 0.5;
float dist = d * line.lineHalfWidth;
return line.opacity * clamp(0.5 - dist, 0.0, 1.0) * line.color;
}
#elif defined(PATTERN) && !defined(HIGHLIGHT) && !defined(SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE)
lowp vec4 getLineColor(LineData line) {
mediump float lineHalfWidth = line.lineHalfWidth;
mediump float adjustedPatternHeight = line.patternSize.y * 2.0 * lineHalfWidth / line.patternSize.x;
mediump float relativeTexY = fract(line.accumulatedDistance / adjustedPatternHeight);
mediump float relativeTexX = 0.5 + 0.5 * line.normal.y;
mediump vec2 texCoord = mix(line.tlbr.xy, line.tlbr.zw, vec2(relativeTexX, relativeTexY));
lowp vec4 color = texture2D(u_texture, texCoord);
#ifdef VV_COLOR
if (v_sampleAlphaOnly > 0.5) {
color.rgb = vec3(color.a);
}
#endif
return line.opacity * line.color * color;
}
#else
lowp vec4 getLineColor(LineData line) {
return line.opacity * line.color;
}
#endif
vec4 shadeLine(LineData line)
{
mediump float thinLineFactor = max(THIN_LINE_WIDTH_FACTOR * step(line.lineHalfWidth, THIN_LINE_HALF_WIDTH), 1.0);
mediump float fragDist = length(line.normal) * line.lineHalfWidth;
lowp float alpha = clamp(thinLineFactor * (line.lineHalfWidth - fragDist) / (u_blur + thinLineFactor - 1.0), 0.0, 1.0);
lowp vec4 out_color = getLineColor(line) * alpha;
#ifdef HIGHLIGHT
out_color.a = step(1.0 / 255.0, out_color.a);
#endif
#ifdef ID
if (out_color.a < 1.0 / 255.0) {
discard;
}
out_color = vec4(line.id, 0.0);
#endif
return out_color;
}`,"line.vert":`float getBaseLineHalfWidth(in float lineHalfWidth, in float referenceHalfWidth) {
#ifdef VV_SIZE
float refLineWidth = 2.0 * referenceHalfWidth;
return 0.5 * (lineHalfWidth / max(referenceHalfWidth, EPSILON)) * getSize(refLineWidth);
#else
return lineHalfWidth;
#endif
}
float getLineHalfWidth(in float baseWidth, in float aa) {
float halfWidth = max(baseWidth + aa, 0.45) + 0.1 * aa;
#ifdef HIGHLIGHT
halfWidth = max(halfWidth, 2.0);
#endif
return halfWidth;
}
vec2 getDist(in vec2 offset, in float halfWidth) {
float thinLineFactor = max(THIN_LINE_WIDTH_FACTOR * step(halfWidth, THIN_LINE_HALF_WIDTH), 1.0);
return thinLineFactor * halfWidth * offset;
}
LineData buildLine(
out vec3 out_pos,
in vec3 in_id,
in vec2 in_pos,
in vec4 in_color,
in vec2 in_offset,
in vec2 in_normal,
in float in_accumulatedDist,
in float in_lineHalfWidth,
in float in_bitSet,
in vec4 in_tlbr,
in vec2 in_segmentDirection,
in float in_referenceHalfWidth
)
{
float aa        = 0.5 * u_antialiasing;
float baseWidth = getBaseLineHalfWidth(in_lineHalfWidth, in_referenceHalfWidth);
float halfWidth = getLineHalfWidth(baseWidth, aa);
float z         = 2.0 * step(baseWidth, 0.0);
vec2  dist      = getDist(in_offset, halfWidth);
vec3  offset    = u_displayViewMat3 * vec3(dist, 0.0);
vec3  pos       = u_dvsMat3 * vec3(in_pos * POSITION_PRECISION, 1.0) + offset;
#ifdef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE
vec4  color     = in_color;
float opacity   = 1.0;
#else
vec4  color     = getColor(in_color, in_bitSet, BITSET_GENERIC_LOCK_COLOR);
float opacity   = getOpacity();
#ifdef SDF
const float SDF_PATTERN_HALF_WIDTH = 15.5;
float scaleDash = getBit(in_bitSet, BITSET_LINE_SCALE_DASH);
float lineWidthRatio = (scaleDash * max(halfWidth - 0.55 * u_antialiasing, 0.25) + (1.0 - scaleDash)) / SDF_PATTERN_HALF_WIDTH;
#endif
#endif
#if !defined(SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE) && defined(PATTERN)
v_sampleAlphaOnly = getBit(in_bitSet, BITSET_GENERIC_CONSIDER_ALPHA_ONLY);
#endif
out_pos = vec3(pos.xy, z);
return LineData(
color,
in_normal,
halfWidth,
opacity,
#ifndef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE
#ifdef PATTERN
in_tlbr / u_mosaicSize.xyxy,
vec2(in_tlbr.z - in_tlbr.x, in_tlbr.w - in_tlbr.y),
#endif
#ifdef SDF
lineWidthRatio,
#endif
#if defined(PATTERN) || defined(SDF)
in_accumulatedDist * u_zoomFactor + dot(in_segmentDirection, dist),
#endif
#endif
norm(in_id)
);
}`}},"symbologyTypeUtils.glsl":`#if SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_OUTLINE_FILL || SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_OUTLINE_FILL_SIMPLE
#define SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE
#endif
#if SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_SIMPLE || SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_OUTLINE_FILL_SIMPLE
#define SYMBOLOGY_TYPE_IS_SIMPLE_LIKE
#endif`,text:{"common.glsl":`uniform highp vec2 u_mosaicSize;
varying highp vec3 v_id;
varying mediump vec3 v_pos;
varying lowp float v_opacity;
varying lowp vec4 v_color;
varying highp vec2 v_tex;
varying mediump float v_antialiasingWidth;
varying mediump float v_edgeDistanceOffset;
varying lowp float v_transparency;`,"hittest.glsl":"#include <materials/hittest/common.glsl>","text.frag":`precision mediump float;
#include <materials/text/common.glsl>
uniform lowp sampler2D u_texture;
#ifdef HITTEST
vec4 getColor() {
return v_color;
}
#else
vec4 getColor()
{
float SDF_CUTOFF = (2.0 / 8.0);
float SDF_BASE_EDGE_DIST = 1.0 - SDF_CUTOFF;
lowp float dist = texture2D(u_texture, v_tex).a;
mediump float edge = SDF_BASE_EDGE_DIST - v_edgeDistanceOffset;
#ifdef HIGHLIGHT
edge /= 2.0;
#endif
lowp float aa = v_antialiasingWidth;
lowp float alpha = smoothstep(edge - aa, edge + aa, dist);
return alpha * v_color * v_opacity;
}
#endif
void main()
{
gl_FragColor = getColor();
}`,"text.vert":`precision highp float;
#include <materials/utils.glsl>
#include <materials/vcommon.glsl>
#include <materials/text/common.glsl>
#include <materials/text/hittest.glsl>
attribute vec4 a_color;
attribute vec4 a_haloColor;
attribute vec4 a_texFontSize;
attribute vec4 a_aux;
attribute vec2 a_zoomRange;
attribute vec2 a_vertexOffset;
attribute vec2 a_texCoords;
uniform float u_isHaloPass;
uniform float u_isBackgroundPass;
float getTextSize(inout vec2 offset, inout float baseSize, in float referenceSize) {
#ifdef VV_SIZE
float r = getSize(referenceSize) / referenceSize;
baseSize *= r;
offset.xy *= r;
return baseSize;
#endif
return baseSize;
}
void main()
{
INIT;
float a_isBackground  = a_aux.y;
float a_referenceSize = a_aux.z * a_aux.z / 256.0;
float a_bitSet        = a_aux.w;
float a_fontSize      = a_texFontSize.z;
vec2  a_offset        = a_vertexOffset * OFFSET_PRECISION;
vec3  in_pos        = vec3(a_pos * POSITION_PRECISION, 1.0);
float fontSize      = getTextSize(a_offset, a_fontSize, a_referenceSize);
float fontScale     = fontSize / SDF_FONT_SIZE;
vec3  offset        = getRotation() * vec3(a_offset, 0.0);
mat3  extrudeMatrix = getBit(a_bitSet, 0) == 1.0 ? u_displayViewMat3 : u_displayMat3;
float isText = 1.0 - a_isBackground;
float isBackground = u_isBackgroundPass * a_isBackground;
vec4  nonHaloColor  = (isBackground * a_color) + (isText * getColor(a_color, a_bitSet, 1));
v_color   = u_isHaloPass * a_haloColor + (1.0 - u_isHaloPass) * nonHaloColor;
v_opacity = getOpacity();
v_id      = norm(a_id);
v_tex     = a_texCoords / u_mosaicSize;
v_pos     = u_dvsMat3 * in_pos + extrudeMatrix * offset;
float isHidden = u_isBackgroundPass * isText + (1.0 - u_isBackgroundPass) * a_isBackground;
v_pos.z += 2.0 * isHidden;
v_edgeDistanceOffset = u_isHaloPass * OUTLINE_SCALE * a_texFontSize.w / fontScale / MAX_SDF_DISTANCE;
v_antialiasingWidth  = 0.105 * SDF_FONT_SIZE / fontSize / u_pixelRatio;
#ifdef HITTEST
highp vec3 out_pos  = vec3(0.);
v_color = vec4(0.);
hittestMarker(v_color, out_pos, u_viewMat3 * u_tileMat3 *  vec3(a_pos * POSITION_PRECISION, 1.0)
+ u_tileMat3 * offset, fontSize / 2.);
gl_PointSize = 1.;
gl_Position = vec4(clip(v_color, out_pos, getFilterFlags(), a_zoomRange), 1.0);
#else
gl_Position =  vec4(clip(v_color, v_pos, getFilterFlags(), a_zoomRange), 1.0);
#endif
}`},"vcommon.glsl":`#include <materials/constants.glsl>
#include <materials/utils.glsl>
#include <materials/attributeData.glsl>
#include <materials/vv.glsl>
#include <materials/barycentric.glsl>
attribute vec2 a_pos;
attribute highp vec3 a_id;
uniform highp mat3 displayViewScreenMat3;
uniform highp mat3 displayViewMat3;
uniform highp mat3 displayMat3;
uniform highp mat3 tileMat3;
uniform highp mat3 viewMat3;
uniform highp float pixelRatio;
uniform mediump float zoomFactor;
uniform mediump float antialiasing;
uniform mediump float currentScale;
uniform mediump float currentZoom;
uniform mediump float metersPerSRUnit;
uniform mediump float activeReasons;
uniform mediump float highlightAll;
vec4 VV_ADATA = vec4(0.0);
void loadVisualVariableData(inout vec4 target) {
target.rgba = getVisualVariableData(a_id);
}
#ifdef VV
#define INIT loadVisualVariableData(VV_ADATA)
#else
#define INIT
#endif
vec4 getColor(in vec4 a_color, in float a_bitSet, int index) {
#ifdef VV_COLOR
float isColorLocked   = getBit(a_bitSet, index);
return getVVColor(VV_ADATA[ATTR_VV_COLOR], a_color, isColorLocked);
#else
return a_color;
#endif
}
float getOpacity() {
#ifdef VV_OPACITY
return getVVOpacity(VV_ADATA[ATTR_VV_OPACITY]);
#else
return 1.0;
#endif
}
float getSize(in float in_size, in float currentScale) {
#ifdef VV_SIZE
return getVVSize(in_size, VV_ADATA[ATTR_VV_SIZE], currentScale);
#else
return in_size;
#endif
}
mat3 getRotation() {
#ifdef VV_ROTATION
return getVVRotationMat3(mod(VV_ADATA[ATTR_VV_ROTATION], 360.0));
#else
return mat3(1.0);
#endif
}
float getFilterFlags() {
#ifdef IGNORES_SAMPLER_PRECISION
return ceil(getFilterData(a_id).x * 255.0);
#else
return getFilterData(a_id).x * 255.0;
#endif
}
vec4 getAnimationState() {
return getAnimation(a_id);
}
float getMinZoom() {
vec4 data0 = getFilterData(a_id) * 255.0;
return data0.g;
}
mat3 getMatrixNoDisplay(float isMapAligned) {
return isMapAligned * viewMat3 * tileMat3 + (1.0 - isMapAligned) * tileMat3;
}
mat3 getMatrix(float isMapAligned) {
return isMapAligned * displayViewMat3 + (1.0 - isMapAligned) * displayMat3;
}
float checkHighlightBit(float filterFlags, int index) {
return getHighlightBit(filterFlags, index) * getBit(activeReasons, index);
}
float checkHighlight(float filterFlags) {
float result = checkHighlightBit(filterFlags, 0);
for (int i = 1; i < maxHighlightReasons; i++) {
result = result + checkHighlightBit(filterFlags, i);
}
return step(0.1, result + highlightAll);
}
vec3 clip(inout vec4 color, inout vec3 pos, in float filterFlags, in vec2 minMaxZoom) {
pos.z += 2.0 * (1.0 - getFilterBit(filterFlags, 0));
#ifdef inside
pos.z += 2.0 * (1.0 - getFilterBit(filterFlags, 1));
#elif defined(outside)
pos.z += 2.0 * getFilterBit(filterFlags, 1);
#elif defined(highlight)
pos.z += 2.0 * (1.0 - checkHighlight(filterFlags));
#endif
pos.z += 2.0 * (step(minMaxZoom.y, currentZoom) + (1.0 - step(minMaxZoom.x, currentZoom)));
return pos;
}`,"vv.glsl":`#if defined(VV_SIZE_MIN_MAX_VALUE) || defined(VV_SIZE_SCALE_STOPS) || defined(VV_SIZE_FIELD_STOPS) || defined(VV_SIZE_UNIT_VALUE)
#define VV_SIZE
#endif
#if defined(VV_COLOR) || defined(VV_SIZE) || defined(VV_OPACITY) || defined(VV_ROTATION)
#define VV
#endif
#ifdef VV_COLOR
uniform highp float colorValues[8];
uniform vec4 colors[8];
#endif
#ifdef VV_SIZE_MIN_MAX_VALUE
uniform highp vec4 minMaxValueAndSize;
#endif
#ifdef VV_SIZE_SCALE_STOPS
uniform highp float values[8];
uniform float sizes[8];
#endif
#ifdef VV_SIZE_FIELD_STOPS
uniform highp float values[8];
uniform float sizes[8];
#endif
#ifdef VV_SIZE_UNIT_VALUE
uniform highp float unitMeterRatio;
#endif
#ifdef VV_OPACITY
uniform highp float opacityValues[8];
uniform float opacities[8];
#endif
#ifdef VV_ROTATION
uniform lowp float rotationType;
#endif
bool isNan(float val) {
return (val == NAN_MAGIC_NUMBER);
}
#ifdef VV_SIZE_MIN_MAX_VALUE
float getVVMinMaxSize(float sizeValue, float fallback) {
if (isNan(sizeValue)) {
return fallback;
}
float interpolationRatio = (sizeValue  - minMaxValueAndSize.x) / (minMaxValueAndSize.y - minMaxValueAndSize.x);
interpolationRatio = clamp(interpolationRatio, 0.0, 1.0);
return minMaxValueAndSize.z + interpolationRatio * (minMaxValueAndSize.w - minMaxValueAndSize.z);
}
#endif
#ifdef VV_SIZE_SCALE_STOPS
float getVVScaleStopsSize(float currentScale) {
float outSize;
if (currentScale <= values[0]) {
outSize = sizes[0];
} else {
if (currentScale >= values[7]) {
outSize = sizes[7];
} else {
int index;
index = -1;
for (int i = 0; i < 8; i++) {
if (values[i] > currentScale) {
index = i;
break;
}
}
int prevIndex = index - 1;
float a = currentScale - values[prevIndex];
float b = values[index] - values[prevIndex];
outSize = mix(sizes[prevIndex], sizes[index], a / b);
}
}
return outSize;
}
#endif
#ifdef VV_SIZE_FIELD_STOPS
const int VV_SIZE_N = 8;
float getVVStopsSize(float sizeValue, float fallback) {
if (isNan(sizeValue)) {
return fallback;
}
if (sizeValue <= values[0]) {
return sizes[0];
}
if (sizeValue >= values[VV_SIZE_N - 1]) {
return sizes[VV_SIZE_N - 1];
}
for (int i = 1; i < VV_SIZE_N; ++i) {
if (values[i] >= sizeValue) {
float f = (sizeValue - values[i-1]) / (values[i] - values[i-1]);
return mix(sizes[i-1], sizes[i], f);
}
}
return sizes[VV_SIZE_N - 1];
}
#endif
#ifdef VV_SIZE_UNIT_VALUE
float getVVUnitValue(float sizeValue, float fallback) {
if (isNan(sizeValue)) {
return fallback;
}
return sizeValue * (metersPerSRUnit / unitMeterRatio);
}
#endif
#ifdef VV_OPACITY
const int VV_OPACITY_N = 8;
float getVVOpacity(float opacityValue) {
if (isNan(opacityValue)) {
return 1.0;
}
if (opacityValue <= opacityValues[0]) {
return opacities[0];
}
for (int i = 1; i < VV_OPACITY_N; ++i) {
if (opacityValues[i] >= opacityValue) {
float f = (opacityValue - opacityValues[i-1]) / (opacityValues[i] - opacityValues[i-1]);
return mix(opacities[i-1], opacities[i], f);
}
}
return opacities[VV_OPACITY_N - 1];
}
#endif
#ifdef VV_ROTATION
mat4 getVVRotation(float rotationValue) {
if (isNan(rotationValue)) {
return mat4(1, 0, 0, 0,
0, 1, 0, 0,
0, 0, 1, 0,
0, 0, 0, 1);
}
float rotation = rotationValue;
if (rotationType == 1.0) {
rotation = 90.0 - rotation;
}
float angle = C_DEG_TO_RAD * rotation;
float sinA = sin(angle);
float cosA = cos(angle);
return mat4(cosA, sinA, 0, 0,
-sinA,  cosA, 0, 0,
0,     0, 1, 0,
0,     0, 0, 1);
}
mat3 getVVRotationMat3(float rotationValue) {
if (isNan(rotationValue)) {
return mat3(1, 0, 0,
0, 1, 0,
0, 0, 1);
}
float rotation = rotationValue;
if (rotationType == 1.0) {
rotation = 90.0 - rotation;
}
float angle = C_DEG_TO_RAD * -rotation;
float sinA = sin(angle);
float cosA = cos(angle);
return mat3(cosA, -sinA, 0,
sinA, cosA, 0,
0,    0,    1);
}
#endif
#ifdef VV_COLOR
const int VV_COLOR_N = 8;
vec4 getVVColor(float colorValue, vec4 fallback, float isColorLocked) {
if (isNan(colorValue) || isColorLocked == 1.0) {
return fallback;
}
if (colorValue <= colorValues[0]) {
return colors[0];
}
for (int i = 1; i < VV_COLOR_N; ++i) {
if (colorValues[i] >= colorValue) {
float f = (colorValue - colorValues[i-1]) / (colorValues[i] - colorValues[i-1]);
return mix(colors[i-1], colors[i], f);
}
}
return colors[VV_COLOR_N - 1];
}
#endif
float getVVSize(in float size, in float vvSize, in float currentScale)  {
#ifdef VV_SIZE_MIN_MAX_VALUE
return getVVMinMaxSize(vvSize, size);
#elif defined(VV_SIZE_SCALE_STOPS)
float outSize = getVVScaleStopsSize(currentScale);
return isNan(outSize) ? size : outSize;
#elif defined(VV_SIZE_FIELD_STOPS)
float outSize = getVVStopsSize(vvSize, size);
return isNan(outSize) ? size : outSize;
#elif defined(VV_SIZE_UNIT_VALUE)
return getVVUnitValue(vvSize, size);
#else
return size;
#endif
}`,"utils.glsl":`float rshift(in float u32, in int amount) {
return floor(u32 / pow(2.0, float(amount)));
}
float getBit(in float bitset, in int bitIndex) {
float offset = pow(2.0, float(bitIndex));
return mod(floor(bitset / offset), 2.0);
}
const int maxHighlightReasons = 6;
float getFilterBit(in float bitset, in int bitIndex) {
return getBit(bitset, bitIndex + maxHighlightReasons);
}
float getHighlightBit(in float bitset, in int bitIndex) {
return getBit(bitset, bitIndex);
}
highp vec3 unpackDisplayIdTexel(in highp vec3 bitset) {
float isAggregate = getBit(bitset.b, 7);
return (1.0 - isAggregate) * bitset + isAggregate * (vec3(bitset.rgb) - vec3(0.0, 0.0, float(0x80)));
}
vec4 unpack(in float u32) {
float r = mod(rshift(u32, 0), 255.0);
float g = mod(rshift(u32, 8), 255.0);
float b = mod(rshift(u32, 16), 255.0);
float a = mod(rshift(u32, 24), 255.0);
return vec4(r, g, b, a);
}
vec3 norm(in vec3 v) {
return v /= 255.0;
}
vec4 norm(in vec4 v) {
return v /= 255.0;
}
float max4(vec4 target) {
return max(max(max(target.x, target.y), target.z), target.w);
}
vec2 unpack_u8_nf32(vec2 bytes) {
return (bytes - 127.0) / 127.0;
}
highp float rand(in vec2 co) {
highp float a = 12.9898;
highp float b = 78.233;
highp float c = 43758.5453;
highp float dt = dot(co, vec2(a,b));
highp float sn = mod(dt, 3.14);
return fract(sin(sn) * c);
}`},"post-processing":{dra:{"dra.frag":`precision mediump float;
uniform sampler2D u_minColor;
uniform sampler2D u_maxColor;
uniform sampler2D u_texture;
varying vec2 v_uv;
void main() {
vec4 minColor = texture2D(u_minColor, vec2(0.5));
vec4 maxColor = texture2D(u_maxColor, vec2(0.5));
vec4 color = texture2D(u_texture, v_uv);
vec3 minColorUnpremultiply = minColor.rgb / minColor.a;
vec3 maxColorUnpremultiply = maxColor.rgb / maxColor.a;
vec3 colorUnpremultiply = color.rgb / color.a;
vec3 range = maxColorUnpremultiply - minColorUnpremultiply;
gl_FragColor = vec4(color.a * (colorUnpremultiply - minColorUnpremultiply) / range, color.a);
}`,"min-max":{"min-max.frag":`#extension GL_EXT_draw_buffers : require
precision mediump float;
#define CELL_SIZE 2
uniform sampler2D u_minTexture;
uniform sampler2D u_maxTexture;
uniform vec2 u_srcResolution;
uniform vec2 u_dstResolution;
varying vec2 v_uv;
void main() {
vec2 srcPixel = floor(gl_FragCoord.xy) * float(CELL_SIZE);
vec2 onePixel = vec2(1.0) / u_srcResolution;
vec2 uv = (srcPixel + 0.5) / u_srcResolution;
vec4 minColor = vec4(1.0);
vec4 maxColor = vec4(0.0);
for (int y = 0; y < CELL_SIZE; ++y) {
for (int x = 0; x < CELL_SIZE; ++x) {
vec2 offset = uv + vec2(x, y) * onePixel;
minColor = min(minColor, texture2D(u_minTexture, offset));
maxColor = max(maxColor, texture2D(u_maxTexture, offset));
}
}
gl_FragData[0] = minColor;
gl_FragData[1] = maxColor;
}`}},"edge-detect":{"frei-chen":{"frei-chen.frag":`precision mediump float;
uniform sampler2D u_colorTexture;
uniform vec2 u_texSize;
varying vec2 v_uv;
vec2 texel = vec2(1.0 / u_texSize.x, 1.0 / u_texSize.y);
mat3 G[9];
const mat3 g0 = mat3( 0.3535533845424652, 0, -0.3535533845424652, 0.5, 0, -0.5, 0.3535533845424652, 0, -0.3535533845424652 );
const mat3 g1 = mat3( 0.3535533845424652, 0.5, 0.3535533845424652, 0, 0, 0, -0.3535533845424652, -0.5, -0.3535533845424652 );
const mat3 g2 = mat3( 0, 0.3535533845424652, -0.5, -0.3535533845424652, 0, 0.3535533845424652, 0.5, -0.3535533845424652, 0 );
const mat3 g3 = mat3( 0.5, -0.3535533845424652, 0, -0.3535533845424652, 0, 0.3535533845424652, 0, 0.3535533845424652, -0.5 );
const mat3 g4 = mat3( 0, -0.5, 0, 0.5, 0, 0.5, 0, -0.5, 0 );
const mat3 g5 = mat3( -0.5, 0, 0.5, 0, 0, 0, 0.5, 0, -0.5 );
const mat3 g6 = mat3( 0.1666666716337204, -0.3333333432674408, 0.1666666716337204, -0.3333333432674408, 0.6666666865348816, -0.3333333432674408, 0.1666666716337204, -0.3333333432674408, 0.1666666716337204 );
const mat3 g7 = mat3( -0.3333333432674408, 0.1666666716337204, -0.3333333432674408, 0.1666666716337204, 0.6666666865348816, 0.1666666716337204, -0.3333333432674408, 0.1666666716337204, -0.3333333432674408 );
const mat3 g8 = mat3( 0.3333333432674408, 0.3333333432674408, 0.3333333432674408, 0.3333333432674408, 0.3333333432674408, 0.3333333432674408, 0.3333333432674408, 0.3333333432674408, 0.3333333432674408 );
void main() {
G[0] = g0,
G[1] = g1,
G[2] = g2,
G[3] = g3,
G[4] = g4,
G[5] = g5,
G[6] = g6,
G[7] = g7,
G[8] = g8;
mat3 I;
float cnv[9];
vec3 sample;
for (float i = 0.0; i < 3.0; i++) {
for (float j = 0.0; j < 3.0; j++) {
sample = texture2D(u_colorTexture, v_uv + texel * vec2(i - 1.0,j - 1.0)).rgb;
I[int(i)][int(j)] = length(sample);
}
}
for (int i = 0; i < 9; i++) {
float dp3 = dot(G[i][0], I[0]) + dot(G[i][1], I[1]) + dot(G[i][2], I[2]);
cnv[i] = dp3 * dp3;
}
float M = (cnv[0] + cnv[1]) + (cnv[2] + cnv[3]);
float S = (cnv[4] + cnv[5]) + (cnv[6] + cnv[7]) + (cnv[8] + M);
gl_FragColor = vec4(vec3(sqrt(M / S)), texture2D(u_colorTexture, v_uv).a);
}`},sobel:{"sobel.frag":`precision mediump float;
uniform sampler2D u_colorTexture;
varying vec2 v_uv;
uniform vec2 u_texSize;
vec2 texel = vec2(1.0 / u_texSize.x, 1.0 / u_texSize.y);
mat3 G[2];
const mat3 g0 = mat3( 1.0, 2.0, 1.0, 0.0, 0.0, 0.0, -1.0, -2.0, -1.0 );
const mat3 g1 = mat3( 1.0, 0.0, -1.0, 2.0, 0.0, -2.0, 1.0, 0.0, -1.0 );
void main() {
mat3 I;
float cnv[2];
vec3 sample;
G[0] = g0;
G[1] = g1;
for (float i = 0.0; i < 3.0; i++) {
for (float j = 0.0; j < 3.0; j++) {
sample = texture2D( u_colorTexture, v_uv + texel * vec2(i-1.0,j-1.0) ).rgb;
I[int(i)][int(j)] = length(sample);
}
}
for (int i = 0; i < 2; i++) {
float dp3 = dot(G[i][0], I[0]) + dot(G[i][1], I[1]) + dot(G[i][2], I[2]);
cnv[i] = dp3 * dp3;
}
gl_FragColor = vec4(vec3(0.5 * sqrt(cnv[0] * cnv[0] + cnv[1] * cnv[1])), texture2D(u_colorTexture, v_uv).a);
}`}},"edge-enhance":{"edge-enhance.frag":`precision mediump float;
uniform sampler2D u_colorTexture;
varying vec2 v_uv;
uniform vec2 u_texSize;
vec2 texel = vec2(1.0 / u_texSize.x, 1.0 / u_texSize.y);
mat3 G[2];
const mat3 g0 = mat3( 1.0, 0.0, -1.0, 1.0, 0.0, -1.0, 1.0, 0.0, -1.0 );
const mat3 g1 = mat3( 1.0, 1.0, 1.0, 0.0, 0.0, 0.0, -1.0, -1.0, -1.0 );
void main() {
mat3 I;
float cnv[2];
vec3 sample;
G[0] = g0;
G[1] = g1;
for (float i = 0.0; i < 3.0; i++) {
for (float j = 0.0; j < 3.0; j++) {
sample = texture2D( u_colorTexture, v_uv + texel * vec2(i-1.0,j-1.0) ).rgb;
I[int(i)][int(j)] = length(sample);
}
}
for (int i = 0; i < 2; i++) {
float dp3 = dot(G[i][0], I[0]) + dot(G[i][1], I[1]) + dot(G[i][2], I[2]);
cnv[i] = dp3 * dp3;
}
vec4 color = texture2D(u_colorTexture, v_uv);
gl_FragColor = vec4(0.5 * sqrt(cnv[0] * cnv[0] + cnv[1] * cnv[1]) * color);
}`},filterEffect:{"filterEffect.frag":`precision mediump float;
uniform sampler2D u_colorTexture;
uniform mat4 u_coefficients;
varying vec2 v_uv;
void main() {
vec4 color = texture2D(u_colorTexture, v_uv);
vec4 rgbw = u_coefficients * vec4(color.a > 0.0 ? color.rgb / color.a : vec3(0.0), 1.0);
float a = color.a;
gl_FragColor = vec4(a * rgbw.rgb, a);
}`},pp:{"pp.vert":`precision mediump float;
attribute vec2 a_position;
varying vec2 v_uv;
void main() {
gl_Position = vec4(a_position, 0.0, 1.0);
v_uv = (a_position + 1.0) / 2.0;
}`}},raster:{common:{"common.glsl":`uniform sampler2D u_image;
uniform int u_bandCount;
uniform bool u_flipY;
uniform float u_opacity;
uniform int u_resampling;
uniform vec2 u_srcImageSize;
#ifdef APPLY_PROJECTION
#include <raster/common/projection.glsl>
#endif
#ifdef BICUBIC
#include <filtering/bicubic.glsl>
#endif
#ifdef BILINEAR
#include <filtering/bilinear.glsl>
#endif
vec2 getPixelLocation(vec2 coords) {
vec2 targetLocation = u_flipY ? vec2(coords.s, 1.0 - coords.t) : coords;
#ifdef APPLY_PROJECTION
targetLocation = projectPixelLocation(targetLocation);
#endif
return targetLocation;
}
bool isOutside(vec2 coords){
if (coords.t>1.00001 ||coords.t<-0.00001 || coords.s>1.00001 ||coords.s<-0.00001) {
return true;
} else {
return false;
}
}
vec4 getPixel(vec2 pixelLocation) {
#ifdef BICUBIC
vec4 color = sampleBicubicBSpline(u_image, pixelLocation, u_srcImageSize);
#elif defined(BILINEAR)
vec4 color = sampleBilinear(u_image, pixelLocation, u_srcImageSize);
#else
vec4 color = texture2D(u_image, pixelLocation);
#endif
return color;
}`,"projection.glsl":`uniform sampler2D u_transformGrid;
uniform vec2 u_transformSpacing;
uniform vec2 u_transformGridSize;
uniform vec2 u_targetImageSize;
vec2 projectPixelLocation(vec2 coords) {
#ifdef LOOKUP_PROJECTION
vec4 pv = texture2D(u_transformGrid, coords);
return vec2(pv.r, pv.g);
#endif
vec2 index_image = floor(coords * u_targetImageSize);
vec2 oneTransformPixel = vec2(0.25 / u_transformGridSize.s, 1.0 / u_transformGridSize.t);
vec2 index_transform = floor(index_image / u_transformSpacing) / u_transformGridSize;
vec2 pos = fract((index_image + vec2(0.5, 0.5)) / u_transformSpacing);
vec2 srcLocation;
vec2 transform_location = index_transform + oneTransformPixel * 0.5;
if (pos.s <= pos.t) {
vec4 ll_abc = texture2D(u_transformGrid, vec2(transform_location.s, transform_location.t));
vec4 ll_def = texture2D(u_transformGrid, vec2(transform_location.s + oneTransformPixel.s, transform_location.t));
srcLocation.s = dot(ll_abc.rgb, vec3(pos, 1.0));
srcLocation.t = dot(ll_def.rgb, vec3(pos, 1.0));
} else {
vec4 ur_abc = texture2D(u_transformGrid, vec2(transform_location.s + 2.0 * oneTransformPixel.s, transform_location.t));
vec4 ur_def = texture2D(u_transformGrid, vec2(transform_location.s + 3.0 * oneTransformPixel.s, transform_location.t));
srcLocation.s = dot(ur_abc.rgb, vec3(pos, 1.0));
srcLocation.t = dot(ur_def.rgb, vec3(pos, 1.0));
}
return srcLocation;
}`},flow:{"getDisplayOpacity.glsl":`uniform float u_displayOpacity;
float getDisplayOpacity() {
return u_displayOpacity;
}`,"getFadeOpacity.glsl":`uniform float u_decayRate;
uniform float u_fadeToZero;
float getFadeOpacity(float x) {
float cutOff = mix(0.0, exp(-u_decayRate), u_fadeToZero);
return (exp(-u_decayRate * x) - cutOff) / (1.0 - cutOff);
}`,"getFragmentColor.glsl":`vec4 getFragmentColor(vec4 color, float dist, float size, float featheringSize) {
float featheringStart = clamp(0.5 - featheringSize / size, 0.0, 0.5);
if (dist > featheringStart) {
color *= 1.0 - (dist - featheringStart) / (0.5 - featheringStart);
}
return color;
}`,"getRangeOpacity.glsl":`uniform float u_startTime;
uniform float u_endTime;
float getRangeOpacity(float vertexTime, float cycle, float totalTime, float flowSpeed) {
float vTime = (vertexTime + cycle * totalTime) / flowSpeed;
if (vTime < u_startTime) {
return 0.0;
}
if (vTime > u_endTime) {
return 0.0;
}
return 1.0;
}`,"getTimeSeed.glsl":`float getTimeSeed(float firstTime, float lastTime) {
return mod(firstTime * 3.634f + lastTime * 5.153f + 7.381f, 1.0f);
}`,imagery:{"imagery.frag":`precision highp float;
varying vec2 v_texcoord;
uniform sampler2D u_texture;
uniform float u_Min;
uniform float u_Max;
uniform float u_featheringSize;
#include <raster/flow/vv.glsl>
float getIntensity(float v) {
return u_Min + v * (u_Max - u_Min);
}
void main(void) {
vec4 sampled = texture2D(u_texture, v_texcoord);
float intensity = getIntensity(sampled.r);
gl_FragColor = getColor(intensity);
gl_FragColor.a *= getOpacity(sampled.r);
gl_FragColor.a *= sampled.a;
gl_FragColor.rgb *= gl_FragColor.a;
}`,"imagery.vert":`attribute vec2 a_position;
attribute vec2 a_texcoord;
uniform mat3 u_dvsMat3;
varying vec2 v_texcoord;
void main(void) {
vec2 xy = (u_dvsMat3 * vec3(a_position, 1.0)).xy;
gl_Position = vec4(xy, 0.0, 1.0);
v_texcoord = a_texcoord;
}`},particles:{"particles.vert":`attribute vec4 a_xyts0;
attribute vec4 a_xyts1;
attribute vec4 a_typeIdFirstTimeLastTime;
attribute vec4 a_extrudeInfo;
uniform mat3 u_dvsMat3;
uniform mat3 u_displayViewMat3;
uniform float u_time;
uniform float u_trailLength;
uniform float u_flowSpeed;
varying vec4 v_color;
varying vec2 v_texcoord;
varying float v_size;
uniform float u_featheringSize;
uniform float u_introFade;
#include <raster/flow/vv.glsl>
#include <raster/flow/getFadeOpacity.glsl>
#include <raster/flow/getDisplayOpacity.glsl>
#include <raster/flow/getTimeSeed.glsl>
void main(void) {
float firstTime = a_typeIdFirstTimeLastTime.z;
float lastTime = a_typeIdFirstTimeLastTime.w;
float duration = lastTime - firstTime;
vec2 position0 = a_xyts0.xy;
float t0 = a_xyts0.z - firstTime;
float speed0 = a_xyts0.w;
vec2 position1 = a_xyts1.xy;
float t1 = a_xyts1.z - firstTime;
float speed1 = a_xyts1.w;
float type = a_typeIdFirstTimeLastTime.x;
float id = a_typeIdFirstTimeLastTime.y;
float seed = getTimeSeed(firstTime, lastTime);
vec2 e0 = a_extrudeInfo.xy;
vec2 e1 = a_extrudeInfo.zw;
float animationPeriod = duration + u_trailLength;
float scaledTime = u_time * u_flowSpeed;
float t = mod(scaledTime, animationPeriod);
float fUnclamped = (t - t0) / (t1 - t0);
float f = clamp(fUnclamped, 0.0, 1.0);
float clampedTime = mix(t0, t1, f);
float speed = mix(speed0, speed1, f);
vec2 extrude;
vec2 position;
float fadeOpacity;
float introOpacity;
if (type == 2.0) {
if (fUnclamped < 0.0 || (fUnclamped > 1.0 && t1 != duration)) {
gl_Position = vec4(0.0, 0.0, -2.0, 1.0);
return;
}
vec2 ortho = mix(e0, e1, f);
vec2 parallel;
parallel = normalize(position1 - position0) * 0.5;
if (id == 1.0) {
extrude = ortho;
v_texcoord = vec2(0.5, 0.0);
} else if (id == 2.0) {
extrude = -ortho;
v_texcoord = vec2(0.5, 1.0);
} else if (id == 3.0) {
extrude = ortho + parallel;
v_texcoord = vec2(1.0, 0.0);
} else if (id == 4.0) {
extrude = -ortho + parallel;
v_texcoord = vec2(1.0, 1.0);
}
fadeOpacity = getFadeOpacity((t - clampedTime) / u_trailLength);
introOpacity = 1.0 - exp(-clampedTime);
v_size = getSize(speed);
v_color = getColor(speed);
v_color.a *= getOpacity(speed);
position = mix(position0, position1, f);
} else {
if (fUnclamped < 0.0) {
gl_Position = vec4(0.0, 0.0, -2.0, 1.0);
return;
}
if (id == 1.0) {
extrude = e0;
v_texcoord = vec2(0.5, 0.0);
fadeOpacity = getFadeOpacity((t - t0) / u_trailLength);
introOpacity = 1.0 - exp(-t0);
v_size = getSize(speed0);
v_color = getColor(speed0);
v_color.a *= getOpacity(speed0);
position = position0;
} else if (id == 2.0) {
extrude = -e0;
v_texcoord = vec2(0.5, 1.0);
fadeOpacity = getFadeOpacity((t - t0) / u_trailLength);
introOpacity = 1.0 - exp(-t0);
v_size = getSize(speed0);
v_color = getColor(speed0);
v_color.a *= getOpacity(speed0);
position = position0;
} else if (id == 3.0) {
extrude = mix(e0, e1, f);
v_texcoord = vec2(0.5, 0.0);
fadeOpacity = getFadeOpacity((t - clampedTime) / u_trailLength);
introOpacity = 1.0 - exp(-clampedTime);
v_size = getSize(speed);
v_color = getColor(speed);
v_color.a *= getOpacity(speed);
position = mix(position0, position1, f);
} else if (id == 4.0) {
extrude = -mix(e0, e1, f);
v_texcoord = vec2(0.5, 1.0);
fadeOpacity = getFadeOpacity((t - clampedTime) / u_trailLength);
introOpacity = 1.0 - exp(-clampedTime);
v_size = getSize(speed);
v_color = getColor(speed);
v_color.a *= getOpacity(speed);
position = mix(position0, position1, f);
}
}
vec2 xy = (u_dvsMat3 * vec3(position, 1.0) + u_displayViewMat3 * vec3(extrude * v_size, 0.0)).xy;
gl_Position = vec4(xy, 0.0, 1.0);
v_color.a *= fadeOpacity;
v_color.a *= mix(1.0, introOpacity, u_introFade);
v_color.a *= getDisplayOpacity();
v_color.rgb *= v_color.a;
}`,"particles.frag":`precision highp float;
varying vec4 v_color;
varying vec2 v_texcoord;
varying float v_size;
uniform float u_featheringSize;
#include <raster/flow/getFragmentColor.glsl>
void main(void) {
gl_FragColor = getFragmentColor(v_color, length(v_texcoord - 0.5), v_size, u_featheringSize);
}`},streamlines:{"streamlines.vert":`attribute vec3 a_positionAndSide;
attribute vec3 a_timeInfo;
attribute vec2 a_extrude;
attribute float a_speed;
uniform mat3 u_dvsMat3;
uniform mat3 u_displayViewMat3;
varying float v_time;
varying float v_firstTime;
varying float v_lastTime;
varying vec4 v_color;
varying float v_side;
varying float v_size;
uniform float u_featheringSize;
#include <raster/flow/vv.glsl>
void main(void) {
vec4 lineColor = getColor(a_speed);
float lineOpacity = getOpacity(a_speed);
float lineSize = getSize(a_speed);
vec2 position = a_positionAndSide.xy;
v_side = a_positionAndSide.z;
vec2 xy = (u_dvsMat3 * vec3(position, 1.0) + u_displayViewMat3 * vec3(a_extrude * lineSize, 0.0)).xy;
gl_Position = vec4(xy, 0.0, 1.0);
v_time = a_timeInfo.x;
v_firstTime = a_timeInfo.y;
v_lastTime = a_timeInfo.z;
v_color = lineColor;
v_color.a *= lineOpacity;
v_color.rgb *= v_color.a;
v_size = lineSize;
}`,"streamlines.frag":`precision highp float;
varying float v_side;
varying float v_time;
varying float v_firstTime;
varying float v_lastTime;
varying vec4 v_color;
varying float v_size;
uniform float u_time;
uniform float u_trailLength;
uniform float u_flowSpeed;
uniform float u_featheringSize;
uniform float u_introFade;
#include <raster/flow/getFragmentColor.glsl>
#include <raster/flow/getFadeOpacity.glsl>
#include <raster/flow/getRangeOpacity.glsl>
#include <raster/flow/getDisplayOpacity.glsl>
#include <raster/flow/getTimeSeed.glsl>
void main(void) {
float totalTime = v_lastTime - v_firstTime;
float trailLength = u_trailLength;
float period = totalTime + trailLength;
float seed = getTimeSeed(v_firstTime, v_lastTime);
float t = mod(seed * period + u_time * u_flowSpeed, period) + v_firstTime - v_time;
float fading = t / trailLength;
vec4 color = v_color;
color *= getDisplayOpacity();
color *= fading < 0.0 ? 0.0 : getFadeOpacity(fading);
gl_FragColor = getFragmentColor(color, length((v_side + 1.0) / 2.0 - 0.5), v_size, u_featheringSize);
}`},"vv.glsl":`#define MAX_STOPS 8
#ifdef VV_COLOR
uniform float u_color_stops[MAX_STOPS];
uniform vec4 u_color_values[MAX_STOPS];
uniform int u_color_count;
#else
uniform vec4 u_color;
#endif
#ifdef VV_OPACITY
uniform float u_opacity_stops[MAX_STOPS];
uniform float u_opacity_values[MAX_STOPS];
uniform int u_opacity_count;
#else
uniform float u_opacity;
#endif
#ifdef VV_SIZE
uniform float u_size_stops[MAX_STOPS];
uniform float u_size_values[MAX_STOPS];
uniform int u_size_count;
#else
uniform float u_size;
#endif
uniform float u_featheringOffset;
vec4 getColor(float x) {
#ifdef VV_COLOR
vec4 color = u_color_values[0];
{
for (int i = 1; i < MAX_STOPS; i++) {
if (i >= u_color_count) {
break;
}
float x1 = u_color_stops[i - 1];
if (x < x1) {
break;
}
float x2 = u_color_stops[i];
vec4 y2 = u_color_values[i];
if (x < x2) {
vec4 y1 = u_color_values[i - 1];
color = y1 + (y2 - y1) * (x - x1) / (x2 - x1);
} else {
color = y2;
}
}
}
#else
vec4 color = u_color;
#endif
return color;
}
float getOpacity(float x) {
#ifdef VV_OPACITY
float opacity = u_opacity_values[0];
{
for (int i = 1; i < MAX_STOPS; i++) {
if (i >= u_opacity_count) {
break;
}
float x1 = u_opacity_stops[i - 1];
if (x < x1) {
break;
}
float x2 = u_opacity_stops[i];
float y2 = u_opacity_values[i];
if (x < x2) {
float y1 = u_opacity_values[i - 1];
opacity = y1 + (y2 - y1) * (x - x1) / (x2 - x1);
} else {
opacity = y2;
}
}
}
#else
float opacity = u_opacity;
#endif
return opacity;
}
float getSize(float x) {
#ifdef VV_SIZE
float size = u_size_values[0];
{
for (int i = 1; i < MAX_STOPS; i++) {
if (i >= u_size_count) {
break;
}
float x1 = u_size_stops[i - 1];
if (x < x1) {
break;
}
float x2 = u_size_stops[i];
float y2 = u_size_values[i];
if (x < x2) {
float y1 = u_size_values[i - 1];
size = y1 + (y2 - y1) * (x - x1) / (x2 - x1);
} else {
size = y2;
}
}
}
#else
float size = u_size;
#endif
return size + 2.0 * u_featheringSize * u_featheringOffset;
}`},reproject:{"reproject.vert":`precision mediump float;
attribute vec2 a_position;
varying highp vec2 v_texcoord;
void main()
{
v_texcoord = a_position;
gl_Position = vec4(2.0 * (a_position - 0.5), 0.0, 1.0);
}`,"reproject.frag":`precision mediump float;
varying vec2 v_texcoord;
#include <raster/common/common.glsl>
void main() {
vec2 pixelLocation = getPixelLocation(v_texcoord);
if (isOutside(pixelLocation)) {
gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
return;
}
vec4 currentPixel = getPixel(pixelLocation);
gl_FragColor = vec4(currentPixel.rgb, 1.0) * currentPixel.a * u_opacity;
}`}},stencil:{"stencil.frag":`void main() {
gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
}`,"stencil.vert":`attribute vec2 a_pos;
uniform mat3 u_worldExtent;
void main() {
gl_Position = vec4(u_worldExtent * vec3(a_pos, 1.0), 1.0);
}`},test:{"TestShader.common.glsl":`#ifndef RETURN_RED
varying    vec4      v_color;
#endif
varying    vec2      v_offset;`,"TestShader.frag":`precision highp float;
#include <test/TestShader.common.glsl>
void main() {
if (v_offset.x > -.5 && v_offset.y > -.5 && v_offset.x < .5 && v_offset.y < .5) {
discard;
}
#ifdef RETURN_RED
gl_FragColor = vec4(1., 0., 0., 1.);
#else
gl_FragColor = v_color;
#endif
}`,"TestShader.vert":`const float POS_PRECISION_FACTOR = 10.;
const float OFFSET_PRECISION_FACTOR = 10.;
const float SIZE_PRECISION_FACTOR = 10.;
attribute  vec2      a_pos_packed;
attribute  vec2      a_offset_packed;
attribute  float     a_size_packed;
#ifdef DATA_DRIVEN_COLOR
const float u_dataDrivenColor_validValues[4] = float[4](0., 0., 1., 0.);
uniform    vec4      u_dataDrivenColor_colorFallback;
uniform    vec4      u_dataDrivenColor_color;
#endif
uniform    float     u_view_zoomLevel;
#include <test/TestShader.common.glsl>
#ifdef DATA_DRIVEN_COLOR
vec4 getColor(float value) {
int index = -1;
for (int i = 0; i < 4; i++) {
if (u_dataDrivenColor_validValues[i] == value) {
index = i;
break;
}
}
if (index == -1) {
return u_dataDrivenColor_colorFallback;
}
return u_dataDrivenColor_color;
}
#endif
void main() {
vec2  a_pos = a_pos_packed / POS_PRECISION_FACTOR;
vec2  a_offset = a_offset_packed / OFFSET_PRECISION_FACTOR;
float a_size = a_size_packed / SIZE_PRECISION_FACTOR;
vec4 color = vec4(1., 0., 0., 1.);
#ifdef DATA_DRIVEN_COLOR
color = getColor(1.);
#endif
vec2 offsetScaled = a_offset * a_size;
vec4 pos = vec4(a_pos.xy + offsetScaled, 0., 1.);
gl_Position = pos;
#ifndef RETURN_RED
v_color = color;
#endif
v_offset = a_offset;
}`},util:{"atan2.glsl":`float atan2(in float y, in float x) {
float t0, t1, t2, t3, t4;
t3 = abs(x);
t1 = abs(y);
t0 = max(t3, t1);
t1 = min(t3, t1);
t3 = 1.0 / t0;
t3 = t1 * t3;
t4 = t3 * t3;
t0 =         - 0.013480470;
t0 = t0 * t4 + 0.057477314;
t0 = t0 * t4 - 0.121239071;
t0 = t0 * t4 + 0.195635925;
t0 = t0 * t4 - 0.332994597;
t0 = t0 * t4 + 0.999995630;
t3 = t0 * t3;
t3 = (abs(y) > abs(x)) ? 1.570796327 - t3 : t3;
t3 = x < 0.0 ?  3.141592654 - t3 : t3;
t3 = y < 0.0 ? -t3 : t3;
return t3;
}`,"encoding.glsl":`const vec4 rgba2float_factors = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, rgba2float_factors);
}`}};function xr(n){return function(e){let t=n;return e.split("/").forEach(i=>{t&&(t=t[i])}),t}}var Sr=new yn(xr(Kn));function Ua(n){return Sr.resolveIncludes(n)}var Tr={hittestDist:o,hittestPos:g},br={size:o},wr={filterFlags:E,animation:E,visualVariableData:E,dataDriven0:E,dataDriven1:E,dataDriven2:E,gpgpu:E},Vr={displayViewScreenMat3:q,displayViewMat3:q,displayMat3:q,viewMat3:q,tileMat3:q,displayZoomFactor:o,requiredZoomFactor:o,tileOffset:g,currentScale:o,currentZoom:o,metersPerSRUnit:o},$o=class extends Xo{constructor(){super(...arguments),this.vertexShader=Ua("materials/pie/pie.vert"),this.fragmentShader=Ua("materials/pie/pie.frag"),this.required=b(d(d({},Vr),br),{outlineWidth:o,colors:ge,defaultColor:_,othersColor:_,outlineColor:_,donutRatio:o,sectorThreshold:o}),this.textures=wr,this.options={hittestUniforms:Tr,visualVariableSizeMinMaxValue:{minMaxValueAndSize:_},visualVariableSizeScaleStops:{sizes:{type:"array",elementType:o,size:8},values:{type:"array",elementType:o,size:8}},visualVariableSizeStops:{sizes:{type:"array",elementType:o,size:8},values:{type:"array",elementType:o,size:8}},visualVariableSizeUnitValue:{unitValueToPixelsRatio:o},visualVariableOpacity:{opacities:{type:"array",elementType:o,size:8},opacityValues:{type:"array",elementType:o,size:8}},highlightUniforms:{highlightAll:o,activeReasons:o}},this.locations={pos:{index:0,type:g},id:{index:1,type:I},bitset:{index:2,type:o},offset:{index:3,type:g},texCoords:{index:4,type:g},referenceSize:{index:5,type:o},zoomRange:{index:6,type:g}},this.defines={VV_SIZE_MIN_MAX_VALUE:"boolean",VV_SIZE_SCALE_STOPS:"boolean",VV_SIZE_FIELD_STOPS:"boolean",VV_SIZE_UNIT_VALUE:"boolean",VV_OPACITY:"boolean",HITTEST:"boolean",numberOfFields:"number",highlight:"boolean",inside:"boolean",outside:"boolean"}}setNumberOfFields(e){this.required.colors={type:"array",elementType:_,size:e}}};var Jo=class extends K{constructor(){super(...arguments),this.type=30,this.shaders={geometry:new $o},this.symbologyPlane=2}render(e,t){let{painter:i}=e,{instance:a,target:s}=t,l=this.shaders.geometry,u=a.getInput(),c=u.uniforms.numberOfFields,f=Z(e),m=X(e,s),v=j(e);l.setNumberOfFields(c),i.setShader({shader:l,uniforms:b(d(d(d(d({},ie(e,t.target,u.uniforms.shader)),m.storage),m.view),m.highlight),{highlightUniforms:m.highlight,hittestUniforms:m.hittestRequest?{hittestDist:m.hittestRequest?.distance,hittestPos:m.hittestRequest?.position}:null}),textures:Rn(e),defines:b(d({VV_SIZE_MIN_MAX_VALUE:!!u.uniforms.shader.visualVariableSizeMinMaxValue,VV_SIZE_SCALE_STOPS:!!u.uniforms.shader.visualVariableSizeScaleStops,VV_SIZE_FIELD_STOPS:!!u.uniforms.shader.visualVariableSizeStops,VV_SIZE_UNIT_VALUE:!!u.uniforms.shader.visualVariableSizeUnitValue,VV_OPACITY:!!u.uniforms.shader.visualVariableOpacity,HITTEST:f,highlight:m.highlight?1:0},v),{numberOfFields:c}),optionalAttributes:{},useComputeBuffer:f}),i.setPipelineState(ee(e)),i.submitDraw(e,t)}};var Qo=class extends K{constructor(){super(...arguments),this.type=32,this.shaders={geometry:new Te},this.symbologyPlane=3}render(e,t){let{painter:i}=e,a=j(e),s=t.instance.getInput(),l={shader:this.shaders.geometry,uniforms:b(d(d({},ie(e,t.target,s.uniforms)),X(e,t.target)),{mosaicInfo:i.textureManager.getMosaicInfo(e,t.textureKey)}),textures:b(d({},Q(e)),{mosaicTexture:i.textureManager.getMosaicTexture(e,t.textureKey)}),defines:b(d({},a),{isBackgroundPass:!0,isLabel:!1,textRenderPassType:0}),optionalAttributes:s.optionalAttributes,useComputeBuffer:Z(e)};i.setShader(l),i.setPipelineState(ee(e)),i.submitDraw(e,t),i.setShader(b(d({},l),{defines:b(d({},a),{isBackgroundPass:!1,isLabel:!1,textRenderPassType:2})})),i.submitDraw(e,t),i.setShader(b(d({},l),{defines:b(d({},a),{isBackgroundPass:!1,isLabel:!1,textRenderPassType:1})})),i.submitDraw(e,t),i.setShader(b(d({},l),{defines:b(d({},a),{isBackgroundPass:!1,isLabel:!1,textRenderPassType:0})})),i.submitDraw(e,t)}};var ea={fill:new Co,patternFill:new Po,complexFill:new Oo,gradientFill:new Do,outlineFill:new Ao,patternOutlineFill:new Ro,complexOutlineFill:new zo,marker:new Ko,pieChart:new Jo,line:new Zo,texturedLine:new jo,gradientStroke:new Wo,text:new Qo,label:new qo,heatmap:new ko,dotDensity:new Io,flow:new No,animatedMarker:new yo,animatedMarkerShift:new xo,animatedFill:new So,animatedLine:new To};function Ov(){for(let n in ea)ea[n].startup()}function zv(n){for(let e in ea)ea[e].shutdown(n)}export{bi as a,Ua as b,Hn as c,Rd as d,sr as e,Ld as f,Gd as g,Ud as h,cr as i,pr as j,Yd as k,Wd as l,Zd as m,jd as n,Kd as o,dr as p,Xd as q,Un as r,$d as s,at as t,Xe as u,$e as v,ea as w,Ov as x,zv as y};
