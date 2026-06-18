import{a as H,b as X,c as u,l as Y}from"./chunk-UN2VFQBU.js";import{a as K}from"./chunk-WZITM4Q5.js";import{a as G}from"./chunk-4IC2S2U5.js";import{a as Z}from"./chunk-JXKPIB3A.js";import{a as U}from"./chunk-7JJBCEUY.js";import{b as M}from"./chunk-6UBDFNHA.js";import{b as $,c as B,e as x,f as k,h as ee,k as ie}from"./chunk-P4VQAMX6.js";import{a as v}from"./chunk-ZTED3WGD.js";import{a as te}from"./chunk-CC72ZDCP.js";import{a as J}from"./chunk-6WLT4IGN.js";import{a as S}from"./chunk-SYFPWUTB.js";import{a as Q}from"./chunk-RG5I6SD7.js";import{a as q}from"./chunk-SNAZ42PQ.js";import{a as c}from"./chunk-6ZGVESB5.js";import{a as N}from"./chunk-XYMAXA4B.js";import{a as V}from"./chunk-LUGQYNAC.js";import{a as e,b as f}from"./chunk-YSASWMAG.js";import{a as j,g as _}from"./chunk-YMQ4BGWF.js";import{b as O}from"./chunk-RVXINLOX.js";import{a as E}from"./chunk-JHE3P533.js";import{b as A}from"./chunk-RX52N74R.js";import{a as I}from"./chunk-RKEKPWE4.js";var s={dash:[4,3],dot:[1,3],"long-dash":[8,3],"short-dash":[4,1],"short-dot":[1,1]},he={dash:s.dash,"dash-dot":[...s.dash,...s.dot],dot:s.dot,"long-dash":s["long-dash"],"long-dash-dot":[...s["long-dash"],...s.dot],"long-dash-dot-dot":[...s["long-dash"],...s.dot,...s.dot],none:null,"short-dash":s["short-dash"],"short-dash-dot":[...s["short-dash"],...s["short-dot"]],"short-dash-dot-dot":[...s["short-dash"],...s["short-dot"],...s["short-dot"]],"short-dot":s["short-dot"],solid:null},ve=8,L=class{constructor(a,p,o){this.image=a,this.width=p,this.length=o,this.uuid=I()}};function C(t){return t!=null&&"image"in t}function ue(t,a){return t==null?t:{pattern:t.slice(),pixelRatio:a}}function Fe(t){return{pattern:[t,t],pixelRatio:2}}function we(t){switch(t?.type){case"style":return ge(t.style);case"image":return new L(t.image,t.width,t.length);case void 0:case null:return null}return null}function ge(t){return t!=null?ue(he[t],ve):null}function Se(t){return t.pattern.map(a=>Math.round(a*t.pixelRatio))}function ae(t){if(t==null)return 1;let a=Se(t);return Math.floor(a.reduce((p,o)=>p+o))}function ne(t){return t==null?_:t.length===4?t:O(xe,t[0],t[1],t[2],1)}var xe=j();function oe(t,a){if(!a.stippleEnabled)return void t.fragment.code.add(e`float getStippleAlpha(float lineWidth) { return 1.0; }
void discardByStippleAlpha(float stippleAlpha, float threshold) {}
vec4 blendStipple(vec4 color, float stippleAlpha) { return color; }`);let p=!(a.draped&&a.stipplePreferContinuous),{vertex:o,fragment:i}=t;a.draped||($(o,a),o.uniforms.add(new S("worldToScreenPerDistanceRatio",({camera:n})=>1/n.perScreenPixelRatio)).code.add(e`float computeWorldToScreenRatio(vec3 segmentCenter) {
float segmentDistanceToCamera = length(segmentCenter - cameraPosition);
return worldToScreenPerDistanceRatio / segmentDistanceToCamera;
}`)),t.varyings.add("vStippleDistance","float"),t.varyings.add("vStippleDistanceLimits","vec2"),t.varyings.add("vStipplePatternStretch","float"),o.code.add(e`
    float discretizeWorldToScreenRatio(float worldToScreenRatio) {
      float step = ${e.float(De)};

      float discreteWorldToScreenRatio = log(worldToScreenRatio);
      discreteWorldToScreenRatio = ceil(discreteWorldToScreenRatio / step) * step;
      discreteWorldToScreenRatio = exp(discreteWorldToScreenRatio);
      return discreteWorldToScreenRatio;
    }
  `),x(o),o.code.add(e`
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
  `),i.uniforms.add(new N("stipplePatternTexture",n=>n.stippleTexture),new c("stipplePatternPixelSizeInv",n=>1/y(n))),a.stippleOffColorEnabled&&i.uniforms.add(new v("stippleOffColor",n=>ne(n.stippleOffColor))),t.include(u),a.worldSizedImagePattern?(t.varyings.add("vStippleV","float"),t.fragment.include(G),i.code.add(e`vec4 getStippleColor(out bool isClamped) {
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
}`)):i.code.add(e`
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
      return ${a.stippleOffColorEnabled?"mix(color, stippleOffColor, stippleAlpha)":"vec4(color.rgb, color.a * stippleAlpha)"};
    }
  `),i.code.add(e`
    void discardByStippleAlpha(float stippleAlpha, float threshold) {
     ${f(!a.stippleOffColorEnabled,"if (stippleAlpha < threshold) { discard; }")}
    }
  `)}function y(t){let a=t.stipplePattern;return C(a)?a.length:a?ae(a)/a.pixelRatio:1}var De=.4;var re=1,se=1;function le(t,a){let{hasAnimation:p,animation:o}=a;if(!p)return;let{attributes:i,varyings:n,vertex:D,fragment:d}=t;i.add("timeStamps","vec4"),n.add("vTimeStamp","float"),n.add("vFirstTime","float"),n.add("vLastTime","float"),n.add("vTransitionType","float"),D.main.add(e`vTimeStamp = timeStamps.x;
vFirstTime = timeStamps.y;
vLastTime = timeStamps.z;
vTransitionType = timeStamps.w;`),o===3&&d.constants.add("decayRate","float",2.3),d.code.add(e`
    float getTrailOpacity(float x) {
      if (x < 0.0) {
        return 0.0;
      }

      ${Te(o)}
    }`),d.uniforms.add(new c("timeElapsed",m=>m.timeElapsed),new c("trailLength",m=>m.trailLength),new c("speed",m=>m.animationSpeed),new te("startEndTime",m=>A(Le,m.startTime,m.endTime))),d.constants.add("fadeInTime","float",se),d.constants.add("fadeOutTime","float",re),d.constants.add("incomingTransition","int",0),d.constants.add("outgoingTransition","int",2),d.code.add(e`float fadeIn(float x) {
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
}`)}function Te(t){switch(t){case 2:return"return x >= 0.0 && x <= 1.0 ? 1.0 : 0.0;";case 3:return`float cutOff = exp(-decayRate);
        return (exp(-decayRate * x) - cutOff) / (1.0 - cutOff);`;default:return"return 1.0;"}}var Le=E();var Ce=1;function ye(t){let a=new V,{attributes:p,varyings:o,vertex:i,fragment:n}=a,{applyMarkerOffset:D,draped:d,output:m,capType:P,stippleEnabled:l,falloffEnabled:F,roundJoins:pe,wireframe:w,innerColorEnabled:de,hasAnimation:ce,hasScreenSizePerspective:g,worldSizedImagePattern:R}=t;i.inputs.add("position",()=>"position"),n.include(Z),a.include(H,t),a.include(oe,t),a.include(U,t),a.include(le,t);let b=D&&!d;b&&(i.uniforms.add(new c("markerScale",r=>r.markerScale)),a.include(Y,{space:2,hasScreenSizePerspective:g})),B(i,t),i.uniforms.add(new J("inverseProjectionMatrix",r=>r.camera.inverseProjectionMatrix),new q("nearFar",r=>r.camera.nearFar),new c("miterLimit",r=>r.join!=="miter"?0:r.miterLimit),new Q("viewport",r=>r.camera.fullViewport)),i.constants.add("LARGE_HALF_FLOAT","float",65500),i.constants.add("EPS","float",.001),i.constants.add("NUM_JOIN_SUBDIVISIONS","float",t.numJoinSubdivisions),p.add("position","vec3"),p.add("previousDelta","vec4"),p.add("nextDelta","vec4"),p.add("lineParameters","vec2"),p.add("u0","float"),o.add("vColor","vec4"),o.add("vpos","vec3",{invariant:!0}),o.add("vLineDistance","float"),o.add("vLineWidth","float"),l||(o.add("vIsInsideJoin","int"),o.add("vStretchFactor","float"),o.add("vJoinCenterLineSDFs","vec2"),o.add("vSubdivisionFactor","float"));let z=l;z&&o.add("vLineSizeInv","float");let h=P===2,W=l&&h,T=F||W;T&&o.add("vLineDistanceNorm","float"),h&&(o.add("vSegmentSDF","float"),o.add("vReverseSegmentSDF","float")),i.code.add(e`vec3 perpendicular(vec3 v) {
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
}`),i.code.add(e`vec4 projectAndScale(vec4 pos) {
vec4 posNdc = proj * pos;
posNdc.xy *= viewport.zw / posNdc.w;
posNdc.z /= posNdc.w;
return posNdc;
}`),i.code.add(e`void clip(
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
}`),x(i),i.constants.add("aaWidth","float",l?0:1).main.add(e`
    // unpack values from vertex type
    bool isStartVertex = abs(abs(lineParameters.y) - 3.0) == 1.0;
    vec3 prevPosition = position + previousDelta.xyz * previousDelta.w;
    vec3 nextPosition = position + nextDelta.xyz * nextDelta.w;

    float coverage = 1.0;

    // Check for special value of lineParameters.y which is used by the Renderer when graphics are removed before the
    // VBO is recompacted. If this is the case, then we just project outside of clip space.
    if (lineParameters.y == 0.0) {
      gl_Position = ${K};
    }
    else {
      vec4 pos  = view * vec4(position, 1.0);
      vec4 prev = view * vec4(prevPosition, 1.0);
      vec4 next = view * vec4(nextPosition, 1.0);

      bool isJoin = abs(lineParameters.y) < 3.0;
  `),b&&i.main.add(e`vec4 other = isStartVertex ? next : prev;
bool markersHidden = areWorldMarkersHidden(pos.xyz, other.xyz);
if (!isJoin && !markersHidden) {
pos.xyz += normalize(other.xyz - pos.xyz) * getWorldMarkerSize(pos.xyz) * 0.5;
}`),a.include(X),i.main.add(e`
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

      float lineSize = getSize(${f(g,"clippedPos")});
      ${f(l&&g,"float patternLineSize = getSize(clippedCenter);")}
      ${f(l&&!g,"float patternLineSize = lineSize;")}

      ${f(R,e`
          lineSize += aaWidth;
          float lineWidth = lineSize * pixelRatio * worldToScreenRatio;
          if (lineWidth < 1.0) {
            coverage = lineWidth;
            lineWidth = 1.0;
          }
        `,e`
          if (lineSize < 1.0) {
            coverage = lineSize; // convert sub-pixel coverage to alpha
            lineSize = 1.0;
          }

          lineSize += aaWidth;
          float lineWidth = lineSize * pixelRatio;
        `)}

      vLineWidth = noPerspectiveWrite(lineWidth, pos.w);
      ${z?e`vLineSizeInv = noPerspectiveWrite(1.0 / lineSize, pos.w);`:""}
  `),(l||h)&&i.main.add(e`
      float isEndVertex = float(!isStartVertex);
      vec3 segmentOrigin = mix(pos.xyz, prev.xyz, isEndVertex);
      vec3 segment = mix(right, left, isEndVertex);
      ${h?e`vec3 segmentEnd = mix(next.xyz, pos.xyz, isEndVertex);`:""}
    `),i.main.add(e`left = (leftLen > EPS) ? left/leftLen : vec3(0.0, 0.0, 0.0);
right = (rightLen > EPS) ? right/rightLen : vec3(0.0, 0.0, 0.0);
vec3 segmentDirection = isStartVertex ? right : left;
vec3 capDisplacementDir = vec3(0.0, 0.0, 0.0);
vec3 joinDisplacementDir = vec3(0.0, 0.0, 0.0);
float displacementLen = lineWidth;
float miterDisplacementLen = lineWidth;
float innerDisplacementLen = lineWidth;`),l||i.main.add(e`vIsInsideJoin = 0;
vStretchFactor = 1.0;
vSubdivisionFactor = 0.0;
vJoinCenterLineSDFs = vec2(LARGE_HALF_FLOAT);`),i.main.add(e`float subdivisionFactor = 0.0;
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
subdivisionFactor = lineParameters.x;`),l||i.main.add(e`if(subdivisionFactor > 0.0) {
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
}`),i.main.add(e`if (isOutside && (displacementLen > miterLimit * lineWidth)) {`),pe?i.main.add(e`
        vec3 startDir = leftLen < EPS ? right : left;
        startDir = perpendicular(startDir);

        vec3 endDir = rightLen < EPS ? left : right;
        endDir = perpendicular(endDir);

        float factor = ${l?e`min(1.0, subdivisionFactor * ((NUM_JOIN_SUBDIVISIONS + 1.0) / NUM_JOIN_SUBDIVISIONS))`:e`subdivisionFactor`};

        float rotationAngle = acos(clamp(dot(startDir.xy, endDir.xy), -1.0, 1.0));
        joinDisplacementDir = rotateZ(startDir, -sign(lineParameters.y) * factor * rotationAngle);
      `):i.main.add(e`
        vec3 startDir = perpendicular(leftLen < EPS ? right : left);
        vec3 endDir = perpendicular(rightLen < EPS ? left : right);

        ${f(l,e`joinDisplacementDir = (isStartVertex || subdivisionFactor > 0.0) ? endDir : startDir;`,e`joinDisplacementDir = mix(startDir, endDir, subdivisionFactor);`)}
  `);let me=P!==0;return i.main.add(e`
        displacementLen = lineWidth;
      }
    } else {
      // CAP handling ---------------------------------------------------
      joinDisplacementDir = isStartVertex ? right : left;
      joinDisplacementDir = perpendicular(joinDisplacementDir);

      ${me?e`capDisplacementDir = vec3((isStartVertex ? -right : left).xy, 0.0);`:""}
    }
  `),i.main.add(e`
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
    ${T?e`vLineDistanceNorm = lineDistNorm;`:""}

    pos.xyz += dpos;
  `),l||i.main.add(e`if (isJoin) {
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
}`),h&&i.main.add(e`vec2 segmentDir = normalize(segment.xy);
vSegmentSDF = noPerspectiveWrite((isJoin && isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentOrigin.xy, segmentDir)), pos.w);
vReverseSegmentSDF = noPerspectiveWrite((isJoin && !isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentEnd.xy, -segmentDir)), pos.w);`),l&&(d?i.uniforms.add(new S("worldToScreenRatio",r=>1/r.screenToPCSRatio)):i.main.add(e`vec3 segmentCenter = mix((nextPosition + position) * 0.5, (position + prevPosition) * 0.5, isEndVertex);
float worldToScreenRatio = computeWorldToScreenRatio(segmentCenter);`),i.main.add(e`float segmentLengthScreenDouble = length(segment.xy);
float segmentLengthScreen = segmentLengthScreenDouble * 0.5;
float discreteWorldToScreenRatio = discretizeWorldToScreenRatio(worldToScreenRatio);
float segmentLengthRender = length(mix(nextPosition - position, position - prevPosition, isEndVertex));
vStipplePatternStretch = worldToScreenRatio / discreteWorldToScreenRatio;`),d?i.main.add(e`float segmentLengthPseudoScreen = segmentLengthScreen / pixelRatio * discreteWorldToScreenRatio / worldToScreenRatio;
float startPseudoScreen = u0 * discreteWorldToScreenRatio - mix(0.0, segmentLengthPseudoScreen, isEndVertex);`):i.main.add(e`float startPseudoScreen = mix(u0, u0 - segmentLengthRender, isEndVertex) * discreteWorldToScreenRatio;
float segmentLengthPseudoScreen = segmentLengthRender * discreteWorldToScreenRatio;`),i.uniforms.add(new c("stipplePatternPixelSize",r=>y(r))),i.main.add(e`
      float patternLength = patternLineSize * stipplePatternPixelSize;

      ${f(R,e`
          float uu = mix(u0, u0 - segmentLengthRender, isEndVertex);
          vStippleDistanceLimits = vec2(uu, uu + segmentLengthRender);
          vStipplePatternStretch = 1.0;

          // The v-coordinate used in case of an image pattern.
          bool isLeft = sign(lineParameters.y) < 0.0;
          vStippleV = isLeft ? 0.0 : 1.0;
        `,e`
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
    `)),i.main.add(e`
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
    }`),a.fragment.include(M,t),a.include(ie,t),n.include(k),n.main.add(e`discardBySlice(vpos);`),a.include(u),n.include(ee),n.main.add(e`
    float lineWidth = noPerspectiveRead(vLineWidth);
    float lineDistance = noPerspectiveRead(vLineDistance);
    ${f(T,e`float lineDistanceNorm = noPerspectiveRead(vLineDistanceNorm);`)}
  `),w?n.main.add(e`vec4 finalColor = vec4(1.0, 0.0, 1.0, 1.0);`):(h&&n.main.add(e`float sdf = noPerspectiveRead(min(vSegmentSDF, vReverseSegmentSDF));
vec2 fragmentPosition = vec2(min(sdf, 0.0), lineDistance);
float fragmentRadius = length(fragmentPosition);
float fragmentCapSDF = (fragmentRadius - lineWidth) * 0.5;
float capCoverage = clamp(0.5 - fragmentCapSDF, 0.0, 1.0);
if (capCoverage < alphaCutoff) {
discard;
}`),W?n.main.add(e`vec2 stipplePosition = vec2(
min(getStippleSDF() * 2.0 - 1.0, 0.0),
lineDistanceNorm
);
float stippleRadius = length(stipplePosition * lineWidth);
float stippleCapSDF = (stippleRadius - lineWidth) * 0.5;
float stippleCoverage = clamp(0.5 - stippleCapSDF, 0.0, 1.0);
float stippleAlpha = step(alphaCutoff, stippleCoverage);`):n.main.add(e`float stippleAlpha = getStippleAlpha(lineWidth);`),m!==11&&n.main.add(e`discardByStippleAlpha(stippleAlpha, alphaCutoff);`),a.include(u),n.uniforms.add(new v("intrinsicColor",r=>r.color)).main.add(e`vec4 color = intrinsicColor * vColor;
color.a = noPerspectiveRead(color.a);`),de&&n.uniforms.add(new v("innerColor",r=>r.innerColor??r.color),new c("innerWidth",(r,fe)=>r.innerWidth*fe.camera.pixelRatio)).main.add(e`float distToInner = abs(lineDistance) - innerWidth;
float innerAA = clamp(0.5 - distToInner, 0.0, 1.0);
float innerAlpha = innerColor.a + color.a * (1.0 - innerColor.a);
color = mix(color, vec4(innerColor.rgb, innerAlpha), innerAA);`),n.main.add(e`vec4 finalColor = blendStipple(color, stippleAlpha);`),F&&(n.uniforms.add(new c("falloff",r=>r.falloff)),n.main.add(e`finalColor.a *= pow(max(0.0, 1.0 - abs(lineDistanceNorm)), falloff);`)),l||n.main.add(e`float stretchFactor = vIsInsideJoin == 1 ? noPerspectiveRead(vStretchFactor) : 1.0;
float featherWidth = 2.0;
float featherStartDistance = max(lineWidth - featherWidth / stretchFactor, 0.0);
float straightFeatherStartDistance = max(lineWidth - featherWidth, 0.0);
float value = abs(lineDistance);
float feather = (value - featherStartDistance) / (lineWidth - featherStartDistance);
vec2 joinCenterSDFs = noPerspectiveRead(vJoinCenterLineSDFs);
float joinCenterDistance = abs(vSubdivisionFactor > 0.5 ? joinCenterSDFs.x : joinCenterSDFs.y);
float straightFeather = (joinCenterDistance - straightFeatherStartDistance) / (lineWidth - straightFeatherStartDistance);
feather = vIsInsideJoin == 1 ? max(feather, straightFeather) : feather;
finalColor.a *= 1.0 - clamp(feather, 0.0, 1.0);`),ce&&n.main.add(e`
        finalColor = animate(finalColor);

        ${f(m!==11,e`
            if (finalColor.a <= alphaCutoff) {
              discard;
            }`)}
      `)),n.main.add(e`outputColorHighlightOLID(applySlice(finalColor, vpos), finalColor.rgb);`),a}var Et=Object.freeze(Object.defineProperty({__proto__:null,build:ye,ribbonlineNumRoundJoinSubdivisions:Ce},Symbol.toStringTag,{value:"Module"}));export{C as a,Fe as b,we as c,Ce as d,ye as e,Et as f};
