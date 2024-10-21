import{hn as r,hm as St,c6 as _o,dE as Eo,ho as M,uG as $o,uH as y,uI as Ot,uJ as se,aE as c,aF as J,aL as _t,b2 as Ao,b9 as Et,ba as Ro,s as $t,uK as At,hk as Po,tv as Ye,_ as $e,au as Rt,n4 as Pt,gP as Me,as as xe,N as No,a8 as zo,cM as Ce,lw as F,cd as G,cI as Lo,ce as qe,Y as q,cf as ye,jg as Go,uL as fe,jG as Bo,jp as He,th as jo,cw as Io,cG as Nt,d9 as we,da as zt,j9 as dt,l5 as Fo,tH as Do,dC as Vo,uM as Uo,al as Wo,uN as qo,uO as Ho,mf as Be,bH as ut,dM as Lt,uP as ko,nr as Gt,D as Yo,aC as Bt,ju as jt,tl as ee,dt as It,kD as Se,K as Jo,uQ as Zo,dz as Xo,dA as ht,dB as Ko,cj as Qo,ck as ea,ea as mt,on as pt,jl as ta}from"./index-DzfnmjFP.js";import{e as H,q as Je,ae as g,a3 as Ft,B as Ze,l as B,x as oe,af as ae,p as pe,s as P,P as re,ag as Dt,u as oa,ah as W,ai as aa,aj as Vt,c as ke,ak as le,a as Xe,o as Ae,g as Ut,Y as Wt,C as Ke,D as Qe,U as Re,ad as ra,R as be,b as L,al as ia,A as na,am as qt,an as Ht,f as Oe,z as kt,ao as Yt,j as k,a2 as sa,ap as la,a9 as ca,E as da,F as ua,G as ha,I as ma,J as pa,K as fa,L as ga,ab as va,i as p,k as xa,V as je,ac as ba,a7 as Jt,X as Zt,a5 as Te}from"./IntegerPassUniform-C4orcbhQ.js";import{c as Ta,x as Xt,L as ya,i as Kt,O as wa,E as Ma}from"./BufferView-DowTxg_p.js";import{e as Ca,f as Sa,l as ft,o as gt}from"./vec3-Lc_U4bRi.js";import{n as Oa,s as vt}from"./vec4-D8kcCT2e.js";import{l as _a,n as Ea,g as X,o as $a,h as Aa,t as Ra,i as Pa}from"./DefaultMaterial_COLOR_GAMMA-DY_gmQDx.js";import{r as Ie}from"./resourceUtils-DqmdE6Eu.js";import{t as Na}from"./NestedMap-DgiGbX8E.js";import{l as za}from"./Indices-BYieEVYU.js";import{t as La}from"./requestImageUtils-DEsfgmA0.js";import{H as Ga}from"./InterleavedLayout-rpfDyLJZ.js";import{o as v,t as et,a as $,n as Fe,r as De}from"./NormalAttribute.glsl-D_IY537z.js";import{e as ie,h as Ba,k as ja,a as Ia,m as Qt,n as eo,g as to,c as Fa,i as Da,u as Va}from"./VertexColor.glsl-emmMQ0ZZ.js";import{D as _e,G as Ua,t as Wa,_ as qa,f as Ha,O as xt}from"./enums-BlUEVwJR.js";import{S as tt,_ as ot,h as ka,o as Ya}from"./renderState-BxbDJrNm.js";import{a as Pe}from"./BindType-BmZEZMMh.js";import{n as U}from"./symbolColorUtils-BOVFIYuV.js";import{e as Ja,c as Za}from"./Texture-DqEAKFgW.js";function Xa(t){t.vertex.code.add(r`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${r.int(U.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${r.int(U.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${r.int(U.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${r.int(U.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}function at(t){t.uniforms.add(new H("mainLightDirection",(e,o)=>o.lighting.mainLight.direction))}function Ne(t){t.uniforms.add(new H("mainLightIntensity",(e,o)=>o.lighting.mainLight.intensity))}function bt(t){at(t.fragment),Ne(t.fragment),t.fragment.code.add(r`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, mainLightDirection), 0.0, 1.0);
return mainLightIntensity * ((1.0 - shadowing) * dotVal);
}`)}function Ka(t){const e=t.fragment.code;e.add(r`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),e.add(r`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),e.add(r`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}function rt(t,e){const o=t.fragment.code;t.include(Je),e.pbrMode!==g.Normal&&e.pbrMode!==g.Schematic&&e.pbrMode!==g.Simplified&&e.pbrMode!==g.TerrainWithWater||(o.add(r`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),o.add(r`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`)),e.pbrMode!==g.Normal&&e.pbrMode!==g.Schematic||(t.include(Ka),o.add(r`struct PBRShadingInfo
{
float NdotL;
float NdotV;
float NdotH;
float VdotH;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),o.add(r`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),o.add(r`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),o.add(r`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}function Mi(t,e){const o=t.fragment.code;t.include(Je),o.add(r`
  struct PBRShadingWater
  {
      float NdotL;   // cos angle between normal and light direction
      float NdotV;   // cos angle between normal and view direction
      float NdotH;   // cos angle between normal and half vector
      float VdotH;   // cos angle between view direction and half vector
      float LdotH;   // cos angle between light direction and half vector
      float VdotN;   // cos angle between view direction and normal vector
  };

  float dtrExponent = ${e.useCustomDTRExponentForWater?"2.2":"2.0"};
  `),o.add(r`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),o.add(r`float normalDistributionWater(float NdotH, float roughness)
{
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),o.add(r`float geometricOcclusionKelemen(float LoH)
{
return 0.25 / (LoH * LoH);
}`),o.add(r`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
{
vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
float dSun = normalDistributionWater(props.NdotH, roughness);
float V = geometricOcclusionKelemen(props.LdotH);
float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
float strengthSunHaze  = 1.2;
float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze)*strengthSunHaze;
return ((dSun + dSunHaze) * V) * F;
}
vec3 tonemapACES(const vec3 x) {
return (x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14);
}`)}const Qa=3e5,Tt=5e5;function er(t,e){const o=t.fragment;switch(o.code.add(r`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),e.doubleSidedMode){case A.None:o.code.add(r`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case A.View:o.code.add(r`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case A.WindingOrder:o.code.add(r`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:St(e.doubleSidedMode);case A.COUNT:}}var A;(function(t){t[t.None=0]="None",t[t.View=1]="View",t[t.WindingOrder=2]="WindingOrder",t[t.COUNT=3]="COUNT"})(A||(A={}));function tr({normalTexture:t,metallicRoughnessTexture:e,metallicFactor:o,roughnessFactor:a,emissiveTexture:n,emissiveFactor:i,occlusionTexture:l}){return t==null&&e==null&&n==null&&(i==null||_o(i,Eo))&&l==null&&(a==null||a===1)&&(o==null||o===1)}const oo=[1,1,.5],or=[0,.6,.2],ar=[0,1,.2];function ao(t){t.vertex.code.add(r`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}function ro(t,e){e.hasSymbolColors?(t.include(Xa),t.attributes.add(M.SYMBOLCOLOR,"vec4"),t.varyings.add("colorMixMode","mediump float"),t.vertex.code.add(r`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(t.fragment.uniforms.add(new Ft("colorMixMode",o=>$o[o.colorMixMode])),t.vertex.code.add(r`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}function io(t){t.code.add(r`const float MAX_RGBA4_FLOAT =
15.0 / 16.0 +
15.0 / 16.0 / 16.0 +
15.0 / 16.0 / 16.0 / 16.0 +
15.0 / 16.0 / 16.0 / 16.0 / 16.0;
const vec4 FIXED_POINT_FACTORS_RGBA4 = vec4(1.0, 16.0, 16.0 * 16.0, 16.0 * 16.0 * 16.0);
vec4 floatToRgba4(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA4_FLOAT);
vec4 fixedPointU4 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS_RGBA4) * 16.0);
const float toU4AsFloat = 1.0 / 15.0;
return fixedPointU4 * toU4AsFloat;
}
const vec4 RGBA4_2_FLOAT_FACTORS = vec4(
15.0 / (16.0),
15.0 / (16.0 * 16.0),
15.0 / (16.0 * 16.0 * 16.0),
15.0 / (16.0 * 16.0 * 16.0 * 16.0)
);
float rgba4ToFloat(vec4 rgba) {
return dot(rgba, RGBA4_2_FLOAT_FACTORS);
}`)}function rr(t,e){switch(e.output){case v.Shadow:case v.ShadowHighlight:case v.ShadowExcludeHighlight:case v.ViewshedShadow:t.fragment.include(io),t.fragment.code.add(r`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
return depth + SLOPE_SCALE * m + BIAS;
}
void outputDepth(float _linearDepth) {
fragColor = floatToRgba4(_calculateFragDepth(_linearDepth));
}`)}}function ir(t){t.fragment.code.add(r`
    #define discardOrAdjustAlpha(color) { if (color.a < ${r.float(Ze)}) { discard; } }
  `)}function ne(t,e){nr(t,e,new B("textureAlphaCutoff",o=>o.textureAlphaCutoff))}function nr(t,e,o){const a=t.fragment;switch(e.alphaDiscardMode!==y.Mask&&e.alphaDiscardMode!==y.MaskBlend||a.uniforms.add(o),e.alphaDiscardMode){case y.Blend:return t.include(ir);case y.Opaque:a.code.add(r`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case y.Mask:a.code.add(r`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case y.MaskBlend:t.fragment.code.add(r`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}function no(t,e){const{vertex:o,fragment:a}=t,n=e.hasColorTexture&&e.alphaDiscardMode!==y.Opaque;switch(e.output){case v.Depth:oe(o,e),t.include(ie,e),t.include(re,e),t.include(ae,e),n&&a.uniforms.add(new P("tex",i=>i.texture)),o.code.add(r`void main(void) {
vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();
}`),t.include(ne,e),a.code.add(r`
          void main(void) {
            discardBySlice(vpos);
            ${n?r`
                    vec4 texColor = texture(tex, ${e.hasColorTextureTransform?r`colorUV`:r`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
          }
        `);break;case v.Shadow:case v.ShadowHighlight:case v.ShadowExcludeHighlight:case v.ViewshedShadow:case v.ObjectAndLayerIdColor:oe(o,e),t.include(ie,e),t.include(ae,e),t.include(pe,e),t.include(rr,e),t.include(re,e),t.include(oa,e),ja(t),t.varyings.add("depth","float"),n&&a.uniforms.add(new P("tex",i=>i.texture)),o.code.add(r`void main(void) {
vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
forwardTextureCoordinates();
forwardObjectAndLayerIdColor();
}`),t.include(ne,e),a.code.add(r`
          void main(void) {
            discardBySlice(vpos);
            ${n?r`
                    vec4 texColor = texture(tex, ${e.hasColorTextureTransform?r`colorUV`:r`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            ${e.output===v.ObjectAndLayerIdColor?r`outputObjectAndLayerIdColor();`:r`outputDepth(depth);`}
          }
        `);break;case v.Normal:{oe(o,e),t.include(ie,e),t.include(et,e),t.include(Dt,e),t.include(ae,e),t.include(pe,e),n&&a.uniforms.add(new P("tex",l=>l.texture)),e.normalType===$.ScreenDerivative&&t.varyings.add("vPositionView","vec3");const i=e.normalType===$.Attribute||e.normalType===$.Compressed;o.code.add(r`
          void main(void) {
            vpos = getVertexInLocalOriginSpace();

            ${i?r`vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:r`
                  // Get vertex position in camera space for screen-space derivative normals
                  vPositionView = (view * vec4(vpos, 1.0)).xyz;
                `}
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            forwardTextureCoordinates();
          }
        `),t.include(re,e),t.include(ne,e),a.code.add(r`
          void main() {
            discardBySlice(vpos);
            ${n?r`
                    vec4 texColor = texture(tex, ${e.hasColorTextureTransform?r`colorUV`:r`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}

            ${e.normalType===$.ScreenDerivative?r`vec3 normal = screenDerivativeNormal(vPositionView);`:r`
                  vec3 normal = normalize(vNormalWorld);
                  if (gl_FrontFacing == false){
                    normal = -normal;
                  }`}
            fragColor = vec4(0.5 + 0.5 * normal, 1.0);
          }
        `);break}case v.Highlight:oe(o,e),t.include(ie,e),t.include(ae,e),t.include(pe,e),n&&a.uniforms.add(new P("tex",i=>i.texture)),o.code.add(r`void main(void) {
vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();
}`),t.include(re,e),t.include(ne,e),t.include(Ba,e),a.code.add(r`
          void main() {
            discardBySlice(vpos);
            ${n?r`
                    vec4 texColor = texture(tex, ${e.hasColorTextureTransform?r`colorUV`:r`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            outputHighlight();
          }
        `)}}function sr(t,e){const o=t.fragment;e.hasVertexTangents?(t.attributes.add(M.TANGENT,"vec4"),t.varyings.add("vTangent","vec4"),e.doubleSidedMode===A.WindingOrder?o.code.add(r`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):o.code.add(r`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):o.code.add(r`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
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
}`),e.textureCoordinateType!==W.None&&(t.include(aa,e),o.uniforms.add(e.pbrTextureBindType===Pe.Pass?new P("normalTexture",a=>a.textureNormal):new Vt("normalTexture",a=>a.textureNormal)),e.hasNormalTextureTransform&&(o.uniforms.add(new ke("scale",a=>a.scale??Ot)),o.uniforms.add(new le("normalTextureTransformMatrix",a=>a.normalTextureTransformMatrix??se))),o.code.add(r`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;`),e.hasNormalTextureTransform&&o.code.add(r`mat3 normalTextureRotation = mat3(normalTextureTransformMatrix[0][0]/scale[0], normalTextureTransformMatrix[0][1]/scale[1], 0.0,
normalTextureTransformMatrix[1][0]/scale[0], normalTextureTransformMatrix[1][1]/scale[1], 0.0,
0.0, 0.0, 0.0 );
rawNormal.xy = (normalTextureRotation * vec3(rawNormal.x, rawNormal.y, 1.0)).xy;`),o.code.add(r`return tangentSpace * rawNormal;
}`))}let te=class extends Ao{constructor(e){super(e),this.view=null,this.consumes={required:[]},this.produces="composite-color",this._context=null,this._dirty=!0}initialize(){this.addHandles([Et(()=>this.view.ready,e=>{var o;e&&((o=this.view._stage)==null||o.renderer.addRenderNode(this))},Ro)])}destroy(){var e,o;(o=(e=this.view._stage)==null?void 0:e.renderer)==null||o.removeRenderNode(this)}render(){throw new $t("RenderNode:render-function-not-implemented","render() is not implemented.")}get camera(){return this.view.state.camera.clone()}get sunLight(){return this.bindParameters.lighting.legacy}get gl(){return this.view._stage.renderView.renderingContext.gl}acquireOutputFramebuffer(){var a,n,i;const e=(n=(a=this._frameBuffer)==null?void 0:a.getTexture())==null?void 0:n.descriptor,o=this.view._stage.renderer.fboCache.acquire((e==null?void 0:e.width)??640,(e==null?void 0:e.height)??480,this.produces);return(i=o.fbo)==null||i.initializeAndBind(),o}bindRenderTarget(){var e,o;return(o=(e=this._frameBuffer)==null?void 0:e.fbo)==null||o.initializeAndBind(),this._frameBuffer}requestRender(e){var o;e===At.UPDATE&&((o=this.view._stage)==null||o.renderView.requestRender(e)),this._dirty=!0}resetWebGLState(){var e;this.renderingContext.resetState(),this.renderingContext.bindFramebuffer((e=this._frameBuffer)==null?void 0:e.fbo)}get fboCache(){return this.view._stage.renderer.fboCache}get bindParameters(){return this._context.bindParameters}get renderingContext(){return this.view._stage.renderView.renderingContext}updateAnimation(){return!!this._dirty&&(this._dirty=!1,!0)}doRender(e,o){this._context=o,this._frameBuffer=e.find(({name:a})=>a===this.produces);try{return this.render(e)}finally{this._frameBuffer=null}}};c([J({constructOnly:!0})],te.prototype,"view",void 0),c([J({constructOnly:!0})],te.prototype,"consumes",void 0),c([J()],te.prototype,"produces",void 0),te=c([_t("esri.views.3d.webgl.RenderNode")],te);const lr=te;let cr=class extends Xe{constructor(e,o){super(e,"vec2",Pe.Draw,(a,n,i,l)=>a.setUniform2fv(e,o(n,i,l)))}};const Ve=4;function so(){const t=new Ae,e=t.fragment;t.include(Ut);const o=(Ve+1)/2,a=1/(2*o*o);return e.include(Wt),e.uniforms.add(new P("depthMap",n=>n.depthTexture),new Vt("tex",n=>n.colorTexture),new cr("blurSize",n=>n.blurSize),new B("projScale",(n,i)=>{const l=Po(i.camera.eye,i.camera.center);return l>5e4?Math.max(0,n.projScale-(l-5e4)):n.projScale})),e.code.add(r`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${r.float(a)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),t.outputs.add("fragBlur","float"),e.code.add(r`
    void main(void) {
      float b = 0.0;
      float w_total = 0.0;

      float center_d = linearDepthFromTexture(depthMap, uv);

      float sharpness = -0.05 * projScale / center_d;
      for (int r = -${r.int(Ve)}; r <= ${r.int(Ve)}; ++r) {
        float rf = float(r);
        vec2 uvOffset = uv + rf * blurSize;
        blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
      }

      fragBlur = b / w_total;
    }
  `),t}const dr=Object.freeze(Object.defineProperty({__proto__:null,build:so},Symbol.toStringTag,{value:"Module"}));let lo=class co extends Ke{initializeProgram(e){return new Qe(e.rctx,co.shader.get().build(),Ye)}initializePipeline(){return tt({colorWrite:ot})}};lo.shader=new Re(dr,()=>$e(()=>Promise.resolve().then(()=>ti),void 0));const ur="eXKEvZaUc66cjIKElE1jlJ6MjJ6Ufkl+jn2fcXp5jBx7c6KEflSGiXuXeW6OWs+tfqZ2Yot2Y7Zzfo2BhniEj3xoiXuXj4eGZpqEaHKDWjSMe7palFlzc3BziYOGlFVzg6Zzg7CUY5JrjFF7eYJ4jIKEcyyEonSXe7qUfqZ7j3xofqZ2c4R5lFZ5Y0WUbppoe1l2cIh2ezyUho+BcHN2cG6DbpqJhqp2e1GcezhrdldzjFGUcyxjc3aRjDyEc1h7Sl17c6aMjH92pb6Mjpd4dnqBjMOEhqZleIOBYzB7gYx+fnqGjJuEkWlwnCx7fGl+c4hjfGyRe5qMlNOMfnqGhIWHc6OMi4GDc6aMfqZuc6aMzqJzlKZ+lJ6Me3qRfoFue0WUhoR5UraEa6qMkXiPjMOMlJOGe7JrUqKMjK6MeYRzdod+Sl17boiPc6qEeYBlcIh2c1WEe7GDiWCDa0WMjEmMdod+Y0WcdntzhmN8WjyMjKJjiXtzgYxYaGd+a89zlEV7e2GJfnd+lF1rcK5zc4p5cHuBhL6EcXp5eYB7fnh8iX6HjIKEeaxuiYOGc66RfG2Ja5hzjlGMjEmMe9OEgXuPfHyGhPeEdl6JY02McGuMfnqGhFiMa3WJfnx2l4hwcG1uhmN8c0WMc39og1GBbrCEjE2EZY+JcIh2cIuGhIWHe0mEhIVrc09+gY5+eYBlnCyMhGCDl3drfmmMgX15aGd+gYx+fnuRfnhzY1SMsluJfnd+hm98WtNrcIuGh4SEj0qPdkqOjFF7jNNjdnqBgaqUjMt7boeBhnZ4jDR7c5pze4GGjEFrhLqMjHyMc0mUhKZze4WEa117kWlwbpqJjHZ2eX2Bc09zeId+e0V7WlF7jHJ2l72BfId8l3eBgXyBe897jGl7c66cgW+Xc76EjKNbgaSEjGx4fId8jFFjgZB8cG6DhlFziZhrcIh2fH6HgUqBgXiPY8dahGFzjEmMhEFre2dxhoBzc5SGfleGe6alc7aUeYBlhKqUdlp+cH5za4OEczxza0Gcc4J2jHZ5iXuXjH2Jh5yRjH2JcFx+hImBjH+MpddCl3dreZeJjIt8ZW18bm1zjoSEeIOBlF9oh3N7hlqBY4+UeYFwhLJjeYFwaGd+gUqBYxiEYot2fqZ2ondzhL6EYyiEY02Ea0VjgZB8doaGjHxoc66cjEGEiXuXiXWMiZhreHx8frGMe75rY02Ec5pzfnhzlEp4a3VzjM+EhFFza3mUY7Zza1V5e2iMfGyRcziEhDyEkXZ2Y4OBnCx7g5t2eyBjgV6EhEFrcIh2dod+c4Z+nJ5zjm15jEmUeYxijJp7nL6clIpjhoR5WrZraGd+fnuRa6pzlIiMg6ZzfHx5foh+eX1ufnB5eX1ufnB5aJt7UqKMjIh+e3aBfm5lbYSBhGFze6J4c39oc0mUc4Z+e0V7fKFVe0WEdoaGY02Ec4Z+Y02EZYWBfH6HgU1+gY5+hIWUgW+XjJ57ebWRhFVScHuBfJ6PhBx7WqJzlM+Ujpd4gHZziX6HjHmEgZN+lJt5boiPe2GJgX+GjIGJgHZzeaxufnB5hF2JtdN7jJ57hp57hK6ElFVzg6ZzbmiEbndzhIWHe3uJfoFue3qRhJd2j3xoc65zlE1jc3p8lE1jhniEgXJ7e657vZaUc3qBh52BhIF4aHKDa9drgY5+c52GWqZzbpqJe8tjnM+UhIeMfo2BfGl+hG1zSmmMjKJjZVaGgX15c1lze0mEp4OHa3mUhIWHhDyclJ6MeYOJkXiPc0VzhFiMlKaEboSJa5Jze41re3qRhn+HZYWBe0mEc4p5fnORbox5lEp4hGFjhGGEjJuEc1WEhLZjeHeGa7KlfHx2hLaMeX1ugY5+hIWHhKGPjMN7c1WEho1zhoBzZYx7fnhzlJt5exyUhFFziXtzfmmMa6qMYyiEiXxweV12kZSMeWqXSl17fnhzxmmMrVGEe1mcc4p5eHeGjK6MgY5+doaGa6pzlGV7g1qBh4KHkXiPeW6OaKqafqZ2eXZ5e1V7jGd7boSJc3BzhJd2e0mcYot2h1RoY8dahK6EQmWEWjx7e1l2lL6UgXyBdnR4eU9zc0VreX1umqaBhld7fo2Bc6KEc5Z+hDyEcIeBWtNrfHyGe5qMhMuMe5qMhEGEbVVupcNzg3aHhIF4boeBe0mEdlptc39ofFl5Y8uUlJOGiYt2UmGEcyxjjGx4jFF7a657ZYWBnElzhp57iXtrgZN+tfOEhIOBjE2HgU1+e8tjjKNbiWCDhE15gUqBgYN7fnqGc66ce9d7iYSBj0qPcG6DnGGcT3eGa6qMZY+JlIiMl4hwc3aRdnqBlGV7eHJ2hLZjfnuRhDyEeX6MSk17g6Z+c6aUjHmEhIF4gXyBc76EZW18fGl+fkl+jCxrhoVwhDyUhIqGlL2DlI6EhJd2tdN7eYORhEGMa2Faa6pzc3Bzc4R5lIRznM+UY9eMhDycc5Z+c4p5c4iGY117pb6MgXuPrbJafnx2eYOJeXZ5e657hDyEcziElKZjfoB5eHeGj4WRhGGEe6KGeX1utTStc76EhFGJnCyMa5hzfH6HnNeceYB7hmN8gYuMhIVrczSMgYF8h3N7c5pza5hzjJqEYIRdgYuMlL2DeYRzhGGEeX1uhLaEc4iGeZ1zdl6JhrVteX6Me2iMfm5lWqJzSpqEa6pzdnmchHx2c6OMhNdrhoR5g3aHczxzeW52gV6Ejm15frGMc0Vzc4Z+l3drfniJe+9rWq5rlF1rhGGEhoVwe9OEfoh+e7pac09+c3qBY0lrhDycdnp2lJ6MiYOGhGCDc3aRlL2DlJt5doaGdnp2gYF8gWeOjF2Uc4R5c5Z+jEmMe7KEc4mEeYJ4dmyBe0mcgXiPbqJ7eYB7fmGGiYSJjICGlF1reZ2PnElzbpqJfH6Hc39oe4WEc5eJhK6EhqyJc3qBgZB8c09+hEmEaHKDhFGJc5SGiXWMUpaEa89zc6OMnCyMiXtrho+Be5qMc7KEjJ57dmN+hKGPjICGbmiEe7prdod+hGCDdnmchBx7eX6MkXZ2hGGEa657hm98jFFjY5JreYOJgY2EjHZ2a295Y3FajJ6Mc1J+YzB7e4WBjF2Uc4R5eV12gYxzg1qBeId+c9OUc5pzjFFjgY5+hFiMlIaPhoR5lIpjjIKBlNdSe7KEeX2BfrGMhIqGc65zjE2UhK6EklZ+QmWEeziMWqZza3VzdnR4foh+gYF8n3iJiZhrnKp7gYF8eId+lJ6Me1lrcIuGjKJjhmN8c66MjFF7a6prjJ6UnJ5zezyUfruRWlF7nI5zfHyGe657h4SEe8tjhBx7jFFjc09+c39ojICMeZeJeXt+YzRzjHZ2c0WEcIeBeXZ5onSXkVR+gYJ+eYFwdldzgYF7eX2BjJ6UiXuXlE1jh4SEe1mchLJjc4Z+hqZ7eXZ5bm1zlL6Ue5p7iWeGhKqUY5pzjKJjcIeBe8t7gXyBYIRdlEp4a3mGnK6EfmmMZpqEfFl5gYxzjKZuhGFjhoKGhHx2fnx2eXuMe3aBiWeGvbKMe6KGa5hzYzB7gZOBlGV7hmN8hqZlYot2Y117a6pzc6KEfId8foB5rctrfneJfJ6PcHN2hFiMc5pzjH92c0VzgY2EcElzdmCBlFVzg1GBc65zY4OBboeBcHiBeYJ4ewxzfHx5lIRzlEmEnLKEbk1zfJ6PhmN8eYBljBiEnMOEiXxwezyUcIeBe76EdsKEeX2BdnR4jGWUrXWMjGd7fkl+j4WRlEGMa5Jzho+BhDyEfnqMeXt+g3aHlE1jczClhNN7ZW18eHx8hGFjZW18iXWMjKJjhH57gYuMcIuGWjyMe4ZtjJuExmmMj4WRdntzi4GDhFFzYIRdnGGcjJp7Y0F7e4WEkbCGiX57fnSHa657a6prhBCMe3Z+SmmMjH92eHJ2hK6EY1FzexhrvbKMnI5za4OEfnd+eXuMhImBe897hLaMjN+EfG+BeIOBhF1+eZeJi4GDkXZ2eXKEgZ6Ejpd4c2GHa1V5e5KUfqZuhCx7jKp7lLZrg11+hHx2hFWUoot2nI5zgbh5mo9zvZaUe3qRbqKMfqZ2kbCGhFiM";let hr=class extends Pt{constructor(){super(...arguments),this.projScale=1}},mr=class extends hr{constructor(){super(...arguments),this.intensity=1}},pr=class extends Pt{},fr=class extends pr{constructor(){super(...arguments),this.blurSize=Rt()}};const yt=16;function uo(){const t=new Ae,e=t.fragment;return t.include(Ut),t.include(ra),e.include(Wt),e.uniforms.add(new B("radius",(o,a)=>ze(a.camera))).code.add(r`vec3 sphere[16] = vec3[16](
vec3(0.186937, 0.0, 0.0),
vec3(0.700542, 0.0, 0.0),
vec3(-0.864858, -0.481795, -0.111713),
vec3(-0.624773, 0.102853, -0.730153),
vec3(-0.387172, 0.260319, 0.007229),
vec3(-0.222367, -0.642631, -0.707697),
vec3(-0.01336, -0.014956, 0.169662),
vec3(0.122575, 0.1544, -0.456944),
vec3(-0.177141, 0.85997, -0.42346),
vec3(-0.131631, 0.814545, 0.524355),
vec3(-0.779469, 0.007991, 0.624833),
vec3(0.308092, 0.209288,0.35969),
vec3(0.359331, -0.184533, -0.377458),
vec3(0.192633, -0.482999, -0.065284),
vec3(0.233538, 0.293706, -0.055139),
vec3(0.417709, -0.386701, 0.442449)
);
float fallOffFunction(float vv, float vn, float bias) {
float f = max(radius * radius - vv, 0.0);
return f * f * f * max(vn - bias, 0.0);
}`),e.code.add(r`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),e.uniforms.add(new P("normalMap",o=>o.normalTexture),new P("depthMap",o=>o.depthTexture),new B("projScale",o=>o.projScale),new P("rnm",o=>o.noiseTexture),new ke("rnmScale",(o,a)=>Me(wt,a.camera.fullWidth/o.noiseTexture.descriptor.width,a.camera.fullHeight/o.noiseTexture.descriptor.height)),new B("intensity",o=>o.intensity),new ke("screenSize",(o,a)=>Me(wt,a.camera.fullWidth,a.camera.fullHeight))),t.outputs.add("fragOcclusion","float"),e.code.add(r`
    void main(void) {
      float depth = depthFromTexture(depthMap, uv);

      // Early out if depth is out of range, such as in the sky
      if (depth >= 1.0 || depth <= 0.0) {
        fragOcclusion = 1.0;
        return;
      }

      // get the normal of current fragment
      vec4 norm4 = texture(normalMap, uv);
      if(norm4.a != 1.0) {
        fragOcclusion = 1.0;
        return;
      }
      vec3 norm = vec3(-1.0) + 2.0 * norm4.xyz;

      float currentPixelDepth = linearizeDepth(depth);
      vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy, currentPixelDepth);

      float sum = 0.0;
      vec3 tapPixelPos;

      vec3 fres = normalize(2.0 * texture(rnm, uv * rnmScale).xyz - 1.0);

      // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
      // bug or deviation from CE somewhere else?
      float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

      for(int i = 0; i < ${r.int(yt)}; ++i) {
        vec2 unitOffset = reflect(sphere[i], fres).xy;
        vec2 offset = vec2(-unitOffset * radius * ps);

        // don't use current or very nearby samples
        if( abs(offset.x) < 2.0 || abs(offset.y) < 2.0){
          continue;
        }

        vec2 tc = vec2(gl_FragCoord.xy + offset);
        if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
        vec2 tcTap = tc / screenSize;
        float occluderFragmentDepth = linearDepthFromTexture(depthMap, tcTap);

        tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

        sum += aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
      }

      // output the result
      float A = max(1.0 - sum * intensity / float(${r.int(yt)}), 0.0);

      // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4) / 2.2
      A = (pow(A, 0.2) + 1.2 * A*A*A*A) / 2.2;

      fragOcclusion = A;
    }
  `),t}function ze(t){return Math.max(10,20*t.computeScreenPixelSizeAtDist(Math.abs(4*t.relativeElevation)))}const wt=Rt(),gr=Object.freeze(Object.defineProperty({__proto__:null,build:uo,getRadius:ze},Symbol.toStringTag,{value:"Module"}));class Le extends Ke{initializeProgram(e){return new Qe(e.rctx,Le.shader.get().build(),Ye)}initializePipeline(){return tt({colorWrite:ot})}}Le.shader=new Re(gr,()=>$e(()=>Promise.resolve().then(()=>oi),void 0));const me=2;let K=class extends lr{constructor(t){super(t),this.consumes={required:["normals"]},this.produces="ssao",this.isEnabled=()=>!1,this._enableTime=xe(0),this._passParameters=new mr,this._drawParameters=new fr}initialize(){const t=Uint8Array.from(atob(ur),o=>o.charCodeAt(0)),e=new Ja;e.wrapMode=_e.CLAMP_TO_EDGE,e.pixelFormat=Ua.RGB,e.wrapMode=_e.REPEAT,e.hasMipmap=!0,e.width=32,e.height=32,this._passParameters.noiseTexture=new Za(this.renderingContext,e,t),this._ssaoTechnique=this.techniques.acquire(Le),this._blurTechnique=this.techniques.acquire(lo),this.addHandles(Et(()=>this.isEnabled(),()=>this._enableTime=xe(0)))}destroy(){this._passParameters.noiseTexture=No(this._passParameters.noiseTexture),this._blurTechnique.release(),this._ssaoTechnique.release()}render(t){const e=this.bindParameters,o=t.find(({name:Y})=>Y==="normals"),a=o==null?void 0:o.getTexture(),n=o==null?void 0:o.getTexture(Wa),i=this.fboCache,l=e.camera,u=l.fullViewport[2],s=l.fullViewport[3],d=Math.round(u/me),f=Math.round(s/me);if(!this._ssaoTechnique.compiled||!this._blurTechnique.compiled)return this._enableTime=xe(performance.now()),this.requestRender(),i.acquire(d,f,"ssao",be.RED);this._enableTime===0&&(this._enableTime=xe(performance.now()));const h=this.renderingContext,x=this.view.qualitySettings.fadeDuration,T=l.relativeElevation,S=zo((Tt-T)/(Tt-Qa),0,1),b=x>0?Math.min(x,performance.now()-this._enableTime)/x:1,w=b*S;this._passParameters.normalTexture=a,this._passParameters.depthTexture=n,this._passParameters.projScale=1/l.computeScreenPixelSizeAtDist(1),this._passParameters.intensity=4*vr/ze(l)**6*w;const C=i.acquire(u,s,"ssao input",be.RG);h.unbindTexture(C.fbo.colorTexture),h.bindFramebuffer(C.fbo),h.setViewport(0,0,u,s),h.bindTechnique(this._ssaoTechnique,e,this._passParameters,this._drawParameters),h.screen.draw();const _=i.acquire(d,f,"ssao blur",be.RED);h.unbindTexture(_.fbo.colorTexture),h.bindFramebuffer(_.fbo),this._drawParameters.colorTexture=C.getTexture(),Me(this._drawParameters.blurSize,0,me/s),h.bindTechnique(this._blurTechnique,e,this._passParameters,this._drawParameters),h.setViewport(0,0,d,f),h.screen.draw(),C.release();const R=i.acquire(d,f,"ssao",be.RED);return h.unbindTexture(R.fbo.colorTexture),h.bindFramebuffer(R.fbo),h.setViewport(0,0,u,s),h.setClearColor(1,1,1,0),h.clear(qa.COLOR_BUFFER_BIT),this._drawParameters.colorTexture=_.getTexture(),Me(this._drawParameters.blurSize,me/u,0),h.bindTechnique(this._blurTechnique,e,this._passParameters,this._drawParameters),h.setViewport(0,0,d,f),h.screen.draw(),h.setViewport4fv(l.fullViewport),_.release(),b<1&&this.requestRender(At.UPDATE),R}};c([J()],K.prototype,"consumes",void 0),c([J()],K.prototype,"produces",void 0),c([J({constructOnly:!0})],K.prototype,"techniques",void 0),c([J({constructOnly:!0})],K.prototype,"isEnabled",void 0),K=c([_t("esri.views.3d.webgl-engine.effects.ssao.SSAO")],K);const vr=.5;function it(t,e){const o=t.fragment;e.receiveAmbientOcclusion?(o.uniforms.add(new P("ssaoTex",(a,n)=>{var i;return(i=n.ssao)==null?void 0:i.getTexture()})),o.constants.add("blurSizePixelsInverse","float",1/me),o.code.add(r`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).r;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)):o.code.add(r`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}function xr(t,e){const o=t.fragment,a=e.lightingSphericalHarmonicsOrder!==void 0?e.lightingSphericalHarmonicsOrder:2;a===0?(o.uniforms.add(new H("lightingAmbientSH0",(n,i)=>Ce(Mt,i.lighting.sh.r[0],i.lighting.sh.g[0],i.lighting.sh.b[0]))),o.code.add(r`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):a===1?(o.uniforms.add(new L("lightingAmbientSH_R",(n,i)=>F(D,i.lighting.sh.r[0],i.lighting.sh.r[1],i.lighting.sh.r[2],i.lighting.sh.r[3])),new L("lightingAmbientSH_G",(n,i)=>F(D,i.lighting.sh.g[0],i.lighting.sh.g[1],i.lighting.sh.g[2],i.lighting.sh.g[3])),new L("lightingAmbientSH_B",(n,i)=>F(D,i.lighting.sh.b[0],i.lighting.sh.b[1],i.lighting.sh.b[2],i.lighting.sh.b[3]))),o.code.add(r`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):a===2&&(o.uniforms.add(new H("lightingAmbientSH0",(n,i)=>Ce(Mt,i.lighting.sh.r[0],i.lighting.sh.g[0],i.lighting.sh.b[0])),new L("lightingAmbientSH_R1",(n,i)=>F(D,i.lighting.sh.r[1],i.lighting.sh.r[2],i.lighting.sh.r[3],i.lighting.sh.r[4])),new L("lightingAmbientSH_G1",(n,i)=>F(D,i.lighting.sh.g[1],i.lighting.sh.g[2],i.lighting.sh.g[3],i.lighting.sh.g[4])),new L("lightingAmbientSH_B1",(n,i)=>F(D,i.lighting.sh.b[1],i.lighting.sh.b[2],i.lighting.sh.b[3],i.lighting.sh.b[4])),new L("lightingAmbientSH_R2",(n,i)=>F(D,i.lighting.sh.r[5],i.lighting.sh.r[6],i.lighting.sh.r[7],i.lighting.sh.r[8])),new L("lightingAmbientSH_G2",(n,i)=>F(D,i.lighting.sh.g[5],i.lighting.sh.g[6],i.lighting.sh.g[7],i.lighting.sh.g[8])),new L("lightingAmbientSH_B2",(n,i)=>F(D,i.lighting.sh.b[5],i.lighting.sh.b[6],i.lighting.sh.b[7],i.lighting.sh.b[8]))),o.code.add(r`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),e.pbrMode!==g.Normal&&e.pbrMode!==g.Schematic||o.code.add(r`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}const Mt=G(),D=Lo();function nt(t){t.constants.add("ambientBoostFactor","float",ia)}function st(t){t.uniforms.add(new B("lightingGlobalFactor",(e,o)=>o.lighting.globalFactor))}function ho(t,e){const o=t.fragment;switch(t.include(it,e),e.pbrMode!==g.Disabled&&t.include(rt,e),t.include(xr,e),t.include(Je),o.code.add(r`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${e.pbrMode===g.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),nt(o),st(o),at(o),o.code.add(r`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${e.spherical?r`normalize(vPosWorld)`:r`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),Ne(o),o.code.add(r`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),e.pbrMode){case g.Disabled:case g.WaterOnIntegratedMesh:case g.Water:t.include(bt),o.code.add(r`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case g.Normal:case g.Schematic:o.code.add(r`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),o.code.add(r`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),e.useFillLights?o.uniforms.add(new Ia("hasFillLights",(a,n)=>n.enableFillLights)):o.constants.add("hasFillLights","bool",!1),o.code.add(r`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0) ? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),o.uniforms.add(new B("lightingSpecularStrength",(a,n)=>n.lighting.mainLight.specularStrength),new B("lightingEnvironmentStrength",(a,n)=>n.lighting.mainLight.environmentStrength)),o.code.add(r`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
float normalDirectionModifier = mix(1., min(mix(0.1, 2.0, (inputs.NdotNG + 1.) * 0.5), 1.0), clamp(inputs.roughness * 5.0, 0.0 , 1.0));
inputs.skyRadianceToSurface = (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.groundRadianceToSurface = 0.5 * GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),o.code.add(r`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = _emission == vec3(0.0) ? _emission : pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${e.pbrMode!==g.Schematic||e.hasColorTexture?r`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`:r`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;case g.Simplified:case g.TerrainWithWater:t.include(bt),o.code.add(r`const float roughnessTerrain = 0.5;
const float specularityTerrain = 0.5;
const vec3 fresnelReflectionTerrain = vec3(0.04);
vec3 evaluatePBRSimplifiedLighting(vec3 n, vec3 c, float shadow, float ssao, vec3 al, vec3 vd, vec3 nup) {
vec3 viewDirection = -vd;
vec3 h = normalize(viewDirection + mainLightDirection);
float NdotL = clamp(dot(n, mainLightDirection), 0.001, 1.0);
float NdotV = clamp(abs(dot(n, viewDirection)), 0.001, 1.0);
float NdotH = clamp(dot(n, h), 0.0, 1.0);
float NdotNG = clamp(dot(n, nup), -1.0, 1.0);
vec3 albedoLinear = pow(c, vec3(GAMMA_SRGB));
float lightness = 0.3 * albedoLinear[0] + 0.5 * albedoLinear[1] + 0.2 * albedoLinear[2];
vec3 f0 = (0.85 * lightness + 0.15) * fresnelReflectionTerrain;
vec3 f90 =  vec3(clamp(dot(f0, vec3(50.0 * 0.33)), 0.0, 1.0));
vec3 mainLightIrradianceComponent = (1. - shadow) * NdotL * mainLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(n, ssao) + al;
vec3 ambientSky = ambientLightIrradianceComponent + mainLightIrradianceComponent;
vec3 indirectDiffuse = ((1.0 - NdotNG) * mainLightIrradianceComponent + (1.0 + NdotNG ) * ambientSky) * 0.5;
vec3 outDiffColor = albedoLinear * (1.0 - f0) * indirectDiffuse / PI;
vec3 mainLightRadianceComponent = normalDistribution(NdotH, roughnessTerrain) * mainLightIntensity;
vec2 dfg = prefilteredDFGAnalytical(roughnessTerrain, NdotV);
vec3 specularColor = f0 * dfg.x + f90 * dfg.y;
vec3 specularComponent = specularityTerrain * specularColor * mainLightRadianceComponent;
vec3 outColorLinear = outDiffColor + specularComponent;
vec3 outColor = pow(outColorLinear, vec3(INV_GAMMA_SRGB));
return outColor;
}`);break;default:St(e.pbrMode);case g.COUNT:}}class br extends Xe{constructor(e,o,a){super(e,"mat4",Pe.Draw,(n,i,l,u)=>n.setUniformMatrix4fv(e,o(i,l,u)),a)}}class Tr extends Xe{constructor(e,o,a){super(e,"mat4",Pe.Pass,(n,i,l)=>n.setUniformMatrix4fv(e,o(i,l)),a)}}function mo(t,e){e.receiveShadows&&(t.fragment.uniforms.add(new Tr("shadowMapMatrix",(o,a)=>a.shadowMap.getShadowMapMatrices(o.origin),4)),fo(t))}function po(t,e){e.receiveShadows&&(t.fragment.uniforms.add(new br("shadowMapMatrix",(o,a)=>a.shadowMap.getShadowMapMatrices(o.origin),4)),fo(t))}function fo(t){const e=t.fragment;e.include(io),e.uniforms.add(new P("shadowMap",(o,a)=>a.shadowMap.depthTexture),new Ft("numCascades",(o,a)=>a.shadowMap.numCascades),new L("cascadeDistances",(o,a)=>a.shadowMap.cascadeDistances)),e.code.add(r`int chooseCascade(float depth, out mat4 mat) {
vec4 distance = cascadeDistances;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];
return i;
}
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, ivec2 textureSize, vec3 lvpos) {
float xScale = float(textureSize.y) / float(textureSize.x);
return vec2((float(i) + lvpos.x) * xScale, lvpos.y);
}
float readShadowMapDepth(ivec2 uv, sampler2D _depthTex) {
return rgba4ToFloat(texelFetch(_depthTex, uv, 0));
}
float posIsInShadow(ivec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, ivec2 texSize, sampler2D _depthTex) {
vec2 st = fract(uv * vec2(texSize) + vec2(0.5));
ivec2 base = ivec2(uv * vec2(texSize) - vec2(0.5));
float s00 = posIsInShadow(ivec2(base.x, base.y), lvpos, _depthTex);
float s10 = posIsInShadow(ivec2(base.x + 1, base.y), lvpos, _depthTex);
float s11 = posIsInShadow(ivec2(base.x + 1, base.y + 1), lvpos, _depthTex);
float s01 = posIsInShadow(ivec2(base.x, base.y + 1), lvpos, _depthTex);
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float readShadowMap(const in vec3 _vpos, float _linearDepth) {
mat4 mat;
int i = chooseCascade(_linearDepth, mat);
if (i >= numCascades) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0 || lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
ivec2 size = textureSize(shadowMap, 0);
vec2 uv = cascadeCoordinates(i, size, lvpos);
return filterShadow(uv, lvpos, size, shadowMap);
}`)}function yr(t,e){e.hasColorTextureTransform?(t.vertex.uniforms.add(new le("colorTextureTransformMatrix",o=>o.colorTextureTransformMatrix??se)),t.varyings.add("colorUV","vec2"),t.vertex.code.add(r`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):t.vertex.code.add(r`void forwardColorUV(){}`)}function wr(t,e){e.hasNormalTextureTransform&&e.textureCoordinateType!==W.None?(t.vertex.uniforms.add(new le("normalTextureTransformMatrix",o=>o.normalTextureTransformMatrix??se)),t.varyings.add("normalUV","vec2"),t.vertex.code.add(r`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):t.vertex.code.add(r`void forwardNormalUV(){}`)}function Mr(t,e){e.hasEmissionTextureTransform&&e.textureCoordinateType!==W.None?(t.vertex.uniforms.add(new le("emissiveTextureTransformMatrix",o=>o.emissiveTextureTransformMatrix??se)),t.varyings.add("emissiveUV","vec2"),t.vertex.code.add(r`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):t.vertex.code.add(r`void forwardEmissiveUV(){}`)}function Cr(t,e){e.hasOcclusionTextureTransform&&e.textureCoordinateType!==W.None?(t.vertex.uniforms.add(new le("occlusionTextureTransformMatrix",o=>o.occlusionTextureTransformMatrix??se)),t.varyings.add("occlusionUV","vec2"),t.vertex.code.add(r`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):t.vertex.code.add(r`void forwardOcclusionUV(){}`)}function Sr(t,e){e.hasMetallicRoughnessTextureTransform&&e.textureCoordinateType!==W.None?(t.vertex.uniforms.add(new le("metallicRoughnessTextureTransformMatrix",o=>o.metallicRoughnessTextureTransformMatrix??se)),t.varyings.add("metallicRoughnessUV","vec2"),t.vertex.code.add(r`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):t.vertex.code.add(r`void forwardMetallicRoughnessUV(){}`)}function go(t){t.include(na),t.code.add(r`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${r.int(U.Multiply)}) {
        return allMixed;
      }
      if (mode == ${r.int(U.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${r.int(U.Replace)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${r.int(U.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${r.int(U.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}function vo(t){const e=new Ae,{vertex:o,fragment:a,varyings:n}=e;if(oe(o,t),e.include(qt),n.add("vpos","vec3"),e.include(pe,t),e.include(Ht,t),e.include(Qt,t),e.include(yr,t),t.output===v.Color){e.include(wr,t),e.include(Mr,t),e.include(Cr,t),e.include(Sr,t),Oe(o,t),e.include(et,t),e.include(ie,t);const i=t.normalType===$.Attribute||t.normalType===$.Compressed;i&&t.offsetBackfaces&&e.include(ao),e.include(sr,t),e.include(Dt,t),t.instancedColor&&e.attributes.add(M.INSTANCECOLOR,"vec4"),n.add("vPositionLocal","vec3"),e.include(ae,t),e.include(eo,t),e.include(ro,t),e.include(to,t),o.uniforms.add(new L("externalColor",l=>l.externalColor)),n.add("vcolorExt","vec4"),t.multipassEnabled&&n.add("depth","float"),o.code.add(r`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${t.instancedColor?"vcolorExt *= instanceColor * 0.003921568627451;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${r.float(Ze)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        } else {
          vpos = getVertexInLocalOriginSpace();
          vPositionLocal = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${i?r`vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${t.hasVertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, vpos);
          ${i&&t.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
        }

        ${t.multipassEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
        forwardColorUV();
        forwardNormalUV();
        forwardEmissiveUV();
        forwardOcclusionUV();
        forwardMetallicRoughnessUV();
      }
    `),e.include(re,t),e.include(ho,t),e.include(it,t),e.include(ne,t),e.include(t.instancedDoublePrecision?mo:po,t),e.include(kt,t),Oe(a,t),a.uniforms.add(o.uniforms.get("localOrigin"),new H("ambient",l=>l.ambient),new H("diffuse",l=>l.diffuse),new B("opacity",l=>l.opacity),new B("layerOpacity",l=>l.layerOpacity)),t.hasColorTexture&&a.uniforms.add(new P("tex",l=>l.texture)),e.include(Yt,t),e.include(rt,t),a.include(go),e.include(er,t),nt(a),st(a),Ne(a),t.transparencyPassType===k.ColorAlpha&&(e.outputs.add("fragColor","vec4",0),e.outputs.add("fragAlpha","float",1)),a.code.add(r`
      void main() {
        discardBySlice(vpos);
        ${t.multipassEnabled?"terrainDepthTest(depth);":""}
        ${t.hasColorTexture?r`
                vec4 texColor = texture(tex, ${t.hasColorTextureTransform?r`colorUV`:r`vuv0`});
                ${t.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:r`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${t.normalType===$.ScreenDerivative?r`
                vec3 normal = screenDerivativeNormal(vPositionLocal);`:r`
                shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
        ${t.pbrMode===g.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse() * getBakedOcclusion();

        vec3 posWorld = vpos + localOrigin;

        float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
        float shadow = ${t.receiveShadows?"readShadowMap(vpos, linearDepth)":t.spherical?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};

        vec3 matColor = max(ambient, diffuse);
        ${t.hasVertexColors?r`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:r`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${t.hasNormalTexture?r`
                mat3 tangentSpace = ${t.hasVertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
                vec3 shadingNormal = computeTextureNormal(tangentSpace, ${t.hasNormalTextureTransform?r`normalUV`:"vuv0"});`:r`vec3 shadingNormal = normal;`}
        vec3 normalGround = ${t.spherical?r`normalize(posWorld);`:r`vec3(0.0, 0.0, 1.0);`}

        ${t.snowCover?r`
                float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
                albedo = mix(albedo, vec3(1), snow);
                shadingNormal = mix(shadingNormal, normal, snow);
                ssao = mix(ssao, 1.0, snow);`:""}

        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

        ${t.pbrMode===g.Normal||t.pbrMode===g.Schematic?r`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${t.snowCover?r`
                        mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);
                        emission = mix(emission, vec3(0.0), snow);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:r`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        fragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${t.transparencyPassType===k.ColorAlpha?r`
                  fragColor = premultiplyAlpha(fragColor);
                  fragAlpha = fragColor.a;`:""}
      }
    `)}return e.include(no,t),e}const Or=Object.freeze(Object.defineProperty({__proto__:null,build:vo},Symbol.toStringTag,{value:"Module"}));let _r=class extends la{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=qe(oo),this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=q.Back,this.isInstanced=!1,this.hasInstancedColor=!1,this.emissiveFactor=ye(0,0,0),this.instancedDoublePrecision=!1,this.normalType=$.Attribute,this.receiveShadows=!0,this.receiveAmbientOcclusion=!0,this.castShadows=!0,this.shadowMappingEnabled=!1,this.ambient=ye(.2,.2,.2),this.diffuse=ye(.8,.8,.8),this.externalColor=Go(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=G(),this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.offsetTransparentBackfaces=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.modelTransformation=null,this.transparent=!1,this.writeDepth=!0,this.customDepthTest=fe.Less,this.textureAlphaMode=y.Blend,this.textureAlphaCutoff=ca,this.textureAlphaPremultiplied=!1,this.hasOccludees=!1,this.renderOccluded=Bo.Occlude,this.isDecoration=!1}},Ri=class extends sa{constructor(){super(...arguments),this.origin=G(),this.slicePlaneLocalOrigin=this.origin}},lt=class xo extends Ke{initializeConfiguration(e,o){o.spherical=e.viewingMode===He.Global,o.doublePrecisionRequiresObfuscation=e.rctx.driverTest.doublePrecisionRequiresObfuscation.result,o.textureCoordinateType=o.hasColorTexture||o.hasMetallicRoughnessTexture||o.hasEmissionTexture||o.hasOcclusionTexture||o.hasNormalTexture?W.Default:W.None,o.objectAndLayerIdColorInstanced=o.instanced}initializeProgram(e){return this._initializeProgram(e,xo.shader)}_initializeProgram(e,o){return new Qe(e.rctx,o.get().build(this.configuration),Ye)}_makePipeline(e,o){const a=this.configuration,n=e===k.NONE,i=e===k.FrontFace;return tt({blending:a.output===v.Color&&a.transparent?n?da:ua(e):null,culling:$r(a)?ka(a.cullFace):null,depthTest:{func:ha(e,Er(a.customDepthTest))},depthWrite:(n||i)&&a.writeDepth?Ya:null,drawBuffers:a.output===v.Depth?{buffers:[Ha.NONE]}:ma(e),colorWrite:ot,stencilWrite:a.hasOccludees?pa:null,stencilTest:a.hasOccludees?o?fa:ga:null,polygonOffset:n||i?null:va(a.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._makePipeline(this.configuration.transparencyPassType,!0),this._makePipeline(this.configuration.transparencyPassType,!1)}getPipeline(e){return e?this._occludeePipelineState:super.getPipeline()}};function Er(t){return t===fe.Lequal?xt.LEQUAL:xt.LESS}function $r(t){return t.cullFace!==q.None||!t.hasSlicePlane&&!t.transparent&&!t.doubleSidedMode}lt.shader=new Re(Or,()=>$e(()=>Promise.resolve().then(()=>ai),void 0));class m extends xa{constructor(){super(...arguments),this.output=v.Color,this.alphaDiscardMode=y.Opaque,this.doubleSidedMode=A.None,this.pbrMode=g.Disabled,this.cullFace=q.None,this.transparencyPassType=k.NONE,this.normalType=$.Attribute,this.textureCoordinateType=W.None,this.customDepthTest=fe.Less,this.spherical=!1,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.multipassEnabled=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.objectAndLayerIdColorInstanced=!1,this.instancedDoublePrecision=!1,this.doublePrecisionRequiresObfuscation=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.cullAboveGround=!1,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1}}c([p({count:v.COUNT})],m.prototype,"output",void 0),c([p({count:y.COUNT})],m.prototype,"alphaDiscardMode",void 0),c([p({count:A.COUNT})],m.prototype,"doubleSidedMode",void 0),c([p({count:g.COUNT})],m.prototype,"pbrMode",void 0),c([p({count:q.COUNT})],m.prototype,"cullFace",void 0),c([p({count:k.COUNT})],m.prototype,"transparencyPassType",void 0),c([p({count:$.COUNT})],m.prototype,"normalType",void 0),c([p({count:W.COUNT})],m.prototype,"textureCoordinateType",void 0),c([p({count:fe.COUNT})],m.prototype,"customDepthTest",void 0),c([p()],m.prototype,"spherical",void 0),c([p()],m.prototype,"hasVertexColors",void 0),c([p()],m.prototype,"hasSymbolColors",void 0),c([p()],m.prototype,"hasVerticalOffset",void 0),c([p()],m.prototype,"hasSlicePlane",void 0),c([p()],m.prototype,"hasSliceHighlight",void 0),c([p()],m.prototype,"hasColorTexture",void 0),c([p()],m.prototype,"hasMetallicRoughnessTexture",void 0),c([p()],m.prototype,"hasEmissionTexture",void 0),c([p()],m.prototype,"hasOcclusionTexture",void 0),c([p()],m.prototype,"hasNormalTexture",void 0),c([p()],m.prototype,"hasScreenSizePerspective",void 0),c([p()],m.prototype,"hasVertexTangents",void 0),c([p()],m.prototype,"hasOccludees",void 0),c([p()],m.prototype,"multipassEnabled",void 0),c([p()],m.prototype,"hasModelTransformation",void 0),c([p()],m.prototype,"offsetBackfaces",void 0),c([p()],m.prototype,"vvSize",void 0),c([p()],m.prototype,"vvColor",void 0),c([p()],m.prototype,"receiveShadows",void 0),c([p()],m.prototype,"receiveAmbientOcclusion",void 0),c([p()],m.prototype,"textureAlphaPremultiplied",void 0),c([p()],m.prototype,"instanced",void 0),c([p()],m.prototype,"instancedColor",void 0),c([p()],m.prototype,"objectAndLayerIdColorInstanced",void 0),c([p()],m.prototype,"instancedDoublePrecision",void 0),c([p()],m.prototype,"doublePrecisionRequiresObfuscation",void 0),c([p()],m.prototype,"writeDepth",void 0),c([p()],m.prototype,"transparent",void 0),c([p()],m.prototype,"enableOffset",void 0),c([p()],m.prototype,"cullAboveGround",void 0),c([p()],m.prototype,"snowCover",void 0),c([p()],m.prototype,"hasColorTextureTransform",void 0),c([p()],m.prototype,"hasEmissionTextureTransform",void 0),c([p()],m.prototype,"hasNormalTextureTransform",void 0),c([p()],m.prototype,"hasOcclusionTextureTransform",void 0),c([p()],m.prototype,"hasMetallicRoughnessTextureTransform",void 0),c([p({constValue:!1})],m.prototype,"occlusionPass",void 0),c([p({constValue:!0})],m.prototype,"hasVvInstancing",void 0),c([p({constValue:!1})],m.prototype,"useCustomDTRExponentForWater",void 0),c([p({constValue:!1})],m.prototype,"supportsTextureAtlas",void 0),c([p({constValue:!0})],m.prototype,"useFillLights",void 0);function bo(t){const e=new Ae,{vertex:o,fragment:a,varyings:n}=e;return oe(o,t),e.include(qt),n.add("vpos","vec3"),e.include(pe,t),e.include(Ht,t),e.include(Qt,t),t.output===v.Color&&(Oe(e.vertex,t),e.include(et,t),e.include(ie,t),t.offsetBackfaces&&e.include(ao),t.instancedColor&&e.attributes.add(M.INSTANCECOLOR,"vec4"),n.add("vNormalWorld","vec3"),n.add("localvpos","vec3"),t.multipassEnabled&&n.add("depth","float"),e.include(ae,t),e.include(eo,t),e.include(ro,t),e.include(to,t),o.uniforms.add(new L("externalColor",i=>i.externalColor)),n.add("vcolorExt","vec4"),o.code.add(r`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${t.instancedColor?"vcolorExt *= instanceColor * 0.003921568627451;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${r.float(Ze)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          } else {
            vpos = getVertexInLocalOriginSpace();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${t.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
          }
          ${t.multipassEnabled?r`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),t.output===v.Color&&(e.include(re,t),e.include(ho,t),e.include(it,t),e.include(ne,t),e.include(t.instancedDoublePrecision?mo:po,t),e.include(kt,t),Oe(e.fragment,t),at(a),nt(a),st(a),a.uniforms.add(o.uniforms.get("localOrigin"),o.uniforms.get("view"),new H("ambient",i=>i.ambient),new H("diffuse",i=>i.diffuse),new B("opacity",i=>i.opacity),new B("layerOpacity",i=>i.layerOpacity)),t.hasColorTexture&&a.uniforms.add(new P("tex",i=>i.texture)),e.include(Yt,t),e.include(rt,t),a.include(go),t.transparencyPassType===k.ColorAlpha&&(e.outputs.add("fragColor","vec4",0),e.outputs.add("fragAlpha","float",1)),Ne(a),a.code.add(r`
      void main() {
        discardBySlice(vpos);
        ${t.multipassEnabled?r`terrainDepthTest(depth);`:""}
        ${t.hasColorTexture?r`
                vec4 texColor = texture(tex, ${t.hasColorTextureTransform?r`colorUV`:r`vuv0`});
                ${t.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:r`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${t.pbrMode===g.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${t.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":t.spherical?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${t.hasVertexColors?r`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:r`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${t.snowCover?r`albedo = mix(albedo, vec3(1), 0.9);`:r``}
        ${r`
            vec3 shadingNormal = normalize(vNormalWorld);
            albedo *= 1.2;
            vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
            float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
            float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
            float treeRadialFalloff = vColor.r;
            float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
            additionalLight += backLightFactor * mainLightIntensity;`}
        ${t.pbrMode===g.Normal||t.pbrMode===g.Schematic?t.spherical?r`vec3 normalGround = normalize(vpos + localOrigin);`:r`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:r``}
        ${t.pbrMode===g.Normal||t.pbrMode===g.Schematic?r`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${t.snowCover?r`
                        mrr = vec3(0.0, 1.0, 0.04);
                        emission = vec3(0.0);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:r`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        fragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${t.transparencyPassType===k.ColorAlpha?r`
                fragColor = premultiplyAlpha(fragColor);
                fragAlpha = fragColor.a;`:""}
      }
    `)),e.include(no,t),e}const Ar=Object.freeze(Object.defineProperty({__proto__:null,build:bo},Symbol.toStringTag,{value:"Module"}));let To=class yo extends lt{initializeConfiguration(e,o){super.initializeConfiguration(e,o),o.hasMetallicRoughnessTexture=!1,o.hasEmissionTexture=!1,o.hasOcclusionTexture=!1,o.hasNormalTexture=!1,o.hasModelTransformation=!1,o.normalType=$.Attribute,o.doubleSidedMode=A.WindingOrder,o.hasVertexTangents=!1}initializeProgram(e){return this._initializeProgram(e,yo.shader)}};To.shader=new Re(Ar,()=>$e(()=>Promise.resolve().then(()=>ri),void 0));let Ee=class extends jo{constructor(e){super(e,Nr),this.supportsEdges=!0,this.produces=new Map([[je.OPAQUE_MATERIAL,o=>(Fe(o)||De(o))&&!this.parameters.transparent],[je.TRANSPARENT_MATERIAL,o=>(Fe(o)||De(o))&&this.parameters.transparent&&this.parameters.writeDepth],[je.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL,o=>(Fe(o)||De(o))&&this.parameters.transparent&&!this.parameters.writeDepth]]),this._configuration=new m,this._vertexBufferLayout=zr(this.parameters)}isVisibleForOutput(e){return e!==v.Shadow&&e!==v.ShadowExcludeHighlight&&e!==v.ShadowHighlight||this.parameters.castShadows}isVisible(){const e=this.parameters;if(!super.isVisible()||e.layerOpacity===0)return!1;const{hasInstancedColor:o,hasVertexColors:a,hasSymbolColors:n,vvColor:i}=e,l=e.colorMixMode==="replace",u=e.opacity>0,s=e.externalColor&&e.externalColor[3]>0,d=o||i||n;return a&&d?l||u:a?l?s:u:d?l||u:l?s:u}getConfiguration(e,o){return this._configuration.output=e,this._configuration.hasNormalTexture=!!this.parameters.normalTextureId,this._configuration.hasColorTexture=!!this.parameters.textureId,this._configuration.hasVertexTangents=this.parameters.hasVertexTangents,this._configuration.instanced=this.parameters.isInstanced,this._configuration.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.hasVerticalOffset=this.parameters.verticalOffset!=null,this._configuration.hasScreenSizePerspective=this.parameters.screenSizePerspective!=null,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasSliceHighlight=this.parameters.hasSliceHighlight,this._configuration.alphaDiscardMode=this.parameters.textureAlphaMode,this._configuration.normalType=this.parameters.normalType,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,this.parameters.customDepthTest!=null&&(this._configuration.customDepthTest=this.parameters.customDepthTest),this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.cullFace=this.parameters.hasSlicePlane?q.None:this.parameters.cullFace,this._configuration.multipassEnabled=o.multipassEnabled,this._configuration.cullAboveGround=o.multipassTerrain.cullAboveGround,this._configuration.hasModelTransformation=this.parameters.modelTransformation!=null,e===v.Color&&(this._configuration.hasVertexColors=this.parameters.hasVertexColors,this._configuration.hasSymbolColors=this.parameters.hasSymbolColors,this.parameters.treeRendering?this._configuration.doubleSidedMode=A.WindingOrder:this._configuration.doubleSidedMode=this.parameters.doubleSided&&this.parameters.doubleSidedType==="normal"?A.View:this.parameters.doubleSided&&this.parameters.doubleSidedType==="winding-order"?A.WindingOrder:A.None,this._configuration.instancedColor=this.parameters.hasInstancedColor,this._configuration.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this._configuration.receiveAmbientOcclusion=this.parameters.receiveAmbientOcclusion&&o.ssao!=null,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this._configuration.pbrMode=this.parameters.usePBR?this.parameters.isSchematic?g.Schematic:g.Normal:g.Disabled,this._configuration.hasMetallicRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this._configuration.hasEmissionTexture=!!this.parameters.emissiveTextureId,this._configuration.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this._configuration.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this._configuration.transparencyPassType=o.transparencyPassType,this._configuration.enableOffset=o.camera.relativeElevation<ba,this._configuration.snowCover=this.hasSnowCover(o),this._configuration.hasColorTextureTransform=!!this.parameters.colorTextureTransformMatrix,this._configuration.hasNormalTextureTransform=!!this.parameters.normalTextureTransformMatrix,this._configuration.hasEmissionTextureTransform=!!this.parameters.emissiveTextureTransformMatrix,this._configuration.hasOcclusionTextureTransform=!!this.parameters.occlusionTextureTransformMatrix,this._configuration.hasMetallicRoughnessTextureTransform=!!this.parameters.metallicRoughnessTextureTransformMatrix),this._configuration}hasSnowCover(e){return e.weather!=null&&e.weatherVisible&&e.weather.type==="snowy"&&e.weather.snowCover==="enabled"}intersect(e,o,a,n,i,l){if(this.parameters.verticalOffset!=null){const u=a.camera;Ce(We,o[12],o[13],o[14]);let s=null;switch(a.viewingMode){case He.Global:s=Nt(Ct,We);break;case He.Local:s=Io(Ct,Br)}let d=0;const f=we(jr,We,u.eye),h=zt(f),x=dt(f,f,1/h);let T=null;this.parameters.screenSizePerspective&&(T=Fo(s,x)),d+=Do(u,h,this.parameters.verticalOffset,T??0,this.parameters.screenSizePerspective),dt(s,s,d),Vo(Ue,s,a.transform.inverseRotation),n=we(Lr,n,Ue),i=we(Gr,i,Ue)}Fa(e,a,n,i,Uo(a.verticalOffset),l)}createGLMaterial(e){return new Rr(e)}createBufferWriter(){return new Da(this._vertexBufferLayout)}},Rr=class extends Va{constructor(e){super({...e,...e.material.parameters})}_updateShadowState(e){e.shadowMap.enabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:e.shadowMap.enabled})}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:e.hasOccludees})}beginSlot(e){this._output===v.Color&&(this._updateShadowState(e),this._updateOccludeeState(e));const o=this._material.parameters;this.updateTexture(o.textureId);const a=e.camera.viewInverseTransposeMatrix;return Ce(o.origin,a[3],a[7],a[11]),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(o.treeRendering?To:lt,e)}};class Pr extends _r{constructor(){super(...arguments),this.initTextureTransparent=!1,this.treeRendering=!1,this.hasVertexTangents=!1}}const Nr=new Pr;function zr(t){const e=Ga().vec3f(M.POSITION);return t.normalType===$.Compressed?e.vec2i16(M.NORMALCOMPRESSED,{glNormalized:!0}):e.vec3f(M.NORMAL),t.hasVertexTangents&&e.vec4f(M.TANGENT),(t.textureId||t.normalTextureId||t.metallicRoughnessTextureId||t.emissiveTextureId||t.occlusionTextureId)&&e.vec2f(M.UV0),t.hasVertexColors&&e.vec4u8(M.COLOR),t.hasSymbolColors&&e.vec4u8(M.SYMBOLCOLOR),Wo("enable-feature:objectAndLayerId-rendering")&&e.vec4u8(M.OBJECTANDLAYERIDCOLOR),e}const Lr=G(),Gr=G(),Br=ye(0,0,1),Ct=G(),Ue=G(),We=G(),jr=G();function he(t){if(t==null)return null;const e=t.offset!=null?t.offset:qo,o=t.rotation!=null?t.rotation:0,a=t.scale!=null?t.scale:Ho,n=Be(1,0,0,0,1,0,e[0],e[1],1),i=Be(Math.cos(o),-Math.sin(o),0,Math.sin(o),Math.cos(o),0,0,0,1),l=Be(a[0],0,0,0,a[1],0,0,0,1),u=Lt();return ut(u,i,l),ut(u,n,u),u}class Ir{constructor(){this.geometries=new Array,this.materials=new Array,this.textures=new Array}}class Fr{constructor(e,o,a){this.name=e,this.lodThreshold=o,this.pivotOffset=a,this.stageResources=new Ir,this.numberOfVertices=0}}const V=()=>Jo.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function Dr(t,e){const o=await Vr(t,e),a=await kr(o.textureDefinitions??{},e);let n=0;for(const i in a)if(a.hasOwnProperty(i)){const l=a[i];n+=l!=null&&l.image?l.image.width*l.image.height*4:0}return{resource:o,textures:a,size:n+ko(o)}}async function Vr(t,e){const o=e==null?void 0:e.streamDataRequester;if(o)return Ur(t,o,e);const a=await Gt(Yo(t,e));if(a.ok===!0)return a.value.data;Bt(a.error),wo(a.error)}async function Ur(t,e,o){const a=await Gt(e.request(t,"json",o));if(a.ok===!0)return a.value;Bt(a.error),wo(a.error.details.url)}function wo(t){throw new $t("",`Request for object resource failed: ${t}`)}function Wr(t){const e=t.params,o=e.topology;let a=!0;switch(e.vertexAttributes||(V().warn("Geometry must specify vertex attributes"),a=!1),e.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const i=e.faces;if(i){if(e.vertexAttributes)for(const l in e.vertexAttributes){const u=i[l];u!=null&&u.values?(u.valueType!=null&&u.valueType!=="UInt32"&&(V().warn(`Unsupported indexed geometry indices type '${u.valueType}', only UInt32 is currently supported`),a=!1),u.valuesPerElement!=null&&u.valuesPerElement!==1&&(V().warn(`Unsupported indexed geometry values per element '${u.valuesPerElement}', only 1 is currently supported`),a=!1)):(V().warn(`Indexed geometry does not specify face indices for '${l}' attribute`),a=!1)}}else V().warn("Indexed geometries must specify faces"),a=!1;break}default:V().warn(`Unsupported topology '${o}'`),a=!1}t.params.material||(V().warn("Geometry requires material"),a=!1);const n=t.params.vertexAttributes;for(const i in n)n[i].values||(V().warn("Geometries with externally defined attributes are not yet supported"),a=!1);return a}function qr(t,e){var S,b;const o=new Array,a=new Array,n=new Array,i=new Na,l=t.resource,u=jt.parse(l.version||"1.0","wosr");Jr.validate(u);const s=l.model.name,d=l.model.geometries,f=l.materialDefinitions??{},h=t.textures;let x=0;const T=new Map;for(let w=0;w<d.length;w++){const C=d[w];if(!Wr(C))continue;const _=Yr(C),R=C.params.vertexAttributes,Y=[],Z=O=>{if(C.params.topology==="PerAttributeArray")return null;const j=C.params.faces;for(const I in j)if(I===O)return j[I].values;return null},ce=R[M.POSITION],ge=ce.values.length/ce.valuesPerElement;for(const O in R){const j=R[O],I=j.values,Ge=Z(O)??za(ge);Y.push([O,new ee(I,Ge,j.valuesPerElement,!0)])}const N=_.texture,E=h&&h[N];if(E&&!T.has(N)){const{image:O,parameters:j}=E,I=new Jt(O,j);a.push(I),T.set(N,I)}const ve=T.get(N),de=ve?ve.id:void 0,z=_.material;let ue=i.get(z,N);if(ue==null){const O=f[z.substring(z.lastIndexOf("/")+1)].params;O.transparency===1&&(O.transparency=0);const j=E&&E.alphaChannelUsage,I=O.transparency>0||j==="transparency"||j==="maskAndTransparency",Ge=E?Mo(E.alphaChannelUsage):void 0,ct={ambient:qe(O.diffuse),diffuse:qe(O.diffuse),opacity:1-(O.transparency||0),transparent:I,textureAlphaMode:Ge,textureAlphaCutoff:.33,textureId:de,initTextureTransparent:!0,doubleSided:!0,cullFace:q.None,colorMixMode:O.externalColorMixMode||"tint",textureAlphaPremultiplied:(E==null?void 0:E.parameters.preMultiplyAlpha)??!1};e!=null&&e.materialParameters&&Object.assign(ct,e.materialParameters),ue=new Ee(ct),i.set(z,N,ue)}n.push(ue);const Oo=new Zt(ue,Y);x+=((b=(S=Y.find(O=>O[0]===M.POSITION))==null?void 0:S[1])==null?void 0:b.indices.length)??0,o.push(Oo)}return{engineResources:[{name:s,stageResources:{textures:a,materials:n,geometries:o},pivotOffset:l.model.pivotOffset,numberOfVertices:x,lodThreshold:null}],referenceBoundingBox:Hr(o)}}function Hr(t){const e=It();return t.forEach(o=>{const a=o.boundingInfo;a!=null&&(Se(e,a.bbMin),Se(e,a.bbMax))}),e}async function kr(t,e){const o=new Array;for(const i in t){const l=t[i],u=l.images[0].data;if(!u){V().warn("Externally referenced texture data is not yet supported");continue}const s=l.encoding+";base64,"+u,d="/textureDefinitions/"+i,f=l.channels==="rgba"?l.alphaChannelUsage||"transparency":"none",h={noUnpackFlip:!0,wrap:{s:_e.REPEAT,t:_e.REPEAT},preMultiplyAlpha:Mo(f)!==y.Opaque},x=e!=null&&e.disableTextures?Promise.resolve(null):La(s,e);o.push(x.then(T=>({refId:d,image:T,parameters:h,alphaChannelUsage:f})))}const a=await Promise.all(o),n={};for(const i of a)n[i.refId]=i;return n}function Mo(t){switch(t){case"mask":return y.Mask;case"maskAndTransparency":return y.MaskBlend;case"none":return y.Opaque;default:return y.Blend}}function Yr(t){const e=t.params;return{id:1,material:e.material,texture:e.texture,region:e.texture}}const Jr=new jt(1,2,"wosr");async function Zr(t,e){var h;const o=Co(Zo(t));if(o.fileType==="wosr"){const x=await(e.cache?e.cache.loadWOSR(o.url,e):Dr(o.url,e)),{engineResources:T,referenceBoundingBox:S}=qr(x,e);return{lods:T,referenceBoundingBox:S,isEsriSymbolResource:!1,isWosr:!0}}const a=await(e.cache?e.cache.loadGLTF(o.url,e,!!e.usePBR):_a(new Ea(e.streamDataRequester),o.url,e,e.usePBR)),n=(h=a.model.meta)==null?void 0:h.ESRI_proxyEllipsoid,i=a.meta.isEsriSymbolResource&&n!=null&&a.meta.ESRI_webstyle==="EsriRealisticTreesStyle";i&&!a.customMeta.esriTreeRendering&&(a.customMeta.esriTreeRendering=!0,ei(a,n));const l=!!e.usePBR,u=a.meta.isEsriSymbolResource?{usePBR:l,isSchematic:!1,treeRendering:i,mrrFactors:[...ar]}:{usePBR:l,isSchematic:!1,treeRendering:!1,mrrFactors:[...oo]},s={...e.materialParameters,treeRendering:i},{engineResources:d,referenceBoundingBox:f}=So(a,u,s,e.skipHighLods&&o.specifiedLodIndex==null?{skipHighLods:!0}:{skipHighLods:!1,singleLodIndex:o.specifiedLodIndex});return{lods:d,referenceBoundingBox:f,isEsriSymbolResource:a.meta.isEsriSymbolResource,isWosr:!1}}function Co(t){const e=t.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return e?{fileType:"gltf",url:e[1],specifiedLodIndex:e[4]!=null?Number(e[4]):null}:t.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:t,specifiedLodIndex:null}:{fileType:"unknown",url:t,specifiedLodIndex:null}}function So(t,e,o,a){const n=t.model,i=new Array,l=new Map,u=new Map,s=n.lods.length,d=It();return n.lods.forEach((f,h)=>{const x=a.skipHighLods===!0&&(s>1&&h===0||s>3&&h===1)||a.skipHighLods===!1&&a.singleLodIndex!=null&&h!==a.singleLodIndex;if(x&&h!==0)return;const T=new Fr(f.name,f.lodThreshold,[0,0,0]);f.parts.forEach(S=>{const b=x?new Ee({}):Xr(n,S,T,e,o,l,u),{geometry:w,vertexCount:C}=Kr(S,b??new Ee({})),_=w.boundingInfo;_!=null&&h===0&&(Se(d,_.bbMin),Se(d,_.bbMax)),b!=null&&(T.stageResources.geometries.push(w),T.numberOfVertices+=C)}),x||i.push(T)}),{engineResources:i,referenceBoundingBox:d}}function Xr(t,e,o,a,n,i,l){var T,S;const u=e.material+(e.attributes.normal?"_normal":"")+(e.attributes.color?"_color":"")+(e.attributes.texCoord0?"_texCoord0":"")+(e.attributes.tangent?"_tangent":""),s=t.materials.get(e.material),d=e.attributes.texCoord0!=null,f=e.attributes.normal!=null;if(s==null)return null;const h=Qr(s.alphaMode);if(!i.has(u)){if(d){const N=(E,ve=!1)=>{if(E!=null&&!l.has(E)){const de=t.textures.get(E);if(de!=null){const z=de.data;l.set(E,new Jt(Ie(z)?z.data:z,{...de.parameters,preMultiplyAlpha:!Ie(z)&&ve,encoding:Ie(z)&&z.encoding!=null?z.encoding:void 0}))}}};N(s.textureColor,h!==y.Opaque),N(s.textureNormal),N(s.textureOcclusion),N(s.textureEmissive),N(s.textureMetallicRoughness)}const b=s.color[0]**(1/X),w=s.color[1]**(1/X),C=s.color[2]**(1/X),_=s.emissiveFactor[0]**(1/X),R=s.emissiveFactor[1]**(1/X),Y=s.emissiveFactor[2]**(1/X),Z=s.textureColor!=null&&d?l.get(s.textureColor):null,ce=tr({normalTexture:s.textureNormal,metallicRoughnessTexture:s.textureMetallicRoughness,metallicFactor:s.metallicFactor,roughnessFactor:s.roughnessFactor,emissiveTexture:s.textureEmissive,emissiveFactor:s.emissiveFactor,occlusionTexture:s.textureOcclusion}),ge=((T=s.normalTextureTransform)==null?void 0:T.scale)!=null?(S=s.normalTextureTransform)==null?void 0:S.scale:Ot;i.set(u,new Ee({...a,transparent:h===y.Blend,customDepthTest:fe.Lequal,textureAlphaMode:h,textureAlphaCutoff:s.alphaCutoff,diffuse:[b,w,C],ambient:[b,w,C],opacity:s.opacity,doubleSided:s.doubleSided,doubleSidedType:"winding-order",cullFace:s.doubleSided?q.None:q.Back,hasVertexColors:!!e.attributes.color,hasVertexTangents:!!e.attributes.tangent,normalType:f?$.Attribute:$.ScreenDerivative,castShadows:!0,receiveShadows:s.receiveShadows,receiveAmbientOcclusion:s.receiveAmbientOcclustion,textureId:Z!=null?Z.id:void 0,colorMixMode:s.colorMixMode,normalTextureId:s.textureNormal!=null&&d?l.get(s.textureNormal).id:void 0,textureAlphaPremultiplied:Z!=null&&!!Z.parameters.preMultiplyAlpha,occlusionTextureId:s.textureOcclusion!=null&&d?l.get(s.textureOcclusion).id:void 0,emissiveTextureId:s.textureEmissive!=null&&d?l.get(s.textureEmissive).id:void 0,metallicRoughnessTextureId:s.textureMetallicRoughness!=null&&d?l.get(s.textureMetallicRoughness).id:void 0,emissiveFactor:[_,R,Y],mrrFactors:ce?[...or]:[s.metallicFactor,s.roughnessFactor,a.mrrFactors[2]],isSchematic:ce,colorTextureTransformMatrix:he(s.colorTextureTransform),normalTextureTransformMatrix:he(s.normalTextureTransform),scale:[ge[0],ge[1]],occlusionTextureTransformMatrix:he(s.occlusionTextureTransform),emissiveTextureTransformMatrix:he(s.emissiveTextureTransform),metallicRoughnessTextureTransformMatrix:he(s.metallicRoughnessTextureTransform),...n}))}const x=i.get(u);if(o.stageResources.materials.push(x),d){const b=w=>{w!=null&&o.stageResources.textures.push(l.get(w))};b(s.textureColor),b(s.textureNormal),b(s.textureOcclusion),b(s.textureEmissive),b(s.textureMetallicRoughness)}return x}function Kr(t,e){const o=t.attributes.position.count,a=$a(t.indices||o,t.primitiveType),n=Te(3*o),{typedBuffer:i,typedBufferStride:l}=t.attributes.position;Ca(n,i,t.transform,3,l);const u=[[M.POSITION,new ee(n,a,3,!0)]];if(t.attributes.normal!=null){const d=Te(3*o),{typedBuffer:f,typedBufferStride:h}=t.attributes.normal;Xo(Q,t.transform),Sa(d,f,Q,3,h),ht(Q)&&ft(d,d),u.push([M.NORMAL,new ee(d,a,3,!0)])}if(t.attributes.tangent!=null){const d=Te(4*o),{typedBuffer:f,typedBufferStride:h}=t.attributes.tangent;Ko(Q,t.transform),Oa(d,f,Q,4,h),ht(Q)&&ft(d,d,4),u.push([M.TANGENT,new ee(d,a,4,!0)])}if(t.attributes.texCoord0!=null){const d=Te(2*o),{typedBuffer:f,typedBufferStride:h}=t.attributes.texCoord0;Aa(d,f,2,h),u.push([M.UV0,new ee(d,a,2,!0)])}const s=t.attributes.color;if(s!=null){const d=new Uint8Array(4*o);s.elementCount===4?s instanceof Ta?vt(d,s,255):s instanceof Xt?Ra(d,s):s instanceof ya&&vt(d,s,1/256):(d.fill(255),s instanceof Kt?gt(d,s.typedBuffer,255,4,s.typedBufferStride):t.attributes.color instanceof wa?Pa(d,s.typedBuffer,4,t.attributes.color.typedBufferStride):t.attributes.color instanceof Ma&&gt(d,s.typedBuffer,1/256,4,s.typedBufferStride)),u.push([M.COLOR,new ee(d,a,4,!0)])}return{geometry:new Zt(e,u),vertexCount:o}}const Q=Lt();function Qr(t){switch(t){case"BLEND":return y.Blend;case"MASK":return y.Mask;case"OPAQUE":case null:case void 0:return y.Opaque}}function ei(t,e){for(let o=0;o<t.model.lods.length;++o){const a=t.model.lods[o];for(const n of a.parts){const i=n.attributes.normal;if(i==null)return;const l=n.attributes.position,u=l.count,s=G(),d=G(),f=G(),h=new Uint8Array(4*u),x=new Float64Array(3*u),T=Qo(ea(),n.transform);let S=0,b=0;for(let w=0;w<u;w++){l.getVec(w,d),i.getVec(w,s),mt(d,d,n.transform),we(f,d,e.center),pt(f,f,e.radius);const C=f[2],_=zt(f),R=Math.min(.45+.55*_*_,1);pt(f,f,e.radius),T!==null&&mt(f,f,T),Nt(f,f),o+1!==t.model.lods.length&&t.model.lods.length>1&&ta(f,f,s,C>-1?.2:Math.min(-4*C-3.8,1)),x[S]=f[0],x[S+1]=f[1],x[S+2]=f[2],S+=3,h[b]=255*R,h[b+1]=255*R,h[b+2]=255*R,h[b+3]=255,b+=4}n.attributes.normal=new Kt(x),n.attributes.color=new Xt(h)}}}const Li=Object.freeze(Object.defineProperty({__proto__:null,fetch:Zr,gltfToEngineResources:So,parseUrl:Co},Symbol.toStringTag,{value:"Module"})),ti=Object.freeze(Object.defineProperty({__proto__:null,build:so},Symbol.toStringTag,{value:"Module"})),oi=Object.freeze(Object.defineProperty({__proto__:null,build:uo,getRadius:ze},Symbol.toStringTag,{value:"Module"})),ai=Object.freeze(Object.defineProperty({__proto__:null,build:vo},Symbol.toStringTag,{value:"Module"})),ri=Object.freeze(Object.defineProperty({__proto__:null,build:bo},Symbol.toStringTag,{value:"Module"}));export{Ne as a,or as b,oo as c,Zr as d,Qa as e,rr as f,it as g,er as h,nt as i,Ee as j,st as k,A as l,bt as m,xr as n,Tt as o,ho as p,Li as q,Mi as r,he as s,at as t,tr as u,po as x,Ri as z};
