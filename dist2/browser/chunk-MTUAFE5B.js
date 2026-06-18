import{a as F,e as V,f as D,g as I,h as T,i as $,j as Q,l as X}from"./chunk-DEKNV3YV.js";import{e as A,g as B,h as W,i as G,j as H,k as q,l as Y}from"./chunk-XXZA2B2H.js";import{b as z,e as J,f as K}from"./chunk-2OX6W6TY.js";import{a as k}from"./chunk-X57NYCXT.js";import{f as E}from"./chunk-XKSEETOM.js";import{b as R}from"./chunk-UL25DLOE.js";import{a as U,b as j}from"./chunk-ETR3CAI3.js";import{i as C}from"./chunk-R6ZCYZUZ.js";import{a as L}from"./chunk-4IC2S2U5.js";import{a as b,d as w,e as M}from"./chunk-ERWV7HUE.js";import{b as h}from"./chunk-6UBDFNHA.js";import{b as p,c as P,h as O,k as S}from"./chunk-P4VQAMX6.js";import{a as y}from"./chunk-ZTED3WGD.js";import{i as x,o as N}from"./chunk-ELAM4BPJ.js";import{a as c}from"./chunk-6ZGVESB5.js";import{a as m}from"./chunk-JNLIGAVK.js";import{a as g}from"./chunk-XYMAXA4B.js";import{a as u}from"./chunk-LUGQYNAC.js";import{a as t,b as l}from"./chunk-YSASWMAG.js";function io(o){let a=new u,{attributes:Z,vertex:e,fragment:r,varyings:n}=a,{output:_,offsetBackfaces:f,pbrMode:v,snowCover:s,spherical:oo}=o,ao=v===1||v===2;if(P(e,o),Z.add("position","vec3"),e.inputs.add("position",()=>"position"),n.add("vpos","vec3",{invariant:!0}),a.include(M,o),a.include(D,o),a.include(R,o),a.include(Q,o),!x(_))return a.include($,o),a;a.include(X,o),p(a.vertex,o),a.include(F,o),a.include(E),f&&a.include(A),n.add("vNormalWorld","vec3"),n.add("localvpos","vec3",{invariant:!0}),a.include(N,o),a.include(I,o),a.include(V,o),a.include(k,o),e.include(b),e.include(w),e.uniforms.add(new y("externalColor",i=>i.externalColor,{supportsNaN:!0})),n.add("vcolorExt","vec4"),a.include(o.instancedDoublePrecision?J:K,o),e.include(O),e.main.add(t`
    forwardVertexColor();

    MaskedColor maskedColorExt =
      applySymbolColor(applyVVColor(applyInstanceColor(createMaskedFromNaNColor(externalColor))));

    vcolorExt = maskedColorExt.color;
    forwardColorMixMode(maskedColorExt.mask);

    bool alphaCut = opacityMixMode != ${t.int(C.ignore)} && vcolorExt.a < alphaCutoff;
    vpos = getVertexInLocalOriginSpace();

    localvpos = vpos - view[3].xyz;
    vpos = subtractOrigin(vpos);
    vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
    vpos = addVerticalOffset(vpos, localOrigin);
    vec4 basePosition = transformPosition(proj, view, vpos);

    forwardTextureCoordinates();
    forwardColorUV();
    forwardEmissiveUV();
    forwardLinearDepthToReadShadowMap();
    gl_Position = alphaCut ? vec4(1e38, 1e38, 1e38, 1.0) :
    ${l(f,"offsetBackfacingClipPosition(basePosition, vpos, vNormalWorld, cameraPosition);","basePosition;")}
  `);let{hasColorTexture:d,hasColorTextureTransform:ro}=o;return r.include(H,o),r.include(B,o),a.include(T,o),r.include(h,o),a.include(S,o),p(r,o),U(r),W(r),G(r),r.uniforms.add(e.uniforms.get("localOrigin"),e.uniforms.get("view"),new m("ambient",i=>i.ambient),new m("diffuse",i=>i.diffuse),new c("opacity",i=>i.opacity),new c("layerOpacity",i=>i.layerOpacity)),d&&r.uniforms.add(new g("tex",i=>i.texture)),a.include(q,o),r.include(z,o),r.include(L),r.include(Y,o),j(r),r.main.add(t`
      discardBySlice(vpos);
      vec4 texColor = ${d?`texture(tex, ${ro?"colorUV":"vuv0"})`:" vec4(1.0)"};
      ${l(d,`${l(o.textureAlphaPremultiplied,"texColor.rgb /= texColor.a;")}
        discardOrAdjustAlpha(texColor);`)}
      vec3 viewDirection = normalize(vpos - cameraPosition);
      applyPBRFactors();
      float ssao = evaluateAmbientOcclusionInverse();
      ssao *= getBakedOcclusion();

      float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
      vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
      float shadow = readShadow(additionalAmbientScale, vpos);
      vec3 matColor = max(ambient, diffuse);
      ${o.hasVertexColors?t`vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, colorMixMode);
             float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, opacityMixMode);`:t`vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, colorMixMode);
             float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, opacityMixMode);`}

      vec3 shadingNormal = normalize(vNormalWorld);
      vec3 groundNormal = ${oo?"normalize(vpos + localOrigin)":"vec3(0.0, 0.0, 1.0)"};

      ${l(s,`vec3 faceNormal = screenDerivativeNormal(vpos);
         float snow = getRealisticTreeSnow(faceNormal, shadingNormal, groundNormal);
         albedo = mix(albedo, vec3(1), snow);`)}

      ${t`albedo *= 1.2;
             vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
             float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
             float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
             float treeRadialFalloff = vColor.r;
             float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
             additionalLight += backLightFactor * mainLightIntensity;`}

      ${ao?t`float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
            ${l(s,"mrr = applySnowToMRR(mrr, snow);")}
            vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, groundNormal, mrr, additionalAmbientIrradiance);`:t`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
      vec4 finalColor = vec4(shadedColor, opacity_);
      outputColorHighlightOLID(applySlice(finalColor, vpos), albedo ${l(s,", 1.0")});`),a}var Bo=Object.freeze(Object.defineProperty({__proto__:null,build:io},Symbol.toStringTag,{value:"Module"}));export{io as a,Bo as b};
