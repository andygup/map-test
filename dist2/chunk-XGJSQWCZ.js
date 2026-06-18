import{a as k,b as L,c as d,i as v,j as $,k as C,l as j}from"./chunk-IGS5CCSF.js";import{a as m}from"./chunk-WZITM4Q5.js";import{b as x}from"./chunk-6WQYUJUQ.js";import{c as z,d as w,e as b,f as D,j as O,k as U}from"./chunk-SYTOW5CL.js";import{a as P}from"./chunk-ZTED3WGD.js";import{a as g}from"./chunk-6WLT4IGN.js";import{a as y}from"./chunk-SYFPWUTB.js";import{a as M}from"./chunk-RG5I6SD7.js";import{a as W}from"./chunk-SNAZ42PQ.js";import{a as S}from"./chunk-XYMAXA4B.js";import{a as u}from"./chunk-LUGQYNAC.js";import{a as e,b as n}from"./chunk-YSASWMAG.js";function T(t){let i=new u,{space:f,anchor:N,hasTip:l,hasScreenSizePerspective:R}=t,s=f===2,h=f===1;i.attributes.add("position","vec3"),i.vertex.inputs.add("position",()=>"position"),i.include(k,t),i.include(j,t);let{vertex:r,fragment:c,varyings:p}=i;z(r,t),i.attributes.add("previousDelta","vec4"),i.attributes.add("uv0","vec2"),p.add("vColor","vec4"),p.add("vpos","vec3",{invariant:!0}),p.add("vUV","vec2"),p.add("vSize","float"),l&&p.add("vLineWidth","float"),r.uniforms.add(new W("nearFar",({camera:o})=>o.nearFar),new M("viewport",({camera:o})=>o.fullViewport)).code.add(e`vec4 projectAndScale(vec4 pos) {
vec4 posNdc = proj * pos;
posNdc.xy *= viewport.zw / posNdc.w;
return posNdc;
}`),r.code.add(e`void clip(vec4 pos, inout vec4 prev) {
float vnp = nearFar[0] * 0.99;
if (prev.z > -nearFar[0]) {
float interpolation = (-vnp - pos.z) / (prev.z - pos.z);
prev = mix(pos, prev, interpolation);
}
}`),s?(i.attributes.add("normal","vec3"),w(r),r.constants.add("tiltThreshold","float",.7),r.code.add(e`vec3 perpendicular(vec3 v) {
vec3 n = (viewNormal * vec4(normal.xyz, 1.0)).xyz;
vec3 n2 = cross(v, n);
vec3 forward = vec3(0.0, 0.0, 1.0);
float tiltDot = dot(forward, n);
return abs(tiltDot) < tiltThreshold ? n : n2;
}`)):r.code.add(e`vec2 perpendicular(vec2 v) {
return vec2(v.y, -v.x);
}`);let a=s?"vec3":"vec2";return r.code.add(e`
      ${a} normalizedSegment(${a} pos, ${a} prev) {
        ${a} segment = pos - prev;
        float segmentLen = length(segment);

        // normalize or zero if too short
        return (segmentLen > 0.001) ? segment / segmentLen : ${s?"vec3(0.0, 0.0, 0.0)":"vec2(0.0, 0.0)"};
      }

      ${a} displace(${a} pos, ${a} prev, float displacementLen) {
        ${a} segment = normalizedSegment(pos, prev);

        ${a} displacementDirU = perpendicular(segment);
        ${a} displacementDirV = segment;

        ${N===1?"pos -= 0.5 * displacementLen * displacementDirV;":""}

        return pos + displacementLen * (uv0.x * displacementDirU + uv0.y * displacementDirV);
      }
    `),h&&(r.uniforms.add(new g("inverseProjectionMatrix",({camera:o})=>o.inverseProjectionMatrix)),r.code.add(e`vec3 inverseProject(vec4 posScreen) {
posScreen.xy = (posScreen.xy / viewport.zw) * posScreen.w;
return (inverseProjectionMatrix * posScreen).xyz;
}`),r.code.add(e`bool rayIntersectPlane(vec3 rayDir, vec3 planeOrigin, vec3 planeNormal, out vec3 intersection) {
float cos = dot(rayDir, planeNormal);
float t = dot(planeOrigin, planeNormal) / cos;
intersection = t * rayDir;
return abs(cos) > 0.001 && t > 0.0;
}`),r.uniforms.add(new y("perScreenPixelRatio",({camera:o})=>o.perScreenPixelRatio)),r.code.add(e`
      vec4 toFront(vec4 displacedPosScreen, vec3 posLeft, vec3 posRight, vec3 prev, float lineWidth) {
        // Project displaced position back to camera space
        vec3 displacedPos = inverseProject(displacedPosScreen);

        // Calculate the plane that we want the marker to lie in. Note that this will always be an approximation since ribbon lines are generally
        // not planar and we do not know the actual position of the displaced prev vertices (they are offset in screen space, too).
        vec3 planeNormal = normalize(cross(posLeft - posRight, posLeft - prev));
        vec3 planeOrigin = posLeft;

        ${n(t.hasCap,`if(prev.z > posLeft.z) {
                vec2 diff = posLeft.xy - posRight.xy;
                planeOrigin.xy += perpendicular(diff) / 2.0;
             }`)};

        // Move the plane towards the camera by a margin dependent on the line width (approximated in world space). This tolerance corrects for the
        // non-planarity in most cases, but sharp joins can place the prev vertices at arbitrary positions so markers can still clip.
        float offset = lineWidth * perScreenPixelRatio;
        planeOrigin *= (1.0 - offset);

        // Intersect camera ray with the plane and make sure it is within clip space
        vec3 rayDir = normalize(displacedPos);
        vec3 intersection;
        if (rayIntersectPlane(rayDir, planeOrigin, planeNormal, intersection) && intersection.z < -nearFar[0] && intersection.z > -nearFar[1]) {
          return vec4(intersection.xyz, 1.0);
        }

        // Fallback: use depth of pos or prev, whichever is closer to the camera
        float minDepth = planeOrigin.z > prev.z ? length(planeOrigin) : length(prev);
        displacedPos *= minDepth / length(displacedPos);
        return vec4(displacedPos.xyz, 1.0);
      }
  `)),b(r),i.include(L),r.main.add(e`
    // Check for special value of uv0.y which is used by the Renderer when graphics
    // are removed before the VBO is recompacted. If this is the case, then we just
    // project outside of clip space.
    if (uv0.y == 0.0) {
      // Project out of clip space
      gl_Position = ${m};
    }
    else {
      vec4 pos  = view * vec4(position, 1.0);
      vec4 prev = view * vec4(position + previousDelta.xyz * previousDelta.w, 1.0);

      float lineWidth = getLineWidth(${n(R,"pos.xyz")});
      float screenMarkerSize = getScreenMarkerSize(lineWidth);

      clip(pos, prev);

      ${s?e`${n(t.hideOnShortSegments,e`
                if (areWorldMarkersHidden(pos.xyz, prev.xyz)) {
                  gl_Position = ${m};
                  return;
                }`)}
            pos.xyz = displace(pos.xyz, prev.xyz, getWorldMarkerSize(pos.xyz));
            vec4 displacedPosScreen = projectAndScale(pos);`:e`
            vec4 posScreen = projectAndScale(pos);
            vec4 prevScreen = projectAndScale(prev);
            vec4 displacedPosScreen = posScreen;

            displacedPosScreen.xy = displace(posScreen.xy, prevScreen.xy, screenMarkerSize);
            ${n(h,e`
                vec2 displacementDirU = perpendicular(normalizedSegment(posScreen.xy, prevScreen.xy));

                // We need three points of the ribbon line in camera space to calculate the plane it lies in
                // Note that we approximate the third point, since we have no information about the join around prev
                vec3 lineRight = inverseProject(posScreen + lineWidth * vec4(displacementDirU.xy, 0.0, 0.0));
                vec3 lineLeft = pos.xyz + (pos.xyz - lineRight);

                pos = toFront(displacedPosScreen, lineLeft, lineRight, prev.xyz, lineWidth);
                displacedPosScreen = projectAndScale(pos);`)}`}
      // Convert back into NDC
      displacedPosScreen.xy = (displacedPosScreen.xy / viewport.zw) * displacedPosScreen.w;

      // Convert texture coordinate into [0,1]
      vUV = (uv0 + 1.0) / 2.0;
      ${n(!s,"vUV = noPerspectiveWrite(vUV, displacedPosScreen.w);")}
      ${n(l,"vLineWidth = noPerspectiveWrite(lineWidth, displacedPosScreen.w);")}

      vSize = screenMarkerSize;
      vColor = getColor();

      // Use camera space for slicing
      vpos = pos.xyz;

      gl_Position = displacedPosScreen;
    }`),c.include(x,t),i.include(U,t),c.include(D),c.uniforms.add(new P("intrinsicColor",({color:o})=>o),new S("tex",({markerTexture:o})=>o)).constants.add("texelSize","float",1/v).code.add(e`float markerAlpha(vec2 samplePos) {
samplePos += vec2(0.5, -0.5) * texelSize;
float sdf = texture(tex, samplePos).r;
float pixelDistance = sdf * vSize;
pixelDistance -= 0.5;
return clamp(0.5 - pixelDistance, 0.0, 1.0);
}`),l&&(i.include(d),c.constants.add("relativeMarkerSize","float",$/v).constants.add("relativeTipLineWidth","float",C).code.add(e`
    float tipAlpha(vec2 samplePos) {
      // Convert coordinates s.t. they are in pixels and relative to the tip of an arrow marker
      samplePos -= vec2(0.5, 0.5 + 0.5 * relativeMarkerSize);
      samplePos *= vSize;

      float halfMarkerSize = 0.5 * relativeMarkerSize * vSize;
      float halfTipLineWidth = 0.5 * max(1.0, relativeTipLineWidth * noPerspectiveRead(vLineWidth));

      ${n(s,"halfTipLineWidth *= fwidth(samplePos.y);")}

      float distance = max(abs(samplePos.x) - halfMarkerSize, abs(samplePos.y) - halfTipLineWidth);
      return clamp(0.5 - distance, 0.0, 1.0);
    }
  `)),i.include(O,t),i.include(d),c.main.add(e`
    discardBySlice(vpos);

    vec4 finalColor = intrinsicColor * vColor;

    // Cancel out perspective correct interpolation if in screen space or draped
    vec2 samplePos = ${n(!s,"noPerspectiveRead(vUV)","vUV")};
    finalColor.a *= ${l?"max(markerAlpha(samplePos), tipAlpha(samplePos))":"markerAlpha(samplePos)"};
    outputColorHighlightOLID(applySlice(finalColor, vpos), finalColor.rgb);`),i}var ie=Object.freeze(Object.defineProperty({__proto__:null,build:T},Symbol.toStringTag,{value:"Module"}));export{T as a,ie as b};
