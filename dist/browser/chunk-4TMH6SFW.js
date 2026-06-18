import{a as p}from"./chunk-MUQQ6GJS.js";import{a as u}from"./chunk-SNAZ42PQ.js";import{a as t}from"./chunk-6ZGVESB5.js";import{a as c}from"./chunk-XYMAXA4B.js";import{a as m}from"./chunk-E6G6MGCI.js";import{a as d}from"./chunk-EZYCO4TJ.js";import{a as e,b as l}from"./chunk-YSASWMAG.js";import{a as f}from"./chunk-NMKLVORY.js";function g(r){r.code.add(e`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 floatToRgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}`),r.code.add(e`const vec4 RGBA_TO_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgbaToFloat(vec4 rgba) {
return dot(rgba, RGBA_TO_FLOAT_FACTORS);
}`)}var n=class extends f{constructor(){super(...arguments),this.opacity=1,this.mipmapLevel=0}};function v(r){let a=new d,{blendEmissive:i,mode:F}=r;a.include(m),a.fragment.uniforms.add(new c("tex",({texture:o})=>o));let s=F===3;return s?(a.fragment.include(p),a.fragment.include(g),a.fragment.uniforms.add(new u("nearFar",o=>o.camera.nearFar))):a.fragment.uniforms.add(new t("opacity",o=>o.opacity),new t("level",({mipmapLevel:o})=>o)),i&&(a.outputs.add("fragColor","vec4",0),a.outputs.add("fragEmission","vec4",1)),a.fragment.main.add(e`
    ${s?e`
          float normalizedLinearDepth = (-linearDepthFromTexture(tex, uv) - nearFar[0]) / (nearFar[1] - nearFar[0]);
          fragColor = floatToRgba(normalizedLinearDepth);`:e`fragColor = textureLod(tex, uv, level) * opacity;`}
    ${l(i,"fragEmission = vec4(0.0, 0.0, 0.0, fragColor.a);")}`),a}var S=Object.freeze(Object.defineProperty({__proto__:null,CompositingPassParameters:n,build:v},Symbol.toStringTag,{value:"Module"}));export{n as a,v as b,S as c};
