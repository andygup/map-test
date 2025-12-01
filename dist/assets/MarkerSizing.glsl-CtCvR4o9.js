import{Nm as e,Pm as t,Rf as n}from"./index-CzMixifc.js";import{n as r,t as i}from"./glsl-B__sVAcg.js";import{t as a}from"./Float3PassUniform-BIrLVK7_.js";import{t as o}from"./FloatPassUniform-D-_T45xB.js";import{t as s}from"./FloatBindUniform-BPgZfINH.js";import{t as c}from"./FloatsPassUniform-Dhl7UDF5.js";import{t as l}from"./VisualVariables.glsl-BbHLNeev.js";import{n as u,r as d}from"./ScreenSizePerspective.glsl-BlmhzUp0.js";import{a as f,i as p,t as m}from"./View.glsl-D5eT11ZQ.js";var h=8;function g(n,s){let{vertex:p,attributes:g}=n;p.uniforms.add(new o(`intrinsicWidth`,e=>e.width));let{hasScreenSizePerspective:v,spherical:y}=s;v?(n.include(u,s),d(p),m(p,s),p.uniforms.add(new f(`inverseViewMatrix`,(n,r)=>e(_,t(_,r.camera.viewMatrix,n.origin)))),p.code.add(r`
      float applyLineSizeScreenSizePerspective(float size, vec3 pos) {
        vec3 worldPos = (inverseViewMatrix * vec4(pos, 1)).xyz;
        vec3 groundUp = ${y?r`normalize(worldPos + localOrigin)`:r`vec3(0.0, 0.0, 1.0)`};
        float absCosAngle = abs(dot(groundUp, normalize(worldPos - cameraPosition)));

        return screenSizePerspectiveScaleFloat(size, absCosAngle, length(pos), screenSizePerspective);
      }
    `)):p.code.add(r`float applyLineSizeScreenSizePerspective(float size, vec3 pos) {
return size;
}`),s.hasVVSize?(g.add(`sizeFeatureAttribute`,`float`),p.uniforms.add(new a(`vvSizeMinSize`,e=>e.vvSize.minSize),new a(`vvSizeMaxSize`,e=>e.vvSize.maxSize),new a(`vvSizeOffset`,e=>e.vvSize.offset),new a(`vvSizeFactor`,e=>e.vvSize.factor),new a(`vvSizeFallback`,e=>e.vvSize.fallback)),p.code.add(r`
    float getSize(${i(v,`vec3 pos`)}) {
      float size = isnan(sizeFeatureAttribute)
        ? vvSizeFallback.x
        : intrinsicWidth * clamp(vvSizeOffset + sizeFeatureAttribute * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize).x;

      return ${i(v,`applyLineSizeScreenSizePerspective(size, pos)`,`size`)};
    }
    `)):(g.add(`size`,`float`),p.code.add(r`
    float getSize(${i(v,`vec3 pos`)}) {
      float fullSize = intrinsicWidth * size;
      return ${i(v,`applyLineSizeScreenSizePerspective(fullSize, pos)`,`fullSize`)};
    }
    `)),s.hasVVOpacity?(g.add(`opacityFeatureAttribute`,`float`),p.constants.add(`vvOpacityNumber`,`int`,8),p.uniforms.add(new c(`vvOpacityValues`,e=>e.vvOpacity.values,h),new c(`vvOpacityOpacities`,e=>e.vvOpacity.opacityValues,h),new o(`vvOpacityFallback`,e=>e.vvOpacity.fallback,{supportsNaN:!0})),p.code.add(r`
    float interpolateOpacity(float value) {
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

    vec4 applyOpacity(vec4 color) {
      if (isnan(opacityFeatureAttribute)) {
        // If there is a color vv then it will already have taken care of applying the fallback
        return ${i(s.hasVVColor,`color`,`vec4(color.rgb, vvOpacityFallback)`)};
      }

      return vec4(color.rgb, interpolateOpacity(opacityFeatureAttribute));
    }
    `)):p.code.add(r`vec4 applyOpacity(vec4 color) {
return color;
}`),s.hasVVColor?(n.include(l,s),g.add(`colorFeatureAttribute`,`float`),p.code.add(r`vec4 getColor() {
vec4 color = interpolateVVColor(colorFeatureAttribute);
if (isnan(color.r)) {
return vec4(0);
}
return applyOpacity(color);
}`)):(g.add(`color`,`vec4`),p.code.add(r`vec4 getColor() {
return applyOpacity(color);
}`))}var _=n();function v(e){e.vertex.code.add(`#define noPerspectiveWrite(x, w) (x * w)`)}function y(e){e.fragment.code.add(`#define noPerspectiveRead(x) (x * gl_FragCoord.w)`)}var b=64,x=64/2,S=.25;function C(e,t){let n=e.vertex,a=t.hasScreenSizePerspective;p(n),n.uniforms.get(`markerScale`)??n.constants.add(`markerScale`,`float`,1),n.constants.add(`markerSizePerLineWidth`,`float`,10).code.add(r`
  float getLineWidth(${i(a,`vec3 pos`)}) {
     return max(getSize(${i(a,`pos`)}), 1.0) * pixelRatio;
  }

  float getScreenMarkerSize(float lineWidth) {
    return markerScale * markerSizePerLineWidth * lineWidth;
  }
  `),t.space===2&&(n.constants.add(`maxSegmentLengthFraction`,`float`,.45),n.uniforms.add(new s(`perRenderPixelRatio`,e=>e.camera.perRenderPixelRatio)),n.code.add(r`
  bool areWorldMarkersHidden(vec3 pos, vec3 other) {
    vec3 midPoint = mix(pos, other, 0.5);
    float distanceToCamera = length(midPoint);
    float screenToWorldRatio = perRenderPixelRatio * distanceToCamera * 0.5;
    float worldMarkerSize = getScreenMarkerSize(getLineWidth(${i(a,`pos`)})) * screenToWorldRatio;
    float segmentLen = length(pos - other);
    return worldMarkerSize > maxSegmentLengthFraction * segmentLen;
  }

  float getWorldMarkerSize(vec3 pos) {
    float distanceToCamera = length(pos);
    float screenToWorldRatio = perRenderPixelRatio * distanceToCamera * 0.5;
    return getScreenMarkerSize(getLineWidth(${i(a,`pos`)})) * screenToWorldRatio;
  }
  `))}export{y as a,x as i,S as n,v as o,b as r,g as s,C as t};