import{a as v,d as b}from"./chunk-ETR3CAI3.js";import{a as D}from"./chunk-BBTVWFNT.js";import{a as y}from"./chunk-EMFNIAV5.js";import{a as x,b as M}from"./chunk-YO4KVV4T.js";import{a as s}from"./chunk-6WLT4IGN.js";import{a as l}from"./chunk-LI2AJFVU.js";import{a as g}from"./chunk-GNMUXIWL.js";import{a as f}from"./chunk-SNAZ42PQ.js";import{a as t}from"./chunk-6ZGVESB5.js";import{a as c}from"./chunk-XYMAXA4B.js";import{a as u}from"./chunk-E6G6MGCI.js";import{a as d}from"./chunk-LUGQYNAC.js";import{a,b as n}from"./chunk-YSASWMAG.js";import{a as p}from"./chunk-NMKLVORY.js";import{m as h}from"./chunk-67YVG46W.js";function F(r){r.include(x),r.uniforms.add(new f("zProjectionMapLastFrame",o=>M(o.reprojection.lastFrameCamera))),r.code.add(a`float linearDepthFromTextureLastFrame(sampler2D depthTexture, vec2 uv) {
return linearizeDepth(depthFromTexture(depthTexture, uv), zProjectionMapLastFrame);
}`)}var P=.01,W=.008,j=.002,T=.5,E=.02,$=.1,R=.008,L=.012,V=.008,O=40,U=.095,N=.008,k=60,H=2,_=.0039,q=.25,S=.15,w=25,I=.15,z=.5,B=1,C=1,G=16,m=class extends p{constructor(){super(...arguments),this.projScale=1,this.scaleGlobalIllumination=1,this.accumulatedFrames=0,this.temporalSampleFrame=0,this.rayMarchMinReach=I,this.rayMarchMaxReach=z,this.rayMarchWorldReach=w,this.rayMarchMinReachEmissionWeight=B,this.rayMarchMaxReachEmissionWeight=C,this.rayMarchMaxSteps=G,this.colorBleedWeight=S}};function A(r){let o=new d,i=o.fragment;return o.include(u),o.include(y),v(i),i.include(F),i.include(g),i.include(D),o.include(b,r),i.uniforms.add(new c("normalMap",e=>e.normalTexture),new c("depthMap",e=>e.depthTexture),new l("lastFrameColorTexture",e=>e.reprojection.lastFrameColor?.getTexture()),new l("lastFrameDepthTexture",e=>e.reprojection.lastFrameDepth?.attachment),new l("lastFrameGlobalIlluminationTexture",e=>e.globalIllumination?.getTexture()),new l("lastFrameGlobalIlluminationWeightTexture",e=>e.globalIllumination?.getTexture(h)),new s("reprojectionViewMatrix",e=>e.reprojection.viewMatrix),new s("view",e=>e.camera.viewMatrix),new t("accumulatedFrames",e=>e.accumulatedFrames),new t("temporalSampleFrame",e=>e.temporalSampleFrame),new t("scaleGlobalIllumination",e=>e.scaleGlobalIllumination)),i.uniforms.add(new t("rayMarchMinReach",e=>e.rayMarchMinReach),new t("rayMarchMaxReach",e=>e.rayMarchMaxReach),new t("rayMarchWorldReach",e=>e.rayMarchWorldReach),new t("rayMarchMinReachEmissionWeight",e=>e.rayMarchMinReachEmissionWeight),new t("rayMarchMaxReachEmissionWeight",e=>e.rayMarchMaxReachEmissionWeight),new t("rayMarchMaxSteps",e=>e.rayMarchMaxSteps),new t("colorBleedWeight",e=>e.colorBleedWeight)),r.hasEmission&&i.uniforms.add(new l("lastFrameEmissionTexture",e=>e.reprojection.lastFrameEmission?.attachment)),i.code.add(a`
    float computeIdleColorBlendWeight(float accumulatedFrames) {
      float idleColorBlendProgress = clamp(
        accumulatedFrames / ${a.float(O)},
        0.0,
        1.0
      );
      return mix(
        ${a.float(L)},
        ${a.float(V)},
        idleColorBlendProgress
      );
    }

    float computeIdleOcclusionBlendWeight(float accumulatedFrames) {
      float idleOcclusionBlendProgress = clamp(
        accumulatedFrames / ${a.float(k)},
        0.0,
        1.0
      );
      return mix(
        ${a.float(U)},
        ${a.float(N)},
        pow(idleOcclusionBlendProgress, ${a.float(H)})
      );
    }

    bool isEdgeDepth(float centerDepth, vec2 sampleUv) {
      vec2 texelSize = 1.0 / vec2(textureSize(depthMap, 0));
      float depthLeft = linearizeDepth(depthFromTexture(depthMap, sampleUv + vec2(-texelSize.x, 0.0)));
      float depthRight = linearizeDepth(depthFromTexture(depthMap, sampleUv + vec2(texelSize.x, 0.0)));
      float depthUp = linearizeDepth(depthFromTexture(depthMap, sampleUv + vec2(0.0, texelSize.y)));
      float depthDown = linearizeDepth(depthFromTexture(depthMap, sampleUv + vec2(0.0, -texelSize.y)));

      float maxDifference = max(max(abs(centerDepth - depthLeft), abs(centerDepth - depthRight)), max(abs(centerDepth - depthUp), abs(centerDepth - depthDown)));

      return abs(maxDifference / centerDepth) > 0.01;
    }

    vec3 sampleCosineHemisphere(vec2 u) {
      float phi = 6.28318530718 * u.x;
      float radius = sqrt(u.y);
      float x = radius * cos(phi);
      float y = radius * sin(phi);
      float z = sqrt(max(0.0, 1.0 - u.y));

      return vec3(x, y, z);
    }

    mat3 basisFromNormal(vec3 n) {
      vec3 up = abs(n.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
      vec3 tangent = normalize(cross(up, n));
      vec3 bitangent = cross(n, tangent);

      return mat3(tangent, bitangent, n);
    }

    float blueNoiseDitherValue(vec2 pixel, float frame, vec2 axis, float phase) {
      float scroll = 5.588238 * mod(frame, 512.0);
      vec2 p = pixel + vec2(scroll);
      vec2 rotated = vec2(
        axis.x * p.x + axis.y * p.y,
        -axis.y * p.x + axis.x * p.y
      );

      return fract(52.9829189 * fract(0.06711056 * rotated.x + 0.00583715 * rotated.y + phase));
    }

    vec4 blueNoiseDither(vec2 pixel, float frame) {
      vec4 value = vec4(
        blueNoiseDitherValue(pixel, frame, vec2(0.9659258, 0.25881904), 0.0),
        blueNoiseDitherValue(pixel, frame, vec2(0.70710677, 0.70710677), 0.17),
        blueNoiseDitherValue(pixel, frame, vec2(0.25881904, 0.9659258), 0.37),
        blueNoiseDitherValue(pixel, frame, vec2(1.0, 0.0), 0.61)
      );

      return value * 2.0 - 1.0;
    }
  `),o.outputs.add("fragGlobalIllumination","vec4",0),o.outputs.add("fragWeight","float",1),i.main.add(a`
    float depth = depthFromTexture(depthMap, uv);

    // Early out if depth is out of range, such as in the sky
    if (depth >= 1.0 || depth <= 0.0) {
      fragGlobalIllumination = vec4(0.0, 0.0, 0.0, 1.0);
      fragWeight = 0.0;
      return;
    }

    // Get the normal of current fragment
    ivec2 iuv = ivec2(uv * vec2(textureSize(normalMap, 0)));
    vec4 normal4 = texelFetch(normalMap, iuv, 0);
    if (normal4.a != 1.0) {
      fragGlobalIllumination = vec4(0.0, 0.0, 0.0, 1.0);
      fragWeight = 0.0;
      return;
    }
    vec3 normal = normalize(normal4.xyz * 2.0 - 1.0);

    // Reconstruct view space position of current fragment
    float currentPixelDepth = linearizeDepth(depth);
    vec3 currentPixelPos = reconstructPosition(uv * vec2(textureSize(normalMap, 0)), currentPixelDepth);
    vec4 viewPos = vec4(currentPixelPos, 1.0);

    // Reproject current view position to last frame
    vec4 reprojectedViewPos = reprojectionViewMatrix * viewPos;
    vec4 reprojectedCoordinate = applyProjectionMat(proj, reprojectedViewPos.xyz);

    // Read last frame reprojected depth and GI history
    float lastFrameDepthViewPos = -linearDepthFromTextureLastFrame(lastFrameDepthTexture, reprojectedCoordinate.xy);
    vec4 lastFrameGlobalIllumination = texture(lastFrameGlobalIlluminationTexture, reprojectedCoordinate.xy);
    float historyOcclusionBlendWeight = texture(lastFrameGlobalIlluminationWeightTexture, reprojectedCoordinate.xy).r;

    int steps;
    float occlusionBlendWeight = 1.0;
    float colorBlendWeight = 1.0;
    float idleColorBlendWeight = computeIdleColorBlendWeight(accumulatedFrames);
    float idleOcclusionBlendWeight = computeIdleOcclusionBlendWeight(accumulatedFrames);
    float reprojectionDepthMismatch = abs((lastFrameDepthViewPos + reprojectedViewPos.z) / max(lastFrameDepthViewPos, reprojectedViewPos.z));
    bool hasReprojectionMismatch = reprojectionDepthMismatch > ${a.float(P)};
    bool isScaledGlobalIllumination = scaleGlobalIllumination < 1.0;
    bool isLowQualityEdgePixel = isScaledGlobalIllumination && isEdgeDepth(currentPixelDepth, uv);
    bool resetColorHistory = false;

    // Heuristic to determine blending weights and number of steps for occlusion and color
    if (hasReprojectionMismatch) {
      if (isLowQualityEdgePixel) {
        steps = 1;
        occlusionBlendWeight = ${a.float(W)};
        resetColorHistory = true;
      } else {
        steps = 6;
        occlusionBlendWeight = 1.0;
        resetColorHistory = true;
      }
    } else {
      steps = 1;
      if (historyOcclusionBlendWeight > ${a.float(T)}) {
        occlusionBlendWeight = ${a.float($)};
        colorBlendWeight = ${a.float(R)};
      } else if (historyOcclusionBlendWeight > ${a.float(E)}) {
        occlusionBlendWeight = historyOcclusionBlendWeight - 0.05;
        colorBlendWeight = ${a.float(R)};
      } else {
        occlusionBlendWeight = isScaledGlobalIllumination ? ${a.float(W)} : idleOcclusionBlendWeight;
        colorBlendWeight = isScaledGlobalIllumination ? ${a.float(j)} : idleColorBlendWeight;
      }
    }

    vec4 randomDirectionSample;
    mat3 normalBasis = basisFromNormal(normal);
    int temporalSampleStride = min(64 / steps, 6);
    float temporalFrameOffset = mod(temporalSampleFrame, float(64 / steps));

    // For each ray determine if it hits geometry and accumulate occlusion or color
    float stepSize = 1.0 / float(steps);
    for (int i = 0; i < steps; ++i) {
      float sampleIndex = float(i * temporalSampleStride + int(temporalFrameOffset));
      randomDirectionSample = blueNoiseDither(floor(gl_FragCoord.xy), sampleIndex);
      vec2 hemisphereSample = randomDirectionSample.rg * 0.5 + 0.5;
      float offsetSample = randomDirectionSample.a * 0.5 + 0.5;
      vec3 rayDirection = normalBasis * sampleCosineHemisphere(hemisphereSample);
      float rayMarchScreenReach = rayMarchScreenReachFromWorldReach(viewPos.xyz, rayDirection, rayMarchWorldReach);
      rayMarchScreenReach = clamp(rayMarchScreenReach, rayMarchMinReach, rayMarchMaxReach);
      vec3 hit = screenSpaceIntersectionWithLimits(
        rayDirection,
        viewPos.xyz,
        normalize(viewPos.xyz),
        normal,
        offsetSample,
        rayMarchScreenReach,
        rayMarchMaxSteps
      );

      if (hit.z > 0.0) {
        ${n(r.hasColor,a`
          // Emission and color bleed - Reproject the current receiver and sampled hit to estimate bounced color
          vec3 receiverColor = texture(lastFrameColorTexture, reprojectedCoordinate.xy).rgb;

          vec2 hitReprojectedCoordinate = reprojectionCoordinate(hit);
          vec3 sourceColor = texture(lastFrameColorTexture, hitReprojectedCoordinate).rgb;
          vec3 sourceColorLinear = linearizeGamma(sourceColor);
          vec3 sourceEmission = ${n(r.hasEmission,"texture(lastFrameEmissionTexture, hitReprojectedCoordinate).xyz","vec3(0.0)")};

          float emissionWeight = mix(
            rayMarchMinReachEmissionWeight,
            rayMarchMaxReachEmissionWeight,
            (rayMarchScreenReach - rayMarchMinReach) / max(rayMarchMaxReach - rayMarchMinReach, 0.00001)
          );
          fragGlobalIllumination.rgb += ((sourceColorLinear * colorBleedWeight) + sourceEmission * emissionWeight) * stepSize;
          `)}
      } else {
        // Occlusion - heuristic modulating sky intensity based on angle to main light
        vec4 viewMainLightDirection = view * vec4(mainLightDirection, 0.0);
        float skyModulation = pow(max(dot(rayDirection, viewMainLightDirection.xyz), 0.0), 3.0) * 5.5;
        float skyFacingWeight = clamp(3.5 * dot(viewMainLightDirection.xyz, normal), 0.0, 1.0);
        skyModulation = mix(1.0, skyModulation * 0.2 + 0.8, skyFacingWeight);
        fragGlobalIllumination.a += skyModulation * stepSize;
      }
    }

    // Rendering trick add noise to reduce accumulation artifacts
    float accumulationDither = occlusionBlendWeight < 1.0
      ? randomDirectionSample.b * ${a.float(_)}
      : 0.0;

    ${n(r.hasColor,a`
      // Accumulate color
      vec3 lastFrameColor = lastFrameGlobalIllumination.rgb;
      float colorDitherScale = isScaledGlobalIllumination ? ${a.float(q)} : 1.0;
      fragGlobalIllumination.rgb = resetColorHistory
        ? vec3(0.0)
        : mix(lastFrameColor + accumulationDither * colorDitherScale, fragGlobalIllumination.rgb, colorBlendWeight);
      `,a`
      fragGlobalIllumination.rgb = vec3(0.0);
      `)}
    fragGlobalIllumination.rgb = quantizeGlobalIlluminationColor(fragGlobalIllumination.rgb);

    // Accumulate occlusion
    fragGlobalIllumination.a = mix(lastFrameGlobalIllumination.a + accumulationDither, fragGlobalIllumination.a, occlusionBlendWeight);

    fragWeight = occlusionBlendWeight;
  `),o}var pe=Object.freeze(Object.defineProperty({__proto__:null,GlobalIlluminationPassParameters:m,build:A,defaultColorBleedWeight:S,defaultRayMarchMaxReach:z,defaultRayMarchMaxReachEmissionWeight:C,defaultRayMarchMaxSteps:G,defaultRayMarchMinReach:I,defaultRayMarchMinReachEmissionWeight:B,defaultRayMarchWorldReach:w},Symbol.toStringTag,{value:"Module"}));export{S as a,w as b,I as c,z as d,B as e,C as f,G as g,m as h,A as i,pe as j};
