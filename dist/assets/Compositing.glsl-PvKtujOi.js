import{n as e,t}from"./glsl-B__sVAcg.js";import{t as n}from"./FloatPassUniform-D-_T45xB.js";import{t as r}from"./Texture2DPassUniform-wY08hxIn.js";import{t as i}from"./NoParameters-B66z9IwQ.js";import{t as a}from"./ShaderBuilder-NkkCCxyc.js";import{t as o}from"./ScreenSpacePass.glsl-MQijsFL9.js";import{t as s}from"./Float2BindUniform-COpkFEGz.js";import{t as c}from"./ReadDepth.glsl-D7iXVNKu.js";function l(t){t.code.add(e`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 float2rgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}`),t.code.add(e`const vec4 RGBA_TO_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgbaTofloat(vec4 rgba) {
return dot(rgba, RGBA_TO_FLOAT_FACTORS);
}`),t.code.add(e`const vec4 uninterpolatedRGBAToFloatFactors = vec4(
1.0 / 256.0,
1.0 / 256.0 / 256.0,
1.0 / 256.0 / 256.0 / 256.0,
1.0 / 256.0 / 256.0 / 256.0 / 256.0
);
float uninterpolatedRGBAToFloat(vec4 rgba) {
return (dot(round(rgba * 255.0), uninterpolatedRGBAToFloatFactors) - 0.5) * 2.0;
}`),t.code.add(e`const vec3 uninterpolatedRGBToFloatFactors = vec3(
1.0 / 256.0,
1.0 / 256.0 / 256.0,
1.0 / 256.0 / 256.0 / 256.0
);
float uninterpolatedRGBToFloat(vec3 rgb) {
return (dot(round(rgb * 255.0), uninterpolatedRGBToFloatFactors) - 0.5) * 2.0;
}`)}var u=class extends i{constructor(){super(...arguments),this.opacity=1}};function d(i){let u=new a,{blendEmissive:d,blitMode:f,hasOpacityFactor:p}=i;u.include(o),u.fragment.uniforms.add(new r(`tex`,e=>e.texture)),p&&u.fragment.uniforms.add(new n(`opacity`,e=>e.opacity));let m=f===3;return m&&(u.fragment.uniforms.add(new s(`nearFar`,e=>e.camera.nearFar)),u.fragment.include(c),u.fragment.include(l)),d&&(u.outputs.add(`fragColor`,`vec4`,0),u.outputs.add(`fragEmission`,`vec4`,1)),u.fragment.main.add(e`
    ${m?e`
          float normalizedLinearDepth = (-linearDepthFromTexture(tex, uv) - nearFar[0]) / (nearFar[1] - nearFar[0]);
          fragColor = float2rgba(normalizedLinearDepth);`:e`
          fragColor = texture(tex, uv) ${p?`* opacity`:``};`}
    ${t(d,`fragEmission = vec4(0.0, 0.0, 0.0, fragColor.a);`)}`),u}var f=Object.freeze(Object.defineProperty({__proto__:null,CompositingPassParameters:u,build:d},Symbol.toStringTag,{value:`Module`}));export{d as n,u as r,f as t};