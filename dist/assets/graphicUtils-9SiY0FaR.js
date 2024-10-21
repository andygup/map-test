import{s as y,f as P,o as b}from"./DefaultBufferWriter-BeC23u2e.js";import{d as S,f as z,e as g,o as u,p as C,w as D,s as V,a as A}from"./Geometry-BTp0yhOg.js";import{e2 as v,i2 as s,lA as R,lB as $,dz as m,lC as j,lD as H,aS as M,lE as T,lF as U,lG as G,by as E,lH as F,lI as N,lJ as I,lK as k,bE as Y,cC as L,lL as Z,lM as q,lN as B}from"./index-C-FXvluM.js";import{c as h}from"./GeometryUtil-BqnSbvZN.js";import{u as J}from"./meshVertexSpaceUtils-6Oit8r3Z.js";import{o as K,x as Q}from"./hydratedFeatures-DXGiFJc-.js";const W=.5;function ce(e,t){e.include(y),e.attributes.add(v.POSITION,"vec3"),e.attributes.add(v.NORMAL,"vec3"),e.attributes.add(v.CENTEROFFSETANDDISTANCE,"vec4");const o=e.vertex;S(o,t),z(o,t),o.uniforms.add(new g("viewport",(i,n)=>n.camera.fullViewport),new u("polygonOffset",i=>i.shaderPolygonOffset),new u("cameraGroundRelative",(i,n)=>n.camera.aboveGround?1:-1)),t.hasVerticalOffset&&P(o),o.constants.add("smallOffsetAngle","float",.984807753012208),o.code.add(s`struct ProjectHUDAux {
vec3 posModel;
vec3 posView;
vec3 vnormal;
float distanceToCamera;
float absCosAngle;
};`),o.code.add(s`
    float applyHUDViewDependentPolygonOffset(float pointGroundDistance, float absCosAngle, inout vec3 posView) {
      float pointGroundSign = ${t.terrainDepthTest?s.float(0):s`sign(pointGroundDistance)`};
      if (pointGroundSign == 0.0) {
        pointGroundSign = cameraGroundRelative;
      }

      // cameraGroundRelative is -1 if camera is below ground, 1 if above ground
      // groundRelative is 1 if both camera and symbol are on the same side of the ground, -1 otherwise
      float groundRelative = cameraGroundRelative * pointGroundSign;

      // view angle dependent part of polygon offset emulation: we take the absolute value because the sign that is
      // dropped is instead introduced using the ground-relative position of the symbol and the camera
      if (polygonOffset > .0) {
        float cosAlpha = clamp(absCosAngle, 0.01, 1.0);
        float tanAlpha = sqrt(1.0 - cosAlpha * cosAlpha) / cosAlpha;
        float factor = (1.0 - tanAlpha / viewport[2]);

        // same side of the terrain
        if (groundRelative > 0.0) {
          posView *= factor;
        }
        // opposite sides of the terrain
        else {
          posView /= factor;
        }
      }

      return groundRelative;
    }
  `),t.draped&&!t.hasVerticalOffset||C(o),t.draped||(o.uniforms.add(new u("perDistancePixelRatio",(i,n)=>Math.tan(n.camera.fovY/2)/(n.camera.fullViewport[2]/2))),o.code.add(s`
    void applyHUDVerticalGroundOffset(vec3 normalModel, inout vec3 posModel, inout vec3 posView) {
      float distanceToCamera = length(posView);

      // Compute offset in world units for a half pixel shift
      float pixelOffset = distanceToCamera * perDistancePixelRatio * ${s.float(W)};

      // Apply offset along normal in the direction away from the ground surface
      vec3 modelOffset = normalModel * cameraGroundRelative * pixelOffset;

      // Apply the same offset also on the view space position
      vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;

      posModel += modelOffset;
      posView += viewOffset;
    }
  `)),t.screenCenterOffsetUnitsEnabled&&D(o),t.hasScreenSizePerspective&&b(o),o.code.add(s`
    vec4 projectPositionHUD(out ProjectHUDAux aux) {
      vec3 centerOffset = centerOffsetAndDistance.xyz;
      float pointGroundDistance = centerOffsetAndDistance.w;

      aux.posModel = position;
      aux.posView = (view * vec4(aux.posModel, 1.0)).xyz;
      aux.vnormal = normal;
      ${t.draped?"":"applyHUDVerticalGroundOffset(aux.vnormal, aux.posModel, aux.posView);"}

      // Screen sized offset in world space, used for example for line callouts
      // Note: keep this implementation in sync with the CPU implementation, see
      //   - MaterialUtil.verticalOffsetAtDistance
      //   - HUDMaterial.applyVerticalOffsetTransformation

      aux.distanceToCamera = length(aux.posView);

      vec3 viewDirObjSpace = normalize(cameraPosition - aux.posModel);
      float cosAngle = dot(aux.vnormal, viewDirObjSpace);

      aux.absCosAngle = abs(cosAngle);

      ${t.hasScreenSizePerspective&&(t.hasVerticalOffset||t.screenCenterOffsetUnitsEnabled)?"vec3 perspectiveFactor = screenSizePerspectiveScaleFactor(aux.absCosAngle, aux.distanceToCamera, screenSizePerspectiveAlignment);":""}

      ${t.hasVerticalOffset?t.hasScreenSizePerspective?"float verticalOffsetScreenHeight = applyScreenSizePerspectiveScaleFactorFloat(verticalOffset.x, perspectiveFactor);":"float verticalOffsetScreenHeight = verticalOffset.x;":""}

      ${t.hasVerticalOffset?s`
            float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * aux.distanceToCamera, verticalOffset.z, verticalOffset.w);
            vec3 modelOffset = aux.vnormal * worldOffset;
            aux.posModel += modelOffset;
            vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;
            aux.posView += viewOffset;
            // Since we elevate the object, we need to take that into account
            // in the distance to ground
            pointGroundDistance += worldOffset;`:""}

      float groundRelative = applyHUDViewDependentPolygonOffset(pointGroundDistance, aux.absCosAngle, aux.posView);

      ${t.screenCenterOffsetUnitsEnabled?"":s`
            // Apply x/y in view space, but z in screen space (i.e. along posView direction)
            aux.posView += vec3(centerOffset.x, centerOffset.y, 0.0);

            // Same material all have same z != 0.0 condition so should not lead to
            // branch fragmentation and will save a normalization if it's not needed
            if (centerOffset.z != 0.0) {
              aux.posView -= normalize(aux.posView) * centerOffset.z;
            }
          `}

      vec4 posProj = proj * vec4(aux.posView, 1.0);

      ${t.screenCenterOffsetUnitsEnabled?t.hasScreenSizePerspective?"float centerOffsetY = applyScreenSizePerspectiveScaleFactorFloat(centerOffset.y, perspectiveFactor);":"float centerOffsetY = centerOffset.y;":""}

      ${t.screenCenterOffsetUnitsEnabled?"posProj.xy += vec2(centerOffset.x, centerOffsetY) * pixelRatio * 2.0 / viewport.zw * posProj.w;":""}

      // constant part of polygon offset emulation
      posProj.z -= groundRelative * polygonOffset * posProj.w;
      return posProj;
    }
  `)}function X(e){e.uniforms.add(new V("alignPixelEnabled",(t,o)=>o.alignPixelEnabled)),e.code.add(s`vec4 alignToPixelCenter(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.500123) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = (floor(xy * widthHeight) + vec2(0.5)) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`),e.code.add(s`vec4 alignToPixelOrigin(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.5) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = floor((xy + 0.5 * pixelSz) * widthHeight) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`)}function fe(e){e.vertex.uniforms.add(new u("renderTransparentlyOccludedHUD",(t,o)=>o.hudRenderStyle===h.Occluded?1:o.hudRenderStyle===h.NotOccluded?0:.75),new g("viewport",(t,o)=>o.camera.fullViewport),new A("hudVisibilityTexture",(t,o)=>{var i;return(i=o.hudVisibility)==null?void 0:i.getTexture()})),e.vertex.include(X),e.vertex.code.add(s`bool testHUDVisibility(vec4 posProj) {
vec4 posProjCenter = alignToPixelCenter(posProj, viewport.zw);
vec4 occlusionPixel = texture(hudVisibilityTexture, .5 + .5 * posProjCenter.xy / posProjCenter.w);
if (renderTransparentlyOccludedHUD > 0.5) {
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g * renderTransparentlyOccludedHUD < 1.0;
}
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g == 1.0;
}`)}function de(e,t){if(e.type==="point")return c(e,t,!1);if(K(e))switch(e.type){case"extent":return c(e.center,t,!1);case"polygon":return c(e.centroid,t,!1);case"polyline":return c(w(e),t,!0);case"mesh":return c(J(e.vertexSpace,e.spatialReference)??e.extent.center,t,!1);case"multipoint":return}else switch(e.type){case"extent":return c(_(e),t,!0);case"polygon":return c(ee(e),t,!0);case"polyline":return c(w(e),t,!0);case"multipoint":return}}function w(e){const t=e.paths[0];if(!t||t.length===0)return null;const o=R(t,$(t)/2);return m(o[0],o[1],o[2],e.spatialReference)}function _(e){return m(.5*(e.xmax+e.xmin),.5*(e.ymax+e.ymin),e.zmin!=null&&e.zmax!=null&&isFinite(e.zmin)&&isFinite(e.zmax)?.5*(e.zmax+e.zmin):void 0,e.spatialReference)}function ee(e){const t=e.rings[0];if(!t||t.length===0)return null;const o=j(e.rings,!!e.hasZ);return m(o[0],o[1],o[2],e.spatialReference)}function c(e,t,o){const i=o?e:Q(e);return t&&e?H(e,i,t)?i:null:i}function pe(e,t,o,i=0){if(e){t||(t=M());const n=e;let a=.5*n.width*(o-1),l=.5*n.height*(o-1);return n.width<1e-7*n.height?a+=l/20:n.height<1e-7*n.width&&(l+=a/20),T(t,n.xmin-a-i,n.ymin-l-i,n.xmax+a+i,n.ymax+l+i),t}return null}function ue(e,t,o=null){const i=U(G);return e!=null&&(i[0]=e[0],i[1]=e[1],i[2]=e[2]),t!=null?i[3]=t:e!=null&&e.length>3&&(i[3]=e[3]),o&&(i[0]*=o,i[1]*=o,i[2]*=o,i[3]*=o),i}function ve(e=F,t,o,i=1){const n=new Array(3);if(t==null||o==null)n[0]=1,n[1]=1,n[2]=1;else{let a,l=0;for(let r=2;r>=0;r--){const d=e[r];let f;const x=d!=null,O=r===0&&!a&&!x,p=o[r];d==="symbol-value"||O?f=p!==0?t[r]/p:1:x&&d!=="proportional"&&isFinite(d)&&(f=p!==0?d/p:1),f!=null&&(n[r]=f,a=f,l=Math.max(l,Math.abs(f)))}for(let r=2;r>=0;r--)n[r]==null?n[r]=a:n[r]===0&&(n[r]=.001*l)}for(let a=2;a>=0;a--)n[a]/=i;return E(n)}function te(e){return e.isPrimitive!=null}function me(e){return oe(te(e)?[e.width,e.depth,e.height]:e)?null:"Symbol sizes may not be negative values"}function oe(e){const t=o=>o==null||o>=0;return Array.isArray(e)?e.every(t):t(e)}function xe(e,t,o,i=Y()){return e&&N(i,i,-e/180*Math.PI),t&&I(i,i,t/180*Math.PI),o&&k(i,i,o/180*Math.PI),i}function he(e,t,o){if(o.minDemResolution!=null)return o.minDemResolution;const i=L(t),n=Z(e)*i,a=q(e)*i,l=B(e)*(t.isGeographic?1:i);return n===0&&a===0&&l===0?o.minDemResolutionForPoints:.01*Math.max(n,a,l)}export{ue as A,ve as D,he as E,pe as S,me as U,oe as Z,de as b,ce as d,xe as k,X as o,W as p,fe as t};
