import{b as x,c as w}from"./chunk-M4O4ZIXN.js";import{c as m}from"./chunk-OPYNJ3CC.js";import{c as g}from"./chunk-6UBDFNHA.js";import{k as z}from"./chunk-P4VQAMX6.js";import{a as s}from"./chunk-ZTED3WGD.js";import{a as u}from"./chunk-CC72ZDCP.js";import{a as h}from"./chunk-RG5I6SD7.js";import{a as v}from"./chunk-SNAZ42PQ.js";import{a as d}from"./chunk-6ZGVESB5.js";import{a as S}from"./chunk-LUGQYNAC.js";import{a as i,b as c}from"./chunk-YSASWMAG.js";import{g as l}from"./chunk-YMQ4BGWF.js";import{a as f}from"./chunk-JHE3P533.js";import{b as n}from"./chunk-RX52N74R.js";function P(r){let o=new S,{vertex:a,fragment:p}=o;return a.include(w),o.include(x,r),o.vertex.include(g,r),r.hudDepth||o.include(z,r),o.attributes.add("uv0","vec2"),a.uniforms.add(new h("viewport",e=>e.camera.fullViewport),new d("lineSize",(e,t)=>e.size>0?Math.max(1,e.size)*t.camera.pixelRatio:0),new v("pixelToNDC",e=>n(A,2/e.camera.fullViewport[2],2/e.camera.fullViewport[3])),new d("borderSize",(e,t)=>e.borderColor?t.camera.pixelRatio:0),new u("screenOffset",(e,t)=>n(A,e.horizontalScreenOffset*t.camera.pixelRatio,0))),o.varyings.add("coverageSampling","vec4"),o.varyings.add("lineSizes","vec2"),r.hasScreenSizePerspective&&m(a),a.main.add(i`
    ProjectHUDAux projectAux;
    vec4 endPoint = projectPositionHUD(projectAux);

    vec3 vpos = projectAux.posModel;
    if (rejectBySlice(vpos)) {
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      return;
    }

    ${r.hasScreenSizePerspective?i`vec3 perspectiveFactor = screenSizePerspectiveScaleFactor(projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);
               vec2 screenOffsetScaled = applyScreenSizePerspectiveScaleFactorVec2(screenOffset, perspectiveFactor);`:"vec2 screenOffsetScaled = screenOffset;"}
    // Add view dependent polygon offset to get exact same original starting point. This is mostly used to get the
    // correct depth value
    vec3 posView = (view * vec4(position, 1.0)).xyz;

    applyHUDViewDependentPolygonOffset(groundDistance, projectAux.absCosAngle, posView);
    vec4 startPoint = proj * vec4(posView, 1.0);

    // Apply screen offset to both start and end point
    vec2 screenOffsetNorm = screenOffsetScaled * 2.0 / viewport.zw;
    startPoint.xy += screenOffsetNorm * startPoint.w;
    endPoint.xy += screenOffsetNorm * endPoint.w;

    // Align start and end to pixel origin
    vec4 startAligned = alignToPixelOrigin(startPoint, viewport.zw);
    vec4 endAligned = alignToPixelOrigin(endPoint, viewport.zw);
    ${c(r.hudDepth,r.hudDepthAlignStart?"endAligned = vec4(endAligned.xy / endAligned.w * startAligned.w, startAligned.zw);":"startAligned = vec4(startAligned.xy / startAligned.w * endAligned.w, endAligned.zw);")}
    vec4 projectedPosition = mix(startAligned, endAligned, uv0.y);

    // The direction of the line in screen space
    vec2 screenSpaceDirection = normalize(endAligned.xy / endAligned.w - startAligned.xy / startAligned.w);
    vec2 perpendicularScreenSpaceDirection = vec2(screenSpaceDirection.y, -screenSpaceDirection.x);
    ${r.hasScreenSizePerspective?i`float lineSizeScaled = applyScreenSizePerspectiveScaleFactorFloat(lineSize, perspectiveFactor);
               float borderSizeScaled = applyScreenSizePerspectiveScaleFactorFloat(borderSize, perspectiveFactor);`:i`float lineSizeScaled = lineSize;
               float borderSizeScaled = borderSize;`}
    float halfPixelSize = lineSizeScaled * 0.5;

    // Compute full ndc offset, adding 1px padding for doing anti-aliasing and the border size
    float padding = 1.0 + borderSizeScaled;
    vec2 ndcOffset = (-halfPixelSize - padding + uv0.x * (lineSizeScaled + padding + padding)) * pixelToNDC;

    // Offset x/y from the center of the line in screen space
    projectedPosition.xy += perpendicularScreenSpaceDirection * ndcOffset * projectedPosition.w;

    // Compute a coverage varying which we can use in the fragment shader to determine
    // how much a pixel is actually covered by the line (i.e. to anti alias the line).
    // This works by computing two coordinates that can be linearly interpolated and then
    // subtracted to find out how far away from the line edge we are.
    float edgeDirection = (uv0.x * 2.0 - 1.0);

    float halfBorderSize = 0.5 * borderSizeScaled;
    float halfPixelSizeAndBorder = halfPixelSize + halfBorderSize;
    float outerEdgeCoverageSampler = edgeDirection * (halfPixelSizeAndBorder + halfBorderSize + 1.0);

    float isOneSided = float(lineSizeScaled < 2.0 && borderSize < 2.0);

    coverageSampling = vec4(
      // Edge coordinate
      outerEdgeCoverageSampler,

      // Border edge coordinate
      outerEdgeCoverageSampler - halfPixelSizeAndBorder * isOneSided,

      // Line offset
      halfPixelSize - 0.5,

      // Border offset
      halfBorderSize - 0.5 + halfPixelSizeAndBorder * (1.0 - isOneSided)
    );

    lineSizes = vec2(lineSizeScaled, borderSizeScaled);
    gl_Position = projectedPosition;`),p.uniforms.add(new s("uColor",e=>e.color??l),new s("borderColor",e=>e.borderColor??l)),p.main.add(i`
    vec2 coverage = min(1.0 - clamp(abs(coverageSampling.xy) - coverageSampling.zw, 0.0, 1.0), lineSizes);

    float borderAlpha = uColor.a * borderColor.a * coverage.y;
    float colorAlpha = uColor.a * coverage.x;

    float finalAlpha = mix(borderAlpha, 1.0, colorAlpha);
    ${c(r.hudDepth,i`
    if (max(coverage.x, coverage.y) < ${i.float(b)}) discard;`,i`
    vec3 finalRgb = mix(borderColor.rgb * borderAlpha, uColor.rgb, colorAlpha);
    outputColorHighlightOLID(vec4(finalRgb, finalAlpha), finalRgb);`)}`),o}var b=.5,A=f(),$=Object.freeze(Object.defineProperty({__proto__:null,build:P},Symbol.toStringTag,{value:"Module"}));export{P as a,$ as b};
