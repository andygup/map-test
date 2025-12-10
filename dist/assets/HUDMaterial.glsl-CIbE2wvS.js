import{Fb as e,J as t,Q as n,Rb as r,Uu as i,nw as a}from"./index-BN8X5Ryz.js";import{n as o,t as s}from"./glsl-BMw-Ib6r.js";import{t as c}from"./Uniform-C_fuiTP5.js";import{t as l}from"./FloatPassUniform-CSAt82xV.js";import{t as u}from"./Texture2DPassUniform-DFWoDpEL.js";import{t as d}from"./ShaderBuilder-BLOqjpgt.js";import{t as f}from"./Float4BindUniform-DpoBnM9l.js";import{t as p}from"./Texture2DBindUniform-Btzx3XRx.js";import{t as m}from"./Float2PassUniform-DUyrQoTC.js";import{t as h}from"./Float4PassUniform-C4TO8dd0.js";import{t as g}from"./FloatBindUniform-CXY5KrrB.js";import{n as _}from"./Slice.glsl-DU3Ivhcc.js";import{t as v}from"./ObjectAndLayerIdColor.glsl-BHzrt-xI.js";import{t as y}from"./VisualVariables.glsl-1DqsizMu.js";import{i as b,n as x,t as S}from"./AlphaCutoff-WIqqBGOV.js";import{n as C,r as ee,t as te}from"./ScreenSizePerspective.glsl-BuhoSJZ3.js";import{i as w}from"./View.glsl-CPcmVaet.js";import{t as T}from"./TerrainDepthTest.glsl-D7e23Ppb.js";import{n as E,r as D,t as O}from"./HUDVisibility.glsl-DO8Yaq72.js";function k(e,t){let{vertex:n,fragment:r}=e;e.include(T,t),n.include(E),n.main.add(o`vec4 posProjCenter;
if (dot(position, position) > 0.0) {
ProjectHUDAux projectAux;
vec4 posProj = projectPositionHUD(projectAux);
posProjCenter = alignToPixelCenter(posProj, viewport.zw);
forwardViewPosDepth(projectAux.posView);
vec3 vpos = projectAux.posModel;
if (rejectBySlice(vpos)) {
posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
}
} else {
posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
}
gl_Position = posProjCenter;
gl_PointSize = 1.0;`),r.main.add(o`fragColor = vec4(1);
if(discardByTerrainDepth()) {
fragColor.g = 0.5;
}`)}var A=class extends c{constructor(e,t,n){super(e,`vec4`,2,(r,i,a)=>r.setUniform4fv(e,t(i,a),n))}};function j(r){let i=new d;if(i.include(D,r),i.vertex.include(_,r),r.occlusionPass)return i.include(k,r),i;let{output:c,oitPass:T,signedDistanceFieldEnabled:j,visibilityPixelEnabled:P,horizonCullingEnabled:I,pixelSnappingEnabled:R,hasEmission:z,hasScreenSizePerspective:B,debugDrawLabelBorder:V,hasVVSize:H,hasVVColor:U,hasRotation:W,occludedFragmentFade:G,sampleSignedDistanceFieldTexelCenter:K}=r;i.include(C),i.include(y,r),i.include(v,r),P&&i.include(O);let{vertex:q,fragment:J}=i;J.include(b),i.varyings.add(`vcolor`,`vec4`),i.varyings.add(`vtc`,`vec2`),i.varyings.add(`vsize`,`vec2`);let Y=c===8,X=Y&&P;X&&i.varyings.add(`voccluded`,`float`),q.uniforms.add(new f(`viewport`,e=>e.camera.fullViewport),new m(`screenOffset`,(t,n)=>e(F,2*t.screenOffset[0]*n.camera.pixelRatio,2*t.screenOffset[1]*n.camera.pixelRatio)),new m(`anchorPosition`,e=>N(e)),new h(`materialColor`,e=>e.color),new l(`materialRotation`,e=>e.rotation),new u(`tex`,e=>e.texture)),w(q),j&&(q.uniforms.add(new h(`outlineColor`,e=>e.outlineColor)),J.uniforms.add(new h(`outlineColor`,e=>M(e)?e.outlineColor:t),new l(`outlineSize`,e=>M(e)?e.outlineSize:0))),I&&q.uniforms.add(new A(`pointDistanceSphere`,(e,t)=>{let r=t.camera.eye,i=e.origin;return n(i[0]-r[0],i[1]-r[1],i[2]-r[2],a.radius)})),R&&q.include(E),B&&(ee(q),te(q)),V&&i.varyings.add(`debugBorderCoords`,`vec4`),i.attributes.add(`uv0`,`vec2`),i.attributes.add(`uvi`,`vec4`),i.attributes.add(`color`,`vec4`),i.attributes.add(`size`,`vec2`),i.attributes.add(`rotation`,`float`),(H||U)&&i.attributes.add(`featureAttribute`,`vec4`),q.code.add(I?o`bool behindHorizon(vec3 posModel) {
vec3 camToEarthCenter = pointDistanceSphere.xyz - localOrigin;
vec3 camToPos = pointDistanceSphere.xyz + posModel;
float earthRadius = pointDistanceSphere.w;
float a = dot(camToPos, camToPos);
float b = dot(camToPos, camToEarthCenter);
float c = dot(camToEarthCenter, camToEarthCenter) - earthRadius * earthRadius;
return b > 0.0 && b < a && b * b  > a * c;
}`:o`bool behindHorizon(vec3 posModel) { return false; }`),q.main.add(o`
    ProjectHUDAux projectAux;
    vec4 posProj = projectPositionHUD(projectAux);
    forwardObjectAndLayerIdColor();

    if (rejectBySlice(projectAux.posModel)) {
      // Project outside of clip plane
      gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
      return;
    }

    if (behindHorizon(projectAux.posModel)) {
      // Project outside of clip plane
      gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
      return;
    }

    vec2 inputSize;
    ${s(B,o`
        inputSize = screenSizePerspectiveScaleVec2(size, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspective);
        vec2 screenOffsetScaled = screenSizePerspectiveScaleVec2(screenOffset, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);`,o`
        inputSize = size;
        vec2 screenOffsetScaled = screenOffset;`)}
    ${s(H,o`inputSize *= vvScale(featureAttribute).xx;`)}

    vec2 combinedSize = inputSize * pixelRatio;
    vec4 quadOffset = vec4(0.0);

    ${s(P,o`
    bool visible = testHUDVisibility(posProj);
    if (!visible) {
      vtc = vec2(0.0);
      ${s(V,`debugBorderCoords = vec4(0.5, 0.5, 1.5 / combinedSize);`)}
      return;
    }`)}
    ${s(X,o`voccluded = visible ? 0.0 : 1.0;`)}
  `);let Z=o`
      vec2 uv = mix(uvi.xy, uvi.zw, bvec2(uv0));
      vec2 texSize = vec2(textureSize(tex, 0));
      uv = mix(vec2(1.0), uv / texSize, lessThan(uv, vec2(${L})));
      quadOffset.xy = (uv0 - anchorPosition) * 2.0 * combinedSize;

      ${s(W,o`
          float angle = radians(materialRotation + rotation);
          float cosAngle = cos(angle);
          float sinAngle = sin(angle);
          mat2 rotate = mat2(cosAngle, -sinAngle, sinAngle,  cosAngle);

          quadOffset.xy = rotate * quadOffset.xy;
        `)}

      quadOffset.xy = (quadOffset.xy + screenOffsetScaled) / viewport.zw * posProj.w;
  `,ne=R?j?o`posProj = alignToPixelOrigin(posProj, viewport.zw) + quadOffset;`:o`posProj += quadOffset;
if (inputSize.x == size.x) {
posProj = alignToPixelOrigin(posProj, viewport.zw);
}`:o`posProj += quadOffset;`;q.main.add(o`
    ${Z}
    ${U?`vcolor = interpolateVVColor(featureAttribute.y) * materialColor;`:`vcolor = color / 255.0 * materialColor;`}

    ${s(c===9,o`vcolor.a = 1.0;`)}

    bool alphaDiscard = vcolor.a < ${o.float(S)};
    ${s(j,`alphaDiscard = alphaDiscard && outlineColor.a < ${o.float(S)};`)}
    if (alphaDiscard) {
      // "early discard" if both symbol color (= fill) and outline color (if applicable) are transparent
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      return;
    } else {
      ${ne}
      gl_Position = posProj;
    }

    vtc = uv;

    ${s(V,o`debugBorderCoords = vec4(uv01, 1.5 / combinedSize);`)}
    vsize = inputSize;
  `),J.uniforms.add(new u(`tex`,e=>e.texture)),G&&!Y&&J.uniforms.add(new p(`depthMap`,e=>e.mainDepth),new g(`occludedOpacity`,e=>e.hudOccludedFragmentOpacity));let Q=V?o`(isBorder > 0.0 ? 0.0 : ${o.float(S)})`:o.float(S),$=o`
    ${s(V,o`float isBorder = float(any(lessThan(debugBorderCoords.xy, debugBorderCoords.zw)) || any(greaterThan(debugBorderCoords.xy, 1.0 - debugBorderCoords.zw)));`)}

    vec2 samplePos = vtc;

    ${s(K,o`
      float txSize = float(textureSize(tex, 0).x);
      float texelSize = 1.0 / txSize;

      // Calculate how much we have to add/subtract to/from each texel to reach the size of an onscreen pixel
      vec2 scaleFactor = (vsize - txSize) * texelSize;
      samplePos += (vec2(1.0, -1.0) * texelSize) * scaleFactor;`)}

    ${j?o`
      vec4 fillPixelColor = vcolor;

      // Get distance in output units (i.e. pixels)

      float sdf = texture(tex, samplePos).r;
      float pixelDistance = sdf * vsize.x;

      // Create smooth transition from the icon into its outline
      float fillAlphaFactor = clamp(0.5 - pixelDistance, 0.0, 1.0);
      fillPixelColor.a *= fillAlphaFactor;

      if (outlineSize > 0.25) {
        vec4 outlinePixelColor = outlineColor;
        float clampedOutlineSize = min(outlineSize, 0.5*vsize.x);

        // Create smooth transition around outline
        float outlineAlphaFactor = clamp(0.5 - (abs(pixelDistance) - 0.5*clampedOutlineSize), 0.0, 1.0);
        outlinePixelColor.a *= outlineAlphaFactor;

        if (
          outlineAlphaFactor + fillAlphaFactor < ${Q} ||
          fillPixelColor.a + outlinePixelColor.a < ${o.float(S)}
        ) {
          discard;
        }

        // perform un-premultiplied over operator (see https://en.wikipedia.org/wiki/Alpha_compositing#Description)
        float compositeAlpha = outlinePixelColor.a + fillPixelColor.a * (1.0 - outlinePixelColor.a);
        vec3 compositeColor = vec3(outlinePixelColor) * outlinePixelColor.a +
          vec3(fillPixelColor) * fillPixelColor.a * (1.0 - outlinePixelColor.a);

        ${s(!Y,o`fragColor = vec4(compositeColor, compositeAlpha);`)}
      } else {
        if (fillAlphaFactor < ${Q}) {
          discard;
        }

        ${s(!Y,o`fragColor = premultiplyAlpha(fillPixelColor);`)}
      }

      // visualize SDF:
      // fragColor = vec4(clamp(-pixelDistance/vsize.x*2.0, 0.0, 1.0), clamp(pixelDistance/vsize.x*2.0, 0.0, 1.0), 0.0, 1.0);
      `:o`
          vec4 texColor = texture(tex, samplePos, -0.5);
          if (texColor.a < ${Q}) {
            discard;
          }
          ${s(!Y,o`fragColor = texColor * premultiplyAlpha(vcolor);`)}
          `}

    ${s(G&&!Y,o`
        float zSample = texelFetch(depthMap, ivec2(gl_FragCoord.xy), 0).x;
        if (zSample < gl_FragCoord.z) {
          fragColor *= occludedOpacity;
        }
        `)}

    ${s(!Y&&V,o`fragColor = mix(fragColor, vec4(1.0, 0.0, 1.0, 1.0), isBorder * 0.5);`)}
  `;switch(c){case 0:i.outputs.add(`fragColor`,`vec4`,0),z&&i.outputs.add(`fragEmission`,`vec4`,1),T===1&&i.outputs.add(`fragAlpha`,`float`,z?2:1),J.main.add(o`
        ${$}
        ${s(T===2,o`fragColor.rgb /= fragColor.a;`)}
        ${s(z,o`fragEmission = vec4(0.0);`)}
        ${s(T===1,o`fragAlpha = fragColor.a;`)}`);break;case 9:J.main.add(o`
        ${$}
        outputObjectAndLayerIdColor();`);break;case 8:i.include(x,r),J.main.add(o`
        ${$}
        outputHighlight(${s(X,o`voccluded == 1.0`,o`false`)});`)}return i}function M(e){return e.outlineColor[3]>0&&e.outlineSize>0}function N(e){return e.textureIsSignedDistanceField?P(e.anchorPosition,e.distanceFieldBoundingBox,F):r(F,e.anchorPosition),F}function P(t,n,r){e(r,t[0]*(n[2]-n[0])+n[0],t[1]*(n[3]-n[1])+n[1])}var F=i(),I=32e3,L=o.float(I),R=Object.freeze(Object.defineProperty({__proto__:null,build:j,calculateAnchorPosition:N,fullUV:I},Symbol.toStringTag,{value:`Module`}));export{I as i,R as n,j as r,N as t};