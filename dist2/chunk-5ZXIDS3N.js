import{a as io}from"./chunk-KFFOWERO.js";import{a as j,b as H,e as Q,f as J,g as Y,h as Z,i as q,j as co,k as uo,l as po,m as fo,n as vo}from"./chunk-LFCNKVRH.js";import{e as W,g as oo,h as ro,i as to,j as no,k as so,l as go}from"./chunk-XJ2SDCYQ.js";import{b as eo,e as lo,f as mo}from"./chunk-HBYEJBLZ.js";import{a as K}from"./chunk-X57NYCXT.js";import{f as G}from"./chunk-ECJS2ZJW.js";import{b as X}from"./chunk-TKDTACOG.js";import{b as ao}from"./chunk-ETR3CAI3.js";import{i as O}from"./chunk-R6ZCYZUZ.js";import{a as B}from"./chunk-ROE3GY7L.js";import{a as D,d as L,e as A}from"./chunk-VTS3N5X4.js";import{a as $}from"./chunk-P5HKTOA3.js";import{b as F}from"./chunk-6WQYUJUQ.js";import{b as h,c as I,g as E,k as z}from"./chunk-SYTOW5CL.js";import{a as U}from"./chunk-ZTED3WGD.js";import{i as V,o as k,p as _}from"./chunk-C5AZX4M2.js";import{a as R}from"./chunk-CC72ZDCP.js";import{a as T}from"./chunk-JNLIGAVK.js";import{a as x}from"./chunk-6ZGVESB5.js";import{a as u}from"./chunk-XYMAXA4B.js";import{a as S}from"./chunk-I6AGLY42.js";import{a as M}from"./chunk-NPN7TY3U.js";import{a as P}from"./chunk-LUGQYNAC.js";import{a as e,b as l}from"./chunk-YSASWMAG.js";import{g}from"./chunk-JHE3P533.js";import{c as N}from"./chunk-NYQXZQKP.js";function xo(o,a){return bo(o,a)}function bo(o,a){let t=o.fragment,{hasVertexTangents:s,doubleSidedMode:r,hasNormalTexture:d,textureCoordinateType:p,bindType:m,hasNormalTextureTransform:c}=a;s?(o.attributes.add("tangent","vec4"),o.varyings.add("vTangent","vec4"),r===2?t.code.add(e`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):t.code.add(e`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):t.code.add(e`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`),d&&p!==0&&(o.include(_,a),t.uniforms.add(m===1?new u("normalTexture",n=>n.textureNormal):new S("normalTexture",n=>n.textureNormal)),c&&(t.uniforms.add(m===1?new R("scale",n=>n.scale??g):new M("scale",n=>n.scale??g)),t.uniforms.add(new $("normalTextureTransformMatrix",n=>n.normalTextureTransformMatrix??N))),t.code.add(e`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;`),c&&t.code.add(e`mat3 normalRotation = mat3(normalTextureTransformMatrix[0][0]/scale[0], normalTextureTransformMatrix[0][1]/scale[1], 0.0,
normalTextureTransformMatrix[1][0]/scale[0], normalTextureTransformMatrix[1][1]/scale[1], 0.0,
0.0, 0.0, 0.0 );
rawNormal.xy = (normalRotation * vec3(rawNormal.x, rawNormal.y, 1.0)).xy;`),t.code.add(e`return tangentSpace * rawNormal;
}`))}function No(o){let a=new P,{attributes:t,vertex:s,fragment:r,varyings:d}=a,{output:p,normalType:m,offsetBackfaces:c,spherical:n,snowCover:f,pbrMode:w,textureAlphaPremultiplied:To,instancedDoublePrecision:ho,hasVertexColors:C,hasVertexTangents:y,hasColorTexture:b,hasNormalTexture:wo,hasNormalTextureTransform:Co,hasColorTextureTransform:yo}=o;if(I(s,o),t.add("position","vec3"),s.inputs.add("position",()=>"position"),d.add("vpos","vec3",{invariant:!0}),a.include(A,o),a.include(J,o),a.include(X,o),a.include(co,o),!V(p))return a.include(q,o),a;a.include(uo,o),a.include(po,o),a.include(fo,o),a.include(vo,o),h(s,o),a.include(j,o),a.include(G);let v=m===0||m===1;return v&&c&&a.include(W),a.include(xo,o),a.include(H,o),a.include(Q,o),d.add("vPositionLocal","vec3"),a.include(k,o),a.include(Y,o),a.include(K,o),s.uniforms.add(new U("externalColor",i=>i.externalColor,{supportsNaN:!0})),d.add("vcolorExt","vec4"),s.include(D),s.include(L),a.include(ho?lo:mo,o),s.main.add(e`
    forwardVertexColor();

    MaskedColor maskedColor =
      applySymbolColor(applyVVColor(applyInstanceColor(createMaskedFromNaNColor(externalColor))));

    vcolorExt = maskedColor.color;
    forwardColorMixMode(maskedColor.mask);

    vpos = getVertexInLocalOriginSpace();
    vPositionLocal = vpos - view[3].xyz;
    vpos = subtractOrigin(vpos);
    ${l(v,"vNormalWorld = dpNormal(vvLocalNormal(normalModel()));")}
    vpos = addVerticalOffset(vpos, localOrigin);
    ${l(y,"vTangent = dpTransformVertexTangent(tangent);")}
    gl_Position = transformPosition(proj, view, vpos);
    ${l(v&&c,"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);")}

    forwardTextureCoordinates();
    forwardColorUV();
    forwardNormalUV();
    forwardEmissiveUV();
    forwardOcclusionUV();
    forwardMetallicRoughnessUV();

    if (opacityMixMode != ${e.int(O.ignore)} && vcolorExt.a < ${e.float(E)}) {
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
    }
    forwardLinearDepthToReadShadowMap();
  `),r.include(no,o),r.include(oo,o),a.include(Z,o),r.include(F,o),a.include(z,o),h(r,o),r.uniforms.add(s.uniforms.get("localOrigin"),new T("ambient",i=>i.ambient),new T("diffuse",i=>i.diffuse),new x("opacity",i=>i.opacity),new x("layerOpacity",i=>i.layerOpacity)),b&&r.uniforms.add(new u("tex",i=>i.texture)),a.include(so,o),r.include(eo,o),r.include(B),a.include(io,o),r.include(go,o),ro(r),to(r),ao(r),r.main.add(e`
    discardBySlice(vpos);
    ${b?e`
            vec4 texColor = texture(tex, ${yo?"colorUV":"vuv0"});
            ${l(To,"texColor.rgb /= texColor.a;")}
            discardOrAdjustAlpha(texColor);`:e`vec4 texColor = vec4(1.0);`}
    shadingParams.viewDirection = normalize(vpos - cameraPosition);
    ${m===2?e`vec3 normal = screenDerivativeNormal(vPositionLocal);`:e`shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
    applyPBRFactors();
    float ssao = evaluateAmbientOcclusionInverse() * getBakedOcclusion();

    vec3 posWorld = vpos + localOrigin;

    float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
    float shadow = readShadow(additionalAmbientScale, vpos);

    vec3 matColor = max(ambient, diffuse);
    vec3 albedo = mixExternalColor(${l(C,"vColor.rgb *")} matColor, texColor.rgb, vcolorExt.rgb, colorMixMode);
    float opacity_ = layerOpacity * mixExternalOpacity(${l(C,"vColor.a * ")} opacity, texColor.a, vcolorExt.a, opacityMixMode);

    ${wo?`mat3 tangentSpace = computeTangentSpace(${y?"normal":"normal, vpos, vuv0"});
           vec3 shadingNormal = computeTextureNormal(tangentSpace, ${Co?"normalUV":"vuv0"});`:"vec3 shadingNormal = normal;"}
    vec3 normalGround = ${n?"normalize(posWorld);":"vec3(0.0, 0.0, 1.0);"}

    ${l(f,e`
          float snow = getSnow(normal, normalGround);
          albedo = mix(albedo, vec3(1), snow);
          shadingNormal = mix(shadingNormal, normal, snow);
          ssao = mix(ssao, 1.0, snow);`)}

    vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

    ${w===1||w===2?e`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
            ${l(f,"mrr = applySnowToMRR(mrr, snow);")}
            vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, additionalAmbientIrradiance);`:e`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
    vec4 finalColor = vec4(shadedColor, opacity_);
    outputColorHighlightOLID(applySlice(finalColor, vpos), albedo ${l(f,", snow")});
  `),a}var Ta=Object.freeze(Object.defineProperty({__proto__:null,build:No},Symbol.toStringTag,{value:"Module"}));export{No as a,Ta as b};
