import{d as S}from"./chunk-XXGWZA3P.js";import{a as D}from"./chunk-GNMUXIWL.js";import{a as U}from"./chunk-JNLIGAVK.js";import{a as h}from"./chunk-6ZGVESB5.js";import{a as T}from"./chunk-XYMAXA4B.js";import{a as w}from"./chunk-I6AGLY42.js";import{a as o,b as d,c as f}from"./chunk-YSASWMAG.js";import{b as C}from"./chunk-SY3N2HL3.js";function V(e){return e===5||e===6||e===7}function k(e){return V(e)||e===8||e===9}function E(e){return $(e)||e===4}function H(e){return E(e)||k(e)}function y(e){return e===10||e===11}function P(e){return v(e)||y(e)}function G(e){return e===1}function A(e){return e===2}function R(e){return G(e)||A(e)}function v(e){return e===0||R(e)}function j(e){return v(e)||e===11}function I(e){return v(e)||y(e)}function $(e){return I(e)||B(e)}function B(e){return e===3}function F(e,t){switch(t.textureCoordinateType){case 1:return e.attributes.add("uv0","vec2"),e.varyings.add("vuv0","vec2"),void e.vertex.code.add(o`void forwardTextureCoordinates() { vuv0 = uv0; }`);case 2:return e.attributes.add("uv0","vec2"),e.attributes.add("uvRegion","vec4"),e.varyings.add("vuv0","vec2"),e.varyings.add("vuvRegion","vec4"),void e.vertex.code.add(o`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);default:t.textureCoordinateType;case 0:return void e.vertex.code.add(o`void forwardTextureCoordinates() {}`);case 3:return}}var l=class extends f{constructor(t,r,i){super(t,"vec3",2,(a,n,m,c)=>a.setUniform3fv(t,r(n,m,c),i))}};function b(e){e.fragment.code.add(o`vec4 textureAtlasLookup(sampler2D tex, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
return textureGrad(tex, uvAtlas, dUVdx, dUVdy);
}`)}function L(e,t){let{textureCoordinateType:r}=t;if(r===0||r===3)return;e.include(F,t);let i=r===2;i&&e.include(b),e.fragment.code.add(o`
    vec4 textureLookup(sampler2D tex, vec2 uv) {
      return ${i?"textureAtlasLookup(tex, uv, vuvRegion)":"texture(tex, uv)"};
    }
  `)}var x=class extends f{constructor(t,r,i){super(t,"float",2,(a,n,m)=>a.setUniform1f(t,r(n,m),i))}};var z=1;function le(e,t){if(!v(t.output))return;e.fragment.include(D);let{emissionSource:r,hasEmissiveTextureTransform:i,bindType:a}=t,n=r===3||r===4||r===5;n&&(e.include(L,t),e.fragment.uniforms.add(a===1?new T("texEmission",s=>s.textureEmissive):new w("texEmission",s=>s.textureEmissive)));let m=r===2||n;m&&e.fragment.uniforms.add(a===1?new U("emissiveBaseColor",s=>s.emissiveBaseColor):new l("emissiveBaseColor",s=>s.emissiveBaseColor));let c=r!==0;if(c&&!(r===7||r===6||r===4||r===5)){let s=u=>C(u??0,0,S);e.fragment.uniforms.add(a===1?new h("emissiveStrength",u=>s(u.emissiveStrength)):new x("emissiveStrength",u=>s(u.emissiveStrength)))}let p=r===7,g=r===5,O=r===1||r===6||p;e.fragment.code.add(o`
    vec4 getEmissions(vec3 symbolColor) {
      vec4 emissions = ${m?g?"emissiveSource == 0 ? vec4(emissiveBaseColor, 1.0): vec4(linearizeGamma(symbolColor), 1.0)":"vec4(emissiveBaseColor, 1.0)":O?p?"emissiveSource == 0 ? vec4(0.0): vec4(linearizeGamma(symbolColor), 1.0)":"vec4(linearizeGamma(symbolColor), 1.0)":"vec4(0.0)"};
      ${d(n,`${d(g,`if(emissiveSource == 0) {
              vec4 emissiveFromTex = textureLookup(texEmission, ${i?"emissiveUV":"vuv0"});
              emissions *= vec4(linearizeGamma(emissiveFromTex.rgb), emissiveFromTex.a);
           }`,`vec4 emissiveFromTex = textureLookup(texEmission, ${i?"emissiveUV":"vuv0"});
           emissions *= vec4(linearizeGamma(emissiveFromTex.rgb), emissiveFromTex.a);`)}
        emissions.w = emissions.rgb == vec3(0.0) ? 0.0: emissions.w;`)}
      ${d(c,`emissions.rgb *= emissiveStrength * ${o.float(z)};`)}
      return emissions;
    }
  `)}export{k as a,E as b,H as c,y as d,P as e,G as f,A as g,R as h,v as i,j,I as k,$ as l,B as m,l as n,F as o,L as p,le as q};
