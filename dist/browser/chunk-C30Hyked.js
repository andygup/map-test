import {G as G$1,K as K$2,i as it$1,q as q$2,X as X$2}from'./chunk-DKt6JLjU.js';import {p as r,q as ai$1,t as u$1,w as r$1,x as pt,A as A$2,y as li$1,D as s$1,a as n,n as ni$1,F as s$2,G as s$3,s as ss,j as ji$1,g,R as R$2,r as r$2,H as e,K as Kt,I as y$1,v as v$3,B as B$1,$ as $$2,P,O,L as n$1,u as ut,c as o$4,d as st$1,i as ie,J as Jt,N as Ii,S as St,C as Ct,E as Ei$1,V as Vi,k as ki$1,T as ci$1,h as Mi$1,z as zi$1,l as Ci$1,U as Hi,W as Di,X as qi,Y as Ni$1,_ as Si$1}from'./chunk-B6WwzdC9.js';import {J as J$2,$ as $$3,U as U$4}from'./chunk-D68ykWY8.js';import {c}from'./chunk-Bov-IeiM.js';import {K as K$1,P as P$2,D as D$1}from'./chunk-Di3dT8Dp.js';import {T as T$1,U as U$2,_ as _$2,X as X$1,y as y$4}from'./chunk-nxb_BVNR.js';import {u as ue$1,m,z,o,s as s$4,a as o$1,r as r$3}from'./chunk-fo8FV9Dz.js';import {a,l,b as b$1}from'./chunk-CFORs9sO.js';import {B5 as N$1,a0 as R$1,br as e$1,oB as V$1,za as U$1,jg as t,I as v$2,AJ as I$1,jZ as L$2,a2 as o$2,jf as o$3,kt as t$1,a3 as h,ah as y$2,b_ as g$1,cE as P$1,kc as v$5,jh as Q$1,bX as k,jk as j$1,oD as O$1,cF as x$1,qr as y$3,cD as e$2,jl as H$1,qc as W$1,ji as d,pO as Hn,AH as U$3,bV as o$5,B6 as M$1,qp as Ur,bF as b,pJ as r$4,a6 as E$1,cC as t$2,q8 as N$2,ai as P$3,ak as vn}from'./main-Y4UOJ3OT.js';import {v as v$1}from'./chunk-Dsf6xbAk.js';import {g as ge$1,i as ie$1}from'./chunk-C4y3gUEo.js';import {q as q$3}from'./chunk-DjjYOVZs.js';import {r as v$4,p as K$3}from'./chunk-CpGBtdeb.js';var W=8;function ce(a$1,e){let{vertex:t,attributes:r$2}=a$1;t.uniforms.add(new r("intrinsicWidth",i=>i.width));let{hasScreenSizePerspective:o,spherical:n}=e;o?(a$1.include(m,e),z(t),ai$1(t,e),t.uniforms.add(new u$1("inverseViewMatrix",(i,p)=>V$1(L$1,U$1(L$1,p.camera.viewMatrix,i.origin)))),t.code.add(a`
      float applyLineSizeScreenSizePerspective(float size, vec3 pos) {
        vec3 worldPos = (inverseViewMatrix * vec4(pos, 1)).xyz;
        vec3 groundUp = ${n?a`normalize(worldPos + localOrigin)`:a`vec3(0.0, 0.0, 1.0)`};
        float absCosAngle = abs(dot(groundUp, normalize(worldPos - cameraPosition)));

        return screenSizePerspectiveScaleFloat(size, absCosAngle, length(pos), screenSizePerspective);
      }
    `)):t.code.add(a`float applyLineSizeScreenSizePerspective(float size, vec3 pos) {
return size;
}`),e.hasVVSize?(r$2.add("sizeFeatureAttribute","float"),t.uniforms.add(new r$1("vvSizeMinSize",i=>i.vvSize.minSize),new r$1("vvSizeMaxSize",i=>i.vvSize.maxSize),new r$1("vvSizeOffset",i=>i.vvSize.offset),new r$1("vvSizeFactor",i=>i.vvSize.factor),new r$1("vvSizeFallback",i=>i.vvSize.fallback)),t.code.add(a`
    float getSize(${l(o,"vec3 pos")}) {
      float size = isnan(sizeFeatureAttribute)
        ? vvSizeFallback.x
        : intrinsicWidth * clamp(vvSizeOffset + sizeFeatureAttribute * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize).x;

      return ${l(o,"applyLineSizeScreenSizePerspective(size, pos)","size")};
    }
    `)):(r$2.add("size","float"),t.code.add(a`
    float getSize(${l(o,"vec3 pos")}) {
      float fullSize = intrinsicWidth * size;
      return ${l(o,"applyLineSizeScreenSizePerspective(fullSize, pos)","fullSize")};
    }
    `)),e.hasVVOpacity?(r$2.add("opacityFeatureAttribute","float"),t.constants.add("vvOpacityNumber","int",8),t.uniforms.add(new pt("vvOpacityValues",W,i=>i.vvOpacity.values),new pt("vvOpacityOpacities",W,i=>i.vvOpacity.opacityValues),new r("vvOpacityFallback",i=>i.vvOpacity.fallback,{supportsNaN:true})),t.code.add(a`
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
        return ${l(e.hasVVColor,"color","vec4(color.rgb, vvOpacityFallback)")};
      }

      return vec4(color.rgb, interpolateOpacity(opacityFeatureAttribute));
    }
    `)):t.code.add(a`vec4 applyOpacity(vec4 color) {
return color;
}`),e.hasVVColor?(a$1.include(A$2,e),r$2.add("colorFeatureAttribute","float"),t.code.add(a`vec4 getColor() {
vec4 color = interpolateVVColor(colorFeatureAttribute);
if (isnan(color.r)) {
return vec4(0);
}
return applyOpacity(color);
}`)):(r$2.add("color","vec4"),t.code.add(a`vec4 getColor() {
return applyOpacity(color);
}`));}var L$1=t();function pe(a){a.vertex.code.add("#define noPerspectiveWrite(x, w) (x * w)");}function de(a){a.fragment.code.add("#define noPerspectiveRead(x) (x * gl_FragCoord.w)");}var x=128,u=.5,Se$1=N$1(u/2,u/2,1-u/2,1-u/2);function ze(a){return a==="cross"||a==="x"}function he$1(a,e=x,t=e*u,r=0){let{data:o,parameters:n}=B(a,e,t,r);return new ue$1(o,n)}function B(a,e=x,t=e*u,r=0){return {data:C$1(a,e,t,r),parameters:{mipmap:false,wrap:{s:33071,t:33071},width:e,height:e,noUnpackFlip:true,dataType:e$1.FLOAT,pixelFormat:6403,internalFormat:R$1.R16F,reloadable:true}}}function C$1(a,e=x,t=e*u,r=0){switch(a){case "circle":default:return D(e,t);case "square":return H(e,t);case "cross":return X(e,t,r);case "x":return _$1(e,t,r);case "kite":return K(e,t);case "triangle":return j(e,t);case "arrow":return E(e,t)}}function D(a,e){let t=a/2-.5;return f(a,q$1(t,t,e/2))}function H(a,e){return A$1(a,e,false)}function K(a,e){return A$1(a,e,true)}function X(a,e,t=0){return $$1(a,e,false,t)}function _$1(a,e,t=0){return $$1(a,e,true,t)}function j(a,e){return f(a,U(a/2,e,e/2))}function E(a,e){let t=e,r=e/2,o=a/2,n=.8*t,i=q$1(o,(a-e)/2-n,Math.sqrt(n*n+r*r)),p=U(o,t,r);return f(a,(s,c)=>Math.max(p(s,c),-i(s,c)))}function A$1(a,e,t){return t&&(e/=Math.SQRT2),f(a,(r,o)=>{let n=r-.5*a+.25,i=.5*a-o-.75;if(t){let p=(n+i)/Math.SQRT2;i=(i-n)/Math.SQRT2,n=p;}return Math.max(Math.abs(n),Math.abs(i))-.5*e})}function $$1(a,e,t,r=0){e-=r,t&&(e*=Math.SQRT2);let o=.5*e;return f(a,(n,i)=>{let p,s=n-.5*a,c=.5*a-i-1;if(t){let I=(s+c)/Math.SQRT2;c=(c-s)/Math.SQRT2,s=I;}return s=Math.abs(s),c=Math.abs(c),p=s>c?s>o?Math.sqrt((s-o)*(s-o)+c*c):c:c>o?Math.sqrt(s*s+(c-o)*(c-o)):s,p-=r/2,p})}function q$1(a,e,t){return (r,o)=>{let n=r-a,i=o-e;return Math.sqrt(n*n+i*i)-t}}function U(a,e,t){let r=Math.sqrt(e*e+t*t);return (o,n)=>{let i=Math.abs(o-a)-t,p=n-a+e/2+.75,s=(e*i+t*p)/r,c=-p;return Math.max(s,c)}}function f(a,e){let t=new Float32Array(a*a);for(let r=0;r<a;r++)for(let o=0;o<a;o++)t[o+a*r]=e(o,r)/a;return t}var N=64,G=N/2,J$1=G/5,Q=N/J$1,we$1=.25;function We(a$1,e){let t=a$1.vertex,r=e.hasScreenSizePerspective;li$1(t),t.uniforms.get("markerScale")==null&&t.constants.add("markerScale","float",1),t.constants.add("markerSizePerLineWidth","float",Q).code.add(a`
  float getLineWidth(${l(r,"vec3 pos")}) {
     return max(getSize(${l(r,"pos")}), 1.0) * pixelRatio;
  }

  float getScreenMarkerSize(float lineWidth) {
    return markerScale * markerSizePerLineWidth * lineWidth;
  }
  `),e.space===2&&(t.constants.add("maxSegmentLengthFraction","float",.45),t.uniforms.add(new s$1("perRenderPixelRatio",o=>o.camera.perRenderPixelRatio)),t.code.add(a`
  bool areWorldMarkersHidden(vec3 pos, vec3 other) {
    vec3 midPoint = mix(pos, other, 0.5);
    float distanceToCamera = length(midPoint);
    float screenToWorldRatio = perRenderPixelRatio * distanceToCamera * 0.5;
    float worldMarkerSize = getScreenMarkerSize(getLineWidth(${l(r,"pos")})) * screenToWorldRatio;
    float segmentLen = length(pos - other);
    return worldMarkerSize > maxSegmentLengthFraction * segmentLen;
  }

  float getWorldMarkerSize(vec3 pos) {
    float distanceToCamera = length(pos);
    float screenToWorldRatio = perRenderPixelRatio * distanceToCamera * 0.5;
    return getScreenMarkerSize(getLineWidth(${l(r,"pos")})) * screenToWorldRatio;
  }
  `));}var i=a`vec4(0.0, 0.0, 2.0, 1.0)`;var s={dash:[4,3],dot:[1,3],"long-dash":[8,3],"short-dash":[4,1],"short-dot":[1,1]},he={dash:s.dash,"dash-dot":[...s.dash,...s.dot],dot:s.dot,"long-dash":s["long-dash"],"long-dash-dot":[...s["long-dash"],...s.dot],"long-dash-dot-dot":[...s["long-dash"],...s.dot,...s.dot],none:null,"short-dash":s["short-dash"],"short-dash-dot":[...s["short-dash"],...s["short-dot"]],"short-dash-dot-dot":[...s["short-dash"],...s["short-dot"],...s["short-dot"]],"short-dot":s["short-dot"],solid:null},ve=8,L=class{constructor(a,p,o){this.image=a,this.width=p,this.length=o,this.uuid=t$1();}};function C(t){return t!=null&&"image"in t}function ue(t,a){return t==null?t:{pattern:t.slice(),pixelRatio:a}}function Fe(t){return {pattern:[t,t],pixelRatio:2}}function we(t){switch(t?.type){case "style":return ge(t.style);case "image":return new L(t.image,t.width,t.length);case void 0:case null:return null}return null}function ge(t){return t!=null?ue(he[t],ve):null}function Se(t){return t.pattern.map(a=>Math.round(a*t.pixelRatio))}function ae(t){if(t==null)return 1;let a=Se(t);return Math.floor(a.reduce((p,o)=>p+o))}function ne(t){return t==null?I$1:t.length===4?t:L$2(xe$1,t[0],t[1],t[2],1)}var xe$1=o$3();function oe$1(t,a$1){if(!a$1.stippleEnabled)return void t.fragment.code.add(a`float getStippleAlpha(float lineWidth) { return 1.0; }
void discardByStippleAlpha(float stippleAlpha, float threshold) {}
vec4 blendStipple(vec4 color, float stippleAlpha) { return color; }`);let p=!(a$1.draped&&a$1.stipplePreferContinuous),{vertex:o,fragment:i}=t;a$1.draped||(ai$1(o,a$1),o.uniforms.add(new s$1("worldToScreenPerDistanceRatio",({camera:n})=>1/n.perScreenPixelRatio)).code.add(a`float computeWorldToScreenRatio(vec3 segmentCenter) {
float segmentDistanceToCamera = length(segmentCenter - cameraPosition);
return worldToScreenPerDistanceRatio / segmentDistanceToCamera;
}`)),t.varyings.add("vStippleDistance","float"),t.varyings.add("vStippleDistanceLimits","vec2"),t.varyings.add("vStipplePatternStretch","float"),o.code.add(a`
    float discretizeWorldToScreenRatio(float worldToScreenRatio) {
      float step = ${a.float(De)};

      float discreteWorldToScreenRatio = log(worldToScreenRatio);
      discreteWorldToScreenRatio = ceil(discreteWorldToScreenRatio / step) * step;
      discreteWorldToScreenRatio = exp(discreteWorldToScreenRatio);
      return discreteWorldToScreenRatio;
    }
  `),li$1(o),o.code.add(a`
    vec2 computeStippleDistanceLimits(float startPseudoScreen, float segmentLengthPseudoScreen, float segmentLengthScreen, float patternLength) {

      // First check if the segment is long enough to support fully screen space patterns.
      // Force sparse mode for segments that are very large in screen space even if it is not allowed,
      // to avoid imprecision from calculating with large floats.
      if (segmentLengthPseudoScreen >= ${p?"patternLength":"1e4"}) {
        // Round the screen length to get an integer number of pattern repetitions (minimum 1).
        float repetitions = segmentLengthScreen / (patternLength * pixelRatio);
        float flooredRepetitions = max(1.0, floor(repetitions + 0.5));
        float segmentLengthScreenRounded = flooredRepetitions * patternLength;

        float stretch = repetitions / flooredRepetitions;

        // We need to impose a lower bound on the stretch factor to prevent the dots from merging together when there is only 1 repetition.
        // 0.75 is the lowest possible stretch value for flooredRepetitions > 1, so it makes sense as lower bound.
        vStipplePatternStretch = max(0.75, stretch);

        return vec2(0.0, segmentLengthScreenRounded);
      }
      return vec2(startPseudoScreen, startPseudoScreen + segmentLengthPseudoScreen);
    }
  `),i.uniforms.add(new e("stipplePatternTexture",n=>n.stippleTexture),new r("stipplePatternPixelSizeInv",n=>1/y(n))),a$1.stippleOffColorEnabled&&i.uniforms.add(new r$2("stippleOffColor",n=>ne(n.stippleOffColor))),t.include(de),a$1.worldSizedImagePattern?(t.varyings.add("vStippleV","float"),t.fragment.include(o$1),i.code.add(a`vec4 getStippleColor(out bool isClamped) {
vec2 aaCorrectedLimits = vStippleDistanceLimits + vec2(1.0, -1.0) / gl_FragCoord.w;
isClamped = vStippleDistance < aaCorrectedLimits.x || vStippleDistance > aaCorrectedLimits.y;
float u = vStippleDistance * stipplePatternPixelSizeInv;
float v = vStippleV == -1.0 ? 0.5 : vStippleV;
return texture(stipplePatternTexture, vec2(u, v));
}
vec4 getStippleColor() {
bool ignored;
return getStippleColor(ignored);
}
float getStippleSDF() {
vec4 color = getStippleColor();
return color.a == 0.0 ? -0.5 : 0.5;
}
float getStippleAlpha(float lineWidth) {
return getStippleColor().a;
}
vec4 blendStipple(vec4 color, float stippleAlpha) {
vec4 stippleColor = getStippleColor();
int mixMode  = 1;
vec3 col = mixExternalColor(color.rgb, vec3(1.0), stippleColor.rgb, mixMode);
float opacity = mixExternalOpacity(color.a, 1.0, stippleColor.a, mixMode);
return vec4(col, opacity);
}`)):i.code.add(a`
    float getStippleSDF(out bool isClamped) {
      float stippleDistanceClamped = noPerspectiveRead(clamp(vStippleDistance, vStippleDistanceLimits.x, vStippleDistanceLimits.y));
      float lineSizeInv = noPerspectiveRead(vLineSizeInv);

      vec2 aaCorrectedLimits = vStippleDistanceLimits + vec2(1.0, -1.0) / gl_FragCoord.w;
      isClamped = vStippleDistance < aaCorrectedLimits.x || vStippleDistance > aaCorrectedLimits.y;

      float u = stippleDistanceClamped * stipplePatternPixelSizeInv * lineSizeInv;
      u = fract(u);

      float sdf = texture(stipplePatternTexture, vec2(u, 0.5)).r;

      return (sdf - 0.5) * vStipplePatternStretch + 0.5;
    }

    float getStippleSDF() {
      bool ignored;
      return getStippleSDF(ignored);
    }

    float getStippleAlpha(float lineWidth) {
      bool isClamped;
      float stippleSDF = getStippleSDF(isClamped);
      float antiAliasedResult = clamp(stippleSDF * lineWidth + 0.5, 0.0, 1.0);
      return isClamped ? floor(antiAliasedResult + 0.5) : antiAliasedResult;
    }

    vec4 blendStipple(vec4 color, float stippleAlpha) {
      return ${a$1.stippleOffColorEnabled?"mix(color, stippleOffColor, stippleAlpha)":"vec4(color.rgb, color.a * stippleAlpha)"};
    }
  `),i.code.add(a`
    void discardByStippleAlpha(float stippleAlpha, float threshold) {
     ${l(!a$1.stippleOffColorEnabled,"if (stippleAlpha < threshold) { discard; }")}
    }
  `);}function y(t){let a=t.stipplePattern;return C(a)?a.length:a?ae(a)/a.pixelRatio:1}var De=.4;var re=1,se=1;function le(t,a$1){let{hasAnimation:p,animation:o}=a$1;if(!p)return;let{attributes:i,varyings:n,vertex:D,fragment:d}=t;i.add("timeStamps","vec4"),n.add("vTimeStamp","float"),n.add("vFirstTime","float"),n.add("vLastTime","float"),n.add("vTransitionType","float"),D.main.add(a`vTimeStamp = timeStamps.x;
vFirstTime = timeStamps.y;
vLastTime = timeStamps.z;
vTransitionType = timeStamps.w;`),o===3&&d.constants.add("decayRate","float",2.3),d.code.add(a`
    float getTrailOpacity(float x) {
      if (x < 0.0) {
        return 0.0;
      }

      ${Te(o)}
    }`),d.uniforms.add(new r("timeElapsed",m=>m.timeElapsed),new r("trailLength",m=>m.trailLength),new r("speed",m=>m.animationSpeed),new r$3("startEndTime",m=>v$2(Le,m.startTime,m.endTime))),d.constants.add("fadeInTime","float",se),d.constants.add("fadeOutTime","float",re),d.constants.add("incomingTransition","int",0),d.constants.add("outgoingTransition","int",2),d.code.add(a`float fadeIn(float x) {
return smoothstep(0.0, fadeInTime, x);
}
float fadeOut(float x) {
return isinf(fadeOutTime) ? 1.0 : smoothstep(fadeOutTime, 0.0, x);
}
void updateAlphaIf(inout float alpha, bool condition, float newAlpha) {
alpha = condition ? min(alpha, newAlpha) : alpha;
}
vec4 animate(vec4 color) {
float startTime = startEndTime[0];
float endTime = startEndTime[1];
float totalTime = vLastTime - vFirstTime;
float actualFadeOutTime = min(fadeOutTime * speed, trailLength);
float longStreamlineThreshold = (fadeInTime + 1.0) * speed + actualFadeOutTime;
bool longStreamline = totalTime > longStreamlineThreshold;
float totalTimeWithFadeOut = longStreamline && actualFadeOutTime != trailLength ? totalTime : totalTime + actualFadeOutTime;
float fadeOutStartTime = longStreamline ? totalTime - actualFadeOutTime : totalTime;
float originTime =  -vFirstTime;
float actualEndTime = int(vTransitionType) == outgoingTransition ? min(endTime, startTime + vLastTime / speed) : endTime;
vec4 animatedColor = color;
if (speed == 0.0) {
float alpha = getTrailOpacity((totalTimeWithFadeOut - (vTimeStamp - vFirstTime)) / trailLength);
updateAlphaIf(alpha, !isinf(actualEndTime), fadeOut(timeElapsed - actualEndTime));
updateAlphaIf(alpha, true, fadeIn(timeElapsed - startTime));
animatedColor.a *= alpha;
return animatedColor;
}
float relativeStartTime = mod(startTime, totalTimeWithFadeOut);
float shiftedTimeElapsed = timeElapsed - relativeStartTime + originTime;
float headRelativeToFirst = mod(shiftedTimeElapsed * speed, totalTimeWithFadeOut);
float vRelativeToHead = headRelativeToFirst - originTime - vTimeStamp;
float vAbsoluteTime = timeElapsed - vRelativeToHead / speed;
if (startTime > timeElapsed) {
return vec4(0.0);
}
float alpha = getTrailOpacity(vRelativeToHead / trailLength);
updateAlphaIf(alpha, true, fadeIn(timeElapsed - startTime));
updateAlphaIf(alpha, !isinf(actualEndTime), fadeOut(timeElapsed - actualEndTime));
updateAlphaIf(alpha, int(vTransitionType) != incomingTransition, step(startTime, vAbsoluteTime));
updateAlphaIf(alpha, headRelativeToFirst > fadeOutStartTime, fadeOut((headRelativeToFirst - fadeOutStartTime) / speed));
alpha *= fadeIn(vTimeStamp - vFirstTime);
animatedColor.a *= alpha;
return animatedColor;
}`);}function Te(t){switch(t){case 2:return "return x >= 0.0 && x <= 1.0 ? 1.0 : 0.0;";case 3:return `float cutOff = exp(-decayRate);
        return (exp(-decayRate * x) - cutOff) / (1.0 - cutOff);`;default:return "return 1.0;"}}var Le=o$2();var Ce$1=1;function ye(t){let a$1=new v$1,{attributes:p,varyings:o$1,vertex:i$1,fragment:n$1}=a$1,{applyMarkerOffset:D,draped:d,output:m,capType:P,stippleEnabled:l$1,falloffEnabled:F,roundJoins:pe$1,wireframe:w,innerColorEnabled:de$1,hasAnimation:ce$1,hasScreenSizePerspective:g$1,worldSizedImagePattern:R}=t;i$1.inputs.add("position",()=>"position"),n$1.include(o),a$1.include(ce,t),a$1.include(oe$1,t),a$1.include(n,t),a$1.include(le,t);let b=D&&!d;b&&(i$1.uniforms.add(new r("markerScale",r=>r.markerScale)),a$1.include(We,{space:2,hasScreenSizePerspective:g$1})),ni$1(i$1,t),i$1.uniforms.add(new s$2("inverseProjectionMatrix",r=>r.camera.inverseProjectionMatrix),new s$3("nearFar",r=>r.camera.nearFar),new r("miterLimit",r=>r.join!=="miter"?0:r.miterLimit),new s$4("viewport",r=>r.camera.fullViewport)),i$1.constants.add("LARGE_HALF_FLOAT","float",65500),i$1.constants.add("EPS","float",.001),i$1.constants.add("NUM_JOIN_SUBDIVISIONS","float",t.numJoinSubdivisions),p.add("position","vec3"),p.add("previousDelta","vec4"),p.add("nextDelta","vec4"),p.add("lineParameters","vec2"),p.add("u0","float"),o$1.add("vColor","vec4"),o$1.add("vpos","vec3",{invariant:true}),o$1.add("vLineDistance","float"),o$1.add("vLineWidth","float"),l$1||(o$1.add("vIsInsideJoin","int"),o$1.add("vStretchFactor","float"),o$1.add("vJoinCenterLineSDFs","vec2"),o$1.add("vSubdivisionFactor","float"));let z=l$1;z&&o$1.add("vLineSizeInv","float");let h=P===2,W=l$1&&h,T=F||W;T&&o$1.add("vLineDistanceNorm","float"),h&&(o$1.add("vSegmentSDF","float"),o$1.add("vReverseSegmentSDF","float")),i$1.code.add(a`vec3 perpendicular(vec3 v) {
return vec3(v.y, -v.x, 0.0);
}
float interp(float ncp, vec4 a, vec4 b) {
return (-ncp - a.z) / (b.z - a.z);
}
vec3 rotateZ(vec3 v, float a) {
float s = sin(a);
float c = cos(a);
mat2 m = mat2(c, -s, s, c);
return vec3(m * v.xy, v.z);
}`),i$1.code.add(a`vec4 projectAndScale(vec4 pos) {
vec4 posNdc = proj * pos;
posNdc.xy *= viewport.zw / posNdc.w;
posNdc.z /= posNdc.w;
return posNdc;
}`),i$1.code.add(a`void clip(
inout vec4 pos,
inout vec4 prev,
inout vec4 next,
bool isStartVertex
) {
float vnp = nearFar[0] * 0.99;
if (pos.z > -nearFar[0]) {
if (!isStartVertex) {
if (prev.z < -nearFar[0]) {
pos = mix(prev, pos, interp(vnp, prev, pos));
next = pos;
} else {
pos = vec4(0.0, 0.0, 0.0, 1.0);
}
} else {
if (next.z < -nearFar[0]) {
pos = mix(pos, next, interp(vnp, pos, next));
prev = pos;
} else {
pos = vec4(0.0, 0.0, 0.0, 1.0);
}
}
} else {
if (prev.z > -nearFar[0]) {
prev = mix(pos, prev, interp(vnp, pos, prev));
}
if (next.z > -nearFar[0]) {
next = mix(next, pos, interp(vnp, next, pos));
}
}
}`),li$1(i$1),i$1.constants.add("aaWidth","float",l$1?0:1).main.add(a`
    // unpack values from vertex type
    bool isStartVertex = abs(abs(lineParameters.y) - 3.0) == 1.0;
    vec3 prevPosition = position + previousDelta.xyz * previousDelta.w;
    vec3 nextPosition = position + nextDelta.xyz * nextDelta.w;

    float coverage = 1.0;

    // Check for special value of lineParameters.y which is used by the Renderer when graphics are removed before the
    // VBO is recompacted. If this is the case, then we just project outside of clip space.
    if (lineParameters.y == 0.0) {
      gl_Position = ${i};
    }
    else {
      vec4 pos  = view * vec4(position, 1.0);
      vec4 prev = view * vec4(prevPosition, 1.0);
      vec4 next = view * vec4(nextPosition, 1.0);

      bool isJoin = abs(lineParameters.y) < 3.0;
  `),b&&i$1.main.add(a`vec4 other = isStartVertex ? next : prev;
bool markersHidden = areWorldMarkersHidden(pos.xyz, other.xyz);
if (!isJoin && !markersHidden) {
pos.xyz += normalize(other.xyz - pos.xyz) * getWorldMarkerSize(pos.xyz) * 0.5;
}`),a$1.include(pe),i$1.main.add(a`
      clip(pos, prev, next, isStartVertex);

      vec3 clippedPos = pos.xyz;
      vec3 clippedCenter = mix(pos.xyz, isStartVertex ? next.xyz : prev.xyz, 0.5);

      pos = projectAndScale(pos);
      next = projectAndScale(next);
      prev = projectAndScale(prev);

      vec3 left = (pos.xyz - prev.xyz);
      vec3 right = (next.xyz - pos.xyz);

      float leftLen = length(left);
      float rightLen = length(right);

      float lineSize = getSize(${l(g$1,"clippedPos")});
      ${l(l$1&&g$1,"float patternLineSize = getSize(clippedCenter);")}
      ${l(l$1&&!g$1,"float patternLineSize = lineSize;")}

      ${l(R,a`
          lineSize += aaWidth;
          float lineWidth = lineSize * pixelRatio * worldToScreenRatio;
          if (lineWidth < 1.0) {
            coverage = lineWidth;
            lineWidth = 1.0;
          }
        `,a`
          if (lineSize < 1.0) {
            coverage = lineSize; // convert sub-pixel coverage to alpha
            lineSize = 1.0;
          }

          lineSize += aaWidth;
          float lineWidth = lineSize * pixelRatio;
        `)}

      vLineWidth = noPerspectiveWrite(lineWidth, pos.w);
      ${z?a`vLineSizeInv = noPerspectiveWrite(1.0 / lineSize, pos.w);`:""}
  `),(l$1||h)&&i$1.main.add(a`
      float isEndVertex = float(!isStartVertex);
      vec3 segmentOrigin = mix(pos.xyz, prev.xyz, isEndVertex);
      vec3 segment = mix(right, left, isEndVertex);
      ${h?a`vec3 segmentEnd = mix(next.xyz, pos.xyz, isEndVertex);`:""}
    `),i$1.main.add(a`left = (leftLen > EPS) ? left/leftLen : vec3(0.0, 0.0, 0.0);
right = (rightLen > EPS) ? right/rightLen : vec3(0.0, 0.0, 0.0);
vec3 segmentDirection = isStartVertex ? right : left;
vec3 capDisplacementDir = vec3(0.0, 0.0, 0.0);
vec3 joinDisplacementDir = vec3(0.0, 0.0, 0.0);
float displacementLen = lineWidth;
float miterDisplacementLen = lineWidth;
float innerDisplacementLen = lineWidth;`),l$1||i$1.main.add(a`vIsInsideJoin = 0;
vStretchFactor = 1.0;
vSubdivisionFactor = 0.0;
vJoinCenterLineSDFs = vec2(LARGE_HALF_FLOAT);`),i$1.main.add(a`float subdivisionFactor = 0.0;
bool isOutside = false;
if (isJoin) {
isOutside = (left.x * right.y - left.y * right.x) * lineParameters.y > 0.0;
vec3 joinDirection = normalize(left + right);
joinDisplacementDir = perpendicular(joinDirection);
if (leftLen > EPS && rightLen > EPS) {
float nDotSeg = dot(joinDisplacementDir, left);
displacementLen /= length(nDotSeg * left - joinDisplacementDir);
miterDisplacementLen = displacementLen;
innerDisplacementLen = min(displacementLen, min(leftLen, rightLen)/abs(nDotSeg));
if (!isOutside) {
displacementLen = innerDisplacementLen;
}
}
subdivisionFactor = lineParameters.x;`),l$1||i$1.main.add(a`if(subdivisionFactor > 0.0) {
vIsInsideJoin = 1;
}
vSubdivisionFactor = isOutside ? subdivisionFactor : 0.5;
if (miterDisplacementLen > miterLimit * lineWidth) {
vec2 leftScreenDir = left.xy;
vec2 rightScreenDir = right.xy;
float leftScreenLen = length(leftScreenDir);
float rightScreenLen = length(rightScreenDir);
if (leftScreenLen > EPS && rightScreenLen > EPS) {
leftScreenDir /= leftScreenLen;
rightScreenDir /= rightScreenLen;
float theta = acos(clamp(dot(leftScreenDir, rightScreenDir), -1.0, 1.0));
float subdividedTriangleHeight = (innerDisplacementLen + lineWidth) * cos(theta / (2.0 + 2.0 * NUM_JOIN_SUBDIVISIONS));
float bevelTriangleHeight = innerDisplacementLen + lineWidth * cos(theta * 0.5);
float triangleHeight = NUM_JOIN_SUBDIVISIONS > 0.0 ? subdividedTriangleHeight : bevelTriangleHeight;
vStretchFactor = noPerspectiveWrite(max(triangleHeight / (2.0 * lineWidth), 1.0), pos.w);
}
}`),i$1.main.add(a`if (isOutside && (displacementLen > miterLimit * lineWidth)) {`),pe$1?i$1.main.add(a`
        vec3 startDir = leftLen < EPS ? right : left;
        startDir = perpendicular(startDir);

        vec3 endDir = rightLen < EPS ? left : right;
        endDir = perpendicular(endDir);

        float factor = ${l$1?a`min(1.0, subdivisionFactor * ((NUM_JOIN_SUBDIVISIONS + 1.0) / NUM_JOIN_SUBDIVISIONS))`:a`subdivisionFactor`};

        float rotationAngle = acos(clamp(dot(startDir.xy, endDir.xy), -1.0, 1.0));
        joinDisplacementDir = rotateZ(startDir, -sign(lineParameters.y) * factor * rotationAngle);
      `):i$1.main.add(a`
        vec3 startDir = perpendicular(leftLen < EPS ? right : left);
        vec3 endDir = perpendicular(rightLen < EPS ? left : right);

        ${l(l$1,a`joinDisplacementDir = (isStartVertex || subdivisionFactor > 0.0) ? endDir : startDir;`,a`joinDisplacementDir = mix(startDir, endDir, subdivisionFactor);`)}
  `);let me=P!==0;return i$1.main.add(a`
        displacementLen = lineWidth;
      }
    } else {
      // CAP handling ---------------------------------------------------
      joinDisplacementDir = isStartVertex ? right : left;
      joinDisplacementDir = perpendicular(joinDisplacementDir);

      ${me?a`capDisplacementDir = vec3((isStartVertex ? -right : left).xy, 0.0);`:""}
    }
  `),i$1.main.add(a`
    // Displacement (in pixels) caused by join/or cap
    vec2 dposXY = (joinDisplacementDir.xy * sign(lineParameters.y) + capDisplacementDir.xy) * displacementLen;

    /**
     * To prevent z-fighting between layers, we also adjust the z value.
     * We want to ensure that the orientation of the final triangles is the same, regardless of the line width.
     * To do so, the below formula projects the xy displacement onto the original segment direction
     * to find the z-offset necessary so the triangle orientation is independent of the width.
     */
    float dposZ = dot(dposXY, segmentDirection.xy) / dot(segmentDirection.xy, segmentDirection.xy) * segmentDirection.z;
    vec3 dpos = vec3(dposXY, dposZ);

    float lineDistNorm = noPerspectiveWrite(sign(lineParameters.y), pos.w);

    vLineDistance = lineWidth * lineDistNorm;
    ${T?a`vLineDistanceNorm = lineDistNorm;`:""}

    pos.xyz += dpos;
  `),l$1||i$1.main.add(a`if (isJoin) {
vec2 joinCenterToVertex = dposXY;
vec2 leftCenterlineDir = left.xy;
vec2 rightCenterlineDir = right.xy;
float leftCenterlineLen = length(leftCenterlineDir);
float rightCenterlineLen = length(rightCenterlineDir);
leftCenterlineDir = leftCenterlineLen > EPS ? leftCenterlineDir / leftCenterlineLen : vec2(1.0, 0.0);
rightCenterlineDir = rightCenterlineLen > EPS ? rightCenterlineDir / rightCenterlineLen : leftCenterlineDir;
vJoinCenterLineSDFs = noPerspectiveWrite(
vec2(
dot(vec2(rightCenterlineDir.y, -rightCenterlineDir.x), joinCenterToVertex),
dot(vec2(leftCenterlineDir.y, -leftCenterlineDir.x), joinCenterToVertex)
),
pos.w
);
}`),h&&i$1.main.add(a`vec2 segmentDir = normalize(segment.xy);
vSegmentSDF = noPerspectiveWrite((isJoin && isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentOrigin.xy, segmentDir)), pos.w);
vReverseSegmentSDF = noPerspectiveWrite((isJoin && !isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentEnd.xy, -segmentDir)), pos.w);`),l$1&&(d?i$1.uniforms.add(new s$1("worldToScreenRatio",r=>1/r.screenToPCSRatio)):i$1.main.add(a`vec3 segmentCenter = mix((nextPosition + position) * 0.5, (position + prevPosition) * 0.5, isEndVertex);
float worldToScreenRatio = computeWorldToScreenRatio(segmentCenter);`),i$1.main.add(a`float segmentLengthScreenDouble = length(segment.xy);
float segmentLengthScreen = segmentLengthScreenDouble * 0.5;
float discreteWorldToScreenRatio = discretizeWorldToScreenRatio(worldToScreenRatio);
float segmentLengthRender = length(mix(nextPosition - position, position - prevPosition, isEndVertex));
vStipplePatternStretch = worldToScreenRatio / discreteWorldToScreenRatio;`),d?i$1.main.add(a`float segmentLengthPseudoScreen = segmentLengthScreen / pixelRatio * discreteWorldToScreenRatio / worldToScreenRatio;
float startPseudoScreen = u0 * discreteWorldToScreenRatio - mix(0.0, segmentLengthPseudoScreen, isEndVertex);`):i$1.main.add(a`float startPseudoScreen = mix(u0, u0 - segmentLengthRender, isEndVertex) * discreteWorldToScreenRatio;
float segmentLengthPseudoScreen = segmentLengthRender * discreteWorldToScreenRatio;`),i$1.uniforms.add(new r("stipplePatternPixelSize",r=>y(r))),i$1.main.add(a`
      float patternLength = patternLineSize * stipplePatternPixelSize;

      ${l(R,a`
          float uu = mix(u0, u0 - segmentLengthRender, isEndVertex);
          vStippleDistanceLimits = vec2(uu, uu + segmentLengthRender);
          vStipplePatternStretch = 1.0;

          // The v-coordinate used in case of an image pattern.
          bool isLeft = sign(lineParameters.y) < 0.0;
          vStippleV = isLeft ? 0.0 : 1.0;
        `,a`
          // Compute the coordinates at both start and end of the line segment, because we need both to clamp to in the
          // fragment shader
          vStippleDistanceLimits = computeStippleDistanceLimits(startPseudoScreen, segmentLengthPseudoScreen, segmentLengthScreen, patternLength);
        `)}

      vStippleDistance = mix(vStippleDistanceLimits.x, vStippleDistanceLimits.y, isEndVertex);

      // Adjust the coordinate to the displaced position (the pattern is shortened/overextended on the in/outside of
      // joins)
      if (segmentLengthScreenDouble >= EPS) {
        // Project the actual vertex position onto the line segment. Note that the resulting factor is within [0..1]
        // at the original vertex positions, and slightly outside of that range at the displaced positions
        vec3 stippleDisplacement = pos.xyz - segmentOrigin;
        float stippleDisplacementFactor = dot(segment.xy, stippleDisplacement.xy) / (segmentLengthScreenDouble * segmentLengthScreenDouble);

        // Apply this offset to the actual vertex coordinate (can be screen or pseudo-screen space)
        vStippleDistance += (stippleDisplacementFactor - isEndVertex) * (vStippleDistanceLimits.y - vStippleDistanceLimits.x);
      }

      // Cancel out perspective correct interpolation because we want this length the really represent the screen
      // distance
      vStippleDistanceLimits = noPerspectiveWrite(vStippleDistanceLimits, pos.w);
      vStippleDistance = noPerspectiveWrite(vStippleDistance, pos.w);

      // Disable stipple distance limits on caps
      vStippleDistanceLimits = isJoin ?
                                 vStippleDistanceLimits :
                                 isStartVertex ?
                                  vec2(-1e34, vStippleDistanceLimits.y) :
                                  vec2(vStippleDistanceLimits.x, 1e34);
    `)),i$1.main.add(a`
      // Convert back into NDC
      pos.xy = (pos.xy / viewport.zw) * pos.w;
      pos.z = pos.z * pos.w;

      vColor = getColor();
      vColor.a = noPerspectiveWrite(vColor.a * coverage, pos.w);

      ${w&&!d?"pos.z -= EPS * pos.w;":""}

      // transform final position to camera space for slicing
      vpos = (inverseProjectionMatrix * pos).xyz;
      gl_Position = pos;
      forwardObjectAndLayerIdColor();
    }`),a$1.fragment.include(ss,t),a$1.include(ji$1,t),n$1.include(g),n$1.main.add(a`discardBySlice(vpos);`),a$1.include(de),n$1.include(R$2),n$1.main.add(a`
    float lineWidth = noPerspectiveRead(vLineWidth);
    float lineDistance = noPerspectiveRead(vLineDistance);
    ${l(T,a`float lineDistanceNorm = noPerspectiveRead(vLineDistanceNorm);`)}
  `),w?n$1.main.add(a`vec4 finalColor = vec4(1.0, 0.0, 1.0, 1.0);`):(h&&n$1.main.add(a`float sdf = noPerspectiveRead(min(vSegmentSDF, vReverseSegmentSDF));
vec2 fragmentPosition = vec2(min(sdf, 0.0), lineDistance);
float fragmentRadius = length(fragmentPosition);
float fragmentCapSDF = (fragmentRadius - lineWidth) * 0.5;
float capCoverage = clamp(0.5 - fragmentCapSDF, 0.0, 1.0);
if (capCoverage < alphaCutoff) {
discard;
}`),W?n$1.main.add(a`vec2 stipplePosition = vec2(
min(getStippleSDF() * 2.0 - 1.0, 0.0),
lineDistanceNorm
);
float stippleRadius = length(stipplePosition * lineWidth);
float stippleCapSDF = (stippleRadius - lineWidth) * 0.5;
float stippleCoverage = clamp(0.5 - stippleCapSDF, 0.0, 1.0);
float stippleAlpha = step(alphaCutoff, stippleCoverage);`):n$1.main.add(a`float stippleAlpha = getStippleAlpha(lineWidth);`),m!==11&&n$1.main.add(a`discardByStippleAlpha(stippleAlpha, alphaCutoff);`),a$1.include(de),n$1.uniforms.add(new r$2("intrinsicColor",r=>r.color)).main.add(a`vec4 color = intrinsicColor * vColor;
color.a = noPerspectiveRead(color.a);`),de$1&&n$1.uniforms.add(new r$2("innerColor",r=>r.innerColor??r.color),new r("innerWidth",(r,fe)=>r.innerWidth*fe.camera.pixelRatio)).main.add(a`float distToInner = abs(lineDistance) - innerWidth;
float innerAA = clamp(0.5 - distToInner, 0.0, 1.0);
float innerAlpha = innerColor.a + color.a * (1.0 - innerColor.a);
color = mix(color, vec4(innerColor.rgb, innerAlpha), innerAA);`),n$1.main.add(a`vec4 finalColor = blendStipple(color, stippleAlpha);`),F&&(n$1.uniforms.add(new r("falloff",r=>r.falloff)),n$1.main.add(a`finalColor.a *= pow(max(0.0, 1.0 - abs(lineDistanceNorm)), falloff);`)),l$1||n$1.main.add(a`float stretchFactor = vIsInsideJoin == 1 ? noPerspectiveRead(vStretchFactor) : 1.0;
float featherWidth = 2.0;
float featherStartDistance = max(lineWidth - featherWidth / stretchFactor, 0.0);
float straightFeatherStartDistance = max(lineWidth - featherWidth, 0.0);
float value = abs(lineDistance);
float feather = (value - featherStartDistance) / (lineWidth - featherStartDistance);
vec2 joinCenterSDFs = noPerspectiveRead(vJoinCenterLineSDFs);
float joinCenterDistance = abs(vSubdivisionFactor > 0.5 ? joinCenterSDFs.x : joinCenterSDFs.y);
float straightFeather = (joinCenterDistance - straightFeatherStartDistance) / (lineWidth - straightFeatherStartDistance);
feather = vIsInsideJoin == 1 ? max(feather, straightFeather) : feather;
finalColor.a *= 1.0 - clamp(feather, 0.0, 1.0);`),ce$1&&n$1.main.add(a`
        finalColor = animate(finalColor);

        ${l(m!==11,a`
            if (finalColor.a <= alphaCutoff) {
              discard;
            }`)}
      `)),n$1.main.add(a`outputColorHighlightOLID(applySlice(finalColor, vpos), finalColor.rgb);`),a$1}var Et=Object.freeze(Object.defineProperty({__proto__:null,build:ye,ribbonlineNumRoundJoinSubdivisions:Ce$1},Symbol.toStringTag,{value:"Module"}));function Wi(i,e,r,t,s,l,c,p,a,o,n){let f=yi[n.mode],u,h,d=0;if(Hn(i,e,r,t,a.spatialReference,s,p))return f?.requiresAlignment(n)?(d=f.applyElevationAlignmentBuffer(t,s,l,c,p,a,o,n),u=l,h=c):(u=t,h=s),Hn(u,a.spatialReference,h,l,o.spatialReference,c,p)?d:void 0}function ii(i,e,r,t,s){let l=(G$1(i)?i.z:K$2(i)?i.array[i.offset+2]:i[2])||0;switch(r.mode){case "on-the-ground":{let c=it$1(e,i,"ground")??0;return s.verticalDistanceToGround=0,s.sampledElevation=c,void(s.z=c)}case "relative-to-ground":{let c=it$1(e,i,"ground")??0,p=r.geometryZWithOffset(l,t);return s.verticalDistanceToGround=p,s.sampledElevation=c,void(s.z=p+c)}case "relative-to-scene":{let c=it$1(e,i,"scene")??0,p=r.geometryZWithOffset(l,t);return s.verticalDistanceToGround=p,s.sampledElevation=c,void(s.z=p+c)}case "absolute-height":{let c=r.geometryZWithOffset(l,t),p=it$1(e,i,"ground")??0;return s.verticalDistanceToGround=c-p,s.sampledElevation=p,void(s.z=c)}default:return void(s.z=0)}}function ji(i,e,r,t){return ii(i,e,r,t,oe),oe.z}function Ni(i,e,r){return e==="on-the-ground"&&r==="on-the-ground"?i.staysOnTheGround:e===r||e!=="on-the-ground"&&r!=="on-the-ground"?e==null||r==null?i.definedChanged:1:i.onTheGroundChanged}function ki(i){return i==="relative-to-ground"||i==="relative-to-scene"}function Ui(i){return i!=="absolute-height"}function Bi(i,e,r,t,s){ii(e,r,s,t,oe),di(i,oe.verticalDistanceToGround);let l=oe.sampledElevation,c=N$2(Si,i.transformation);return Ae[0]=e.x,Ae[1]=e.y,Ae[2]=oe.z,q$3(e.spatialReference,Ae,c,t.spatialReference)?i.transformation=c:console.warn("Could not locate symbol object properly, it might be misplaced"),l}function di(i,e){for(let r=0;r<i.geometries.length;++r){let t=i.geometries[r].getMutableAttribute("groundDistance");t&&t.data[0]!==e&&(t.data[0]=e,i.geometryVertexAttributeUpdated(i.geometries[r],"groundDistance"));}}function fi(i,e,r,t,s,l){let c=0,p=l.spatialReference;e*=3,t*=3;for(let a=0;a<s;++a){let o=i[e],n=i[e+1],f=i[e+2],u=l.getElevation(o,n,f,p,"ground")??0;c+=u,r[t]=o,r[t+1]=n,r[t+2]=u,e+=3,t+=3;}return c/s}function gi(i,e,r,t,s,l,c,p){let a=0,o=p.calculateOffsetRenderUnits(c),n=p.featureExpressionInfoContext,f=l.spatialReference;e*=3,t*=3;for(let u=0;u<s;++u){let h=i[e],d=i[e+1],W=i[e+2],P=l.getElevation(h,d,W,f,"ground")??0;a+=P,r[t]=h,r[t+1]=d,r[t+2]=n==null?W+P+o:P+o,e+=3,t+=3;}return a/s}function vi(i,e,r,t,s,l,c,p){let a=0,o=p.calculateOffsetRenderUnits(c),n=p.featureExpressionInfoContext,f=l.spatialReference;e*=3,t*=3;for(let u=0;u<s;++u){let h=i[e],d=i[e+1],W=i[e+2],P=l.getElevation(h,d,W,f,"scene")??0;a+=P,r[t]=h,r[t+1]=d,r[t+2]=n==null?W+P+o:P+o,e+=3,t+=3;}return a/s}function bi(i){let e=i.meterUnitOffset,r=i.featureExpressionInfoContext;return e!==0||r!=null}function _i(i,e,r,t,s,l,c,p){let a=p.calculateOffsetRenderUnits(c),o=p.featureExpressionInfoContext;e*=3,t*=3;for(let n=0;n<s;++n){let f=i[e],u=i[e+1],h=i[e+2];r[t]=f,r[t+1]=u,r[t+2]=o==null?h+a:a,e+=3,t+=3;}return 0}var Ze=class{constructor(){this.verticalDistanceToGround=0,this.sampledElevation=0,this.z=0;}},yi={"absolute-height":{applyElevationAlignmentBuffer:_i,requiresAlignment:bi},"on-the-ground":{applyElevationAlignmentBuffer:fi,requiresAlignment:()=>true},"relative-to-ground":{applyElevationAlignmentBuffer:gi,requiresAlignment:()=>true},"relative-to-scene":{applyElevationAlignmentBuffer:vi,requiresAlignment:()=>true}},Si=t(),oe=new Ze,Ae=o$5();function Me(i){let e=ge$1().vec3f("position").vec4f16("previousDelta").vec4f16("nextDelta").f32("u0").vec2f16("lineParameters");return i.hasVVColor?e.f32("colorFeatureAttribute"):e.vec4u8("color",{glNormalized:true}),i.hasVVSize?e.f32("sizeFeatureAttribute"):e.f32("size"),i.hasVVOpacity&&e.f32("opacityFeatureAttribute"),st$1()&&e.vec4u8("olidColor"),i.hasAnimation&&e.vec4f16("timeStamps"),e}var Ce=class extends St{constructor(i,e){super(i,e,ie$1(Me(e))),this.shader=new Ct(Et,()=>import('./chunk-Bpw2VVPq.js').then(function(n){return n.c})),this.ignoreUnused=true,this.primitiveType=e.wireframe?E$1.LINES:E$1.TRIANGLE_STRIP;}_makePipelineState(i,e){let{output:r,hasOccludees:t}=i;return J$2({blending:Ci$1(r,false,i.emissionDimmingPass),depthTest:zi$1(r),depthWrite:Mi$1(i),colorWrite:$$3,stencilWrite:t?ki$1:null,stencilTest:t?e?Ei$1:Vi:null,polygonOffset:ci$1(i)})}initializePipeline(i){if(i.occluder){let{hasOccludees:e}=i;this._occluderPipelineTransparent=J$2({blending:U$4,polygonOffset:ci$1(i),depthTest:Di,depthWrite:null,colorWrite:$$3,stencilWrite:null,stencilTest:e?Hi:null}),this._occluderPipelineOpaque=J$2({blending:U$4,polygonOffset:ci$1(i),depthTest:e?Di:Si$1,depthWrite:null,colorWrite:$$3,stencilWrite:e?Ni$1:null,stencilTest:e?qi:null}),this._occluderPipelineMaskWrite=J$2({blending:null,polygonOffset:ci$1(i),depthTest:Si$1,depthWrite:null,colorWrite:null,stencilWrite:e?ki$1:null,stencilTest:e?Ei$1:null});}return this._occludeePipeline=this._makePipelineState(i,true),this._makePipelineState(i,false)}getPipeline(i,e,r){if(r)return this._occludeePipeline;switch(i.occluder){case 11:return this._occluderPipelineTransparent??super.getPipeline(i,e,r);case 10:return this._occluderPipelineOpaque??super.getPipeline(i,e,r);default:i.occluder;case void 0:case null:return this._occluderPipelineMaskWrite??super.getPipeline(i,e,r)}}};Ce=P$3([vn("esri.views.3d.webgl-engine.shaders.RibbonLineTechnique")],Ce);var Pi=16,Oi=8,v=class extends o$4{constructor(e){super(),this.spherical=e,this.capType=0,this.emissionSource=0,this.animation=2,this.polygonOffsetIndex=0,this.writeDepth=false,this.draped=false,this.stippleEnabled=false,this.stippleOffColorEnabled=false,this.stipplePreferContinuous=true,this.numJoinSubdivisions=1,this.roundJoins=false,this.applyMarkerOffset=false,this.hasVVSize=false,this.hasVVColor=false,this.hasVVOpacity=false,this.falloffEnabled=false,this.innerColorEnabled=false,this.hasOccludees=false,this.occluder=false,this.wireframe=false,this.discardInvisibleFragments=false,this.hasScreenSizePerspective=false,this.worldSizedImagePattern=false,this.textureCoordinateType=0,this.hasVVInstancing=false,this.hasSliceTranslatedView=true,this.overlayEnabled=false,this.snowCover=false;}get hasAnimation(){return this.animation!==0}};P$3([b$1({count:3})],v.prototype,"capType",void 0),P$3([b$1({count:8})],v.prototype,"emissionSource",void 0),P$3([b$1({count:4})],v.prototype,"animation",void 0),P$3([b$1({count:Pi})],v.prototype,"polygonOffsetIndex",void 0),P$3([b$1()],v.prototype,"writeDepth",void 0),P$3([b$1()],v.prototype,"draped",void 0),P$3([b$1()],v.prototype,"stippleEnabled",void 0),P$3([b$1()],v.prototype,"stippleOffColorEnabled",void 0),P$3([b$1()],v.prototype,"stipplePreferContinuous",void 0),P$3([b$1({count:Oi})],v.prototype,"numJoinSubdivisions",void 0),P$3([b$1()],v.prototype,"roundJoins",void 0),P$3([b$1()],v.prototype,"applyMarkerOffset",void 0),P$3([b$1()],v.prototype,"hasVVSize",void 0),P$3([b$1()],v.prototype,"hasVVColor",void 0),P$3([b$1()],v.prototype,"hasVVOpacity",void 0),P$3([b$1()],v.prototype,"falloffEnabled",void 0),P$3([b$1()],v.prototype,"innerColorEnabled",void 0),P$3([b$1()],v.prototype,"hasOccludees",void 0),P$3([b$1()],v.prototype,"occluder",void 0),P$3([b$1()],v.prototype,"wireframe",void 0),P$3([b$1()],v.prototype,"discardInvisibleFragments",void 0),P$3([b$1()],v.prototype,"hasScreenSizePerspective",void 0),P$3([b$1()],v.prototype,"worldSizedImagePattern",void 0);var Re=class extends Kt{constructor(e,r){super(e,st),this.produces=new Map([[2,t=>y$1(t)||v$3(t)&&this.parameters.renderOccluded===8],[3,t=>B$1(t)],[10,t=>$$2(t)&&this.parameters.renderOccluded===8],[11,t=>$$2(t)&&this.parameters.renderOccluded===8],[4,t=>v$3(t)&&this.parameters.writeDepth&&this.parameters.renderOccluded!==8],[8,t=>v$3(t)&&!this.parameters.writeDepth&&this.parameters.renderOccluded!==8],[18,t=>P(t)]]),this._configuration=new v(r);}updateConfiguration(e){super.updateConfiguration(e);let r=e.slot===18,t=this.parameters.stipplePattern!=null&&this.parameters.stippleTexture!=null&&e.output!==10,s=t&&r&&this.parameters.isImagePattern();this._configuration.draped=r,this._configuration.polygonOffset=this.parameters.polygonOffset,this._configuration.stippleEnabled=t,this._configuration.stippleOffColorEnabled=t&&this.parameters.stippleOffColor!=null,this._configuration.stipplePreferContinuous=t&&this.parameters.stipplePreferContinuous,this._configuration.numJoinSubdivisions=li(this.parameters.join,t),this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.roundJoins=this.parameters.join==="round",this._configuration.capType=this.parameters.cap,this._configuration.applyMarkerOffset=this.parameters.markerParameters!=null&&Ei(this.parameters.markerParameters),this._configuration.polygonOffsetIndex=this.parameters.polygonOffsetIndex,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.hasVVSize=this.parameters.hasVVSize,this._configuration.hasVVColor=this.parameters.hasVVColor,this._configuration.hasVVOpacity=this.parameters.hasVVOpacity,this._configuration.innerColorEnabled=this.parameters.innerWidth>0&&this.parameters.innerColor!=null,this._configuration.falloffEnabled=this.parameters.falloff>0,this._configuration.hasOccludees=e.hasOccludees,this._configuration.occluder=this.parameters.renderOccluded===8,this._configuration.wireframe=this.parameters.wireframe,this._configuration.animation=this.parameters.animation,this._configuration.emissionSource=this.emissions?1:0,this._configuration.hasScreenSizePerspective=!!this.parameters.screenSizePerspective&&!s,this._configuration.worldSizedImagePattern=s;}get visible(){return this.parameters.color[3]>=O||this.parameters.stipplePattern!=null&&(this.parameters.stippleOffColor?.[3]??0)>O}get emissions(){return this.parameters.emissiveStrength>0?this.parameters.renderOccluded!==8?2:1:0}setParameters(e,r){e.animation=this.parameters.animation,super.setParameters(e,r);}intersectDraped({attributes:e,screenToWorldRatio:r},t,s,l,c){if(!t.options.selectionMode)return;let p=e.get("size"),a=this.parameters.width;if(this.parameters.vvSize){let P=e.get("sizeFeatureAttribute").data[0];Number.isNaN(P)?a*=this.parameters.vvSize.fallback[0]:a*=h(this.parameters.vvSize.offset[0]+P*this.parameters.vvSize.factor[0],this.parameters.vvSize.minSize[0],this.parameters.vvSize.maxSize[0]);}else p&&(a*=p.data[0]);let o=s[0],n=s[1],f=(a/2+4)*r,u=Number.MAX_VALUE,h$1=0,d=e.get("position").data,W=ot(this.parameters,e)?d.length-2:d.length-5;for(let P=0;P<W;P+=3){let E=d[P],Y=d[P+1],Z=(P+3)%d.length,Q=o-E,m=n-Y,C=d[Z]-E,L=d[Z+1]-Y,j=h((C*Q+L*m)/(C*C+L*L),0,1),H=C*j-Q,z=L*j-m,w=H*H+z*z;w<u&&(u=w,h$1=P/3);}u<f*f&&l(c.distance,c.normal,h$1);}intersect(e,r,t,s,l,c){let{options:p,camera:a,rayBegin:o,rayEnd:n}=t;if(!p.selectionMode||!e.visible||!a)return;if(!v$4(r))return void y$2.getLogger("esri.views.3d.webgl-engine.materials.RibbonLineMaterial").error("intersection assumes a translation-only matrix");let f=e.attributes,u=f.get("position").data,h$1=this.parameters.width;if(this.parameters.vvSize){let m=f.get("sizeFeatureAttribute").data[0];Number.isNaN(m)||(h$1*=h(this.parameters.vvSize.offset[0]+m*this.parameters.vvSize.factor[0],this.parameters.vvSize.minSize[0],this.parameters.vvSize.maxSize[0]));}else f.has("size")&&(h$1*=f.get("size").data[0]);let d=wi;g$1(d,t.point);let W=h$1*a.pixelRatio,P=4*a.pixelRatio,E=W/2+P;P$1(fe[0],d[0]-E,d[1]+E,0),P$1(fe[1],d[0]+E,d[1]+E,0),P$1(fe[2],d[0]+E,d[1]-E,0),P$1(fe[3],d[0]-E,d[1]-E,0);for(let m=0;m<4;m++)if(!a.unprojectFromRenderScreen(fe[m],$[m]))return;K$1(a.eye,$[0],$[1],Qe),K$1(a.eye,$[1],$[2],et),K$1(a.eye,$[2],$[3],tt),K$1(a.eye,$[3],$[0],it);let Y=Number.MAX_VALUE,Z=0,Q=ot(this.parameters,f)?u.length-2:u.length-5;for(let m=0;m<Q;m+=3){R[0]=u[m]+r[12],R[1]=u[m+1]+r[13],R[2]=u[m+2]+r[14];let C=(m+3)%u.length;if(V[0]=u[C]+r[12],V[1]=u[C+1]+r[13],V[2]=u[C+2]+r[14],P$2(Qe,R)<0&&P$2(Qe,V)<0||P$2(et,R)<0&&P$2(et,V)<0||P$2(tt,R)<0&&P$2(tt,V)<0||P$2(it,R)<0&&P$2(it,V)<0)continue;let L=a.projectToRenderScreen(R,Ti),j=a.projectToRenderScreen(V,zi);if(L==null||j==null)continue;if(L[2]<0&&j[2]>0){v$5(q,R,V);let w=a.frustum,x=-P$2(w[4],R)/Q$1(q,w[4]);if(k(q,q,x),j$1(R,R,q),!a.projectToRenderScreen(R,L))continue}else if(L[2]>0&&j[2]<0){v$5(q,V,R);let w=a.frustum,x=-P$2(w[4],V)/Q$1(q,w[4]);if(k(q,q,x),j$1(V,V,q),!a.projectToRenderScreen(V,j))continue}else if(L[2]<0&&j[2]<0)continue;L[2]=0,j[2]=0;let H=T$1(L,j,ni),z=U$2(H,d);if(!(z>=Y)){if(this.parameters.screenSizePerspective){let w=this.computeScreenSizePerspectiveWidth(H,R,V,d,a,h$1,P);if(z>=w*w)continue}Y=z,O$1(ai,R),O$1(oi,V),Z=m/3;}}if(Y<E*E){let m=Number.MAX_VALUE;if(_$2(T$1(ai,oi,ni),T$1(o,n,Ai),J)){v$5(J,J,o);let C=x$1(J);k(J,J,1/C),m=C/y$3(o,n);}c(m,J,Z);}}createBufferWriter(){return new at(Me(this.parameters),this.parameters)}createGLMaterial(e){return new rt(e)}validateParameters(e){e.join!=="miter"&&(e.miterLimit=0),e.markerParameters!=null&&(e.markerScale=e.markerParameters.width/e.width);}update(e){return !!this.parameters.hasAnimation&&(this.setParameters({timeElapsed:e$2(e.time)},false),e.dt!==0)}computeScreenSizePerspectiveWidth(e,r,t,s,l,c,p){let a=X$1(e,s);H$1(Ke,r,t,a),W$1(si,Ke,l.viewMatrix);let o=x$1(si),n=this.computeCameraAbsCosAngle(Ke,l,this._configuration.spherical);return ri.update(n,o,this.parameters.screenSizePerspective,this.parameters.screenSizePerspectiveMinPixelReferenceSize),ri.apply(c)*l.pixelRatio/2+p}computeCameraAbsCosAngle(e,r,t){return t?d(J,e):P$1(J,0,0,1),v$5(xe,e,r.eye),d(xe,xe),Math.abs(Q$1(J,xe))}},rt=class extends ie{constructor(){super(...arguments),this._stipplePattern=null;}dispose(){super.dispose(),this._stippleTextures?.release(this._stipplePattern),this._stipplePattern=null;}beginSlot(e){let{stipplePattern:r}=this._material.parameters;return this._stipplePattern!==r&&(this._material.setParameters({stippleTexture:this._stippleTextures.swap(r,this._stipplePattern)}),this._stipplePattern=r),this.getTechnique(Ce,e)}},st=class extends ut{constructor(){super(...arguments),this._width=0,this.color=U$3,this.join="miter",this.cap=0,this.miterLimit=5,this.writeDepth=true,this.polygonOffset=0,this.polygonOffsetIndex=0,this.stippleTexture=null,this.stipplePreferContinuous=true,this.markerParameters=null,this.markerScale=1,this.hasSlicePlane=false,this.vvFastUpdate=false,this.isClosed=false,this.falloff=0,this.innerWidth=0,this.wireframe=false,this.timeElapsed=0,this.animation=0,this.animationSpeed=1,this.trailLength=1,this.startTime=0,this.endTime=1/0,this.emissiveStrength=0;}get width(){return this.isImagePattern()?this.stipplePattern.width:this._width}set width(e){this._width=e;}get transparent(){return this.color[3]<1||this.hasAnimation||this.stipplePattern!=null&&(this.stippleOffColor?.[3]??0)<1}get hasAnimation(){return this.animation!==0}isImagePattern(){return C(this.stipplePattern)&&this.stippleTexture!=null}},at=class{constructor(e,r){this.layout=e,this._parameters=r,this.numJoinSubdivisions=li(this._parameters.join,this._parameters.stipplePattern!=null);}_isClosed(e){return ot(this._parameters,e)}allocate(e){return this.layout.createBuffer(e)}elementCount(e){let t=e.get("position").indices.length/2+1,s=this._isClosed(e),l=s?2:4;return l+=((s?t:t-1)-(s?0:1))*(2*this.numJoinSubdivisions+4),l+=2,this._parameters.wireframe&&(l=2+4*(l-2)),l}write(e,r,t,s,l,c){let{buffer:p,offset:a}=l,o=this.layout,n=t.get("position"),f=n.indices,u=n.data.length/3,h=t.get("distanceToStart")?.data;f&&f.length!==2*(u-1)&&console.warn("RibbonLineMaterial does not support indices");let d=o.fields.has("sizeFeatureAttribute"),W=1,P=null;if(d){let g=t.get("sizeFeatureAttribute");g.data.length===1?W=g.data[0]:P=g.data;}else W=t.get("size")?.data[0]??1;let E=[1,1,1,1],Y=0,Z=null,Q=o.fields.has("colorFeatureAttribute");if(Q){let g=t.get("colorFeatureAttribute");g.data.length===1?Y=g.data[0]:Z=g.data;}else E=t.get("color")?.data??E;let m=t.get("timeStamps")?.data,C=m&&o.fields.has("timeStamps"),L=o.fields.has("opacityFeatureAttribute"),j=0,H=null;if(L){let g=t.get("opacityFeatureAttribute");g.data.length===1?j=g.data[0]:H=g.data;}let z=new Float32Array(p.buffer),w=K$3(p.buffer),x=new Uint8Array(p.buffer),ee=o.stride/4,y=a*ee,Le=y,D=0,Ie=h?(g,U,ie)=>D=h[ie]:(g,U,ie)=>D+=y$3(g,U),te=z.BYTES_PER_ELEMENT/w.BYTES_PER_ELEMENT,lt=4/te,ui=st$1(),k=(g,U,ie,N,ve,hi,be,mi)=>{z[y++]=U[0],z[y++]=U[1],z[y++]=U[2],Ii(g,U,w,y*te),y+=lt,Ii(ie,U,w,y*te),y+=lt,z[y++]=mi;let X=y*te;if(w[X++]=ve,w[X++]=hi,y=Math.ceil(X/te),Q)z[y]=Z?.[be]??Y;else {let F=Math.min(4*be,E.length-4),_e=4*y;x[_e]=255*E[F],x[_e+1]=255*E[F+1],x[_e+2]=255*E[F+2],x[_e+3]=255*E[F+3];}if(y++,z[y++]=P?.[be]??W,L&&(z[y++]=H?.[be]??j),ui){let F=4*y;s?(x[F++]=s[0],x[F++]=s[1],x[F++]=s[2],x[F++]=s[3]):(x[F++]=0,x[F++]=0,x[F++]=0,x[F++]=0),y=Math.ceil(.25*F);}C&&(X=y*te,w[X++]=N[0],w[X++]=N[1],w[X++]=N[2],w[X++]=N[3],y=Math.ceil(X/te));};y+=ee,P$1(_,n.data[0],n.data[1],n.data[2]),C&&L$2(I,m[0],m[1],m[2],m[3]),e&&W$1(_,_,e);let ge=this._isClosed(t);if(ge){let g=n.data.length-3;P$1(M,n.data[g],n.data[g+1],n.data[g+2]),e&&W$1(M,M,e);}else P$1(T,n.data[3],n.data[4],n.data[5]),e&&W$1(T,T,e),k(_,_,T,I,1,-4,0,0),k(_,_,T,I,1,4,0,0),O$1(M,_),O$1(_,T),C&&L$2(I,m[4],m[5],m[6],m[7]);let De=ge?0:1,ne=ge?u:u-1;for(let g=De;g<ne;g++){let U=(g+1)%u*3;P$1(T,n.data[U],n.data[U+1],n.data[U+2]),e&&W$1(T,T,e),Ie(M,_,g),k(M,_,T,I,0,-1,g,D),k(M,_,T,I,0,1,g,D);let ie=this.numJoinSubdivisions;for(let N=0;N<ie;++N){let ve=(N+1)/(ie+1);k(M,_,T,I,ve,-1,g,D),k(M,_,T,I,ve,1,g,D);}if(k(M,_,T,I,1,-2,g,D),k(M,_,T,I,1,2,g,D),O$1(M,_),O$1(_,T),C){let N=(g+1)%u*4;L$2(I,m[N],m[N+1],m[N+2],m[N+3]);}}ge?(P$1(T,n.data[3],n.data[4],n.data[5]),e&&W$1(T,T,e),D=Ie(M,_,ne),k(M,_,T,I,0,-1,De,D),k(M,_,T,I,0,1,De,D)):(D=Ie(M,_,ne),k(M,_,_,I,0,-5,ne,D),k(M,_,_,I,0,5,ne,D)),He(z,Le+ee,z,Le,ee),y=He(z,y-ee,z,y,ee),this._parameters.wireframe&&this._addWireframeVertices(p,Le,y,ee);}_addWireframeVertices(e,r,t,s){let l=new Float32Array(e.buffer,t*Float32Array.BYTES_PER_ELEMENT),c=new Float32Array(e.buffer,r*Float32Array.BYTES_PER_ELEMENT,t-r),p=0,a=o=>p=He(c,o,l,p,s);for(let o=0;o<c.length-1;o+=2*s)a(o),a(o+2*s),a(o+1*s),a(o+2*s),a(o+1*s),a(o+3*s);}};function He(i,e,r,t,s){for(let l=0;l<s;l++)r[t++]=i[e++];return t}function ot(i,e){return i.isClosed?e.get("position").indices.length>2:false}function Ei(i){return i.anchor===1&&i.hideOnShortSegments&&i.placement==="begin-end"&&i.worldSpace}function li(i,e){let r=e?1:0;switch(i){case "miter":case "bevel":return r;case "round":return Ce$1+r}}var ri=new n$1,R=o$5(),V=o$5(),Ke=o$5(),si=o$5(),xe=o$5(),q=o$5(),J=o$5(),wi=o$5(),Ti=M$1(),zi=M$1(),ai=o$5(),oi=o$5(),ni=y$4(),Ai=y$4(),M=o$5(),_=o$5(),T=o$5(),I=o$3(),fe=[M$1(),M$1(),M$1(),M$1()],$=[o$5(),o$5(),o$5(),o$5()],Qe=D$1(),et=D$1(),tt=D$1(),it=D$1();var nt=class{constructor(e,r){this.vec3=e,this.id=r;}};function Ve(i,e,r,t){return new nt(t$2(i,e,r),t)}var ci=class{constructor(e){this._originSR=e,this._rootOriginId="root/"+Ur(),this._origins=new Map,this._objects=new Map,this._gridSize=5e5,this._originSR?.isGeographic&&(this._gridSize/=b(this._originSR)),this._baselineDistance=.5*this._gridSize;let r=this._baselineDistance*Mi;this._baselineObjectSize=r/Ci;}getOrigin(e){let r=this._origins.get(this._rootOriginId);if(r==null){let f=Ve(e[0]+Math.random()-.5,e[1]+Math.random()-.5,e[2]+Math.random()-.5,this._rootOriginId);return this._origins.set(this._rootOriginId,f),f}let t=this._gridSize,s=Math.round(e[0]/t),l=Math.round(e[1]/t),c=Math.round(e[2]/t),p=`${s}/${l}/${c}`,a=this._origins.get(p),o=.5*t;if(v$5(A,e,r.vec3),A[0]=Math.abs(A[0]),A[1]=Math.abs(A[1]),A[2]=Math.abs(A[2]),A[0]<o&&A[1]<o&&A[2]<o){if(a){let n=Math.max(...A);if(v$5(A,e,a.vec3),A[0]=Math.abs(A[0]),A[1]=Math.abs(A[1]),A[2]=Math.abs(A[2]),Math.max(...A)<n)return a}return r}return a||(a=Ve(s*t,l*t,c*t,p),this._origins.set(p,a)),a}needsOriginUpdate(e,r,t){let s=y$3(e.vec3,r),l=Math.max(1,t/this._baselineObjectSize);return s>this._baselineDistance*l}_drawOriginBox(e,r=r$4(1,1,0,1)){let t=window.view,s=t.stage,l=r.toString();if(!this._objects.has(l)){this._material=new Re({width:2,color:r},false);let h=new q$2(s,{pickable:false}),d=new X$2({castShadow:false});h.add(d),this._objects.set(l,d);}let c$1=this._objects.get(l),p=[0,1,5,4,0,2,1,7,6,2,0,1,3,7,5,4,6,2,0],a=p.length,o=new Array(3*a),n=new Array,f=.5*this._gridSize;for(let h=0;h<a;h++)o[3*h]=e[0]+(1&p[h]?f:-f),o[3*h+1]=e[1]+(2&p[h]?f:-f),o[3*h+2]=e[2]+(4&p[h]?f:-f),h>0&&n.push(h-1,h);Hn(o,this._originSR,0,o,t.renderSpatialReference,0,a);let u=new Jt(this._material,[["position",new c(o,n,3,true)]],null,2);c$1.addGeometry(u);}get test(){}},A=o$5(),Mi=2**-23,Ci=.05;export{Bi as B,Ce$1 as C,Fe as F,G,Ni as N,Pi as P,Re as R,Se$1 as S,Ui as U,Ve as V,Wi as W,Ze as Z,ii as a,ce as b,ci as c,di as d,We as e,N as f,de as g,he$1 as h,i,ji as j,ki as k,we as l,pe as p,u,we$1 as w,x,ye as y,ze as z};