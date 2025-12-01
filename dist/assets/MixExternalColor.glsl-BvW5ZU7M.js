import{Bf as e,Ey as t,Iy as n,Ol as r,Z as i,c_ as a,uD as o}from"./index-ByaFsVj4.js";import{s}from"./Emissions.glsl-CK4HR9OW.js";import{n as c,t as l}from"./glsl-B__sVAcg.js";import{t as u}from"./FloatPassUniform-D-_T45xB.js";import{t as d}from"./Texture2DPassUniform-wY08hxIn.js";import{n as f,o as p,s as m}from"./MaterialUtil-tSncuShD.js";import{t as h}from"./Float3BindUniform-DnRIK6cJ.js";import{t as g}from"./Matrix4PassUniform-9Utk6s1j.js";import{t as _}from"./IntegerPassUniform-BWtfz08R.js";import{t as v}from"./Slice.glsl-ILtGSCz4.js";import{t as y}from"./ObjectAndLayerIdColor.glsl-DLOlMhcf.js";import{a as b,n as x,r as S,t as C}from"./VisualVariables.glsl-0raoMJkY.js";import{a as w,i as T,n as E,t as D}from"./AlphaCutoff-qYsC5qb0.js";import{n as O,r as k}from"./View.glsl-DOc5qj3l.js";import{a as A,i as j,n as M,o as N,r as P,t as F}from"./Transform.glsl-BzRx33WP.js";import{s as I}from"./SnowCover.glsl-BGaHYUWy.js";function L(e,t){switch(e.fragment.code.add(c`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`),t.normalType){case 1:e.attributes.add(`normalCompressed`,`vec2`),e.vertex.code.add(c`vec3 decompressNormal(vec2 normal) {
float z = 1.0 - abs(normal.x) - abs(normal.y);
return vec3(normal + sign(normal) * min(z, 0.0), z);
}
vec3 normalModel() {
return decompressNormal(normalCompressed);
}`);break;case 0:e.attributes.add(`normal`,`vec3`),e.vertex.code.add(c`vec3 normalModel() {
return normal;
}`);break;default:o(t.normalType);case 2:case 3:}}function R(e,t){switch(t.normalType){case 0:case 1:e.include(L,t),e.varyings.add(`vNormalWorld`,`vec3`),e.varyings.add(`vNormalView`,`vec3`),e.vertex.uniforms.add(new A(`transformNormalGlobalFromModel`,e=>e.transformNormalGlobalFromModel),new w(`transformNormalViewFromGlobal`,e=>e.transformNormalViewFromGlobal)).code.add(c`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case 2:e.vertex.code.add(c`void forwardNormal() {}`);break;default:o(t.normalType);case 3:}}var z=class extends P{constructor(){super(...arguments),this.transformNormalViewFromGlobal=t()}},B=class extends j{constructor(){super(...arguments),this.transformNormalGlobalFromModel=t(),this.toMapSpace=i()}};function V(e){e.vertex.code.add(c`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}function H(e,t){t.instancedColor?(e.attributes.add(`instanceColor`,`vec4`),e.vertex.include(b),e.vertex.include(S),e.vertex.include(x),e.vertex.code.add(c`
      MaskedColor applyInstanceColor(MaskedColor color) {
        return multiplyMaskedColors( color, createMaskedFromUInt8NaNColor(${`instanceColor`}));
      }
    `)):e.vertex.code.add(c`MaskedColor applyInstanceColor(MaskedColor color) {
return color;
}`)}var U=t();function W(t,i){let{hasModelTransformation:a,instancedDoublePrecision:o,instanced:s,output:l,hasVertexTangents:u}=i;a&&(t.vertex.uniforms.add(new g(`model`,t=>t.modelTransformation??e)),t.vertex.uniforms.add(new w(`normalLocalOriginFromModel`,t=>(n(U,t.modelTransformation??e),U)))),s&&o&&(t.attributes.add(`instanceModelOriginHi`,`vec3`),t.attributes.add(`instanceModelOriginLo`,`vec3`),t.attributes.add(`instanceModel`,`mat3`),t.attributes.add(`instanceModelNormal`,`mat3`));let d=t.vertex;o&&(d.include(N,i),d.uniforms.add(new h(`viewOriginHi`,e=>p(r(G,e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]),G)),new h(`viewOriginLo`,e=>m(r(G,e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]),G)))),d.code.add(c`
    vec3 getVertexInLocalOriginSpace() {
      return ${a?o?`(model * vec4(instanceModel * localPosition().xyz, 1.0)).xyz`:`(model * localPosition()).xyz`:o?`instanceModel * localPosition().xyz`:`localPosition().xyz`};
    }

    vec3 subtractOrigin(vec3 _pos) {
      ${o?c`
          // Issue: (should be resolved now with invariant position) https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/56280
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -instanceModelOriginHi, -instanceModelOriginLo);
          return _pos - originDelta;`:`return vpos;`}
    }
    `),d.code.add(c`
    vec3 dpNormal(vec4 _normal) {
      return normalize(${a?o?`normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz)`:`normalLocalOriginFromModel * _normal.xyz`:o?`instanceModelNormal * _normal.xyz`:`_normal.xyz`});
    }
    `),l===2&&(k(d),d.code.add(c`
    vec3 dpNormalView(vec4 _normal) {
      return normalize((viewNormal * ${a?o?`vec4(normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz), 1.0)`:`vec4(normalLocalOriginFromModel * _normal.xyz, 1.0)`:o?`vec4(instanceModelNormal * _normal.xyz, 1.0)`:`_normal`}).xyz);
    }
    `)),u&&d.code.add(c`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${a?o?`return vec4(normalLocalOriginFromModel * (instanceModelNormal * _tangent.xyz), _tangent.w);`:`return vec4(normalLocalOriginFromModel * _tangent.xyz, _tangent.w);`:o?`return vec4(instanceModelNormal * _tangent.xyz, _tangent.w);`:`return _tangent;`}
    }`)}var G=a();function K(e,t){e.varyings.add(`colorMixMode`,`int`),e.varyings.add(`opacityMixMode`,`int`),e.vertex.uniforms.add(new _(`symbolColorMixMode`,e=>f[e.colorMixMode])),t.hasSymbolColors?(e.vertex.include(b),e.vertex.include(S),e.vertex.include(x),e.attributes.add(`symbolColor`,`vec4`),e.vertex.code.add(c`
    MaskedColor applySymbolColor(MaskedColor color) {
      return multiplyMaskedColors(color, createMaskedFromUInt8NaNColor(${`symbolColor`}));
    }
  `)):e.vertex.code.add(c`MaskedColor applySymbolColor(MaskedColor color) {
return color;
}`),e.vertex.code.add(c`
    void forwardColorMixMode(bvec4 mask) {
      colorMixMode = mask.r ? ${c.int(f.ignore)} : symbolColorMixMode;
      opacityMixMode = mask.a ? ${c.int(f.ignore)} : symbolColorMixMode;
    }
  `)}function q(e,t){J(e,t,new u(`textureAlphaCutoff`,e=>e.textureAlphaCutoff))}function J(e,t,n){let r=e.fragment,i=t.alphaDiscardMode,a=i===0;i!==2&&i!==3||r.uniforms.add(n),r.code.add(c`
    void discardOrAdjustAlpha(inout vec4 color) {
      ${i===1?`color.a = 1.0;`:`if (color.a < ${a?c.float(D):`textureAlphaCutoff`}) {\n              discard;\n             } ${l(i===2,`else { color.a = 1.0; }`)}`}
    }
  `)}function Y(e,t){let{vertex:n,fragment:r,varyings:i}=e,{hasColorTexture:a,alphaDiscardMode:o}=t,u=a&&o!==1,{output:f,normalType:p,hasColorTextureTransform:m}=t;switch(f){case 1:O(n,t),e.include(F),r.include(v,t),e.include(s,t),u&&r.uniforms.add(new d(`tex`,e=>e.texture)),n.main.add(c`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),e.include(q,t),r.main.add(c`
        discardBySlice(vpos);
        ${l(u,c`vec4 texColor = texture(tex, ${m?`colorUV`:`vuv0`});
                discardOrAdjustAlpha(texColor);`)}`);break;case 3:case 4:case 5:case 6:case 9:O(n,t),e.include(F),e.include(s,t),e.include(C,t),e.include(I,t),r.include(v,t),e.include(y,t),M(e),i.add(`depth`,`float`,{invariant:!0}),u&&r.uniforms.add(new d(`tex`,e=>e.texture)),n.main.add(c`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
forwardTextureCoordinates();
forwardObjectAndLayerIdColor();`),e.include(q,t),r.main.add(c`
        discardBySlice(vpos);
        ${l(u,c`vec4 texColor = texture(tex, ${m?`colorUV`:`vuv0`});
               discardOrAdjustAlpha(texColor);`)}
        ${f===9?c`outputObjectAndLayerIdColor();`:c`outputDepth(depth);`}`);break;case 2:{O(n,t),e.include(F),e.include(L,t),e.include(R,t),e.include(s,t),e.include(C,t),u&&r.uniforms.add(new d(`tex`,e=>e.texture)),p===2&&i.add(`vPositionView`,`vec3`,{invariant:!0});let a=p===0||p===1;n.main.add(c`
        vpos = getVertexInLocalOriginSpace();
        ${a?c`vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:c`vPositionView = (view * vec4(vpos, 1.0)).xyz;`}
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();`),r.include(v,t),e.include(q,t),r.main.add(c`
        discardBySlice(vpos);
        ${l(u,c`vec4 texColor = texture(tex, ${m?`colorUV`:`vuv0`});
                discardOrAdjustAlpha(texColor);`)}

        ${p===2?c`vec3 normal = screenDerivativeNormal(vPositionView);`:c`vec3 normal = normalize(vNormalWorld);
                    if (gl_FrontFacing == false){
                      normal = -normal;
                    }`}
        fragColor = vec4(0.5 + 0.5 * normal, 1.0);`);break}case 8:O(n,t),e.include(F),e.include(s,t),e.include(C,t),u&&r.uniforms.add(new d(`tex`,e=>e.texture)),n.main.add(c`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),r.include(v,t),e.include(q,t),e.include(E,t),r.main.add(c`
        discardBySlice(vpos);
        ${l(u,c`vec4 texColor = texture(tex, ${m?`colorUV`:`vuv0`});
                discardOrAdjustAlpha(texColor);`)}
        calculateOcclusionAndOutputHighlight();`)}}function X(e){e.include(T),e.code.add(c`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in macOS using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${c.int(1)}) {
        return allMixed;
      }
      if (mode == ${c.int(2)}) {
        return internalMixed;
      }
      if (mode == ${c.int(3)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in macOS using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${c.int(2)}) {
        return internalMixed;
      }
      if (mode == ${c.int(3)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}export{W as a,B as c,L as d,K as i,R as l,Y as n,H as o,q as r,V as s,X as t,z as u};