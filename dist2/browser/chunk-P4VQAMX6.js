import{f as E,g as F,i as $,n as w,q as P}from"./chunk-ELAM4BPJ.js";import{a as K}from"./chunk-HO7EK3U7.js";import{e as d}from"./chunk-IHC7LZBT.js";import{a as L}from"./chunk-MI7CDTQL.js";import{a as m}from"./chunk-6WLT4IGN.js";import{a as S}from"./chunk-LI2AJFVU.js";import{a as q}from"./chunk-SYFPWUTB.js";import{a as B}from"./chunk-PIV6OXVC.js";import{a as s,b as n,c as l}from"./chunk-YSASWMAG.js";import{h as b}from"./chunk-OBCHEY7W.js";import{a as I}from"./chunk-JJQR3F6K.js";import{c as C}from"./chunk-6DXT34WA.js";import{a as D,h as T}from"./chunk-7VB5JZ2H.js";var g=class extends l{constructor(o,e,i){super(o,"mat4",2,(a,c,t)=>a.setUniformMatrix4fv(o,e(c,t),i))}};function ti(r,o){o.instancedDoublePrecision?r.constants.add("cameraPosition","vec3",T):r.uniforms.add(new w("cameraPosition",(e,i)=>C(z,i.camera.viewInverseTransposeMatrix[3]-e.origin[0],i.camera.viewInverseTransposeMatrix[7]-e.origin[1],i.camera.viewInverseTransposeMatrix[11]-e.origin[2])))}function ni(r,o){if(!o.instancedDoublePrecision)return void r.uniforms.add(new m("proj",i=>i.camera.projectionMatrix),new g("view",(i,a)=>b(j,a.camera.viewMatrix,i.origin)),new w("localOrigin",i=>i.origin));let e=({camera:i})=>C(z,i.viewInverseTransposeMatrix[3],i.viewInverseTransposeMatrix[7],i.viewInverseTransposeMatrix[11]);r.uniforms.add(new m("proj",i=>i.camera.projectionMatrix),new m("view",i=>b(j,i.camera.viewMatrix,e(i))),new L("localOrigin",i=>e(i)))}var j=I(),z=D();function si(r){r.uniforms.add(new m("viewNormal",o=>o.camera.viewInverseTransposeMatrix))}function li(r){r.uniforms.add(new q("pixelRatio",o=>o.camera.pixelRatio/o.overlayStretch))}function u(r){r.code.add(s`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`)}var O=.003913894324853229,N=1-O;function R(r){r.constants.add("alphaCutoff","float",O),r.constants.add("opacityCutoff","float",N)}var p=class extends l{constructor(o,e){super(o,"ivec2",0,(i,a)=>i.setUniform2iv(o,e(a)))}};var h=class extends l{constructor(o,e){super(o,"int",0,(i,a)=>i.setUniform1i(o,e(a)))}};var v=class extends l{constructor(o,e){super(o,"usampler2D",0,(i,a)=>i.bindTexture(o,e(a)))}};function _(r,o){let{fragment:e}=r,{output:i,draped:a,hasHighlightMixTexture:c}=o;i===10?(e.uniforms.add(new h("highlightLevel",t=>t.highlightLevel??0),new p("highlightMixOrigin",t=>t.highlightMixOrigin)),r.outputs.add("fragHighlight","uvec2",0),r.include(B),c?e.uniforms.add(new v("highlightMixTexture",t=>t.highlightMixTexture)).code.add(s`uvec2 getAccumulatedHighlight() {
return texelFetch(highlightMixTexture, ivec2(gl_FragCoord.xy) - highlightMixOrigin, 0).rg;
}
void outputHighlight(bool occluded) {
if (highlightLevel == 0) {
uint bits = occluded ? 3u : 1u;
fragHighlight = uvec2(bits, 0);
} else {
int ll = (highlightLevel & 3) << 1;
int li = (highlightLevel >> 2) & 3;
uint bits;
if (occluded) {
bits = 3u << ll;
} else {
bits = 1u << ll;
}
uvec2 combinedHighlight = getAccumulatedHighlight();
combinedHighlight[li] |= bits;
fragHighlight = combinedHighlight;
}
}`):e.code.add(s`void outputHighlight(bool occluded) {
uint bits = occluded ? 3u : 1u;
fragHighlight = uvec2(bits, 0);
}`),a?e.code.add(s`bool isHighlightOccluded() {
return false;
}`):e.uniforms.add(new S("depthTexture",t=>t.mainDepth)).code.add(s`bool isHighlightOccluded() {
float sceneDepth = texelFetch(depthTexture, ivec2(gl_FragCoord.xy), 0).x;
return gl_FragCoord.z > sceneDepth + 5e-7;
}`),e.code.add(s`void calculateOcclusionAndOutputHighlight() {
outputHighlight(isHighlightOccluded());
}`)):e.code.add(s`void calculateOcclusionAndOutputHighlight() {}`)}function V(r,o){r.include(u),r.include(d,o),r.code.add(`
    vec3 emissionDimming(in vec3 srcColor, float srcAlpha) {
      srcColor = rgb2hsv(srcColor);
      srcColor.g = srcAlpha;
      srcColor.b = 1.0;
      return hsv2rgb(srcColor);
    }
  `)}function ji(r,o){r.include(_,o),r.include(P,o);let{fragment:e,outputs:i}=r,{output:a,hasEmission:c,discardInvisibleFragments:t,oitPremultipliedAlpha:H,snowCover:y,useFloatBlend:Z,emissionDimmingPass:A}=o,M=a===11,f=E(a),k=F(a),U=$(a)&&!f,x=0;(U||f)&&i.add("fragColor","vec4",x++),f&&i.add("fragAlpha","float",x++),c&&i.add("fragEmission","vec4",x++),e.include(u),e.include(R),e.include(d,o),e.include(K,o),A&&e.include(V,o),e.code.add(s`
    void outputColorHighlightOLID(vec4 finalColor, vec3 emissiveSymbolColor ${n(y,", float snow")}) {
      ${n(M,"finalColor.a = 1.0;")}
      ${n(t,"if (finalColor.a < alphaCutoff) { discard; }")}

      ${n(f,`float noise = ditherNoise(finalColor);
         fragColor = ${n(H,"finalColor","premultiplyAlpha(finalColor)")};
         fragColor = vec4(fragColor.rgb * floatBlendOutputScale + noise, fragColor.a);
         float scaledAlpha = finalColor.a * floatBlendOutputScale;
         fragAlpha = scaledAlpha + noise;
         ${n(!Z,"fragAlpha = fragAlpha < alphaCutoff ? scaledAlpha : fragAlpha;")}`)}
      ${n(k&&H&&t,"finalColor.rgb /= finalColor.a;")}
      ${n(U,"fragColor = finalColor;")}
      ${n(c,A?"fragEmission = vec4(emissionDimming(premultiplyAlpha(finalColor).rgb, finalColor.a), 0.0);":`fragEmission = ${n(y,"mix(finalColor.a * getEmissions(emissiveSymbolColor), vec4(0.0), snow);","finalColor.a * getEmissions(emissiveSymbolColor);")}
            float emissionNoise = ditherNoise(fragEmission);
            fragEmission.rgb = fragEmission.rgb * floatBlendOutputScale + emissionNoise;
            fragEmission.a = finalColor.a;
            `)}
      calculateOcclusionAndOutputHighlight();
      ${n(M,"outputObjectAndLayerIdColor();")}
    }
  `)}export{g as a,ti as b,ni as c,si as d,li as e,u as f,O as g,R as h,h as i,_ as j,ji as k};
