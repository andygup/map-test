import{e0 as bt,iu as Wt,iv as Me,bE as ye,ng as Ge,wD as Vt,ix as Xe,kw as Bt,iK as Qe,pK as kt,fA as G,h$ as He,bz as We,iJ as Gt,oz as Ht,df as H,fz as Re,bo as Jt,bU as q,bx as x,cm as Zt,d0 as Ke,hx as Yt,co as qt,X as g,e2 as h,i2 as p,nC as Xt,lE as Qt,ov as Kt,nB as ce,_ as ei,k1 as et,nA as ge,dE as Et,i3 as Ce,nz as ti,kD as ne,aG as Pe,ak as Ot,pE as ii,kp as Se,sE as V,dF as de,nh as tt,i4 as it,kk as Ie,wE as ni,iL as $e,wF as ri,dG as si,lG as ai,qe as re,iE as oi,fB as Ve,lZ as li,kr as ci,is as di,et as pi,M as hi,kH as ui,wG as fi}from"./index-CC72Q5ax.js";import{a9 as mi,aa as vi,B as S,D as yt,E as At,F as Rt,o as M,O as _e,ab as nt,l as gi,f as Si,w as Je,a as _i,e as Ae,g as Ti,ac as bi,h as Ei,d as Oi,X as yi,M as Ai,j as Ri,P as xi,i as Ci,k as Di,n as Li,m as Pi,q as rt,r as Ii,u as $i,v as wi,x as Ni,y as st,z as at,A as Ui,ad as zi,ae as ot,af as Fi,ag as ji,ah as Mi,ai as Wi,G as k,I as Be,J as Vi,K as Bi,b as ki}from"./Geometry-C-mMk4A4.js";import{t as Gi}from"./basicInterfaces-CZwQPxTp.js";import{s as Hi,m as Ji}from"./Util-BiGuS9PU.js";import{t as xt,n as Zi,r as Yi,b as qi}from"./GeometryUtil-B3ewm9Ov.js";import{Y as Xi,j as Te}from"./Octree-DKejwn8M.js";import{H as Qi}from"./InterleavedLayout-CjFMHkew.js";import{n as J,i as Ki,e as en,C as tn,f as lt,h as nn}from"./NormalAttribute.glsl-DJDgpDLJ.js";import{B as be,g as we,c as ct}from"./renderState-ByrxXTF7.js";import{u as rn}from"./hydratedFeatures-BnjDXNd2.js";import"./BindType-BmZEZMMh.js";import"./floatRGBA-Dj0WGnBf.js";class pr{constructor(e,i=null,n=0){this.array=e,this.spatialReference=i,this.offset=n}}function Ct(t){return"array"in t}function Ee(t,e,i="ground"){if(xt(e))return t.getElevation(e.x,e.y,e.z||0,e.spatialReference,i);if(Ct(e)){let n=e.offset;return t.getElevation(e.array[n++],e.array[n++],e.array[n]||0,e.spatialReference??t.spatialReference,i)}return t.getElevation(e[0],e[1],e[2]||0,t.spatialReference,i)}var dt,pt,ht;(function(t){t[t.RasterImage=0]="RasterImage",t[t.Features=1]="Features"})(dt||(dt={})),function(t){t[t.MapLayer=0]="MapLayer",t[t.ViewLayer=1]="ViewLayer",t[t.Outline=2]="Outline",t[t.SnappingHint=3]="SnappingHint"}(pt||(pt={})),function(t){t[t.WithRasterImage=0]="WithRasterImage",t[t.WithoutRasterImage=1]="WithoutRasterImage"}(ht||(ht={}));var xe;(function(t){t[t.ASYNC=0]="ASYNC",t[t.SYNC=1]="SYNC"})(xe||(xe={}));let sn=class extends bt{get geometries(){return this._geometries}get transformation(){return this._transformation??Wt}set transformation(e){this._transformation=Me(this._transformation??ye(),e),this._invalidateBoundingVolume(),this._emit("transformationChanged",this)}get shaderTransformation(){return this._shaderTransformation}set shaderTransformation(e){this._shaderTransformation=e?Me(this._shaderTransformation??ye(),e):null,this._invalidateBoundingVolume(),this._emit("shaderTransformationChanged",this)}get effectiveTransformation(){return this.shaderTransformation??this.transformation}constructor(e={}){super(),this.type=Ge.Object,this._shaderTransformation=null,this._parentLayer=null,this._visible=!0,this.castShadow=e.castShadow??!0,this.usesVerticalDistanceToGround=e.usesVerticalDistanceToGround??!1,this.graphicUid=e.graphicUid,this.layerUid=e.layerUid,e.isElevationSource&&(this.lastValidElevationBB=new Dt),this._geometries=e.geometries?Array.from(e.geometries):new Array}dispose(){this._geometries.length=0}get parentLayer(){return this._parentLayer}set parentLayer(e){Hi(this._parentLayer==null||e==null,"Object3D can only be added to a single Layer"),this._parentLayer=e}addGeometry(e){e.visible=this._visible,this._geometries.push(e),this._emit("geometryAdded",{object:this,geometry:e}),this._invalidateBoundingVolume()}removeGeometry(e){const i=this._geometries.splice(e,1)[0];i&&(this._emit("geometryRemoved",{object:this,geometry:i}),this._invalidateBoundingVolume())}removeAllGeometries(){for(;this._geometries.length>0;)this.removeGeometry(0)}geometryVertexAttributeUpdated(e,i,n=!1){this._emit("attributesChanged",{object:this,geometry:e,attribute:i,sync:n}),Vt(i)&&this._invalidateBoundingVolume()}get visible(){return this._visible}set visible(e){if(this._visible!==e){this._visible=e;for(const i of this._geometries)i.visible=this._visible;this._emit("visibilityChanged",this)}}maskOccludee(){const e=new mi;for(const i of this._geometries)i.occludees=Zi(i.occludees,e);return this._emit("occlusionChanged",this),e}removeOcclude(e){for(const i of this._geometries)i.occludees=Yi(i.occludees,e);this._emit("occlusionChanged",this)}highlight(e){const i=new vi(e);for(const n of this._geometries)n.addHighlight(i);return this._emit("highlightChanged",this),i}removeHighlight(e){for(const i of this._geometries)i.removeHighlight(e);this._emit("highlightChanged",this)}removeStateID(e){e.channel===Gi.Highlight?this.removeHighlight(e):this.removeOcclude(e)}getCombinedStaticTransformation(e,i){return Xe(i,this.transformation,e.transformation)}getCombinedShaderTransformation(e,i=ye()){return Xe(i,this.effectiveTransformation,e.transformation)}get boundingVolumeWorldSpace(){return this._bvWorldSpace||(this._bvWorldSpace=this._bvWorldSpace||new ut,this._validateBoundingVolume(this._bvWorldSpace,pe.WorldSpace)),this._bvWorldSpace}get boundingVolumeObjectSpace(){return this._bvObjectSpace||(this._bvObjectSpace=this._bvObjectSpace||new ut,this._validateBoundingVolume(this._bvObjectSpace,pe.ObjectSpace)),this._bvObjectSpace}_validateBoundingVolume(e,i){const n=i===pe.ObjectSpace;for(const r of this._geometries){const s=r.boundingInfo;s&&an(s,e,n?r.transformation:this.getCombinedShaderTransformation(r))}Bt(Qe(e.bounds),e.min,e.max,.5);for(const r of this._geometries){const s=r.boundingInfo;if(s==null)continue;const l=n?r.transformation:this.getCombinedShaderTransformation(r),o=kt(l);G(ft,s.center,l);const a=He(ft,Qe(e.bounds)),c=s.radius*o;e.bounds[3]=Math.max(e.bounds[3],a+c)}}_invalidateBoundingVolume(){var i;const e=(i=this._bvWorldSpace)==null?void 0:i.bounds;this._bvObjectSpace=this._bvWorldSpace=void 0,this._parentLayer&&e&&this._parentLayer.notifyObjectBBChanged(this,e)}_emit(e,i){this._parentLayer&&this._parentLayer.events.emit(e,i)}get test(){}};class Dt{constructor(){this.min=We(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),this.max=We(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE)}isEmpty(){return this.max[0]<this.min[0]&&this.max[1]<this.min[1]&&this.max[2]<this.min[2]}}class ut extends Dt{constructor(){super(...arguments),this.bounds=Gt()}}function an(t,e,i){const n=t.bbMin,r=t.bbMax;if(Ht(i)){const s=H(on,i[12],i[13],i[14]);Re(U,n,s),Re(j,r,s);for(let l=0;l<3;++l)e.min[l]=Math.min(e.min[l],U[l]),e.max[l]=Math.max(e.max[l],j[l])}else if(G(U,n,i),Jt(n,r))for(let s=0;s<3;++s)e.min[s]=Math.min(e.min[s],U[s]),e.max[s]=Math.max(e.max[s],U[s]);else{G(j,r,i);for(let s=0;s<3;++s)e.min[s]=Math.min(e.min[s],U[s],j[s]),e.max[s]=Math.max(e.max[s],U[s],j[s]);for(let s=0;s<3;++s){q(U,n),q(j,r),U[s]=r[s],j[s]=n[s],G(U,U,i),G(j,j,i);for(let l=0;l<3;++l)e.min[l]=Math.min(e.min[l],U[l],j[l]),e.max[l]=Math.max(e.max[l],U[l],j[l])}}}const on=x(),U=x(),j=x(),ft=x();var pe;(function(t){t[t.WorldSpace=0]="WorldSpace",t[t.ObjectSpace=1]="ObjectSpace"})(pe||(pe={}));const ln=["layerObjectAdded","layerObjectRemoved","layerObjectsAdded","layerObjectsRemoved","transformationChanged","shaderTransformationChanged","visibilityChanged","occlusionChanged","highlightChanged","geometryAdded","geometryRemoved","attributesChanged"];let cn=class extends bt{constructor(e,i,n=""){super(),this.stage=e,this.apiLayerUid=n,this.type=Ge.Layer,this.events=new Zt,this.visible=!0,this.sliceable=!1,this._objectsAdded=new Ke,this._handles=new Yt,this._objects=new Ke,this._pickable=!0,this.visible=(i==null?void 0:i.visible)??!0,this._pickable=(i==null?void 0:i.pickable)??!0,this.updatePolicy=(i==null?void 0:i.updatePolicy)??xe.ASYNC,this._disableOctree=(i==null?void 0:i.disableOctree)??!1,e.add(this);for(const r of ln)this._handles.add(this.events.on(r,s=>e.handleEvent(r,s)))}destroy(){this._handles.size&&(this._handles.destroy(),this.stage.remove(this),this.invalidateSpatialQueryAccelerator())}get objects(){return this._objects}set pickable(e){this._pickable=e}get pickable(){return this._pickable&&this.visible}add(e){this._objects.push(e),e.parentLayer=this,this.events.emit("layerObjectAdded",{layer:this,object:e}),this._octree!=null&&this._objectsAdded.push(e)}remove(e){this._objects.removeUnordered(e)&&(e.parentLayer=null,this.events.emit("layerObjectRemoved",{layer:this,object:e}),this._octree!=null&&(this._objectsAdded.removeUnordered(e)||this._octree.remove([e])))}addMany(e){this._objects.pushArray(e);for(const i of e)i.parentLayer=this;this.events.emit("layerObjectsAdded",{layer:this,objects:e}),this._octree!=null&&this._objectsAdded.pushArray(e)}removeMany(e){const i=new Array;if(this._objects.removeUnorderedMany(e,e.length,i),i.length!==0){for(const n of i)n.parentLayer=null;if(this.events.emit("layerObjectsRemoved",{layer:this,objects:i}),this._octree!=null){for(let n=0;n<i.length;)this._objectsAdded.removeUnordered(i[n])?(i[n]=i[i.length-1],i.length-=1):++n;this._octree.remove(i)}}}sync(){this.updatePolicy!==xe.SYNC&&this.stage.syncLayer(this.id)}notifyObjectBBChanged(e,i){this._octree==null||this._objectsAdded.includes(e)||this._octree.update(e,i)}getSpatialQueryAccelerator(){return this._octree==null&&this._objects.length>50&&!this._disableOctree?(this._octree=new Xi(e=>e.boundingVolumeWorldSpace.bounds),this._octree.add(this._objects.data,this._objects.length)):this._octree!=null&&this._objectsAdded.length>0&&(this._octree.add(this._objectsAdded.data,this._objectsAdded.length),this._objectsAdded.clear()),this._octree}invalidateSpatialQueryAccelerator(){this._octree=qt(this._octree),this._objectsAdded.clear()}},dn=class{constructor(e,i){this.vec3=e,this.id=i}};function mt(t,e,i,n){return new dn(We(t,e,i),n)}var ee,he;(function(t){t[t.Draped=0]="Draped",t[t.Screen=1]="Screen",t[t.World=2]="World",t[t.COUNT=3]="COUNT"})(ee||(ee={})),function(t){t[t.Center=0]="Center",t[t.Tip=1]="Tip",t[t.COUNT=2]="COUNT"}(he||(he={}));let w=class extends yt{constructor(){super(...arguments),this.space=ee.Screen,this.anchor=he.Center,this.occluder=!1,this.hasSlicePlane=!1,this.writeDepth=!1,this.hideOnShortSegments=!1,this.hasCap=!1,this.hasTip=!1,this.vvSize=!1,this.vvColor=!1,this.vvOpacity=!1,this.hasOccludees=!1,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.textureCoordinateType=At.None,this.emissionSource=Rt.None,this.discardInvisibleFragments=!0,this.occlusionPass=!1,this.hasVvInstancing=!0,this.hasSliceTranslatedView=!0,this.objectAndLayerIdColorInstanced=!1}get draped(){return this.space===ee.Draped}};g([S({count:ee.COUNT})],w.prototype,"space",void 0),g([S({count:he.COUNT})],w.prototype,"anchor",void 0),g([S()],w.prototype,"occluder",void 0),g([S()],w.prototype,"hasSlicePlane",void 0),g([S()],w.prototype,"writeDepth",void 0),g([S()],w.prototype,"hideOnShortSegments",void 0),g([S()],w.prototype,"hasCap",void 0),g([S()],w.prototype,"hasTip",void 0),g([S()],w.prototype,"vvSize",void 0),g([S()],w.prototype,"vvColor",void 0),g([S()],w.prototype,"vvOpacity",void 0),g([S()],w.prototype,"hasOccludees",void 0),g([S()],w.prototype,"terrainDepthTest",void 0),g([S()],w.prototype,"cullAboveTerrain",void 0);const vt=8;function pn(t,e){const i=t.vertex;i.uniforms.add(new M("intrinsicWidth",n=>n.width)),e.vvSize?(t.attributes.add(h.SIZEFEATUREATTRIBUTE,"float"),i.uniforms.add(new _e("vvSizeMinSize",n=>n.vvSize.minSize),new _e("vvSizeMaxSize",n=>n.vvSize.maxSize),new _e("vvSizeOffset",n=>n.vvSize.offset),new _e("vvSizeFactor",n=>n.vvSize.factor)),i.code.add(p`float getSize() {
return intrinsicWidth * clamp(vvSizeOffset + sizeFeatureAttribute * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize).x;
}`)):(t.attributes.add(h.SIZE,"float"),i.code.add(p`float getSize(){
return intrinsicWidth * size;
}`)),e.vvOpacity?(t.attributes.add(h.OPACITYFEATUREATTRIBUTE,"float"),i.constants.add("vvOpacityNumber","int",8),i.uniforms.add(new nt("vvOpacityValues",n=>n.vvOpacity.values,vt),new nt("vvOpacityOpacities",n=>n.vvOpacity.opacityValues,vt)),i.code.add(p`float interpolateOpacity( float value ){
if (value <= vvOpacityValues[0]) {
return vvOpacityOpacities[0];
}
for (int i = 1; i < vvOpacityNumber; ++i) {
if (vvOpacityValues[i] >= value) {
float f = (value - vvOpacityValues[i-1]) / (vvOpacityValues[i] - vvOpacityValues[i-1]);
return mix(vvOpacityOpacities[i-1], vvOpacityOpacities[i], f);
}
}
return vvOpacityOpacities[vvOpacityNumber - 1];
}
vec4 applyOpacity( vec4 color ){
return vec4(color.xyz, interpolateOpacity(opacityFeatureAttribute));
}`)):i.code.add(p`vec4 applyOpacity( vec4 color ){
return color;
}`),e.vvColor?(t.include(gi,e),t.attributes.add(h.COLORFEATUREATTRIBUTE,"float"),i.code.add(p`vec4 getColor(){
return applyOpacity(interpolateVVColor(colorFeatureAttribute));
}`)):(t.attributes.add(h.COLOR,"vec4"),i.code.add(p`vec4 getColor(){
return applyOpacity(color);
}`))}function Lt(t){return t.pattern.map(e=>Math.round(e*t.pixelRatio))}function hn(t){if(t==null)return 1;const e=Lt(t);return Math.floor(e.reduce((i,n)=>i+n))}function un(t){return Lt(t).reduce((e,i)=>Math.max(e,i))}function fn(t){return t==null?Xt:t.length===4?t:Qt(mn,t[0],t[1],t[2],1)}const mn=Kt();function vn(t,e){e.stippleEnabled?gn(t,e):Sn(t)}function gn(t,e){const i=!(e.draped&&e.stipplePreferContinuous),{vertex:n,fragment:r}=t;r.include(qi),e.draped||(Si(n,e),n.uniforms.add(new M("worldToScreenPerDistanceRatio",(s,l)=>1/l.camera.perScreenPixelRatio)),n.code.add(p`float computeWorldToScreenRatio(vec3 segmentCenter) {
float segmentDistanceToCamera = length(segmentCenter - cameraPosition);
return worldToScreenPerDistanceRatio / segmentDistanceToCamera;
}`)),t.varyings.add("vStippleDistance","float"),t.varyings.add("vStippleDistanceLimits","vec2"),t.varyings.add("vStipplePatternStretch","float"),n.code.add(p`
    float discretizeWorldToScreenRatio(float worldToScreenRatio) {
      float step = ${Tn};

      float discreteWorldToScreenRatio = log(worldToScreenRatio);
      discreteWorldToScreenRatio = ceil(discreteWorldToScreenRatio / step) * step;
      discreteWorldToScreenRatio = exp(discreteWorldToScreenRatio);
      return discreteWorldToScreenRatio;
    }
  `),n.code.add(p`vec2 computeStippleDistanceLimits(float startPseudoScreen, float segmentLengthPseudoScreen, float segmentLengthScreen, float patternLength) {`),n.code.add(p`
    if (segmentLengthPseudoScreen >= ${i?"patternLength":"1e4"}) {
  `),Je(n),n.code.add(p`float repetitions = segmentLengthScreen / (patternLength * pixelRatio);
float flooredRepetitions = max(1.0, floor(repetitions + 0.5));
float segmentLengthScreenRounded = flooredRepetitions * patternLength;
float stretch = repetitions / flooredRepetitions;
vStipplePatternStretch = max(0.75, stretch);
return vec2(0.0, segmentLengthScreenRounded);
}
return vec2(startPseudoScreen, startPseudoScreen + segmentLengthPseudoScreen);
}`),r.uniforms.add(new _i("stipplePatternTexture",s=>s.stippleTexture),new M("stipplePatternSDFNormalizer",s=>_n(s.stipplePattern)),new M("stipplePatternPixelSizeInv",s=>1/Pt(s))),r.code.add(p`float getStippleSDF(out bool isClamped) {
float stippleDistanceClamped = clamp(vStippleDistance, vStippleDistanceLimits.x, vStippleDistanceLimits.y);
vec2 aaCorrectedLimits = vStippleDistanceLimits + vec2(1.0, -1.0) / gl_FragCoord.w;
isClamped = vStippleDistance < aaCorrectedLimits.x || vStippleDistance > aaCorrectedLimits.y;
float u = stippleDistanceClamped * gl_FragCoord.w * stipplePatternPixelSizeInv * vLineSizeInv;
u = fract(u);
float encodedSDF = rgba2float(texture(stipplePatternTexture, vec2(u, 0.5)));
float sdf = (encodedSDF * 2.0 - 1.0) * stipplePatternSDFNormalizer;
return (sdf - 0.5) * vStipplePatternStretch + 0.5;
}
float getStippleSDF() {
bool ignored;
return getStippleSDF(ignored);
}
float getStippleAlpha() {
bool isClamped;
float stippleSDF = getStippleSDF(isClamped);
float antiAliasedResult = clamp(stippleSDF * vLineWidth + 0.5, 0.0, 1.0);
return isClamped ? floor(antiAliasedResult + 0.5) : antiAliasedResult;
}`),e.stippleOffColorEnabled?(r.uniforms.add(new Ae("stippleOffColor",s=>fn(s.stippleOffColor))),r.code.add(p`#define discardByStippleAlpha(stippleAlpha, threshold) {}
#define blendStipple(color, stippleAlpha) mix(color, stippleOffColor, stippleAlpha)`)):r.code.add(p`#define discardByStippleAlpha(stippleAlpha, threshold) if (stippleAlpha < threshold) { discard; }
#define blendStipple(color, stippleAlpha) vec4(color.rgb, color.a * stippleAlpha)`)}function Sn(t){t.fragment.code.add(p`float getStippleAlpha() { return 1.0; }
#define discardByStippleAlpha(_stippleAlpha_, _threshold_) {}
#define blendStipple(color, _stippleAlpha_) color`)}function _n(t){return t?(Math.floor(.5*(un(t)-1))+.5)/t.pixelRatio:1}function Pt(t){const e=t.stipplePattern;return e?hn(t.stipplePattern)/e.pixelRatio:1}const Tn=p.float(.4),It=64,bn=It/2,En=bn/5,On=It/En,vr=.25;function yn(t,e){const i=t.vertex;Je(i),i.uniforms.get("markerScale")==null&&i.constants.add("markerScale","float",1),i.constants.add("markerSizePerLineWidth","float",On).code.add(p`float getLineWidth() {
return max(getSize(), 1.0) * pixelRatio;
}
float getScreenMarkerSize() {
return markerSizePerLineWidth * markerScale * getLineWidth();
}`),e.space===ee.World&&(i.constants.add("maxSegmentLengthFraction","float",.45),i.uniforms.add(new M("perRenderPixelRatio",(n,r)=>r.camera.perRenderPixelRatio)),i.code.add(p`bool areWorldMarkersHidden(vec4 pos, vec4 other) {
vec3 midPoint = mix(pos.xyz, other.xyz, 0.5);
float distanceToCamera = length(midPoint);
float screenToWorldRatio = perRenderPixelRatio * distanceToCamera * 0.5;
float worldMarkerSize = getScreenMarkerSize() * screenToWorldRatio;
float segmentLen = length(pos.xyz - other.xyz);
return worldMarkerSize > maxSegmentLengthFraction * segmentLen;
}
float getWorldMarkerSize(vec4 pos) {
float distanceToCamera = length(pos.xyz);
float screenToWorldRatio = perRenderPixelRatio * distanceToCamera * 0.5;
return getScreenMarkerSize() * screenToWorldRatio;
}`))}var te;(function(t){t[t.BUTT=0]="BUTT",t[t.SQUARE=1]="SQUARE",t[t.ROUND=2]="ROUND",t[t.COUNT=3]="COUNT"})(te||(te={}));let O=class extends yt{constructor(){super(...arguments),this.capType=te.BUTT,this.hasSlicePlane=!1,this.hasPolygonOffset=!1,this.writeDepth=!1,this.draped=!1,this.stippleEnabled=!1,this.stippleOffColorEnabled=!1,this.stipplePreferContinuous=!0,this.roundJoins=!1,this.applyMarkerOffset=!1,this.vvSize=!1,this.vvColor=!1,this.vvOpacity=!1,this.falloffEnabled=!1,this.innerColorEnabled=!1,this.hasOccludees=!1,this.occluder=!1,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.wireframe=!1,this.discardInvisibleFragments=!1,this.objectAndLayerIdColorInstanced=!1,this.textureCoordinateType=At.None,this.emissionSource=Rt.None,this.occlusionPass=!1,this.hasVvInstancing=!0,this.hasSliceTranslatedView=!0}};g([S({count:te.COUNT})],O.prototype,"capType",void 0),g([S()],O.prototype,"hasSlicePlane",void 0),g([S()],O.prototype,"hasPolygonOffset",void 0),g([S()],O.prototype,"writeDepth",void 0),g([S()],O.prototype,"draped",void 0),g([S()],O.prototype,"stippleEnabled",void 0),g([S()],O.prototype,"stippleOffColorEnabled",void 0),g([S()],O.prototype,"stipplePreferContinuous",void 0),g([S()],O.prototype,"roundJoins",void 0),g([S()],O.prototype,"applyMarkerOffset",void 0),g([S()],O.prototype,"vvSize",void 0),g([S()],O.prototype,"vvColor",void 0),g([S()],O.prototype,"vvOpacity",void 0),g([S()],O.prototype,"falloffEnabled",void 0),g([S()],O.prototype,"innerColorEnabled",void 0),g([S()],O.prototype,"hasOccludees",void 0),g([S()],O.prototype,"occluder",void 0),g([S()],O.prototype,"terrainDepthTest",void 0),g([S()],O.prototype,"cullAboveTerrain",void 0),g([S()],O.prototype,"wireframe",void 0),g([S()],O.prototype,"discardInvisibleFragments",void 0),g([S()],O.prototype,"objectAndLayerIdColorInstanced",void 0);const ue=1;function $t(t){const e=new Ti,{attributes:i,varyings:n,vertex:r,fragment:s}=e,{applyMarkerOffset:l,draped:o,output:a,capType:c,stippleEnabled:d,falloffEnabled:m,roundJoins:v,wireframe:f,innerColorEnabled:y}=t;e.include(bi),e.include(pn,t),e.include(vn,t),e.include(Ei,t);const E=l&&!o;E&&(r.uniforms.add(new M("markerScale",T=>T.markerScale)),e.include(yn,{space:ee.World})),Oi(r,t),r.uniforms.add(new yi("inverseProjectionMatrix",(T,u)=>u.camera.inverseProjectionMatrix),new Ai("nearFar",(T,u)=>u.camera.nearFar),new M("miterLimit",T=>T.join!=="miter"?0:T.miterLimit),new Ae("viewport",(T,u)=>u.camera.fullViewport)),r.constants.add("LARGE_HALF_FLOAT","float",65500),i.add(h.POSITION,"vec3"),i.add(h.PREVPOSITION,"vec3"),i.add(h.NEXTPOSITION,"vec3"),i.add(h.SUBDIVISIONFACTOR,"float"),i.add(h.UV0,"vec2"),n.add("vColor","vec4"),n.add("vpos","vec3"),n.add("vLineDistance","float"),n.add("vLineWidth","float");const A=t.terrainDepthTest&&a===J.Color;A&&n.add("depth","float");const F=d;F&&n.add("vLineSizeInv","float");const b=c===te.ROUND,$=d&&b,_=m||$;_&&n.add("vLineDistanceNorm","float"),b&&(n.add("vSegmentSDF","float"),n.add("vReverseSegmentSDF","float")),r.code.add(p`#define PERPENDICULAR(v) vec2(v.y, -v.x);
float interp(float ncp, vec4 a, vec4 b) {
return (-ncp - a.z) / (b.z - a.z);
}
vec2 rotate(vec2 v, float a) {
float s = sin(a);
float c = cos(a);
mat2 m = mat2(c, -s, s, c);
return m * v;
}`),r.code.add(p`vec4 projectAndScale(vec4 pos) {
vec4 posNdc = proj * pos;
posNdc.xy *= viewport.zw / posNdc.w;
return posNdc;
}`),r.code.add(p`
    void clipAndTransform(inout vec4 pos, inout vec4 prev, inout vec4 next, in bool isStartVertex) {
      float vnp = nearFar[0] * 0.99;

      if(pos.z > -nearFar[0]) {
        //current pos behind ncp --> we need to clip
        if (!isStartVertex) {
          if(prev.z < -nearFar[0]) {
            //previous in front of ncp
            pos = mix(prev, pos, interp(vnp, prev, pos));
            next = pos;
          } else {
            pos = vec4(0.0, 0.0, 0.0, 1.0);
          }
        } else {
          if(next.z < -nearFar[0]) {
            //next in front of ncp
            pos = mix(pos, next, interp(vnp, pos, next));
            prev = pos;
          } else {
            pos = vec4(0.0, 0.0, 0.0, 1.0);
          }
        }
      } else {
        //current position visible
        if (prev.z > -nearFar[0]) {
          //previous behind ncp
          prev = mix(pos, prev, interp(vnp, pos, prev));
        }
        if (next.z > -nearFar[0]) {
          //next behind ncp
          next = mix(next, pos, interp(vnp, next, pos));
        }
      }

      ${A?"depth = pos.z;":""}

      pos = projectAndScale(pos);
      next = projectAndScale(next);
      prev = projectAndScale(prev);
    }
  `),Je(r),r.constants.add("aaWidth","float",d?0:1).main.add(p`
    // unpack values from uv0.y
    bool isStartVertex = abs(abs(uv0.y)-3.0) == 1.0;

    float coverage = 1.0;

    // Check for special value of uv0.y which is used by the Renderer when graphics
    // are removed before the VBO is recompacted. If this is the case, then we just
    // project outside of clip space.
    if (uv0.y == 0.0) {
      // Project out of clip space
      gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
    }
    else {
      bool isJoin = abs(uv0.y) < 3.0;
      float lineSize = getSize();

      if (lineSize < 1.0) {
        coverage = lineSize; // convert sub-pixel coverage to alpha
        lineSize = 1.0;
      }
      lineSize += aaWidth;

      float lineWidth = lineSize * pixelRatio;
      vLineWidth = lineWidth;
      ${F?p`vLineSizeInv = 1.0 / lineSize;`:""}

      vec4 pos  = view * vec4(position, 1.0);
      vec4 prev = view * vec4(prevPosition, 1.0);
      vec4 next = view * vec4(nextPosition, 1.0);
  `),E&&r.main.add(p`vec4 other = isStartVertex ? next : prev;
bool markersHidden = areWorldMarkersHidden(pos, other);
if(!isJoin && !markersHidden) {
pos.xyz += normalize(other.xyz - pos.xyz) * getWorldMarkerSize(pos) * 0.5;
}`),r.main.add(p`clipAndTransform(pos, prev, next, isStartVertex);
vec2 left = (pos.xy - prev.xy);
vec2 right = (next.xy - pos.xy);
float leftLen = length(left);
float rightLen = length(right);`),(d||b)&&r.main.add(p`
      float isEndVertex = float(!isStartVertex);
      vec2 segmentOrigin = mix(pos.xy, prev.xy, isEndVertex);
      vec2 segment = mix(right, left, isEndVertex);
      ${b?p`vec2 segmentEnd = mix(next.xy, pos.xy, isEndVertex);`:""}
    `),r.main.add(p`left = (leftLen > 0.001) ? left/leftLen : vec2(0.0, 0.0);
right = (rightLen > 0.001) ? right/rightLen : vec2(0.0, 0.0);
vec2 capDisplacementDir = vec2(0, 0);
vec2 joinDisplacementDir = vec2(0, 0);
float displacementLen = lineWidth;
if (isJoin) {
bool isOutside = (left.x * right.y - left.y * right.x) * uv0.y > 0.0;
joinDisplacementDir = normalize(left + right);
joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);
if (leftLen > 0.001 && rightLen > 0.001) {
float nDotSeg = dot(joinDisplacementDir, left);
displacementLen /= length(nDotSeg * left - joinDisplacementDir);
if (!isOutside) {
displacementLen = min(displacementLen, min(leftLen, rightLen)/abs(nDotSeg));
}
}
if (isOutside && (displacementLen > miterLimit * lineWidth)) {`),v?r.main.add(p`
        vec2 startDir = leftLen < 0.001 ? right : left;
        startDir = PERPENDICULAR(startDir);

        vec2 endDir = rightLen < 0.001 ? left : right;
        endDir = PERPENDICULAR(endDir);

        float factor = ${d?p`min(1.0, subdivisionFactor * ${p.float((ue+2)/(ue+1))})`:p`subdivisionFactor`};

        float rotationAngle = acos(clamp(dot(startDir, endDir), -1.0, 1.0));
        joinDisplacementDir = rotate(startDir, -sign(uv0.y) * factor * rotationAngle);
      `):r.main.add(p`if (leftLen < 0.001) {
joinDisplacementDir = right;
}
else if (rightLen < 0.001) {
joinDisplacementDir = left;
}
else {
joinDisplacementDir = (isStartVertex || subdivisionFactor > 0.0) ? right : left;
}
joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);`);const D=c!==te.BUTT;return r.main.add(p`
        displacementLen = lineWidth;
      }
    } else {
      // CAP handling ---------------------------------------------------
      joinDisplacementDir = isStartVertex ? right : left;
      joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);

      ${D?p`capDisplacementDir = isStartVertex ? -right : left;`:""}
    }
  `),r.main.add(p`
    // Displacement (in pixels) caused by join/or cap
    vec2 dpos = joinDisplacementDir * sign(uv0.y) * displacementLen + capDisplacementDir * displacementLen;
    float lineDistNorm = sign(uv0.y) * pos.w;

    vLineDistance =  lineWidth * lineDistNorm;
    ${_?p`vLineDistanceNorm = lineDistNorm;`:""}

    pos.xy += dpos;
  `),b&&r.main.add(p`vec2 segmentDir = normalize(segment);
vSegmentSDF = (isJoin && isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentOrigin, segmentDir) * pos.w) ;
vReverseSegmentSDF = (isJoin && !isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentEnd, -segmentDir) * pos.w);`),d&&(o?r.uniforms.add(new M("worldToScreenRatio",(T,u)=>1/u.screenToPCSRatio)):r.main.add(p`vec3 segmentCenter = mix((nextPosition + position) * 0.5, (position + prevPosition) * 0.5, isEndVertex);
float worldToScreenRatio = computeWorldToScreenRatio(segmentCenter);`),r.main.add(p`float segmentLengthScreenDouble = length(segment);
float segmentLengthScreen = segmentLengthScreenDouble * 0.5;
float discreteWorldToScreenRatio = discretizeWorldToScreenRatio(worldToScreenRatio);
float segmentLengthRender = length(mix(nextPosition - position, position - prevPosition, isEndVertex));
vStipplePatternStretch = worldToScreenRatio / discreteWorldToScreenRatio;`),o?r.main.add(p`float segmentLengthPseudoScreen = segmentLengthScreen / pixelRatio * discreteWorldToScreenRatio / worldToScreenRatio;
float startPseudoScreen = uv0.x * discreteWorldToScreenRatio - mix(0.0, segmentLengthPseudoScreen, isEndVertex);`):r.main.add(p`float startPseudoScreen = mix(uv0.x, uv0.x - segmentLengthRender, isEndVertex) * discreteWorldToScreenRatio;
float segmentLengthPseudoScreen = segmentLengthRender * discreteWorldToScreenRatio;`),r.uniforms.add(new M("stipplePatternPixelSize",T=>Pt(T))),r.main.add(p`float patternLength = lineSize * stipplePatternPixelSize;
vStippleDistanceLimits = computeStippleDistanceLimits(startPseudoScreen, segmentLengthPseudoScreen, segmentLengthScreen, patternLength);
vStippleDistance = mix(vStippleDistanceLimits.x, vStippleDistanceLimits.y, isEndVertex);
if (segmentLengthScreenDouble >= 0.001) {
vec2 stippleDisplacement = pos.xy - segmentOrigin;
float stippleDisplacementFactor = dot(segment, stippleDisplacement) / (segmentLengthScreenDouble * segmentLengthScreenDouble);
vStippleDistance += (stippleDisplacementFactor - isEndVertex) * (vStippleDistanceLimits.y - vStippleDistanceLimits.x);
}
vStippleDistanceLimits *= pos.w;
vStippleDistance *= pos.w;
vStippleDistanceLimits = isJoin ?
vStippleDistanceLimits :
isStartVertex ?
vec2(-1e34, vStippleDistanceLimits.y) :
vec2(vStippleDistanceLimits.x, 1e34);`)),r.main.add(p`
      // Convert back into NDC
      pos.xy = (pos.xy / viewport.zw) * pos.w;

      vColor = getColor();
      vColor.a *= coverage;

      ${f&&!o?"pos.z -= 0.001 * pos.w;":""}

      // transform final position to camera space for slicing
      vpos = (inverseProjectionMatrix * pos).xyz;
      gl_Position = pos;
      forwardObjectAndLayerIdColor();
    }`),A&&e.include(Ri,t),e.include(xi,t),e.include(Ci,t),s.include(Di),s.main.add(p`
    discardBySlice(vpos);
    ${A?"terrainDepthTest(depth);":""}
  `),f?s.main.add(p`vec4 finalColor = vec4(1.0, 0.0, 1.0, 1.0);`):(b&&s.main.add(p`
        float sdf = min(vSegmentSDF, vReverseSegmentSDF);
        vec2 fragmentPosition = vec2(
          min(sdf, 0.0),
          vLineDistance
        ) * gl_FragCoord.w;

        float fragmentRadius = length(fragmentPosition);
        float fragmentCapSDF = (fragmentRadius - vLineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
        float capCoverage = clamp(0.5 - fragmentCapSDF, 0.0, 1.0);

        if (capCoverage < ${p.float(ce)}) {
          discard;
        }
      `),$?s.main.add(p`
      vec2 stipplePosition = vec2(
        min(getStippleSDF() * 2.0 - 1.0, 0.0),
        vLineDistanceNorm * gl_FragCoord.w
      );
      float stippleRadius = length(stipplePosition * vLineWidth);
      float stippleCapSDF = (stippleRadius - vLineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
      float stippleCoverage = clamp(0.5 - stippleCapSDF, 0.0, 1.0);
      float stippleAlpha = step(${p.float(ce)}, stippleCoverage);
      `):s.main.add(p`float stippleAlpha = getStippleAlpha();`),a!==J.ObjectAndLayerIdColor&&s.main.add(p`discardByStippleAlpha(stippleAlpha, ${p.float(ce)});`),s.uniforms.add(new Ae("intrinsicColor",T=>T.color)),s.main.add(p`vec4 color = intrinsicColor * vColor;`),y&&(s.uniforms.add(new Ae("innerColor",T=>T.innerColor??T.color),new M("innerWidth",(T,u)=>T.innerWidth*u.camera.pixelRatio)),s.main.add(p`float distToInner = abs(vLineDistance * gl_FragCoord.w) - innerWidth;
float innerAA = clamp(0.5 - distToInner, 0.0, 1.0);
float innerAlpha = innerColor.a + color.a * (1.0 - innerColor.a);
color = mix(color, vec4(innerColor.rgb, innerAlpha), innerAA);`)),s.main.add(p`vec4 finalColor = blendStipple(color, stippleAlpha);`),m&&(s.uniforms.add(new M("falloff",T=>T.falloff)),s.main.add(p`finalColor.a *= pow(max(0.0, 1.0 - abs(vLineDistanceNorm * gl_FragCoord.w)), falloff);`)),d||s.main.add(p`float featherStartDistance = max(vLineWidth - 2.0, 0.0);
float value = abs(vLineDistance) * gl_FragCoord.w;
float feather = (value - featherStartDistance) / (vLineWidth - featherStartDistance);
finalColor.a *= 1.0 - clamp(feather, 0.0, 1.0);`)),s.main.add(p`outputColorHighlightOID(finalColor, vpos);`),e}const An=Object.freeze(Object.defineProperty({__proto__:null,build:$t,ribbonlineNumRoundJoinSubdivisions:ue},Symbol.toStringTag,{value:"Module"}));let Rn=class extends Li{constructor(e,i,n){super(e,i,new Pi(An,()=>ei(()=>Promise.resolve().then(()=>Qn),void 0)),n,wt),this.primitiveType=i.wireframe?et.LINES:et.TRIANGLE_STRIP}_makePipelineState(e,i){const{oitPass:n,output:r,hasOccludees:s,hasPolygonOffset:l}=e,o=n===rt.NONE,a=n===rt.FrontFace;return be({blending:e.output===J.Color?Ii(n):null,depthTest:{func:$i(n)},depthWrite:wi(e),drawBuffers:r===J.Depth?{buffers:[ge.NONE]}:Ni(n,r),colorWrite:we,stencilWrite:s?st:null,stencilTest:s?i?at:Ui:null,polygonOffset:o||a?l?gt:null:zi})}initializePipeline(e){if(e.occluder){const i=e.hasPolygonOffset?gt:null;this._occluderPipelineTransparent=be({blending:ct,polygonOffset:i,depthTest:ot,depthWrite:null,colorWrite:we,stencilWrite:null,stencilTest:Fi,drawBuffers:e.output===J.Depth?{buffers:[ge.NONE]}:null}),this._occluderPipelineOpaque=be({blending:ct,polygonOffset:i,depthTest:ot,depthWrite:null,colorWrite:we,stencilWrite:ji,stencilTest:Mi,drawBuffers:e.output===J.Depth?{buffers:[ge.NONE]}:null}),this._occluderPipelineMaskWrite=be({blending:null,polygonOffset:i,depthTest:Wi,depthWrite:null,colorWrite:null,stencilWrite:st,stencilTest:at,drawBuffers:e.output===J.Depth?{buffers:[ge.NONE]}:null})}return this._occludeePipeline=this._makePipelineState(e,!0),this._makePipelineState(e,!1)}getPipeline(e,i){if(e)return this._occludeePipeline;switch(i){case k.TRANSPARENT_OCCLUDER_MATERIAL:return this._occluderPipelineTransparent??super.getPipeline();case k.OCCLUDER_MATERIAL:return this._occluderPipelineOpaque??super.getPipeline();default:return this._occluderPipelineMaskWrite??super.getPipeline()}}};const gt={factor:0,units:-4},wt=new Map([[h.POSITION,0],[h.PREVPOSITION,1],[h.NEXTPOSITION,2],[h.SUBDIVISIONFACTOR,3],[h.UV0,4],[h.COLOR,5],[h.COLORFEATUREATTRIBUTE,5],[h.SIZE,6],[h.SIZEFEATUREATTRIBUTE,6],[h.OPACITYFEATUREATTRIBUTE,7],[h.OBJECTANDLAYERIDCOLOR,8]]);var N;(function(t){t[t.LEFT_JOIN_START=-2]="LEFT_JOIN_START",t[t.LEFT_JOIN_END=-1]="LEFT_JOIN_END",t[t.LEFT_CAP_START=-4]="LEFT_CAP_START",t[t.LEFT_CAP_END=-5]="LEFT_CAP_END",t[t.RIGHT_JOIN_START=2]="RIGHT_JOIN_START",t[t.RIGHT_JOIN_END=1]="RIGHT_JOIN_END",t[t.RIGHT_CAP_START=4]="RIGHT_CAP_START",t[t.RIGHT_CAP_END=5]="RIGHT_CAP_END"})(N||(N={}));class xn extends ti{constructor(e){super(e,Dn),this._configuration=new O,this.vertexAttributeLocations=wt,this.produces=new Map([[k.OPAQUE_MATERIAL,i=>Ki(i)||en(i)&&this.parameters.renderOccluded===ne.OccludeAndTransparentStencil],[k.OPAQUE_MATERIAL_WITHOUT_NORMALS,i=>tn(i)],[k.OCCLUDER_MATERIAL,i=>lt(i)&&this.parameters.renderOccluded===ne.OccludeAndTransparentStencil],[k.TRANSPARENT_OCCLUDER_MATERIAL,i=>lt(i)&&this.parameters.renderOccluded===ne.OccludeAndTransparentStencil],[k.TRANSPARENT_MATERIAL,i=>i===J.Color&&this.parameters.writeDepth&&this.parameters.renderOccluded!==ne.OccludeAndTransparentStencil],[k.TRANSPARENT_MATERIAL_WITHOUT_DEPTH,i=>i===J.Color&&!this.parameters.writeDepth&&this.parameters.renderOccluded!==ne.OccludeAndTransparentStencil],[k.DRAPED_MATERIAL,i=>nn(i)]])}getConfiguration(e,i){this._configuration.output=e,this._configuration.oitPass=i.oitPass,this._configuration.draped=i.slot===k.DRAPED_MATERIAL;const n=this.parameters.stipplePattern!=null&&e!==J.Highlight;return this._configuration.stippleEnabled=n,this._configuration.stippleOffColorEnabled=n&&this.parameters.stippleOffColor!=null,this._configuration.stipplePreferContinuous=n&&this.parameters.stipplePreferContinuous,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.roundJoins=this.parameters.join==="round",this._configuration.capType=this.parameters.cap,this._configuration.applyMarkerOffset=this.parameters.markerParameters!=null&&Pn(this.parameters.markerParameters),this._configuration.hasPolygonOffset=this.parameters.hasPolygonOffset,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.vvOpacity=!!this.parameters.vvOpacity,this._configuration.innerColorEnabled=this.parameters.innerWidth>0&&this.parameters.innerColor!=null,this._configuration.falloffEnabled=this.parameters.falloff>0,this._configuration.hasOccludees=i.hasOccludees,this._configuration.occluder=this.parameters.renderOccluded===ne.OccludeAndTransparentStencil,this._configuration.terrainDepthTest=i.terrainDepthTest,this._configuration.cullAboveTerrain=i.cullAboveTerrain,this._configuration.wireframe=this.parameters.wireframe,this._configuration}get visible(){var e;return this.parameters.color[3]>=ce||this.parameters.stipplePattern!=null&&(((e=this.parameters.stippleOffColor)==null?void 0:e[3])??0)>ce}intersectDraped(e,i,n,r,s,l){if(!n.options.selectionMode)return;const o=e.attributes.get(h.POSITION).data,a=e.attributes.get(h.SIZE);let c=this.parameters.width;if(this.parameters.vvSize){const E=e.attributes.get(h.SIZEFEATUREATTRIBUTE).data[0];c*=Pe(this.parameters.vvSize.offset[0]+E*this.parameters.vvSize.factor[0],this.parameters.vvSize.minSize[0],this.parameters.vvSize.maxSize[0])}else a&&(c*=a.data[0]);const d=r[0],m=r[1],v=(c/2+4)*e.screenToWorldRatio;let f=Number.MAX_VALUE,y=0;for(let E=0;E<o.length-5;E+=3){const A=o[E],F=o[E+1],b=d-A,$=m-F,_=o[E+3]-A,D=o[E+4]-F,T=Pe((_*b+D*$)/(_*_+D*D),0,1),u=_*T-b,ie=D*T-$,L=u*u+ie*ie;L<f&&(f=L,y=E/3)}f<v*v&&s(l.dist,l.normal,y,!1)}intersect(e,i,n,r,s,l){if(!n.options.selectionMode||!e.visible)return;if(!Ji(i))return void Ot.getLogger("esri.views.3d.webgl-engine.materials.RibbonLineMaterial").error("intersection assumes a translation-only matrix");const o=e.attributes,a=o.get(h.POSITION).data;let c=this.parameters.width;if(this.parameters.vvSize){const b=o.get(h.SIZEFEATUREATTRIBUTE).data[0];c*=Pe(this.parameters.vvSize.offset[0]+b*this.parameters.vvSize.factor[0],this.parameters.vvSize.minSize[0],this.parameters.vvSize.maxSize[0])}else o.has(h.SIZE)&&(c*=o.get(h.SIZE).data[0]);const d=n.camera,m=In;ii(m,n.point);const v=c*d.pixelRatio/2+4*d.pixelRatio;H(le[0],m[0]-v,m[1]+v,0),H(le[1],m[0]+v,m[1]+v,0),H(le[2],m[0]+v,m[1]-v,0),H(le[3],m[0]-v,m[1]-v,0);for(let b=0;b<4;b++)if(!d.unprojectFromRenderScreen(le[b],Y[b]))return;Se(d.eye,Y[0],Y[1],Ue),Se(d.eye,Y[1],Y[2],ze),Se(d.eye,Y[2],Y[3],Fe),Se(d.eye,Y[3],Y[0],je);let f=Number.MAX_VALUE,y=0;const E=Nt(this.parameters,o)?a.length-2:a.length-5;for(let b=0;b<E;b+=3){P[0]=a[b]+i[12],P[1]=a[b+1]+i[13],P[2]=a[b+2]+i[14];const $=(b+3)%a.length;if(I[0]=a[$]+i[12],I[1]=a[$+1]+i[13],I[2]=a[$+2]+i[14],V(Ue,P)<0&&V(Ue,I)<0||V(ze,P)<0&&V(ze,I)<0||V(Fe,P)<0&&V(Fe,I)<0||V(je,P)<0&&V(je,I)<0)continue;if(d.projectToRenderScreen(P,Q),d.projectToRenderScreen(I,K),Q[2]<0&&K[2]>0){de(B,P,I);const D=d.frustum,T=-V(D[Te.NEAR],P)/tt(B,it(D[Te.NEAR]));Ie(B,B,T),Re(P,P,B),d.projectToRenderScreen(P,Q)}else if(Q[2]>0&&K[2]<0){de(B,I,P);const D=d.frustum,T=-V(D[Te.NEAR],I)/tt(B,it(D[Te.NEAR]));Ie(B,B,T),Re(I,I,B),d.projectToRenderScreen(I,K)}else if(Q[2]<0&&K[2]<0)continue;Q[2]=0,K[2]=0;const _=ni($e(Q,K,Tt),m);_<f&&(f=_,q(St,P),q(_t,I),y=b/3)}const A=n.rayBegin,F=n.rayEnd;if(f<v*v){let b=Number.MAX_VALUE;if(ri($e(St,_t,Tt),$e(A,F,$n),X)){de(X,X,A);const $=si(X);Ie(X,X,1/$),b=$/He(A,F)}l(b,X,y,!1)}}get _layout(){const e=Qi().vec3f(h.POSITION).vec3f(h.PREVPOSITION).vec3f(h.NEXTPOSITION).f32(h.SUBDIVISIONFACTOR).vec2f(h.UV0);return this.parameters.vvSize?e.f32(h.SIZEFEATUREATTRIBUTE):e.f32(h.SIZE),this.parameters.vvColor?e.f32(h.COLORFEATUREATTRIBUTE):e.vec4f(h.COLOR),this.parameters.vvOpacity&&e.f32(h.OPACITYFEATUREATTRIBUTE),Be()&&e.vec4u8(h.OBJECTANDLAYERIDCOLOR),e}createBufferWriter(){return new Ln(this._layout,this.parameters)}createGLMaterial(e){return new Cn(e)}validateParameters(e){e.join!=="miter"&&(e.miterLimit=0),e.markerParameters!=null&&(e.markerScale=e.markerParameters.width/e.width)}}class Cn extends Vi{constructor(){super(...arguments),this._stipplePattern=null}dispose(){super.dispose(),this._stippleTextures.release(this._stipplePattern),this._stipplePattern=null}beginSlot(e){const i=this._material.parameters.stipplePattern;return this._stipplePattern!==i&&(this._material.setParameters({stippleTexture:this._stippleTextures.swap(i,this._stipplePattern)}),this._stipplePattern=i),this.acquireTechnique(Rn,e)}}class Dn extends Bi{constructor(){super(...arguments),this.width=0,this.color=ai,this.join="miter",this.cap=te.BUTT,this.miterLimit=5,this.writeDepth=!0,this.hasPolygonOffset=!1,this.stippleTexture=null,this.stipplePreferContinuous=!0,this.markerParameters=null,this.markerScale=1,this.hasSlicePlane=!1,this.vvFastUpdate=!1,this.isClosed=!1,this.falloff=0,this.innerWidth=0,this.wireframe=!1}get transparent(){var e;return this.color[3]<1||this.stipplePattern!=null&&(((e=this.stippleOffColor)==null?void 0:e[3])??0)<1}}class Ln{constructor(e,i){this.vertexBufferLayout=e,this._parameters=i,this.numJoinSubdivisions=0;const n=i.stipplePattern?1:0;switch(this._parameters.join){case"miter":case"bevel":this.numJoinSubdivisions=n;break;case"round":this.numJoinSubdivisions=ue+n}}_isClosed(e){return Nt(this._parameters,e)}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){const n=e.get(h.POSITION).indices.length/2+1,r=this._isClosed(e);let s=r?2:2*2;return s+=((r?n:n-1)-(r?0:1))*(2*this.numJoinSubdivisions+4),s+=2,this._parameters.wireframe&&(s=2+4*(s-2)),s}write(e,i,n,r,s,l){var Ze,Ye,qe;const o=wn,a=Nn,c=Un,d=n.get(h.POSITION),m=d.indices,v=d.data.length/3,f=(Ze=n.get(h.DISTANCETOSTART))==null?void 0:Ze.data;m&&m.length!==2*(v-1)&&console.warn("RibbonLineMaterial does not support indices");const y=((Ye=n.get(h.SIZEFEATUREATTRIBUTE))==null?void 0:Ye.data[0])??((qe=n.get(h.SIZE))==null?void 0:qe.data[0])??1;let E=[1,1,1,1],A=0;const F=this.vertexBufferLayout.fields.has(h.COLORFEATUREATTRIBUTE);F?A=n.get(h.COLORFEATUREATTRIBUTE).data[0]:n.has(h.COLOR)&&(E=n.get(h.COLOR).data);const b=this.vertexBufferLayout.fields.has(h.OPACITYFEATUREATTRIBUTE),$=b?n.get(h.OPACITYFEATUREATTRIBUTE).data[0]:0,_=new Float32Array(s.buffer),D=Be()?new Uint8Array(s.buffer):null,T=this.vertexBufferLayout.stride/4;let u=l*T;const ie=u;let L=0;const De=f?(R,W,Z)=>L=f[Z]:(R,W,Z)=>L+=He(R,W),z=(R,W,Z,oe,me,jt,Mt)=>{if(_[u++]=W[0],_[u++]=W[1],_[u++]=W[2],_[u++]=R[0],_[u++]=R[1],_[u++]=R[2],_[u++]=Z[0],_[u++]=Z[1],_[u++]=Z[2],_[u++]=oe,_[u++]=Mt,_[u++]=me,_[u++]=y,F)_[u++]=A;else{const ve=Math.min(4*jt,E.length-4);_[u++]=E[ve],_[u++]=E[ve+1],_[u++]=E[ve+2],_[u++]=E[ve+3]}b&&(_[u++]=$),Be()&&(r&&(D[4*u]=r[0],D[4*u+1]=r[1],D[4*u+2]=r[2],D[4*u+3]=r[3]),u++)};u+=T,H(a,d.data[0],d.data[1],d.data[2]),e&&G(a,a,e);const fe=this._isClosed(n);if(fe){const R=d.data.length-3;H(o,d.data[R],d.data[R+1],d.data[R+2]),e&&G(o,o,e)}else H(c,d.data[3],d.data[4],d.data[5]),e&&G(c,c,e),z(a,a,c,1,N.LEFT_CAP_START,0,0),z(a,a,c,1,N.RIGHT_CAP_START,0,0),q(o,a),q(a,c);const Le=fe?0:1,ae=fe?v:v-1;for(let R=Le;R<ae;R++){const W=(R+1)%v*3;H(c,d.data[W],d.data[W+1],d.data[W+2]),e&&G(c,c,e),De(o,a,R),z(o,a,c,0,N.LEFT_JOIN_END,R,L),z(o,a,c,0,N.RIGHT_JOIN_END,R,L);const Z=this.numJoinSubdivisions;for(let oe=0;oe<Z;++oe){const me=(oe+1)/(Z+1);z(o,a,c,me,N.LEFT_JOIN_END,R,L),z(o,a,c,me,N.RIGHT_JOIN_END,R,L)}z(o,a,c,1,N.LEFT_JOIN_START,R,L),z(o,a,c,1,N.RIGHT_JOIN_START,R,L),q(o,a),q(a,c)}fe?(H(c,d.data[3],d.data[4],d.data[5]),e&&G(c,c,e),L=De(o,a,ae),z(o,a,c,0,N.LEFT_JOIN_END,Le,L),z(o,a,c,0,N.RIGHT_JOIN_END,Le,L)):(L=De(o,a,ae),z(o,a,a,0,N.LEFT_CAP_END,ae,L),z(o,a,a,0,N.RIGHT_CAP_END,ae,L)),Ne(_,ie+T,_,ie,T),u=Ne(_,u-T,_,u,T),this._parameters.wireframe&&this._addWireframeVertices(s,ie,u,T)}_addWireframeVertices(e,i,n,r){const s=new Float32Array(e.buffer,n*Float32Array.BYTES_PER_ELEMENT),l=new Float32Array(e.buffer,i*Float32Array.BYTES_PER_ELEMENT,n-i);let o=0;const a=c=>o=Ne(l,c,s,o,r);for(let c=0;c<l.length-1;c+=2*r)a(c),a(c+2*r),a(c+1*r),a(c+2*r),a(c+1*r),a(c+3*r)}}function Ne(t,e,i,n,r){for(let s=0;s<r;s++)i[n++]=t[e++];return n}function Nt(t,e){return t.isClosed?e.get(h.POSITION).indices.length>2:!1}function Pn(t){return t.anchor===he.Tip&&t.hideOnShortSegments&&t.placement==="begin-end"&&t.worldSpace}const P=x(),I=x(),B=x(),X=x(),In=x(),Q=re(),K=re(),St=x(),_t=x(),Tt=Et(),$n=Et(),wn=x(),Nn=x(),Un=x(),le=[re(),re(),re(),re()],Y=[x(),x(),x(),x()],Ue=Ce(),ze=Ce(),Fe=Ce(),je=Ce();class _r{constructor(e){this._originSR=e,this._rootOriginId="root/"+oi(),this._origins=new Map,this._objects=new Map,this._gridSize=5e5}getOrigin(e){const i=this._origins.get(this._rootOriginId);if(i==null){const d=mt(e[0]+Math.random()-.5,e[1]+Math.random()-.5,e[2]+Math.random()-.5,this._rootOriginId);return this._origins.set(this._rootOriginId,d),d}const n=this._gridSize,r=Math.round(e[0]/n),s=Math.round(e[1]/n),l=Math.round(e[2]/n),o=`${r}/${s}/${l}`;let a=this._origins.get(o);const c=.5*n;if(de(C,e,i.vec3),C[0]=Math.abs(C[0]),C[1]=Math.abs(C[1]),C[2]=Math.abs(C[2]),C[0]<c&&C[1]<c&&C[2]<c){if(a){const d=Math.max(...C);if(de(C,e,a.vec3),C[0]=Math.abs(C[0]),C[1]=Math.abs(C[1]),C[2]=Math.abs(C[2]),Math.max(...C)<d)return a}return i}return a||(a=mt(r*n,s*n,l*n,o),this._origins.set(o,a)),a}_drawOriginBox(e,i=ci(1,1,0,1)){const n=window.view,r=n._stage,s=i.toString();if(!this._objects.has(s)){this._material=new xn({width:2,color:i}),r.add(this._material);const f=new cn(r,{pickable:!1}),y=new sn({castShadow:!1});r.add(y),f.add(y),this._objects.set(s,y)}const l=this._objects.get(s),o=[0,1,5,4,0,2,1,7,6,2,0,1,3,7,5,4,6,2,0],a=o.length,c=new Array(3*a),d=new Array,m=.5*this._gridSize;for(let f=0;f<a;f++)c[3*f]=e[0]+(1&o[f]?m:-m),c[3*f+1]=e[1]+(2&o[f]?m:-m),c[3*f+2]=e[2]+(4&o[f]?m:-m),f>0&&d.push(f-1,f);Ve(c,this._originSR,0,c,n.renderSpatialReference,0,a);const v=new ki(this._material,[[h.POSITION,new li(c,d,3,!0)]],null,Ge.Line);r.add(v),l.addGeometry(v)}get test(){}}const C=x();function Tr(t,e,i,n,r,s,l,o,a,c,d){const m=kn[d.mode];let v,f,y=0;if(Ve(t,e,i,n,a.spatialReference,r,o))return m!=null&&m.requiresAlignment(d)?(y=m.applyElevationAlignmentBuffer(n,r,s,l,o,a,c,d),v=s,f=l):(v=n,f=r),Ve(v,a.spatialReference,f,s,c.spatialReference,l,o)?y:void 0}function Ut(t,e,i,n,r){const s=(xt(t)?t.z:Ct(t)?t.array[t.offset+2]:t[2])||0;switch(i.mode){case"on-the-ground":{const l=Ee(e,t,"ground")??0;return r.verticalDistanceToGround=0,r.sampledElevation=l,void(r.z=l)}case"relative-to-ground":{const l=Ee(e,t,"ground")??0,o=i.geometryZWithOffset(s,n);return r.verticalDistanceToGround=o,r.sampledElevation=l,void(r.z=o+l)}case"relative-to-scene":{const l=Ee(e,t,"scene")??0,o=i.geometryZWithOffset(s,n);return r.verticalDistanceToGround=o,r.sampledElevation=l,void(r.z=o+l)}case"absolute-height":{const l=i.geometryZWithOffset(s,n),o=Ee(e,t,"ground")??0;return r.verticalDistanceToGround=l-o,r.sampledElevation=o,void(r.z=l)}default:return void(r.z=0)}}function br(t,e,i,n){return Ut(t,e,i,n,se),se.z}function Er(t,e,i){return e==="on-the-ground"&&i==="on-the-ground"?t.staysOnTheGround:e===i||e!=="on-the-ground"&&i!=="on-the-ground"?e==null||i==null?t.definedChanged:ke.UPDATE:t.onTheGroundChanged}function Or(t){return t==="relative-to-ground"||t==="relative-to-scene"}function yr(t){return t!=="absolute-height"}function Ar(t,e,i,n,r){Ut(e,i,r,n,se),zn(t,se.verticalDistanceToGround);const s=se.sampledElevation,l=Me(Gn,t.transformation);return Oe[0]=e.x,Oe[1]=e.y,Oe[2]=se.z,di(e.spatialReference,Oe,l,n.spatialReference)?t.transformation=l:console.warn("Could not locate symbol object properly, it might be misplaced"),s}function zn(t,e){for(let i=0;i<t.geometries.length;++i){const n=t.geometries[i].getMutableAttribute(h.CENTEROFFSETANDDISTANCE);n&&n.data[3]!==e&&(n.data[3]=e,t.geometryVertexAttributeUpdated(t.geometries[i],h.CENTEROFFSETANDDISTANCE))}}function Fn(t,e,i,n,r,s){let l=0;const o=s.spatialReference;e*=3,n*=3;for(let a=0;a<r;++a){const c=t[e],d=t[e+1],m=t[e+2],v=s.getElevation(c,d,m,o,"ground")??0;l+=v,i[n]=c,i[n+1]=d,i[n+2]=v,e+=3,n+=3}return l/r}function jn(t,e,i,n,r,s,l,o){let a=0;const c=o.calculateOffsetRenderUnits(l),d=o.featureExpressionInfoContext,m=s.spatialReference;e*=3,n*=3;for(let v=0;v<r;++v){const f=t[e],y=t[e+1],E=t[e+2],A=s.getElevation(f,y,E,m,"ground")??0;a+=A,i[n]=f,i[n+1]=y,i[n+2]=d==null?E+A+c:A+c,e+=3,n+=3}return a/r}function Mn(t,e,i,n,r,s,l,o){let a=0;const c=o.calculateOffsetRenderUnits(l),d=o.featureExpressionInfoContext,m=s.spatialReference;e*=3,n*=3;for(let v=0;v<r;++v){const f=t[e],y=t[e+1],E=t[e+2],A=s.getElevation(f,y,E,m,"scene")??0;a+=A,i[n]=f,i[n+1]=y,i[n+2]=d==null?E+A+c:A+c,e+=3,n+=3}return a/r}function Wn(t){const e=t.meterUnitOffset,i=t.featureExpressionInfoContext;return e!==0||i!=null}function Vn(t,e,i,n,r,s,l,o){const a=o.calculateOffsetRenderUnits(l),c=o.featureExpressionInfoContext;e*=3,n*=3;for(let d=0;d<r;++d){const m=t[e],v=t[e+1],f=t[e+2];i[n]=m,i[n+1]=v,i[n+2]=c==null?f+a:a,e+=3,n+=3}return 0}class Bn{constructor(){this.verticalDistanceToGround=0,this.sampledElevation=0,this.z=0}}var ke;(function(t){t[t.NONE=0]="NONE",t[t.UPDATE=1]="UPDATE",t[t.RECREATE=2]="RECREATE"})(ke||(ke={}));const kn={"absolute-height":{applyElevationAlignmentBuffer:Vn,requiresAlignment:Wn},"on-the-ground":{applyElevationAlignmentBuffer:Fn,requiresAlignment:()=>!0},"relative-to-ground":{applyElevationAlignmentBuffer:jn,requiresAlignment:()=>!0},"relative-to-scene":{applyElevationAlignmentBuffer:Mn,requiresAlignment:()=>!0}},Gn=ye(),se=new Bn,Oe=x(),Hn=()=>Ot.getLogger("esri.views.3d.layers.graphics.featureExpressionInfoUtils");function Jn(t){return{cachedResult:t.cachedResult,arcade:t.arcade?{func:t.arcade.func,context:t.arcade.modules.arcadeUtils.createExecContext(null,{sr:t.arcade.context.spatialReference}),modules:t.arcade.modules}:null}}async function Rr(t,e,i,n){const r=t==null?void 0:t.expression;if(typeof r!="string")return null;const s=Xn(r);if(s!=null)return{cachedResult:s};const l=await pi();hi(i);const o=l.arcadeUtils,a=o.createSyntaxTree(r);return o.dependsOnView(a)?(n!=null&&n.error("Expressions containing '$view' are not supported on ElevationInfo"),{cachedResult:0}):{arcade:{func:o.createFunction(a),context:o.createExecContext(null,{sr:e}),modules:l}}}function Zn(t,e,i){return t.arcadeUtils.createFeature(e.attributes,e.geometry,i)}function Yn(t,e){if(t!=null&&!zt(t)){if(!e||!t.arcade)return void Hn().errorOncePerTick("Arcade support required but not provided");const i=e;i._geometry&&(i._geometry=rn(i._geometry)),t.arcade.modules.arcadeUtils.updateExecContext(t.arcade.context,e)}}function qn(t){if(t!=null){if(zt(t))return t.cachedResult;const e=t.arcade;let i=e==null?void 0:e.modules.arcadeUtils.executeFunction(e.func,e.context);return typeof i!="number"&&(t.cachedResult=0,i=0),i}return 0}function xr(t,e=!1){let i=t==null?void 0:t.featureExpressionInfo;const n=i==null?void 0:i.expression;return e||n==="0"||(i=null),i??null}const Cr={cachedResult:0};function zt(t){return t.cachedResult!=null}function Xn(t){return t==="0"?0:null}class Ft{constructor(){this._meterUnitOffset=0,this._renderUnitOffset=0,this._unit="meters",this._metersPerElevationInfoUnit=1,this._featureExpressionInfoContext=null,this.centerPointInElevationSR=null,this.mode=null}get featureExpressionInfoContext(){return this._featureExpressionInfoContext}get meterUnitOffset(){return this._meterUnitOffset}get unit(){return this._unit}set unit(e){this._unit=e,this._metersPerElevationInfoUnit=ui(e)}get requiresSampledElevationInfo(){return this.mode!=="absolute-height"}reset(){this.mode=null,this._meterUnitOffset=0,this._renderUnitOffset=0,this._featureExpressionInfoContext=null,this.unit="meters"}set offsetMeters(e){this._meterUnitOffset=e,this._renderUnitOffset=0}set offsetElevationInfoUnits(e){this._meterUnitOffset=e*this._metersPerElevationInfoUnit,this._renderUnitOffset=0}addOffsetRenderUnits(e){this._renderUnitOffset+=e}geometryZWithOffset(e,i){const n=this.calculateOffsetRenderUnits(i);return this.featureExpressionInfoContext!=null?n:e+n}calculateOffsetRenderUnits(e){let i=this._meterUnitOffset;const n=this.featureExpressionInfoContext;return n!=null&&(i+=qn(n)*this._metersPerElevationInfoUnit),i/e.unitInMeters+this._renderUnitOffset}setFromElevationInfo(e){this.mode=e.mode,this.unit=fi(e.unit)?e.unit:"meters",this.offsetElevationInfoUnits=e.offset??0}updateFeatureExpressionInfoContext(e,i,n){if(e==null)return void(this._featureExpressionInfoContext=null);const r=e==null?void 0:e.arcade;r&&i!=null&&n!=null?(this._featureExpressionInfoContext=Jn(e),Yn(this._featureExpressionInfoContext,Zn(r.modules,i,n))):this._featureExpressionInfoContext=e}static fromElevationInfo(e){const i=new Ft;return e!=null&&i.setFromElevationInfo(e),i}}const Qn=Object.freeze(Object.defineProperty({__proto__:null,build:$t,ribbonlineNumRoundJoinSubdivisions:ue},Symbol.toStringTag,{value:"Module"}));export{sn as A,It as B,xe as C,bn as D,zn as E,vr as F,w as G,Bn as R,xn as W,_r as _,pt as a,ht as b,Rr as c,xr as d,dt as e,Ut as f,Cr as g,ke as h,Or as i,cn as j,br as k,Yn as l,Er as m,Ee as n,Ft as o,Ar as p,yr as q,pr as r,Zn as s,mt as t,Tr as u,te as v,ee as w,pn as x,yn as y,he as z};
