import{a as C}from"./chunk-YS6KMJ2K.js";import{a as G,c as j,d as $,f as q}from"./chunk-HBYEJBLZ.js";import{f as H}from"./chunk-ECJS2ZJW.js";import{a as x}from"./chunk-2UTJD3RB.js";import{a as u,b as v,d as Z}from"./chunk-ETR3CAI3.js";import{b as V}from"./chunk-IVWKUT7Q.js";import{a as L}from"./chunk-7JJBCEUY.js";import{b as s}from"./chunk-6WQYUJUQ.js";import{b as T,c as O,f as A,g as l,j as W,k as B}from"./chunk-SYTOW5CL.js";import{a as m}from"./chunk-ZTED3WGD.js";import{i as z}from"./chunk-C5AZX4M2.js";import{a as k}from"./chunk-CC72ZDCP.js";import{a as h}from"./chunk-MI7CDTQL.js";import{a as d}from"./chunk-6WLT4IGN.js";import{a as E}from"./chunk-LI2AJFVU.js";import{a as i}from"./chunk-SYFPWUTB.js";import{a as U}from"./chunk-GNMUXIWL.js";import{a as w}from"./chunk-6ZGVESB5.js";import{a as y}from"./chunk-XYMAXA4B.js";import{a as N}from"./chunk-LUGQYNAC.js";import{a,c as R}from"./chunk-YSASWMAG.js";import{a as F}from"./chunk-JHE3P533.js";import{a as _}from"./chunk-YMQ4BGWF.js";import{b as I}from"./chunk-RVXINLOX.js";import{b as M}from"./chunk-RX52N74R.js";import{c as b}from"./chunk-7VB5JZ2H.js";import{a as S}from"./chunk-ARRCN5K3.js";import{E as P}from"./chunk-L244EAZB.js";function J(t){t.code.add(a`float normals2FoamIntensity(vec3 n, float waveStrength){
float normalizationFactor =  max(0.015, waveStrength);
return max((n.x + n.y)*0.3303545/normalizationFactor + 0.3303545, 0.0);
}`)}function X(t){t.code.add(a`vec3 foamIntensity2FoamColor(float foamIntensityExternal, float foamPixelIntensity, vec3 skyZenitColor, float dayMod){
return foamIntensityExternal * (0.075 * skyZenitColor * pow(foamPixelIntensity, 4.) +  50.* pow(foamPixelIntensity, 23.0)) * dayMod;
}`)}function D(t){t.fragment.uniforms.add(new y("texWaveNormal",e=>e.waveNormal),new y("texWavePerturbation",e=>e.wavePerturbation),new m("waveParams",e=>I(ae,e.waveStrength,e.waveTextureRepeat,e.flowStrength,e.flowOffset)),new k("waveDirection",e=>M(te,e.waveDirection[0]*e.waveVelocity,e.waveDirection[1]*e.waveVelocity))),t.fragment.include(J),t.fragment.code.add(a`const vec2  FLOW_JUMP = vec2(6.0/25.0, 5.0/24.0);
vec2 textureDenormalized2D(sampler2D _tex, vec2 _uv) {
return 2.0 * texture(_tex, _uv).rg - 1.0;
}
float sampleNoiseTexture(vec2 _uv) {
return texture(texWavePerturbation, _uv).b;
}
vec3 textureDenormalized3D(sampler2D _tex, vec2 _uv) {
return 2.0 * texture(_tex, _uv).rgb - 1.0;
}
float computeProgress(vec2 uv, float time) {
return fract(time);
}
float computeWeight(vec2 uv, float time) {
float progress = computeProgress(uv, time);
return 1.0 - abs(1.0 - 2.0 * progress);
}
vec3 computeUVPerturbedWeigth(sampler2D texFlow, vec2 uv, float time, float phaseOffset) {
float flowStrength = waveParams[2];
float flowOffset = waveParams[3];
vec2 flowVector = textureDenormalized2D(texFlow, uv) * flowStrength;
float progress = computeProgress(uv, time + phaseOffset);
float weight = computeWeight(uv, time + phaseOffset);
vec2 result = uv;
result -= flowVector * (progress + flowOffset);
result += phaseOffset;
result += (time - progress) * FLOW_JUMP;
return vec3(result, weight);
}
const float TIME_NOISE_TEXTURE_REPEAT = 0.3737;
const float TIME_NOISE_STRENGTH = 7.77;
vec3 getWaveLayer(sampler2D _texNormal, sampler2D _dudv, vec2 _uv, vec2 _waveDir, float time) {
float waveStrength = waveParams[0];
vec2 waveMovement = time * -_waveDir;
float timeNoise = sampleNoiseTexture(_uv * TIME_NOISE_TEXTURE_REPEAT) * TIME_NOISE_STRENGTH;
vec3 uv_A = computeUVPerturbedWeigth(_dudv, _uv + waveMovement, time + timeNoise, 0.0);
vec3 uv_B = computeUVPerturbedWeigth(_dudv, _uv + waveMovement, time + timeNoise, 0.5);
vec3 normal_A = textureDenormalized3D(_texNormal, uv_A.xy) * uv_A.z;
vec3 normal_B = textureDenormalized3D(_texNormal, uv_B.xy) * uv_B.z;
vec3 mixNormal = normalize(normal_A + normal_B);
mixNormal.xy *= waveStrength;
mixNormal.z = sqrt(1.0 - dot(mixNormal.xy, mixNormal.xy));
return mixNormal;
}
vec4 getSurfaceNormalAndFoam(vec2 _uv, float _time) {
float waveTextureRepeat = waveParams[1];
vec3 normal = getWaveLayer(texWaveNormal, texWavePerturbation, _uv * waveTextureRepeat, waveDirection, _time);
float foam  = normals2FoamIntensity(normal, waveParams[0]);
return vec4(normal, foam);
}`)}var ae=_(),te=F();function K(t){t.fragment.uniforms.add(new i("cloudAbsorption",e=>e.clouds.absorption),new i("cloudCoverage",e=>e.clouds.coverage)).code.add(a`vec4 lookupCloudsFromTextureArray(sampler2DArray cubeMap, vec3 rayDir) {
int faceIndex;
vec2 uv;
if(rayDir.z <= 0.0) {
float hazeFactor = smoothstep(-0.01, mix(0.0, 0.075, cloudCoverage), abs(dot(rayDir, vec3(0, 0, 1))));
float shading = clamp(1.0 - cloudAbsorption, 0.6, 1.0) * (1.0 - hazeFactor);
float totalTransmittance = hazeFactor;
return vec4(shading, totalTransmittance, shading, totalTransmittance);
}
if (abs(rayDir.x) >= abs(rayDir.y) && abs(rayDir.x) >= abs(rayDir.z)) {
if(rayDir.x > 0.0) {
faceIndex = 0;
uv = rayDir.yz / rayDir.x;
uv = vec2(-uv.x, uv.y);
} else {
faceIndex = 1;
uv = rayDir.yz / rayDir.x;
uv = vec2(-uv.x, -uv.y);
}
} else if (abs(rayDir.y) >= abs(rayDir.x) && abs(rayDir.y) >= abs(rayDir.z)) {
if(rayDir.y > 0.0) {
faceIndex = 2;
uv = rayDir.xz / rayDir.y;
} else {
faceIndex = 3;
uv = rayDir.xz / rayDir.y;
uv = vec2(uv.x, -uv.y);
}
} else {
if(rayDir.y < 0.0) {
faceIndex = 4;
uv = rayDir.xy / rayDir.z;
uv = vec2(uv.x, -uv.y);
} else {
faceIndex = 5;
uv = rayDir.xy / rayDir.z;
uv = vec2(uv.x, -uv.y);
}
}
uv = 0.5 * (uv + 1.0);
if(faceIndex != 5) {
uv.y = uv.y - 0.5;
}
uv.y = uv.y * 2.0;
vec4 s = texture(cubeMap, vec3(uv, float(faceIndex)));
return s;
}`)}var f=class extends R{constructor(e,o){super(e,"sampler2DArray",0,(r,n)=>r.bindTexture(e,o(n)))}};function Q(t){let e=t.fragment;e.constants.add("radiusCloudsSquared","float",re).code.add(a`vec3 intersectWithCloudLayer(vec3 dir, vec3 cameraPosition, vec3 spherePos) {
float B = 2.0 * dot(cameraPosition, dir);
float C = dot(cameraPosition, cameraPosition) - radiusCloudsSquared;
float det = B * B - 4.0 * C;
float pointIntDist = max(0.0, 0.5 *(-B + sqrt(det)));
return (cameraPosition + dir * pointIntDist) - spherePos;
}`),e.uniforms.add(new i("radiusCurvatureCorrection",({clouds:o})=>o.parallax.radiusCurvatureCorrection)).code.add(a`vec3 correctForPlanetCurvature(vec3 dir) {
dir.z = dir.z * (1.0 - radiusCurvatureCorrection) + radiusCurvatureCorrection;
return dir;
}`),e.code.add(a`vec3 rotateDirectionToAnchorPoint(mat4 rotMat, vec3 inVec) {
return (rotMat * vec4(inVec, 0.0)).xyz;
}`),u(e),v(e),e.constants.add("RIM_COLOR","vec3",b(.28,.175,.035)),e.constants.add("sunsetTransitionFactor","float",.3),e.constants.add("rimScattering","float",140),e.constants.add("backlightFactor","float",.2),e.constants.add("backlightScattering","float",10),e.constants.add("backlightTransition","float",.3),e.code.add(a`vec3 calculateCloudColor(vec3 cameraPosition, vec3 worldSpaceRay, vec4 clouds) {
float upDotLight = dot(cameraPosition, mainLightDirection);
float dirDotLight = max(dot(worldSpaceRay, mainLightDirection), 0.0);
float sunsetTransition = clamp(pow(max(upDotLight, 0.0), sunsetTransitionFactor), 0.0, 1.0);
vec3 ambientLight = calculateAmbientIrradiance(cameraPosition);
vec3 combinedLight = clamp((mainLightIntensity + ambientLight )/PI, vec3(0.0), vec3(1.0));
vec3 baseCloudColor = pow(combinedLight * pow(clouds.xyz, vec3(GAMMA)), vec3(INV_GAMMA));
float scatteringMod = max(clouds.a < 0.5 ? clouds.a / 0.5 : - clouds.a / 0.5 + 2.0, 0.0);
float rimLightIntensity = 0.5 + 0.5 * pow(max(upDotLight, 0.0), 0.35);
vec3 directSunScattering = RIM_COLOR * rimLightIntensity * (pow(dirDotLight, rimScattering)) * scatteringMod;
float additionalLight = backlightFactor * pow(dirDotLight, backlightScattering) * (1. - pow(sunsetTransition, backlightTransition)) ;
return vec3(baseCloudColor * (1.0 + additionalLight) + directSunScattering);
}`),t.include(K),e.uniforms.add(new x("readChannelsRG",o=>o.clouds.readChannels===0),new f("cubeMap",o=>o.clouds.data?.cubeMap?.colorTexture)).code.add(a`vec4 sampleCloud(vec3 rayDir, bool readOtherChannel) {
vec4 s = lookupCloudsFromTextureArray(cubeMap, rayDir);
bool readRG = readChannelsRG ^^ readOtherChannel;
s = readRG ? vec4(vec3(s.r), s.g) : vec4(vec3(s.b), s.a);
return length(s) == 0.0 ? vec4(s.rgb, 1.0) : s;
}`),e.uniforms.add(new h("anchorPoint",o=>o.clouds.parallax.anchorPoint),new h("anchorPointNew",o=>o.clouds.parallaxNew.anchorPoint),new d("rotationClouds",o=>o.clouds.parallax.transform),new d("rotationCloudsNew",o=>o.clouds.parallaxNew.transform),new i("cloudsOpacity",o=>o.clouds.opacity),new i("fadeFactor",o=>o.clouds.fadeFactor),new x("crossFade",o=>o.clouds.fadeState===3)).code.add(a`vec4 renderClouds(vec3 worldRay, vec3 cameraPosition) {
vec3 intersectionPoint = intersectWithCloudLayer(worldRay, cameraPosition, anchorPoint);
vec3 worldRayRotated = rotateDirectionToAnchorPoint(rotationClouds, normalize(intersectionPoint));
vec3 worldRayRotatedCorrected = correctForPlanetCurvature(worldRayRotated);
vec4 cloudData = sampleCloud(worldRayRotatedCorrected, crossFade);
vec3 cameraPositionN = normalize(cameraPosition);
vec4 cloudColor = vec4(calculateCloudColor(cameraPositionN, worldRay, cloudData), cloudData.a);
if(crossFade) {
intersectionPoint = intersectWithCloudLayer(worldRay, cameraPosition, anchorPointNew);
worldRayRotated = rotateDirectionToAnchorPoint(rotationCloudsNew, normalize(intersectionPoint));
worldRayRotatedCorrected = correctForPlanetCurvature(worldRayRotated);
cloudData = sampleCloud(worldRayRotatedCorrected, false);
vec4 cloudColorNew = vec4(calculateCloudColor(cameraPositionN, worldRay, cloudData), cloudData.a);
cloudColor = mix(cloudColor, cloudColorNew, fadeFactor);
}
float totalTransmittance = length(cloudColor.rgb) == 0.0 ?
1.0 :
clamp(cloudColor.a * cloudsOpacity + (1.0 - cloudsOpacity), 0.0 , 1.0);
return vec4(cloudColor.rgb, totalTransmittance);
}`)}var re=(S.radius+V)**2;function Y(t,e){let o=t.fragment;o.include(j,e),o.include(U),o.include(X),e.cloudReflections&&t.include(Q),e.screenSpaceReflections&&t.include(Z,e),o.include($,e),o.constants.add("fresnelSky","vec3",[.02,1,15]),o.constants.add("fresnelMaterial","vec2",[.02,.1]),o.constants.add("roughness","float",.015),o.constants.add("foamIntensityExternal","float",1.7),o.constants.add("ssrIntensity","float",.65),o.constants.add("ssrHeightFadeStart","float",3e5),o.constants.add("ssrHeightFadeEnd","float",5e5),o.constants.add("waterDiffusion","float",.92),o.constants.add("waterSeaColorMod","float",.8),o.constants.add("correctionViewingPowerFactor","float",.4),o.constants.add("skyZenitColor","vec3",[.52,.68,.9]),o.constants.add("skyColor","vec3",[.67,.79,.9]),o.constants.add("cloudFresnelModifier","vec2",[1.2,.01]),o.code.add(a`PBRShadingWater shadingInfo;
vec3 getSkyGradientColor(in float cosTheta, in vec3 horizon, in vec3 zenit) {
float exponent = pow((1.0 - cosTheta), fresnelSky[2]);
return mix(zenit, horizon, exponent);
}`),o.uniforms.add(new i("lightingSpecularStrength",r=>r.lighting.mainLight.specularStrength),new i("lightingEnvironmentStrength",r=>r.lighting.mainLight.environmentStrength)),o.code.add(a`vec3 getWaterColor(in vec3 n, in vec3 v, in vec3 l, vec3 color, in vec3 lightIntensity, in vec3 localUp, in float shadow, float foamIntensity, vec3 viewPosition, vec3 position) {
float reflectionHit = 0.0;
float reflectionHitDiffused = 0.0;
vec3 seaWaterColor = linearizeGamma(color);
vec3 h = normalize(l + v);
shadingInfo.NdotV = clamp(dot(n, v), 0.001, 1.0);
shadingInfo.VdotN = clamp(dot(v, n), 0.001, 1.0);
shadingInfo.NdotH = clamp(dot(n, h), 0.0, 1.0);
shadingInfo.VdotH = clamp(dot(v, h), 0.0, 1.0);
shadingInfo.LdotH = clamp(dot(l, h), 0.0, 1.0);
float upDotV = max(dot(localUp,v), 0.0);
vec3 skyHorizon = linearizeGamma(skyColor);
vec3 skyZenit = linearizeGamma(skyZenitColor);
vec3 skyColor = getSkyGradientColor(upDotV, skyHorizon, skyZenit );
float upDotL = max(dot(localUp,l),0.0);
float daytimeMod = 0.1 + upDotL * 0.9;
skyColor *= daytimeMod;
float shadowModifier = clamp(shadow, 0.8, 1.0);
vec3 fresnelModifier = fresnelReflection(shadingInfo.VdotN, vec3(fresnelSky[0]), fresnelSky[1]);
vec3 reflSky = lightingEnvironmentStrength * fresnelModifier * skyColor * shadowModifier;
vec3 reflSea = seaWaterColor * mix(skyColor, upDotL * lightIntensity * LIGHT_NORMALIZATION, 2.0 / 3.0) * shadowModifier;
vec3 specular = vec3(0.0);
if(upDotV > 0.0 && upDotL > 0.0) {
vec3 specularSun = brdfSpecularWater(shadingInfo, roughness, vec3(fresnelMaterial[0]), fresnelMaterial[1]);
vec3 incidentLight = lightIntensity * LIGHT_NORMALIZATION * shadow;
float NdotL = clamp(dot(n, l), 0.0, 1.0);
specular = lightingSpecularStrength * NdotL * incidentLight * specularSun;
}
vec3 foam = vec3(0.0);
if(upDotV > 0.0) {
foam = foamIntensity2FoamColor(foamIntensityExternal, foamIntensity, skyZenitColor, daytimeMod);
}
float correctionViewingFactor = pow(max(dot(v, localUp), 0.0), correctionViewingPowerFactor);
vec3 normalCorrectedClouds = mix(localUp, n, correctionViewingFactor);
vec3 reflectedWorld = normalize(reflect(-v, normalCorrectedClouds));`),e.cloudReflections&&o.uniforms.add(new i("cloudsOpacity",r=>r.clouds.opacity)).code.add(a`vec4 cloudsColor = renderClouds(reflectedWorld, position);
cloudsColor.a = 1.0 - cloudsColor.a;
cloudsColor = pow(cloudsColor, vec4(GAMMA));
cloudsColor *= clamp(fresnelModifier.y * cloudFresnelModifier[0] - cloudFresnelModifier[1], 0.0, 1.0) * cloudsOpacity;`),e.screenSpaceReflections?o.uniforms.add(new d("view",r=>r.camera.viewMatrix),new E("lastFrameColorTexture",r=>r.reprojection.lastFrameColor?.getTexture()),new i("fadeFactorSSR",r=>r.screenSpaceReflections.fadeFactor)).code.add(a`vec3 viewDir = normalize(viewPosition);
vec4 viewNormalVectorCoordinate = view * vec4(n, 0.0);
vec3 viewNormal = normalize(viewNormalVectorCoordinate.xyz);
vec4 viewUp = view * vec4(localUp, 0.0);
vec3 viewNormalCorrectedSSR = mix(viewUp.xyz, viewNormal, correctionViewingFactor);
vec3 reflected = normalize(reflect(viewDir, viewNormalCorrectedSSR));
vec3 hitCoordinate = screenSpaceIntersection(reflected, viewPosition, viewDir, viewUp.xyz, 0.0);
vec3 reflectedColor = vec3(0.0);
if (hitCoordinate.z > 0.0)
{
vec2 reprojectedCoordinate = reprojectionCoordinate(hitCoordinate);
vec2 dCoords = smoothstep(0.3, 0.6, abs(vec2(0.5, 0.5) - hitCoordinate.xy));
float heightMod = smoothstep(ssrHeightFadeEnd, ssrHeightFadeStart, -viewPosition.z);
reflectionHit = clamp(1.0 - (1.3 * dCoords.y), 0.0, 1.0) * heightMod * fadeFactorSSR;
reflectionHitDiffused = waterDiffusion * reflectionHit;
reflectedColor = linearizeGamma(texture(lastFrameColorTexture, reprojectedCoordinate).xyz) *
reflectionHitDiffused * fresnelModifier.y * ssrIntensity;
}
float seaColorMod =  mix(waterSeaColorMod, waterSeaColorMod * 0.5, reflectionHitDiffused);
vec3 waterRenderedColor = tonemapACES((1.0 - reflectionHitDiffused) * reflSky + reflectedColor +
reflSea * seaColorMod + specular + foam);`):o.code.add(a`vec3 waterRenderedColor = tonemapACES(reflSky + reflSea * waterSeaColorMod + specular + foam);`),e.cloudReflections?e.screenSpaceReflections?o.code.add(a`return waterRenderedColor * (1.0 - (1.0 - reflectionHit) * cloudsColor.a) + (1.0 - reflectionHit) * cloudsColor.xyz;
}`):o.code.add(a`return waterRenderedColor * (1.0 - cloudsColor.a) + cloudsColor.xyz;
}`):o.code.add(a`return waterRenderedColor;
}`)}function le(t){let e=new N,{vertex:o,fragment:r,varyings:n}=e,{output:p,draped:ee,receiveShadows:oe}=t;O(o,t),e.include(H),e.attributes.add("position","vec3"),e.attributes.add("uv0","vec2");let g=new m("waterColor",c=>c.color);if(n.add("vpos","vec3",{invariant:!0}),o.uniforms.add(g),z(p)){if(ee)return o.main.add(a`
      if (waterColor.a < ${a.float(l)}) {
        // Discard this vertex
        gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        return;
      }

      vpos = position;
      gl_Position = transformPosition(proj, view, vpos);`),r.uniforms.add(g),r.main.add(a`fragColor = waterColor;`),e;e.include(C,t),n.add("vuv","vec2"),n.add("vnormal","vec3"),n.add("vtbnMatrix","mat3"),o.main.add(a`
      if (waterColor.a < ${a.float(l)}) {
        // Discard this vertex
        gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        return;
      }

      vuv = uv0;
      vpos = position;

      vnormal = getLocalUp(vpos, localOrigin);
      vtbnMatrix = getTBNMatrix(vnormal);

      gl_Position = transformPosition(proj, view, vpos);
      forwardLinearDepthToReadShadowMap();`)}switch(e.include(q,t),p){case 0:case 1:case 2:r.include(G,{pbrMode:0}),e.include(D),e.include(Y,t),r.include(s,t),e.include(B,t),r.include(A),T(r,t),u(r),v(r),r.uniforms.add(g,new w("timeElapsed",({timeElapsed:c})=>c),o.uniforms.get("view"),o.uniforms.get("localOrigin")).main.add(a`
        discardBySlice(vpos);
        vec3 localUp = vnormal;
        // the created normal is in tangent space
        vec4 tangentNormalFoam = getSurfaceNormalAndFoam(vuv, timeElapsed);

        // we rotate the normal according to the tangent-bitangent-normal-Matrix
        vec3 n = normalize(vtbnMatrix * tangentNormalFoam.xyz);
        vec3 v = -normalize(vpos - cameraPosition);
        float shadow = ${oe?a`1.0 - readShadowMap(vpos, linearDepth)`:"1.0"};
        vec4 vPosView = view * vec4(vpos, 1.0);
        vec4 final = vec4(getWaterColor(n, v, mainLightDirection, waterColor.rgb, mainLightIntensity, localUp, shadow, tangentNormalFoam.w, vPosView.xyz, vpos + localOrigin), waterColor.w);

        fragColor = delinearizeGamma(final);
        outputColorHighlightOLID(applySlice(fragColor, vpos), final.rgb);`);break;case 4:e.include(C,t),e.include(D,t),r.include(s,t),n.add("vuv","vec2"),o.main.add(a`
        if (waterColor.a < ${a.float(l)}) {
          // Discard this vertex
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          return;
        }

        vuv = uv0;
        vpos = position;

        gl_Position = transformPosition(proj, view, vpos);`),r.uniforms.add(new w("timeElapsed",({timeElapsed:c})=>c)).main.add(a`discardBySlice(vpos);
vec4 tangentNormalFoam = getSurfaceNormalAndFoam(vuv, timeElapsed);
tangentNormalFoam.xyz = normalize(tangentNormalFoam.xyz);
fragColor = vec4((tangentNormalFoam.xyz + vec3(1.0)) * 0.5, tangentNormalFoam.w);`);break;case 3:o.main.add(a`
        if (waterColor.a < ${a.float(l)}) {
          // Discard this vertex
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          return;
        }

        vpos = position;
        gl_Position = transformPosition(proj, view, vpos);`),r.include(s,t),r.main.add("discardBySlice(vpos);");break;case 10:e.include(W,t),o.main.add(a`
        if (waterColor.a < ${a.float(l)}) {
          // Discard this vertex
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          return;
        }

        vpos = position;
        gl_Position = transformPosition(proj, view, vpos);`),r.include(s,t),r.main.add(a`discardBySlice(vpos);
calculateOcclusionAndOutputHighlight();`);break;case 11:e.include(L,t),o.main.add(a`
        if (waterColor.a < ${a.float(l)}) {
          // Discard this vertex
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          return;
        }

        vpos = position;
        gl_Position = transformPosition(proj, view, vpos);
        forwardObjectAndLayerIdColor();`),r.include(s,t),r.main.add(a`discardBySlice(vpos);
outputObjectAndLayerIdColor();`);break;default:throw new P("shaderbuilder:missing-output",`Unimplemented shader output ${p} for WaterTechnique`)}return e}var yo=Object.freeze(Object.defineProperty({__proto__:null,build:le},Symbol.toStringTag,{value:"Module"}));export{le as a,yo as b};
