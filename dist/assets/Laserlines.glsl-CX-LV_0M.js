import{Cb as e,Ml as t,Nl as n,Nu as r,Z as i,_t as a,al as o,c_ as s,fw as c,jl as l,kl as u,rl as d,vl as f,yl as p}from"./index-CZ4oMP1N.js";import{m,y as h}from"./plane-Bg1a5O73.js";import{n as g}from"./glsl-CQsgM67j.js";import{t as _}from"./Float3PassUniform-tY0I44AO.js";import{t as v}from"./FloatPassUniform-DkGcNskm.js";import{c as y}from"./lineSegment-BJ2rgalW.js";import{t as b}from"./ShaderBuilder-D3cV1oap.js";import{t as x}from"./ScreenSpacePass.glsl-DOjTinpP.js";import{t as S}from"./Laserline.glsl-Cz-61y4R.js";import{t as C}from"./Float2PassUniform-DUjW63UW.js";import{t as w}from"./Float3BindUniform-CTBiVhme.js";import{t as T}from"./Float4PassUniform-BlgtXzb0.js";import{t as E}from"./FloatBindUniform-DmTbQwNg.js";var D=c(6);function O(e){let n=new b;n.include(x),n.include(S,e);let r=n.fragment;if(e.lineVerticalPlaneEnabled||e.heightManifoldEnabled)if(r.uniforms.add(new v(`maxPixelDistance`,(t,n)=>e.heightManifoldEnabled?2*n.camera.computeScreenPixelSizeAt(t.heightManifoldTarget):2*n.camera.computeScreenPixelSizeAt(t.lineVerticalPlaneSegment.origin))),r.code.add(g`float planeDistancePixels(vec4 plane, vec3 pos) {
float dist = dot(plane.xyz, pos) + plane.w;
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}`),e.spherical){let e=(e,t,n)=>o(e,t.heightManifoldTarget,n.camera.viewMatrix),t=(e,t)=>o(e,[0,0,0],t.camera.viewMatrix);r.uniforms.add(new T(`heightManifoldOrigin`,(n,r)=>(e(I,n,r),t(z,r),p(z,z,I),d(L,z),L[3]=l(z),L)),new w(`globalOrigin`,e=>t(I,e)),new v(`cosSphericalAngleThreshold`,(e,t)=>1-Math.max(2,u(t.camera.eye,e.heightManifoldTarget)*t.camera.perRenderPixelRatio)/l(e.heightManifoldTarget))),r.code.add(g`float globeDistancePixels(float posInGlobalOriginLength) {
float dist = abs(posInGlobalOriginLength - heightManifoldOrigin.w);
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}
float heightManifoldDistancePixels(vec4 heightPlane, vec3 pos) {
vec3 posInGlobalOriginNorm = normalize(globalOrigin - pos);
float cosAngle = dot(posInGlobalOriginNorm, heightManifoldOrigin.xyz);
vec3 posInGlobalOrigin = globalOrigin - pos;
float posInGlobalOriginLength = length(posInGlobalOrigin);
float sphericalDistance = globeDistancePixels(posInGlobalOriginLength);
float planarDistance = planeDistancePixels(heightPlane, pos);
return cosAngle < cosSphericalAngleThreshold ? sphericalDistance : planarDistance;
}`)}else r.code.add(g`float heightManifoldDistancePixels(vec4 heightPlane, vec3 pos) {
return planeDistancePixels(heightPlane, pos);
}`);if(e.pointDistanceEnabled&&(r.uniforms.add(new v(`maxPixelDistance`,(e,t)=>2*t.camera.computeScreenPixelSizeAt(e.pointDistanceTarget))),r.code.add(g`float sphereDistancePixels(vec4 sphere, vec3 pos) {
float dist = distance(sphere.xyz, pos) - sphere.w;
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}`)),e.intersectsLineEnabled&&r.uniforms.add(new E(`perScreenPixelRatio`,e=>e.camera.perScreenPixelRatio)).code.add(g`float lineDistancePixels(vec3 start, vec3 dir, float radius, vec3 pos) {
float dist = length(cross(dir, pos - start)) / (length(pos) * perScreenPixelRatio);
return abs(dist) - radius;
}`),(e.lineVerticalPlaneEnabled||e.intersectsLineEnabled)&&r.code.add(g`bool pointIsWithinLine(vec3 pos, vec3 start, vec3 end) {
vec3 dir = end - start;
float t2 = dot(dir, pos - start);
float l2 = dot(dir, dir);
return t2 >= 0.0 && t2 <= l2;
}`),r.main.add(g`vec3 pos;
vec3 normal;
float angleCutoffAdjust;
float depthDiscontinuityAlpha;
if (!laserlineReconstructFromDepth(pos, normal, angleCutoffAdjust, depthDiscontinuityAlpha)) {
fragColor = vec4(0.0);
return;
}
vec4 color = vec4(0.0);`),e.heightManifoldEnabled){r.uniforms.add(new C(`angleCutoff`,e=>k(e)),new T(`heightPlane`,(e,t)=>P(e.heightManifoldTarget,e.renderCoordsHelper.worldUpAtPosition(e.heightManifoldTarget,I),t.camera.viewMatrix)));let t=e.spherical?g`normalize(globalOrigin - pos)`:g`heightPlane.xyz`;r.main.add(g`
      vec2 angleCutoffAdjusted = angleCutoff - angleCutoffAdjust;
      // Fade out laserlines on flat surfaces
      float heightManifoldAlpha = 1.0 - smoothstep(angleCutoffAdjusted.x, angleCutoffAdjusted.y, abs(dot(normal, ${t})));
      vec4 heightManifoldColor = laserlineProfile(heightManifoldDistancePixels(heightPlane, pos));
      color = max(color, heightManifoldColor * heightManifoldAlpha);`)}return e.pointDistanceEnabled&&(r.uniforms.add(new C(`angleCutoff`,e=>k(e)),new T(`pointDistanceSphere`,(e,t)=>A(e,t))),r.main.add(g`float pointDistanceSphereDistance = sphereDistancePixels(pointDistanceSphere, pos);
vec4 pointDistanceSphereColor = laserlineProfile(pointDistanceSphereDistance);
float pointDistanceSphereAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, normalize(pos - pointDistanceSphere.xyz))));
color = max(color, pointDistanceSphereColor * pointDistanceSphereAlpha);`)),e.lineVerticalPlaneEnabled&&(r.uniforms.add(new C(`angleCutoff`,e=>k(e)),new T(`lineVerticalPlane`,(e,t)=>j(e,t)),new _(`lineVerticalStart`,(e,t)=>M(e,t)),new _(`lineVerticalEnd`,(e,t)=>N(e,t))),r.main.add(g`if (pointIsWithinLine(pos, lineVerticalStart, lineVerticalEnd)) {
float lineVerticalDistance = planeDistancePixels(lineVerticalPlane, pos);
vec4 lineVerticalColor = laserlineProfile(lineVerticalDistance);
float lineVerticalAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, lineVerticalPlane.xyz)));
color = max(color, lineVerticalColor * lineVerticalAlpha);
}`)),e.intersectsLineEnabled&&(r.uniforms.add(new C(`angleCutoff`,e=>k(e)),new _(`intersectsLineStart`,(e,t)=>o(I,e.lineStartWorld,t.camera.viewMatrix)),new _(`intersectsLineEnd`,(e,t)=>o(I,e.lineEndWorld,t.camera.viewMatrix)),new _(`intersectsLineDirection`,(e,n)=>(t(L,e.intersectsLineSegment.vector),L[3]=0,d(I,a(L,L,n.camera.viewMatrix)))),new v(`intersectsLineRadius`,e=>e.intersectsLineRadius)),r.main.add(g`if (pointIsWithinLine(pos, intersectsLineStart, intersectsLineEnd)) {
float intersectsLineDistance = lineDistancePixels(intersectsLineStart, intersectsLineDirection, intersectsLineRadius, pos);
vec4 intersectsLineColor = laserlineProfile(intersectsLineDistance);
float intersectsLineAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, 1.0 - abs(dot(normal, intersectsLineDirection)));
color = max(color, intersectsLineColor * intersectsLineAlpha);
}`)),r.main.add(g`fragColor = laserlineOutput(color * depthDiscontinuityAlpha);`),n}function k(t){return e(F,Math.cos(t.angleCutoff),Math.cos(Math.max(0,t.angleCutoff-c(2))))}function A(e,t){return o(H,e.pointDistanceOrigin,t.camera.viewMatrix),H[3]=u(e.pointDistanceOrigin,e.pointDistanceTarget),H}function j(e,t){let n=y(e.lineVerticalPlaneSegment,.5,I),r=e.renderCoordsHelper.worldUpAtPosition(n,R),i=d(z,e.lineVerticalPlaneSegment.vector),a=f(I,r,i);return d(a,a),P(e.lineVerticalPlaneSegment.origin,a,t.camera.viewMatrix)}function M(e,n){let r=t(I,e.lineVerticalPlaneSegment.origin);return e.renderCoordsHelper.setAltitude(r,0),o(r,r,n.camera.viewMatrix)}function N(e,t){let r=n(I,e.lineVerticalPlaneSegment.origin,e.lineVerticalPlaneSegment.vector);return e.renderCoordsHelper.setAltitude(r,0),o(r,r,t.camera.viewMatrix)}function P(e,n,r){return o(B,e,r),t(L,n),L[3]=0,a(L,L,r),m(B,L,V)}var F=r(),I=s(),L=i(),R=s(),z=s(),B=s(),V=h(),H=i(),U=Object.freeze(Object.defineProperty({__proto__:null,build:O,defaultAngleCutoff:D},Symbol.toStringTag,{value:`Module`}));export{U as n,O as r,D as t};