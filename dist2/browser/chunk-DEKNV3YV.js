import{f as J}from"./chunk-XXZA2B2H.js";import{a as B,b as E,c as G,e as Y,f}from"./chunk-XKSEETOM.js";import{a as q}from"./chunk-NI2AJGOE.js";import{b as $,c as j,i as g}from"./chunk-R6ZCYZUZ.js";import{a as z}from"./chunk-GUO4QNNT.js";import{a as S}from"./chunk-7JJBCEUY.js";import{a as y,b as V,c as h,e as b}from"./chunk-ERWV7HUE.js";import{a as n}from"./chunk-P5HKTOA3.js";import{b as v}from"./chunk-6UBDFNHA.js";import{c as x,d as R,h as H,j as W}from"./chunk-P4VQAMX6.js";import{o as p}from"./chunk-ELAM4BPJ.js";import{a as I}from"./chunk-MI7CDTQL.js";import{a as L}from"./chunk-6ZGVESB5.js";import{a as u}from"./chunk-XYMAXA4B.js";import{a as e,b as m}from"./chunk-YSASWMAG.js";import{a as F}from"./chunk-YMQ4BGWF.js";import{d as A}from"./chunk-JJQR3F6K.js";import{c as k}from"./chunk-6DXT34WA.js";import{a as _}from"./chunk-7VB5JZ2H.js";import{q as D}from"./chunk-B2QABUVD.js";import{a as C,c}from"./chunk-NYQXZQKP.js";function O(o,r){switch(o.fragment.code.add(e`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`),r.normalType){case 1:o.attributes.add("normalCompressed","vec2"),o.vertex.code.add(e`vec3 decompressNormal(vec2 normal) {
float z = 1.0 - abs(normal.x) - abs(normal.y);
return vec3(normal + sign(normal) * min(z, 0.0), z);
}
vec3 normalModel() {
return decompressNormal(normalCompressed);
}`);break;case 0:o.attributes.add("normal","vec3"),o.vertex.code.add(e`vec3 normalModel() {
return normal;
}`);break;default:r.normalType;case 2:case 3:}}function X(o,r){let{vertex:t,varyings:a}=o;switch(r.normalType){case 0:case 1:o.include(O,r),a.add("vNormalWorld","vec3"),a.add("vNormalView","vec3"),t.uniforms.add(new n("transformNormalViewFromGlobal",l=>l.transformNormalViewFromGlobal)),t.code.add(e`void forwardNormal() {
vNormalWorld = normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case 2:o.vertex.code.add(e`void forwardNormal() {}`);break;default:r.normalType;case 3:}}var K=class extends E{constructor(){super(...arguments),this.transformNormalViewFromGlobal=C()}},Q=class extends G{constructor(){super(...arguments),this.toMapSpace=F()}};function xo(o,r){r.instancedColor?(o.attributes.add("instanceColor","vec4"),o.vertex.include(y),o.vertex.include(V),o.vertex.include(h),o.vertex.code.add(e`
      MaskedColor applyInstanceColor(MaskedColor color) {
        return multiplyMaskedColors( color, createMaskedFromUInt8NaNColor(${"instanceColor"}));
      }
    `)):o.vertex.code.add(e`MaskedColor applyInstanceColor(MaskedColor color) {
return color;
}`)}var Z=C();function ko(o,r){let{hasModelTransformation:t,instancedDoublePrecision:a,instanced:l,output:U,hasVertexTangents:P}=r;t&&(o.vertex.uniforms.add(new q("model",s=>s.modelTransformation??A)),o.vertex.uniforms.add(new n("normalLocalOriginFromModel",s=>(D(Z,s.modelTransformation??A),Z)))),l&&a&&(o.attributes.add("instanceModelOriginHi","vec3"),o.attributes.add("instanceModelOriginLo","vec3"),o.attributes.add("instanceModel","mat3"),o.attributes.add("instanceModelNormal","mat3"));let i=o.vertex;a&&(i.include(B),i.uniforms.add(new I("viewOriginHi",s=>$(k(N,s.camera.viewInverseTransposeMatrix[3],s.camera.viewInverseTransposeMatrix[7],s.camera.viewInverseTransposeMatrix[11]),N)),new I("viewOriginLo",s=>j(k(N,s.camera.viewInverseTransposeMatrix[3],s.camera.viewInverseTransposeMatrix[7],s.camera.viewInverseTransposeMatrix[11]),N)))),i.code.add(e`
    vec3 getVertexInLocalOriginSpace() {
      return ${t?a?"(model * vec4(instanceModel * localPosition().xyz, 1.0)).xyz":"(model * localPosition()).xyz":a?"instanceModel * localPosition().xyz":"localPosition().xyz"};
    }

    vec3 subtractOrigin(vec3 _pos) {
      ${a?e`
          // Issue: (should be resolved now with invariant position) https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/56280
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -instanceModelOriginHi, -instanceModelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),i.code.add(e`
    vec3 dpNormal(vec4 _normal) {
      return normalize(${t?a?"normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz)":"normalLocalOriginFromModel * _normal.xyz":a?"instanceModelNormal * _normal.xyz":"_normal.xyz"});
    }
    `),U===4&&(R(i),i.code.add(e`
    vec3 dpNormalView(vec4 _normal) {
      return normalize((viewNormal * ${t?a?"vec4(normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz), 1.0)":"vec4(normalLocalOriginFromModel * _normal.xyz, 1.0)":a?"vec4(instanceModelNormal * _normal.xyz, 1.0)":"_normal"}).xyz);
    }
    `)),P&&i.code.add(e`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${t?a?"return vec4(normalLocalOriginFromModel * (instanceModelNormal * _tangent.xyz), _tangent.w);":"return vec4(normalLocalOriginFromModel * _tangent.xyz, _tangent.w);":a?"return vec4(instanceModelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}
    }`)}var N=_();function zo(o,r){o.varyings.add("colorMixMode","int"),o.varyings.add("opacityMixMode","int"),o.vertex.uniforms.add(new z("symbolColorMixMode",t=>g[t.colorMixMode])),r.hasSymbolColors?(o.vertex.include(y),o.vertex.include(V),o.vertex.include(h),o.attributes.add("symbolColor","vec4"),o.vertex.code.add(e`
    MaskedColor applySymbolColor(MaskedColor color) {
      return multiplyMaskedColors(color, createMaskedFromUInt8NaNColor(${"symbolColor"}));
    }
  `)):o.vertex.code.add(e`MaskedColor applySymbolColor(MaskedColor color) {
return color;
}`),o.vertex.code.add(e`
    void forwardColorMixMode(bvec4 mask) {
      colorMixMode = mask.r ? ${e.int(g.ignore)} : symbolColorMixMode;
      opacityMixMode = mask.a ? ${e.int(g.ignore)} : symbolColorMixMode;
    }
  `)}function M(o,r){ro(o,r,new L("textureAlphaCutoff",t=>t.textureAlphaCutoff))}function ro(o,r,t){let a=o.fragment;switch(a.code.add("void discardOrAdjustAlpha(inout vec4 color) {"),r.alphaDiscardMode){case 1:a.code.add("color.a = 1.0;");break;case 0:a.include(H),a.code.add("if (color.a < alphaCutoff) discard;");break;case 3:a.uniforms.add(t).code.add("if (color.a < textureAlphaCutoff) discard;");break;case 2:a.uniforms.add(t).code.add(`
        if (color.a < textureAlphaCutoff) discard;
        color.a = 1.0;
      `);break;case 4:break;default:r.alphaDiscardMode}a.code.add("}")}function ar(o,r){let{vertex:t,fragment:a,varyings:l}=o,{hasColorTexture:U,alphaDiscardMode:P}=r,i=U&&P!==1,{output:s,normalType:w,hasColorTextureTransform:T}=r;switch(s){case 3:x(t,r),o.include(f),a.include(v,r),o.include(p,r),i&&a.uniforms.add(new u("tex",d=>d.texture)),t.main.add(e`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),o.include(M,r),a.main.add(e`
        discardBySlice(vpos);
        ${m(i,e`vec4 texColor = texture(tex, ${T?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}`);break;case 5:case 6:case 7:case 8:case 11:x(t,r),o.include(f),o.include(p,r),o.include(b,r),o.include(J,r),a.include(v,r),o.include(S,r),Y(o),l.add("depth","float",{invariant:!0}),i&&a.uniforms.add(new u("tex",d=>d.texture)),t.main.add(e`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
forwardTextureCoordinates();
forwardObjectAndLayerIdColor();`),o.include(M,r),a.main.add(e`
        discardBySlice(vpos);
        ${m(i,e`vec4 texColor = texture(tex, ${T?"colorUV":"vuv0"});
               discardOrAdjustAlpha(texColor);`)}
        ${s===11?e`outputObjectAndLayerIdColor();`:e`outputDepth(depth);`}`);break;case 4:{x(t,r),o.include(f),o.include(O,r),o.include(X,r),o.include(p,r),o.include(b,r),i&&a.uniforms.add(new u("tex",oo=>oo.texture)),w===2&&l.add("vPositionView","vec3",{invariant:!0});let d=w===0||w===1;t.main.add(e`
        vpos = getVertexInLocalOriginSpace();
        ${d?e`vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:e`vPositionView = (view * vec4(vpos, 1.0)).xyz;`}
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();`),a.include(v,r),o.include(M,r),a.main.add(e`
        discardBySlice(vpos);
        ${m(i,e`vec4 texColor = texture(tex, ${T?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}

        ${w===2?e`vec3 normal = screenDerivativeNormal(vPositionView);`:e`vec3 normal = normalize(vNormalWorld);
                    if (gl_FrontFacing == false){
                      normal = -normal;
                    }`}
        fragColor = vec4(0.5 + 0.5 * normal, 1.0);`);break}case 10:x(t,r),o.include(f),o.include(p,r),o.include(b,r),i&&a.uniforms.add(new u("tex",d=>d.texture)),t.main.add(e`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),a.include(v,r),o.include(M,r),o.include(W,r),a.main.add(e`
        discardBySlice(vpos);
        ${m(i,e`vec4 texColor = texture(tex, ${T?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}
        calculateOcclusionAndOutputHighlight();`)}}function dr(o,r){r.hasColorTextureTransform?(o.varyings.add("colorUV","vec2"),o.vertex.uniforms.add(new n("colorTextureTransformMatrix",t=>t.colorTextureTransformMatrix??c)).code.add(e`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):o.vertex.code.add(e`void forwardColorUV(){}`)}function lr(o,r){r.hasNormalTextureTransform&&r.textureCoordinateType!==0?(o.varyings.add("normalUV","vec2"),o.vertex.uniforms.add(new n("normalTextureTransformMatrix",t=>t.normalTextureTransformMatrix??c)).code.add(e`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):o.vertex.code.add(e`void forwardNormalUV(){}`)}function cr(o,r){r.hasEmissionTextureTransform&&r.textureCoordinateType!==0?(o.varyings.add("emissiveUV","vec2"),o.vertex.uniforms.add(new n("emissiveTextureTransformMatrix",t=>t.emissiveTextureTransformMatrix??c)).code.add(e`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):o.vertex.code.add(e`void forwardEmissiveUV(){}`)}function mr(o,r){r.hasOcclusionTextureTransform&&r.textureCoordinateType!==0?(o.varyings.add("occlusionUV","vec2"),o.vertex.uniforms.add(new n("occlusionTextureTransformMatrix",t=>t.occlusionTextureTransformMatrix??c)).code.add(e`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):o.vertex.code.add(e`void forwardOcclusionUV(){}`)}function ur(o,r){r.hasMetallicRoughnessTextureTransform&&r.textureCoordinateType!==0?(o.varyings.add("metallicRoughnessUV","vec2"),o.vertex.uniforms.add(new n("metallicRoughnessTextureTransformMatrix",t=>t.metallicRoughnessTextureTransformMatrix??c)).code.add(e`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):o.vertex.code.add(e`void forwardMetallicRoughnessUV(){}`)}export{O as a,X as b,K as c,Q as d,xo as e,ko as f,zo as g,M as h,ar as i,dr as j,lr as k,cr as l,mr as m,ur as n};
