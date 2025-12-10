import{AT as e,CD as t,Qw as n,gh as r}from"./index-BN8X5Ryz.js";import{n as i,t as a}from"./glsl-BMw-Ib6r.js";import{t as o}from"./Uniform-C_fuiTP5.js";import{t as s}from"./Float3DrawUniform-ua6q6ZtZ.js";import{t as c}from"./Float3PassUniform-SaBA6LBM.js";import{t as l}from"./FloatPassUniform-CSAt82xV.js";import{t as u}from"./Texture2DDrawUniform-jqrXjxoW.js";import{t as d}from"./Texture2DPassUniform-DFWoDpEL.js";import{t as f}from"./NoParameters-BDE7RvXT.js";function p(e){return e===3||e===4||e===5||e===6||e===7}function m(e){return b(e)||e===2}function h(e){return e===8||e===9}function g(e){return _(e)||h(e)}function _(e){return e===0}function v(e){return _(e)||e===9}function y(e){return _(e)||h(e)}function b(e){return y(e)||x(e)}function x(e){return e===1}function S(e){return x(e)||p(e)}function C(e,n){switch(n.textureCoordinateType){case 1:e.attributes.add(`uv0`,`vec2`),e.varyings.add(`vuv0`,`vec2`),e.vertex.code.add(i`void forwardTextureCoordinates() { vuv0 = uv0; }`);return;case 2:e.attributes.add(`uv0`,`vec2`),e.attributes.add(`uvRegion`,`vec4`),e.varyings.add(`vuv0`,`vec2`),e.varyings.add(`vuvRegion`,`vec4`),e.vertex.code.add(i`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);return;default:t(n.textureCoordinateType);case 0:e.vertex.code.add(i`void forwardTextureCoordinates() {}`);return;case 3:return}}function w(e){e.fragment.code.add(i`vec4 textureAtlasLookup(sampler2D tex, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
return textureGrad(tex, uvAtlas, dUVdx, dUVdy);
}`)}function T(e,t){let{textureCoordinateType:n}=t;if(n===0||n===3)return;e.include(C,t);let r=n===2;r&&e.include(w),e.fragment.code.add(i`
    vec4 textureLookup(sampler2D tex, vec2 uv) {
      return ${r?`textureAtlasLookup(tex, uv, vuvRegion)`:`texture(tex, uv)`};
    }
  `)}function E(e){e.code.add(i`
    const float GAMMA = ${i.float(r)};
    const float INV_GAMMA = ${i.float(1/r)};

    vec4 delinearizeGamma(vec4 color) {
      return vec4(pow(color.rgb, vec3(INV_GAMMA)), color.a);
    }

    vec3 linearizeGamma(vec3 color) {
      return pow(color, vec3(GAMMA));
    }
  `)}var D=class extends o{constructor(e,t,n){super(e,`float`,2,(r,i,a)=>r.setUniform1f(e,t(i,a),n))}},O=class{constructor(e){this._material=e.material,this._techniques=e.techniques,this._output=e.output}dispose(){}get _stippleTextures(){return this._techniques.context?.stippleTextures}get _markerTextures(){return this._techniques.context?.markerTextures}getTechnique(e,t){return this._techniques.get(e,this._material.getConfiguration(this._output,t))}ensureResources(e){return 2}},k=class extends O{constructor(e){super(e),this._numLoading=0,this._disposed=!1,this._textures=e.textures,this.updateTexture(e.textureId),this._acquire(e.normalTextureId,e=>this._textureNormal=e),this._acquire(e.emissiveTextureId,e=>this._textureEmissive=e),this._acquire(e.occlusionTextureId,e=>this._textureOcclusion=e),this._acquire(e.metallicRoughnessTextureId,e=>this._textureMetallicRoughness=e)}dispose(){super.dispose(),this._texture=e(this._texture),this._textureNormal=e(this._textureNormal),this._textureEmissive=e(this._textureEmissive),this._textureOcclusion=e(this._textureOcclusion),this._textureMetallicRoughness=e(this._textureMetallicRoughness),this._disposed=!0}ensureResources(e){return this._numLoading===0?2:1}get textureBindParameters(){return new j(this._texture?.texture??null,this._textureNormal?.texture??null,this._textureEmissive?.texture??null,this._textureOcclusion?.texture??null,this._textureMetallicRoughness?.texture??null)}updateTexture(t){this._texture!=null&&t===this._texture.id||(this._texture=e(this._texture),this._acquire(t,e=>this._texture=e))}_acquire(t,r){if(t==null)return void r(null);let i=this._textures.acquire(t);if(n(i))return++this._numLoading,void i.then(t=>{if(this._disposed)return e(t),void r(null);r(t)}).finally(()=>--this._numLoading);r(i)}},A=class extends f{constructor(e=null){super(),this.textureEmissive=e}},j=class extends A{constructor(e,t,n,r,i,a,o){super(n),this.texture=e,this.textureNormal=t,this.textureOcclusion=r,this.textureMetallicRoughness=i,this.scale=a,this.normalTextureTransformMatrix=o}};function M(e,t){if(!_(t.output))return;e.fragment.include(E);let{emissionSource:n,hasEmissiveTextureTransform:r,bindType:o}=t,f=n===3||n===4||n===5;f&&(e.include(T,t),e.fragment.uniforms.add(o===1?new d(`texEmission`,e=>e.textureEmissive):new u(`texEmission`,e=>e.textureEmissive)));let p=n===2||f;p&&e.fragment.uniforms.add(o===1?new c(`emissiveBaseColor`,e=>e.emissiveBaseColor):new s(`emissiveBaseColor`,e=>e.emissiveBaseColor));let m=n!==0;m&&!(n===7||n===6||n===4||n===5)&&e.fragment.uniforms.add(o===1?new l(`emissiveStrength`,e=>e.emissiveStrength):new D(`emissiveStrength`,e=>e.emissiveStrength));let h=n===7,g=n===5,v=n===1||n===6||h;e.fragment.code.add(i`
    vec4 getEmissions(vec3 symbolColor) {
      vec4 emissions = ${p?g?`emissiveSource == 0 ? vec4(emissiveBaseColor, 1.0): vec4(linearizeGamma(symbolColor), 1.0)`:`vec4(emissiveBaseColor, 1.0)`:v?h?`emissiveSource == 0 ? vec4(0.0): vec4(linearizeGamma(symbolColor), 1.0)`:`vec4(linearizeGamma(symbolColor), 1.0)`:`vec4(0.0)`};
      ${a(f,`${a(g,`if(emissiveSource == 0) {\n              vec4 emissiveFromTex = textureLookup(texEmission, ${r?`emissiveUV`:`vuv0`});\n              emissions *= vec4(linearizeGamma(emissiveFromTex.rgb), emissiveFromTex.a);\n           }`,`vec4 emissiveFromTex = textureLookup(texEmission, ${r?`emissiveUV`:`vuv0`});\n           emissions *= vec4(linearizeGamma(emissiveFromTex.rgb), emissiveFromTex.a);`)}\n        emissions.w = emissions.rgb == vec3(0.0) ? 0.0: emissions.w;`)}
      ${a(m,`emissions.rgb *= emissiveStrength * ${i.float(1)};`)}
      return emissions;
    }
  `)}export{x as _,E as a,S as c,p as d,v as f,g,h,O as i,_ as l,m,j as n,T as o,b as p,k as r,C as s,M as t,y as u};