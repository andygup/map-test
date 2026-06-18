import{a as O}from"./chunk-2UTJD3RB.js";import{a as D}from"./chunk-FUOMQZF6.js";import{a as x}from"./chunk-BBTVWFNT.js";import{a as I}from"./chunk-II3MXJQQ.js";import{a as v}from"./chunk-YO4KVV4T.js";import{a as g}from"./chunk-NPN7TY3U.js";import{a as W}from"./chunk-HO7EK3U7.js";import{c as b}from"./chunk-IHC7LZBT.js";import{a as t}from"./chunk-6ZGVESB5.js";import{a as n}from"./chunk-I6AGLY42.js";import{a as h}from"./chunk-E6G6MGCI.js";import{a}from"./chunk-XYMAXA4B.js";import{a as S}from"./chunk-LUGQYNAC.js";import{a as l}from"./chunk-YSASWMAG.js";import{a as d}from"./chunk-NMKLVORY.js";import{a as f}from"./chunk-JHE3P533.js";var s=4,r=class extends d{constructor(){super(...arguments),this.blurSize=f()}};function T(){let o=new S,i=o.fragment;o.include(h),o.include(I),o.include(D);let m=(s+3)/2,w=1/(2*m*m);i.include(v),i.include(W,G),i.include(x);let u=5e4;i.uniforms.add(new O("hasEmission",e=>e.hasEmission),new a("depthMap",e=>e.depthTexture),new a("normalMap",e=>e.normalTexture),new n("globalIlluminationTexture",e=>e.texture),new n("globalIlluminationWeightTexture",e=>e.weightTexture),new g("blurSize",e=>e.blurSize),new t("scaleGlobalIllumination",e=>e.scaleGlobalIllumination),new t("projScale",(e,N)=>{let p=N.camera.distance;return p>u?Math.max(0,e.projScale-(p-u)):e.projScale}));let B=.1,C=400,c=.03;return i.code.add(l`
    void accumulateBlurSample(
      vec2 sampleUv,
      float sampleOffset,
      float centerDepth,
      vec3 centerNormal,
      float depthSharpness,
      bool skipOcclusionBlur,
      inout float emissionWeightSum,
      inout vec3 emissionSum,
      inout float occlusionWeightSum,
      inout float occlusionSum,
      float centerOcclusionBlendWeight
    ) {
      vec4 sampleGlobalIllumination = texture(globalIlluminationTexture, sampleUv);
      vec3 sampleNormal = texture(normalMap, sampleUv).rgb;
      float sampleDepth = linearDepthFromTexture(depthMap, sampleUv);

      float depthDelta = sampleDepth - centerDepth;
      bool isScaledGlobalIllumination = scaleGlobalIllumination < 1.0;
      float normalSimilarityWeight = globalIlluminationNormalSimilarityWeight(sampleNormal, centerNormal);
      float depthNormalCorrection = globalIlluminationDepthNormalCorrection(sampleNormal);
      vec3 emission = sampleGlobalIllumination.rgb;
      float emissionSpatialWeightMultiplier = isScaledGlobalIllumination ? ${l.float(C)} : 1.0;

      float emissionWeight = exp(
        -sampleOffset * sampleOffset * ${l.float(w)} * ${l.float(B)} * emissionSpatialWeightMultiplier
        - depthDelta * depthDelta * depthSharpness * depthNormalCorrection
      );
      emissionWeight *= normalSimilarityWeight;
      emissionWeightSum += emissionWeight;
      emissionSum += emissionWeight * emission;

      if (skipOcclusionBlur) {
        return;
      }

      float occlusionSpatialKernelScale = centerOcclusionBlendWeight > ${l.float(c)}
        ? ${l.float(.08)}
        : ${l.float(1.5)};
      float occlusionWeight = exp(-sampleOffset * sampleOffset * occlusionSpatialKernelScale - depthDelta * depthDelta * depthSharpness);
      occlusionWeight *= normalSimilarityWeight;
      occlusionWeightSum += occlusionWeight;
      occlusionSum += occlusionWeight * sampleGlobalIllumination.a;
    }
  `),i.main.add(l`
    vec3 emissionSum = vec3(0.0);
    float emissionWeightSum = 0.0;

    vec4 centerGlobalIllumination = texture(globalIlluminationTexture, uv);
    float centerOcclusionBlendWeight = texture(globalIlluminationWeightTexture, uv).r;
    bool isScaledGlobalIllumination = scaleGlobalIllumination < 1.0;
    bool shouldReuseCenterOcclusion = isScaledGlobalIllumination && centerOcclusionBlendWeight <= ${l.float(c)};
    bool shouldSkipLowQualityBlur = !hasEmission && shouldReuseCenterOcclusion;
    if (shouldSkipLowQualityBlur) {
      fragColor = vec4(
        quantizeGlobalIlluminationColor(centerGlobalIllumination.rgb),
        centerGlobalIllumination.a
      );
      return;
    }

    float centerDepth = linearDepthFromTexture(depthMap, uv);
    vec3 centerNormal = texture(normalMap, uv).rgb;
    float occlusionSum = 0.0;
    float occlusionWeightSum = 0.0;

    float depthSharpness = globalIlluminationDepthSharpness(projScale, centerDepth);
    for (int sampleOffset = -${l.int(s)}; sampleOffset <= ${l.int(s)}; ++sampleOffset) {
      float sampleOffsetFloat = float(sampleOffset);
      vec2 sampleUv = uv + sampleOffsetFloat * blurSize;
      accumulateBlurSample(
        sampleUv,
        sampleOffsetFloat,
        centerDepth,
        centerNormal,
        depthSharpness,
        shouldReuseCenterOcclusion,
        emissionWeightSum,
        emissionSum,
        occlusionWeightSum,
        occlusionSum,
        centerOcclusionBlendWeight
      );
    }

    float occlusion = shouldReuseCenterOcclusion ? centerGlobalIllumination.a : occlusionSum / occlusionWeightSum;
    vec3 blurredEmission = (emissionSum / emissionWeightSum).rgb;

    // heuristic dithering of the colors to remove banding, color shifts and wrong color accumulation
    float dither = ditherNoise(vec4(blurredEmission, occlusion)) - 1./32768.0;
    blurredEmission += isScaledGlobalIllumination ? 0.85 * dither : dither;

    fragColor = vec4(quantizeGlobalIlluminationColor(blurredEmission), occlusion);
  `),o}var G=new b;G.useFloatBlend=!1;var J=Object.freeze(Object.defineProperty({__proto__:null,GlobalIlluminationBlurDrawParameters:r,build:T},Symbol.toStringTag,{value:"Module"}));export{r as a,T as b,J as c};
